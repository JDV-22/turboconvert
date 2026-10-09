#!/usr/bin/env python3
"""
TurboConvert — Tests automatisés avant déploiement.
Bloque le déploiement si un test échoue.
"""
import os, re, sys, glob

errors = []
warnings = []

def fail(page, msg): errors.append(f"FAIL [{page}] {msg}")
def warn(page, msg): warnings.append(f"WARN [{page}] {msg}")
def ok(page, msg):   print(f"  ok  [{page}] {msg}")

def strip_comments(content):
    content = re.sub(r'<!--.*?-->', '', content, flags=re.DOTALL)
    content = re.sub(r'//[^\n]*', '', content)
    return content

AUDIO_PAGES = {
    'mp4-to-mp3.html': {'input': 'mp4', 'output': 'mp3', 'codec': 'libmp3lame'},
    'wav-to-mp3.html': {'input': 'wav', 'output': 'mp3', 'codec': 'libmp3lame'},
    'mp3-to-wav.html': {'input': 'mp3', 'output': 'wav', 'codec': None},
    'mp3-to-mp4.html': {'input': 'mp3', 'output': 'mp4', 'codec': None},
}

ALL_HTML = glob.glob('*.html')
print(f"\nTesting {len(ALL_HTML)} HTML files...\n")

# ── Tests universels ─────────────────────────────────────────────────────────
for filepath in ALL_HTML:
    content = open(filepath, 'r', encoding='utf-8').read()

    if '<title>' not in content:
        fail(filepath, "Missing <title>")
    else:
        ok(filepath, "<title> present")

    if 'name="description"' not in content:
        fail(filepath, "Missing meta description")
    else:
        ok(filepath, "meta description present")

    # Schema : OK si présent OU si inject-schema.py va l'ajouter (schema-inject.js absent = sera ajouté)
    has_schema = 'schema-inject.js' in content or 'application/ld+json' in content
    # inject-schema.py va injecter schema-inject.js dans toutes les pages non-audio après ce test
    will_be_injected = filepath not in AUDIO_PAGES
    if not has_schema and not will_be_injected:
        fail(filepath, "Missing Schema.org — add schema-inject.js or ld+json manually")
    elif has_schema:
        ok(filepath, "Schema.org present")
    else:
        ok(filepath, "Schema.org will be injected by CI")

# ── Tests pages audio ────────────────────────────────────────────────────────
for filepath, rules in AUDIO_PAGES.items():
    if not os.path.exists(filepath):
        warn(filepath, "Not found — skipping")
        continue

    raw = open(filepath, 'r', encoding='utf-8').read()
    code = strip_comments(raw)

    if '@ffmpeg/ffmpeg@0.11.6' not in raw:
        fail(filepath, "Wrong FFmpeg version — must be @ffmpeg/ffmpeg@0.11.6")
    else:
        ok(filepath, "FFmpeg 0.11.6 ✓")

    if 'unpkg.com' in code:
        fail(filepath, "Uses unpkg.com — causes Worker CORS errors. Use jsdelivr.net")
    else:
        ok(filepath, "No unpkg.com ✓")

    if '@ffmpeg/core@0.11.0' not in raw:
        fail(filepath, "Missing corePath @ffmpeg/core@0.11.0")
    else:
        ok(filepath, "corePath 0.11.0 ✓")

    if 'SharedArrayBuffer' in code:
        fail(filepath, "Uses SharedArrayBuffer — causes COOP/COEP issues")
    else:
        ok(filepath, "No SharedArrayBuffer ✓")

    import re as _re
    acodec_copy_to_mp3 = bool(_re.search(r"'copy'[^;]*?\.mp3'", code, _re.DOTALL))
    if rules['output'] == 'mp3' and acodec_copy_to_mp3:
        fail(filepath, "Uses '-acodec copy' targeting .mp3 — produces corrupt files. Use libmp3lame")
    else:
        ok(filepath, "No problematic acodec copy ✓")

    if rules['codec'] and rules['codec'] not in code:
        fail(filepath, f"Missing codec: {rules['codec']}")
    elif rules['codec']:
        ok(filepath, f"Codec {rules['codec']} ✓")

    if 'catch' not in code:
        warn(filepath, "Error handling may be incomplete")
    else:
        ok(filepath, "Error handling ✓")

# ── Fichiers requis ──────────────────────────────────────────────────────────
print()
for f in ['schema-inject.js', 'robots.txt', 'sitemap.xml', 'inject-schema.py']:
    if os.path.exists(f):
        ok('repo', f"{f} ✓")
    else:
        fail('repo', f"Required file missing: {f}")

# ── Rapport ──────────────────────────────────────────────────────────────────
print("\n" + "="*60)
if warnings:
    print(f"WARNINGS ({len(warnings)}):")
    for w in warnings: print(f"  {w}")
print(f"\nERRORS ({len(errors)}):")
for e in errors: print(f"  {e}")
print("="*60)

if errors:
    print(f"\n🚫 {len(errors)} error(s) — deployment BLOCKED.\n")
    sys.exit(1)
else:
    print(f"\n✅ All tests passed — safe to deploy.\n")
    sys.exit(0)
