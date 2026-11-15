/* Local copy of the site at http://127.0.0.1:8765/VirtualDemos/ for checks, key captures and videos (tools/cloud/setup.sh starts it).
   A file in the working tree wins, so an edited demo shows at once; worksheets and notes come from the Jekyll build in
   $VD_SITE (default ~/vd-site/VirtualDemos), so rebuild after editing a worksheet .md (setup.sh --site). */
const http = require('http'), fs = require('fs'), path = require('path'), os = require('os');
const REPO = process.env.VD_REPO || path.resolve(__dirname, '../..');
const BUILT = process.env.VD_SITE || path.join(os.homedir(), 'vd-site/VirtualDemos');
const PORT = +(process.env.PORT || 8765);
const T = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.cjs': 'text/javascript', '.json': 'application/json',
  '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.mp4': 'video/mp4', '.webp': 'image/webp', '.woff2': 'font/woff2', '.txt': 'text/plain' };
http.createServer((q, r) => {
  const u = decodeURIComponent(q.url.split(/[?#]/)[0]);
  if (!u.startsWith('/VirtualDemos')) { r.writeHead(302, { Location: '/VirtualDemos/' }); return r.end(); }
  let rel = u.slice('/VirtualDemos'.length).replace(/^\/+/, ''); if (rel === '' || rel.endsWith('/')) rel += 'index.html';
  if (rel.split('/').includes('..')) { r.writeHead(403); return r.end(); }
  /* a page Jekyll builds from Markdown (worksheet, notes source) has no .html in the tree, so it comes from the build */
  const bases = rel.endsWith('.html') && fs.existsSync(path.join(BUILT, rel)) && !fs.existsSync(path.join(REPO, rel)) ? [BUILT] : [REPO, BUILT];
  for (const base of bases) {
    const f = path.join(base, rel);
    if (fs.existsSync(f) && fs.statSync(f).isFile()) { r.writeHead(200, { 'Content-Type': T[path.extname(f)] || 'application/octet-stream' }); return fs.createReadStream(f).pipe(r); }
  }
  r.writeHead(404); r.end();
}).listen(PORT, '127.0.0.1', () => console.log('serving ' + REPO + ' (+ ' + BUILT + ') at http://127.0.0.1:' + PORT + '/VirtualDemos/'));
