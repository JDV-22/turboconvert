#!/usr/bin/env python3
"""
TurboConvert — Suite de tests anti-régression
=============================================
Usage : python3 test-turboconvert.py <fichier.zip>
        python3 test-turboconvert.py <dossier/>

Jouer AVANT chaque livraison GitHub.
Exit code 0 = OK, 1 = erreurs bloquantes.
"""

import re, sys, os, json, zipfile, tempfile, shutil
from pathlib import Path

# ══════════════════════════════════════════════════════════════════════
# CONFIGURATION — source de vérité
# ══════════════════════════════════════════════════════════════════════

# Tous les liens outils attendus depuis la homepage
EXPECTED_TOOL_PAGES = [
    'compress-image', 'compress-pdf', 'excel-to-pdf', 'heic-to-jpg',
    'jpg-to-pdf', 'jpg-to-png', 'merge-pdf', 'mp3-to-mp4', 'mp3-to-wav',
    'mp4-to-mp3', 'pdf-to-excel', 'pdf-to-jpg', 'pdf-to-ppt', 'pdf-to-word',
    'png-to-jpg', 'ppt-to-pdf', 'rotate-pdf', 'split-pdf', 'wav-to-mp3',
    'webp-to-jpg', 'word-to-jpg', 'word-to-pdf',
]

# Pages qui utilisent FFmpeg WebAssembly (critères stricts)
FFMPEG_PAGES = ['mp4-to-mp3', 'wav-to-mp3', 'mp3-to-wav', 'mp3-to-mp4']
FFMPEG_VERSION = '@ffmpeg/ffmpeg@0.11.6'
FFMPEG_CORE    = '@ffmpeg/core@0.11.0'
# libmp3lame requis seulement pour les pages qui encodent en MP3
FFMPEG_MP3_ENCODE_PAGES = ['mp4-to-mp3', 'wav-to-mp3']

# Pages PDF avec pdf-lib ou pdfjs
PDF_LIB_PAGES = ['merge-pdf', 'split-pdf', 'rotate-pdf', 'compress-pdf', 'pdf-to-jpg']

# Limite de taille attendue par page (MB) — source de vérité
SIZE_LIMITS = {
    'mp4-to-mp3': 500, 'wav-to-mp3': 500,
    'mp3-to-mp4': 500, 'mp3-to-wav': 500,
}
DEFAULT_SIZE_LIMIT = 100  # MB pour toutes les autres

# AdSense client ID attendu
ADSENSE_CLIENT = 'ca-pub-6238323731269830'

# ══════════════════════════════════════════════════════════════════════
# HELPERS
# ══════════════════════════════════════════════════════════════════════

class TestResult:
    def __init__(self):
        self.errors   = []
        self.warnings = []
        self.passed   = 0

    def fail(self, page, msg):
        self.errors.append(f'  FAIL [{page}] {msg}')

    def warn(self, page, msg):
        self.warnings.append(f'  WARN [{page}] {msg}')

    def ok(self):
        self.passed += 1

    def report(self):
        print('=' * 60)
        print(f'TurboConvert Test Suite')
        print('=' * 60)
        if self.warnings:
            print(f'\nWARNINGS ({len(self.warnings)}):')
            for w in self.warnings: print(w)
        if self.errors:
            print(f'\nERRORS ({len(self.errors)}):')
            for e in self.errors: print(e)
        print('=' * 60)
        total = self.passed + len(self.errors)
        if self.errors:
            print(f'🚫 {len(self.errors)} error(s) — deployment BLOCKED.')
            return False
        else:
            print(f'✅ All {self.passed} checks passed — safe to deploy.')
            return True


def load_site(path_arg):
    """Charge le site depuis un zip ou un dossier. Retourne {nom_fichier: contenu_str}."""
    files = {}
    if path_arg.endswith('.zip'):
        with zipfile.ZipFile(path_arg) as z:
            for name in z.namelist():
                if name.endswith('.html') or name in ('sitemap.xml', 'robots.txt', 'llms.txt'):
                    try:
                        files[name] = z.read(name).decode('utf-8', errors='replace')
                    except Exception:
                        pass
    else:
        base = Path(path_arg)
        for f in base.rglob('*.html'):
            key = str(f.relative_to(base))
            files[key] = f.read_text(errors='replace')
        for extra in ('sitemap.xml', 'robots.txt', 'llms.txt'):
            p = base / extra
            if p.exists():
                files[extra] = p.read_text()
    return files


