---
title: Displacement Current
level: PHYS 202
time: 15 to 25 minutes
---
## What students should come away with

- Ampère's law with only conduction current gives two different answers for the same loop around a charging capacitor's wire, depending on which surface you choose.
- Maxwell's fix: a changing electric field counts as a current, I_d = ε₀ dΦ_E/dt. Between the plates it equals the wire's current exactly.
- So there is a magnetic field between the plates, circling the axis, even though no charge crosses the gap.

## Running it in class

1. **Loop around the wire.** Flat disk: the wire carries I through it; ∮B·dl = μ₀I.
2. **Same loop, surface through the gap.** No wire crosses the bag; without displacement current ∮B·dl would be zero for the same loop. With it, I_d through the bag equals I.
3. **Loop in the gap.** A 7 cm loop between 5 cm plates encloses all the displacement current: B = μ₀I/(2πr), the same as around the wire at that radius.
4. **Small loop inside the plates.** It encloses only r²/R² of I_d, so B grows in proportion to r inside, like inside a thick wire.
5. Press **Charge** and watch everything fall as the current dies away with τ = RC = 34.8 µs (slowed about 10⁵ times).

## Questions

**Q1.** Explain the contradiction Maxwell faced: for one loop around the wire, a flat disk is crossed by the current but a bag reaching between the plates is not. What does Ampère's law (without I_d) predict for each?

**Q2.** Show that ε₀ dΦ_E/dt between ideal parallel plates equals the current in the wire.

**Q3.** With I = 70.5 µA, find B on a 3.0 cm loop around the wire and on a 7.0 cm loop between the 5.0 cm plates. Find B on a 2.5 cm loop between the plates.

**Q4.** Why is it hard to measure this field in a classroom capacitor?

## Common misconceptions

- **"Displacement current is charge moving across the gap."** No charge crosses; it is the changing E field.
- **"Ampère's law applies only to the wire."** It applies to any loop; the trouble is which surface to count through.
- **"There's no B field between the plates."** There is, circling the axis.

## Physics behind the demo

- Ideal circular plates (R = 5.0 cm, gap 2.0 mm, C = 34.8 pF) with uniform E between them and no fringing; long straight wire of radius 1 mm; quasistatic fields; RC charging I = (V/R)e^(−t/RC).
- B from Ampère–Maxwell with the enclosed conduction and displacement currents; around the wire B = μ₀I/(2πr), between the plates μ₀I_d,enc/(2πr) with I_d,enc = I r²/R² inside the plates.
- The gap is drawn much wider than to scale. Real fields here are picotesla.
