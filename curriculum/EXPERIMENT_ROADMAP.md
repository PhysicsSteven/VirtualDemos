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

## Next L1 experiments — ordered by instructional value
4. **Blackbody Radiation:** estimate Wien constant and Stefan–Boltzmann exponent from independent sweeps; require peak detector, spectral integration, and fit export.
5. **Kepler's Laws:** infer central mass from P²–a³; test areal velocity and numerical conservation; require state snapshots and orbital element export.
6. **Projectile Range:** infer g from angle sweep, then quantify quadratic drag with parameter fitting; require shot comparison and trajectory CSV.
7. **Radioactive Decay:** half-life estimation with counting uncertainty and many-run ensemble; require seeded trials, replicate export and histogram.
8. **AC Circuits:** measure resonant frequency, bandwidth and Q; require frequency sweep, export and instrument mode.
9. **Gamma Spectroscopy:** calibrate an MCA, identify unknown peaks and propagate Poisson uncertainty; require calibration save/load and CSV.
10. **Heat Engine Cycles:** experimentally reconstruct work from PV loop and compare Carnot limit; require per-leg and full-cycle data export.
11. **Exoplanets:** joint transit/RV fit to radius, mass and density; require observational noise and controlled fit pipeline.
12. **Quantum Wave Packets:** tunneling and norm conservation with mesh convergence; require adjustable grid, absorber diagnostics and export.

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
