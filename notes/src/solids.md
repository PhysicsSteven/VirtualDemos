---
title: Crystals, Bands and Semiconductors
level: Modern physics (condensed matter: ionic crystals, band theory, semiconductors and devices)
time: 20 to 40 minutes per view
---
## What students should come away with

- An ionic crystal holds together because each ion sits in the net field of all the others: the Coulomb energy per ion pair is −α ke²/r₀, and the Madelung constant α (1.7476 for NaCl) is a property of the geometry alone. The simple model U = α ke²/r₀ (1 − 1/n) gets the measured lattice energies to within about 5 %.
- Bands are what atomic levels become when N atoms share their electrons: each level splits into exactly N levels, spread over a width set by how much neighboring orbitals overlap. Counting electrons into those levels decides metal or insulator.
- In a semiconductor the carrier density is set by Boltzmann factors: n_i ∝ T^(3/2) e^(−E_g/2kT) for a pure crystal, so the band gap can be read from a graph; a part in fifty million of phosphorus fixes n at N_D over a wide range of temperature.
- A pn junction passes current one way because forward bias lowers the barrier by eV and the current grows by e^(eV/kT); an LED's photon energy is about the band gap.

## Before class

Students should have met Coulomb potential energy, the Boltzmann factor and the idea of energy levels in atoms. The demo has four views. **Crystal**: a salt crystal in 3D around a reference ion, with the Madelung sum added up by shells or by Evjen's neutral cubes, and the 20 alkali halides of the book's Table 9.2. **Bands**: a chain of N model atoms (tight binding, s and p levels) whose levels are drawn against the spacing and filled with electrons. **Doping**: silicon, germanium or gallium arsenide in a cryostat from 20 K to 800 K, with donors and acceptors in silicon, a band diagram and the carrier densities. **Junction**: an ideal silicon pn junction with a battery and an ammeter, its depletion region and band diagram, and an LED mode.

## Running it in class

1. **Rock salt.** Show the reference ion and its 6 nearest neighbors. Add shells one at a time (Q1): the total swings wildly. Switch to neutral cubes: 1.4560, 1.7518, 1.7470, 1.7477. Then compare 7.81 eV per ion pair (753 kJ/mol) with the table's 787 kJ/mol (Q2).
2. **Cesium chloride.** Eight nearest neighbors; α = 1.7627. Ask why most alkali halides still take the NaCl structure (Q3).
3. **Levels become bands.** Six atoms at 0.55 nm: six nearly equal levels. Squeeze them to 0.25 nm and watch each level fan out into six (Q4).
4. **Filling the bands.** Forty atoms, two electrons each: a filled s band with a gap of 1.69 eV. Squeeze to 0.24 nm and the bands overlap: a metal. One electron per atom: half filled, a metal at any spacing (Q5).
5. **Pure silicon.** Warm it from 300 K to 600 K: n rises by about 1.4 × 10⁵ (Q6).
6. **n type silicon.** At 300 K n ≈ 10¹⁵ cm⁻³, set by the phosphorus. Cool it to 40 K (freeze out) and heat it to 700 K (intrinsic) (Q7).
7. **Diode.** Step the bias from −1 V to 0.6 V; the current changes from −1 pA to over 10 mA. Show the straight line of ln I against V (Q8). **LED colors**: GaP gives 549 nm, green; GaAs 867 nm, infrared (Q9).

## Questions

**Q1.** The book writes the Madelung constant of NaCl as 6 − 12/√2 + 8/√3 − 6/2 + 24/√5 − ... Add the first three and the first five terms. Why does adding shells one at a time not settle on 1.7476, and what does the neutral cube method do differently?

**Q2.** For NaCl, r₀ = 0.282 nm and n = 8. Find the lattice energy in eV per ion pair and in kJ/mol from U = α ke²/r₀ (1 − 1/n), and compare with the measured 787 kJ/mol. What does the model leave out?

**Q3.** The CsCl structure has a larger Madelung constant (1.7627) than the NaCl structure (1.7476). Why, then, do NaCl, KCl and most other alkali halides take the NaCl structure?

**Q4.** In the demo's chain, the N levels from one atomic level are E_j = E₀ − 2t cos(jπ/(N + 1)). Show that two atoms give two levels split by 2t, and that a long chain fills a band of width 4t. Why does the band widen as the atoms move closer?

**Q5.** Sodium has one valence electron per atom and magnesium two. Use the filling of bands to explain why both are metals, while diamond, with a filled band, is an insulator.

**Q6.** For pure silicon with E_g = 1.12 eV, by what factor does n_i grow between 300 K and 600 K? Include the T^(3/2) of N_c and N_v.

