# Textbook coverage and gaps

Source inventory: main `7dab492884c004636ade7fb68d02edcc4ff172ab`, reviewed 2026-10-22. This is curriculum/source coverage, not collection-wide numerical or release validation.

76 demos from `curriculum/catalog.json` mapped once; 209 section records. Claude’s new demos and section additions are preserved. Legacy HTML outside the catalog is not duplicated.

## Contract for course-page construction

`textbook-map.json` is an object with `courses`, `sections`, and `demos` arrays. The agreed per-demo fields live in `demos`; additions are `title`, `url`, and optional `handouts` (student Markdown basenames). Unit `sections` contains `{vol, sec}` references. Join on the pair, then use section `demos` to render activity cards; deduplicate within a unit. Never infer course membership from a section citation alone: filter the demo’s `course` too. This prevents a deferred modern bench from appearing in required Physics II.

Courses/units/sections are ordered for rendering. Physics I puts Ch. 13 before Ch. 12, then Ch. 14–15. Physics II ends its required path at Vol. 2 Ch. 16; Vol. 3 Ch. 1–2 are optional. Vol. 2 Ch. 15 AC material is `later`/going further; the same Circuits engine also serves the required sequence. No exam dates/boundaries or durations are populated.

Both `sections[*].status` and `demos[*].status` are explicit. Section status describes apparatus coverage; a lab’s `needs-handout` status describes its documentation package. `usable` does not mean fully validated, release-ready, or complete coverage of every example in the section. Missing sections must display “No activity yet.” Partial sections need an equally honest partial/feature-pending label.

Links: student paths are `curriculum/labs/students/<handout>.md`; a listed basename may be a planned handout, so check existence before displaying its link. No instructor links or answers belong on public course pages. Lecture demos do not require a full lab. Steve’s final lab/demo decisions override this first draft.

## Current priorities

- Three new Physics I lab packages are written: motion-graphs is usable within its scope; forces and stress-strain are usable after Claude fixed the four reported UI issues (2026-10-22). Pendulum (§15.4) and Rotational Dynamics (§§10.2, 10.5, 10.7, 10.8) were added on main the same day. Browser/classroom review remains open.
- Resistivity and wire-force handouts/private guides are now written; their Mystery fits need the answer-hiding fix. Next handouts: pendulum and rotational-dynamics. The lecture demos do not need full student labs.
- Near-surface gravity §13.2 remains missing; fixed-g projectile motion does not close this gap.
- Moment-of-inertia calculation §10.5 is partial: discrete masses/standard formulas exist; a continuous-body integration activity is absent.
- Chapter 1 remains worksheet material. Owner-deferred gaps include §8.5, §11.4, §13.7 and §14.7; a missing label is not authorization to build them now.
- Thermodynamics and non-syllabus waves/sound remain later. Basic optics remains optional after Maxwell/EM waves.

## Every unmapped Volume 1/2 section

| Course / priority | Volume | Section | Exact textbook title | Status |
|---|---:|---|---|---|
| physics-1 | 1 | 1.1 | The Scope and Scale of Physics | missing |
| physics-1 | 1 | 1.2 | Units and Standards | missing |
| physics-1 | 1 | 1.3 | Unit Conversion | missing |
| physics-1 | 1 | 1.4 | Dimensional Analysis | missing |
| physics-1 | 1 | 1.5 | Estimates and Fermi Calculations | missing |
| physics-1 | 1 | 1.6 | Significant Figures | missing |
| physics-1 | 1 | 1.7 | Solving Problems in Physics | missing |
| physics-1 | 1 | 8.5 | Sources of Energy | missing |
| physics-1 | 1 | 11.4 | Precession of a Gyroscope | missing |
| physics-1 | 1 | 13.2 | Gravitation Near Earth's Surface | missing |
| physics-1 | 1 | 13.7 | Einstein's Theory of Gravity | missing |
| physics-1 | 1 | 14.7 | Viscosity and Turbulence | missing |
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

## Partial section coverage / missing features

| Volume / section | Demos | Limitation |
|---|---|---|
| 1 / 4.4 | circular-motion | Circular Motion shows a = v²/r toward the center at constant speed; nonuniform circular motion (tangential acceleration) only in the loop. |
| 1 / 5.2 | forces | Forces and Friction shows balanced forces at rest; constant velocity with zero net force is not set up directly. |
| 1 / 5.4 | forces | Forces and Friction uses W = mg; apparent weight (elevator) not covered. |
| 1 / 9.2 | collisions | Collision impulse context; a general force-time integral measurement is missing. |
| 1 / 9.6 | collisions | Collision center-of-mass example only. |
| 1 / 10.5 | rotation | Discrete point-mass I = Σmr² in the spinner/seesaw and supplied standard-shape coefficients are present. No continuous-body ∫r²dm derivation/integration activity; do not label that part complete. |
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

| Section | Exact title | Status |
|---|---|---|
| 1.1 | The Propagation of Light | missing |
| 1.5 | Dispersion | missing |
| 1.6 | Huygens’s Principle | missing |
| 2.5 | The Eye | missing |

## Mapping recheck, 2026-10-22

[Evidence and scope](validation/MAPPING_RECHECK_2026-10-22.md). Tides now serves Physics I §13.6; springs reference circle serves §15.3; vectors/projectiles support two-dimensional §§4.1–4.2. Rotation supports only part of §10.5. §13.2 remains missing. No demo source, course page or handout edited in this recheck.

## Sources and package status

Volumes 1/2 titles: owner-supplied OpenStax University Physics PDF contents. Optional Volume 3 titles: official [Chapter 1](https://openstax.org/books/university-physics-volume-3/pages/1-introduction) and [Chapter 2](https://openstax.org/books/university-physics-volume-3/pages/2-introduction) outlines. Full Volume 3 mapping remains deferred.

The prior 16 aligned student/private activity packages remain preserved. Status usable describes a scoped activity that can be surfaced, not full topic coverage, release certification or classroom acceptance. The three new Physics I handouts are written; Claude’s forces/stress-strain fixes are source reviewed and their workarounds removed. Resistivity/wire-force now have handouts but remain needs-feature for Mystery-fit answer hiding. See [new lab evidence](validation/NEW_MECHANICS_LABS_2026-10-22.md). Claude should copy the updated JSON and this gap list from the feature branch and regenerate his course pages.


## E&M bench packages, 2026-10-22

[Checks and limitations](validation/EM_BENCH_LABS_2026-10-22.md). Added resistivity and current-balance student/private packages; the resistivity current check also maps to Vol. 2 §9.4. Both new benches need a small Mystery-fit answer-hiding fix, reproduced by the strict source-function test. Main’s two newer Physics I labs remain needs-handout and are next. No course-page or demo HTML edits by GPT.
