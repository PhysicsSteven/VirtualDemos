# Measuring Rotational Inertia with a Falling Mass
Student laboratory · Physics I

Textbook: OpenStax *University Physics*, Vol. 1, §§10.2 and 10.5–10.8. Access for free at https://openstax.org/details/books/university-physics-volume-1.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/rotational-dynamics.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Using the demo.**

- Set the **Hanging mass m** with the slotted masses beside the pulley (on the picture, the up arrow hangs 5 g and the down arrow takes off the last mass).
- Record reading stores $$m$$, $$r$$, what is on the table and the timer reading for the 0.500 m drop (0.001 s). From each row: $$a = 2h/t^2$$, $$\alpha = a/r$$, and the string's torque $$\tau = m(g - a)r$$. Plotting $$\tau$$ against $$\alpha$$ for one load gives a line: slope $$I$$, intercept the friction torque.
- Blind hides moments of inertia, the predicted motion, the energies and I from the fit, leaving the timer, the masses and the settings. The Mystery object always hides its I.

**What the demo models.**

- $$mg - T = ma$$; $$Tr - \tau_f = I\alpha$$; $$a = \alpha r$$
- Model: a rigid turntable on its axle, a massless string that does not slip on the spool, a massless frictionless pulley, and, when switched on, a constant friction torque at the bearing. Turntable $$I_0 = 2.00\times10^{-3}\ \text{kg}\,\text{m}^2$$. Disk 1.00 kg, radius 10.0 cm; ring 1.00 kg, radii 9.0 and 10.0 cm; two 0.200 kg masses (small cylinders, 1.5 cm radius).

</details>

## Goal

Measure a turntable's rotational inertia and bearing friction, then determine an added object's inertia by subtraction. Check the energy transfer between a falling mass and a rotating body.

## Background

A hanging mass $$m$$ pulls a string wound around a spool of radius $$r$$. Let $$a$$ be its downward acceleration, $$\alpha$$ the table's angular acceleration, and $$T$$ the string tension. With no slip,

$$\begin{gathered} mg-T=ma, \\[4pt] T r-\tau_f=I\alpha, \\[4pt] a=\alpha r. \end{gathered}$$

For a drop from rest through height $$h$$ with constant acceleration,

$$\begin{gathered} a=\frac{2h}{t^2}, \\[4pt] \alpha=\frac{a}{r}, \\[4pt] \tau=m(g-a)r=I\alpha+\tau_f. \end{gathered}$$

A plot of string torque $$\tau$$ against $$\alpha$$ gives total rotating inertia $$I$$ from its slope and friction torque $$\tau_f$$ from its intercept. Tension is not equal to $$mg$$ while the load accelerates. Here $$I$$ includes the table and anything attached to it; it does not include the falling mass. The model assumes a light string, a frictionless pulley, no slip and constant bearing friction torque.

## Before the lab

1. Why does using $$mgr$$ instead of $$m(g-a)r$$ overestimate string torque?
2. Predict how moving two equal masses farther from the rotation axis changes the timing.
3. Why measure the empty table before placing an unknown object on it?
4. On the empty table, a drop with 0.060 kg hanging takes some time $$t$$. With 0.120 kg hanging instead, is the new drop time half of $$t$$, less than half, between half and $$t$$, or the same as $$t$$?

## Safety

On a real bench, secure the added object and keep hands, hair and clothing away from the rotating table and string. Keep feet clear of the falling mass and provide a safe catch. Do not let the string unwind beyond its intended travel.

## Procedure

Before you start, open the **Lab** fold and tick **Blind: hide predictions and answers**, and tick **Bearing friction**. The drop height is fixed at 0.500 m. To set the hanging mass, press **Take off all masses**, then click slotted masses in the tray under the picture: the total includes the 5 g hanger and is shown beside the buttons (for example 0.020 kg is the hanger plus 10 g and 5 g). For each drop press **Release**, wait until the timer stops at the end of the 0.500 m drop, press **Record reading**, then press **Wind it back up** before the next drop. Record reading fills $$m$$, $$r$$ and $$t$$; Export to worksheet also fills $$h$$, $$a$$, $$\alpha$$ and $$\tau$$.

**Empty table.** Under **On the turntable** choose **Nothing**, and leave **Spool radius r** at 2.0 cm. Time a drop for each of four hanging masses: 0.020, 0.060, 0.100 and 0.120 kg. Press **Export to worksheet**, then **Clear**. Fit $$\tau$$ against $$\alpha$$ to find the empty table's inertia and friction torque.

**Added object.** Choose **Disk** or **Mystery object** under On the turntable, keeping the 2.0 cm spool and Bearing friction on. Repeat the four masses, export, then clear. Subtract the empty table inertia from the total to find the object's inertia. For the disk, compare with $$\tfrac12 MR^2$$ (1.00 kg, radius 10.0 cm). For the mystery object, report inertia without assuming its shape.

