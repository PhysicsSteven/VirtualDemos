# Speed Limits on Curves and Loops
Student laboratory · Physics I

Textbook: OpenStax *University Physics*, Vol. 1, §§4.4 and 6.3. Access for free at https://openstax.org/details/books/university-physics-volume-1.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/circular-motion.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Using the demo.**

- Seven setups: a ball on a string on a table, a car on a flat curve, a car on a banked curve, a car speeding up or braking on a curve, a ball inside a vertical loop, a conical pendulum, and the rotor ride. Each shows the motion, the velocity and acceleration arrows, and a free body diagram.
- Record reading stores the setup, $$r$$, $$\mu_s$$, the bank angle, $$m$$, the speed and what happens at that speed (the car holds the curve or slides off; on the banked curve, which way friction points; the ball goes round the loop, leaves the track, or stops and slides back). Readings are recorded in the flat curve, banked curve and loop setups. Export to worksheet sends them here.
- Blind hides the force sizes (the free body diagram shows directions only), $$a = v^2/r$$ and every predicted limit, leaving the settings and the motion. Keep it on for this lab.
- The loop is shown at half speed (slow motion ×2) so the motion is easy to follow; the cars and the other setups run at real speed. Every number is for real time.

**What the demo models.**

- Point objects, $$g = 9.81\ \text{m/s}^2$$. Cars: static friction from the road up to $$\mu_s N$$, no air resistance, no rolling resistance. The loop is frictionless and the ball is treated as sliding (no rotational energy). The ball on a string moves on a frictionless table.
- The speed slider moves in steps of 0.5 m/s, so a limit can be found to within one step.

</details>

## Goal

Find, by trying speeds, the fastest a car can take a flat curve, the speed a banked curve is built for, and the slowest a ball can enter a vertical loop and still go all the way round. Compare each with the prediction from Newton's second law for circular motion.

## Background

An object moving at speed $$v$$ on a circle of radius $$r$$ accelerates towards the center with $$a_c = v^2/r$$, so the forces on it must add up to a net force $$mv^2/r$$ towards the center.

**Flat curve.** Static friction from the road is the only horizontal force on the car. It can be at most $$\mu_s N = \mu_s mg$$, so the car holds the curve only while $$mv^2/r \le \mu_s mg$$:

$$v_\text{max} = \sqrt{\mu_s g r}, \qquad v_\text{max}^2 = \mu_s g\,r.$$

**Banked curve.** On a road tilted at angle $$\theta$$, the normal force leans towards the center. At one speed it supplies the whole centripetal force and no friction is needed: $$N\sin\theta = mv^2/r$$ and $$N\cos\theta = mg$$, so

$$v_\text{ideal}^2 = r g \tan\theta.$$

Slower than this, friction must point up the slope; faster, down the slope.

**Vertical loop.** At the top of a loop of radius $$r$$, gravity and the track both push towards the center, so the ball needs $$v_\text{top}^2 \ge g r$$ to stay on the track. Energy conservation from the bottom, $$v_0^2 = v_\text{top}^2 + 2g(2r)$$, then gives

$$v_0^2 \ge 5 g r.$$

A ball with $$v_0^2 \le 2gr$$ never rises past the level of the loop's center: it stops and slides back. In between, the normal force reaches zero somewhere in the upper half and the ball leaves the track.

## Before the lab

1. A car takes a flat curve of radius 50 m on a dry road ($$\mu_s = 0.70$$). Calculate its top speed. Does a heavier car have a higher top speed? Explain.
2. What bank angle lets a car take a 50 m curve at 20 m/s with no friction at all?
3. Calculate the least speed at the bottom of a loop of radius 1.5 m that takes a ball all the way round.

## Safety

There is no physical apparatus. On a real road, curve speed limits are set well below $$\sqrt{\mu_s g r}$$: wet roads, worn tires and braking in the curve all lower the grip that is left.

## Procedure

