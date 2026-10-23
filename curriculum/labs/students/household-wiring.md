# Household Wiring and Electrical Safety
Student laboratory · Physics II

Textbook: OpenStax *University Physics*, Vol. 2, §10.6. Access for free at https://openstax.org/details/books/university-physics-volume-2.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/household-wiring.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** A lamp; Toaster and kettle; Short circuit; Worn cord, grounded case; No ground, dry hand; No ground, wet hand.

**Using the demo.** One 120 V branch circuit runs from the service panel to a kitchen outlet in three wires: hot, neutral and ground. Appliances (a 100 W lamp, a 1200 W toaster, a 1500 W kettle and a 1500 W space heater) plug in from the Appliances list. Wiring sets the copper wire (14 or 12 gauge), the breaker (15, 20 or 30 A), the length of the run, a GFCI outlet and whether the ground wire is connected. Faults and people adds a fault (hot touching neutral, or hot touching the toaster's metal case), a person touching the case with dry or wet skin, and a button to reset the breaker and the GFCI. Readouts show the currents in each wire and through the person, the voltage at the outlet, the power and the heat in the wire. Blind hides the currents and what the protection will do until a device trips.

**What the demo models.** Every appliance is a resistor, $$R = (120\ \mathrm{V})^2/P$$ from its rating; the rms currents follow from Ohm's law and Kirchhoff's rules for the whole circuit, wires included ($$\rho = 1.68\times10^{-8}\ \Omega\cdot\mathrm{m}$$ at 20 °C; 14 gauge is 1.628 mm across, 12 gauge 2.053 mm). The source is an ideal 120 V and the neutral and ground are bonded at the panel. A fault contact is 0.10 Ω (chosen). The person is 200 kΩ (dry) or 10.0 kΩ (wet), hand to feet, with a perfect path back through the floor (OpenStax §10.6). The breaker trips at once above 10 times its rating and after 2 s of any smaller overload (a chosen delay); the GFCI trips when the hot and neutral currents differ by more than 5 mA. Simulated data with no noise.

</details>

## Goal

Find how the current in a household circuit depends on what is plugged in, how the wires heat and drop voltage, and which safety device protects the wiring and which protects a person.

## Background

Outlets on one circuit are in parallel, so each appliance gets the full voltage and the currents add. An appliance rated $$P$$ at $$V = 120$$ V draws an rms current

$$I = \frac{P}{V},$$

and the hot wire carries the sum. The copper wires have a small resistance, $$R_w = \rho L/A$$ each way, so the voltage at the outlet is lower than 120 V by $$2IR_w$$ (out on the hot, back on the neutral), and each metre of wire turns $$I^2\rho/A$$ into heat. A breaker opens when the current exceeds its rating, to keep the wires from overheating; it must be matched to the wire's gauge. Normally the hot and neutral currents are equal and the ground wire carries nothing. If the hot wire touches a metal case, the ground wire carries a large fault current back to the panel and the breaker trips. Without a ground the case sits at 120 V, and a person touching it carries a current $$I = V/R_{\text{body}}$$, far too small for a breaker to notice. A ground fault circuit interrupter (GFCI) compares the hot and neutral currents and opens the circuit when they differ by more than 5 mA. Effects of current through the body (OpenStax §10.6): sensation from about 1 mA, apparently harmless below 5 mA, sustained muscle contraction (unable to let go) from 5 to 30 mA and above, and above 300 mA through the heart, death may occur.

## Before the lab

1. Find the current drawn by the 100 W lamp, the 1200 W toaster and the 1500 W kettle at 120 V. What does the hot wire carry with the toaster and kettle together? Will a 15 A breaker hold?
2. Find the resistance of 15 m of 14 gauge copper wire (diameter 1.628 mm). With a 12.5 A load, find the voltage drop over the hot and neutral together, and the heat per metre of hot wire.
3. A person touches a live case at 120 V. Find the current with dry skin (200 kΩ) and with wet skin (10.0 kΩ). What does each feel like?
4. Why does a GFCI protect the person in Question 3 when a 15 A breaker does not?

## Safety

Never open a service panel or work on household wiring; this lab is done entirely in the simulation. Do not use appliances with damaged cords, and keep electrical appliances away from water.

## Procedure

Before each part, predict what the currents will be and whether the breaker or the GFCI will trip. Then measure.

**Part 1: appliances in parallel.** With 15 m of 14 gauge wire and a 15 A breaker, measure the currents, the outlet voltage and the power with the lamp alone, the toaster alone, the lamp and the toaster together, and the toaster and the kettle together.

**Part 2: the wires.** With the space heater alone, measure the outlet voltage and the heat in the wire with 14 gauge wire 5, 10, 15, 20 and 30 m long, then with 12 gauge wire 30 m long.

**Part 3: sizing the breaker.** With the toaster and the kettle on 15 m of 14 gauge wire, measure with a 15 A, a 20 A and a 30 A breaker; note which trip. Then try 12 gauge wire with the 20 A breaker.

**Part 4: faults.** Measure the currents and the protection in each fault setup: the short circuit; the worn cord with the case grounded and a person touching it; the case not grounded with a dry hand; the same with a wet hand; and the wet hand with a GFCI outlet.

**Using the virtual apparatus.** A tripped breaker or GFCI stays open until you reset it; reset it before each new reading. A reading taken after a trip records the currents just before the device opened. Blind hides the currents until something trips, so turn it off to record. Send each part to the worksheet before clearing, so each part gets its own copy of the Data table.

## Data

| Trial | Setup | Hot current (A) | Neutral current (A) | Ground current (A) | Current through the person (mA) | Outlet voltage (V) | Power (W) | Wire heat (W/m) | Protection |
|---|---|---|---|---|---|---|---|---|---|
| | | | | | | | | | |
| | | | | | | | | | |
| | | | | | | | | | |
| | | | | | | | | | |
| | | | | | | | | | |

## Analysis

1. For Part 1, compare each hot current with the sum of $$P/V$$ for the appliances plugged in. Why is the measured current a little less, and why is the power a little less than the ratings?
2. For Part 2, find the resistance of the wire for each length from the drop below 120 V, $$\Delta V = 2IR_w$$, and divide by the length. Compare the mean resistance per metre with $$\rho/A$$ for 14 gauge and for 12 gauge. Is the drop proportional to the length? Why not exactly? How much does 12 gauge improve the voltage and the heating at 30 m?
3. For Part 3, explain which breakers trip and which do not, and why a 30 A breaker on 14 gauge wire is dangerous even though nothing trips. Use the heat per metre of wire.
4. For Part 4, explain each result: which device acted, how large the current was, and whether the person was safe. Why does the ground wire make the breaker trip, and why can the GFCI act when the breaker cannot?

## Uncertainty

The simulation solves the circuit exactly, and readings are shown to three or four significant figures, so the results carry no measurement scatter. The approximations are in the model: appliances as fixed resistors (a lamp's filament has a much lower resistance when cold), copper at 20 °C (its resistance rises about 0.4 % per kelvin as it heats), an ideal 120 V supply, and fixed body resistances, where real values vary widely with contact area, moisture and the path through the body.

## Questions

1. Why are household appliances connected in parallel and not in series?
2. Why does a three prong plug have a ground pin, and why is cutting it off dangerous?
3. Why are GFCI outlets required in bathrooms and kitchens?
4. A breaker trips each time two appliances run together. Why is replacing it with a larger breaker the wrong fix?

## What to hand in

Prelab answers, a Data table copy for each part, the resistance per metre from Part 2, your explanations of each fault, and answers to the questions. Identify simulated data.
