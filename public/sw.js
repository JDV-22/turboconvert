// TurboConvert service worker: makes repeat visits instant and tools usable
// offline. HTML is network-first (always fresh when online); hashed build
// assets and conversion engines are cache-first (they never change).
const VERSION = 'tc-v1';
const ASSETS = `${VERSION}-assets`;
const PAGES = `${VERSION}-pages`;
const ENGINE_HOSTS = ['cdn.jsdelivr.net', 'unpkg.com', 'tessdata.projectnaptha.com'];

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    for (const key of await caches.keys()) if (!key.startsWith(VERSION)) await caches.delete(key);
    await self.clients.claim();
  })());
});

async function cacheFirst(req) {
  const cache = await caches.open(ASSETS);
  const hit = await cache.match(req);
  if (hit) return hit;
  const res = await fetch(req);
  if (res.ok && (res.type === 'basic' || res.type === 'cors')) cache.put(req, res.clone());
  return res;
}

async function networkFirst(req) {
  const cache = await caches.open(PAGES);
  try {
    const res = await fetch(req);
    if (res.ok) cache.put(req, res.clone());
    return res;
  } catch (e) {
    const hit = await cache.match(req);
    if (hit) return hit;
    throw e;
  }
}

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin === location.origin) {
    if (url.pathname.startsWith('/_vercel/')) return;
    if (url.pathname.startsWith('/_astro/') || /\.(woff2|wasm|png|svg|ico)$/.test(url.pathname)) {
      event.respondWith(cacheFirst(req));
    } else if (req.mode === 'navigate') {
      event.respondWith(networkFirst(req));
    }
    return;
  }
  // Only version-pinned CDN files (".../pkg@1.2.3/...") are immutable.
  const pinned = /@\d/.test(url.pathname) || url.hostname === 'tessdata.projectnaptha.com';
  if (ENGINE_HOSTS.includes(url.hostname) && pinned) {
    event.respondWith(cacheFirst(req));
  }
});
