# Reading Motion from Graphs
Student laboratory · Physics I

Textbook: OpenStax *University Physics*, Vol. 1, §§3.1–3.6. Access for free at https://openstax.org/details/books/university-physics-volume-1.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/motion-graphs.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Constant velocity; Speeding up; Slowing down and turning around; Stop and go; Ball thrown up; Two cars; Ball on ramps; Walk the graph; Draw a graph.

**Using the demo.**

- Three stages, each with a constant acceleration for a set time. Set a stage's time to 0 to skip it.
- Press Start run, then drag the cart (or hold ← and →, with Shift to go faster) so its graph follows the dashed target for 10 s. The velocity and acceleration are worked out from the position samples, the way a motion detector does it, so quick jerks show up as spikes.
- Move the time marker by dragging on a graph, or with the left and right arrow keys on the picture (0.1 s a press, 1 s with Shift). **Record reading** stores the time and position shown at the marker (t to 0.01 s, x to 0.01 m). Cells can be edited.
- **Plot and fit** fits $$x = c_0 + c_1 t + c_2 t^2$$ by least squares over your rows and shows the residuals, for one stage of constant acceleration. Capture rows from one stage only. The worksheet's graph fits the same quadratic to position against $$t$$ (choose a quadratic fit), with all three coefficients and their uncertainties and the residuals, or a straight line to your estimated slopes against $$t$$, whose slope is $$a$$. Fit each run in the worksheet.
- Blind hides the velocity and acceleration graphs, their readouts, the tangent lines, the areas, the stage settings and the $$a$$ and $$v_0$$ from your fit, leaving the position graph, as from a motion detector. Work out $$v$$ and $$a$$ from it.

</details>

## Goal

Use position measurements to determine velocity and acceleration. Connect graph slopes and signed areas to motion, then test the same ideas for a ball thrown upward.

## Background

A motion detector records position, not force. Velocity is the slope of position against time; acceleration is the slope of velocity against time. For one interval with constant acceleration,

$$x=x_0+v_0t+\frac12at^2,\qquad v=v_0+at.$$

The signed area under a velocity graph is displacement. Distance traveled adds the magnitudes of the forward and backward displacements. For a freely moving ball, choose upward as positive and replace $$x$$ by $$y$$; acceleration is $$-g$$ while the ball is in flight, including at its highest point. Air resistance is neglected here.

## Before the lab

1. Sketch position and velocity graphs for an object moving forward, stopping briefly and returning. Can its acceleration remain negative throughout?
2. What does each coefficient in $$x = c_0 + c_1 t + c_2 t^2$$ tell you?
3. How can an object have zero velocity and nonzero acceleration at the same instant?
4. In the Two cars setup, car A starts from rest behind car B and speeds up, while car B keeps a steady speed. When car A draws level with car B, is it moving faster than car B, slower or at the same speed? A quick sketch of the two position graphs may help you decide.

## Safety

With a real detector, clear the walking area and protect the cart from leaving the track. For a tossed ball, keep people and equipment out of its landing path.

## Procedure

