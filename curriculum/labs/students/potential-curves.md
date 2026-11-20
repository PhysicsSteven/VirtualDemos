# Reading a Potential Energy Diagram
Student activity · Physics I · lecture demonstration

Textbook: OpenStax *University Physics*, Vol. 1, §§7.1, 7.3 and 8.1–8.4. Access for free at https://openstax.org/details/books/university-physics-volume-1.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/potential-curves.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Spring; Roller coaster; Double well; Molecule (Lennard Jones); Pendulum; Draw your own.

**Using the demo.**

- Drag the dashed energy line, or drag the particle to a new starting point; dropped where $$U > E$$, it starts from rest with $$E = U$$. Keys on the diagram: <kbd>↑</kbd> <kbd>↓</kbd> energy, <kbd>←</kbd> <kbd>→</kbd> starting point, <kbd>Space</kbd> play or pause, <kbd>R</kbd> reset.
- At a minimum a push brings the particle back (stable). At a maximum a nudge sends it away (unstable). On a flat stretch it stays wherever it is put (neutral). Near a stable minimum $$U \approx U_0 + \tfrac{1}{2}U''(x - x_0)^2$$, a spring with $$k = U''$$, so $$\omega_0 = \sqrt{U''/m}$$.

</details>

## Goal

Use a potential energy curve to predict force, speed, turning points and equilibrium stability.

## Background

For one dimensional conservative motion (§§8.2–8.4),

$$F_x=-\frac{dU}{dx},\qquad E=\frac12mv^2+U(x).$$

A turning point has $$E = U$$ and $$v = 0$$. An equilibrium has $$dU/dx = 0$$; a local minimum is stable against small displacements. Work by the conservative force from $$x_1$$ to $$x_2$$ is $$U(x_1)-U(x_2)$$ (§7.1).

## Before the lab

1. What force direction follows from a positive slope of $$U(x)$$?
2. Why is motion forbidden where $$U(x) > E$$ in this classical model?
3. In the Spring setup the particle stops for an instant at each turning point. Which way does the force on it point at that instant: back toward $$x = 0$$, away from $$x = 0$$, or is there no force at all?

## Safety

For a real rolling track comparison, secure the track and catch the object safely. No physical apparatus is required for this screen activity.

## Procedure

Sketch the potential and choose three total energies. Predict turning points and where speed will be largest. Check those predictions, then repeat for a curve with two wells. Explain when the particle can cross the central barrier.

**Using the virtual apparatus.**

1. Press the Spring setup ($$k$$ = 20 N/m, $$m$$ = 0.5 kg). Open Display and uncheck Turning points, Equilibria and Force and velocity, and do not look at the At the particle readouts yet.
2. Open Plot data and press Show data table. It lists $$x$$ and $$U$$ along the curve; estimate slopes and turning positions from these samples rather than from a force formula.
3. Choose three total energies with the Total energy E slider, for example about 0.4, 0.9 and 1.6 J (the slider moves in small steps, so write the value it shows). For each, write the predicted turning points (where $$U = E$$) and where the speed is largest. Then, at three positions inside the allowed region, write $$x$$ and $$U$$ from the data table, your estimated slope, the predicted $$F_x$$ and the predicted speed in one Data table row each.
4. Check: press Play, press Pause when the particle is near each position, and compare with Force F = −dU/dx, Velocity v and Turning points, where U = E under At the particle. Then check the three drawings again. On the Spring, at your middle energy, also press Pause when **Velocity v** is as close to zero as you can get it, at a turning point, and read **Force F = −dU/dx** and the position $$x$$; both go in your answer to Question 1.
5. Press the Double well setup (barrier height 1 J, $$m$$ = 1 kg) and repeat steps 1 to 4 with two energies below the barrier top and one above it, for example about 0.5, 0.9 and 1.5 J. The Molecule and Pendulum setups are not part of this activity.

## Data

| Potential and total $$E$$ (J) | $$x$$ (m) | $$U$$ (J) | Estimated slope $$dU/dx$$ (N) | Predicted $$F_x$$ (N) | Predicted speed (m/s) |
|---|---|---|---|---|---|
| | | | | | |
| | | | | | |
| | | | | | |

## Analysis

1. Estimate $$-dU/dx$$ from nearby table points and compare with the force readout.
2. Calculate $$v = \sqrt{2(E-U)/m}$$ at three allowed positions. At turning points discuss acceleration as well as speed.
3. Classify equilibria from the local curve shape. Compare turning point patterns below and above a double well barrier.

## Questions

1. What force did you read at the Spring's turning point, and at what $$x$$? Does it agree with your answer to Before the lab 3? Use $$F_x = -dU/dx$$ to explain whether acceleration must vanish when speed is zero, and say where on the curve the force does vanish.
2. Why is a local maximum of $$U$$ unstable?
3. Can the same total energy allow two disconnected regions of motion?

## Uncertainty

For courses that treat measurement uncertainty. This section is not counted in the 75 minutes; do it when your instructor assigns it.
{: .ws-assigned}

State the spacing used to estimate a slope. Small spacing can amplify rounding, while large spacing smooths local curvature. Treat this as interpretation of a model curve, not independent validation of a real potential.

## With calculus

For courses that use calculus. This section is not counted in the 75 minutes; do it when your instructor assigns it.

1. On the Spring, energy conservation gives $$v = dx/dt = \sqrt{2(E - U)/m}$$ with $$U = \tfrac12kx^2$$. Write $$E = \tfrac12kA^2$$, separate the variables and integrate from $$x = 0$$ to the turning point $$x = A$$ (use $$\int dx/\sqrt{A^2 - x^2} = \arcsin(x/A)$$) to get the time for a quarter cycle. Show that the period is $$2\pi\sqrt{m/k}$$ whatever $$E$$ is, and compare it with the readout **Timed in the simulation** (under Period) at your energies.
2. The Double well is $$U = U_0[(x/a)^2 - 1]^2$$ with $$U_0 = 1$$ J and $$a = 0.8$$ m. Differentiate it to get $$F_x$$, and compare with the force readouts at your Double well Data table positions. Find every equilibrium from $$dU/dx = 0$$ and classify each by the sign of $$d^2U/dx^2$$. Small oscillations about a stable one have $$\omega_0 = \sqrt{U''/m}$$: compare $$2\pi/\omega_0$$ with the readout **Small oscillations 2π/ω₀**.

## What to hand in

Predicted sketches, the comparison table, slope/speed calculations and answers to the questions (and to Uncertainty and With calculus, if assigned). Identify the activity as a simulation comparison.
