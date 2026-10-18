# Handoff for Claude and other collaborators

**Branch:** `curriculum/virtual-lab-starter-kits`  
**Scope:** Curriculum-only additions. Existing `demos/` source files unchanged.

## Completed
- 33 student lab starters and 33 instructor guides under `curriculum/labs/`.
- Analytic benchmarks, measurement plans, grading rubrics, and validation checklist.
- No source-code modifications or claims of browser-executed validation.

## Required follow-up
1. Open every student guide and align procedure with the **actual** simulation UI. Several generic instructions may request measurements not directly exposed.
2. Repair any relative demo links; canonical URLs are `https://physicssteven.github.io/VirtualDemos/demos/<slug>.html`.
3. Add exact control names, presets, default settings, and screenshot-based measurement instructions.
4. Expand instructor keys with reproducible source-derived expected results, uncertainty budgets, and solutions.
5. Run physics tests before marking any guide validated.
6. Ensure instructor keys are not linked in the public student-facing website if used for graded assignments.

## Notable source-review findings
- `rc-circuits.html` already includes toggles for **τ marks** and **Exact curve**. Earlier recommendations to add those controls were unnecessary.
- The RC physics core already computes battery work, Joule heat, stored energy, and mechanical work from capacitance changes; it is designed to run outside the DOM.
- `photoelectric.html` uses a linear retarding-voltage current model; this is a simplification, not a general emission-spectrum prediction.
- `ideal-gas.html` models a 2D gas; pressure is N/m, not Pa.
- `gauss-law.html` can report agreement to all double-precision digits; distinguish small residual from independently demonstrated quadrature accuracy.

## Collaboration workflow
Validate first, change code second, and independently retest after changes. Keep student labs, instructor keys, and validation evidence in separate commits when possible.
