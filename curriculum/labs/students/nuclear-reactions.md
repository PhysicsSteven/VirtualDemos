# Nuclear Reactions: Balancing and Weighing
Student laboratory · Modern Physics

Textbook: OpenStax *University Physics*, Vol. 3, §§10.4, 10.5 and 10.6. Access for free at https://openstax.org/details/books/university-physics-volume-3.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/nuclear-reactions.html?setup=rxRuth)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Rutherford 1919; Fission of ²³⁵U (these two use the Reactions view, the subject of this worksheet); Bare ²³⁵U sphere; Generations (the Critical Size worksheet); The Sun's core; D–T reactor (the Fusion worksheet); ¹³⁷Cs source; ⁹⁹ᵐTc patient (the Radiation Dose worksheet).

**Using the demo.**

- The Reactions view is a scattering chamber seen from above. A projectile (n, p, d, t, ³He, α or γ) comes down the beam pipe and hits a target nucleus at rest; choose "none" for a nucleus that decays by itself. You choose the products: a light particle (and how many of them), a product nucleus, and if you like a second product nucleus. Famous reactions sets up well known ones.
- The panel checks the charge $$\Sigma Z$$ and the nucleon number $$\Sigma A$$ before and after, and shows the total mass before and after in atomic mass units (u). The masses are measured atomic masses (AME2020). Balance the first product nucleus fills in the nucleus that makes the reaction balance.
- Set the projectile's kinetic energy $$K$$ and press Fire. If energy can be conserved the reaction goes, and the products fly apart; otherwise there is no reaction. The detector at angle $$\theta$$ shows the kinetic energy of the light product when there are exactly two products.
- The bar graph is an energy account: $$K$$ before, $$Q$$, and the kinetic energy of the products after.
- Record reading stores the reaction, the masses before and after, $$K$$, the detector angle and energies, the total kinetic energy of the products and whether the reaction is allowed. Export to worksheet sends the readings to the Data table below; Clear starts a new series, which goes into a new copy of the table.
- Blind hides $$Q$$, the type of reaction and the threshold energy.

</details>

## Goal

Check that nuclear reactions conserve charge and nucleon number, find the energy released or absorbed from the masses of the nuclei, and measure the threshold energy of a reaction that absorbs energy.

## Background

A nuclear reaction conserves electric charge and the number of nucleons, so the totals of $$Z$$ and of $$A$$ are the same before and after (§10.4). It also conserves energy, counting the rest energy $$mc^2$$. The reaction energy

$$Q = \left(\sum m_\text{before} - \sum m_\text{after}\right)c^2$$

is the kinetic energy gained by the products: $$K_\text{after} = K_\text{before} + Q$$. With $$1\ \text{u} = 931.494\ \text{MeV}/c^2$$, a mass difference of 0.001 u is 0.931 MeV. A reaction with $$Q > 0$$ is exothermic: mass becomes kinetic energy, as in fission (§10.5) and fusion (§10.6). One with $$Q < 0$$ is endothermic: the projectile must bring the energy in. It cannot bring all of its kinetic energy, because momentum is conserved and the products must keep moving. For a projectile of mass $$m_a$$ on a target of mass $$m_A$$ at rest, the least kinetic energy that works is, to a good approximation,

$$K_\text{th} = -Q\left(1 + \frac{m_a}{m_A}\right).$$

Tables list the masses of neutral atoms, which include $$Z$$ electrons. When the charge balances, the electrons balance too, so their masses cancel in $$Q$$.

## Before the lab

1. Fill in the missing nucleus: (a) $$\alpha + {}^{9}\text{Be} \to n + \,?$$ (b) $$n + {}^{235}\text{U} \to {}^{140}\text{Xe} + \,? + 2n$$ (c) $${}^{239}\text{Pu} \to \alpha + \,?$$
2. Use the atomic masses $$m({}^{2}\text{H}) = 2.0141018$$ u, $$m({}^{3}\text{H}) = 3.0160493$$ u, $$m({}^{4}\text{He}) = 4.0026033$$ u and $$m(n) = 1.0086649$$ u to find $$Q$$ for D + T → ⁴He + n.
3. In $$\alpha + {}^{14}\text{N} \to p + {}^{17}\text{O}$$ the products are heavier than the reactants by 0.0012795 u. Find $$Q$$ and the threshold kinetic energy of the α particle.
4. Why does using atomic masses, which include the electrons, still give the right $$Q$$?

## Safety

No hazards in the virtual lab.

## Procedure

**Energy from mass.** For each of these reactions from the Famous reactions list, record a reading at the energy it is set to: Cockcroft and Walton, Chadwick, D–T fusion, both D–D reactions, the three splits of ²³⁵U, and the α decay of ²³⁹Pu.

**A threshold.** Pick the Rutherford 1919 setup and record a reading at 7.69 MeV. Then lower the projectile energy until the reaction no longer goes. Find the lowest energy at which it still goes, to 0.01 MeV, and record a reading there and one 0.01 MeV below. Do the same for p + ³H → n + ³He.

**Your own.** Build n + ¹⁴N → p + ? yourself (find the product nucleus by balancing Z and A), and record it with thermal neutrons ($$K = 0$$). Then build one reaction of your own choice that balances and record it.

## Data

| Reading | Reaction | Mass before (u) | Mass after (u) | Projectile K (MeV) | Products K (MeV) | Allowed? | Q from masses (MeV) | K after − K before (MeV) |
|---|---|---|---|---|---|---|---|---|
| | | | | | | | | |
| | | | | | | | | |
| | | | | | | | | |

The last two columns are yours: work out $$Q$$ from the masses, and the gain in kinetic energy from the demo's energies.

## Analysis

1. For each allowed reaction, compare $$Q$$ from the masses with the gain in kinetic energy. Do they agree?
2. Sort the reactions into exothermic and endothermic. For the exothermic ones, find the energy released per nucleon taking part, $$Q/\sum A_\text{before}$$. Which releases the most energy per nucleon, fusion or fission?
3. Compare your measured threshold for the Rutherford reaction with $$-Q(1 + m_a/m_A)$$. Do the same for p + ³H.
4. The three splits of ²³⁵U release different energies. Find their average and compare it with the 200 MeV per fission used in OpenStax Example 10.10.
5. For the ²³⁹Pu decay, the detector shows how the energy is shared between the α particle and the ²³⁵U nucleus. Show that momentum conservation predicts the α particle's share, $$m_U/(m_U + m_\alpha)$$.

## Uncertainty

The masses are shown to $$10^{-7}$$ u. How large an uncertainty does that give in $$Q$$? Your threshold is bracketed by two readings 0.01 MeV apart. Is the difference between your measured threshold and the formula larger than these uncertainties?

## Questions

1. The threshold of Rutherford's reaction is about 1.5 MeV, but the Coulomb barrier between an α particle and a nitrogen nucleus is about 4.2 MeV. Why did Rutherford's 7.69 MeV α particles make the reaction go readily, while α particles just above the threshold would hardly ever do so? Why does a neutron face no such barrier?
2. Why must the products of an endothermic reaction still be moving at the threshold?
3. A nucleus can decay by itself only if $$Q > 0$$. Why?
4. Four hydrogen atoms weigh 0.0287 u more than one helium atom. In the Sun the net reaction is $$4\,{}^{1}\text{H} \to {}^{4}\text{He} + 2e^{+} + 2\nu$$. Explain why the energy released, once the positrons have annihilated with electrons, is the full 26.7 MeV that this mass difference gives.

## What to hand in

Prelab answers, the data table with your two columns, the analysis with the threshold comparison, and answers to the questions. Identify simulated data.
