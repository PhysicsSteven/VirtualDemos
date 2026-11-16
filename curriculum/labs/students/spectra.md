# The Hydrogen Spectrum and the Rydberg Constant
Student laboratory · Modern Physics

Textbook: OpenStax *University Physics*, Vol. 3, §§6.4, 8.1 and 8.5. Access for free at https://openstax.org/details/books/university-physics-volume-3.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/spectra.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Modes in the demo:** Explore (one element), Compare (two elements, one above the other), Mystery (a gas mixture or a star to identify) and Atom models (six models of hydrogen under one lamp, Part 3 of this worksheet).

**Using the demo.**

- The strip shows the strong lines of an element as a hand spectroscope would show a glowing tube of the gas, in emission or absorption, over the visible range or 300 to 1000 nm. Click an element in the periodic table to change it.
- The lines are the NIST Handbook of Basic Atomic Spectroscopic Data strong lines (Sansonetti and Martin), air wavelengths, with NIST's relative intensities. "I" marks lines of the neutral atom and "II" lines of the atom with one electron removed. Line widths and colors on the screen are drawn, not measured.
- Click or tap a line to read it: the readout gives its wavelength as NIST lists it, the ion and the intensity. Some hydrogen lines are listed as two or three components less than 0.02 nm apart (the fine structure); click the strongest.
- Record reading stores the source, the wavelength, the ion and the intensity of the line you read last. Export to worksheet sends the readings to the Data table below; Clear (under Readings) starts a new series, which goes into a new copy of the table. In Mystery mode the source is stored as "Mystery".
- For hydrogen, the energy level diagram shows the Bohr transitions. Blind (beside the diagram) hides the photon energy and wavelength it predicts.
- Below it, Bohr orbits and the electron wave draws the orbits $$r = n^2a_0$$ to scale with the electron's de Broglie wave wrapped around the chosen one. The orbit number n can be set between whole numbers, in steps of 0.05, to see the wave fail to join itself. The readouts give the radius, the speed, the wavelength, the number of wavelengths around the orbit and the angular momentum.
- Atom models sends the same photons from one lamp into six atoms side by side: a billiard ball atom, Thomson's plum pudding, a classical orbiting electron, Bohr's atom, de Broglie's and Schrödinger's. Under each, a strip shows the light it gives off against hydrogen's real lines. The lamp can be set to a hydrogen line, to Thomson's line, to an ionizing wavelength or to white light, and the plum pudding's radius R can be changed.

</details>

## Goal

Measure the wavelengths of the Balmer lines of hydrogen, show that they fit Bohr's formula, and find the Rydberg constant, the ionization energy of hydrogen, and the wavelength of the helium ion's line from it.

## Background

Bohr's model (§6.4) gives the hydrogen atom the energy levels $$E_n = -13.6\ \text{eV}/n^2$$. An electron falling from level $$n$$ to level $$n_f$$ emits a photon of energy $$E_n - E_{n_f}$$, so

$$\frac{1}{\lambda} = R_\mathrm{H}\left(\frac{1}{n_f^2} - \frac{1}{n^2}\right),$$

where $$R_\mathrm{H}$$ is the Rydberg constant for hydrogen and $$hcR_\mathrm{H}$$ is the ionization energy from the ground state. The visible lines are the Balmer series, $$n_f = 2$$ and $$n = 3, 4, 5, \ldots$$. A graph of $$1/\lambda$$ against $$1/n^2$$ is a straight line with slope $$-R_\mathrm{H}$$ and intercept $$R_\mathrm{H}/4$$.

The formula holds for wavelengths in vacuum. NIST lists the visible lines as measured in air, where light travels a little slower: $$\lambda_\mathrm{vac} = n_\mathrm{air}\lambda_\mathrm{air}$$, with $$n_\mathrm{air} = 1.00028$$ for dry air at 15 °C and 1 atm (it changes by less than 0.00001 across the visible). For a nucleus of charge $$Ze$$ with one electron, the Bohr energies grow by $$Z^2$$ (§8.1).

## Before the lab

1. Find the wavelength of the $$n = 3 \to 2$$ line from $$E_n = -13.6\ \text{eV}/n^2$$ and $$hc = 1239.84$$ eV·nm. What color is it?
2. What is the shortest wavelength in the Balmer series (the series limit)?
3. Why are there no lines of the Lyman series ($$n_f = 1$$) on the strip?
4. Convert an air wavelength of 500.000 nm to vacuum.

