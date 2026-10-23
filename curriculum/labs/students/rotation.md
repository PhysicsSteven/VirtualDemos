# Torque, Rolling and Angular Momentum
Student activity · Physics I · lecture demonstration

Textbook: OpenStax *University Physics*, Vol. 1, §§10.4, 10.6–10.7 and 11.1–11.3. Access for free at https://openstax.org/details/books/university-physics-volume-1.

[Open the demonstration](https://physicssteven.github.io/VirtualDemos/demos/rotation.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Wrench; Door: push near the hinge; Rolling race; Mass doesn't matter; Skater; Seesaw.

**Using the demo.**

- Drag the push point along the door and drag the arrow tip to aim and size the force. Keys: <kbd>←</kbd> <kbd>→</kbd> move the push point, <kbd>↑</kbd> <kbd>↓</kbd> turn the force, <kbd>+</kbd> <kbd>−</kbd> change its size, <kbd>Enter</kbd> pushes.
- Drag the round grip at the top of the lowest board to tilt the ramp. Keys: <kbd>↑</kbd> <kbd>↓</kbd> tilt, <kbd>1</kbd>–<kbd>5</kbd> select a lane, <kbd>Enter</kbd> races.
- Click an object to select it. Change its mass and radius, even mid race: the motion does not change, only the energies in joules and the size.
- Every object that rolls without slipping loses the same potential energy mgh, but part of it goes into spinning. The larger I/mR², the bigger that share, and the slower it goes down. The frictionless block puts it all into sliding, so it wins.
- Assumes enough static friction to roll without slipping, no rolling resistance and no air drag; static friction does no work on a rolling object. Objects are drawn larger than scale.
- Drag a mass in or out. Keys: <kbd>↑</kbd> <kbd>↓</kbd> move the masses out and in, <kbd>Space</kbd> plays or pauses. Moving the masses only pulls along the radius, so there is no torque and L stays the same. The spin rate slider and the mass sliders reset the system, as if someone outside gave it a twist.
- With L fixed, KE = L²/2I, so the kinetic energy grows by the same factor that I shrinks. ω grows by that factor too, which is why the ω and KE lines on the chart lie on top of each other. The extra energy is work done by your arms: they pull each mass toward the axis, and the masses move inward along that pull.
- Drag the blocks along the beam. Keys: <kbd>1</kbd> <kbd>2</kbd> <kbd>3</kbd> pick a block, <kbd>←</kbd> <kbd>→</kbd> move it, <kbd>Enter</kbd> releases or holds the beam.
- A block on the left (x < 0) twists the beam counterclockwise, one on the right clockwise. Balanced means m₁x₁ + m₂x₂ + m₃x₃ = 0: a heavy block close in matches a light block far out. Uniform 4 m beam of 10 kg pivoted at its center, so its own weight has no torque. Blocks are treated as point masses fixed on the beam's center line.
- Tables of the values drawn in the charts for this scene, for readers who cannot see the plots.

</details>

## Goal

Predict rotational behavior, then use the demonstration to check torque, rolling acceleration and angular momentum conservation.

## Background

Torque and fixed axis dynamics are (§§10.6–10.7)

$$\tau=rF\sin\theta,\qquad \sum\tau=I\alpha.$$

For rolling without slipping (§11.1), $$v = R\omega$$ and energy includes both translation and rotation. With negligible external torque, angular momentum $$L = I\omega$$ is conserved (§11.3).

## Before the lab

1. At fixed force, why does pushing farther from a hinge increase torque?
2. Predict which rolls down a ramp faster: a solid sphere or a hoop of the same mass and radius.

## Safety

Keep fingers clear of real hinges and rolling objects. Secure rotating masses before release.

## Procedure

Predict each result before reading the demonstration. Compare torque at two force application radii and two angles. Compare at least three rolling shapes on the same ramp. Finally, compare a spinner before and after its masses move inward. This is a short guided activity, not an instrument calibration lab.

**Using the virtual apparatus.** Choose **Torque** and vary **Force F**, **Push point r, from the pivot** and **Angle θ between r and F**. Use **Rolling race** for shape comparisons, recording **Incline angle β** and **Ramp length D**. Choose **Skater**, then **Pull in** or **Push out**, and compare angular momentum with kinetic energy. **Show data table** exposes plotted values; record the relevant readouts manually.

## Data

| Scene | Settings before/after | Predicted comparison | Displayed quantities and units | Difference or ratio |
|---|---|---|---|---|
| Torque | | | | |
| Rolling | | | | |
| Spinner | | | | |

## Analysis

1. Calculate torque ratios and compare them with the displayed results.
2. Derive $$a = g\sin\beta/[1 + I/(mR^2)]$$ for rolling without slipping. Compare shape ordering with your prediction.
3. Test $$I_\text{initial}\,\omega_\text{initial} = I_\text{final}\,\omega_\text{final}$$. Compare initial and final rotational kinetic energy and identify the work source.

## Uncertainty

Report readout resolution and use actual settings. These are model comparisons, so agreement is not independent measurement of a material's moment of inertia. Real bearing friction, slipping and changes in body shape can alter the results.

## Questions

1. Why can a force exert zero torque even when it is nonzero?
2. Why does mass cancel from the ideal rolling acceleration for a fixed shape?
3. How can rotational kinetic energy increase while angular momentum stays constant?

## What to hand in

Predictions, the comparison table, three calculations and answers to the questions. Identify the activity as a simulation comparison.
