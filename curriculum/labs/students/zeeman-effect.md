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
- The level diagram shows the sublevels and the allowed transitions. The lower panel is the spectrum around the line, brightness against the shift of wavelength in picometres; longer wavelengths are to the right.
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
2. Why does the cadmium line split into exactly three, however many sublevels its upper level has?
3. For sodium D₁ ($$^2P_{1/2} \to {}^2S_{1/2}$$), list every allowed pair of $$m_J$$ values and its $$\Delta E/(\mu_\mathrm{B}B) = g_u m_u - g_l m_l$$. How many components are there?
4. Hydrogen Lyman α has a wavelength of 121.567 nm. Compared with the cadmium line in the same field, is its Zeeman shift in wavelength larger or smaller, and by what factor?

## Safety

No hazards in the virtual lab. Real discharge lamps run at high voltage, and some emit ultraviolet light.

## Procedure

**Cadmium across the field.** Start with Zeeman: cadmium red line and turn Blind on. For fields from 0 to 2.00 T in steps of 0.25 T, set the cursor on the center of the component at the longest wavelength and record a reading.

**Along the field.** Clear the readings. At 1.00 T, look along the field. Note which components are left, and record the one at the longest wavelength.

**Hydrogen.** Pick hydrogen Lyman α, look across the field at 2.00 T, and record the component at the longest wavelength.

**Sodium.** Pick sodium D₁ at 1.00 T, across the field, and record every component from the shortest wavelength to the longest. Do the same for sodium D₂. Send these readings, from along the field on, to a new copy of the table.

## Data

| Reading | Line | Field B (T) | Seen | Cursor shift Δλ (pm) | Energy shift ΔE (μeV) |
|---|---|---|---|---|---|
| | | | | | |
| | | | | | |
| | | | | | |

Work out the last column yourself from the shift, the line's wavelength and $$\Delta E = -hc\,\Delta\lambda/\lambda^2$$.

## Analysis

1. Graph Δλ against B for the cadmium run and find the slope. From it, find $$\mu_\mathrm{B}$$ in eV/T and compare it with the accepted value.
2. Use your $$\mu_\mathrm{B}$$ to find the electron's charge to mass ratio, $$e/m_e = 2\mu_\mathrm{B}/\hbar$$.
3. Compare the hydrogen shift with the cadmium shift at 2.00 T. Does the ratio agree with your answer to Prelab 4?
4. For each sodium line, convert the shifts to $$\Delta E/(\mu_\mathrm{B}B)$$. Match each component to its pair of $$m_J$$ values, and solve for the g factors of the upper and lower levels. Compare them with the values in the Background.
5. Explain what you saw along the field in terms of which transitions emit light in that direction.

## Uncertainty

The model has no noise, so the scatter about your cadmium fit comes from how well you set the cursor. Estimate that, and carry it through to $$\mu_\mathrm{B}$$. Your sodium g factors will differ slightly from $$\tfrac{2}{3}$$, $$\tfrac{4}{3}$$ and 2; decide whether the difference is larger than your uncertainty, and if so, look up the electron's g factor and explain it.

## Questions

1. Why is the Zeeman effect hard to see for visible lines without a very high resolution spectrometer?
2. What would the cadmium pattern look like in a field of 0.1 T? Could a grating with a resolving power of 10,000 separate the components?
3. Why do the sodium lines split into more than three components when cadmium's does not?
4. Astronomers measure magnetic fields on the Sun from the Zeeman splitting of lines in sunlight. Which line would show the bigger shift in wavelength in the same field, one at 400 nm or one at 800 nm?

## What to hand in

Prelab answers, the table copies with your graph and fit, $$\mu_\mathrm{B}$$ and $$e/m_e$$ with uncertainties and comparisons, the hydrogen comparison, the sodium g factors with the matching of components, and answers to the questions. Identify simulated data.
