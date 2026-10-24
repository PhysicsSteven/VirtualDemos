---
title: Franck–Hertz Experiment
level: Modern physics; Modern Physics Lab (pre-lab and analysis)
time: 15 to 25 minutes
---
## What students should come away with

- An electron can give a mercury atom only one fixed amount of energy, 4.89 eV (the 6³P₁ level), or nothing. Below that energy the collisions are elastic and the electron keeps almost all its energy.
- The current falls each time the electrons reach 4.89 eV just before G2: they lose it and can no longer climb the small retarding voltage U_r to the collector. Every 4.9 V more leaves room for one more excitation, so the maxima are evenly spaced.
- The spacing measures the excitation energy; the positions do not, because the contact potential and the electrons' starting energies shift every peak by the same amount.
- The excited atom emits one photon of hc/4.89 eV = 253.7 nm: the energy lost in collisions is the energy seen in the spectrum.

## Before class

Students should know the electron volt and the idea of discrete energy levels. The panels show the tube (cathode K, grids G1 and G2, collector A), the electron energy across the gap G1 to G2, the current against U, and the mercury levels. The controls match the lab apparatus: **Oven temperature**, the ramp of **Accelerating voltage U (G2)**, **Retarding voltage U_r** and a nanoamp current amplifier. As a pre-lab it shows what the oscilloscope or data logger trace means.

## Running it in class

1. **Mercury tube at 180 °C.** Ask Q1 before the sweep starts. In the energy panel each electron climbs a straight line and drops by exactly 4.887 eV wherever it excites an atom.
2. **Stop in a dip.** Drag the U cursor on the current plot to about 8 V: **Excitations per electron** is close to 1 and the current is near its minimum. At 10.7 V the electrons regain enough energy after one excitation, and the current is back at a maximum (Q3).
3. **Measure the peak spacing.** **Mark peaks** is on. Click each maximum in order; with all six, the fit gives about 4.84 to 4.86 ± 0.03 eV. Compare with **NIST: 6³P₁ level** (Q2).
4. **Why the first peak is not at 4.9 V.** The dashed lines at n × 4.89 V miss every peak by about the same amount. Drag **Contact potential U_c** to 0 and back: the curve slides, the spacing does not (Q4).
5. **Too cold: few collisions**, then **Too hot: weak current.** Compare each with the dashed 180 °C ghost and read the mean free path and the fraction not scattered out of the beam (Q5, Q6).
6. **Retarding voltage.** Ask the prediction in Q3, then set U_r to 0 at 180 °C and press **New sweep**. The maxima vanish.
7. **Neon: glowing layers**. The 18.7 eV excitations are followed by visible red and orange light, so the collision zones show up as glowing layers (Q7).

## Questions

**Q1.** Predict: U is raised slowly from 0 to 35 V. Sketch the collector current you expect if mercury atoms could absorb any amount of energy from an electron, and then the current you expect if they can absorb only 4.89 eV at a time.

**Q2.** At 180 °C the maxima lie at 6.04, 10.75, 15.60, 20.47, 25.35 and 30.26 V. Find the five spacings and the average spacing. What energy does one excitation take, and what wavelength should the excited atoms emit? Compare with the 253.7 nm mercury line.

**Q3.** Predict, then check: what happens to the maxima if the retarding voltage U_r is set to 0? Use your answer to explain why the current is smallest just after each maximum.

**Q4.** The first maximum is at about 6.0 V, not 4.89 V. Give the main reason all the peaks are shifted, and explain why the spacing is not. Then set U_c to 0 and to 4 V, sweep each time, and record where the first maximum falls.

**Q5.** At 180 °C the vapor pressure is 11.7 hPa. Find n = p/kT and the mean free path to an excitation, λ = 1/nσ, with the demo's σ = 1.7 × 10⁻¹⁹ m². With U = 20 V and U_c = 2 V across the 8 mm gap, how much energy does an electron gain over one mean free path? Repeat for 120 °C (p = 1.01 hPa) and explain why the dips fill in when the tube is too cold.

**Q6.** At 210 °C the dips are as deep as at 180 °C, yet the whole curve is about three times weaker. Where are the missing electrons? Support your answer with the **Electrons not scattered out of the beam** readout at the three temperatures.

**Q7.** In neon the electrons excite levels near 18.7 eV, which then emit red and orange light. At U = 80 V, how many glowing layers do you expect between G1 and G2, and roughly where? Why does a mercury tube show no such glow?

## Common misconceptions

- **"The current drops because the atoms absorb the electrons."** The electrons keep going; having lost 4.89 eV they cannot cross the retarding field to the collector.
- **"The first peak should be at 4.9 V."** The electrons gain e(U − U_c) and start with energy of their own, so every peak is shifted. Only the spacing carries the atomic energy.
- **"Hotter is always better."** Denser vapor gives sharper dips but scatters more electrons out of the beam, so the current sinks into the noise.

## Physics behind the demo

- Electrons start with thermal energy (1100 K cathode) plus a 0.5 eV spread, and gain e(U − U_c)x/L over L = 8 mm (5 mm for neon). Above 4.887 eV an electron excites an atom after a random distance with mean λ = 1/nσ_x and loses exactly that energy; σ_x is effective, since elastic collisions make the real path zigzag. The ³P₀ and ³P₂ levels and ionization are left out.
- Elastic collisions are left out of the energy but kept in two ways: electrons reach G2 in random directions, so one with energy E passes U_r with chance 1 − eU_r/E, and a fraction e^(−nσ_sL) is scattered out of the beam.
- n = p/kT from the measured vapor pressure of mercury at the oven temperature. Neon is a sealed 10 hPa fill, excited to its 2p⁵3p levels (18.38 to 18.97 eV).
- The current entering the gap rises with U (space charge, then the control grid). This rising baseline pulls each maximum slightly to higher U, most for the first, so a fit through all six peaks comes out a little below 4.887 eV. Amplifier noise is 0.02 nA; the fit uses a reading uncertainty of ±0.1 V per peak.

## Going further

- Lab connection: the same analysis applies to the real trace. Let the oven settle, choose U_r and the temperature for clear maxima without a discharge (a tube too cold for its voltage can strike a glow discharge; turn U down at once), locate the maxima or the often sharper minima, and fit U_n against n. Report ΔE with its uncertainty, the intercept and λ = hc/ΔE, and compare a fit with and without the first peak.
- History: Franck and Hertz published in 1914 and shared the 1925 Nobel Prize. They first read 4.9 V as the ionization energy of mercury; it was soon understood as the first excitation energy, direct evidence for Bohr's discrete levels.
