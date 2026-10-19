# Franck–Hertz — Excitation Energy from Peak Spacing
Student laboratory · 100 minutes · modern physics

[Open Franck–Hertz](https://physicssteven.github.io/VirtualDemos/demos/franck-hertz.html)

## Objectives and prelab
Infer an atomic excitation energy from repeated current maxima, distinguish spacing from a contact-potential offset, and examine how vapor density and retarding voltage affect a measurement. Prerequisites: electron volts, energy conservation, photon energy and regression. Use the virtual run to interpret a real trace before the laboratory or as a simulated substitute. Physical tube connections, temperature stabilization and operating limits follow the department's current apparatus handout.

Sketch cathode, accelerating grids and collector. An electron gains e(U−Uc) across the accelerating gap and may lose a discrete excitation energy in a collision. Explain why a retarding field can suppress collection after such a collision. Derive the approximate peak sequence U_n=a+nΔU, ΔE=eΔU and emitted wavelength λ=hc/ΔE. State why a is not simply a direct measurement of Uc in a tube with initial energy spread and a rising current envelope.

## Controls and recording
Use **Mercury tube at 180 °C**, **New sweep**, **Mark peaks**, **Snap to the nearest maximum**, **Oven temperature**, **Accelerating voltage U (G2)**, **Retarding voltage Ur** and **Contact potential Uc**. Keep **Show lines at n·Eexc/e** off during primary measurements. The **Measure the peak spacing** preset can supply a completed curve for exploration, but mark your own maxima for the primary dataset.

There is no student Capture/CSV/Blind or exposed seed control here. Preserve screenshots and manually transcribe the marked-voltage list and fit settings. The current trace is stochastic; record the preset, gas, temperature, Ur,Uc and scan mode. A simulated trace is not measured physical-tube data. Do not infer current precision merely from the smoothness of the drawing.

## A. Peak-spacing estimate (35 minutes)
1. At the mercury preset's temperature, retain the default retarding/contact potentials and record their values. Start a new sweep and let the full range complete; use **Pause** when needed.
2. Select **Mark peaks**, keep snapping enabled, and mark at least five consecutive resolvable maxima from left to right. Check each mark against the visible trace and record a position bracket based on width/readout resolution. Do not mix maxima and minima or silently skip a peak.
3. Record consecutive spacing estimates, then fit U_n=a+nΔU with a free intercept. Give slope/intercept uncertainties and residuals versus n. Repeat with the first peak excluded, preserving the physical order labels rather than renumbering to force a desired intercept.
4. Convert the fitted ΔU into excitation energy in eV and joules, then calculate the emitted wavelength. Only after this comparison reveal the reference guide/atomic-level panel. Explain why this is excitation rather than ionization.

| Gas/conditions | Peak order n | Marked U_n (V) | Position bracket (V) | ΔU to next (V) |
|---|---|---|---|---|
| | | | | |

## B. Offset and collection tests (25 minutes)
Repeat short sweeps at two distinct contact potentials with all other settings fixed, storing each dataset separately. Compare fitted spacing and intercept; distinguish a translated pattern from a change in excitation energy. Then compare default Ur with Ur=0. Describe changes in dip contrast/current and explain why loss of energy need not mean failure to collect when no retarding barrier is present. Do not require a peak locator to return meaningful positions if the trace no longer has distinct maxima.

## C. Density and a second gas (25 minutes)
Compare **Too cold: few collisions**, the baseline mercury run and **Too hot: weak current**. Record temperature, mean free path, transmission/current contrast and the number of resolvable maxima. Explain why increasing density can both increase excitation probability and scatter electrons out of the collected beam. Avoid interpreting a weak trace as a different atomic level energy.

If time remains, choose **Neon: glowing layers**. Record its larger voltage range and retarding potential. Mark at least three visible maxima if resolvable, fit their spacing and explain why the model's multiple excited levels do not identify one unique mercury-like transition. Qualitative glow bands are not a calibrated count of every collision.

## Uncertainty and submission (15 minutes)
Use fit uncertainty, position brackets, repeated independently acquired sweeps and sensitivity to excluding the first peak. Treat differences due to envelope shape, finite mean free path and smoothing/snapping as model or analysis effects, not merely random noise. The fit's built-in reading allowance is not the complete experimental uncertainty. Estimate uλ/λ≈uΔU/ΔU if constants are fixed; discuss correlations in adjacent spacings sharing peak positions.

Submit settings, trace screenshots, raw peak tables, spacing/free-intercept fits and residuals, energy/wavelength calculation, first-peak sensitivity and offset/density/retarding tests. State that this model uses effective collision cross sections, a simplified initial energy distribution and a current envelope, and omits some atomic levels and ionization. The primary conclusion is evidence for discrete energy loss; exact numerical peak locations also depend on transport and collection assumptions.
