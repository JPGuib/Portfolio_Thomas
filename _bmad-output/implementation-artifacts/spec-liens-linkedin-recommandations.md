---
title: 'Liens LinkedIn des recommandations'
type: 'feature'
created: '2026-10-01'
status: 'done'
route: 'oneshot'
review_loop_iteration: 0
context: []
---

<frozen-after-approval reason="human-owned intent — do not modify unless human renegotiates">

## Intent

**Problem:** Les recommandations renvoient vers des recherches LinkedIn génériques au lieu des profils exacts des quatre auteurs.

**Approach:** Remplacer les quatre URL par les profils communiqués et mettre à jour le libellé du lien en français et en anglais.

</frozen-after-approval>

## Implementation Notes

- `src/i18n.ts` associe Henri Mersch à `https://www.linkedin.com/in/henri-mersch/`, David Laplaud à `https://www.linkedin.com/in/david-laplaud-phd-11749529/`, Pierre Guiheneuc à `https://www.linkedin.com/in/pierre-guiheneuc-0250b5162/` et Christophe Molina à `https://www.linkedin.com/in/christophe-molina-079b70122/`, dans les deux langues.
- `src/App.tsx` utilise le libellé de profil LinkedIn. Build réussi ; vérification navigateur FR/EN des quatre destinations et des libellés, sans débordement à 360 px.

## Review Triage Log

- low — L’exemple de Football Analytics n’est pas illustré par un projet événementiel ou tracking ; réel, mais antérieur et hors périmètre des liens LinkedIn, reporté dans `deferred-work.md`.
- low — Deux formulations anglaises de l’expertise sont peu idiomatiques ; réel, mais hors périmètre des liens LinkedIn, reporté dans `deferred-work.md`.
- low — Rugby et tennis sont répétés entre parcours sportif et expertise sportive ; réel, mais hors périmètre des liens LinkedIn, reporté dans `deferred-work.md`. La mention Athletics existe déjà dans les hobbies et n’a pas été ajoutée par ce changement.
- medium — La langue source et les traductions des témoignages ne sont pas indiquées ; réel, mais hors périmètre des liens LinkedIn, reporté dans `deferred-work.md`.
- false — Le spec oneshot ne conserve pas de section de critères d’acceptation par conception ; les quatre URL exactes, les deux libellés et les vérifications réalisées figurent désormais dans les notes d’implémentation.
