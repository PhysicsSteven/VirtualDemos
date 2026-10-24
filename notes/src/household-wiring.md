---
title: Household Wiring and Electrical Safety
level: PHYS 202
time: 15 to 25 minutes
---
## What students should come away with

- Appliances on a branch circuit are in parallel, so their currents add. A circuit breaker on the hot wire limits that total to protect the wires from overheating (P = I²R in the wire), not to protect people.
- A short circuit is limited only by the wires, so the current is hundreds of amperes and the breaker trips at once.
- The ground wire gives a fault a low resistance path, so a live metal case trips the breaker instead of shocking someone.
- Without a ground, the person is the path. A shock of a few milliamperes is far too small for a breaker, but a GFCI sees the difference between the hot and neutral currents and trips above 5 mA.
- The same 120 V gives 0.6 mA through dry skin and 12 mA through wet skin (OpenStax §10.6): the body's resistance decides the danger.

## Before class

Students need Ohm's law, power P = IV = I²R = V²/R, and series and parallel resistors. **Blind** hides the currents and whether a device will trip, so students can predict first.

## Running it in class

1. **A lamp.** 0.83 A, the same in hot and neutral, none in the ground. Add the toaster and the kettle: 21.5 A on a 15 A breaker. Ask: is anything broken? The breaker trips after 2 s. Change to 12 gauge and 20 A: the wire is now rated for it, but the toaster and kettle still draw 21.9 A, so the 20 A breaker trips too; drop the kettle and it holds.
2. **The wrong breaker.** 14 gauge wire on a 30 A breaker with the toaster, kettle and heater: the breaker holds (about 33 A), but the heat in the wire is 8.6 W per metre, nearly five times the 1.8 W/m at 15 A. This is why the breaker is matched to the wire.
3. **Short circuit.** About 350 A for 15 m of 14 gauge wire. Shorten the run: the current goes up.
4. **Worn cord, grounded case.** The ground wire carries about 350 A and the breaker trips at once; the person in parallel gets only about 0.2 mA, for an instant.
5. **No ground, dry hand, then wet hand.** 0.6 mA, then 12 mA, and the breaker does nothing. Turn on the GFCI and repeat.

## Questions

**Q1.** A toaster (1200 W) and a kettle (1500 W) are plugged into one 120 V outlet. Ignoring the wires, what current do they draw together? Will a 15 A breaker hold? What about a 20 A breaker?

**Q2.** 14 gauge copper wire is 1.628 mm in diameter. Find its resistance per metre (ρ = 1.68 × 10⁻⁸ Ω·m) and the heat per metre at 15 A and at 25 A. Why must the breaker match the wire, and not the appliances?

**Q3.** The outlet is 15 m of 14 gauge wire from the panel. Hot touches neutral through 0.10 Ω at the outlet. Estimate the current. Why does the breaker trip at once?

**Q4.** A person with wet hands (10.0 kΩ, hand to feet) touches a live toaster case with no ground. Find the current and say what it does. Why does the 15 A breaker not trip? What does a GFCI measure, and why does it trip?

**Q5.** With the ground wire connected, the same person touches the same faulty toaster. Explain, using parallel resistances, why almost no current goes through the person.

## Common misconceptions

- **"The breaker protects people."** It trips at amperes; a few milliamperes can be dangerous. The GFCI protects people.
- **"Voltage kills, so 120 V is always deadly."** The current through the body depends on its resistance: dry skin keeps it below a milliampere.
- **"The ground wire normally carries current."** It carries current only during a fault.
- **"A bigger breaker is safer because it trips less."** It lets the wires overheat.

## Physics behind the demo

- Appliances are resistors, R = V²/P at 120 V. The circuit (hot, neutral and ground wires, loads, fault and person) is solved exactly by nodal analysis for rms currents; with only resistors, rms values obey Ohm's and Kirchhoff's rules.
- Copper ρ = 1.68 × 10⁻⁸ Ω·m; 14 gauge 1.628 mm, 12 gauge 2.053 mm. Fault contact 0.10 Ω (chosen). Neutral and ground bonded at the panel; the floor and earth path is taken as zero resistance.
- Body resistance 200 kΩ dry, 10.0 kΩ wet; effects of current and the 5 mA GFCI setting from OpenStax §10.6. Breaker: instant above 10 times its rating, after 2 s for lesser overloads (a chosen delay).
