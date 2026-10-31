---
title: Quantum Wave Packets
level: Modern physics
time: 20 to 35 minutes
---
## What students should come away with

- A localized electron is a wave packet, a superposition of wavelengths. It satisfies Δx·Δp ≥ ħ/2; a Gaussian packet starts at the minimum, and a free packet spreads because its momentum components travel at different speeds while Δp stays fixed.
- At a step or barrier the wave splits into reflected and transmitted parts. A quantum electron can reflect when E > V₀ and can tunnel through when E < V₀; tunneling falls off roughly as e^(−2κa).
- R and T are probabilities. Each detection finds the electron in one place; the pattern |ψ|² only shows up over many identically prepared electrons.
- Confinement gives discrete energies. An energy eigenstate is stationary (only its phase turns); a superposition of two levels sloshes with period h/ΔE.

## Before class

Students should know the de Broglie relation p = h/λ, E = p²/2m for a free particle and the idea that |ψ|² is a probability density. Units are nm, eV and fs, with ħ²/2m = 0.0381 eV·nm² for the electron and h = 4.136 eV·fs. The top panel shows V(x), ⟨E⟩ and the levels; the lower panel shows |ψ|² colored by the phase of ψ, and its **3D** switch draws ψ itself as a ribbon around the x axis (Re ψ up, Im ψ toward the viewer), so a moving packet is a helix whose turns are the de Broglie wavelength and an eigenstate is a shape that only turns. Use **¼×** speed and **Pause** at the key moments.

## Running it in class

1. **Free particle.** Watch Δx grow while Δp stays at 196 eV/c; the uncertainty product starts at 0.506 ħ. The readouts describe only the part still in view, so pause before the packet reaches the right edge (after that, its leading part is being absorbed and Δp and ⟨p⟩ drift down).
2. **Step.** Ask Q1 first. E₀ = 0.6 eV over a 0.4 eV step: about 9% reflects. Then drag E₀ below 0.4 eV and relaunch: everything comes back, after a brief dip into the step.
3. **Barrier.** ⟨E⟩ = 0.30 eV, V₀ = 0.5 eV, a = 0.5 nm: once the packet splits, T ≈ 33%. Then set **Barrier width a** to 1.00 nm (Q3).
4. **Square well.** With **Walls** on **Infinite**, it starts in the superposition of n = 1 and n = 2, sloshing with the 3.67 fs beat. Click the **n=2** level chip to drop it, leaving n = 1 alone: |ψ|² freezes and only the color turns (Q5). Click **n=2** again to bring the sloshing back.
5. **Measure x.** In the well, press **Pause** and then **Measure x** twice; press **Play** and measure again. Press **Reset** to return to the prepared state, then **Measure 200 copies**, and let the histogram build up |ψ|² (Q7).
6. **Oscillator** and **Double well**. The oscillator's levels are evenly spaced, and its coherent state swings without spreading. In the double well the electron tunnels from one well to the other and back every 290 fs.
7. **2D wells** (upper level; switch with **1D packets | 2D wells** above the setups). **Square box** opens in (1,1) with (2,1): the lump sloshes side to side every 14.66 fs, while (1,2) sits at the same 0.4700 eV as (2,1). **Round box** mixes m = 0 and m = 1, so the lump goes round the wall every 17.57 fs and ⟨Lz⟩ reads 0.500 ħ. **Light drives a transition** shows Rabi oscillation: 0.03 V/nm along x at 0.2820 eV takes (1,1) fully to (2,1) and back in 383 fs; switch the light to **along y** and nothing happens (Q8). **Selection rule** puts the oscillator's ground state in light at 2ħω, which it cannot absorb.

## Questions

**Q1.** Predict: an electron with 0.6 eV of kinetic energy meets a step up of 0.4 eV. A classical particle would always continue, slower. Will the quantum electron always continue? What changes if its energy is below 0.4 eV?

**Q2.** For a plane wave of energy E = 0.6 eV at a step of V₀ = 0.4 eV, the reflection probability is R = ((k₁ − k₂)/(k₁ + k₂))², with k ∝ √(E − V) on each side. Find R. In **Step** the packet's simulated R comes out a little larger. Why does a packet with the same mean energy reflect more than the plane wave does?

**Q3.** In **Barrier** (V₀ = 0.5 eV, a = 0.5 nm, E = 0.3 eV), find the decay constant κ = √(2m(V₀ − E))/ħ inside the barrier and κa. Predict: if the barrier width is doubled to 1.0 nm, will T be about half as large, or much smaller than that? Check with **Plane wave T(E₀)**.

