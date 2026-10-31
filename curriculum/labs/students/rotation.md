# Torque, Rolling and Angular Momentum
Student activity · Physics I · lecture demonstration

Textbook: OpenStax *University Physics*, Vol. 1, §§10.1 to 10.7 and 11.1 to 11.3. Access for free at https://openstax.org/details/books/university-physics-volume-1.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/rotation.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Wrench; Door: push near the hinge; Rolling race; Mass doesn't matter; Rolling wheel: cycloid; Ball thrown without spin; Backspin: it comes back; Yo-yo against a dropped one; Paper roll unwinding; Unwinding cylinder: ⅔g; Skater; Seesaw.

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
- Floor: a sphere, cylinder, hollow sphere or hoop launched along a level floor with a speed $$v_0$$ and a spin, given as the rim speed $$\omega_0R$$ (negative is backspin). While the contact point slides, kinetic friction $$\mu_k mg$$ acts there; once $$v = \omega R$$ it rolls at a constant speed. No rolling resistance or air drag.
- Yo-yo: a spool unwinds from a string tied to a beam, beside an identical one that is dropped. Yo-yo (two disks on a thin axle, the string at the axle radius r), paper roll, solid cylinder or thin ring (the string at the outer radius R). Massless string, no air drag; the spools are drawn larger than the height scale.
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

Predict each result before reading the demonstration. Compare torque at two force application radii and two angles. Compare at least three rolling shapes on the same ramp. Then compare a spinner before and after its masses move inward. Last, launch a ball along a level floor and let a spool unwind from a string. This is a short guided activity, not an instrument calibration lab.

**Rotational variables (door swing).** Use the door, 0.90 m long and 15 kg, with the force keeping its angle to the door, at 90°. Push with 20 N at 0.80 m, then with 20 N at 0.40 m, then with 40 N at 0.40 m. For each push record the torque, the angular acceleration, the time to turn 90° and $$\omega$$ on reaching 90° in the Door swing table, then work out the remaining columns yourself.

**Using the virtual apparatus.** For torque, change the force, the distance of the push point from the pivot and the angle between $$\mathbf r$$ and $$\mathbf F$$, one at a time. For rolling, race the shapes on one ramp and record its incline angle $$\beta$$ and length $$D$$. For the skater, pull the masses in or push them out, and compare angular momentum and kinetic energy before and after; read the values after the masses have stopped moving. The data table lists the plotted values; record the readouts you need by hand.

**Skid, then roll.** Launch a solid sphere along the floor (R = 11 cm, m = 7.0 kg, $$\mu_k$$ = 0.20) at $$v_0$$ = 3.00 m/s with five spins: $$\omega_0R$$ = −6.00, −3.00, 0, 3.00 and 6.00 m/s. For each, record when it starts to roll and its speed once it rolls. Then launch a hoop at 3.00 m/s with no spin and record the same in another copy of the table, so the sphere's graph has only the sphere.

**Unwinding against falling.** Let each spool unwind through H = 1.00 m: the yo-yo (R = 2.8 cm) with the string at r = 0.4, 0.8 and 1.4 cm, then the solid cylinder and the thin ring. Record the time each takes to fall H while unwinding, and the time for the dropped one.

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

**Skid, then roll.** $$v_0$$ = 3.00 m/s, R = 11 cm, $$\mu_k$$ = 0.20.

| Shape | $$\omega_0R$$ (m/s) | Rolls from $$t_s$$ (s) | Rolling speed $$v_f$$ (m/s) |
|---|---|---|---|
| | | | |
| | | | |
| | | | |

**Unwinding against falling.** H = 1.00 m.

| Spool | R (cm) | String radius $$r_s$$ (cm) | Time to fall H unwinding $$t$$ (s) | $$a = 2H/t^2$$ (m/s²) | $$I/(m r_s^2)$$ | $$g/(1 + I/m r_s^2)$$ (m/s²) |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |
| | | | | | | |

## Analysis

1. Calculate torque ratios and compare them with the displayed results.
2. Derive $$a = g\sin\beta/[1 + I/(mR^2)]$$ for rolling without slipping. Compare shape ordering with your prediction.
3. Test $$I_\text{initial}\,\omega_\text{initial} = I_\text{final}\,\omega_\text{final}$$. Compare initial and final rotational kinetic energy and identify the work source.
4. From the Door swing table, show that $$\alpha t$$ equals the $$\omega$$ readout and that $$\tfrac12\alpha t^2$$ is 90° in radians for every push. How do $$t$$ and $$\omega$$ at 90° change when $$\alpha$$ is halved or doubled, and why?
5. For the first push, find the arc length the door's edge travels and the size and direction of the edge's total acceleration on reaching 90°. Which part, $$a_t$$ or $$a_c$$, depends on how long the push has lasted?
6. Plot $$v_f$$ against $$\omega_0R$$ for the sphere and fit a line. Angular momentum about the contact line on the floor, $$mR(v + k\omega R)$$ with $$k = I/mR^2$$, stays the same while it skids, so $$v_f = (v_0 + k\,\omega_0R)/(1 + k)$$. Find k from the slope and from the intercept, and compare with 2/5. Use the hoop's run to find its k as well.
7. For each spool, find a from its time and compare with $$g/(1 + I/m r_s^2)$$. For the yo-yo, $$I = \tfrac12 mR^2$$ and $$r_s = r$$; for the cylinder and the ring, $$r_s = R$$. What fraction of the height energy goes into spinning for the yo-yo with r = 0.4 cm?

## Uncertainty

Report readout resolution and use actual settings. These are model comparisons, so agreement is not independent measurement of a material's moment of inertia. Real bearing friction, slipping and changes in body shape can alter the results.

## Questions

1. Why can a force exert zero torque even when it is nonzero?
2. Why does mass cancel from the ideal rolling acceleration for a fixed shape?
3. How can rotational kinetic energy increase while angular momentum stays constant?
4. Why must $$\theta$$ be in radians, not degrees, in $$s = r\theta$$ and $$v = r\omega$$?
5. A ball launched with backspin can come back toward you. Using $$v_f = (v_0 + k\,\omega_0R)/(1 + k)$$, how much backspin does a solid sphere need to end up at rest?
6. Why does the unwinding spool's mass not change how fast it falls?

## What to hand in

Predictions, the comparison table, the Door swing, Skid and Unwinding tables, the floor graph, the calculations of the Analysis and answers to the questions. Identify the activity as a simulation comparison.
