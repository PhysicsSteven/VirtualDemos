# Physics I: current course status

Snapshot: main `db5f27b3eeab45a0c24f9fa9981e5630a45c713c`, plus GPT's feature-branch handouts and tests, 2026-10-22. This is the written-package checkpoint; it is not a declaration that every syllabus topic or release gate is complete.

> **Update (Claude, 2026-10-22, later the same day):** since this snapshot, main added Elevator (§5.2, 5.4), Speeding Up on a Curve (§4.4), Impulse and Momentum (§9.2, lab), Center of Mass (§9.6), Gravity Near Earth (§13.2) and GPS Clocks and Relativity (§13.7). The map now shows 77 of 85 Physics I sections usable; the remaining 8 are Ch. 1 (§§1.1–1.7, worksheet material) and §8.5 Sources of Energy. Impulse still needs its handout.

**11 existing labs have full student handouts and private instructor guides.** All 21 Physics I demos have teaching notes. The 85 mapped textbook sections comprise 70 usable topic mappings, 5 partial mappings and 10 missing activities. A usable mapping supports a scoped topic, not every example or derivation in its textbook section.

## In syllabus order

The same demo may appear in several units. Ch. 13 precedes Ch. 12 as Steve specified. Links below point to student files on this branch; generated public course pages may lag until Claude copies the updated map and handouts.

| Unit | Student labs | Lecture demos / short activities | Topic coverage |
|---|---|---|---|
| Measurements and vectors | — | [vectors](../notes/src/vectors.md) | 4 usable, 7 missing |
| Kinematics | [motion-graphs](labs/students/motion-graphs.md), [projectile-drag](labs/students/projectile-drag.md) | [vectors](../notes/src/vectors.md), [circular-motion](../notes/src/circular-motion.md) | 10 usable, 1 partial |
| Forces | [forces](labs/students/forces.md), [projectile-drag](labs/students/projectile-drag.md) | [circular-motion](../notes/src/circular-motion.md) | 9 usable, 2 partial |
| Work and energy | [forces](labs/students/forces.md) | [potential-curves](../notes/src/potential-curves.md) | 8 usable, 1 missing |
| Momentum and collisions | [collisions](labs/students/collisions.md) | [rocket](../notes/src/rocket.md) | 5 usable, 2 partial |
| Rotation and angular momentum | [rotational-dynamics](labs/students/rotational-dynamics.md) | [rotation](../notes/src/rotation.md), [gyroscope](../notes/src/gyroscope.md) | 12 usable |
| Gravitation and orbital mechanics | [kepler-orbits](labs/students/kepler-orbits.md) | [tides](../notes/src/tides.md) | 5 usable, 2 missing |
| Static equilibrium and elasticity | [stress-strain](labs/students/stress-strain.md) | [rotation](../notes/src/rotation.md), [catenary](../notes/src/catenary.md), [equilibrium](../notes/src/equilibrium.md) | 4 usable |
| Fluids | [fluids](labs/students/fluids.md), [viscometer](labs/students/viscometer.md) | — | 7 usable |
| Oscillations | [springs](labs/students/springs.md), [pendulum](labs/students/pendulum.md) | [double-pendulum](../notes/src/double-pendulum.md) | 6 usable |

## Remaining topic gaps

These need worksheets, new features or new activities; finishing the existing handouts does not close them. Claude owns demo HTML. The earlier deferred list is superseded where Claude has already added a new demo (gyroscope and viscometer now cover their scoped topics).

| Section | Topic | Current limit |
|---|---|---|
| 1.1 | The Scope and Scale of Physics | No activity yet. |
| 1.2 | Units and Standards | No activity yet. |
| 1.3 | Unit Conversion | No activity yet. |
| 1.4 | Dimensional Analysis | No activity yet. |
| 1.5 | Estimates and Fermi Calculations | No activity yet. |
| 1.6 | Significant Figures | No activity yet. |
| 1.7 | Solving Problems in Physics | No activity yet. |
| 4.4 | Uniform and Nonuniform Circular Motion | Circular Motion shows a = v²/r toward the center at constant speed; nonuniform circular motion (tangential acceleration) only in the loop. |
| 5.2 | Newton's First Law | Forces and Friction shows balanced forces at rest; constant velocity with zero net force is not set up directly. |
| 5.4 | Mass and Weight | Forces and Friction uses W = mg; apparent weight (elevator) not covered. |
| 8.5 | Sources of Energy | No activity yet. |
| 9.2 | Impulse and Collisions | Collision impulse context; a general force-time integral measurement is missing. |
| 9.6 | Center of Mass | Collision center-of-mass example only. |
| 13.2 | Gravitation Near Earth's Surface | No activity yet. |
| 13.7 | Einstein's Theory of Gravity | No activity yet. |

Section 10.5 retains a scope caveat despite its usable activity: mass sums, shape formulas and measured inertia do not replace a continuous-body integral derivation. The two-dimensional vector/projectile examples do not constitute a general three-dimensional motion viewer.

## Source and acceptance work still open

- Pendulum and rotational-dynamics have full handouts but are `needs-feature`: Mystery alone currently reveals their fitted g/I unless Blind is on. A strict source-function regression reproduces both disclosures; the procedures use Blind.
- String-bob releases above horizontal are not a taut-string experiment. The lab limits the angle to 90°; Claude is asked to clarify the larger-angle source domain.
- Viscometer is usable for the specified low-Re domain. It is not independent validation of the entire empirical high-Re drag curve or of the tube correction at high Re. The raw built-in fit is an apparent-viscosity comparison.
- Browser/download/phone/keyboard checks and Steve/TA acceptance remain open. No public main merge by GPT. Private keys are in TeacherKeys only.

See [executed checks and source requests](validation/PHYSICS_I_COMPLETION_2026-10-22.md) and [textbook gaps](TEXTBOOK_GAPS.md). Lecture demos retain teaching notes instead of being inflated into full student labs.
