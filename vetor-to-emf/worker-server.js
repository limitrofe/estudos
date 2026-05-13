const fs = require('fs');
const os = require('os');
const path = require('path');
const express = require('express');
const multer = require('multer');
const { convertToEditableEmf } = require('./convert-to-emf');

const app = express();
const upload = multer({
  dest: path.join(os.tmpdir(), 'vector-to-emf-uploads'),
  limits: {
    fileSize: Number(process.env.MAX_UPLOAD_BYTES || 50 * 1024 * 1024),
  },
});

app.get('/health', (req, res) => {
  res.json({ ok: true });
});

app.post('/convert', upload.single('file'), async (req, res, next) => {
  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'vector-to-emf-'));

  try {
    if (!req.file) {
      res.status(400).json({ error: 'Envie o arquivo no campo multipart "file".' });
      return;
    }

    const originalName = req.file.originalname || 'input.ai';
    const inputPath = path.join(tempDir, originalName);
    fs.renameSync(req.file.path, inputPath);

    const conversion = await convertToEditableEmf(inputPath, { outputDir: tempDir });
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

const port = Number(process.env.PORT || 3001);
app.listen(port, () => {
  console.log(`Vector to EMF worker rodando em http://localhost:${port}`);
});
