const fs = require('fs/promises');
const { optimize } = require('svgo');

const UNSUPPORTED_FEATURES = [
  { name: 'embedded raster image', pattern: /<image\b/i },
  { name: 'filter effect', pattern: /<filter\b|filter=/i },
  { name: 'mask', pattern: /<mask\b|mask=/i },
  { name: 'gradient', pattern: /<linearGradient\b|<radialGradient\b|url\(#/i },
  { name: 'clip path', pattern: /<clipPath\b|clip-path=/i },
  { name: 'opacity', pattern: /\sopacity=|fill-opacity=|stroke-opacity=/i },
];

async function normalizeSvgFile(inputPath, outputPath) {
  const svg = await fs.readFile(inputPath, 'utf8');
  const normalized = normalizeSvg(svg, inputPath);
  await fs.writeFile(outputPath, normalized);
  return outputPath;
}

function normalizeSvg(svg, inputPath = 'input.svg') {
  const result = optimize(svg, {
    path: inputPath,
    multipass: true,
    plugins: [
      'removeDoctype',
      'removeXMLProcInst',
      'removeComments',
      'removeMetadata',
      'removeEditorsNSData',
      'cleanupAttrs',
      'convertStyleToAttrs',
      {
        name: 'preset-default',
        params: {
          overrides: {
            cleanupIds: false,
            collapseGroups: false,
            convertColors: false,
            convertPathData: false,
            mergePaths: false,
            removeHiddenElems: false,
            removeUnknownsAndDefaults: false,
            removeUselessStrokeAndFill: false,
          },
        },
      },
      'sortAttrs',
    ],
  });

  if (result.error) {
    throw new Error(`Falha ao normalizar SVG: ${result.error}`);
  }

  return result.data;
}

function inspectSvg(filePath) {
  const svg = require('fs').readFileSync(filePath, 'utf8');
  const warnings = UNSUPPORTED_FEATURES
    .filter((feature) => feature.pattern.test(svg))
    .map((feature) => feature.name);

  return {
    pathCount: countMatches(svg, /<path\b/gi),
    shapeCount: countMatches(svg, /<(rect|circle|ellipse|line|polyline|polygon)\b/gi),
    textCount: countMatches(svg, /<text\b/gi),
    warnings,
  };
}

function countMatches(text, pattern) {
  return (text.match(pattern) || []).length;
}

module.exports = {
  normalizeSvgFile,
  normalizeSvg,
  inspectSvg,
};
