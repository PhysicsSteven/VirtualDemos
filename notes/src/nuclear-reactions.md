---
title: Nuclear Reactions, Fission and Fusion
level: Intro modern physics (nuclear reactions, fission, fusion, radiation dose)
time: 20 to 40 minutes
---
## What students should come away with

- A nuclear reaction conserves charge and nucleon number, and its energy comes from mass: Q = (Σm before − Σm after)c². Positive Q releases energy; negative Q needs a projectile above a threshold, which is more than |Q| because the products must keep moving.
- A chain reaction grows when each neutron leads to more than one new neutron (k > 1). In a lump of metal neutrons escape through the surface, so there is a critical size: about 8.3 cm and 45 kg for bare ²³⁵U in the demo's model.
- Fusion happens far below the Coulomb barrier because a few nuclei in the Maxwell–Boltzmann tail tunnel through it. The product of the two factors, the Gamow peak, sets the energy at which stars and reactors actually fuse.
- Absorbed dose is energy per kilogram (Gy); equivalent dose weights it by the kind of radiation (Sv). Distance (1/r²), shielding (e^(−μx)) and time are the three ways to cut it.

## Before class

Students should know E = mc², the atomic mass unit (931.5 MeV/c²), Z and A, and the idea of binding energy (§10.2). The demo has four views. **Reactions**: a scattering chamber where students choose a projectile, a target and the products; the panel checks ΣZ and ΣA, shows the masses (AME2020) and Q, and a detector at angle θ gives the energy of the light product. **Chain reaction**: generations with a chosen k and random numbers of neutrons per fission, or a Monte Carlo sphere of ²³⁵U or ²³⁹Pu where neutrons either cause fissions or escape. **Fusion**: the Coulomb barrier on log axes with the Gamow peak energy and the tunnel through the barrier, the Gamow peak itself, and ⟨σv⟩ against T for p + p and D + T. **Dose**: a γ source, a shield and a dose rate meter. It complements Binding Energy (where the energy comes from), Radioactive Decay (half lives) and Gamma Spectroscopy (detecting γ rays).

## Running it in class

1. **Rutherford 1919.** Ask Q1 first. Fire at 7.69 MeV, then lower K until the reaction stops (Q1). Switch to Fission of ²³⁵U and compare Q per nucleon with D–T fusion (Q2).
2. **Pick ²³⁹Pu α decay** from the Famous reactions list and read how the 5.24 MeV is shared (Q3). The Q of p + p (Q9) is a good follow up for the stronger students.
3. **Generations.** Run k = 0.95, 1.00 and 1.05; then start 10 neutrons at k = 1.00 a few times (Q4).
4. **Bare ²³⁵U sphere.** Run R = 8 cm, then 9 cm. Have the class bracket the critical radius by changing R (Q5).
5. **The Sun's core**, then **D–T reactor** (Q6, Q7).
6. **¹³⁷Cs source** and **⁹⁹ᵐTc patient** (Q8).

## Questions

**Q1.** In Rutherford's reaction α + ¹⁴N → p + ¹⁷O, the products are heavier than the reactants by 0.0012795 u. What is Q, and what is the least kinetic energy the α particle needs? Why more than |Q|?

**Q2.** Compare the energy released per nucleon in n + ²³⁵U → ¹⁴¹Ba + ⁹²Kr + 3n with that in D + T → ⁴He + n.

**Q3.** In the α decay of ²³⁹Pu (Q = 5.24 MeV), how much kinetic energy does the α particle carry, and why so much of it?

**Q4.** With k = 1.05, how many neutrons are there after 20 generations from 1000? Why does a chain started by 10 neutrons at k = 1.00 so often die out?

**Q5.** Where does the bare ²³⁵U sphere go critical in the demo, and what share of the neutrons escape there? How does that compare with a full calculation?

**Q6.** At the Sun's centre (1.57 × 10⁷ K), compare kT, the Gamow peak energy and the p + p barrier. What temperature would make kT equal to the barrier?

**Q7.** Why do fusion reactors burn D + T at about 1.5 × 10⁸ K rather than p + p at the Sun's temperature? Use ⟨σv⟩.

**Q8.** A 1 GBq ¹³⁷Cs source gives 83 µSv/h at 1 m. What does it give at 2 m, and behind how much lead is the 1 m reading halved? A visitor sits 1 m from a patient given 740 MBq of ⁹⁹ᵐTc for 8 hours: how does the dose compare with background?

**Q9.** OpenStax Example 10.11 finds 25.7 MeV for the Sun's net reaction 4 ¹H → ⁴He + 2e⁺ + 2ν. Four hydrogen atoms outweigh a helium atom by 0.028697 u, or 26.73 MeV. Which is the energy the Sun gets, and why?

## Common misconceptions

- **"Mass is converted to energy only in nuclear reactions."** Every exothermic reaction loses mass; in chemistry it is a billionth of the mass and too small to weigh.
- **"An endothermic reaction just needs a projectile with K = |Q|."** Momentum must be conserved, so the products keep moving and the threshold is larger: −Q(1 + m_a/m_A).
- **"Critical mass is a property of the material."** It depends on shape, density and surroundings: a reflector or compression lowers it.
- **"Fusion needs the nuclei to go over the Coulomb barrier."** Almost all fusions tunnel through it, at the Gamow peak far below its top.
- **"Gray and sievert are the same unit."** They are equal for γ rays, but 1 Gy of α particles is 20 Sv.

## Physics behind the demo

- **Masses.** AME2020 atomic mass excesses (the same table as Binding Energy); atomic masses make electrons cancel when the charge balances. Ground states only; electron binding energies (up to 0.8 MeV for uranium) stay in the atomic masses.
- **Kinematics.** Exact relativistic two body kinematics with the target at rest; the threshold K_th = −Q(Σm before + Σm after)/(2m_target).
- **Chain reaction.** Terrell's Gaussian distribution of ν (σ = 1.08), ν̄ = 2.4355 for thermal ²³⁵U. The sphere is a one speed Monte Carlo with Chadwick's (2021) ENDF/B-VIII.0 constants at 1.5 MeV, isotropic scattering, no capture, no reflector: a teaching model, which finds about 45 kg for ²³⁵U and 8.5 kg for α phase ²³⁹Pu against 46 kg and 10.2 kg from MCNP6.
- **Fusion.** E_G = 2μc²(παZ₁Z₂)², E₀ = (E_G(kT)²/4)^(1/3). p + p with a constant S factor 4.01 × 10⁻²⁵ MeV b; D + T from the Bosch–Hale fit. No electron screening.
- **Dose.** Narrow beam, no buildup, NIST μ/ρ and tissue μ_en/ρ, w_R = 1 for photons, the source decaying during the exposure.

## Going further

- Homework: from your critical radius, find how much smaller the critical mass becomes if the metal is compressed to twice its density (the critical radius scales as 1/ρ, so the mass as 1/ρ²).
- Pair with **Binding Energy** (why fission and fusion release energy), **Radioactive Decay** and **Gamma Spectroscopy** (detecting the γ rays the Dose view counts).
