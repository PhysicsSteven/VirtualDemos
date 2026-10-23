# Projectile Motion and Air Resistance
Student laboratory · Physics I

Textbook: OpenStax *University Physics*, Vol. 1, §§3.4, 4.3 and 6.4. Access for free at https://openstax.org/details/books/university-physics-volume-1.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/projectile-drag.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Baseball; Ping pong ball; Cannonball; Shot put; Soccer ball; Heavy vs light, same size.

**Using the demo.**

- R range, H highest point, T flight time. Settings that differ between shots are in bold. Click a shot to load its settings into the controls. Up to 8 shots; the oldest drops off.
- Drag in the view to aim, drag the arrow tip to change the speed too, and drag the hub up to raise the launcher. On the view, arrow keys change the angle, <kbd>Page Up</kbd> and <kbd>Page Down</kbd> the height, <kbd>Enter</kbd> launches.
- The time cursor sits on a dot of the selected shot: t is a whole number of dot intervals after launch. Click a time graph to place it, or use the buttons, or <kbd>,</kbd> and <kbd>.</kbd> on the view (<kbd>Home</kbd>, <kbd>End</kbd> jump to launch and the last dot). x and y read to 1 cm from the launcher's foot; R is where the ball lands, to 1 cm.
- Capture stores what you read for the selected shot: its settings as displayed, the cursor's t, x and y, and its range R. Cells can be edited; rows stay through preset changes until Clear. The CSV also has x and every setting.
- Turning air resistance off keeps you on Earth with the same ball and the same air; only the drag force is switched off. Moon removes the air itself but keeps Earth's g = 9.81 m/s². A drag coefficient of 0 does the same thing gradually. Sea level is the standard atmosphere, 1.225 kg/m³ (101.3 kPa, 15 °C); Denver is 1.0 kg/m³, the standard pressure at 1609 m (83.4 kPa) at about 17 °C.
- What the next shot will do. Each shot in the list keeps its own numbers.
- Drag matters when the launch speed is comparable to or larger than v<sub>t</sub>.
- Blind hides g, the vacuum path, the next shot preview, the predicted range, height, time and best angles, the terminal speed, the model curves on the range graph and the drag graph. The flight of each shot, the dots, the cursor reading and the range of each shot stay, as a real camera and tape would give them. Reduce motion shows each shot already landed instead of flying.
- From ground level in vacuum the best angle is 45°. Drag lowers it. So does launching from above the ground, even with no air.

**What the demo models.**

- Model: drag F = ½ρC<sub>d</sub>Av² against the velocity with constant C<sub>d</sub>, no spin, no wind, flat ground, g and ρ constant with height. Fourth order Runge–Kutta with steps of at most 1 ms; the landing point is interpolated within the last step. The balls are drawn larger than scale.

</details>

## Goal

Infer gravitational acceleration from a trajectory and a range scan, then measure how air resistance changes the result.

## Background

With negligible air resistance and $$y$$ positive upward (§4.3),

$$\begin{gathered} x=v_0\cos\theta\,t, \\[4pt] y=y_0+v_0\sin\theta\,t-\frac12gt^2. \end{gathered}$$

If launch and landing heights are equal,

$$R=\frac{v_0^2}{g}\sin(2\theta).$$

Air resistance (§6.4) opposes the velocity. Its effect depends on speed, shape, area and mass, so the vacuum range formula is a comparison model rather than a general drag solution.

## Before the lab

1. Predict which of 30° and 60° gives the larger range in vacuum at equal launch speed and height.
2. Explain how a quadratic fit $$y = a + bt + ct^2$$ can determine $$g$$.
3. Why does changing launch height invalidate the simple range formula?

## Safety

On a real projectile bench, keep the landing area clear and follow the instructor's launcher and eye-protection procedures. Do not aim toward people.

## Procedure

**Trajectory.** Launch from a measured height with air resistance negligible. Record at least eight positions and times over the flight. Use the same launch speed and angle throughout this run.

**Range.** Use equal launch and landing heights and $$v_0 = 20\ \text{m/s}$$ in the simulation, or assigned real values. Measure range at 20°, 30°, 40°, 45°, 50°, 60° and 70°. Keep speed fixed.

**Drag.** Repeat selected angles with air on, keeping ball properties fixed. Compare the range and angle of maximum range with the vacuum results. Compare heavy and light balls of the same size without changing their launch speed.

**Using the virtual apparatus.** Turn **Off** under Air, set **Launch speed v₀**, **Launch angle θ** and **Launch height**, then enable **Blind: hide predictions and answers**. Press **Launch**. Turn on **Time dots**, choose **Dot interval**, and click a trajectory dot; use **Earlier dot** / **Later dot** for adjacent samples. Press **Capture reading** at each chosen point and **Export to worksheet** before **Clear**. Use **y against t** for one trajectory and **R against sin 2θ** for the range scan. Each captured row includes its shot settings; do not mix different speeds in one range fit. For drag, select **On** and record the air density and ball settings.

## Data

| Shot | $$v_0$$ (m/s) | $$\theta$$ (°) | $$y_0$$ (m) | Air on/off | $$t$$ (s) | $$x$$ (m) | $$y$$ (m) | $$R$$ (m) |
|---|---|---|---|---|---|---|---|---|
| | | | | | | | | |
| | | | | | | | | |
| | | | | | | | | |

Keep separate trajectory and range scans. Record ball mass, diameter, drag coefficient and air density above the drag table.

## Analysis

1. Fit $$x$$ against $$t$$ and $$y$$ against $$t$$. Infer horizontal velocity and $$g$$; compare the fitted initial vertical velocity with $$v_0 \sin\theta$$.
2. Fit $$R$$ against $$\sin(2\theta)$$ in vacuum. Infer $$g = v_0^2/\text{slope}$$ and compare with the trajectory result.
3. Compare complementary-angle pairs and inspect residuals from the vacuum fit.
4. Quantify the range reduction with drag. Explain why equal size does not imply equal drag acceleration for different masses.

## Uncertainty

Use position/time-dot resolution and range rounding. Include launch-speed uncertainty when inferring $$g$$ from a range slope; speed is squared. In a real bench, include angle and height alignment. Deterministic simulation points do not acquire random uncertainty merely by repeating them. State whether errors come from reading, numerical approximation or an unsuitable model.

## Questions

1. Why can horizontal motion be uniform while vertical motion accelerates?
2. Why does a drag-free equal-height range peak at 45°?
3. Why does the vacuum fit generally fail when drag is on?
4. Is a shorter observed range enough to prove that $$g$$ is larger?

## What to hand in

Prelab answers, settings and CSV, trajectory and range fits, both estimates of $$g$$ with uncertainty, the drag comparison and answers to the questions. Identify simulated data.
