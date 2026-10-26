# Shielding Rooms: CT, Linac Vault and Proton Room
Student laboratory · Medical Physics

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/shielding-rooms.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** CT room with an office, a corridor, or at 140 kV; 6 MV primary barrier in concrete and in lead; 18 MV primary barrier; secondary wall with IMRT; 18 MV maze door with a long and a short maze; proton room, and with twice the patients.

**Using the demo.**

- Every room is designed the same way: the weekly dose (air kerma for the CT room) at a point 0.3 m beyond the wall as if there were no wall, the design goal P for the area beyond (0.02 per week for the public, 0.1 for radiation workers, in mGy or mSv), the occupancy factor T of that area, and the transmission $$B = (P/T)/\text{dose}$$ the wall may allow. The demo gives the thickness of each material that has that transmission.
- CT room (NCRP Report 147, 2004). The scatter air kerma at 1 m from one scan is $$\kappa\,\mathrm{DLP}$$, with κ = 9 × 10⁻⁵ cm⁻¹ for a head scan and 1.2 × 3 × 10⁻⁴ cm⁻¹ for a body scan; a scan repeated with contrast counts twice. Lead and concrete transmissions are Archer fits to measured CT scatter data, $$B(x) = \left[(1 + \beta/\alpha)\,e^{\alpha\gamma x} - \beta/\alpha\right]^{-1/\gamma}$$; steel is taken as 8 times the lead and gypsum wallboard as 3.2 times the concrete (NCRP 147 Table 4.8, for typical rooms).
- Linac vault (NCRP Report 151, 2005). The primary barrier takes the beam itself, a fraction U of the time; the target is 1 m from isocenter. Secondary walls take the head leakage, 0.1 % of the beam in every direction, with treatments given as IMRT counted three times. Thickness from the first and equilibrium tenth value layers, $$x = \mathrm{TVL}_1 + (n - 1)\,\mathrm{TVL}_e$$ with $$n = \log_{10}(1/B)$$. Patient scatter, wall scatter and the neutrons a metal primary barrier makes at 18 MV are left out.
- Maze door at 18 MV. The neutron fluence at the inner end of the maze (NCRP 151 eq. 2.17), the neutron dose equivalent down the maze by the modified Kersey method, and the gamma rays from neutron capture in the concrete; the door adds borated polyethylene (tenth value layer 4.5 cm for the neutrons) and lead (6.1 cm for the capture gammas). The scattered photons down the maze are left out.
- Proton room. The neutrons from protons stopping in the patient, in the forward direction behind concrete: $$H = H_0 N U e^{-x/\lambda}/r^2$$, $$H_0$$ = 0.0166 pSv m² per proton, λ = 52 cm (a FLUKA fit for 250 MeV protons, N. E. Ipe), with 0.49 nA at the patient and five treatment days a week.
- The source to wall distance, the occupancy and the area set the point beyond the wall; the wall material chooses what the picture shows; the graph shows every material's transmission against thickness or against mass per area.
- Record reading stores the current room's result. Export to worksheet sends the readings to the Data tables below (CT rooms to Table 1, linac walls to Table 2, maze doors to Table 3, proton rooms to Table 4); Clear starts a new series.

</details>

## Goal

Design the walls of a CT room, a linear accelerator vault and a proton therapy room, compare how well lead, steel, concrete and polyethylene do in each, and explain why each kind of room is built the way it is.

## Background

The weekly dose at a point beyond a wall, with no wall, follows from the workload and the inverse square law. The wall must transmit at most

$$B = \frac{P}{T\,D_0},$$

where $$D_0$$ is that unshielded weekly dose, P the design goal and T the occupancy factor. For a linac primary barrier, with W the weekly dose at isocenter (1 m from the target), U the use factor and d the distance from the target:

$$B_{\mathrm{pri}} = \frac{P\,d^2}{W\,U\,T}, \qquad B_{\mathrm{leak}} = \frac{P\,d^2}{10^{-3}\,W_L\,T}.$$

The secondary walls see only the head leakage, 0.1 % of the beam in every direction, so U = 1; $$W_L = W(1 - f + 3f)$$ is the leakage workload when a fraction f of the treatments are IMRT, which needs about three times the beam per gray.

How a material stops photons depends on their energy. Below about 100 keV the photoelectric effect dominates, and its cross section per atom grows roughly as $$Z^4$$ to $$Z^5$$: lead (Z = 82) absorbs far more per gram than concrete. At megavolt energies Compton scattering dominates, and its cross section depends on the number of electrons, about the same per gram in every material except hydrogen. Fast neutrons lose energy best in collisions with hydrogen nuclei, which have nearly their mass; heavy nuclei barely slow them.

## Before the lab

