---
title: Rotation and Torque
level: Intro mechanics (calculus based)
time: 25 to 40 minutes (or one scene at a time)
---
## What students should come away with

- Torque is τ = rF sin θ = r⊥F: what turns an object is the force times its lever arm, the perpendicular distance from the pivot to the line of action. A force along r, through the pivot, has no torque.
- τ = Iα is the rotational form of F = ma. The moment of inertia depends on how the mass is spread about the axis, not only on how much there is.
- For objects rolling without slipping down a ramp, a = g sin β/(1 + I/mR²). Shape decides the race through I/mR²; mass and radius cancel.
- A rolling object turns about its contact point: that point is at rest, the center moves at v and the top at 2v, and a point on the rim traces a cycloid. An object that slides instead feels kinetic friction at the contact point until v = ωR.
- A spool unwinding from a string held at the top falls at a = g/(1 + I/mr²), with r where the string leaves: the string's tension slows the fall and its torque spins the spool up.
- With no outside torque, L = Iω stays fixed. Pulling mass inward lowers I and raises ω by the same factor, and the kinetic energy L²/2I goes up: the puller does work.
- A beam is in rotational equilibrium when the torques about the pivot cancel, Σmᵢxᵢ = 0, which needs a lighter block farther out to balance a heavier one closer in.

## Before class

Students should know Newton's second law, rF sin θ and kinetic energy. The six scenes (**Torque**, **Rolling**, **Floor**, **Yo-yo**, **Spin**, **Seesaw**) are independent and can be spread over several lectures. Drag the round grips in the view to change the setup; every grip also has keys, listed in the rail (in **Torque**, the + and − keys change the size of the force). Counterclockwise torques are positive. **Show data table** under **Plot data** lists the values in the charts, and **Reduce motion** in **Key** makes Push, Race and Release jump to the end.

## Running it in class

1. **Door: push near the hinge.** Ask Q1. The faded door was pushed with the same 20 N at the handle, 0.85 m out. Press **Push**: the door pushed at 0.15 m takes 2.06 s to open 90°, against 0.87 s for the faded one.
2. **Wrench.** Turn the force with the arrow keys or the **Angle θ** slider. Watch the lever arm r⊥ shrink as the force tilts and vanish when F points along the handle (Q3).
3. **Rolling race.** Ask the class to rank the five objects before pressing **Race**: block, solid sphere, cylinder, hollow sphere, hoop (Q4).
4. **Mass doesn't matter.** A heavy, wide cylinder against a light, narrow one, and the same for two hoops. Ask which of each pair wins; they tie. Change a mass or radius mid race; only the energies and the spin rate change (Q5).
5. **Rolling wheel: cycloid** (Floor). A hoop already rolling at 0.80 m/s. The velocity arrows on the rim all point at right angles to the line from the contact point and grow with the distance from it; the contact point reads v − ωR = 0 and the top v + ωR = 1.60 m/s. The marked point traces a cycloid with a cusp at each touchdown.
6. **Ball thrown without spin** (Floor). A 7 kg solid ball launched at 4.00 m/s on μk = 0.20. Ask what it does before pressing **Launch**: it skids for 2v₀/(7μk g) = 0.582 s and 2.00 m while friction slows it and spins it up, then rolls at 5/7 of v₀, 2.86 m/s. Of the 56.0 J it started with, 16.0 J became heat; the angular momentum about the floor stays at 3.08 kg·m²/s the whole time.
7. **Backspin: it comes back** (Floor). Launched at 3.00 m/s with ω₀R = −9.00 m/s: friction stops it and sends it back, rolling at −0.429 m/s after 1.16 s.
8. **Yo-yo against a dropped one** (Yo-yo). Ask which lands first and by how much. The dropped yo-yo takes 0.452 s for 1.00 m; the unwinding one falls at g/25.5 = 0.385 m/s² and takes 2.28 s, with 96% of its energy in spin. The string tension, 0.566 N, is just under the weight, 0.589 N. **Paper roll unwinding** falls at 0.639 g (0.565 s), and **Unwinding cylinder** at exactly ⅔g.
9. **Skater.** Press **Pull in**: I drops from 4.64 to 1.04 kg·m², the spin rises from 1.00 to 4.46 rev/s, and L stays at 29.2 kg·m²/s. Point at the work readout before asking Q6.
10. **Seesaw.** Ask which way the beam tips before pressing **Release**. Then use the B position slider to find the balance point, and check with **Move B to the balance point** (Q7).
11. **Clay hits a pinned rod** (Collide). A 200 g lump of clay at 3.00 m/s sticks 80 cm from the pin of a 1.0 kg, 1.0 m rod. Ask what is kept before pressing **Go** (Q8): L about the pin stays 0.480 kg·m²/s and the rod turns at 1.04 rad/s, but only 27.7% of the kinetic energy is left and the momentum rises from 0.600 to 0.687 kg·m/s, the push of the pin. **Sweet spot: no push from the pin** hits a 90 cm rod at 2L/3 = 60 cm: the pin's push is zero and even momentum is kept. **Free rod: it spins and drifts**: the center of mass of rod and clay goes straight on at 0.50 m/s while they spin at 1.82 rad/s. **Bouncy ball off a rod**: elastic, so K is kept too; the ball comes back at 1.34 m/s.
12. **Disk dropped on a spinning disk** (Collide). A 1 kg, 10 cm disk lands on a 2 kg, 15 cm disk turning at 2.00 rev/s. Friction (0.196 N·m) brings them together after 0.262 s at 1.64 rev/s (10.3 rad/s); 0.323 J, the share I₂/(I₁ + I₂) = 18% of the kinetic energy, became heat. Change **Friction between them μk**: the time changes, the heat and the final spin do not.

