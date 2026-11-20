# Projectiles: Sideways and Up
Student worksheet · High school Physics and College Physics 2e

Textbook: OpenStax *Physics* (high school), §5.3, and OpenStax *College Physics 2e*, §3.4. Access for free at https://openstax.org/details/books/physics and https://openstax.org/details/books/college-physics-2e.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/projectile-drag.html?ws=hs-projectiles)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Using the demo.**

- Set **Launch speed v₀**, **Launch angle θ** and **Launch height** under Launch, then press **Launch**. Each shot is added to the Shots list with its range R, highest point H and flight time T. Up to 8 shots are kept; the oldest drops off.
- **Air resistance** (under Air) switches the drag force on and off. With it off the ball moves under gravity alone, $$g$$ = 9.81 m/s².
- Under Measure, **Dot interval** sets the time between the dots drawn along the path. **Earlier dot** and **Later dot** move a time cursor from dot to dot; the readouts give the Time t, the Position x and the Height y of the ball at that dot, to 1 cm, measured from the launcher's foot.
- **Record reading** (under Readings) stores the selected shot's settings, the cursor's $$t$$, $$x$$ and $$y$$, and the shot's range $$R$$. **Export to worksheet** sends the readings to this page's Data table; **Clear** starts a new series, which goes into a new copy of the table.

**What the demo models.** With air resistance off, the ball has a constant downward acceleration $$g$$ and no sideways force. The ground is flat and level.

</details>

## Goal

Show that a projectile's sideways motion and its up and down motion go on independently, find how long a ball launched sideways takes to land, and find the launch angle that sends a ball farthest.

## Background

Once a ball leaves the launcher, and air resistance can be left out, the only force on it is its weight, straight down. So the ball's motion splits into two parts that do not affect each other.

- **Sideways ($$x$$):** no force, so the horizontal velocity stays the same for the whole flight: $$x = v_x t$$.
- **Up and down ($$y$$):** the acceleration is $$g$$ downward, as for a dropped ball. A ball launched sideways from height $$y_0$$ starts with no vertical velocity, so after time $$t$$ it has fallen $$y_0 - y = \tfrac12 g t^2$$.

A ball launched sideways from height $$h$$ lands when it has fallen $$h$$, at time $$T = \sqrt{2h/g}$$, whatever its sideways speed. In that time it travels $$R = v_0 T$$.

A ball launched from the ground at speed $$v_0$$ and angle $$\theta$$ above the horizontal has $$v_x = v_0\cos\theta$$ and starting vertical velocity $$v_y = v_0\sin\theta$$. Its range on level ground is

$$R = \frac{v_0^2 \sin 2\theta}{g}.$$

Since $$\sin 2\theta$$ is largest at $$2\theta = 90°$$, the range is longest at 45°. Two angles that add to 90°, such as 30° and 60°, give the same range.

## Before the lab

1. A ball rolls off a table 1.0 m high. How long does it take to reach the floor? If it leaves the table at 3.0 m/s, how far from the table does it land?
2. A ball is launched sideways at 10 m/s from a height of 10.0 m. Find its flight time and range. Where is it after 0.40 s ($$x$$ and $$y$$)?
3. A ball is launched from the ground at 20 m/s. Find its range at 30°, 45° and 60°.
4. Two balls leave a 10 m high ledge at the same moment: one launched sideways at 20 m/s, the other at only 2 m/s, so it nearly drops straight down. Which one lands first, or do they land together? Write your guess and the reason for it before you open the demo.

## Safety

No hazards in the virtual lab. With real launchers, wear eye protection and never stand in front of a loaded launcher.

## Procedure

The link at the top opens the Projectile Range demo. Under Air, press **Off** beside Air resistance, and keep it off for the whole worksheet. In the Lab fold, tick **Blind: hide predictions and answers**. To set a slider exactly, use the arrow keys on it after clicking it.

