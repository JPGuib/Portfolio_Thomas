---
title: 'Ajouter les images des structures professionnelles et sportives'
type: 'feature'
created: '2026-10-02'
status: 'done'
route: 'oneshot'
review_loop_iteration: 0
context: []
---

<frozen-after-approval reason="human-owned intent — do not modify unless human renegotiates">

## Intent

**Problem:** Les expériences Capgemini et Kinesport ainsi que le parcours à l’US Castanet sont présentés sans leurs images respectives.

**Approach:** Afficher chaque image fournie à côté de la structure correspondante dans la frise professionnelle ou la section sportive, dans les versions française et anglaise.

</frozen-after-approval>

## Implementation Notes

- Utiliser les trois fichiers présents dans `public/` sans ajouter de dépendance ni de texte traduit.
- Préserver les changements existants dans le workspace.
- `src/i18n.ts` associe les images à Capgemini, Kinesport et l’US Castanet dans les données FR/EN ; `src/App.tsx` les affiche avec des dimensions fixes.
- Vérifications : `npm run build` passe ; en FR/EN à 360 px, les trois images chargent et la page ne déborde pas horizontalement.
- À la demande complémentaire, le blason US Castanet passe à 120 × 120 px et les blocs football/autres sports sont côte à côte sur grand écran, empilés sur mobile.
- Le logo Capgemini est affiché en 176 × 64 px et Kinesport en 160 × 56 px pour une meilleure visibilité.
- Vérification complémentaire : en FR/EN à 1280 px, les deux colonnes sont côte à côte ; à 360 px, elles s’empilent sans débordement.

## Review Triage Log

- false — Le texte français et anglais mentionne toujours explicitement le niveau Régional 1 dans `clubDetail`.
- defer — La portée exacte de la distinction « meilleur défenseur U17 2022 » n’est pas précisée ; contenu existant hors de cette demande, suivi avec l’audit du parcours sportif.
- defer — Les postes précédemment pratiqués ne sont pas exhaustifs dans le contenu actuel ; aucune traduction n’a été modifiée par cette demande.
- defer — L’âge du public et le détail des activités Bloomdays ne figurent pas dans le contenu actuel ; hors du périmètre visuel.
- defer — L’athlétisme n’est pas mentionné dans les listes actuelles ; ces listes n’ont pas été modifiées ici.
- defer — Le niveau de pratique du tennis et du ski n’est pas détaillé dans les libellés actuels ; hors du périmètre visuel.
- defer — Le contexte de l’arbitrage n’est pas détaillé dans le texte actuel ; hors du périmètre visuel.
- defer — L’explication reliant les autres sports à l’analyse de la performance n’est pas présente dans le contenu actuel ; hors du périmètre visuel.
- low rejeté — Un petit fragment cyan est visible au bord inférieur du logo Capgemini fourni ; il est minime à la taille affichée et retoucher l’image source n’était pas demandé.