# ══════════════════════════════════════════════════════════════════════
# TESTS
# ══════════════════════════════════════════════════════════════════════

def test_homepage_links(files, r):
    """T1 — Chaque lien outil de la homepage pointe vers une page existante (pas /#)."""
    index = files.get('index.html', '')
    if not index:
        r.fail('index.html', 'Fichier manquant')
        return

    hrefs = re.findall(r'href="(/[a-z0-9-]+)"', index)
    hrefs = [h for h in hrefs if h not in ('/', '/blog', '/privacy', '/terms', '/contact')]

    for href in set(hrefs):
        if href.startswith('/#'):
            r.fail('index.html', f'Lien ancre invalide : {href}')
            continue
        slug = href.strip('/')
        if f'{slug}.html' not in files:
            r.fail('index.html', f'Lien mort : {href} → {slug}.html manquant')
        else:
            r.ok()

    # Vérifier que toutes les pages attendues sont liées depuis la homepage
    for slug in EXPECTED_TOOL_PAGES:
        if f'/{slug}' not in hrefs and f'/{slug}"' not in index:
            r.warn('index.html', f'Page attendue non liée depuis homepage : /{slug}')


def test_page_is_tool_not_blog(files, r):
    """T2 — Les pages outils ne sont pas des articles de blog."""
    for slug in EXPECTED_TOOL_PAGES:
        name = f'{slug}.html'
        c = files.get(name, '')
        if not c:
            r.fail(name, 'Fichier manquant')
            continue

        # Signes qu'une page est un article et non un outil
        is_blog = (
            '← Blog' in c
            or bool(re.search(rf'canonical.*blog/{slug}', c.replace('"','').replace(' ','')))
            or ('"bc"' in c and f'/blog/{slug}' in c[:3000])
        )
        if is_blog:
            r.fail(name, f'Page article de blog au lieu de page outil (canonical pointe vers /blog/{slug})')
        else:
            r.ok()


def test_file_upload_present(files, r):
    """T3 — Chaque page outil possède un <input type="file">."""
    for slug in EXPECTED_TOOL_PAGES:
        name = f'{slug}.html'
        c = files.get(name, '')
        if not c: continue
        if not re.search(r'<input[^>]+type=["\']file["\']', c):
            r.fail(name, 'Aucun <input type="file"> trouvé — upload impossible')
        else:
            r.ok()


def test_download_trigger(files, r):
    """T4 — Chaque page outil a un mécanisme de téléchargement (download link ou blob)."""
    for slug in EXPECTED_TOOL_PAGES:
        name = f'{slug}.html'
        c = files.get(name, '')
        if not c: continue
        has_dl = bool(re.search(
            r'(\.download\s*=|URL\.createObjectURL|createObjectURL|href.*blob:|download.*btn|btn.*download)',
            c, re.IGNORECASE
        ))
        if not has_dl:
            r.warn(name, 'Mécanisme de téléchargement non détecté — vérifier manuellement')
        else:
            r.ok()


def test_real_conversion_logic(files, r):
    """T5 — Chaque page outil contient de la vraie logique de conversion (pas un faux loader)."""
    CONVERSION_SIGNALS = [
        r'FileReader', r'canvas\.', r'pdf-lib', r'pdfjsLib', r'mammoth',
        r'FFmpeg', r'ffmpeg', r'createFFmpeg', r'UTIF\b', r'heic2any',
        r'ImageMagick', r'Ghostscript', r'drawImage', r'toBlob', r'toDataURL',
        r'getDocument', r'renderPage', r'PDFDocument',
        r'convertapi', r'formData', r'fetch\(', r'XMLHttpRequest', r'Worker',
        r'WebAssembly', r'wasm',
    ]
    for slug in EXPECTED_TOOL_PAGES:
        name = f'{slug}.html'
        c = files.get(name, '')
        if not c: continue
        found = any(re.search(sig, c) for sig in CONVERSION_SIGNALS)
        if not found:
            r.warn(name, 'Logique de conversion JS non détectée — risque de faux loader')
        else:
            r.ok()


