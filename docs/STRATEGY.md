# TurboConvert — Stratégie de croissance et de monétisation

*Document de décision, octobre 2026. Rédigé pour le propriétaire (France). Objectif : rentabilité maximale, zéro coût de fonctionnement, zéro API payante, tout s'exécute dans le navigateur.*

---

## 0. Résumé décisionnel

**À retenir en 12 points**

1. **Bloquant avant toute pub ou affiliation : l'hébergement.** Le plan Vercel Hobby est réservé à l'usage *non commercial*. Vercel cite explicitement « l'inclusion de publicités, y compris Google AdSense » et « l'affiliation comme objet principal ». Les dons, eux, ne comptent *pas* comme usage commercial ([Vercel Fair Use](https://vercel.com/docs/limits/fair-use-guidelines)). Il faut donc soit migrer vers **Cloudflare Pages** (gratuit, pas de clause « non commercial » trouvée dans les [conditions Cloudflare](https://www.cloudflare.com/terms/)), soit payer Vercel Pro (20 $/mois). **Recommandation : Cloudflare Pages.** Point d'attention : la limite y est de 25 MiB par fichier ([limites Pages](https://developers.cloudflare.com/pages/platform/limits/)), et `ffmpeg-core.wasm` pèse 32,2 Mo. Il faut le servir depuis R2 (offre gratuite) ou depuis un CDN npm avec version figée.
2. **Le marché est énorme mais verrouillé en tête.** Requêtes US/mois : « pdf to word » 246 k, « heic to jpg » 246 k, « jpg to pdf » 201 k, « webp to png » 201 k, « merge pdf » 135 k. iLovePDF, Smallpdf, Adobe, CloudConvert, FreeConvert et Convertio (DR 76–83) les tiennent. En 12 mois, un nouveau domaine ne s'y classera pas en top 5. **La traction viendra de la longue traîne et des paires de formats moyennes (1 k–40 k/mois)**, où l'on trouve encore de petits sites dans le top 10, et du **français**, plus du ES/DE ensuite.
3. **La France vaut cher.** En valeur publicitaire (volume × CPC annonceur), le marché FR des 3 intentions phares (PDF→Word, fusion, compression) pèse environ 75 % du marché US équivalent : ≈ 516 k contre ≈ 698 k en indice. L'Allemagne et l'Espagne pèsent ≈ 375 k chacune et le Brésil ≈ 165 k, malgré des volumes 3 à 7 fois supérieurs. **Ordre de lancement : FR (en cours) → ES → DE → IT → PT-BR.**
4. **Une grosse part du trafic de la catégorie vient d'Inde, d'Indonésie et du Brésil, où le RPM est faible.** Pour iLovePDF, l'Inde représente 18 % des visites et les États-Unis 5,6 % ([Semrush](https://www.semrush.com/website/ilovepdf.com/overview/)). Il faut mesurer et viser la **part de trafic des pays à fort RPM**, pas seulement le volume.
5. **Le « sans upload » n'est plus un avantage unique.** Hacker News compte des dizaines de clones « no upload » en 2025–2026, et la plupart obtiennent 1 à 5 points. La différenciation doit venir de la **qualité réelle**, de **l'honnêteté** (limites affichées), de **l'étendue de l'offre**, du **multilingue** et de la **vitesse**. La confidentialité se *prouve* (test en mode avion), elle ne se proclame pas.
6. **Revenus réalistes en AdSense seul** : environ **2 $ pour 1 000 visites**, sur une hypothèse de mix géographique, 1,5 page/visite et un RPM page mixte d'environ 1,30 $. Cela donne ≈ 20 $/mois à 10 k visites, ≈ 200 $/mois à 100 k et ≈ 2 000 $/mois à 1 M (fourchette ×0,5–×1,8). Avec les régies premium, l'affiliation et les dons, on arrive à ≈ 30 $, ≈ 300 $ et ≈ 3 500–5 000 $/mois.
7. **Pour AdSense, commencer par les fondamentaux.** Avant de redemander une validation : site complet et honnête, pages légales justes, CMP certifiée Google (TCF v2.3, gratuite dans AdSense), une seule balise AdSense, ads.txt, Search Console. Prévoir **1 à 3 mois** pour l'approbation. La revue « prend généralement quelques jours, parfois 2 à 4 semaines » ([AdSense Help](https://support.google.com/adsense/answer/7584263)).
8. **En attendant AdSense :** dons (Ko-fi : 0 % de frais plateforme sur les tips), liens d'affiliation contextuels honnêtes (après la migration d'hébergement), puis **Journey by Mediavine dès 1 000 sessions/30 j issues des pays tier 1** ([Mediavine](https://www.mediavine.com/mediavine-requirements/)). **Ezoic n'est plus une option** : il exige désormais 250 k utilisateurs/mois depuis février 2026 ([Ezoic](https://support.ezoic.com/kb/article/getting-started-ezoics-requirements)).
9. **Pas de premium maintenant.** Référence : Photopea, l'outil 100 % navigateur le plus rentable connu, tire environ 90 % de ses revenus des pubs et environ 10 % du premium sans pub ([Genbeta](https://www.genbeta.com/web/photopea-clon-photoshop-gratis-online-que-ha-generado-millon-dolares-12-meses-asi-ha-conseguido), [Wikipedia](https://en.wikipedia.org/wiki/Photopea)). On peut tester l'appétit avec une liste d'attente honnête, et ne construire qu'au-delà de 300 k visites/mois.
10. **Nouveaux outils à fort ratio demande/effort**, tous faisables avec des libs gratuites déjà présentes ou permissives : image → texte (OCR, 90,5 k US), HEIC → PDF (33 k), supprimer des pages PDF (33 k), signer un PDF (22 k), compresser un GIF (40,5 k), PNG → SVG (40,5 k), vidéo → MP3 / MOV → MP3 (60 k / 22 k), JFIF → JPG (18 k), TIFF → JPG/PDF (6,6 k chacun), remplir un PDF (74 k), aplatir un PDF (6,6 k), générateur de favicon (12 k).
11. **Visibilité IA** : rester indexable par OAI-SearchBot, PerplexityBot et Bingbot ; obtenir des **mentions tierces** (listes « meilleurs outils », forums, presse tech FR) ; écrire des contenus « réponse d'abord » avec des faits vérifiables. Le fichier `llms.txt` n'a pas d'effet mesuré ([SEJ / Mueller](https://searchenginejournal.com/googles-mueller-says-llms-txt-cant-help)).
12. **Risque de licence à traiter** : Ghostscript WASM est **AGPL-3.0**, ffmpeg-core **GPL-2.0+** et libheif **LGPL-3.0**. Il faut au minimum une page « Licences open source » avec liens vers les sources. Option recommandée : **publier le dépôt en open source**, ce qui règle le sujet et devient un levier de liens.

**Décisions que seul le propriétaire peut prendre** (détails en §7.2) : migration vers Cloudflare Pages ou passage à Vercel Pro ; Search Console et Bing Webmaster Tools ; compte AdSense (identité, paiement, message de consentement, nouvelle demande) ; compte Umami ; inscriptions aux programmes d'affiliation ; page Ko-fi ; statut juridique et mentions légales ; open source oui/non ; accès à Keyword Planner.

---

## Méthodologie et fiabilité des données

- **Volumes de recherche** : [seodata.dev](https://www.seodata.dev/keyword/pdf-to-word), qui interroge l'API Google Ads (moyennes mensuelles par pays, mises à jour juillet–août 2026, consultées le 09/10/2026). Seuls les mots-clés déjà en cache étaient disponibles sans compte, d'où des trous en FR, ES, DE et IT. **À compléter par le propriétaire dans Google Keyword Planner** (gratuit, voir §7.2).
- Les volumes **Inde** viennent des pages publiques Ahrefs ([exemple](https://ahrefs.com/websites/pdf24.org)), données d'octobre 2026.
- **« Concurrence »** dans les tableaux désigne la concurrence *des annonceurs Google Ads* (0–1), **pas** la difficulté SEO. La difficulté SEO est une **estimation qualitative** de ma part, fondée sur qui occupe le haut de la SERP.
- **CPC** = enchère annonceur Google Ads en USD. C'est un *indicateur relatif* de valeur publicitaire, pas le revenu que touchera un éditeur. Un clic AdSense rapporte nettement moins.
- **Trafic des concurrents** : estimations Semrush (visites totales, août 2026) et Ahrefs (trafic organique, oct. 2026). Ces outils divergent souvent du simple au double. Ahrefs montre d'ailleurs de fortes chutes d'un mois sur l'autre en oct. 2026, sans doute un artefact de données ou une mise à jour Google.
- Les RPM ne sont pas publiés par Google. Toutes les hypothèses de RPM sont marquées ⚠ et devront être remplacées par les données réelles d'AdSense.
- Plusieurs sources sur les régies publicitaires sont **elles-mêmes des régies concurrentes** (Newor Media, Publift, Clickio). Je le signale à chaque fois.

---

## 1. Marché et mots-clés

### 1.1 Constats structurants

1. **Murs de DR** : sur les requêtes de tête, les 10 premiers résultats sont des sites DR 72–83 : iLovePDF DR 83, Smallpdf 83, CloudConvert 82, Convertio 80, iLoveIMG 81, ezgif 81, FreeConvert 77, PDF24 77, Sejda 76, pdf2go 73 ([pages Ahrefs](https://ahrefs.com/websites/ilovepdf.com)). Avec ≈ 0 domaine référent, viser « pdf to word » en 2026–2027 est irréaliste.
2. **Des sites modestes se classent encore sur la traîne moyenne.** Exemples : imageonline.co et instasize sur « jfif to jpg » ; pdfmeta et docdesk sur « flatten pdf » ; sur « convertir heic en jpg » en FR, ce sont surtout des petits outils et des blogs (résultats de recherche consultés le 09/10/2026). **C'est notre terrain.**
3. **L'Inde domine le volume anglophone.** « jpg to pdf » fait 4,8 M en Inde contre 201 k aux US ; « pdf to word » 4 M contre 246 k ; « merge pdf » 1,7 M contre 135 k ([Ahrefs pdf24](https://ahrefs.com/websites/pdf24.org), [Ahrefs ilovepdf](https://ahrefs.com/websites/ilovepdf.com)). Ce trafic est facile à capter en masse mais il monétise mal.
4. **Le Brésil et le Mexique ont des volumes massifs et des CPC très bas.** « juntar pdf » fait 1,5 M/mois au Brésil à 0,04 $ de CPC, « pdf a word » 368 k au Mexique à 0,26 $. À l'inverse, la France est à 0,7–1,0 $ et l'Allemagne à 0,4–0,6 $.
5. **L'IA réduit les clics informationnels, beaucoup moins les clics transactionnels.** Selon Ahrefs, une AI Overview est corrélée à un **CTR −58 % pour la position 1** sur les requêtes informationnelles (données déc. 2025, [Ahrefs](https://ahrefs.com/blog/ai-overviews-reduce-clicks-update/)). Les requêtes « outil » (« merge pdf ») déclenchent moins d'AI Overviews. **Les pages outils restent l'actif principal ; le blog « how to » vaut moins qu'avant.**

### 1.2 Volumes des requêtes de tête par pays (Google Ads, mensuel)

| Intention | 🇺🇸 US | 🇫🇷 FR | 🇩🇪 DE | 🇪🇸 ES | 🇲🇽 MX | 🇧🇷 BR | 🇮🇹 IT | 🇮🇳 IN (Ahrefs) |
|---|---|---|---|---|---|---|---|---|
| PDF → Word | pdf to word **246 k** (1,38 $) | pdf to word **135 k** (1,02 $) + pdf en word **74 k** (0,93 $) | pdf in word umwandeln **90,5 k** (0,60 $) + pdf to word 60,5 k + pdf in word 22 k | pdf a word **110 k** (0,53 $) + pdf to word 40,5 k | pdf a word **368 k** (0,26 $) | pdf para word **450 k** (0,14 $) + pdf to word 110 k | pdf to word **110 k** (0,72 $) + pdf in word 27 k | pdf to word 4 M |
| Fusionner | merge pdf 135 k ; pdf merger 201 k ; combine pdf 135 k | fusionner pdf **201 k** (0,81 $) | pdf zusammenfügen **368 k** (0,62 $) | unir pdf **368 k** (0,50 $) | n.d. | juntar pdf **1,5 M** (0,04 $) | n.d. | merge pdf 1,7 M |
| Compresser | compress pdf 110 k ; pdf compressor 74 k ; reduce pdf size 33 k | compresser pdf **201 k** (0,73 $) | pdf komprimieren 90,5 k + pdf verkleinern 49,5 k | comprimir pdf **135 k** (0,75 $) | comprimir pdf 246 k (0,18 $) | comprimir pdf 301 k (0,08 $) | n.d. | compress pdf 1,6 M |
| JPG → PDF | jpg to pdf **201 k** (1,73 $) | jpg to pdf **110 k** (0,62 $) | jpg to pdf 90,5 k (0,40 $) | n.d. | n.d. | jpg to pdf 90,5 k | n.d. | jpg to pdf 4,8 M |
| PDF → JPG | pdf to jpg 165 k | pdf to jpg 74 k | n.d. | n.d. | n.d. | n.d. | n.d. | n.d. |
| Diviser | split pdf 40,5 k ; pdf splitter 33 k | diviser pdf 49,5 k | n.d. | n.d. | n.d. | n.d. | n.d. | split pdf 336 k |
| Supprimer l'arrière-plan | remove background **823 k** | n.d. | hintergrund entfernen 74 k (1,06 $) | quitar fondo 165 k | n.d. | remover fundo 823 k | n.d. | remove bg 5,8 M |
| Compresser image | compress image 22 k ; image compressor 60,5 k | compresser image 27 k | bild verkleinern 12 k | comprimir imagen 14,8 k | n.d. | n.d. | n.d. | compress image 313 k |
| Vidéo | video compressor 90,5 k ; compress video 33 k | compresser video 18 k ; convertisseur video 6,6 k | n.d. | n.d. | n.d. | n.d. | n.d. | n.d. |
| HEIC | heic to jpg **246 k** (0,28 $) | convertir heic en jpg 22 k | n.d. | n.d. | n.d. | n.d. | n.d. | n.d. |

*n.d. = non disponible sans compte. À relever dans Keyword Planner.*

**Lecture** : en France, les requêtes en *anglais* (« pdf to word », « jpg to pdf ») ont souvent plus de volume que les formulations françaises. Les pages FR doivent donc mentionner naturellement les deux formulations (titre « PDF en Word », H1/intro avec « PDF to Word ») sans bourrage.

### 1.3 Valeur par langue et ordre de lancement

Indice de valeur = Σ (volume × CPC) sur les 3 intentions phares (PDF→Word, fusion, compression), en ne retenant que les mots-clés disponibles. C'est un ordre de grandeur, pas une prévision.

| Marché | Volume des 3 intentions | Indice de valeur | Commentaire |
|---|---|---|---|
| US (anglais) | ≈ 490 k (≈ 1,0 M avec synonymes) | ≈ 698 k (≈ 1,1 M avec synonymes) | Le plus rentable, mais le plus disputé. Le reste du trafic anglophone vient surtout d'Inde, peu rentable. |
| **France** | ≈ 610 k | **≈ 516 k** | **Meilleur ratio valeur/concurrence pour nous** : propriétaire francophone, CPC élevés, moins de sites « no upload » de qualité en français. |
| Espagne (+ LatAm) | ≈ 650 k (+ ≥ 650 k MX) | ≈ 373 k (+ ≥ 157 k MX + Colombie, Argentine, Chili…) | Plus gros volume total en cumulant 20 pays. CPC bas hors Espagne. iLovePDF (espagnol) très fort. |
| Allemagne | ≈ 680 k | ≈ 377 k | CPC et RPM élevés. PDF24 (allemand) et Smallpdf (suisse) jouent à domicile. |
| Italie | ≥ 137 k (partiel) | ≥ 101 k (partiel) | Marché plus petit, CPC correct (0,7–0,8 $). |
| Brésil | ≈ 2,4 M | ≈ 166 k | Volume énorme, valeur par recherche 4 à 6 fois plus faible. |

**Ordre recommandé : FR (en cours) → ES → DE → IT → PT-BR.**
- **ES avant DE** : la valeur totale est comparable, mais le volume adressable est bien plus large (Espagne + LatAm + hispanophones US). Cela accélère l'atteinte des seuils de trafic (AdSense, Monumetric) et l'apprentissage SEO. Si le propriétaire préfère le RPM au volume, inverser ES et DE est défendable : l'écart est faible.
- **IT** : bon CPC, marché plus petit.
- **PT-BR en dernier** : très peu cher à ajouter une fois la chaîne de traduction rodée, mais le trafic brésilien ne compte pas pour Journey/Raptive (tier 1 uniquement) et monétise peu.
- **Règle** : ne publier une langue qu'avec une traduction relue sur les 15–20 pages outils prioritaires. Une traduction automatique non relue, à grande échelle, relève de l'« abus de contenu à grande échelle » ([politiques anti-spam Google](https://developers.google.com/search/docs/essentials/spam-policies)).

### 1.4 Priorisation des outils existants (registre `src/data/tools.ts`)

Difficulté SEO estimée : **E** = extrême (DR 80+ sur toute la page 1), **F** = forte, **M** = moyenne (petits sites présents en top 10), **f** = faible.

| Prio | Outil (id) | Mot-clé cible US (vol.) | Mot-clé cible FR (vol.) | Diff. | Pourquoi / note |
|---|---|---|---|---|---|
| P1 | heic-to-jpg | heic to jpg 246 k ; heic to jpg converter 33 k ; how to convert heic to jpg 18 k | convertir heic en jpg 22 k | F | Énorme demande (iPhone). Le local est un vrai plus (photos privées). Viser d'abord la traîne : « heic to jpg windows », « sans logiciel », « en lot ». |
| P1 | webp-to-png / webp-to-jpg | webp to png 201 k ; webp to jpg 135 k ; convert webp to jpg 27 k | n.d. | F | Peu d'annonceurs (concurrence 0–0,01), donc des SERP « outils » pures. |
| P1 | compress-pdf | compress pdf 110 k ; pdf compressor 74 k ; reduce pdf size 33 k | **compresser pdf 201 k** | E (US) / F (FR) | Ghostscript WASM fonctionne vraiment. **FR prioritaire.** Ajouter un mode « taille cible » (ex. < 2 Mo pour les démarches administratives). |
| P1 | merge-pdf | merge pdf 135 k ; pdf merger 201 k ; combine pdf 135 k | **fusionner pdf 201 k** | E / F | Idem. En FR, angle « dossier de candidature / CAF / Parcoursup ». |
| P1 | jpg-to-pdf / png-to-pdf | jpg to pdf 201 k ; png to pdf 90,5 k ; image to pdf 60,5 k | jpg to pdf (FR) 110 k | E | Volume massif. Ajouter des pages dédiées « image to pdf » et « photo to pdf » (18 k) seulement si le contenu est réellement distinct. Sinon, optimiser une seule page. |
| P1 | pdf-to-jpg / pdf-to-png | pdf to jpg 165 k ; pdf to png 74 k ; pdf to image 18 k | pdf to jpg (FR) 74 k | E / F | pdf.js est fiable. |
| P1 | mp4-to-mp3 | mp4 to mp3 165 k ; video to mp3 60,5 k ; mov to mp3 22 k ; extract audio from video 14,8 k | n.d. | F | ffmpeg.wasm. Préciser la limite de taille réelle selon l'appareil. |
| P1 | video-to-gif | mp4 to gif 90,5 k ; video to gif 90,5 k ; mov to gif 9,9 k | n.d. | F (ezgif DR 81) | CPC élevé (4 $) sur « mp4 to gif ». |
| P2 | compress-video | video compressor 90,5 k ; compress video 33 k | compresser video 18 k | F | Très gourmand en local. Être honnête sur la durée et la taille maximales. |
| P2 | resize-image / compress-image | resize image 60,5 k ; image compressor 60,5 k ; compress image 22 k ; compress jpeg 12 k | compresser image 27 k | F | iLoveIMG domine. Viser « redimensionner image pour [usage] ». |
| P2 | mov/webm/mkv-to-mp4 | mov to mp4 60,5 k ; mkv to mp4 40,5 k ; webm to mp4 27 k | n.d. | M–F | Format pairs à faible concurrence publicitaire. |
| P2 | png-to-jpg / jpg-to-png | png to jpg 60,5 k ; jpg to png 40,5 k | n.d. | F | Rapide et fiable (canvas). |
| P2 | heic-to-png | heic to png 40,5 k | n.d. | M | Bon ratio volume/difficulté. |
| P2 | m4a-to-mp3, wav-to-mp3, mp3-to-wav | m4a to mp3 49,5 k ; wav to mp3 33 k ; mp3 to wav 33 k | n.d. | M | Paires audio. CloudConvert y est n°1. |
| P2 | svg-to-png, avif-to-jpg, image-to-ico | svg to png 33 k ; avif to jpg 33 k ; png to ico 22 k (+ favicon generator 12 k, CPC 7,7 $) | n.d. | M | AVIF/ICO : peu d'acteurs forts. Transformer image-to-ico en « générateur de favicon » complet (multi-tailles + manifest). |
| P2 | split-pdf, organize-pdf | split pdf 40,5 k ; pdf splitter 33 k ; delete pages from pdf 33 k | diviser pdf 49,5 k | F | Créer une page « supprimer des pages PDF » (intention distincte, 33 k). |
| P2 | unlock-pdf, protect-pdf | unlock pdf 14,8 k ; how to remove password from pdf 12 k ; password protect pdf 8,1 k | n.d. | M | qpdf-wasm (ISC). Ne déverrouiller qu'avec le mot de passe connu, et le dire clairement. |
| P2 | ocr-pdf | ocr pdf 4,4 k ; **image to text 90,5 k** | n.d. | M | Créer la page « image to text » avec le même moteur tesseract.js. Gros gain. |
| P3 | pdf-to-word | pdf to word 246 k | 135 k + 74 k | E | ⚠ **Honnêteté** : l'audit indique une simple extraction de texte. Le nom et la copie doivent dire exactement ce qui est produit (« texte et paragraphes éditables, la mise en page complexe n'est pas reproduite »). Sinon : rebond, mauvais signaux et risque « misrepresentation » AdSense. Bon emplacement pour une affiliation honnête (PDFelement, UPDF, Acrobat) vers une conversion fidèle. |
| P3 | word-to-pdf, excel-to-pdf, ppt-to-pdf, pdf-to-excel, pdf-to-ppt, word-to-jpg | word to pdf 110 k ; pdf to excel 33 k ; ppt to pdf 22 k ; pdf to ppt 22 k ; excel to pdf 9,9 k ; word to jpg 3,6 k | n.d. | E | Même exigence d'honnêteté. Le rendu fidèle d'Office dans le navigateur reste limité (docx-preview / pptx-preview). Afficher clairement ce qui marche. |
| P3 | rotate-pdf, add-page-numbers, watermark-pdf, pdf-to-text | rotate pdf 9,9 k ; pdf to text 12 k ; add page numbers 2,9 k ; watermark pdf 1,6 k | n.d. | M–f | Petits volumes, mais gagnables et utiles pour le maillage interne et la crédibilité (AdSense). |
| P3 | trim-video, trim-audio, mute-video | video cutter 12 k ; trim video 8,1 k ; mp3 cutter 18 k ; audio cutter 8,1 k ; mute video 1 k | n.d. | M | Intégrer les synonymes « cutter » dans titre et intro plutôt que de créer des pages doublons. |
| P3 | ogg/flac-to-mp3, audio-converter, mp3-to-mp4, jpg/png-to-webp | ogg to mp3 9,9 k ; flac to mp3 5,4 k ; mp3 to mp4 18 k ; png to webp 9,9 k ; jpg to webp 6,6 k | n.d. | f–M | jpg/png → webp : CPC 16–17 $ (annonceurs CDN/hébergement), petit volume, potentiel d'affiliation hébergement. |

### 1.5 Nouveaux outils : forte demande et faisables 100 % côté client

| Prio | Outil | Mot-clé (vol. US) | Faisabilité / lib (licence) | Effort | Note |
|---|---|---|---|---|---|
| **P1** | Image → texte (OCR) | image to text **90,5 k** | tesseract.js, déjà présent (Apache-2.0) | ½ j | Même moteur que ocr-pdf. Page distincte, intention distincte. |
| **P1** | HEIC → PDF | heic to pdf **33 k** | moteur images-to-pdf existant + libheif | ½ j | Variante de jpg-to-pdf. |
| **P1** | Supprimer / extraire des pages PDF | delete pages from pdf **33 k** ; how to extract pages 3,6 k | pdf-lib (MIT), moteur organize | 1 j | Intention distincte de « split ». |
| **P1** | JFIF → JPG, JPEG → JPG | jfif to jpg **18 k** ; jpeg to jpg 12 k ; jpg to jpeg 5,4 k | canvas, trivial | ½ j | Expliquer honnêtement que c'est le même format : renommer suffit, l'outil est utile en lot. Petits sites en top 10. |
| **P1** | Vidéo → MP3 / MOV → MP3 / M4A → WAV / MP4 → WAV | video to mp3 60,5 k ; mov to mp3 22 k ; m4a to wav 14,8 k ; mp4 to wav 12 k | ffmpeg (déjà là) | ½ j/page | Pages programmatiques (voir 1.6). |
| **P1** | Signer un PDF | sign pdf **22 k** (CPC 2,9 $) ; how to sign a pdf 12 k | pdf-lib + canvas (dessin / texte / image de signature) | 2–3 j | ⚠ Signature *visuelle*, pas une signature électronique qualifiée eIDAS. Le dire. Synergie d'affiliation Yousign/Docusign pour la signature légale. |
| **P1** | Compresser / redimensionner un GIF | gif compressor **40,5 k** + compress gif 40,5 k (même intention) ; resize gif 8,1 k (CPC 4,8–8,5 $) | ffmpeg (palette + réduction de taille/fps). Éviter gifsicle (GPL) | 1–2 j | Peu d'annonceurs ; ezgif domine mais reste vieillissant. |
| **P2** | PNG/JPG → SVG (vectoriser) | png to svg **40,5 k** (CPC 2,8 $) | imagetracerjs (licence à vérifier, réputée domaine public) ou vtracer-wasm. ⚠ potrace-wasm est GPL-2.0 ([README](https://unpkg.com/esm-potrace-wasm@0.4.1/README.md)) | 2 j | Qualité variable : montrer un aperçu avant téléchargement. |
| **P2** | Remplir un formulaire PDF | fill pdf **74 k** (CPC 2,7 $) | pdf-lib AcroForm (MIT) | 3–4 j | Forte valeur, concurrence moyenne-forte. Affiliation éditeurs PDF. |
| **P2** | Aplatir un PDF | flatten pdf 6,6 k | pdf-lib `form.flatten()` + option « rasteriser » | ½ j | SERP avec petits sites (pdfmeta, docdesk). |
| **P2** | TIFF → JPG / TIFF → PDF / PDF → TIFF | tiff to jpg 6,6 k ; tiff to pdf 6,6 k ; pdf to tiff 1,9 k | UTIF, déjà présent (MIT) | 1 j | CPC 2,4–3,9 $. |
| **P2** | Générateur de favicon | favicon generator 12 k (CPC 7,7 $) ; png to ico 22 k | moteur image-to-ico + zip | 1 j | Public développeur, bonnes chances de liens. |
| **P2** | AVI / WMV / 3GP / FLV → MP4, MP4 → WEBM, GIF → MP4 | avi to mp4 12 k (CPC 3 $) ; wmv 5,4 k ; gif to mp4 22 k ; mp4 to webm 6,6 k | ffmpeg | ½ j/page | Programmatique. |
| **P2** | Inverser une vidéo, fusionner des vidéos ou des MP3 | reverse video 12 k ; merge videos 4,4 k ; merge mp3 1 k | ffmpeg | 1–2 j | Limiter aux clips courts (mémoire). |
| **P2** | Recadrer, pivoter, retourner une image | crop image 27 k | canvas | 1 j | Complète la suite image. |
| **P3** | Supprimer l'arrière-plan | remove background **823 k** US ; quitar fondo 165 k ; hintergrund entfernen 74 k ; remover fundo 823 k BR | Transformers.js + modèle à **licence commerciale permise**. ⚠ RMBG-1.4 et RMBG-2.0 (BRIA) sont *non commerciaux* ([RMBG-2.0](https://github.com/Bria-AI/RMBG-2.0)). @imgly/background-removal est AGPL. Candidats : BiRefNet (MIT selon les auteurs, [arXiv](https://arxiv.org/pdf/2401.03407)), MODNet, U²-Net : licence des *poids* à vérifier | 4–6 j | Demande gigantesque, mais remove.bg (80 M visites/mois), Adobe et Canva dominent, et la qualité locale sera inférieure. **À tester seulement après les P1–P2.** |
| **P3** | EPUB → PDF | epub to pdf 60,5 k | foliate-js (MIT selon [Debian](https://metadata.ftp-master.debian.org/changelogs/main/f/foliate/stable_copyright)) + rendu PDF | 4–5 j | Volume intéressant mais fidélité difficile. Prototyper avant de promettre. |
| ✗ | Compresser un PDF à 100 Ko / 200 Ko, photo en Ko | compress pdf to 100kb 108 k IN (210 US) | Option « taille cible » dans compress-pdf | ½ j | Demande quasi uniquement indienne, RPM très faible. Option oui, pages dédiées non. |
| ✗ | YouTube → MP3, éditeur PDF complet | — | — | — | Illégal (YouTube) ou hors de portée (éditeur complet). Ne pas faire. |

### 1.6 Pages programmatiques « format → format »

**Règle de création** : une page n'est générée que si les trois conditions sont réunies :
- le moteur fait *réellement* la conversion, testée sur des fichiers réels ;
- le volume est ≥ 1 000/mois aux US *ou* ≥ 500/mois dans la langue cible ;
- la page contient au moins 3 éléments **spécifiques à la paire** : à quoi sert chaque format, ce qui est perdu ou conservé (transparence, métadonnées, animation, chapitres), limites réelles (taille, durée), réglages recommandés, FAQ propre à la paire.

Pas de page « X to Y » avec seulement les noms de formats échangés : c'est exactement le motif « scaled content abuse » ([Google](https://developers.google.com/search/docs/essentials/spam-policies)).

Paires à créer, en plus de l'existant (volume US) :

- **Vidéo / audio (ffmpeg)** : video to mp3 60,5 k · mov to mp3 22 k · gif to mp4 22 k · m4a to wav 14,8 k · avi to mp4 12 k · mp4 to wav 12 k · mp3 to ogg 9,9 k · mov to gif 9,9 k · mp4 to webm 6,6 k · wmv to mp4 5,4 k · mkv to mp3 4,4 k · mp3 to m4a 2,4 k · mp4 to avi 1,9 k · 3gp to mp4 1,9 k · wma/aiff/opus to mp3 1,9 k chacun · aac to mp3 1,3 k · flv to mp4 1,3 k.
- **Image (canvas / libheif / UTIF)** : heic to pdf 33 k · jfif to jpg 18 k · jpeg to jpg 12 k · gif to png 8,1 k · tiff to jpg 6,6 k · svg to jpg 6,6 k · png to gif 5,4 k · jpg to jpeg 5,4 k · ico to png 1,9 k · bmp to jpg 1 k · png/jpg to avif 480/260 (CPC 20–26 $ : petites pages pour un public développeur).
- **PDF** : tiff to pdf 6,6 k · pdf to tiff 1,9 k · pdf to pdfa 480 (⚠ uniquement si la conformité PDF/A est réellement validée).
- **À exclure** : webp to gif (27 k) tant que le décodage du WebP animé n'est pas vérifié dans le build ffmpeg utilisé.

Hubs de catégorie (déjà prévus) : chaque hub liste toutes les paires, sans texte de remplissage, avec une matrice « depuis / vers » utile. Une seule entrée « Convertisseur audio » / « Convertisseur vidéo » universelle cible les génériques (« video converter » 27 k, « file converter » 40,5 k, « image converter » 22 k).

### 1.7 Blog et longue traîne (trafic et liens)

Principe : le blog sert à (a) prouver la valeur du site pour AdSense, (b) capter des liens et des mentions, (c) cibler des intentions *non couvertes* par une page outil. **Ne pas recréer de doublons « how to + outil »** : l'audit a relevé la cannibalisation. Le « comment faire » se met dans la page outil (section « Comment ça marche »). Un article ne se justifie que pour un sujet plus large.

| Sujet (EN) | Vol. US | Intérêt |
|---|---|---|
| How to send large video files (comparatif : compresser, liens cloud, limites email) | 8,1 k (CPC 6,8 $) | Affiliation cloud (pCloud 20 %), lien vers compress-video. |
| HEIC vs JPG / What is HEIC (+ réglage iPhone « Le plus compatible ») | 4,4 k + 480 | Sujet pérenne, souvent cité dans les forums. |
| MOV vs MP4 | 3,6 k | Idem. |
| How to make a GIF (depuis vidéo, écran, images) | 18 k | Lien vers video-to-gif, compress-gif. |
| How to remove password from PDF / password protect PDF (légal, cas d'usage) | 12 k / 8,1 k | Contenu solide, intention mixte. |
| How to combine PDF files on Mac / Windows / iPhone (natif vs en ligne) | 2,9 k (Mac) | Honnête (Aperçu sur Mac suffit). Gagne la confiance et les citations IA. |
| Étude : « Quels convertisseurs en ligne envoient vos fichiers sur leurs serveurs ? Test de 20 services » (méthode : inspection réseau, reproductible) | — | **Pièce à liens** (presse tech, forums vie privée). Factuel uniquement. |

| Sujet (FR, volumes à vérifier dans Keyword Planner) | Intérêt |
|---|---|
| Réduire un PDF pour les démarches administratives (ANTS, CAF, impots.gouv, Parcoursup, France Travail) : limites de taille par site, pas à pas | Très spécifique à la France, saisonnier, utile, peu couvert par les géants. Fort potentiel de liens (forums, associations). |
| Photos iPhone en HEIC : les ouvrir sur Windows, les convertir sans les envoyer en ligne | Requête récurrente. |
| Envoyer un fichier lourd gratuitement (comparatif honnête : compression vs WeTransfer/Smash/pCloud) | Affiliation possible. |
| Signature d'un PDF : visuelle vs électronique (eIDAS), quand utiliser Yousign | Affiliation Yousign (jusqu'à 100 €/abonnement, [Yousign](https://yousign.com/fr-fr/programme-affiliation)). |
| Équivalents ES/DE : « comprimir PDF para sede electrónica », « PDF verkleinern für Bewerbung » (thème déjà traité par [karrierebibel](https://karrierebibel.de/?p=94983)) | À la sortie de chaque langue. |

### 1.8 Liste priorisée des 40 premières pages à soigner ou créer

Ordre = (volume × chance de classement × monétisation) / effort. Les volumes sont US (EN) ou FR.

1. **/fr/fusionner-pdf** : fusionner pdf (201 k FR)
2. **/fr/compresser-pdf** : compresser pdf (201 k FR)
3. **/fr/pdf-en-word** : pdf en word (74 k) + pdf to word (135 k FR), avec copie honnête
4. /fr/jpg-en-pdf : jpg to pdf (110 k FR)
5. /fr/pdf-en-jpg : pdf to jpg (74 k FR)
6. /fr/diviser-pdf : diviser pdf (49,5 k FR)
7. /fr/compresser-image : 27 k FR
8. /fr/heic-en-jpg : convertir heic en jpg (22 k FR)
9. /fr/compresser-video : 18 k FR
10. /heic-to-jpg : heic to jpg (246 k)
11. /webp-to-png : 201 k
12. /webp-to-jpg : 135 k
13. /image-to-text (**nouveau**) : 90,5 k
14. /mp4-to-mp3 : 165 k (+ video to mp3 60,5 k via /video-to-mp3, **nouveau**)
15. /video-to-gif : 90,5 k + mp4 to gif 90,5 k
16. /heic-to-png : 40,5 k
17. /heic-to-pdf (**nouveau**) : 33 k
18. /delete-pdf-pages (**nouveau**) : 33 k
19. /gif-compressor (**nouveau**) : 40,5 k
20. /png-to-svg (**nouveau**) : 40,5 k
21. /avif-to-jpg : 33 k
22. /svg-to-png : 33 k
23. /favicon-generator (évolution de image-to-ico) : 12 k + png to ico 22 k
24. /jfif-to-jpg (**nouveau**) : 18 k
25. /mov-to-mp4 : 60,5 k
26. /mkv-to-mp4 : 40,5 k
27. /m4a-to-mp3 : 49,5 k
28. /sign-pdf (**nouveau**) : 22 k
29. /mov-to-mp3 (**nouveau**) : 22 k
30. /gif-to-mp4 (**nouveau**) : 22 k
31. /compress-pdf : 110 k (long terme)
32. /merge-pdf : 135 k (long terme)
33. /jpg-to-pdf : 201 k (long terme)
34. /pdf-to-jpg : 165 k (long terme)
35. /unlock-pdf : 14,8 k
36. /m4a-to-wav (**nouveau**) : 14,8 k
37. /tiff-to-jpg + /tiff-to-pdf (**nouveaux**) : 6,6 k chacun
38. /flatten-pdf (**nouveau**) : 6,6 k
39. /fill-pdf (**nouveau**) : 74 k
40. /avi-to-mp4 (**nouveau**) : 12 k

---

## 2. Concurrents

### 2.1 Panorama

| Service | Visites/mois (Semrush, août 2026) | Trafic organique (Ahrefs, oct. 2026) | Top pays | Modèle | Limites gratuites (sources tierces sauf mention) | Prix |
|---|---|---|---|---|---|---|
| **iLovePDF** (ES) | **255 M** ([Semrush](https://www.semrush.com/website/ilovepdf.com/overview/)) | 86 M (DR 83) | IN 18 %, BR 6,8 %, US 5,6 % | Freemium + pubs sur la version web gratuite ([Gizmodo](https://gizmodo.com/download/ilovepdf)) + API B2B | Limites de taille et de tâches (non publiées précisément, [pricing](https://ilovepdf.com/pricing)) | ≈ 4–9 $/mois selon la facturation ([Capterra](https://capterra.com/p/173963/iLovePDF/pricing/)) |
| **Smallpdf** (CH) | 42,8 M | 53 M (août 2026, DR 83) | IN 17 %, US 8,8 % | Freemium agressif, pubs pour les gratuits | **2 tâches/jour**, fichiers ≈ 5 Mo ([toolradar](https://toolradar.com/tools/smallpdf/pricing)) | Pro 15 $/mois ou ≈ 9 $/mois en annuel |
| **PDF24** (DE) | n.d. (Semrush) | 7 M (16 M en juin 2025) | IN 19 %, DE 15 % | **100 % gratuit, financé par la pub** + service fax payant ([PDF24](https://help.pdf24.org/en/?p=332)) | Pas de limite déclarée ; appli desktop gratuite hors ligne | — |
| **FreeConvert** (US) | 52,6 M | 7 M (DR 77) | US 18 %, IN 12 % | Pubs + abonnement | ≈ 1 Go/fichier, ≈ 25 conversions/jour (sources divergentes) | 12,99–29,99 $/mois ([pricing](https://www.freeconvert.com/pricing)) |
| **CloudConvert** (DE) | 40,3 M | 7,1 M (DR 82) | US 19 %, IN 11 % | Crédits + API, sans pub | « Jusqu'à 25 conversions/jour » ([pricing](https://cloudconvert.com/pricing)), 10/jour selon d'autres pages | Packs de crédits |
| **Convertio** | 22,4 M | 3,8 M (DR 80) | BR 16 %, US 7,5 %, **FR 5,3 %** | Abonnement | 100 Mo/fichier, 10 fichiers / 24 h ([UPDF review](https://updf.com/edit-pdf/convertio-review/)) | ≈ 9,99–25,99 $/mois (tiers) |
| **Sejda** | 25,5 M | 7,2 M (DR 76) | IN 25 % | Freemium (éditeur PDF) | Limites horaires et de taille | Pass hebdo / mensuel |
| **Zamzar** (UK) | n.d. | 0,83 M (DR 77) | IN 41 % | Abonnement | **50 Mo**, 2 conversions / 24 h ([FAQ Zamzar](https://zamzar.com/faq)) | ≈ 9–12 $/mois (tiers) |
| **123apps** | ≈ 2 M sur 123apps.com (janv. 2026, [Semrush](https://de.semrush.com/website/123apps.com/overview)), trafic éclaté sur plusieurs domaines | n.d. | US, IN, BR | Pubs + premium | ≈ 5 opérations/jour, 500 Mo ([Clubic](https://www.clubic.com/telecharger-fiche440028-123apps.html), sources divergentes) | ≈ 5–6 €/mois |
| **iLoveIMG** | 43,8 M | 10,2 M (DR 81) | IN 12 %, BR 10 % | Pubs + premium | — | — |
| **remove.bg** | 80,4 M | 37,5 M | IN 14 %, US 12 % | Crédits | Aperçu basse définition gratuit | Crédits |
| **ezgif** | n.d. | 1,4 M (DR 81) | **US 36 %** | Pubs | — | — |
| **Outils « sans upload » récents** (BentoPDF, BreezePDF, onlyjpg, brevio, pdfmergely…) | petits | petits | — | Dons, open source, pubs | Aucune | — |

### 2.2 Faiblesses exploitables (avec preuves)

1. **Limites artificielles** : Smallpdf (2 tâches/jour), Zamzar (2/jour, 50 Mo), Convertio (10/jour), CloudConvert (quota quotidien). Nos outils n'ont pas de quota, car le calcul est fait sur l'appareil de l'utilisateur. **Message honnête : « Pas de limite de nombre. La seule limite est la mémoire de votre appareil. »**
2. **Envoi des fichiers sur des serveurs** : c'est un vrai sujet pour les documents d'identité, les fiches de paie et les contrats, et un argument RGPD pour les administrations. Signal fort : des **universités et collectivités auto-hébergent BentoPDF** (outil 100 % navigateur) pour cette raison, par exemple [pdf.aap.cornell.edu](https://pdf.aap.cornell.edu/) et une instance d'un comté de l'État de Washington. → **Cible de liens et de recommandations : DSI, bibliothèques et services d'aide universitaires.**
3. **Paywalls tardifs et inscriptions** : l'utilisateur découvre la limite après avoir déposé son fichier. Nous : pas de compte, pas de paywall.
4. **Pubs intrusives** chez PDF24 et certains concurrents : avis négatifs récurrents ([revue PDF24](https://www.swifdoo.com/blog/amp/pdf24-review)). Nous : 2–3 emplacements maximum, jamais près des boutons.
5. **Interfaces datées** (Zamzar, PDF24, ezgif) : la vitesse perçue et la modernité de l'interface font la différence.
6. **Faible couverture locale de qualité** en FR/ES/DE/IT sur la traîne des paires de formats.

### 2.3 Nos faiblesses (à assumer)

- **Pas d'autorité de domaine.** Il faudra 12 à 24 mois et un vrai travail de liens.
- **Plafond technique du navigateur** : grosses vidéos (centaines de Mo et plus), RAM mobile, premier téléchargement de 16 à 32 Mo (Ghostscript, ffmpeg). Il faut l'afficher et mettre ces moteurs en cache (service worker).
- **Conversions Office fidèles** (PDF → Word avec mise en page) nettement moins bonnes que celles des serveurs (iLovePDF, Adobe).
- **Saturation du positionnement « sans upload »** : sur HN, la plupart des projets similaires récoltent 1 à 5 points. Les rares succès apportaient une vraie différence fonctionnelle : BreezePDF (éditeur, 97 pts), brevio (184 outils, 89 pts), OnlyJPG (64 pts) ([recherche HN](https://hn.algolia.com/?query=pdf%20tools%20browser&type=story&dateRange=all&prefix=false&page=0&tags=show_hn)).

---

## 3. Monétisation

### 3.1 Prérequis : un hébergement qui autorise l'usage commercial

| Option | Coût | Usage commercial | Limites clés | Verdict |
|---|---|---|---|---|
| Vercel Hobby (actuel) | 0 € | **Interdit** : pubs, paiements, affiliation comme objet principal ([Vercel](https://vercel.com/docs/limits/fair-use-guidelines)) | Analytics : 50 k événements/mois, **pas d'événements personnalisés** ([Vercel](https://vercel.com/docs/analytics/limits-and-pricing)) | OK tant qu'il n'y a ni pub ni affiliation. Dons autorisés. |
| Vercel Pro | 20 $/mois | Oui | — | Coûte ≈ 240 $/an, soit ≈ 1 an de revenus AdSense au début. |
| **Cloudflare Pages** | 0 € | Pas de clause restrictive trouvée | 20 000 fichiers, **25 MiB par fichier**, 500 builds/mois ([CF](https://developers.cloudflare.com/pages/platform/limits/)) ; Web Analytics gratuit ; IndexNow via « Crawler Hints » | **Recommandé.** Servir `ffmpeg-core.wasm` (32,2 Mo) depuis R2 ou un CDN npm figé avec SRI. Transposer `vercel.json` en `_redirects` et `_headers`. |

### 3.2 Publicité display

**Seuils d'accès des régies (vérifiés sur les pages officielles quand c'était possible) :**

| Régie | Seuil | Remarques |
|---|---|---|
| **Google AdSense** | Aucun seuil de trafic | Revue qualité ; CMP certifiée obligatoire en EEE / UK / CH ([Google](https://support.google.com/admanager/answer/13554116)) ; TCF v2.3 obligatoire depuis le 28/02/2026 ([iubenda](https://www.iubenda.com/en/blog/transitioning-to-iabs-tcf-2-3-what-you-need-to-know/)). |
| **Journey by Mediavine** | **1 000 sessions/30 j depuis les pays tier 1** (US, CA, UK, AU) + qualité ([Mediavine](https://www.mediavine.com/mediavine-requirements/)) | Script « Grow » installé **30 jours** avant la candidature ([annonce Journey](https://www.mediavine.com/introducing-journey-new-ad-management/)). Partage de revenu 70 %. Passage automatique au programme principal à 5 000 $/an de revenus pub. ⚠ Acceptation des sites d'outils non documentée. |
| Mediavine (principal) | 5 000 $ de revenus pub annuels | — |
| **Raptive** | **25 000 pages vues/mois** (depuis oct. 2025) **et ≥ 50 % de trafic US/UK/CA/AU/NZ** sous 100 k ([Raptive](https://help.raptive.com/hc/en-us/articles/360032840891-How-do-I-apply-to-Raptive), [SEJ](https://www.searchenginejournal.com/raptive-drops-traffic-requirement-by-75-to-25000-views/558780/)) | Notre mix (FR, Inde) ne remplira probablement pas la condition géographique. |
| **Monumetric** (Propel) | 10–80 k pages vues/mois pendant 3 mois + **99 $ de frais d'implémentation** ([Monumetric](https://www.monumetric.com/requirements/)) | Envisageable vers 10–20 k pages vues. Les frais sont un coût unique, pas un coût de fonctionnement. |
| Ezoic | **250 000 utilisateurs/mois** depuis le 19/02/2026 ([Ezoic](https://support.ezoic.com/kb/article/getting-started-ezoics-requirements)) ; programme « Incubator » en dessous ([Ezoic](https://www.ezoic.com/incubator)) | Plus une option à court terme. |
| Playwire | 500 000 pages vues/mois ([Playwire](https://www.playwire.com/hubfs/llms.txt)) | Long terme. |
| Freestar | ≈ 1 M pages vues/mois, 12 mois d'historique ([Freestar](https://freestar.com/publisher-quality-requirements/)) | Long terme. |
| Newor Media | 5 000 utilisateurs/mois (déclaration de Newor, [source biaisée](https://newormedia.com/blog/?p=1430)) | Alternative possible, à vérifier. |
| EthicalAds / Carbon | 50 k pages vues/mois, audience développeurs ([EthicalAds](https://www.ethicalads.io/publishers/faq/)) ; Carbon sur invitation, exclusif, 0,50–1,10 $ CPM ([Carbon](https://www.carbonads.net/faq)) | Hors cible. |
| Adsterra, popunders, etc. | Aucun seuil | **À éviter** : UX dégradée, perte de confiance, incompatibles avec la stratégie AdSense. |

**RPM : hypothèses ⚠** (aucune donnée publique fiable ; les forums signalent des RPM faibles et volatils sur les sites d'outils, parce que l'utilisateur fait une action et repart, [BlackHatWorld](https://www.blackhatworld.com/posts/20805563/) ; un calculateur vendeur cite 0,20–2,50 $ par 1 000 vues pour AdSense, [Publisher Collective](https://www.publisher-collective.com/blog/adsense-revenue-calculator)).

| Zone | Part supposée du trafic | RPM page AdSense supposé (2–3 blocs + ancre) |
|---|---|---|
| A : US, UK, CA, AU, NZ | 18 % | 3,50 $ |
| B : FR, DE, BE, CH, NL, AT, pays nordiques | 22 % | 2,00 $ |
| C : ES, IT, PT, PL… | 8 % | 1,00 $ |
| D : Brésil, Mexique, LatAm | 17 % | 0,45 $ |
| E : Inde, Indonésie, Philippines, Vietnam… | 35 % | 0,20 $ |
| **RPM page mixte** | | **≈ 1,30 $** (≈ 1,60 $ si le trafic est majoritairement FR/UE) |

**Emplacements qui marchent sur un site d'outils sans nuire à l'expérience (et conformes aux règles AdSense) :**

1. **Sous l'outil**, après la zone de résultats et séparé par un vrai bloc de contenu : bloc responsive avec **hauteur réservée** pour éviter le CLS. **Jamais collé** à la zone de dépôt, au bouton Convertir ou au bouton Télécharger. Google interdit les pubs qui peuvent être confondues avec la navigation ou les liens de téléchargement ([règles AdSense](https://support.google.com/adsense/answer/48182)).
2. **Dans le contenu explicatif** (milieu de la section « Comment ça marche / FAQ »).
3. **Barre latérale « sticky » sur desktop ≥ 1200 px**, hors de la zone de l'outil.
4. **Annonce ancrée (anchor) mobile** via Auto ads, en limitant les formats aux ancrages et vignettes. **Les vignettes** s'affichent entre deux pages, pas à l'arrivée ([Google](https://support.google.com/adsense/answer/9305577)). Ajouter `data-google-vignette="false"` sur les liens d'outil où une vignette gênerait.
5. **Pas de pubs** sur les écrans sans contenu (erreur, 404, page « merci »), conformément à la [politique](https://support.google.com/publisherpolicies/answer/11112688). Pas de pub dans la modale de résultat. Aucun message incitant à cliquer.
6. Désactiver les Auto ads « in-page » au début. Tester ensuite via l'expérience AdSense (50 % du trafic pendant 90 jours), en gardant comme garde-fous les Core Web Vitals et le taux de réussite des conversions.

### 3.3 Affiliation (après migration d'hébergement, liens contextuels, signalés et honnêtes)

| Programme | Commission | Réseau | Où le placer chez nous |
|---|---|---|---|
| **Adobe Acrobat** | 85 % du 1er mois (mensuel) ; 8,33 % du 1er an (annuel payé d'avance) ; cookie 30 j ([Adobe](https://www.adobe.com/buy/affiliates.html)) | Partnerize | Bloc « Besoin d'une mise en page parfaite ? » dans les limites de pdf-to-word, pdf-to-excel, fill-pdf |
| **Wondershare PDFelement** | 30 % (< 1 000 $ de ventes/mois) jusqu'à 50 % ([Wondershare](https://pdf.wondershare.com/affiliate.html)) | CJ, Awin, Impact… | Idem ; alternative moins chère qu'Acrobat |
| **UPDF** | Jusqu'à 30 %, ≈ 21 $/vente en moyenne, cookie 30 j ([UPDF](https://updf.com/affiliate-program/)) | CJ, Awin | Idem |
| Foxit | 8–10 % ([PartnerStack](https://market.partnerstack.com/page/foxit)) | PartnerStack | Secondaire |
| **Yousign** (FR) | Jusqu'à 100 €/abonnement ([Yousign](https://yousign.com/fr-fr/programme-affiliation)) | Affilae | sign-pdf (FR) : « signature légale eIDAS » |
| Docusign | ≈ 15 % (communauté Docusign, non confirmé officiellement, [source](https://community.docusign.com/docusign-partners-133/become-a-docusign-affiliate-today-support-your-audience-and-boost-your-earnings-21924)) | Impact | sign-pdf (EN) |
| PandaDoc | 25–45 % pendant 12 mois, cookie 90 j (tiers, [Reditus](https://getreditus.com/affiliate-programs/pandadoc)) | PartnerStack | sign-pdf, fill-pdf (public professionnel) |
| **pCloud** | 20 % (abonnements et lifetime), cookie 45 j ([pCloud](https://www.pcloud.com/affiliate)) | Direct | Articles « envoyer un fichier lourd », compress-video |
| Movavi | Jusqu'à 60 % annoncé, ≈ 30 % standard ([Movavi](https://www.movavi.com/cz/partners/affiliate-program)) | Direct | Limites de compress-video et video-to-gif (« vidéos de plusieurs Go ») |
| Wondershare UniConverter | 30–50 % (communiqué 2021, ancien) ([UniConverter](https://videoconverter.wondershare.com/affiliate.html)) | CJ, Rakuten, Impact | Idem |
| NordVPN / Proton | NordVPN 100 % du 1er mois ou 40 % (tiers, [source](https://linkclicky.com/affiliate-programs/vpn/)) ; Proton : taux non publiés ([Proton](https://proton.me/partners/affiliates)) | Awin, CJ / direct | **Faible pertinence** pour un convertisseur. Éventuellement dans un article vie privée. Pas sur les outils. |
| Dropbox | **Programme arrêté** ([Dropbox](https://blog.dropbox.com/topics/company/announcing-dropbox-affiliates)) | — | — |
| Smallpdf / iLovePDF | Smallpdf : pas de programme public trouvé ; iLovePDF : programme partenaires B2B ([iLovePDF Partners](https://partners.ilovepdf.com/)) | — | — |

Règles :
- mention « lien affilié » visible ;
- l'affiliation ne remplace jamais l'outil gratuit ;
- seulement là où notre outil a une **limite réelle**, déjà affichée, que le produit tiers résout.

Estimation : 30 % des visites sur des pages PDF/Office × 0,5 % de clics × 2 % de conversion × 25 $ ⇒ **≈ 0,75 $ pour 1 000 visites** ⚠.

### 3.4 Dons et tips

- **Ko-fi** : 0 % de frais plateforme sur les tips, seulement les frais Stripe/PayPal ([Schoolmaker](https://schoolmaker.com/blog/ko-fi-pricing.md)). Vérifier que le compte n'est pas en statut « Contributor » à 5 %. **Buy Me a Coffee** : 5 % + frais, soit ≈ 14 % sur un don de 5 $ ([Schoolmaker](https://schoolmaker.com/blog/buy-me-a-coffee-pricing)).
- **Réalisme** : la propension à donner est faible pour les outils gratuits. Retour d'expérience Docear et freeware : ≈ 416 $ de 34 donateurs sur la période observée ([blog Beel](https://isg.beel.org/?p=3604)). Hypothèse : 0,01 % des visites ⇒ ≈ 0,40 $ pour 1 000 visites ⚠.
- **Placement** : un seul lien discret « Soutenir TurboConvert » **après une conversion réussie** (jamais avant), plus dans le pied de page. Autorisé sur Vercel Hobby.

### 3.5 Un niveau premium ?

**Ce qui pourrait justifier de payer, quand tout est gratuit et local :**
- (1) **sans pub** : c'est le seul levier prouvé (Photopea) ;
- (2) **traitement de dossiers entiers** (File System Access API sur Chromium), préréglages et chaînes d'actions (compresser puis fusionner puis numéroter) ;
- (3) **PWA hors ligne** avec moteurs préchargés ;
- (4) priorité sur les demandes de fonctionnalités.

**Ce qui ne marche pas pour nous** : les quotas (Smallpdf), parce que le contrôle côté client est contournable et que cela contredirait notre promesse.

**Évaluation de l'appétit** :
- Référence Photopea : ≈ 10 % des revenus viennent du premium, avec une audience bien plus engagée qu'un convertisseur ponctuel (sessions longues).
- Hypothèse ⚠ : 0,02–0,05 % des utilisateurs mensuels à 3 €/mois.
- Résultat : ≈ 15–35 abonnés à 100 k visites, soit **40–100 €/mois brut** avant les frais du merchant of record (Lemon Squeezy / Paddle : 5 % + 0,50 $, plus des surcharges ; par exemple 8,6 % sur une vente de 20 $ en France, [comparatif](https://dodopayments.com/blogs/paddle-vs-lemon-squeezy/)). Ces plateformes gèrent la TVA UE, ce qui est indispensable.
- **Verdict** : **ne pas construire avant ~300 k visites/mois.** D'ici là :
  - mesurer avec un bouton « Version sans pub : être prévenu » qui mène à une inscription honnête par email ou à une liste d'attente (et non à une fausse offre) ;
  - si plus de 0,3 % des utilisateurs réguliers s'inscrivent, prototyper une offre Ko-fi membership « sans pub » (clé locale) avant toute facturation complexe.

**API / marque blanche** : exclues (pas de serveur).

### 3.6 Modèle de revenus : 3 scénarios

Hypothèses communes : 1,5 page vue par visite ⚠ (les sites concurrents affichent 2,8–4,8 pages/visite, mais ils incluent des parcours d'upload multi-pages) ; RPM page mixte AdSense ≈ 1,30 $ ; affiliation ≈ 0,75 $ / 1 000 visites ; dons ≈ 0,40 $ / 1 000 visites ; hébergement 0 € (Cloudflare).

| | **10 k visites/mois** | **100 k visites/mois** | **1 M visites/mois** |
|---|---|---|---|
| Pages vues | 15 k | 150 k | 1,5 M |
| AdSense (fourchette ×0,5–×1,8) | **≈ 19 $** (10–35) | **≈ 195 $** (100–350) | **≈ 1 950 $** (975–3 500) |
| Régie premium possible | Aucune (Journey seulement si ≥ 1 k sessions tier 1) | Journey / Monumetric : ×1,3–2 ⚠ ⇒ 250–390 $ | Mediavine (≥ 5 k $/an atteint) : ×1,5–2 ⚠ ⇒ 2 900–3 900 $ |
| Affiliation | ≈ 8 $ | ≈ 75 $ | ≈ 750 $ |
| Dons | ≈ 4 $ | ≈ 40 $ | ≈ 400 $ |
| Premium sans pub | — | non construit | 200–400 $ (≈ 10 % des pubs, ratio Photopea) |
| **Total mensuel** | **≈ 30 $** | **≈ 300 $** (≈ 150–550) | **≈ 3 500–5 000 $** |

**Réalisme du trafic** :
- 10 k visites/mois en 6 à 9 mois est atteignable avec 55 outils en EN+FR soignés et quelques dizaines de domaines référents.
- 100 k demande plusieurs langues et des liens (≈ 12–24 mois).
- 1 M est un scénario de réussite rare (top 3 sur plusieurs requêtes de tête), pas une base de planification.

**Sensibilité** : passer de 35 % à 15 % de trafic indien (contenu FR/ES/DE fort) augmente le RPM d'environ 25 %. La géographie compte autant que le volume.

---

## 4. Validation AdSense

### 4.1 Liste de contrôle précise (2026)

**Compte et identité**
- [ ] Titulaire majeur ; nom légal identique sur le compte, les infos de paiement et la pièce d'identité. Un seul compte AdSense par personne.
- [ ] Adresse postale exacte : le **code PIN** est envoyé par courrier quand les revenus atteignent le seuil de vérification ([AdSense PIN](https://support.google.com/adsense/answer/1753542)).
- [ ] Statut juridique pour encaisser (micro-entreprise par exemple, voir §7.2).

**Site et contenu (cause probable du refus « contenu à faible valeur »)**
- [ ] Toutes les pages publiées sont complètes : outil fonctionnel + texte **propre à chaque outil** (usage, fonctionnement local, réglages, **limites réelles**, FAQ spécifique). Pas de bloc générique répété (l'audit relève 6 « features » identiques partout).
- [ ] **Aucune promesse non tenue** : renommer ou décrire honnêtement les convertisseurs Office ; supprimer « 100 % précis », « supprimé après 1 h », « Uploading… ».
- [ ] Pas de page vide, « bientôt », démo ou orpheline. Les outils non prêts ne sont pas publiés (déjà prévu par l'architecture) ; ne pas les lister dans la navigation ni le sitemap.
- [ ] Blog consolidé : supprimer ou rediriger (301) les doublons « how to » qui cannibalisent les pages outils.
- [ ] Pages de confiance : **À propos** (qui, pourquoi, depuis quand, France), **Contact** (email qui fonctionne), **Confidentialité** exacte (aucun upload ; analytics ; pubs et cookies ; CMP), **CGU**, **Mentions légales** (obligatoires en France, LCEN), **Licences open source**.
- [ ] Redirections 301 des anciennes URL `.html` vers les nouvelles, sans erreur 404 dans la navigation.

**Technique**
- [ ] `ads.txt` à la racine avec le bon identifiant éditeur : déjà présent dans `public/ads.txt` (`pub-6238323731269830`). Vérifier qu'il est servi en 200 en production.
- [ ] **Une seule** balise AdSense par page dans le `<head>`. Retirer tout reste de `adsense-inject.js` / `adsense-guard.js` et les identifiants de bloc factices.
- [ ] Aucune autre régie publicitaire pendant la revue.
- [ ] Search Console : domaine vérifié, sitemap soumis, pages clés indexées, aucune action manuelle.
- [ ] HTTPS, mobile, Core Web Vitals verts (hauteurs réservées pour les futurs blocs).
- [ ] Hébergement compatible avec l'usage commercial (§3.1) **avant** l'activation des annonces.

**Consentement (EEE, UK, CH)**
- [ ] Message « Réglementations européennes » dans AdSense > Confidentialité et messages. C'est une CMP certifiée Google, gratuite, qui produit des chaînes TCF.
- [ ] **Ajouter le bouton « Ne pas consentir » au premier niveau** (la CNIL exige que refuser soit aussi simple qu'accepter).
- [ ] Langues : toutes les langues publiées.
- [ ] Le Consent Mode v2 est piloté par la CMP si GA4 est utilisé.

**Après approbation (conformité des emplacements)** : voir §3.2. Pas de pub près de la zone de dépôt ni des boutons Convertir/Télécharger, pas de pub sur les écrans sans contenu, aucune incitation au clic.

### 4.2 Calendrier réaliste

| Semaine | Étape |
|---|---|
| S0–S4 | Corrections de contenu et techniques ; ≥ 30 pages outils EN + FR complètes ; pages légales ; migration d'hébergement |
| S4–S6 | Search Console : vérifier l'indexation. Créer le message de consentement. |
| **S6–S8** | **Demande de revue** (AdSense > Sites > le site > « J'ai corrigé les problèmes » > Demander une revue). Ne **pas** supprimer puis réajouter le site, cela retarde le traitement ([Google](https://support.google.com/adsense/answer/7584263)). |
| S7–S12 | Réponse (quelques jours, parfois 2 à 4 semaines). En cas de refus : attendre 3 à 4 semaines, améliorer (nouvelles pages, liens, trafic), redemander. Les refus « contenu à faible valeur » sont souvent liés à l'âge du site et au manque de trafic, selon des retours d'éditeurs d'outils ([toolpod](https://toolpod.dev/blog/adsense-rejection-low-value-content), anecdotique). |

### 4.3 En attendant

1. **Dons Ko-fi** : immédiat, compatible Vercel Hobby.
2. **Affiliation contextuelle** (§3.3) : **après la migration Cloudflare**.
3. **Journey by Mediavine** : installer le script Grow dès que le site est stable. Candidater quand on atteint **1 000 sessions tier 1 / 30 jours**. Cela peut arriver *avant* AdSense si l'anglais progresse aux US, au UK, au Canada ou en Australie.
4. **Monumetric Propel** à partir de 10 k pages vues/mois pendant 3 mois (99 $ une fois).
5. **À éviter** : Adsterra, popunders, réseaux « acceptent tout le monde ».

---

## 5. Leviers de croissance hors SEO

### 5.1 Visibilité dans les moteurs IA (ChatGPT, Perplexity, AI Overviews)

Contexte : le trafic référent de ChatGPT reste faible (≈ 0,2–0,3 % des visites référentes, selon [SE Ranking](https://seranking.com/blog/chatgpt-referral-traffic-may-2026/)). L'IA générative représente environ un cinquième des visites de la recherche classique ([Similarweb](https://aisearch.similarweb.com/blog/gen-ai-stats/)). C'est donc un levier secondaire mais croissant. Ce qui fonctionne selon les données disponibles (souvent issues d'éditeurs d'outils GEO, ⚠) :

1. **Être explorable** : autoriser `OAI-SearchBot` (indispensable pour apparaître dans ChatGPT Search, [OpenAI](https://developers.openai.com/docs/bots)), `PerplexityBot` ([Perplexity](https://hub-prod.perplexity.ai/hub/technical-faq/how-does-perplexity-follow-robots-txt)), `Bingbot`. `Google-Extended` n'a **aucun** effet sur les AI Overviews ; il ne faut pas compter dessus.
2. **Bing Webmaster Tools + IndexNow** : Bing alimente plusieurs assistants. IndexNow est automatique via Cloudflare Crawler Hints.
3. **Mentions sur des sites tiers** : listes « meilleurs outils PDF gratuits », forums, Reddit, presse. C'est le facteur le plus cité.
4. **Contenu « réponse d'abord »** : première phrase = réponse directe ; faits vérifiables (spécifications de formats, limites chiffrées) ; tableaux comparatifs ; FAQ ; date de mise à jour réelle.
5. **Données structurées** propres (`WebApplication`, `FAQPage` seulement si la FAQ est visible, `BreadcrumbList`).
6. **`llms.txt`** : coût nul, effet nul mesuré ([SEJ](https://searchenginejournal.com/googles-mueller-says-llms-txt-cant-help)). Le garder honnête et minimal, ou le supprimer. Ne pas y investir de temps.
7. **Mesure** : chaque mois, 20 requêtes types EN + FR dans ChatGPT, Perplexity, Gemini et Google (AI Overview). Noter si TurboConvert est cité. Suivre les référents `chatgpt.com`, `perplexity.ai`, `gemini.google.com`.

### 5.2 Liens et mentions (adaptés à un outil gratuit)

| Action | Effort | Valeur attendue | Remarque |
|---|---|---|---|
| **Open source du dépôt** (ou au moins des moteurs) sur GitHub + soumission aux listes « awesome » (awesome-privacy, awesome-selfhosted si auto-hébergeable) | Moyen | Élevée : liens, mentions, crédibilité, et **conformité AGPL/GPL** | Les liens GitHub sont nofollow, mais ils génèrent des mentions et du trafic. Contrepartie : le code devient copiable, mais l'avantage réel tient au domaine, au contenu et à la marque. |
| **Sensibilisation des universités, bibliothèques, DSI et administrations** (pages d'aide « fusionner un PDF ») : proposer une alternative conforme RGPD | Moyen | **Élevée** : liens .edu/.gouv/.ac, forte autorité | Preuve de la demande : instances BentoPDF hébergées par des institutions. |
| **Presse tech FR** : fiches Clubic / 01net / Les Numériques (qui ont des fiches pour Zamzar et 123apps), pitch à Korben.info et au Journal du Geek | Faible–moyen | Moyenne à élevée en FR | Angle : « convertisseur français, sans envoi de fichiers, vérifiable en mode avion ». |
| **Étude « qui envoie vos fichiers ? »** (§1.7) | Moyen | Élevée si bien faite | Rester factuel et reproductible (risque juridique sinon). |
| AlternativeTo (en alternative à iLovePDF, Smallpdf, CloudConvert, Zamzar, avec l'étiquette « privacy »), SaaSHub, Product Hunt (un seul lancement soigné) | Faible | Moyenne : trafic référent et mentions IA, liens souvent nofollow | Product Hunt : attentes modestes. |
| Show HN | Faible | Faible, sauf vraie différence | La plupart des projets « no upload » font 1 à 5 points. Lancer seulement avec une fonctionnalité unique (ex. traitement de dossiers hors ligne via PWA). |
| Reddit, Quora, forums (r/techsupport, r/iphone, forums Apple, CommentÇaMarche) | Continu | Moyenne | Répondre au problème, mentionner l'outil seulement s'il le résout, signaler l'affiliation. Respecter les règles de chaque sous-forum. |
| **Widget intégrable** (iframe « Convertir HEIC en JPG » pour blogs et forums) | Moyen | Moyenne | Lien d'attribution **de marque** ou nofollow : les liens riches en mots-clés dans des widgets sont un schéma de liens selon [Google](https://developers.google.com/search/docs/essentials/spam-policies). |

Objectif : ≈ 30 domaines référents à M3, ≈ 80 à M6, ≈ 150 à M12.

### 5.3 PWA et installation

- Service worker : met en cache l'interface et, à la demande, les moteurs (Ghostscript, ffmpeg, tesseract). Résultat : **fonctionne hors ligne**, différenciateur crédible et vérifiable.
- `file_handlers` (« Ouvrir avec TurboConvert » sur Chrome/Edge desktop) et `share_target` (Android). Non supportés par Safari et Firefox : traiter comme des améliorations progressives ([Chrome](https://developer.chrome.com/articles/file-handling), [MDN](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Manifest/Reference/file_handlers)).
- Bouton « Installer l'app » affiché seulement après la **2ᵉ conversion réussie**.

### 5.4 Extension de navigateur

- Demande prouvée : « Save image as Type » (enregistrer une image WebP en PNG ou JPG) a dépassé **1 million d'utilisateurs** avant d'être rachetée et compromise ([TechSpot](https://www.techspot.com/community/topics/popular-chrome-extension-save-image-as-type-was-hijacked-impacting-over-1-million-users.296830/)). Il y a donc de la place pour une version **digne de confiance** et open source.
- Coût : 5 $ une fois pour Chrome ([Chromium](https://blog.chromium.org/2020/03/new-developer-dashboard-and.html)), gratuit pour Edge et Firefox. Effort : 2–4 jours.
- Pas de monétisation dans l'extension. L'objectif est la marque, un lien depuis le store et les retours vers le site.
- Priorité : **après le jour 90**.

### 5.5 Fidélisation et CRO sur les pages outils

**Parcours mesuré** : `page_view → file_added → convert_start → convert_success → download → 2e conversion`.

1. **L'outil au-dessus de la ligne de flottaison sur mobile**, formats acceptés et taille maximale indiqués *avant* le dépôt.
2. **Preuve de confidentialité** : badge « Traitement sur votre appareil : essayez en mode avion » avec un lien vers l'explication.
3. **Premier chargement d'un moteur lourd** : afficher la taille (« 32 Mo, une seule fois ») et une progression réelle.
4. **Résultat** : aperçu, taille avant/après, téléchargement, « Convertir d'autres fichiers », **étape suivante logique** (compresser après fusion, PDF après HEIC→JPG).
5. **Messages d'erreur utiles** (mot de passe, fichier corrompu, mémoire insuffisante) avec une alternative.
6. **Outils récents** (localStorage) sur l'accueil ; invitation discrète « Ajouter aux favoris (Ctrl+D) » après un succès.
7. Tests A/B simples (via les événements Umami) : texte du CTA, ordre des options, emplacement du lien de don.

---

## 6. Analytics

### 6.1 Stack gratuite recommandée

| Couche | Outil | Pourquoi | Consentement |
|---|---|---|---|
| Événements produit + pages vues | **Umami Cloud Hobby** : gratuit, 100 k événements/mois, 1 site, 6 mois de rétention ([Umami](https://umami.is/pricing)) | Sans cookie, événements personnalisés, tableaux simples | Pas de bandeau requis si la configuration respecte l'**exemption CNIL** (mesure d'audience stricte, pas de croisement, pas de transmission). Depuis juillet 2025, l'éditeur doit documenter lui-même la conformité ([CNIL](https://www.cnil.fr/fr/cookies-solutions-pour-les-outils-de-mesure-daudience)). |
| Pages vues de référence illimitées | **Cloudflare Web Analytics** (gratuit, après la migration) | Sans cookie, sans plafond de trafic, pages vues uniquement ([CF](https://developers.cloudflare.com/web-analytics/limits/)) | Non |
| SEO | **Google Search Console + Bing Webmaster Tools** | Requêtes, positions, indexation | Non |
| Pub et audience détaillée (après AdSense) | **GA4** relié à AdSense, chargé **uniquement après consentement** (Consent Mode v2 basique) | Revenus par page et par pays | Oui (CMP) |
| À éviter au début | Microsoft Clarity | Exige un signal de consentement dans l'EEE depuis le 31/10/2025 ([PPC Land](https://ppc.land/microsoft-clarity-enforces-cookie-consent-requirements-across-europe/)) | Oui |
| Si on reste sur Vercel | Vercel Web Analytics (Hobby) | 50 k événements, **pas d'événements personnalisés**, usage non commercial uniquement | Non |

Si Umami dépasse 100 k événements, le passage à Pro coûte 20 $/mois. Alternative : échantillonner les événements (par exemple 1 utilisateur sur 4) pour rester gratuit.

### 6.2 Événements à instrumenter (dans `runtime/tool.ts`)

`file_added` (outil, nombre de fichiers, taille par tranche), `engine_load` (durée), `convert_start`, `convert_success` (durée, ratio de taille), `convert_error` (code d'erreur), `download`, `download_zip`, `convert_again`, `related_tool_click`, `install_prompt_shown/accepted`, `donate_click`, `affiliate_click` (programme), `pro_waitlist_click`.

### 6.3 KPI et cibles sur 12 mois

⚠ Cibles prudentes pour un domaine neuf, à recalibrer à M3 avec les données réelles de Search Console.

| KPI | M1 | M3 | M6 | M9 | M12 |
|---|---|---|---|---|---|
| Pages indexées (Search Console) | 60–100 | 120–180 | 200–300 (avec ES) | 300–450 (avec DE) | 400–600 |
| Clics Search Console / mois | 50–300 | 1–3 k | 4–12 k | 10–30 k | 25–70 k |
| Visites / mois (Umami) | 100–500 | 1–4 k | 5–15 k | 12–35 k | 30–80 k |
| Part des visites zones A+B (§3.2) | — | ≥ 35 % | ≥ 35 % | ≥ 38 % | ≥ 40 % |
| Taux de réussite des conversions (`success / start`) | ≥ 95 % | ≥ 97 % | ≥ 97 % | ≥ 97 % | ≥ 98 % |
| Dépôt → téléchargement | ≥ 60 % | ≥ 65 % | ≥ 70 % | ≥ 70 % | ≥ 72 % |
| Visiteurs récurrents (30 j) | — | ≥ 10 % | ≥ 15 % | ≥ 18 % | ≥ 20 % |
| Domaines référents | 5–10 | 20–40 | 50–90 | 80–130 | 120–200 |
| Core Web Vitals (URL « bonnes ») | ≥ 90 % | ≥ 90 % | ≥ 90 % | ≥ 90 % | ≥ 90 % |
| Citations IA (sur 20 requêtes types) | 0 | 0–1 | 1–3 | 2–5 | 3–7 |
| Statut AdSense | Corrections | Demande de revue | Approuvé (objectif) | — | — |
| Revenu mensuel total | 0 € | 0–10 € | 10–40 € | 25–100 € | 50–200 € |

---

## 7. Plan d'action à 90 jours

### 7.1 Actions classées par impact sur le revenu / effort

| # | Action | Impact | Effort | Qui | Semaine |
|---|---|---|---|---|---|
| 1 | **Décider et migrer l'hébergement** vers Cloudflare Pages (`_redirects`, `_headers`, wasm > 25 MiB sur R2 ou CDN figé). Conserver les 301 des anciennes URL. | Débloque toute monétisation légale | 1–2 j | Propriétaire + dev | S1–S2 |
| 2 | **Honnêteté et complétude** : terminer les pages outils EN+FR avec un texte propre à chaque outil ; renommer ou décrire honnêtement les convertisseurs Office ; supprimer les doublons du blog (301) | Prérequis AdSense, réduit le rebond | 5–10 j | Dev / contenu | S1–S5 |
| 3 | **Search Console + Bing Webmaster Tools + sitemap + IndexNow** | Indexation plus rapide, données SEO | 1 h | Propriétaire | S1 |
| 4 | **Umami + événements du parcours** | Pilotage de tout le reste | 1 j | Propriétaire + dev | S2 |
| 5 | **Gains rapides de nouvelles pages** : image-to-text, heic-to-pdf, delete-pdf-pages, jfif-to-jpg, video-to-mp3, mov-to-mp3, m4a-to-wav, gif-to-mp4, tiff-to-jpg/pdf, flatten-pdf (EN+FR) | +≈ 330 k de volume US adressé (≈ 260 k sans le synonyme jpeg to jpg) | 5–7 j | Dev | S3–S7 |
| 6 | **Pages légales et confiance** (À propos, Contact, Confidentialité, CGU, Mentions légales, Licences open source) | Prérequis AdSense, conformité | 1–2 j | Propriétaire (infos) + dev | S2–S3 |
| 7 | **Message de consentement AdSense** (TCF v2.3, bouton « Ne pas consentir ») + nettoyage des balises | Prérequis AdSense | ½ j | Propriétaire | S5 |
| 8 | **Demande de revue AdSense** | Revenu display | 10 min | Propriétaire | S6–S8 |
| 9 | **Lien de don Ko-fi** après succès | Petit revenu immédiat | 2 h | Propriétaire + dev | S2 |
| 10 | **Outils P1 à effort moyen** : sign-pdf, gif-compressor, png-to-svg, favicon-generator | +≈ 115 k de volume US (hors synonyme « compress gif »), CPC élevés | 6–8 j | Dev | S6–S10 |
| 11 | **PWA hors ligne** (service worker + cache des moteurs) + badge « mode avion » | Différenciation, fidélisation, liens | 2–3 j | Dev | S7–S9 |
| 12 | **Liens** : AlternativeTo, fiches Clubic/01net, pitch Korben, 10 démarches auprès d'universités et bibliothèques ; open source (si décidé) | Autorité, mentions IA | 1 j/sem. | Propriétaire | S4–S13 |
| 13 | **Inscriptions et blocs d'affiliation** (Adobe, PDFelement, UPDF, Yousign, pCloud) sur les pages concernées | ≈ 0,75 $ / 1 000 visites | 1–2 j | Propriétaire + dev | S4–S8 (après le n° 1) |
| 14 | **Lancement ES** (15–20 pages outils relues + interface) | Volume ×1,5 à terme | 5–8 j | Dev / traduction relue | S9–S13 |
| 15 | **Script Grow (Journey)** : installation dès la stabilisation, pour cumuler les 30 jours requis | Alternative ou complément à AdSense | 1 h | Propriétaire | S8 |
| 16 | **Étude « qui envoie vos fichiers ? »** (EN + FR) | Pièce à liens | 3–4 j | Propriétaire + dev | S10–S13 |

Hors 90 jours (M4–M12) : DE (M4–M5), IT (M6–M7), PT-BR (M8–M9) ; fill-pdf ; extension de navigateur ; prototype de suppression d'arrière-plan avec un modèle sous licence permissive ; EPUB → PDF ; tests d'emplacements publicitaires ; Monumetric/Journey selon le trafic ; liste d'attente premium.

### 7.2 Décisions et comptes réservés au propriétaire, étapes exactes

**A. Hébergement (décision n° 1)**

- *Option recommandée : Cloudflare Pages.*
  1. Créer un compte sur dash.cloudflare.com.
  2. Workers & Pages > Create > Pages > Connect to Git > choisir le dépôt.
  3. Build command `npm run build`, output `dist`, variable `NODE_VERSION` = version locale.
  4. Custom domains > `turboconvert.io` (le plus simple : transférer les DNS chez Cloudflare, ou un CNAME).
  5. R2 > créer un bucket public `turboconvert-engines` pour `ffmpeg-core.wasm` (offre gratuite).
  6. Activer Web Analytics, puis Caching > Configuration > **Crawler Hints** (IndexNow).
  7. Une fois la nouvelle version validée, supprimer le projet Vercel ou retirer le domaine.
- *Alternative : Vercel Pro* (Settings > Billing > Upgrade, 20 $/mois) **avant** d'activer pubs ou affiliation.

**B. Google Search Console**
1. search.google.com/search-console > Ajouter une propriété > **Domaine** `turboconvert.io`.
2. Ajouter l'enregistrement TXT au DNS, puis Valider.
3. Sitemaps : soumettre `https://turboconvert.io/sitemap.xml` (ou l'index généré par Astro, `sitemap-index.xml`).
4. Inspecter 10 URL clés (EN + FR) > Demander l'indexation.
5. Vérifier « Actions manuelles » et « Pages ».

**C. Bing Webmaster Tools**
1. bing.com/webmasters > **Importer depuis Google Search Console**.
2. Vérifier que le sitemap est repris.
3. Activer IndexNow (automatique via Cloudflare Crawler Hints).

**D. AdSense**
1. Compte > Paramètres > Infos de paiement : nom légal, adresse, et infos fiscales si elles sont demandées.
2. **Confidentialité et messages > Réglementations européennes > Créer un message** : sites = turboconvert.io ; langues = EN, FR (+ ES, DE…) ; **activer le bouton « Ne pas consentir »** ; publier.
3. Sites > turboconvert.io : vérifier que ads.txt est « Autorisé ». Quand la liste §4.1 est cochée : « J'ai corrigé les problèmes » > **Demander une revue**. Ne pas retirer ni réajouter le site.
4. Après approbation : Annonces > Par bloc d'annonces > créer 3 blocs display responsives (`toolBelow`, `toolSidebar`, `article`) et transmettre les identifiants pour `src/config/site.ts` ; Annonces > Par site > Auto ads : n'activer **que** les formats ancrage + vignettes ; désactiver « in-page » au début.
5. Paiements : saisir le **PIN** reçu par courrier ; ajouter l'IBAN.

**E. Analytics**
- Umami : cloud.umami.is > Sign up (Hobby) > Add website `turboconvert.io` > transmettre le *Website ID*.
- Option « rester sur Vercel » pendant la phase sans pub : Vercel > Projet > **Analytics > Enable** (la config `ANALYTICS.vercel = true` existe déjà ; Hobby = 50 k événements, pas d'événements personnalisés).
- Après AdSense : analytics.google.com > créer la propriété GA4 > transmettre l'ID `G-…` (chargement uniquement après consentement) > relier AdSense (Admin > Associations de produits).

**F. Affiliation** (après la décision A)
1. **Partnerize** : s'inscrire, puis demander la campagne Adobe ([Adobe](https://www.adobe.com/buy/affiliates.html)).
2. **CJ** et/ou **Awin** : s'inscrire comme éditeur, puis postuler à Wondershare PDFelement et UPDF.
3. **Affilae** : programme Yousign.
4. **pCloud** : pcloud.com/affiliate.
5. Optionnel : PartnerStack (PandaDoc, Foxit), Movavi.

Fournir pour chaque inscription : URL, description honnête (« convertisseur gratuit, traitement local »), trafic réel. Transmettre ensuite les liens suivis.

**G. Dons** : ko-fi.com > créer la page « TurboConvert » > connecter Stripe et/ou PayPal > vérifier que les tips sont à 0 % > transmettre l'URL.

**H. Juridique et fiscalité** (à valider avec un expert-comptable, ceci n'est pas un conseil juridique)
- Statut pour percevoir des revenus publicitaires et d'affiliation : micro-entreprise (BNC) au départ.
- Mentions légales LCEN : identité de l'éditeur, hébergeur.
- Question TVA : AdSense est payé par Google Ireland (prestation B2B intracommunautaire). Vérifier le besoin d'un numéro de TVA intracommunautaire, même en franchise.

**I. Licences et open source** (décision)
- (a) Publier le dépôt sous une licence compatible (AGPL-3.0 si Ghostscript reste intégré). C'est la solution recommandée, et un levier de liens.
- (b) Garder le dépôt privé, mais publier une page « Licences » avec liens vers les sources de Ghostscript (AGPL), ffmpeg (GPL) et libheif (LGPL), et faire vérifier la conformité AGPL par un juriste.

**J. Données de mots-clés** : ads.google.com > créer un compte **sans campagne** (mode expert) > Outils > **Planificateur de mots-clés** > relever les volumes FR, ES, DE et IT de la §1.2 marqués « n.d. ».

**K. Plus tard** : compte développeur Chrome Web Store (5 $) ; Journey by Mediavine (installer Grow, attendre 30 jours, candidater à ≥ 1 000 sessions tier 1 / 30 j) ; Monumetric (≥ 10 k pages vues/mois pendant 3 mois).

---

## Annexe : principales sources

- Volumes Google Ads : [seodata.dev](https://www.seodata.dev/keyword/pdf-to-word) (+ `?country=fr|de|es|mx|br|it`)
- Trafic et mots-clés des concurrents : Ahrefs ([iLovePDF](https://ahrefs.com/websites/ilovepdf.com), [Smallpdf](https://ahrefs.com/websites/smallpdf.com), [PDF24](https://ahrefs.com/websites/pdf24.org), [CloudConvert](https://ahrefs.com/websites/cloudconvert.com), [Convertio](https://ahrefs.com/websites/convertio.co), [FreeConvert](https://ahrefs.com/websites/freeconvert.com), [Zamzar](https://ahrefs.com/websites/zamzar.com), [Sejda](https://ahrefs.com/websites/sejda.com), [iLoveIMG](https://ahrefs.com/websites/iloveimg.com), [ezgif](https://ahrefs.com/websites/ezgif.com), [remove.bg](https://ahrefs.com/websites/remove.bg), [pi7](https://ahrefs.com/websites/pi7.org), [jpg2pdf](https://ahrefs.com/websites/jpg2pdf.com)) ; Semrush ([iLovePDF](https://www.semrush.com/website/ilovepdf.com/overview/), [Smallpdf](https://www.semrush.com/website/smallpdf.com/overview/), [CloudConvert](https://www.semrush.com/website/cloudconvert.com/overview/), [Convertio](https://www.semrush.com/website/convertio.co/overview/), [FreeConvert](https://www.semrush.com/website/freeconvert.com/overview/), [Sejda](https://www.semrush.com/website/sejda.com/overview/), [iLoveIMG](https://www.semrush.com/website/iloveimg.com/overview/), [remove.bg](https://www.semrush.com/website/remove.bg/overview/))
- Régies : [Mediavine](https://www.mediavine.com/mediavine-requirements/), [Raptive](https://help.raptive.com/hc/en-us/articles/360032840891-How-do-I-apply-to-Raptive), [Ezoic](https://support.ezoic.com/kb/article/getting-started-ezoics-requirements), [Monumetric](https://www.monumetric.com/requirements/), [Playwire](https://www.playwire.com/hubfs/llms.txt), [Freestar](https://freestar.com/publisher-quality-requirements/), [EthicalAds](https://www.ethicalads.io/publishers/faq/), [Carbon](https://www.carbonads.net/faq)
- AdSense : [Règles du programme](https://support.google.com/adsense/answer/48182), [Écrans sans contenu](https://support.google.com/publisherpolicies/answer/11112688), [Revue du site](https://support.google.com/adsense/answer/7584263), [CMP certifiée](https://support.google.com/admanager/answer/13554116), [TCF 2.3](https://www.clym.io/blog/tcf-v23-deadline-what-publishers-must-do-before-february-28-2026)
- Hébergement et analytics : [Vercel Fair Use](https://vercel.com/docs/limits/fair-use-guidelines), [Vercel Analytics](https://vercel.com/docs/analytics/limits-and-pricing), [Cloudflare Pages](https://developers.cloudflare.com/pages/platform/limits/), [Umami](https://umami.is/pricing), [CNIL](https://www.cnil.fr/fr/cookies-solutions-pour-les-outils-de-mesure-daudience)
- IA et SEO : [Ahrefs AI Overviews](https://ahrefs.com/blog/ai-overviews-reduce-clicks-update/), [OpenAI bots](https://developers.openai.com/docs/bots), [Google spam policies](https://developers.google.com/search/docs/essentials/spam-policies), [SEJ llms.txt](https://searchenginejournal.com/googles-mueller-says-llms-txt-cant-help)
- Modèle économique : [Photopea (Wikipedia)](https://en.wikipedia.org/wiki/Photopea), [PDF24](https://help.pdf24.org/en/?p=332)
