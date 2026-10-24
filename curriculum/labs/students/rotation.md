# Torque, Rolling and Angular Momentum
Student activity · Physics I · lecture demonstration

Textbook: OpenStax *University Physics*, Vol. 1, §§10.1 to 10.7 and 11.1–11.3. Access for free at https://openstax.org/details/books/university-physics-volume-1.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/rotation.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Wrench; Door: push near the hinge; Rolling race; Mass doesn't matter; Skater; Seesaw.

**Using the demo.**

- Door: drag the push point along the door and drag the arrow tip to aim and size the force. Keys: <kbd>←</kbd> <kbd>→</kbd> move the push point, <kbd>↑</kbd> <kbd>↓</kbd> turn the force, <kbd>+</kbd> <kbd>−</kbd> change its size, <kbd>Enter</kbd> pushes.
- Rolling race: drag the round grip at the top of the lowest board to tilt the ramp. Keys: <kbd>↑</kbd> <kbd>↓</kbd> tilt, <kbd>1</kbd>–<kbd>5</kbd> select a lane, <kbd>Enter</kbd> races.
- Click an object to select it. Change its mass and radius, even mid race: the motion does not change, only the energies in joules and the size.
- Every object that rolls without slipping loses the same potential energy $$mgh$$, but part of it goes into spinning. The larger $$I/mR^2$$, the bigger that share, and the slower it goes down. The frictionless block puts it all into sliding, so it wins.
- Assumes enough static friction to roll without slipping, no rolling resistance and no air drag; static friction does no work on a rolling object. Objects are drawn larger than scale.
- Skater: drag a mass in or out. Keys: <kbd>↑</kbd> <kbd>↓</kbd> move the masses out and in, <kbd>Space</kbd> plays or pauses. Moving the masses only pulls along the radius, so there is no torque and $$L$$ stays the same. The spin rate slider and the mass sliders reset the system, as if someone outside gave it a twist.
- With $$L$$ fixed, $$KE = L^2/2I$$, so the kinetic energy grows by the same factor that $$I$$ shrinks. $$\omega$$ grows by that factor too, which is why the $$\omega$$ and $$KE$$ lines on the chart lie on top of each other. The extra energy is work done by your arms: they pull each mass toward the axis, and the masses move inward along that pull.
- Seesaw: drag the blocks along the beam. Keys: <kbd>1</kbd> <kbd>2</kbd> <kbd>3</kbd> pick a block, <kbd>←</kbd> <kbd>→</kbd> move it, <kbd>Enter</kbd> releases or holds the beam.
- A block on the left ($$x < 0$$) twists the beam counterclockwise, one on the right clockwise. Balanced means $$m_1x_1 + m_2x_2 + m_3x_3 = 0$$: a heavy block close in matches a light block far out. Uniform 4 m beam of 10 kg pivoted at its center, so its own weight has no torque. Blocks are treated as point masses fixed on the beam's center line.
- Show data table lists the values drawn in the charts for the current scene.

</details>

## Goal

Predict rotational behavior, then use the demonstration to check torque, rolling acceleration and angular momentum conservation.

## Background

A body turning about a fixed axis is described by its angle $$\theta$$ (in radians), its angular velocity $$\omega = d\theta/dt$$ and its angular acceleration $$\alpha = d\omega/dt$$ (§10.1). With constant $$\alpha$$, starting from rest (§10.2),

$$\omega = \alpha t,\qquad \theta = \tfrac12\alpha t^2,\qquad \omega^2 = 2\alpha\theta.$$

Every point of the body shares $$\theta$$, $$\omega$$ and $$\alpha$$, but a point at distance $$r$$ from the axis moves along an arc $$s = r\theta$$ with speed $$v = r\omega$$, tangential acceleration $$a_t = r\alpha$$ and centripetal acceleration $$a_c = v^2/r = r\omega^2$$ (§10.3). These hold only with $$\theta$$ in radians.

Torque and fixed axis dynamics are (§§10.6–10.7)

$$\tau=rF\sin\theta,\qquad \sum\tau=I\alpha.$$

For rolling without slipping (§11.1), $$v = R\omega$$ and energy includes both translation and rotation. With negligible external torque, angular momentum $$L = I\omega$$ is conserved (§11.3).

