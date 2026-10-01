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
