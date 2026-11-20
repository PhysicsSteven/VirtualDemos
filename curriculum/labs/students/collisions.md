# Momentum and Collisions
Student laboratory · Physics I

Textbook: OpenStax *University Physics*, Vol. 1, §§9.1–9.6. Access for free at https://openstax.org/details/books/university-physics-volume-1.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/collisions.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Elastic, equal masses; Perfectly inelastic; Heavy hits light; Explosion; Glancing 2D collision: 90°.

**Using the demo.**

- Each cart carries a 5.0 cm flag. A gate times how long the flag blocks its beam, to 0.1 ms, and shows the speed as flag length ÷ Δt. The timer cannot tell direction: the arrow is the way the cart was seen moving. A cart at rest never reaches a gate and reads 0. Place gates for this run sets them as you would after one trial run: gate A between cart 1's start and where it meets cart 2, gate B the same for cart 2 (or 20 cm beyond a cart that starts at rest). When both carts move the same way, one gate goes where both pass before they meet and the other beyond the collision.
- The Sandbox scene puts any number of carts (up to 8) on the track between two end stops: carts and velcro are dragged from the tray, each cart's velocity and mass are set with grips, and one coefficient of restitution e applies to every bumper (a cart with velcro sticks to the cart it meets). Its own setups: Three carts; Row of five; Heavy pins light; Velcro train; Losing bounce; Empty track. The bars compare each cart's momentum and kinetic energy now with the start, and the graph shows every cart's position against time. It has no photogates.
- Record reading stores one finished run: the masses as displayed (in the capture message, the row's tooltip and the CSV) and each cart's velocity before (u) and after (v′) the collision from the gate readings, in m/s, signed +x to the right. Cells can be edited; rows stay through setup changes until Clear. Press C on the drawing to capture.

</details>

## Goal

Test momentum conservation with measured velocities and distinguish momentum conservation from kinetic energy conservation.

## Background

Choose one positive direction for both carts. With negligible external impulse (§9.3),

$$m_1u_1+m_2u_2=m_1v_1'+m_2v_2'.$$

Here $$u$$ denotes velocity before the collision and $$v$$ after it. Kinetic energy is conserved only in an elastic collision (§9.4). The coefficient of restitution compares separation speed with approach speed:

$$e=\frac{v_2'-v_1'}{u_1-u_2}.$$

For a one dimensional collision, reduced mass $$\mu = m_1m_2/(m_1+m_2)$$ gives

$$K_i-K_f=\frac12\mu(1-e^2)(u_1-u_2)^2.$$

## Before the lab

1. Predict the final velocities when equal masses collide elastically and one is initially at rest.
2. Derive the shared velocity when two carts stick together.
3. Can momentum be conserved while kinetic energy decreases? Where can that energy go?
4. In run 3 of the scan, a 1.0 kg cart moving right at 1.20 m/s meets a 3.0 kg cart moving left at 0.50 m/s. During the collision, which pushes harder: the heavier cart on the lighter one, or the lighter cart on the heavier one? Or are the two pushes equal?

## Safety

Keep fingers out of real cart bumpers and catch carts before they leave the track. Use only the approved spring or magnetic bumper energy.

## Procedure

**Mass and speed scan.** Use a level track and keep one bumper, **B**, for all five runs. Set the masses with the **Mass m₁** and **Mass m₂** sliders and the starting velocities with **Velocity v₁** and **Velocity v₂** (0.05 m/s steps; negative is to the left). Use these five configurations, written m₁, m₂, u₁, u₂: 1.0 kg, 1.0 kg, 1.00 m/s, 0; 2.0 kg, 1.0 kg, 0.80 m/s, −0.40 m/s; 1.0 kg, 3.0 kg, 1.20 m/s, −0.50 m/s; 0.8 kg, 1.6 kg, 1.20 m/s, −0.60 m/s; 1.5 kg, 0.5 kg, 0.60 m/s, −1.00 m/s. They include both positive and negative initial total momentum. Measure each signed velocity before and after collision. For run 3, work out each cart's change in velocity, $$v' - u$$, and change in momentum, $$m(v' - u)$$, which is the impulse the other cart gave it; these go in your answer to Question 1. Before you clear, open the **Plot and fit** fold under Readings and note the fit of each of its three graphs, **p′ vs p**, **Separation vs approach** and **K lost vs ½μu²**, for Analysis 1 to 3. Press **Export to worksheet**, then **Clear**, so the bumper comparison goes into a new copy of the table.

**Bumper comparison.** Keep masses and initial velocities fixed at m₁ = 1.0 kg, m₂ = 2.0 kg, u₁ = 1.00 m/s and u₂ = −0.50 m/s. Repeat with each of the bumpers A, B, C and D, then export. Infer restitution from measured velocities before revealing its value. For a sticking collision as the limiting case, afterwards untick Blind, set the **Coefficient of restitution e** slider to 0 and run once more.

**Using the virtual apparatus.** Press the **1D track** scene and tick **Blind: hide predictions and answers** (in the Lab fold): the e slider is then replaced by the **Bumper** buttons A to D. For each run: (1) set the sliders and the bumper, (2) open the **Photogates** fold and press **Place gates for this run**, and check where they sit, (3) press **Replay** (above the picture) and let the run finish, then (4) press **Record reading** under Readings. A gate gives only a speed, from the time the 5 cm flag blocks its beam; Record reading signs each velocity from the direction the cart was seen moving, so check each sign against what you saw. The first column of each row shows the run number and the bumper letter. If a cart never crosses a gate, or crosses it only partly, move the gates and run again rather than estimating a reading.

## Data

| Run/bumper | $$m_1$$ (kg) | $$m_2$$ (kg) | $$u_1$$ (m/s) | $$u_2$$ (m/s) | $$v_1'$$ (m/s) | $$v_2'$$ (m/s) |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |
| | | | | | | |

Keep masses and signed velocities as raw data. Calculate momentum, energy and restitution afterward.

## Analysis

1. From the **p′ vs p** graph (final total momentum against initial total momentum), compare the fitted slope and intercept with conservation.
2. From the **Separation vs approach** graph for the bumper used in the mass and speed scan, infer $$e$$ from the slope. For each bumper in the comparison, calculate $$e$$ from its run.
3. From the **K lost vs ½μu²** graph for that bumper (kinetic energy lost against $$\tfrac12\mu(u_1-u_2)^2$$), compare its slope with $$1-e^2$$.
4. For one run, calculate the center of mass velocity before and after collision (§9.6) and separate the system's overall translation from relative motion. Explain why individual cart velocities change but this velocity stays fixed.

## Questions

1. In run 3, how did the two carts' momentum changes compare, and how did their velocity changes compare? Was your answer to Before the lab 4 right? Use Newton's third law to explain both comparisons, and why equal and opposite contact forces conserve total momentum.
2. What external effects could spoil a real track experiment?

## Uncertainty

For courses that treat measurement uncertainty. This section is not counted in the 75 minutes; do it when your instructor assigns it.
{: .ws-assigned}

Propagate mass and gate time resolution into momentum and energy. Gate times are rounded to 0.1 ms in the simulation; short crossings can have substantial fractional uncertainty. Use signed differences and a nonzero momentum scale when initial total momentum is near zero. Do not divide by zero to report a percentage error. Give the fitted slopes and intercepts in Analysis 1 to 3 with their standard errors, and say whether each agrees with its predicted value within them.

## What to hand in

Prelab answers, settings and CSV, the three graphs, inferred restitution, a center of mass calculation, and answers to the questions (and to Uncertainty, if assigned). Identify simulated data.