Tick **Blind: hide predictions and answers** (in the Lab fold) before you start, so the limits are not shown. For each setting, change the speed one 0.5 m/s step at a time (click the speed slider, then use the arrow keys) and watch what happens in the picture; press **Record reading** under Readings only at the limit described. Set the **Radius r** and **Bank angle θ** sliders the same way: drag close, then arrow keys (0.5 m or 0.5° a press) until the readout shows the value.

**Part 1: flat curve.** Press the **Car on a flat curve** setup; it opens with $$m = 1200\ \text{kg}$$ and $$\mu_s = 0.70$$. With these, use the **Speed v** slider to find the highest speed at which the car still holds the curve (one step faster, it slides off) for $$r$$ = 20, 40, 60 and 100 m. Press **Export to worksheet**, then **Clear**. Then, at $$r = 60\ \text{m}$$, find the same limit with $$m$$ = 2000 kg (press the End key on the **Mass m** slider), and with $$m = 1200\ \text{kg}$$ on a wet road, $$\mu_s = 0.40$$ (set with the **Static friction μs (tires on road)** slider). Export these two as a second series, then press **Clear**.

**Part 2: banked curve.** Press the **Banked curve** setup; it opens with $$r = 50\ \text{m}$$, $$\mu_s = 0.30$$ and $$m = 1200\ \text{kg}$$. Set each angle with the **Bank angle θ** slider and find for bank angles of 10°, 20°, 30° and 35° the highest speed at which friction on the free body diagram still points up the slope (one step faster, it points down the slope or is not needed). Export these readings, then press **Clear**.

**Part 3: vertical loop.** Press the **Vertical loop** setup; it opens with $$m = 0.5\ \text{kg}$$. Use the **Speed at the bottom v₀** slider to find the lowest speed at the bottom that takes the ball all the way round (one step slower, it leaves the track) for $$r$$ = 0.5, 1.5, 2.0 and 3.0 m. Export these readings. At $$r = 1.5\ \text{m}$$, also find the highest bottom speed at which the ball stops and slides back without leaving the track, and write it in the table's notes.

## Data

| Trial | Setup | $$r$$ (m) | $$\mu_s$$ | $$\theta$$ (°) | $$\tan\theta$$ | $$m$$ (kg) | $$v$$ (m/s) | $$v^2$$ (m²/s²) | Outcome |
|---|---|---|---|---|---|---|---|---|---|
| | | | | | | | | | |
| | | | | | | | | | |
| | | | | | | | | | |

Keep each series in its own copy of the table, labeled with the part. The speed recorded is on one side of the limit: note in each table which side.

## Analysis

1. Part 1: plot $$v^2$$ against $$r$$ for the four radii at $$\mu_s = 0.70$$ and fit a line. Compare the slope with $$\mu_s g$$. Does the intercept agree with zero? What do the 2000 kg and wet road readings show? Compare the wet road limit with $$\sqrt{\mu_s g r}$$.
2. Part 2: plot $$v^2$$ against $$\tan\theta$$ and fit a line. Compare the slope with $$rg$$.
3. Part 3: plot $$v_0^2$$ against $$r$$ for the four loops and fit a line. Compare the slope with $$5g$$. Compare the slide back reading at 1.5 m with $$\sqrt{2gr}$$.
4. Each recorded speed lies within one 0.5 m/s step of the true limit, on a known side. Which way does this shift each of your three slopes?

## Uncertainty

The only uncertainty in the virtual readings is the 0.5 m/s step: the true limit lies between the recorded speed and the next step. It is a one sided error, not random scatter, so the standard error of a fitted slope does not describe it. Estimate its effect on $$v^2$$ at your smallest and largest speeds. On a real road, $$\mu_s$$ itself is uncertain by tens of percent and changes with the surface, the tires and the weather.

## Questions

1. On the banked curve, why can a car with friction go both slower and faster than the ideal speed without sliding? Which way would a car slide if it went too slowly on an icy banked road?
2. A car speeds up while it goes round a flat curve. Why does it slide off at a lower speed than a car going round at constant speed?

## What to hand in

Prelab answers, the data tables with which side of each limit you recorded, the three fits with their residuals compared with $$\mu_s g$$, $$rg$$ and $$5g$$, and answers to the questions. Identify simulated data.
