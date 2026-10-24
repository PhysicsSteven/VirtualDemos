# Static Equilibrium: Support Forces and Cable Tension
Student laboratory · Physics I

Textbook: OpenStax *University Physics*, Vol. 1, §§12.1 and 12.2. Access for free at https://openstax.org/details/books/university-physics-volume-1.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/equilibrium.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Seesaw; Plank on two supports; Sign on a strut and cable; Ladder against a wall.

**Using the demo.**

- Every force on the structure is drawn as an arrow to scale, with its size in newtons. Drag a load along the beam (or a person up the ladder), or set exact values on the sliders. Choosing a setup puts all of its values back to that setup's starting values.
- Record reading stores the setup's settings and the forces as the readouts show them, to 0.1 N and 0.1°. Export to worksheet sends the readings to the Data table below; Clear starts a new series, which goes into a new copy of the table.
- Blind hides the forces, the torques and the verdict (balanced, tips, slips) and draws every arrow the same length, so you can make your own predictions. It also stops Record reading, since the forces are what you record.

**What the demo models.**

- Beams, planks, struts and ladders are rigid and uniform, so each one's weight acts at its middle. Cables are massless, and the pivot and the hinge are frictionless. The ladder rests against a frictionless wall on a floor with static friction coefficient $$\mu_s$$.
- The forces come from the two equilibrium conditions, $$\sum \vec F = 0$$ and $$\sum \tau = 0$$, with $$g = 9.81\ \text{m/s}^2$$. A support can only push: when the equations ask a support to pull down, the demo says the plank tips instead.

</details>

## Goal

Measure how two supports share the weight of a plank as a load moves along it and find where the plank tips; then measure how the tension in a sign's cable depends on the cable's angle.

## Background

An object stays at rest only if the forces on it add to zero and the torques on it, about any point, add to zero (§12.1):

$$\sum F_x = 0,\qquad \sum F_y = 0,\qquad \sum \tau = 0.$$

**Plank on two supports.** A uniform plank of length $$L$$ and mass $$m_p$$ rests on supports at $$x = a$$ and $$x = b$$, measured from its left end. A painter of mass $$m$$ stands at $$x$$. Taking torques about the left support and then adding the vertical forces,

$$F_2 = \frac{m_p g\,(L/2 - a) + m g\,(x - a)}{b - a},\qquad F_1 = (m_p + m)g - F_2 .$$

Both support forces are straight lines in $$x$$. A support can only push up, so when $$F_1$$ reaches zero the plank is about to tip about the right support.

**Sign on a strut and cable.** A uniform horizontal strut of length $$L$$ and mass $$m_s$$ is hinged to a wall. A sign of mass $$m$$ hangs at a distance $$d$$ from the wall, and a cable runs from the strut's outer end to the wall a height $$h$$ above the hinge, at an angle $$\theta$$ to the strut, with $$\tan\theta = h/L$$. Torques about the hinge give (§12.2)

$$T\,L\sin\theta = \left(m_s\frac{L}{2} + m\,d\right)g,\qquad T = \frac{(m_s L/2 + m d)\,g}{L}\cdot\frac{1}{\sin\theta},$$

and the hinge supplies the rest: $$H_x = T\cos\theta$$ away from the wall and $$H_y = (m_s + m)g - T\sin\theta$$ up.

## Before the lab

1. A 40 kg child sits 1.5 m from the pivot of a seesaw that pivots at its middle. Where must a 30 kg child sit to balance? What force does the pivot exert?
2. For the plank in the Procedure (4.0 m, 20 kg, supports at 0.50 m and 2.50 m, a 60 kg painter), calculate $$F_1$$ and $$F_2$$ with the painter at 1.50 m, and the position at which the plank starts to tip.
3. Why can you choose any point as the axis for the torques of an object in equilibrium? Which point makes the plank's equations easiest, and why?
4. For the sign in the Procedure, predict what happens to the cable tension as the cable is attached lower and lower on the wall. Could a horizontal cable hold the sign up?

## Safety

There is no physical apparatus. On a real bench, keep feet clear of a loaded plank that could tip, and never stand on a plank that overhangs a support.

## Procedure

**Part 1: plank scan.** Use the Plank on two supports setup: a 4.0 m, 20 kg plank on supports at 0.50 m and 2.50 m, with a 60 kg painter. Record the support forces with the painter at every 0.25 m from 0 to 2.50 m. Then move the painter farther out, 0.05 m at a time, and find the first position at which the plank tips. Send the scan to the worksheet, then clear the demo's readings.

