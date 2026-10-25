# Current, Voltage and Kirchhoff's Rules
Student laboratory · Physics II

Textbook: OpenStax *University Physics*, Vol. 2, §§9.4–9.5 and 10.1–10.4. Access for free at https://openstax.org/details/books/university-physics-volume-2.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/circuits.html#dc)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Using the demo.**

- Click a switch on the drawing to flip it while the circuit runs. The plots and the clock show the circuit's own time: fast changes play in slow motion, slow ones fast forward.
- Step forward pauses the circuit, moves it on by exactly $$\Delta t$$ and puts the time cursor at the new time.
- Work done by the sources goes into stored energy, $$\tfrac{1}{2}CV^2$$ in capacitors and $$\tfrac{1}{2}LI^2$$ in inductors, or turns into heat. The difference line checks the bookkeeping.
- The equivalent resistance is what the battery sees: the rest of the circuit with every other battery replaced by its internal resistance. Power drawn from the EMFs always equals the power turned into heat and light.
- Pick a part above the drawing, then drag from one dot to another, or tap two dots. A part dragged over more than one step gets wires to fill the gap; a wire that turns a corner goes across first, then down. Batteries, sources and meters have their + end where you start. With Select, drag a part or a dot to move it, click a switch to flip it, and drag the grip beside a selected part's label to change its value.

</details>

## Goal

Measure currents and voltages in series and parallel circuits, then test the junction and loop rules using your readings.

## Background

Ohm's law and resistor power are (§§9.4–9.5)

$$V=IR,\qquad P=IV=I^2R.$$

For ideal series and parallel combinations (§10.2),

$$R_s=R_1+R_2,\qquad \frac{1}{R_p}=\frac{1}{R_1}+\frac{1}{R_2}.$$

Charge conservation gives the junction rule. Energy conservation gives the loop rule (§10.3):

$$\sum I_{\rm in}=\sum I_{\rm out},\qquad \sum_{\rm loop}\Delta V=0.$$

Choose loop directions and current arrows before inserting signs. A voltmeter goes across a component; an ammeter goes in its current path (§10.4).

## Before the lab

1. For two equal resistors, compare equivalent resistance in series and parallel.
2. What happens if an ideal ammeter is connected directly across a battery?
3. Derive the voltage across $$R_2$$ when $$R_1$$ and $$R_2$$ form an unloaded voltage divider.

## Safety

Switch off a real supply before rewiring. Begin with its current limit set low. Never connect an ammeter directly across the supply, and check resistor power ratings.

## Procedure

**Series and parallel.** Use a 6 V supply and two 10 Ω resistive loads, or instructor assigned values. Measure current through each load and voltage across each. Repeat in parallel, including total source current. Change one load to 20 Ω and repeat both configurations.

**Voltage divider.** Use a 12 V source with $$R_2 = 1.0\ \text{k}\Omega$$. Take five $$R_1$$ settings from approximately 1.0 to 4.7 kΩ. Measure $$V_{\rm out}$$ across $$R_2$$ and the current. Keep the output unloaded.

**A multiloop circuit.** Choose a bridge circuit. Label the nodes and current arrows. Use measured currents to test two independent junctions and measured voltage changes to test two loops. Change one resistance and repeat. Include a drawing that defines every sign.

**Using the virtual apparatus.** Work in DC with predictions and answers hidden, starting from the series bulbs, parallel bulbs, voltage divider and Wheatstone bridge circuits. The bulbs here are fixed resistors. Set each part's value, connect each ammeter in series with the part you measure and each voltmeter across it, and keep a copy of the schematic. To put an ammeter in a current path, first delete a short wire in that path and place the ammeter across the gap: an ammeter laid alongside a wire shares the current with the wire and reads too little. Record a reading after each change and send the readings to the worksheet before you change circuits; each meter of each reading becomes a row of the Data table, with the part values. Check your own sums first, then compare them with the demo's junction rule and loop rule checks.

## Data

| Setup and resistor values | Meter/branch | $$I$$ (A) | Voltage rise/drop (V) | $$P$$ (W) | Junction/loop label | Divider ratio |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |
| | | | | | | |

Add rows as needed. For the voltage divider, fill in the divider ratio $$R_2/(R_1+R_2)$$ yourself on the rows of the voltmeter across $$R_2$$, so that the graph fits those rows. Attach a schematic with meter polarity, current arrows and loop directions.

## Analysis

1. Infer the equivalent resistance from source voltage and total current. Compare with the series/parallel formulas.
2. Plot $$V_{\rm out}$$ against $$R_2/(R_1+R_2)$$. Infer the source voltage from the slope.
3. Calculate the signed current residual at each chosen junction and voltage residual around each loop.
4. Sum resistor powers and compare with source power. Explain which readings are independent and which are derived from the same model.

## Uncertainty

Use meter resolution and component tolerances for a real bench. For the virtual bench, captured readings have three significant figures. Propagate their rounding into junction/loop residuals rather than expecting rounded numbers to cancel exactly. A simulated zero residual is a consistency check, not evidence about meter loading in a real circuit.

## Questions

1. Why is current the same everywhere in a single series path?
2. Why can parallel branches carry different currents at the same voltage?
3. What does a negative solved current mean?
4. Why does connecting a load across a divider generally change its output voltage?

## What to hand in

Prelab answers, labeled schematics, data/CSV, equivalent resistances, divider graph, junction/loop and power checks, uncertainty and answers to the questions. Identify simulated data.
