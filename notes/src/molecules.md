---
title: Molecules: Bonds and Spectra
level: Intro modern physics (molecular bonds, rotation and vibration, molecular spectra)
time: 20 to 30 minutes
---
## What students should come away with

- An ionic bond forms even though making the ions costs energy: NaCl pays 5.14 − 3.62 = 1.52 eV to move the electron and gets back 6.1 eV of Coulomb energy at 0.236 nm. The exclusion principle repulsion stops the collapse and sets the depth, 4.26 eV.
- A covalent bond needs two electrons with opposite spins between the nuclei. With parallel spins the exclusion principle keeps them out of that region and the atoms repel.
- Molecules have vibration levels about 0.1 to 0.5 eV apart and rotation levels about a thousandth of an eV apart. A photon carries one unit of angular momentum, so l changes by 1: the infrared band splits into P and R branches with a gap at the center, and the line spacing gives the moment of inertia and so the bond length.

## Before class

Students should know the Coulomb energy, the exclusion principle, the quantized harmonic oscillator and angular momentum quantization. The demo has four views. **Ionic bond**: Na and Cl on a nanometre scale; the energy of the ion pair, ΔE − ke²/r + A/rⁿ, against separation, with the exponent n adjustable and A fitted to the measured 0.236 nm. **Covalent bond**: Morse curves for H₂, N₂, O₂, CO, HF, HCl and Cl₂ from measured constants, with the vibration levels and, for H₂, the parallel spin curve. **Energy levels**: the rotation ladders of n = 0 and n = 1, with allowed and forbidden transitions, in the book's model or with the measured constants. **HCl spectrum**: the simulated v = 0 → 1 band with a cursor, adjustable temperature, resolution and isotopes.

## Running it in class

1. **NaCl molecule.** Read the three terms at 0.236 nm (Q1). Turn off the repulsion and watch the minimum vanish; set n = 9 and see the well get shallower but stay at 0.236 nm.
2. **Pull the ions apart.** Drag out past 0.95 nm, where the ion pair costs more than neutral atoms (Q2).
3. **H₂ bond** and **H₂ spins parallel.** Compare the two curves; turn on the vibration levels and read the zero point energy (Q3).
4. **HCl levels.** Step l from 0 to 7 with Δl = +1 and −1; try Δl = 0 and +2 (Q4). Switch to N₂ (Q5). Switch to Measured constants and watch the R lines crowd together.
5. **HCl band.** Find the gap and read the spacing near it (Q6). **Two isotopes**: the pairs (Q7). **Hot gas**: the strongest lines move out.

## Questions

**Q1.** At 0.236 nm, what are the three contributions to the energy of Na⁺ + Cl⁻? What does the measured dissociation energy, 4.26 eV, tell you about the size of the exclusion principle repulsion?

**Q2.** A sodium atom and a chlorine atom approach from far away. At what separation does it first pay for the electron to move from sodium to chlorine?

**Q3.** The H₂ well is 4.75 eV deep, but the energy needed to separate the atoms is 4.48 eV. Where does the difference go? Why do two hydrogen atoms with parallel spins not bond?

**Q4.** Why are Δl = 0 and Δl = +2 forbidden for a photon absorbed by HCl? What lines would the band have if Δl = 0 were allowed?

**Q5.** Why does N₂ have no infrared band, although it vibrates and rotates like HCl?

**Q6.** The lines of HCl near the band center are about 20.7 cm⁻¹ apart. Find the moment of inertia and the bond length of HCl. The gap at the center is near 2886 cm⁻¹: find the force constant of the bond.

**Q7.** Each HCl line is a pair, about 2 cm⁻¹ apart, with heights in the ratio 3 : 1. Explain both numbers.

## Common misconceptions

- **"Atoms bond because the bonded state has less energy, so making the ions must release energy."** Making Na⁺ and Cl⁻ far apart costs 1.52 eV; the energy comes back only when the ions are close.
- **"The bond length is where the atoms touch."** It is where attraction and repulsion balance, the minimum of the energy curve. The atoms have no sharp edges.
- **"The molecule sits at the bottom of the well."** Its lowest level is a zero point energy above it: 0.27 eV for H₂.
- **"The lines of a molecular spectrum are equally spaced, with one at the band center."** The rigid rotor gives equal spacing, but there is never a line at the center (Δl = 0 is forbidden), and the real spacing shrinks in the R branch because the molecule is longer in n = 1.

## Physics behind the demo

- **Ionic bond.** ΔE = 1.52 eV, ke² = 1.440 eV nm, repulsion A/rⁿ with A = ke² r₀ⁿ⁻¹/n, so the minimum is at r₀ = 0.236 nm for every n and D = (ke²/r₀)(1 − 1/n) − ΔE. n = 19 reproduces 4.26 eV. The book gives no formula for the repulsion; ion polarization and the zero point energy are left out.
- **Covalent bond.** Morse U = D_e(1 − e^(−a(r − r_e)))² − D_e, with r_e and ωe from Huber and Herzberg and D_e = D₀ + G(0); a = 2πcωe√(μ/2D_e). The H₂ parallel spin curve is Sato's anti Morse form, a qualitative model.
- **Levels.** Book model: hf = G(1) − G(0) and ħ²/2I = B₀. Measured: G(v) with ωe xe (and higher terms for HCl), B_v = B_e − α_e(v + 1/2) + ..., centrifugal distortion D_v (measured for HCl and H₂, Kratzer's 4B³/ω² otherwise).
- **Spectrum.** H³⁵Cl constants from the NIST WebBook (Rank, Rao et al. 1965 higher terms); H³⁷Cl scaled by the reduced mass. They reproduce R(0) = 2906.25, P(1) = 2865.10 cm⁻¹ and the H³⁷Cl lines to 0.01 cm⁻¹. Strengths: Boltzmann population, Hönl–London factors, abundances 75.76 % and 24.24 %; no Herman–Wallis factor, hot band or pressure broadening. Gaussian lines as wide as the resolution.

## Going further

- Homework: from the H³⁵Cl and H³⁷Cl band centers, find the ratio of the reduced masses and compare it with the atomic masses.
- Pair with **Spectra** (atomic line spectra, for contrast with the closely spaced molecular lines) and **States of Matter** (bond energies in a crystal and a liquid).
