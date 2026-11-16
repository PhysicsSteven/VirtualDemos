# The Spherical Pendulum: Orbits That Turn
Student laboratory · Physics I

Textbook: OpenStax *University Physics*, Vol. 1, §6.3 (the conical pendulum), §11.3 (conservation of angular momentum) and §15.4 (pendulums); the turning orbit goes beyond the textbook. Access for free at https://openstax.org/details/books/university-physics-volume-1.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/pendulum.html?scene=sphere)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Conical pendulum: a circle; Small swing: a turning ellipse; Wide swing: a rosette; Almost a plane swing; Above the pivot's level. These are in the **Spherical pendulum** scene of the Pendulums demo (the link above opens it).

**Using the demo.**

- A bob hangs from a pivot on a light rod of length $$L$$ and can swing in any direction. It starts at rest at the angle $$\theta_0$$ from straight down and is given a sideways push, measured in units of the speed that would carry it round a steady circle at that angle (the **Sideways push** slider: 1 is a circle, 0 is an ordinary swing in a plane).
- The picture shows the bob with dashed circles at the narrowest and widest angles it can reach. Below it are the path seen from above over the last 40 s and the effective potential. The time scale is real time; **¼×** slows it down.
- Under Orbit, the **Measured** readouts come from the run: the time for the last swing from one widest point to the next, how far the bob went round the vertical in that swing, the time for its last full turn round the vertical, and the narrowest and widest angles in that swing. The **exact** readouts are worked out from the energy and the angular momentum. **Blind** in the Lab fold hides the exact ones.
- **Record reading** stores the settings and the measured values. **Export to worksheet** sends the readings to the Data table below; **Clear** starts a new series, which goes into a new copy of the table.

**What the demo models.**

- A point bob on a rigid massless rod, a frictionless pivot, no air drag, $$g = 9.81\ \text{m/s}^2$$. The motion comes from the exact equations, integrated with a method that keeps the bob exactly on its sphere and the angular momentum about the vertical exactly fixed; the drift readout shows how little the energy changes.

</details>

## Goal

Find out what a pendulum does when it can swing in any direction: time a conical pendulum and compare it with the formula, then measure how fast a swing that is not quite a circle turns, and test a prediction for that turning rate.

## Background

**Two things stay fixed.** Gravity and the rod's pull both lie in a vertical plane through the pivot and the bob, so neither can twist the bob round the vertical: the angular momentum about the vertical axis, $$L_z$$, stays fixed (§11.3). With no friction the energy stays fixed too. These two fixed amounts decide everything below.

**Turning angles.** As the bob swings out, it climbs and slows; as it swings in toward the vertical, it must go round faster to keep $$L_z$$ fixed (like a skater pulling in their arms). Both effects together trap the angle $$\theta$$ from straight down between a **narrowest** and a **widest** value. The bob goes back and forth between them while it goes round the vertical. One swing in this worksheet means the motion from one widest point to the next.

**The conical pendulum.** With exactly the right sideways speed, the narrowest and widest angles are the same, and the bob goes round a horizontal circle at a fixed angle $$\theta$$. The rod's pull and gravity then add up to the force toward the center of the circle (§6.3), and one turn takes

$$T = 2\pi\sqrt{\frac{L\cos\theta}{g}} .$$

So $$T^2$$ is proportional to $$\cos\theta$$, with slope $$4\pi^2 L/g$$.

**Ellipses that turn.** For very small swings, a pendulum pulled sideways is like a ball on a spring pulled in any direction: the bob traces a fixed ellipse centered under the pivot, with two widest points per turn. A real pendulum's period grows with amplitude (the Exact period scene), so the motion out along the long axis takes slightly longer than a fixed ellipse would allow. The result is that each swing carries the bob a little more than halfway round, so the long axis of the ellipse slowly turns, in the same direction the bob goes round. For small swings with widest angle $$a$$ and narrowest angle $$b$$ (in radians), the long axis turns by about

$$\delta \approx \frac{3\pi}{8}\,a\,b \ \text{radians each swing} \quad\text{or}\quad \delta \approx 67.5^\circ \times a\,b ,$$

a result first worked out by the astronomer George Airy in 1851. A plane swing ($$b = 0$$) does not turn, and neither does a circle (it has no long axis). In the demo, $$a$$ is the release angle $$\theta_0$$, and for small swings $$b$$ is the push times $$\theta_0$$.

## Before the lab

1. A conical pendulum 1.00 m long goes round at 30° from straight down. Calculate the time for one turn.
2. Make a guess before you measure: a bob released at 10° gets half the push it needs for a circle. Will the ellipse it traces stay fixed, turn in the same direction as the bob goes round, or turn the opposite way?
3. Use the Airy formula to estimate how far the ellipse in Before the lab 2 turns in each swing, in degrees, if $$a = 10^\circ$$ and $$b = 5^\circ$$.

