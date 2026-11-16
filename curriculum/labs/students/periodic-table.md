# Shells and the Periodic Table
Student laboratory · Modern Physics

Textbook: OpenStax *University Physics*, Vol. 3, §8.4. Access for free at https://openstax.org/details/books/university-physics-volume-3.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/shells-and-x-rays.html?setup=neon)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Fill up to neon; Chromium breaks the rule (these two use the Shells view, the subject of this worksheet); Copper tube, 30 kV; Below the K edge; Mystery target (the X-ray spectra worksheet).

**Using the demo.**

- Pick an element from the periodic table, or step one electron at a time with − electron and + electron.
- Each box is one orbital (one value of $$m_l$$) and holds at most one spin up and one spin down electron. Within a subshell the boxes fill once with spin up before any pair. The rows are drawn by n, not by energy.
- The bars show how many electrons each shell holds, out of $$2n^2$$.
- "Measured ground state" is the configuration in the NIST Atomic Spectra Database. "By the n + l rule" fills subshells in order of n + l, lower n first on a tie. About twenty elements differ between the two, and the subshells that differ are outlined.
- The graph shows the first ionization energy for Z = 1 to 103, from NIST, with the selected element marked.
- The readout gives $$Z_\mathrm{eff} = n\sqrt{IE/13.606\ \mathrm{eV}}$$ (13.606 eV is the hydrogen ground state energy), which treats the outer electron as if it were in a hydrogen atom with nuclear charge $$Z_\mathrm{eff}$$. It is a rough estimate.
- Record reading stores the element, Z, the measured and rule configurations, the electrons in each shell, the outer shell's n and its number of electrons, and the ionization energy. Export to worksheet sends the readings to the Data table below. Clear starts a new series, which goes into a new copy of the table.
- The Build an atom view makes an atom or ion from protons, neutrons and electrons. It names the element from the number of protons and gives the charge, the mass number, whether that isotope is stable, the mass of the neutral atom, the electrons in each shell and the configuration. An ion's electrons are taken off or added by the usual rule: a positive ion loses its highest n electrons first, then its highest l. Nothing is recorded in this view.
- Blind hides the ionization graph and the ionization energy and $$Z_\mathrm{eff}$$ readouts; Record reading still stores the ionization energy, and the readings list shows it. Keep it on for this worksheet, so you work out $$Z_\mathrm{eff}$$ and draw the graph yourself.

</details>

## Goal

Build up the elements one electron at a time using the exclusion principle, see how the shells explain the rows of the periodic table and the pattern of ionization energies, and find where the simple filling rule fails.

## Background

Each electron in an atom has four quantum numbers: n, l, $$m_l$$ and $$m_s$$. The Pauli exclusion principle says no two electrons in an atom share all four (§8.4). For a given l there are $$2l + 1$$ values of $$m_l$$ and two of $$m_s$$, so a subshell holds $$2(2l + 1)$$ electrons: 2, 6, 10 and 14 for s, p, d and f. A shell holds

$$\sum_{l=0}^{n-1} 2(2l+1) = 2n^2 .$$

In the ground state each electron takes the lowest energy place that is still free. In a hydrogen atom the energy depends on n alone, but in a many electron atom the inner electrons screen the nucleus, and an electron with low l, whose orbit dips close to the nucleus, is screened less and bound more tightly. That is why 4s fills before 3d. A rough rule is to fill subshells in order of n + l, the lower n first on a tie. Within a subshell, electrons spread over the orbitals with parallel spins before they pair up (Hund's rule).

The first ionization energy IE is the energy needed to remove the most loosely bound electron. If that electron, with principal quantum number n, saw a nuclear charge $$Z_\mathrm{eff}e$$ as in hydrogen, then $$IE = (13.6\ \mathrm{eV})Z_\mathrm{eff}^2/n^2$$.

## Before the lab

1. How many electrons can the n = 3 shell hold? Which subshells make it up?
2. Write the ground configuration of phosphorus (Z = 15) and draw its 3p boxes. How many electrons are unpaired?
3. By the n + l rule, which fills first, 4s or 3d? 5s or 4d? 6s, 4f or 5d?
4. Predict which has the larger ionization energy in each pair: Na or Mg; Mg or Al; Ne or Na. Give a reason for each.

## Safety

No hazards in the virtual lab.

## Procedure

**The first twenty elements.** Start with Fill up to neon, which opens on neon. Open the Lab section and tick Blind (the checkbox that starts "Blind: hide the ionization graph"); leave it on for the whole worksheet. Click H in the periodic table and press Record reading, then press + electron and Record reading again for each element up to calcium (Z = 20), 20 rows in all. Press Export to worksheet before you go on.

**The alkali metals and noble gases.** Press Clear. Click each element in the periodic table and press Record reading: lithium, sodium, potassium, rubidium, cesium and francium, then helium, neon, argon, krypton, xenon and radon. Press Export to worksheet; this run goes into a new copy of the table.

**Exceptions.** Pick Chromium breaks the rule and switch between the two Fill buttons, Measured ground state (NIST) and By the n + l rule, to see which boxes change. Do the same for copper (Z = 29) and palladium (Z = 46), picked in the periodic table. Copy both configurations of each into the second table from the readouts Configuration (measured) and By the n + l rule; nothing is recorded here.

## Data

| Reading | Element | Z | Configuration | Outer shell n | Electrons in outer shell | Ionization energy IE (eV) | Z_eff |
|---|---|---|---|---|---|---|---|
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |

Work out $$Z_\mathrm{eff} = n\sqrt{IE/13.606\ \mathrm{eV}}$$ yourself.

| Element | Measured ground state | By the n + l rule | What changed |
|---|---|---|---|
| Chromium | | | |
| Copper | | | |
| Palladium | | | |

## Analysis

1. From the first copy of the table, graph IE (vertical) against Z (horizontal) for the first twenty elements. Mark where each shell closes. Where are the largest values, and where does IE drop sharply? Explain both with the shells.
2. Within the second row, IE falls from beryllium to boron and again from nitrogen to oxygen. Explain each drop: which subshell does the new electron enter, and does it have to pair up?
3. From the second copy of the table, graph IE (vertical) against the outer shell n (horizontal), with the alkali metals and the noble gases as two separate series. How do the two families compare, and what trend do you see down each column?
4. Find $$Z_\mathrm{eff}$$ for each alkali metal. If the inner electrons screened the nucleus completely, $$Z_\mathrm{eff}$$ would be 1. Is it? Explain why it grows down the column.
5. For the three exceptions, describe what changed and suggest why a half full or full d subshell might be favored.

## Uncertainty

The ionization energies are measured values from NIST, given to many more figures than you need, so the uncertainty here is in the models, not the data. Say what $$Z_\mathrm{eff}$$ leaves out, and why it is only a rough guide to the screening.

## Questions

1. Why is the ionization energy of helium higher than that of hydrogen, even though helium has two electrons sharing the 1s orbital?
2. What would the periodic table look like if electrons had no spin, so each orbital held only one electron?

## What to hand in

Prelab answers, both table copies with their graphs, the table of exceptions, your $$Z_\mathrm{eff}$$ values, the explanations asked for in the Analysis, and answers to the questions. Identify simulated data.