**Using the virtual apparatus.** For each setup (the buttons under Setups), write down its stage settings first (Start position x₀, Start velocity v₀ and each stage's acceleration and time, under Motion), then check **Blind: hide predictions and answers** (under Lab) before you take data (hiding them hides the settings too). To take a reading, move the time marker to the time you want (drag on a graph, or click the picture and use the left and right arrow keys: 0.1 s a press, 1 s with Shift) and press **Record reading**; it stores the Time t and Position x shown at the marker. The vertical run's height goes in the CSV column `x_m`. Press **Export to worksheet** after each run, then **Clear**, or the runs mix. Turn Blind off, and check **Tangent lines (slope)** and **Shade the area from 0 to t** (under At the time marker), only after your predictions.

**Constant acceleration.** On a real track, measure at least six positions and times during a single interval of uniform acceleration. Include points on both sides of a turning point if the cart reverses. In the simulation, use the **Slowing down and turning around** setup and record the position at t = 0, 2, 3, 5, 6 and 8 s. Fit position against time and use your fit to predict the turning time and position.

**Several stages.** Use the **Stop and go** setup, which speeds up, cruises and slows to rest. Before revealing the velocity graph, sketch it from the position graph. Measure the displacement in each stage: record the position at the start and end of each stage (the stage times are in the settings you wrote down). Compare their sum with the signed area under velocity (the **Displacement Δx = x − x₀ = area under v** readout at the end, with Blind off). Do not fit one parabola across all three stages.

**Free fall.** Toss a ball vertically, or use the **Ball thrown up** setup. Record at least six points from launch to just before landing, with points on both sides of the highest point (for example at 0, 0.6, 1.2, 1.8, 2.1 and 2.4 s). Fit height against time. Infer $$g$$, initial upward speed, time to the highest point and maximum height. Treat the motion after landing separately.

**Two cars.** Use the **Two cars** setup as it opens. From the two cars' starting positions, velocities and accelerations (under Motion and Car B; About this setup gives the answers, so leave it closed), predict when and where car A draws level with car B, and when the gap between them is largest and how large it is. Write $$x_A(t)$$ and $$x_B(t)$$ and solve $$x_A = x_B$$. Then turn Blind off and step the time marker through the run to check, with the **Gap x_B − x_A** and **Side by side** readouts. Record both in Table 2. At the time the Side by side readout gives (about 4.8 s), also read car A's **Velocity v** and **Car B velocity v**; they go in your answer to Question 1.

## Data

| Run/stage | $$t$$ (s) | $$x$$ or $$y$$ (m) | Estimated slope (m/s) | Target/score or observation |
|---|---|---|---|---|
| | | | | |
| | | | | |
| | | | | |

Add a copy of this table for each run (pressing **Clear** in the demo before the next run does this when you export), and note its setup and settings.

**Table 2: two cars.**

| Quantity | Your prediction | Demo |
|---|---|---|
| | | |
| | | |
| | | |

## Analysis

1. Fit the turning run to a quadratic. Find initial velocity, acceleration, turning time and turning position. Compare fit residuals with position rounding.
2. Determine both displacement and total distance for that run. Explain their difference using the velocity graph.
3. For the three stages, compare measured displacements with areas under velocity and changes in velocity with areas under acceleration.
4. Fit free fall and report $$g$$ with units and uncertainty. Compare the acceleration on the way up and down. Explain why fitting across landing would fail.

## Uncertainty

Captured time and position are rounded to 0.01 s and 0.01 m. Estimate how those steps affect slopes, especially over short intervals. Use residuals and the spread from reasonable point selections; a small fit error does not include every source of error. Real measurements also involve detector calibration, sampling and drag. Repeating exact simulated points does not create independent random trials.

## Questions

1. Side by side, how did the two cars' velocities compare? Give the two you read and set them against your answer to Before the lab 4. Use the slopes of the two $$x$$–$$t$$ lines to explain what being level says, and does not say, about the two velocities, and why the gap is largest exactly when the two velocities are equal.

## With calculus

For courses that use calculus. This section is not counted in the 75 minutes; do it when your instructor assigns it.

1. Start from $$a = dv/dt$$ with $$a$$ constant. Integrate once from $$v = v_0$$ at $$t = 0$$ to get $$v(t)$$, then use $$v = dx/dt$$ and integrate again from $$x = x_0$$ to get $$x(t)$$. Use your result to explain why the coefficient $$c_2$$ in Before the lab 2 is $$a/2$$, not $$a$$.
2. In your Ball thrown up readings, estimate the velocity at 1.20 s from the readings at 0.60 and 1.80 s (their difference over the 1.20 s between them), and the acceleration at 1.20 s from the second difference $$\big[y(1.80) - 2y(1.20) + y(0.60)\big]/(0.60\ \text{s})^2$$. Compare them with $$dy/dt$$ and $$d^2y/dt^2$$ of $$y = v_0t - \tfrac12gt^2$$ with the settings you wrote down. How large an error can the 0.01 m rounding of the heights put into each estimate?
3. For the Two cars setup, write the gap $$G(t) = x_B(t) - x_A(t)$$ from the settings you wrote down. Set $$dG/dt = 0$$ to find when the gap is largest, use $$d^2G/dt^2$$ to show it is a maximum, and compare the time and the gap with Table 2.

## What to hand in

Prelab answers, labeled data and CSV files, fits and residuals, turning point and free fall results with uncertainty, stage area calculations and answers to the questions (and to With calculus, if assigned). Identify simulated data.
