# Physics validation protocol

**Current evidence:** [2026-10-18 E&M sprint](SPRINT_2026-10-18.md): 45 numerical test groups and ten local Chromium demo/viewport workflows passed; CI also passed Node 22 and 20 Chromium/Firefox demo/viewport workflows. Coverage and known failures are scoped in that record; this is not collection-wide validation.

For each simulation:
1. Record Git commit SHA and browser/runtime versions.
2. Extract the relevant physics core if supported, without modifying the published demo.
3. Check dimensional consistency of every equation.
4. Compare at least three nontrivial parameter sets with independent analytic or numerical references.
5. Test singularities, zero parameters, conservation laws and model-specific edge cases.
6. Where numerical integration is used, halve time step and spatial grid and quantify convergence.
7. Check that UI readouts and plots correspond to the same numerical state.
8. Check keyboard access, responsive layout, color contrast and reduced-motion behavior.
9. Record discrepancies as **confirmed** only with reproducible settings and expected/observed values.
10. Link test evidence in the corresponding instructor guide.

## Suggested regression tests
- RC: Kirchhoff residual and U0 + W_battery + W_mechanical - U - H = 0 across switches.
- Gauss: flux convergence for sphere, box and cylinder; near-boundary charges.
- Quantum waves: probability norm and grid/time convergence.
- Kepler: specific orbital energy and angular momentum conservation.
- Double pendulum: energy drift under integration step refinement.
- Gas: two-dimensional equipartition and pressure averaging.
- Photoelectric: threshold and linear stopping-potential slope.
- Blackbody: wavelength peak and integrated T^4 scaling.

Do not mistake exact agreement between two derived readouts for independent validation.

## Second pass: tasks 1, 3 and 5

[Executed report](SECOND_PASS_2026-10-18.md) and [machine-readable numerical results](SECOND_PASS_RESULTS.json): 67 supported branch groups passed; seven requested suites give 42/44 groups on main (Faraday failures). Strict Gauss-origin and Coulomb-core probes intentionally fail and remain outside the supported-case green CI. See exact commands and scope before using any passing count as validation evidence.
