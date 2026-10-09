// Generates Cloudflare Pages `_headers` and `_redirects` from vercel.json so the
// same build deploys to Vercel or Cloudflare Pages without drift.
import fs from 'node:fs';

const cfg = JSON.parse(fs.readFileSync('vercel.json', 'utf8'));
const toCf = (src) => src.replace(/\(\.\*\)/g, '*').replace(/\((\w+)\|(\w+)\)\//, '$1/'); // simple patterns only

const headers = [];
for (const h of cfg.headers ?? []) {
  if (/\(\w+\|\w+\)/.test(h.source)) {
    // expand "(og|fonts)/(.*)" into two rules
    const [, a, b] = h.source.match(/\((\w+)\|(\w+)\)/);
    for (const v of [a, b]) headers.push({ source: h.source.replace(/\(\w+\|\w+\)/, v), headers: h.headers });
  } else headers.push(h);
}
const headersTxt = headers.map((h) => `${toCf(h.source)}\n${h.headers.map((x) => `  ${x.key}: ${x.value}`).join('\n')}`).join('\n\n');
fs.writeFileSync('dist/_headers', `${headersTxt}\n`);

const redirects = (cfg.redirects ?? []).map((r) => `${toCf(r.source)} ${toCf(r.destination)} ${r.permanent === false ? 302 : 301}`);
fs.writeFileSync('dist/_redirects', `${redirects.join('\n')}\n`);
console.log(`postbuild: ${headers.length} header rules, ${redirects.length} redirects for Cloudflare Pages`);
