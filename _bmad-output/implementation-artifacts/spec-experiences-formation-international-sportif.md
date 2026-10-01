---
title: 'Présenter les expériences, la formation et les parcours international et sportif'
type: 'feature'
created: '2026-10-01'
status: 'done'
route: 'oneshot'
review_loop_iteration: 0
context: []
baseline_commit: '7046415f56d1e0ff3740ae010e0e9af32da12db5'
---

<frozen-after-approval reason="human-owned intent — do not modify unless human renegotiates">

## Intent

**Problem:** La section `#experience` condense les stages et la formation dans une seule frise, tandis que le parcours international est peu détaillé et que les grands titres ne sont pas uniformes.

**Approach:** Présenter séparément les expériences professionnelles, la formation et les semestres internationaux, puis détailler le parcours sportif dans sa section dédiée. Les quatre titres principaux reprennent strictement la police et la taille de l’ancien titre « FORMATION & EXPERIENCE » ; tous les contenus sont localisés en français et en anglais.

</frozen-after-approval>

## Implementation Notes

- `src/i18n.ts` sépare les expériences professionnelles, la formation et les deux semestres internationaux en français et en anglais; la section sportive localisée détaille les postes, distinctions, arbitrage, encadrement et autres pratiques à partir des informations déjà présentes.
- `src/App.tsx` affiche les trois parcours séparément dans la section expérience et applique aux quatre titres principaux la police Barlow Condensed avec la taille `clamp(2.5rem, 5vw, 4rem)`.
- Le build TypeScript/Vite passe. Vérification navigateur en FR et EN à 360 px et 1280 px : quatre titres visibles, tailles cohérentes et aucune largeur de document supérieure au viewport.

## Review Triage Log

- `false` — Les entrées Email et LinkedIn ne sont pas dupliquées : chacune apparaît une fois dans les liens de contact; ce constat ne concerne pas les changements de cette spec.
- `false` — Les icônes de contact sont des caractères Unicode valides dans les fichiers source, pas du mojibake.
- `false` — La section Références contient trois témoignages avec auteur et rôle.
- `false` — Le lien rapide CV cible bien la section portant `id="cv"`.
- `low` rejeté — L’ajout d’un lien GitHub ou d’un dépôt technique serait une amélioration indépendante, non requise par l’intention de cette spec.
- `false` — Les liens de contact ont des noms accessibles à partir de leur texte visible (libellé et valeur).
- `false` — Le lien LinkedIn est ouvert dans un nouvel onglet avec `rel="noopener noreferrer"`.
- `low` rejeté — Remplacer les icônes décoratives existantes n’est pas nécessaire à la fonctionnalité de cette spec; les liens ont déjà un texte descriptif.
- `false` — Les notes des références et les libellés CV sont définis dans les deux variantes de langue.
- `defer` — Le PSC1 est présenté comme obtenu alors que sa confirmation manque selon le spec existant sur les certifications; point hors des sections modifiées, ajouté à `deferred-work.md`.
- `false` — Les 240 ECTS, le niveau Bac+4 et le grade de licence reprennent les précisions données dans la demande; l’équivalent anglais les conserve.
- `defer` — Les accréditations et leur statistique de 1 % dans la carte de formation préexistante nécessitent une attribution et une source; point ajouté à `deferred-work.md`.
- `defer` — Le niveau d’anglais actuel et le score TOEIC attendu en fin de cursus sont ambigus dans la carte Langues préexistante; confirmation demandée dans `deferred-work.md`.
- `low` rejeté — L’élargissement de la liste d’outils et l’ajout de méthodes statistiques ne sont pas demandés ici et nécessiteraient de confirmer les compétences à afficher.
- `false` — Les statistiques 18/20 précédemment affichées ne sont pas reprises, conformément au remplacement du contenu sportif par le texte fourni.
- `false` — La carte Profil donne l’année 2024 et la nouvelle entrée donne les mois; ces niveaux de précision ne se contredisent pas.
- `false` — L’expérience Data Engineering comprend les tâches fournies ainsi que les résultats de 5 jeux structurés et 5 pipelines audités.
- `low` rejeté — Ajouter des livrables ou résultats Savefolio nécessiterait des faits non fournis et concerne une autre section.
- `false` — Le libellé anglais est maintenant « Supervision »; le nombre de 20 enfants n’est pas repris car il ne figure pas dans le texte demandé.
- `defer` — Le lieu de résidence dans Contact reste à confirmer, car ce contenu préexistant est hors des sections concernées; point ajouté à `deferred-work.md`.
- `false` — La durée de six mois et le début en février permettent de comprendre la période visée; préciser une date de fin dans Contact n’est pas requis ici.
- `false` — Les CTA Kinesport empêchent désormais le changement de fragment; le test navigateur confirme que l’ouverture puis la fermeture ne laissent pas d’ancre masquée.
- `false` — Les anciennes statistiques sportives ont été remplacées conformément au contenu explicitement fourni; aucun contrat de conservation n’était demandé.
- `defer` — Le CTA d’étude est vérifié manuellement, mais aucun test navigateur automatisé n’existe dans le dépôt; couverture notée dans `deferred-work.md`.

