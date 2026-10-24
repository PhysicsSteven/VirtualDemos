# Displacement Current
Student laboratory · Physics II

Textbook: OpenStax *University Physics*, Vol. 2, §§12.5 and 16.1. Access for free at https://openstax.org/details/books/university-physics-volume-2.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/displacement-current.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Loop around the wire; Same loop, surface through the gap; Loop in the gap; Small loop inside the plates.

**Using the demo.**

- A battery charges a parallel plate capacitor (circular plates 5.0 cm in radius, 2.0 mm apart, $$C = 34.8$$ pF) through a resistor and a long straight wire. Charge starts and pauses the charging; Start over empties the capacitor. Time runs about $$10^5$$ times slower than real, and the clock shows the time in the experiment.
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
2. When the current is 50 µA, what is $$B$$ on a loop of radius 3.0 cm around the wire?
3. Show that $$\varepsilon_0\,d\Phi_E/dt$$ between the plates equals the current in the wire.
4. A loop of radius 2.5 cm sits in the gap, inside the 5.0 cm plates. What share of the displacement current passes through its flat disk, and how does $$B$$ on it compare with $$B$$ on a 5.0 cm loop?

## Safety

The demo's battery is 100 V by default. Real capacitors charged to such voltages can give a painful shock and can stay charged after the supply is removed; discharge them through a resistor before handling.

## Procedure

**Part 1: one loop, two surfaces.** Start the charging and pause it partway (somewhere near one time constant). Without restarting, record a reading for the loop around the wire with a flat disk (3.0 cm radius), then the same loop with its surface stretched into the gap, then a 7.0 cm loop in the gap with a flat disk. Send the readings to the worksheet.

**Part 2: B across the gap.** Clear the readings. Leave the time where it is, put the loop in the gap with a flat disk, and record a reading at each radius from 1.0 cm to 5.0 cm in 1.0 cm steps (inside the plates). Send them to a new copy of the table. Clear, then do the same from 5.0 cm to 9.0 cm (outside the plates) and send those to another copy.

**Part 3: B as the capacitor charges.** Clear the readings and start over with the capacitor empty. With a 7.0 cm loop in the gap, charge the capacitor and pause it about every 10 µs up to about 60 µs, recording a reading each time. Send them to a new copy of the table.

## Data

| Reading | Time $$t$$ (µs) | Current $$I$$ (µA) | Field between the plates $$E$$ (V/m) | Loop radius $$r$$ (cm) | Where | Surface | $$I_c$$ through it (µA) | $$I_d$$ through it (µA) | $$B$$ on the loop (pT) | $$2\pi rB$$ (T·m) | $$1/r$$ (1/m) |
|---|---|---|---|---|---|---|---|---|---|---|---|
| | | | | | | | | | | | |
| | | | | | | | | | | | |
| | | | | | | | | | | | |

Record the battery voltage and resistance. Fill the last column yourself for the readings outside the plates.

## Analysis

1. For each Part 1 reading compare $$2\pi rB$$ with $$\mu_0(I_c + I_d)$$. What would Ampère's law without the displacement current predict for the bag, and why can that not be right?
2. Graph $$B$$ against $$r$$ for the Part 2 readings inside the plates. Compare the slope with $$\mu_0 I/(2\pi R^2)$$, using the current you recorded.
3. Graph $$B$$ against $$1/r$$ for the Part 2 readings outside the plates. Compare the slope with $$\mu_0 I/2\pi$$.
4. Graph $$B$$ against $$I$$ for Part 3. Compare the slope with $$\mu_0/(2\pi r)$$ for $$r = 7.0$$ cm. What does this tell you about the field in the gap compared with the field around the wire?
5. From two neighbouring Part 3 readings, work out $$\varepsilon_0 A\,\Delta E/\Delta t$$ (with $$A = \pi R^2$$) and compare it with the current halfway between them.

## Uncertainty

The demo gives its values to six significant figures and the plates are ideal, so Analysis 1 to 4 should agree closely; use the standard errors of your fits to say how closely. In Analysis 5 the finite difference $$\Delta E/\Delta t$$ is only an approximation to $$dE/dt$$ because $$E$$ curves as the capacitor charges: say whether using readings closer together, or the current at the midpoint rather than at either end, improves the agreement, and why. Real plates have fringing fields at their edges; say how that would change $$B$$ near $$r = R$$.

## Questions

1. Why must the right side of Ampère's law be the same for every surface bounded by the loop? (Think about charge conservation.)
2. No charge moves between the plates. What makes the magnetic field there?
3. Why are these fields so hard to measure in a real laboratory, and what would you change to make them larger?
4. What is $$B$$ in the gap once the capacitor is fully charged, and why?

## What to hand in

Prelab answers, the battery voltage and resistance, the table copies with their graphs and fits, the comparisons in the Analysis, and answers to the questions. Identify simulated data.
