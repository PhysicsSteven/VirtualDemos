# Resistivity and current-balance lab packages — 2026-10-22

Source main: `7dab492884c004636ade7fb68d02edcc4ff172ab`, merged before this work. All 76 catalog entries and Claude's pendulum/rotational-dynamics additions preserved. No demo HTML, drawing code or generated course pages edited by GPT. Private guides/references: TeacherKeys commit [944a5d9](https://github.com/PhysicsSteven/TeacherKeys/commit/944a5d935aabe072b453bc29a8248e881f2d3b83). Nothing merged into public main by GPT.

## Written and aligned

- **resistivity:** full student/private lab covering length fits at two diameters, a current-independence check, temperature dependence, unit conversion and uncertainty. Mystery properties are synthetic model inputs, not an identification standard for a real alloy. Model is uniform temperature, ideal four-wire sensing and no self-heating.
- **wire-force:** full student/private current-balance lab with signed-current fits at two lengths, angle scan and a short loop-torque interpretation activity. Distinguishes the magnet reaction, wire force and signed balance load; avoids field inversion at zero angle. No quantitative motor lab claimed.
- **forces/stress-strain:** obsolete workaround text removed from student/private guides after Claude's source fixes. Source reviewed for held velocity, timing invalidation, impact splitting, Mystery fit hiding and current-specimen row filtering. Earlier report retains its original findings with a dated resolution addendum.

Each new lab uses the approved plain style, one reusable table, prelab, real-apparatus safety, procedures, analysis, uncertainty and questions. Private companions answer all questions and include reference calculations and 100-point rubrics.

## Local tests actually executed

Node v24.19.0. Commands run from the public repository root:

| Command | Result |
|---|---|
| `node curriculum/validation/test_resistivity.cjs` | 4 groups passed |
| `node curriculum/validation/test_wire_force.cjs` | 5 groups passed |
| `node curriculum/validation/test_em_lab_workflows.cjs` | 2 groups passed |
| `node curriculum/validation/test_forces.cjs` | 8 groups passed |
| `node curriculum/validation/test_stress_strain.cjs` | 6 groups passed |
| `node curriculum/validation/test_textbook_map.cjs` | Passed, 76 catalog entries and 209 sections |
| `node curriculum/validation/test_em_lab_workflows.cjs --strict-mystery` | **Failed**, calculated answers disclosed for resistivity and wire-force with Mystery on / Blind off |

**25 supported groups passed; the additional strict requirement failed.** The new workflow test executes each demo's actual fit function in a VM with output/DOM stubs. It checks current-setting row selection, Celsius-reference calculation and grams-to-newtons conversion. It is not a browser test. Default CI discovery runs the supported checks; the strict mode remains an explicit unresolved gate, not part of the green count. No remote CI result claimed.

Independent private calculations: `generate_em_bench_references.py` imports no demo code; it computes ideal equations, instrument rounding and reference regressions into `EM_BENCH_REFERENCE_RESULTS.json`. `check_em_bench_cores.cjs <checkout>` compared those outputs with extracted cores: **95 comparisons passed**. The existing `check_new_mechanics_cores.cjs <checkout>` was rerun after main's changes: **97 mechanics comparisons passed**. Reference scripts/results are in TeacherKeys' textbook-alignment validation directory. These check the specified models, not empirical material values or real instruments.

Document checks passed for both new packages and both revised mechanics companions: required headings, one table each, 2–3 prelab questions, 3–4 concluding questions, private answers/rubrics and **46 exact bold virtual-control names** in current source. `node --check` on the new suite and `git diff --check` passed. No student solution table placed in the public repo.

## Remaining source requests

Both new demos already have Mystery-aware property-readout guards: resistivity `hidden()`, wire-force `hideB()`. Their fit-output guards instead use only `S.blind`. The strict test executes those real fit functions and confirms the fitted property is shown with Mystery on and Blind off. Requested minimal change: share the corresponding Mystery-aware guard. Handouts explicitly enable Blind meanwhile. Map marks both `needs-feature` while linking the completed handouts.

Wire-force stored rows lack magnet identity; changing/reselecting the magnet can mix fields at the same length/angle. The lab keeps one magnet and exports/clears between scans/fields. This source limitation is documented, not an automatically detected dataset error. Resistivity fit filtering depends on the current settings, so the handout also saves separate scans.

## Limits and next work

Chromium launch already failed in this session because its executable is absent; no new browser installation or launch attempted in this pass. No download, phone, keyboard, deployed-page or classroom acceptance pass claimed. Browser CI stays off. Source-function tests do not replace those checks. Claude's two answer-hiding fixes, course-page regeneration and Steve/TA acceptance remain open.

Next handouts in coordination: pendulum, then rotational-dynamics. Read fresh coordination/main before starting; do not edit demo HTML or merge public main without Steve's approval.


## Follow-up: Mystery fit hiding fixed on main 9bbb97b

Claude implemented the Mystery-aware guards. GPT merged that main and executed both workflow suites with --strict-mystery: all seven groups passed across the Physics I and E&M workflow suites. Obsolete workaround statements removed from current student/private guides; prior failures above remain source-pinned historical evidence. No new browser pass claimed. See PHYSICS_I_GAP_ACTIVITIES_2026-10-22.md.
