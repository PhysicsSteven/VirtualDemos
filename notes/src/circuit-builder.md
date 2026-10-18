---
title: DC Circuit Builder
level: PHYS 202
time: 20 to 30 minutes
---
## What students should come away with

- Current is not used up: along one path every part carries the same current, and at a junction the currents in equal the currents out (charge is conserved).
- Around any closed loop the voltage rises and drops add to zero, because the potential at a point has one value (energy is conserved).
- Series parts share the battery voltage; parallel parts each get the full voltage, and their currents add. A bulb's brightness follows its power, P = I²R = V²/R.
- A real battery is an EMF ε in series with an internal resistance r, so its terminal voltage ε − Ir falls as the current rises.

## Before class

Students should know V = IR and potential difference. Every preset is an ordinary circuit on the board: select any part to read its voltage, current and power, delete it, or add parts with the tools above the drawing. **Node voltages** and **Voltage colors** help with the divider and the bridge.

## Running it in class

1. **Series bulbs.** Ask Q1 first. Both ammeters read 300 mA and both bulbs get 3 V. Turn on **Electron flow**: the dots reverse, no reading changes. Pick **Loop rule** under Kirchhoff check: +6 V, −3 V, −3 V, sum 0.
2. **Parallel bulbs.** Each bulb has 6 V and 600 mA; A1 reads 1.2 A. Switch to **Junction rule** and click a junction. Delete L2: L1 does not change and A1 halves.
3. **Series vs parallel.** Ask for a ranking of the four bulbs before you press it (Q2): 0.90 W each in series, 3.6 W each in parallel.
4. **Voltage divider.** V_out = 3.75 V. Change R1, then add a resistor across R2 to show a load pulling the output down (Q3).
5. **Wheatstone bridge.** G reads zero at R4 = 330 Ω. Move R4 a step and current appears in G; change the EMF and the balance stays (Q5).
6. **Internal resistance.** The voltmeter reads 8.18 V with R = 10 Ω. Lower R and the terminal voltage falls. Close S1: 9 A and 0 V.

## Questions

**Q1.** Predict: in Series bulbs the current leaves the + terminal and reaches L1 before L2. Is L1 brighter than L2? Does the first ammeter read more than the second? Explain before you look.

**Q2.** Predict: in Series vs parallel all four bulbs are 10 Ω and both batteries are 6 V. Rank the four bulbs by brightness. What happens to the other bulb in each circuit if one bulb burns out? Check by deleting one bulb in each.

**Q3.** In Voltage divider, ε = 12 V, R1 = 2.2 kΩ and R2 = 1.0 kΩ, so V_out = 3.75 V with nothing connected. A 1.0 kΩ load is connected across R2. Find the new V_out and the battery current. Check by adding a 1 kΩ resistor across R2.

**Q4.** The battery in Internal resistance has ε = 9.0 V and r = 1.0 Ω. Find the terminal voltage and the power in the load for R = 10 Ω, 2.2 Ω and 1.0 Ω. Which load gets the most power, and what fraction of the power from the EMF is that? Check each case.

**Q5.** In Wheatstone bridge no current flows through G when R1/R3 = R2/R4. Explain why this does not depend on the battery EMF. If R4 is raised from 330 Ω to 390 Ω, which way does current flow through G: from the R1–R3 midpoint to the R2–R4 midpoint, or the reverse?

**Q6.** Start from Parallel bulbs and add a third 10 Ω bulb across the battery. Predict the new reading of A1, the equivalent resistance the battery sees, and the brightness of the first two bulbs. Then build it and check.

## Common misconceptions

- **"Current gets used up by the first bulb."** The same current comes out of a bulb as goes in. What the bulb takes is energy, qΔV per charge.
- **"A battery supplies a fixed current."** An ideal battery fixes the voltage; the current depends on what is connected.
- **"More bulbs means more resistance."** Only in series. Each bulb added in parallel opens a new path and lowers the equivalent resistance.
- **"The voltage of a battery is always its EMF."** The terminal voltage is ε − Ir; it equals ε only when no current flows.

## Physics behind the demo

- The circuit is solved at once by nodal analysis (Ohm's law plus the junction rule); the loop and junction rules and the power balance Σ εI = Σ I²R are shown as checks.
- Wires, switches and meters are ideal: an ammeter has zero resistance, a voltmeter draws no current. Where wires alone form a loop, the current is shared as if every wire had the same tiny resistance.
- A battery is an ideal EMF with an optional internal resistance r. The R_eq a battery "sees" is the rest of the circuit, other batteries replaced by their internal resistances; it leaves out the battery's own r.
- Bulbs are fixed 10 Ω resistors (glow ∝ power, full at 4 W). A real filament's resistance rises several times as it heats, so real brightness ratios differ from the demo's. Node voltages are measured from the − terminal of the first battery.

## Going further

- Lab connection: measure a real battery's terminal voltage against load current; the slope is −r and the intercept is ε. Then show by calculus that the load power peaks at R = r.
