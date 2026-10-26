---
title: Shielding Rooms
level: Medical Physics, radiation protection (upper level)
time: 20 to 50 minutes
---
## What students should come away with

- Every barrier is designed the same way: the unshielded weekly dose at a point 0.3 m beyond the wall, the design goal P (0.02 mGy or mSv a week for the public, 0.1 for radiation workers), the occupancy T, and the transmission B = P/(T D₀) the wall may allow.
- At CT energies the photoelectric effect makes lead far better per gram than concrete: about 1.5 mm of lead or 13 cm of concrete, 18 times the mass. At megavolt energies Compton scattering dominates and every wall needs about the same mass per area, so concrete, the cheapest, wins wherever there is room.
- A linac vault's primary barrier takes the beam itself and needs about 1.75 m of concrete at 6 MV and 2.2 m at 18 MV; the secondary walls see only the 0.1 % head leakage and need about 1 m.
- Above 10 MV the beam makes neutrons. The maze lets them scatter and slow down on the way to the door, each meter of maze replaces door thickness, and the door is borated polyethylene for the neutrons plus lead for the capture gammas.
- A proton room is shielded against the neutrons the protons knock out, mostly forward. Their attenuation is exponential (λ = 52 cm of concrete), so twice the workload needs only about 30 cm more wall.

## Before class

Three rooms. **CT room** computes the scatter air kerma from the week's body and head scans by the DLP method of NCRP 147, and the lead, steel, concrete and gypsum wallboard that give the needed transmission, from Archer fits to measured CT scatter. **Linac vault** has a primary barrier, a secondary wall and the maze door (18 MV only), from NCRP 151's tenth value layers and its maze door method. **Proton room** gives the forward wall from a FLUKA fit for 250 MeV protons stopping in tissue. The picture is a floor plan or a 3D room; the graph shows each material's transmission against thickness or mass per area.

## Running it in class

1. **CT room, office.** B = 4.72 × 10⁻³: 1.46 mm of lead, 11.7 mm of steel, 128 mm of concrete or 409 mm of wallboard. Switch the graph to mass per area and ask Q1.
2. **CT room, corridor** (T = 1/5). B grows five times; the lead falls only to 0.87 mm, since the first millimeter of lead does most of the work on the soft part of the scatter spectrum.
3. **6 MV primary barrier**, then **in lead.** 1.75 m of concrete or 31 cm of lead. Show the mass per area graph: the curves nearly coincide. Ask Q2.
4. **18 MV primary barrier.** 2.22 m: the tenth value layer of concrete grows from 37 to 45 cm.
5. **Secondary wall, 80 % IMRT.** 1.06 m; with no IMRT 0.95 m.
6. **18 MV maze door**, then **short maze.** With 10 cm of borated polyethylene and 7 cm of lead the door meets the goal at 8 m; at 4 m the neutrons at the door grow almost seven times. Ask Q3.
7. **Proton room**, then **twice the patients.** 2.69 m, then 3.00 m. Ask Q4.

## Questions

**Q1.** Why does a CT room use a lead sheet in ordinary walls, while concrete would need 18 times the mass?

**Q2.** Lead is nearly six times thinner than concrete at 6 MV. Why are vaults still concrete?

**Q3.** Why does the maze matter so much more for neutrons than a little more door?

**Q4.** Doubling the patients adds about 31 cm of concrete. Why not twice the wall?

## Common misconceptions

- **"Lead is always the best shield."** Per gram it is far better only where the photoelectric effect matters, at diagnostic energies below a few hundred keV. At megavolt energies it is no better than concrete per gram, and it is useless against fast neutrons.
- **"Thicker is the same at any energy."** The tenth value layer grows with energy, and the first one is larger than the rest because the beam hardens in the wall.
- **"The door of a vault is a thick lead slab."** A long maze does most of the work; at 6 MV a vault door may have only a little lead.
- **"A proton beam carries less energy, so it needs thinner walls."** The dose behind the wall is from secondary neutrons of up to the proton energy, which concrete removes only slowly.

## Physics behind the demo

- CT (NCRP Report 147, 2004, §5.4): scatter air kerma at 1 m per scan κ DLP, κ = 9 × 10⁻⁵ cm⁻¹ head and 3 × 10⁻⁴ cm⁻¹ body, with the body value multiplied by 1.2; scans repeated with contrast count again. Transmission B(x) = [(1 + β/α) e^{αγx} − β/α]^{−1/γ} with Archer parameters for lead and concrete at 120 and 140 kV (NCRP 147 Appendix A; the demo's test checks the report's example, 1.54 mm of lead for B = 3.87 × 10⁻³). Steel as 8 times the lead and gypsum as 3.2 times the concrete (Table 4.8).
- Linac (NCRP Report 151, 2005): primary B = P d²/(W U T), leakage B = P d²/(10⁻³ W_L T) with W_L = W(1 − f + 3f) for an IMRT fraction f; thickness TVL₁ + (n − 1) TVLₑ, n = log₁₀(1/B), Tables B.2 (primary) and B.7 (leakage). Target 1 m from isocenter, point 0.3 m beyond the wall. Patient scatter, wall scatter, laminated barriers and photoneutrons from metal barriers are left out and stated on the page.
- Maze door at 18 MV: neutron fluence at the maze entrance (NCRP 151 eq. 2.17, Q_n = 1.22 × 10¹² per Gy), the modified Kersey method down the maze with TVD = 2.06 √S₁, and the capture gammas (tenth value distance 5.4 m); door tenth value layers 4.5 cm of borated polyethylene and 6.1 cm of lead. Scattered photons down the maze are left out.
- Proton room: H = H₀ N U e^{−x/λ}/r², H₀ = 0.0166 pSv m² per proton and λ = 52 cm, a FLUKA fit for 250 MeV protons in the forward direction (N. E. Ipe); 0.49 nA at the patient, 5 days a week. λρ = 122 g/cm², close to PTCOG Report 1's value of about 120 g/cm².
- Densities: lead 11.35, steel (as iron) 7.874, concrete 2.35 g/cm³.

## Going further

- Pair with **Photon Interactions in Matter** for the photoelectric and Compton cross sections behind Q1 and Q2, and with **Nuclear Reactions** (Dose view) for a PET uptake room.
- Have students design a full vault on paper: two primary barriers, the secondary walls and the maze, and estimate the concrete volume.
