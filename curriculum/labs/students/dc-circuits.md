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
4. In the Series bulbs setup, ammeter A1 reads the current flowing into the first bulb, and A2 the current flowing out of it on its way to the second bulb. Is A2's reading larger than, smaller than or equal to A1's? What makes you think so?

## Safety

Switch off a real supply before rewiring. Begin with its current limit set low. Never connect an ammeter directly across the supply, and check resistor power ratings.

## Procedure

**Series and parallel.** Use a 6 V supply and two 10 Ω resistive loads, or instructor assigned values: in the demo, the Series bulbs setup (6 V battery, two 10 Ω bulbs, ammeters A1 and A2). Measure current through each load and voltage across each (add a voltmeter beside each bulb). Repeat in parallel with the Parallel bulbs setup, including total source current: its A1 reads the total and A2 one bulb, so put a third ammeter in the other bulb's path.

**Voltage divider.** Use a 12 V source with $$R_2 = 1.0\ \text{k}\Omega$$ (the Voltage divider setup; its voltmeter V_out is across $$R_2$$ and its ammeter A1 is in the battery's path). Take four $$R_1$$ settings from approximately 1.0 to 4.7 kΩ: select R1 and set Resistance R to 1.0, 2.2, 3.3 and 4.7 kΩ, all on the slider. Measure $$V_{\rm out}$$ across $$R_2$$ and the current on A1. Press Record reading at each setting. Keep the output unloaded.

**A multiloop circuit.** Choose a bridge circuit: the Wheatstone bridge setup (R1 to R4 and the galvanometer ammeter G). Label the nodes and current arrows. To measure the branch currents, put an ammeter in the path of each resistor you need; for the voltage changes, a voltmeter beside each part in the loop. Use measured currents to test two independent junctions and measured voltage changes to test two loops. Include a drawing that defines every sign.

**The loop rule as a landscape.** Open the Wheatstone bridge and switch modes to the Potential view (the Potential button above the drawing), which raises every point of the circuit to its potential above the board (0 V). Drag on the drawing to turn the view so you can see each loop. Note where the circuit climbs and where it descends, and read the node potentials. Unbalance the bridge by changing one resistor (switch back to Schematic to select it and change its value, then return to Potential) and watch how the heights of the two midpoints and the current through the galvanometer change.

**Using the virtual apparatus.** Work in the DC analysis mode with predictions and answers hidden (tick Blind: hide predictions and answers under Lab), starting from the series bulbs, parallel bulbs, voltage divider and Wheatstone bridge circuits. The bulbs here are fixed resistors. Set each part's value, connect each ammeter in series with the part you measure and each voltmeter across it, and keep a copy of the schematic. To put an ammeter in a current path, first delete a short wire in that path and place the ammeter across the gap. To measure a voltage, connect the voltmeter beside the part with two short leads, one to each end: a part dropped on top of other parts replaces them, so a voltmeter laid straight across a bulb's two ends takes the bulb out of the circuit. Press Record reading after each change and press Export to worksheet before you change circuits; each meter of each reading becomes a row of the Data table, with the part values. Check your own sums first, then compare them with the demo's checks: open Kirchhoff check, press Junction rule and click a dot where parts meet, or press Loop rule and select a part.

## Data

| Setup and resistor values | Meter/branch | $$I$$ (A) | Voltage rise/drop (V) | $$P$$ (W) | Junction/loop label | Divider ratio |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |
| | | | | | | |

Add rows as needed. Fill in $$P = IV$$ and the junction or loop label yourself. For the voltage divider, fill in the divider ratio $$R_2/(R_1+R_2)$$ yourself on the rows of the voltmeter across $$R_2$$, so that the graph fits those rows. Attach a schematic with meter polarity, current arrows and loop directions.

## Analysis

1. Infer the equivalent resistance from source voltage and total current. Compare with the series/parallel formulas.
2. Plot $$V_{\rm out}$$ (vertical) against $$R_2/(R_1+R_2)$$ (horizontal), one point for each of your four $$R_1$$ settings. Infer the source voltage from the slope.
3. Calculate the signed current residual at each chosen junction and voltage residual around each loop.
4. Sum resistor powers and compare with source power.
5. From the Potential view of the bridge, list the rises and drops around each of your two loops. Use them to explain the loop rule as a statement about height: why must every closed path return to the height it started at? Why does no current flow through the galvanometer when the bridge is balanced?

## Uncertainty

Use meter resolution and component tolerances for a real bench. For the virtual bench, captured readings have three significant figures. Propagate their rounding into junction/loop residuals rather than expecting rounded numbers to cancel exactly. A simulated zero residual is a consistency check, not evidence about meter loading in a real circuit.

## Questions

1. Why does connecting a load across a divider generally change its output voltage?
2. Look back at Before the lab 4. How did A2 compare with A1 in your series reading? Explain it with the junction rule and with what a bulb takes from each charge that passes through it.

## What to hand in

Prelab answers, labeled schematics, data/CSV, equivalent resistances, divider graph, junction/loop and power checks, uncertainty and answers to the questions. Identify simulated data.
