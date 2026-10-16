---
title: 'Refondre la partie haute du portfolio'
type: 'feature'
created: '2026-10-06'
status: 'done'
route: 'dispatch'
baseline_commit: 'f4b9019427a121e3330516ae5a96c8ff84ac5fdf'
review_loop_iteration: 0
context: []
---

<frozen-after-approval reason="human-owned intent — do not modify unless human renegotiates">

## Intent

**Problem:** Avant la section `01 — Profil`, l’accueil juxtapose un pitch long, des chiffres et des appels à l’action, sans hiérarchie immédiate entre identité professionnelle, compétences et projets les plus pertinents. Un recruteur doit parcourir la page pour comprendre le profil et ses preuves.

**Approach:** Réorganiser uniquement la partie avant `01 — Profil` en quatre temps bilingues : introduction concise, résumé « Profile at a glance » à trois colonnes, deux projets sélectionnés (Kinesport et Capgemini / Airbus Skywise), puis appel au contact. Garder la liste complète des projets et toutes les sections qui suivent `01 — Profil` inchangées.

**Boundaries & Constraints**

**Always:** Préserver le thème et les composants du portfolio; fournir les contenus FR et EN; rester fidèle aux données vérifiées (2 088 évaluations, 555 674 points, 266 variables, 10 ans de football en compétition, niveau Régional 1); réutiliser les liens et comportements déjà présents pour le CV, l’étude Kinesport, la carte Airbus et le contact.

**Never:** Modifier le contenu de `01 — Profil` ou des sections suivantes; supprimer ou réduire la section complète Projets; présenter les 2 088 évaluations comme 2 088 athlètes uniques; inventer une durée de pratique au niveau Régional 1, un impact non mesuré ou des résultats causaux.

## I/O & Edge-Case Matrix

| Scénario | Entrée / état | Résultat attendu | Gestion d’erreur |
|---|---|---|---|
| Clic « Voir mes projets » | Accueil FR ou EN | Défile vers les deux projets sélectionnés | Aucun changement de langue |
| Téléchargement CV | Clic sur le CTA CV | Ouvre ou télécharge le PDF existant | Réutiliser le chemin configuré |
| Projet Kinesport | Clic « Voir le projet » | Ouvre l’étude existante et la rend visible | Aucun doublon d’étude |
| Projet Airbus | Clic « Voir le projet » | Défile vers la carte Airbus de la liste complète | La liste complète reste disponible |
| CTA contact | Clic du CTA final | Défile vers `#contact` | Aucun formulaire dupliqué |

</frozen-after-approval>

## Code Map

- `src/App.tsx` — Le bloc `#hero` contient actuellement le nom, le pitch, le résumé, les statistiques et les CTA; `#about` est la borne de fin immuable. Les ancres `#projects`, `#contact`, le callback d’ouverture de l’étude Kinesport et les grilles responsives existantes sont réutilisables.
- `src/i18n.ts` — `hero` contient les textes bilingues et statistiques; `projects.items[2]` est Kinesport, `projects.items[1]` est Airbus / Capgemini; `credentials.cvHref` fournit le PDF existant. Les faits de l’expérience et du parcours sportif servent de source au résumé.
- `public/CV_2026 Thomas_Guibert.pdf` — fichier cible existant du lien de téléchargement configuré.

## Tasks & Acceptance

**Execution:**
- [x] `src/i18n.ts` — Ajouter et traduire les textes d’introduction, les trois colonnes de profil, les deux projets choisis et le CTA final, en reprenant uniquement les faits attestés.
- [x] `src/App.tsx` — Réorganiser le contenu avant `#about`; ajouter le résumé compact, les deux aperçus de projet et les CTA reliés aux cibles existantes; laisser `#about` et la suite identiques.