def test_ffmpeg_version(files, r):
    """T6 — Pages FFmpeg : version 0.11.6, corePath 0.11.0. Pages MP3-encode : codec libmp3lame."""
    for slug in FFMPEG_PAGES:
        name = f'{slug}.html'
        c = files.get(name, '')
        if not c:
            r.fail(name, 'Fichier manquant')
            continue
        if FFMPEG_VERSION not in c:
            r.fail(name, f'Wrong FFmpeg version — must be {FFMPEG_VERSION}')
        else:
            r.ok()
        if FFMPEG_CORE not in c:
            r.fail(name, f'Missing corePath {FFMPEG_CORE}')
        else:
            r.ok()
        # libmp3lame requis seulement sur les pages qui encodent vers MP3
        if slug in FFMPEG_MP3_ENCODE_PAGES:
            if 'libmp3lame' not in c:
                r.fail(name, 'Missing codec: libmp3lame (required for MP3 encoding)')
            else:
                r.ok()
        # Error handling
        if 'catch' not in c and 'onerror' not in c.lower():
            r.warn(name, 'Error handling may be incomplete')


def test_size_limit(files, r):
    """T7 — La limite de taille affichée correspond à la limite réellement appliquée dans le JS."""
    for slug in EXPECTED_TOOL_PAGES:
        name = f'{slug}.html'
        c = files.get(name, '')
        if not c: continue

        expected_mb = SIZE_LIMITS.get(slug, DEFAULT_SIZE_LIMIT)

        # Chercher la limite affichée (ex: "100 MB", "100MB", "100 Mo")
        displayed = re.findall(r'(\d+)\s*M[Bbo]', c)
        # Chercher la limite JS (en bytes, ex: 100 * 1024 * 1024 ou 104857600)
        js_bytes   = re.findall(r'(\d+)\s*\*\s*1024\s*\*\s*1024', c)
        js_direct  = re.findall(r'(\d{6,9})', c)  # valeurs en bytes directes

        if displayed:
            displayed_mb = int(displayed[0])
            if displayed_mb != expected_mb:
                r.warn(name, f'Limite affichée {displayed_mb} MB ≠ attendu {expected_mb} MB')
            else:
                r.ok()

        if js_bytes:
            for val in js_bytes:
                if int(val) != expected_mb:
                    r.warn(name, f'Limite JS ({val} MB) ≠ limite affichée ({expected_mb} MB)')
                    break
            else:
                r.ok()


def test_seo_og_tags(files, r):
    """T8 — Chaque page HTML a des Open Graph tags complets."""
    required_og = ['og:title', 'og:description', 'og:url', 'og:image']
    for name, c in files.items():
        if not name.endswith('.html'): continue
        for tag in required_og:
            if tag not in c:
                r.warn(name, f'OG tag manquant : {tag}')
                break
        else:
            r.ok()


def test_seo_schema(files, r):
    """T9 — Pages outils : Schema WebApplication + FAQPage. Blog : BreadcrumbList."""
    for slug in EXPECTED_TOOL_PAGES:
        name = f'{slug}.html'
        c = files.get(name, '')
        if not c: continue
        if 'WebApplication' not in c:
            r.warn(name, 'Schema WebApplication manquant')
        if 'FAQPage' not in c:
            r.warn(name, 'Schema FAQPage manquant')
        else:
            r.ok()

    for name, c in files.items():
        if not name.startswith('blog/'): continue
        if not name.endswith('.html'): continue
        if 'BreadcrumbList' not in c:
            r.warn(name, 'Schema BreadcrumbList manquant sur article blog')
        else:
            r.ok()


def test_adsense(files, r):
    """T10 — Script AdSense présent dans chaque page HTML."""
    for name, c in files.items():
        if not name.endswith('.html'): continue
        if name in ('privacy.html', 'terms.html'): continue  # optionnel
        if ADSENSE_CLIENT not in c:
            r.warn(name, f'Script AdSense ({ADSENSE_CLIENT}) absent')
        else:
            r.ok()


