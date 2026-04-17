const fs = require('fs');
const dir = 'categories';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));
files.forEach(f => {
  const s = fs.readFileSync(`${dir}/${f}`, 'utf8');
  const count = (s.match(/<!DOCTYPE html/gi) || []).length;
  console.log(`${f} -> ${count}`);
});
