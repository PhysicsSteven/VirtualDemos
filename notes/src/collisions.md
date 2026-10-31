---
title: Collisions and Momentum
level: Intro mechanics (momentum, impulse, energy)
time: 20 to 30 minutes
---
## What students should come away with

- In every collision the bodies push on each other with equal and opposite forces for the same time, so the momentum one gains the other loses. Total momentum is conserved, elastic or not.
- Kinetic energy is kept only when e = 1. The loss is ½μ(1 − e²)v_rel², with μ = m₁m₂/(m₁ + m₂): only the energy of motion relative to the center of mass can be lost, and when the bodies stick (e = 0) all of it goes.
- In the center of mass frame the bodies arrive with equal and opposite momenta and leave with them reversed and scaled by e.
- Impulse J = ∫F dt = Δp, and the two bodies get equal and opposite impulses. (The force during contact, and soft against stiff bumpers, are in the Impulse and Momentum demo.)
- In two dimensions momentum is a vector and each component is conserved. For equal masses, an elastic collision with a target at rest sends the two off at 90° to each other.

## Before class

Students should know p = mv, kinetic energy and Newton's third law. The **Scene** buttons pick **1D track**, **2D table**, **Explosion**, or **Newton's cradle**; each preset loads one. Drag the round grip on a velocity arrow to set a velocity and the square grips to change a mass or the stored energy, or use the sliders. The bars show momentum and energy (outline before, filled after). **0.25×** and **0.1×** slow the playback; **Reduce motion** starts every setup paused.

For a measurement lab, the 1D track and the Explosion have two photogates (**Gate A position**, **Gate B position**, or drag the gate grips). Each cart carries a 5.0 cm flag; a gate shows the time its beam is blocked, to 0.1 ms, and the speed flag length ÷ Δt. **Place gates for this run** puts them where each cart passes one before and after the collision. When a run has played to the end, **Capture reading** stores the masses and the four velocities u₁, u₂, v₁′, v₂′; **Export to worksheet** sends the rows to the student worksheet's Data table. The plot under the table fits a line to the rows: **p′ vs p** (slope 1), **Separation vs approach** (slope e) or **K lost vs ½μu²** (slope 1 − e²), with residuals; **Show data table** lists the points. **Blind: hide predictions and answers** (in the Lab section) hides the Results panel, the predicted values on the drawing, the after bars and the setup hints, and swaps the e slider for **Bumper** A to D, each with a fixed e for students to measure.

## Running it in class

1. **Elastic, equal masses.** Ask Q1 first. Cart 1 stops dead; cart 2 leaves at 1.00 m/s. Switch **Frame** to **Center of mass**: the carts come in at ±0.50 m/s and leave reversed.
2. **Perfectly inelastic.** The carts stick and move off at 0.50 m/s. Total momentum stays 1.00 kg·m/s, but K drops from 0.500 J to 0.250 J. Then do Q2 with the mass sliders.
3. **Heavy hits light.** Ask how fast the light cart leaves (Q3). The 4.0 kg cart slows only to 0.62 m/s; the 0.5 kg cart leaves at 1.42 m/s. Swap the masses and the light cart bounces back.
4. **Explosion.** From rest, the spring's 1.00 J pushes for 45.3 ms. The 2 kg piece leaves at −0.58 m/s and the 1 kg piece at 1.15 m/s: equal and opposite momenta, but K₁/K₂ = 0.5. Then **Gun and bullet** (Q4).
5. **Glancing 2D collision: 90°.** Puck 1 leaves at 0.50 m/s at −60°, puck 2 at 0.87 m/s at 30°. Change **Impact parameter b**: the angle stays 90° (Q5). Show the momentum triangle.
6. **Impulse.** Back in **Explosion**, each piece gets 1.15 N·s, equal and opposite, over the 45.3 ms push (Q6). For the force against time during a collision, and soft against stiff bumpers, open the Impulse and Momentum demo.
7. **Newton's cradle** (scene button). Pull back one ball, then two. The lower pane asks what would happen if n balls came out and shows that only n = k keeps the energy (Q7).
8. **Ballistic pendulum: rifle bullet** (scene button **Ballistic pendulum**). A 10 g bullet at 300 m/s stops in a 2.0 kg block hung on 1.0 m parallel rods. Ask how high it swings before pressing **Play** (Q8). The block leaves at 1.49 m/s, rises 11.4 cm (the marker on the scale stays at the top) and swings out 27.6°; 447.8 J of the 450 J is gone in the catch. **Ball into a catcher** is the lab version (25 g at 5 m/s, 250 g catcher, 1.05 cm rise); **Over the top** shows why a ballistic pendulum is made heavy. **New mystery bullet** fires an unknown speed with Blind on: students read h and find u = ((m + M)/m)√(2gh).

## Questions

