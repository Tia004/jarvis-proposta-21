import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';

function createCRC32Table() {
  const table = new Uint32Array(256);
  for (let i = 0; i < 256; i++) {
    let c = i;
    for (let k = 0; k < 8; k++) {
      c = (c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1);
    }
    table[i] = c;
  }
  return table;
}

const crcTable = createCRC32Table();

function crc32(buf) {
  let crc = 0xffffffff;
  for (let i = 0; i < buf.length; i++) {
    crc = crcTable[(crc ^ buf[i]) & 0xff] ^ (crc >>> 8);
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function makeChunk(type, data) {
  const len = data.length;
  const chunk = Buffer.alloc(12 + len);
  chunk.writeUInt32BE(len, 0);
  chunk.write(type, 4, 4, 'ascii');
  data.copy(chunk, 8);
  const typeAndData = Buffer.concat([Buffer.from(type, 'ascii'), data]);
  const c = crc32(typeAndData);
  chunk.writeUInt32BE(c, 8 + len);
  return chunk;
}

function encodePNG(width, height, getPixelRGB) {
  // Signature
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);

  // IHDR
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr.writeUInt8(8, 8); // 8-bit depth
  ihdr.writeUInt8(2, 9); // Color type 2 = RGB
  ihdr.writeUInt8(0, 10); // Compression
  ihdr.writeUInt8(0, 11); // Filter
  ihdr.writeUInt8(0, 12); // Interlace
  const ihdrChunk = makeChunk('IHDR', ihdr);

  // Raw scanlines with filter byte 0
  const scanlineLength = 1 + width * 3;
  const rawData = Buffer.alloc(scanlineLength * height);

  for (let y = 0; y < height; y++) {
    const rowOffset = y * scanlineLength;
    rawData[rowOffset] = 0; // Filter None
    for (let x = 0; x < width; x++) {
      const pixelOffset = rowOffset + 1 + x * 3;
      const [r, g, b] = getPixelRGB(x, y, width, height);
      rawData[pixelOffset] = Math.max(0, Math.min(255, Math.floor(r)));
      rawData[pixelOffset + 1] = Math.max(0, Math.min(255, Math.floor(g)));
      rawData[pixelOffset + 2] = Math.max(0, Math.min(255, Math.floor(b)));
    }
  }

  const compressedData = zlib.deflateSync(rawData, { level: 8 });
  const idatChunk = makeChunk('IDAT', compressedData);
  const iendChunk = makeChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]);
}

// Directory setup
const publicDir = path.resolve('public');
const imgDir = path.join(publicDir, 'images');
fs.mkdirSync(imgDir, { recursive: true });

// 1. Hero Hotel Italia - Cagliari (1200x800)
// Architectural facade, warm terracotta Mediterranean tones, subtle archways
const heroPNG = encodePNG(1200, 800, (x, y, w, h) => {
  const nx = x / w;
  const ny = y / h;
  // Radial sunset glow from upper center
  const dist = Math.hypot(nx - 0.5, ny - 0.35);
  const glow = Math.max(0, 1 - dist * 1.2);
  
  // Base architectural gradient: charcoal bottom to warm sky top
  let r = 240 * (1 - ny) + 35 * ny + glow * 50;
  let g = 180 * (1 - ny) + 38 * ny + glow * 30;
  let b = 130 * (1 - ny) + 40 * ny;

  // Horizontal terrace / facade bands
  if (ny > 0.45 && ny < 0.48) { r += 20; g += 15; b += 10; }
  if (ny > 0.72 && ny < 0.75) { r += 25; g += 18; b += 12; }
  
  // Arch window simulation
  const archCol = Math.floor(nx * 8);
  const inCol = (nx * 8) - archCol;
  if (inCol > 0.25 && inCol < 0.75 && ny > 0.30 && ny < 0.45) {
    const archTopDist = Math.hypot(inCol - 0.5, (ny - 0.33) * 2);
    if (archTopDist < 0.25 || (ny > 0.33 && ny < 0.45)) {
      // Warm interior illumination
      r = 230 + Math.sin(x * 0.1) * 15;
      g = 130 + Math.cos(y * 0.1) * 10;
      b = 40;
    }
  }

  // Soft vignette
  const vig = 1 - Math.hypot(nx - 0.5, ny - 0.5) * 0.5;
  return [r * vig, g * vig, b * vig];
});
fs.writeFileSync(path.join(imgDir, 'hero-hotel-italia.png'), heroPNG);
console.log('Created hero-hotel-italia.png');

