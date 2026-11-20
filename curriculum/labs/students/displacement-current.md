# Displacement Current
Student laboratory · Physics II

Textbook: OpenStax *University Physics*, Vol. 2, §§12.5 and 16.1. Access for free at https://openstax.org/details/books/university-physics-volume-2.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/displacement-current.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Loop around the wire; Same loop, surface through the gap; Loop in the gap; Small loop inside the plates.

**Using the demo.**

- A battery charges a parallel plate capacitor (circular plates 5.0 cm in radius, 2.0 mm apart, $$C = 34.8$$ pF) through a resistor and a long straight wire. Charge starts and pauses the charging; Reset empties the capacitor. Time runs about $$10^5$$ times slower than real, and the clock shows the time in the experiment.
- An Amperian loop circles the axis. Drag it sideways to move it along the wire or into the gap between the plates, and up or down to change its radius (or use the arrow keys and the radius slider). Its surface is either a flat disk or a bag that reaches into the gap without the wire passing through it.
- Readouts give the circuit current, the charge, the field $$E$$ between the plates, the conduction and displacement currents through the loop's surface, $$B$$ on the loop and $$\oint\vec B\cdot d\vec l = 2\pi rB$$. A plot shows $$B$$ against distance from the axis at that moment.
- The plates are ideal: the field between them is uniform and fringing is ignored. The fields are tiny (picotesla to nanotesla) because the currents are microamperes.
- Record reading stores the time, the currents, $$E$$, the loop's radius and place, and $$B$$. Export to worksheet sends the readings to the Data table below; Clear starts a new series, which goes into a new copy of the table.
- Blind hides $$B$$, the displacement current, the enclosed currents and the $$B(r)$$ plot (their columns are left empty if you record in Blind).

</details>

## Goal

Show that Ampère's law needs Maxwell's displacement current, $$I_d = \varepsilon_0\,d\Phi_E/dt$$, to give the same answer for every surface bounded by a loop, and measure the magnetic field that a changing electric field makes between the plates of a charging capacitor.

## Background

Ampère's law says $$\oint\vec B\cdot d\vec l = \mu_0 I_\mathrm{enc}$$, where $$I_\mathrm{enc}$$ is the current through any surface bounded by the loop (§12.5). For a loop around the wire leading to a charging capacitor, a flat disk is crossed by the wire's current $$I$$, but a bag reaching into the gap is crossed by no charge at all. Maxwell resolved this by adding the displacement current (§16.1):

$$\oint\vec B\cdot d\vec l = \mu_0\left(I + \varepsilon_0\frac{d\Phi_E}{dt}\right).$$

Between plates of area $$A$$, $$E = q/(\varepsilon_0 A)$$ and $$\Phi_E = EA$$, so $$I_d = \varepsilon_0 A\,dE/dt = dq/dt = I$$: the displacement current in the gap equals the conduction current in the wire. By symmetry $$B$$ circles the axis, and on a loop of radius $$r$$ in the gap of plates of radius $$R$$,

$$B = \frac{\mu_0 I r}{2\pi R^2}\quad (r < R), \qquad B = \frac{\mu_0 I}{2\pi r}\quad (r > R).$$

While the capacitor charges through resistance $$R_c$$, $$I = (V/R_c)\,e^{-t/R_cC}$$.

## Before the lab

1. Show that $$C = \varepsilon_0\pi R^2/d = 34.8$$ pF for plates of radius 5.0 cm, 2.0 mm apart. With a 100 V battery and 1.0 MΩ, find the time constant and the current at $$t = 0$$.
2. A loop of radius 2.5 cm sits in the gap, inside the 5.0 cm plates. What share of the displacement current passes through its flat disk, and how does $$B$$ on it compare with $$B$$ on a 5.0 cm loop?
3. While the capacitor charges, no charge crosses the gap between the plates. Picture a loop of radius 7.0 cm in the gap, centered on the axis, and a loop of the same size around the wire. At the same moment, is the magnetic field on the gap loop zero, weaker than on the wire loop, or the same? Give your reasoning.

## Safety

The demo's battery is 100 V by default. Real capacitors charged to such voltages can give a painful shock and can stay charged after the supply is removed; discharge them through a resistor before handling.

## Procedure

**Part 1: one loop, two surfaces.** Press Charge (under the view) and press it again (it now reads Pause) partway, somewhere near one time constant (the Time constant RC readout; the clock runs 10 µs each real second). Without restarting, press Record reading for each of three setups in turn: Loop around the wire (flat disk, 3.0 cm radius), Same loop, surface through the gap, and Loop in the gap (7.0 cm, flat disk). Choosing a setup keeps the time. Press Export to worksheet.

