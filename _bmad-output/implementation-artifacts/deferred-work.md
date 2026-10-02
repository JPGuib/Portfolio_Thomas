- source_spec: `_bmad-output/implementation-artifacts/spec-references-cv-section.md`
  summary: Confirm whether the Capgemini internship ended in August 2026 or is still ongoing before reconciling the CV and portfolio dates.
  evidence: The supplied CV says May-August 2026, while the portfolio says May 2026-present; personal employment dates require user confirmation.
- source_spec: `_bmad-output/implementation-artifacts/spec-references-cv-section.md`
  summary: Add the KSTARTS case-study anchor to active-section tracking if a dedicated navigation entry is later introduced.
  evidence: The detail section is not in NAV_IDS, so the existing menu continues to mark Projects as active while the reader views it.
- source_spec: `_bmad-output/implementation-artifacts/spec-references-cv-section.md`
  summary: Expose the active navigation item with aria-current.
  evidence: The current section is communicated by color alone; screen-reader users receive no current-page state.
- source_spec: `_bmad-output/implementation-artifacts/spec-references-cv-section.md`
  summary: Add an accessible name and expanded state to the mobile navigation toggle.
  evidence: The menu button relies on a glyph and does not expose aria-expanded or a controlled-menu relationship.
- source_spec: `_bmad-output/implementation-artifacts/spec-references-cv-section.md`
  summary: Initialize active-section tracking from the current scroll position.
  evidence: The scroll handler only runs after a scroll event, so direct anchors or restored scroll positions can leave the active navigation state stale.
- source_spec: `_bmad-output/implementation-artifacts/spec-references-cv-section.md`
  summary: Resolved — align the Capgemini internship dates after user confirmation.
  evidence: User confirmed the internship ended in August 2026; the portfolio now shows May — August 2026 in French and English.
- source_spec: `_bmad-output/implementation-artifacts/spec-experiences-professionnelles.md`
  summary: Corriger la ponctuation entre l’introduction en gras et la suite du paragraphe dans la carte Parcours international.
  evidence: La description se termine par une virgule dans un bloc, puis reprend par « m’ont permis » dans un autre bloc ; ce contenu préexistant est hors du périmètre des expériences professionnelles.
- source_spec: `_bmad-output/implementation-artifacts/spec-experiences-formation-international-sportif.md`
  summary: Vérifier le statut du PSC1 avant de le présenter comme une certification obtenue.
  evidence: Le contenu actuel l’affiche comme obtenu en 2023, tandis que la spécification Compétences et certifications indique qu’il n’est pas confirmé et demande un placeholder.
- source_spec: `_bmad-output/implementation-artifacts/spec-experiences-formation-international-sportif.md`
  summary: Sourcer et attribuer les accréditations et classements affichés dans la carte de formation.
  evidence: La carte existante associe plusieurs organismes d’accréditation et une statistique de 1 % sans préciser leur établissement concerné ni leur source.
- source_spec: `_bmad-output/implementation-artifacts/spec-experiences-formation-international-sportif.md`
  summary: Clarifier le niveau d’anglais actuel par rapport à l’objectif TOEIC attendu en fin de cursus.
  evidence: La carte Langues qualifie l’anglais de courant professionnel tout en présentant le score TOEIC comme un niveau futur attendu.
- source_spec: `_bmad-output/implementation-artifacts/spec-experiences-formation-international-sportif.md`
  summary: Ajouter un test navigateur automatisé pour l’ouverture de l’étude Kinesport depuis son CTA.
  evidence: Le CTA et son ouverture ont été vérifiés manuellement en français et en anglais; le dépôt ne dispose pas de suite de tests navigateur.
- source_spec: `_bmad-output/implementation-artifacts/spec-experiences-formation-international-sportif.md`
  summary: Préciser le lieu de résidence dans le bloc Contact et distinguer la mobilité proposée.
  evidence: Le texte de contact indique une base entre Nantes et Toulouse sans préciser le lieu de résidence; cette information personnelle doit être confirmée.
- source_spec: `_bmad-output/implementation-artifacts/spec-liens-linkedin-recommandations.md`
  summary: Étayer ou calibrer la formulation Football Analytics sur les données événementielles, le tracking et les KPI.
  evidence: Le texte d’expertise évoque ces capacités, mais les projets présentés ne donnent pas d’exemple d’analyse événementielle ou tracking ; ce point est indépendant des liens LinkedIn.
- source_spec: `_bmad-output/implementation-artifacts/spec-liens-linkedin-recommandations.md`
  summary: Rendre plus idiomatiques les formulations anglaises de Football Analytics et Data to Decision.
  evidence: « tailored to football questions » et « decision-making profiles » sont peu naturels en anglais ; cette amélioration de contenu est hors périmètre des liens LinkedIn.
