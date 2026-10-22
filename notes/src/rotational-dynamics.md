---
title: Rotational Dynamics
level: PHYS 201
time: 30 to 50 minutes
---
## What students should come away with

- Torque gives angular acceleration the way force gives linear acceleration: τ_net = Iα.
- The moment of inertia depends on where the mass is, not just how much: a ring of the same mass and radius as a disk has nearly twice its I, and two masses moved twice as far out have about four times their contribution.
- A string that does not slip ties the two motions together: a = αr. The tension is less than the hanging weight, because the mass accelerates.
- Energy bookkeeping: the hanging mass's lost potential energy goes into the table's rotational kinetic energy, the mass's own kinetic energy and, with friction, work against the friction torque. The string delivers power Tv = τω.

## Before class

Students need τ = rF, I for a disk and a hoop, and the rolling constraint a = αr. The turntable is seen from above; the falling mass beside it is seen from the side, with the string running over a pulley. The timer stops when the mass has fallen 0.500 m. Bearing friction adds a constant 4.0 × 10⁻⁴ N·m torque against the motion. The **Mystery object** always hides its I; **Blind** hides every I, the accelerations, the tension and the energies.

## Running it in class

1. **Empty table.** 50 g, 2.0 cm spool: the drop takes 3.209 s. Ask for α from the timing before showing it: a = 2h/t² = 0.0971 m/s², α = a/r = 4.86 rad/s².
2. **Disk vs ring.** Same mass, same outer radius, both 1.00 kg and 10 cm. Ask which is slower first. Disk: 5.982 s. Ring: 7.511 s.
3. **Two masses.** Slide them from 4 cm to 8 cm to 12 cm: 3.713, 4.855, 6.315 s. The I they add grows as d².
4. **Tension.** On the disk run T = 0.4891 N against mg = 0.4905 N. The difference is small because a is small, but it is not zero.
5. **Energy.** At the end of the disk drop, mgh = 245.3 mJ; the table has 244.6 mJ and the mass only 0.70 mJ.
6. **Lab.** With friction on, capture several drops with one load at different m and r, and fit τ against α. The slope is I, the intercept the friction torque. Subtract the empty table's I to get the load's.

## Questions

**Q1.** On the empty table with m = 50 g and r = 2.0 cm the drop takes 3.209 s. Find a, α, the tension and the turntable's moment of inertia (ignore friction).

**Q2.** Predict whether the disk or the ring (same mass and outer radius) reaches the floor first, and explain. Then estimate the ratio of their drop times.

**Q3.** The two 0.200 kg masses go from 4 cm to 8 cm from the axis. By what factor does their contribution to I grow? Why does the drop time not double?

**Q4.** In the disk run, where does the 245 mJ of lost gravitational energy go? Why is so little of it in the falling mass?

**Q5 (lab).** Show that for one load τ = m(g − a)r plotted against α = a/r is a straight line with slope I and intercept τ_f. Use it to find the Mystery object's I, and say how big an error you would make from a single drop if you ignored friction.

## Common misconceptions

- **"The tension equals the hanging weight."** Only if nothing accelerates. Here T = m(g − a).
- **"Same mass, same I."** I depends on how far the mass sits from the axis; the ring beats the disk.
- **"Doubling the distance doubles I."** Each point mass contributes md²; doubling d quadruples that part (the table's own I and the masses' own ½mρ² do not change).
- **"A heavier hanging mass just makes it faster in proportion."** a = mgr²/(I + mr²): nearly proportional to m while mr² ≪ I, but not exactly.

## Physics behind the demo

- Newton for the mass, mg − T = ma, and for the table, Tr − τ_f = Iα, with a = αr: a = (mgr − τ_f) r/(I + mr²), constant, so the drop takes t = √(2h/a). If mgr ≤ τ_f the table does not turn.
- Turntable I₀ = 2.00 × 10⁻³ kg·m². Disk ½MR² = 5.00 × 10⁻³ kg·m²; ring ½M(R₁² + R₂²) = 9.05 × 10⁻³ kg·m² (radii 9.0 and 10.0 cm); each of the two masses adds md² + ½mρ² with ρ = 1.5 cm (parallel axis).
- String massless and not slipping, pulley massless and frictionless; the only friction is the constant bearing torque.
- The timer reads the exact drop time rounded to 0.001 s; there is no added noise. With friction on, ignoring it in a single drop makes I about 4% too large for the disk at 50 g on 2 cm (7.30 against 7.00 × 10⁻³ kg·m²); the τ against α fit separates the two.
- Energy readout: mgy = ½mv² + ½Iω² + τ_f θ, with θ = y/r.
