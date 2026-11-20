# Orbits and the Magnetic Bottle
Student laboratory · Physics II

Textbook: OpenStax *University Physics*, Vol. 2, §11.3. Access for free at https://openstax.org/details/books/university-physics-volume-2.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/magnetic-force.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Circular motion; Electron vs proton; E × B drift; Velocity selector; Mass spectrometer; Cyclotron; Magnetic bottle; Hall effect. This worksheet uses Circular motion and Magnetic bottle; the Hall effect has its own worksheet, The Hall Effect.

**Using the demo.**

- Drag the arrow tip on the drawing to aim and set the speed, and the ring to move the launch point. Speeds stop at $$10^7$$ m/s ($$v/c = 0.033$$) so the nonrelativistic motion stays accurate.
- Lay the ruler across the track: drag its two ends onto opposite sides of the circle. It reads to one screen pixel, so zoom in (wheel or +) for a finer reading. The timer counts time in the simulation and stops while paused. Start it as the particle passes a mark, such as the launch ring, and stop it after a whole number of turns. Keys on the drawing: M ruler, T timer, S picks what the arrow keys move.
- The Magnetic bottle setup computes the field of its two coils exactly (Biot–Savart for each ring) and steps the proton through it with the Boris method, which keeps the speed exact.
- Record reading stores what you read: the particle, the settings as displayed (q, m, v, B, E), your ruler reading and your timer reading divided by the turns timed. It never stores the model's r or T. Cells can be edited; rows stay through setup changes until Clear.
- Blind hides the r, T, f, turns, drift and pitch readouts, the r label, the circle's center, the dashed path ahead and the period axis, and in the other setups the predicted speeds, landing points, $$f_c$$ and $$K_{\max}$$. In the magnetic bottle it hides the largest field, the mirror ratio, the loss cone, the mirror prediction, the orbit radius and the period of one turn. The ruler, the timer, the settings and the speed and energy readouts stay.

</details>

## Goal

Measure a charged particle's orbit and period, then find the loss cone of a magnetic bottle.

## Background

A magnetic field exerts a force perpendicular to particle velocity (§11.3):

$$\mathbf F=q\mathbf v\times\mathbf B.$$

For nonrelativistic motion perpendicular to a uniform field,

$$r=\frac{mv}{\lvert q\rvert B},\qquad T=\frac{2\pi m}{\lvert q\rvert B}.$$

A magnetic bottle (§11.3) is a field that is weaker in the middle than at its ends. While the field changes little over one turn, the magnetic moment of the circling charge,

$$\mu=\frac{mv_\perp^2}{2B},$$

stays constant. The speed is constant too, so $$\sin^2\alpha/B$$ stays fixed, where $$\alpha$$ is the pitch angle between $$\mathbf v$$ and $$\mathbf B$$. A charge that starts at field $$B_0$$ turns round where $$B=B_0/\sin^2\alpha$$. If that is more than the largest field $$B_{\max}$$ on its path, it escapes: it is trapped only when

$$\sin^2\alpha>\frac{B_0}{B_{\max}}.$$

## Before the lab

1. Predict the changes in $$r$$ and $$T$$ when $$v$$ doubles.
2. Why does a magnetic field alone leave the particle's speed unchanged?
3. A charge moves into a stronger field in a magnetic bottle. Its speed stays the same. Predict what happens to $$v_\perp$$ and to $$v_\parallel$$.
4. A proton circles in a 0.100 T field at 1.0 × 10⁵ m/s across the field. It is launched again with the same speed across the field plus an equal speed along $$\mathbf B$$, so it moves faster overall. Seen looking along $$\mathbf B$$, is its circle bigger, smaller or the same size, and is its period longer, shorter or the same? Explain your reasoning.

## Safety

Follow the real apparatus limits for magnet current. Switch off before rewiring, keep magnetic materials away from the pole gap, and do not touch an energized electron beam tube.

## Procedure

**Particle orbit.** Choose the setup Circular motion (a proton, the Magnitude slider under Fields at $$B$$ = 0.100 T, no electric field, perpendicular launch). Keep the particle and $$B$$ fixed. Take four speeds: set the Speed in the page, v⊥ slider near 1, 2, 3 and 5 × 10⁵ m/s (it moves in log steps, so use the value it shows). At each, read the diameter with the ruler, set Turns timed to 5 and time 5 complete turns, then press Record reading.

**Adding motion along B.** Set the Speed in the page, v⊥ slider back to 1.00 × 10⁵ m/s, then drag the Velocity along B, v∥ slider to its right end (v∥ equal to v⊥) and press Reset (beside Pause). Measure the diameter with the ruler and time 5 turns as before, but do not record them; they go in your answer to Question 3. Set v∥ back to 0 afterward.

