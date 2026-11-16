# Measuring Friction and Testing Work and Energy
Student laboratory · Physics I

Textbook: OpenStax *University Physics*, Vol. 1, §§5.3, 5.5–5.7, 6.2, 7.1–7.4 and 8.2. Access for free at https://openstax.org/details/books/university-physics-volume-1.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/forces.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Push on a level floor; Ramp: when does it slip?; Pull at an angle; Hanging mass on a table; Ramp and hanging mass.

**Using the demo.**

- Turn the knobs on the panel in the picture (or focus one and use the arrow keys).
- F points up the ramp, tilted above the surface by its angle (below for a negative angle, pressing into the ramp). The string over the pulley runs parallel to the ramp. The string and pulley are massless and frictionless.
- Work by each force on the block, $$W = \mathbf{F}\cdot\Delta\mathbf{s}$$, added up as it moves. Their sum equals the change in the block's kinetic energy (the work energy theorem). The normal force does no work. Friction's work is negative: that energy becomes thermal energy of the block and ramp. Power is the rate of work now, $$P = \mathbf{F}\cdot\mathbf{v}$$.
- Use **Release at the top mark**: the timer reads the time for the block to slide 1.000 m from rest (to 0.001 s). Record reading stores θ, m, m₂, F and that time; $$a = 2d/t^2$$ is worked out from your time.
- Sliding down with no push or hanging mass, $$a = g\sin\theta - \mu_k g\cos\theta$$, so $$a/\cos\theta = g\tan\theta - \mu_k g$$: a straight line in $$\tan\theta$$ with slope $$g$$ and intercept $$-\mu_k g$$. The fit uses only rows with $$F = 0$$ and $$m_2 = 0$$.
- Blind hides every force size, the acceleration, the friction type, the slip angle, the arrows' lengths (all drawn the same size) and μk from the fit. The timer, the settings and the force directions stay.

</details>

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
2. Predict the signs of work by gravity, friction and the normal force during a downhill slide.
3. A 5.0 kg block at rest on one surface first slips at some ramp angle. On the same surface, does a 10.0 kg block start to slip at a smaller angle, a larger angle or the same angle? Give a reason.

## Safety

On a real bench, catch the block safely without placing fingers in its path. Secure the ramp and hanging loads. Raise the ramp slowly and keep the landing area clear.

## Procedure

Start by pressing the **Ramp: when does it slip?** setup (no push, no hanging mass), then tick **Mystery surface: hide μs and μk** under Ramp and block; this also turns Blind on.

**Static friction.** Press **Put back** so the block is at rest on the ramp, and press **Release**. Increase the **Ramp angle θ** slowly, 0.5° at a time (the up arrow key on the picture, or the knob), until the block starts to slide. Bracket the threshold between the last angle that held and the first that slipped. Press **Put back** and lower the angle below the threshold for each trial rather than treating a moving block as a static friction test. Repeat at least three times with a 5.0 kg block, then set the **Block mass m** knob to 10.0 kg and repeat: these are the two blocks of Before the lab 3, and both brackets go in your answer to Question 2. Record reading stores only timed runs, so write each threshold trial (mass, angle, held or slipped) in the Data table by hand.

**Kinetic friction.** Keep the same surface. Choose at least six angles above the slip threshold, spread over a useful range. At each angle press **Release at the top mark**, wait for the **Timer, last run** readout under Forces now, and press **Record reading** under Readings (on a real bench, measure the actual distance). Press **Export to worksheet** when all six are done; Export fills $$m$$, $$\theta$$, $$d$$, $$t$$ and $$a$$. Fit the transformed data to determine $$g$$ and $$\mu_k$$. Do not include a run that was pushed, stalled or started with a nonzero speed.

**Work and energy.** Do this part last, after the timing scan is in the worksheet: the work readouts are hidden while the Mystery surface is on, and turning Blind off reveals the surface. Choose one downhill run with known mass and angle. From your inferred $$\mu_k$$, calculate gravity work, friction work, normal work, thermal energy gained by the surfaces and the block's kinetic energy after 1.000 m. Use $$v = 2d/t$$ for the endpoint speed. Compare the energy result with the acceleration result. Then untick **Blind: hide predictions and answers** (Lab fold), open the **Work and energy since release** fold under Forces now and inspect its readouts during a fresh run, before the block hits the stop. Press **Hold** (the Release button while the block moves) to pause before impact and write down **Displacement since release, \|Δs\|** with the work readouts; those live readouts are not frozen at the timing gate. For a final check after impact, include the work done by the stop.

**Using the virtual apparatus.** Investigate one Mystery surface on a ramp with no applied push or hanging mass. Find the angle interval where a stationary block first slips, returning the block to rest before every threshold trial. For the kinetic friction scan, time a 1.000 m slide from rest at six angles above that threshold. Changing a setting invalidates the previous completed time, so obtain a fresh run for each angle and record only completed timings. Send the timing scan to the worksheet and fit the rows yourself; record the threshold angles by hand. For a work comparison, observe a fresh downhill run before impact; pausing during motion does not reset the block, and the live work readings change with position. Keep the same mystery surface for the threshold and timing parts, since generating another changes its coefficients. The work readouts and the third law force pairs appear only with Blind off, which ends the mystery, so look at them last.

## Data

| Trial | $$m$$ (kg) | $$\theta$$ (°) | Held/slipped | $$d$$ (m) | $$t$$ (s) | $$a$$ (m/s²) | Work/energy observation |
|---|---|---|---|---|---|---|---|
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |

Keep separate threshold and timing runs. Record the surface identifier, angle bracket, push and hanging mass settings, and work comparison position/time.

## Analysis

1. Convert each threshold bracket to a bracket for $$\mu_s$$. Compare masses and repeated trials without claiming more precision than the angle step supports.
2. Plot $$a/\cos\theta$$ against $$\tan\theta$$, fit a line, and report $$g$$ and $$\mu_k$$ with units and uncertainty. Inspect residuals and compare $$\mu_s$$ with $$\mu_k$$.
3. For the chosen 1.000 m run, compare total work with $$\tfrac12 mv^2$$. Account for the positive thermal energy increase without adding it as positive work on the block.
4. Compare your calculations with the live readouts at the same displacement. Explain the energy transfer when the block reaches the stop.

## Uncertainty

The virtual angle step is 0.5° and the timer rounds to 0.001 s. Use the threshold bracket directly. Since $$a = 2d/t^2$$, its fractional uncertainty depends on distance uncertainty and twice the fractional timing uncertainty. Angle errors affect both transformed axes; an ordinary line fit error alone understates that contribution. Real friction varies with surface condition, vibration and speed. Repeating an unchanged deterministic simulation does not measure that variability.

## Questions

1. Identify the third law partner of the ramp's normal force on the block. Why do those forces not cancel in the block's free body diagram?
2. Did doubling the block's mass change the slip angle? Quote your two threshold brackets and check them against Before the lab 3, then use your free body diagram of the stationary block to explain why the mass does or does not matter.

## What to hand in

Prelab diagrams and answers, threshold brackets, timing data and CSV, transformed graph and residuals, both friction coefficients and $$g$$ with uncertainty, work/energy calculations and comparison, and answers to the questions. Identify simulated data.
