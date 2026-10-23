---
title: Coulomb Sandbox
level: PHYS 202
time: 15 to 25 minutes
---
## What students should come away with

- E is the vector sum of the kq/r² fields; V is the plain number sum of the kq/r. Vectors can cancel where numbers do not, and the other way round.
- E = 0 and V = 0 are different conditions: on the dipole's midline V = 0 where E is strong; at the like pair's midpoint E = 0 where V is large.
- Field lines start on + and end on − charges or at infinity, in number proportional to charge. They cross equipotentials at right angles, pointing downhill in V; where equipotentials crowd, |E| ≈ ΔV/Δs is large.

## Before class

Students need Coulomb's law, vector components and potential. Grid squares are 1 cm and charges are in nC (1 nC gives 899 V at 1 cm). Every Setups button puts the probe at (0, 2.5) cm, so its readouts are ready before anyone hovers.

## Running it in class

1. **Dipole.** Ask Q1 first, then show the probe: V = 0 V, |E| = 18.1 kV/m, 0° from +x. Hover along the dashed V = 0 line: V stays zero while |E| changes.
2. **Like pair.** Ask for a prediction of E halfway between the charges, then hover there: |E| drops to zero while V is about 1.20 kV.
3. **3D landscape**, then **Spin**. Positive charges are hills, negative ones wells; equipotentials are contour lines and field lines run straight downhill. The like pair's midpoint is a saddle (Q5).
4. **+3 and −1.** In **2D map**, count lines: 18 leave the +3, only 6 end on the −1, and 12 go off screen. The dashed V = 0 line is now a closed loop around the −1. Hunt for the point where E = 0 (Q4).
5. **Equipotential spacing ΔV.** On **Dipole**, compare the packing of equipotentials near the charges and the midpoint (Q6). Build your own with **Add +1 nC** and **Add −1 nC**.
6. **Field mapping (lab).** Tick **Blind: hide predictions and answers** in Lab: field lines, equipotentials, shading, the 3D landscape and the field map data table disappear, and a Blind tag shows on the field. Students move the probe (tap, or press P on the field and use the arrow keys, 0.1 cm per press, 1 cm with Shift), press **Capture reading** (or C) at each point, then **Export CSV**. The CSV lists every setup's charges in SI in its header, so readings can be checked against V = Σ kq/r.

7. **Continuous charge (OpenStax 5.5).** Press **Rod**, **Ring** or **Disk** (each +2 nC; the probe starts on the rod's perpendicular bisector, or on the ring's or disk's axis). Rings and disks stand perpendicular to the map with their dotted axis in it, so you see them edge on: the map slices the ring at its two dots and the disk along its bar. The **Textbook formulas** panel compares the object's exact |E| at the probe with the formulas: on the **Rod** bisector the finite rod result matches to 0.0% while the infinite line λ/(2πε₀r) is 30% high at 2.5 cm and 0.2% high at 0.2 cm; on the **Ring** axis kQz/(z² + R²)³ᐟ² is exact everywhere (Q7); on the **Disk** axis the plane value σ/2ε₀ = 89.9 kV/m is approached close to the disk (80.9 kV/m at 0.2 cm). Far away every object reads like a point charge. Use **Add rod**, **Add ring**, **Add disk**, and the **Length L** / **Radius R** and **Direction** / **Axis direction** sliders (or R on the field to turn one 15°) to build your own.

Keyboard on the field: Tab or ] and [ select charges, arrows move the selected one, + and − change it by 0.5 nC, P switches between the probe and a charge, C captures. In 3D: A and D rotate, W and S tilt, Z and X zoom, 0 resets. **Reduce motion** (in Layers) turns off Spin; it starts on when the system asks for reduced motion. **Show data table** (in Key) lists V and E on a 2 cm grid as text.

## Questions

**Q1.** Predict: in **Dipole** (+2 nC and −2 nC, 6 cm apart), consider the point 2.5 cm above the midpoint. Is V there positive, negative or zero? Is E zero? If not, which way does it point?

**Q2.** With the dipole's charges at (−3, 0) cm and (3, 0) cm, calculate the magnitude and direction of E at (0, 2.5) cm. Check against the probe.

**Q3.** At the midpoint of **Like pair** E is zero but V is not; at the midpoint of **Dipole** V is zero but E is not. Explain both. Then calculate V at the like pair's midpoint (+2 nC each, 6 cm apart).

**Q4.** In **+3 and −1** (+3 nC at x = −2.5 cm, −1 nC at x = +2.5 cm) there is one point on the x axis where E = 0. Explain why it cannot lie between the charges or left of the +3, then find it. Check with the probe.

**Q5.** In the 3D view a positive test charge behaves like a marble on the surface. Put one at rest exactly at the midpoint of **Like pair**. Is it in equilibrium? Is that equilibrium stable for a nudge along the line joining the charges? For a nudge at right angles to it?

**Q6.** On **Dipole** with ΔV = 250 V, the equipotentials near the midpoint are about 0.6 cm apart along the x axis. Estimate |E| there and compare with the probe.

**Q7.** In **Ring** (+2 nC spread around a ring of radius R = 2 cm, axis along y), (a) calculate E at the probe, z = 2.5 cm along the axis, and check it. (b) E is zero at the center and small far away, so somewhere on the axis it is largest. Find where, and the largest value; check by moving the probe up the axis. (c) At z = 10 cm, by what percentage does the ring's field differ from that of a point charge of 2 nC at its center?

## Common misconceptions

- **"Where V = 0, E must be zero too."** E is the slope of V, not its value; along the dipole's midline V = 0 and E is strong.
- **"A charge released from rest moves along its field line."** On a curved line, inertia carries it off the line.
- **"Line spacing in this picture shows how fast E falls off."** In a flat slice of 3D point charges lines spread as 1/r while E falls as 1/r². Use the probe.

## Physics behind the demo

- Up to 8 point charges (−5 to +5 nC) in one plane, with the full 3D Coulomb field: V = Σ kqᵢ/rᵢ, E = Σ kqᵢ r̂ᵢ/rᵢ², k = 8.99×10⁹ N·m²/C².
- A point charge has no finite V or E at its own position, so inside a radius a = 1.2 mm (well inside every drawn disc) each charge is treated as a uniformly charged ball: V = kq(3a² − r²)/(2a³) and E = kq r/a³. Outside that ball the values are exactly the point charge values, and E = −∇V everywhere. If the probe enters a ball, the Probe panel says so.
- Rods, rings and disks carry their total charge Q spread uniformly. A rod lies in the map; a ring or disk stands perpendicular to it with its axis in the map, so the map is a plane through the axis and contains E there (by symmetry). V and E are the exact integrals of k dq/r: closed forms for the rod everywhere, and complete elliptic integrals for the ring and the disk off their axis (on the axis they are the textbook formulas kQz/(z² + R²)³ᐟ² and 2πkσ(1 − z/√(z² + R²))). Within 1.2 mm of a body its charge is a line or sheet of 1.2 mm uniformly charged balls, integrated numerically to 1 part in 10¹⁰; the Probe panel says when the probe is there. Field lines start evenly along a rod or disk bar and from the two points where a ring crosses the map.
- Field lines follow E, in number proportional to |q|. In 3D the height is V, compressed near each charge: read it for shape, not scale.
