# Projectile Motion and Air Resistance
Student laboratory · Physics I

Textbook: OpenStax *University Physics*, Vol. 1, §§3.4, 4.3 and 6.4. Access for free at https://openstax.org/details/books/university-physics-volume-1.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/projectile-drag.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Baseball; Ping pong ball; Cannonball; Shot put; Soccer ball; Heavy vs light, same size.

**Using the demo.**

- Many launches gives each shot its own angle and speed, drawn at random from normal distributions around the settings with the spreads you choose; it shows the landings, a histogram, the mean, the standard deviation (n − 1) and the standard error. The random numbers come from a seeded generator, so the data are simulated.
- R range, H highest point, T flight time. Settings that differ between shots are in bold. Click a shot to load its settings into the controls. Up to 8 shots; the oldest drops off.
- Drag in the view to aim, drag the arrow tip to change the speed too, and drag the hub up to raise the launcher. On the view, arrow keys change the angle, <kbd>Page Up</kbd> and <kbd>Page Down</kbd> the height, <kbd>Enter</kbd> launches.
- The time cursor sits on a dot of the selected shot: $$t$$ is a whole number of dot intervals after launch. Click a time graph to place it, or use the buttons, or <kbd>,</kbd> and <kbd>.</kbd> on the view (<kbd>Home</kbd>, <kbd>End</kbd> jump to launch and the last dot). $$x$$ and $$y$$ read to 1 cm from the launcher's foot; $$R$$ is where the ball lands, to 1 cm.
- Record reading stores what you read for the selected shot: its settings as displayed, the cursor's t, x and y, and its range R. Cells can be edited; rows stay through preset changes until Clear. The CSV also has x and every setting.
- Turning air resistance off keeps you on Earth with the same ball and the same air; only the drag force is switched off. Moon removes the air itself but keeps Earth's g = 9.81 m/s². A drag coefficient of 0 does the same thing gradually. Sea level is the standard atmosphere, 1.225 kg/m³ (101.3 kPa, 15 °C); Denver is 1.0 kg/m³, the standard pressure at 1609 m (83.4 kPa) at about 17 °C.
- **Current settings** gives what the next shot will do; each shot in the list keeps its own numbers. **Terminal speed** gives $$v_t$$ and $$v_0/v_t$$: drag matters when the launch speed is comparable to or larger than $$v_t$$.
- **Plot and fit**, under the captured readings, fits your rows: **y against t** with a parabola $$y = a + bt + ct^2$$ (giving $$g = -2c$$ and $$b$$), and **R against sin 2θ** with a straight line (giving its slope and $$g = v_0^2/\text{slope}$$), each with residuals. It fits the rows you have captured, so fit a scan before you clear it. The worksheet's graph fits the same quadratic to $$y$$ against $$t$$ (choose a quadratic fit), with all three coefficients and their uncertainties and the residuals, and straight lines such as $$x$$ against $$t$$.
- Blind hides g, the vacuum path, the next shot preview, the predicted range, height, time and best angles, the terminal speed, the model curves on the range graph and the drag graph. The flight of each shot, the dots, the cursor reading and the range of each shot stay, as a real camera and tape would give them. Reduce motion shows each shot already landed instead of flying.
- From ground level in vacuum the best angle is 45°. Drag lowers it. So does launching from above the ground, even with no air.

**What the demo models.**

- Model: drag $$F = \tfrac{1}{2}\rho C_d A v^2$$ against the velocity with constant $$C_d$$, no spin, no wind, flat ground, $$g$$ and $$\rho$$ constant with height. Fourth order Runge–Kutta with steps of at most 1 ms; the landing point is interpolated within the last step. The balls are drawn larger than scale.

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
4. With air resistance off, a ball is launched upward at an angle. During its flight, does its horizontal speed decrease, stay the same or increase?

## Safety

On a real projectile bench, keep the landing area clear and follow the instructor's launcher and eye protection procedures. Do not aim toward people.

## Procedure

**Trajectory.** Launch from a measured height with air resistance negligible. Record at least eight positions and times over the flight. Use the same launch speed and angle throughout this run. From the **Position x** readings, find how far the ball moves horizontally in one time step early in the flight and in one late in the flight; both go in your answer to Question 1.

**Range.** Use equal launch and landing heights and $$v_0 = 20\ \text{m/s}$$ in the simulation, or assigned real values. Measure range at 20°, 30°, 40°, 45°, 50°, 60° and 70°. Keep speed fixed.

**Drag.** Repeat selected angles of the range scan (for example 30°, 40°, 45° and 50°) with air on, keeping ball properties fixed. Compare the range and angle of maximum range with the vacuum results. Compare heavy and light balls of the same size without changing their launch speed.

**Using the virtual apparatus.** Start with **Air resistance** off (the Off button under Air), set **Launch speed v₀**, **Launch angle θ** and **Launch height** under Launch, and check **Blind: hide predictions and answers** before you press **Launch**. For the trajectory, pick a **Dot interval** under Measure (0.1 s or 0.2 s gives eight or more dots), then step the cursor with **Earlier dot** and **Later dot** and press **Record reading** at each dot you use; it stores the Time t, Position x and Height y shown under Measure, and the range R. For the range scan, press Record reading once per shot. Send each scan to the worksheet before clearing (**Export to worksheet**, then **Clear** under Readings), so the trajectory and the range scan each get their own copy of the Data table. Fit the trajectory in the worksheet: a quadratic for $$y$$ against $$t$$ and a straight line for $$x$$ against $$t$$. The Data table has no $$\sin 2\theta$$ column, so fit $$R$$ against $$\sin 2\theta$$ in the demo (the **R against sin 2θ** button under Plot and fit) before you clear the range scan. Every recorded row keeps its shot's settings, so do not mix launch speeds in one range fit. For drag, turn air resistance on and record the air density and the ball's settings (Mass, Diameter and Drag coefficient under Ball, Air density ρ under Air). For the heavy and light balls, press the **Heavy vs light, same size** setup.

