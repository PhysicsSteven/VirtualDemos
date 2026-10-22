# Experiment-first curriculum roadmap

**Design decision:** Write rigorous experiments first. Add simulation controls and data features afterward to satisfy the experimental requirements. Avoid weakening the experimental questions to match the current UI.

## Levels of completeness
- **L0 Starter:** short concept, procedure and analytic reference (remaining starter guides).
- **L1 Full experiment:** derivation, controlled procedure, data sheets, plots, uncertainty, questions, grading key and independent benchmark.
- **L2 Instrumented:** simulation provides all required measurements, controlled data export, and hidden-theory mode.
- **L3 Validated:** browser workflow and numerical tests pass; evidence and commit SHA recorded.

## Completed L1 pilot experiments
1. **RC Circuits:** measure C from charging time constants; independent exponential fit; discharge with alternate resistance; complete energy ledger. Features requested: CSV, time stepping, hideable theoretical answers.
2. **Photoelectric Effect:** determine h and work function by linear regression; intensity controls; threshold study. Features requested: blinded stopping potential, virtual ammeter, CSV and seeded noise.
3. **Gauss's Law:** test flux invariance across geometries; superposition; convergence as charges approach a surface. Features requested: quadrature tolerance controls, exact geometry, CSV and error plots.

**Important:** L1 means the document is a substantive instructional design, not a verified UI workflow or a claim of executed physics tests.

## Priority policy — Physics I and II first

The college's current course offerings emphasize introductory physics rather than astronomy. Allocate development and review effort accordingly. Existing astronomy starter kits remain in place, but **do not prioritize expanding them** until the core laboratory curriculum is robust.

**Tier 1 — Electricity and magnetism:** Transient RC/RL/LC/RLC circuits, Gauss's law, Faraday induction, capacitors and dielectrics, magnetic force, Coulomb fields, DC circuit building, AC impedance and resonance, electromagnetic waves.

**Tier 2 — Mechanics and oscillations:** Projectile motion and drag, collisions, springs, rotational dynamics, potential energy curves, double pendulum and chaos, fluids.

**Tier 3 — Waves, optics and thermal physics:** Standing waves, Doppler shift, polarization, diffraction, thin films, optics bench, ideal gas, heat engines, blackbody radiation as a thermal-physics experiment.

**Tier 4 — Modern physics:** Photoelectric effect, Rutherford scattering, Compton scattering, radioactive decay, atomic spectra, hydrogen orbitals, quantum waves, nuclear binding energy, gamma spectroscopy, Franck–Hertz, lasers, spacetime.

**Tier 5 — Astronomy and astrophysics (deferred):** HR diagrams, stellar structure, white-dwarf cooling, exoplanets, distance ladder, galactic rotation curves, black holes, seasons, moon phases, tidal astronomy and astronomy-specific orbital applications. Keplerian mechanics can still be developed under Tier 2 if taught in mechanics.

## Next full experiments — recommended sequence
1. **Transient circuits:** finish validation, energy partition, damping-peak capture and lab instrumentation.
2. **Faraday induction:** infer magnetic flux rate from induced EMF; validate sign conventions.
3. **Capacitors:** dielectric insertion, series/parallel networks and energy at fixed Q versus fixed V.
4. **AC circuits:** measure resonance, phase angle, bandwidth and quality factor.
5. **Projectile motion:** infer g, then estimate drag parameters using trajectory fits.
6. **Collisions:** recover restitution and test momentum/energy budgets.
7. **Springs:** infer k from T² versus m; compare damped and driven response.
8. **Ideal gas:** test the two-dimensional equation of state and counting fluctuations.
9. **Optics:** diffraction grating and polarization quantitative experiments.
10. **Modern physics:** complete photoelectric and radioactive decay instrument-style experiments.

Gauss's law and Photoelectric Effect already have full experiment drafts; validate and instrument them alongside this sequence.

## Common feature contract for every L2 simulation
- **Measurement notebook:** capture rows of current independent variables, observables, units, time, preset, simulation version and uncertainty model.
- **Export:** CSV with header metadata, canonical SI units, raw (not just rounded display) values, and reproducible random seed where applicable.
- **Lab mode:** hide theory overlays and fitted/known answers; reveal them only after students make a prediction and collect data.
- **Reset and replay:** deterministic initial conditions and single-step/scrub where dynamics allow.
- **Graphing:** axis labels and units, fit with residuals, uncertainty and downloadable image/data.
- **Accessibility:** keyboard-only equivalent for pointer interactions, readable data table for canvas plots, reduced-motion option.
- **Instructor controls:** locked presets, assignable parameter sets, versioned answer-key generation; never expose instructor solutions on the public student site by default.

## Review gate
Before promoting a lab to L2, verify that all measurement requests are feasible using real controls or explicitly log required features. Before promoting to L3, record analytic/numerical reference values, tolerance, actual output, regression evidence, and accessibility testing.

## Collaboration
Claude and ChatGPT can both implement features, but the author of a change should not be the only reviewer. Keep physics-code changes on separate commits from manual revisions.

## Executed sprint update — 2026-10-18

RLC, Faraday, capacitors and AC now have full quantitative laboratory/key revisions and executed numerical checks. RLC/Faraday have new measurement tools; do not promote them automatically to L3 because accessibility and independent review gates remain (pinned Chromium/Firefox CI now passes). Capacitors/AC use manual tables and still need L2 export/theory hiding. Gauss remains a design draft with known source issues reserved for Claude; its unapplied proposal is not a delivered feature. See [scope and evidence](validation/SPRINT_2026-10-18.md). Continue remaining E&M after resolving these specific gates.

