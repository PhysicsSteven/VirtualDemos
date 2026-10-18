---
title: Collisions and Momentum
level: Intro mechanics (momentum, impulse, energy)
time: 20 to 30 minutes
---
## What students should come away with

- In every collision the bodies push on each other with equal and opposite forces for the same time, so the momentum one gains the other loses. Total momentum is conserved, elastic or not.
- Kinetic energy is kept only when e = 1. The loss is ½μ(1 − e²)v_rel², with μ = m₁m₂/(m₁ + m₂): only the energy of motion relative to the center of mass can be lost, and when the bodies stick (e = 0) all of it goes.
- In the center of mass frame the bodies arrive with equal and opposite momenta and leave with them reversed and scaled by e.
- Impulse J = ∫F dt = Δp. For the same change in momentum, a longer contact time means a smaller peak force.
- In two dimensions momentum is a vector and each component is conserved. For equal masses, an elastic collision with a target at rest sends the two off at 90° to each other.

## Before class

Students should know p = mv, kinetic energy and Newton's third law. The **Scene** buttons pick **1D track**, **2D table**, **Explosion**, **Newton's cradle** or **Impulse**; each preset loads one. Drag the round grip on a velocity arrow to set a velocity and the square grips to change a mass, the stored energy or a bumper's stiffness, or use the sliders. The bars show momentum and energy (outline before, filled after). **0.25×** and **0.1×** slow the playback.

## Running it in class

1. **Elastic, equal masses.** Ask Q1 first. Cart 1 stops dead; cart 2 leaves at 1.00 m/s. Switch **Frame** to **Center of mass**: the carts come in at ±0.50 m/s and leave reversed.
2. **Perfectly inelastic.** The carts stick and move off at 0.50 m/s. Total momentum stays 1.00 kg·m/s, but K drops from 0.500 J to 0.250 J. Then do Q2 with the mass sliders.
3. **Heavy hits light.** Ask how fast the light cart leaves (Q3). The 4.0 kg cart slows only to 0.62 m/s; the 0.5 kg cart leaves at 1.42 m/s. Swap the masses and the light cart bounces back.
4. **Explosion.** From rest, the spring's 1.00 J pushes for 45.3 ms. The 2 kg piece leaves at −0.58 m/s and the 1 kg piece at 1.15 m/s: equal and opposite momenta, but K₁/K₂ = 0.5. Then **Gun and bullet** (Q4).
5. **Glancing 2D collision: 90°.** Puck 1 leaves at 0.50 m/s at −60°, puck 2 at 0.87 m/s at 30°. Change **Impact parameter b**: the angle stays 90° (Q5). Show the momentum triangle.
6. **Impulse: soft vs stiff.** Same carts, speeds and e. The areas under F(t) are equal (0.800 N·s), but the stiff bumper peaks at 26.2 N in 44.7 ms and the soft one at 4.54 N over 258 ms (Q6).
7. **Newton's cradle** (scene button). Pull back one ball, then two. The lower pane asks what would happen if n balls came out and shows that only n = k keeps the energy (Q7).

## Questions

**Q1.** Predict: a cart moving at 1 m/s hits an identical cart at rest, and the collision is perfectly elastic. What does each cart do afterward? Then predict what would change if the collision were perfectly inelastic. Check with the first two presets.

**Q2.** A 1.0 kg cart at 1.0 m/s hits a 3.0 kg cart at rest and they stick. Find the final velocity and the fraction of the kinetic energy lost, then check with **Perfectly inelastic** and the mass sliders. What fraction is lost in general when a moving m₁ sticks to m₂ at rest?

**Q3.** In **Heavy hits light**, a 4.0 kg cart at 0.80 m/s hits a 0.50 kg cart at rest elastically. Find both velocities after the collision. What is the largest speed the light cart could ever get from a much heavier cart moving at v? Explain the answer in the center of mass frame.

**Q4.** A spring storing 1.00 J pushes apart a 2.0 kg piece and a 1.0 kg piece that start at rest. Find their velocities and kinetic energies. Why do they get equal momenta but not equal energies? Use **Gun and bullet** to explain why a rifle's recoil is survivable while the bullet is deadly.

**Q5.** Explain why: two equal mass pucks collide elastically, with one at rest. Using p₁ = p₁′ + p₂′ and energy conservation, show that the two pucks leave at right angles, whatever the impact parameter. Then set **Coefficient of restitution e** to 0.5 in **Glancing 2D collision: 90°**. Is the angle now more or less than 90°?

**Q6.** In **Impulse: soft vs stiff**, a 0.50 kg cart arrives at 1.0 m/s and rebounds with e = 0.60. Find the impulse from each bumper. Contact lasts 44.7 ms (stiff) and 258 ms (soft): find each average force. Use this to explain how an air bag protects a driver.

**Q7.** In **Newton's cradle**, one ball comes in at speed v. Why can't two balls go out at v/2 each? Check both momentum and kinetic energy. Use the chart in the lower pane, then test with **Balls pulled back** set to 2.

## Common misconceptions

- **"Momentum is conserved only in elastic collisions."** Momentum is conserved in every collision, because the forces are internal and equal and opposite. It is kinetic energy that may or may not be conserved.
- **"In a crash the heavier object pushes harder."** The forces on the two are equal in size at every instant (Newton's third law). The lighter object changes velocity more because the same impulse divided by a smaller mass is a bigger Δv.
- **"A soft bumper reduces the impulse."** For the same speeds in and out, the impulse is the same, fixed by Δp. A soft bumper only spreads it over a longer time, which lowers the peak force.

## Physics behind the demo

- 1D track: frictionless air track, rigid carts, instant collisions. Momentum is conserved and v₂′ − v₁′ = −e(v₂ − v₁), giving v₁′ = ((m₁ − e m₂)v₁ + (1 + e)m₂v₂)/(m₁ + m₂), and similarly for v₂′. Energy lost: ½μ(1 − e²)v_rel².
- 2D table: smooth hard discs with no spin and no table edges. The impulse J = (1 + e)μ(v₁ − v₂)·n acts along the line of centers n at contact; the velocity components along the contact tangent do not change.
- Explosion: an ideal massless spring, compressed 5 cm and held by a thread, is released. Its force is internal, so momentum stays MV, and E = ½μv_rel². The pieces move in simple harmonic motion relative to each other for a quarter period.
- Newton's cradle: 0.25 kg balls on 30 cm strings, each a full pendulum; a collision is an instant elastic exchange of velocity between touching neighbors, one pair at a time. A real cradle slowly fades and mixes.
- Impulse: each bumper is a massless spring and damper in parallel, F = kx + cx′, with c = 2ζ√(km) and ζ set by e alone. It can push but not pull, so contact ends when F reaches zero. F(t) is the exact solution of m x″ + c x′ + k x = 0, so the peak force scales as √k and the contact time as 1/√k.

## Going further

- Lab: on an air track with photogates, measure e for magnetic and Velcro bumpers and compare ΔK with ½μ(1 − e²)v_rel².
