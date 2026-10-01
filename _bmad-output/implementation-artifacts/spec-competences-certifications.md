---
title: 'Réorganiser les compétences et ajouter les certifications'
type: 'feature'
created: '2026-10-01'
status: 'done'
route: 'oneshot'
review_loop_iteration: 0
context: []
baseline_commit: '7046415f56d1e0ff3740ae010e0e9af32da12db5'
---

<frozen-after-approval reason="human-owned intent — do not modify unless human renegotiates">

## Intent

**Problem:** La section Compétences ne suit pas la nouvelle hiérarchie visuelle souhaitée et ne présente pas de bloc dédié aux certifications.

**Approach:** Renommer le titre en « COMPÉTENCES & CERTIFICATIONS », regrouper le contenu en trois domaines, séparer les outils, puis présenter deux blocs courts d’expertise sportive et de certifications. Reproduire le contenu français et son équivalent anglais.

**Certification:** Reprendre littéralement le placeholder indiqué dans la maquette : `PSC1 · [Organisme] · 202X`; employer `PSC1 · [Organization] · 202X` en anglais.

## Boundaries & Constraints

**Always:** Garder l’apparence cohérente avec le thème existant; garder la section lisible sur mobile; centraliser tous les textes dans `src/i18n.ts`; employer les mêmes faits dans les versions française et anglaise; ne pas présenter une certification non confirmée.

**Never:** Ajouter de dépendance, modifier les autres sections ou afficher des informations personnelles inventées.

</frozen-after-approval>

## Code Map

- `src/i18n.ts` — contient les textes FR/EN de `skills`, actuellement organisés en quatre groupes et un groupe de soft skills. Les propriétés de cette section peuvent être réorganisées pour représenter les trois domaines, la liste d’outils, l’expertise sportive et la certification.
- `src/App.tsx` — section `id="skills"` consomme `tx.skills` et construit le titre, la grille des groupes et l’ancien panneau `softList`. Adapter ce rendu aux nouveaux groupes et blocs sans toucher aux autres sections.
- `src/index.css` — styles globaux et thème; le layout actuel de cette section est principalement en styles inline dans `App.tsx`. Ajouter des règles ciblées seulement si elles sont nécessaires à une disposition stable et responsive.

## Tasks & Acceptance

**Execution:**
- [x] `src/i18n.ts` — traduire la nouvelle structure en français et en anglais, avec des libellés correspondants et le placeholder de certification fourni.
- [x] `src/App.tsx` — remplacer la grille actuelle et le panneau soft skills par trois domaines, les outils, puis les blocs expertise sportive et certification; préserver le thème et le responsive.
- [x] Valider la compilation TypeScript et le build de production, puis vérifier les deux langues et la mise en page à 360 px.

**Acceptance Criteria:**
- Given the French locale, when the user reaches the skills section, then the heading reads « COMPÉTENCES & CERTIFICATIONS » and the content follows the hierarchy shown in the supplied images.
- Given the English locale, when the user reaches the same section, then the heading and all group labels and content are translated consistently.
- Given a 360 px viewport, when the section is displayed, then all content remains readable without horizontal scrolling or overlapping blocks.
- Given the certification block, when the section is displayed in either locale, then it reproduces the placeholder provided in the mockup with its organization label translated.

## Implementation Notes

- Réorganisation appliquée dans `src/i18n.ts` et `src/App.tsx`; tous les libellés sont traduits et restent dans les données i18n.
- Vérification : `npm run build` réussit; aucun diagnostic TypeScript pour les deux fichiers; navigateur testé en FR/EN à 360 px sans débordement horizontal, et trois colonnes + deux blocs sur desktop.

## Review Triage Log

- false (blind-hunter) — Le placeholder PSC1 et les ellipses reproduisent volontairement la maquette fournie; le texte de certification reste explicitement un placeholder (`[Organisme]`, `202X`).
- false (blind-hunter) — La liste d’outils a été remplacée par celle de la maquette (`Python`, `SQL`, `Excel`, `RapidMiner`); les anciens outils ne sont pas requis dans cette réorganisation.
- false (blind-hunter) — Les compétences statistiques et pipelines suivent les libellés plus courts de la maquette (« Tests statistiques », « Pipelines »).
- false (blind-hunter) — Le bloc d’expertise sportive suit les éléments demandés dans la maquette; les postes et le statut bénévole précédemment affichés ne sont pas requis dans ce bloc.
- false (edge-case-hunter) — Les catégories mixtes français/anglais correspondent à la maquette fournie; les éléments eux-mêmes existent dans leurs équivalents traduits.
- false (edge-case-hunter) — La disparition des anciens outils est le remplacement demandé par la liste distincte de quatre outils.
- false (verification-gap) — Aucun manque de vérification signalé; build, diagnostics et contrôle navigateur couvrent les critères de cette section.
