# Reading Motion from Graphs
Student laboratory · Physics I

Textbook: OpenStax *University Physics*, Vol. 1, §§3.1–3.6. Access for free at https://openstax.org/details/books/university-physics-volume-1.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/motion-graphs.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Constant velocity; Speeding up; Slowing down and turning around; Stop and go; Ball thrown up; Walk the graph.

**Using the demo.**

- Three stages, each with a constant acceleration for a set time. Set a stage's time to 0 to skip it.
- Press Start run, then drag the cart (or hold ← and →, with Shift to go faster) so its graph follows the dashed target for 10 s. The velocity and acceleration are worked out from the position samples, the way a motion detector does it, so quick jerks show up as spikes.
- Move the time marker by dragging on a graph, or with the left and right arrow keys on the picture (0.1 s a press, 1 s with Shift). **Capture reading** stores the time and position shown at the marker (t to 0.01 s, x to 0.01 m). Cells can be edited.
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

## Safety

With a real detector, clear the walking area and protect the cart from leaving the track. For a tossed ball, keep people and equipment out of its landing path.

## Procedure

**Constant acceleration.** On a real track, measure at least eight positions and times during a single interval of uniform acceleration. Include points on both sides of a turning point if the cart reverses. In the simulation, use the assigned turning motion setup. Keep a record of your settings before hiding predictions. Fit position against time and use your fit to predict the turning time and position.

**Several stages.** Make a run that speeds up, cruises and slows to rest. Before revealing the velocity graph, sketch it from the position graph. Measure the displacement in each stage. Compare their sum with the signed area under velocity. Do not fit one parabola across all three stages.

**Free fall.** Toss a ball vertically, or use the virtual setup. Capture at least eight points from launch to just before landing, with points on both sides of the highest point. Fit height against time. Infer $$g$$, initial upward speed, time to the highest point and maximum height. Treat the motion after landing separately.

**Graph matching.** Walk in front of a real detector, or move the virtual cart, to match a target position graph. Describe the required direction and speed before starting. Repeat the same target once; then try a velocity target. Explain the difference between matching a height on a position graph and matching a height on a velocity graph.

**Using the virtual apparatus.** For each setup, write down its stage settings first, then hide the predictions and answers before you take data (hiding them hides the settings too). Move the time marker to each time you want and record the position there. Use the slowing down and turning around setup for constant acceleration, the stop and go setup for the stages and the ball thrown up setup for free fall; the vertical run's height goes in the CSV column `x_m`. Send each run to the worksheet before you clear the readings, or the runs mix. Show the tangent lines and the shaded area only after your predictions. For graph matching, keep the same target for the repeat, record each score with its units, and finish with a velocity target. Graph matching is an interpretation task; the parabola fit is meant for constant acceleration, not for an arbitrary walk.

## Data

| Run/stage | $$t$$ (s) | $$x$$ or $$y$$ (m) | Estimated slope (m/s) | Target/score or observation |
|---|---|---|---|---|
| | | | | |
| | | | | |
| | | | | |

Add a copy of this table for each run (pressing **Clear** in the demo before the next run does this when you export), and note its setup and settings. For graph matching, keep the target sketch and both trial scores.

## Analysis

1. Fit the turning run to a quadratic. Find initial velocity, acceleration, turning time and turning position. Compare fit residuals with position rounding.
2. Determine both displacement and total distance for that run. Explain their difference using the velocity graph.
3. For the three stages, compare measured displacements with areas under velocity and changes in velocity with areas under acceleration.
4. Fit free fall and report $$g$$ with units and uncertainty. Compare the acceleration on the way up and down. Explain why fitting across landing would fail.
5. Interpret the two graph matching trials. Discuss whether the score improved and what part of the motion remained difficult. Do not compare scores from different targets or different graph types as if they measured identical tasks.

## Uncertainty

Captured time and position are rounded to 0.01 s and 0.01 m. Estimate how those steps affect slopes, especially over short intervals. Use residuals and the spread from reasonable point selections; a small fit error does not include every source of error. Real measurements also involve detector calibration, sampling and drag. Repeating exact simulated points does not create independent random trials. Graph matching scores describe tracking performance, not uncertainty in $$g$$.

## Questions

1. At a turning point, which of position, velocity and acceleration must be zero?
2. When does area under velocity equal distance traveled?
3. Why can position and velocity be continuous when acceleration changes abruptly between stages?
4. Why is a flat velocity target a different instruction from a flat position target?

## What to hand in

Prelab answers, labeled data and CSV files, fits and residuals, turning point and free fall results with uncertainty, stage area calculations, graph matching sketches and scores, and answers to the questions. Identify simulated data.
