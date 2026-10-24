# Transformers and Power Lines
Student laboratory · Physics II

Textbook: OpenStax *University Physics*, Vol. 2, §§14.1 and 15.6. Access for free at https://openstax.org/details/books/university-physics-volume-2.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/transformers.html?setup=stepdown)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Step down, 120 V to 12 V; Step up, 12 V to 120 V; Doorbell transformer (Check Your Understanding 15.9); Utility pole, 12 kV to 240 V (Example 15.6); Real transformer, no load; Power line (Example 15.6 again).

**Using the demo.**

- The **Transformer** view has an AC source on the primary coil, a laminated iron core, and a load resistor on the secondary coil. You choose the source voltage $$V_P$$ and frequency, both turn counts, the load (or none), the core size and the model.
- Meters read rms values to four significant figures. The oscilloscope below shows two cycles of $$v_P$$ and $$v_S$$ (left) and $$i_P$$ and $$i_S$$ (right); each trace is scaled to its own peak, so compare their timing, not their heights. The animation is slowed to one cycle every 2 s.
- The **ideal** model is the textbook's: all the flux stays in the core and nothing is lost. The **real** model treats the coils as coupled inductors on an iron core of relative permeability 4000, wound with copper wire, with a coupling $$k$$ you set (below 1, some flux misses the other coil). It leaves out core losses and saturation.
- The **Power line** view sends power $$P$$ from a 12 kV generator, stepped up to the transmission voltage $$V$$, down a line of resistance $$R$$ (both wires together), then steps it down to 240 V for a town. Its transformers are ideal, and the line and town are purely resistive.
- Record reading stores the meter values with the settings. Export to worksheet sends the readings to the Data table below; Clear starts a new series, which goes into a new copy of the table.
- Blind hides the ratios, powers and efficiency, and the loss curve, so you can work them out.

</details>

## Goal

Find how a transformer's voltages and currents depend on its turns, see what a real transformer loses, and show why electric power is sent over long distances at high voltage.

## Background

A changing current in the primary coil makes a changing magnetic flux $$\Phi$$ in the core. If the same flux passes through every turn of both coils (§14.1 calls this mutual inductance), Faraday's law gives $$v_P = -N_P\,d\Phi/dt$$ and $$v_S = -N_S\,d\Phi/dt$$, so

$$\frac{V_S}{V_P} = \frac{N_S}{N_P}.$$

An ideal transformer loses no energy, so the power in equals the power out, $$I_P V_P = I_S V_S$$, and

$$\frac{I_S}{I_P} = \frac{N_P}{N_S}.$$

A transformer that raises the voltage lowers the current by the same factor. A resistor $$R$$ on the secondary looks to the source like a resistance $$(N_P/N_S)^2 R$$.

A transmission line of resistance $$R$$ carrying power $$P$$ at voltage $$V$$ carries a current $$I = P/V$$ and turns

$$P_\mathrm{loss} = I^2 R = \frac{P^2 R}{V^2}$$

into heat. Raising the voltage tenfold cuts the loss a hundredfold (§15.6, Example 15.6).

## Before the lab

1. A transformer steps 120 V down to 12 V and has 400 turns on its primary. How many turns are on its secondary? If the 12 V side delivers 1.2 A, what current does the primary draw?
2. OpenStax Check Your Understanding 15.9: a transformer steps 110 V down to 9.0 V to deliver 0.50 A to a doorbell. Find the ratio $$N_P/N_S$$, the primary current, and the resistance the 110 V source sees.
3. A power line's voltage is doubled while it carries the same power. By what factor does the current change? The heat lost in the line?
4. Why will a transformer not work on a steady (DC) current, however large?

## Safety

Real transformers on the mains carry dangerous voltages, and a secondary with many turns can give a lethal voltage from a harmless looking source. Never open a transformer or touch its terminals while it is connected.

## Procedure

**Part 1a: turns ratio.** Start with the Step down setup (120 V, 60 Hz, 400 primary turns, ideal) and set the load to 100 Ω. Record a reading for each secondary turn count of 40, 80, 120, 160, 200, 240, 320 and 400. Send the readings to the worksheet.

**Part 1b: currents.** Clear the readings. Put the secondary back to 40 turns and record a reading for loads of 5, 10, 20, 50, 100 and 200 Ω. Send them to a new copy of the table.

**Part 2: a real transformer.** Clear the readings and pick Real transformer, no load (120 V on 400 turns, 40 secondary turns, coupling 0.980). Record a reading with no load, then with loads of 100, 20, 10, 5 and 2 Ω. Note the phase of $$i_P$$ from $$v_P$$ for each. Send the readings to a new copy of the table. Then set the coupling to 1.000 with a 10 Ω load, and to 0.950, and note $$V_S$$ each time.

**Part 3: the power line.** Clear the readings and switch to the Power line view. Send 10 MW down a 10 Ω line at each transmission voltage from 69 kV to 765 kV (69, 115, 138, 230, 345, 500, 765 kV), recording a reading each time. Send them to a new copy of the table. Then pick the Power line setup (Example 15.6: 24 kW, 12 kV, 200 Ω) and note the loss, and what happens at 240 V.

## Data

| Reading | Setup | $$N_P$$ | $$N_S$$ | $$V_P$$ (V) | $$V_S$$ (V) | $$I_P$$ (A) | $$I_S$$ (A) | Load or line $$R$$ (Ω) | Power in (W) | Power out (W) | Line loss (W) | $$1/V_S^2$$ (1/V²) |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| | | | | | | | | | | | | |
| | | | | | | | | | | | | |
| | | | | | | | | | | | | |

In the Power line rows, $$V_P$$ is the 12 kV generator, $$V_S$$ is the transmission voltage, $$I_S$$ is the line current, Power in is the power sent and Power out the power delivered. Fill the last column yourself for Part 3.

## Analysis

1. Graph $$V_S$$ against $$N_S$$ for Part 1a. Compare the slope with $$V_P/N_P$$, and say what the intercept should be.
2. Graph $$I_P$$ against $$I_S$$ for Part 1b. Compare the slope with $$N_S/N_P$$. For two of the rows, compare the power in with the power out.
3. For Part 2, compare each $$V_S$$ with the ideal 12 V and each power out with the power in, and work out the efficiency. With no load, how large is the primary current, what is its phase from $$v_P$$, and how much power does it take? Why?
4. Graph the line loss against $$1/V_S^2$$ for Part 3. Compare the slope with $$P^2R$$. What share of the 10 MW is lost at 69 kV, and at 765 kV?
5. For Example 15.6, compare the demo's loss at 12 kV with $$(2.0\ \mathrm{A})^2(200\ \Omega)$$. Explain what the demo shows at 240 V.

## Uncertainty

The meters read to four significant figures, and the ideal model has no other uncertainty, so your slopes in Analysis 1, 2 and 4 should match the predictions closely; say how closely, using the standard errors of your fits. The real model rests on stated choices (core permeability, wire, coupling) that a real transformer would only approximate: name one that would most change your Part 2 results, and in which direction.

## Questions

1. A step up transformer gives out a higher voltage than it takes in. Why does that not break conservation of energy?
2. When a load is connected to the secondary, the primary current rises, although the two coils are not connected by any wire. Explain why, using Lenz's law.
3. Why are transformer cores made of thin insulated sheets of iron rather than a solid block? (§13.5)
4. Since the line loss falls as $$1/V^2$$, why are power lines not run at even higher voltages?

## What to hand in

Prelab answers, the settings for each part, the table copies with their graphs and fits, the comparisons in the Analysis, the efficiencies, and answers to the questions. Identify simulated data.
