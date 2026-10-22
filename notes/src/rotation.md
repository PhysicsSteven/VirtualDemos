---
title: Rotation and Torque
level: Intro mechanics (calculus based)
time: 25 to 40 minutes (or one scene at a time)
---
## What students should come away with

- Torque is τ = rF sin θ = r⊥F: what turns an object is the force times its lever arm, the perpendicular distance from the pivot to the line of action. A force along r, through the pivot, has no torque.
- τ = Iα is the rotational form of F = ma. The moment of inertia depends on how the mass is spread about the axis, not only on how much there is.
- For objects rolling without slipping down a ramp, a = g sin β/(1 + I/mR²). Shape decides the race through I/mR²; mass and radius cancel.
- With no outside torque, L = Iω stays fixed. Pulling mass inward lowers I and raises ω by the same factor, and the kinetic energy L²/2I goes up: the puller does work.
- A beam is in rotational equilibrium when the torques about the pivot cancel, Σmᵢxᵢ = 0, which needs a lighter block farther out to balance a heavier one closer in.

## Before class

Students should know Newton's second law, rF sin θ and kinetic energy. The four scenes (**Torque**, **Rolling**, **Spin**, **Seesaw**) are independent and can be spread over several lectures. Drag the round grips in the view to change the setup; every grip also has keys, listed in the rail (in **Torque**, the + and − keys change the size of the force). Counterclockwise torques are positive. **Show data table** under **Plot data** lists the values in the charts, and **Reduce motion** in **Key** makes Push, Race and Release jump to the end.

## Running it in class

1. **Door: push near the hinge.** Ask Q1. The faded door was pushed with the same 20 N at the handle, 0.85 m out. Press **Push**: the door pushed at 0.15 m takes 2.06 s to open 90°, against 0.87 s for the faded one.
2. **Wrench.** Turn the force with the arrow keys or the **Angle θ** slider. Watch the lever arm r⊥ shrink as the force tilts and vanish when F points along the handle (Q3).
3. **Rolling race.** Ask the class to rank the five objects before pressing **Race**: block, solid sphere, cylinder, hollow sphere, hoop (Q4).
4. **Mass doesn't matter.** A heavy, wide cylinder against a light, narrow one, and the same for two hoops. Ask which of each pair wins; they tie. Change a mass or radius mid race; only the energies and the spin rate change (Q5).
5. **Skater.** Press **Pull in**: I drops from 4.64 to 1.04 kg·m², the spin rises from 1.00 to 4.46 rev/s, and L stays at 29.2 kg·m²/s. Point at the work readout before asking Q6.
6. **Seesaw.** Ask which way the beam tips before pressing **Release**. Then use the B position slider to find the balance point, and check with **Move B to the balance point** (Q7).

## Questions

**Q1.** Predict: a 20 N push at the handle (0.85 m from the hinge) opens a door 90° in 0.87 s. The same push is applied 0.15 m from the hinge, still perpendicular to the door. How long does the door take to open? Then check with the demo.

**Q2.** The door is a uniform 15 kg slab 0.90 m wide, modeled as a thin rod about one end. Find I, the torque and α for a 20 N push at 0.15 m, and the time to turn 90° from rest if the push stays perpendicular to the door. Find the angular velocity at 90°.

**Q3.** On the wrench, F = 40 N at r = 0.27 m. Find the torque at θ = 90°, 30° and 0°. Explain why pushing along the handle cannot turn the bolt no matter how hard you push. Check with the lever arm readout.

**Q4.** Predict the finishing order in the Rolling race, then explain it with energy: every object loses the same mgh, so where does the difference come from? For the solid sphere (I = ⅖mR²) on a 10° ramp 2.0 m long, find a, the time to the bottom and the speed at the bottom. What fraction of its kinetic energy at the bottom is rotational?

**Q5.** A heavy cylinder (8 kg, R = 15 cm) and a light one (0.5 kg, R = 3 cm) roll down the same ramp. Show from τ = Iα and F = ma that their accelerations are equal. They arrive together, but one is spinning much faster. Which one, and by how much?

**Q6.** The skater starts with I₀ = 0.80 kg·m² and two 3.0 kg masses at r = 0.80 m, spinning at 1.00 rev/s, then pulls them in to r = 0.20 m. Find I before and after, the final spin rate, and the kinetic energy before and after. Where does the extra energy come from? Check with the rail.

**Q7.** On the seesaw (a uniform 4 m, 10 kg beam pivoted at its center), block A (4.0 kg) sits at x = −1.00 m and block B (2.0 kg) at x = +1.50 m. Find the net torque about the pivot and which end goes down. Where must B sit to balance? If B stays at 1.50 m, where would a 1.0 kg block C restore balance?

## Common misconceptions

- **"Pushing at a sixth of the distance makes the door take six times as long."** The torque, and so α, is about 5.7 times smaller, but the angle covered goes as ½αt², so the time grows only as √5.7 ≈ 2.4.
- **"A bigger force always means a bigger torque."** Only the component perpendicular to r counts. A force through the pivot has zero torque however large it is.
- **"Heavier objects roll down faster."** For rolling without slipping both the driving force and the inertia scale with m, and R cancels too. Only the shape, through I/mR², matters.
- **"Angular momentum and kinetic energy are both conserved when the skater pulls in."** L is conserved; kinetic energy rises by the factor that I falls, supplied by the skater's muscles.
- **"A balanced seesaw needs equal weights on each side."** It needs equal and opposite torques: a 4 kg block at 1 m balances a 2 kg block at 2 m.

## Physics behind the demo

- **Torque.** The door or wrench is a thin uniform rod turning about one end, I = mL²/3, with a frictionless pivot. With **its angle θ** selected the torque rF sin θ is constant, so φ = ½αt² and the time to turn 90° is √(π/α). With **its direction** selected, the force keeps its direction in the room, θ changes as the door turns, and the motion is integrated with fourth order Runge–Kutta. The wrench's bolt turns freely; a real bolt adds friction.
- **Rolling.** Each object starts from rest and rolls without slipping, a = g sin β/(1 + I/mR²), with I/mR² = 0 (frictionless sliding block), ⅖, ½, ⅔ and 1. The minimum friction coefficient needed is μ = (I/mR²) tan β/(1 + I/mR²). No rolling resistance or air drag.
- **Spin.** I = I₀ + 2mr², with each arm and hand (or each sliding mass on the platform) a point mass. The masses move along the radius only, so there is no torque about the axis and ω = L/I at each instant. Ice or bearing friction is neglected. Moving the spin rate or mass sliders resets the system, like an outside twist.
- **Seesaw.** Point masses on a uniform 4 m, 10 kg beam pivoted at its center, so the beam's own weight has no torque. Each block gives τ = −mgx cos φ; released, the beam turns under τ = Iα (Runge–Kutta) until an end touches the ground.

## Going further

- Homework: find the minimum coefficient of static friction for a hoop to roll without slipping on a 30° incline; check with the "Friction needed" readout.