Second-pass update: RC, Faraday, capacitors, photoelectric and Gauss manuals now distinguish current-main controls from requested/branch-only instrumentation. Circuit-builder, Coulomb and diffraction-grating gained core regression coverage. This is validation breadth, not automatic L2/L3 promotion; [known failures and evidence](validation/SECOND_PASS_2026-10-18.md) remain explicit.

Audit checkpoint: [teaching keys](https://github.com/PhysicsSteven/TeacherKeys/blob/main/curriculum/curriculum-virtual-lab-starter-kits/curriculum/validation/KEY_AUDIT.md) and [gamma published comparison](validation/GAMMA_PUBLISHED_COMPARISON.md) now have reproducible partial evidence. Gamma remains a starter and is not experimentally calibrated; remaining keys and measured distance validation are open.


2026-10-19 modern-first writing pass: full student/teacher packages drafted for spin resonance, Foucault c, electron e/m and diffraction; RC/AC/RLC now use unified Circuits; acoustics and Franck–Hertz packages added. Instructor material stays in private TeacherKeys. These are authored/manual-aligned packages with scoped Node evidence, not automatic release-level promotion. [Delivery and open limits](validation/LAB_WRITING_2026-10-19.md).


## Weekend checkpoint — 2026-10-22

Follow the current COLLABORATION.md queue: independent review of nine newest demos, then the listed E&M handouts after Claude's feature notes, followed by mechanics after its batch. Initial local evidence: 126 supported Node groups passed, including new DNA topology/geometry and Lagrange frame checks; strict DNA TER export check fails. The broader independent review remains partial. [Scope and next checks](validation/WEEKEND_REVIEW_2026-10-22.md). No release level upgraded.


## Course alignment — 2026-10-22

Use textbook-map.json for the two course pages; TEXTBOOK_GAPS.md explicitly separates missing and partial topics. Required Physics II ends at Maxwell/EM waves; basic optics is optional. Ch. 12 follows Gravitation in Physics I. Nine Physics II packages now have OpenStax references and current measurement instructions/private guides; these are source/numerical checked, not classroom accepted. Existing Physics I activities are next; do not fill missing units in this writing pass.


## Physics I alignment delivered — 2026-10-22

Seven existing Physics I activities now aligned (five labs and two lecture worksheets); private guides/references in TeacherKeys f5b1575. No missing demos built. Sixteen packages total across Physics I/II; 149 numerical groups in 14 suites passed, plus map contract and independent-reference checks. Browser/classroom acceptance remains open. Updated map/gaps need Claude’s recopy and course-page regeneration; verify deployed handout HTML routes. See validation/TEXTBOOK_ALIGNMENT_2026-10-22.md. No main merge authorized.

## New Physics I labs delivered — 2026-10-22

Motion-graphs, forces and stress-strain now have student/private instructor packages against main 3a13c79. Local results: 21 core groups, 97 independent comparisons, map contract and 34 exact control labels passed. Browser launch blocked by absent Chromium. Forces/stress-strain remain needs-feature for reported UI defects; no release promotion. See [evidence and requests](validation/NEW_MECHANICS_LABS_2026-10-22.md). Next handouts: resistivity and wire-force, after fresh coordination/main sync. No demo edits or main merge by GPT.


## Resistivity and current balance — 2026-10-22

Main 7dab492 merged; two student/private lab packages written and 95 independent comparisons passed. New source-fit tests pass supported row filtering/unit paths; strict Mystery-only answer hiding fails for both benches and is requested from Claude. Removed old forces/stress-strain workarounds after source fixes, reran their 14 groups and 97 reference comparisons. Total this pass: 25 supported groups, map contract (76 demos), 46 control-label checks. Browser remains unavailable; no remote CI/classroom acceptance claim. No demo edits/main merge. Evidence: validation/EM_BENCH_LABS_2026-10-22.md. Next: pendulum and rotational-dynamics.


## Physics I written-package checkpoint — 2026-10-22

Merged main db5f27b, including Claude’s viscometer. Added full pendulum, rotational-dynamics and viscometer student/private packages. All 11 current Physics I labs now have written companions; 21 demos have notes. Inventory: PHYSICS_I_STATUS.md. Ten textbook sections remain missing and five partial; do not imply syllabus completion. Executed: 147 supported groups in 22 scoped suites, map/package contracts, 202 independent comparisons and 47 new exact control labels passed. Strict Mystery fit hiding fails for pendulum/rotational-dynamics; source requests in COLLABORATION. No browser or classroom acceptance. Evidence: validation/PHYSICS_I_COMPLETION_2026-10-22.md. No demo edits/main merge by GPT.


## Final Physics I resource mapping — 2026-10-22

Merged main 9bbb97b; four new student/private packages: impulse, measurement-and-units, estimation-and-evidence, energy-sources. Added optional standalone activities to the map, separately from the real-demo catalog. All 85 Physics I sections have scoped resource mappings, with 12 lab packages and three standalone activities. Renderer integration is supplied as a tested patch for Claude, not applied to owned generator/pages. 47 affected groups and 78 independent comparisons passed; strict Mystery hiding now passes for all four fixed demos. Source/bibliographic/acceptance limits remain documented. See validation/PHYSICS_I_GAP_ACTIVITIES_2026-10-22.md. No demo edits/main merge.
