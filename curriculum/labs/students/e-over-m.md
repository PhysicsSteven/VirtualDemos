# Electron Charge-to-Mass Ratio — Helmholtz Coils
Student laboratory · 110 minutes · modern physics

[Open the PASCO-style e/m bench](https://physicssteven.github.io/VirtualDemos/demos/e-over-m.html)

## Purpose and prelab
Estimate e/m from electron trajectories, suppress parallax with a mirrored scale, and separate readout uncertainty from field-model bias. Prerequisites: qv×B, centripetal acceleration, energy conservation and linear regression. Use the virtual bench as preparation for SE-9638 or as a substitute; identify which dataset was simulated. Real supply connections, warm-up and operating limits follow the department's apparatus instructions. Keep the main measurement below or at the displayed 2 A coil-current limit.

Derive v=√[2(e/m)V], r=mv/(eB), B=(4/5)^(3/2)μ0NI/a and e/m=2V/(Br)². Show that a plot of y=2V against x=(Br)² has slope e/m. Here N=130 turns per coil; a is the mean winding radius, also the nominal coil spacing. If inner and outer diameters are d_in and d_out, derive a=(d_in+d_out)/4. Explain why this experiment alone does not determine e and m separately.

## Setup and scale reading (20 minutes)
1. Record **Instrument seed**. Select **A circle**, set tube rotation to zero and Earth's field **off**. Select **Blind** and leave **Show the true beam edges** off. Clear prefilled rows. Keep **Field computed from the coils (not perfectly uniform)** selected for the primary dataset.
2. Enter coil inner/outer diameters from your assigned apparatus measurement. For the virtual reference geometry use 29.0 and31.0 cm; these analysis entries do not physically resize the virtual coils. Record the assigned uncertainty and how you measured each diameter on the real bench.
3. Move **Your eye, left or right** until the beam and its mirror image overlap at the left edge. Use **Zoom left** and set pointer L on a reproducible part of the glowing beam. Reposition the eye for the right edge and set pointer R. Do not use a single eye position to read both edges.
4. Explain which beam boundary you chose and estimate its width/placement uncertainty. The stored r left is a positive distance, not a negative coordinate; use r=(r_left+r_right)/2.

## A. Recover e/m (40 minutes)
At I≈1.50 A, use voltage settings150,175,200,225 and250 V. Record actual voltmeter/ammeter values, not slider commands. Align and read both sides, then **Capture reading**. Repeat two settings after moving the pointers away and realigning. If the path hits glass or either extremum is missing, record that condition and exclude it from a circular-radius fit with a reason.

| V meter (V) | I meter (A) | r_left (cm) | r_right (cm) | r (m) | B_center (T) | (Br)² | 2V (V) |
|---|---|---|---|---|---|---|---|
| | | | | | | | |

Use at least seven rows including repeats. Export CSV. Fit2V against(Br)² through the origin and with a free intercept externally. Infer e/m, inspect residuals and compare the intercept with its uncertainty. A free intercept diagnoses offsets; it does not automatically correct all field or radius errors.

## B. Scaling and model bias (25 minutes)
1. Hold V=200 V; measure radii at three currents between1.40 and2.00 A. Test r∝1/I. At fixed current, test r∝√V using Part A.
2. Repeat three representative measurements with **Field computed from the coils** unchecked, which selects a uniform-field model. Keep each model's rows in a separate export/fit: the built-in fit may include all stored rows. Explain differences from center-field analysis of the exact coil trajectory.
3. On a fresh comparison dataset, choose Earth's field **adds to B**, then **opposes B**, and describe the radius bias if analysis uses only coil B. The default row calculation does not subtract this systematic for you.
4. Observe **Tilt the tube: a helix**. Identify v_parallel and v_perpendicular; explain why a planar-circle analysis is invalid. Do not add helix rows to the main fit.

## Uncertainty and conclusions (25 minutes)
For independent standard uncertainties use [u(e/m)/(e/m)]²≈[uV/V]²+4[uI/I]²+4[ua/a]²+4[ur/r]², with N and μ0 treated as fixed here. Derive this from the measured formula. For r=(rL+rR)/2 propagate independent placement uncertainties, then discuss correlated scale calibration, common eye bias and beam-width choices separately. Shared coil-diameter error is not reduced by more voltage settings. Compare observed scatter, fitted slope uncertainty and the uniform-field approximation as distinct contributions.

Submit the derivation, geometry measurements, raw CSV, primary fit/residuals, scaling plots and a systematic-error table. Explain why magnetic force changes direction but not kinetic energy; why electron energy loss before the observed orbit would bias e/m; and why a precise fit can still be inaccurate.

The simulation traces a nonrelativistic beam through the coil field and includes optional Earth field, simulated meter jitter and beam flicker. It omits energy loss in gas and electrodes. The glow marks helium excitation rather than a visible individual electron. Instrument-model agreement is not calibration of the physical bench.
