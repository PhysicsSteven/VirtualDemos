# Finding an Unknown Spring Constant
Student laboratory · Physics I

Textbook: OpenStax *University Physics*, Vol. 1, §§15.1–15.2; optional damping comparison: §15.5. Access for free at https://openstax.org/details/books/university-physics-volume-1.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/springs.html)

## Goal

Determine an unknown spring constant from the dependence of oscillation period on mass.

## Background

For a mass on a linear spring (§15.1),

$$m\ddot x=-kx,\qquad T=2\pi\sqrt{\frac{m}{k}}.$$

Therefore a graph of $$T^2$$ against $$m$$ is a line with slope $$4\pi^2/k$$. The displacement $$x$$ is measured from equilibrium. Energy alternates between kinetic and spring potential energy (§15.2):

$$E=\frac12mv^2+\frac12kx^2.$$

## Before the lab

1. Predict the change in $$T$$ when $$m$$ doubles.
2. What are the units of the $$T^2$$-versus-$$m$$ slope, and how do they give $$k$$ in N/m?
3. Does the ideal period depend on release amplitude?

## Safety

Secure a real spring support and keep clear of falling masses. Do not stretch the spring beyond its elastic range or overload its attachment.

## Procedure

**Mass scan.** Keep the same unknown spring for the whole scan. Use at least five masses, such as 0.20, 0.40, 0.60, 0.80 and 1.00 kg in the simulation. Displace the mass moderately and release it. Measure a stable period after each mass change.

**Amplitude check.** At one mass, repeat with three release amplitudes. Compare periods and explain any difference within resolution.

**Optional damping.** After the undamped scan, introduce modest damping and compare the oscillation period and amplitude decay. Keep these points out of the undamped spring-constant fit.

**Using the virtual apparatus.** Choose **Simple harmonic motion**, **Free** and **Horizontal track**. Set **Damping constant b** to zero, then enable **Unknown spring: hide k**. It selects one hidden spring; do not press **New unknown spring** during a mass scan. Change **Mass m**, release the block and read the measured period after several crossings. **Capture reading** and **Export to worksheet** retain the automatic measured period while $$k$$ stays unknown. Use that period column for a spreadsheet $$T^2$$-versus-$$m$$ fit. Hand timing is optional: **Stopwatch**, **Oscillations counted, N** and **Reset stopwatch** provide a separate $$t/N$$ estimate. The built-in **T² against m** plot uses those stopwatch cells, so use it only for timed readings. Reveal the spring constant by switching the unknown option off after completing your inference.

## Data

| Run | $$m$$ (kg) | Release amplitude (m) | Automatic measured $$T$$ (s) | $$N$$, if timed | Stopwatch $$t$$ (s), if timed | $$T^2$$ (s²) |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |
| | | | | | | |

Use the same period method throughout the main fit. State whether the data came from the automatic readout or hand timing.

## Analysis

1. Fit $$T^2 = a + s m$$ and infer $$k = 4\pi^2/s$$. Inspect the intercept and residuals.
2. Compare the inferred $$k$$ with the revealed value. Include slope uncertainty and any mass uncertainty.
3. Compare the amplitude runs. Explain why the ideal linear-spring model predicts the same period.
4. If you timed oscillations, compare $$t/N$$ with the automatic readout; explain the different reading resolutions.

## Uncertainty

For automatic periods use the displayed/CSV resolution and the stability of successive estimates. For hand timing, include start/stop uncertainty and divide elapsed time by the counted number of cycles. Do not treat a deterministic automatic readout as a noisy laboratory instrument. In a real spring, effective spring mass and nonlinearity can affect the intercept and amplitude dependence.

## Questions

1. Why does increasing mass lengthen the period?
2. At which points are kinetic and spring potential energy greatest?
3. Why is a straight-line fit useful compared with calculating $$k$$ from one mass?
4. Why should damped runs be excluded from the undamped period fit?

## What to hand in

Prelab answers, settings and CSV, the $$T^2$$-versus-$$m$$ graph and residuals, $$k$$ with uncertainty, the amplitude comparison and answers to the questions. Identify simulated data.
