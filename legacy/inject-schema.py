import glob, re

INJECT_SCHEMA  = '<script src="/schema-inject.js"></script>'
INJECT_ADSENSE_HEAD = '<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6238323731269830" crossorigin="anonymous"></script>'
INJECT_FAVICON = '<link rel="icon" type="image/svg+xml" href="/favicon.svg"/>'

# Fichiers gérés manuellement — exclus de l'injection schema
EXCLUDE_SCHEMA = ['mp4-to-mp3.html', 'mp3-to-mp4.html', 'mp3-to-wav.html', 'wav-to-mp3.html']

files = glob.glob('*.html')
changed = []

for filepath in files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    modified = False

    # ── Injection favicon dans <head> ─────────────────────────────────────────
    if 'favicon' not in content and '</head>' in content:
        content = content.replace('</head>', f'{INJECT_FAVICON}\n</head>', 1)
        modified = True

    # ── Injection schema ──────────────────────────────────────────────────────
    if filepath not in EXCLUDE_SCHEMA:
        content = re.sub(
            r'\n?\s*<script type="application/ld\+json">[\s\S]*?</script>',
            '', content
        )
        if 'schema-inject.js' not in content and '</body>' in content:
            content = content.replace('</body>', f'{INJECT_SCHEMA}\n</body>', 1)
            modified = True

    # ── Remplacement placeholder ad par vrai ins AdSense ─────────────────────────
    OLD_AD_PLACEHOLDER = '<div class="ad">Advertisement · 728×90 (Google AdSense)</div>'
    OLD_AD_PLACEHOLDER2 = '<div class="ad-slot">Advertisement · 728×90 (Google AdSense)</div>'
    NEW_AD_INS = """<div class="ad-tool-top">
    <ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-6238323731269830" data-ad-slot="auto" data-ad-format="auto" data-full-width-responsive="true"></ins>
    <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
  </div>"""
    if OLD_AD_PLACEHOLDER2 in content:
        content = content.replace(OLD_AD_PLACEHOLDER2, NEW_AD_INS)
        modified = True
    if OLD_AD_PLACEHOLDER in content:
        content = content.replace(OLD_AD_PLACEHOLDER, NEW_AD_INS)
        modified = True

    # ── Injection AdSense dans <head> ─────────────────────────────────────────
    # Supprimer l'ancienne balise adsense-inject.js si présente (migration)
    if '<script src="/adsense-inject.js"></script>' in content:
        content = content.replace('\n<script src="/adsense-inject.js"></script>', '')
        content = content.replace('<script src="/adsense-inject.js"></script>\n', '')
        modified = True
    if 'ca-pub-6238323731269830' not in content and '</head>' in content:
        content = content.replace('</head>', f'{INJECT_ADSENSE_HEAD}\n</head>', 1)
        modified = True

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

    if modified:
        changed.append(filepath)
        print(f'injected: {filepath}')
    else:
        print(f'skip: {filepath}')

print(f'Done: {len(changed)} files updated')