## Safety

There is no physical apparatus. A real pendulum bob swinging round can hit someone: stand clear of its circle.

## Procedure

Keep the **Length L** slider at 1.00 m throughout. Open the **Lab** fold in the sidebar and tick **Blind** (it hides the exact predictions until you have worked them out). Set the sliders in the **Set up the swing** card on the picture: drag close, then fine tune with the arrow keys. Changing a slider starts the bob again from its release point, so press **Play** after each change.

**Part 1: the conical pendulum.** Press the **Conical pendulum: a circle** setup (push 1). For each release angle $$\theta_0$$ = 10°, 30°, 50° and 70°: set the **Release angle θ₀ from straight down** slider, press **Play**, wait until the **Measured: last full turn round** readout shows a time (it needs two turns), then press **Record reading** under Readings. Press **Export to worksheet**, then **Clear**.

**Part 2: the turning ellipse.** Press the **Small swing: a turning ellipse** setup (10°, push 0.5). Record readings for these five pairs: $$\theta_0$$ = 10°, 15° and 20° with push 0.50, then $$\theta_0$$ = 15° with push 0.25 and 0.75 (the **Sideways push** slider). For each: set the sliders, press **Play**, wait until the **Measured: turn in that swing** readout shows an angle, watch the path seen from above for a few swings, then press **Record reading**. Press **Export to worksheet**, then **Clear**.

**Part 3: wide swings.** Press the **Wide swing: a rosette** setup (45°, push 0.4), press **Play**, let it run for about 20 s while you watch the path seen from above, and press **Record reading**. Then press the **Above the pivot's level** setup (60°, push 2), press **Play**, record a reading after a few swings, and note the **Rod tension per kg, v²/L + g cos θ** readout when the bob is at its highest (press **Play** again to pause it there). Press **Export to worksheet**. Last, untick **Blind** and copy the exact narrowest and widest angles for this setup into your answer to Analysis 3.

## Data

| Reading | Release angle $$\theta_0$$ (°) | Sideways push | Narrowest $$\theta$$ (°) | Widest $$\theta$$ (°) | Swing, widest to widest (s) | Turn round the vertical in that swing (°) | Ellipse turns per swing $$\delta$$ (°) | Time for one turn round (s) | $$\cos\theta_0$$ | $$T^2$$ (s²) | $$a\,b$$ (rad²) |
|---|---|---|---|---|---|---|---|---|---|---|---|
| | | | | | | | | | | | |
| | | | | | | | | | | | |
| | | | | | | | | | | | |

Work out $$\cos\theta_0$$ and $$T^2$$ (from the time for one turn round) yourself for Part 1, and $$a\,b$$ for Part 2, with $$a$$ the widest and $$b$$ the narrowest angle converted to radians. Keep each part in its own copy of the table.

## Analysis

1. Part 1: plot $$T^2$$ against $$\cos\theta_0$$ and fit a line. Compare the slope with $$4\pi^2 L/g$$ for $$L$$ = 1.00 m, and the intercept with zero. Use the slope to find $$g$$.
2. Part 2: plot the turn per swing $$\delta$$ (°) against $$a\,b$$ (rad²) and fit a line. Compare the slope with Airy's 67.5° per rad². Which reading lies farthest from Airy's line, and why would the formula be least accurate there?
3. Part 3: compare your measured narrowest and widest angles for the last setup with the exact ones. How far does the rosette turn in one swing, and how does that compare with the Airy formula for the same $$a$$ and $$b$$?

## Uncertainty

The measured times are shown to 0.001 s and the angles to 0.01°, and the integration error is far smaller. In Part 2 the turns are small, so the rounding of $$\delta$$ to 0.01° matters most for the smallest one: work out its relative uncertainty. Then use the residuals of your Part 2 fit to say whether the scatter about the line is about the size the rounding explains, or whether the points curve away from the line (a sign that the small swing formula is starting to fail).

## Questions

1. In Part 2, which way did the ellipse turn compared with the direction the bob went round? Was your guess in Before the lab 2 right? Use the Ellipses that turn paragraph of the Background to explain why it turns that way.
2. In the last setup of Part 3 the bob rises above the pivot's level, where gravity pulls it partly toward the pivot. The pull per kg along the rod is $$v^2/L + g\cos\theta$$. Use your widest angle and the tension you noted to explain why a bob on a string would still follow this path, and work out the slowest speed at that highest point for which a string would stay taut.
3. A Foucault pendulum in a museum is built to swing in a plane, so that the slow turning of its plane shows Earth's rotation. Use your Part 2 result to explain why the museum must start it with no sideways push at all, and why a long wire and a small swing help.

## What to hand in

Prelab answers, the three data tables with the graphs and fits for Parts 1 and 2, your value of $$g$$, the slope compared with Airy's, the comparison for Part 3, the uncertainty estimate, and the answers to the questions. Identify simulated data.
