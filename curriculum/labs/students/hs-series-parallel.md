# Series and Parallel Circuits
Student worksheet · High school Physics and College Physics 2e

Textbook: OpenStax *Physics* (high school), §§19.2–19.3, and OpenStax *College Physics 2e*, §21.1. Access for free at https://openstax.org/details/books/physics and https://openstax.org/details/books/college-physics-2e.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/circuits.html?ws=hs-series-parallel#dc)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups used here:** Series bulbs and Parallel bulbs, under Setups. Each has a 6 V battery B1 and two bulbs, L1 and L2, of 10 Ω each. The bulbs here act as fixed resistors.

**Using the demo.**

- Pick a part from the row of tools above the drawing, then drag from one dot to another to place it. **Select** (the arrow) lets you click a part to change its value under Selected, or drag it to move it.
- An ammeter (A) measures the current through it, so it goes in the path of the current. A voltmeter (V) measures the voltage between its two ends, so it goes beside a part, one lead to each end of the part.
- **Record reading** (under Readings) stores every meter's reading at that moment, one row per meter, with the value of every part. **Export to worksheet** sends the readings to this page's Data table; **Clear** starts a new series, which goes into a new copy of the table.

**What the demo models.** The battery keeps 6.00 V across its ends (no internal resistance), the wires have no resistance, the ammeters have none and the voltmeters draw no current.

</details>

## Goal

Measure the current through and the voltage across two bulbs connected in series and then in parallel, find the equivalent resistance of each circuit, and test whether a bulb uses up current.

## Background

**Current** $$I$$ is the charge flowing past a point each second, measured in amperes (A). The **voltage** $$V$$ across a part is the energy each coulomb of charge gives up in passing through it, in volts (V). For a resistor, **Ohm's law** says $$V = IR$$, where $$R$$ is the resistance in ohms (Ω). The power a part turns into heat and light is $$P = IV$$: a bulb with more power glows brighter.

**Series.** Parts in series sit one after another on a single path. The same current flows through each of them, and the battery voltage is shared among them: $$V = V_1 + V_2$$. The **equivalent resistance**, the one resistor that would draw the same current from the battery, is

$$R_\mathrm{s} = R_1 + R_2.$$

**Parallel.** Parts in parallel each connect straight across the battery, so each gets the full battery voltage. The current splits between the branches and joins up again: the battery current is $$I = I_1 + I_2$$. The equivalent resistance is found from

$$\frac{1}{R_\mathrm{p}} = \frac{1}{R_1} + \frac{1}{R_2}.$$

It is smaller than either resistance alone, because each new branch is one more path for the current.

In both cases you can measure the equivalent resistance as the battery voltage divided by the battery current: $$R_\mathrm{eq} = V_\mathrm{battery}/I_\mathrm{battery}$$.

## Before the lab

1. A 6.00 V battery is connected to a 10 Ω and a 20 Ω resistor in series. Find the equivalent resistance, the current, and the voltage across each resistor.
2. The same two resistors are connected in parallel across the 6.00 V battery. Find the current in each, the battery current and the equivalent resistance.
3. For the series circuit of item 1, find the power of each resistor. If they were bulbs, which would glow brighter? Do the same for the parallel circuit of item 2.
4. In the Series bulbs circuit, ammeter A1 is in the path before the current reaches bulb L1, and ammeter A2 is in the path after L1, before L2. Some people say the current gets smaller after each bulb, because the bulb uses some of it up to make light. Will A2 read less than A1, the same, or more? Write your guess and the reason for it before you open the demo.

## Safety

No hazards in the virtual lab. With a real battery, never connect a wire straight across it, and never put an ammeter straight across a battery: either one draws a large current that heats the wire and the battery.

## Procedure

The link at the top opens the Circuits demo in its DC analysis mode. In the Lab fold, tick **Blind: hide predictions and answers**.

