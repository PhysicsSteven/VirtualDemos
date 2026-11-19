# Charging and Discharging a Capacitor
Student laboratory · Physics II

Textbook: OpenStax *University Physics*, Vol. 2, §§10.3, 10.5 and 8.3. Access for free at https://openstax.org/details/books/university-physics-volume-2.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/circuits.html#rc)

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

Measure the time constant of an RC circuit, use it to find the capacitance, and follow the energy as the capacitor charges and discharges.

## Background

A resistor limits how quickly charge reaches a capacitor. Kirchhoff's loop rule (§10.3) gives

$$\varepsilon=IR+\frac{Q}{C},\qquad I=\frac{dQ}{dt}.$$

For an initially uncharged capacitor connected to a battery,

$$V_C=\varepsilon\left(1-e^{-t/RC}\right),\qquad I=\frac{\varepsilon}{R}e^{-t/RC}.$$

The time constant is $$\tau = RC$$ (§10.5). After one time constant, the capacitor has reached about 63% of its final voltage. During discharge,

$$V_C=V_{C0}e^{-t/RC}.$$

Stored energy follows §8.3. The battery does work on the charges. Some becomes electric energy in the capacitor, and the rest heats the resistor:

$$W=U_C+H,\qquad U_C=\frac12 CV_C^2.$$

## Before the lab

1. If $$R$$ doubles while $$C$$ stays fixed, what happens to the time constant?
2. Why can the capacitor voltage not jump when the switch changes position?
3. Derive the straight line relation obtained by plotting $$\ln(1 - V_C/\varepsilon)$$ against time during charging.
4. What if the battery's EMF doubles instead, from 10 V to 20 V, with R1 = 10 kΩ? Does the time constant halve, double or stay the same? Say why you think so.

## Safety

For a real circuit, turn off the supply before changing connections. Check the capacitor's polarity and voltage rating. Discharge it through the specified resistor before handling it.

## Procedure

**Charging.** Press the RC charging setup: a battery, the two way switch S1, R1 and C1 = 100 μF in series. Click the battery and type 10 in its EMF ε box, so $$\varepsilon = 10\ \text{V}$$ (or use the values assigned for your apparatus).

1. Press Reset: the capacitor starts discharged and S1 connects the battery at $$t = 0$$. Record the capacitor voltage and current as a function of time (see Using the virtual apparatus below).
2. Take at least six readings from the beginning until the voltage is close to its final value.
3. Repeat for R1 = 4.7, 10 and 22 kΩ: click R1 and type the value in its Resistance R box (in ohms), then Reset. Use the values you set in the calculations.
4. Set R1 back to 10 kΩ, type 20 in the battery's EMF ε box and press Reset. Find the time at which $$V_C$$ reaches 63.2% of 20 V, that is 12.64 V, and write it in your answer to Question 1. Then set ε back to 10 V.

**Discharging.** Let the capacitor charge for at least 5τ and record its voltage, then click S1 on the drawing to switch the battery out: the capacitor discharges through R1. Record voltage and current from the time of the switch.

**Energy.** For one charging run, record a reading at four times; each reading carries the source work $$W$$, the stored energy $$U_C$$ and the heat $$H$$ from the Energy since t = 0 panel. Compare their sum. Then press the Camera flash setup, let it charge, click S1 to flash, and record readings just before and after the switch, to compare a slow charge with the fast discharge.

**Watching the loop rule.** Reset the RC charging circuit, switch modes to the Potential view, and play it slowly. Watch the step across the capacitor grow while the slope of the resistor flattens, and note what stays the same at every instant.

**Using the virtual apparatus.** Work in the In time mode with Blind: hide predictions and answers ticked (in the Lab fold), starting from the RC charging setup, and set $$R$$ and $$C$$ to the values you need. Press Reset before each charging run and Pause when you read values. Read the circuit at the times you choose, either by picking a Step Δt and pressing Step forward, or by clicking the scope to place the time cursor, and press Record reading at each; after each run press Export to worksheet, then Clear; the worksheet gets the cursor readings and energies in the Data table, with the part values in its notes. For a whole trace, put the voltage and current on the scope (select a part, then Scope V or Scope I) and press Export scope CSV; the file holds only the visible scope window, so check that it covers the part of the run you need. Record the energy since $$t = 0$$ readings separately from the CSV. The flip mid way circuit switches during charging, and the camera flash circuit has separate charging and discharge resistances.

