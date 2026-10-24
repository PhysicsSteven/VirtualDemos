---
title: Superconductors and the Meissner Effect
level: Intro modern physics (condensed matter)
time: 15 to 25 minutes
---
## What students should come away with

- A superconductor is more than a perfect conductor. Zero resistance alone freezes the flux inside a metal; a superconductor pushes the field out, even a field that was there before it was cooled (the Meissner effect).
- Superconductivity survives only below a critical field, and the critical field falls to zero at T_c: B_c(T) = B_c(0)[1 − (T/T_c)²].
- Field that is pushed out crowds around the sample. Around a sphere the field at the equator is 1.5 times the applied field, so the field starts to get in at two thirds of B_c.

## Before class

Students should know Faraday's law and the idea of magnetic flux. The demo shows a sphere 10.00 mm across in a cryostat inside a solenoid, with the field lines drawn exactly at equal steps of flux. Choose lead, tin, indium, mercury, aluminum or a mystery metal (Table 9.5 values), the temperature (0.30 to 10.00 K) and the applied field (0 to 100 mT). A magnetometer reads the sphere's moment and a Hall probe the field at its equator. A "perfect conductor" option shows what zero resistance alone would do. The graph shows the applied field against temperature with the critical field curve, or the moment against the field.

## Running it in class

1. **Lead above T_c.** At 9 K in 20 mT the field lines go straight through. Ask Q1, then cool to 4.20 K: the lines bend around the sphere, the moment is −12.500 mA·m² and the equator field is 30.00 mT.
2. **Perfect conductor.** Same steps: nothing happens at 7.2 K. Then lower the field to zero (Q2): the perfect conductor keeps 20 mT inside and becomes a magnet (+12.500 mA·m²), while the superconductor is left with nothing.
3. **Raising the field.** Lead at 4.20 K, raise the field from zero (Q3). The moment grows as −0.625 mA·m² per mT up to 35.19 mT, then shrinks to zero at the critical field, 52.78 mT. In between the equator field sits at 52.78 mT.
4. **Critical field of tin.** At 2.00 K tin's critical field is 21.94 mT. Repeat at a few temperatures and plot B_c against T² (Q4).
5. **Mystery metal.** Students map its critical field, fit B_c against T² and identify it from Table 9.5 (Q5).

## Questions

**Q1.** What will happen to the field lines when lead is cooled from 9 K to 4.2 K in a field of 20 mT? Would a perfect conductor do the same?

**Q2.** After cooling in 20 mT, the applied field is switched off. What field is left inside a perfect conductor, and inside a superconductor?

**Q3.** For lead at 4.20 K, predict the applied field at which the field first gets into the sphere, and the field at which the sphere is entirely normal.

**Q4.** Tin has T_c = 3.7 K and B_c(0) = 31 mT. What is its critical field at 2.00 K, and what are the slope and intercept of B_c against T²?

**Q5.** A mystery sphere loses its superconductivity at 4.67 mT at 0.30 K and at 1.87 mT at 0.70 K. Find T_c and B_c(0). Which metal is it?

## Common misconceptions

- **"A superconductor is just a very good conductor."** A perfect conductor would trap flux, not expel it. The Meissner effect is a separate property, and it makes the superconducting state a true thermodynamic phase.
- **"The field is zero everywhere near a superconductor."** It is zero inside; outside it is pushed aside and is stronger at the sides (1.5 times at a sphere's equator).
- **"Above T_c a superconductor's resistance jumps."** It returns to its ordinary normal value; nothing jumps above it.
- **"Superconductors work in any field."** Type I metals fail in fields of a few to 80 mT; strong magnets need type II materials.

## Physics behind the demo

- The sphere is uniformly magnetized, so inside the field is uniform, B_in = B + (2/3)μ0M, and outside it is the applied field plus a point dipole m = (4π/3)R³M at the centre; field lines are contours of the Stokes stream function and are exact for this model.
- Meissner state (B ≤ 2B_c/3): B_in = 0, μ0M = −1.5B, m = −2πR³B/μ0. Intermediate state (2B_c/3 < B < B_c): the equator field stays at B_c, B_in = 3B − 2B_c on average (really normal and superconducting layers). Normal for B ≥ B_c.
- Tc and B_c(0) are the textbook's Table 9.5 values (two or three figures), with Equation 9.39 for B_c(T). The state is taken in equilibrium, so the order of cooling and raising the field does not matter (no hysteresis or supercooling). A normal metal's own weak magnetism is left out.
- The perfect conductor keeps B_in fixed at the applied field it had when cooled through T_c.

## Going further

- Pair with **Resistivity of a Wire** (Cold stage: the resistance drops to zero at T_c) and **Magnetism in Matter** (a superconductor is a perfect diamagnet, χ = −1).
- Homework: the largest current a lead wire of radius 0.50 mm can carry at 4.20 K (the surface field reaches B_c at 132 A).
