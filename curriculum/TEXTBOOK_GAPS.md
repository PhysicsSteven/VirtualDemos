# Textbook coverage and gaps

Source inventory: main `9bbb97b3a281e72c2f853a18f49b14e95b79e25f`, reviewed 2026-10-22, plus feature-branch student activities. The 84 catalog demos are each mapped once; 209 section records are retained. Three standalone activities are stored separately from demos.

## Course-page contract

The schema-version-1 object contains `courses`, `sections`, `demos`, and optional `activities`. Existing demo entries and URLs/QR codes are unchanged. Activities have `id`, `title`, `kind` (`worksheet` or `reading`), `course`, textbook `sections`, `status`, `handouts`, `url` (the public Markdown file), `description` and a scope note. Reading entries can name input `data` files and `sources`.

For each course unit, join its `{vol,sec}` references to section records. Render both `section.demos` and optional `section.activities`; filter each resource's course membership and deduplicate within the unit. Check student-file existence before linking. Never add instructor links. Keep real-demo and worksheet/reading counts separate; no fake demos or thumbnails are needed for a worksheet.

Claude integration: `validation/requests/standalone-course-activities.patch` is a tested proposal for the current `tools/courses.py`. Its in-memory render passed, including direct activity links and unchanged Physics II output. The generator and generated course pages are not edited on this branch; apply/adapt the patch (`git apply --unidiff-zero`) and regenerate before claiming the standalone cards are live.

Physics I follows the syllabus (Ch. 13 before Ch. 12, then fluids and oscillations). Required Physics II ends at Maxwell and EM waves; Vol. 3 Ch. 1–2 optics remains optional. Durations and exam boundaries remain unpopulated. Deferred material keeps its existing later assignment.

## Status meanings

A section's status describes scoped topic coverage from demos and/or standalone activities. A resource's status describes its package. `usable` is not full-section mastery, a physics audit of every setting, release certification or classroom acceptance. Missing means no mapped resource; partial means a known topic/feature limit. Broader limitations remain in notes even when a scoped activity is usable.

## Current Physics I checkpoint

All 85 course sections have an explicit scoped mapping: 27 real demos, 12 full lab packages, two Chapter 1 worksheets and one §8.5 reading/data activity. Chapter 1 is not represented as a simulation. Impulse's new lab is complete. The four Mystery fit-hiding fixes pass their strict tests. Standalone course-card integration, browser/deployment and classroom checks remain open. [Unit inventory](PHYSICS_I_STATUS.md) and [validation](validation/PHYSICS_I_GAP_ACTIVITIES_2026-10-22.md).

## Every unmapped Volume 1/2 section

| Course / priority | Volume | Section | Exact textbook title | Status |
|---|---:|---|---|---|
| physics-2 | 2 | 7.6 | Applications of Electrostatics | missing |
| physics-2 | 2 | 8.5 | Molecular Model of a Dielectric | missing |
| physics-2 | 2 | 9.2 | Model of Conduction in Metals | missing |
| physics-2 | 2 | 9.6 | Superconductors | missing |
| physics-2 | 2 | 10.6 | Household Wiring and Electrical Safety | missing |
| physics-2 | 2 | 11.1 | Magnetism and Its Historical Discoveries | missing |
| physics-2 | 2 | 12.7 | Magnetism in Matter | missing |
| physics-2 | 2 | 13.4 | Induced Electric Fields | missing |
| physics-2 | 2 | 13.7 | Applications of Electromagnetic Induction | missing |
| later | 1 | 16.4 | Energy and Power of a Wave | missing |
| later | 1 | 17.1 | Sound Waves | missing |
| later | 1 | 17.3 | Sound Intensity | missing |
| later | 2 | 1.1 | Temperature and Thermal Equilibrium | missing |
| later | 2 | 1.2 | Thermometers and Temperature Scales | missing |
| later | 2 | 1.3 | Thermal Expansion | missing |
| later | 2 | 1.4 | Heat Transfer, Specific Heat, and Calorimetry | missing |
| later | 2 | 1.5 | Phase Changes | missing |
| later | 2 | 3.5 | Heat Capacities of an Ideal Gas | missing |
| later | 2 | 4.1 | Reversible and Irreversible Processes | missing |
| later | 2 | 4.4 | Statements of the Second Law of Thermodynamics | missing |
| later | 2 | 4.7 | Entropy on a Microscopic Scale | missing |
| later | 2 | 15.6 | Transformers | missing |

## Partial section mappings

| Volume / section | Demos | Limitation |
|---|---|---|
| 2 / 5.5 | coulomb-sandbox | Point-charge sums only; general extended-distribution integration is missing. |
| 2 / 6.4 | gauss-law, induction | Spherical conductor example only, not arbitrary conductors. |
| 2 / 9.1 | circuits | Circuit-level current only, not a microscopic charge-flow experiment. |
| 2 / 11.2 | magnetic-force | Uniform imposed field; field-line exploration is limited. |
| 2 / 11.3 | magnetic-force | See the activity entry. |
| 2 / 14.2 | circuits, faraday | Lumped inductors and fixed coil model, not every inductor geometry. |
| 2 / 16.2 | em-waves | See the activity entry. |
| 2 / 16.3 | em-waves | See the activity entry. |
| 2 / 16.4 | em-waves | See the activity entry. |
| 2 / 16.5 | em-waves | See the activity entry. |
| 3 / 2.3 | optics-bench | Basic refraction supported; general curved-surface image formation needs review. |
| 3 / 2.8 | optics-bench | Instrument examples require review before section-complete labeling. |

## Optional optics gaps

| Section | Title | Status |
|---|---|---|
| 1.1 | The Propagation of Light | missing |
| 1.5 | Dispersion | missing |
| 1.6 | Huygens’s Principle | missing |
| 2.5 | The Eye | missing |

## Sources and scope

Volume 1/2 section titles follow the owner-supplied OpenStax PDFs. Optional optics uses the official Volume 3 chapter outlines. Energy activity input values are from the cited EIA Table 3.1.A 2024 row, with a stored teaching snapshot; arithmetic solutions stay private. Older source-pinned reports remain evidence for their recorded snapshots, not the latest defect status. All demo HTML remains Claude-owned and no public main merge was made by GPT.
