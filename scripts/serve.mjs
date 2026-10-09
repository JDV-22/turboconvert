// Static server for dist/ that mimics Vercel's cleanUrls + trailingSlash:false.
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(process.argv[2] ?? 'dist');
const port = Number(process.env.PORT ?? 4321);
const types = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.mjs': 'text/javascript', '.css': 'text/css',
  '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png', '.ico': 'image/x-icon', '.jpg': 'image/jpeg',
  '.wasm': 'application/wasm', '.woff2': 'font/woff2', '.txt': 'text/plain', '.xml': 'application/xml', '.webmanifest': 'application/manifest+json',
};
http.createServer((req, res) => {
  const url = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  const candidates = url === '/' ? ['/index.html'] : [url, `${url}.html`, `${url}/index.html`];
  for (const c of candidates) {
    const file = path.join(root, c);
    if (file.startsWith(root) && fs.existsSync(file) && fs.statSync(file).isFile()) {
      res.writeHead(200, { 'content-type': types[path.extname(file)] ?? 'application/octet-stream' });
      fs.createReadStream(file).pipe(res);
      return;
    }
  }
  const nf = path.join(root, '404.html');
  res.writeHead(404, { 'content-type': 'text/html; charset=utf-8' });
  res.end(fs.existsSync(nf) ? fs.readFileSync(nf) : 'Not found');
}).listen(port, () => console.log(`serving ${root} on http://localhost:${port}`));