**Q1.** Predict: a cart moving at 1 m/s hits an identical cart at rest, and the collision is perfectly elastic. What does each cart do afterward? Then predict what would change if the collision were perfectly inelastic. Check with the first two presets.

**Q2.** A 1.0 kg cart at 1.0 m/s hits a 3.0 kg cart at rest and they stick. Find the final velocity and the fraction of the kinetic energy lost, then check with **Perfectly inelastic** and the mass sliders. What fraction is lost in general when a moving m₁ sticks to m₂ at rest?

**Q3.** In **Heavy hits light**, a 4.0 kg cart at 0.80 m/s hits a 0.50 kg cart at rest elastically. Find both velocities after the collision. What is the largest speed the light cart could ever get from a much heavier cart moving at v? Explain the answer in the center of mass frame.

**Q4.** A spring storing 1.00 J pushes apart a 2.0 kg piece and a 1.0 kg piece that start at rest. Find their velocities and kinetic energies. Why do they get equal momenta but not equal energies? Use **Gun and bullet** to explain why a rifle's recoil is survivable while the bullet is deadly.

**Q5.** Explain why: two equal mass pucks collide elastically, with one at rest. Using p₁ = p₁′ + p₂′ and energy conservation, show that the two pucks leave at right angles, whatever the impact parameter. Then set **Coefficient of restitution e** to 0.5 in **Glancing 2D collision: 90°**. Is the angle now more or less than 90°?

**Q6.** In **Explosion**, the spring (compressed 5.0 cm, storing 1.00 J) pushes the 2.0 kg and 1.0 kg pieces apart for 45.3 ms. Find the impulse on each piece from its velocity, and the average force on each. Find the spring's force at the start, kx, from E = ½kx². Why is the average force smaller?

**Q7.** In **Newton's cradle**, one ball comes in at speed v. Why can't two balls go out at v/2 each? Check both momentum and kinetic energy. Use the chart in the lower pane, then test with **Balls pulled back** set to 2.

**Q8.** In **Ballistic pendulum: rifle bullet**, a 10 g bullet at 300 m/s stops inside a 2.0 kg block hung on 1.0 m rods. Find the block's speed just after the catch, how high it rises, the largest angle of the rods and the share of the bullet's kinetic energy left. Why can't you set ½mu² equal to (m + M)gh? Then press **New mystery bullet**, read the rise and find the bullet's speed.

## Common misconceptions

- **"Momentum is conserved only in elastic collisions."** Momentum is conserved in every collision, because the forces are internal and equal and opposite. It is kinetic energy that may or may not be conserved.
- **"In a crash the heavier object pushes harder."** The forces on the two are equal in size at every instant (Newton's third law). The lighter object changes velocity more because the same impulse divided by a smaller mass is a bigger Δv.
- **"A soft bumper reduces the impulse."** For the same speeds in and out, the impulse is the same, fixed by Δp. A soft bumper only spreads it over a longer time, which lowers the peak force.

## Physics behind the demo

- 1D track: frictionless air track, rigid carts, instant collisions. Momentum is conserved and v₂′ − v₁′ = −e(v₂ − v₁), giving v₁′ = ((m₁ − e m₂)v₁ + (1 + e)m₂v₂)/(m₁ + m₂), and similarly for v₂′. Energy lost: ½μ(1 − e²)v_rel².
- 2D table: smooth hard discs with no spin and no table edges. The impulse J = (1 + e)μ(v₁ − v₂)·n acts along the line of centers n at contact; the velocity components along the contact tangent do not change.
- Explosion: an ideal massless spring, compressed 5 cm and held by a thread, is released. Its force is internal, so momentum stays MV, and E = ½μv_rel². The pieces move in simple harmonic motion relative to each other for a quarter period.
- Ballistic pendulum: the block hangs from two light rigid rods of length L that stay parallel, so it swings without turning and its center moves on a circle of radius L, a simple pendulum swung by RK4 (no friction or drag). The bullet stops in the block before the block has moved, so momentum is kept through the catch, V = mu/(m + M), and only m/(m + M) of the kinetic energy is left; then h = V²/2g, or over the top when V² ≥ 4gL. The bullet arrives within 10 ms of leaving the muzzle (at most 50 cm away), so it drops less than 0.5 mm. Block drawn as 600 kg/m³ wood; bullet drawn larger.
- Newton's cradle: 0.25 kg balls on 30 cm strings, each a full pendulum; a collision is an instant elastic exchange of velocity between touching neighbors, one pair at a time. A real cradle slowly fades and mixes.

## Going further

- Lab: turn on Blind, pick a bumper, and capture five or more runs with different masses and speeds. The slope of **Separation vs approach** recovers e, **p′ vs p** tests momentum conservation, and **K lost vs ½μu²** tests ΔK = ½μ(1 − e²)v_rel². The scatter about each line comes only from the 0.1 ms timer and the display rounding, so it is small; ask students how a real air track (friction, flag width, gate placement) would change it.
