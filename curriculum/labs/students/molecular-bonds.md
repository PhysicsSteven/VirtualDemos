# Ionic and Covalent Bonds
Student laboratory · Modern Physics

Textbook: OpenStax *University Physics*, Vol. 3, §9.1. Access for free at https://openstax.org/details/books/university-physics-volume-3.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/molecules.html?setup=nacl)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** NaCl molecule; Pull the ions apart (these two use the Ionic bond view); H₂ bond; H₂ spins parallel (the Covalent bond view); HCl levels (the Energy levels view); HCl band; Two isotopes; Hot gas (the HCl spectrum worksheet).

**Using the demo.**

- The Ionic bond view has a sodium and a chlorine atom on a scale in nanometres. Drag the sodium, use the slider, or use the arrow keys on the picture (steps of 0.001 nm) to set the separation $$r$$ of their centers. The energy shown is that of the ion pair Na⁺ and Cl⁻, measured from neutral atoms at rest far apart.
- The model has three parts: the energy $$\Delta E$$ it costs to move the electron from sodium to chlorine, the Coulomb energy $$-ke^2/r$$ of the two ions, and a repulsion $$A/r^n$$ from the exclusion principle when the ions' electron clouds overlap. The repulsion exponent $$n$$ can be changed, and the repulsion turned off; $$A$$ is set so that the minimum stays at the measured separation.
- The Covalent bond view shows two atoms sharing electrons. Choose the molecule; for H₂ you can also choose whether the two electrons have opposite or parallel spins. The curve is a Morse potential built from each molecule's measured bond length, vibration frequency and dissociation energy, and the lines in the well are its vibration levels.
- Record reading stores the molecule, the separation and the energy. Export to worksheet sends the readings to the Data table below; Clear starts a new series, which goes into a new copy of the table.
- Blind (in the Lab section) hides the model curves and the predicted values. The energy readout stays.

</details>

## Goal

Measure how the energy of two atoms depends on their separation for an ionic bond (NaCl) and a covalent bond (H₂ and others), find the bond length and the dissociation energy of each, and see which parts of the energy make the bond.

## Background

Sodium gives up its outer electron for 5.14 eV (its ionization energy), and chlorine takes one and releases 3.62 eV (its electron affinity). So making the ions Na⁺ and Cl⁻ far apart costs

$$\Delta E = 5.14\ \mathrm{eV} - 3.62\ \mathrm{eV} = 1.52\ \mathrm{eV}.$$

The ions attract, and at separation $$r$$ their Coulomb energy is $$-ke^2/r$$, with $$ke^2 = 1.440\ \mathrm{eV\,nm}$$. Close in, their electron clouds overlap and the exclusion principle pushes them apart, with an energy $$U_\mathrm{ex}$$ that grows rapidly as $$r$$ shrinks. The energy of the pair, measured from neutral atoms far apart, is

$$U(r) = \Delta E - \frac{ke^2}{r} + U_\mathrm{ex}(r).$$

The minimum of $$U$$ is at the equilibrium separation $$r_0$$, and the depth there is the dissociation energy $$D$$, the energy needed to pull the molecule apart into neutral atoms. For NaCl the measured values are $$r_0 = 0.236\ \mathrm{nm}$$ and $$D = 4.26\ \mathrm{eV}$$ (§9.1).

In a covalent bond the atoms share electrons. Two electrons with opposite spins can both sit in the region between the nuclei, where they attract both; two with parallel spins cannot (the exclusion principle), and there is no bond. The energy curve again has a minimum, at the bond length $$r_e$$, with depth $$D_e$$. Because the nuclei can never be at rest (the zero point energy of vibration), the energy actually needed to break the bond is a little less: $$D_0 = D_e - E_0$$.

## Before the lab

1. Find the Coulomb energy of Na⁺ and Cl⁻ at 0.236 nm, in eV.
2. Ignoring the exclusion principle repulsion, what would the dissociation energy of NaCl be? The measured value is 4.26 eV. How large must $$U_\mathrm{ex}$$ be at 0.236 nm?
3. At what separation does the ion pair have the same energy as the neutral atoms (ignore the repulsion)? What does this mean for a sodium and a chlorine atom approaching each other?
4. For large $$r$$ the repulsion is negligible. What should a graph of $$U$$ against $$1/r$$ look like there? What would its slope and intercept be?

