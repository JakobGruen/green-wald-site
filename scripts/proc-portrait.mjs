import sharp from 'sharp';
import { rename, stat } from 'node:fs/promises';
const src = 'public/portrait.jpg';
const meta = await sharp(src).rotate().metadata();
const side = Math.min(meta.width, meta.height);
const base = sharp(src).rotate().extract({
  left: Math.floor((meta.width - side) / 2),
  top: Math.floor((meta.height - side) / 2),
  width: side, height: side,
}).resize(640, 640, { fit: 'cover' });
await base.clone().webp({ quality: 82 }).toFile('public/portrait.webp');
await base.clone().jpeg({ quality: 82, mozjpeg: true, progressive: true }).toFile('/tmp/portrait.opt.jpg');
await rename('/tmp/portrait.opt.jpg', 'public/portrait.jpg');
for (const f of ['public/portrait.webp','public/portrait.jpg']) {
  const s = await stat(f); console.log(f, Math.round(s.size/1024)+'KB');
}
console.log('source was', meta.width+'x'+meta.height, 'orientation', meta.orientation);
