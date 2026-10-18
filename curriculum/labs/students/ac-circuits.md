# AC Circuits: Impedance, Phase and Resonance
Student laboratory · 100 minutes · Physics II

[Open simulation](https://physicssteven.github.io/VirtualDemos/demos/ac-circuits.html)

## Objectives and prerequisites
Measure frequency response; infer L and C from resonance and bandwidth; distinguish rms, peak and instantaneous voltages; relate transient decay to quality factor. Prerequisites: sinusoidal functions, capacitors/inductors, Kirchhoff's law, rms and complex impedance.

## Prelab and model
For a series RLC circuit derive X_L=ωL, X_C=1/(ωC), Z=sqrt[R²+(X_L−X_C)²], tanφ=(X_L−X_C)/R, and I_rms=V0/(sqrt(2) Z). Positive φ means current lags. Show that f0=1/(2πsqrt(LC)), Q=sqrt(L/C)/R, and Δf=R/(2πL). At half power |X_L−X_C|=R. The geometric mean of the half-power frequencies equals f0; their arithmetic mean need not.

The demo uses ideal lumped elements and exact steady/transient solutions. Components have no parasitic resistance or leakage. The source has specified **amplitude**, not rms voltage. Pure LC at exact resonant drive has no finite steady state.

## Controls and recording
Use the six named presets and **Pause** if animation is running. **Frequency f** uses logarithmic steps; record the displayed actual frequency. **Go to f₀** selects exact resonance. **R in**, **L in**, **C in** toggle components; **Switch on at t = 0** selects a driven transient with zero initial charge/current where physically appropriate. **Viewing time per cycle** changes playback speed, not physical frequency.

There is no CSV notebook or hidden-theory mode yet. Record readings manually, perform predictions first and treat theoretical readouts as consistency checks. Use screenshots for plot-based timing and state the resolution. Do not claim a fit to displayed theory constitutes an independent physical experiment.

## A. Single components and KVL (20 minutes)
1. Compare **Resistor only**, **Capacitor only (current leads)** and **Inductor only (current lags)**. Record phase and amplitude at three frequencies. Plot impedance versus f for L and versus 1/f for C.
2. Select **RLC below resonance**: R=22 Ω, L=10 mH, C=1 µF, V0=10 V, f=1.00 kHz. Calculate reactances, impedance, rms current and phase before checking readouts.
3. At three points in a cycle compare instantaneous component-voltage sum with source voltage. Contrast this with the sum of positive rms magnitudes and with the phasor sum.

## B. Resonance curve (35 minutes)
1. Retain R=22 Ω, L=10 mH, C=1 µF and V0=10 V. Sweep f manually through 0.5–3 kHz, collecting at least twelve points, concentrated near the peak and both half-power crossings. Record actual available frequencies rather than requested rounded targets.
2. Plot I_rms versus f and phase versus f. Estimate peak current and frequency. Infer R from peak current.
3. Find frequencies bracketing I_peak/sqrt(2) on each side; interpolate and give a bracket-based uncertainty. Infer L=R/(2πΔf) and C=1/[(2πf0)²L].
4. After analysis, use **Go to f₀** and compare your inferred values with the theoretical readouts. Explain why the coarse slider can miss a narrow peak.

| f (Hz) | I_rms (A) | Z (Ω) | φ (degrees) | P (W) |
|---|---|---|---|---|
| | | | | |
| | | | | |
| | | | | |

Expand to at least twelve rows in your spreadsheet.

## C. Quality factor and transient buildup (25 minutes)
1. Repeat a shorter sweep for R=10 Ω and R=100 Ω, using **High Q vs low Q** or the resistance slider. Keep L, C and V0 fixed. Compare Q and bandwidth.
2. Set exact resonance and choose **Switch on at t = 0**. Compare the envelope buildup for both resistances. Estimate the transient amplitude decay time from plot deviations relative to the steady-state curve. Use multiple cycles and state timing resolution; do not fit instantaneous current through its zero crossings.
3. Compare measured times with 2L/R and relate them to Q/π cycles. Why does a sharper frequency response take longer to settle?

## D. Power and uncertainty (20 minutes)
Check P=I_rms²R=V_rms I_rms cosφ at frequencies below, at and above resonance. Explain zero mean power for an ideal pure capacitor/inductor despite nonzero instantaneous power.

The frequency slider has adjacent-step ratio 10^0.01. Use neighboring sampled frequencies to bound peak/crossing locations; include readout rounding. Propagate bounds into Δf, L and C. Distinguish sampling uncertainty from the exact analytic model's arithmetic precision. Do not claim precise transient time constants from an unreadable plot.

Questions: Can a component voltage exceed the source? Is the half-power bandwidth symmetric about f0? Does ideal LC at resonance have a finite steady current? What real circuit effects would lower Q?

Submission/rubric: derivations 20; single-element/KVL checks 15; resonance data and inferred components 30; transient/Q comparison 20; power, uncertainty and interpretation 15.
