# Measuring Friction and Testing Work and Energy
Student laboratory · Physics I

Textbook: OpenStax *University Physics*, Vol. 1, §§5.3, 5.5–5.7, 6.2, 7.1–7.4 and 8.2. Access for free at https://openstax.org/details/books/university-physics-volume-1.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/forces.html)

## Goal

Measure the static and kinetic friction coefficients of an unknown surface, then account for the work and energy of a sliding block.

## Background

For a block with no string or applied push on an incline, the normal force is $$mg\cos\theta$$. Static friction adjusts up to $$\mu_s N$$; it is not always equal to that maximum. At the onset of slipping,

$$\mu_s=\tan\theta_c.$$

For motion down the ramp, use downhill acceleration magnitude $$a$$. Newton's second law gives

$$\begin{gathered} a=g(\sin\theta-\mu_k\cos\theta), \\[4pt] \frac{a}{\cos\theta}=g\tan\theta-\mu_kg. \end{gathered}$$

A slide from rest over distance $$d$$ takes time $$t$$, so $$a = 2d/t^2$$. A line fit of $$a/\cos\theta$$ against $$\tan\theta$$ gives $$g$$ from its slope and $$\mu_k$$ from minus intercept divided by slope. Work is the component of force along the displacement times that displacement. Total work on the block equals its change in kinetic energy; gravity and friction need not cancel.

## Before the lab

1. Draw a free body diagram for a stationary block and for the same block sliding downhill.
2. Why should changing block mass leave the slip angle unchanged in this model?
3. Predict the signs of work by gravity, friction and the normal force during a downhill slide.

## Safety

On a real bench, catch the block safely without placing fingers in its path. Secure the ramp and hanging loads. Raise the ramp slowly and keep the landing area clear.

## Procedure

**Static friction.** Place the block at rest on the ramp with no push and no hanging mass. Increase the angle slowly until it starts to slide. Bracket the threshold between the last angle that held and the first that slipped. Reset the block for each trial rather than treating a moving block as a static-friction test. Repeat at least three times and test a second block mass.

**Kinetic friction.** Keep the same surface. Choose at least six angles above the slip threshold, spread over a useful range. Release from rest and time a slide over 1.000 m at each angle. Record the actual distance for a real bench. Fit the transformed data to determine $$g$$ and $$\mu_k$$. Do not include a run that was pushed, stalled or started with a nonzero speed.

**Work and energy.** Choose one downhill run with known mass and angle. From your inferred $$\mu_k$$, calculate gravity work, friction work, normal work, thermal energy gained by the surfaces and the block's kinetic energy after 1.000 m. Use $$v = 2d/t$$ for the endpoint speed. Compare the energy result with the acceleration result. Then inspect the virtual work readouts during a fresh run, before the block hits the stop. Use **Hold** to pause before impact and record the displacement from release; those live readouts are not frozen at the timing gate. For a final check after impact, include the work done by the stop.

**Using the virtual apparatus.** Investigate one Mystery surface on a ramp with no applied push or hanging mass. Find the angle interval where a stationary block first slips, returning the block to rest before every threshold trial. For the kinetic friction scan, time a 1.000 m slide from rest at six angles above that threshold. Changing a setting invalidates the previous completed time, so obtain a fresh run for each angle and record only completed timings. Send the timing scan to the worksheet and fit the rows yourself; record the threshold angles by hand. For a work comparison, observe a fresh downhill run before impact; pausing during motion does not reset the block, and the live work readings change with position. Keep the same mystery surface throughout, since generating another changes its coefficients. Compare the third law force pairs separately from the timing data.

## Data

| Trial | $$m$$ (kg) | $$\theta$$ (°) | Held/slipped | $$d$$ (m) | $$t$$ (s) | $$a$$ (m/s²) | Work/energy observation |
|---|---|---|---|---|---|---|---|
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |

Keep separate threshold and timing runs. Record the surface identifier, angle bracket, push and hanging mass settings, and work-comparison position/time.

## Analysis

1. Convert each threshold bracket to a bracket for $$\mu_s$$. Compare masses and repeated trials without claiming more precision than the angle step supports.
2. Plot $$a/\cos\theta$$ against $$\tan\theta$$, fit a line, and report $$g$$ and $$\mu_k$$ with units and uncertainty. Inspect residuals and compare $$\mu_s$$ with $$\mu_k$$.
3. For the chosen 1.000 m run, compare total work with $$\tfrac12 mv^2$$. Account for the positive thermal-energy increase without adding it as positive work on the block.
4. Compare your calculations with the live readouts at the same displacement. Explain the energy transfer when the block reaches the stop.

## Uncertainty

The virtual angle step is 0.5° and the timer rounds to 0.001 s. Use the threshold bracket directly. Since $$a = 2d/t^2$$, its fractional uncertainty depends on distance uncertainty and twice the fractional timing uncertainty. Angle errors affect both transformed axes; an ordinary line-fit error alone understates that contribution. Real friction varies with surface condition, vibration and speed. Repeating an unchanged deterministic simulation does not measure that variability.

## Questions

1. Why is static friction sometimes smaller than $$\mu_s N$$?
2. Does a normal force always equal $$mg$$? Explain for this incline.
3. Identify the third law partner of the ramp's normal force on the block. Why do those forces not cancel in the block's free body diagram?
4. After the block stops at the end, where has its mechanical energy gone?

## What to hand in

Prelab diagrams and answers, threshold brackets, timing data and CSV, transformed graph and residuals, both friction coefficients and $$g$$ with uncertainty, work/energy calculations and comparison, and answers to the questions. Identify simulated data.
