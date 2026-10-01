---
title: 'Enrichir le projet KSTARTS avec ses résultats'
type: 'feature'
created: '2026-10-01'
status: 'done'
route: 'oneshot'
review_loop_iteration: 0
context: []
---

<frozen-after-approval reason="human-owned intent — do not modify unless human renegotiates">

## Intent

**Problem:** La carte KSTARTS présente les volumes de données et les méthodes, mais peu de résultats permettant au lecteur d’évaluer concrètement l’analyse.

**Approach:** Enrichir cette carte avec une section repliable, bilingue et responsive, qui expose les corrélations de la heatmap source, les principales méthodes et les outils utilisés. Garder l’expérience sur la page actuelle, sans nouvelle route ni dépendance.

</frozen-after-approval>

## Implementation Notes

- `src/App.tsx` ajoute un panneau natif repliable dans la carte KSTARTS, avec un tableau de corrélations visuel et accessible.
- `src/i18n.ts` fournit les résultats, méthodes, outils et avertissements en français et en anglais, et ajoute la stack détaillée aux compétences.
- Choix UX : pas de captures françaises figées ni de nouvelles routes ; le graphique HTML reste cohérent avec le thème et suit la langue sélectionnée.
- Après retour utilisateur, ajout d’une section d’étude de cas accessible depuis la carte : huit constats, quatorze figures source avec légendes bilingues, pipeline traduit et trois extraits Python ; galerie et code sont repliés par défaut.
- Les figures proviennent du DOCX et sont servies depuis `public/kstarts/`. Le lien du projet pointe vers l’ancre de l’étude sur la même page ; chaque figure s’ouvre en taille réelle et conserve ses labels source en français.
- Les coefficients sont repris de la heatmap source. La page précise que l’effectif et l’incertitude par mesure ne sont pas fournis, et que SLL n’est pas défini dans le document.
- Les incohérences ou manques de la source (Illinois r = 0,40 / 0,52, mesures répétées, définition du score, tests de groupe et validation ML) sont signalés au lieu d’être comblés par des suppositions.
- Vérifications : `npm run build`, diagnostics VS Code, étude ouverte depuis le projet en FR/EN, 14 images chargées, trois extraits présents, galerie sur trois colonnes à 1280 px et aucun débordement à 360 px.

## Review Triage Log

- medium — Les coefficients n’avaient pas d’effectifs ni d’incertitude ; la fiche indique désormais explicitement cette limite et évite toute interprétation causale.
- low — Les libellés méritaient du contexte ; Illinois est précisé, les tests de saut gardent leurs noms usuels et SLL est signalé comme non défini par la source. Ne pas inventer son développement.
- false — L’absence de critères d’acceptation dans le spec est conforme au parcours oneshot, qui exige une version minimale.
- low — Il n’existe pas de framework de tests dans le projet ; aucun framework n’a été ajouté pour cette petite interaction, couverte par validation navigateur FR/EN et responsive.
- medium — Le tableau par niveau avait été étiqueté comme un graphique ; il est maintenant identifié comme une capture partielle du tableau croisé et sa troncature est signalée.
- medium — Le graphique par sexe montre des moyennes, pas des boxplots ; les titres et descriptions indiquent désormais le type de graphique et l’absence d’effectifs et de test.
- medium — La figure associe Genu Valgum et SLL jambe saine ; les deux sont désormais mentionnés et leur relation reste explicitement non résolue par la source.
- medium — La source ne définit pas le score K-STARTS ; l’échelle visible (0–100) est rapportée sans prétendre expliquer la formule ou son orientation.
- medium — Le document ne précise pas si les 2 088 tests sont des athlètes uniques ou des mesures répétées ; cette inconnue est affichée.
- medium — Illinois apparaît à r = 0,40 dans la heatmap et r = 0,52 dans le graphique de régression ; l’écart est rapporté comme non expliqué par le document.
- low — Le Z-score apparaissait parmi les tests de normalité ; le pipeline le distingue maintenant comme standardisation mentionnée séparément.
- medium — Les modèles ML ne disposent d’aucune métrique de validation dans la source ; ils sont qualifiés d’exploratoires et aucune performance n’est revendiquée.
- medium — Les groupes et résultats sont incomplets dans la source ; les moyennes lisibles sont indiquées et les effectifs, dispersion et significativité manquants sont signalés.
- low — L’extrait code body-fat ne soutenait pas les résultats fonctionnels ; trois extraits distinctement titrés couvrent désormais normalité, corrélation Illinois et matrice body-fat.
- low — La provenance n’était pas indiquée ; l’étude est maintenant attribuée à Kinesport / Medinetic Learning (2024) et au portfolio source.
