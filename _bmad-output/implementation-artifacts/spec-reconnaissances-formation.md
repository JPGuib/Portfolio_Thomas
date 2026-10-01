---
title: 'Ajouter les accréditations et reconnaissances à la formation'
type: 'feature'
created: '2026-10-01'
status: 'done'
route: 'oneshot'
review_loop_iteration: 0
context: []
---

<frozen-after-approval reason="human-owned intent — do not modify unless human renegotiates">

## Intent

**Problem:** L’entrée de formation s’arrête aux 240 ECTS et ne présente pas les accréditations et reconnaissances demandées pour Centrale Nantes et Audencia.

**Approach:** Ajouter ces informations sous la qualification dans la frise de formation, avec une présentation compacte cohérente avec l’UX existante. Localiser tous les nouveaux textes en français et en anglais.

</frozen-after-approval>

## Review Triage Log

- `false` — L’anglais n’est pas absent : les variantes `caseStudy` existent dans les deux langues et le nouveau contenu de formation a été vérifié en EN dans le navigateur.
- `defer` — Le bouton de navigation mobile n’a pas de nom accessible ni d’état développé; ce point préexistant est déjà suivi dans `spec-references-cv-section.md`.
- `defer` — L’élément de navigation actif n’expose pas `aria-current`; ce point préexistant est déjà suivi dans `spec-references-cv-section.md`.
- `defer` — Le fallback `mailto:` ne donne pas de confirmation à l’écran avant la redirection quand aucun endpoint n’est configuré; suivi ajouté dans `deferred-work.md`.
- `false` — Les figures utilisent bien les textes alternatifs de leurs données (`alt`) dans le rendu.
- `false` — La spec identifie le point d’insertion sous la qualification dans la frise; le statut est maintenant `done`.
- `low rejeté` — La validation native `required` et `type="email"` couvre les erreurs de saisie usuelles; une validation en temps réel serait hors périmètre.
- `false` — Les nouveaux textes de formation sont présents et rendus dans les deux langues, vérifiés à 360 px.
- `low rejeté` — Factoriser les styles inline serait une refactorisation générale, indépendante de ce changement.

## Implementation Notes

- La donnée de la formation se trouve dans `experience.educationItems` dans `src/i18n.ts`; les variantes française et anglaise doivent rester structurées de façon identique.
- Le rendu conditionnel de `qualification` est dans la frise de `src/App.tsx`. Y ajouter le bloc de reconnaissances uniquement pour l’entrée qui le définit, sous « 240 ECTS … » : intitulé, ligne `CTI · EUR-ACE · EQUIS · AACSB · AMBA`, puis reconnaissances propres à Centrale Nantes et Audencia.
- Reprendre la hiérarchie typographique, les couleurs et l’espacement de la frise; ne pas créer de carte ni modifier les autres entrées.
- Préserver les modifications locales déjà présentes dans `src/App.tsx` et `src/i18n.ts`.
- Vérifier le build et le rendu français/anglais à 360 px, sans débordement horizontal.
- Implémentation : les accréditations sont une ligne dédiée; le domaine QS est en italique et la statistique Audencia en gras, avec les textes localisés dans les données de formation.