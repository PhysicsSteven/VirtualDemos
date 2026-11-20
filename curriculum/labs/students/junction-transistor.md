# A Real Diode and the Junction Transistor
Student laboratory · Physics II and Modern Physics

Textbook: OpenStax *University Physics*, Vol. 3, §9.7 (Semiconductor Devices). Access for free at https://openstax.org/details/books/university-physics-volume-3.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/circuits.html#diode)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups for this worksheet:** Diode (Part 1) and Transistor switch (Part 2), in the row of starter circuits. The other setups belong to the Kirchhoff, RC, RLC and AC worksheets.

**Using the demo.**

- The diode is a 1N4148 small signal silicon diode, modeled with the maker's published values: $$I = I_s\left(e^{eV/nkT} - 1\right)$$ with $$I_s = 4.352$$ nA, ideality factor $$n = 1.906$$ and a series resistance of 0.6458 Ω, at 27 °C (300.15 K, the temperature the maker gives the values for). Reverse breakdown (above 100 V) is left out.
- The transistor is a 2N3904 NPN silicon transistor (PNP is an option), modeled with the Ebers–Moll equations. Its current gain $$\beta$$ is a setting of the part (100 unless you change it); the data sheet gives 100 to 300 at a collector current of 10 mA. The base–collector and base–emitter junctions both follow the diode law, so the model saturates when the collector voltage falls too low, as a real transistor does. Left out: the Early effect (the slow rise of collector current with collector voltage), the junctions' stored charge and capacitance, and the base and collector bulk resistances, so the model is a DC model and its current gain in the active region is exactly $$\beta$$.
- LEDs use catalog forward voltages at 20 mA (red 1.85 V, green 3.2 V, blue 3.3 V), with an assumed ideality factor of 2 and no series resistance.
- The circuit is solved exactly for the diode and transistor equations (Newton's method, to better than 10⁻¹⁰ V). Meters are ideal.
- Record reading under Readings stores what every meter shows, to 3 significant figures, with the part values. Export to worksheet sends a DC series that contains a diode or a transistor to this worksheet; Clear starts a new series, which goes into a new copy of the table.
- Blind hides the transistor's base and collector currents and its region of operation; the meters still read.

</details>

## Goal

Measure the current–voltage law of a real silicon diode and find how far it is from the ideal diode, then measure the current gain of a junction transistor and watch it change from an amplifier into a switch.

## Background

A pn junction passes a current that grows exponentially with the forward bias (§9.7, Eq. 9.36). A real diode follows the same law with one extra number, the ideality factor $$n$$, which is 1 for the ideal junction of the book and between 1 and 2 for real silicon diodes (beyond the book: some carriers recombine inside the depletion region):

$$I = I_s\left(e^{eV/nkT} - 1\right) \approx I_s\, e^{eV/nkT}\quad (eV \gg nkT),$$

so $$\ln I = \ln I_s + \dfrac{e}{nkT}V$$ is a straight line in $$V$$ with slope $$e/(nkT)$$.

A junction transistor (§9.7, Fig. 9.26) is two junctions back to back: an n type emitter, a thin p type base and an n type collector. With the base–emitter junction forward biased and the base–collector junction reverse biased (the active region), almost every electron injected from the emitter crosses the thin base into the collector, and a small base current controls a large collector current (Eq. 9.37):

$$I_C = \beta I_B .$$

When the base current is large enough that $$\beta I_B$$ is more than the collector circuit can carry, the collector voltage falls to about 0.1 V and the transistor is saturated: it acts as a closed switch, and $$I_C$$ is set by the rest of the circuit, not by $$\beta$$.

## Before the lab

1. At 300 K, $$kT/e = 25.9$$ mV. For a diode with $$n = 1.9$$, by how much must the forward voltage rise to multiply the current by 10?
2. In the Transistor switch setup, a 9 V battery drives the base through $$R_B$$. Take the base–emitter voltage as 0.7 V and $$\beta = 100$$. Find $$I_B$$ and $$I_C$$ for $$R_B = 100\ \text{k}\Omega$$.
3. The collector circuit is the 9 V battery, a 470 Ω resistor and a red LED (about 1.8 V). With the transistor saturated (0.1 V across it), what collector current flows? What base current, and what $$R_B$$, are needed to reach it?
4. Suppose that in the Transistor switch setup you double the transistor's current gain β from 100 to 200 and leave everything else alone. What happens to the collector current at $$R_B = 470$$ kΩ, and what happens to it at $$R_B = 22$$ kΩ: does it double, stay about the same or change some other way? Give a reason for each.

## Safety

No hazards in the virtual lab. On a real bench, never connect a diode or a transistor's base straight across a supply without a series resistor, and keep the collector current below the part's rating (200 mA for the 2N3904).

## Procedure

**Part 1, a real diode.** Open the Diode setup (2.0 V battery, series resistor, diode, ammeter A1 in series and voltmeter across the diode). Select the series resistor R1 (the setup opens with the battery selected). Set its Resistance R, then press Record reading, at 1 MΩ, 220 kΩ, 47 kΩ, 10 kΩ, 2.2 kΩ and 1 kΩ, then at 470 Ω, 220 Ω and 100 Ω. All are on the Resistance R slider. Press Export to worksheet.

**Part 2, the transistor.** Press Clear and open the Transistor switch setup (R_B is selected). A1 reads the base current and A2 the collector current; the voltmeter reads $$V_{CE}$$. Set Resistance R and press Record reading with $$R_B$$ at 1 MΩ, 470 kΩ, 100 kΩ and 68 kΩ, and press Export to worksheet; they go into a second copy of the table. Press Clear, then continue at 56 kΩ, 47 kΩ, 22 kΩ and 10 kΩ and press Export to worksheet again, into a third copy. Watch the LED as you go. Last, select the transistor Q1 and set its Current gain β to 200; select $$R_B$$ again, set it to 470 kΩ and then to 22 kΩ, and read A2 at each (no need to record). Write both in your answer to Question 2, next to your β = 100 readings at the same $$R_B$$.

## Data

Part 1 goes in the first copy of the table and Part 2 in the second and third. Fill in the last two columns yourself: ln I for Part 1, A2/A1 for Part 2. Each copy's graph fits a line to every row that has both of its columns filled.

| Reading | Setup and parts | A1 current (A) | A2 current (A) | Voltmeter (V) | ln(I_A1 / 1 A) | A2/A1 |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |
| | | | | | | |

## Analysis

1. Part 1: plot $$\ln I$$ (vertical) against the diode voltage, the Voltmeter column (horizontal). Fill in ln I only for the readings from 1 kΩ to 1 MΩ, so that the straight line fits those. From the slope, find the ideality factor $$n$$ (use $$kT/e = 25.87$$ mV at 300.15 K). From the intercept, find $$I_s$$.
2. How many volts does the diode voltage rise for each factor of 10 in current? Compare with an ideal diode ($$n = 1$$).
3. Part 2: plot $$I_C$$ (A2) against $$I_B$$ (A1) for the first series, where $$V_{CE}$$ stays above 1 V, and give $$\beta$$ from the slope of the straight line.
4. Complete the A2/A1 column in both copies. Where does $$I_C/I_B$$ stop being constant? What is $$V_{CE}$$ there, and what limits $$I_C$$ beyond that point? Compare with your answer to prelab question 3.

## Questions

1. Why does a transistor used as a switch run in saturation rather than in the active region?
2. What did doubling β do to A2 at 470 kΩ and at 22 kΩ, and is that what you said in Before the lab 4? Explain, from what sets the collector current in each region of operation, why each reading responded as it did.

## Uncertainty

For courses that treat measurement uncertainty. This section is not counted in the 75 minutes; do it when your instructor assigns it.
{: .ws-assigned}

Report $$n$$, $$I_s$$ and $$\beta$$ with the standard errors of the fits. The readings have three significant figures: how large is the rounding of the diode voltage compared with the 0.1 V spread of your Part 1 readings per decade of current? Explain why the readings at 470 Ω, 220 Ω and 100 Ω are left out of the Part 1 fit.

## What to hand in

Prelab answers, both data tables with their graphs, $$n$$ and $$I_s$$, $$\beta$$, the A2/A1 column, and answers to the questions (and to Uncertainty, if assigned). Identify simulated data.
