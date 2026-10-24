---
title: Circuits
level: PHYS 202
time: 15 to 25 minutes per mode; one class period for all three
---
## What students should come away with

- Kirchhoff's rules hold in every circuit at every instant: currents into a junction equal currents out, and voltage changes around a loop add to zero.
- Series parts share the battery voltage; parallel parts each get all of it. A real battery's terminal voltage ε − Ir falls as its current rises.
- A capacitor's voltage and an inductor's current cannot jump; they change exponentially with τ = RC or L/R. An LC circuit oscillates at ω₀ = 1/√(LC); R damps it, critically at R = 2√(L/C). Charging a capacitor through any resistor stores half the battery's work and heats the resistor with the other half.
- A diode passes current one way, with I growing tenfold for each 0.1 V or so; a junction transistor's small base current controls a collector current β times larger (I_C = βI_B), until the collector circuit cannot carry more and it saturates like a closed switch.
- With a sine source, X_C = 1/(ωC) and X_L = ωL set the current and its phase; a series RLC circuit resonates at f₀ = 1/(2π√(LC)) with half power width Δf = f₀/Q.

## Before class

Students should know V = IR and Q = CV; the AC part needs sines and phasors. Switching between the three modes, **DC**, **In time** and **AC**, keeps the circuit when it has something to show there. Links ending #dc, #rc, #transients or #ac open a mode. The starter row (Ohm's law, Diode, LED colours, Half wave rectifier, Transistor switch, Amplifier) opens with #ohm, #diode, #led, #rectifier, #transistor and #amplifier. Every part can be added to any circuit, so the demo is also an open circuit builder.

## Running it in class

1. **DC: Series bulbs, Parallel bulbs.** Ask Q1 first. Both ammeters in series read 300 mA; **Loop rule** under Kirchhoff check gives +6 − 3 − 3 = 0 V. In parallel, use **Junction rule**. Then **Series vs parallel** (Q2).
2. **Internal resistance.** Step R down with its value grip and watch the voltmeter fall (Q3). Close S1: 9 A, 0 V.
3. **In time: RC charging.** Ask the first part of Q4, then run it. The scope marks 1τ to 5τ; click S1 to discharge at any time. **Flip mid way** discharges from 63%.
4. **Camera flash.** It charges in fast forward; then S1 flips by itself and the scope refits to the 10 ms flash (Q5).
5. **RL rise and decay**, **LC oscillation**, **RLC damping** (Q6, Q7). Change R2 with its value grip and watch ζ under Natural response.
6. **AC: Capacitor only**, **Inductor only** (Q8): the rotating phasors beside the scope project onto the traces. **Below resonance** shows the voltage phasors tip to tail (Q9).
7. **At resonance**, **High Q vs low Q**, **Sweep**. Then press **In time**: the same circuit is switched on at t = 0 and its current builds up over several cycles (Q10).
8. **Diodes and transistors.** **Diode**: change the resistor and watch the diode voltage barely move while the current changes by decades (Q11). **LED colours**: red lights first, blue needs the most voltage. **Half wave rectifier**: the probe shows the smoothed output and its ripple. **Transistor switch**: raise R_B until the LED dims (Q12). **Amplifier**: the probe shows the collector swing, about ten times the input and inverted.
9. **For a lab.** Tick **Blind: hide predictions and answers** under **Lab**: it hides f₀, Δf, Q, τ, ζ and the like, so students measure them. In time, **Step forward** moves on by the chosen **Step Δt**; click or drag on the scope to place the time cursor, which reads every channel at that instant. **Capture reading** fills a table in each mode, and **Export to worksheet** sends it to the matching student worksheet, with the circuit in the CSV header.

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

**Q11.** In Diode (2.0 V battery), the current goes from 1.7 µA at R = 1 MΩ to 1.4 mA at 1 kΩ. By how much does the diode voltage change? Why is "a silicon diode drops 0.6 to 0.7 V" a good rule of thumb?

**Q12.** In Transistor switch (9 V, R_C = 470 Ω, red LED, β = 100), find I_B and I_C for R_B = 1 MΩ and for 10 kΩ, taking V_BE = 0.7 V. Why is the second I_C not 100 I_B?

**Q13.** Wall outlet: the outlet is 120 V rms at 60 Hz and the bulb is 144 Ω. Find the peak voltage, the rms current and the average power. Under Graphs pick Power in time: what are the largest and smallest values of p = vi, and how many times per second does p repeat?

**Q14.** Power factor: the load is 10 Ω in series with 50 mH on 120 V rms at 60 Hz. Find the power factor, the source current and the average power with S1 open. What capacitance across the load makes the power factor exactly 1, and what is the source current then? Close S1 and check with C1 = 100 µF.

## Common misconceptions

- **"Current gets used up by the first bulb."** The same current comes out of a part as goes in. What the part takes is energy, q ΔV per charge.
- **"No current flows in a circuit with a capacitor."** Charge flows onto one plate and off the other while the voltage changes. Only in the DC steady state is the current zero.
- **"An inductor's voltage is set by its current."** It is set by how fast the current changes, V = L dI/dt: a steady current gives none, a current forced to stop suddenly gives a huge one.
- **"A transistor makes current."** It controls it: the collector current comes from the battery, and the transistor sets how much flows, using the small base current.
- **"The rms voltages around an AC loop must add to the source voltage."** The instantaneous voltages add, at every instant, and so do the phasors. The rms values do not, because the voltages peak at different times.

## Physics behind the demo

- One solver for every mode: modified nodal analysis with ideal wires, switches and meters. DC treats capacitors as open gaps, inductors and AC sources as plain wire.
- In time, the circuit equations (I = dQ/dt, V = L dI/dt) and the energies are integrated exactly between switch events (matrix exponential). Where an ideal circuit would need an infinite current or voltage, a 1 mΩ contact resistance or 1 MΩ spark path stands in.
- AC is the exact steady state from complex impedances, per source frequency plus the DC part. Meters read rms; the scope and phasors use peak values.
- Bulbs are fixed resistors with no thermal lag (glow ∝ power, full at 4 W); a real filament's resistance rises as it heats.
- Diodes, LEDs and transistors use real part data: a 1N4148 diode (Shockley equation with n = 1.906 and 0.65 Ω series resistance), catalogue LEDs (forward voltage at 20 mA, n = 2 assumed) and a 2N3904 transistor (Ebers–Moll, β a setting, default 100), all at 27 °C. DC solves them by Newton's method to 10⁻¹⁰ V; AC uses the small signal model about the DC operating point; In time steps them with TR-BDF2 and adaptive steps (relative error 10⁻⁶), so with them the time stepping is very accurate but not exact. Left out: breakdown, junction capacitance, the Early effect. Junction currents above 1 A are continued linearly, since a real part would have burned out.
- The time cursor is exact in circuits without diodes or transistors: between stored samples the state is carried to the cursor time by the same matrix exponential, not drawn as a straight line.
