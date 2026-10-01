---
title: 'Carte Grand Oral selon la maquette'
type: 'feature'
created: '2026-10-02'
status: 'done'
route: 'oneshot'
review_loop_iteration: 0
context: []
---

<frozen-after-approval reason="human-owned intent — do not modify unless human renegotiates">

## Intent

**Problem:** La carte du projet « Mathématiques & Big Data dans le football » utilise la présentation générique, éloignée de la fiche fournie en référence.

**Approach:** Réserver à ce projet une présentation inspirée de la maquette : titre, année et note, question, deux notions encadrées et synthèse finale. Conserver le thème sombre et fournir tous les textes en français et en anglais. Préserver les modifications préexistantes du portrait.

</frozen-after-approval>

## Implementation Notes

- `src/i18n.ts` : question, notions, mots-clés et conclusion en FR/EN ; titre de l'oral explicité en anglais.
- `src/App.tsx` et `src/index.css` : rendu réservé au Grand Oral avec encadrés côte à côte et note accessible aux lecteurs d'écran. Les autres cartes et les changements préexistants du portrait restent intacts.
- Vérifié avec `npm run build` et dans le navigateur à 360 px (FR/EN, sans débordement) et à 1280 px (EN).

## Review Triage Log

- Contexte de formation absent : false ; la maquette privilégie le titre, l'année et la question, et l'année est explicitée en anglais.
- Libellé de note absent : low, corrigé avec un nom accessible sans changer le visuel de la maquette.
- Exemple football supplémentaire : false ; la maquette ne contient pas d'exemple de ce type et il faudrait en inventer un.
- Lisibilité des notions sur mobile : medium, taille du texte augmentée ; deux colonnes conservées conformément à la maquette et absence de débordement vérifiée à 360 px.