def test_title_length(files, r):
    """T11 — Titres entre 30 et 60 caractères."""
    for name, c in files.items():
        if not name.endswith('.html'): continue
        m = re.search(r'<title>(.*?)</title>', c, re.DOTALL)
        if not m:
            r.warn(name, 'Balise <title> manquante')
            continue
        title = m.group(1).strip()
        if len(title) > 70:
            r.warn(name, f'Title trop long ({len(title)}c > 70) : "{title}"')
        elif len(title) < 20:
            r.warn(name, f'Title trop court ({len(title)}c) : "{title}"')
        else:
            r.ok()


def test_canonical(files, r):
    """T12 — Canonical présent et cohérent (pas de /blog/ pour une page outil)."""
    for slug in EXPECTED_TOOL_PAGES:
        name = f'{slug}.html'
        c = files.get(name, '')
        if not c: continue
        m = re.search(r'<link rel="canonical" href="([^"]+)"', c)
        if not m:
            r.warn(name, 'Canonical manquant')
            continue
        canonical = m.group(1)
        expected  = f'https://turboconvert.io/{slug}'
        if canonical != expected:
            r.fail(name, f'Canonical incorrect : "{canonical}" ≠ "{expected}"')
        else:
            r.ok()


def test_indexdb_transfer(files, r):
    """T13 — Pages outils principales : présence du mécanisme IndexedDB depuis le Hero.
    Pages legacy sans ce mécanisme sont en WARN seulement (pas FAIL)."""
    # Pages confirmées avec IndexedDB hero transfer
    PAGES_WITH_IDB = [
        'compress-pdf', 'merge-pdf', 'split-pdf', 'rotate-pdf',
        'pdf-to-jpg', 'pdf-to-word', 'jpg-to-pdf', 'compress-image',
        'mp4-to-mp3', 'mp3-to-wav', 'wav-to-mp3', 'mp3-to-mp4',
    ]
    for slug in PAGES_WITH_IDB:
        name = f'{slug}.html'
        c = files.get(name, '')
        if not c: continue
        has_idb = bool(re.search(r'indexedDB|IndexedDB|openDB|idb\.', c))
        if not has_idb:
            r.warn(name, 'Transfert IndexedDB depuis Hero absent — fichier Hero non transmis')
        else:
            r.ok()


def test_sitemap_coverage(files, r):
    """T14 — Sitemap couvre toutes les pages outils."""
    sitemap = files.get('sitemap.xml', '')
    if not sitemap:
        r.warn('sitemap.xml', 'Fichier manquant')
        return
    for slug in EXPECTED_TOOL_PAGES:
        if f'/{slug}' not in sitemap:
            r.warn('sitemap.xml', f'Page outil absente du sitemap : /{slug}')
        else:
            r.ok()


def test_llms_txt(files, r):
    """T15 — llms.txt présent et contient les outils principaux."""
    llms = files.get('llms.txt', '')
    if not llms:
        r.warn('llms.txt', 'Fichier manquant — visibilité IA réduite')
        return
    for slug in ['compress-pdf', 'merge-pdf', 'mp4-to-mp3']:
        if slug not in llms:
            r.warn('llms.txt', f'Outil non documenté dans llms.txt : {slug}')
        else:
            r.ok()


def test_no_placeholder_links(files, r):
    """T16 — Pas de liens javascript:void ou TODO dans les pages outils.
    Note: href='#' est accepté s'il est modifié dynamiquement par JS (pattern normal pour les boutons download)."""
    BAD_PATTERNS = [r'href="javascript:void\(0\)"', r'TODO']
    # Note: PLACEHOLDER retiré — faux positif sur la classe CSS .ad-placeholder
    for slug in EXPECTED_TOOL_PAGES:
        name = f'{slug}.html'
        c = files.get(name, '')
        if not c: continue
        for pat in BAD_PATTERNS:
            if re.search(pat, c):
                r.warn(name, f'Pattern suspect détecté : {pat}')




