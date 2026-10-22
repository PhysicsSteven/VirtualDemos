# Measuring Rotational Inertia with a Falling Mass
Student laboratory · Physics I

Textbook: OpenStax *University Physics*, Vol. 1, §§10.2, 10.5–10.8 and 11.1. Access for free at https://openstax.org/details/books/university-physics-volume-1.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/rotational-dynamics.html)

## Goal

Measure a turntable's rotational inertia and bearing friction, then determine an added object's inertia by subtraction. Check the energy transfer between a falling mass and a rotating body.

## Background

A hanging mass m pulls a string wound around a spool of radius r. Let a be its downward acceleration, α the table's angular acceleration, and Fₛ the string tension. With no slip,

$$mg-F_s=ma,\qquad F_s r-\tau_f=I\alpha,\qquad a=\alpha r.$$

For a drop from rest through height h with constant acceleration,

$$a=\frac{2h}{t^2},\qquad\alpha=\frac{a}{r},\qquad
\tau=m(g-a)r=I\alpha+\tau_f.$$

A plot of string torque τ against α gives total rotating inertia I from its slope and friction torque τf from its intercept. Tension is not equal to mg while the load accelerates. Here I includes the table and anything attached to it; it does not include the falling mass. The model assumes a light string, a frictionless pulley, no slip and constant bearing friction torque.

## Before the lab

1. Why does using mgr instead of m(g−a)r overestimate string torque?
2. Predict how moving two equal masses farther from the rotation axis changes the timing.
3. Why measure the empty table before placing an unknown object on it?

## Safety

On a real bench, secure the added object and keep hands, hair and clothing away from the rotating table and string. Keep feet clear of the falling mass and provide a safe catch. Do not let the string unwind beyond its intended travel.

## Procedure

**Empty table.** Measure spool radius and drop height. Start the table and load from rest. With bearing friction enabled, time a 0.500 m drop for six hanging masses: 0.020, 0.040, 0.060, 0.080, 0.100 and 0.120 kg. Keep r = 0.020 m. Compute α and string torque from each timing. Fit τ against α to find the empty table's inertia and friction torque.

**Added object.** Attach the disk or an unknown object, leaving the spool and bearing condition unchanged. Repeat the mass series. Subtract the empty-table inertia from the total to find the object's inertia. For a real disk, compare with ½MR² using measured mass and radius. For an unknown, report inertia without assuming its shape.

**Spool check.** Repeat two or more runs with a second spool radius while keeping the same rotating object and bearing condition. Test whether the points agree with the original torque-versus-acceleration line. Do not assume angular acceleration itself stays constant when the spool changes.

**Energy.** Choose a completed run. Infer endpoint v = 2h/t, angular speed ω = v/r and angular displacement Δφ = h/r. Compare mgh with ½mv² + ½Iω² + τf Δφ. Use the measured total rotating inertia, not just the added object's inertia. The comparison is an internal consistency check because both the fit and energy calculation use the same timings.

**Using the virtual apparatus.** Select **Nothing**, enable **Bearing friction** and **Blind: hide predictions and answers**, and choose **2.0 cm** under **Spool radius r**. Set **Hanging mass m**, press **Wind it back up**, then **Release** and wait for the full drop before **Capture reading**. Save with **Export CSV** before **Clear** between series. Choose **Disk** or **Mystery object** for the loaded series, keeping Blind on for your estimate. Mystery also hides the fitted inertia. For the spool check select **1.0 cm** or **3.0 cm** and make a fresh drop. The fit groups rows by object, two-mass spacing where relevant, and friction setting. Keep those settings fixed within a series; its fit can combine radii deliberately. Record your result before turning Blind off to compare energy readouts. Those readouts show the state at the current drop position; use the completed drop for the endpoint calculation.

## Data

| Series/load | m (kg) | r (m) | h (m) | t (s) | a (m/s²) | α (rad/s²) | τ (N m) |
|---|---|---|---|---|---|---|---|
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |

Record the object dimensions, bearing setting and run identifier. Keep empty and loaded fits separate; save the spool check settings with their rows.

## Analysis

1. Calculate a, α and τ from each timed drop. Fit τ against α for each load, with a free intercept, and inspect residuals.
2. Find the added inertia by subtracting slopes. Compare the two fitted friction torques and explain whether a common-bearing model is supported.
3. Compare a known disk with its shape formula, or report the unknown inertia with uncertainty. Test whether the second-spool points follow the same line.
4. Complete the energy account. Explain the role of friction work and why neither the falling mass's translational energy nor the table's own inertia may be omitted.

## Uncertainty

The virtual timer rounds to 0.001 s. Its mass and spool settings are exact model inputs; their adjustment steps are not random errors. For a real bench include spool-radius measurement, effective string radius, drop height, mass and timing uncertainty. Both plot axes contain the same measured acceleration, so their errors are correlated; an ordinary line-fit error is an approximation. Estimate sensitivity by perturbing raw timings and dimensions and repeating the fit. Propagate both slope uncertainties into the difference in inertia, including shared systematic errors where appropriate. Repeating identical simulated runs cannot replace that analysis.

## Questions

1. Why does the plot slope include the turntable but not the hanging mass's mr² contribution?
2. What physical assumption makes the fitted intercept a constant torque?
3. Could the friction intercept be resolved reliably if every run had nearly the same acceleration?
4. Why is agreement in the energy calculation not an independent experimental validation when it uses the same timing data as the inertia fit?

## What to hand in

Prelab answers, settings and separate CSV files, empty/loaded fits with residuals, added inertia and friction estimates with uncertainty, spool-radius and energy checks, and answers to the questions. Identify simulated data.
