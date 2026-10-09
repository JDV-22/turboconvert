# Plan d’acquisition de trafic gratuit — TurboConvert

Principe : ne pas attaquer de front « pdf to word » ou « compress pdf » (iLovePDF, Smallpdf : sites à très forte autorité), mais **gagner la longue traîne à forte intention** où un petit site peut être top 3, puis **accumuler de l’autorité** (liens, mentions) pour remonter sur les requêtes de tête.

Hypothèses de temps : ~2–3 h par semaine de ton côté ; le reste est du travail de contenu/code qu’une session Claude peut faire.

---

## 1. Fondations (semaine 1) — déjà fait / à finir

| Action | Statut |
|---|---|
| Sitemap multilingue + hreflang, données structurées, canonicals, 301 des anciennes URL | ✅ fait |
| IndexNow : 420 URL soumises à Bing/Yandex/Seznam/Naver (`npm run indexnow` après chaque gros déploiement) | ✅ fait le 09/10 |
| `llms.txt` généré depuis le catalogue (citations par les IA) | ✅ fait |
| **Search Console** : soumettre `sitemap.xml` + demander l’indexation des 10 pages clés | ⏳ toi (10 min) |
| **Bing Webmaster Tools** : importer depuis Search Console | ⏳ toi (5 min) |
| **Umami** : mesure d’audience → savoir quelles pages convertissent | ⏳ toi (5 min) |

## 2. SEO longue traîne — le moteur principal (semaines 2 à 12)

Classé par rapport gain / effort.

### 2.1 « Faire passer un fichier sous une taille limite » (notre angle différenciant)
Déjà en ligne : compresser un PDF à 100 Ko / 200 Ko / 500 Ko / 1 Mo (EN, FR).
À faire :
- **Décliner en ES, DE, PT, IT** (le générateur `scripts/gen-size-pages.mjs` est prêt : il suffit d’ajouter les templates de langue).
- **Images à une taille cible** : « compresser une image à 20 / 50 / 100 / 200 Ko », « réduire une photo à 1 Mo ». Très gros volumes (Inde, Brésil, formulaires administratifs) et peu de concurrence de qualité.
- **Pages « par destination »** (FR d’abord, forte intention, presque aucune concurrence) : « PDF trop lourd pour la CAF », « réduire un PDF pour l’ANTS », « Parcoursup », « Doctolib », « France Travail », « impots.gouv », « Gmail/Outlook », « WhatsApp ». ⚠️ Chaque page doit citer la vraie limite du portail, vérifiée et datée — sinon on ne la publie pas.

### 2.2 Les 10 outils déjà codés mais pas encore publiés
HEIC → PDF, image → texte (OCR, ~90 k recherches/mois US), JFIF → JPG, TIFF → JPG/PDF, vidéo → MP3, MOV → MP3, GIF → MP4, M4A → WAV, aplatir un PDF. Il ne manque que les textes (6 langues). Coût faible, ~330 k recherches/mois US adressées d’après `STRATEGY.md`.

### 2.3 Blog : intentions informationnelles qui renvoient vers les outils
- Traduire les 16 guides EN/FR en ES/DE/PT/IT.
- Nouveaux guides « problème → solution », ex. : « pourquoi mon PDF est-il si lourd », « HEIC ne s’ouvre pas sur Windows », « photo refusée : format ou poids incorrect », « envoyer une vidéo trop lourde par mail », « scanner un document avec son téléphone et l’envoyer en PDF ».
- Un guide = une seule intention, un outil cible, une FAQ issue des « Autres questions posées ».

### 2.4 Optimisation continue (à partir de la semaine 4)
Toutes les 2 semaines : exporter Search Console (requêtes × pages), repérer les pages en positions 5–20 avec beaucoup d’impressions, et retravailler titre / description / H1 / FAQ pour ces requêtes exactes. C’est le levier le plus rentable une fois le site indexé.

## 3. Acquisition hors Google (liens + trafic direct)

| Canal | Action concrète | Effort | Effet |
|---|---|---|---|
| **AlternativeTo** | Créer la fiche TurboConvert comme alternative à iLovePDF, Smallpdf, PDF24, CloudConvert, Convertio | 30 min | Trafic qualifié durable + lien |
| **Annuaires « outils gratuits / vie privée »** | Soumettre à : awesome-privacy (GitHub), PrivacyTools / Privacy Guides (forum), Framalibre (FR), « There’s An AI For That »-like pour outils web, SaaSHub | 1 h | Liens d’autorité |
| **Product Hunt** | Lancement un mardi : « Convert any file without uploading it — works offline » | 2 h | Pic de trafic + liens |
| **Reddit** | Répondre (pas spammer) aux questions « how to compress pdf without uploading », « heic to jpg windows » sur r/techsupport, r/privacy, r/software, r/france, r/conseiljuridique (pour les justificatifs) | 20 min/sem | Trafic ciblé |
| **Presse tech FR** | Mail court à Korben, Frandroid, Clubic, 01net, Numerama : angle « l’outil qui convertit vos documents sans les envoyer sur Internet » + test « mode avion » | 1 h | Liens forts |
| **Universités, BU, lycées, associations d’aide administrative (France Services)** | Proposer TurboConvert dans leurs pages « outils numériques » : gratuit, sans compte, RGPD-friendly par conception | 1 h/sem | Liens .edu/.gouv très puissants |
| **Open source du dépôt** (décision à prendre) | Publier sur GitHub (licence AGPL, réglant aussi la question Ghostscript) + post « Show HN » | 2 h | Étoiles, liens, crédibilité |
| **Vidéos courtes** | 30 s par tâche : « Compresser un PDF pour la CAF en 10 secondes » (TikTok/YouTube Shorts/Reels) | 1 h/vidéo | Trafic + recherche YouTube |
| **Microsoft Store (PWA)** | Publier la PWA (gratuit via PWABuilder) | 1 h | Canal d’installation |

## 4. Être cité par les IA (ChatGPT, Perplexity, Google AI Overviews)
- Pages factuelles avec chiffres vérifiables (limites des portails, comparatifs datés) : c’est ce que les IA citent.
- Le guide comparatif « meilleurs outils PDF gratuits » à tenir à jour tous les 6 mois.
- Mentions sur des sites tiers (AlternativeTo, Reddit, presse) : les IA s’appuient beaucoup sur ces sources.

## 5. Fidélisation (le trafic qui revient ne coûte rien)
Déjà en place : PWA installable, mode hors ligne, « Continuer avec… » après conversion. À ajouter : une invitation discrète « Ajoutez TurboConvert à vos favoris / installez l’app » après la 2ᵉ conversion réussie.

## 6. Objectifs et suivi

| Mois | Pages indexées | Visites / mois | Domaines référents |
|---|---|---|---|
| M1 | 300+ | 500–2 000 | 10 |
| M3 | 450+ | 5 000–15 000 | 40 |
| M6 | 600+ | 20 000–50 000 | 100 |
| M12 | 800+ | 50 000–150 000 | 200 |

Ces ordres de grandeur supposent l’exécution régulière des sections 2 et 3 ; ils ne sont pas garantis.

## 7. Prochaines sessions Claude (dans l’ordre)
1. Textes des 10 outils déjà codés (6 langues).
2. Taille cible pour les images + pages « compresser une image à X Ko » (6 langues).
3. Pages « par destination » FR (avec vérification des limites réelles).
4. Traduction du blog en ES/DE/PT/IT.
5. Optimisation à partir des données Search Console (dès 4 semaines de données).
