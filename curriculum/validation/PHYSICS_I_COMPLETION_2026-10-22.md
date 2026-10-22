# Physics I written-package checkpoint — 2026-10-22

Final incorporated main: `db5f27b3eeab45a0c24f9fa9981e5630a45c713c`. Earlier 19-suite run used main `7edba35218feaf714ae3e70301427433b8eecb6b`; the subsequent main merge changed only viscometer among demo HTML, so the tested source of those 19 demos is retained. New viscometer checks executed separately. No demo HTML, drawing code or generated course page edited by GPT. Private guides/reference files: TeacherKeys [976cd1c](https://github.com/PhysicsSteven/TeacherKeys/commit/976cd1cfa5c566fc2685c60e46f2dcf45f0e20cc).

## Written work

Three new student/private packages complete the written companions for **all 11 existing Physics I labs** at this snapshot:

- **pendulum:** length fit and g, finite-amplitude bias, mass independence, amplitude scan and uniform rod comparison. String-bob route restricted to release at or below 90°. Conservative large-angle references use independent Simpson quadrature rather than the source AGM implementation.
- **rotational-dynamics:** empty and loaded inertia fits with bearing friction, object inertia by subtraction, spool-radius check and full endpoint energy accounting. Uses tension torque rather than mgr and notes correlated transformed-axis errors.
- **viscometer:** two-tube slow-flow measurements with wall-corrected CSV fits, Reynolds-number selection and model-limit diagnostics. Raw built-in fit explicitly treated as apparent viscosity. Unknown extension is conditional on an adequate low-Re range.

All 21 Physics I demos have teaching-note sources. Lecture demos retain that role. The student/guide structure and private answer/rubric checks passed; new 47 bold virtual-control labels matched source. No private solution tables published.

See [unit-by-unit status](../PHYSICS_I_STATUS.md). Of 85 textbook sections in the course, 70 have usable scoped mappings, 5 are partial and 10 remain missing. Writing completion for existing apparatus does not close those gaps or certify the whole syllabus.

## Local supported tests

Node v24.19.0. These commands were actually run from the repository root:

| Suite (under curriculum/validation/) | Groups passed |
|---|---:|
| test_vectors.cjs | 4 |
| test_motion_graphs.cjs | 7 |
| test_projectile_drag.cjs | 12 |
| test_circular_motion.cjs | 4 |
| test_forces.cjs | 8 |
| test_potential_curves.cjs | 8 |
| test_collisions.cjs | 14 |
| test_rocket.cjs | 4 |
| test_rotation.cjs | 6 |
| test_kepler_orbits.cjs | 8 |
| test_catenary.cjs | 7 |
| test_equilibrium.cjs | 4 |
| test_stress_strain.cjs | 6 |
| test_fluids.cjs | 13 |
| test_springs.cjs | 10 |
| test_pendulum.cjs | 4 |
| test_rotational-dynamics.cjs | 4 |
| test_gyroscope.cjs | 6 |
| test_double_pendulum.cjs | 6 |
| test_tides.cjs (new) | 3 |
| test_viscometer.cjs | 6 |
| test_physics1_lab_workflows.cjs (new) | 3 |

**147 supported groups across 22 suites passed.** This covers the current Physics I demo set, not all conditions or the full project. New tides suite extracts the legacy physics block in memory and checks differential gravity, far-field scaling and ideal equilibrium-ocean ranges; it does not validate coastal tide forecasts. New workflow suite executes actual fit functions with output stubs to check filtering, SI reconstruction and raw-versus-corrected fit semantics. It is not a browser test.

Separate contracts passed:

- `node curriculum/validation/test_textbook_map.cjs`: 78 catalog entries and 209 section records.
- `node curriculum/validation/test_physics1_packages.cjs`: all 11 current Physics I lab handouts mapped, expected student headings/question counts/one data table, notes present for all 21 demos, and 47 exact new control labels.
- Private local check: all 11 Physics I guide files have prelab answers, concluding answers and a rubric. Existing guides use more than one rubric heading style; the check accepts those styles.
- `node --check` on the three new validation scripts and `git diff --check` passed.

Early harness assertions used a length string inconsistent with the actual two-decimal captured format, and the extended viscometer harness initially requested a function only present in the turntable core. Both test-fixture errors were corrected before successful supported runs; they were not demo defects.

## Independent calculations

Private `generate_p1_completion_references.py` imports no demo code: composite Simpson quadrature for pendulum periods and independently eliminated Newton/Euler equations for turntable motion. `check_p1_completion_cores.cjs <checkout>` compared with extracted source: **160 comparisons passed**, including four integrator/interpolated-gate comparisons against the independent period integral.

Private `generate_viscometer_references.py` solves the low-Re Oseen force balance by a stable quadratic root, independently of the source's terminal-speed bisection. `check_viscometer_cores.cjs <checkout>`: **42 comparisons passed** for selected small glass balls in glycerol, both tubes, terminal/gate times and rounded-data corrected fits. The wall polynomial is a specified model input, not an independently literature-audited result. No full high-Re empirical-curve validation claimed.

Total **202 new independent comparisons passed**. Reference scripts, JSON, numerical solution tables and rubrics stay in TeacherKeys only.

## Unresolved checks and source requests

`node curriculum/validation/test_physics1_lab_workflows.cjs --strict-mystery` **exits 1**: pendulum and rotational-dynamics disclose fitted g/I when Mystery is on and Blind is off. Default supported checks pass; this strict requirement is not counted as green or silently included in the supported total. Requests in COLLABORATION: use the existing Mystery-aware hideG()/hidden() guards. Student procedures explicitly enable Blind meanwhile. Viscometer's corresponding Mystery-aware fit guard is exercised and passes.

Other source-scope requests: string-bob release above horizontal requires slack dynamics or an explicitly rigid constraint; the Simple pendulum hint should distinguish the small-angle 2.006 s from the actual 8° period near 2.009 s. The handout stays in the physically taut string range and explains finite amplitude. Viscometer's built-in raw fit should be understood as apparent viscosity; wall correction does not cure high-Re/transient invalidity.

## Acceptance and coordination

The temporary workspace interruption was recovered; the local draft commit survived and current-main merge resumed. Browser executable remains unavailable from the earlier launch attempt in this session; no browser installation or new browser pass claimed here. CSV download, keyboard/phone interaction, generated course-page/deployed routing and Steve/TA classroom acceptance remain open. Browser CI stays off. No remote CI result claimed.

Claude should copy the three new handouts and updated map/gaps, then regenerate the course pages when appropriate. GPT made no public main merge. The next course-completion decision is the remaining missing/partial topic list, with demo source work still Claude-owned; do not confuse the written-package checkpoint with release readiness.


## Follow-up: Mystery fit hiding fixed on main 9bbb97b

Claude implemented the Mystery-aware guards. GPT merged that main and executed both workflow suites with --strict-mystery: all seven groups passed across the Physics I and E&M workflow suites. Obsolete workaround statements removed from current student/private guides; prior failures above remain source-pinned historical evidence. No new browser pass claimed. See PHYSICS_I_GAP_ACTIVITIES_2026-10-22.md.