**Acceptance Criteria:**
- Given la page en français ou en anglais, when l’accueil est affiché, then le nom, le titre, la formation, l’école, le pitch et le stage de six mois à partir de février 2027 sont lisibles avant les CTA « Voir mes projets » et « Télécharger mon CV ».
- Given l’introduction, when le visiteur poursuit vers le bas, then un résumé sans paragraphe explicatif présente Data & AI, Sport, Experience, les chiffres attestés et les dix ans de football en compétition au niveau Régional 1.
- Given le résumé, when la section suivante apparaît, then seuls Kinesport et Capgemini / Airbus Skywise sont mis en avant, avec un lien fonctionnel vers chacun; le Kinesport ouvre l’étude existante et Airbus rejoint sa carte détaillée.
- Given les deux aperçus, when ils sont suivis, then un CTA de stage de six mois présente les domaines visés, février 2027 et un lien vers le contact.
- Given la page après ce CTA, when elle continue, then `01 — Profil`, la liste complète de projets et le reste du portfolio gardent leur contenu et leur ordre actuels.
- Given un viewport de 360 px, when chaque langue est consultée, then le contenu reste lisible, les actions accessibles et aucun défilement horizontal n’apparaît.

## Design Notes

Réutiliser la direction visuelle existante (Barlow Condensed, Outfit, JetBrains Mono, fond sombre et accent vert). Le résumé est une grille compacte sans paragraphe d’explication; les deux projets sont les seuls aperçus avant le CTA final. Leur contenu de détail continue d’être porté par les cibles actuelles, sans recopier les longues études de cas.

## Verification

**Commands:**
- `npm run build` — attendu : TypeScript et build Vite réussis.

**Manual checks:**
- En navigateur, vérifier en FR et EN l’ordre des quatre blocs, les liens CV / Kinesport / Airbus / contact, la présence inchangée de `01 — Profil` et de la liste complète, ainsi que l’absence de débordement à 360 px.

## Implementation Notes

- `src/i18n.ts` porte les contenus FR/EN de l’introduction, du résumé en trois colonnes, des aperçus Kinesport / Capgemini et du CTA final.
- `src/App.tsx` réorganise uniquement l’accueil avant `#about`; la section `#projects` complète et les sections existantes après `#about` restent en place.
- Les liens réutilisent l’étude Kinesport, l’ancre Airbus, le PDF CV et `#contact`; les deux images d’aperçu existent et sont servies.
- Validation : `npm run build` réussi; ordre et largeur vérifiés en FR/EN à 360 px, deux aperçus présents et aucun débordement horizontal.

## Review Triage Log

- false — Le CTA projets ne devait pas conduire à la liste complète : l’intention place les deux projets choisis immédiatement après l’introduction; `#projects` et sa liste complète restent présents plus bas.
- false — Le setter `setShowKstartsStudy` n’est pas indéfini : il est déclaré dans l’état local de `App` et contrôle déjà l’étude K-STARTS existante.
- false — L’absence de `scrollMarginTop` sur le résumé et le CTA final ne masque pas ces sections dans le flux normal; aucune navigation ne cible leurs ancres. Les cibles réellement utilisées existent.
- false — Le lien CV est un lien HTML téléchargeable et reste accessible au clavier avec l’indicateur de focus natif; aucun style ne supprime cet indicateur.
- false — Les minima de grille utilisent `min(100%, ...)`; au viewport mobile testé, le document mesure 356 px pour 356 px et les deux cartes tiennent sans débordement.
- false — Les images ont une largeur de 100 % et un ratio 16:9 réservé; les deux assets renvoient une image valide dans le navigateur.
- false — Les textes affichés sont des contenus localisés fixes et les blocs de faits autorisent la coupure des mots; aucune donnée dynamique susceptible de déborder n’est introduite.
- false — La hiérarchie de titres conserve un `h1` pour le nom puis des `h2` pour les groupes et projets; l’absence d’un `<header>` dans chaque section ne crée pas le défaut décrit.
- false — L’action Kinesport réutilise `setShowKstartsStudy`, déjà déclaré et lié à l’étude existante; le clic ne dépend pas d’un état manquant.
- false — La fonction `scrollTo` existe et les cibles `featured-projects` et `contact` sont présentes dans le DOM; elle reprend le comportement de navigation déjà utilisé.
- false — L’ancre Airbus `data-engineering-project` est portée par sa carte détaillée dans la liste complète des projets.
- false — `tx.credentials.cvHref` est défini en FR et EN, le PDF ciblé existe et le lien reste réutilisé dans la section CV.

