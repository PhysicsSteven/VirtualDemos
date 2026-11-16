# Fields of Loops and Solenoids
Student laboratory · Physics II

Textbook: OpenStax *University Physics*, Vol. 2, §12.4 and §12.6. Access for free at https://openstax.org/details/books/university-physics-volume-2.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/currents-fields.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Where it is in the demo:** Magnetic Fields of Currents, Loop and solenoid view, with the Current loop, Solenoid and Electromagnet on a supply setups.

**Using the demo.** The winding is seen cut through its axis: dots are current coming out of the page and crosses current going in. Number of turns, Length, Radius and Current set the winding; drag the grips to change the radius and length, drag the probe, or click the plot below the picture to put the probe on the axis. The readouts give the field at the probe (along the axis and away from it), the field at the center and, for more than one turn, at an end of the winding.

**What the demo models.** Each turn is a circular loop, and its field everywhere is the exact Biot and Savart result (in closed form with complete elliptic integrals). A winding of $$N$$ turns is $$N$$ such loops spread evenly along the length $$L$$, so the turn density is exactly $$n = N/L$$; the field is the sum over the turns. The wire has no thickness. $$\mu_0 = 1.25663706127\times10^{-6}\ \mathrm{T\cdot m/A}$$ (CODATA 2022). With the iron core in, the core (as long as the winding, of its radius) is magnetized uniformly, as an ellipsoid of the same length to diameter ratio $$L/2R$$ would be: $$M = (\mu_r - 1)H_0/(1 + (\mu_r - 1)N_d)$$, where $$H_0$$ is the coil's own field at the center over $$\mu_0$$, $$N_d$$ the demagnetizing factor along the axis (Osborn 1945) and $$\mu_r = 1000$$ (chosen, soft iron), up to iron's saturation $$M_s = 1.71\times10^6$$ A/m (Kittel). A uniform $$M$$ acts like an extra current $$ML/N$$ in each turn, so the field keeps its shape and every value is multiplied by the gain $$1 + ML/(NI)$$. Hysteresis is left out. A reading with the core stores $$L/2R$$, $$N_d$$, the gain and whether the iron is saturated; a series of readings all with the core goes to the Electromagnet table. Simulated data.

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

**Part 1: center of one loop.** Choose the setup Current loop (1 turn, 5.0 A, probe at the center). Set the Radius R slider in the Loop and solenoid section to 1.0, 2.0, 3.0, 4.0, 6.0 and 8.0 cm and press Record reading at each; the field goes in the Field at the center column. Export to worksheet, then Clear.

**Part 2: along the axis of one loop.** Set Radius R to 4.0 cm. Click the picture, then move the probe along the axis with the arrow keys (0.1 cm a press, 1 cm with Shift) to 0, 1.0, 2.0, 3.0, 4.0, 6.0 and 8.0 cm from the center (the Probe position readout and the Probe z column show it), and record at each; the field goes in the Field along the axis at the probe column. Export to worksheet, then Clear.

**Part 3: long and short.** Choose the setup Solenoid (radius 3.0 cm, 5.0 A). Keep 125 turns per meter while you change the length: set Number of turns N and Length L to 5 turns in 4.0 cm, 10 in 8.0 cm, 15 in 12 cm, 30 in 24 cm and 50 in 40 cm, and record at each (the Field at the center and Field at an end columns). Export to worksheet, then Clear.

**Part 4: inside and outside.** Choose the setup Solenoid (30 turns, 24 cm, 3.0 cm, 5.0 A). With the probe in the middle plane ($$z = 0$$), move it with the up and down arrow keys to 0 and 2.5 cm from the axis (inside the winding) and 4.0 and 6.0 cm (outside), and record at each. Then put it on the axis 6.0 cm and 11 cm from the center (left and right arrow keys, or click the plot below the picture) and record. Export to worksheet, then Clear.

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

1. For Part 1, fill in the $$1/R$$ column (in 1/m) and graph the Field at the center against $$1/R$$. Is it a straight line through the origin? From the slope, find $$\mu_0$$.
2. For Part 2, work out $$\mu_0 I R^2/\left(2(R^2+z^2)^{3/2}\right)$$ for the rows at 0, 4.0 and 8.0 cm and compare it with the field you recorded. At 8.0 cm, compare the field with what $$1/z^3$$ alone would give, $$\mu_0 I R^2/(2z^3)$$. How far out must you go before the loop looks like a magnetic dipole?
3. For Part 3, divide each central field by $$\mu_0 n I$$ (here $$n = N/L$$ = 125 turns per meter in every row) and compare with $$L/\sqrt{L^2 + 4R^2}$$. Find the ratio of the end field to the central field for each length. How long, compared with its radius, must a solenoid be for its central field to be within 1% of $$\mu_0 n I$$?
4. For Part 4, how uniform is the field across the middle of the solenoid, and how large is it outside compared with inside? How does the field change along the axis toward the end? Which of the facts used in the Ampère's law argument hold here, and which only nearly hold?

## Uncertainty

The model has no noise: fields are the exact sum over the turns, given to five significant figures. The approximations are in the formulas you compare with. A real winding has a wire of finite thickness, wound as a helix rather than as separate rings, so a real solenoid also carries current along its length and has a weak field outside like that of a single straight wire. Probe positions are set to 0.1 cm; near the wires the field changes fast, so a small error in position gives a large error in field there.

## Questions

1. A toroid is a solenoid bent into a ring, with $$N$$ turns. Use Ampère's law with a circle of radius $$r$$ inside the ring to find its field. Why is there no end effect?
2. An MRI magnet makes 1.5 T inside a long winding. How many ampere turns per meter does that need? Why are such magnets superconducting?

## What to hand in

Prelab answers, a Data table copy for each part, the graphs and fits, your value of $$\mu_0$$, the comparisons of Analysis items 2 and 3, and answers to the questions. Identify simulated data.
