// @ts-check
const { test, expect } = require('@playwright/test');
const path = require('path');

// ─── Config ───────────────────────────────────────────────────────────────────
const BASE = process.env.BASE_URL || 'https://turboconvert.io';
const F = (name) => path.join(__dirname, 'fixtures', name);

// Timeout généreux pour les conversions (FFmpeg peut prendre du temps)
const CONVERT_TIMEOUT = 60_000;

// ─── Helpers ──────────────────────────────────────────────────────────────────
async function uploadAndConvert(page, fixture, waitFor = 'dlWrap') {
  await page.locator('#inp').setInputFiles(fixture);
  await expect(page.locator('#fileRow')).toBeVisible({ timeout: 5000 });
  await page.locator('#convertBtn').click();
  await expect(page.locator(`#${waitFor}`)).toBeVisible({ timeout: CONVERT_TIMEOUT });
}

// ─── SUITE 1 : Homepage ───────────────────────────────────────────────────────
test.describe('Homepage', () => {
  test('se charge correctement', async ({ page }) => {
    await page.goto(BASE);
    await expect(page).toHaveTitle(/TurboConvert/);
    await expect(page.locator('#detectorZone')).toBeVisible();
  });

  test('detector affiche les outils suggérés après upload PDF', async ({ page }) => {
    await page.goto(BASE);
    await page.locator('#detectorInput').setInputFiles(F('test.pdf'));
    await expect(page.locator('#detectorResults')).toBeVisible({ timeout: 3000 });
    await expect(page.locator('#detSuggestions a')).toHaveCount({ minimum: 1 });
  });

  test('fichier sauvegardé en IDB après sélection', async ({ page }) => {
    await page.goto(BASE);
    await page.locator('#detectorInput').setInputFiles(F('test.pdf'));
    // Vérifier que IndexedDB a bien reçu le fichier
    const hasFile = await page.evaluate(async () => {
      return new Promise((resolve) => {
        const req = indexedDB.open('turboconvert', 1);
        req.onsuccess = (e) => {
          const db = e.target.result;
          const tx = db.transaction('pending_file', 'readonly');
          const store = tx.objectStore('pending_file');
          const get = store.get('file');
          get.onsuccess = () => resolve(!!get.result);
          get.onerror = () => resolve(false);
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
  test('PDF uploadé en homepage apparaît dans compress-pdf', async ({ page }) => {
    // 1. Déposer sur homepage
    await page.goto(BASE);
    await page.locator('#detectorInput').setInputFiles(F('test.pdf'));
    await expect(page.locator('#detectorResults')).toBeVisible({ timeout: 3000 });

    // 2. Aller sur la page outil
    await page.goto(`${BASE}/compress-pdf`);
    // Le fichier doit être pré-chargé via IDB
    await expect(page.locator('#fileRow')).toBeVisible({ timeout: 5000 });
    await expect(page.locator('#fileName')).not.toHaveText('');
  });

  test('JPG uploadé en homepage apparaît dans compress-image', async ({ page }) => {
    await page.goto(BASE);
    await page.locator('#detectorInput').setInputFiles(F('test.jpg'));
    await expect(page.locator('#detectorResults')).toBeVisible({ timeout: 3000 });
    await page.goto(`${BASE}/compress-image`);
    await expect(page.locator('#fileRow')).toBeVisible({ timeout: 5000 });
  });
});

// ─── SUITE 3 : Taille max ─────────────────────────────────────────────────────
test.describe('Limite de taille', () => {
  test('compress-pdf bloque les fichiers >100MB', async ({ page }) => {
    await page.goto(`${BASE}/compress-pdf`);
    // Simuler un fichier trop grand
    const blocked = await page.evaluate(() => {
      return new Promise((resolve) => {
        // Créer un fichier factice de 101 MB
        const bigFile = new File([new ArrayBuffer(101 * 1024 * 1024)], 'big.pdf', { type: 'application/pdf' });
        let alerted = false;
        const origAlert = window.alert;
        window.alert = (msg) => { alerted = true; window.alert = origAlert; };
        // Appeler loadFile directement
        if (typeof loadFile === 'function') loadFile(bigFile);
        else if (typeof load === 'function') load(bigFile);
        resolve(alerted);
      });
    });
    expect(blocked).toBe(true);
  });

  test('mp4-to-mp3 bloque les fichiers >500MB', async ({ page }) => {
    await page.goto(`${BASE}/mp4-to-mp3`);
    const blocked = await page.evaluate(() => {
      return new Promise((resolve) => {
        const bigFile = new File([new ArrayBuffer(501 * 1024 * 1024)], 'big.mp4', { type: 'video/mp4' });
        let alerted = false;
        const origAlert = window.alert;
        window.alert = () => { alerted = true; window.alert = origAlert; };
        if (typeof loadFile === 'function') loadFile(bigFile);
        else if (typeof load === 'function') load(bigFile);
        resolve(alerted);
      });
    });
    expect(blocked).toBe(true);
  });
});

// ─── SUITE 4 : Conversions PDF ───────────────────────────────────────────────
test.describe('PDF Tools', () => {
  test('compress-pdf : upload → bouton actif → download visible', async ({ page }) => {
    await page.goto(`${BASE}/compress-pdf`);
    await uploadAndConvert(page, F('test.pdf'));
    await expect(page.locator('#dlBtn')).toBeVisible();
  });

  test('pdf-to-jpg : upload → pages converties → download visible', async ({ page }) => {
    await page.goto(`${BASE}/pdf-to-jpg`);
    await uploadAndConvert(page, F('test.pdf'), 'dl');
    await expect(page.locator('#dlAll, #dl')).toBeVisible();
  });

  test('merge-pdf : upload → conversion → download visible', async ({ page }) => {
    await page.goto(`${BASE}/merge-pdf`);
    await uploadAndConvert(page, F('test.pdf'));
    await expect(page.locator('#dlBtn')).toBeVisible();
  });

  test('split-pdf : upload → conversion → download visible', async ({ page }) => {
    await page.goto(`${BASE}/split-pdf`);
    await uploadAndConvert(page, F('test.pdf'));
    await expect(page.locator('#dlBtn')).toBeVisible();
  });

  test('rotate-pdf : upload → conversion → download visible', async ({ page }) => {
    await page.goto(`${BASE}/rotate-pdf`);
    await uploadAndConvert(page, F('test.pdf'));
    await expect(page.locator('#dlBtn')).toBeVisible();
  });

  test('pdf-to-word : conversion 100% browser (pas d\'appel serveur)', async ({ page }) => {
    const serverCalls = [];
    page.on('request', req => {
      const url = req.url();
      if (url.includes('convertapi.com') || url.includes('api.')) {
        serverCalls.push(url);
      }
    });
    await page.goto(`${BASE}/pdf-to-word`);
    await uploadAndConvert(page, F('test.pdf'));
    expect(serverCalls).toHaveLength(0);
    await expect(page.locator('#dlWrap, #dl')).toBeVisible();
  });

  test('pdf-to-excel : upload → download visible', async ({ page }) => {
    await page.goto(`${BASE}/pdf-to-excel`);
    await uploadAndConvert(page, F('test.pdf'));
    await expect(page.locator('#dlWrap')).toBeVisible();
  });
});

// ─── SUITE 5 : Conversions Image ─────────────────────────────────────────────
test.describe('Image Tools', () => {
  test('compress-image : JPG → compressé → download visible', async ({ page }) => {
    await page.goto(`${BASE}/compress-image`);
    await uploadAndConvert(page, F('test.jpg'));
    await expect(page.locator('#dlWrap')).toBeVisible();
  });

  test('jpg-to-pdf : JPG → PDF → download visible', async ({ page }) => {
    await page.goto(`${BASE}/jpg-to-pdf`);
    await uploadAndConvert(page, F('test.jpg'));
    await expect(page.locator('#dlWrap')).toBeVisible();
  });

  test('jpg-to-png : JPG → PNG → download visible', async ({ page }) => {
    await page.goto(`${BASE}/jpg-to-png`);
    await uploadAndConvert(page, F('test.jpg'));
    await expect(page.locator('#dlWrap')).toBeVisible();
  });

  test('png-to-jpg : PNG → JPG → download visible', async ({ page }) => {
    await page.goto(`${BASE}/png-to-jpg`);
    await uploadAndConvert(page, F('test.png'));
    await expect(page.locator('#dlWrap')).toBeVisible();
  });

  test('webp-to-jpg : WebP → JPG → download visible', async ({ page }) => {
    await page.goto(`${BASE}/webp-to-jpg`);
    await uploadAndConvert(page, F('test.webp'));
    await expect(page.locator('#dlWrap')).toBeVisible();
  });

  test('heic-to-jpg : page charge et upload zone est prête', async ({ page }) => {
    await page.goto(`${BASE}/heic-to-jpg`);
    await expect(page.locator('#zone')).toBeVisible();
    await expect(page.locator('#convertBtn')).toBeVisible();
    // HEIC : pas de fixture car format propriétaire Apple — on vérifie juste le chargement
  });
});

// ─── SUITE 6 : Conversions Document ──────────────────────────────────────────
test.describe('Document Tools', () => {
  test('word-to-pdf : DOCX → PDF → download visible', async ({ page }) => {
    await page.goto(`${BASE}/word-to-pdf`);
    await uploadAndConvert(page, F('test.docx'));
    await expect(page.locator('#dlWrap')).toBeVisible();
  });

  test('excel-to-pdf : XLSX → PDF → download visible', async ({ page }) => {
    await page.goto(`${BASE}/excel-to-pdf`);
    await uploadAndConvert(page, F('test.xlsx'));
    await expect(page.locator('#dlWrap')).toBeVisible();
  });

  test('word-to-jpg : DOCX → JPG → download visible', async ({ page }) => {
    await page.goto(`${BASE}/word-to-jpg`);
    await uploadAndConvert(page, F('test.docx'));
    await expect(page.locator('#dlWrap')).toBeVisible();
  });
});

// ─── SUITE 7 : Conversions Audio/Vidéo ───────────────────────────────────────
test.describe('Audio & Video Tools', () => {
  // FFmpeg est lourd (~30MB WASM) — on teste le chargement + upload mais pas la conversion complète
  // car trop long pour une CI. On vérifie que le fichier est accepté.
  
  test('mp4-to-mp3 : page charge et accepte un MP3 (proxy)', async ({ page }) => {
    await page.goto(`${BASE}/mp4-to-mp3`);
    await expect(page.locator('#zone')).toBeVisible();
    // On upload un mp3 pour tester le flux sans attendre FFmpeg
    await page.locator('#inp').setInputFiles(F('test.mp3'));
    await expect(page.locator('#fileRow')).toBeVisible({ timeout: 5000 });
  });

  test('wav-to-mp3 : page charge et accepte un WAV', async ({ page }) => {
    await page.goto(`${BASE}/wav-to-mp3`);
    await expect(page.locator('#zone')).toBeVisible();
    await page.locator('#inp').setInputFiles(F('test.wav'));
    await expect(page.locator('#fileRow')).toBeVisible({ timeout: 5000 });
  });

  test('mp3-to-wav : page charge et accepte un MP3', async ({ page }) => {
    await page.goto(`${BASE}/mp3-to-wav`);
    await expect(page.locator('#zone')).toBeVisible();
    await page.locator('#inp').setInputFiles(F('test.mp3'));
    await expect(page.locator('#fileRow')).toBeVisible({ timeout: 5000 });
  });
});

// ─── SUITE 8 : Aucun appel serveur ───────────────────────────────────────────
test.describe('No server calls', () => {
  const ALLOWED = [
    'turboconvert.io', 'cdn.jsdelivr.net', 'fonts.googleapis.com',
    'fonts.gstatic.com', 'pagead2.googlesyndication.com',
    'cdnjs.cloudflare.com', 'unpkg.com', 'localhost', '127.0.0.1'
  ];

  const TOOL_URLS = [
    'compress-pdf', 'compress-image', 'jpg-to-pdf', 'jpg-to-png',
    'png-to-jpg', 'webp-to-jpg', 'merge-pdf', 'split-pdf',
    'rotate-pdf', 'pdf-to-jpg', 'word-to-pdf'
  ];

  for (const tool of TOOL_URLS) {
    test(`${tool} : aucun appel API externe`, async ({ page }) => {
      const externalCalls = [];
      page.on('request', req => {
        const url = req.url();
        if (req.resourceType() === 'fetch' || req.resourceType() === 'xhr') {
          const isAllowed = ALLOWED.some(d => url.includes(d));
          if (!isAllowed) externalCalls.push(url);
        }
      });
      await page.goto(`${BASE}/${tool}`);
      await page.waitForTimeout(2000);
      expect(externalCalls, `External calls found: ${externalCalls.join(', ')}`).toHaveLength(0);
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
    'how-to-compress-pdf', 'how-to-convert-pdf-to-word',
    'how-to-merge-pdf', 'how-to-split-pdf', 'how-to-reduce-image-size'
  ];

  for (const slug of BLOG_ARTICLES) {
    test(`blog/${slug} : charge et a un lien vers l'outil`, async ({ page }) => {
      await page.goto(`${BASE}/blog/${slug}`);
      await expect(page.locator('h1')).toBeVisible();
      // Vérifier qu'il y a au moins un lien vers un outil
      const toolLinks = page.locator('a[href^="/"][href!="/"][href!="/blog"]');
      await expect(toolLinks.first()).toBeVisible();
    });
  }
});
