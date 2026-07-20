# Design QA

- Source visual truth: user-supplied desktop screenshots in `C:/Users/tomoy/AppData/Local/Temp/codex-clipboard-*.png`
- Latest available implementation screenshots:
  - `C:/Users/tomoy/AppData/Local/Temp/homepage-research-formula-final.png`
  - `C:/Users/tomoy/AppData/Local/Temp/homepage-research-lower-final.png`
  - `C:/Users/tomoy/AppData/Local/Temp/homepage-research-basics-final.png`
- Viewport: 1440 x 1000
- State: Research page, Japanese locale

## Typography Inventory

- Display title: responsive 30-44 px, reserved for page and major section headings.
- Subsection title: responsive 24-28 px, used for major Research subsections and project-card titles.
- Card title: 20 px / 32 px line height, used across About, Publications, Presentations, Awards, Contact, and Research detail cards.
- Body copy: 16 px on desktop / 32 px line height, used across all card descriptions and profile details.
- Meta label: 14 px on desktop, used for stages, profile labels, and numbered process labels.
- Intentional exceptions: hero name, equations, numeric indices, navigation, buttons, chips, citations, and compact external-profile labels.

## Full-view Comparison Evidence

The Research page was captured and reviewed at 1440 x 1000 before the final shared-class pass. The source files were then audited for every direct heading, paragraph, label, card, and responsive font-size declaration across Home and Research components.

## Focused-region Comparison Evidence

- Research subsection headings now share `subsection-title` or `card-title` according to hierarchy.
- About, Publications, Presentations, Awards, Contact, and profile-panel card text now use the same title/body/meta classes.
- Formula labels and equations retain a larger measurement-specific scale.
- `コントラストK` and `血流指標（BFI）` are emphasized without changing surrounding body size.

## Patches Made

- Added reusable `subsection-title`, `card-title`, `card-copy`, and `meta-label` typography classes.
- Increased desktop section kickers and eyebrow labels to 14 px.
- Standardized Research concept cards, relation notes, SCOS steps, project cards, references, and footer copy.
- Standardized Home profile labels and education text.
- Standardized Publications, Presentations, Awards, Contact, and empty-state typography.
- TypeScript build, ESLint, and diff validation pass.

## Content Consistency Guardrails

- Before adding a record, compare it with the nearest existing record in the same section and conference family. Match its naming granularity, locale treatment, and optional-field usage.
- Use `Optica Biophotonics Congress: Biomedical Optics [year]` as the publication venue for this Optica conference family. Keep track names and paper numbers in the external URL rather than adding them to only some venue labels.
- Do not add `Poster`, `Oral`, or another presentation-type badge to isolated conference records. Show presentation types only if the field is populated consistently across the section.
- For international conference records, keep every author's full English name in both `ja` and `en` so that the Japanese view does not mix Japanese and English author names.
- Treat any exception as a section-wide formatting decision and visually compare it with surrounding cards before release.

## Blocker

The in-app browser policy stopped the required post-change desktop recapture after the final global typography pass. No alternate browser surface was used.

## Final Result

blocked