## Safety

None for the virtual apparatus. Real spectrum tubes run at several kilovolts: switch the supply off before touching a tube.

## Procedure

Press Explore under Mode, click H in the periodic table, press Visible above the strip, and check Blind (beside the energy level diagram, under How hydrogen makes its lines).

**Balmer lines.** Click each hydrogen line in the strip, from the red line at the right to the faint violet ones at the left, and press Record reading (under Readings) after each. Where a line has close components, click and record the strongest. Press Export to worksheet.

**Paschen line.** Press Clear (under Readings) and press 300 to 1000 nm above the strip. Click and record the hydrogen line in the near infrared (the one beyond 700 nm). Then click He in the periodic table, press Ionized above the strip to show only the He II lines, and click and record the strongest component of the line near 469 nm. Press Export to worksheet; these go into a new copy of the table.

**Part 2: Bohr's orbits and the electron wave.** Press Explore and click H again. Under Bohr orbits and the electron wave, set the Orbit n slider to 1, 2, 3 and 4, and to 2.50. At each, write the Radius r = n²a₀, Speed v, de Broglie λ = h/mv, Wavelengths around 2πr and Angular momentum mvr readouts in the matching columns of Table 2.

**Part 3: six models of the atom.** Press Atom models under Mode. Press the Lyman β lamp button and press Play if the button beside Reset the atoms reads Play. Watch until the six strips fill in, and note which atoms give off light at hydrogen's lines, which lines, and what the others give. Press Clear the spectra, check White light, and do the same.

## Data

| Reading | Source | Air wavelength λ (nm) | Upper level n | 1/n² | Vacuum wavelength (nm) | 1/λ in vacuum (1/µm) |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |
| | | | | | | |

Table 2. Bohr's orbits.

| Orbit n | Radius r (nm) | Speed v (km/s) | de Broglie λ (nm) | Wavelengths around the orbit | Angular momentum (ħ) | 2πr/λ |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |
| | | | | | | |

Fill in 2πr/λ from your radius and wavelength.

## Analysis

1. Give each Balmer line its upper level $$n$$ and fill the Upper level n, 1/n², Vacuum wavelength and 1/λ in vacuum columns. Graph $$1/\lambda$$ in vacuum (vertical) against $$1/n^2$$ (horizontal). Find $$R_\mathrm{H}$$ from the slope and again from the intercept. Do they agree with each other and with $$R_\mathrm{H} = 1.096\,78 \times 10^7$$ m⁻¹?
2. From your $$R_\mathrm{H}$$ find the ionization energy of hydrogen, $$hcR_\mathrm{H}$$, in eV, and the Balmer series limit.
3. Use your $$R_\mathrm{H}$$ to find which transition gives the infrared hydrogen line.
4. For He II ($$Z = 2$$), the $$n = 4 \to 3$$ line has $$1/\lambda = Z^2 R(1/9 - 1/16)$$. Predict its wavelength with your $$R_\mathrm{H}$$ and compare with the measured one. The small difference has a reason: what is it?
5. From Table 2, show that r grows as $$n^2$$, v falls as $$1/n$$, and the angular momentum is $$n\hbar$$ on the allowed orbits. How many wavelengths fit around each allowed orbit, and what happens at n = 2.50?
6. Which of the six atom models gave off light at hydrogen's lines under the Lyman β lamp, and at which lines? Which under white light? What did the plum pudding and the classical orbit give instead, and why?

## Uncertainty

NIST gives the wavelengths to 0.001 nm or better. Compare that with the spread of the fine structure components of the red line. Which limits your value of $$R_\mathrm{H}$$? Compare with the residuals of your fit.

## Questions

1. Why does a hot gas give separate lines rather than a continuous rainbow, as a hot solid does?
2. The Rydberg constant for an infinitely heavy nucleus is $$R_\infty = 1.097\,373 \times 10^7$$ m⁻¹. Why is $$R_\mathrm{H}$$ smaller? How would the lines of deuterium differ, and how was deuterium discovered from this?
3. The Bohr model gets the hydrogen spectrum right. What does it get wrong (§8.1)?

## What to hand in

Prelab answers, the table copies with their graph and fit, $$R_\mathrm{H}$$ from the slope and the intercept with uncertainties, the ionization energy, the transition of the infrared line, the He II comparison, Table 2, the atom models you watched, and answers to the questions. Say that the wavelengths come from the NIST tables in the demo.
