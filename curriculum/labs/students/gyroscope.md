# Gyroscope Precession
Student laboratory · Physics I

Textbook: OpenStax *University Physics*, Vol. 1, §§11.2–11.4. Access for free at https://openstax.org/details/books/university-physics-volume-1.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/gyroscope.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Using the demo.**

- A wheel spins on a light axle whose far end rests in a cup on top of a post. Set the spin rate, the distance $$d$$ from the pivot to the wheel's centre and the axle's tilt at release, then release it. Put back returns it to the release position.
- A gate on the floor times each full turn of the axle round the post, to 0.01 s. It needs two passes, so the first period appears after the second full turn. Capture stores the wheel, the start, the tilt, the spin, $$d$$ and the last period $$P$$; Export to worksheet sends the captured rows here, with $$\Omega = 2\pi/P$$ and $$1/\omega_s$$ worked out for each row.
- The wheel can be released from rest (it dips and wobbles first) or given a sideways push at exactly the steady precession rate (no dip, no wobble).
- While it runs, the spin rate and $$d$$ can be changed and act on the moving gyroscope at once (the tilt at release and the steady start only apply at release). The strip marks each change with a dashed line and shows the steady tilt for the present angular momentum as a gold line, which the axle wobbles about. The gate starts timing afresh after a change. While it is held, a change puts it back at the release position, as before.
- The Mystery wheel has the same mass and radius as the others but hides its moment of inertia. Turning it off shows its value; turning it on again makes a new mystery wheel, so finish its readings first. Blind hides the moments of inertia, $$L$$, the predicted rate and the $$I_s$$ from the demo's own fit.

**What the demo models.**

- A rigid wheel of mass $$M = 0.500\ \text{kg}$$ and radius $$R = 0.060\ \text{m}$$ on a massless axle, a frictionless pivot, and a spin about the axle that stays constant. Solid disk $$I_s = \tfrac12 MR^2$$; the wheel with its mass near the rim $$I_s = 0.905\,MR^2$$; about a diameter, $$I_s/2$$. $$g = 9.81\ \text{m/s}^2$$.
- The motion is computed from the exact equations of a heavy symmetric top, so the dip and the wobble (nutation) after a release from rest are real, not added. There is no noise; the only rounding is the gate's 0.01 s.

</details>

## Goal

Measure how the precession rate of a gyroscope depends on its spin and on the lever arm of its weight, and use the measurements to find the wheel's moment of inertia about its axle. Find the moment of inertia of an unknown wheel. Test where the simple formula for the precession rate stops working.

## Background

A wheel spinning at angular speed $$\omega_s$$ about its axle has angular momentum $$L = I_s\omega_s$$ along the axle. With the axle level and its end on a pivot, the weight $$Mg$$ acting at distance $$d$$ from the pivot exerts a torque of size $$\tau = Mgd$$, horizontal and perpendicular to the axle. Since

$$\vec\tau = \frac{d\vec L}{dt},$$

in a short time $$dt$$ the angular momentum gains a small piece $$\vec\tau\,dt$$ at right angles to itself. Its size does not change, but the axle turns about the post through the angle $$d\varphi = \tau\,dt/L$$. The precession rate is therefore

$$\Omega = \frac{d\varphi}{dt} = \frac{\tau}{L} = \frac{Mgd}{I_s\,\omega_s},$$

and the time for one full turn round the post is $$P = 2\pi/\Omega$$. A plot of $$\Omega$$ against $$1/\omega_s$$ at fixed $$d$$ is a line through the origin with slope $$Mgd/I_s$$; a plot of $$\Omega$$ against $$d$$ at fixed spin is a line through the origin with slope $$Mg/(I_s\omega_s)$$. The spin rate is set in revolutions per minute: $$\omega_s = 2\pi\,(\text{rpm})/60$$.

The formula describes steady precession with the axle level. For a level axle it is exact when the wheel starts with the right sideways speed. A gyroscope released from rest first dips and wobbles; with fast spin the dip is tiny and the average rate is very close to the formula, but with slow spin the wobble is large and the average rate falls below it.

## Before the lab

