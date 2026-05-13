const fs = require('fs');
const { sendJson } = require('./_shared');

module.exports = async function handler(req, res) {
  const workerConfigured = Boolean(process.env.CONVERSION_WORKER_URL);
  const localInkscapeAvailable = fs.existsSync('/Applications/Inkscape.app/Contents/MacOS/inkscape');

  sendJson(res, 200, {
    converterAvailable: workerConfigured || localInkscapeAvailable,
    localInkscapeAvailable,
    workerConfigured,
  });
};
