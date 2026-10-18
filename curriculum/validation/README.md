# Physics validation protocol

**Current status: starter templates only; no claim of 33 executed simulation tests.**

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
