# Measuring Friction and Testing Work and Energy
Student laboratory · Physics I

Textbook: OpenStax *University Physics*, Vol. 1, §§5.3, 5.5–5.7, 6.2, 7.1–7.4 and 8.2. Access for free at https://openstax.org/details/books/university-physics-volume-1.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/forces.html)

## Goal

Measure the static and kinetic friction coefficients of an unknown surface, then account for the work and energy of a sliding block.

## Background

For a block with no string or applied push on an incline, the normal force is mg cos θ. Static friction adjusts up to μs N; it is not always equal to that maximum. At the onset of slipping,

$$\mu_s=\tan\theta_c.$$

For motion down the ramp, use downhill acceleration magnitude a. Newton's second law gives

$$a=g(\sin\theta-\mu_k\cos\theta),\qquad
\frac{a}{\cos\theta}=g\tan\theta-\mu_kg.$$

A slide from rest over distance d takes time t, so a = 2d/t². A line fit of a/cos θ against tan θ gives g from its slope and μk from minus intercept divided by slope. Work is the component of force along the displacement times that displacement. Total work on the block equals its change in kinetic energy; gravity and friction need not cancel.

## Before the lab

1. Draw a free body diagram for a stationary block and for the same block sliding downhill.
2. Why should changing block mass leave the slip angle unchanged in this model?
3. Predict the signs of work by gravity, friction and the normal force during a downhill slide.

## Safety

On a real bench, catch the block safely without placing fingers in its path. Secure the ramp and hanging loads. Raise the ramp slowly and keep the landing area clear.

## Procedure

**Static friction.** Place the block at rest on the ramp with no push and no hanging mass. Increase the angle slowly until it starts to slide. Bracket the threshold between the last angle that held and the first that slipped. Reset the block for each trial rather than treating a moving block as a static-friction test. Repeat at least three times and test a second block mass.

**Kinetic friction.** Keep the same surface. Choose at least six angles above the slip threshold, spread over a useful range. Release from rest and time a slide over 1.000 m at each angle. Record the actual distance for a real bench. Fit the transformed data to determine g and μk. Do not include a run that was pushed, stalled or started with a nonzero speed.

**Work and energy.** Choose one downhill run with known mass and angle. From your inferred μk, calculate gravity work, friction work, normal work, thermal energy gained by the surfaces and the block's kinetic energy after 1.000 m. Use v = 2d/t for the endpoint speed. Compare the energy result with the acceleration result. Then inspect the virtual work readouts during a fresh run, before the block hits the stop. Record their common position and time while the run is moving; the current display reports zero kinetic energy while held. Also record the displacement from release; those live readouts are not frozen at the timing gate. Discuss what work the stop must do at impact; use the pre-impact part for your quantitative check.

**Using the virtual apparatus.** Select **Ramp: when does it slip?**, set **Applied force F** and **Hanging mass m₂ (0 = none)** to zero, and choose **Mystery surface: hide μs and μk**. Keep that same surface throughout; **New mystery surface** changes it. Use **Put back**, **Release** and **Ramp angle θ** for threshold trials. For timing, choose the angle first, then press **Release at the top mark** and wait for the timer to finish. Press **Capture reading** before changing any controls; otherwise an old time can be stored with new settings. Use **Export CSV** and fit the rows yourself. Record your answers before turning off Mystery/Blind for the work comparison; this reveals the coefficients. For the final force-pair discussion, use **Show third law partners: the forces the block exerts**. Work values and force-pair observations must be recorded separately from the timing CSV.

## Data

| Trial | m (kg) | θ (°) | Held/slipped | d (m) | t (s) | a (m/s²) | Work/energy observation |
|---|---|---|---|---|---|---|---|
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |

Keep separate threshold and timing runs. Record the surface identifier, angle bracket, push and hanging mass settings, and work-comparison position/time.

## Analysis

1. Convert each threshold bracket to a bracket for μs. Compare masses and repeated trials without claiming more precision than the angle step supports.
2. Plot a/cos θ against tan θ, fit a line, and report g and μk with units and uncertainty. Inspect residuals and compare μs with μk.
3. For the chosen 1.000 m run, compare total work with ½mv². Account for the positive thermal-energy increase without adding it as positive work on the block.
4. Compare your calculations with the live readouts at the same displacement. Explain the energy transfer when the block reaches the stop.

## Uncertainty

The virtual angle step is 0.5° and the timer rounds to 0.001 s. Use the threshold bracket directly. Since a = 2d/t², its fractional uncertainty depends on distance uncertainty and twice the fractional timing uncertainty. Angle errors affect both transformed axes; an ordinary line-fit error alone understates that contribution. Real friction varies with surface condition, vibration and speed. Repeating an unchanged deterministic simulation does not measure that variability.

## Questions

1. Why is static friction sometimes smaller than μs N?
2. Does a normal force always equal mg? Explain for this incline.
3. Identify the third law partner of the ramp's normal force on the block. Why do those forces not cancel in the block's free body diagram?
4. After the block stops at the end, where has its mechanical energy gone?

## What to hand in

Prelab diagrams and answers, threshold brackets, timing data and CSV, transformed graph and residuals, both friction coefficients and g with uncertainty, work/energy calculations and comparison, and answers to the questions. Identify simulated data.
