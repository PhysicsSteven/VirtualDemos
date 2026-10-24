# X Ray Spectra and Moseley's Law
Student laboratory · Modern Physics

Textbook: OpenStax *University Physics*, Vol. 3, §8.5. Access for free at https://openstax.org/details/books/university-physics-volume-3.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/shells-and-x-rays.html?setup=copper)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Copper tube, 30 kV; Below the K edge; Mystery target (these three use the X ray tube view, the subject of this worksheet); Fill up to neon; Chromium breaks the rule (the shells and periodic table worksheet).

**Using the demo.**

- Electrons from a hot filament are accelerated through a voltage V, from 5 to 100 kV, and stop in the target. A spectrometer measures the X rays. Plot the spectrum against wavelength or against photon energy.
- The smooth part is bremsstrahlung, the radiation of electrons slowing down in the target. Its shape follows Kramers' law for a thick target, and it ends at the photon energy eV.
- If eV is above the target's K edge, the electrons can knock out K electrons, and the K lines appear: Kα₁ (from L₃), Kα₂ (from L₂) and Kβ₁ (from M₃). The line energies and K edges are measured values from the NIST X-Ray Transition Energies Database.
- The heights of the lines are drawn, not computed, and only roughly follow real tubes. Absorption in the target and window, which cuts off the long wavelength end of a real spectrum, the weaker K lines and the L lines are left out.
- The spectrometer gives each line a width of 0.15% of its energy.
- Drag the cursor on the spectrum, or use the arrow keys (Shift for bigger steps), to measure a wavelength or energy.
- Record reading stores the target, Z, the voltage and the cursor's wavelength and energy, and the shortest wavelength and line energies unless Blind is on. Export to worksheet sends the readings to the Data table below. Clear starts a new series, which goes into a new copy of the table.
- Blind hides the line energies, the cutoff and their labels; with it on you measure them with the cursor. The mystery target's name and Z are never recorded.

</details>

## Goal

Measure the shortest wavelength an X ray tube emits and use it to find Planck's constant, measure the Kα lines of a range of elements to test Moseley's law, and use the law to identify an unknown target.

## Background

An electron accelerated through a voltage V arrives at the target with kinetic energy eV. As it slows down in the target it emits X rays with a continuous spread of energies, but no photon can carry more than eV. So the spectrum ends sharply at the shortest wavelength

$$\lambda_\mathrm{min} = \frac{hc}{eV},$$

the Duane–Hunt limit (§8.5). It depends on the voltage but not on the target.

If the electrons have enough energy to knock an electron out of the K shell (n = 1), an electron from a higher shell falls into the hole and emits a photon with the difference in energy. These lines are characteristic of the target element. For the Kα line, an L electron (n = 2) falls into the K shell. It sees the nuclear charge Ze screened by the one K electron left, so roughly as in hydrogen with charge $$(Z - 1)e$$:

$$E_{K\alpha} \approx (13.6\ \mathrm{eV})(Z-1)^2\left(\frac{1}{1^2} - \frac{1}{2^2}\right) = \frac{3}{4}(13.6\ \mathrm{eV})(Z-1)^2 .$$

This is Moseley's law: $$\sqrt{E_{K\alpha}}$$ grows in a straight line with Z. In 1913 Moseley used it to put the elements in order of Z and to find the gaps in the periodic table.

## Before the lab

1. Find $$\lambda_\mathrm{min}$$ for a tube at 30.0 kV, using $$hc = 1239.84$$ eV·nm.
2. Use Moseley's law to estimate the Kα energy and wavelength of copper (Z = 29). The measured Kα₁ energy is 8.048 keV; how close is the estimate?
3. Molybdenum's K edge is at 20.0 keV. What is the lowest tube voltage that gives molybdenum K lines? Why is that more than the energy of its Kα photons?
4. If you raise the voltage of a copper tube from 30 kV to 40 kV, which features of the spectrum move, and which stay where they are?

## Safety

No hazards in the virtual lab. Real X ray tubes produce ionizing radiation and run at lethal voltages; they are used only inside interlocked shielding.

## Procedure

**The spectrum.** Start with Copper tube, 30 kV. Name the parts of the spectrum, and watch what happens as you change the voltage. Turn Blind on for the rest of the lab.

**The shortest wavelength.** For copper at 10, 15, 20, 25, 30, 40, 50 and 60 kV, set the cursor at the shortest wavelength, where the spectrum starts to rise, and record a reading.

**The K edge.** Pick Below the K edge. Raise the voltage from 15 kV in steps of 0.5 kV, and note the lowest voltage at which the K lines appear.

**Moseley's law.** Clear the readings. Set 80 kV, and for each of titanium, iron, copper, zinc, molybdenum, silver, tin and tungsten, set the cursor on the Kα₁ peak and record a reading. Send this run to a new copy of the table.

**A mystery target.** Clear again and pick Mystery target. Record the Kα₁ peak and the Kβ₁ peak. Send this run to a third copy of the table.

## Data

| Reading | Target | Z | Tube voltage V (kV) | Cursor wavelength λ (pm) | Cursor energy E (keV) | 1/V (1/kV) | √E (√keV) |
|---|---|---|---|---|---|---|---|
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |

Fill in the last two columns yourself where you need them.

## Analysis

1. Graph $$\lambda_\mathrm{min}$$ against $$1/V$$. The slope is $$hc/e$$; use it and the accepted values of c and e to find Planck's constant.
2. Graph $$\sqrt{E}$$ against Z for the Kα₁ lines. Find the slope and the intercept on the Z axis, and compare both with Moseley's law. What does the intercept tell you about screening?
3. Use your fit to find Z for the mystery target, and name it.
4. Compare the voltage at which molybdenum's K lines appeared with its K edge and with the energy of its Kα₁ line. Explain.
5. Look at the two Kα lines of tungsten. Why are there two, and why are they so close together compared with the gap to Kβ₁?

## Uncertainty

The spectrum has no noise, but the start of the bremsstrahlung and the peaks of the lines have to be judged by eye. Estimate how well you can set the cursor at each, and carry it through to h and to the mystery Z. Moseley's law itself is an approximation; say whether your points scatter about the straight line by more than your cursor uncertainty.

## Questions

1. Why does the shortest wavelength depend on the voltage but not on the target, while the K lines depend on the target but not on the voltage?
2. The Duane–Hunt limit gives h from $$\lambda_\mathrm{min}$$, V, e and c. What does that measurement have in common with the photoelectric effect, and how is it the reverse?
3. Before Moseley, the periodic table was ordered by atomic mass, and cobalt (58.93 u) came after nickel (58.69 u). How would X ray spectra settle the order?
4. Why are X ray lines a better fingerprint of an element than its visible spectrum when the element is in a compound?

## What to hand in

Prelab answers, the three table copies with their graphs and fits, your value of h with its uncertainty, the slope and intercept of your Moseley plot with comparisons, the mystery Z and element, the K edge observation, and answers to the questions. Identify simulated data.
