const fs = require('fs');
const dir = 'categories';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));
let problems = [];
files.forEach(f => {
  const s = fs.readFileSync(`${dir}/${f}`, 'utf8');
  const pageTitle = (s.match(/id\s*=\s*"pageTitle"/g) || []).length;
  const albumTitle = (s.match(/id\s*=\s*"albumTitle"/g) || []).length;
  const albumGrid = (s.match(/id\s*=\s*"albumGrid"/g) || []).length;
  if (pageTitle > 1 || albumTitle > 1 || albumGrid > 1) {
    problems.push({ file: f, pageTitle, albumTitle, albumGrid });
  }
});
if (problems.length === 0) {
  console.log('No duplicate pageTitle/albumTitle/albumGrid IDs found.');
} else {
  problems.forEach(p => console.log(`${p.file} -> pageTitle:${p.pageTitle} albumTitle:${p.albumTitle} albumGrid:${p.albumGrid}`));
}
