const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'categories');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));
let modified = 0;

for (const f of files) {
  const p = path.join(dir, f);
  let content = fs.readFileSync(p, 'utf8');
  const matches = [...content.matchAll(/<!DOCTYPE html/gi)];
  if (matches.length > 1) {
    const lastIndex = content.lastIndexOf('<!DOCTYPE html');
    const newContent = content.slice(lastIndex).trimStart() + '\n';
    fs.writeFileSync(p, newContent, 'utf8');
    console.log('Cleaned:', f);
    modified++;
  }
}

console.log(`Done. Files modified: ${modified}/${files.length}`);
process.exit(0);
