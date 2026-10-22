# Textbook coverage and gaps

Draft source inventory: main `e6be55f71fcf15d123f41bc802ed53f8bf42194f`, 2026-10-22. This is a curriculum map, not numerical or browser validation.

62 catalog demos mapped once each; 209 section records (99 in Volume 1, 95 in Volume 2, 15 optional Volume 3 sections). Existing legacy HTML pages outside the index are not duplicated.

## Contract for course-page construction

`textbook-map.json` is an object with `courses`, `sections`, and `demos` arrays. The agreed per-demo fields live in `demos`; additions are `title`, `url`, and optional `handouts` (student Markdown basenames). Unit `sections` contains `{vol, sec}` references. Join on the pair, then use section `demos` to render activity cards; deduplicate within a unit. Never infer course membership from a section citation alone: filter the demo’s `course` too. This prevents a deferred modern bench from appearing in required Physics II.

Courses/units/sections are ordered for rendering. Physics I puts Ch. 13 before Ch. 12, then Ch. 14–15. Physics II ends its required path at Vol. 2 Ch. 16; Vol. 3 Ch. 1–2 are optional. Vol. 2 Ch. 15 AC material is `later`/going further; the same Circuits engine also serves the required sequence. No exam dates/boundaries or durations are populated.

Both `sections[*].status` and `demos[*].status` are explicit. Section status describes apparatus coverage; a lab’s `needs-handout` status describes its documentation package. `usable` does not mean fully validated, release-ready, or complete coverage of every example in the section. Missing sections must display “No activity yet.” Partial sections need an equally honest partial/feature-pending label.

Links: student paths are `curriculum/labs/students/<handout>.md`; a listed basename may be a planned handout, so check existence before displaying its link. No instructor links or answers belong on public course pages. Lecture demos do not require a full lab. Steve’s final lab/demo decisions override this first draft.

## Priority gaps

- Early Physics I: measurements/vectors, general 1D motion graphs and relative motion, Newton’s laws/free-body diagrams, friction/inclines and centripetal force.
- General work/kinetic-energy experiments and static equilibrium: existing potential/seesaw/chain illustrations provide partial support, not a complete replacement.
- Elastic stress/strain: missing.
- Physics II Hall effect: missing pending Claude’s Hall probe work. A Hall probe measuring B is not itself a Hall-effect derivation or experiment.
- Maxwell/displacement current: EM wave demo provides partial coverage, but a charging-capacitor/induced-B activity is missing.
- Thermodynamics and sound/waves outside the supplied syllabi stay `later`; do not build these gaps now.

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
| physics-1 | 1 | 2.1 | Scalars and Vectors | missing |
| physics-1 | 1 | 2.2 | Coordinate Systems and Components of a Vector | missing |
| physics-1 | 1 | 2.3 | Algebra of Vectors | missing |
| physics-1 | 1 | 2.4 | Products of Vectors | missing |
| physics-1 | 1 | 3.1 | Position, Displacement, and Average Velocity | missing |
| physics-1 | 1 | 3.2 | Instantaneous Velocity and Speed | missing |
| physics-1 | 1 | 3.3 | Average and Instantaneous Acceleration | missing |
| physics-1 | 1 | 3.5 | Free Fall | missing |
| physics-1 | 1 | 3.6 | Finding Velocity and Displacement from Acceleration | missing |
| physics-1 | 1 | 4.1 | Displacement and Velocity Vectors | missing |
| physics-1 | 1 | 4.2 | Acceleration Vector | missing |
| physics-1 | 1 | 4.4 | Uniform and Nonuniform Circular Motion | missing |
| physics-1 | 1 | 4.5 | Relative Motion in One and Two Dimensions | missing |
| physics-1 | 1 | 5.1 | Forces | missing |
| physics-1 | 1 | 5.2 | Newton's First Law | missing |
| physics-1 | 1 | 5.3 | Newton's Second Law | missing |
| physics-1 | 1 | 5.4 | Mass and Weight | missing |
| physics-1 | 1 | 5.5 | Newton’s Third Law | missing |
| physics-1 | 1 | 5.6 | Common Forces | missing |
| physics-1 | 1 | 5.7 | Drawing Free-Body Diagrams | missing |
| physics-1 | 1 | 6.1 | Solving Problems with Newton’s Laws | missing |
| physics-1 | 1 | 6.2 | Friction | missing |
| physics-1 | 1 | 6.3 | Centripetal Force | missing |
| physics-1 | 1 | 7.2 | Kinetic Energy | missing |
| physics-1 | 1 | 7.4 | Power | missing |
| physics-1 | 1 | 8.5 | Sources of Energy | missing |
| physics-1 | 1 | 9.7 | Rocket Propulsion | missing |
| physics-1 | 1 | 10.5 | Calculating Moments of Inertia | missing |
| physics-1 | 1 | 10.8 | Work and Power for Rotational Motion | missing |
| physics-1 | 1 | 11.4 | Precession of a Gyroscope | missing |
| physics-1 | 1 | 13.2 | Gravitation Near Earth's Surface | missing |
| physics-1 | 1 | 13.6 | Tidal Forces | missing |
| physics-1 | 1 | 13.7 | Einstein's Theory of Gravity | missing |
| physics-1 | 1 | 12.3 | Stress, Strain, and Elastic Modulus | missing |
| physics-1 | 1 | 12.4 | Elasticity and Plasticity | missing |
| physics-1 | 1 | 14.7 | Viscosity and Turbulence | missing |
| physics-1 | 1 | 15.3 | Comparing Simple Harmonic Motion and Circular Motion | missing |
| physics-2 | 2 | 5.1 | Electric Charge | missing |
| physics-2 | 2 | 5.2 | Conductors, Insulators, and Charging by Induction | missing |
| physics-2 | 2 | 7.6 | Applications of Electrostatics | missing |
| physics-2 | 2 | 8.5 | Molecular Model of a Dielectric | missing |
| physics-2 | 2 | 9.2 | Model of Conduction in Metals | missing |
| physics-2 | 2 | 9.3 | Resistivity and Resistance | missing |
| physics-2 | 2 | 9.6 | Superconductors | missing |
| physics-2 | 2 | 10.6 | Household Wiring and Electrical Safety | missing |
| physics-2 | 2 | 11.1 | Magnetism and Its Historical Discoveries | missing |
| physics-2 | 2 | 11.6 | The Hall Effect | missing |
| physics-2 | 2 | 12.7 | Magnetism in Matter | missing |
| physics-2 | 2 | 13.4 | Induced Electric Fields | missing |
| physics-2 | 2 | 13.5 | Eddy Currents | missing |
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

