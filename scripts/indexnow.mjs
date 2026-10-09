// Submits every URL of the live sitemap to IndexNow (Bing, Yandex, Seznam,
// Naver…). Run after each deploy: npm run indexnow
const KEY = 'e970ca66fd7375a5ac3644b963ca81ca';
const HOST = 'turboconvert.io';
const xml = await (await fetch(`https://${HOST}/sitemap.xml`)).text();
const urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList }),
});
console.log(`IndexNow: ${urlList.length} URLs submitted → HTTP ${res.status}`);
