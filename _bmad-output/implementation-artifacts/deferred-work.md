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
