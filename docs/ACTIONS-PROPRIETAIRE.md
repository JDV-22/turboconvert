# TurboConvert — ce qu’il te reste à faire

Tout le code est prêt. Ces actions demandent **ton compte** ; elles sont classées par priorité. Durée totale : environ 1 h.

## 1. Mettre le site sur Cloudflare Pages (≈ 15 min) — prioritaire

L’offre gratuite de Vercel interdit l’usage commercial (publicité, affiliation). Cloudflare Pages est gratuit et l’autorise. Le site est déjà compatible (les fichiers `_headers` et `_redirects` sont générés automatiquement à chaque build).

1. Crée un compte sur https://dash.cloudflare.com (gratuit).
2. **Workers & Pages → Create → Pages → Connect to Git** → autorise GitHub → choisis le dépôt `JDV-22/turboconvert`.
3. Réglages de build :
   - Production branch : `main`
   - Framework preset : `Astro`
   - Build command : `npm run build`
   - Build output directory : `dist`
   - Variable d’environnement : `NODE_VERSION` = `22`
4. **Save and Deploy**. Vérifie l’adresse `*.pages.dev` fournie.
5. **Custom domains → Set up a custom domain → `turboconvert.io`**. Le plus simple : laisser Cloudflare gérer le DNS du domaine (il te guide pour changer les serveurs DNS chez Namecheap). ⚠️ Recrée alors chez Cloudflare les enregistrements existants : les **MX** de redirection e-mail (`eforward1…5.registrar-servers.com`), le **TXT SPF** et le **TXT `google-site-verification`**.
6. Une fois `turboconvert.io` servi par Cloudflare : sur Vercel, retire le domaine du projet (ou supprime le projet).
7. Bonus gratuit : Cloudflare → **Caching → Configuration → Crawler Hints : On** (indexation plus rapide sur Bing via IndexNow).

## 2. Search Console (≈ 10 min)

1. https://search.google.com/search-console → propriété `turboconvert.io` (déjà vérifiée par DNS).
2. **Sitemaps** → ajoute `https://turboconvert.io/sitemap.xml`.
3. **Inspection d’URL** → demande l’indexation de : `/`, `/fr`, `/compress-pdf`, `/fr/compresser-pdf`, `/pdf-to-jpg`, `/heic-to-jpg`, `/mp4-to-mp3`, `/merge-pdf`.
4. Bing : https://www.bing.com/webmasters → **Importer depuis Google Search Console**.
5. Dans 3–4 semaines, exporte le rapport **Performances** (requêtes + pages) et donne-le à une session Claude : on optimisera les pages qui apparaissent en page 2.

## 3. Mesure d’audience Umami (≈ 5 min)

1. https://cloud.umami.is → inscription gratuite → **Add website** `turboconvert.io`.
2. Copie le **Website ID** et colle-le dans `src/config/site.ts` → `umamiWebsiteId: '…'` (ou donne-le à une session Claude).
3. Tu verras les visites et les événements : `tool_view`, `files_added`, `convert_success`, `convert_error`, `download`, `home_drop`.

## 4. AdSense

1. Vérifie l’état du compte sur https://adsense.google.com.
   - S’il a été **désactivé par Google** : un nouveau compte n’est pas possible avec la même identité ; seule la procédure de recours (lien dans l’e-mail de désactivation) peut le rouvrir.
   - S’il est seulement **refusé/en attente** : attends que le nouveau site soit en ligne depuis 3–4 semaines avec du trafic, puis :
2. **Confidentialité et messages → RGPD → Créer un message** (langues EN, FR, ES, DE, PT, IT, bouton « Ne pas consentir » activé) → publier.
3. **Sites → turboconvert.io → Demander une revue**. Le fichier `ads.txt` est déjà en ligne.
4. Après approbation : crée 3 blocs d’annonces display (noms : `toolBelow`, `toolSidebar`, `article`) et colle leurs identifiants dans `src/config/site.ts` (`ADS.slots`) puis passe `ADS.enabled` à `true`. Les emplacements sont déjà prévus : jamais à côté des boutons, hauteur réservée.

## 5. Revenus complémentaires (optionnel)

- **Dons** : crée une page https://ko-fi.com → mets son URL dans `src/config/site.ts` → `donateUrl`. Un lien discret s’affiche après chaque conversion réussie.
- **Affiliation** (après la mise en ligne sur Cloudflare) : Adobe (Partnerize), PDFelement / UPDF (CJ ou Awin), Yousign (Affilae), pCloud. Détails et commissions dans `docs/STRATEGY.md` §3.

## 6. Plus tard

- **Mentions légales** : ajouter ton nom (ou ta société) et une adresse dans les pages « Conditions » (obligatoire en France — LCEN — et en Allemagne — Impressum).
- **Licences** : Ghostscript (AGPL) et FFmpeg (GPL) sont utilisés sans modification et crédités sur la page « À propos » avec liens vers leurs sources. Publier le dépôt en open source (AGPL) réglerait définitivement la question et apporterait des liens ; à décider.
- **Planificateur de mots-clés Google Ads** : relever les volumes FR/ES/DE/IT marqués « n.d. » dans `docs/STRATEGY.md`.