1. Sketch the wheel, the post and the pivot seen from above, with the axle pointing away from the post. Draw $$\vec L$$, the torque from the weight, and $$d\vec L$$ for a short time. Which way does the axle go round?
2. Predict what happens to the period $$P$$ if the spin is doubled, and if $$d$$ is doubled.
3. For the solid disk ($$M = 0.500\ \text{kg}$$, $$R = 0.060\ \text{m}$$) spinning at 3000 rpm with $$d = 0.10\ \text{m}$$, calculate $$I_s$$, $$L$$, $$\tau$$, $$\Omega$$ and $$P$$.
4. What should happen with no spin at all? Explain in terms of $$\vec L$$ and $$\vec\tau$$.

## Safety

On a real bench, a fast wheel stores a lot of energy. Keep fingers, hair and loose clothing away from the rim, spin it up only with the axle supported, and keep the space round the post clear so the axle can swing freely. Catch the axle before it falls off the pivot.

## Procedure

**Part 1: spin scan, steady start.** Use the solid disk with $$d = 0.10\ \text{m}$$ and the axle level. Start it precessing at the steady rate, so there is no dip or wobble. Measure the period at 1000, 1500, 2000, 3000, 4000 and 6000 rpm. Wait for the gate to show a period for each spin before you capture it. Send these readings to the worksheet as one series, then clear the demo's readings.

**Part 2: released from rest.** Repeat the same six spins with the same wheel and $$d$$, but release the wheel from rest. Watch the tilt trace under the picture for the dip and the wobble at each spin. Send this series, then clear.

**Part 3: lever arm scan.** Go back to the steady start, solid disk, level axle, 3000 rpm. Measure the period at $$d$$ = 0.05, 0.08, 0.11, 0.14, 0.17 and 0.20 m. Send this series, then clear.

**Part 4: mystery wheel.** Choose the Mystery wheel, steady start, level axle, $$d = 0.10\ \text{m}$$. Measure the period at five or more spins between 1000 and 6000 rpm. Send this series before you turn the mystery wheel off; then turn it off and note the value it shows.

**Part 5: no spin.** Set the spin to zero and release it. Describe what happens.

## Data

| Trial | Wheel | Start | Tilt (°) | Spin (rpm) | $$d$$ (m) | $$P$$ (s) | $$\Omega$$ (rad/s) | $$1/\omega_s$$ (s) |
|---|---|---|---|---|---|---|---|---|
| | | | | | | | | |
| | | | | | | | | |
| | | | | | | | | |

Keep each part in its own copy of the table, labelled with the part. For Part 4 write the value the mystery wheel showed when you turned it off in the table's notes.

## Analysis

1. Part 1: plot $$\Omega$$ against $$1/\omega_s$$ and fit a line with a free intercept. Is the intercept zero within its uncertainty? Find $$I_s$$ from the slope and compare it with $$\tfrac12 MR^2$$.
2. Part 2: add the released from rest points to the same plot (or fit them separately). At which spins do they agree with the Part 1 line, and at which do they fall below it? Use the tilt traces to explain why.
3. Part 3: plot $$\Omega$$ against $$d$$ and fit a line. Find $$I_s$$ from the slope and compare it with your Part 1 result.
4. Part 4: find the mystery wheel's $$I_s$$ and the ratio $$I_s/(MR^2)$$, with uncertainties. Where would its mass have to be to give that ratio? Compare with the value shown when you turned it off.

## Uncertainty

The gate rounds each period to 0.01 s, so the largest error in $$P$$ is 0.005 s and the fractional error in $$\Omega$$ is at most $$0.005\ \text{s}/P$$. Which of your readings is affected most? Use the standard error of the fitted slope to give an uncertainty for $$I_s$$. On a real bench you would also need the spin rate (it slowly falls through bearing friction), $$d$$, the wheel's mass and the pivot friction.

## Questions

1. The spinning wheel does not fall. What holds it up? Find the vertical force from the pivot during steady precession.
2. The wheel's centre moves in a circle of radius $$d$$ round the post. What supplies the force for this, and how big is it at 3000 rpm with $$d = 0.10\ \text{m}$$?
3. What happens to the direction of precession if the spin is reversed? Explain with the vectors.
4. Why is the steady start needed to test the formula at low spin, while at high spin a release from rest is almost as good?

## What to hand in

Prelab answers, the four data tables, the fits with their residuals, $$I_s$$ from Parts 1 and 3 compared with $$\tfrac12 MR^2$$, the mystery wheel's $$I_s$$ and $$I_s/(MR^2)$$ with uncertainties, your Part 2 and Part 5 observations, and answers to the questions. Identify simulated data.