## Questions

**Q1.** Predict: a 20 N push at the handle (0.85 m from the hinge) opens a door 90° in 0.87 s. The same push is applied 0.15 m from the hinge, still perpendicular to the door. How long does the door take to open? Then check with the demo.

**Q2.** The door is a uniform 15 kg slab 0.90 m wide, modeled as a thin rod about one end. Find I, the torque and α for a 20 N push at 0.15 m, and the time to turn 90° from rest if the push stays perpendicular to the door. Find the angular velocity at 90°.

**Q3.** On the wrench, F = 40 N at r = 0.27 m. Find the torque at θ = 90°, 30° and 0°. Explain why pushing along the handle cannot turn the bolt no matter how hard you push. Check with the lever arm readout.

**Q4.** Predict the finishing order in the Rolling race, then explain it with energy: every object loses the same mgh, so where does the difference come from? For the solid sphere (I = ⅖mR²) on a 10° ramp 2.0 m long, find a, the time to the bottom and the speed at the bottom. What fraction of its kinetic energy at the bottom is rotational?

**Q5.** A heavy cylinder (8 kg, R = 15 cm) and a light one (0.5 kg, R = 3 cm) roll down the same ramp. Show from τ = Iα and F = ma that their accelerations are equal. They arrive together, but one is spinning much faster. Which one, and by how much?

**Q6.** The skater starts with I₀ = 0.80 kg·m² and two 3.0 kg masses at r = 0.80 m, spinning at 1.00 rev/s, then pulls them in to r = 0.20 m. Find I before and after, the final spin rate, and the kinetic energy before and after. Where does the extra energy come from? Check with the rail.

**Q7.** On the seesaw (a uniform 4 m, 10 kg beam pivoted at its center), block A (4.0 kg) sits at x = −1.00 m and block B (2.0 kg) at x = +1.50 m. Find the net torque about the pivot and which end goes down. Where must B sit to balance? If B stays at 1.50 m, where would a 1.0 kg block C restore balance?

**Q8.** In **Clay hits a pinned rod**, 200 g of clay at 3.00 m/s sticks to a 1.0 kg, 1.0 m rod pinned at its end, 80 cm from the pin. Find the rod's spin just after, the share of the kinetic energy kept, and the momentum before and after. Why is angular momentum about the pin kept when momentum is not? Then explain why hitting a 90 cm rod 60 cm from the pin (**Sweet spot**) needs no push from the pin.

## Common misconceptions

