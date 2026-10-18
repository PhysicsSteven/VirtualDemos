# VirtualDemos Release Gate

**Purpose:** Bring the entire Physics I / Physics II collection to an internally validated release candidate before TA classroom acceptance testing. Astronomy-specific expansion and application packaging are explicitly deferred.

## Status vocabulary
- **Starter:** initial experiment draft; may not support quantitative student work.
- **Implemented:** simulation and laboratory content exist; not fully verified.
- **Physics-validated:** equations, units, limiting cases, conservation laws and reference values independently checked.
- **Software-validated:** automated tests and browser controls verified, including export and accessibility checks.
- **Release candidate:** physics/software checks pass, student instructions and instructor key match, and no known blocking issues remain.
- **TA-accepted:** only after the user's end-of-project TA pilot and resulting revisions.

Never call a demo release-ready merely because it renders, and never describe an unexecuted test script as passing.

## Required checks for each demo
1. **Scope:** identify course, learning objectives, prerequisites, assumptions, limitations and nonphysical idealizations.
2. **Physics:** independently derive/check governing equations, units, conservation relations, boundary cases and numerical reference results.
3. **Numerics:** assess convergence, stability, deterministic repeatability, extreme parameter values and singular configurations.
4. **Student experience:** ensure every required measurement is possible without revealing reference answers; record settings and units; export data if fitting is required.
5. **Instructor key:** solve every assigned task, include actual reference numbers or explicitly flag unavailable data, expected uncertainties, conceptual traps and grading rubric.
6. **Interface:** labels and controls are usable with keyboard, mobile sizing and screen-reader-friendly text alternatives; no silent failures.
7. **Automation:** add executable regression tests; verify they actually run in CI; check the deployed browser behavior separately.
8. **Release:** all blocking issues resolved, reproducible validation evidence documented, links checked and student/teacher materials synchronized.

## Current first-unit queue: Electricity and magnetism
1. **Transient circuits** — implemented, analytic-core spot checks passed (10/10 independently executed); full Node suite, CI, oscilloscope interaction, export and browser tests still pending. Do not label software-validated.
2. **Gauss's law** — full lab draft exists; numerical boundary and convergence checks, browser and key verification pending.
3. **Faraday induction** — design and validate quantitative flux/EMF experiment and grading key.
4. **Capacitors and dielectrics** — develop charge/voltage-controlled energy experiments.
5. **AC circuits** — fit impedance, phase and resonance curves, compare with transient response.
6. **Remaining E&M demos** — inventory and apply the same gate.

## Work cadence
Finish one demo's physics, instrumentation, student lab, instructor key and automated tests before moving on to the next. Track blockers transparently. Avoid requiring the user or TAs to perform interim acceptance testing. After E&M, proceed to mechanics, waves/optics/thermodynamics and modern physics; astronomy last.

## Deferred work
- Desktop installer/PWA: package the final web codebase after scope stabilizes; no duplicate simulation implementations.
- TA crash test: end-of-project acceptance stage, not a development dependency.
