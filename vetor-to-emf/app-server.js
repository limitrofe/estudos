const fs = require('fs');
const os = require('os');
const path = require('path');
const express = require('express');
const multer = require('multer');
const { convertToEditableEmf } = require('./convert-to-emf');
const { getConverterStatus } = require('./converter-availability');

const app = express();
const upload = multer({
  dest: path.join(os.tmpdir(), 'vector-to-emf-ui-uploads'),
  limits: {
    fileSize: Number(process.env.MAX_UPLOAD_BYTES || 50 * 1024 * 1024),
  },
});

app.set('trust proxy', true);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/status', (req, res) => {
  res.json(getConverterStatus());
});

app.post('/api/generate', upload.single('file'), async (req, res, next) => {
  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'vector-to-emf-ui-'));

  try {
    const converterStatus = getConverterStatus();
    if (!converterStatus.converterAvailable) {
      res.status(503).json({
        error: 'Conversor indisponivel. Configure CONVERSION_WORKER_URL na Vercel ou instale Inkscape no ambiente local.',
      });
      return;
    }

    if (!req.file) {
      res.status(400).json({ error: 'Envie um arquivo .ai ou .pdf.' });
      return;
    }

    const originalName = sanitizeFilename(req.file.originalname || 'arte.ai');
    const inputPath = path.join(tempDir, originalName);
    fs.renameSync(req.file.path, inputPath);

    const conversion = process.env.CONVERSION_WORKER_URL
      ? { emfPath: await convertWithWorker(inputPath, originalName, tempDir), report: { warnings: [] } }
      : await convertToEditableEmf(inputPath, { outputDir: path.join(tempDir, 'output') });
    const outputName = `${path.basename(originalName, path.extname(originalName))}.emf`;

    res.setHeader('Content-Type', 'image/x-emf');
    res.setHeader('Content-Disposition', `attachment; filename="${outputName}"`);
    res.setHeader('X-Vector-Report', encodeURIComponent(JSON.stringify(conversion.report)));
    res.download(conversion.emfPath, outputName, (err) => {
      fs.rm(tempDir, { recursive: true, force: true }, () => {});
      if (err && !res.headersSent) {
        next(err);
      }
    });
  } catch (err) {
    fs.rm(tempDir, { recursive: true, force: true }, () => {});
    next(err);
  }
});

app.use((err, req, res, next) => {
  if (res.headersSent) {
    next(err);
    return;
  }

  res.status(500).json({
    error: err.message,
  });
});

function sanitizeFilename(filename) {
  return filename.replace(/[^\w.\- ]+/g, '_');
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

const port = Number(process.env.PORT || 3000);
app.listen(port, () => {
  console.log(`Interface rodando em http://localhost:${port}`);
});