**Q7.** Silicon doped with 10¹⁵ phosphorus atoms per cm³ has n ≈ 10¹⁵ cm⁻³ from about 100 K to about 500 K. Explain the plateau, the drop below it, and the rise above it. At about what temperature does n_i equal N_D?

**Q8.** A diode has I₀ = 1 pA at 300 K. Find the current at +0.5 V and at −0.5 V, and the ratio of the two. What is the slope of ln I against V, and how would you get e/k from it?

**Q9.** Which band gap gives red light at 650 nm and which blue at 450 nm? Why was the bright blue LED so much harder to make than the red?

## Common misconceptions

- **"The Madelung constant is a sum over nearest neighbors."** It counts every ion in the crystal; the nearest neighbors alone (6 for NaCl) overestimate it by more than three times, and the sum only settles when it is added up in neutral pieces.
- **"Electrons in a band all have the same energy."** A band is N closely spaced levels, and the Pauli principle puts at most two electrons in each.
- **"Metals conduct because they have more electrons."** Magnesium and a filled band insulator can have the same number of electrons per atom; what matters is whether the highest occupied band is full, with nowhere for an electron to go.
- **"Holes are missing atoms."** A hole is a missing electron in an otherwise full valence band; it moves like a positive charge.
- **"Doping adds a lot of impurity."** One part in fifty million changes the electron density by a factor of 100 000.
- **"A diode turns on at 0.7 V."** The current is exponential at every voltage; 0.7 V is only where it reaches milliamps for a typical silicon diode.

## Physics behind the demo

- **Crystal.** α by Ewald summation (1.747565 for NaCl, 1.762675 for CsCl). Shell sums use the exact counts of each shell. Evjen's neutral cube weights ions on faces, edges and corners by 1/2, 1/4 and 1/8. r₀ from room temperature lattice constants (Kittel Table 3.6; Wyckoff for the cesium salts); n is the average of Pauling's Born exponents for the two noble gas cores (He 5, Ne 7, Ar 9, Kr 10, Xe 12). Lattice energies from OpenStax Table 9.2. No van der Waals or zero point terms.
- **Bands.** Tight binding chain of N model atoms (E_s = −9 eV, E_p = −4 eV), nearest neighbor overlap t = t₀ e^(−(d − 0.25 nm)/λ) with t₀ = 1.0 eV (s), 1.4 eV (pσ), 0.35 eV (pπ), λ = 0.07 nm (s), 0.09 nm (p); no s and p mixing. Open chain levels E_j = E₀ − 2t cos(jπ/(N + 1)). The verdict uses the N → ∞ bands at T = 0.
- **Doping.** n = N_c e^(−(E_c − E_F)/kT), p = N_v e^(−(E_F − E_v)/kT), N_c and N_v from Sze and Ng (Si 2.8 and 2.65 × 10¹⁹, Ge 1.04 × 10¹⁹ and 6.0 × 10¹⁸, GaAs 4.7 × 10¹⁷ and 7.0 × 10¹⁸ cm⁻³ at 300 K) times (T/300)^(3/2); gaps held at 1.12, 0.66, 1.42 eV. Charge neutrality with partly ionized donors (degeneracy 2) and acceptors (4), solved for E_F by bisection. Impurity levels in silicon from Sze and Ng: P 0.045, As 0.054, Sb 0.039, B 0.045, Al 0.067, Ga 0.072 eV. Boltzmann statistics throughout (doping up to 10¹⁸ cm⁻³).
- **Junction.** Ideal diode I = I₀(e^(eV/kT) − 1) (Eq. 9.36), with I₀ = I₀(300 K) (T/300)³ e^(−E_g/k (1/T − 1/300)); no series resistance, no breakdown, no recombination current in the depletion region. Abrupt junction in the depletion approximation: V_bi = (kT/e) ln(N_A N_D/n_i²), W = √(2ε(V_bi − V)/e (1/N_A + 1/N_D)), ε = 11.9 ε₀. LED photon energy taken as E_g (Table 9.4; GaN 3.43 eV from Vurgaftman and coworkers 2001).
- **The book's Example 9.6** gives eV/kT = ln(2.05 × 10⁷) = 16.8 for 0.12 V, which is T = 83 K; the printed answer, 73 K, divides by 19 instead of 16.8.

## Going further

- Homework: derive A = α ke² r₀^(n−1)/n from dU/dr = 0 at r₀, and show the compressibility of the crystal fixes n.
- Pair with **Resistivity of a Wire** (free electron model and superconductivity, §9.4 and §9.8) and **Charges in Magnetic Fields** (its Hall effect panel, for the sign of the carriers).
