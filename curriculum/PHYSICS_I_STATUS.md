# Physics I: current course status

Snapshot: main `9bbb97b3a281e72c2f853a18f49b14e95b79e25f` plus the feature-branch activities, 2026-10-22.

**All 85 textbook sections now have an explicit scoped resource mapping.** There are 27 real demos (12 labs and 15 lecture demos), plus two standalone foundations worksheets and one energy-sources reading/data activity. All 12 labs have student/private instructor companions. No worksheet is counted as a simulation. This is a curriculum coverage checkpoint, not full-section mastery, numerical certification of every model, or classroom release approval.

## In syllabus order

The same resource may appear in several units. Chapter 13 precedes Chapter 12 as Steve specified. Direct worksheet/readings cards need Claude's course-renderer integration described below.

| Unit | Student labs | Lecture demos / short activities | Worksheets and readings | Coverage |
|---|---|---|---|---|
| Measurements and vectors | — | [vectors](../notes/src/vectors.md) | [Measuring, Converting and Checking Units](labs/students/measurement-and-units.md), [Estimating and Reporting a Physical Result](labs/students/estimation-and-evidence.md) | 11 scoped mappings |
| Kinematics | [motion-graphs](labs/students/motion-graphs.md), [projectile-drag](labs/students/projectile-drag.md) | [vectors](../notes/src/vectors.md), [circular-motion](../notes/src/circular-motion.md), [nonuniform-circular](../notes/src/nonuniform-circular.md) | — | 11 scoped mappings |
| Forces | [forces](labs/students/forces.md), [projectile-drag](labs/students/projectile-drag.md) | [elevator](../notes/src/elevator.md), [circular-motion](../notes/src/circular-motion.md) | — | 11 scoped mappings |
| Work and energy | [forces](labs/students/forces.md) | [potential-curves](../notes/src/potential-curves.md) | [Where Does Electrical Energy Come From?](labs/students/energy-sources.md) | 9 scoped mappings |
| Momentum and collisions | [collisions](labs/students/collisions.md), [impulse](labs/students/impulse.md) | [center-of-mass](../notes/src/center-of-mass.md), [rocket](../notes/src/rocket.md) | — | 7 scoped mappings |
| Rotation and angular momentum | [rotational-dynamics](labs/students/rotational-dynamics.md) | [rotation](../notes/src/rotation.md), [gyroscope](../notes/src/gyroscope.md) | — | 12 scoped mappings |
| Gravitation and orbital mechanics | [kepler-orbits](labs/students/kepler-orbits.md) | [gravity-near-earth](../notes/src/gravity-near-earth.md), [tides](../notes/src/tides.md), [gps-clocks](../notes/src/gps-clocks.md) | — | 7 scoped mappings |
| Static equilibrium and elasticity | [stress-strain](labs/students/stress-strain.md) | [rotation](../notes/src/rotation.md), [catenary](../notes/src/catenary.md), [equilibrium](../notes/src/equilibrium.md) | — | 4 scoped mappings |
| Fluids | [fluids](labs/students/fluids.md), [viscometer](labs/students/viscometer.md) | — | — | 7 scoped mappings |
| Oscillations | [springs](labs/students/springs.md), [pendulum](labs/students/pendulum.md) | [double-pendulum](../notes/src/double-pendulum.md) | — | 6 scoped mappings |

## What changed since the earlier gap list

- Chapter 1 now has two short activities covering measurement/scale, SI conversions, dimensional checks, Fermi estimates, significant figures, uncertainty and auditable problem solving.
- Section 8.5 now has a reading/calculation activity with a dated EIA electricity-generation input snapshot and explicit energy/power/efficiency boundaries.
- Claude supplied elevator, nonuniform-circular, impulse, center-of-mass, gravity-near-earth and gps-clocks demos. Impulse now has its full student/private lab, with independent signed integration and sampling comparisons.
- The strict Mystery-only fit-hiding checks now pass for pendulum, rotational-dynamics, resistivity and wire-force. Old validation reports retain their dated failures with resolution addenda.

## Integration still pending

The map has an optional `activities` array, referenced by `sections[*].activities`, alongside the unchanged real-demo catalog. The additive schema remains version 1. Claude's current generator does not yet consume this field. A concrete patch is supplied at [standalone-course-activities.patch](validation/requests/standalone-course-activities.patch): apply with `git apply --unidiff-zero` to `tools/courses.py`, then regenerate course pages. Patch applicability and an in-memory render were checked; the proposed renderer links all three standalone cards, keeps counts separate, and leaves Physics II output unchanged. GPT did not edit generated pages or the generator.

Direct student files are available on this branch; do not call the worksheet cards live until that integration is deployed. Instructor answers remain only in TeacherKeys.

## Limits that a coverage map cannot close

Continuous-body inertia derivations, unrestricted three-dimensional motion, the pendulum's above-horizontal string setting and the viscometer's full high-Re empirical model retain their documented scope limits. Impulse summary CSV still includes calculated answers in Blind; the lab explicitly uses raw force CSV before final comparison. Browser/download/phone/keyboard and Steve/TA acceptance remain open. No public main merge by GPT.

See [gap-closing evidence](validation/PHYSICS_I_GAP_ACTIVITIES_2026-10-22.md) and [the full map](textbook-map.json).
