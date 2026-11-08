# Magnetic Motion and the Hall Effect
Student laboratory · Physics II

Textbook: OpenStax *University Physics*, Vol. 2, §§11.3, 11.6–11.7. Access for free at https://openstax.org/details/books/university-physics-volume-2.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/magnetic-force.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Circular motion; Electron vs proton; E × B drift; Velocity selector; Mass spectrometer; Cyclotron; Magnetic bottle; Hall effect.

**Using the demo.**

- Drag the arrow tip on the drawing to aim and set the speed, and the ring to move the launch point. Speeds stop at $$10^7$$ m/s ($$v/c = 0.033$$) so the nonrelativistic motion stays accurate.
- Lay the ruler across the track: drag its two ends onto opposite sides of the circle. It reads to one screen pixel, so zoom in (wheel or +) for a finer reading. The timer counts time in the simulation and stops while paused. Start it as the particle passes a mark, such as the launch ring, and stop it after a whole number of turns. Keys on the drawing: M ruler, T timer, S picks what the arrow keys move.
- The Magnetic bottle setup computes the field of its two coils exactly (Biot–Savart for each ring) and steps the proton through it with the Boris method, which keeps the speed exact. The Hall effect setup starts the current at $$t = 0$$ and shows the edge charge building up; its voltmeter reads the voltage now, so wait until it stops changing.
- Capture stores what you read: the particle, the settings as displayed (q, m, v, B, E), your ruler reading and your timer reading divided by the turns timed. It never stores the model's r or T. Cells can be edited; rows stay through setup changes until Clear.
- Blind hides the r, T, f, turns, drift and pitch readouts, the r label, the circle's center, the dashed path ahead and the period axis, and in the other setups the predicted speeds, landing points, $$f_c$$ and $$K_{\max}$$. In the magnetic bottle it hides the largest field, the mirror ratio, the loss cone, the mirror prediction, the orbit radius and the period of one turn. In the Hall strip it renames the samples and hides the carriers, $$n$$, $$R_H$$, $$v_d$$, the build up time and the path angle. The ruler, the timer, the settings, the Hall voltmeter and the speed and energy readouts stay.

</details>

## Goal

Measure a charged particle's orbit and period, find the loss cone of a magnetic bottle, then use Hall voltage to identify carrier sign and estimate carrier density.

## Background

A magnetic field exerts a force perpendicular to particle velocity (§11.3):

$$\mathbf F=q\mathbf v\times\mathbf B.$$

For nonrelativistic motion perpendicular to a uniform field,

$$r=\frac{mv}{\lvert q\rvert B},\qquad T=\frac{2\pi m}{\lvert q\rvert B}.$$

A magnetic bottle (§11.3) is a field that is weaker in the middle than at its ends. While the field changes little over one turn, the magnetic moment of the circling charge,

$$\mu=\frac{mv_\perp^2}{2B},$$

stays constant. The speed is constant too, so $$\sin^2\alpha/B$$ stays fixed, where $$\alpha$$ is the pitch angle between $$\mathbf v$$ and $$\mathbf B$$. A charge that starts at field $$B_0$$ turns round where $$B=B_0/\sin^2\alpha$$. If that is more than the largest field $$B_{\max}$$ on its path, it escapes: it is trapped only when

$$\sin^2\alpha>\frac{B_0}{B_{\max}}.$$

In a Hall strip (§11.6), charge builds up until the electric and magnetic forces on drifting carriers balance. For one carrier type,

$$\lvert V_H\rvert=\frac{I\lvert B\rvert}{n\lvert q\rvert t},$$

where $$t$$ is thickness along $$B$$. The voltage sign depends on carrier sign, field direction and which edge is connected to the positive meter lead.

## Before the lab

1. Predict the changes in $$r$$ and $$T$$ when $$v$$ doubles.
2. Why does a magnetic field alone leave the particle's speed unchanged?
3. Predict what reversing $$B$$ does to the Hall voltage while conventional current keeps the same direction.
4. A charge moves into a stronger field in a magnetic bottle. Its speed stays the same. Predict what happens to $$v_\perp$$ and to $$v_\parallel$$.

## Safety

Follow the real apparatus limits for magnet current and Hall sample current. Switch off before rewiring, keep magnetic materials away from the pole gap, and do not touch an energized electron beam tube.

## Procedure

**Particle orbit.** Keep particle type and $$B$$ fixed. Take five speeds, measuring radius and the time for several complete turns. Repeat one speed with a different $$B$$. Use a perpendicular launch and no electric field.

**Magnetic bottle.** Use protons at $$v = 1.0\times10^5$$ m/s, starting on the axis at the center, with the coils 20 cm apart and $$B_0 = 0.20$$ T. Launch at pitch angles 25°, 30°, 35°, 45° and 60°. For each, record whether the proton escapes through a coil or stays trapped (several turning points), and for a trapped proton the bounce period. Then narrow the search in 1° steps to find the smallest pitch angle that stays trapped. Repeat 35° and 40° at $$B_0 = 0.05$$ T and watch the magnetic moment.