**Part 2: sign and cable.** Use the Sign on a strut and cable setup: a 2.0 m, 5.0 kg strut and a 25 kg sign hanging 1.80 m from the wall. Record the tension, the cable angle and the hinge force with the cable attached to the wall at heights of 0.40, 0.60, 0.80, 1.00, 1.50, 2.00 and 3.00 m above the hinge. Send this series to the worksheet as a new copy of the table.

**Part 3: ladder.** Use the Ladder against a wall setup (5.0 m, 15 kg ladder at 60° on a floor with $$\mu_s = 0.40$$, and a 70 kg person). Before you look, calculate the smallest angle at which the ladder holds with the person at the very top. Then put the person at the top and lower the angle until the ladder slips. Record the last angle at which it holds and the first at which it slips (in 0.5° steps), and do the same with the person halfway up.

## Data

| Trial | Setup | Load position $$x$$ (m) | Cable height $$h$$ (m) | Cable angle $$\theta$$ (°) | $$1/\sin\theta$$ | Left support $$F_1$$ (N) | Right support $$F_2$$ (N) | Tension $$T$$ (N) | Hinge $$H_x$$ (N) | Hinge $$H_y$$ (N) |
|---|---|---|---|---|---|---|---|---|---|---|
| | | | | | | | | | | |
| | | | | | | | | | | |
| | | | | | | | | | | |

For the sign, the load position $$x$$ is the sign's distance $$d$$ from the wall. Work out the $$1/\sin\theta$$ column yourself from $$h$$ and $$L$$, using $$\sin\theta = h/\sqrt{h^2 + L^2}$$; that is more precise than the angle rounded to 0.1°. Keep the plank and the sign in separate copies of the table, and record each setup's masses and lengths, and the ladder angles, in the table's notes.

## Analysis

1. Part 1: plot $$F_1$$ and $$F_2$$ against $$x$$ and fit a line to each. Compare both slopes and intercepts with the formulas in the Background, and use them to work out the painter's mass and the plank's mass as if you did not know them.
2. Check $$F_1 + F_2$$ for every row against the total weight. What does this check, and what does it not check?
3. From your $$F_1$$ fit, find the position at which $$F_1 = 0$$. Compare it with the tipping position you found in the demo and with your answer to Before the lab question 2.
4. Part 2: plot $$T$$ against $$1/\sin\theta$$ and fit a line. Compare the slope with $$(m_s L/2 + m d)\,g/L$$ and the intercept with zero. Explain in terms of torques why a shallow cable needs a large tension.
5. For two of your Part 2 rows, check that the horizontal forces on the strut add to zero and that the vertical forces add to zero. Which way does the hinge push on the strut, and why must it push at all?
6. Part 3: compare the angles at which the ladder slipped with your calculation, $$\tan\theta_\text{min} = \dfrac{m_\ell/2 + m f}{\mu_s\,(m_\ell + m)}$$, where $$m_\ell$$ is the ladder's mass and $$f$$ the fraction of the way up. Why is a ladder safest when the person is low on it?

## Uncertainty

The readouts show forces to 0.1 N and angles to 0.1°, and the positions and heights are exact settings, so your fits should leave residuals no bigger than about 0.05 N; larger residuals mean a misread or mistyped row. If you had worked out $$1/\sin\theta$$ from the angle rounded to 0.1° instead of from $$h$$ and $$L$$, how large would the error be at the shallowest cable, and would it matter for your slope? On a real bench the largest errors would come from where the supports and the load actually touch, the plank's own weight not being exactly at its middle, and a cable that stretches. Say which way each would shift your Part 1 fit.

## Questions

1. A plank rests on two supports. Explain, with torques, why the support nearer the painter carries more of the weight.
2. When the plank is about to tip, what is the force from the far support, and which point becomes the natural axis?
3. In Part 2 the hinge's vertical part $$H_y$$ came out the same in every row while $$H_x$$ changed. Explain both, and show that the hinge must push up wherever the sign hangs on the strut.
4. A ladder against a smooth wall needs friction from the floor. Where does the horizontal force from the wall come from, and why does it grow as the person climbs?

## What to hand in

Prelab answers, the two data tables with their graphs and fits, the masses from your plank fits, the tipping position, the tension slope compared with its prediction, the force checks, your ladder angles and calculation, and answers to the questions. Identify simulated data.