- source_spec: `_bmad-output/implementation-artifacts/spec-liens-linkedin-recommandations.md`
  summary: Réduire les répétitions de sports entre le parcours sportif et l’expertise sportive.
  evidence: Rugby et tennis figurent dans les deux sections ; cette harmonisation est hors périmètre des liens LinkedIn.
- source_spec: `_bmad-output/implementation-artifacts/spec-liens-linkedin-recommandations.md`
  summary: Indiquer la langue source et signaler clairement les traductions des témoignages professionnels.
  evidence: Les citations ne sont pas toutes dans la langue de la page et aucun repère ne distingue les versions traduites ; cette clarification est hors périmètre des liens LinkedIn.
- source_spec: `_bmad-output/implementation-artifacts/spec-images-organisations.md`
  summary: Auditer les détails bilingues du parcours sportif, notamment les postes, distinctions, arbitrage, encadrement Bloomdays et pratiques sportives.
  evidence: La revue relève plusieurs précisions absentes des textes sportifs actuels ; ces contenus préexistants n’ont pas été changés par l’ajout et la mise en page des images.
- source_spec: `_bmad-output/implementation-artifacts/spec-reconnaissances-formation.md`
  summary: Afficher une confirmation avant le basculement vers le client mail quand aucun endpoint de formulaire n’est configuré.
  evidence: Avec `VITE_FORM_ENDPOINT` absent, `onSubmit` redirige immédiatement vers `mailto:` sans mettre à jour le statut visible du formulaire.
- source_spec: `_bmad-output/implementation-artifacts/spec-data-engineering-airbus-skywise-case-study.md`
  summary: Préciser le périmètre, les critères et les résultats de l’audit des cinq pipelines ainsi que les critères de passage Iron/Bronze.
  evidence: Le document source mentionne l’audit dans la carte et le passage de niveau dans l’étude, sans détailler ces critères ni les résultats associés.
- source_spec: `_bmad-output/implementation-artifacts/spec-data-engineering-airbus-skywise-case-study.md`
  summary: Définir le statut Walter et documenter les règles métier qui déterminent l’activité d’un flux.
  evidence: Le document et ses captures emploient « Walter » sans définir ce système ni détailler toutes les conditions de l’arbre de décision.
- source_spec: `_bmad-output/implementation-artifacts/spec-data-engineering-airbus-skywise-case-study.md`
  summary: Confirmer ou corriger les libellés génériques et répétés du modèle logique des datasets.
  evidence: Le visuel fourni contient des noms génériques et deux entités libellées dataset_3 ; les noms corrects ne figurent pas dans le document texte.
- source_spec: `_bmad-output/implementation-artifacts/spec-data-engineering-airbus-skywise-case-study.md`
  summary: Expliquer la cible et le résultat affichés dans la capture de règle EDQ.
  evidence: La capture indique une valeur attendue de 90 et un résultat de 100,0 sans définir le calcul ni son interprétation.
- source_spec: `_bmad-output/implementation-artifacts/spec-etude-statsbomb-profils-joueurs.md`
  summary: Ajouter des liens vers la démonstration interactive et le code source StatsBomb si ces ressources sont publiées.
  evidence: Le Word décrit une page HTML autonome et un pipeline Python sans fournir d’URL ou les fichiers correspondants ; le GIF et la présentation ne constituent pas la démonstration interactive.
- source_spec: `_bmad-output/implementation-artifacts/spec-etude-statsbomb-profils-joueurs.md`
  summary: Ajouter un lien direct vers la version de StatsBomb Open Data utilisée.
  evidence: La source est nommée et attribuée, mais le Word ne fournit ni URL ni version précise du jeu de données.
- source_spec: `_bmad-output/implementation-artifacts/spec-etude-statsbomb-profils-joueurs.md`
  summary: Documenter la justification du seuil de 900 minutes et l’effet du filtrage.
  evidence: Le Word fournit le seuil et l’effectif final, mais pas la justification du choix ni le nombre de joueurs exclus.
- source_spec: `_bmad-output/implementation-artifacts/spec-etude-statsbomb-profils-joueurs.md`
  summary: Fournir la liste complète des métriques et les choix de pondération de la comparaison.
  evidence: Le Word cite des exemples d’indicateurs et les étapes de transformation, sans détailler toutes les variables utilisées dans l’ACP.
- source_spec: `_bmad-output/implementation-artifacts/spec-etude-statsbomb-profils-joueurs.md`
  summary: Ajouter un exemple de comparaison observée et sa vérification qualitative si les résultats sont disponibles.
  evidence: Le Word décrit les fonctionnalités de l’interface, sans fournir de classement précis ni de validation de profils voisins.
- source_spec: `_bmad-output/implementation-artifacts/spec-etude-statsbomb-profils-joueurs.md`
  summary: Proposer une alternative statique ou un contrôle de pause pour la démonstration animée.
  evidence: Le GIF de cinq images est animé et ne peut pas être mis en pause par le composant image natif ; une alternative nécessiterait un visuel ou un contrôle supplémentaire.
