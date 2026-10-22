# Three new Physics I lab packages — 2026-10-22

Source: main `3a13c79bc5f7bc330d05eaffe16fce44c3b1451b`, merged before source-dependent work. All 74 catalog demos retained. GPT changed no demo HTML, drawing code or course-page output. Instructor solutions, rubrics and reference answers are private in TeacherKeys, commit [a28957f](https://github.com/PhysicsSteven/TeacherKeys/commit/a28957f103e2b49dae1e5d166f338a3e9954a68d).

## Implemented

- **motion-graphs:** turning motion, displacement versus distance, stage areas, free fall and position/velocity graph matching. Single-stage fit constraint and CSV vertical-coordinate convention explicit.
- **forces:** mystery-surface static threshold brackets, kinetic friction from timed slides, transformed fit, work/energy and third law. Procedures distinguish downhill acceleration magnitude from source's uphill-positive convention. Timer capture must precede any setting edit.
- **stress-strain:** two-diameter elastic fits, unknown modulus, unloading evidence and a yield-onset bracket. Explicit conversion of N/mm slopes, wire-history separation and Blind requirement.

Each student lab has objectives, equations, prelab, real-apparatus safety, procedures, one reusable data table, analysis, uncertainty, questions and submission instructions. Each private companion answers every question, gives reference calculations/model limits and a 100-point rubric. Work is written and source/numerically checked; none is classroom accepted.

## Executed checks

Node v24.19.0 in this environment. Commands from VirtualDemos root:

| Command | Result |
|---|---|
| `node curriculum/validation/test_motion_graphs.cjs` | 7 groups passed, including the added free-fall apex/energy check |
| `node curriculum/validation/test_forces.cjs` | 8 groups passed |
| `node curriculum/validation/test_stress_strain.cjs` | 6 groups passed |
| `node curriculum/validation/test_textbook_map.cjs` | Passed: 74 catalog entries, 209 sections |

The existing all-Node GitHub workflow discovers these files automatically. No workflow modification needed. These are scoped local results, not a new full-collection or remote CI run.

Private executed independent checks: `generate_new_mechanics_references.py` uses Python equations without importing the demo; its JSON is compared with separately extracted demo cores by `check_new_mechanics_cores.cjs <checkout>`. **97 comparisons passed**, covering stage joins, turning motion, free-fall trajectory/fit, incline thresholds/times/work, rounded elastic fits, diameter scaling and plastic unloading. Absolute/relative tolerances are in the private script. These validate the specified simplified models, not real material datasets.

Document checker passed for all three: required section order, one table, 2–3 prelab questions, 3–4 concluding questions, paired private answers/rubric, and **34 exact bold virtual-control labels** found in current HTML source. No browser DOM interaction is implied by this text check.

## Source findings requiring Claude

1. **Mystery modulus disclosure:** stress-strain `fit()` suppresses calculated Y only under `S.blind`; its readouts use `hidden()`, which also includes Mystery material. Selecting Mystery alone does not suppress the fitted answer. A source probe confirmed the fit uses `S.blind` and does not call `hidden()`. Handout explicitly enables Blind. Requested fix: share the same hiding condition.
2. **Held kinetic-energy display:** forces readouts use `v = S.run ? S.v : 0`. Evaluating that actual source expression with held state m=5 kg, stored v=2 m/s gives displayed K=0 J instead of stored-state K=10 J. This is a source-expression reproduction, not an executed browser workflow. Handout uses running pre-impact snapshots; requested fix preserves physical K while paused.
3. **Stale timing capture:** forces slider handler resets `S.timing` but leaves `S.lastGate`; capture reads lastGate with the current settings. Source trace establishes a possible mismatched row after editing controls. Handout captures before edits and reruns every timing measurement. Requested fix invalidates completed times on relevant edits. Not reproduced through a browser.
4. **End-stop displacement/work:** forces frame accumulates work for the complete substep, then clamps the overshot position and subtracts its kinetic energy as stop work. Work and kinetic energy still cancel algebraically, but external work corresponds to the overshot path rather than the displayed clamped endpoint. Source inspection only; magnitude depends on timestep/state. Requested fix splits the step at impact. Pre-impact calculations avoid this endpoint error.

All requests are in COLLABORATION.md. No green core-suite result overrides these UI findings. Map: motion-graphs `usable` for the scoped activity; forces and stress-strain `needs-feature`, with handouts linked and limitations stated. Section coverage statuses describe topics, not release readiness.

## Browser and release limits

Attempted Playwright Chromium launch failed: executable absent at `/root/.cache/ms-playwright/chromium_headless_shell-1234/chrome-headless-shell-linux64/chrome-headless-shell`. No browser, download, phone-layout or keyboard workflow passed in this pass. Browser CI remains off as requested. No deployment check or remote CI pass claimed. Claude's source fixes, local browser review, course-page regeneration and Steve/TA acceptance remain open. Nothing merged into main by GPT.

## Next queue

Physics II resistivity and current-balance (`wire-force`) student/private packages against fresh main. Lecture demos retain short teaching notes rather than full student labs. Read coordination before starting and preserve newer map additions.
