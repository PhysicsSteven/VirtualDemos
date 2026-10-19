# Resonance Tube — Speed of Sound and End Correction
Student laboratory ·100 minutes plus optional extensions ·acoustics

[Open Resonators](https://physicssteven.github.io/VirtualDemos/demos/resonators.html)

## Objectives and prelab
Determine sound speed from successive resonances and a multi-frequency fit; infer an end correction; test temperature dependence and compare pipes, strings and a Helmholtz resonator. Prerequisites: standing waves, c=fλ, straight-line regression and uncertainty. For a simpler course, supply the fit transformation and focus on spacing; physics majors should derive it and analyze the intercept.

For water closing one end, derive L_k=(2k−1)c/(4f)−ΔL. Define x=(2k−1)/(4f) in seconds and fit L=cx+b, so ΔL=−b. Show that neighboring resonances areλ/2 apart, allowing c=2fΔL_spacing without knowing the end correction. Distinguish displacement nodes from pressure nodes. Compare the low-frequency unflanged correction0.6133a with the inferred correction after measurement.

## Setup
Choose **Resonance tube, find c**, record **Reading seed**, air temperature, source frequency and tube inner diameter, and select **Blind**. Clear any prefilled/previous table. Keep diameter and temperature fixed through the primary fit. Capture records your chosen water position with added simulated meniscus-reading scatter, not a true-resonance lookup. Its readout increments and seeded scatter are both part of the measurement model. Audio is an optional indicator of resonance, not a calibrated sound-level meter; use the accumulated swept-level trace as a visual alternative.

## A. Locate resonances (30 minutes)
1. At20 °C,3.2 cm inner diameter and512 Hz, lower the water surface slowly from near the top. Find each resonant maximum by approaching from both directions and recording a small bracket around the loudest/highest response.
2. Set the midpoint of that bracket and use **Capture reading**. Label k=1,2,3 from the top. If a resonance was skipped, correct k explicitly in the editable table; do not renumber a higher resonance as the first.
3. Repeat the search and capture a second placement for each resonance. Preserve both the bracket table and captured values, since Capture adds scatter. Export CSV before altering settings.
4. Set640 Hz using the source-frequency slider and obtain all accessible resonances over the water-length range, keeping the same temperature/diameter. Save a separate raw table, then combine for analysis. Use actual f, not an assumed tuning-fork chip value.

| f (Hz) | k | Lower/upper bracket L (cm) | Captured L (cm) | Temperature (°C) | Diameter (cm) |
|---|---|---|---|---|---|
| | | | | | |

## B. Fit c and ΔL (25 minutes)
Calculate successive spacing estimates at each frequency, accounting for any skipped k via c=2f(L_k−L_j)/(k−j). Do not treat all pairwise spacings from shared readings as independent. Fit all fixed-condition rows to L=cx+b; convert cm to m. The exported x column is in milliseconds, so convert it to seconds before interpreting the slope as m/s. Obtain a slope/intercept uncertainty and residuals versus f and k. Compare the built-in fit with the external fit, then reveal expected values after recording conclusions.

Explain why an intercept/end correction can have a larger fractional uncertainty than the slope. Compare ΔL/a with the low-frequency model and discuss meniscus bias. A global length-zero offset can mimic an end correction; a small residual does not rule it out.

## C. Temperature and resonance width (20 minutes)
Repeat selected placements at30 °C, preserving a distinct dataset. Predict c(T)=331.3√[1+T_C/273.15] m/s and how resonance positions/spacing change. Do not combine temperatures in one constant-c fit. At one resonance change **Tube quality factor Q** and compare width/location by bracketing the maximum. A dissipative response's maximum need not coincide exactly with the lossless quarter-wave condition; include finite-Q peak-location sensitivity as a model effect.

## D. Optional comparisons (25 minutes)
Use **Open pipe** and **Closed pipe** at length.60 m and diameter3.0 cm. Record the first three allowed frequencies with end corrections; explain which harmonics are absent and why the frequency ratio is not exactly2. In **Strings**, compare plucking atL/2 andL/3 and identify missing harmonics in shape versus bridge-force spectra. In **Bottle**, use750 mL,8.0 cm neck and1.9 cm neck diameter; test f∝1/√V_air by changing fill. These comparisons use model readouts/manual tables, not the resonance-tube capture table.

## Uncertainty and submission
For spacing c=2fΔL, propagate frequency and both position uncertainties, noting common length offsets cancel. For fits include captured scatter, placement bounds, length zero, temperature and tube geometry; distinguish repeatable seed realizations from real random instrument readings. The code's noise is a bounded three-uniform sum with standard deviation1.5 mm, not an exact Gaussian; repeated captures have different indexed scatter. Finite Q and the approximate end correction are separate from readout noise.

Submit raw CSV/settings/brackets, spacing estimates, joint fit/residuals, c and end correction with units/uncertainty, temperature comparison and optional extension tables. Explain why pressure/displacement boundary conditions, skipped resonance labels and a wrong unit in the exported x column can change the conclusion.
