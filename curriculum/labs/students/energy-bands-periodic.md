# Energy Bands in a Periodic Potential
Student laboratory · Modern Physics

Textbook: OpenStax *University Physics*, Vol. 3, §9.5. Access for free at https://openstax.org/details/books/university-physics-volume-3.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/solids.html?ws=energy-bands-periodic&setup=bdKP)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Levels become bands; Filling the bands (the Energy Bands in a Chain of Atoms worksheet); Periodic potential; Deep wells, narrow bands (these use the Bands view with its Model switch on a periodic potential, the subject of this worksheet); Rock salt; Cesium chloride (the Lattice energy worksheet); Pure silicon; n type silicon (the Doping worksheet); Diode; LED colors (the pn junction worksheet).

**Using the demo.**

- The Bands view's Model switch changes the chain of atoms for a periodic potential (Kronig–Penney): one electron in a row of square wells of width w, where the potential is 0, and barriers of height $$V_0$$ and width $$b$$, repeating every $$a = w + b$$. The demo solves the Schrödinger equation exactly and shows the allowed bands, $$E$$ against $$k$$ with the free electron parabola, and the Bloch wave of a chosen state.
- Record reading stores $$V_0$$, w, b, a and the edges of the first two bands. Export to worksheet sends the readings to the Data table below; Clear starts a new series, which goes into a new copy of the table.
- Blind hides the calculated energies and the theory curves, including the free electron parabola.

</details>

## Goal

Watch the allowed energies of one electron in a row of square wells open into bands and gaps, measure how the first gap grows with the height of the barriers, and measure how a band narrows as the barriers widen.

## Background

In a crystal an electron moves through a potential that repeats every $$a$$. A free electron has $$E = \hbar^2k^2/2m$$ for every $$k$$, but in a repeating potential the Schrödinger equation allows only bands of energy (Kronig and Penney, 1931). The gaps open where the electron's wave is reflected by the whole row, at $$k = \pi/a$$: there $$E = \hbar^2\pi^2/2ma^2$$, with $$\hbar^2/2m = 0.0381\ \mathrm{eV\,nm^2}$$. For a weak potential the first gap is twice the size of the potential's Fourier component at $$2\pi/a$$; for square barriers that is

$$E_g \approx \frac{2V_0}{\pi}\sin\frac{\pi b}{a}.$$

For high or wide barriers the electron must tunnel from well to well. Its wave falls off inside a barrier as $$e^{-\kappa x}$$, with $$\kappa = \sqrt{2m(V_0 - E)}/\hbar$$, and the band narrows as the barriers widen. This is the same narrowing that a chain of atoms shows as the atoms move apart (the Energy Bands in a Chain of Atoms worksheet): there each atomic level spreads into a band because neighboring orbitals overlap, and the band width falls off exponentially with the spacing. Here the starting point is the free electron and the lattice reflects its wave; the chain starts from atoms and lets their electrons hop to neighbors.

## Before the lab

1. For a period $$a = 0.30$$ nm, find the free electron energy at $$k = \pi/a$$. Then use the formula for $$E_g$$ to predict the first gap for $$V_0 = 1$$ eV with $$b = 0.05$$ nm.

## Safety

No hazards in the virtual lab.

## Procedure

**A periodic potential.** (1) The link opens the Periodic potential setup, with the Model switch on Periodic potential (Kronig–Penney). Keep Blind (under Lab) unticked. (2) Set Well width w to 0.250 nm and Barrier width b to 0.050 nm, and record a reading at Barrier height V₀ of 0, 1, 2, 5, 10, 20 and 30 eV; export them. (3) Clear, set V₀ to 10 eV with w still 0.250 nm, and record a reading at b = 0.020, 0.050, 0.100, 0.150 and 0.200 nm; export them too. Both series go to the table, each in its own copy.

## Data

| Reading | $$V_0$$ (eV) | Barrier width $$b$$ (nm) | Period $$a$$ (nm) | Band 1 bottom (eV) | Band 1 top (eV) | Band 2 bottom (eV) | First gap (eV) | Width of band 1 (eV) | ln(width / 1 eV) |
|---|---|---|---|---|---|---|---|---|---|
| | | | | | | | | | |
| | | | | | | | | | |
| | | | | | | | | | |

Fill in the width of band 1 (its top minus its bottom) and its natural log.

## Analysis

1. For $$V_0 = 0$$, compare the top of band 1 and the bottom of band 2 with the free electron energy at $$k = \pi/a$$.
2. Plot the first gap against $$V_0$$ (the first copy of the table), and draw the prediction $$(2V_0/\pi)\sin(\pi b/a)$$ beside it. Up to what $$V_0$$ does the weak potential prediction hold?
3. For the barrier width series (the second copy), plot ln(width) against $$b$$ and fit a straight line. Compare the slope with $$-\kappa$$, taking $$E$$ as the middle of band 1 at $$b = 0.10$$ nm. What does the band width have in common with a chain's band width against spacing?

## Uncertainty

The demo's band edges are rounded to 0.001 eV. By what fraction can that change the narrowest band width and the smallest gap in your readings? Is it enough to explain the residuals of your fit in Analysis 3? Use the standard error of the slope to say whether your slope agrees with $$-\kappa$$.

## Questions

1. The chain of atoms starts from atoms and lets their electrons hop to neighbors; the periodic potential starts from free electrons and lets the lattice reflect them. Why do both end with bands and gaps?

## What to hand in

Prelab answers, the data table with its graphs, the comparison of the slope with $$-\kappa$$ with its uncertainty, and the answer to the question. Identify simulated data.
