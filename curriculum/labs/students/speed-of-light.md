# Speed of Light — Foucault Rotating Mirror
Student laboratory · 100 minutes · modern physics

[Open the PASCO-style optical bench](https://physicssteven.github.io/VirtualDemos/demos/speed-of-light.html)

## Purpose and prelab
Recover light speed from measured mirror rotation and image displacement, cancel a micrometer zero offset, and assess geometric and reading uncertainties. Prerequisites: reflection, thin lenses, angular speed and straight-line fitting. The virtual run prepares the measurement/analysis for the OS-9261 bench and can replace a session when equipment is unavailable. Label virtual data as simulated; use the department's real-bench alignment and motor procedure in person.

Sketch source S, imaging lens L2, rotating mirror MR and fixed mirror MF. Define D=MR–MF, B=L2–MR and A=S–L2. Derive 1/f2=1/A+1/(D+B), Δt=2D/c, Δθ=2πfΔt and Δs=4AD²(2πf)/[c(D+B)]. Explain both factors of two: round trip and reflection. For signed speed f, fit micrometer reading s=s0+kf. Derive c=8πAD²/[(D+B)|k|]. Keep s and k in SI units during analysis.

## Setup and independent alignment
1. Start with **The bench at rest**, record **Bench seed**, choose D=12.00 m and B=0.500 m, and clear the readings. Select **Blind**; leave **Show the true image center** off. Do not use the prefilled **Measure c** data for your primary run.
2. Calculate A using the stated f2=252 mm. Enter your measured/derived D, B and A in the analysis fields. These fields affect the calculation; they are not independent measurements of the drawing. Record the source of each dimension. On the physical bench measure dimensions using the department's definitions rather than copying nominal virtual values.
3. Center the micrometer crosshair on the image at rest. Read the sleeve and thimble, then use the optional digital display as a check. Capture the rest reading three times after repositioning the crosshair.
4. Observe **Slow motion: why the beam comes back crooked** once. Draw the return ray and identify the doubled reflected angle. The displayed slowdown/exaggeration is not a physical timing measurement.

## A. Signed-speed dataset (35 minutes)
Use **Normal**, then CW and CCW. At each direction take readings near 400, 600, 800 and 1000 rev/s. Read the speed meter rather than the requested motor setting. After the image settles, center the crosshair using the micrometer controls and press **Capture reading**. Reposition before a repeat; waiting without changing the crosshair is not an independent alignment. Include at least two repeats at the largest speed and finish with a new rest reading to check zero drift.

| Direction | Meter speed (rev/s) | Signed f (Hz) | Micrometer s (mm) | Placement bound (mm) | Notes |
|---|---|---|---|---|---|
| rest | | | | | |
| | | | | | |

Expand for both directions and all speeds. Use **Export CSV**; preserve unedited raw data. Clear/export before changing geometry so runs cannot be mixed accidentally.

## B. Two estimates of light speed (25 minutes)
1. Convert s to meters and fit s against signed f with a free intercept. Plot residuals against speed and direction. Calculate c and uncertainty from the slope. Compare the intercept with the measured rest position.
2. Use a CW/CCW pair: c=8πAD²(f_CW+f_CCW)/[(D+B)|s_CW−s_CCW|], where both speed magnitudes are positive. Explain why the formula uses a sum of magnitudes rather than their difference and why the micrometer zero cancels.
3. Compare pair and all-point fit using their uncertainty, not just the number of matching digits. Do not force the fitted reading through the origin: the micrometer has a zero offset.

## C. Geometry and uncertainty (25 minutes)
Repeat four signed-speed readings at D=20 m, B unchanged. Recalculate A and update the entered dimensions before fitting. Predict the displacement ratio using the full geometric factor, then compare it with observations. Explain why a D²-only scaling is inadequate.

For fixed independently measured A, B and D, obtain uncertainty sensitivities from ln c=ln A+2ln D−ln(D+B)−ln|k|+constant. D has coefficient 2/D−1/(D+B), and B has coefficient −1/(D+B). If A was calculated from the same D+B, propagate that dependence rather than counting A as an independent measurement. Include speed-meter variation and crosshair placement; the simulator's readout digits are not a calibration certificate. Convert interval bounds to standard uncertainties only with an explicitly stated distribution.

## Interpretation and deliverables
Submit the ray derivation, setup dimensions, raw CSV, signed-speed fit/residuals, CW/CCW estimate, long-path comparison and one uncertainty budget. Discuss a missing factor of two, an incorrect speed sign, a zero offset and an error in A. Which produces a slope error and which an intercept error?

The model uses ideal thin lenses, constant mirror speed, a point image and seeded image/tachometer jitter. Air refractive index, lens aberrations, vibration and motor drift are not fully modeled. A stand-alone virtual result tests the method, not a new empirical determination of c.
