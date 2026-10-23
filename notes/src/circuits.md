---
title: Circuits
level: PHYS 202
time: 15 to 25 minutes per mode; one class period for all three
---
## What students should come away with

- Kirchhoff's rules hold in every circuit at every instant: currents into a junction equal currents out, and voltage changes around a loop add to zero.
- Series parts share the battery voltage; parallel parts each get all of it. A real battery's terminal voltage ε − Ir falls as its current rises.
- A capacitor's voltage and an inductor's current cannot jump; they change exponentially with τ = RC or L/R. An LC circuit oscillates at ω₀ = 1/√(LC); R damps it, critically at R = 2√(L/C). Charging a capacitor through any resistor stores half the battery's work and heats the resistor with the other half.
- With a sine source, X_C = 1/(ωC) and X_L = ωL set the current and its phase; a series RLC circuit resonates at f₀ = 1/(2π√(LC)) with half power width Δf = f₀/Q.

## Before class

Students should know V = IR and Q = CV; the AC part needs sines and phasors. Switching between the three modes, **DC**, **In time** and **AC**, keeps the circuit when it has something to show there. Links ending #dc, #rc, #transients or #ac open a mode.

## Running it in class

1. **DC: Series bulbs, Parallel bulbs.** Ask Q1 first. Both ammeters in series read 300 mA; **Loop rule** under Kirchhoff check gives +6 − 3 − 3 = 0 V. In parallel, use **Junction rule**. Then **Series vs parallel** (Q2).
2. **Internal resistance.** Step R down with its value grip and watch the voltmeter fall (Q3). Close S1: 9 A, 0 V.
3. **In time: RC charging.** Ask the first part of Q4, then run it. The scope marks 1τ to 5τ; click S1 to discharge at any time. **Flip mid way** discharges from 63%.
4. **Camera flash.** It charges in fast forward; then S1 flips by itself and the scope refits to the 10 ms flash (Q5).
5. **RL rise and decay**, **LC oscillation**, **RLC damping** (Q6, Q7). Change R2 with its value grip and watch ζ under Natural response.
6. **AC: Capacitor only**, **Inductor only** (Q8): the rotating phasors beside the scope project onto the traces. **Below resonance** shows the voltage phasors tip to tail (Q9).
7. **At resonance**, **High Q vs low Q**, **Sweep**. Then press **In time**: the same circuit is switched on at t = 0 and its current builds up over several cycles (Q10).
8. **For a lab.** Tick **Blind: hide predictions and answers** under **Lab**: it hides f₀, Δf, Q, τ, ζ and the like, so students measure them. In time, **Step forward** moves on by the chosen **Step Δt**; click or drag on the scope to place the time cursor, which reads every channel at that instant. **Capture reading** fills a table in each mode, and **Export to worksheet** sends it to the matching student worksheet, with the circuit in the CSV header.

## Questions

**Q1.** Predict: in Series bulbs the current leaves the battery's + terminal and reaches L1 before L2. Is L1 brighter than L2? Does the first ammeter read more than the second? Explain before you look.

**Q2.** Predict: in Series vs parallel all four bulbs are 10 Ω and both batteries are 6 V. Rank the four bulbs by brightness. What happens to the other bulb in each circuit if one bulb burns out? Check by deleting one bulb in each.

**Q3.** The battery in Internal resistance has ε = 9.0 V and r = 1.0 Ω. Find the terminal voltage and the power in the load for R = 10 Ω, 2.2 Ω and 1.0 Ω. Which load gets the most power, and what fraction of the EMF's power is that? Check each case.

**Q4.** Predict first: in RC charging, what are V_C, V_R and I the instant the switch connects the battery, and a long time later? Then, with ε = 12 V, R = 10 kΩ and C = 100 µF, find τ, the initial current, V_C at t = 2.0 s, and the time at which V_C reaches 6.0 V. Pause the demo to check.

**Q5.** In Camera flash (ε = 12 V, R1 = 10 kΩ, C1 = 1000 µF, bulb 10 Ω), find the battery's work, the stored energy and the heat in R1 for a full charge. Would a larger R1 change the heat? Then find the peak power in the bulb when a full capacitor is switched to it, compared with the peak power in R1 at the start of charging.

**Q6.** In RL rise and decay (ε = 12 V, R1 = 100 Ω, L1 = 1.0 H), find τ and the final current. S1 flips at t = 5τ. What is the inductor voltage just before and just after the flip, and why does it change sign while the current keeps its direction?

**Q7.** In LC oscillation (C = 10 µF charged to 10 V, L = 100 mH), find the period and the largest current. Then, for RLC damping, find the resistance for critical damping and the damping ratio ζ = (R/2)√(C/L) for R2 = 20 Ω and 1.0 kΩ. Which of the three settles fastest, staying within 1% of zero from then on? Check ζ under Natural response, and compare the traces.

**Q8.** Predict: in Capacitor only, at the instant the source voltage is at its positive peak, is the current at its peak, zero, or at its negative peak? Explain using q = Cv and i = dq/dt.

**Q9.** Below resonance has R = 22 Ω, L = 10 mH and C = 1.0 µF, driven at 1.00 kHz with V₀ = 10 V. Find X_L, X_C, |Z|, I_rms and the phase. The rms voltages across R, L and C add to more than the source's 7.07 V. Does that break the loop rule? Explain what does add up.

**Q10.** For the same parts find f₀, Q = (1/R)√(L/C) and the half power width, first for R = 22 Ω and then for R = 10 Ω. In High Q vs low Q (R = 10 Ω) press In time: the source is switched on at t = 0. The transient decays as e^(−Rt/2L). How long is that decay time, and about how many cycles is it?

## Common misconceptions

- **"Current gets used up by the first bulb."** The same current comes out of a part as goes in. What the part takes is energy, q ΔV per charge.
- **"No current flows in a circuit with a capacitor."** Charge flows onto one plate and off the other while the voltage changes. Only in the DC steady state is the current zero.
- **"An inductor's voltage is set by its current."** It is set by how fast the current changes, V = L dI/dt: a steady current gives none, a current forced to stop suddenly gives a huge one.
- **"The rms voltages around an AC loop must add to the source voltage."** The instantaneous voltages add, at every instant, and so do the phasors. The rms values do not, because the voltages peak at different times.

## Physics behind the demo

- One solver for every mode: modified nodal analysis with ideal wires, switches and meters. DC treats capacitors as open gaps, inductors and AC sources as plain wire.
- In time, the circuit equations (I = dQ/dt, V = L dI/dt) and the energies are integrated exactly between switch events (matrix exponential). Where an ideal circuit would need an infinite current or voltage, a 1 mΩ contact resistance or 1 MΩ spark path stands in.
- AC is the exact steady state from complex impedances, per source frequency plus the DC part. Meters read rms; the scope and phasors use peak values.
- Bulbs are fixed resistors with no thermal lag (glow ∝ power, full at 4 W); a real filament's resistance rises as it heats.
- The time cursor is exact: between stored samples the state is carried to the cursor time by the same matrix exponential, not drawn as a straight line.