**Magnetic bottle.** Use protons at $$v = 1.0\times10^5$$ m/s, starting on the axis at the center, with the coils 20 cm apart and $$B_0 = 0.20$$ T. Set the Pitch angle α at the start slider to 25°, 30°, 35°, 45° and 60° and press Reset (beside Pause) to launch each. For each, record whether the proton escapes through a coil or stays trapped (several turning points), and for a trapped proton the bounce period. Then narrow the search in 1° steps to find the smallest pitch angle that stays trapped. Repeat 35° and 40° at $$B_0 = 0.05$$ T and watch the Magnetic moment readout. Record reading after each run; the bottle rows go to Table 2.

**Using the virtual apparatus.** Choose the circular proton setup and enable **Blind: hide predictions and answers**. Turn on **Show ruler**, select **Diameter** under **Ruler reads**, and drag both ruler ends onto opposite sides of the track. Use **Start timer**, **Stop timer**, **Reset timer** and **Turns timed** to measure several orbits. **Record reading** stores your ruler/timer measurements; **Export to worksheet** sends them to the Data table. Plot **r against v**. For the bottle, choose **Magnetic bottle** and set **Coil spacing**, **Field at the center B₀**, **Speed v**, **Pitch angle α at the start** and **Start off the axis by ρ**; read **Turning points so far**, **Bounce period, measured** and **Magnetic moment μ = mv⊥²/2B, now against the start**. Raising the playback **Speed** to ×4 or ×8 saves waiting; it does not change the motion. In the bottle setup, **Record reading** stores the readouts shown and **Export to worksheet** sends the bottle rows to Table 2.

## Data

| Run/sample | $$v$$ (m/s) or $$I$$ (A) | $$B$$ direction and magnitude (T) | $$r$$ (m) or thickness $$t$$ (m) | Turns | Elapsed time (s) | $$T$$ (s) or $$V_H$$ (V) |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |
| | | | | | | |
| | | | | | | |

The orbit rows fill this table: $$v$$, $$B$$, $$r$$, Turns, Elapsed time and $$T$$.

**Table 2: magnetic bottle.**

| Run | Pitch angle $$\alpha$$ (°) | $$B_0$$ (T) | Escaped or trapped | Turning points | Bounce period (s) | $$\mu$$ now against the start |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |
| | | | | | | |
| | | | | | | |
| | | | | | | |
| | | | | | | |
| | | | | | | |
| | | | | | | |
| | | | | | | |
| | | | | | | |

## Analysis

1. Fit $$r$$ against $$v$$ and infer $$\lvert q\rvert/m$$ from the slope and $$B$$. Compare with the known particle ratio.
2. Compare your mean period with $$2\pi m/(\lvert q\rvert B)$$.
3. From the smallest trapped pitch angle $$\alpha^*$$ at 0.20 T, estimate the mirror ratio $$B_{\max}/B_0 = 1/\sin^2\alpha^*$$. Turn Blind off and compare with **Mirror ratio B<sub>max</sub>/B<sub>0</sub>** and the loss cone.
4. Compare the bounce periods. How does the bounce period change as $$\alpha$$ approaches the loss cone?

## Questions

1. The mirror ratio depends only on the coil shape, so the loss cone is the same at 0.05 T. Why do the protons at 35° and 40° escape at 0.05 T anyway? Compare the orbit radius with the coil radius, 6 cm.
2. Earth's field traps protons and electrons in the Van Allen belts. Why do charged particles reach the atmosphere mainly near the poles?
3. When you added v∥, what happened to the diameter and the 5 turn time? Check them against Before the lab 4, then use the direction of $$q\mathbf v\times\mathbf B$$ to explain why the motion along $$\mathbf B$$ has the effect it does on the circle and the period.

## Uncertainty

For courses that treat measurement uncertainty. This section is not counted in the 75 minutes; do it when your instructor assigns it.
{: .ws-assigned}

Estimate radius uncertainty from the ruler's screen resolution and placement. Timing several turns reduces the fractional error from starting and stopping; use simulation time rather than wall clock time. Record that the data are simulated.

Give $$\lvert q\rvert/m$$ with the standard error of the slope, and say whether it agrees with the known value within that error. Say whether your mean period agrees with $$2\pi m/(\lvert q\rvert B)$$ within the rounding of the timer reading. Give the range the mirror ratio $$B_{\max}/B_0$$ could have, given that 1° smaller escapes.

## What to hand in

Prelab answers, orbit CSV, bottle table with the smallest trapped pitch angle and mirror ratio, the graph, inferred $$\lvert q\rvert/m$$ and answers to the questions (and to Uncertainty, if assigned).
