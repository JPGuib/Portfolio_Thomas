---
title: 'Transformer la carte Expériences data en expériences professionnelles'
type: 'feature'
created: '2026-10-01'
status: 'done'
route: 'dispatch'
review_loop_iteration: 0
context: []
baseline_commit: '7046415f56d1e0ff3740ae010e0e9af32da12db5'
---

<frozen-after-approval reason="human-owned intent — do not modify unless human renegotiates">

## Intent

**Problem:** La carte « Expériences data » de la section Profil ne présente qu’un résumé, alors que l’utilisateur souhaite y détailler ses trois expériences professionnelles.

**Approach:** Transformer la carte du profil en « EXPÉRIENCES PROFESSIONNELLES » et y présenter Capgemini, Kinesport / Medinetic Learning et Savefolio avec les contenus français et anglais et des appels à l’action. Relier Capgemini à une présentation Data Engineering limitée aux faits fournis et préserver la frise « Formation & expérience » ainsi que la colonne football.

## Boundaries & Constraints

**Always:** Conserver les textes localisés dans `src/i18n.ts`, fournir le contenu français et anglais, préserver les données fournies par l’utilisateur et vérifier l’affichage mobile à 360 px.

**Never:** Remplacer la frise de la section `#experience`, modifier la colonne football, inventer des résultats ou supprimer/écraser les changements Git déjà présents.

</frozen-after-approval>

## Code Map

- `src/i18n.ts` -- `about.cards` contient la carte « Expériences data » en français et en anglais ; ses entrées `details` portent le contenu et les CTA.
- `src/App.tsx` -- `#about` rend les détails de chaque carte ; le rendu prend en charge les libellés, les rôles, le texte multiligne et les liens d’étude.
- `src/App.tsx` -- `ProjectCard` accepte une ancre optionnelle, `StrategyProjectCard` expose `#savefolio-project` et `showKstartsStudy` ouvre l’étude K-STARTS.
- `src/i18n.ts` -- `projects.items` contient la présentation Data Engineering bilingue reliée au CTA Capgemini.
- `#experience` -- la frise initiale Formation & expérience et sa colonne football restent inchangées.

## Tasks & Acceptance

**Execution:**
- [x] `src/i18n.ts` -- remplacer le résumé de « Expériences data » par les trois entrées complètes en français et en anglais.
- [x] `src/App.tsx` -- afficher les entreprises, rôles, contextes, descriptions, résultats et CTA dans la carte de profil.
- [x] `src/i18n.ts` et `src/App.tsx` -- ajouter la présentation Data Engineering et relier les CTA aux ancres Data Engineering, K-STARTS et Savefolio.
- [x] `src/i18n.ts` et `src/App.tsx` -- restaurer et préserver le contenu antérieur de la frise `#experience`.

**Acceptance Criteria:**
- Given le site en français ou en anglais, when la section Profil est affichée, then la carte « Expériences professionnelles » contient les trois expériences localisées et complètes.
- Given un écran de 360 px, when la carte est affichée, then le texte se replie sans débordement horizontal.
- Given chaque CTA, when il est activé, then il révèle ou rejoint le contenu correspondant.
- Given l’entrée Capgemini, when le CTA est activé, then la présentation Data Engineering dédiée est rejointe.
- Given la section `#experience`, when elle est affichée, then la frise Formation & expérience d’origine est préservée.

## Implementation Notes

- Après clarification de l’utilisateur, les trois fiches sont placées dans la carte Profil « Expériences professionnelles » ; la frise `#experience` d’origine est restaurée.
- `src/i18n.ts` contient les trois entrées et le projet Data Engineering en français et en anglais, avec uniquement les faits fournis.
- Vérifications : `npm run build`, diagnostics VS Code propres, carte FR/EN sans débordement à 360 px ; les trois CTA ont une cible, K-STARTS s’ouvre et la frise formation reste visible.

## Spec Change Log

- L’utilisateur a clarifié que la cible était la carte « Expériences data » dans `#about`, et non la frise `#experience`. Le spec et le code ont été réalignés ; la frise initiale a été restaurée.

## Review Triage Log

- false (blind-hunter) — Le scroll K-STARTS utilise `?.scrollIntoView()` et sa cible existe dans `#kstarts-case-study`; l’activation a été vérifiée dans le navigateur.
- false (blind-hunter) — Les cartes de profil définissent toutes `details`; TypeScript compile et aucun accès à `card.details` ne plante.
- false (blind-hunter) — Le risque de grille compétences sur mobile n’est pas reproduit : à 360 px, la largeur de page reste égale à la largeur du viewport.
- low (blind-hunter, patch appliqué) — Les fiches n’avaient pas de titres sémantiques pour l’entreprise et le rôle; remplacés par `h3` et `h4`.
- false (blind-hunter) — L’écart de valeurs d’espacement entre sections n’entraîne pas de défaut utilisateur établi ni n’est lié à cette tâche.
- false (blind-hunter) — Les noms d’outils sont séparés par des espaces et le test à 360 px ne présente aucun débordement.
- false (blind-hunter) — Toutes les expériences définissent `ctaAction` parmi les valeurs utilisées et la condition n’a pas de branche manquante.
- false (blind-hunter) — TypeScript infère le type des données de traduction; le build valide leur consommation.
- false (blind-hunter) — Aucun navigateur ciblé ne reproduit un manque de prise en charge du défilement fluide; les trois navigations ont été testées.
- low (blind-hunter, deferred) — La virgule finale de l’introduction du parcours international précède la suite du paragraphe dans un bloc distinct; défaut éditorial antérieur, ajouté au suivi différé car hors de cette demande.
- false (edge-case-hunter) — Les descriptions n’ont pas débordé à 360 px avec les données fournies; `overflowWrap: 'anywhere'` a en plus été appliqué au texte.
- false (edge-case-hunter) — Chaque carte de profil définit un tableau `details`, y compris les cartes sans détail.
- false (edge-case-hunter) — Les tableaux `skills.tools` sont définis dans les locales FR/EN et leur affichage a été vérifié.
- false (edge-case-hunter) — Les tableaux `skills.sportItems` sont définis dans les locales FR/EN et le build passe.
- false (edge-case-hunter) — Les noms d’entreprises sont distincts pour les trois entrées, donc les clés React ne collisionnent pas.
- false (edge-case-hunter) — Chaque expérience définit ses champs CTA; les trois destinations ont été vérifiées dans le navigateur.
- false (edge-case-hunter) — Les détails de formation ont des clés non vides et des champs `label`/`text` définis; le build passe.
- false (verification-gap) — La cible K-STARTS est présente dans le code préexistant hors du diff; l’étude s’affiche et le défilement a été vérifié manuellement.
- false (verification-gap) — Les champs `ctaTarget` et `ctaAction` existent pour les trois entrées et chaque cible répond.
- false (verification-gap) — Le rendu des détails de profil est une modification antérieure, et les objets contiennent les propriétés consommées.
- false (verification-gap) — Le spec demande des contrôles manuels; les textes FR/EN, l’ouverture K-STARTS, les destinations et l’absence de débordement ont tous été testés dans le navigateur.

## Verification

**Commands:**
- `npm run build` -- expected: TypeScript and Vite build succeed.

**Manual checks:**
- Vérifier les trois destinations des CTA et l’absence de débordement en français et en anglais à 360 px.