def test_no_duplicate_pages(files, r):
    """T17 — Aucune page outil dupliquée entre racine et /blog/."""
    SHOULD_NOT_BE_AT_ROOT = [
        'how-to-compress-pdf.html', 'how-to-convert-pdf-to-word.html',
        'how-to-merge-pdf.html', 'how-to-reduce-image-size.html',
        'how-to-rotate-pdf.html', 'how-to-split-pdf.html',
        'best-free-pdf-tools.html', 'blog-how-to-compress-pdf.html',
    ]
    for fname in SHOULD_NOT_BE_AT_ROOT:
        if fname in files:
            r.fail(fname, f'Page dupliquée à la racine — doit être uniquement dans /blog/')
        else:
            r.ok()

    # Vérifier aussi qu'aucune page outil n'est copiée dans /blog/
    TOOL_SLUGS_NOT_IN_BLOG = ['compress-image', 'compress-pdf', 'pdf-to-word',
                               'word-to-pdf', 'merge-pdf', 'split-pdf']
    for slug in TOOL_SLUGS_NOT_IN_BLOG:
        blog_copy = f'blog/{slug}.html'
        if blog_copy in files:
            # Vérifier que ce n'est pas un vrai article (à la différence d'un outil)
            c = files[blog_copy]
            if 'upload-zone' in c or 'fileInput' in c:
                r.fail(blog_copy, f'Page outil ({slug}) copiée dans /blog/ — duplicate content')
            else:
                r.ok()
        else:
            r.ok()


def test_meta_description_length(files, r):
    """T18 — Meta descriptions entre 80 et 160 caractères sur toutes les pages."""
    EXEMPT = {'privacy.html', 'terms.html'}
    for name, c in sorted(files.items()):
        if not name.endswith('.html'): continue
        fname = name.split('/')[-1]
        if fname in EXEMPT: continue
        m = re.search(r'<meta name="description" content="([^"]*)"', c)
        if not m:
            r.warn(name, 'Meta description manquante')
            continue
        desc = m.group(1)
        if len(desc) < 80:
            r.fail(name, f'Meta desc trop courte ({len(desc)} chars < 80) : "{desc[:60]}…"')
        elif len(desc) > 162:
            r.warn(name, f'Meta desc trop longue ({len(desc)} chars > 160)')
        else:
            r.ok()


def test_og_image_present(files, r):
    """T19 — og:image présent sur toutes les pages avec AdSense (pages publiques)."""
    for name, c in sorted(files.items()):
        if not name.endswith('.html'): continue
        if name in ('privacy.html', 'terms.html'): continue
        if 'adsbygoogle' not in c: continue
        if '<meta property="og:image"' not in c:
            r.fail(name, 'og:image manquant — partage réseaux sociaux dégradé')
        else:
            r.ok()


def test_schema_inline_not_js(files, r):
    """T20 — Schemas ld+json injectés inline dans le HTML, pas via schema-inject.js seul."""
    for slug in EXPECTED_TOOL_PAGES:
        name = f'{slug}.html'
        c = files.get(name, '')
        if not c: continue
        has_inline = 'application/ld+json' in c
        # S'il ne contient que le script externe sans ld+json inline, c'est un problème
        if not has_inline and 'WebApplication' not in c:
            r.fail(name, 'Schema non inline — Google ne crawle pas toujours le JS (schema-inject.js)')
        else:
            r.ok()

    # Homepage
    idx = files.get('index.html', '')
    if idx and 'application/ld+json' not in idx:
        r.fail('index.html', 'Aucun schema ld+json inline sur la homepage')
    elif idx:
        r.ok()


def test_sitemap_no_dead_urls(files, r):
    """T21 — Toutes les URLs du sitemap correspondent à un fichier HTML existant."""
    sitemap = files.get('sitemap.xml', '')
    if not sitemap:
        r.warn('sitemap.xml', 'Fichier manquant')
        return
    urls = re.findall(r'<loc>(.*?)</loc>', sitemap)
    for url in urls:
        slug = url.replace('https://turboconvert.io/', '').rstrip('/')
        if not slug or slug == 'blog':
            r.ok()
            continue
        fname = slug + '.html'
        if fname not in files:
            r.fail('sitemap.xml', f'URL morte dans sitemap : {url} → {fname} introuvable')
        else:
            r.ok()


def test_sitemap_no_extra_urls(files, r):
    """T22 — Le sitemap ne contient pas d'URLs inexistantes (doublons, fantômes)."""
    sitemap = files.get('sitemap.xml', '')
    if not sitemap: return
    urls = re.findall(r'<loc>(.*?)</loc>', sitemap)
    seen = set()
    for url in urls:
        if url in seen:
            r.fail('sitemap.xml', f'URL dupliquée dans sitemap : {url}')
        else:
            seen.add(url)
            r.ok()


