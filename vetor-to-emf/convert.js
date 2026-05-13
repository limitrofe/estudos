const { convertToEditableEmf } = require('./convert-to-emf');

async function main() {
  const inputPath = process.argv[2] || 'matriz.ai';
  const outputDir = process.argv[3] || 'output';
  const conversion = await convertToEditableEmf(inputPath, { outputDir });

  console.log('Arquivos gerados:');
  console.log(`SVG limpo: ${conversion.cleanSvgPath}`);
  console.log(`EMF: ${conversion.emfPath}`);
  console.log('Relatorio:', conversion.report);
}

main().catch((err) => {
  console.error('Deu erro:', err);
  process.exitCode = 1;
});
