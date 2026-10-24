---
title: Gyroscope Precession
level: PHYS 201
time: 15 to 30 minutes
---
## What students should come away with

- Torque is the rate of change of angular momentum, τ = dL/dt, a vector equation. When L is large and τ is perpendicular to it, τ changes L's direction, not its size: the axle swings round instead of falling.
- For a level axle, Ω = Mgd/(I_s ω_s): more spin means slower precession; a longer lever arm means faster.
- With no spin there is no L along the axle for the torque to turn, so the wheel simply falls.
- The simple formula is the fast spin limit. Released from rest, a gyroscope first dips a little and wobbles (nutation); with less spin the dip and the wobble grow and the average rate drifts from the formula.

## Before class

Students need L = Iω as a vector along the spin axis (right hand rule) and τ = r × F. The gyroscope opens in 3D (drag to turn the view, scroll or pinch to zoom, double click to reset; the **Flat** button, or `?view=flat`, gives the fixed oblique view, which also opens on devices that ask to save data or lack WebGL). Both views show the same simulated motion: the pivot is at the top of the post, the wheel spins on the axle, and the arrows show L (red, along the axle), the torque r × Mg (green, horizontal and perpendicular to the axle) and Mg. A gate on the floor times each full turn of the axle round the post. The **Mystery wheel** has the same mass and radius but hides I_s; **Blind** hides I_s, L and the predicted rate.

## Running it in class

1. **No spin: it falls.** Ask what happens first; it does what they expect.
2. **Fast spin.** 3000 rpm, d = 10 cm. Ask for a prediction, then release. It dips by up to 3.8°, wobbles about 8 times a second, and goes round in 3.63 s. The formula gives 3.62 s.
3. **Point at the arrows.** τ is horizontal and perpendicular to L; in a short time L gains a small piece along τ, which turns it sideways. Ω = τ/L.
4. **Halve the spin.** At 1500 rpm the period halves to 1.87 s (the formula says 1.81 s; the gap is the wobble). **Smooth start** releases it with exactly the steady sideways speed: no dip, no wobble, and the period matches the formula exactly.
5. **Rim heavy wheel.** Same mass, the mass at the rim: I_s nearly doubles, so the precession takes about 6.55 s.
6. **Lab.** Measure P at several spin rates (Smooth start, or 2500 rpm and above from rest), plot Ω = 2π/P against 1/ω_s, and find I_s of the Mystery wheel from the slope Mgd/I_s.
7. **Change it while it runs.** Start with Smooth start (1500 rpm, level, no wobble), release, then drag the spin to 3000 rpm. The precession rate is now twice the steady rate for that spin, so the axle rises and wobbles between level and 3.8° above it, about a steady tilt of 1.9° (gold line on the strip). From Smooth start, slide d out to 18 cm instead: the turning slows (the angular momentum across the axle is kept while I₁ grows) and the torque grows, so the axle drops, rocking between level and 38° below it about a steady tilt of 22° below level. Ask before each change which way the axle will go.


## Questions

**Q1.** Why does the gyroscope not fall when it is spinning, and why does it fall when it is not?

**Q2.** For the solid disk (0.500 kg, radius 6.0 cm) at 3000 rpm with d = 10 cm, find I_s, L, the torque and the precession period.

**Q3.** Which way does the axle go round? Use the arrows to explain, then predict what happens if the spin is reversed.

**Q4.** What happens to the precession rate if d is doubled? If the spin is doubled? If the rim heavy wheel is used?

**Q5 (lab).** Show that Ω against 1/ω_s is a line through the origin with slope Mgd/I_s, and find I_s for the Mystery wheel. Why should you use fast spin or the steady start for this?

## Common misconceptions

- **"The spin holds it up against gravity."** The pivot holds it up: the vertical pivot force equals Mg on average. The spin changes what the torque does, not the forces.
- **"Torque always makes things rotate in the direction you'd expect from the force."** τ changes L. When L is large the change is a turn of L, at right angles to the expected fall.
- **"More spin, faster precession."** The opposite: Ω = τ/L.
- **"A real gyroscope starts precessing smoothly."** Released from rest it first dips; the smooth motion is the average of a small fast wobble.

## Physics behind the demo

- Rigid wheel on a massless axle, frictionless pivot at the axle's end, the spin about the axle constant. The wheel is a flat body of mass 0.500 kg and radius 6.0 cm: I_s = ½MR² = 9.00 × 10⁻⁴ kg·m² for the solid disk, 0.905MR² = 1.629 × 10⁻³ kg·m² for the rim heavy wheel (rim between 5.4 and 6.0 cm); about a diameter I_s/2, so about the pivot I₁ = I_s/2 + Md².
- The motion comes from the exact Lagrangian of a heavy symmetric top. The spin ω_s about the axle and p_φ = I₁ sin²θ φ' + I_s ω_s cos θ are conserved; θ'' = sin θ (I₁ φ'² cos θ − I_s ω_s φ' + Mgd)/I₁. RK4, 0.2 ms steps; energy holds to 1 part in 10⁹ over 5 s.
- Steady precession at angle θ satisfies I₁ cos θ φ'² − I_s ω_s φ' + Mgd = 0; for a level axle its slow root is exactly Mgd/(I_s ω_s). **Smooth start** releases at that rate.
- Released from rest the axle dips by about 2I₁Mgd/(I_s ω_s)² and wobbles at about I_s ω_s/I₁. With fast spin the average rate is the formula to within 0.2% (3000 rpm, d = 10 cm). For slower spin or a larger d it drifts below: at 1500 rpm the period is 1.870 s against 1.811 s.
- The gate records the time between successive forward passes of the axle over the gate, rounded to 0.01 s. There is no added noise.
