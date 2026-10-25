# Carriers in Pure and Doped Silicon
Student laboratory · Modern Physics

Textbook: OpenStax *University Physics*, Vol. 3, §§9.5 and 9.6. Access for free at https://openstax.org/details/books/university-physics-volume-3.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/solids.html?setup=dpIntr)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Pure silicon; n type silicon (these two use the Doping view, the subject of this worksheet); Rock salt; Cesium chloride (the Lattice energy worksheet); Levels become bands; Filling the bands (the Energy bands worksheet); Diode; LED colors (the pn junction worksheet).

**Using the demo.**

- A sample sits in a cryostat that holds it at any temperature from 20 K to 800 K. A Hall probe reads the density of conduction electrons $$n$$ and of holes $$p$$, in cm⁻³.
- Choose silicon, germanium or gallium arsenide. Silicon can be doped with donors (phosphorus, arsenic or antimony) and acceptors (boron, aluminum or gallium), each from 10¹¹ to 10¹⁸ cm⁻³; slide a density to its left end for none. Germanium and gallium arsenide are pure here.
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
4. Why would a slope of $$-E_g/2k$$, rather than $$-E_g/k$$, be expected?

## Safety

No hazards in the virtual lab.

## Procedure

**Pure silicon.** Pick Pure silicon. Record readings from 300 K to 700 K in steps of 50 K.

**n type silicon.** Clear the readings and pick n type silicon (phosphorus at 10¹⁵ cm⁻³). Record readings at 30, 40, 50, 60, 80, 100, 150, 200, 300, 400, 500, 550, 600, 650, 700 and 800 K.

**p type silicon.** Clear the readings. Remove the phosphorus, add boron at 10¹⁶ cm⁻³ and record readings at 200, 300 and 400 K.

## Data

| Reading | Sample | Temperature $$T$$ (K) | Electrons $$n$$ (cm⁻³) | Holes $$p$$ (cm⁻³) | 1/T (1/K) | ln(n / 1 cm⁻³) | ln n − 1.5 ln T |
|---|---|---|---|---|---|---|---|
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |

In the last column, take $$T$$ in kelvins.

## Analysis

1. For pure silicon, plot $$\ln n - 1.5\ln T$$ against $$1/T$$ and fit a straight line. Find $$E_g$$ from the slope.
2. Now plot $$\ln n$$ alone against $$1/T$$ and find $$E_g$$ the same way. Which value is closer to 1.12 eV, and why?
3. For the n type sample, sketch or plot $$\ln n$$ against $$T$$ and mark the freeze out, extrinsic and intrinsic regions. What is $$n$$ on the plateau, and near what temperature does the intrinsic density take over?
4. At the four lowest temperatures, plot $$\ln n$$ against $$1/T$$. In freeze out $$n$$ varies roughly as $$e^{-E_d/2kT}$$; estimate the donor binding energy $$E_d$$ and compare it with 0.045 eV.
5. For the p type readings, find $$np$$ at each temperature and compare it with your $$n_i^2$$ from pure silicon at the same temperature.

## Uncertainty

Give $$E_g$$ from Analysis 1 with the standard error from the fit. The model holds the gap at its 300 K value; in real silicon the gap shrinks slightly as the temperature rises, so a measurement on real silicon gives a gap extrapolated to 0 K, about 1.2 eV. Which way would that shift your slope?

## Questions

1. In pure silicon, why is the number of holes exactly equal to the number of conduction electrons?
2. Why does phosphorus act as a donor and boron as an acceptor?
3. One phosphorus atom per fifty million silicon atoms multiplies the number of electrons at room temperature by about 100 000. Explain.
4. Why must a silicon device be kept below the temperature where the intrinsic carriers take over?
5. A Hall voltage is measured across an n type strip and a p type strip carrying the same current in the same magnetic field. How do the two Hall voltages differ, and why (§9.6)?

## What to hand in

Prelab answers, the data tables with the graphs from Analysis 1 to 4, your band gap with its uncertainty, the estimate of $$E_d$$, the $$np$$ check, and answers to the questions. Identify simulated data.
