const fs = require('fs');
const os = require('os');
const path = require('path');

function sendJson(res, statusCode, data) {
  res.statusCode = statusCode;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.end(JSON.stringify(data));
}

function sendError(res, err, statusCode = 500) {
  sendJson(res, statusCode, {
    error: err.message || String(err),
  });
}

function makeTempDir() {
  return fs.mkdtempSync(path.join(os.tmpdir(), 'vector-to-emf-vercel-'));
}

function sanitizeFilename(filename) {
  return String(filename || 'arte.ai').replace(/[^\w.\- ]+/g, '_');
}

function cleanupDir(dir) {
  fs.rm(dir, { recursive: true, force: true }, () => {});
}

module.exports = {
  sendJson,
  sendError,
  makeTempDir,
  sanitizeFilename,
  cleanupDir,
};
