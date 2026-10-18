---
title: RC Circuits
level: PHYS 202
time: 15 to 25 minutes
---
## What students should come away with

- After any change the charge relaxes exponentially to its new final value with time constant τ = RC: 63% of the way at t = τ, within 1% after 5τ.
- The loop rule holds at every instant, ε = IR + Q/C, so I = (ε − V_C)/R: the current, and so the charging, slows as V_C approaches ε.
- V_C cannot jump; I can. Charging from empty, the battery does work Cε²: half is stored, half heats R, whatever R is.

## Before class

Students need Q = CV, Ohm's law, the loop rule and U = ½CV². With **Automatic** playback 5τ takes about 6 s on screen, whatever τ is. **Pause** freezes the readouts.

## Running it in class

1. **Charging.** Ask Q1 before pressing it, since it starts at once (12 V, 10 kΩ, 100 µF, τ = 1.00 s). Pause near t = 1 s and read "V_C as a fraction of ε" (about 63%). In the **Kirchhoff loop rule** panel the two drops always add to ε.
2. **Discharging.** The full capacitor (9 V) drives current through 47 kΩ by itself (τ = 4.70 s). I is negative; each τ, V_C falls to 37%.
3. **Flip mid way.** The switch flips by itself at t = τ. Ask what V_C and I do at the flip: V_C carries on from 63% of ε, the current jumps from positive to negative, and τ is unchanged.
4. **Big τ vs small τ.** The gray trace has 33 kΩ (τ = 3.3 s): same shape, stretched. Drag the τ marker to change R.
5. **Energy bookkeeping**, then **Camera flash.** The split of the battery work heads for 50% : 50%, for any **Resistance R** (change it, press **Reset**). In **Camera flash**, charge, then press **Flip switch** and compare the peak powers (Q6).

## Questions

**Q1.** Predict: an empty capacitor is connected through a resistor to a 12 V battery. At the instant the switch closes, what are V_C, V_R and I? What are they a long time later?

**Q2.** In **Charging** (ε = 12 V, R = 10 kΩ, C = 100 µF), find τ, the initial current, V_C at t = 2.0 s, and when V_C reaches 6.0 V. Pause the demo to check.

**Q3.** The battery stays at 12 V the whole time, yet the capacitor charges more and more slowly. Use the loop rule to explain why. Why does V_C never quite reach ε?

**Q4.** In **Flip mid way** the switch moves to Discharge at t = τ = 1.00 s. Find V_C just after the flip, the current just before and just after, and how long V_C then takes to halve.

**Q5.** In **Energy bookkeeping** (ε = 6.0 V, C = 1000 µF, R = 1.0 kΩ), find the battery work for a full charge, the energy stored and the heat. What changes, and what does not, with R = 10 kΩ?

**Q6.** In **Camera flash** (ε = 12 V, C = 1000 µF, R₁ = 10 kΩ, R₂ = 10 Ω), find the energy stored when full, the peak power in R₁ as charging starts and in R₂ as the discharge starts, and the fraction of the energy released 10 ms after the flip.

## Common misconceptions

- **"After one time constant the capacitor is half charged."** It is 63% charged; half takes τ ln 2 = 0.69τ.
- **"A bigger resistor wastes more energy while charging."** The heat is ½Cε² for any R: a small R gives a large current briefly, a large R a small current for a long time.
- **"When the switch flips, the capacitor voltage jumps."** V_C = Q/C, and Q cannot change instantly through a finite current. The current is what jumps.

## Physics behind the demo

- Exact solution between changes, Q(t) = Q_f + (Q₀ − Q_f) e^(−(t−t₀)/τ), with Q_f = Cε charging and 0 discharging, restarted from the charge at each change: no step size error. Energies are exact too.
- Ideal battery (no internal resistance), wires and switch; no inductance; instant switching. R runs from 1 kΩ to 1 MΩ, C from 1 µF to 1000 µF.
