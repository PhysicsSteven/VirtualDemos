# Measuring Rotational Inertia with a Falling Mass
Student laboratory · Physics I

Textbook: OpenStax *University Physics*, Vol. 1, §§10.2, 10.5–10.8 and 11.1. Access for free at https://openstax.org/details/books/university-physics-volume-1.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/rotational-dynamics.html)

## Goal

Measure a turntable's rotational inertia and bearing friction, then determine an added object's inertia by subtraction. Check the energy transfer between a falling mass and a rotating body.

## Background

A hanging mass $$m$$ pulls a string wound around a spool of radius $$r$$. Let $$a$$ be its downward acceleration, $$\alpha$$ the table's angular acceleration, and $$F_s$$ the string tension. With no slip,

$$\begin{gathered} mg-F_s=ma, \\[4pt] F_s r-\tau_f=I\alpha, \\[4pt] a=\alpha r. \end{gathered}$$

For a drop from rest through height $$h$$ with constant acceleration,

$$\begin{gathered} a=\frac{2h}{t^2}, \\[4pt] \alpha=\frac{a}{r}, \\[4pt] \tau=m(g-a)r=I\alpha+\tau_f. \end{gathered}$$

A plot of string torque $$\tau$$ against $$\alpha$$ gives total rotating inertia $$I$$ from its slope and friction torque $$\tau_f$$ from its intercept. Tension is not equal to $$mg$$ while the load accelerates. Here $$I$$ includes the table and anything attached to it; it does not include the falling mass. The model assumes a light string, a frictionless pulley, no slip and constant bearing friction torque.

## Before the lab

1. Why does using $$mgr$$ instead of $$m(g-a)r$$ overestimate string torque?
2. Predict how moving two equal masses farther from the rotation axis changes the timing.
3. Why measure the empty table before placing an unknown object on it?

## Safety

On a real bench, secure the added object and keep hands, hair and clothing away from the rotating table and string. Keep feet clear of the falling mass and provide a safe catch. Do not let the string unwind beyond its intended travel.

## Procedure

**Empty table.** Measure spool radius and drop height. Start the table and load from rest. With bearing friction enabled, time a 0.500 m drop for six hanging masses: 0.020, 0.040, 0.060, 0.080, 0.100 and 0.120 kg. Keep $$r = 0.020\ \text{m}$$. Compute $$\alpha$$ and string torque from each timing. Fit $$\tau$$ against $$\alpha$$ to find the empty table's inertia and friction torque.

**Added object.** Attach the disk or an unknown object, leaving the spool and bearing condition unchanged. Repeat the mass series. Subtract the empty-table inertia from the total to find the object's inertia. For a real disk, compare with $$\tfrac12 MR^2$$ using measured mass and radius. For an unknown, report inertia without assuming its shape.

**Spool check.** Repeat two or more runs with a second spool radius while keeping the same rotating object and bearing condition. Test whether the points agree with the original torque-versus-acceleration line. Do not assume angular acceleration itself stays constant when the spool changes.

**Energy.** Choose a completed run. Infer endpoint $$v = 2h/t$$, angular speed $$\omega = v/r$$ and angular displacement $$\Delta\varphi = h/r$$. Compare $$mgh$$ with

$$\frac12 mv^2 + \frac12 I\omega^2 + \tau_f\,\Delta\varphi.$$

Use the measured total rotating inertia, not just the added object's inertia. The comparison is an internal consistency check because both the fit and energy calculation use the same timings.

**Using the virtual apparatus.** Begin with an empty rotating table, bearing friction enabled, a 2.0 cm spool radius and predictions hidden. From rest, time a complete 0.500 m drop for hanging masses 0.020, 0.040, 0.060, 0.080, 0.100 and 0.120 kg. Repeat the series with a disk or one mystery object while keeping the bearing condition unchanged. Return the apparatus to its starting position before every drop and record only completed drops. Compare at least two runs using a 1.0 cm or 3.0 cm spool radius. Save the empty, loaded and spool-check series separately; the built-in fit may combine radii but separates different objects and friction settings. After calculating inertia, compare energy terms at the endpoint of a completed drop rather than at an intermediate position.

## Data

| Series/load | $$m$$ (kg) | $$r$$ (m) | $$h$$ (m) | $$t$$ (s) | $$a$$ (m/s²) | $$\alpha$$ (rad/s²) | $$\tau$$ (N m) |
|---|---|---|---|---|---|---|---|
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |

Record the object dimensions, bearing setting and run identifier. Keep empty and loaded fits separate; save the spool check settings with their rows.

## Analysis

1. Calculate $$a$$, $$\alpha$$ and $$\tau$$ from each timed drop. Fit $$\tau$$ against $$\alpha$$ for each load, with a free intercept, and inspect residuals.
2. Find the added inertia by subtracting slopes. Compare the two fitted friction torques and explain whether a common-bearing model is supported.
3. Compare a known disk with its shape formula, or report the unknown inertia with uncertainty. Test whether the second-spool points follow the same line.
4. Complete the energy account. Explain the role of friction work and why neither the falling mass's translational energy nor the table's own inertia may be omitted.

## Uncertainty

The virtual timer rounds to 0.001 s. Its mass and spool settings are exact model inputs; their adjustment steps are not random errors. For a real bench include spool-radius measurement, effective string radius, drop height, mass and timing uncertainty. Both plot axes contain the same measured acceleration, so their errors are correlated; an ordinary line-fit error is an approximation. Estimate sensitivity by perturbing raw timings and dimensions and repeating the fit. Propagate both slope uncertainties into the difference in inertia, including shared systematic errors where appropriate. Repeating identical simulated runs cannot replace that analysis.

## Questions

1. Why does the plot slope include the turntable but not the hanging mass's $$mr^2$$ contribution?
2. What physical assumption makes the fitted intercept a constant torque?
3. Could the friction intercept be resolved reliably if every run had nearly the same acceleration?
4. Why is agreement in the energy calculation not an independent experimental validation when it uses the same timing data as the inertia fit?

## What to hand in

Prelab answers, settings and separate CSV files, empty/loaded fits with residuals, added inertia and friction estimates with uncertainty, spool-radius and energy checks, and answers to the questions. Identify simulated data.