**Spool check.** Keep the same object on the table and Bearing friction on, choose a 1.0 cm or 3.0 cm **Spool radius r**, and time at least two drops (for example 0.060 and 0.120 kg). Export, then clear. Test whether these points lie on the Added object line of $$\tau$$ against $$\alpha$$. Do not assume angular acceleration itself stays constant when the spool changes.

**Energy.** Choose one completed drop. From its time infer the speed at the stop gate $$v = 2h/t$$, angular speed $$\omega = v/r$$ and angular displacement $$\Delta\varphi = h/r$$. Compare $$mgh$$ with

$$\frac12 mv^2 + \frac12 I\omega^2 + \tau_f\,\Delta\varphi.$$

Use the fitted total rotating inertia and friction torque for that load, not just the added object's inertia. The comparison is an internal consistency check because both the fit and energy calculation use the same timings.

**Using the virtual apparatus.** Record only completed drops, each from rest after Wind it back up. Each export goes into its own copy of the Data table (empty, loaded, spool check); the demo's own fit under **Plot and fit** may combine radii but separates different objects and friction settings.

## Data

| Series/load | $$m$$ (kg) | $$r$$ (m) | $$h$$ (m) | $$t$$ (s) | $$a$$ (m/s²) | $$\alpha$$ (rad/s²) | $$\tau$$ (N·m) |
|---|---|---|---|---|---|---|---|
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |

Record the object dimensions, bearing setting and run identifier. Keep empty and loaded fits separate; save the spool check settings with their rows.

## Analysis

1. Calculate $$a$$, $$\alpha$$ and $$\tau$$ from each timed drop. Fit $$\tau$$ against $$\alpha$$ for each load, with a free intercept, and inspect residuals.
2. Find the added inertia by subtracting slopes. Compare the two fitted friction torques and explain whether a common bearing model is supported.
3. Compare a known disk with its shape formula, or report the unknown inertia with uncertainty. Test whether the second spool points follow the same line.
4. Complete the energy account. Explain the role of friction work and why neither the falling mass's translational energy nor the table's own inertia may be omitted.

## Uncertainty

The virtual timer rounds to 0.001 s. Its mass and spool settings are exact model inputs; their adjustment steps are not random errors. For a real bench include spool radius measurement, effective string radius, drop height, mass and timing uncertainty. Both plot axes contain the same measured acceleration, so their errors are correlated; an ordinary line fit error is an approximation. Propagate both slope uncertainties into the difference in inertia, including shared systematic errors where appropriate. Repeating identical simulated runs cannot replace that analysis.

## Questions

1. From your empty table drops, give $$t$$ and $$\alpha$$ for 0.060 and 0.120 kg. Which of the choices in Before the lab 4 fits? Use $$a = 2h/t^2$$ to explain why doubling the hanging mass does not halve the time, and use $$m(g-a)r = I\alpha + \tau_f$$ to explain why $$\alpha$$ comes out slightly more than doubled. What physical assumption makes $$\tau_f$$ the same constant torque in both drops?
2. Could the friction intercept be resolved reliably if every run had nearly the same acceleration?

## With calculus

For courses that use calculus. This section is not counted in the 75 minutes; do it when your instructor assigns it.

1. Solve the three equations in the Background for $$a$$ and show that it does not change during the drop when $$\tau_f$$ is constant. Integrate $$dv/dt = a$$ and $$dy/dt = v$$ from rest to get $$h = \tfrac12at^2$$, which is where $$a = 2h/t^2$$ comes from. With your empty table fit ($$I$$ and $$\tau_f$$), predict the drop time for 0.020 kg and compare it with your reading.
2. Use $$I = \int r^2\,dm$$, cutting the body into thin rings of radius $$r$$ and width $$dr$$, to show that a uniform disk of mass $$M$$ and radius $$R$$ has $$I = \tfrac12MR^2$$, and that a flat ring from radius $$R_1$$ to $$R_2$$ has $$I = \tfrac12M(R_1^2 + R_2^2)$$. Why is the ring's $$I$$ larger than the disk's for the same mass and outer radius?
3. Suppose the bearing friction grew with speed instead, $$\tau_f = c\,\omega$$. Write the equation for $$d\omega/dt$$ and solve it from rest. Would $$a = 2h/t^2$$ still be the acceleration? Would your points of $$\tau$$ against $$\alpha$$ still fall on one straight line? What do your residuals say about the bearing?

## What to hand in

Prelab answers, settings and a copy of the data table for each series, empty/loaded fits with residuals, added inertia and friction estimates with uncertainty, spool radius and energy checks, and answers to the questions (and to With calculus, if assigned). Identify simulated data.
