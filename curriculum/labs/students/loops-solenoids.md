# Fields of Loops and Solenoids
Student laboratory · Physics II

Textbook: OpenStax *University Physics*, Vol. 2, §12.4 and §12.6. Access for free at https://openstax.org/details/books/university-physics-volume-2.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/currents-fields.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Where it is in the demo:** Magnetic Fields of Currents, Loop and solenoid view, with the Current loop and Solenoid setups.

**Using the demo.** The winding is seen cut through its axis: dots are current coming out of the page and crosses current going in. Number of turns, Length, Radius and Current set the winding; drag the grips to change the radius and length, drag the probe, or click the plot below the picture to put the probe on the axis. The readouts give the field at the probe (along the axis and away from it), the field at the center and, for more than one turn, at an end of the winding.

**What the demo models.** Each turn is a circular loop, and its field everywhere is the exact Biot and Savart result (in closed form with complete elliptic integrals). A winding of $$N$$ turns is $$N$$ such loops spread evenly along the length $$L$$, so the turn density is exactly $$n = N/L$$; the field is the sum over the turns. The wire has no thickness. $$\mu_0 = 1.25663706127\times10^{-6}\ \mathrm{T\cdot m/A}$$ (CODATA 2022). Simulated data.

</details>

## Goal

Measure the field of a single current loop at its center and along its axis, then build a solenoid turn by turn and find when its field becomes the uniform $$\mu_0 n I$$ of a long solenoid.

## Background

The Biot and Savart law, added up around a circular loop of radius $$R$$ carrying current $$I$$, gives on the loop's axis, a distance $$z$$ from its center,

$$B = \frac{\mu_0 I R^2}{2\left(R^2 + z^2\right)^{3/2}},$$

along the axis (right hand rule: fingers along the current, thumb along $$\vec B$$). At the center this is $$B = \mu_0 I/(2R)$$. Far from the loop, for $$z \gg R$$, it falls as $$1/z^3$$, like the field of a bar magnet.

A solenoid is many loops side by side. Ampère's law, applied to a rectangle with one long side inside a long solenoid and the other outside, gives a uniform field inside,

$$B = \mu_0 n I,$$

where $$n = N/L$$ is the number of turns per unit length, and almost no field outside. A real solenoid has ends. Treating the winding as a sheet of current, the field on the axis is

$$B = \frac{\mu_0 n I}{2}\left(\cos\theta_1 - \cos\theta_2\right),$$

where $$\theta_1$$ and $$\theta_2$$ are the angles from the axis to the rims of the two ends, seen from the point. At the center of a solenoid of length $$L$$ and radius $$R$$ this is $$\mu_0 n I \, L/\sqrt{L^2 + 4R^2}$$, and at an end it is about half the central field.

## Before the lab

1. Find the field at the center of a single loop of radius 4.0 cm carrying 5.0 A.
2. Find the field on the axis of the same loop 4.0 cm from its center. What fraction of the central field is it?
3. A solenoid 24 cm long has 30 turns and carries 5.0 A. Find $$n$$ and $$\mu_0 n I$$. If its radius is 3.0 cm, how much smaller than $$\mu_0 n I$$ is the field at its center?
4. Sketch the rectangle used with Ampère's law for a long solenoid. Which sides add to $$\oint \vec B\cdot d\vec l$$, and what two facts about the field does the argument need?

## Safety

There are no hazards in the simulation. A real solenoid with an iron core can pull steel objects in hard; keep fingers and tools clear.

## Procedure

Before each part, predict what you will see. Then measure.

**Part 1: center of one loop.** In the Current loop setup (5.0 A), record the field with the probe at the center for loop radii of 1.0, 2.0, 3.0, 4.0, 6.0 and 8.0 cm.

**Part 2: along the axis of one loop.** With a radius of 4.0 cm, record with the probe on the axis 0, 1.0, 2.0, 3.0, 4.0, 6.0 and 8.0 cm from the center.

