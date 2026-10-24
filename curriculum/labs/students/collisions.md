# Momentum and Collisions
Student laboratory · Physics I

Textbook: OpenStax *University Physics*, Vol. 1, §§9.1–9.6. Access for free at https://openstax.org/details/books/university-physics-volume-1.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/collisions.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Elastic, equal masses; Perfectly inelastic; Heavy hits light; Explosion; Glancing 2D collision: 90°.

**Using the demo.**

- Each cart carries a 5.0 cm flag. A gate times how long the flag blocks its beam, to 0.1 ms, and shows the speed as flag length ÷ Δt. The timer cannot tell direction: the arrow is the way the cart was seen moving. A cart at rest never reaches a gate and reads 0. Place gates for this run sets them as you would after one trial run: gate A between cart 1's start and where it meets cart 2, gate B the same for cart 2 (or 20 cm beyond a cart that starts at rest). When both carts move the same way, one gate goes where both pass before they meet and the other beyond the collision.
- Capture stores one finished run: the masses as displayed (in the capture message, the row's tooltip and the CSV) and each cart's velocity before (u) and after (v′) the collision from the gate readings, in m/s, signed +x to the right. Cells can be edited; rows stay through setup changes until Clear. Press C on the drawing to capture.

</details>

## Goal

Test momentum conservation with measured velocities and distinguish momentum conservation from kinetic energy conservation.

## Background

Choose one positive direction for both carts. With negligible external impulse (§9.3),

$$m_1u_1+m_2u_2=m_1v_1+m_2v_2.$$

Here $$u$$ denotes velocity before the collision and $$v$$ after it. Kinetic energy is conserved only in an elastic collision (§9.4). The coefficient of restitution compares separation speed with approach speed:

$$e=\frac{v_2-v_1}{u_1-u_2}.$$

For a one dimensional collision, reduced mass $$\mu = m_1m_2/(m_1+m_2)$$ gives

$$K_i-K_f=\frac12\mu(1-e^2)(u_1-u_2)^2.$$

## Before the lab

1. Predict the final velocities when equal masses collide elastically and one is initially at rest.
2. Derive the shared velocity when two carts stick together.
3. Can momentum be conserved while kinetic energy decreases? Where can that energy go?

## Safety

Keep fingers out of real cart bumpers and catch carts before they leave the track. Use only the approved spring or magnetic bumper energy.

## Procedure

**Mass and speed scan.** Use a level track. Keep one bumper type fixed and collect five approaching cart configurations with varied masses or speeds. Measure each signed velocity before and after collision. Include both positive and negative initial total momentum where practical.

**Bumper comparison.** Keep masses and initial velocities fixed. Repeat with at least three bumper types. Infer restitution from measured velocities before revealing its value. Include a sticking collision as a limiting case if the apparatus supports it.

**Center of mass.** For one run, compare the center of mass velocity before and after collision (§9.6). Explain why individual cart velocities change but this velocity stays fixed.

**Using the virtual apparatus.** Choose **1D track** and **Elastic, equal masses**, then turn on **Blind: hide predictions and answers**. Set the cart masses and initial velocities, select a **Bumper**, and press **Place gates for this run**. Check **Gate A position** and **Gate B position**. Let the run finish before **Capture reading**; **Export to worksheet** sends the measured photogate velocities and masses to your Data table (the worksheet can also download the full CSV with settings). A gate reads speed from the 5 cm flag's blocking time; attach the observed direction to obtain signed velocity. If a cart never crosses a gate or a crossing is incomplete, reposition/replay rather than inventing a reading. Use **p′ vs p**, **Separation vs approach** and **K lost vs ½μu²** to compare your runs.

## Data

| Run/bumper | $$m_1$$ (kg) | $$m_2$$ (kg) | $$u_1$$ (m/s) | $$u_2$$ (m/s) | $$v_1$$ (m/s) | $$v_2$$ (m/s) |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |
| | | | | | | |

Keep masses and signed velocities as raw data. Calculate momentum, energy and restitution afterward.

## Analysis

1. Plot final total momentum against initial total momentum. Compare the fitted slope/intercept with conservation.
2. For each bumper, plot separation speed against approach speed. Infer $$e$$ from the slope.
3. Plot kinetic energy lost against $$\tfrac12\mu(u_1-u_2)^2$$ for one bumper. Compare its slope with $$1-e^2$$.
4. Calculate the center of mass velocity and separate the system's overall translation from relative motion.

## Uncertainty

Propagate mass and gate time resolution into momentum and energy. Gate times are rounded to 0.1 ms in the simulation; short crossings can have substantial fractional uncertainty. Use signed differences and a nonzero momentum scale when initial total momentum is near zero. Do not divide by zero to report a percentage error.

## Questions

1. Why does equal and opposite contact force conserve total momentum?
2. Why is $$e$$ a speed ratio rather than a ratio of total kinetic energies?
3. What external effects could spoil a real track experiment?
4. Why is kinetic energy loss nonnegative for $$0 \le e \le 1$$?

## What to hand in

Prelab answers, settings and CSV, the three graphs, inferred restitution, a center of mass calculation, uncertainty and answers to the questions. Identify simulated data.
