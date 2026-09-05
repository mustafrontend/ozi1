const sharp = require('sharp');
const pngToIco = require('png-to-ico').default;
const fs = require('fs');
const path = require('path');

const svgPath = path.join(__dirname, '..', 'resources', 'icon.svg');
const outDir = path.join(__dirname, '..', 'public');

async function main() {
  const svg = fs.readFileSync(svgPath);

  const sizes = [16, 32, 48];
  const pngBuffers = await Promise.all(
    sizes.map((size) => sharp(svg).resize(size, size).png().toBuffer())
  );

  const icoBuffer = await pngToIco(pngBuffers);
  fs.writeFileSync(path.join(outDir, 'favicon.ico'), icoBuffer);

  await sharp(svg).resize(180, 180).png().toFile(path.join(outDir, 'apple-touch-icon.png'));
  await sharp(svg).resize(192, 192).png().toFile(path.join(outDir, 'icon-192.png'));
  await sharp(svg).resize(512, 512).png().toFile(path.join(outDir, 'icon-512.png'));

  console.log('done');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
