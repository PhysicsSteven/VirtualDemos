---
title: Hydrogen Orbitals
level: Modern physics
time: 20 to 30 minutes
---
## What students should come away with

- The electron in hydrogen has no orbit, only a probability cloud |ψ|². The states ψ = R_nl(r)Y_lm(θ, φ) are labeled by n, l and m, and the energy depends only on n: E_n = −13.6 eV/n².
- Density and radial probability are different things: |ψ|² for 1s is largest at the nucleus, but P(r) = r²|R|², the chance per unit radius, peaks at one Bohr radius a₀.
- Nodes come in two kinds: n − l − 1 radial nodes (spheres) and l angular nodes (planes or cones), n − 1 in all.
- l sets the size of the angular momentum, |L| = √(l(l + 1)) ħ. The familiar lobed shapes (p_x, d_xy, …) are real combinations of +m and −m with no definite L_z; the complex states have L_z = mħ.
- A superposition of two levels makes the cloud oscillate at f = ΔE/h. If the center of the charge moves (Δl = ±1), the atom radiates a photon of λ = hc/ΔE: this is where spectral lines come from.

## Before class

Students should have seen the Bohr model and its energies, and the idea that |ψ|² is a probability density. Each point in the **3D cloud** is one sampled position of the electron; the lower panel plots P(r) with ⟨r⟩, the Bohr radius n²a₀ and any radial nodes marked. Drag to orbit; **Slice** shows |ψ|² in a plane (**xz**, **xy** or **x = y**) with nodal lines dashed. The 3D view loads a graphics library from the web; the **Slice** view works without it.

## Running it in class

1. **1s.** Ask Q1 first. The cloud is densest at the center, yet P(r) peaks at 1.00 a₀, and ⟨r⟩ = 1.5 a₀.
2. **2s.** One radial node at 2.00 a₀; ψ changes sign across it (two colors). Turn on **Same n, other l** to overlay 2p on the P(r) plot, and ask Q4.
3. **2p_z.** Two lobes of opposite sign, the xy plane as nodal plane, most probable radius 4.00 a₀, |L| = √2 ħ. Switch **Orbital m** to **Complex** and pick m = +1 to show the doughnut with the phase winding once around z (Q7).
4. **3d_z².** Two lobes and a ring. Switch to **Slice**, plane **xz**, to see the two nodal cones as dashed lines at 54.7° from the z axis.
5. **4f_xyz.** Eight lobes in a 3D checkerboard. In **Slice**, the **xz** and **xy** planes are blank (they are nodal planes), and only **x = y** shows the lobes.
6. **1s + 2p_z.** The cloud sloshes along z every 0.406 fs; **Photon λ** reads 121.6 nm (Lyman α). Ask Q5. Then pick **B = 2s** in the superposition menu: the beat period is the same, but the center of the cloud stays put (Q6).

## Questions

**Q1.** Predict: in the hydrogen ground state, is the electron most likely to be found right at the nucleus, or at some distance from it? Before looking at the demo, decide what "most likely" should mean, and then compare the cloud with the P(r) plot.

**Q2.** For the 3d states (n = 3, l = 2), find the energy, the size of the angular momentum and the mean radius ⟨r⟩ = (a₀/2)[3n² − l(l + 1)] in a₀ and in nm. The radial probability is P(r) ∝ r⁶e^(−2r/3a₀); find its peak. Compare with the Bohr radius for n = 3, then check with **3d_z²**.

**Q3.** Predict the number of radial nodes and angular nodes for 3s, 3p, 3d and 4f. Check each one with the **Shell n and subshell l** buttons, and say where the radial nodes appear on the P(r) plot.

**Q4.** 2s and 2p have the same energy. Using **Same n, other l**, which has the larger mean radius? Which puts more probability very close to the nucleus? Explain how both can be true for the same state.

**Q5.** Find ΔE between 1s and 2p, the beat period h/ΔE in femtoseconds and the wavelength of the photon emitted. Use E_n = −13.6 eV/n², h = 4.136 × 10⁻¹⁵ eV·s and hc = 1240 eV·nm. Check with the **Superposition** readouts.

**Q6.** In the superposition 1s + 2s, the beat period is the same as for 1s + 2p_z, but the demo reports that the atom does not radiate. Explain why, using the shapes of the two states. What would you predict for 2p_z + 3d_z²? Check it.

**Q7.** The real 2p_x orbital has two lobes along x, while the complex 2p state with m = +1 looks like a doughnut around the z axis. Which of the two has a definite value of L_z, and what is it? How are the two states related?

## Common misconceptions

- **"The electron orbits the nucleus at the Bohr radius."** It has no path. a₀ is where P(r) peaks for 1s; the electron can be found at any r, with ⟨r⟩ = 1.5 a₀.
- **"The most likely place for the 1s electron is one Bohr radius away."** The most likely single point is the nucleus; the most likely radius, counting the whole shell of that radius, is a₀.
- **"How does the electron get from one lobe to the other across the node?"** The electron does not travel through the cloud. The state is one standing wave spread over both lobes, with zero amplitude on the node.
- **"p_x, p_y and p_z are the m = +1, −1 and 0 states."** Only p_z is (m = 0). p_x and p_y are real combinations of m = +1 and −1, with L_z = ±ħ equally likely.
- **"Higher l at the same n means a bigger orbital."** At fixed n, ⟨r⟩ = (a₀/2)[3n² − l(l + 1)] decreases slightly with l (2s: 6a₀; 2p: 5a₀).

## Physics behind the demo

- Exact solutions of the Schrödinger equation for one electron and a point nucleus: R_nl from associated Laguerre polynomials, Y_lm from associated Legendre functions with the Condon–Shortley phase. Spin, fine structure and the Lamb shift are left out.
- Distances use a₀ = 0.0529 nm for an infinitely heavy nucleus; energies use 13.598 eV, which includes the reduced mass correction.
- Cloud points are drawn exactly from |ψ|² (inverse sampling of P(r) and of the angular distribution). The slice colors show the sign of ψ for a real state, or its phase for a complex state or superposition.
- A superposition is (ψ_A e^(−iE_At/ħ) + ψ_B e^(−iE_Bt/ħ))/√2, evolved exactly. **Swing of ⟨r⟩** is the amplitude of the motion of the cloud's center, |⟨A|r|B⟩|, which is nonzero only when Δl = ±1 and Δm = 0, ±1. It is not the **Mean radius ⟨r⟩** readout, which is the average distance from the nucleus. **Photon λ** is hc/ΔE whether or not the pair can radiate.
- The Bohr circle on the plot is drawn at n²a₀ for comparison.

## Going further

- Homework: show that for the states with l = n − 1 (1s, 2p, 3d, 4f, …) P(r) ∝ r^(2n)e^(−2r/na₀) peaks exactly at n²a₀, the Bohr radius, while ⟨r⟩ is larger.
- Connect with **Spectra Explorer**: each downward transition there corresponds to a superposition here that radiates; set up 2p_z + 3d_z² here and find its line in the Balmer series.
