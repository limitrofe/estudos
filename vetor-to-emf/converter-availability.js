const fs = require('fs');
const { execFileSync } = require('child_process');

function isCommandAvailable(command) {
  try {
    execFileSync('which', [command], { stdio: 'ignore' });
    return true;
  } catch {
    return false;
  }
}

function getConverterStatus() {
  const workerConfigured = Boolean(process.env.CONVERSION_WORKER_URL);
  const localInkscapeAvailable = (
    isCommandAvailable('inkscape') ||
    fs.existsSync('/Applications/Inkscape.app/Contents/MacOS/inkscape')
  );

  return {
    converterAvailable: workerConfigured || localInkscapeAvailable,
    localInkscapeAvailable,
    workerConfigured,
  };
}

module.exports = {
  getConverterStatus,
};