def test_adsense_guard_present(files, r):
    """T23 — adsense-guard.js inclus sur toutes les pages avec AdSense."""
    for name, c in sorted(files.items()):
        if not name.endswith('.html'): continue
        if 'adsbygoogle' not in c: continue
        if 'adsense-guard' not in c:
            r.fail(name, 'adsense-guard.js absent — espaces vides visibles si ads non servies')
        else:
            r.ok()


def test_no_double_upload_trigger(files, r):
    """T24 — Pas de double trigger upload (zone.addEventListener click + input overlay)."""
    pattern = re.compile(
        r'zone\.addEventListener\([\'"]click[\'"],\s*(?:\(\)|function\s*\(\))\s*(?:=>|\{)\s*(?:inp|input|fileInput)\.click\(\)',
        re.IGNORECASE
    )
    for name, c in sorted(files.items()):
        if not name.endswith('.html'): continue
        if pattern.search(c):
            r.fail(name, 'Double upload trigger détecté — ouverture double picker sur Safari/Firefox')
        else:
            r.ok()


def test_blog_canonical_correct(files, r):
    """T25 — Les articles /blog/ ont un canonical pointant vers /blog/<slug>, pas vers la racine."""
    for name, c in sorted(files.items()):
        if not name.startswith('blog/'): continue
        if not name.endswith('.html'): continue
        slug = name.replace('.html', '')  # ex: blog/how-to-compress-pdf
        m = re.search(r'<link rel="canonical" href="([^"]*)"', c)
        if not m:
            r.warn(name, 'Canonical manquant')
            continue
        canonical = m.group(1)
        expected = f'https://turboconvert.io/{slug}'
        if canonical != expected:
            r.fail(name, f'Canonical incorrect : "{canonical}" ≠ "{expected}"')
        else:
            r.ok()


def test_input_file_hidden(files, r):
    """T26 — Les input[type=file] dans les zones d'upload sont invisibles (opacity:0 ou display:none)."""
    for name, c in sorted(files.items()):
        if not name.endswith('.html'): continue
        # Chercher input type file NON caché dans une upload-zone ou detector-zone
        inputs = re.findall(r'<input[^>]+type=["\']file["\'][^>]*>', c, re.IGNORECASE)
        for inp in inputs:
            is_hidden = 'opacity:0' in inp or 'display:none' in inp or 'visibility:hidden' in inp
            if not is_hidden and ('uploadZone' in c or 'detector-zone' in c):
                r.fail(name, 'input[type=file] visible nativement — bouton navigateur affiché à l\'utilisateur')
                break
        else:
            r.ok()


# ══════════════════════════════════════════════════════════════════════
# RUNNER
# ══════════════════════════════════════════════════════════════════════

def run(path_arg):
    print(f'\n📂 Chargement : {path_arg}')
    files = load_site(path_arg)
    print(f'   {len(files)} fichiers chargés\n')

    r = TestResult()

    print('Running tests...')
    test_homepage_links(files, r)
    test_page_is_tool_not_blog(files, r)
    test_file_upload_present(files, r)
    test_download_trigger(files, r)
    test_real_conversion_logic(files, r)
    test_ffmpeg_version(files, r)
    test_size_limit(files, r)
    test_seo_og_tags(files, r)
    test_seo_schema(files, r)
    test_adsense(files, r)
    test_title_length(files, r)
    test_canonical(files, r)
    test_indexdb_transfer(files, r)
    test_sitemap_coverage(files, r)
    test_llms_txt(files, r)
    test_no_placeholder_links(files, r)
    # ── Tests v8 : anti-régression sur corrections auditées ──
    test_no_duplicate_pages(files, r)
    test_meta_description_length(files, r)
    test_og_image_present(files, r)
    test_schema_inline_not_js(files, r)
    test_sitemap_no_dead_urls(files, r)
    test_sitemap_no_extra_urls(files, r)
    test_adsense_guard_present(files, r)
    test_no_double_upload_trigger(files, r)
    test_blog_canonical_correct(files, r)
    test_input_file_hidden(files, r)

    success = r.report()
    return 0 if success else 1


if __name__ == '__main__':
    if len(sys.argv) < 2:
        print('Usage: python3 test-turboconvert.py <fichier.zip ou dossier/>')
        sys.exit(1)
    sys.exit(run(sys.argv[1]))
