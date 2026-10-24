# Conservation Laws for Particle Reactions
Student laboratory · Modern Physics

Textbook: OpenStax *University Physics*, Vol. 3, §§11.1, 11.2, 11.4 and 11.5. Access for free at https://openstax.org/details/books/university-physics-volume-3.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/particles.html?setup=beta)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Neutron decay; Making strange particles; Making an upsilon (these three use the Reactions view, the subject of this worksheet); Standard Model (the Particles view, with the properties of every particle); A proton from quarks; Omega minus (the Quark model worksheet); A Λ decay (practice); Mystery V events (the Invariant mass worksheet).

**Using the demo.**

- Choose Before or After, then add particles from the palette; × removes one. One particle on the Before side is a decay at rest; two are a collision. The Examples list holds the book's Examples 11.1 to 11.3 and 11.7 and more.
- For a collision, choose a beam on a target at rest (set the beam's kinetic energy K) or two beams meeting head on (set the energy of each beam). Type a value for exact energies. Set to threshold puts in the least energy that makes the products.
- The table adds up charge, baryon number, the three lepton numbers, strangeness and the number of particles with half integer spin on each side, and compares the energy available in the centre of mass frame, W, with the rest energy of the products.
- The verdict says whether the reaction is allowed and, if it is, which interaction can make it happen and why; or which laws it breaks.
- My prediction stores your guess (strong, electromagnetic, weak or forbidden) with each reading.
- Record reading stores the reaction, the energy, each conserved number before and after, the energy to spare, your prediction and the verdict. Export to worksheet sends the readings to the Data table below; Clear starts a new series, which goes into a new copy of the table.
- Blind hides the totals, the threshold and the verdict, so you can predict first.

</details>

## Goal

Test proposed decays and collisions against the conservation laws of particle physics, decide which of the strong, electromagnetic and weak interactions could make each one happen, and find the threshold energy for making new particles.

## Background

Every reaction conserves energy, momentum, angular momentum and charge. Particle reactions also conserve **baryon number** $$B$$ (+1 for each baryon, −1 for each antibaryon) and, separately, the three **lepton numbers** $$L_e$$, $$L_\mu$$ and $$L_\tau$$ (+1 for each lepton of that family and its neutrino, −1 for their antiparticles) (§11.2, Table 11.2). **Strangeness** $$S$$ is kept by the strong and electromagnetic interactions but can change by one unit in a weak interaction.

Which interaction acts tells you how fast a decay goes: strong decays take about 10⁻²³ s, electromagnetic ones (with a photon) about 10⁻²⁰ to 10⁻¹⁶ s, and weak ones (with a neutrino, or a change of quark flavour) 10⁻¹³ s or longer (§11.1, §11.5).

A decay at rest needs the parent's rest energy to be at least the total rest energy of the products. In a collision, only the energy in the centre of mass frame, $$W$$, can make new particles. For a beam of kinetic energy $$K$$ and mass $$m_1$$ on a target of mass $$m_2$$ at rest,

$$W^2 = m_1^2c^4 + m_2^2c^4 + 2(K + m_1c^2)\,m_2c^2,$$

and for two beams of equal energy meeting head on, $$W$$ is the sum of the two beam energies (§11.4, Eq. 11.3, Example 11.7). The **threshold** is the beam energy at which $$W$$ just equals the total rest energy of the products.

## Before the lab

1. Check charge, baryon number and the lepton numbers for n → p + e⁻ + ν̄_e. Why is the antineutrino needed?
2. Which conservation law forbids p → e⁺ + π⁰? Which forbids p → n + e⁺ + ν_e for a free proton?
3. The Λ⁰ (strangeness −1) decays to p + π⁻. Which interaction must do this, and why?
4. Show that the threshold kinetic energy for p + p → p + p + p + p̄ on a target at rest is $$6m_pc^2$$. How much energy would each beam need if two protons collided head on?

## Safety

No hazards in the virtual lab.

## Procedure

**Predict first.** Turn on Blind. For each reaction below, build it (or pick it from the Examples), choose your prediction, and record a reading. Then turn Blind off and read the verdict.

- The book's Examples 11.1a, 11.1b, 11.2a, 11.2b, 11.3a and 11.3b, with the beam energies the Examples list gives.
- π⁰ → γ + γ; Σ⁰ → Λ⁰ + γ; Δ⁺⁺ → p + π⁺; Λ⁰ → p + π⁻; Ω⁻ → Λ⁰ + K⁻; Ξ⁻ → n + π⁻.
- μ⁻ → e⁻ + ν̄_e + ν_μ; μ⁻ → e⁻ + γ; π⁺ → μ⁺ + ν_μ; p → e⁺ + π⁰; p → n + e⁺ + ν_e.

**Thresholds.** Clear the readings. With Blind on, find the threshold for p + p → p + p + π⁰ on a target at rest by typing beam energies until the reaction is just allowed, to within 0.1 MeV. Record a reading just below and just above. Do the same for p + p → p + p + p + p̄, to within 1 MeV. Then switch to colliding beams and find the threshold energy per beam for p + p → p + p + p + p̄.

**An upsilon.** Pick Making an upsilon (Example 11.7). Record a reading at the threshold, then at 5.20 GeV and 5.40 GeV per beam.

## Data

| Reading | Reaction | Beam | Charge Q before → after | Baryon number B | $$L_e$$ | $$L_\mu$$ | $$L_\tau$$ | Strangeness S | Energy to spare (MeV) | My prediction | Verdict |
|---|---|---|---|---|---|---|---|---|---|---|---|
| | | | | | | | | | | | |
| | | | | | | | | | | | |
| | | | | | | | | | | | |

The Beam column gives the beam energy for a collision. The energy to spare is $$W$$ minus the total rest energy after the reaction; it is negative when there is not enough energy.

## Analysis

1. For each reaction in the first table, compare your prediction with the verdict. For those that are forbidden, say which laws each one breaks.
2. Sort the allowed decays into strong, electromagnetic and weak. Look up their mean lives in the Particles view and check that each group falls in the time range given in the Background.
3. Which reactions change strangeness? Which interaction made each of them, and by how much did S change?
4. Compare your measured thresholds for p + p → p + p + π⁰ and p + p → p + p + p + p̄ with the formula in the Background.
5. For making antiprotons, find the ratio of the total beam energy needed with a fixed target to the total needed with colliding beams. Why are new particles searched for with colliders?
6. The ϒ(4S) has a width of 20.5 MeV (PDG 2024): its mass energy is spread over about that range. Explain why it is made only when each beam is tuned to within about 10 MeV of 5.29 GeV.

## Uncertainty

You found each threshold by trying beam energies. Give each threshold as a range, from the highest energy that failed to the lowest that worked. Does the formula's value fall inside each range?

## Questions

1. Why is the proton stable, while the neutron decays?
2. The neutrino in neutron decay was predicted by Pauli before anyone detected it. Which conservation laws would neutron decay break without it?
3. Why can't a photon on its own turn into an electron and a positron in empty space, even if it has more than 1.022 MeV?
4. The weak interaction is the only one that changes the flavour of a quark. How does that explain why strange particles live so long?
5. Why does it take more than 6 GeV of beam energy to make an antiproton, which has a rest energy of less than 1 GeV?

## What to hand in

Prelab answers, the data table copies with your predictions and the verdicts, the threshold ranges, and answers to the questions. Identify simulated data.
