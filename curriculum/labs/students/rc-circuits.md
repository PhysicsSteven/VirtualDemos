# RC Circuits — Time Constants and Energy on the Unified Bench
Student laboratory · 90 minutes · Physics II

[Open Circuits: RC](https://physicssteven.github.io/VirtualDemos/demos/circuits.html#rc)

## Objectives and prelab
Determine capacitance from time traces, verify capacitor-voltage continuity at a switch, and account for source work, stored energy and heat. Prerequisites: Kirchhoff's rule, exponentials and linear regression. Derive V_C=ε(1−exp(−t/RC)), I=εexp(−t/RC)/R, and the discharge solution. Derive the complete-charge energy split W=Cε², U=H=Cε²/2. Explain why the final split is independent of R while charging power is not.

## Current apparatus and recording
Use **In time** on `circuits.html`; the old RC page remains available but is not this lab's apparatus. Choose **RC charging**, then select the battery, R1 or C1 on the drawing and enter values in **Selected**. Numeric entries use the displayed SI unit; record exactly what the controls/readouts show. Click **Scope V** or **Scope I** for the selected part to add a channel. Use **Pause**, **Reset**, **Playback rate**, **Whole run**, **Fit last change** and **Export scope CSV**. Positive component current follows that component's drawn terminal orientation; record which capacitor terminal defines V_C and use Q=CV_C consistently.

There is no complete Blind control or exact-time cursor in this bench. Predict before inspecting **Natural response**. Export samples at their actual times; the CSV contains selected voltage/current channels in V/A and t_s, not a settings log or energy ledger. Save a settings sheet and energy readings separately. Export before changing a preset. The time export is clipped to the current scope window; use **Whole run** and confirm its first/last t values cover your experiment. Do not infer precise times from playback speed.

## A. Determine C (30 minutes)
1. Select **RC charging**, pause, set ε=10 V,R1=10 kΩ,C1=100 µF, then Reset to clear previous state and editing work. Record values, initial V_C and switch position.
2. Run to at least 4RC, pause and export the scope. Include V_C, V_R and I_R. Retain at least six nonsaturated samples from the charging segment; do not fit an unobserved theoretical curve.
3. Infer τ from the time to V_C/ε=1−e⁻¹ and from a fit ln(1−V_C/ε)=a+bt, τ=−1/b. Use interpolation and actual exported timestamps. Exclude endpoints rounded to ε.
4. Repeat at R1=4.7, 6.8, 10, 15 and 22 kΩ with C fixed. Reset after each component edit. Fit τ against R in ohms; infer C from slope and discuss the intercept. Compare with **Natural response** only after the fit.

| R (Ω) | ε (V) | C entry (F) | τ crossing (s) | τ log fit (s) | Sampling/fit uncertainty |
|---|---|---|---|---|---|
| | | | | | |

## B. Switching and fast discharge (25 minutes)
1. Use **Flip mid way**, restore its displayed component values, Reset and run through the automatic switch. Export the complete visible run. Determine the switch time from the trace and fit each side separately using elapsed time relative to its own segment.
2. Compare V_C immediately before/after switching and I_R on each side. Explain continuity of charge but a jump/reversal of resistor current. The fit initial condition is the actual voltage at the switch, not ε unless the capacitor is fully charged.
3. Use **Camera flash**, document R1,C1 and the bulb resistance, and run beyond the switch. Compare charging/discharging time constants and initial powers using measured pre-switch voltage. State the finite charge fraction; do not assume exactly full after 5τ.

## C. Energy and uncertainty (25 minutes)
For an uncharged RC charging run, record time, source work W, capacitor U and resistor heat H from **Energy since t=0** at four times. Check W−U−H and compare with a numerical integral of εI and I²R from CSV. Keep the integration within one documented run; component editing can add a separate editing-work term and is excluded here. Repeat with a different R to distinguish invariant final energy from rate of transfer.

| t (s) | W (J) | U_C (J) | H (J) | W−U_C−H (J) |
|---|---|---|---|---|
| | | | | |

State exported sample spacing, readout rounding and crossing brackets. Bound τ from nearby samples; propagate slope uncertainty into C. Deterministic traces do not justify invented random noise. Explain why a very small fitted residual does not represent resistor tolerance or capacitor leakage in a real lab.

Submit settings, raw CSV, τ methods/τ-versus-R fit and residuals, switch comparison, flash comparison, energy table/integrals and uncertainty. Discuss signed current, finite charging, sampling bias and parasitic effects absent from the ideal model.
