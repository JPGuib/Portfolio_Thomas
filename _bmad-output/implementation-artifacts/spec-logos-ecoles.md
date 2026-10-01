---
title: 'Intégrer les logos des écoles dans le parcours académique'
type: 'feature'
created: '2026-10-02'
status: 'done'
route: 'oneshot'
review_loop_iteration: 0
context: []
---

<frozen-after-approval reason="human-owned intent — do not modify unless human renegotiates">

## Intent

**Problem:** Les entrées du parcours académique citent Centrale Nantes, Audencia, Centrale Casablanca et Shenzhen University sans leurs logos fournis.

**Approach:** Afficher Centrale Nantes et Audencia ensemble dans l’entrée du BBA, puis le logo de chaque établissement d’échange dans son entrée internationale, en français comme en anglais.

</frozen-after-approval>

## Implementation Notes

- `src/i18n.ts` associe les logos aux entrées Formation et International en français et en anglais ; `src/App.tsx` les rend sous le nom de chaque établissement.
- Les logos utilisent des dimensions adaptées à leur cadrage (Centrale Nantes 120 × 64, Audencia 132 × 64, Centrale Casablanca et Shenzhen 96 × 96 px) avec `object-fit: contain`.
- Vérifications : `npm run build` passe ; les quatre logos chargent en FR/EN à 360 px et la page ne déborde pas horizontalement.

## Review Triage Log

- low corrigé — Le cadre Shenzhen utilise le gris du fichier source afin d’éviter les bandes noires autour de l’image.
- low corrigé — Shenzhen dispose d’un cadre plus large pour rendre le mot-symbole plus lisible.
- low corrigé — Le cadre Shenzhen respecte le ratio du fichier et augmente la taille du lettrage anglais.
- low corrigé — Centrale Casablanca utilise un cadre carré, cohérent avec son image source.
- low corrigé — Le cadre carré de Centrale Casablanca agrandit le logo à l’intérieur de sa vignette.
- low corrigé — Audencia bénéficie d’une largeur supérieure pour compenser les marges de son fichier.
- false — Les logos du BBA peuvent passer sur deux lignes à 320 px, mais restent dans la même entrée et se replient sans débordement causé par leurs vignettes ; à la largeur mobile cible de 360 px, ils restent côte à côte.