// 2. Room images generator
function generateRoomPNG(name, primaryTone, accentTone) {
  const png = encodePNG(800, 560, (x, y, w, h) => {
    const nx = x / w;
    const ny = y / h;
    
    // Cozy room perspective with ambient light from left window
    const windowLight = Math.max(0, 1 - Math.hypot(nx - 0.15, ny - 0.3) * 1.4);
    
    // Wall and floor gradient
    let [r, g, b] = (ny < 0.65)
      ? [245 - ny * 60, 238 - ny * 60, 230 - ny * 60] // warm wall
      : [60 + (ny - 0.65) * 40, 50 + (ny - 0.65) * 35, 45 + (ny - 0.65) * 30]; // parquet floor

    // Bed/headboard area
    if (nx > 0.25 && nx < 0.75 && ny > 0.45 && ny < 0.85) {
      if (ny < 0.55) {
        // Headboard (rich wood / fabric)
        r = primaryTone[0];
        g = primaryTone[1];
        b = primaryTone[2];
      } else {
        // Crisp white linen with soft folds
        const fold = Math.sin(nx * 40) * 8;
        r = 248 + fold;
        g = 246 + fold;
        b = 242 + fold;
      }
    }

    // Accent throw blanket / pillows
    if (nx > 0.32 && nx < 0.68 && ny > 0.68 && ny < 0.74) {
      r = accentTone[0];
      g = accentTone[1];
      b = accentTone[2];
    }

    // Apply lighting
    r += windowLight * 45;
    g += windowLight * 35;
    b += windowLight * 20;

    // Elegant subtle border
    if (x < 4 || x > w - 5 || y < 4 || y > h - 5) {
      r = 220; g = 210; b = 200;
    }

    return [r, g, b];
  });
  fs.writeFileSync(path.join(imgDir, `${name}.png`), png);
  console.log(`Created ${name}.png`);
}

generateRoomPNG('room-suite', [90, 55, 40], [230, 81, 0]);
generateRoomPNG('room-deluxe', [110, 70, 50], [245, 124, 0]);
generateRoomPNG('room-comfort', [130, 90, 65], [216, 67, 21]);
generateRoomPNG('room-family', [80, 60, 50], [230, 108, 30]);

// 3. Colazione Sarda (800x560)
const colazionePNG = encodePNG(800, 560, (x, y, w, h) => {
  const nx = x / w;
  const ny = y / h;
  // Warm rustic breakfast table in Cagliari morning light
  let r = 240 - ny * 50;
  let g = 215 - ny * 60;
  let b = 180 - ny * 70;

  // Ceramic plate / tray in center
  const dPlate = Math.hypot((nx - 0.5) * 1.3, ny - 0.55);
  if (dPlate < 0.32) {
    r = 250; g = 248; b = 242;
    // Golden Sardinian pastry / pardula / honey glow
    if (dPlate < 0.22) {
      const angle = Math.atan2(ny - 0.55, (nx - 0.5) * 1.3);
      const star = 0.16 + Math.sin(angle * 6) * 0.03;
      if (dPlate < star) {
        r = 235 + Math.sin(x * 0.2) * 15;
        g = 160 + Math.cos(y * 0.2) * 15;
        b = 50;
      }
    }
  }

  // Espresso cup upper right
  const dCup = Math.hypot(nx - 0.72, ny - 0.35);
  if (dCup < 0.09) {
    r = 255; g = 255; b = 255;
    if (dCup < 0.065) {
      r = 65; g = 38; b = 25; // rich crema
    }
  }

  return [r, g, b];
});
fs.writeFileSync(path.join(imgDir, 'colazione-sarda.png'), colazionePNG);
console.log('Created colazione-sarda.png');

// 4. Cagliari Marina (800x560)
const cagliariPNG = encodePNG(800, 560, (x, y, w, h) => {
  const nx = x / w;
  const ny = y / h;
  // Sunny Mediterranean sky to Marina quarter ochre buildings to blue port
  let r, g, b;
  if (ny < 0.38) {
    // Sardinian sky & sunlight
    r = 180 + (1 - ny / 0.38) * 60;
    g = 215 + (1 - ny / 0.38) * 35;
    b = 245;
  } else if (ny < 0.75) {
    // Warm pastel facades: terracotta, mustard, rose
    const block = Math.floor(nx * 6);
    const colors = [
      [220, 120, 60],
      [235, 180, 80],
      [210, 100, 65],
      [225, 160, 90],
      [200, 95, 55],
      [230, 175, 75]
    ];
    [r, g, b] = colors[block % colors.length];
    // Window shutter details
    const wx = (nx * 6) % 1;
    const wy = ((ny - 0.38) * 8) % 1;
    if (wx > 0.3 && wx < 0.7 && wy > 0.2 && wy < 0.75) {
      r = 45; g = 50; b = 45; // dark green Sardinian shutters
    }
  } else {
    // Port of Cagliari water reflection
    const wave = Math.sin(nx * 30 + ny * 20) * 8;
    r = 30 + wave;
    g = 95 + wave;
    b = 145 + wave;
  }
  return [r, g, b];
});
fs.writeFileSync(path.join(imgDir, 'cagliari-marina.png'), cagliariPNG);
console.log('Created cagliari-marina.png');

