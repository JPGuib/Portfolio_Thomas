---
title: 'Ajouter la section Parcours sportif'
type: 'feature'
created: '2026-10-01'
status: 'done'
route: 'oneshot'
review_loop_iteration: 0
context: []
---

<frozen-after-approval reason="human-owned intent — do not modify unless human renegotiates">

## Intent

**Problem:** Le profil présente les expériences professionnelles et le parcours international, mais ne détaille pas le parcours sportif compétitif demandé.

**Approach:** Ajouter une carte « PARCOURS SPORTIF » entre les cartes « EXPÉRIENCES PROFESSIONNELLES » et « Parcours international », avec les informations de football, d’arbitrage, d’encadrement et les autres pratiques sportives. Localiser l’ensemble en français et en anglais.

</frozen-after-approval>

## Implementation Notes

La carte a été ajoutée à `about.cards` dans `src/i18n.ts`, après les expériences professionnelles et avant le parcours international en français comme en anglais. Le rendu générique existant est réutilisé, sans changement de structure UI ni dépendance. Vérifications : `npm run build` passe ; à 360 px, les textes FR/EN et l’ordre des cartes sont corrects, sans débordement horizontal.

## Review Triage Log

- false — Les styles inline et couleurs codées en dur sont préexistants ; cette modification ne touche qu’aux données de traduction.
- false — Aucun contenu image ou média n’est ajouté ; les suggestions de fallback et de dimensions d’images ne concernent pas ce changement.
- false — La mise en page du hero et le formulaire de contact ne sont pas modifiés.
- false — Les identifiants de navigation et leur synchronisation ne sont pas modifiés ; la carte demandée ne crée pas de nouvelle section navigable.
- false — Aucun nouveau contrôle interactif n’est ajouté ; les remarques d’accessibilité citées concernent des contrôles préexistants.
- false — Le contenu de la galerie K-STARTS et son mode de rendu ne sont pas modifiés.
- false — `npm run build` valide le typage et la compilation des traductions FR/EN.
- false — À 360 px, le document mesure 356 px en français comme en anglais ; aucun débordement horizontal n’est observé.
- false — La parité bilingue a été vérifiée dans le navigateur ; les deux locales affichent la carte et ses informations.
