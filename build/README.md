# Build resources

This folder holds the app icon files that electron-builder bundles into the installers.

## Current state

✅ Icons are already generated. The source is `icon.svg`; the rasterized outputs are:

| File | Purpose |
|---|---|
| `icon.svg` | Source design (1024 × 1024 viewBox) |
| `icon.png` | 1024 × 1024 PNG — used at runtime by `main.js` for the Linux/macOS window icon |
| `icon.ico` | Multi-resolution Windows icon (16/32/48/64/128/256 px layers) |
| `icon.icns` | Multi-resolution macOS icon (16/32/64/128/256/512/1024 px layers) |

## Changing the icon

1. Edit `icon.svg` (or replace it with a new design — must be square, 1024 × 1024 viewBox)
2. Run from the project root:
   ```bash
   npm run icons
   ```
3. `icon.png`, `icon.ico`, and `icon.icns` regenerate automatically
4. Rebuild the app: `npm run dist:win` (or `dist:mac`)

## If you'd rather provide pre-made files

Skip the SVG entirely — just drop your own `icon.png` (1024 × 1024), `icon.ico` (multi-res), and `icon.icns` (multi-res) into this folder. electron-builder uses them directly.

## Design tips

- Keep the design **bold and readable at 16 × 16** — that's the size shown in the Windows taskbar
- Avoid thin strokes, small text, or fine detail
- A solid background reads better than transparent against dark taskbars
- Match the app's color scheme (`#22c55e` green prompt on `#0c1a14` graphite) for cohesion
