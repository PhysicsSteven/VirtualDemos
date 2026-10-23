---
title: Projectile Range
level: Intro mechanics (calculus based)
time: 15 to 25 minutes
---
## What students should come away with

- Without air the horizontal and vertical motions are independent: constant vₓ, constant downward acceleration g, a symmetric parabola, and from ground level the longest range at 45°.
- Air drag F = ½ρC_dAv² points against the velocity, so it slows both components and couples them. The path is no longer symmetric: it comes down steeper and shorter than it went up.
- The terminal speed v_t = √(2mg/ρC_dA) sets the scale. At launch the drag force is (v₀/v_t)² times the weight, so drag matters when v₀ is comparable to v_t or larger.
- Mass drops out only in vacuum. With drag, the deceleration is F/m, so a dense, heavy ball is barely affected while a light one of similar size is.
- The best launch angle falls below 45° when drag acts, and also when the launch point is above the ground, even with no air.

## Before class

Students should know the constant acceleration equations and how to split a velocity into components. Each preset puts the ball's real mass, diameter and drag coefficient in the **Ball** sliders. Drag in the flight view or across the range chart to aim; arrow keys change the angle and **Enter** launches. The 0.25× button slows the flight for the room. Leave **Vacuum path** and **Time dots** on: the dashed vacuum parabola is the comparison every step uses. **Page Up** and **Page Down** on the flight view raise and lower the launcher.

For a measurement lab, the **Measure** section sets the **Dot interval** (Auto, 0.05 s to 0.5 s) and reads the time cursor: click a time graph, or use **Earlier dot** and **Later dot** (or the comma and period keys on the view), to read t, x and y of the selected shot to 1 cm, and its range R. **Capture reading** stores a row, **Export to worksheet** sends them to the student worksheet's Data table, and the fit plot shows **y against t** (a parabola, g = −2c) or **R against sin 2θ** (a line through the origin, slope v₀²/g) with residuals. **Blind: hide predictions and answers** in the **Lab** section hides g, the vacuum path, the next shot, the predicted readouts, the terminal speed and the model curves.

## Running it in class

1. **Baseball, Air resistance Off.** Ask for the range of a ball thrown at 40 m/s and 45° (Q2), then launch. The two paths coincide at 163 m. Point out the velocity vector at the top: horizontal, not zero.
2. **Air resistance On.** Ask Q1 first. Launch: the range drops to 94.7 m, the peak is lower and closer to the landing point, and the time dots bunch up on the steep way down. The rail shows v_t = 39.3 m/s, about the same as v₀.
3. **Best angle.** Drag across the range chart. The solid curve peaks at 40.9°, the dashed one at 45°. Ask why (Q3).
4. **Ping pong ball and Cannonball.** Same question for each: how big is drag here? Compare v₀/v_t (2.34 and 0.41) with how far the solid path falls short of the dashed one (Q4).
5. **Shot put.** Drag hardly matters (v₀/v_t = 0.09), yet the best angle is 42.4° in vacuum, because the ball leaves the hand 2 m up (Q5).
6. **Denver** (if time allows). Switch the air from **Sea level** to **Denver** with the baseball and predict the change before launching (Q6).

## Questions

**Q1.** Predict: a baseball (145 g, 7.4 cm) is hit at 40 m/s and 45°. With air resistance, will the range be a little shorter than in vacuum (say 10%) or a lot shorter? Will the highest point be halfway along the path, before halfway, or after?

**Q2.** With air resistance off, find the range, the maximum height and the flight time for a ball launched from the ground at 40 m/s and 45°. Use g = 9.81 m/s². Check with the readouts.

**Q3.** With drag on, the best angle for the baseball is about 41°, not 45°. Give a physical explanation of why drag favors a lower angle. Then use the range chart to check whether this holds for every preset launched from the ground.

**Q4.** Show that at the moment of launch the drag force divided by the weight is (v₀/v_t)². Find this ratio for the ping pong ball (v₀ = 20 m/s, v_t = 8.6 m/s) and for the cannonball (v₀ = 50 m/s, v_t = 122.7 m/s). Which one should be affected more by air, and does the demo agree?

**Q5.** The shot put leaves the hand 2.0 m above the ground at 14 m/s. In vacuum, the best angle satisfies tan θ = v₀/√(v₀² + 2gh). Find it, and explain in words why launching from above the ground lowers the best angle even with no air at all.

**Q6.** Denver's air density is about 1.0 kg/m³ instead of 1.225 kg/m³ at sea level. By what factor does the baseball's terminal speed change? Predict whether the range at 45° goes up or down, then check with the Denver button.

**Q7.** With drag, the baseball lands at 25.3 m/s even though it was launched at 40 m/s from the same height. In vacuum the two speeds are equal. Explain both facts with energy, and say where the missing kinetic energy went.

## Common misconceptions

- **"At the top of its path the ball has zero velocity."** Only the vertical component is zero. The velocity vector at the top is horizontal.
- **"45° always gives the longest range."** Only from ground level in vacuum. Drag and a raised launch point both lower the best angle.
- **"Heavier objects fall faster."** In vacuum every ball follows the same path for the same launch. With air, what matters is the drag deceleration F/m, which depends on size and mass together: the 5 kg cannonball is barely slowed, while the 2.7 g ping pong ball goes less than a quarter of its vacuum range.
- **"With air resistance the path is still a parabola, just smaller."** The path is lopsided: the ball climbs at a shallower angle than it descends, and the peak lies past the middle of the range.
- **"Drag is a fixed force, like friction on a table."** Drag grows as v², so it is largest at launch and weakest near the top of the path.

## Physics behind the demo

- The ball feels gravity and a drag force F = ½ρC_dAv² opposite its velocity, with A = πd²/4. The equation of motion is a = −g ŷ − k|v|v with k = ρC_dA/(2m), integrated with fourth order Runge–Kutta. The landing point is found on a cubic interpolation within the last step.
- The vacuum path is the exact parabola. The terminal speed is v_t = √(g/k) = √(2mg/ρC_dA).
- Each shot uses steps of at most 1 ms (and at most 1/100 of the drag time 1/√(kg)); halving the step changes the range by less than 1 part in 10⁹. Cursor readings interpolate samples a few ms apart, far below the 1 cm display.
- Sea level air is the standard atmosphere, 1.225 kg/m³. The Denver button uses 1.0 kg/m³: the standard pressure at 1609 m (83.4 kPa) at about 17 °C.
- The range chart sweeps the launch angle in 1° steps and refines the best angle with a golden section search near the peak.
- Approximations: C_d is constant (no dependence on speed or Reynolds number), the ball does not spin (no Magnus lift), there is no wind, the ground is flat, and g and ρ do not change with height. The ball is drawn larger than scale.
- **Air resistance Off** keeps the same air and only removes the drag force. **Moon (no air)** sets ρ = 0 but keeps g = 9.81 m/s², so it is a vacuum on Earth, not the lunar gravity.

## Going further

- Homework: for small drag, show that the fractional loss of range is proportional to (v₀/v_t)², using a first order perturbation of the vacuum solution in k.
- Lab connection: launch a ping pong ball and a golf ball from the same launcher and compare ranges with the two curves on the range chart.
- Elite shot putters release at about 37° to 38°, lower than the 42° optimum here, because a person can push the shot faster when throwing at a lower angle; the launch speed is not independent of the angle.
