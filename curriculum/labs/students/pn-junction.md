# The pn Junction Diode and LEDs
Student laboratory · Modern Physics

Textbook: OpenStax *University Physics*, Vol. 3, §§9.5 and 9.7. Access for free at https://openstax.org/details/books/university-physics-volume-3.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/solids.html?setup=dvDiode)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Diode; LED colors (these two use the Junction view, the subject of this worksheet); Rock salt; Cesium chloride (the Lattice energy worksheet); Levels become bands; Filling the bands (the Energy bands worksheet); Pure silicon; n type silicon (the Doping worksheet).

**Using the demo.**

- A silicon pn junction is wired to a battery and an ammeter. Set the bias from −3 V to +0.75 V (positive means the p side is positive: forward bias), the temperature from 200 K to 400 K, the saturation current at 300 K from 10⁻¹⁴ A to 10⁻⁸ A, and the doping of each side.
- The picture shows the holes in the p side, the electrons in the n side and the fixed charged ions in the depletion region between them, to scale; below it, the band diagram across the junction with the Fermi level on each side.
- The diode is ideal: there is no series resistance and no breakdown, so above about 0.7 V the current is larger than a real diode would pass.
- In LED mode, pick an LED material or any band gap; the spectrometer reads the peak wavelength of the light. LED readings are not recorded: write them in the LED table by hand.
- The graphs show the current against the bias, and $$\ln(I/1\ \text{A})$$ against the forward bias, with your readings as dots; in LED mode, the spectrum and the photon energy against wavelength.
- Record reading stores the temperature, bias and current (and the settings). Export to worksheet sends the readings to the first Data table below; Clear starts a new series, which goes into a new copy of the table.
- Blind hides the theory curves, the thermal voltage, the built in potential and the barrier height.

</details>

## Goal

Measure the current through a pn junction diode in forward and reverse bias, use the exponential rise of the forward current to find $$e/k$$, and relate the color of an LED to its band gap.

## Background

Where p type and n type silicon meet, electrons diffuse into the p side and holes into the n side, leaving a depletion region of fixed charged ions whose field stops further diffusion (§9.7). A forward bias $$V$$ lowers the barrier by $$eV$$, and the number of carriers able to cross grows by the Boltzmann factor $$e^{eV/kT}$$; a reverse bias raises it. The net current is

$$I = I_0\left(e^{eV/kT} - 1\right),$$

where $$I_0$$ is the small saturation current that flows in reverse bias. For $$eV \gg kT$$, $$\ln I \approx \ln I_0 + \dfrac{e}{kT}V$$, so a graph of $$\ln I$$ against $$V$$ is a straight line of slope $$e/kT$$.

In a light emitting diode, an electron crossing the junction drops from the conduction band into a hole in the valence band and gives off a photon of energy close to the band gap: $$hf = hc/\lambda \approx E_g$$, with $$hc = 1240$$ eV·nm.

## Before the lab

1. At 300 K, what is $$kT/e$$ in millivolts? By what factor does the forward current grow for each 0.1 V increase in bias?
2. With $$I_0 = 1$$ pA at 300 K, find the current at $$V = 0.5$$ V and at $$V = -0.5$$ V.
3. The book's Example 9.6 has a diode with $$I_0 = 2.2 \times 10^{-8}$$ A passing 0.45 A at 0.12 V. Find $$eV/kT$$ and the temperature.
4. What band gap gives red light of 650 nm? Blue light of 450 nm?

## Safety

No hazards in the virtual lab.

## Procedure

**Forward and reverse at 300 K.** Pick Diode (300 K, $$I_0$$ = 1 pA at 300 K). Set each bias on the **Bias voltage V** slider (drag close, then the arrow keys give 0.01 V steps; the Bias V readout shows the value) and press **Record reading**, which stores the Current I readout: at −2.0, −1.5, −1.0, −0.5 and 0 V, then from 0.10 V to 0.70 V in steps of 0.05 V (18 readings).

**Other temperatures.** Press Export to worksheet, then Clear. Set the **Temperature T** slider to 250 K (5 K steps) and record the forward current from 0.10 V to 0.70 V in steps of 0.10 V (7 readings). Press Export to worksheet. Each temperature goes into its own copy of the table.

**LEDs.** Pick LED colors. Choose each of GaAs, InP, GaP and GaN in the **LED material** menu and write the Spectrometer peak readout in the LED table.

## Data

| Reading | Temperature $$T$$ (K) | Bias $$V$$ (V) | Current $$I$$ (A) | ln(I / 1 A) |
|---|---|---|---|---|
| | | | | |
| | | | | |
| | | | | |

**LEDs.** One row for each material.

| LED material | Peak wavelength $$\lambda$$ (nm) | Photon energy $$hc/\lambda$$ (eV) | Table 9.4 band gap (eV) |
|---|---|---|---|
| | | | |
| | | | |
| | | | |
| | | | |

## Analysis

1. Plot $$I$$ (vertical) against $$V$$ (horizontal) for 300 K, forward and reverse (first copy of the table). Describe the curve. What is the current in reverse bias, and how does it compare with $$I_0$$?
2. Export fills the $$\ln(I/1\ \text{A})$$ column with the natural log of the current for the forward readings (it stays blank where the current is zero). For each temperature, plot $$\ln I$$ (vertical) against $$V$$ (horizontal) for the forward readings, 0.10 V and up, and fit a straight line. From each slope, find $$e/k$$ (slope × T). Compare with the accepted $$e/k = 11\,605$$ K/V.
3. From the intercept at 300 K, find $$I_0$$ and compare it with the setting.
4. How does $$I_0$$, from the intercepts, change between 250 K and 300 K? Why does it change so much more than the slope?
5. Complete the LED table. How well does the photon energy match the band gap?

## Uncertainty

Use the standard errors of your slopes to give each value of $$e/k$$ with its uncertainty. Why should readings below about 0.1 V be left out of the straight line fit? Estimate how large the $$-1$$ in the diode equation is compared with $$e^{eV/kT}$$ at 0.10 V and at 0.05 V.

## Questions

1. Does the depletion region get wider or narrower in forward bias? Explain using the barrier.
2. Silicon makes poor LEDs, and the first bright blue LEDs needed gallium nitride. Use your LED table to explain why a blue LED needs a wide gap material.

## What to hand in

Prelab answers, the data tables with the graphs, your values of $$e/k$$ with their uncertainties, $$I_0$$ from the intercepts, the LED table, and answers to the questions. Identify simulated data.
