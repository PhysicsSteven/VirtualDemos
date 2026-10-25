# Blackbody Radiation
Student laboratory · Thermodynamics and Modern Physics

Textbook: OpenStax *University Physics*, Vol. 2, §1.6, and Vol. 3, §6.1. Access for free at https://openstax.org/details/books/university-physics-volume-3.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/blackbody.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Human body; Light bulb; Sun; Betelgeuse; Rigel; Cosmic background.

**Using the demo.**

- The chart shows Planck's spectrum $$B_\lambda(T)$$ for an ideal blackbody at the temperature you choose, from 300 K to 50 000 K. Drag the peak on the chart or use the temperature slider. The radius slider sets the size of a star, for its luminosity.
- The strip under the chart shows the color the eye would see, worked out from the spectrum with the CIE 1931 color matching functions.
- Real stars have absorption lines; the temperature here is the effective temperature of an ideal blackbody.
- Pin this curve keeps up to three curves on the chart for comparison. The Rayleigh and Jeans layer shows the classical prediction.
- Record reading stores the temperature and readings taken from the curve itself: the wavelength of the peak, found by searching the curve, the height of the peak, the total flux from the surface, found as $$\pi$$ times the area under the curve, and the share of the flux in visible light. Export to worksheet sends the readings to the Data table below; Clear starts a new series, which goes into a new copy of the table.

</details>

## Goal

Find Wien's displacement law and the Stefan and Boltzmann law from blackbody spectra, and measure the constants in each.

## Background

Every object gives off thermal radiation. An ideal absorber, a **blackbody**, gives off a spectrum that depends only on its temperature (Vol. 3, §6.1), given by Planck's law

$$B_\lambda(T) = \frac{2hc^2}{\lambda^5}\,\frac{1}{e^{hc/\lambda kT} - 1}.$$

The peak of the spectrum moves to shorter wavelengths as the temperature rises, by **Wien's displacement law**, and the total power given off per unit area rises steeply, by the **Stefan and Boltzmann law** (Vol. 2, §1.6):

$$\lambda_\mathrm{max} = \frac{b}{T}, \qquad F = \sigma T^4.$$

Taking logarithms, $$\ln F = 4\ln T + \ln\sigma$$, so a plot of $$\ln F$$ against $$\ln T$$ is a straight line of slope 4.

## Before the lab

1. The Sun's surface is at about 5772 K. Use $$b = 2.898\times10^{-3}$$ m·K to predict its peak wavelength.
2. By what factor does the flux rise if the temperature doubles?
3. Your skin is at about 305 K. In what part of the spectrum is its peak?
4. Sketch $$\lambda_\mathrm{max}$$ against $$1/T$$. What is the slope?

## Safety

No hazards in the virtual lab. Never look directly at the Sun or a bright lamp.

## Procedure

**A range of temperatures.** Record a reading at about ten temperatures spread from 1000 K to 30 000 K, using the slider or by dragging the peak. Include the Sun.

**Cool objects.** Send the readings to the worksheet, then clear them and record the Human body, the Light bulb and the Cosmic background setups, and send those to the worksheet too.

## Data

| Reading | Temperature $$T$$ (K) | Peak wavelength $$\lambda_\mathrm{max}$$ (nm) | Flux $$F$$ (W/m²) | $$1/T$$ (1/K) | $$\ln T$$ ($$T$$ in K) | $$\ln F$$ ($$F$$ in W/m²) |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |
| | | | | | | |

## Analysis

1. Plot $$\lambda_\mathrm{max}$$ against $$1/T$$. From the slope find Wien's constant $$b$$ and compare it with $$2.898\times10^{-3}$$ m·K.
2. Plot $$\ln F$$ against $$\ln T$$. Compare the slope with 4, and from the intercept find $$\sigma$$; compare it with $$5.670\times10^{-8}$$ W/(m²·K⁴).
3. Find the peak wavelengths of the human body and the cosmic background, and name the part of the spectrum each lies in.
4. Use the Stefan and Boltzmann law to find the power given off by 1.5 m² of skin at 305 K. Why is the net loss from a person in a room much smaller?

## Uncertainty

The readings are taken from the curve to five significant figures, so the uncertainty here is from rounding only. Real stars are not perfect blackbodies; say how absorption lines in a star's atmosphere would affect a temperature found from its peak wavelength.

## Questions

1. Why does a heated piece of metal glow red first, then orange, then white?
2. Why are there no green stars?
3. Rigel looks blue and Betelgeuse red. Which is hotter, and by roughly how much?
4. Classical physics predicted the Rayleigh and Jeans curve. What went wrong at short wavelengths, and how did Planck fix it?

## What to hand in

Prelab answers, the table copies with their graphs and fits, your values of $$b$$ and $$\sigma$$ with comparisons, and answers to the questions. Identify simulated data.
