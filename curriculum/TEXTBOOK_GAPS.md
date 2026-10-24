# Textbook coverage and gaps

Source inventory: main `9bbb97b3a281e72c2f853a18f49b14e95b79e25f`, reviewed 2026-10-22, plus feature-branch student activities. The 84 catalog demos are each mapped once; 209 section records are retained. Three standalone activities are stored separately from demos.

## Course-page contract

The schema-version-1 object contains `courses`, `sections`, `demos`, and optional `activities`. Existing demo entries and URLs/QR codes are unchanged. Activities have `id`, `title`, `kind` (`worksheet` or `reading`), `course`, textbook `sections`, `status`, `handouts`, `url` (the public Markdown file), `description` and a scope note. Reading entries can name input `data` files and `sources`.

For each course unit, join its `{vol,sec}` references to section records. Render both `section.demos` and optional `section.activities`; filter each resource's course membership and deduplicate within the unit. Check student-file existence before linking. Never add instructor links. Keep real-demo and worksheet/reading counts separate; no fake demos or thumbnails are needed for a worksheet.

Claude integration: `validation/requests/standalone-course-activities.patch` is a tested proposal for the current `tools/courses.py`. Its in-memory render passed, including direct activity links and unchanged Physics II output. The generator and generated course pages are not edited on this branch; apply/adapt the patch (`git apply --unidiff-zero`) and regenerate before claiming the standalone cards are live.

Physics I follows the syllabus (Ch. 13 before Ch. 12, then fluids and oscillations). Required Physics II ends at Maxwell and EM waves; Vol. 3 Ch. 1–2 (basic optics) and Ch. 3–4 (wave optics) are optional. Durations and exam boundaries remain unpopulated. Thermodynamics (Vol. 2 ch. 1 to 4) and Modern Physics (Vol. 3 ch. 5 to 11) are modules like Acoustics (2026-10-24); other deferred material keeps its later assignment.

## Status meanings

A section's status describes scoped topic coverage from demos and/or standalone activities. A resource's status describes its package. `usable` is not full-section mastery, a physics audit of every setting, release certification or classroom acceptance. Missing means no mapped resource; partial means a known topic/feature limit. Broader limitations remain in notes even when a scoped activity is usable.

## Current Physics I checkpoint

All 85 course sections have an explicit scoped mapping: 27 real demos, 12 full lab packages, two Chapter 1 worksheets and one §8.5 reading/data activity. Chapter 1 is not represented as a simulation. Impulse's new lab is complete. The four Mystery fit-hiding fixes pass their strict tests. Standalone course-card integration, browser/deployment and classroom checks remain open. [Unit inventory](PHYSICS_I_STATUS.md) and [validation](validation/PHYSICS_I_GAP_ACTIVITIES_2026-10-22.md).

## Every unmapped section

Regenerated from `textbook-map.json` on 2026-10-24 (Claude), after the Thermodynamics and Modern Physics modules were made and wave optics joined Physics II. Every section of Volumes 1, 2 and 3 has a record (99, 95 and 76). Physics I, required Physics II, Acoustics and Thermodynamics have no missing section (Thermodynamics filled 2026-10-24 by the Temperature and Heat, Heat Capacities of Gases, and Entropy and the Second Law demos). Thermodynamics is Vol. 2 ch. 1 to 4, Modern Physics is Vol. 3 ch. 5 to 11, and Physics II's optional wave optics unit is Vol. 3 ch. 3 and 4; Vol. 2 §15.6 (Transformers), tagged later with the rest of ch. 15, was filled 2026-10-24 by the Transformers demo. Physics II's optional wave optics unit has no missing or partial section since 2026-10-24 (Michelson Interferometer, Circular Apertures and Resolution, and Holography demos; a single slit aperture in Diffraction Grating for §4.1 and §4.2; an X rays view in Electron Diffraction for §4.6).

None: every section of Volumes 1, 2 and 3 now has a usable mapping (the last Modern Physics gaps, Vol. 3 ch. 9 to 11, were filled on 2026-10-24).

## Partial section mappings

| Volume / section | Demos | Limitation |
|---|---|---|
| 2 / 5.5 | coulomb-sandbox | Point-charge sums only; general extended-distribution integration is missing. |
| 2 / 6.4 | gauss-law, induction | Spherical conductor example only, not arbitrary conductors. |
| 2 / 9.1 | circuits | Circuit-level current only, not a microscopic charge-flow experiment. |
| 2 / 11.2 | magnetic-force | Uniform imposed field; field-line exploration is limited. |
| 2 / 11.3 | magnetic-force | See the activity entry. |
| 2 / 14.2 | circuits, faraday | Lumped inductors and fixed coil model, not every inductor geometry. |
| 3 / 2.3 | optics-bench | Basic refraction supported; general curved-surface image formation needs review. |
| 3 / 2.8 | optics-bench | Instrument examples require review before section-complete labeling. |

## Optional optics gaps

Basic optics (ch. 1 and 2): none; Volume 3 sections 1.1, 1.5, 1.6 and 2.5 were mapped on 2026-10-23 (huygens, optics-bench, the-eye). Wave optics (ch. 3 and 4, optional unit since 2026-10-24): none since 2026-10-24 (michelson for §3.5, resolution for §4.5, holography for §4.7; the diffraction grating's single slit aperture for §4.1 and §4.2; electron diffraction's X rays view for §4.6).

## Sources and scope

Volume 1/2 section titles follow the owner-supplied OpenStax PDFs. Volume 3 titles (chapters 1 to 11) follow the official OpenStax chapter outlines, checked 2026-10-24. Energy activity input values are from the cited EIA Table 3.1.A 2024 row, with a stored teaching snapshot; arithmetic solutions stay private. Older source-pinned reports remain evidence for their recorded snapshots, not the latest defect status. All demo HTML remains Claude-owned and no public main merge was made by GPT.
