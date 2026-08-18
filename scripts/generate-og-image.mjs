/**
 * Builds a real PNG Open Graph card. WhatsApp ignores SVG, even if the
 * file is named .png.
 * Run: node scripts/generate-og-image.mjs
 */
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const out = path.join(__dirname, "../public/og-image.png");

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <rect width="1200" height="630" fill="#0B0B0B"/>
  <rect width="1200" height="12" fill="#FF5A1F"/>
  <rect y="618" width="1200" height="12" fill="#FF5A1F"/>

  <g transform="translate(80, 86)">
    <rect width="72" height="72" rx="16" fill="#FF5A1F"/>
    <circle cx="36" cy="36" r="16" fill="none" stroke="#FFFFFF" stroke-width="8"/>
    <rect x="44" y="20" width="14" height="14" fill="#FF5A1F"/>
    <rect x="34" y="32" width="18" height="9" rx="2" fill="#FFFFFF"/>
  </g>
  <text x="172" y="136" font-family="Arial, Helvetica, sans-serif" font-size="36" font-weight="800" fill="#FFFFFF" letter-spacing="6">GETDRIVES</text>

  <text x="80" y="320" font-family="Arial, Helvetica, sans-serif" font-size="64" font-weight="800" fill="#FFFFFF">Set your fare.</text>
  <text x="80" y="400" font-family="Arial, Helvetica, sans-serif" font-size="64" font-weight="800" fill="#FF5A1F">Ride your way.</text>
  <text x="80" y="478" font-family="Arial, Helvetica, sans-serif" font-size="28" fill="#A0A0A0">Peer-to-peer rides across Nigeria</text>
</svg>
`;

await sharp(Buffer.from(svg))
  .png({ compressionLevel: 9 })
  .toFile(out);

const meta = await sharp(out).metadata();
console.log(`Wrote ${out} (${meta.width}x${meta.height}, ${meta.format})`);
