# AC Circuits — Impedance, Phase and Resonance on One Bench
Student laboratory ·100 minutes ·Physics II

[Open Circuits: AC](https://physicssteven.github.io/VirtualDemos/demos/circuits.html#ac)

## Objectives and prelab
Infer R,L,C from frequency response, distinguish peak/rms/instantaneous readings, and compare steady resonance with transient settling. Prerequisites: sinusoids, Kirchhoff's rule and complex impedance. Derive Z=R+i(ωL−1/ωC), I_rms=V0/(√2|Z|), φ=atan2(X,R), f0=1/(2π√LC), Q=√(L/C)/R and Δf=R/(2πL). Positive φ means current lags source voltage. Explain why arithmetic sums of rms voltage magnitudes do not obey instantaneous KVL.

## Controls and data
Use **AC**, select components on the drawing and edit them in **Selected**. The AC source V0 is peak amplitude. Set frequency with the log slider or select the source and use its numeric **Frequency f** entry. **Go to f0** selects resonance and **Sweep** scans it. Meters read rms; scope and phasors use peak quantities. Add channels with **Scope V/I** and use **Add the voltage phasors tip to tail**. There is no complete Blind setting: make predictions first.

In this source snapshot, the visible **Export scope CSV** control is in **In time**. Record AC rms/phase/power manually with actual frequency, plus screenshots; do not assume an AC sweep produces a frequency-response CSV. Time-domain exports used later are separate. Do not use the obsolete standalone AC page's component toggles or switch-on control; this circuit is changed by its parts and analysis mode.

## A. Single elements and phasors (20 minutes)
Compare **Resistor only**, **Capacitor only**, **Inductor only** at three documented frequencies. Record source amplitude, element values, rms current and phase. Plot |Z| versus f for L and versus1/f for C. Confirm the current lead/lag with the scope, stating sign convention.

Select **Below resonance**, set R1=22 Ω,L1=10 mH,C1=1 µF,V0=10 V,f=1000 Hz. Calculate reactances, |Z|, phase and current first. Add component-voltage channels. Compare three instantaneous source/component sums, the phasor sum and the sum of rms magnitudes; explain their different meanings.

## B. Measure resonance and bandwidth (35 minutes)
1. Retain that circuit; manually sample at least twelve frequencies over0.5–3 kHz, concentrating near the peak and half-power points. Record actual displayed or numerically entered frequency and current. Sweep may guide the search but does not replace a raw table.
2. Plot I_rms and phase against f. Estimate peak f0 and R=V0/(√2 I_peak). Bracket each crossing I_peak/√2; refine with the numeric frequency entry and record the final intervals.
3. Infer Δf=f_high−f_low, L=R/(2πΔf), C=1/[(2πf0)²L]. Compare the geometric mean √(f_low f_high) with f0; quantify the effect of using the arithmetic mean instead.
4. Only then use **Go to f0** and the theoretical response to check your inferences. Repeat a smaller sweep using **High Q vs low Q** or R1=10 and100 Ω, keeping L,C,V0 fixed.

| f (Hz) | V0 (V peak) | I_rms (A) | φ (degrees) | R,L,C | Power (W) |
|---|---|---|---|---|---|
| | | | | | |

## C. Steady state versus startup (25 minutes)
Keep a series RLC circuit at measured resonance, switch to **In time** on the same circuit, and Reset to zero stored state. Analysis mode changes do not replace the circuit: if a preset was selected, recheck all parts and source frequency. Add source/current channels, run several settling times, pause, use **Whole run**, and export scope CSV. Compare startup with the AC steady-state prediction. Repeat for a second R, exporting separately.

Estimate the envelope from differences relative to the steady sinusoid over multiple cycles; do not take logarithms through current zero crossings. Compare the transient decay scale2L/R where the natural mode is underdamped, and discuss the limits of that statement for overdamping. Reset after edits so component-editing work is excluded from the startup run.

## D. Power, uncertainty and report (20 minutes)
At below/near/above resonance, test P=I_rms²R=(V0/√2)I_rms cosφ. Explain nonzero instantaneous energy exchange but zero mean dissipation for an ideal pure C or L. Can a component voltage exceed the source? Does ideal undamped LC under exactly resonant drive have a finite steady amplitude?

Use half-power frequency brackets, current rounding and component/voltage assumptions in uncertainty. The log slider uses adjacent ratio10^0.01, but numeric frequency entry permits a finer search; report which method you actually used. Bound Δf before propagating into L,C. Distinguish exact arithmetic from the uncertainty of reading a plot. Submit all manual frequency tables, plots/residuals, inferred components, time CSV, power checks and model limitations.
