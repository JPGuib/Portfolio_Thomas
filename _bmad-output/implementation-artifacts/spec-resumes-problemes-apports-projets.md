---
title: 'Clarifier les problèmes et apports des projets dès l’accueil'
type: 'feature'
created: '2026-10-06'
status: 'done'
route: 'oneshot'
review_loop_iteration: 0
context: []
---

<frozen-after-approval reason="human-owned intent — do not modify unless human renegotiates">

## Intent

**Problem:** Le résumé d’accueil nomme les domaines des projets, mais n’explique pas explicitement le problème traité ni la contribution de Thomas pour chacun. Le recruteur non spécialiste doit les déduire.

**Approach:** Présenter les trois projets en français et en anglais sous forme de courtes entrées « Problème » et « Apport », fondées sur les fiches existantes. Ne pas transformer les associations K-STARTS en causalité ni présenter l’exploration StatsBomb comme un outil de recrutement validé.

</frozen-after-approval>

## Implementation Notes

- `src/i18n.ts` remplace les slogans par trois résumés bilingues structurés autour du problème traité et de l’apport, en explicitant les limites des analyses K-STARTS et StatsBomb.
- `src/App.tsx` affiche les trois résumés de projet dans le bloc d’accueil.
- Les cartes Data & IA conservent leurs textes et leur affichage d’origine, conformément à la clarification de l’utilisateur.
- Validation : `npm run build` réussi ; contrôle navigateur en français et en anglais à 360 px, trois projets affichés et aucun débordement horizontal.

## Review Triage Log

- patched — Le jargon de K-STARTS et du recrutement risquait de perdre un lecteur non spécialiste ; le score est contextualisé comme score de reprise sportive et l’exploration StatsBomb est explicitement distinguée d’une décision de recrutement.
- patched — La voix passive française ne rendait pas la contribution individuelle aussi claire qu’en anglais ; les deux versions formulent la contribution à la première personne.
- patched — La formulation Kinesport était longue et difficile à parcourir ; elle est raccourcie et précise que les associations observées ne démontrent pas de causalité.
- patched — La question StatsBomb pouvait suggérer un usage opérationnel de scouting validé ; le texte présente désormais une exploration interactive des profils, pas une recommandation de recrutement.
- patched — L’impact Airbus était trop général ; le résumé précise que la règle corrigée a été déployée pour que les tableaux de bord reflètent l’activité réelle des flux.
- patched — Le résumé Kinesport manquait de repère temporel ; l’année 2024 figure maintenant dans son titre.
