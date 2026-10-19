---
title: Electron Diffraction
level: Modern physics lab
time: 20 to 40 minutes (a full lab period with the table and fit)
---
## What students should come away with

- Electrons accelerated through V have a de Broglie wavelength λ = h/p, with p = √(2meV) (plus a small relativistic correction). At a few kilovolts λ is about 20 pm, comparable to the spacing of atoms in a crystal.
- A thin film of graphite is made of many tiny crystals at random angles. For each set of lattice planes, some crystals sit at the Bragg angle, 2d sin θ = λ, so the electrons leave on a cone at 2θ and make a ring on the screen.
- Two rings mean two plane spacings, d₁ = 0.213 nm and d₂ = 0.123 nm. Their ratio is √3, set by the hexagonal lattice, and it does not change with V.
- Raising V shortens λ and shrinks the rings as 1/√V: the particle's momentum sets its wavelength.

## Before class

Students should know Bragg's law (from X ray diffraction or a grating) and the energy and momentum of a particle. Decide whether students will use the caliper (straight across, the chord) or the ruler on the glass (along the curve, the arc). Measure your own tube's graphite to screen distance L if you can: the maker gives 125 mm, but handouts quote 130 or 135 mm, and the value goes straight into d. Turn on **Blind** before projecting the table.

## Running it in class

1. **Low voltage, big rings.** Ask Q1 first. Point out the bright central spot (electrons that went straight through) and the two rings.
2. **Raise the voltage.** The rings shrink. Ask for the scaling before anyone measures (Q3).
3. **Two rings, two spacings.** Use the cross section: each ring is a cone at its own Bragg angle. The ratio of the ring diameters stays near 1.73 at every voltage.
4. **Is it the electrons?** Bring the magnet near the neck: the whole pattern moves. X rays would not be deflected.
5. **Why only two rings.** The graphite sheet with its two families of rows of atoms, 0.213 nm and 0.123 nm apart.
6. **Measure the spacings.** Six simulated readings fill the table; students add their own, choose exact or small angle geometry, and compare the fitted d with the accepted values.

## Questions

**Q1.** Predict: if electrons were only particles, what would the screen show after the beam passes through the graphite? What does a ring pattern tell you instead?

**Q2.** Find the de Broglie wavelength of electrons accelerated through 3.00 kV and 5.00 kV, first without and then with the relativistic correction. How big is the correction? Check with the **λ from the meter reading** readout.

**Q3.** With L = 125 mm and the small angle formula D ≈ 2Lλ/d, predict the inner and outer ring diameters at 3.00 kV. By what factor should every ring shrink going from 3.00 to 5.00 kV? Check by measuring.

**Q4.** Why does a polycrystalline film give rings, while a single crystal would give spots? Why is each ring a cone in space?

**Q5.** The ratio of the two ring diameters is about 1.73 at every voltage. Explain why it is independent of V, and show that it equals d₁/d₂. Where does √3 come from in a hexagonal sheet?

**Q6.** A student uses L = 135 mm, but the tube's real distance is 125 mm. What happens to their values of d, and by how much? Which matters more here, an error in L or the difference between the exact and small angle formulas?

**Q7.** How does the magnet test rule out the idea that the rings are made by X rays produced in the tube? What would change in the pattern if the electrons were replaced by neutrons of the same wavelength?

## Common misconceptions

- **"Each electron makes a ring."** Each electron lands at one point. The rings are where many electrons are likely to land, built up from very many hits.
- **"The rings come from electrons bouncing off atoms like balls."** Classical scattering from random atoms gives a smooth blur. Sharp rings at angles set by λ and d are interference, a wave property.
- **"Higher voltage makes bigger rings."** Faster electrons have shorter wavelengths, so smaller Bragg angles and smaller rings.
- **"The two rings are first and second order of one spacing."** Second order of 0.213 nm would sit at twice the angle, not at the observed ratio of √3. They are first order from two different plane spacings.

## Physics behind the demo

- λ = h/√(2meV(1 + eV/(2mc²))). The relativistic correction shortens λ by about 0.1 to 0.25% between 2 and 5 kV.
- Bragg: 2d sin θ = λ; each ring is the cone at 2θ to the beam. The demo finds exactly where each cone meets the spherical screen (L = 125 mm from graphite to screen, bulb radius 65 mm). The caliper reads the straight chord across the ring, the ruler the arc along the glass.
- The small angle formula λ ≈ dD/(2L) assumes a flat screen. With the arc it is within about 0.15%; with the chord it puts d high by 0.4 to 1% for the inner ring and 1.2 to 3% for the outer.
- Ring widths, brightness and the central spot are modeled to look like a real tube; the reading wander and meter jitter are simulated from the seed. The magnet's deflection is a behavioral model.

## Going further

- Have students fit D against 1/√V for both rings and compare the two slopes' ratio with √3.
- History: Davisson and Germer (scattering from nickel) and G. P. Thomson (transmission through thin films, much like this tube) confirmed de Broglie's hypothesis in 1927.
