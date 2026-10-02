---
title: 'Étude StatsBomb : profils et similarité de joueurs'
type: 'feature'
created: '2026-10-02'
status: 'done'
route: 'oneshot'
review_loop_iteration: 0
context: []
---

<frozen-after-approval reason="human-owned intent — do not modify unless human renegotiates">

## Intent

**Problem:** Le projet personnel de scouting StatsBomb décrit dans `public/PROJECT_OVERVIEW STATSBOMB.docx` n'apparaît pas dans la rubrique Projets Data & IA ; son détail et son GIF ne sont pas accessibles sur le site.

**Approach:** Ajouter une carte de type « étude » en français et « study » en anglais. Sur la carte, afficher les deux paragraphes « En bref / At a glance » du Word ; dans le détail repliable, reprendre mot pour mot tous les chapitres suivants dans leur ordre d’origine et placer le GIF dans « Ce que l’on peut explorer / What users can explore ».

</frozen-after-approval>

## Implementation Notes

- Carte « étude / study » et présentation repliable ajoutées à `src/i18n.ts`, avec raccordement du type dans `src/App.tsx`.
- GIF original de cinq images (1000 × 818) extrait du Word dans `public/statsbomb/scouting-demo.gif` ; le document source reste intact.
- `npm run build` réussi. Contrôle navigateur FR et EN à 360 px : détail ouvert, GIF chargé (1000 × 818), largeur document 356 px.
- Relecture : sous-titre de rubrique et légende anglaise du GIF corrigés ; compilation et contrôle navigateur FR/EN repassés avec succès.
- Après clarification de l’intention par l’utilisateur : la carte reprend les deux paragraphes « En bref / At a glance » ; le détail reprend les neuf chapitres et leurs paragraphes dans l’ordre du Word, sans blocs de synthèse ajoutés. Comparaison exacte du texte FR/EN avec le Word : zéro écart. Compilation réussie et contrôle navigateur à 360 px : GIF chargé, pas de débordement.

## Review Triage Log

- defer — Aucun lien vers la démonstration interactive n’est fourni par le Word ; le lien de la carte ouvre bien le détail demandé.
- defer — Aucun dépôt ou fichier source du code de l’analyse n’est fourni dans le document.
- defer — StatsBomb Open Data est attribué dans le texte, mais aucun lien vers une version de jeu de données n’est fourni.
- false — Le chiffre de 1 517 matchs reprend le Word, qui ne prétend pas couvrir toutes les rencontres programmées de ces quatre saisons.
- defer — Le Word ne justifie pas le seuil de 900 minutes ni son impact sur les joueurs exclus.
- defer — La liste exhaustive des variables et leurs éventuelles pondérations ne sont pas fournies par la source.
- defer — Le document ne donne pas d’exemple chiffré ou validé de profils voisins.
- false — Sur mobile, le GIF est contenu dans la carte et son image est déjà liée à sa version pleine taille.
- patched — La légende et le texte alternatif anglais indiquent désormais que l’interface du GIF est en français.
- defer — Le GIF animé ne dispose pas de pause ni d’une alternative statique dédiée.
- patched — Le sous-titre de la rubrique inclut désormais les études personnelles en FR et EN.