**Many launches.** A real launcher never fires two shots exactly alike. With air resistance off, a baseball at 40 m/s and 45° from the ground, and a spread of 1.0° in angle and 1.0% in speed, fire 10 launches, then 90 more, then 900 more, and record the number of launches, the mean range, the standard deviation and the standard error after each. Use the Many launches panel: set **Angle spread σθ** to 1.0° and **Speed spread σv/v₀** to 1.0%, press **10** (n = 10), then **10** nine more times (n = 100), then **100** nine times (n = 1000); read Launches n, Mean range, Standard deviation σ and Standard error σ/√n after each. Changing the angle starts a new set. Repeat at 30°. Record these in Table 2 by hand.

## Data

| Shot | $$v_0$$ (m/s) | $$\theta$$ (°) | $$y_0$$ (m) | Air on/off | $$t$$ (s) | $$x$$ (m) | $$y$$ (m) | $$R$$ (m) |
|---|---|---|---|---|---|---|---|---|
| | | | | | | | | |
| | | | | | | | | |
| | | | | | | | | |

Keep separate trajectory and range scans. Record ball mass, diameter, drag coefficient and air density above the drag table.

**Table 2: many launches.** $$v_0$$ = 40 m/s, no air, $$\sigma_\theta$$ = 1.0°, $$\sigma_v/v_0$$ = 1.0%.

| Angle $$\theta$$ (°) | Launches $$n$$ | Mean range $$\bar R$$ (m) | Standard deviation $$\sigma$$ (m) | Standard error $$\sigma/\sqrt n$$ (m) |
|---|---|---|---|---|
| | | | | |
| | | | | |
| | | | | |

## Analysis

1. Fit $$x$$ against $$t$$ and $$y$$ against $$t$$. Infer horizontal velocity and $$g$$; compare the fitted initial vertical velocity with $$v_0 \sin\theta$$.
2. Fit $$R$$ against $$\sin(2\theta)$$ in vacuum. Infer $$g = v_0^2/\text{slope}$$ and compare with the trajectory result.
3. Quantify the range reduction with drag. Explain why equal size does not imply equal drag acceleration for different masses.
4. From Table 2, how do the standard deviation and the standard error change as n grows from 10 to 1000? Which one tells you how well you know the mean range, and which one how far a single shot may land from it?
5. In vacuum $$R = v_0^2\sin 2\theta/g$$, so to first order $$\sigma_R^2 = \left(\frac{\partial R}{\partial\theta}\sigma_\theta\right)^2 + \left(\frac{\partial R}{\partial v_0}\sigma_v\right)^2$$ with $$\partial R/\partial v_0 = 2R/v_0$$ and $$\partial R/\partial\theta = 2v_0^2\cos 2\theta/g$$ (θ in radians). Work out $$\sigma_R$$ at 30° and at 45° and compare with your σ for 1000 launches. Why does the angle spread add almost nothing at 45°?

## Uncertainty

Use the resolution of the position and time dots and the rounding of the range. Include launch speed uncertainty when inferring $$g$$ from a range slope; speed is squared. In a real bench, include angle and height alignment. Deterministic simulation points do not acquire random uncertainty merely by repeating them. State whether errors come from reading, numerical approximation or an unsuitable model.

## Questions

1. Did the ball cover as much ground per time step late in the flight as early on? Give both steps and check them against your answer to Before the lab 4. Name the forces on the ball in flight, and use them to explain why its horizontal motion can be uniform while its vertical motion accelerates.
2. Is a shorter observed range enough to prove that $$g$$ is larger?

## With calculus

For courses that use calculus. This section is not counted in the 75 minutes; do it when your instructor assigns it.

1. With no air, the acceleration is $$a_x = 0$$, $$a_y = -g$$. Integrate each twice from the launch values to get $$x(t)$$ and $$y(t)$$ in the Background. For equal launch and landing heights, find the time of flight and $$R(\theta)$$, then set $$dR/d\theta = 0$$ to find the angle of largest range and use $$d^2R/d\theta^2$$ to show it is a maximum. Show that $$R(45^\circ \pm \delta) = R_{45}\cos 2\delta$$, and use it to explain why your 40° and 50° ranges are equal.
2. From your trajectory readings, estimate $$v_y = dy/dt$$ at 1.00 s and at 2.00 s, each from the readings just before and just after that time (their difference over the time between them). Compare each with $$v_0\sin\theta - gt$$. Between those two times $$v_y$$ changes sign: interpolate to find when the ball is highest, compare with $$v_0\sin\theta/g$$, and find the greatest height from $$y(t)$$. Is it above every height you read?

## What to hand in

Prelab answers, settings and CSV, trajectory and range fits, both estimates of $$g$$ with uncertainty, the drag comparison, the many launches table and answers to the questions (and to With calculus, if assigned). Identify simulated data.