1. A CT room has 150 body scans (DLP 550 mGy cm) and 30 head scans (DLP 1200 mGy cm) a week, 40 % of them repeated with contrast. Find the weekly scatter air kerma at 1 m, and at a point 3.3 m from the scanner.
2. For an office beyond that wall (public, T = 1), find B. With lead's Archer parameters at 120 kV, α = 2.246 mm⁻¹, β = 5.73 mm⁻¹, γ = 0.547, invert Archer's form and find the lead thickness.
3. A 6 MV linac delivers 450 Gy a week at isocenter. Its primary barrier faces an office (public, T = 1) with U = 1/4, and the point is 6.05 m from the target. Find B and the number of tenth value layers n. With TVL₁ = 37 cm and TVLₑ = 33 cm, find the concrete thickness.
4. Lead's tenth value layer at 6 MV is 5.7 cm and its density 11.35 g/cm³; concrete's is 37 cm and 2.35 g/cm³. Compare the two tenth value layers in g/cm². What does that say about the photons' main interaction at 6 MV?
5. In the proton room each 52 cm of concrete cuts the neutron dose by e. If the number of patients doubles, how much more concrete is needed, leaving the distance unchanged?

## Safety

No hazards in the virtual lab. Shielding is designed by a qualified medical physicist and verified by a survey after construction; the numbers here are for learning the method, not for a real room.

## Procedure

**CT room.** Record a reading in the CT room setup (office next door). Then record one for each of these changes from that setup, one at a time: a corridor beyond the wall; radiation workers beyond the wall; 140 kV; twice the body scans; the scanner 4.5 m from the wall. Export the readings; they go to Table 1, then Clear.

**Linac vault walls.** In the 6 MV primary barrier setup, record a reading at 6, 10, 15 and 18 MV. Then choose the secondary wall and record it at 6 MV with no IMRT, with 80 % IMRT, and at 18 MV with 80 % IMRT. Export the readings; they go to Table 2, then Clear.

**Maze door.** In the 18 MV maze door setup, take the door shielding out (no polyethylene, no lead) and record a reading at maze lengths of 3, 4, 6, 8, 10 and 12 m. Export them; they go to Table 3, then Clear. Then, at 6 m, find the polyethylene and lead (each to 0.5 cm) with the least total thickness that bring the door under the goal, then record and export that design.

**Proton room.** In the proton room setup, record a reading at 10, 20, 30, 45 and 60 patients a day. Export the readings; they go to Table 4.

## Data

Table 1. CT room walls.

| Reading | Setup | Transmission needed B | Lead (mm) | Steel (mm) | Concrete (mm) | Gypsum wallboard (mm) |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |
| | | | | | | |

Table 2. Linac vault walls, concrete, steel and lead.

| Reading | Beam and barrier | Transmission needed B | Concrete (cm) | Steel (cm) | Lead (cm) |
|---|---|---|---|---|---|
| | | | | | |
| | | | | | |
| | | | | | |

Table 3. Maze door at 18 MV.

| Reading | Door shielding | Maze length (m) | Neutrons at the door, no door (mSv/wk) | log₁₀ of the neutron dose in mSv/wk | Capture gammas at the door, no door (mSv/wk) | Behind the door (mSv/wk) |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |
| | | | | | | |

Table 4. Proton room, forward wall.

| Reading | Patients a day | Protons a week N | ln of N/10¹³ | Transmission needed B | Concrete (cm) |
|---|---|---|---|---|---|
| | | | | | |
| | | | | | |
| | | | | | |

## Analysis

1. From Table 1, find the mass per area (kg/m²) of the lead and concrete walls in the first row (lead 11.35 g/cm³, concrete 2.35 g/cm³). How many times more mass does concrete need? Do the same for the 6 MV primary barrier in Table 2.
2. In Table 1, the corridor and the radiation workers rows each change B by a factor of 5. Compare how much the lead and the concrete change, and explain from the shape of Archer's curve why thin walls do not change in proportion to log B.
3. From Table 2's primary rows, how much does the concrete grow from 6 to 18 MV? Why does it grow, while lead's tenth value layer stays at 5.7 cm from 6 to 18 MV?
4. Graph log₁₀ of the neutron dose at the door against the maze length (Table 3, first copy). Is it a straight line? Find its slope at long maze lengths and compare with $$-1/\mathrm{TVD}$$, TVD = 2.06 √S₁ with S₁ = 6 m². Which term of the modified Kersey formula dominates a short maze?
5. Graph the concrete thickness against ln(N/10¹³) (Table 4). Fit a line and compare the slope with λ = 52 cm. Explain why the slope comes out a little smaller.

## Uncertainty

Each room's numbers rest on a workload, an occupancy and a source term that are estimates, often to a factor of two. From your Table 4 fit, how much concrete does a factor of two in the source term change? From Table 1, how much lead? Say which room is the more sensitive to such an error in absolute thickness, and which in relative thickness.

## Questions

1. CT room walls are ordinary wallboard with a lead sheet about 1.5 mm thick, while linac vaults are concrete one to two meters thick. Explain both choices from the photon energies and the interactions in each.
2. Lead saves floor space in a linac vault. Why is concrete still the usual choice, and where would a physicist use steel or lead instead?
3. Why does a linac vault have a maze, and why does an 18 MV vault need polyethylene in its door when a 6 MV vault needs only a little lead or none?
4. Why does a proton room need walls about as thick as an 18 MV vault, though its beam deposits far less energy than a linac's? What carries the dose through the wall?
5. In the proton room, 16.87 nA of the 17.36 nA the cyclotron makes is lost before the treatment room, mostly in the degrader. Where should the thickest walls of a proton center be, and why?

## What to hand in

Prelab answers, the four tables with their graphs and fits, your door design, and answers to the questions. Identify simulated data.
