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

## Every unmapped section

Regenerated from `textbook-map.json` on 2026-10-24 (Claude). Every section of Volumes 1, 2 and 3 now has a record (99, 95 and 76). Physics I, Physics II and Acoustics have no missing section; all gaps are in material tagged later.

| Course / priority | Volume | Section | Exact textbook title | Status |
|---|---:|---|---|---|
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
| later | 3 | 3.5 | The Michelson Interferometer | missing |
| later | 3 | 4.5 | Circular Apertures and Resolution | missing |
| later | 3 | 4.7 | Holography | missing |
| later | 3 | 5.6 | Relativistic Velocity Transformation | missing |
| later | 3 | 8.2 | Orbital Magnetic Dipole Moment of the Electron | missing |
| later | 3 | 8.4 | The Exclusion Principle and the Periodic Table | missing |
| later | 3 | 9.1 | Types of Molecular Bonds | missing |
| later | 3 | 9.2 | Molecular Spectra | missing |
| later | 3 | 9.3 | Bonding in Crystalline Solids | missing |
| later | 3 | 9.5 | Band Theory of Solids | missing |
| later | 3 | 9.6 | Semiconductors and Doping | missing |
| later | 3 | 9.7 | Semiconductor Devices | missing |
| later | 3 | 10.4 | Nuclear Reactions | missing |
| later | 3 | 11.1 | Introduction to Particle Physics | missing |
| later | 3 | 11.2 | Particle Conservation Laws | missing |
| later | 3 | 11.3 | Quarks | missing |
| later | 3 | 11.5 | The Standard Model | missing |
| later | 3 | 11.7 | Evolution of the Early Universe | missing |

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
| 3 / 4.1 | double-slit, diffraction-grating | Partial: the single slit envelope appears inside the double slit and grating patterns; there is no single slit setup on its own. |
| 3 / 4.2 | diffraction-grating | Partial: the grating plot includes the [sin β/β]² envelope; no single slit intensity setup on its own. |
| 3 / 4.6 | electron-diffraction | Partial: electron diffraction uses Bragg's law 2d sin θ = λ on graphite with electrons, not X rays. |
| 3 / 5.8 | compton | Partial: Compton scattering uses exact relativistic kinematics for the recoil electron; no dedicated momentum activity. |
| 3 / 5.9 | compton, binding-energy | Partial: Compton (E/mc² of the collision) and binding energy (mass defect, E = mc²); no dedicated activity. |
| 3 / 8.3 | spin-resonance | Partial: electron spin resonance measures g for DPPH; spin itself is not the subject of an activity. |
| 3 / 8.5 | spectra | Partial: spectra covers optical emission and absorption lines; no X ray spectra (Moseley). |
| 3 / 10.5 | binding-energy, energy-sources | Partial: energy released from the binding energy curve; energy sources uses 200 MeV per fission. No chain reaction activity. |
| 3 / 10.6 | binding-energy, star-slice | Partial: energy released from the binding energy curve; star slice shows burning shells. No reaction rate activity. |
| 3 / 10.7 | gamma-spectroscopy | Partial: gamma spectroscopy measures lead attenuation; no dose or biological effects. |
| 3 / 11.4 | magnetic-force, gamma-spectroscopy | Partial: cyclotron motion in charges in magnetic fields; a NaI(Tl) scintillation detector in gamma spectroscopy. |
| 3 / 11.6 | distance-ladder | Partial: Hubble's law fitted to galaxy redshifts; no cosmological model. |

## Optional optics gaps

None: Volume 3 sections 1.1, 1.5, 1.6 and 2.5 were mapped on 2026-10-23 (huygens, optics-bench, the-eye).

## Sources and scope

Volume 1/2 section titles follow the owner-supplied OpenStax PDFs. Volume 3 titles (chapters 1 to 11) follow the official OpenStax chapter outlines, checked 2026-10-24. Energy activity input values are from the cited EIA Table 3.1.A 2024 row, with a stored teaching snapshot; arithmetic solutions stay private. Older source-pinned reports remain evidence for their recorded snapshots, not the latest defect status. All demo HTML remains Claude-owned and no public main merge was made by GPT.
