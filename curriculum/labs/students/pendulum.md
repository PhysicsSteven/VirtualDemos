# Measuring Gravity with a Pendulum
Student laboratory · Physics I

Textbook: OpenStax *University Physics*, Vol. 1, §15.4, with the rotational dynamics of §§10.6–10.7. Access for free at https://openstax.org/details/books/university-physics-volume-1.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/pendulum.html)

## Goal

Determine gravitational acceleration from pendulum timing, test whether mass matters, and measure when the small-angle approximation becomes inadequate.

## Background

For a point bob on a light string of length $$L$$, measured from pivot to bob centre, the tangential equation is

$$\ddot\theta=-\frac{g}{L}\sin\theta.$$

For small angles in radians, $$\sin\theta \approx \theta$$, giving

$$T_0=2\pi\sqrt{\frac{L}{g}},\qquad T_0^2=\frac{4\pi^2}{g}L.$$

Thus the slope $$k$$ of $$T^2$$ against $$L$$ gives an approximate $$g = 4\pi^2/k$$. Finite amplitude increases the period. The first correction is $$T/T_0 \approx 1 + \theta_0^2/16$$, where $$\theta_0$$ is in radians. A uniform rod pivoted at one end instead has small-angle period $$2\pi\sqrt{2L/(3g)}$$, with $$L$$ the full rod length. The mass distribution matters even when total mass cancels.

## Before the lab

1. Predict how period changes if length is multiplied by four. What if only the bob mass changes?
2. Why does timing every other bottom crossing measure a full period?
3. If a large-angle period is used in the small-angle formula, will the inferred $$g$$ be too high or too low?

## Safety

On a real bench, secure the pivot and keep people and fragile equipment out of the swing. Use a light bob, release without pushing and follow the instructor's angle limit. Do not let the bob strike the photogate.

## Procedure

**Length scan.** Measure length from the pivot to the bob centre. Release from 5° without a push, keeping the same angle and mass for every length. Measure a full period at six lengths: 0.40, 0.60, 0.80, 1.00, 1.20 and 1.40 m. On a real bench, timing several complete oscillations can reduce reaction-time error; record both the count and total time.

**Mass check.** At $$L = 1.00\ \text{m}$$ and the same small angle, compare periods for at least three masses. Keep bob geometry fixed on real equipment so the effective length does not change.

**Amplitude scan.** Keep $$L = 1.00\ \text{m}$$ and one mass. Measure periods at 5°, 15°, 30°, 45°, 60°, 75° and 90°, with drag off in the simulation. Use the same planet throughout. Record the first completed period after each release. Limit the string-bob investigation to 90° or less: above that, a real string released from rest would go slack, while this simulation continues to impose a fixed-length constraint.

**Distributed mass.** Compare a uniform rod with a point bob at the same nominal length, small release angle and gravity. Use the rod's full length, not pivot-to-centre distance, in its formula.

**Using the virtual apparatus.** Use a simple pendulum with a bob on a string on Earth. Start at 5° with air drag off and predictions and answers hidden. For the length scan, measure six lengths at the same mass and release angle. For each trial, reset the bob to its release angle before starting again; pausing alone does not reset the motion. Record a full period after at least three bottom crossings. Send each scan to the worksheet before clearing, so each scan gets its own copy of the Data table, and graph $$T^2$$ against $$L$$ and $$T$$ against $$\theta_0$$. Keep the release angle at 5° for the length fit, even though the fit accepts other angles up to 10°. Compare a uniform rod with the bob using the same nominal length. If you investigate a mystery planet, keep the same planet throughout the scan; choosing it again generates a new gravity value.

## Data

| Scan | Type | $$L$$ (m) | $$\theta_0$$ (°) | Mass (kg) | Full period $$T$$ (s) | $$T^2$$ (s²) | Observation |
|---|---|---|---|---|---|---|---|
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |

Record planet, drag setting and the number of oscillations timed. Keep length, mass, amplitude and rod comparisons in separate copies of the table.

## Analysis

1. Fit $$T^2$$ against $$L$$ with a free intercept. Infer $$g$$ and inspect residuals. Explain what length-zero error would do to the intercept on a real bench.
2. Estimate the finite-amplitude bias using the first correction above. State whether it matters at your precision; optionally correct your inferred $$g$$ using that factor.
3. Compare the mass trials without claiming that identical rounded readings prove exact independence in nature.
4. Plot $$T$$ against $$\theta_0$$. Compare with the small-angle prediction and calculate the fractional period increase at each angle. Decide what angle range satisfies a stated tolerance, such as 1%.
5. Compare rod and bob periods. Explain the result using moment of inertia and gravitational torque rather than total mass alone.

## Uncertainty

The virtual photogate rounds period to 0.001 s; length and angle are prescribed model settings, not random readings. On a real bench include length measurement, pivot location, bob size, timing and release-angle uncertainty. Since $$T^2$$ is plotted, its uncertainty is approximately $$2T$$ times the period uncertainty. Propagate fit-slope uncertainty to $$g$$, but also include finite amplitude, drag and length-zero effects. Repeated identical simulated runs do not create independent noise. With drag on, amplitude changes during timing, so the conservative fixed-amplitude curve is no longer an exact comparison.

## Questions

1. Why does bob mass cancel from the ideal pendulum equation?
2. Why is a turning-point-to-bottom time not a full period?
3. Why does a uniform rod differ from a point bob with the same total mass and nominal length?
4. Why is the fixed-length model unsuitable for a string bob released from rest above horizontal?

## What to hand in

Prelab answers, settings and separate data/CSV files, length fit with residuals, $$g$$ and uncertainty with an amplitude-bias estimate, mass and amplitude comparisons, rod interpretation, and answers to the questions. Identify simulated data.
