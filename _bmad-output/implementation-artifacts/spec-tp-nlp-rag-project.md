---
title: 'Ajouter le TP NLP RAG aux projets data et IA'
type: 'feature'
created: '2026-10-02'
status: 'done'
route: 'oneshot'
review_loop_iteration: 0
context: []
---

<frozen-after-approval reason="human-owned intent — do not modify unless human renegotiates">

## Intent

**Problem:** Le TP NLP sur un prototype RAG n'est pas présenté dans les projets data et IA du portfolio, alors qu'il complète les projets existants par une expérience en NLP et recherche vectorielle.

**Approach:** Ajouter une carte d'étude académique cohérente avec les autres TP, en français et en anglais, détaillant le pipeline et ses limites à la première personne sans revendiquer de résultats quantitatifs non établis. Réécrire les explications du notebook à la première personne, sans lien de téléchargement depuis la carte.

</frozen-after-approval>

## Implementation Notes

- La carte RAG est ajoutée dans `src/i18n.ts` en français et en anglais, avec une analyse explicitement qualitative et les sources identifiées.
- Les commentaires explicatifs de `public/Projets Centrale/TP NLP/lab5.ipynb` ont été réécrits à la première personne. Le commentaire erroné sur le chevauchement des segments a été corrigé; les prérequis d'exécution et l'absence de versions verrouillées sont signalés.
- Aucun lien de téléchargement n'est affiché sur la carte.
- Vérifications : `npm run build` réussi; les cartes FR/EN ont été ouvertes dans le navigateur à 360 px sans débordement horizontal, et sans lien de téléchargement. La structure des 22 cellules du notebook a été vérifiée; aucune cellule de code n'a été exécutée.

## Review Triage Log

- `low` — Les trois sources NOAA, NRDC et National Geographic sont maintenant nommées dans la présentation bilingue.
- `low` — La comparaison distingue l'observation qualitative du notebook d'un gain de factualité mesuré, qui n'est pas établi.
- `low` — Les dépendances, le besoin d'accès réseau et l'absence de versions verrouillées sont indiqués dans le notebook.
- `false` — L'absence de critères d'acceptation est normale pour la route `oneshot`, dont le modèle supprime ces sections.
