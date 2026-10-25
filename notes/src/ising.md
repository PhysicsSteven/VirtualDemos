---
title: Ising Model
level: Thermal physics and statistical mechanics (upper level); intro thermodynamics (qualitative)
time: 20 to 40 minutes
---
## What students should come away with

- Order can appear on its own. Each spin feels only its four neighbors, yet below T_c = 2/ln(1 + √2) ≈ 2.269 J/k_B the whole lattice picks one direction with no field to choose it: spontaneous symmetry breaking.
- The transition is a contest between energy and entropy, F = E − TS. At low T aligned states win because they cost little energy; at high T the vast number of mixed states wins.
- At T_c fluctuations happen on every length scale: domains of all sizes, and the heat capacity and susceptibility peak. Only an infinite lattice has a true singularity; a finite one rounds and shifts the peaks.
- Monte Carlo samples states with Boltzmann weight e^(−E/T) by a rule obeying detailed balance. Averages are physical, sweep "time" is not, and errors must allow for correlated samples, worst near T_c (critical slowing down).
- A hysteresis loop is not equilibrium behavior: it comes from metastable states that last until a domain of the other sign nucleates.

## Before class

Students should know the Boltzmann factor; for the upper level version, also C = (⟨E²⟩ − ⟨E⟩²)/(k_B T²). Units: J = 1, k_B = 1, so T is in J/k_B and e is the energy per spin in units of J. Drag the thermometer beside the lattice to change T, the bar below it to change h, and drag on the lattice to paint spins. **Blind** hides every exact result if students should find T_c themselves. A 64 × 64 **Scan T** takes under a minute. The page opens on **Near T_c in a field** (T_c, h = −0.2, Metropolis): the field picks down, so the lattice is calm, mostly navy; **Set h = 0** under the field slider removes it.

## Running it in class

1. **Hot: paramagnet.** Small patches form and dissolve, and m wanders near zero. Point out that e is about −0.56, not 0 (Q4). Then drag the thermometer slowly down past T_c and let the class watch one color take over.
2. **Cold: one domain.** One domain fills the lattice and single spins blink. Do Q2 here with the **Flipped per sweep** readout. m(t) sits on the dashed Onsager line at 0.986.
3. **At Tc: fractal domains.** Exactly at T_c, Wolff updates. Domains of every size sit inside each other. Tick **Show the last Wolff cluster** to show what one update flips.
4. **Quench and coarsen.** Ask Q1 first. From the infinite temperature state at T = 1.2, domains grow slowly and their walls straighten.
5. **Measure.** Set L = 64, T = 2.0, Metropolis, and press **Measure at this T** (Q3). Then **Scan T** at L = 32 and at L = 64 and open the **T scan** tab: the points follow the dashed exact curves for each size, and the peaks grow and sharpen with L (Q5). At T_c, compare Metropolis with Wolff (Q6).
6. **Hysteresis.** Ask Q7 first. The **m against h** tab draws the loop; at 0.0005 per sweep it narrows.
7. **Antiferromagnet** (if time allows). With J = −1 the order is a checkerboard; m_s follows the same Onsager curve as m.

## Questions

**Q1.** Predict: the **Quench and coarsen** setup starts from a random lattice (infinite temperature) and holds it at T = 1.2 on a 256 × 256 lattice. Will it become a single domain within 1000 sweeps? Sketch what you expect m(t) to do.

**Q2.** In **Cold: one domain** (T = 1.5, h = 0), consider a spin whose four neighbors all point the same way it does. How much energy does flipping it cost, and with what probability does a Metropolis step flip it? The **Flipped per sweep** readout shows about 1.3 %, nearly three times your answer. Why is the readout larger?

**Q3.** Use Yang's exact result m = (1 − sinh⁻⁴(2/T))^(1/8) to find the spontaneous magnetization at T = 2.0. Then measure ⟨|m|⟩ at T = 2.0 on a 64 × 64 lattice with Metropolis and compare. Why does the demo average |m| rather than m?

**Q4.** In **Hot: paramagnet** (T = 4) the magnetization is near zero, but the energy per spin is about −0.557, not 0. What does this tell you about neighboring spins? What fraction of nearest neighbor pairs agree?

**Q5.** The exact heat capacity of a finite L × L lattice peaks at c = 1.905 near T = 2.294 for L = 32, and at c = 2.252 near T = 2.282 for L = 64. For the infinite lattice c diverges as −(8/(πT_c²)) ln|1 − T/T_c|, so the finite size peak grows by a fixed amount each time L doubles. Find that amount and predict the peak for L = 128 and L = 256. Where is the peak heading?

**Q6.** At T_c on a 64 × 64 lattice, measure with Metropolis (1000 sweeps discarded, 5000 averaged), then with Wolff. Compare τ_int, the error bars and c with the exact L = 64 value shown. Which reading would you trust, and why does Metropolis struggle here?

**Q7.** Predict: in **Hysteresis** the lattice switches near h = ∓0.5 when h changes by 0.002 per sweep. If the sweep is four times slower, will it switch at a larger field, a smaller one, or the same one? Is the switching field an equilibrium property of the magnet?

## Common misconceptions

- **"Something has to line the spins up."** With h = 0 nothing favors up over down. Below T_c the lattice picks one direction at random; that is what spontaneous means.
- **"Above T_c the spins are completely random."** Neighbors still agree more often than not (64 % of pairs at T = 4); only the long range order is gone.
- **"The demo shows a sharp transition at 2.269."** A finite lattice has no singularity: the peaks in c and χ are rounded and sit slightly above T_c, closer as L grows.
- **"A sweep is a unit of real time."** Sweeps count attempted spin updates; the rate is not physical, and a Wolff sweep has no dynamical meaning at all.

## Physics behind the demo

- Model: an L × L square lattice (L = 32 to 256), periodic edges, H = −J Σ s_i s_j − h Σ s_i over nearest neighbor pairs, s_i = ±1, J = ±1, k_B = 1.
- Updates, each obeying detailed balance: Metropolis picks sites at random and flips with probability min(1, e^(−ΔE/T)), ΔE = 2s(JS + h), S the sum of the four neighbors. Heat bath sets a spin up with probability 1/(1 + e^(−2(JS + h)/T)), visiting even sites, then odd ones. Wolff (h = 0) flips a cluster grown through agreeing bonds with probability 1 − e^(−2|J|/T). A sweep is N single spin steps, or for Wolff a fixed number of clusters flipping about N spins. A seed reproduces a run.
- Exact curves, h = 0: T_c = 2/ln(1 + √2); m = (1 − sinh⁻⁴(2/T))^(1/8) (Yang); Onsager's e and c, through complete elliptic integrals, for the infinite lattice; dashed, Kaufman's exact e and c for the finite lattice. No exact χ is known. With J = −1 the same curves hold for m_s.
- Errors: ⟨|m|⟩ and ⟨e⟩ by blocking; c = N(⟨e²⟩ − ⟨e⟩²)/T² and χ = N(⟨m²⟩ − ⟨|m|⟩²)/T by jackknife over 20 blocks; readings with too few independent samples are flagged. No error analysis sees states a run never visits (below T_c with h ≠ 0 the reversed state may never be reached). Using ⟨|m|⟩ makes χ smaller than N⟨m²⟩/T above T_c by the factor 1 − 2/π.
