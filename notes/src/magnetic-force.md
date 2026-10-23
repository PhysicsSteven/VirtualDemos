---
title: Charges in Magnetic Fields
level: PHYS 202
time: 20 to 30 minutes
---
## What students should come away with

- F = qv × B is always perpendicular to v: it turns a charge but never changes its speed, so it does no work.
- In uniform B a charge moving across the field circles with r = mv/|q|B and period T = 2πm/|q|B, which does not depend on speed. The sign of q sets the sense of rotation.
- In crossed E and B the forces balance only for v = E/B (velocity selector); with B alone, ions of equal charge and energy separate by mass.

## Before class

Students need the cross product, F = qv × B and centripetal acceleration. ⊗ is B into the page. Drag the arrow tip to set the launch velocity.

## Running it in class

1. **Circular motion.** Ask Q1 first. A proton at 1.0×10⁵ m/s in 0.10 T: r = 1.04 cm, T = 656 ns. Drag the arrow tip: the circle grows, T stays 656 ns.
2. **Electron vs proton.** Same kinetic energy, 100 eV, in 1 mT: they circle in opposite senses, and the electron's circle is 43 times smaller (Q3).
3. **E × B drift.** A proton from rest traces a cycloid, drifting at E/B = 1.0×10⁵ m/s. An **Electron** arches the other way but drifts the same way.
4. **Velocity selector.** 400 V across plates 2 cm apart with 0.10 T: only protons near E/B = 2.0×10⁵ m/s get through. Press **Fire 20**; slow ones curve down, fast ones up.
5. **Mass spectrometer.** Neon ions through 1000 V in 0.20 T land 20.36 cm (²⁰Ne⁺) and 21.35 cm (²²Ne⁺) from the slit. **Equal numbers** shows the rare ²¹Ne⁺.
6. **Cyclotron.** A proton gains 100 keV per gap crossing at a fixed f_c = 15.25 MHz. Move **f / f_c** off 1 to show it falling out of step.
7. **Measuring r and T.** In a free setup, tick **Show ruler** and drag its ends A and B across the circle (**Ruler reads** Diameter or Radius). Use **Start timer** and **Stop timer** over a few turns and set **Turns timed**. **Capture reading** stores what was read; **Export to worksheet** sends the rows to the student worksheet; the plot fits **r against v**, **r against m/|q|** or **T against v**. Tick **Blind: hide predictions and answers** in **Lab** so the r and T readouts, the r label, the circle's center and the dashed path ahead are hidden while students measure.

## Questions

**Q1.** Predict: a proton moves at right angles to a uniform magnetic field. Does its speed change? If its speed doubles, what happens to its radius and its period?

**Q2.** A proton (m = 1.673×10⁻²⁷ kg) moves at 1.0×10⁵ m/s at right angles to a 0.10 T field. Calculate the radius of its circle and its period. Check with **Circular motion**.

**Q3.** In **Electron vs proton** both have 100 eV of kinetic energy in 1.0 mT pointing into the page. Which way does each circle, as seen on the page? Find the ratios of their radii and of their periods (m_p/m_e = 1836).

**Q4.** In **Velocity selector** (400 V across plates 2.0 cm apart, B = 0.10 T), what speed goes straight through? Would an electron at that speed? A doubly charged ion? Check with **Particle**.

**Q5.** In **Mass spectrometer**, singly charged neon ions start from rest, are accelerated through 1000 V and enter 0.20 T. Taking masses of 20 u and 22 u (1 u = 1.661×10⁻²⁷ kg), find where each lands (2r from the slit) and the separation.

**Q6.** In **Cyclotron** (B = 1.0 T, dee radius 0.30 m), find the gap voltage frequency and the energy of a proton on an orbit of the dee radius, K = (qBR)²/2m, in MeV. Why might the energy it actually leaves with differ by up to one gap crossing? Why does one frequency work for every orbit, and why does it fail at high energy?

## Common misconceptions

- **"The magnetic force speeds the particle up."** F ⊥ v, so it does no work; only E changes the speed.
- **"The magnetic force points along B."** It is perpendicular to both v and B.
- **"A faster particle takes longer to go around its bigger circle."** Circumference and speed grow together; T is the same.
- **"Positive and negative charges drift opposite ways in crossed fields."** The drift E × B/B² contains no q.

## Physics behind the demo

- Exact nonrelativistic motion in uniform fields (circle in pure B, cycloid or trochoid with E), so |v| in pure B stays fixed to rounding error. Speeds stop at 10⁷ m/s (v/c = 0.033). Field edges are sharp (no fringe fields), and the particle does not radiate.
- Spectrometer ions start at rest; ion mass = atomic mass − one electron. The cyclotron gap voltage is a square wave; the rail shows v/c and γ at K_max. (qBR)²/2m is the energy on a centered orbit of radius R: the proton actually leaves at 4.35 MeV against 4.31 MeV, because energy comes in 100 keV steps and the last orbit is slightly off center.
- The ruler reads to one screen pixel (zoom in for a finer reading) and the timer counts simulation time, so the scatter in captured r and T comes from the student's own reading. No noise is added.