**Part 1: series.** Press **Series bulbs** under Setups. Read A1 and A2 and compare them with your guess in Before the lab 4. Then add a voltmeter beside each bulb: put V1 beside L1 first, then V2 beside L2. To add one, pick **Wire** from the tools and draw a short wire from each end of the bulb, one grid step away from it on the side with nothing on it; then pick **Voltmeter** (V) and drag from the end of one short wire to the end of the other. (A meter dropped straight on top of the bulb would replace the bulb.) Press **Record reading**. Then pick **Select** (the arrow), click bulb L2, type 20 in the **Resistance R** box under Selected and press Enter, and record another reading. Press **Export to worksheet**, then **Clear**: each meter of each reading becomes a row of the Data table.

**Part 2: parallel.** Press **Parallel bulbs** under Setups. Here A1 reads the battery current and A2 the current in L1's branch. Add V1 beside L1 and V2 beside L2 the same way, and press Record reading. Then set L2 to 20 Ω and record another reading. Press Export to worksheet: these readings go to a second copy of the table.

Then fill in the Results table from your Data tables.

## Data

| Reading, setup and part values | Meter | Current $$I$$ (A) | Voltage $$V$$ (V) |
|---|---|---|---|
| | | | |
| | | | |
| | | | |

**Results.** One row for each of your four readings. $$I_1$$ and $$I_2$$ are the currents in L1 and L2; in the parallel circuit, find $$I_2$$ from $$I_2 = I_\mathrm{battery} - I_1$$.

| Circuit | $$R_2$$ (Ω) | $$V_1$$ (V) | $$V_2$$ (V) | $$I_\mathrm{battery}$$ (A) | $$I_1$$ (A) | $$I_2$$ (A) | Measured $$R_\mathrm{eq} = 6.00\ \mathrm{V}/I_\mathrm{battery}$$ (Ω) | $$R_\mathrm{eq}$$ from the formula (Ω) | $$P_1 = I_1V_1$$ (W) | $$P_2 = I_2V_2$$ (W) |
|---|---|---|---|---|---|---|---|---|---|---|
| | | | | | | | | | | |
| | | | | | | | | | | |
| | | | | | | | | | | |
| | | | | | | | | | | |

## Analysis

1. For the two series readings, compare $$V_1 + V_2$$ with the battery voltage, 6.00 V. How do A1 and A2 compare?
2. For the series reading with $$R_2$$ = 20 Ω, find $$V_1/V_2$$ and compare it with $$R_1/R_2$$. Which bulb gets the bigger share of the voltage?
3. For the two parallel readings, compare $$V_1$$ and $$V_2$$ with the battery voltage. Check Ohm's law for each bulb: does $$V_1/I_1$$ give $$R_1$$, and $$V_2/I_2$$ give $$R_2$$?
4. Compare the measured equivalent resistance of each circuit with the formula. Which circuit has the smaller equivalent resistance, and which draws more current from the battery?
5. With $$R_2$$ = 20 Ω, which bulb has the larger power in the series circuit, and which in the parallel circuit? Explain the difference using $$P = I^2R$$ for series (same current) and $$P = V^2/R$$ for parallel (same voltage).

## Questions

1. Look back at your guess in Before the lab 4. What did A1 and A2 read in the series circuit? If the bulb does not use up current, what does it use up? Explain using the meaning of current (charge per second) and voltage (energy per coulomb).
2. The lights in a house are wired in parallel, not in series. Use your results to give two reasons why: think about the voltage each light gets, and about what happens to the others when one bulb burns out.

## Uncertainty

For courses that treat measurement uncertainty. This section is not counted in the 75 minutes; do it when your instructor assigns it.
{: .ws-assigned}

The demo's meters are ideal, so the readings differ from the formulas only by rounding in their last digit. Check that every difference you found in Analysis 1 to 4 is no bigger than that. A real ammeter adds a small resistance to the path and a real voltmeter draws a small current, so real readings would differ a little more.

## What to hand in

Prelab answers, the two copies of the Data table, the Results table, and answers to the questions (and to Uncertainty, if assigned). Identify simulated data.
