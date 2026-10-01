---
title: 'Ajouter les références et le CV au portfolio'
type: 'feature'
created: '2026-10-01'
status: 'done'
route: 'oneshot'
review_loop_iteration: 0
context: []
---

<frozen-after-approval reason="human-owned intent — do not modify unless human renegotiates">

## Intent

**Problem:** Le portfolio ne présente pas encore les recommandations figurant dans l’ancien portfolio et n’offre pas de section CV visible.

**Approach:** Ajouter un repère de navigation unique « Références & CV », présentant les trois citations avec leurs auteurs et fonctions, puis une section CV avec ouverture et téléchargement du PDF déjà présent dans `public`.

</frozen-after-approval>

## Implementation Notes

- `src/App.tsx` ajoute un repère unique « Références & CV », trois témoignages, un raccourci d’accès au CV et deux actions (ouvrir / télécharger).
- `src/i18n.ts` contient les textes français et anglais ; les citations françaises sont signalées comme traductions, et les témoignages sont attribués à leurs auteurs et fonctions.
- Le CV existant est servi depuis `public/CV_2026-07-25_Thomas_Guibert.pdf`. La langue (anglais) et la date de version sont indiquées avant ouverture.
- Le menu passe au hamburger jusqu’à 1279 px pour éviter le débordement avec l’entrée de navigation supplémentaire.
- À la confirmation utilisateur, les mentions du stage Capgemini sont alignées sur mai — août 2026 dans le parcours et le texte de contact FR/EN.
- Vérifications : `npm run build`, diagnostics VS Code, 3 citations affichées, navigation mobile, liens PDF (HEAD 200), FR/EN et absence de débordement à 360 px et 1280 px.

## Review Triage Log

- medium — Le site français ouvrait un CV anglais sans l’indiquer ; la section précise désormais la langue et la date de version.
- medium — Le PDF indique Capgemini de mai à août 2026 tandis que le site indique mai 2026 à aujourd’hui ; pas de correction arbitraire, confirmation utilisateur suivie dans `deferred-work.md`.
- medium — Le repère combiné menait aux témoignages ; un raccourci « Accéder au CV » pointe maintenant vers `#cv`.
- medium — La section KSTARTS n’est pas suivie comme état actif dans `NAV_IDS` ; reporté car ajouter ou remanier la navigation KSTARTS dépasse cette demande.
- medium — Le lien de navigation actif n’expose pas `aria-current` ; reporté comme amélioration générale d’accessibilité.
- medium — Le bouton menu mobile n’expose pas de nom/état ARIA complet ; reporté comme amélioration générale d’accessibilité.
- low — La position active n’est calculée qu’au premier événement de défilement ; reporté comme problème préexistant de navigation.
- low — Les recommandations n’ont pas de dates dans le document source ; provenance et fonctions sont indiquées sans inventer de contexte.
- false — Le spec oneshot n’a pas de critères d’acceptation détaillés par conception ; les comportements ont été vérifiés manuellement dans les deux langues.
- false — Le PDF n’était pas suivi par Git, mais était bien présent dans `public` avant cette implémentation ; le fichier fourni n’a pas été modifié.
- low — Aucun test automatisé n’existe dans le projet ; aucun framework n’a été ajouté pour ce changement localisé, vérifié dans le navigateur.
- medium — Résolu après confirmation utilisateur : la période Capgemini est maintenant mai — août 2026 dans le site français et anglais.
