---
title: Superconducting Levitation and Flux Pinning
level: Intro modern physics (condensed matter)
time: 15 to 25 minutes
---
## What students should come away with

- A superconducting puck floats a magnet because currents in the puck keep the magnet's flux from changing inside it. Bring the magnet closer and the currents grow, so the push grows.
- A real (type II) superconductor can only carry so much current per area, the critical current density jc. Where it reaches jc, flux moves into the puck and energy is lost; that is what damps a bouncing magnet.
- Cool the puck with the magnet already near it and the flux is pinned where it is: the magnet is held at that spot from above or below, and can hang under the puck.

## Before class

Students should know Faraday's and Lenz's laws and magnetic flux. The demo shows a NdFeB magnet 10 mm across and 5 mm long (Br = 1.30 T, 2.95 g, weight 28.9 mN) on the axis of a YBCO puck 30 mm across and 10 mm thick in liquid nitrogen. The flat view is a cross section through the axis: each square in the puck is a ring of current, shaded by its current and outlined when it carries jc. The graph is the force on the magnet against the gap. A hand holds the magnet; Let go releases it. The Temperature button warms the puck or pours in nitrogen.

## Running it in class

1. **Cooled first, then drop the magnet.** Ask Q1, then let go from a 30 mm gap. The magnet falls, is caught, and bounces between about 11 and 30 mm around a balance point near 17 mm; no ring reaches jc, so nothing is lost and it keeps bouncing (there is no air drag in the model).
2. **A weaker superconductor** (jc ten times smaller). The outer rings reach jc on each bounce (Q2), the force curve goes round a loop, and the magnet settles.
3. **Push it down hard, then let go.** Pushed to 3 mm, flux is forced deep into the puck; let go and the magnet springs up, and the force on the way up is smaller than on the way down.
4. **Cooled with the magnet in place.** The puck was cooled with the magnet 5 mm above it. Now there is no force at 5 mm; raise it and it is pulled back, lower it and it is pushed back (Q3). Let go: it sags by about 0.2 mm.
5. **Hanging underneath.** The same pinning holds the magnet 5 mm under the puck against gravity (Q4).
6. **Floating, then warm the puck.** Above the critical temperature the currents die out and the magnet drops (Q5).

## Questions

**Q1.** The puck is cooled with no magnet near it, then the magnet is let go 30 mm above it. Will it land on the puck, float, or bounce? Why does the puck push on it at all?

**Q2.** Why does the magnet keep bouncing over a strong puck but settle over a weak one? Where does the energy go?

**Q3.** After cooling with the magnet 5 mm above the puck, raising it 1 mm takes a pull of 181 mN. About how far does the magnet sag when it is let go?

**Q4.** How can a superconductor, which pushes field out, hold a magnet hanging underneath it?

**Q5.** Treat the puck as a perfect mirror: a magnet with moment m at height h above a large ideal superconductor feels F = 3μ0m²/(32πh⁴). With m = BrV/μ0, at what height h would it float? Compare with the demo and say why they differ.

## Common misconceptions

- **"It floats because superconductors repel magnets (the Meissner effect)."** In a type II puck in a strong field, flux gets in; the force comes from currents that stop the flux in the puck from changing. Pinned flux can also pull.
- **"Superconductors have no losses."** A steady current has no resistance, but flux moving through a puck at jc dissipates energy.
- **"The magnet floats at the height where the field is weakest."** It floats where the push of the induced currents equals its weight; field cooled, it stays wherever it was cooled.

## Physics behind the demo

- The puck is 15 rings across and enough rings through its thickness that each cell is about square. Every ring's flux (its own current, the other rings, the magnet) stays at the value it had when the puck was cooled, unless the ring would need more than jc times its cross section: then it carries jc and the extra flux moves through it (the Bean critical state model, Bean 1964), and the loss is the current times the flux that crossed it.
- Mutual inductances are Maxwell's formula for coaxial circles (complete elliptic integrals); a ring's own inductance is that of two circles a geometric mean distance apart. The magnet is a uniformly magnetized cylinder, the same as a sheet of current Br/μ0 per meter around its side. The force is the sum over rings of the current times the rate of change of the magnet's flux through it.
- The ring model's error is first order in the cell size: against the exact mirror image for a large ideal puck it is 10 % low with 80 rings across and 18 % low with 40, so doubling the rings halves the error. The default puck changes by under 5 % with twice as many rings each way.
- Approximations, stated on the page: the magnet stays on the axis and upright; jc does not depend on the field; no flux creep, grain structure or lower critical field; no air drag; cooling and warming are instant.

## Going further

- Pair with **Superconductors and the Meissner Effect** (a type I sphere expels the field) and **Magnetism in Matter** (a superconductor as a perfect diamagnet).
- Why do the pinned magnet's sideways movements also come back? (The demo keeps the magnet on the axis, so it does not show this.)
