# Fusion and the Gamow Peak
Student laboratory · Modern Physics

Textbook: OpenStax *University Physics*, Vol. 3, §§10.1 and 10.6. Access for free at https://openstax.org/details/books/university-physics-volume-3.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/nuclear-reactions.html?setup=fuSun)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** The Sun's core; D–T reactor (these two use the Fusion view, the subject of this worksheet); Rutherford 1919; Fission of ²³⁵U (the Nuclear Reactions worksheet); Bare ²³⁵U sphere; Generations (the Critical Size worksheet); ¹³⁷Cs source; ⁹⁹ᵐTc patient (the Radiation Dose worksheet).

**Using the demo.**

- Choose two nuclei (p + p, D + D, D + T, ³He + ³He or p + ¹²C) and the temperature $$T$$ of the gas, from $$10^6$$ K to $$3 \times 10^9$$ K.
- The picture is the potential energy of the two nuclei against their separation, on logarithmic axes: the Coulomb barrier outside the distance at which they touch, with the nuclear well inside. The lines mark $$kT$$ and the Gamow peak energy $$E_0$$, and the shaded band is the stretch of barrier the nuclei must tunnel through at that energy.
- The left graph shows, against collision energy, the Maxwell–Boltzmann factor $$e^{-E/kT}$$, the tunneling factor $$e^{-\sqrt{E_G/E} }$$ and their product, the Gamow peak. The right graph shows the reaction rate coefficient $$\langle\sigma v\rangle$$ against temperature for p + p and D + T.
- The readouts give $$kT$$, the barrier height, the peak position and width measured on the curve, and $$\langle\sigma v\rangle$$ where the demo models it.
- Record reading stores the pair, $$T$$ (in millions of kelvin), $$kT$$, the peak energy and width, the barrier and $$\langle\sigma v\rangle$$. Export to worksheet sends the readings to the Data table below; Clear starts a new series, which goes into a new copy of the table.
- Blind hides the formula values of the peak position and width.

</details>

## Goal

See why fusion needs temperatures of millions of kelvin, why it happens at all far below the Coulomb barrier, and why reactors burn deuterium and tritium at about $$10^8$$ K.

## Background

Two nuclei of charges $$Z_1e$$ and $$Z_2e$$ repel each other until they touch, at a distance $$R_1 + R_2$$ with $$R = r_0A^{1/3}$$, $$r_0 = 1.2$$ fm (§10.1). The top of this Coulomb barrier is

$$V_C = \frac{kZ_1Z_2e^2}{R_1 + R_2}, \qquad ke^2 = 1.44\ \text{MeV fm},$$

some hundreds of keV for light nuclei. In a gas at temperature $$T$$ the typical kinetic energy is of order $$kT$$, and at the Sun's center, $$1.57 \times 10^7$$ K, $$kT$$ is only 1.35 keV. Two effects make fusion possible. A few nuclei are in the high energy tail of the Maxwell–Boltzmann distribution, whose share falls as $$e^{-E/kT}$$. And quantum tunneling lets a nucleus through the barrier with a probability that rises as $$e^{-\sqrt{E_G/E} }$$, where the Gamow energy is $$E_G = 2\mu c^2(\pi\alpha Z_1Z_2)^2$$, with $$\mu$$ the reduced mass and $$\alpha \approx 1/137$$. The product of the two peaks at

$$E_0 = \left(\frac{E_G(kT)^2}{4}\right)^{1/3},$$

the Gamow peak: almost all fusions happen near this energy.

## Before the lab

1. Find the Coulomb barrier for p + p and for D + T, using $$R = 1.2\ \text{fm}\ A^{1/3}$$.
2. What temperature would make $$kT$$ equal to the p + p barrier? ($$k = 8.617 \times 10^{-5}$$ eV/K.)
3. For p + p, $$E_G = 493$$ keV. Find $$E_0$$ at $$1.57 \times 10^7$$ K.
4. How should $$E_0$$ change if the temperature is multiplied by 8?

## Safety

No hazards in the virtual lab.

## Procedure

**Protons.** Start with The Sun's core setup. Record readings for p + p at $$T$$ near 5, 10, 15.7, 30, 60, 100 and 300 million kelvin.

**Deuterium and tritium.** Export and Clear the readings, choose D + T, and record readings at about 10, 15.7, 30, 100, 150, 300 and 1000 million kelvin.

**Heavier pairs.** Export and Clear the readings, then record one reading for each of the five pairs at $$1.57 \times 10^7$$ K.

## Data

| Reading | Nuclei | T (million K) | kT (keV) | Gamow peak E₀ (keV) | Peak width (keV) | Barrier (keV) | ⟨σv⟩ (cm³/s) | ln kT | ln E₀ |
|---|---|---|---|---|---|---|---|---|---|
| | | | | | | | | | |
| | | | | | | | | | |
| | | | | | | | | | |

Fill in the last two columns yourself, with $$kT$$ and $$E_0$$ in keV.

## Analysis

1. Plot $$\ln E_0$$ against $$\ln kT$$ for each pair. Find the slopes and compare them with the 2/3 the formula predicts.
2. From the intercept for p + p, find $$E_G$$ and compare it with Before the lab question 3.
3. At the Sun's center, compare $$E_0$$ with $$kT$$ and with the barrier. What fraction of the barrier height do fusing protons have?
4. For the five pairs at the Sun's temperature, how does $$E_0$$ depend on the charges? Why do stars burn hydrogen long before they can burn carbon?
5. Use your D + T readings to find by what factor $$\langle\sigma v\rangle$$ grows from $$1.57 \times 10^7$$ K to $$1.5 \times 10^8$$ K, and compare D + T with p + p at the same temperature.

## Uncertainty

The demo gives $$E_0$$ to 0.001 keV. Estimate the uncertainty in your slope from Analysis 1 by drawing the steepest and shallowest lines that fit your points, and say whether the difference from 2/3 is significant.

## Questions

1. The Sun's core is more than 400 times too cold for $$kT$$ to reach the p + p barrier. Explain in your own words how fusion happens anyway.
2. At the Sun's center the readout gives a mean time of several billion years for one proton to fuse. Why is that slow rate good for life on Earth?
3. Fusion reactors use D + T at about $$10^8$$ K rather than p + p. Give two reasons from your data.
4. The Gamow peak sits well above $$kT$$, where very few nuclei are. Why are the fusions not mostly at energies near $$kT$$, where most nuclei are?

## What to hand in

Prelab answers, the data tables with your columns, the graph of $$\ln E_0$$ against $$\ln kT$$ with its slopes, and answers to the questions. Identify simulated data.
