# Lattice Energy of Ionic Crystals
Student laboratory · Modern Physics

Textbook: OpenStax *University Physics*, Vol. 3, §9.3. Access for free at https://openstax.org/details/books/university-physics-volume-3.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/solids.html?setup=crNaCl)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Rock salt; Cesium chloride (these two use the Crystal view, the subject of this worksheet); Levels become bands; Filling the bands (the Energy bands worksheet); Pure silicon; n type silicon (the Doping worksheet); Diode; LED colors (the pn junction worksheet).

**Using the demo.**

- The Crystal view draws a salt crystal in 3D around one reference ion, ringed in gold. Drag to turn it, scroll or pinch to zoom, double click to reset the view.
- Choose any of the 20 alkali halides in the book's Table 9.2. The meters show the nearest neighbor distance $$r_0$$ (measured lattice constants at room temperature) and the Born exponent $$n$$ of the salt.
- Add up the ions in one of two ways. **Shells** adds the ions one shell of equal distance at a time, nearest first, as in the book's series. **Neutral cubes** adds every ion inside a cube of half width $$m$$ ion spacings, counting an ion on a face of the cube as 1/2, on an edge as 1/4 and on a corner as 1/8, so the cube carries no net charge (Evjen's method). Neutral cubes are offered for the NaCl structure only.
- The graphs show the running total of the sum, with the exact Madelung constant as a dashed line, and the energy of one ion pair against the separation $$r$$.
- Record reading stores the salt, its structure, $$r_0$$, $$n$$, the exact $$\alpha$$ for its structure and the measured lattice energy from Table 9.2. Export to worksheet sends the readings to the first Data table below; Clear starts a new series, which goes into a new copy of the table.
- Blind hides the calculated lattice energy, its difference from the table and the energy curve.

</details>

## Goal

Add up the electric potential energy of one ion in the field of all the others to find the Madelung constant, then test the ionic model of the lattice energy against measured values for twenty salts.

## Background

In a crystal of NaCl each Na⁺ ion has 6 Cl⁻ neighbors at the nearest neighbor distance $$r_0$$, 12 Na⁺ ions at $$\sqrt{2}\,r_0$$, 8 Cl⁻ ions at $$\sqrt{3}\,r_0$$, and so on. Its Coulomb energy is

$$U_\text{coul} = -\frac{ke^2}{r_0}\left(6 - \frac{12}{\sqrt{2} } + \frac{8}{\sqrt{3} } - \cdots\right) = -\alpha\frac{ke^2}{r_0},$$

where the number $$\alpha$$ is the Madelung constant of the structure: 1.7476 for the NaCl structure and 1.7627 for the CsCl structure, with $$ke^2 = 1.440\ \text{eV·nm}$$. A short range repulsion $$A/r^n$$ keeps the ions apart. Setting $$dU/dr = 0$$ at $$r_0$$ fixes $$A$$, and the energy needed to pull one ion pair apart into free ions is

$$U = \alpha\frac{ke^2}{r_0}\left(1 - \frac{1}{n}\right).$$

The Born exponent $$n$$ depends on the ions' inner electron shells; the demo uses the average of the two ions' values (5 for a helium core, 7 neon, 9 argon, 10 krypton, 12 xenon), which gives $$n = 8$$ for NaCl as in the book. One eV per ion pair is 96.49 kJ/mol.

## Before the lab

1. Add the first three terms of the series for NaCl, $$6 - 12/\sqrt{2} + 8/\sqrt{3}$$. How close is it to 1.7476? The next shell has 6 Na⁺ ions at $$2r_0$$. Add it. What do you notice?
2. With $$\alpha = 1.7476$$, $$r_0 = 0.282$$ nm and $$n = 8$$, find the lattice energy of NaCl in eV per ion pair and in kJ/mol.
3. Which salt in Table 9.2 should have the largest lattice energy, and which the smallest? Explain using the formula.
4. If the model is right, what should you plot the measured lattice energies against to get a straight line through the origin, and what is its slope?

## Safety

No hazards in the virtual lab.

## Procedure

**The Madelung sum.** Pick Rock salt. Using Shells, record the running total $$\alpha$$ after 1 to 12 shells in the second table. Switch to Neutral cubes and record $$\alpha$$ for cube half widths 1 to 6. Then pick Cesium chloride and record its running total after 1 to 12 shells.

**Lattice energies.** Record a reading for each of the seventeen salts with the NaCl structure and export them to the first table. Clear the readings, then record the three salts with the CsCl structure and export them; they go into a second copy of the table. Turn Blind on first if your instructor asks you to calculate the energies yourself.

## Data

| Reading | Salt | Structure | $$r_0$$ (nm) | $$n$$ | $$\alpha$$ | Table $$U$$ (kJ/mol) | $$U$$ per ion pair (eV) | $$(1 - 1/n)/r_0$$ (1/nm) |
|---|---|---|---|---|---|---|---|---|
| | | | | | | | | |
| | | | | | | | | |
| | | | | | | | | |

**The Madelung sum.** One row for each number of shells or cube size.

| Shells added | $$\alpha$$ NaCl, by shells | $$\alpha$$ CsCl, by shells | Cube half width $$m$$ | $$\alpha$$ NaCl, by neutral cubes |
|---|---|---|---|---|
| | | | | |
| | | | | |
| | | | | |

## Analysis

1. Plot the running totals against the number of shells and against the cube size. Which way of adding the ions settles on a value, and how many cubes does it take to agree with 1.7476 to three decimal places?
2. Convert each table lattice energy to eV per ion pair and fill in the last column. Plot $$U$$ against $$(1 - 1/n)/r_0$$ for the seventeen salts with the NaCl structure and fit a straight line. From the slope, find $$\alpha$$, and compare it with 1.7476.
3. Calculate $$U$$ from the model for NaCl, KCl and CsCl, and find the percentage difference from the table for each.
4. Do the three salts with the CsCl structure fall on the same line as the others? Should they?

## Uncertainty

Use the standard error of the slope from Analysis 2 to give $$\alpha$$ with its uncertainty. Is the difference from 1.7476 larger than that? The model leaves out the weak van der Waals attraction between the ions and their zero point vibration. Which way would each change the lattice energy, and so which way would each bias your value of $$\alpha$$?

## Questions

1. Adding the ions shell by shell never settles, yet a crystal has a definite energy. Why do neutral cubes give a steady answer when shells do not?
2. LiF has a lattice energy of 1036 kJ/mol and CsI only 604 kJ/mol. Explain the difference.
3. The repulsion changes the lattice energy only by the factor $$1 - 1/n$$. By what percentage would the NaCl result change if $$n$$ were 9 instead of 8?
4. The book's Example 9.3 finds $$r_0$$ from the density of NaCl, 2.16 g/cm³, and its molar mass, 58.4 g/mol. Show that $$r_0 = (M/2N_A\rho)^{1/3}$$ gives about 0.28 nm, and explain the factor of 2.

## What to hand in

Prelab answers, both tables with their graphs, the fitted slope and your value of $$\alpha$$ with its uncertainty, the model energies and their differences from the table, and answers to the questions. Identify simulated data.
