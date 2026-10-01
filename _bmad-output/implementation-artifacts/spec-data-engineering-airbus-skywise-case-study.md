---
title: 'Étude de cas Data Engineering Airbus Skywise'
type: 'feature'
created: '2026-10-02'
status: 'done'
route: 'oneshot'
review_loop_iteration: 0
context: []
---

<frozen-after-approval reason="human-owned intent — do not modify unless human renegotiates">

## Intent

**Problem:** La carte Data Engineering — Airbus Skywise ne donne pas accès aux détails du travail décrit dans le document de présentation.

**Approach:** Ajouter à la carte un lien « Voir une présentation du projet » ouvrant une étude de cas repliable, alignée sur les présentations LCA et Savefolio. Intégrer les quatre étapes du projet, les six visuels du document source et leurs légendes, avec les textes français et anglais.

</frozen-after-approval>

## Implementation Notes

- Ajout du détail repliable à la carte Data Engineering, avec libellés, explications, légendes et texte bilingues.
- Copie des six figures du document source dans `public/airbus-skywise/` ; toutes ont été chargées depuis la page en contrôle navigateur.
- Les textes sur le classement des exécutions signalent désormais l’absence de règle source pour départager les égalités ; la formulation de l’impact en production a été nuancée.
- Validation : `npm run build` passe ; contrôle navigateur en FR et EN à 360 px, six figures chargées, aucune largeur de document supérieure au viewport.

## Review Triage Log

- defer — Le détail de l’audit des cinq pipelines et les critères Iron/Bronze ne figurent pas dans le document ; consigné dans `deferred-work.md` plutôt que d’inventer des résultats.
- patched — La formulation de l’impact du déploiement a été nuancée ; elle présente la correction et son objectif sans affirmer une mesure d’efficacité.
- defer — Les libellés du modèle logique sont génériques et `dataset_3` est répété ; les noms corrects ne sont pas fournis par la source, donc consigné dans `deferred-work.md`.
- false — La mention d’assistance Gemini est l’attribution présente dans le visuel source et a été conservée comme telle.
- patched — Le texte indique que le traitement des égalités de date n’est pas précisé dans la source.
- patched — Le texte indique qu’aucun départage supplémentaire n’est montré si les deux champs de tri sont identiques.
- false — Le texte indique les 15 contrôles, les trois dimensions et les cinq jeux de données ; la figure est explicitement légendée comme un exemple.
- defer — La capture EDQ ne définit pas la cible 90 et le résultat 100,0 ; consigné dans `deferred-work.md`.
- defer — Le document ne définit pas « Walter » ni toutes les conditions de décision ; consigné dans `deferred-work.md`.