**Part 1: a sideways launch.** Set Launch speed v₀ to 10 m/s, Launch angle θ to 0° and Launch height to 10.0 m, and press **Launch**. Under Measure, press **0.2 s** beside Dot interval. Press **Earlier dot** until the cursor sits at the launch ($$t$$ = 0.00 s), then press **Record reading**. Press **Later dot** and record, and repeat for every dot up to the last one before the ball lands (8 readings). Press **Export to worksheet**, then **Clear**: the readings fill the Data table. Fill in the last two columns: $$t^2$$, and the distance fallen $$y_0 - y$$.

**Part 2: same height, different speeds.** Keep the angle at 0° and the height at 10.0 m. Launch at 2, 5, 10, 15 and 20 m/s, and press Record reading after each shot (one reading per shot; where the cursor sits does not matter). For each shot, write down the flight time T from the Shots list. Compare the flight times of the 2 m/s and 20 m/s shots with your guess in Before the lab 4. Press Export to worksheet, then Clear: these readings go to a second copy of the table.

**Part 3: range against angle.** Set the Launch height to 0.0 m and Launch speed v₀ to 20 m/s. Launch at 15°, 30°, 45°, 60° and 75°, and record a reading after each shot. Press Export to worksheet: these readings go to a third copy of the table.

## Data

| Shot | $$v_0$$ (m/s) | $$\theta$$ (°) | $$y_0$$ (m) | Air on/off | $$t$$ (s) | $$x$$ (m) | $$y$$ (m) | $$R$$ (m) | $$t^2$$ (s²) | Fallen $$y_0 - y$$ (m) |
|---|---|---|---|---|---|---|---|---|---|---|
| | | | | | | | | | | |
| | | | | | | | | | | |
| | | | | | | | | | | |

The last two columns are for Part 1 only. Write the flight times T from Part 2 beside the table.

## Analysis

1. For Part 1, make a graph of $$x$$ (vertical) against $$t$$ (horizontal). What shape is it? Find its slope and compare it with the launch speed.
2. For Part 1, make a graph of the distance fallen $$y_0 - y$$ (vertical) against $$t^2$$ (horizontal). It should be a straight line. Find its slope; since $$y_0 - y = \tfrac12 g t^2$$, the slope is $$\tfrac12 g$$. What value of $$g$$ do you get?
3. For Part 2, compare the five flight times with each other and with $$T = \sqrt{2h/g}$$ for $$h$$ = 10.0 m. Then make a graph of the range $$R$$ (vertical) against the launch speed $$v_0$$ (horizontal). What does its slope mean?
4. For Part 3, make a graph of $$R$$ (vertical) against $$\theta$$ (horizontal), and draw a smooth curve through the points. At which angle is the range longest? Which pairs of angles give the same range?
5. Work out $$R = v_0^2 \sin 2\theta / g$$ for each angle in Part 3 and compare with your measured ranges.

## Questions

1. Look back at your guess in Before the lab 4. What flight times did the shots at 2 m/s and 20 m/s have? Use the separate sideways and up and down motions to explain the result: what does the sideways speed change, and what does it not change?
2. A soccer player can kick at 15° or at 75° and get the same range. Which kick stays in the air longer? Use your Part 3 shots (the Shots list gives T) or the formulas to explain why a goalkeeper might prefer one of them.

## Uncertainty

For courses that treat measurement uncertainty. This section is not counted in the 75 minutes; do it when your instructor assigns it.
{: .ws-assigned}

The demo gives positions and ranges to 1 cm and times to 0.01 s, so a slope from several points is good to about three significant figures. A difference between your $$g$$ and 9.81 m/s² smaller than that rounding is not a real difference. Give the slope in Analysis 2 and your $$g$$ with their uncertainties, and say whether your $$g$$ agrees with 9.81 m/s² within them. With air resistance on, the results would change: a real ball would fall short of these ranges.

## What to hand in

Prelab answers, the three copies of the Data table with the last two columns filled in for Part 1, the flight times from Part 2, the four graphs, and answers to the questions (and to Uncertainty, if assigned). Identify simulated data.
