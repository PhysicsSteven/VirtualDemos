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
- The Bands view's Model switch changes the chain of atoms for a periodic potential (Kronig–Penney): one electron in a row of square wells of width w, where the potential is 0, and barriers of height $$V_0$$ and width $$b$$, repeating every $$a = w + b$$. The demo solves the Schrödinger equation exactly and shows the allowed bands, $$E$$ against $$k$$ with the free electron parabola, and the Bloch wave of a chosen state. Record reading there stores $$V_0$$, w, b, a and the edges of the first two bands; those readings go to Table 2.
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

**Part 2** starts from the other end. A free electron has $$E = \hbar^2k^2/2m$$ for every $$k$$. In a crystal it moves through a potential that repeats every $$a$$, and the Schrödinger equation then allows only bands of energy (Kronig and Penney, 1931). The gaps open where the electron's wave is reflected by the whole row, at $$k = \pi/a$$: there $$E = \hbar^2\pi^2/2ma^2$$, with $$\hbar^2/2m = 0.0381\ \mathrm{eV\,nm^2}$$. For a weak potential the first gap is twice the size of the potential's Fourier component at $$2\pi/a$$; for square barriers that is

$$E_g \approx \frac{2V_0}{\pi}\sin\frac{\pi b}{a}.$$

For high or wide barriers the electron must tunnel from well to well. Its wave falls off inside a barrier as $$e^{-\kappa x}$$, with $$\kappa = \sqrt{2m(V_0 - E)}/\hbar$$, and the band narrows as the barriers widen, as the chain's bands narrowed as the atoms moved apart.

## Before the lab

1. Use the formula to find the two levels for $$N = 2$$, and show that they are split by $$2t$$.
2. How many electrons can the s band of a chain of 40 atoms hold? How many can its p band hold (one pσ and two pπ orbitals per atom)?
3. Sodium has one valence electron per atom. Is its highest band full, half full or empty? What does that predict about its conductivity?
4. If the width $$w$$ of a band falls off as $$e^{-d/\lambda}$$, what graph of your readings should be a straight line, and what is its slope?
5. For a period $$a = 0.30$$ nm, find the free electron energy at $$k = \pi/a$$. Then use the formula for $$E_g$$ to predict the first gap for $$V_0 = 1$$ eV with $$b = 0.05$$ nm.

## Safety

No hazards in the virtual lab.

## Procedure

**Counting levels.** Set the spacing to 0.30 nm. Record a reading for N = 1, 2, 3, 6, 10, 20 and 40, and count the s levels on the right diagram for the smaller chains.

**Width against spacing.** Export, then clear the readings. With N = 40, record a reading at spacings from 0.20 nm to 0.60 nm in steps of 0.05 nm.

**Filling the bands.** With N = 40 and d = 0.30 nm, note the verdict and the highest filled level for 1, 2 and 3 electrons per atom. Then set 2 electrons per atom and reduce the spacing in small steps until the verdict changes; note that spacing.

**Part 2: a periodic potential.** Export and clear the readings, and change the model to the periodic potential. With wells 0.25 nm wide and barriers 0.05 nm wide, record a reading at barrier heights $$V_0$$ of 0, 1, 2, 5, 10, 20 and 30 eV, and export them. Then clear the readings and, with $$V_0 = 10$$ eV and wells 0.25 nm wide, record a reading for barrier widths of 0.02, 0.05, 0.10, 0.15 and 0.20 nm. Export them too. Both series go to Table 2, each in its own copy.

## Data

| Reading | Atoms $$N$$ | Spacing $$d$$ (nm) | Lowest s level (eV) | Highest s level (eV) | Lowest p level (eV) | Width $$w$$ of the s levels (eV) | Gap (eV) | ln(w / 1 eV) |
|---|---|---|---|---|---|---|---|---|
| | | | | | | | | |
| | | | | | | | | |
| | | | | | | | | |

The gap is the lowest p level minus the highest s level; a negative value means the bands overlap.

Table 2. A periodic potential.

| Reading | $$V_0$$ (eV) | Barrier width $$b$$ (nm) | Period $$a$$ (nm) | Band 1 bottom (eV) | Band 1 top (eV) | Band 2 bottom (eV) | First gap (eV) | Width of band 1 (eV) | ln(width / 1 eV) |
|---|---|---|---|---|---|---|---|---|---|
| | | | | | | | | | |
| | | | | | | | | | |
| | | | | | | | | | |

Fill in the width of band 1 (its top minus its bottom) and its natural log.

## Analysis

1. Fill in the width, gap and $$\ln(w/1\ \text{eV})$$ columns from the levels in each reading. How many s levels does a chain of N atoms have? For the counting series, plot the width of the s levels against N. What does it approach?
2. For N = 40, plot $$\ln(w/1\ \text{eV})$$ against $$d$$ and fit a straight line. Find $$\lambda$$ from the slope.
3. Plot the gap against $$d$$. At what spacing does the gap close? Compare with the spacing where the verdict changed.
4. For each number of electrons per atom in the filling series, say whether the chain is a metal or an insulator, and explain using the number of electrons each band can hold.
5. For $$V_0 = 0$$ in Table 2, compare the top of band 1 and the bottom of band 2 with the free electron energy at $$k = \pi/a$$.
6. Plot the first gap against $$V_0$$ (the first copy of Table 2), and draw the prediction $$(2V_0/\pi)\sin(\pi b/a)$$ beside it. Up to what $$V_0$$ does the weak potential prediction hold?
7. For the barrier width series (the second copy), plot ln(width) against $$b$$ and fit a straight line. Compare the slope with $$-\kappa$$, taking $$E$$ as the middle of band 1 at $$b = 0.10$$ nm. What does the band width have in common with the chain's band width against spacing?

## Uncertainty

A chain of N atoms has a width $$4t\cos(\pi/(N + 1))$$, slightly less than $$4t$$. By what fraction does this reduce the width for N = 40? Does it change the slope you found in Analysis 2? Use the standard error of the slope to give $$\lambda$$ with its uncertainty.

## Questions

1. Why does each atomic level split into exactly N levels, no more and no fewer?
2. Inner electron levels of real atoms form very narrow bands, while the outer levels form wide ones. Explain using what you found about the overlap and the spacing.
3. Magnesium has two valence electrons per atom, which would fill an s band exactly, yet magnesium is a metal. Use your results to explain how.
4. At 300 K, $$kT = 0.026$$ eV. The number of electrons excited across a gap is roughly proportional to $$e^{-E_g/2kT}$$. Using Table 9.4, by what factor does this differ between silicon (1.14 eV) and diamond (5.48 eV)? Why is one a semiconductor and the other an insulator?
5. The chain starts from atoms and lets their electrons hop to neighbors; the periodic potential starts from free electrons and lets the lattice reflect them. Why do both end with bands and gaps?

## What to hand in

Prelab answers, the data tables with the graphs of width against N, $$\ln w$$ against $$d$$ and the gap against $$d$$, your value of $$\lambda$$ with its uncertainty, the filling results, Table 2 with its graphs, and answers to the questions. Identify simulated data.