**Hall strip.** Keep sample and thickness fixed. Start the current and wait until the Hall voltage stops changing before you read it. At $$I = 20\ \text{mA}$$, measure Hall voltage at $$B$$ magnitudes 0.10, 0.20, 0.30, 0.40 and 0.50 T. Reverse $$B$$ and repeat two points. Then keep $$B$$ fixed and vary $$I$$. Compare samples and repeat one setting at twice the thickness. Draw the current, field direction, top edge and bottom edge.

**Using the virtual apparatus.** Choose the circular proton setup and enable **Blind: hide predictions and answers**. Turn on **Show ruler**, select **Diameter** under **Ruler reads**, and drag both ruler ends onto opposite sides of the track. Use **Start timer**, **Stop timer**, **Reset timer** and **Turns timed** to measure several orbits. **Capture reading** stores your ruler/timer measurements; **Export to worksheet** sends them to the Data table. Plot **r against v** and **T against v**. For the bottle, choose **Magnetic bottle** and set **Coil spacing**, **Field at the center B₀**, **Speed v**, **Pitch angle α at the start** and **Start off the axis by ρ**; read **Turning points so far**, **Bounce period, measured** and **Magnetic moment μ = mv⊥²/2B, now against the start**. Raising the playback **Speed** to ×4 or ×8 saves waiting; it does not change the motion. For the Hall part, choose **Hall effect** and use **Current I**, **Field \|B\| at the strip**, **Thickness t (along B)** and **⊗ Into page** / **⊙ Out**. Blind gives anonymous samples; leave it on until you infer the carrier sign and density. **Hall voltage now, V<sub>top</sub> − V<sub>bottom</sub>** is the strip's voltmeter. In the bottle and Hall setups, **Capture reading** stores the readouts shown and **Export to worksheet** sends Hall rows to the Data table and bottle rows to Table 2.

## Data

| Run/sample | $$v$$ (m/s) or $$I$$ (A) | $$B$$ direction and magnitude (T) | $$r$$ (m) or thickness $$t$$ (m) | Turns | Elapsed time (s) | $$T$$ (s) or $$V_H$$ (V) |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |
| | | | | | | |

Keep separate copies for the orbit and Hall measurements. Label the last column and state meter polarity.

**Table 2: magnetic bottle.**

| Run | Pitch angle $$\alpha$$ (°) | $$B_0$$ (T) | Escaped or trapped | Turning points | Bounce period (s) | $$\mu$$ now against the start |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |
| | | | | | | |

## Analysis

1. Fit $$r$$ against $$v$$ and infer $$\lvert q\rvert/m$$ from the slope and $$B$$. Compare with the known particle ratio.
2. Plot $$T$$ against $$v$$. Compare your mean period with $$2\pi m/(\lvert q\rvert B)$$.
3. Plot $$V_H$$ against signed $$B_z$$, taking out of the page as positive. Use the current direction and meter polarity to derive the slope's sign before identifying carriers.
4. Infer $$n$$ from the slope magnitude $$I/(n\lvert q\rvert t)$$, taking $$\lvert q\rvert = e$$. Check the current and thickness scalings and reveal the sample labels afterward.
5. From the smallest trapped pitch angle $$\alpha^*$$ at 0.20 T, estimate the mirror ratio $$B_{\max}/B_0 = 1/\sin^2\alpha^*$$ and the range it could have, given that 1° smaller escapes. Turn Blind off and compare with **Mirror ratio B<sub>max</sub>/B<sub>0</sub>** and the loss cone.
6. Compare the bounce periods. How does the bounce period change as $$\alpha$$ approaches the loss cone?

## Uncertainty

Estimate radius uncertainty from the ruler's screen resolution and placement. Timing several turns reduces the fractional error from starting and stopping; use simulation time rather than wall clock time. Include current, field, thickness and voltage resolution in the Hall density estimate. Record whether the data are simulated; repeated deterministic readings are not independent noisy experiments.

## Questions

1. Why does $$r$$ change with speed while the nonrelativistic period does not?
2. Why does reversing $$q$$ reverse curvature without changing the magnetic force's work?
3. Why can Hall voltage reveal carrier sign when an ordinary resistance measurement cannot?
4. Why is the Hall voltage larger for a thinner strip at fixed current?
5. The mirror ratio depends only on the coil shape, so the loss cone is the same at 0.05 T. Why do the protons at 35° and 40° escape at 0.05 T anyway? Compare the orbit radius with the coil radius, 6 cm.
6. Earth's field traps protons and electrons in the Van Allen belts. Why do charged particles reach the atmosphere mainly near the poles?

## What to hand in

Prelab answers, orbit CSV, bottle table with the smallest trapped pitch angle and mirror ratio, Hall data and polarity sketch, three graphs, inferred $$\lvert q\rvert/m$$ and $$n$$ with uncertainty, scaling checks and answers to the questions.
