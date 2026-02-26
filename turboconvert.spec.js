// @ts-check
const { test, expect } = require('@playwright/test');
const path = require('path');

// ─── Config ───────────────────────────────────────────────────────────────────
const BASE = process.env.BASE_URL || 'https://turboconvert.io';
const F = (name) => path.join(__dirname, 'fixtures', name);
const CONVERT_TIMEOUT = 60_000;

// ─── Mapping réel des IDs par page (audité depuis les sources HTML) ───────────
// Famille A : id="inp" + id="frow"/"fileList"/null + id="cbtn" + id="dl"
// Famille B : id="fileInput" + id="fileRow"/"fileList" + id="convertBtn" + id="dlWrap"
const PAGE_IDS = {
  // PDF tools — Famille A
  'compress-pdf':  { inp: 'inp',       row: 'qualityWrap', cbtn: 'cbtn',       dl: 'dl'     },
  'pdf-to-jpg':    { inp: 'inp',       row: 'frow',        cbtn: 'cbtn',       dl: 'dl'     },
  'merge-pdf':     { inp: 'inp',       row: 'fileList',    cbtn: 'cbtn',       dl: 'dl'     },
  'split-pdf':     { inp: 'inp',       row: null,          cbtn: 'cbtn',       dl: 'dl'     },
  'rotate-pdf':    { inp: 'inp',       row: null,          cbtn: 'cbtn',       dl: 'dl'     },
  'pdf-to-word':   { inp: 'inp',       row: 'frow',        cbtn: 'cbtn',       dl: 'dl'     },
  // Audio/Video — Famille A
  'mp4-to-mp3':    { inp: 'inp',       row: 'frow',        cbtn: 'cbtn',       dl: 'dl'     },
  'wav-to-mp3':    { inp: 'inp',       row: 'frow',        cbtn: 'cbtn',       dl: 'dl'     },
  'mp3-to-wav':    { inp: 'inp',       row: 'frow',        cbtn: 'cbtn',       dl: 'dl'     },
  // Image/Doc tools — Famille B
  'compress-image':{ inp: 'fileInput', row: 'fileRow',     cbtn: 'convertBtn', dl: 'dlWrap' },
  'jpg-to-pdf':    { inp: 'fileInput', row: 'fileList',    cbtn: 'convertBtn', dl: 'dlWrap' },
  'jpg-to-png':    { inp: 'fileInput', row: 'fileRow',     cbtn: 'convertBtn', dl: 'dlWrap' },
  'png-to-jpg':    { inp: 'fileInput', row: 'fileRow',     cbtn: 'convertBtn', dl: 'dlWrap' },
  'webp-to-jpg':   { inp: 'fileInput', row: 'fileRow',     cbtn: 'convertBtn', dl: 'dlWrap' },
  'heic-to-jpg':   { inp: 'fileInput', row: 'fileRow',     cbtn: 'convertBtn', dl: 'dlWrap' },
  'pdf-to-excel':  { inp: 'fileInput', row: 'fileRow',     cbtn: 'convertBtn', dl: 'dlWrap' },
  'word-to-pdf':   { inp: 'fileInput', row: 'fileRow',     cbtn: 'convertBtn', dl: 'dlWrap' },
  'excel-to-pdf':  { inp: 'fileInput', row: 'fileRow',     cbtn: 'convertBtn', dl: 'dlWrap' },
  'word-to-jpg':   { inp: 'fileInput', row: 'fileRow',     cbtn: 'convertBtn', dl: 'dlWrap' },
};

// ─── Helper upload + convert adaptatif ───────────────────────────────────────
async function uploadAndConvert(page, toolSlug, fixture) {
  const ids = PAGE_IDS[toolSlug];
  if (!ids) throw new Error(`IDs inconnus pour : ${toolSlug}`);

  await page.locator(`#${ids.inp}`).setInputFiles(fixture);

  // Attendre la zone "fichier accepté" si elle existe pour cet outil
  if (ids.row) {
    await expect(page.locator(`#${ids.row}`)).toBeVisible({ timeout: 8000 });
  }

  await page.locator(`#${ids.cbtn}`).click();
  await expect(page.locator(`#${ids.dl}`)).toBeVisible({ timeout: CONVERT_TIMEOUT });
}

