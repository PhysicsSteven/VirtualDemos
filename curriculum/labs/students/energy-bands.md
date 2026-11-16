# Energy Bands in a Chain of Atoms
Student laboratory · Modern Physics

Textbook: OpenStax *University Physics*, Vol. 3, §9.5. Access for free at https://openstax.org/details/books/university-physics-volume-3.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/solids.html?setup=bdForm)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Levels become bands; Filling the bands; Periodic potential; Deep wells, narrow bands (these four use the Bands view, the subject of this worksheet); Rock salt; Cesium chloride (the Lattice energy worksheet); Pure silicon; n type silicon (the Doping worksheet); Diode; LED colors (the pn junction worksheet).

**Using the demo.**

- The Bands view puts N model atoms, from 1 to 40, in a straight chain with spacing d from 0.20 nm to 0.60 nm. Each model atom has one s level at −9 eV and three p levels at −4 eV. It is a made up atom, chosen to show the physics clearly, not a real element.
- Each orbital overlaps the same orbital on the neighboring atoms. The overlap energy falls off exponentially as the atoms move apart, and the p orbital along the chain (pσ) overlaps more than the two across it (pπ).
- The left diagram shows every level against the spacing, with the shaded bands that a very long chain would have. The right diagram shows the levels at the chosen spacing, filled with electrons from the bottom, two to a level (four to a pπ level, which counts both pπ orbitals).
- Choose 1 to 4 electrons per atom. The verdict under the levels says whether the highest band holding electrons is full, with a gap above it, or only partly full.
- The graphs show how many orbitals lie in each 0.25 eV of energy, and the book's band gaps (Table 9.4) beside the model's gap.
- The Bands view's Model switch also offers a periodic potential (Kronig–Penney), the subject of the Energy Bands in a Periodic Potential worksheet.
- Record reading stores N, d, the electrons per atom and the lowest and highest level of the s and p bands. Export to worksheet sends the readings to the Data table below; Clear starts a new series, which goes into a new copy of the table.
- Blind hides the verdict, the overlap energies and the model's gap on the graph.

</details>

## Goal

Watch atomic energy levels split into bands as atoms are brought together, measure how the width of a band depends on the spacing, and use the filling of the bands to tell a metal from an insulator.

## Background

Two identical atoms far apart have the same energy levels. Brought close, their outer wave functions overlap and each level splits into two, one a little lower and one a little higher. With $$N$$ atoms each level splits into $$N$$ levels, and for the enormous $$N$$ of a solid these merge into a band, with forbidden energy gaps between the bands (§9.5).

In the demo's chain each orbital overlaps only the same orbital on its two neighbors, with an overlap energy $$t$$. The $$N$$ levels from one atomic level $$E_0$$ are then

$$E_j = E_0 - 2t\cos\frac{j\pi}{N + 1}, \qquad j = 1, 2, \ldots, N,$$

so the band of a very long chain runs from $$E_0 - 2t$$ to $$E_0 + 2t$$, a width of $$4t$$. The overlap falls off exponentially with spacing, $$t \propto e^{-d/\lambda}$$, where $$\lambda$$ measures how far the orbital reaches.

Each level holds two electrons, one of each spin. A band whose highest occupied level has empty levels just above it lets electrons speed up in an applied field: the solid is a conductor. A completely filled band with a gap above it cannot carry current: an insulator, or a semiconductor if the gap is small (§9.5, Fig. 9.17).

## Before the lab

1. Use the formula to find the two levels for $$N = 2$$, and show that they are split by $$2t$$.
2. How many electrons can the s band of a chain of 40 atoms hold? How many can its p band hold (one pσ and two pπ orbitals per atom)?
3. Sodium has one valence electron per atom and is a metal; magnesium has two, just enough to fill an s band. Take the demo's chain with 2 electrons per atom. As its atoms are pushed closer together, from d = 0.300 nm toward 0.200 nm, does the gap between the full s band and the p band above it grow, stay about the same, or shrink? Does the chain end up an insulator or a metal? Decide before you open the demo, and say why.
4. If the width $$w$$ of a band falls off as $$e^{-d/\lambda}$$, what graph of your readings should be a straight line, and what is its slope?
## Safety

No hazards in the virtual lab.

## Procedure

**Counting levels.** The link opens the Bands view on the Levels become bands setup. Set the Spacing between atoms d slider to 0.300 nm. Set the Number of atoms N slider to 1, 2, 3, 6, 10, 20 and 40 in turn and press Record reading at each; for the smaller chains, also count the s levels on the right diagram.

**Width against spacing.** Press Export to worksheet, then Clear. With N = 40, set d to 0.200, 0.250, 0.300 and so on up to 0.600 nm (nine settings) and press Record reading at each. Press Export to worksheet when the ninth reading is in.

**Filling the bands.** Keep Blind (under Lab) unticked, since it hides the verdict. With N = 40 and d = 0.300 nm, press each of the Electrons per atom buttons 1, 2 and 3, and write down the Very long chain readout (the verdict) and the Highest filled level readout for each; you need them for Analysis 3. Then press 2 and lower d with the arrow keys (0.005 nm a step) until the Very long chain readout changes from an insulator to a metal; write down that spacing.

## Data

| Reading | Atoms $$N$$ | Spacing $$d$$ (nm) | Lowest s level (eV) | Highest s level (eV) | Lowest p level (eV) | Width $$w$$ of the s levels (eV) | Gap (eV) | ln(w / 1 eV) |
|---|---|---|---|---|---|---|---|---|
| | | | | | | | | |
| | | | | | | | | |
| | | | | | | | | |

The gap is the lowest p level minus the highest s level; a negative value means the bands overlap.

## Analysis

1. Fill in the width, gap and $$\ln(w/1\ \text{eV})$$ columns from the levels in each reading. How many s levels does a chain of N atoms have? For the counting series, plot the width of the s levels against N. What does it approach?
2. For N = 40, plot $$\ln(w/1\ \text{eV})$$ against $$d$$ and fit a straight line. Find $$\lambda$$ from the slope.
3. For each number of electrons per atom in the filling series, say whether the chain is a metal or an insulator, and explain using the number of electrons each band can hold.
## Uncertainty

A chain of N atoms has a width $$4t\cos(\pi/(N + 1))$$, slightly less than $$4t$$. By what fraction does this reduce the width for N = 40? Does it change the slope you found in Analysis 2? Use the standard error of the slope to give $$\lambda$$ with its uncertainty.

## Questions

1. Magnesium has two valence electrons per atom, which would fill an s band exactly, yet magnesium is a metal. Look back at Before the lab 3, then at the Gap column of your width series and the spacing at which the Very long chain readout turned to a metal. What happens to the two bands as the atoms come closer, and why? Use that to explain how magnesium conducts.
2. At 300 K, $$kT = 0.026$$ eV. The number of electrons excited across a gap is roughly proportional to $$e^{-E_g/2kT}$$. Using Table 9.4, by what factor does this differ between silicon (1.14 eV) and diamond (5.48 eV)? Why is one a semiconductor and the other an insulator?
## What to hand in

Prelab answers, the data tables with the graphs of width against N, $$\ln w$$ against $$d$$, your value of $$\lambda$$ with its uncertainty, the filling results, and answers to the questions. Identify simulated data.
