# RC Circuits — Quantitative Laboratory
**Student edition · 90 minutes · calculus-based introductory physics**  
[Open simulation](https://physicssteven.github.io/VirtualDemos/demos/rc-circuits.html)

## Driving questions
1. Can the capacitance of an unknown component be recovered from voltage-versus-time measurements?
2. Where does the energy delivered by a battery go during charging?
3. Does changing the discharge resistance change the total energy dissipated?

## Learning outcomes
Derive the first-order differential equation for RC circuits; determine a time constant by three independent methods; fit a linear model with correct units; test Kirchhoff's rule and an energy balance; distinguish a perfect numerical model from a physical experiment.

## Prelab (show derivations)
Starting with ε−IR−Q/C=0 and I=dQ/dt, derive the solution for charging an initially uncharged capacitor. Show that τ=RC and that at t=τ, V_C/ε=1−e⁻¹. For discharging, derive Q(t)=Q₀e⁻ᵗ/τ and I(t)=−Q₀e⁻ᵗ/τ /τ. Derive W_battery=Cε², U_final=½Cε², and H_final=½Cε² for complete charging.

## Apparatus
Use the **Charging**, **Discharging**, and **Energy bookkeeping** presets. The Circuit panel has **Battery EMF ε**, **Resistance R**, and **Capacitance C** controls. The Time panel has **Playback rate**, **Automatic**, **Whole run**, and **Last change**. The Display panel has **τ marks** and **Exact curve** toggles. Measurements display time, V_C, V_R, I and Q; Energy displays W, U, H and instantaneous power.

The current main version has no capture table, CSV or exact-time entry. Use **Play/Pause** and slow playback, recording actual circuit time and readouts in a spreadsheet. Turning off the two plot toggles does not hide all τ readouts or preset hints: make predictions first, and treat this as model-based parameter recovery rather than a blinded unknown-component experiment.

## Part A — Determine capacitance (30 min)
1. Select Charging. Set ε=10 V (or nearest available setting), C=100 µF and R=10 kΩ (or nearest supported E12 value). Record exact displayed values.
2. **Turn off τ marks and Exact curve.** Use Reset before each run. Use Pause and playback controls to sample V_C at six or more times spanning approximately 0 to 4τ. If a precise sample time is inaccessible, record the nearest displayed time rather than inventing an exact one.
3. Measure the elapsed time at which V_C reaches 0.6321ε, using interpolation between two neighboring samples if necessary.
4. Compute y=ln(1−V_C/ε) for each non-saturated point. Fit y=a+bt, report slope b in s⁻¹, and infer τ=−1/b. Compare with the 63.2% method.
5. Repeat with five resistor settings spanning 4.7–22 kΩ (4.7, 6.8, 10, 15 and 22 kΩ are available), holding C fixed. Use the nearest supported resistor values; record those rather than forcing the nominal settings.
6. Plot τ against R in ohms and fit τ=mR+b. Infer C=m in farads; report intercept and residuals.
7. Enable τ marks and Exact curve and compare your inferred values to the simulation prediction.

| R (Ω) | ε (V) | C display (F) | τ from 63.2% (s) | τ from log fit (s) | τ display, after measurement (s) |
|---|---|---|---|---|---|
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |

For each run retain a raw table with columns: elapsed t (s), V_C (V), V_R (V), I (A), Q (C), and ln(1−V_C/ε). Include at least six rows before building the summary table. Avoid points so near saturation that readout rounding makes the logarithm undefined.

## Part B — Discharge and changing resistance (20 min)
1. Charge the capacitor for at least 5τ (this is about 99.3% charged, not exactly full), then switch to Discharge. Record initial Q, V_C, and I.
2. Record V_C and I at 0, 0.5τ, τ, 2τ, 3τ and 5τ relative to the switch event. If the UI does not permit exact sampling, record actual times.
3. Fit ln(V_C/V_C0) versus time. Compare discharge τ with charging τ.
4. Enable **Separate discharge resistor R₂**, choose R₂ different from R, and repeat. Explain which properties change and which remain invariant.

## Part C — Energy conservation (20 min)
1. Use **Energy bookkeeping** (ε=6 V, R=1 kΩ, C=1000 µF). Press Reset with the switch in Charge to begin with an uncharged capacitor and record W, U and H at several times, including t≈5τ.
2. Calculate residual Δ=W−U−H for the initial charging run and express it relative to the final battery work.
3. Repeat with a different R and identical ε,C. Compare final H and peak instantaneous power.
4. Optional challenge: change capacitance while the capacitor is charged. Explain why the energy ledger must include mechanical work, not just W−U−H.

| Elapsed t (s) | W_battery (J) | U_capacitor (J) | H_resistor (J) | W−U−H (J) |
|---|---|---|---|---|
| | | | | |
| | | | | |
| | | | | |
| | | | | |

## Analysis and uncertainty
For each graph report axis units, fit equation, uncertainty in slope and intercept (if available), residuals, and one worked example. If measurements are from an exact deterministic trace, describe display/cursor precision as the principal measurement limitation; do **not** fabricate experimental noise. Discuss what resistor tolerance, capacitor leakage and nonzero internal resistance would do in a physical laboratory.

## Postlab
1. Why is the capacitor voltage continuous at an instantaneous switch flip?
2. Can the resistor voltage change sign without the capacitor voltage changing sign?
3. Why does the final heat of charging not depend on R?
4. Why does the Kirchhoff residual approach zero even while energy is dissipated?
5. How would an oscilloscope sampling interval comparable to τ bias your estimate?

## Submission (100 points)
Prelab 15; measurements 25; three fits and units 25; energy ledger 20; interpretation and uncertainty 15. Submit tables, graphs, derivations and a concise conclusion.