// ─── SUITE 1 : Homepage ───────────────────────────────────────────────────────
test.describe('Homepage', () => {
  test('se charge correctement', async ({ page }) => {
    await page.goto(BASE);
    await expect(page).toHaveTitle(/TurboConvert/);
    await expect(page.locator('#detectorZone')).toBeVisible();
  });

  // FIX: toHaveCount({minimum:1}) n'existe pas → utiliser .count() + expect()
  test('detector affiche les outils suggérés après upload PDF', async ({ page }) => {
    await page.goto(BASE);
    await page.locator('#detectorInput').setInputFiles(F('test.pdf'));
    await expect(page.locator('#detectorResults')).toBeVisible({ timeout: 3000 });
    const count = await page.locator('#detSuggestions a').count();
    expect(count).toBeGreaterThanOrEqual(1);
  });

  test('fichier sauvegardé en IDB après sélection', async ({ page }) => {
    await page.goto(BASE);
    await page.locator('#detectorInput').setInputFiles(F('test.pdf'));
    const hasFile = await page.evaluate(async () => {
      return new Promise((resolve) => {
        const req = indexedDB.open('turboconvert', 1);
        req.onsuccess = (e) => {
          const db = e.target.result;
          try {
            const tx = db.transaction('pending_file', 'readonly');
            const get = tx.objectStore('pending_file').get('file');
            get.onsuccess = () => resolve(!!get.result);
            get.onerror = () => resolve(false);
          } catch { resolve(false); }
        };
        req.onerror = () => resolve(false);
      });
    });
    expect(hasFile).toBe(true);
  });

  test('clic sur un outil depuis le detector redirige correctement', async ({ page }) => {
    await page.goto(BASE);
    await page.locator('#detectorInput').setInputFiles(F('test.pdf'));
    await expect(page.locator('#detSuggestions a').first()).toBeVisible({ timeout: 3000 });
    const href = await page.locator('#detSuggestions a').first().getAttribute('href');
    expect(href).toMatch(/^\//);
  });
});

// ─── SUITE 2 : Transfert IDB Homepage → Page outil ───────────────────────────
test.describe('Transfert fichier homepage → outil', () => {
  // FIX: compress-pdf utilise id="qualityWrap" (pas "fileRow") + id="fname" (pas "fileName")
  test('PDF uploadé en homepage apparaît dans compress-pdf', async ({ page }) => {
    await page.goto(BASE);
    await page.locator('#detectorInput').setInputFiles(F('test.pdf'));
    await expect(page.locator('#detectorResults')).toBeVisible({ timeout: 3000 });
    await page.waitForTimeout(500); // laisser IDB écrire
    await page.goto(`${BASE}/compress-pdf`);
    await expect(page.locator('#qualityWrap')).toBeVisible({ timeout: 6000 });
    await expect(page.locator('#fname')).not.toHaveText('—');
  });

  test('JPG uploadé en homepage apparaît dans compress-image', async ({ page }) => {
    await page.goto(BASE);
    await page.locator('#detectorInput').setInputFiles(F('test.jpg'));
    await expect(page.locator('#detectorResults')).toBeVisible({ timeout: 3000 });
    await page.waitForTimeout(500);
    await page.goto(`${BASE}/compress-image`);
    await expect(page.locator('#fileRow')).toBeVisible({ timeout: 6000 });
  });
});

// ─── SUITE 3 : Taille max ─────────────────────────────────────────────────────
test.describe('Limite de taille', () => {
  // FIX: Object.defineProperty sur File échoue en sandbox strict
  // → passer par page.evaluate avec un File dont le size est simulé via Proxy
  async function checkSizeBlock(page, toolUrl, fileName, fileType, limitMB) {
    await page.goto(`${BASE}/${toolUrl}`);
    return await page.evaluate(({ fileName, fileType, limitMB }) => {
      return new Promise((resolve) => {
        // Créer un File minimal puis surcharger .size via un Proxy
        const realFile = new File(['x'], fileName, { type: fileType });
        const fakeFile = new Proxy(realFile, {
          get(target, prop) {
            if (prop === 'size') return (limitMB + 1) * 1024 * 1024;
            const val = target[prop];
            return typeof val === 'function' ? val.bind(target) : val;
          }
        });
        let alerted = false;
        const origAlert = window.alert;
        window.alert = () => { alerted = true; window.alert = origAlert; };
        if (typeof loadFile === 'function') loadFile(fakeFile);
        else if (typeof load === 'function') load(fakeFile);
        setTimeout(() => resolve(alerted), 200);
      });
    }, { fileName, fileType, limitMB });
  }

  test('compress-pdf bloque les fichiers >100MB', async ({ page }) => {
    const blocked = await checkSizeBlock(page, 'compress-pdf', 'big.pdf', 'application/pdf', 100);
    expect(blocked).toBe(true);
  });

  test('mp4-to-mp3 bloque les fichiers >500MB', async ({ page }) => {
    const blocked = await checkSizeBlock(page, 'mp4-to-mp3', 'big.mp4', 'video/mp4', 500);
    expect(blocked).toBe(true);
  });
});

// ─── SUITE 4 : Conversions PDF ───────────────────────────────────────────────
test.describe('PDF Tools', () => {
  test('compress-pdf : upload → conversion → download visible', async ({ page }) => {
    await page.goto(`${BASE}/compress-pdf`);
    await uploadAndConvert(page, 'compress-pdf', F('test.pdf'));
  });

  test('pdf-to-jpg : upload → pages converties → download visible', async ({ page }) => {
    await page.goto(`${BASE}/pdf-to-jpg`);
    await uploadAndConvert(page, 'pdf-to-jpg', F('test.pdf'));
  });

  test('merge-pdf : upload → conversion → download visible', async ({ page }) => {
    await page.goto(`${BASE}/merge-pdf`);
    await uploadAndConvert(page, 'merge-pdf', F('test.pdf'));
  });

  test('split-pdf : upload → conversion → download visible', async ({ page }) => {
    await page.goto(`${BASE}/split-pdf`);
    // split-pdf n'a pas de row visible avant clic
    const ids = PAGE_IDS['split-pdf'];
    await page.locator(`#${ids.inp}`).setInputFiles(F('test.pdf'));
    await page.locator(`#${ids.cbtn}`).click();
    await expect(page.locator(`#${ids.dl}`)).toBeVisible({ timeout: CONVERT_TIMEOUT });
  });

  test('rotate-pdf : upload → conversion → download visible', async ({ page }) => {
    await page.goto(`${BASE}/rotate-pdf`);
    const ids = PAGE_IDS['rotate-pdf'];
    await page.locator(`#${ids.inp}`).setInputFiles(F('test.pdf'));
    await page.locator(`#${ids.cbtn}`).click();
    await expect(page.locator(`#${ids.dl}`)).toBeVisible({ timeout: CONVERT_TIMEOUT });
  });

  test("pdf-to-word : conversion 100% browser (pas d'appel serveur)", async ({ page }) => {
    const serverCalls = [];
    page.on('request', req => {
      const url = req.url();
      if (url.includes('convertapi.com')) serverCalls.push(url);
    });
    await page.goto(`${BASE}/pdf-to-word`);
    await uploadAndConvert(page, 'pdf-to-word', F('test.pdf'));
    expect(serverCalls).toHaveLength(0);
  });

  test('pdf-to-excel : upload → download visible', async ({ page }) => {
    await page.goto(`${BASE}/pdf-to-excel`);
    await uploadAndConvert(page, 'pdf-to-excel', F('test.pdf'));
  });
});

// ─── SUITE 5 : Conversions Image ─────────────────────────────────────────────
test.describe('Image Tools', () => {
  test('compress-image : JPG → compressé → download visible', async ({ page }) => {
    await page.goto(`${BASE}/compress-image`);
    await uploadAndConvert(page, 'compress-image', F('test.jpg'));
  });

  test('jpg-to-pdf : JPG → PDF → download visible', async ({ page }) => {
    await page.goto(`${BASE}/jpg-to-pdf`);
    const ids = PAGE_IDS['jpg-to-pdf'];
    await page.locator(`#${ids.inp}`).setInputFiles(F('test.jpg'));
    await expect(page.locator(`#${ids.row}`)).toBeVisible({ timeout: 8000 });
    await page.locator(`#${ids.cbtn}`).click();
    await expect(page.locator(`#${ids.dl}`)).toBeVisible({ timeout: CONVERT_TIMEOUT });
  });

  test('jpg-to-png : JPG → PNG → download visible', async ({ page }) => {
    await page.goto(`${BASE}/jpg-to-png`);
    await uploadAndConvert(page, 'jpg-to-png', F('test.jpg'));
  });

  test('png-to-jpg : PNG → JPG → download visible', async ({ page }) => {
    await page.goto(`${BASE}/png-to-jpg`);
    await uploadAndConvert(page, 'png-to-jpg', F('test.png'));
  });

  test('webp-to-jpg : WebP → JPG → download visible', async ({ page }) => {
    await page.goto(`${BASE}/webp-to-jpg`);
    await uploadAndConvert(page, 'webp-to-jpg', F('test.webp'));
  });

  // FIX: convertBtn est dans fileRow (display:none avant upload) — tester via toBeAttached()
  test('heic-to-jpg : page charge et upload zone est prête', async ({ page }) => {
    await page.goto(`${BASE}/heic-to-jpg`);
    await expect(page.locator('#zone')).toBeVisible();
    await expect(page.locator('#convertBtn')).toBeAttached();
    await expect(page.locator('#fileInput')).toBeAttached();
  });
});

// ─── SUITE 6 : Conversions Document ──────────────────────────────────────────
test.describe('Document Tools', () => {
  test('word-to-pdf : DOCX → PDF → download visible', async ({ page }) => {
    await page.goto(`${BASE}/word-to-pdf`);
    await uploadAndConvert(page, 'word-to-pdf', F('test.docx'));
  });

  test('excel-to-pdf : XLSX → PDF → download visible', async ({ page }) => {
    await page.goto(`${BASE}/excel-to-pdf`);
    await uploadAndConvert(page, 'excel-to-pdf', F('test.xlsx'));
  });

  test('word-to-jpg : DOCX → JPG → download visible', async ({ page }) => {
    await page.goto(`${BASE}/word-to-jpg`);
    await uploadAndConvert(page, 'word-to-jpg', F('test.docx'));
  });
});

// ─── SUITE 7 : Conversions Audio/Vidéo ───────────────────────────────────────
test.describe('Audio & Video Tools', () => {
  // FFmpeg ~30MB WASM — on teste que le fichier est accepté sans lancer la conversion

  test('mp4-to-mp3 : page charge et accepte un fichier', async ({ page }) => {
    await page.goto(`${BASE}/mp4-to-mp3`);
    await expect(page.locator('#zone')).toBeVisible();
    // FIX: id réel après upload = frow (pas fileRow)
    await page.locator('#inp').setInputFiles(F('test.mp3'));
    await expect(page.locator('#frow')).toBeVisible({ timeout: 5000 });
  });

  test('wav-to-mp3 : page charge et accepte un WAV', async ({ page }) => {
    await page.goto(`${BASE}/wav-to-mp3`);
    await expect(page.locator('#zone')).toBeVisible();
    await page.locator('#inp').setInputFiles(F('test.wav'));
    await expect(page.locator('#frow')).toBeVisible({ timeout: 5000 });
  });

  test('mp3-to-wav : page charge et accepte un MP3', async ({ page }) => {
    await page.goto(`${BASE}/mp3-to-wav`);
    await expect(page.locator('#zone')).toBeVisible();
    await page.locator('#inp').setInputFiles(F('test.mp3'));
    await expect(page.locator('#frow')).toBeVisible({ timeout: 5000 });
  });
});

// ─── SUITE 8 : Aucun appel serveur ───────────────────────────────────────────
test.describe('No server calls', () => {
  // FIX: AdSense déclenche des requêtes fetch vers adtrafficquality.google (sodar) —
  // ce sont des appels légitimes du script publicitaire, pas des appels de conversion.
  // On filtre uniquement les ressources fetch/xhr NON liées à Google/CDN.
  const ADSENSE_DOMAINS = [
    'googlesyndication.com', 'adtrafficquality.google', 'doubleclick.net',
    'googletagservices.com', 'google.com', 'gstatic.com', 'googleapis.com',
  ];
  const CDN_DOMAINS = [
    'turboconvert.io', 'cdn.jsdelivr.net', 'cdnjs.cloudflare.com',
    'unpkg.com', 'localhost', '127.0.0.1',
  ];
  const ALL_ALLOWED = [...ADSENSE_DOMAINS, ...CDN_DOMAINS];

  const TOOL_URLS = [
    'compress-pdf', 'compress-image', 'jpg-to-pdf', 'jpg-to-png',
    'png-to-jpg', 'webp-to-jpg', 'merge-pdf', 'split-pdf',
    'rotate-pdf', 'pdf-to-jpg', 'word-to-pdf',
  ];

  for (const tool of TOOL_URLS) {
    test(`${tool} : aucun appel API externe`, async ({ page }) => {
      const externalCalls = [];
      page.on('request', req => {
        if (req.resourceType() !== 'fetch' && req.resourceType() !== 'xhr') return;
        const url = req.url();
        const isAllowed = ALL_ALLOWED.some(d => url.includes(d));
        if (!isAllowed) externalCalls.push(url);
      });
      await page.goto(`${BASE}/${tool}`);
      await page.waitForTimeout(2000);
      expect(externalCalls, `Appels API non autorisés: ${externalCalls.join(', ')}`).toHaveLength(0);
    });
  }
});

// ─── SUITE 9 : Blog & SEO ─────────────────────────────────────────────────────
test.describe('Blog & SEO', () => {
  test('blog index se charge', async ({ page }) => {
    await page.goto(`${BASE}/blog`);
    await expect(page).toHaveTitle(/Blog|TurboConvert/);
  });

  const BLOG_ARTICLES = [
    'how-to-compress-pdf',
    'how-to-convert-pdf-to-word',
    'how-to-merge-pdf',
    'how-to-split-pdf',
    'how-to-reduce-image-size',
  ];

  for (const slug of BLOG_ARTICLES) {
    test(`blog/${slug} : charge et contient un lien vers un outil`, async ({ page }) => {
      await page.goto(`${BASE}/blog/${slug}`);
      await expect(page.locator('h1')).toBeVisible();
      // FIX: href!="/" est CSS invalide — utiliser evaluate() pour filtrer en JS
      const toolLinkCount = await page.evaluate(() => {
        const links = Array.from(document.querySelectorAll('a[href^="/"]'));
        return links.filter(a => {
          const h = a.getAttribute('href');
          return h !== '/' && h !== '/blog' && !h.startsWith('/blog/');
        }).length;
      });
      expect(toolLinkCount).toBeGreaterThanOrEqual(1);
    });
  }
});
