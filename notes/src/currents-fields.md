---
title: Magnetic Fields of Currents
level: PHYS 202
time: 20 to 30 minutes
---
## What students should come away with

- A long straight current makes a magnetic field that circles it (right hand rule), with B = μ₀I/(2πr): twice as far, half the field.
- Fields of several currents add as vectors. Parallel currents attract and opposite currents repel, with F/L = μ₀I₁I₂/(2πd) on each wire, equal and opposite.
- Ampère's law: ∮B·dl around any closed loop equals μ₀ times the current through it. B on the loop depends on every current nearby; the integral depends only on the enclosed ones.
- A current loop has B = μ₀I/(2R) at its center. Many loops side by side make a solenoid with a nearly uniform field μ₀nI inside, weak outside, and about half that at the ends.

## Before class

Students should know the force on a current, F = IL × B. The demo has two scenes: **Straight wires** (a cross section, currents into or out of the page) and **Loop and solenoid** (a plane through the axis). Line spacing is exact for straight wires but only rough in the loop scene, so read B from the probe there.

## Running it in class

1. **One wire.** Counterclockwise circles for current out of the page. Drag the probe from 3 cm (33.3 µT) to 6 cm: B halves. **Reverse current** turns the compasses round.
2. **Two wires, parallel currents.** Ask Q1 before you press it. The force arrows show attraction, 83.3 µN/m on each. Drag the probe to the midpoint, where B is zero.
3. **Two wires, opposite currents.** Now they repel, and the fields add between the wires. Select a wire and change its current with the slider: the two forces stay equal (Q3).
4. **Ampère's law.** The loop encloses 5 A out and 2 A in: ∮B·dl = μ₀(3 A) = 3.77 µT·m, computed by integrating B along the loop. Drag wire 3 around outside the loop: the colors along the loop change, the integral does not. Drag the loop over wire 3 and the integral jumps. Switch to **Rectangle** and **Clockwise**.
5. **Current loop.** B at the center is 78.5 µT. Drag the probe along the axis and compare with μ₀IR²/(2(R² + z²)^(3/2)).
6. **Solenoid.** N = 30 over 24 cm: 762 µT at the center against the ideal μ₀nI = 785 µT, and 0.511 of the center value at an end. Shorten L with the grip or slider until it turns back into a loop.

## Questions

**Q1.** Predict: two long parallel wires carry current in the same direction. Do they attract, repel, or feel no force? Use the field of one wire and F = IL × B on the other to decide.

**Q2.** Two long parallel wires are 6.0 cm apart and each carries 5.0 A in the same direction. Find the magnetic field that one wire makes at the other, and the force per meter on each. Check with Two wires, parallel currents.

**Q3.** In Two wires, parallel currents, wire 1 (at x = −3.0 cm) is left at 5.0 A and wire 2 (at x = +3.0 cm) is raised to 15 A. Where on the line between them is B zero? Which wire now feels the larger force per meter, and how large is it? Check with the probe and the force readouts.

**Q4.** In the Ampère's law setup, dragging wire 3 near the loop (but outside it) clearly changes B along the loop, yet ∮B·dl stays at μ₀(3 A). Explain how both can be true. Does wire 3 contribute nothing to B on the loop?

**Q5.** In the Ampère's law setup, what is ∮B·dl (a) as set, (b) with the loop direction set to Clockwise, (c) after the loop is moved or resized so that it also encloses wire 3 (+4.0 A)? Give numbers in µT·m.

**Q6.** The Solenoid preset has N = 30 turns, L = 24 cm, R = 3.0 cm and I = 5.0 A. Find the ideal long solenoid field μ₀nI. The demo's exact value at the center is about 3% lower, and at an end it is about half. Explain both, and predict what happens to the 3% difference if L is doubled.

**Q7.** Open **Magnets and Oersted's compass**. (a) With two bar magnets, predict what happens when magnet B is turned around, then check. Cut magnet B in half: how many poles does each half have? (b) Switch to Oersted's compass: a wire 3.0 cm above the needle carries 3.0 A toward the north, and Earth's horizontal field is 20 µT. Find the wire's field at the needle and the angle the needle turns. Which way does it turn? Turn on **Predict first**, set a current, read the angle off the compass and work out B_E.

## Common misconceptions

- **"Magnetic field lines point from the wire outward, like electric field lines from a charge."** Around a straight current they are closed circles; they have no start or end.
- **"Ampère's law says B on the loop comes only from the enclosed current."** B everywhere comes from all the currents. Only the integral of B·dl around the closed loop is fixed by the enclosed current; outside currents add as much along the loop as they take away.
- **"The wire with the larger current feels the larger force."** Each wire feels F/L = μ₀I₁I₂/(2πd): the forces are equal and opposite (Newton's third law).
- **"Like currents repel, as like charges do."** For currents it is the other way round: parallel currents attract.

## Physics behind the demo

- Magnets and Oersted's compass (OpenStax 11.1): each bar magnet is two point poles (Gilbert's model), so only field directions and force ratios are shown. Oersted's needle settles at tan θ = (μ₀I/2πh)/B_E for a long straight wire running north and south above it; Earth's horizontal field is a setting.

- Straight wires: infinitely long, thin and straight, perpendicular to the page, in vacuum. Each gives B = μ₀I/(2πr), and the field shown is the vector sum. Field lines are contours of the vector potential A_z at equal steps, so their spacing is exact. A real wire has a thickness, and inside it B falls to zero at the center; the thin wire model leaves that out.
- The force on a wire is per meter of length and comes only from the other wires.
- ∮B·dl is integrated numerically along the loop (adaptive Gauss–Kronrod quadrature, tolerance 10⁻¹⁰ of μ₀Σ|I|). It never uses Ampère's law, so the agreement with μ₀I_enc is a real check. Compass needles line up with B; their swing is for show.
- Loop and solenoid: each turn is an exact circle, coaxial and evenly spaced; its field comes from the full 3D Biot–Savart law in closed form (complete elliptic integrals). A real winding is a helix that also carries I once along the coil; that part is left out. The dashed gold curve on the axis plot is the continuous current sheet, B = μ₀nI(cos θ₁ − cos θ₂)/2.

## Going further

- History: the force between two parallel currents was the basis of the SI ampere from 1948 until the 2019 redefinition, which fixed the elementary charge instead.