- **"Pushing at a sixth of the distance makes the door take six times as long."** The torque, and so α, is about 5.7 times smaller, but the angle covered goes as ½αt², so the time grows only as √5.7 ≈ 2.4.
- **"A bigger force always means a bigger torque."** Only the component perpendicular to r counts. A force through the pivot has zero torque however large it is.
- **"Heavier objects roll down faster."** For rolling without slipping both the driving force and the inertia scale with m, and R cancels too. Only the shape, through I/mR², matters.
- **"The bottom of a rolling wheel moves forward like the rest of it."** The contact point is at rest at each instant; that is what rolling without slipping means, and why static friction does no work on a rolling object.
- **"Friction always slows a rolling ball."** A ball that rolls needs no friction on a level floor. A sliding ball is slowed by friction only if it spins too slowly; one with topspin is sped up.
- **"Angular momentum and kinetic energy are both conserved when the skater pulls in."** L is conserved; kinetic energy rises by the factor that I falls, supplied by the skater's muscles.
- **"A balanced seesaw needs equal weights on each side."** It needs equal and opposite torques: a 4 kg block at 1 m balances a 2 kg block at 2 m.

## Physics behind the demo

- **Torque.** The door or wrench is a thin uniform rod turning about one end, I = mL²/3, with a frictionless pivot. With **its angle θ** selected the torque rF sin θ is constant, so φ = ½αt² and the time to turn 90° is √(π/α). With **its direction** selected, the force keeps its direction in the room, θ changes as the door turns, and the motion is integrated with fourth order Runge–Kutta. The wrench's bolt turns freely; a real bolt adds friction.
- **Rolling.** Each object starts from rest and rolls without slipping, a = g sin β/(1 + I/mR²), with I/mR² = 0 (frictionless sliding block), ⅖, ½, ⅔ and 1. The minimum friction coefficient needed is μ = (I/mR²) tan β/(1 + I/mR²). No rolling resistance or air drag.
- **Floor.** A sphere, cylinder or hoop launched with speed v₀ and spin ω₀ on a level floor. While u = v − ωR ≠ 0, kinetic friction μk m g acts at the contact point against u, so u falls at μk g(1 + 1/k), k = I/mR², and reaches zero at ts = k|u₀|/(μk g(1 + k)); the motion is exact and piecewise. After that it rolls at vf = (v₀ + kω₀R)/(1 + k), from the conserved angular momentum about the floor, mR(v + kωR). Constant μk, no rolling resistance, no air drag; drawn to scale.
- **Yo-yo.** Massless string that does not slip, its top end fixed: mg − T = ma, Tr = Iα and a = αr give a = g/(1 + I/mr²) and T = mg·k/(1 + k). Yo-yo: two disks of radius R on an axle of radius r whose mass is neglected (I = ½mR², string at r). Paper roll: a uniform tube from r to R, I = ½m(R² + r²), unwinding from R, with its mass and size taken as fixed for the drop. Solid cylinder (⅔g) and thin ring (½g) unwind from their rim. The spools are drawn larger than the height scale.
- **Spin.** I = I₀ + 2mr², with each arm and hand (or each sliding mass on the platform) a point mass. The masses move along the radius only, so there is no torque about the axis and ω = L/I at each instant. Ice or bearing friction is neglected. Moving the spin rate or mass sliders resets the system, like an outside twist.
- **Collide.** A thin uniform rod on a frictionless table, pinned at its end or center or free, hit by a small ball moving across it. The hit is instant and along the ball's path, with coefficient of restitution e at the contact point (e = 0: the clay stays stuck as a point mass on the rod's line). Then J = (1 + e)u/(1/m + d²/I_pin), or (1 + e)u/(1/m + 1/M + d²/I_c) for a free rod; L about the pin (or any fixed point, for a free rod) is kept, and momentum is kept only with no pin or at the sweet spot d = 2I_pin/(ML) = 2L/3. A bouncing ball's run stops if the rod comes round to meet it again. Disk on a disk: uniform disks on one axis, the top one (R₂ ≤ R₁) pressing with its weight spread evenly, so kinetic friction gives τ = ⅔μkM₂gR₂ until they turn together at (I₁ω₁ + I₂ω₂)/(I₁ + I₂).
- **Seesaw.** Point masses on a uniform 4 m, 10 kg beam pivoted at its center, so the beam's own weight has no torque. Each block gives τ = −mgx cos φ; released, the beam turns under τ = Iα (Runge–Kutta) until an end touches the ground.

## Going further

- Homework: find the minimum coefficient of static friction for a hoop to roll without slipping on a 30° incline; check with the "Friction needed" readout.
