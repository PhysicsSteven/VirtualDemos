# Closing the Physics I resource-map gaps — 2026-10-22

Source main `9bbb97b3a281e72c2f853a18f49b14e95b79e25f` read and merged first. Claude's six gap demos and four Mystery fit-hiding fixes retained. No demo HTML, drawing code, course generator or generated page edited by GPT. Private guides/references: TeacherKeys [197cf5d](https://github.com/PhysicsSteven/TeacherKeys/commit/197cf5d51f40021ce7702cdfe15f086c4157b747). No public main merge.

## Implemented writing and mapping

- **impulse:** full lab with independently integrated raw F(t), opposite sensor/cart impulse signs, stiff/soft/clay comparison, kinetic-energy loss and sampling effects. Summary CSV contains calculated answers even in Blind; the procedure defers it until after raw integration. No claim that the summary export is answer protected.
- **measurement-and-units:** short activity for Vol. 1 §§1.1–1.4: testable measurement, scale, SI standards/conversions, area-unit conversion and dimensional checks that cannot determine dimensionless coefficients.
- **estimation-and-evidence:** short activity for §§1.5–1.7: explicit Fermi boundary/assumptions, scenario/sensitivity calculations, uncertainty versus rounding and a structured constant-acceleration solution. No invented student observations.
- **energy-sources:** reading/data activity for §8.5: conversion chains, energy versus power, efficiency and interpretation limits. Uses a fixed 2024 EIA input snapshot, separate from hypothetical plant assumptions.

All four have private answers, reference calculations, model/measurement limits and a 100-point rubric. Removed outdated Mystery-disclosure workarounds from current student/private companions after executing strict tests of the fixes.

The map now represents **85/85 Physics I textbook sections with scoped resources**: 27 real demos (12 labs and 15 lecture demos), plus two worksheets and one reading. None of the standalone activities is a fake catalog demo. A usable mapping is not full textbook mastery or release acceptance. The real catalog remains 84 demos; all 209 section records preserved.

## Additive schema and course integration

Schema version remains 1. Optional root `activities` entries are separate from `demos`; sections reference them via optional `activities` arrays. The map contract validates unique IDs, kinds, source files, course membership and reciprocal section references. Missing-status checks now consider both resource types. Existing demo URLs, QR codes and later assignments unchanged.

The current course generator ignores the new optional field. A concrete integration proposal is at `requests/standalone-course-activities.patch`. Executed `git apply --unidiff-zero --check` successfully, and compiled/executed the patched generator **in memory**: all three standalone card links and the impulse link present; separate worksheet/reading counts; no instructor links; Physics II generated output byte-identical to the unpatched renderer. No patched generator or generated HTML written to the repo. Claude must apply/adapt this patch and regenerate/deploy before the cards can be called live.

## Public data provenance

Primary source: EIA Electric Power Annual, [Table 3.1.A](https://www.eia.gov/electricity/annual/html/epa_03_01_a.html), 2024 annual row, retrieved 2026-10-22. Checked the year, units, total, selected category values and net pumped-storage entry against that primary table. Stored only public inputs in `curriculum/data/eia-electricity-2024.json`. Scope is utility-scale generation, all sectors, excluding small-scale generation. This is a dated teaching snapshot, not a latest-year statement. The reading also links EIA's [electricity explanation](https://www.eia.gov/energyexplained/electricity/electricity-in-the-us.php) for pathways and secondary-energy context.

Calendar 2024 has 366 days and 8,784 hours; the generator/checker verifies that interval independently. Input units are thousand MWh. No generation share is presented as a share of all national energy use, no actual plant efficiency inferred from generation alone, and no invented confidence intervals or environmental rankings supplied. Derived answer tables remain private.

## Executed tests

Node v24.19.0, from repo root:

| Core suite under curriculum/validation/ | Groups passed |
|---|---:|
| test_impulse.cjs | 4 |
| test_elevator.cjs | 3 |
| test_nonuniform-circular.cjs | 3 |
| test_center-of-mass.cjs | 3 |
| test_gravity-near-earth.cjs | 5 |
| test_gps-clocks.cjs | 5 |
| test_pendulum.cjs | 4 |
| test_rotational-dynamics.cjs | 4 |
| test_resistivity.cjs | 4 |
| test_wire_force.cjs | 5 |

Ten core suites: **40 groups passed**. Also executed:

- `node curriculum/validation/test_physics1_lab_workflows.cjs --strict-mystery`: **4 groups passed**.
- `node curriculum/validation/test_em_lab_workflows.cjs --strict-mystery`: **3 groups passed**.

Total **47 groups in 12 affected suites passed**, including the four previously failing Mystery conditions. These execute actual fit functions with output stubs; no browser interaction implied. Did not rerun the entire collection.

Contracts/checks also passed:

- `test_textbook_map.cjs`: 84 real catalog demos, 209 section records; standalone references valid.
- `test_physics1_packages.cjs`: 12 lab packages, three standalone activities, expected headings/questions/one data table, notes for all 27 Physics I demos, 63 exact control labels across the four newest labs.
- Three standalone-activity structure checks and four new private guide answer/rubric checks.
- In-memory course-renderer proposal and patch applicability as above.
- `node --check` on modified Node contracts and `git diff --check`.

Independent private calculations: `generate_gap_activity_references.py <checkout>` imports no demo code, computes piecewise impulse references, rounded sampling, conversions, bounds, calendar-year energy/power and the explicitly hypothetical energy balance. `check_gap_activity_references.cjs <checkout>` compares source/export impulse values and independently checks activity arithmetic: **78 comparisons passed**. Generator/JSON/checker are in TeacherKeys' textbook-alignment validation directory.

## Remaining limits

No browser executable available from the earlier launch attempt in this session; no new browser/CSV download/phone/keyboard/deployment pass claimed. Browser CI remains off; no remote CI result claimed. Steve/TA review remains necessary for readability, workload, usability and acceptance. Pendulum string-domain and viscometer high-Re scope notes remain; mapping coverage does not resolve them.

Claude integration request is recorded in COLLABORATION.md. The next step is applying the standalone course-card patch, copying the four student files/input snapshot/map, regenerating pages and reviewing the resulting course flow. No main merge is authorized by this writing pass.