**Q4.** An electron is in an infinite well of width L = 1.00 nm. Find E₁ and E₂ from E_n = n²π²ħ²/(2mL²), and the period with which the superposition of n = 1 and n = 2 sloshes back and forth. Check with the table and the **Beat period** readout in **Square well**.

**Q5.** In an energy eigenstate, ψ keeps changing (the colors cycle), yet nothing you could measure about position changes. Explain why. Why does a superposition of two eigenstates move, and why does its period depend only on the difference of the two energies?

**Q6.** In **Free particle**, Δx grows steadily while Δp does not change. Explain the spreading using the momentum components of the packet. In **Barrier**, after the split, the readout shows Δx·Δp near 50 ħ. Does that violate the uncertainty principle? What does it tell you about the state?

**Q7.** Pause the motion, press **Measure x** on a state in the well, then press it again. Then try the same with the motion running. Compare the two results with each other, and with what **Measure 200 copies** shows. What does one measurement tell you about |ψ|², and what do 200 copies tell you?

**Q8.** (Upper level.) In **Light drives a transition**, light polarized along x at 0.2820 eV moves the electron from (1,1) to (2,1) and back. Using ⟨m|x|n⟩ for a 1D box, explain why x polarized light can reach (2,1) but not (1,2), although both have the same energy, and why it can never reach (3,1). Predict the Rabi period for ℰ = 0.03 V/nm and check it with the readout.

## Common misconceptions

- **"Reflection only happens when E < V₀."** Waves reflect at any sudden change in potential; at a step, E > V₀ still gives R > 0.
- **"A tunneling electron loses energy inside the barrier."** The transmitted packet has the same energy as the incident one; its wavelength on the far side is unchanged. Only the amplitude is reduced.
- **"T = 33% means a third of the electron gets through."** Each electron is detected whole on one side; T is a probability.
- **"The packet spreads because Δp grows."** Δp is constant for a free particle; the components with larger p simply outrun the slower ones.
- **"A stationary state is an electron at rest."** It has a definite energy and an unchanging |ψ|²; its momentum is equally likely to be +p or −p.

## Physics behind the demo

- The time dependent Schrödinger equation for an electron in one dimension, solved with Crank–Nicolson steps on a uniform grid (25 pm spacing in the scattering setups).
- Scattering setups have absorbing layers just beyond the view; probability absorbed there is counted in R or T, so **Total probability** stays 1. All other readouts (⟨x⟩, Δx, ⟨p⟩, Δp, ⟨E⟩) use only the part still on the grid.
- The launched packet is ψ ∝ exp(−(x − x₀)²/4σ² + ik₀x), with Δx = σ and Δp = ħ/2σ at launch. **Plane wave T(E₀)** comes from transfer matrices (for the single barrier, T = [1 + V₀² sinh²(κa)/4E(V₀ − E)]⁻¹); **T averaged over packet** averages T(E) over the packet's spread of k.
- Wells have hard walls at the edges of the grid. Their levels come from diagonalizing the same finite difference Hamiltonian, which is why the infinite well and oscillator tables agree with n²π²ħ²/2mL² and (n + ½)ħω to three or four decimals rather than exactly.
- **Measure x** draws one position from |ψ|² and replaces ψ with a narrow packet there, with zero mean momentum, to stand in for a detector of finite resolution. **Measure 200 copies** samples 200 positions without disturbing ψ.

- **2D wells** use exact states: the box's sin(nxπ…)sin(nyπ…), the round box's J_m(j r/R) e^(imφ) (Bessel zeros j found numerically to 1e−12), the oscillator's Hermite functions, and for the lattice products of the states of one row of wells (the 1D solver above on a 0.01 nm grid; V(x) + V(y) separates exactly). Without light each cₙ turns as e^(−iEₙt/ħ). With light the electron feels eℰx cos ωt, and the coefficients of the 35 or 36 lowest states are stepped by fourth order Runge–Kutta (step below ħ/20E_top), so the Rabi period comes out within a percent of the two level value h/(eℰ|⟨f|x|i⟩|). Left out and said on the page: spontaneous emission, the light's magnetic field, and its variation across the well (dipole approximation).

## Going further

- Homework: in **Barrier** with **Barriers** set to **Two**, one barrier alone transmits 23% at E₀ = 0.0774 eV, but the pair transmits 100% for a plane wave. Explain the resonance as a standing wave between the barriers, and explain why the packet's T (about 64%) is lower.