**Part 2: B across the gap.** Press Clear. Leave the time where it is, press the Loop in the gap setup (flat disk), and set the Loop radius r slider to 1.0, 2.0, 3.0, 4.0 and 5.0 cm (inside the plates), pressing Record reading at each. Press Export to worksheet. Press Clear, then do the same at 5.0, 7.0 and 9.0 cm (outside the plates) and export those to another copy.

**Part 3: B as the capacitor charges.** Press Clear and press the Loop in the gap setup (7.0 cm). Then press Reset under the view (not Reset all), so the capacitor is empty and the clock reads 0 µs (choosing a loop setup after this would charge it partway again). Press Charge, and press Pause about every 10 µs (one real second) up to about 60 µs, pressing Record reading at each pause; the space bar also charges and pauses. Press Export to worksheet.

## Data

| Reading | Time $$t$$ (µs) | Current $$I$$ (µA) | Field between the plates $$E$$ (V/m) | Loop radius $$r$$ (cm) | Where | Surface | $$I_c$$ through it (µA) | $$I_d$$ through it (µA) | $$B$$ on the loop (pT) | $$2\pi rB$$ (T·m) | $$1/r$$ (1/m) |
|---|---|---|---|---|---|---|---|---|---|---|---|
| | | | | | | | | | | | |
| | | | | | | | | | | | |
| | | | | | | | | | | | |

Write down the Battery voltage V and Resistance R from their sliders (100 V and 1.0 MΩ unless you changed them). Fill the last column yourself for the readings outside the plates, with $$r$$ in meters.

## Analysis

1. For each Part 1 reading compare $$2\pi rB$$ with $$\mu_0(I_c + I_d)$$. What would Ampère's law without the displacement current predict for the bag, and why can that not be right?
2. Graph $$B$$ (vertical) against $$r$$ (horizontal) for the Part 2 readings inside the plates. Compare the slope with $$\mu_0 I/(2\pi R^2)$$, using the current you recorded.
3. Graph $$B$$ (vertical) against $$1/r$$ (horizontal) for the Part 2 readings outside the plates. Compare the slope with $$\mu_0 I/2\pi$$.
4. Graph $$B$$ (vertical) against $$I$$ (horizontal) for Part 3. Compare the slope with $$\mu_0/(2\pi r)$$ for $$r = 7.0$$ cm.
5. From two neighboring Part 3 readings, work out $$\varepsilon_0 A\,\Delta E/\Delta t$$ (with $$A = \pi R^2$$) and compare it with the current halfway between them.

## Questions

1. Why must the right side of Ampère's law be the same for every surface bounded by the loop? (Think about charge conservation.) Then compare $$2\pi rB$$ in the Loop in the gap row of Part 1 with the Loop around the wire row: what does it say about your answer to Before the lab 3, and about the field on a loop where no charge flows?
2. Why are these fields so hard to measure in a real laboratory, and what would you change to make them larger?

## Uncertainty

For courses that treat measurement uncertainty. This section is not counted in the 75 minutes; do it when your instructor assigns it.
{: .ws-assigned}

The demo gives its values to six significant figures and the plates are ideal, so Analysis 1 to 4 should agree closely; use the standard errors of your fits to say how closely. In Analysis 5 the finite difference $$\Delta E/\Delta t$$ is only an approximation to $$dE/dt$$ because $$E$$ curves as the capacitor charges: say whether using readings closer together, or the current at the midpoint rather than at either end, improves the agreement, and why. Real plates have fringing fields at their edges; say how that would change $$B$$ near $$r = R$$.

## With calculus

For courses that use calculus. This section is not counted in the 75 minutes; do it when your instructor assigns it.

1. With $$q = CV\left(1 - e^{-t/R_cC}\right)$$ and $$C = \varepsilon_0A/d$$, write $$E(t)$$ between the plates. Differentiate it and show that $$\varepsilon_0A\,dE/dt$$ equals the current $$I = (V/R_c)\,e^{-t/R_cC}$$ at every instant. Check your $$E(t)$$ against your first and last Part 3 readings ($$d = 2.0$$ mm).
2. The charge that reaches the plate between your first and last Part 3 readings is $$\int I\,dt$$. Estimate it with the trapezoid rule from your Part 3 currents, and compare it with $$\varepsilon_0A\,[E(t_\text{last}) - E(t_\text{first})]$$, which Gauss's law says is the same charge. Why does the trapezoid estimate come out a little high?

## What to hand in

Prelab answers, the battery voltage and resistance, the table copies with their graphs and fits, the comparisons in the Analysis, and answers to the questions (and to Uncertainty and With calculus, if assigned). Identify simulated data.
