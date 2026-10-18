---
title: AC Circuits and Resonance
level: PHYS 202
time: 20 to 30 minutes
---
## What students should come away with

- In a resistor the current is in step with the voltage. In a capacitor it leads by a quarter cycle, with X_C = 1/(ωC); in an inductor it lags by a quarter cycle, with X_L = ωL.
- In a series RLC circuit the instantaneous voltages add to the source voltage at every moment, but the rms values do not: they add as phasors, giving Z = √(R² + (X_L − X_C)²) and tan φ = (X_L − X_C)/R.
- At resonance, f₀ = 1/(2π√(LC)), X_L = X_C, Z = R and the current is largest and in step with the source. The voltages across L and C can each be Q times the source voltage.
- Only the resistor takes energy on average: P = I_rms²R = V_rms I_rms cos φ. L and C store energy and give it back each cycle.

## Before class

Students should know capacitance, inductance (v_L = L di/dt) and rms values; phasors can be introduced with the demo. Time runs in slow motion, one cycle per **Viewing time per cycle**. **R in**, **L in** and **C in** take parts out; the resonance plot shows **Current I_rms** or **Z and reactances**.

## Running it in class

1. **Resistor only.** The current curve and the source voltage peak together and the I phasor lies along V₀. The resonance curve is flat: Z = R at every frequency.
2. **Capacitor only (current leads).** Ask Q1 first. The current peaks while the voltage crosses zero. Raise **Frequency f**: X_C falls and the current grows.
3. **Inductor only (current lags).** The reverse: the current peaks a quarter cycle after the voltage, and X_L grows with f.
4. **RLC below resonance.** At 1.00 kHz the circuit is capacitive (φ = −77°). Point to V_C = 11.4 V, larger than the 7.07 V source, and to the line "V_R + V_L + V_C = 17.46 V ≠ 7.071 V" while the phasor sum works (Q3). Drag the f marker toward f₀ and watch V_L − V_C shrink.
5. **At resonance.** Z = R = 22 Ω, φ = 0, I_rms = 321 mA, and V_L = V_C = 32.1 V, 4.5 times the source.
6. **High Q vs low Q.** Press **Sweep** and watch the current pass through the tall R = 10 Ω peak; the gray curve is R = 100 Ω. Then pick **Switch on at t = 0** and compare how fast the current builds up for the two resistances (Q6).

## Questions

**Q1.** Predict: in Capacitor only, at the instant the source voltage is at its positive peak, is the current at its peak, zero, or at its negative peak? Explain using q = Cv and i = dq/dt.

**Q2.** A series circuit has R = 22 Ω, L = 10 mH and C = 1.0 µF, driven at f = 1.00 kHz with amplitude V₀ = 10 V. Find X_L, X_C, Z, I_rms and the phase φ. Does the current lead or lag the source? Check with RLC below resonance.

**Q3.** In RLC below resonance the rms voltage across the capacitor (11.4 V) is larger than the rms voltage of the source (7.07 V), and the three rms voltages add to 17.5 V. Does this break Kirchhoff's loop rule? Explain what does add up.

**Q4.** For the same R, L and C, find f₀, the quality factor Q = (1/R)√(L/C), I_rms and V_C at resonance. Then predict all four for R = 10 Ω. Check with At resonance and High Q vs low Q.

**Q5.** In Capacitor only the average power is zero, although current flows and the voltage is nonzero. Where does the energy go during each cycle? What would a power company's meter read for a purely capacitive load?

**Q6.** With L = 10 mH and C = 1.0 µF at f₀, switch the source on at t = 0 for R = 10 Ω and for R = 100 Ω. The transient dies away as e^(−Rt/2L). Find this decay time for each, and about how many cycles that is. Which circuit, the one with the tall narrow peak or the one with the low wide peak, takes longer to reach steady state? Check with Switch on at t = 0.

## Common misconceptions

- **"The rms voltages around the loop must add up to the source voltage."** The instantaneous voltages do; the rms values are of curves that peak at different times, so they add as phasors.
- **"A capacitor or inductor dissipates power like a resistor."** Ideal L and C store energy for part of a cycle and return it; the average power into them is zero.
- **"At resonance the voltages across L and C are zero."** Their sum is zero at every instant. Each one separately is Q times the source voltage, which can be far larger than the source.
- **"A sharper resonance peak means the circuit responds faster."** The reverse: a high Q circuit takes longer to build up and to ring down.

## Physics behind the demo

- Steady state is the exact phasor solution, applied at once when you change a value: I₀ = V₀/Z, phase φ with tan φ = (X_L − X_C)/R (positive φ: current lags). Rms values are amplitudes divided by √2.
- Resonance readouts: f₀ = 1/(2π√(LC)), Q = (1/R)√(L/C), bandwidth Δf = R/(2πL) between the half power points, and f₀/Δf = Q.
- **Switch on at t = 0** solves L di/dt + Ri + q/C = V₀ sin ωt exactly from i = 0 and q = 0. With an ideal capacitor alone the current jumps at t = 0.
- All parts are ideal and lumped: no coil resistance, no capacitor leakage, no wire inductance, and an ideal source with no internal resistance. A real coil's resistance adds to R and lowers Q.

## Going further

- Homework: show that the half power points satisfy X_L − X_C = ±R and that their separation is Δf = R/(2πL).
