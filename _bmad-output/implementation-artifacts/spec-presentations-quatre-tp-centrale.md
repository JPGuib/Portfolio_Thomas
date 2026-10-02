---
title: 'Présentations portfolio des quatre TP de Centrale'
type: 'feature'
created: '2026-10-02'
status: 'done'
route: 'oneshot'
review_loop_iteration: 0
context: []
---

<frozen-after-approval reason="human-owned intent — do not modify unless human renegotiates">

## Intent

**Problem:** Les quatre travaux pratiques de Centrale sont disponibles dans le portfolio mais ne sont pas présentés comme des projets consultables.

**Approach:** Ajouter une carte distincte par TP à la rubrique « Projets Data & IA », avec une présentation détaillée, cohérente avec l’UX existante et rédigée en français et en anglais. Décrire les travaux et résultats avec prudence, sans attribuer de contribution individuelle non documentée ni présenter les métriques incertaines comme validées.

</frozen-after-approval>

## Implementation Notes

- Ajout de quatre cartes de type scolaire, chacune avec une présentation détaillée dans les locales française et anglaise de `src/i18n.ts`.
- Extraction de cinq figures réelles depuis les rendus, affichées dans les sections correspondantes ; captions, textes alternatifs et références aux documents source ajoutés dans les deux langues.
- Les scores de crédit sont qualifiés par l’application de SMOTE avant le découpage test, observée dans le rapport. Les comparaisons du churn, la définition de classe 1, l’unité du RMSE et les limites des clusters sont explicitées.
- Réorganisation existante de `public/Projets Centrale` laissée intacte.
- Vérifications : `get_errors` sans erreur, `npm run build` réussi ; navigateur à 360 px, quatre fiches par langue, libellés localisés, images chargées et panneaux développés sans débordement horizontal.

## Review Triage Log

- low — Les graphiques sources gardent leurs libellés anglais ; les captions et textes alternatifs sont localisés et la langue source est annoncée pour préserver les figures telles que rendues.
- low — La matrice Random Forest garde ses libellés anglais ; caption et texte alternatif français ajoutés, figure source conservée.
- low — Le graphique de clusters garde ses libellés anglais ; caption et texte alternatif français ajoutés, figure source conservée.
- low — La heatmap garde ses libellés anglais ; caption et texte alternatif français ajoutés, la mesure et la limite de généralisation sont expliquées.
- medium — Le notebook ne documente pas assez le codage de la classe cancer positive pour interpréter le signe des coefficients ; la présentation limite la figure au classement en valeur absolue.
- medium — Le score complet cancer manque dans le notebook ; l’étude le signale et ne prétend pas comparer les modèles pour ce dataset.
- medium — Le nombre de cas churn de classe positive est précisé : 393 observations dans le jeu de test.
- medium — Les catégories de noms sont replacées dans le top 10 du modèle complet, mais hors du top 3 réduit ; leur possible rôle de proxy est signalé.
- medium — L’étude précise que le code nomme la classe 1 « Bad Risk » tandis que le texte la décrit aussi comme « low-risk ».
- high — SMOTE est appliqué avant le découpage dans le notebook ; l’étude indique le risque de contamination et demande de refaire l’évaluation après split.
- medium — Les métriques disponibles pour les trois modèles sont données ; la figure XGBoost est ajoutée à celle de Random Forest.
- medium — Le rapport ne justifie pas le choix de quatre clusters et la figure ne montre qu’une variable ; ces limites sont désormais explicites.
- medium — L’unité du RMSE énergie n’est pas spécifiée ; le texte le dit et identifie les chiffres comme rapportés, non reproduits.
- low — Une seule des trois visualisations Spotify est affichée ; les deux autres sont nommées comme restant dans le notebook source.
- medium — La heatmap compte les lignes d’écoute par jour et heure, pas des heures d’écoute ; cette mesure est précisée.
- low — Les références aux quatre notebooks/rapports sont données sans liens directs afin de ne pas exposer les notebooks bruts.
- false — Le statut `in-progress` était attendu avant la finalisation du workflow ; le spec est maintenant marqué `done`.