# The Infrared Spectrum of HCl
Student laboratory · Modern Physics

Textbook: OpenStax *University Physics*, Vol. 3, §§9.1 and 9.2. Access for free at https://openstax.org/details/books/university-physics-volume-3.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/molecules.html?setup=band)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** HCl band; Two isotopes; Hot gas (these three use the HCl spectrum view, the subject of this worksheet); HCl levels (the Energy levels view); CO₂ and infrared, Ozone and ultraviolet, NO₂ in visible light (the Molecules and light view, the subject of the Molecules and Light worksheet); NaCl molecule; Pull the ions apart; H₂ bond; H₂ spins parallel (the bonds worksheet).

**Using the demo.**

- The HCl spectrum view shows the infrared absorption of HCl gas between 2560 and 3140 cm⁻¹ (wavelengths near 3.5 μm), as a spectrometer would record it. It is simulated from the measured spectroscopic constants of HCl. The lower graph is a close up around the cursor.
- Move the cursor by dragging on either graph, with the slider, or with the arrow keys on a graph. With the lock on, the cursor sits on the top of the nearest peak and the arrow keys step from peak to peak.
- You can set the gas temperature, the resolution of the spectrometer (the width of each line), and whether the chlorine is natural (a mixture of ³⁵Cl and ³⁷Cl) or ³⁵Cl only.
- The Energy levels view shows the vibration and rotation levels and the transitions between them, in the book's model or with the measured constants.
- The Molecules and light view (the Molecules and Light worksheet) sends photons from a lamp at one of seven molecules and shows what each one does.
- Record reading stores the cursor's wavenumber, the absorbance there (relative to the strongest peak), the temperature, the resolution and the chlorine. Export to worksheet sends the readings to the Data table below; Clear starts a new series, which goes into a new copy of the table.
- Blind (in the Lab section) hides the line names, the band center and the nearest line readout.

</details>

## Goal

Measure the lines of the infrared absorption band of HCl, and from their positions find the moment of inertia and bond length of the molecule and the spring constant of its bond.

## Background

A diatomic molecule vibrates and rotates. In the simplest model (§9.2) the vibration is a harmonic oscillator and the rotation a rigid rotor:

$$E = \left(n + \tfrac{1}{2}\right)hf + l(l+1)\frac{\hbar^2}{2I}, \qquad I = \mu r^2, \qquad \mu = \frac{m_1 m_2}{m_1 + m_2}.$$

A photon carries one unit of angular momentum, so when the molecule absorbs one, $$l$$ must change by 1. In the infrared band $$n$$ goes from 0 to 1, and $$l$$ goes up by one (the R branch) or down by one (the P branch). In wavenumbers ($$\tilde\nu = 1/\lambda = E/hc$$) the lines are at

$$\tilde\nu = \tilde\nu_0 + 2Bm, \qquad B = \frac{\hbar^2}{2I\,hc} = \frac{h}{8\pi^2 c I},$$

where $$\tilde\nu_0$$ is the band center ($$hf/hc$$) and $$m = l + 1$$ for an R line starting from level $$l$$ and $$m = -l$$ for a P line. There is no line with $$m = 0$$, so the band has a gap at its center, twice as wide as the spacing of the other lines.

A real molecule stretches a little more in $$n = 1$$, so its moment of inertia there is larger and its rotational constant $$B_1$$ smaller than $$B_0$$ in $$n = 0$$. Then

$$\tilde\nu(m) = \tilde\nu_0 + (B_1 + B_0)m + (B_1 - B_0)m^2,$$

and the spacing between neighboring lines is

$$\tilde\nu(m+1) - \tilde\nu(m) = 2B_1 + 2(B_1 - B_0)m.$$

The force constant of the bond follows from the vibration: $$k = \mu\,(2\pi c\,\tilde\nu_0)^2$$. Masses: H 1.00783 u, ³⁵Cl 34.96885 u, ³⁷Cl 36.96590 u.

## Before the lab

1. Find the reduced mass of H³⁵Cl in u and in kg.
2. Why does the band have no line at its center?
## Safety

No hazards in the virtual lab.

## Procedure

**The band.** The link opens the HCl band setup (Gas temperature T 300 K, Resolution 0.5 cm⁻¹, Chlorine natural, Lock the cursor to the top of the nearest peak ticked). Each line is a pair, a tall peak with a small one just below it in wavenumber. Click the upper graph, then use the arrow keys to step the cursor from peak to peak. Press Record reading on the tall peak of each pair from the eighth line below the gap up to the eighth line above it (16 readings): each stores the cursor's wavenumber and the relative absorbance.

**The isotopes.** Press Export to worksheet and Clear, then the Two isotopes setup (Resolution 0.2 cm⁻¹). For the first, fourth and eighth lines above the gap and the same three below it, record both peaks of the pair (12 readings); the close up graph shows the pair at the cursor.

## Data

| Reading | Wavenumber (cm⁻¹) | Relative absorbance | Line | m | Spacing to the next line (cm⁻¹) |
|---|---|---|---|---|---|
| | | | | | |
| | | | | | |
| | | | | | |

## Analysis

1. Name each line of the band run, R(0), R(1), ... above the gap and P(1), P(2), ... below it, and fill in $$m$$. How wide is the gap compared with the other spacings?
2. Plot wavenumber against $$m$$. Find the slope and intercept, and look at the residuals. What does their shape tell you?
3. Fill in the spacing column, the next line's wavenumber minus this one's, for every line whose neighbor at $$m + 1$$ is in the same branch. Plot the spacing against $$m$$ and find the slope and intercept. Use them to find $$B_1$$ and $$B_0$$.
4. From $$B_0$$, find the moment of inertia of HCl in $$n = 0$$ and its bond length. Do the same for $$n = 1$$. By how much does the bond stretch?
5. Estimate the band center $$\tilde\nu_0$$ from the lines either side of the gap, using your values of $$B_0$$ and $$B_1$$. Find the force constant of the bond.
6. For each isotope pair, find the shift of the H³⁷Cl line below the H³⁵Cl line. Predict the shift of the band center from the reduced masses, $$\tilde\nu_0\left(1 - \sqrt{\mu_{35}/\mu_{37} }\right)$$, and compare. Compare the absorbance ratio of the pairs with the abundances of ³⁵Cl (75.76 %) and ³⁷Cl (24.24 %).
## Uncertainty

The cursor locks to the top of each peak and reads to 0.01 cm⁻¹. Estimate the uncertainty in each spacing, and use the standard errors of your fits to give uncertainties for $$B_0$$, $$B_1$$, the bond length and the force constant. Does the width of the lines (the resolution) limit how well you can find their centers here?

## Questions

1. Why is the band center lower than the harmonic frequency $$\omega_e$$ = 2990.9 cm⁻¹ that the vibration would have for very small oscillations?
## What to hand in

Prelab answers, the table copies with your line names, $$m$$ and spacings, the two graphs, your values of $$B_0$$, $$B_1$$, the bond length, the band center and the force constant with uncertainties, the isotope comparison, and answers to the questions. Identify simulated data.
