# Carriers in Pure and Doped Silicon
Student laboratory · Modern Physics

Textbook: OpenStax *University Physics*, Vol. 3, §§9.5 and 9.6. Access for free at https://openstax.org/details/books/university-physics-volume-3.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/solids.html?setup=dpIntr)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Pure silicon; n type silicon (these two use the Doping view, the subject of this worksheet); Rock salt; Cesium chloride (the Lattice energy worksheet); Levels become bands; Filling the bands (the Energy bands worksheet); Diode; LED colors (the pn junction worksheet).

**Using the demo.**

- A sample sits in a cryostat that holds it at any temperature from 20 K to 800 K. A Hall probe reads the density of conduction electrons $$n$$ and of holes $$p$$, in cm⁻³.
- Choose silicon, germanium or gallium arsenide. Silicon can be doped with donors (phosphorus, arsenic or antimony) and acceptors (boron, aluminum or gallium), each from 3.2 × 10¹¹ to 10¹⁸ cm⁻³ in half decade steps; slide a density to its left end, where it reads none, for no dopant of that kind. Germanium and gallium arsenide are pure here.
- The band diagram shows the conduction and valence bands, the donor and acceptor levels and the Fermi level. Its dots show the electrons and holes on a scale given at the top, the same for both.
- The graphs show $$n$$ (solid) and $$p$$ (dashed) against temperature on a log scale, with your recorded readings as dots, and the Fermi level against temperature.
- Record reading stores the sample, the temperature and the Hall readings of $$n$$ and $$p$$. Export to worksheet sends the readings to the Data table below; Clear starts a new series, which goes into a new copy of the table.
- Blind hides the curves, the intrinsic density, the Fermi level and the name of the region.

</details>

## Goal

Measure how the number of charge carriers in silicon depends on temperature, find the band gap from pure silicon, and see how a tiny amount of phosphorus changes everything.

## Background

In a pure (intrinsic) semiconductor at $$T = 0$$ the valence band is full and the conduction band empty. Heat lifts a few electrons across the gap $$E_g$$, each leaving a hole behind, so $$n = p = n_i$$ (§9.6). The number lifted depends on the Boltzmann factor for half the gap:

$$n_i = \sqrt{N_c N_v}\; e^{-E_g/2kT},$$

where $$N_c$$ and $$N_v$$, the effective densities of states of the two bands, both grow as $$T^{3/2}$$. So

$$\ln n_i - \tfrac{3}{2}\ln T = \text{constant} - \frac{E_g}{2k}\,\frac{1}{T},$$

and a graph of the left side against $$1/T$$ is a straight line of slope $$-E_g/2k$$, with $$k = 8.617 \times 10^{-5}$$ eV/K.

A phosphorus atom has five valence electrons, one more than silicon. The extra electron is bound only weakly, 0.045 eV below the conduction band, and at room temperature almost every donor gives it up, so $$n \approx N_D$$ (§9.6). At low temperature the donors keep their electrons (freeze out); at high temperature $$n_i$$ grows larger than $$N_D$$ and the sample behaves as if it were pure again. At any temperature, $$np = n_i^2$$.

## Before the lab

1. Silicon has $$5.0 \times 10^{22}$$ atoms per cm³. At 300 K, $$n_i \approx 1 \times 10^{10}$$ cm⁻³. What fraction of the atoms has given up an electron?
2. Phosphorus is added at $$1 \times 10^{15}$$ cm⁻³. One phosphorus atom for how many silicon atoms? What is $$n$$ at 300 K, and what is $$p$$?
3. By what factor should $$n_i$$ change between 300 K and 600 K if $$E_g = 1.12$$ eV? Include the $$T^{3/2}$$.
4. From 300 K to 400 K the electron density in pure silicon rises by a factor of a few hundred. Now take the n type sample, with phosphorus at 10¹⁵ cm⁻³, over the same 100 K. Does its $$n$$ rise by a similar factor, by a factor of a few, or stay about the same? Commit to one, with a reason.

## Safety

No hazards in the virtual lab.

## Procedure

**Pure silicon.** Press the Pure silicon setup. Set the Temperature T slider (it moves in 5 K steps) to 300, 350, 400, 450, 500, 550, 600, 650 and 700 K and press Record reading (under Readings) at each. Press Export to worksheet.

**n type silicon.** Press Clear (under Readings), then the n type silicon setup (phosphorus at 10¹⁵ cm⁻³). Set Temperature T and press Record reading at 30, 40, 50, 60, 80, 100, 200, 300, 400, 500, 600, 700 and 800 K. Press Export to worksheet; the run goes into a new copy of the table.

**p type silicon.** Press Clear. Slide Donors N<sub>D</sub> to its left end, where it reads none, leave Acceptor atom on boron (B) and set Acceptors N<sub>A</sub> to 10¹⁶ cm⁻³. Record readings at 200, 300 and 400 K, then press Export to worksheet.

## Data

| Reading | Sample | Temperature $$T$$ (K) | Electrons $$n$$ (cm⁻³) | Holes $$p$$ (cm⁻³) | 1/T (1/K) | ln(n / 1 cm⁻³) | ln n − 1.5 ln T |
|---|---|---|---|---|---|---|---|
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |

In the last column, take $$T$$ in kelvins.

## Analysis

1. Fill in the last three columns for every reading. For pure silicon, plot $$\ln n - 1.5\ln T$$ against $$1/T$$ and fit a straight line. Find $$E_g$$ from the slope. Then fit $$\ln n$$ alone against $$1/T$$ the same way: which value of $$E_g$$ is closer to 1.12 eV, and why?
2. For the n type sample, sketch or plot $$\ln n$$ (vertical) against $$T$$ (horizontal) and mark the freeze out, extrinsic and intrinsic regions. Near what temperature does the intrinsic density take over?
3. For the n type readings at 30, 40, 50 and 60 K, plot $$\ln n$$ against $$1/T$$ and fit a straight line. In freeze out $$n$$ varies roughly as $$e^{-E_d/2kT}$$; estimate the donor binding energy $$E_d$$ and compare it with 0.045 eV.
4. For the p type readings, find $$np$$ at each temperature and compare it with your $$n_i^2$$ from pure silicon at the same temperature (at 200 K, extrapolate your Analysis 1 line).

## Uncertainty

Give $$E_g$$ from Analysis 1 with the standard error from the fit. The model holds the gap at its 300 K value; in real silicon the gap shrinks slightly as the temperature rises, so a measurement on real silicon gives a gap extrapolated to 0 K, about 1.2 eV. Which way would that shift your slope?

## Questions

1. A Hall voltage is measured across an n type strip and a p type strip carrying the same current in the same magnetic field. How do the two Hall voltages differ, and why (§9.6)?
2. Before the lab 4 is settled by your 300 K and 400 K readings. By what factor did $$n$$ grow in pure silicon, and by what factor in the n type sample? What is $$n$$ on the n type plateau? Explain the difference from where the n type sample's electrons come from, and say what happened to its holes over the same 100 K, and why.

## What to hand in

Prelab answers, the data tables with the graphs from Analysis 1 to 3, your band gap with its uncertainty, the estimate of $$E_d$$, the $$np$$ check, and answers to the questions. Identify simulated data.