## Safety

No hazards in the virtual lab.

## Procedure

**The ionic bond.** Start with the NaCl molecule setup (repulsion exponent 19). Record the energy at separations of 0.18, 0.19, 0.20, 0.21, 0.22, 0.23, 0.236, 0.24, 0.25, 0.26, 0.28, 0.30, 0.35, 0.40, 0.50, 0.60, 0.80, 1.00 and 1.20 nm. Then find, to 0.001 nm, the separation where the energy of the ion pair is zero and record it too.

**A softer repulsion.** Export, clear, set the repulsion exponent to 9 and record the energy at 0.20, 0.22, 0.23, 0.236, 0.24, 0.25 and 0.27 nm. Then turn the repulsion off and record the energy at 0.236, 0.20 and 0.15 nm. Send both to a new copy of the table.

**The covalent bond of H₂.** Export, clear and choose the H₂ bond setup. Record the energy at separations from 0.040 to 0.280 nm: every 0.005 nm up to 0.100 nm, then every 0.020 nm up to 0.280 nm. Find the minimum to 0.001 nm and record it. Then switch to parallel spins and record the energy at 0.060, 0.074, 0.100 and 0.150 nm.

**Other molecules.** Export, clear, and for HCl, N₂ and Cl₂ find the separation with the lowest energy (to 0.001 nm) and record it, with one more reading at twice that separation.

## Data

| Reading | Molecule and state | Separation r (nm) | Energy U (eV) | 1/r (1/nm) |
|---|---|---|---|---|
| | | | | |
| | | | | |
| | | | | |

## Analysis

1. Plot $$U$$ against $$r$$ for the NaCl run with $$n = 19$$. Read off $$r_0$$ and the dissociation energy, and compare them with the measured 0.236 nm and 4.26 eV.
2. Fill in the $$1/r$$ column and plot $$U$$ against $$1/r$$ for the NaCl readings with $$r \ge 0.40$$ nm. Find the slope and intercept and compare them with $$-ke^2$$ and $$\Delta E$$. Why do the readings at small $$r$$ fall off the line?
3. From the reading at 0.236 nm, find the exclusion principle energy $$U_\mathrm{ex}(r_0) = U - \Delta E + ke^2/r_0$$. What fraction of the Coulomb energy is it?
4. Compare the depths of the well for $$n = 19$$, $$n = 9$$ and with no repulsion. Explain why the minimum stays at 0.236 nm but the depth changes, and what happens to the ions with no repulsion.
5. Use the zero crossing you found to say at what separation it first pays for the electron to jump from sodium to chlorine, and compare it with Before the lab 3.
6. Plot $$U$$ against $$r$$ for H₂. Find $$r_e$$ and $$D_e$$ and compare them with the values in §9.1 (0.074 nm and 4.52 eV). The measured dissociation energy is $$D_0 = 4.478$$ eV; what zero point energy does that imply?
7. Make a small table of bond length and well depth for H₂, HCl, N₂ and Cl₂ from your readings. Is a shorter bond always a stronger one?

## Uncertainty

Your separations are set to 0.001 nm and the energies are shown to 0.001 eV. Estimate how well you located each minimum: how much does the energy change between readings 0.001 nm either side of it? Use this to give an uncertainty for each $$r_0$$ or $$r_e$$, and for the depths.

## Questions

1. Why does the ionic bond form at all, when making the two ions far apart costs energy?
2. With parallel spins, two hydrogen atoms repel at every separation. Why?
3. Why is the NaCl minimum so much farther out than the H₂ minimum?
4. The repulsion in the demo is a model ($$A/r^n$$). Which of your measurements depend on the model, and which would any reasonable repulsion give?
5. Why is the energy needed to break a real bond, $$D_0$$, smaller than the depth of the well?

## What to hand in

Prelab answers, the table copies with the $$1/r$$ column, the graphs, your values of $$r_0$$, $$D$$, $$r_e$$ and $$D_e$$ compared with the book, the table of molecules, and answers to the questions. Identify simulated data.
