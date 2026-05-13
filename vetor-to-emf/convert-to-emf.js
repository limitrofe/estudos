const fs = require('fs');
const path = require('path');
const { execFile } = require('child_process');
const { normalizeSvgFile, inspectSvg } = require('./svg-normalizer');

const INKSCAPE_PATHS = [
  process.env.INKSCAPE_PATH,
  '/Applications/Inkscape.app/Contents/MacOS/inkscape',
  'inkscape',
].filter(Boolean);

const PSTOEDIT_PATHS = [
  process.env.PSTOEDIT_PATH,
  'pstoedit',
].filter(Boolean);

function findExistingCommand(candidates) {
  return candidates.find((candidate) => {
    if (!candidate.includes('/')) {
      return true;
    }

    return fs.existsSync(candidate);
  });
}

async function convertToEditableEmf(inputPath, options = {}) {
  const resolvedInput = path.resolve(inputPath);
  const outputDir = path.resolve(options.outputDir || 'output');
  const baseName = path.basename(resolvedInput, path.extname(resolvedInput));

  if (!fs.existsSync(resolvedInput)) {
    throw new Error(`Arquivo de origem nao encontrado: ${resolvedInput}`);
  }

  fs.mkdirSync(outputDir, { recursive: true });

  const rawSvgPath = path.join(outputDir, `${baseName}.raw.svg`);
  const cleanSvgPath = path.join(outputDir, `${baseName}.editable.svg`);
  const emfPath = path.join(outputDir, `${baseName}.emf`);

  await exportSourceToSvg(resolvedInput, rawSvgPath);
  await normalizeSvgFile(rawSvgPath, cleanSvgPath);
  await exportSvgToEmf(cleanSvgPath, emfPath, outputDir);

  return {
    sourcePath: resolvedInput,
    rawSvgPath,
    cleanSvgPath,
    emfPath,
    report: inspectSvg(cleanSvgPath),
  };
}

async function exportSourceToSvg(inputPath, outputPath) {
  const inkscape = findExistingCommand(INKSCAPE_PATHS);

  await runCommand(inkscape, [
    inputPath,
    '--pdf-page=1',
    '--pdf-poppler',
    '--export-text-to-path',
    '--export-overwrite',
    `--export-filename=${outputPath}`,
  ], 'Inkscape nao esta instalado. Instale o Inkscape para converter AI/PDF para SVG/EMF.');
}

async function exportSvgToEmf(svgPath, emfPath, workDir) {
  const inkscape = findExistingCommand(INKSCAPE_PATHS);

  try {
    await runCommand(inkscape, [
      svgPath,
      '--export-overwrite',
      `--export-filename=${emfPath}`,
    ], 'Inkscape nao esta instalado. Instale o Inkscape para exportar EMF.');
  } catch (err) {
    await exportSvgToEmfWithPstoedit(svgPath, emfPath, workDir, err);
  }

  if (!fs.existsSync(emfPath)) {
    throw new Error(`A conversao terminou, mas o EMF nao foi criado: ${emfPath}`);
  }
}

async function exportSvgToEmfWithPstoedit(svgPath, emfPath, workDir, originalError) {
  const inkscape = findExistingCommand(INKSCAPE_PATHS);
  const pstoedit = findExistingCommand(PSTOEDIT_PATHS);
  const intermediatePdf = path.join(workDir, `${path.basename(svgPath, '.svg')}.pdf`);

  try {
    await runCommand(inkscape, [
      svgPath,
      '--export-overwrite',
      `--export-filename=${intermediatePdf}`,
    ], 'Inkscape nao esta instalado. Instale o Inkscape para gerar o PDF intermediario.');

    await runCommand(pstoedit, [
      '-f',
      'emf',
      intermediatePdf,
      emfPath,
    ], 'pstoedit nao esta instalado. Instale pstoedit ou use uma versao do Inkscape que exporte EMF.');
  } catch (fallbackError) {
    throw new Error(
      `Falha ao gerar EMF com Inkscape e fallback pstoedit.\n` +
      `Inkscape: ${originalError.message}\n` +
      `Fallback: ${fallbackError.message}`
    );
  }
}

function runCommand(command, args, missingMessage) {
  return new Promise((resolve, reject) => {
    execFile(command, args, (err, stdout, stderr) => {
      if (err) {
        const details = stderr || stdout || err.message;
        reject(new Error(err.code === 'ENOENT' ? missingMessage : details.trim()));
        return;
      }

      resolve({ stdout, stderr });
    });
  });
}

module.exports = {
  convertToEditableEmf,
};
