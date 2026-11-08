---
title: Vortices in a Superconductor
level: Intro modern physics (condensed matter)
time: 15 to 20 minutes
---
## What students should come away with

- In a type II superconductor a magnetic field gets in only as vortices: tiny whirlpools of supercurrent, each carrying exactly one flux quantum, Φ0 = h/2e = 2.0678 × 10⁻¹⁵ Wb. The 2e is the charge of a Cooper pair.
- Vortices repel each other. With nothing to hold them they settle into a triangular lattice (the Abrikosov lattice) whose spacing is fixed by one flux quantum per cell.
- Defects pin vortices. Then the field can only get in so far, and it slopes down from each face. By Ampère's law that slope is a current density, the critical current density jc. Pinned vortices also trap flux when the field is removed, which is what holds a levitating magnet in place.

## Before class

Students should know magnetic flux and Ampère's law. The demo shows a slab of YBCO 2.8 µm thick seen along the field (the field points out of the screen), with the applied field shown outside both faces. Each white dot is a vortex. The faint rings are defects (pins). The graph shows the field inside across the slab (vortices per area times Φ0) or the average field inside against the applied field. The applied field changes steadily toward the value set on the slider.

## Running it in class

1. **No defects: a perfect lattice.** Ask Q1, then watch the vortices come in from both faces and spread out evenly. Count the neighbors of a vortex: six.
2. **Raise the field: vortices pile up at the faces.** With defects the field falls off from each face in straight slopes; the middle stays nearly empty at 90 mT. Read the current density from the slopes (about 6 × 10¹⁰ A/m²) and ask Q3.
3. **Strong pinning.** Steeper slopes, a larger current density, and the field gets less far in.
4. **Lower the field: flux stays trapped.** Vortices leave only near the faces (Q4).
5. **Cooled in the field, then the field removed.** The trapped field is highest in the middle: the roof shape of the Bean model.
6. **Up and down: a loop.** Switch the graph to field inside against applied (Q5).

## Questions

**Q1.** How far apart will the vortices be in an applied field of 80 mT, if each triangle of the lattice holds one half flux quantum (each cell, one)?

**Q2.** How many vortices pass through one square micrometer of the slab when the field inside is 90 mT?

**Q3.** At 90 mT the field falls from 90 mT at a face to almost zero 1.4 µm in. Use Ampère's law to estimate the current density flowing near the face.

**Q4.** After the field is raised to 90 mT and lowered back to zero, vortices are still inside. Why don't they all leave, and where is the trapped field largest?

**Q5.** In the loop, the field inside on the way down is larger than on the way up at the same applied field. What does the area between the two paths mean?

## Common misconceptions

- **"A superconductor keeps out all field."** Only below a small field (the lower critical field). Above it, a type II superconductor lets field in as vortices and stays superconducting between them, up to fields of many tesla.
- **"Field inside a superconductor can take any value at a point."** The flux comes in whole quanta, h/2e each; what varies is how closely the vortices are packed.
- **"Pinning is a flaw."** Without it, vortices move whenever current flows, and moving vortices dissipate energy. Pinning is what lets a type II wire carry large currents with no loss.

## Physics behind the demo

- London model: each vortex's field is (Φ0/2πλ²)K0(r/λ), and two vortices repel with force per length f0·K1(r/λ), f0 = Φ0²/(2πμ0λ³). The penetration depth λ = 141.5 nm is YBCO's in plane value at low temperature (Harshman et al., Phys. Rev. B 39, 851, 1989). The cores (a few nanometers) are much smaller than λ.
- Vortices move against a drag proportional to speed (no inertia), so time is shown only as a rate. Forces are cut off smoothly at 5λ.
- The applied field enters and leaves at the faces so that the field just inside each face equals the applied field (the Bean model's boundary condition); a vortex that a pin holds stays. Left out: the lower critical field, the surface barrier, demagnetizing effects, thermal activation (flux creep) and temperature.
- Pins are random wells 0.2λ across with a set largest pull. Their strength and density are model choices, not measured values for YBCO.

## Going further

- Pair with **Superconducting Levitation and Flux Pinning**, where the same pinning, averaged over the whole puck, holds a magnet.
- Why is the flux quantum h/2e and not h/e? (The current is carried by pairs of electrons.)
