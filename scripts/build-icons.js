// Generates icon.png (1024px), icon.ico (multi-res), icon.icns (multi-res)
// from build/icon.svg — run after editing the SVG.

const fs = require("fs");
const path = require("path");
const sharp = require("sharp");
const png2icons = require("png2icons");

async function build() {
  const buildDir = path.join(__dirname, "..", "build");
  const svgPath = path.join(buildDir, "icon.svg");

  if (!fs.existsSync(svgPath)) {
    console.error("✗ build/icon.svg not found.");
    process.exit(1);
  }

  console.log("Rendering 1024×1024 PNG from SVG…");
  const pngBuf = await sharp(svgPath).resize(1024, 1024).png().toBuffer();
  fs.writeFileSync(path.join(buildDir, "icon.png"), pngBuf);
  console.log("  ✓ build/icon.png");

  console.log("Generating multi-resolution Windows ICO…");
  const ico = png2icons.createICO(pngBuf, png2icons.BICUBIC, 0, false);
  if (!ico) throw new Error("ICO generation failed");
  fs.writeFileSync(path.join(buildDir, "icon.ico"), ico);
  console.log("  ✓ build/icon.ico");

  console.log("Generating multi-resolution macOS ICNS…");
  const icns = png2icons.createICNS(pngBuf, png2icons.BICUBIC, 0);
  if (!icns) throw new Error("ICNS generation failed");
  fs.writeFileSync(path.join(buildDir, "icon.icns"), icns);
  console.log("  ✓ build/icon.icns");

  console.log("\nAll icons generated. electron-builder will pick them up on next build.");
}

build().catch((err) => {
  console.error("✗", err.message);
  process.exit(1);
});
