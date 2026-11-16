# The Zeeman Effect
Student laboratory · Modern Physics

Textbook: OpenStax *University Physics*, Vol. 3, §§8.2 and 8.3. Access for free at https://openstax.org/details/books/university-physics-volume-3.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/magnetic-moments.html?setup=cadmium)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Zeeman: cadmium red line (the Zeeman effect view, the subject of this worksheet); Orbit as a current loop; 3d electron in a field (the orbital magnetic moment worksheet); Stern and Gerlach, 1922; Silver at one speed; Mystery atom (the Stern–Gerlach worksheet).

**Using the demo.**

- A discharge lamp sits between the poles of an electromagnet. Pick the spectral line, the field from 0 to 2 T, and whether you look across the field or along it, through a hole in a pole.
- The lines are the cadmium red line (643.847 nm, $$^1D_2 \to {}^1P_1$$), hydrogen Lyman α (121.567 nm, with spin left out as in §8.2) and the sodium D lines (D₂ at 588.995 nm and D₁ at 589.592 nm). Wavelengths are from NIST.
- Each level shifts by $$g\,m\,\mu_\mathrm{B}B$$, with g from the Landé formula and the electron's g factor 2.00232. A component appears for every pair of sublevels with Δm = 0 or ±1, with its relative strength from quantum mechanics.
- The level diagram shows the sublevels and the allowed transitions. The lower panel is the spectrum around the line, brightness against the shift of wavelength in picometers; longer wavelengths are to the right.
- The spectrometer gives each component a width of 0.20 pm, finer than a real grating spectrometer; real Zeeman splittings are measured with an interferometer. Doppler width, hyperfine structure and isotope shifts are left out.
- Drag the cursor on the spectrum, or use the arrow keys (Shift for bigger steps), to measure the shift of a component.
- Record reading stores the line, its wavelength, the field, the direction you look, the cursor's shift, and the number of components and their shifts unless Blind is on. Export to worksheet sends the readings to the Data table below. Clear starts a new series, which goes into a new copy of the table.
- Blind hides the computed shifts; with it on you measure them with the cursor.

</details>

## Goal

Measure how a magnetic field splits a spectral line, use the splitting of the cadmium red line to find the Bohr magneton, and use the sodium D lines to find the g factors of levels whose electrons have spin.

## Background

In a field B each level of an atom splits into sublevels, one for each value of m, with energies shifted by

$$\Delta E = g\,m\,\mu_\mathrm{B}B$$

(§8.2). For a level with no spin g = 1. When spin is present, g depends on how the orbital and spin angular momenta add (§8.3); for a single electron outside closed shells, a $$^2S_{1/2}$$ level has g = 2, a $$^2P_{1/2}$$ level $$g = \tfrac{2}{3}$$ and a $$^2P_{3/2}$$ level $$g = \tfrac{4}{3}$$, taking the electron's own g factor as 2.

A photon carries one unit of angular momentum, so light is emitted only when m changes by 0 or ±1. A component shifted in energy by ΔE is shifted in wavelength by

$$\Delta\lambda = -\frac{\lambda^2}{hc}\,\Delta E .$$

When both levels have g = 1, every component falls at $$\Delta E = 0$$ or $$\pm\mu_\mathrm{B}B$$: three lines, the normal Zeeman effect. When the g factors differ, there are more lines: the anomalous Zeeman effect. Seen along the field, the Δm = 0 light is missing.

## Before the lab

1. Find the wavelength shift of the outer components of the cadmium red line (643.847 nm) in a field of 1.00 T. Use $$\mu_\mathrm{B} = 5.788 \times 10^{-5}$$ eV/T and $$hc = 1239.84$$ eV·nm.
2. Cadmium's red line runs from an upper level, $$^1D_2$$, with five sublevels to a lower level, $$^1P_1$$, with three. Seen across the field at 1.00 T, into how many components do you expect the line to split: 3, 5, 9 or 15? Write down the rule you used.
3. For sodium D₁ ($$^2P_{1/2} \to {}^2S_{1/2}$$), list every allowed pair of $$m_J$$ values and its $$\Delta E/(\mu_\mathrm{B}B) = g_u m_u - g_l m_l$$. How many components are there?

