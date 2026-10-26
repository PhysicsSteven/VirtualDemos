---
title: Shells, the Periodic Table and X-Rays
level: Intro modern physics (atomic structure)
time: 20 to 35 minutes
---
## What students should come away with

- The Pauli exclusion principle: no two electrons in an atom share all four quantum numbers n, l, m_l and m_s. So a subshell holds 2(2l + 1) electrons and a shell 2n², and atoms build up shell by shell.
- The periodic table is that build up. Elements in a column have the same arrangement of outer electrons; the noble gases have closed shells and hold their electrons hardest, and the alkali metals have one electron outside a closed shell and lose it most easily.
- Filling follows the n + l rule well but not perfectly: about twenty elements (chromium and copper among them) have measured ground states that break it.
- An X-ray tube gives a continuous spectrum that stops sharply at λ_min = hc/eV, plus lines that belong to the target: an electron falls into a hole in the K shell. Moseley found that the Kα line's frequency grows as (Z − 1)², which put the elements in order of atomic number.

## Before class

Students should know the four quantum numbers of the hydrogen atom and the Bohr energy levels E = −13.6 eV Z²/n². The demo has two views. **Shells**: pick an element on the periodic table (or add and remove electrons one at a time) and see its orbital boxes filled with spin up and spin down arrows, the count in each shell against 2n², and the first ionization energy of every element from H to Lr. A switch compares the measured ground state with the n + l rule. **X-ray tube**: choose a target and a voltage, and read the spectrum (against wavelength or photon energy) with a cursor; beside the tube, the target's K, L and M levels show the transitions behind each line.

## Running it in class

1. **Fill up to neon.** Step down to hydrogen with − electron and back up. Ask Q1 at each closed shell. The ionization graph shows the noble gas peaks and alkali dips (Q2).
2. **Chromium breaks the rule.** Switch between the two fills: the rule gives 3d⁴ 4s², the measured ground state 3d⁵ 4s¹. Copper does the same (Q3).
3. **Copper tube, 30 kV.** The smooth curve starts at 41.33 pm. Change the voltage: the start moves, the lines stay (Q4, Q5).
4. **Below the K edge.** Molybdenum at 15 kV has no K lines. Raise the voltage past 20.0 kV and they appear (Q6).
5. **Mystery target.** Students measure Kα₁ and use Moseley's law to find Z (Q7).

## Questions

**Q1.** Using the Pauli principle, show that the n = 2 shell holds 8 electrons and the n = 3 shell 18. Why does the third row of the periodic table still have only 8 elements?

**Q2.** Helium has the largest first ionization energy (24.59 eV) and lithium one of the smallest (5.39 eV). Explain both. Estimate the effective nuclear charge seen by sodium's outer electron from its ionization energy, 5.139 eV.

**Q3.** By the n + l rule chromium (Z = 24) should be 3d⁴ 4s². The measured ground state is 3d⁵ 4s¹. Suggest why.

**Q4.** A copper target is run at 30.0 kV. Predict the shortest wavelength in the spectrum. What happens to it at 15.0 kV, and why does it not depend on the target?

**Q5.** Copper's Kα₁ line is at 154.06 pm. Find its photon energy, and compare with Moseley's estimate (3/4)(13.6 eV)(Z − 1)². Why Z − 1 and not Z?

**Q6.** Molybdenum's K edge is 20.00 keV. Why are there no K lines at 15 kV, while the continuous spectrum is there at any voltage?

**Q7.** A mystery target's Kα₁ line is at 40.03 pm. Find its atomic number.

## Common misconceptions

- **"Shells fill strictly in order of n."** 4s fills before 3d (n + l = 4 against 5), which is why potassium and calcium come before the transition metals.
- **"The X-ray lines come from the electrons in the beam."** The beam electrons only knock out an inner electron of a target atom; the line photon comes when another electron of the same atom falls into the hole.
- **"Raising the voltage moves the lines."** It moves the continuous spectrum's cutoff and makes everything brighter; the line wavelengths belong to the target and do not move.
- **"Ionization energies rise smoothly across a period."** They dip after each filled or half filled subshell (boron after beryllium, oxygen after nitrogen).

## Physics behind the demo

- Configurations and first ionization energies are from the NIST Atomic Spectra Database (ionization energies for Z = 1 to 103; configurations above 103 are predicted). The boxes fill within a subshell by Hund's rule (all spin up first). The n + l rule fills subshells in order of n + l, lower n first on a tie. Z_eff = n√(IE/13.6 eV) is a rough hydrogen like estimate.
- The continuous spectrum follows Kramers' law for a thick target: energy per unit photon energy ∝ Z(E₀ − E), ending at E₀ = eV (λ_min = hc/eV, the Duane–Hunt limit). Absorption in the target and window is left out, so the long wavelength end does not fall away as in a real tube.
- Filtration and half value layers (Medical Physics): with a filter or sheets in a tungsten beam from 20 to 100 kV, the graph and the ion chamber switch to the SpekPy 2.5.4 spectrum (12° anode, 0.8 mm Be), which does include absorption in the target, with XCOM μ/ρ for the filters and NIST SRD 126 μ_en/ρ for air, all from the shared photondata.js. The half value layers match SpekPy's own to 0.3 % and Photon Interactions in Matter exactly (2.74 mm Al at 80 kV behind 2.5 mm Al). Other targets get no beam quality numbers.
- Kα₁, Kα₂, Kβ₁ and the K edge are measured values from the NIST X-Ray Transition Energies Database (Deslattes et al. 2003). The lines appear only when eV exceeds the K edge. Their heights are drawn, not measured (Kα₂ half of Kα₁, Kβ₁ a fifth, growing as (U − 1)^1.6 with U = eV/E_K), and each line is given a width of 0.15% of its energy.

## Going further

- Plot √f of Kα₁ against Z for several targets and fit a line: the slope is close to √(3/4 × 13.6 eV/h) and the line crosses zero near Z = 1, as the Bohr model with one electron screening the nucleus predicts.
- Pair with **Spectra Explorer** for the optical lines of the same atoms, and with **Atoms in a Magnetic Field** for what m_l and m_s mean.
