# Meter Loading: When a Meter Changes What It Measures
Student laboratory · Physics II

Textbook: OpenStax *University Physics*, Vol. 2, §§10.2 and 10.4. Access for free at https://openstax.org/details/books/university-physics-volume-2.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/circuits.html#loading)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Using the demo.**

- The **Meter loading** setup (DC, under Setups) is a 12 V battery driving two resistors R1 and R2 in series, an ammeter A1 in the current path and a voltmeter V_out across R2.
- Both meters start as real meters: **Real meter (it has a resistance)** is ticked in the Selected card, and **Meter resistance R<sub>m</sub>** sets the resistance. The ammeter starts at R<sub>m</sub> = 1 Ω, in series with the branch; the voltmeter at R<sub>m</sub> = 10 MΩ, across R2. Untick it and the meter is ideal again (0 Ω or no current at all).
- Click a part with the Select tool (the arrow at the left of the parts bar) to select it; its value slider and number box appear in the Selected card. You can type a value in the box.
- **Record reading** (Readings card) stores every meter's reading to 3 significant figures, with the part values; **Export to worksheet** sends the rows to the Data table below; **Clear** starts a new series.
- These are computed values, not measurements: the demo solves the circuit exactly, so the same settings always give the same readings.

</details>

## Goal

Measure how much a real voltmeter and a real ammeter change the circuit they measure, find the rule that tells you when a meter can be trusted, and tell a reading error from a real feature of the circuit.

## Background

An ideal voltmeter draws no current and an ideal ammeter has no voltage across it, so neither changes the circuit (§10.4). A real meter has a resistance $$R_m$$.

A voltmeter is connected across the part it reads, so its $$R_m$$ is **in parallel** with that part. Across $$R_2$$ the two together are (§10.2)

$$R_\parallel = \frac{R_2 R_m}{R_2 + R_m},$$

which is always less than $$R_2$$. The divider then gives the voltmeter less than its share: with the ammeter's small resistance $$R_A$$ in the path,

$$V_{\rm read} = \varepsilon\,\frac{R_\parallel}{R_1 + R_\parallel + R_A}.$$

For two equal resistors $$R_1 = R_2 = R$$ and an ideal ammeter, the true voltage is $$\varepsilon/2$$, and the reading is low by the fraction

$$\frac{V_{\rm true} - V_{\rm read}}{V_{\rm true}} = \frac{R}{R + 2R_m}.$$

The error is small only when $$R_m \gg R$$: a voltmeter must have a large resistance compared with the circuit it reads.

An ammeter is connected **in series**, so its $$R_m = R_A$$ adds to the resistance of the path. With $$R_1 = R_2 = R$$ the current falls from $$\varepsilon/(2R)$$ to $$\varepsilon/(2R + R_A)$$, low by the fraction

$$\frac{R_A}{2R + R_A}.$$

An ammeter must have a small resistance compared with the circuit it is in. No meter is right for every circuit: a digital voltmeter's 10 MΩ is huge beside 1 kΩ and small beside 100 MΩ.

This is not an error of the model or of the computation. The loaded circuit really carries these currents: connecting the meter changed the circuit.

## Before the lab

1. In the Meter loading setup, ε = 12 V and R1 = R2 = 1.00 MΩ. Find V_out for an ideal voltmeter and for one with R<sub>m</sub> = 10.0 MΩ (ignore the ammeter's 1 Ω).
2. Start from the two expressions for $$V_{\rm read}$$ and $$R_\parallel$$ and show that the fractional error for equal resistors is $$R/(R + 2R_m)$$. For R<sub>m</sub> = 10 MΩ, what is the largest R for an error of 1%?
3. With R1 = R2 = 10.0 Ω, what current would an ideal ammeter read, and what does an ammeter with R<sub>m</sub> = 1.00 Ω read?

## Safety

No hazards in the virtual lab.

## Procedure

**A. One circuit, two meters.** Open the demo from the link above, or press **Meter loading** under Setups in DC mode. The voltmeter V_out is selected. Press **Record reading** in the Readings card. Now make R1 and R2 smaller together: click R1 with the Select tool, type 100000 in its number box (100 kΩ) and press Enter; do the same for R2; press **Record reading**. Repeat for R1 = R2 = 10 kΩ, 1 kΩ, 100 Ω and 10 Ω (type 10000, 1000, 100 and 10). Watch the two readings on the drawing as you go.

**B. A better and a worse voltmeter.** Press **Meter loading** again (R1 = R2 = 1 MΩ). Click V_out, type 1000000 (1 MΩ, like an old analog meter on a low range) in the **Meter resistance R<sub>m</sub>** box and press **Record reading**. Then type 100000000 (100 MΩ) and record again.

**C. Ideal meters.** Click R1 and R2 and set both to 10 Ω. Click A1 and untick **Real meter (it has a resistance)**; click V_out and untick it too. Press **Record reading**. Press **Export to worksheet** (the rows go to the Data table below), then fill in the last column yourself.

## Data

Table 1. Meter loading readings (ε = 12 V). Write "ideal" for the resistance of an ideal meter.

| Reading | R1 (Ω) | R2 (Ω) | Voltmeter R<sub>m</sub> (Ω) | V_out reading (V) | Ammeter R<sub>m</sub> (Ω) | A1 reading (A) | V_out low by (%) |
|---|---|---|---|---|---|---|---|
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |

## Analysis

1. For each row of part A, find how far V_out is below the ideal 6.00 V, as a percentage, and write it in the last column. Compare each with $$R/(R + 2R_m)$$ from Background. Below which R is the voltmeter's effect too small to see with three significant figures? In the last two rows V_out is low again, though the voltmeter's effect is tiny there: which meter lowers it, and why does it lower V_out by the same fraction as the current?
2. For each row of part A, find the ideal current $$\varepsilon/(2R)$$ and how far the A1 reading is below it, as a percentage. Compare with $$R_A/(2R + R_A)$$. In which rows does the ammeter's error matter and in which does the voltmeter's?
3. Graph the A1 reading (vertical) against R1 (horizontal) for the part A rows, with **Log scales** ticked. What slope does $$I = \varepsilon/(2R)$$ predict, and what slope do your middle rows give? At which end is the current above that line and at which end below it, and which meter causes each?
4. Using the two error formulas, find the range of R over which both meters in this setup are within 1% of the ideal reading.
5. From part B, how does the error change with the voltmeter's R<sub>m</sub>? Check the 1 MΩ and 100 MΩ readings against the formula.

## Uncertainty

The demo's readings are exact solutions of the circuit, rounded to 3 significant figures as a meter display shows them; there is no random scatter. Near 6 V the last digit is 0.01 V, about 0.2% of the reading, so a smaller loading error cannot be seen. Say which of your rows that limits, and how you would see the smaller errors with a meter that shows more digits.

## Questions

1. Explain in terms of series and parallel resistance why a voltmeter should have a very large resistance and an ammeter a very small one. What would happen if you put an ammeter across a battery by mistake?
2. A biologist reads the voltage across a cell membrane, which acts like a 70 mV source with a resistance of about 100 MΩ, using a 10 MΩ digital voltmeter. What fraction of the true voltage does the meter show? What kind of meter is needed?
3. Your readings in parts A and B differ from the ideal ones, yet the demo computes the circuit exactly. Is the difference an error of the computation, an error of the model, or a real effect? How could you test which, using the demo?

## What to hand in

Before the lab answers, the data table with your last column, the graph from Analysis 3, and your answers to the Analysis and Questions. Say that the data are computed by the demo, not measured.