## Safety

No hazards in the virtual lab. Real discharge lamps run at high voltage, and some emit ultraviolet light.

## Procedure

**Cadmium across the field.** The link opens Zeeman: cadmium red line, across the field at 1.00 T. Open Lab and tick Blind (the checkbox that starts "Blind: hide the computed moments"). Set the Field B slider (0.05 T a step) to each field from 0 to 2.00 T in steps of 0.50 T. At each one, put the cursor on the center of the component at the longest wavelength (the one furthest right), and press Record reading. Drag the cursor on the spectrum, or click it and use the arrow keys (0.01 pm a step, Shift for 0.1 pm); the Cursor shift readout shows where it is. At 1.00 T, also count the components you see on the spectrum and write the number in your answer to Question 3. Press Export to worksheet, then Clear under Readings.

**Along the field.** Set Field B to 1.00 T and press Along the field (beside Look). Note which components are left, and record the one at the longest wavelength.

**Sodium.** Pick Sodium D₁ in the Spectral line menu, set Field B to 1.00 T, keep Across the field, and record every component from the shortest wavelength (left) to the longest (right). Do the same for Sodium D₂. Press Export to worksheet: these readings, from along the field on, go into a new copy of the table.

## Data

| Reading | Line | Field B (T) | Seen | Cursor shift Δλ (pm) | Energy shift ΔE (μeV) |
|---|---|---|---|---|---|
| | | | | | |
| | | | | | |
| | | | | | |

Export fills every column but the last. Work out the last column yourself from the shift, the line's wavelength and $$\Delta E = -hc\,\Delta\lambda/\lambda^2$$.

## Analysis

1. Graph Δλ (vertical) against B (horizontal) for the cadmium run, from the first table, and fit a straight line with a free intercept. From the slope, $$\lambda^2\mu_\mathrm{B}/(hc)$$, find $$\mu_\mathrm{B}$$ in eV/T and compare it with the accepted value.
2. Use your $$\mu_\mathrm{B}$$ to find the electron's charge to mass ratio, $$e/m_e = 2\mu_\mathrm{B}/\hbar$$.
3. For each sodium line, convert the shifts to $$\Delta E/(\mu_\mathrm{B}B)$$. Match each component to its pair of $$m_J$$ values, and solve for the g factors of the upper and lower levels. Compare them with the values in the Background.
4. Explain what you saw along the field in terms of which transitions emit light in that direction.

## Uncertainty

The model has no noise, so the scatter about your cadmium fit comes from how well you set the cursor. Estimate that, and carry it through to $$\mu_\mathrm{B}$$. Your sodium g factors will differ slightly from $$\tfrac{2}{3}$$, $$\tfrac{4}{3}$$ and 2; decide whether the difference is larger than your uncertainty, and if so, look up the electron's g factor and explain it.

## Questions

1. In a field of 0.1 T, could a grating with a resolving power of 10,000 separate the cadmium components?
2. Astronomers measure magnetic fields on the Sun from the Zeeman splitting of lines in sunlight. Which line would show the bigger shift in wavelength in the same field, one at 400 nm or one at 800 nm?
3. Which of the counts in Before the lab 2 did the cadmium line show at 1.00 T? Explain that count from the g factors of the two levels and the rule that m changes by 0 or ±1, and say whether it would change at 0.1 T or at 2.00 T.

## What to hand in

Prelab answers, the table copies with your graph and fit, $$\mu_\mathrm{B}$$ and $$e/m_e$$ with uncertainties and comparisons, the sodium g factors with the matching of components, and answers to the questions. Identify simulated data.