| Volume / section | Existing activities | Limitation |
|---|---|---|
| 1 / 3.4 | projectile-drag | Projectile motion uses these equations; a general 1D motion/graph activity is missing. |
| 1 / 7.1 | potential-curves | Conservative-force work only; a general applied-work apparatus is missing. |
| 1 / 7.3 | potential-curves | Energy-diagram illustration only; general work/kinetic-energy measurement is missing. |
| 1 / 8.2 | potential-curves | Conservative potentials are shown; general nonconservative work is incomplete. |
| 1 / 9.2 | collisions | Collision impulse context; a general force-time integral measurement is missing. |
| 1 / 9.6 | collisions | Collision center-of-mass example only. |
| 1 / 10.2 | rotation | Selected torque dynamics only; general rotational kinematics exercise needs review. |
| 1 / 10.7 | rotation | Selected door/rolling apparatus; not every rotational dynamics application. |
| 1 / 12.1 | rotation, catenary | Seesaw and chain equilibrium only; a general equilibrium/free-body-diagram apparatus is still planned. |
| 1 / 12.2 | rotation, catenary | Limited seesaw/chain examples, not complete static-equilibrium coverage. |
| 1 / 15.1 | springs | Awaiting feature work listed on the demo entry. |
| 1 / 15.2 | springs | Awaiting feature work listed on the demo entry. |
| 1 / 15.4 | double-pendulum | Double-pendulum small-angle comparison; a simple pendulum lab is not provided. |
| 1 / 15.5 | springs | Awaiting feature work listed on the demo entry. |
| 1 / 15.6 | springs | Awaiting feature work listed on the demo entry. |
| 2 / 5.5 | coulomb-sandbox | Point-charge sums only; general extended-distribution integration is missing. |
| 2 / 6.4 | gauss-law | Spherical conductor example only, not arbitrary conductors. |
| 2 / 9.1 | circuits | Circuit-level current only, not a microscopic charge-flow experiment. |
| 2 / 11.2 | magnetic-force | Uniform imposed field; field-line exploration is limited. |
| 2 / 11.3 | magnetic-force | Awaiting feature work listed on the demo entry. |
| 2 / 11.4 | currents-fields | Parallel-wire force example only; arbitrary wire geometry is missing. |
| 2 / 11.5 | currents-fields | Selected dipole/loop illustration; check full torque procedure before assigning a lab. |
| 2 / 11.7 | magnetic-force | Awaiting feature work listed on the demo entry. |
| 2 / 14.2 | circuits, faraday | Lumped inductors and fixed coil model, not every inductor geometry. |
| 2 / 16.1 | em-waves | Plane-wave relationships and equation discussion; induced-B/displacement-current apparatus is missing. |
| 2 / 16.2 | em-waves | Awaiting feature work listed on the demo entry. |
| 2 / 16.3 | em-waves | Awaiting feature work listed on the demo entry. |
| 2 / 16.4 | em-waves | Awaiting feature work listed on the demo entry. |
| 2 / 16.5 | em-waves | Awaiting feature work listed on the demo entry. |
| 3 / 2.3 | optics-bench | Basic refraction supported; general curved-surface image formation needs review. |
| 3 / 2.8 | optics-bench | Instrument examples require review before section-complete labeling. |

## Optional optics gaps

| Section | Exact title | Status |
|---|---|---|
| 1.1 | The Propagation of Light | missing |
| 1.5 | Dispersion | missing |
| 1.6 | Huygens’s Principle | missing |
| 2.5 | The Eye | missing |
| 2.6 | The Camera | missing |

## Sources and limits

Volumes 1 and 2: the owner-supplied OpenStax University Physics PDFs, table of contents. Titles are retained as printed, including capitalization and apostrophes. Bibliographic links: [Volume 1](https://openstax.org/details/books/university-physics-volume-1), [Volume 2](https://openstax.org/details/books/university-physics-volume-2).

Volume 3 titles verified against official [Chapter 1 outline](https://openstax.org/books/university-physics-volume-3/pages/1-introduction) and [Chapter 2 outline](https://openstax.org/books/university-physics-volume-3/pages/2-introduction), accessed 2026-10-22. Full Volume 3 modern/wave-optics mapping is deferred; those entries state this explicitly rather than inventing section references.

Map describes source/UI inventory, not a fresh independent physics audit. Topic references are deliberately selective. A source update, new activity or revised handout should update the map; rerun its structural validation after changes.