## Data

| $$t$$ (s) | $$V_C$$ (V) | $$I$$ (A) | $$W$$ (J) | $$U_C$$ (J) | $$H$$ (J) | Log ratio |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |
| | | | | | | |

Use a separate copy for each run. Write $$\varepsilon$$, $$R$$, $$C$$ and the switch time above it. Fill the energy columns for the energy run. Fill in the last column yourself: $$\ln(1 - V_C/\varepsilon)$$ for charging readings and $$\ln(V_C/V_{C0})$$ for readings after the switch in a discharge. Each copy's graph fits a line to every row that has both of its columns filled, so leave it blank on rows you leave out of the fit.

## Analysis

1. For the 10 kΩ run, find $$\tau$$ from the time when $$V_C$$ reaches 63.2% of $$\varepsilon$$.
2. Plot $$\ln(1 - V_C/\varepsilon)$$ against $$t$$. Find $$\tau$$ from the slope. Leave out points so close to the final voltage that rounding makes the logarithm unusable.
3. Plot $$\tau$$ against $$R$$ by hand or in a spreadsheet (the three values are not rows of one table). Find $$C$$ from the slope and compare it with the component value.
4. For discharge, plot $$\ln(V_C/V_{C0})$$ against time since switching. Compare its time constant with charging.
5. Check $$W - U_C - H$$ at each energy reading.
6. In the flash run, calculate the stored energy and initial discharge power from the voltage just before the switch. Do not assume the capacitor has reached the full battery voltage.
7. Using one of your readings, show that the battery's rise equals the drop across the resistor plus the step across the capacitor, $$\varepsilon = IR + V_C$$, and describe how the Potential view shows this at the start, at $$t = \tau$$ and near the end of charging.

## Uncertainty

Use the spacing between nearby time samples to estimate uncertainty in the 63.2% crossing. Include voltage rounding and resistor uncertainty where available. Use actual timestamps from the exported data. Do not add random scatter to a deterministic trace; describe the resolution with which you read it.

## Questions

1. Did the 20 V run bear out your answer to Before the lab 4? Use $$\varepsilon = IR + Q/C$$ to explain what doubling ε does to every voltage and current at each instant, and what it does to the time constant. Why, then, does a larger resistor change the charging time but not the final stored energy?
2. In the Capacitors and Dielectrics demo, the Sparks in air setup charges two spheres through a 100 GΩ resistor until the air breaks down at $$V_c$$, which empties them, and then the charging starts again. Use $$V_C = \varepsilon(1 - e^{-t/RC})$$ to show that the sparks repeat every $$T = RC\ln\big(\varepsilon/(\varepsilon - V_c)\big)$$. What happens when $$\varepsilon < V_c$$?

## With calculus

For courses that use calculus. This section is not counted in the 75 minutes; do it when your instructor assigns it.

1. Write the loop rule as $$R\,\frac{dQ}{dt}+\frac{Q}{C}=\varepsilon$$. Separate the variables, integrate from $$Q = 0$$ at $$t = 0$$, and derive $$Q(t)=C\varepsilon\left(1-e^{-t/RC}\right)$$. Differentiate it to get $$I(t)$$.
2. Integrate the resistor's power $$I^2R$$ from $$t = 0$$ to $$t\to\infty$$ and show that a full charge heats the resistor by $$\tfrac12 C\varepsilon^2$$, whatever $$R$$ is. Compare with $$H$$ and $$U_C$$ at your last 10 kΩ reading.
3. Since $$Q = CV_C$$, the current is $$I = C\,dV_C/dt$$. From your two 10 kΩ readings on either side of $$t = \tau$$, estimate $$dV_C/dt$$ at $$\tau$$ (their difference over the time between them), and compare it with $$I/C$$ from your reading at $$\tau$$. Why does the difference come out a little high?

## What to hand in

Prelab answers, settings and data, CSV if available, the charging and discharge fits, the graph of $$\tau$$ against $$R$$, capacitance with uncertainty, the energy check, and answers to the questions (and to With calculus, if assigned). Identify simulated data.