## Before the lab

1. At fixed force, why does pushing farther from a hinge increase torque?
2. Predict which rolls down a ramp faster: a solid sphere or a hoop of the same mass and radius.
3. A door starts from rest with constant angular acceleration and turns 90° in time $$t$$. Find $$\omega$$ at 90° in terms of $$t$$, and say which moves faster, the handle or the edge of the door, and by what factor if the handle is at 0.80 m and the edge at 0.90 m.

## Safety

Keep fingers clear of real hinges and rolling objects. Secure rotating masses before release.

## Procedure

Predict each result before reading the demonstration. Compare torque at two force application radii and two angles. Compare at least three rolling shapes on the same ramp. Finally, compare a spinner before and after its masses move inward. This is a short guided activity, not an instrument calibration lab.

**Rotational variables (door swing).** Use the door, 0.90 m long and 15 kg, with the force keeping its angle to the door, at 90°. Push with 20 N at 0.80 m, then with 20 N at 0.40 m, then with 40 N at 0.40 m. For each push record the torque, the angular acceleration, the time to turn 90° and $$\omega$$ on reaching 90° in the Door swing table, then work out the remaining columns yourself.

**Using the virtual apparatus.** Choose **Torque** and vary **Force F**, **Push point r, from the pivot** and **Angle θ between r and F**. Use **Rolling race** for shape comparisons, recording **Incline angle β** and **Ramp length D**. Choose **Skater**, then **Pull in** or **Push out**, and compare angular momentum with kinetic energy. **Show data table** exposes plotted values; record the relevant readouts manually.

## Data

| Scene | Settings before/after | Predicted comparison | Displayed quantities and units | Difference or ratio |
|---|---|---|---|---|
| Torque | | | | |
| Rolling | | | | |
| Spinner | | | | |

**Door swing.** Door length $$L = 0.90$$ m. Work out the last five columns from the readouts.

| Push | $$r$$ (m) | $$F$$ (N) | $$\tau$$ (N·m) | $$\alpha$$ (rad/s²) | Time to 90°, $$t$$ (s) | $$\omega$$ at 90° (rad/s) | $$\alpha t$$ (rad/s) | $$\tfrac12\alpha t^2$$ (rad) | Edge speed $$v = L\omega$$ (m/s) | $$a_t = L\alpha$$ (m/s²) | $$a_c = L\omega^2$$ (m/s²) |
|---|---|---|---|---|---|---|---|---|---|---|---|
| | | | | | | | | | | | |
| | | | | | | | | | | | |
| | | | | | | | | | | | |

## Analysis

1. Calculate torque ratios and compare them with the displayed results.
2. Derive $$a = g\sin\beta/[1 + I/(mR^2)]$$ for rolling without slipping. Compare shape ordering with your prediction.
3. Test $$I_\text{initial}\,\omega_\text{initial} = I_\text{final}\,\omega_\text{final}$$. Compare initial and final rotational kinetic energy and identify the work source.
4. From the Door swing table, show that $$\alpha t$$ equals the $$\omega$$ readout and that $$\tfrac12\alpha t^2$$ is 90° in radians for every push. How do $$t$$ and $$\omega$$ at 90° change when $$\alpha$$ is halved or doubled, and why?
5. For the first push, find the arc length the door's edge travels and the size and direction of the edge's total acceleration on reaching 90°. Which part, $$a_t$$ or $$a_c$$, depends on how long the push has lasted?

## Uncertainty

Report readout resolution and use actual settings. These are model comparisons, so agreement is not independent measurement of a material's moment of inertia. Real bearing friction, slipping and changes in body shape can alter the results.

## Questions

1. Why can a force exert zero torque even when it is nonzero?
2. Why does mass cancel from the ideal rolling acceleration for a fixed shape?
3. How can rotational kinetic energy increase while angular momentum stays constant?
4. Why must $$\theta$$ be in radians, not degrees, in $$s = r\theta$$ and $$v = r\omega$$?

## What to hand in

Predictions, the comparison table and the Door swing table, the calculations of the Analysis and answers to the questions. Identify the activity as a simulation comparison.
