# Relative Motion: A Ball Launched from a Moving Cart
Student laboratory · Physics I

Textbook: OpenStax *University Physics*, Vol. 1, §§4.3 and 4.5. Access for free at https://openstax.org/details/books/university-physics-volume-1.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/cart-launch.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Steady cart; Cart at rest; Cart speeds up; Cart brakes; Frictionless incline.

**Using the demo.**

- A cart rolls along a track and, as it passes a trigger, its launcher fires a ball perpendicular to the track. The knobs on the panel in the picture set the **Cart speed at launch**, the **Launch speed (relative to the cart)** and the **Cart acceleration after launch (negative brakes)**; on the Frictionless incline setup the third knob sets the **Incline angle** instead. Changing a knob resets the run.
- **Watch from** the ground or the cart. Seen from the cart, the velocity and acceleration arrows are relative to the cart. Strobe images mark the ball and the cart every eighth of the flight, and the graph under the track shows the position along the track of the cart (solid) and the ball (dashed) against time.
- The readouts give the time in the air (until the ball is back at the launcher's height), how far the ball and the cart moved along the track in that time, where the ball came down relative to the launcher (+ ahead of it, − behind it, in cm) and where the ball finally landed.
- Record reading works once the ball has come down; it stores the settings and those readouts. Export to worksheet sends the readings to the Data table below; Clear starts a new series, which goes into a new copy of the table.
- Blind pauses each launch at the top of the flight and hides where the ball will land until you resume.

**What the demo models.**

- $$g = 9.81\ \text{m/s}^2$$, a point ball and no air resistance. The launcher fires perpendicular to the track, so the launch pushes the cart into the track, not along it, and does not change the cart's speed.
- On the level track the cart keeps a constant speed, or has the set acceleration from the moment of launch (a motor push or a brake). A braking cart stops and stays stopped.
- On the incline the cart rolls without friction, so its acceleration along the track is $$g\sin\theta$$.
- The ball counts as caught if it comes down within 2 cm of the launcher's center. Sizes are to scale.

</details>

## Goal

Use a ball fired straight up from a moving cart to test the addition of velocities, find the time of flight from the motion seen from the ground, and predict where the ball lands when the cart speeds up or slows down after the launch.

## Background

Velocities add (§4.5): the ball's velocity relative to the ground is its velocity relative to the cart plus the cart's velocity relative to the ground,

$$\vec v_{\text{BG}} = \vec v_{\text{BC}} + \vec v_{\text{CG}}.$$

The launcher gives the ball a speed $$u$$ straight up relative to the cart, so on a level track the ball leaves the launcher with the cart's speed $$v$$ horizontally and $$u$$ vertically. In the air its horizontal velocity stays $$v$$ and its vertical acceleration is $$-g$$ (§4.3), so it is back at the launcher's height after

$$t = \frac{2u}{g}.$$

In that time the ball moves $$vt$$ along the track. If the cart keeps its speed, it also moves $$vt$$ and the ball comes down in the launcher. If the cart has an acceleration $$a$$ after the launch, it moves $$vt + \tfrac12 a t^2$$, and the ball comes down a distance

$$\Delta x = -\tfrac12 a t^2$$

from the launcher (behind it when the cart speeds up, ahead of it when the cart brakes, as long as the braking cart has not stopped).

On a frictionless incline both the cart and the ball have the acceleration $$g\sin\theta$$ along the track, and the launcher fires perpendicular to the track, where the ball's acceleration is $$-g\cos\theta$$. The ball is back at the launcher's height after $$t = 2u/(g\cos\theta)$$.

## Before the lab

1. A cart moves at 1.5 m/s and fires a ball at 4.0 m/s straight up relative to the cart. What are the ball's speed and direction relative to the ground just after the launch?
2. Predict where the ball comes down if the cart keeps its speed, and if the cart brakes after the launch.
3. Sketch the ball's path as seen from the ground and as seen from the cart, for a cart moving at constant speed.
4. On a frictionless incline the cart speeds up as it rolls. Do you expect the ball to land back in the launcher? Explain.

## Safety

On a real track, keep hands and faces out of the launcher's line, wear eye protection, catch the cart at the end of the track and keep the floor clear of balls.

## Procedure

**Steady cart.** On the level track, with a launch speed of 4.0 m/s relative to the cart and no acceleration after the launch, launch at cart speeds of 0, 0.5, 1.0, 1.5, 2.0, 2.5 and 3.0 m/s. For each launch record the time in the air, how far the ball and the cart move, and where the ball comes down relative to the launcher. Watch at least one launch from the cart as well as from the ground.

**Cart accelerates after the launch.** Keep the launch speed at 4.0 m/s and set the cart speed at launch to 3.0 m/s. Launch with cart accelerations of −3.0, −2.0, −1.0, 0, 1.0, 2.0 and 3.0 m/s² (negative values brake the cart). At 3.0 m/s the braking cart is still moving when the ball comes down; from a slower start it can stop first, and then the miss no longer follows the formula in the Background.

**Frictionless incline.** With a launch speed of 4.0 m/s and a cart speed at launch of 0.5 m/s, launch at incline angles of 5°, 10°, 15°, 20°, 25° and 30°.

**Using the virtual apparatus.** Record each launch after the ball has come down. Send each part to the worksheet before clearing, so each part gets its own copy of the Data table. Turn Blind on if you want to predict each landing before you see it, and off again to read the results.

## Data

| Trial | Track | Cart speed $$v$$ (m/s) | Launch speed $$u$$ (m/s) | Cart acceleration $$a$$ (m/s²) | Incline $$\theta$$ (°) | Time in the air $$t$$ (s) | Ball moves (m) | Cart moves (m) | Ball relative to the launcher $$\Delta x$$ (cm) | Lands |
|---|---|---|---|---|---|---|---|---|---|---|
| | | | | | | | | | | |
| | | | | | | | | | | |
| | | | | | | | | | | |

Keep the steady cart, accelerating cart and incline launches in separate copies of the table.

## Analysis

1. For the steady cart, graph how far the ball moves against the cart speed $$v$$ and fit a line. What does the slope measure? Compare it with the time in the air and with $$2u/g$$, and compare the ball's distances with the cart's.
2. For the accelerating cart, graph $$\Delta x$$ against the cart acceleration $$a$$ and fit a line. Use the slope to find the time in the air and then $$g$$. Compare with Analysis 1.
3. For the incline, compare each time in the air with $$2u/(g\cos\theta)$$. Where did the ball come down each time, and why?
4. For one steady cart launch at 3.0 m/s, find the ball's velocity relative to the ground just after the launch (speed and angle) and its highest point above the launcher. Compare with the demo's readouts.

## Uncertainty

The demo rounds the time in the air to 0.001 s, distances along the track to 0.001 m and $$\Delta x$$ to 0.1 cm; the settings are exact. Estimate how much that rounding could change your slopes, and compare with the fit's standard errors. On a real track, list what would add scatter: the cart's speed changing slightly along the track, the launcher's timing and aim, air resistance, and how well you can see where the ball lands.

## Questions

1. Seen from a cart moving at constant speed, what path does the ball follow? Why is that what Newton's first law predicts?
2. Seen from a braking cart, the ball seems to move forward with no force pushing it forward. Explain what is really happening.
3. On the incline the cart speeds up after the launch, yet the ball still lands in it. Why is this different from the cart that a motor speeds up on the level?
4. A passenger on a train moving at constant velocity drops a coin. Where does it land? Where would it land if the train were braking?

## What to hand in

Prelab answers, the three table copies with their graphs and fits, the time in the air and $$g$$ from each graph, the incline comparison, the launch velocity calculation, the uncertainty discussion and answers to the questions. Identify simulated data.