// 5. OpenGraph Image (1200x630)
const ogPNG = encodePNG(1200, 630, (x, y, w, h) => {
  const nx = x / w;
  const ny = y / h;
  // Elegant dark charcoal background with warm orange luxury accent strip
  let r = 40, g = 40, b = 42;
  
  // Left border warm orange highlight
  if (nx < 0.02) {
    r = 230; g = 81; b = 0;
  }
  
  // Central framed showcase
  if (nx > 0.08 && nx < 0.92 && ny > 0.12 && ny < 0.88) {
    // Warm slate interior
    r = 48 + Math.floor(ny * 10);
    g = 48 + Math.floor(ny * 10);
    b = 52 + Math.floor(ny * 10);

    // Subtle orange brand dividing rule
    if (ny > 0.48 && ny < 0.495 && nx > 0.12 && nx < 0.5) {
      r = 230; g = 81; b = 0;
    }

    // Sub-card representing rooms
    if (nx > 0.58 && nx < 0.88 && ny > 0.22 && ny < 0.78) {
      r = 75; g = 65; b = 58;
      if (ny > 0.65) { r = 230; g = 81; b = 0; }
    }
  }
  return [r, g, b];
});
fs.writeFileSync(path.join(imgDir, 'og-hotel-italia.png'), ogPNG);
console.log('Created og-hotel-italia.png');

// 6. Institutional & Certified Partner Badges (320x120)
function generatePartnerPNG(name, labelText, mainColor) {
  const png = encodePNG(320, 120, (x, y, w, h) => {
    const nx = x / w;
    const ny = y / h;
    // Clean off-white surface with crisp architectural border
    let r = 252, g = 250, b = 247;
    if (x < 2 || x > w - 3 || y < 2 || y > h - 3) {
      r = 210; g = 205; b = 195;
    }
    // Color bar at left
    if (nx < 0.04) {
      r = mainColor[0];
      g = mainColor[1];
      b = mainColor[2];
    }
    // Decorative emblem shape in center left
    const dEmblem = Math.hypot(nx - 0.2, ny - 0.5);
    if (dEmblem < 0.18 && dEmblem > 0.06) {
      r = mainColor[0];
      g = mainColor[1];
      b = mainColor[2];
    }
    return [r, g, b];
  });
  fs.writeFileSync(path.join(imgDir, `partner-${name}.png`), png);
  console.log(`Created partner-${name}.png`);
}

generatePartnerPNG('regione-sardegna', 'Regione Sardegna', [200, 70, 20]);
generatePartnerPNG('unione-europea', 'Unione Europea', [0, 51, 153]);
generatePartnerPNG('pnrr', 'PNRR NextGenEU', [220, 90, 10]);
generatePartnerPNG('fondo-resisto', 'Fondo Resisto', [180, 60, 20]);
generatePartnerPNG('traghetti-lines', 'Traghetti Lines', [20, 100, 160]);

// 7. Verified Team Member Portraits (400x480)
function generateTeamPNG(name, roleColor) {
  const png = encodePNG(400, 480, (x, y, w, h) => {
    const nx = x / w;
    const ny = y / h;
    // Elegant studio portrait tone
    let r = 235 - ny * 30;
    let g = 230 - ny * 30;
    let b = 224 - ny * 30;

    // Head and shoulders silhouette
    const dHead = Math.hypot(nx - 0.5, (ny - 0.35) * 1.2);
    if (dHead < 0.16) {
      r = 75; g = 65; b = 60;
    }
    const dShoulders = Math.hypot((nx - 0.5) * 0.7, (ny - 0.75) * 1.1);
    if (dShoulders < 0.36 && ny > 0.45) {
      r = 55; g = 50; b = 48; // charcoal uniform
      // Lapel / badge accent
      if (Math.abs(nx - 0.5) < 0.03 && ny < 0.65) {
        r = roleColor[0];
        g = roleColor[1];
        b = roleColor[2];
      }
    }

    // Border
    if (x < 2 || x > w - 3 || y < 2 || y > h - 3) {
      r = 210; g = 205; b = 195;
    }
    return [r, g, b];
  });
  fs.writeFileSync(path.join(imgDir, `team-${name}.png`), png);
  console.log(`Created team-${name}.png`);
}

generateTeamPNG('concierge', [230, 81, 0]);
generateTeamPNG('reception', [245, 124, 0]);
generateTeamPNG('housekeeping', [216, 67, 21]);
generateTeamPNG('direzione', [180, 60, 20]);

// 8. Favicon (64x64 PNG)
const faviconPNG = encodePNG(64, 64, (x, y, w, h) => {
  const nx = x / w;
  const ny = y / h;
  // Orange square with clean white 'H' monogram
  let r = 230, g = 81, b = 0;
  // White 'H' letter
  const inLeftBar = (nx > 0.22 && nx < 0.36 && ny > 0.2 && ny < 0.8);
  const inRightBar = (nx > 0.64 && nx < 0.78 && ny > 0.2 && ny < 0.8);
  const inCrossBar = (nx >= 0.36 && nx <= 0.64 && ny > 0.44 && ny < 0.56);
  if (inLeftBar || inRightBar || inCrossBar) {
    r = 255; g = 255; b = 255;
  }
  return [r, g, b];
});
fs.writeFileSync(path.join(publicDir, 'favicon.png'), faviconPNG);
fs.writeFileSync(path.join(publicDir, 'favicon.ico'), faviconPNG);
console.log('Created favicon.png and favicon.ico');

console.log('All raster PNG assets generated successfully with ZERO SVG!');