**Part 3: turns.** In the Solenoid setup (length 24 cm, radius 3.0 cm, 5.0 A), record with the probe at the center for 10, 20, 30, 40, 60 and 80 turns.

**Part 4: long and short.** With a radius of 3.0 cm and 5.0 A, keep 125 turns per meter while you change the length: record with the probe at the center for 5 turns in 4.0 cm, 10 in 8.0 cm, 15 in 12 cm, 30 in 24 cm and 50 in 40 cm.

**Part 5: inside and outside.** In the Solenoid setup (30 turns, 24 cm, 3.0 cm, 5.0 A), record with the probe in the middle plane of the solenoid at distances of 0, 1.0, 2.0 and 2.5 cm from the axis (inside the winding) and 4.0, 5.0 and 6.0 cm (outside). Then record with the probe on the axis 6.0 cm and 11 cm from the center.

**Using the virtual apparatus.** Clicking the plot below the picture puts the probe on the axis. Send each part to the worksheet before clearing, so each part gets its own copy of the Data table. The last two columns are for you to fill in.

## Data

| Trial | Setup | Turns N | Length L (cm) | Radius R (cm) | Current I (A) | Probe z from the center (cm) | Probe distance from the axis (cm) | Field along the axis at the probe (μT) | Field away from the axis at the probe (μT) | Field at the center (μT) | Field at an end (μT) | 1/R (1/m) | Turns per meter n |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| | | | | | | | | | | | | | |
| | | | | | | | | | | | | | |
| | | | | | | | | | | | | | |
| | | | | | | | | | | | | | |
| | | | | | | | | | | | | | |
| | | | | | | | | | | | | | |

## Analysis

1. For Part 1, fill in $$1/R$$ and graph the central field against $$1/R$$. Is it a straight line through the origin? From the slope, find $$\mu_0$$.
2. For Part 2, work out $$\mu_0 I R^2/\left(2(R^2+z^2)^{3/2}\right)$$ for each row and compare it with the field you recorded. At 8.0 cm, compare the field with what $$1/z^3$$ alone would give, $$\mu_0 I R^2/(2z^3)$$. How far out must you go before the loop looks like a magnetic dipole?
3. For Part 3, fill in $$n$$ and graph the central field against $$n$$. Is the field proportional to $$n$$? Divide the slope by $$I$$ and compare with $$\mu_0$$. Use the current sheet formula to explain the difference.
4. For Part 4, divide each central field by $$\mu_0 n I$$ and compare with $$L/\sqrt{L^2 + 4R^2}$$. Find the ratio of the end field to the central field for each length. How long, compared with its radius, must a solenoid be for its central field to be within 1% of $$\mu_0 n I$$?
5. For Part 5, how uniform is the field across the middle of the solenoid, and how large is it outside compared with inside? How does the field change along the axis toward the end? Which of the facts used in the Ampère's law argument hold here, and which only nearly hold?

## Uncertainty

The model has no noise: fields are the exact sum over the turns, given to five significant figures. The approximations are in the formulas you compare with. A real winding has a wire of finite thickness, wound as a helix rather than as separate rings, so a real solenoid also carries current along its length and has a weak field outside like that of a single straight wire. Probe positions are set to 0.1 cm; near the wires the field changes fast, so a small error in position gives a large error in field there.

## Questions

1. A toroid is a solenoid bent into a ring, with $$N$$ turns. Use Ampère's law with a circle of radius $$r$$ inside the ring to find its field. Why is there no end effect?
2. An MRI magnet makes 1.5 T inside a long winding. How many ampere turns per meter does that need? Why are such magnets superconducting?
3. Why does Part 2's field fall as $$1/z^3$$ far from the loop, faster than the $$1/r$$ of a straight wire?
4. The field at the end of a long solenoid is half the field at its center. Explain this with superposition: put two long solenoids end to end.

## What to hand in

Prelab answers, a Data table copy for each part, the graphs and fits, your values of $$\mu_0$$, the comparisons of Analysis items 2 and 4, and answers to the questions. Identify simulated data.
