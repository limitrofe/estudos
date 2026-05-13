const fs = require('fs');
const path = require('path');
const { formidable } = require('formidable');
const { convertToEditableEmf } = require('../convert-to-emf');
const { getConverterStatus } = require('../converter-availability');
const {
  cleanupDir,
  makeTempDir,
  sanitizeFilename,
  sendError,
  sendJson,
} = require('./_shared');

module.exports.config = {
  api: {
    bodyParser: false,
  },
};

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    sendJson(res, 405, { error: 'Metodo nao permitido.' });
    return;
  }

  const tempDir = makeTempDir();

  try {
    const converterStatus = getConverterStatus();
    if (!converterStatus.converterAvailable) {
      sendJson(res, 503, {
        error: 'Conversor indisponivel. Configure CONVERSION_WORKER_URL na Vercel ou instale Inkscape no ambiente local.',
      });
      return;
    }

    const { files } = await parseForm(req, tempDir);
    const uploadedFile = getUploadedFile(files.file);

    if (!uploadedFile) {
      sendJson(res, 400, { error: 'Envie um arquivo .ai ou .pdf.' });
      return;
    }

    const originalName = sanitizeFilename(uploadedFile.originalFilename || uploadedFile.newFilename || 'arte.ai');
    const outputName = `${path.basename(originalName, path.extname(originalName))}.emf`;
    const conversion = process.env.CONVERSION_WORKER_URL
      ? await convertWithWorker(uploadedFile.filepath, originalName, tempDir)
      : await convertToEditableEmf(uploadedFile.filepath, { outputDir: path.join(tempDir, 'output') });

    const emfPath = typeof conversion === 'string' ? conversion : conversion.emfPath;
    const report = typeof conversion === 'string'
      ? { warnings: [] }
      : conversion.report;

    res.statusCode = 200;
    res.setHeader('Content-Type', 'image/x-emf');
    res.setHeader('Content-Disposition', `attachment; filename="${outputName}"`);
    res.setHeader('X-Vector-Report', encodeURIComponent(JSON.stringify(report)));
    fs.createReadStream(emfPath).pipe(res);
  } catch (err) {
    sendError(res, err);
  } finally {
    res.on('finish', () => cleanupDir(tempDir));
    res.on('close', () => cleanupDir(tempDir));
  }
};

function parseForm(req, uploadDir) {
  const form = formidable({
    uploadDir,
    keepExtensions: true,
    maxFileSize: Number(process.env.MAX_UPLOAD_BYTES || 50 * 1024 * 1024),
  });

  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) {
        reject(err);
        return;
      }

      resolve({ fields, files });
    });
  });
}

function getUploadedFile(file) {
  return Array.isArray(file) ? file[0] : file;
}

async function convertWithWorker(filePath, originalName, tempDir) {
  const form = new FormData();
  const source = fs.readFileSync(filePath);
  form.append('file', new Blob([source]), originalName);

  const response = await fetch(`${process.env.CONVERSION_WORKER_URL.replace(/\/$/, '')}/convert`, {
    method: 'POST',
    body: form,
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Worker de conversao falhou: ${text}`);
  }

  const outputPath = path.join(tempDir, `${path.basename(originalName, path.extname(originalName))}.emf`);
  const buffer = Buffer.from(await response.arrayBuffer());
  fs.writeFileSync(outputPath, buffer);

  return outputPath;
}
