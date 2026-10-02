---
title: 'Réorganiser les outils et technologies'
type: 'feature'
created: '2026-10-02'
status: 'done'
route: 'oneshot'
review_loop_iteration: 0
context: []
---

<frozen-after-approval reason="human-owned intent — do not modify unless human renegotiates">

## Intent

**Problème :** Les libellés secondaires de la section Outils & technologies sont trop petits, et les catégories ne distinguent pas BI, plateforme de données et science des données.

**Approche :** Agrandir la police des outils, renommer DATA en DATA & BI, déplacer Palantir Foundry dans DATA PLATFORM, puis ajouter DATA SCIENCE & AI avec Machine Learning, Deep Learning, Statistical Modelling, Natural language processing et AI fundamentals. Maintenir les versions française et anglaise et une mise en page sans défilement horizontal à 360 px.

</frozen-after-approval>

## Implementation Notes

- `src/i18n.ts` : catégories réorganisées dans les deux langues ; termes techniques conservés en anglais, coquille « foundamentals » corrigée.
- `src/App.tsx` : taille des libellés gris portée de 0.9rem à 1.05rem.
- Vérification : `npm run build` réussi ; navigation FR/EN à 360 px sans débordement horizontal et police calculée à 16.8 px.

## Review Triage Log

- Faux : la catégorie DATA SCIENCE & AI liste des domaines sous « Outils & technologies » à la demande explicite de l'utilisateur ; aucun défaut induit par cette modification.
- Faux : la catégorie DATA PLATFORM contient Palantir Foundry conformément à la liste demandée ; ajouter PySpark changerait le périmètre et n'est pas nécessaire à son fonctionnement.