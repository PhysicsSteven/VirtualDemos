# Blackbody Radiation
Student laboratory · Thermodynamics and Modern Physics

Textbook: OpenStax *University Physics*, Vol. 2, §1.6, and Vol. 3, §6.1. Access for free at https://openstax.org/details/books/university-physics-volume-3.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/blackbody.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Human skin; Light bulb; Sun; Betelgeuse; Rigel; Cosmic background.

**Using the demo.**

- The chart shows Planck's spectrum $$B_\lambda(T)$$ for an ideal blackbody at the temperature you choose, from 300 K to 50,000 K. Drag the peak on the chart or use the temperature slider. The radius slider sets the size of a star, for its luminosity.
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
5. A tungsten filament at 2800 K, the Sun at 5772 K and Rigel at 12,100 K all glow. Rank the three by the share of their power that comes out as visible light, 380 to 750 nm. Is the filament's share more than half, about a quarter, or less than a tenth?

## Safety

No hazards in the virtual lab. Never look directly at the Sun or a bright lamp.

## Procedure

**A range of temperatures.** Set about ten temperatures spread from 1000 K to 30,000 K with the Temperature T slider (it is logarithmic, so get near a round value and record whatever the Temperature readout shows; for fine steps click the chart and press ↑ or ↓, 1 % a press) or by dragging the peak on the chart. Press Record reading at each one. Include the Sun: press the Sun button under Glowing objects and record it too.

**Cool objects.** Press Export to worksheet to send these readings to the first copy of the Data table, then press Clear. Press the Human skin, Light bulb and Cosmic background buttons in turn, pressing Record reading after each, and press Export to worksheet again; these go into a second copy of the table. Then press the Light bulb, Sun and Rigel buttons in turn, without Record reading, and write the Visible share, 380 to 750 nm readout for each in your answer to Question 5.

## Data

| Reading | Temperature $$T$$ (K) | Peak wavelength $$\lambda_\mathrm{max}$$ (nm) | Flux $$F$$ (W/m²) | $$1/T$$ (1/K) | $$\ln T$$ ($$T$$ in K) | $$\ln F$$ ($$F$$ in W/m²) |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |
| | | | | | | |

## Analysis

1. Fill in the $$1/T$$, $$\ln T$$ and $$\ln F$$ columns of the first table copy. Plot $$\lambda_\mathrm{max}$$ (vertical) against $$1/T$$ (horizontal). From the slope (in nm·K; multiply by $$10^{-9}$$ for m·K) find Wien's constant $$b$$ and compare it with $$2.898\times10^{-3}$$ m·K.
2. Plot $$\ln F$$ (vertical) against $$\ln T$$ (horizontal) for the first table copy. Compare the slope with 4, and from the intercept, $$\ln\sigma$$, find $$\sigma$$; compare it with $$5.670\times10^{-8}$$ W/(m²·K⁴).
3. Read the peak wavelengths of human skin and the cosmic background from the second table copy, and name the part of the spectrum each lies in.
4. Use the Stefan and Boltzmann law to find the power given off by 1.5 m² of skin at 305 K. Why is the net loss from a person in a room much smaller?

## Questions

1. Why does a heated piece of metal glow red first, then orange, then white?
2. Why are there no green stars?
3. Rigel looks blue and Betelgeuse red. Press the Rigel and Betelgeuse buttons and read the Temperature readout for each. Which is hotter, and by roughly how much?
4. Classical physics predicted the Rayleigh and Jeans curve. What went wrong at short wavelengths, and how did Planck fix it?
5. Set your three visible shares beside the ranking you made in Before the lab 5. Use each peak wavelength and the shape of Planck's curve to explain why the shares fall in the order they do, and say in which part of the spectrum the rest of each object's power goes.

## Uncertainty

For courses that treat measurement uncertainty. This section is not counted in the 75 minutes; do it when your instructor assigns it.
{: .ws-assigned}

The readings are taken from the curve to five significant figures, so the uncertainty here is from rounding only. Real stars are not perfect blackbodies; say how absorption lines in a star's atmosphere would affect a temperature found from its peak wavelength.

Give the slope and intercept of each graph with their standard errors. Say whether the intercept of the $$\lambda_\mathrm{max}$$ graph is zero within its uncertainty, and whether your $$\sigma$$ agrees with $$5.670\times10^{-8}$$ W/(m²·K⁴) within its uncertainty.

## With calculus

For courses that use calculus. This section is not counted in the 75 minutes; do it when your instructor assigns it.

1. Derive Wien's law from Planck's law. Set $$dB_\lambda/d\lambda = 0$$, write $$x = hc/\lambda kT$$, and show that the peak satisfies $$x = 5\left(1 - e^{-x}\right)$$. Solve it by starting at $$x = 5$$ and putting each answer back into the right side until it stops changing, then find $$b = hc/(xk)$$ and compare with your $$b$$ from Analysis 1.
2. The flux from a unit area is $$F = \pi\int_0^\infty B_\lambda\,d\lambda$$ (the $$\pi$$ comes from adding up all directions). Change the variable to $$x = hc/\lambda kT$$ and show that $$F = \sigma T^4$$ with $$\sigma = \dfrac{2\pi^5k^4}{15h^3c^2}$$, using $$\int_0^\infty \frac{x^3\,dx}{e^x - 1} = \frac{\pi^4}{15}$$. Work out $$\sigma$$ and compare with your value from Analysis 2.
3. From $$F = \sigma T^4$$, $$dF/dT = 4F/T$$. From your 1000 K and 2000 K rows, estimate $$dF/dT$$ at 1500 K (their difference in $$F$$ over 1000 K) and compare it with $$4F/T$$ from your 1500 K row. Show that for $$T^4$$ this difference estimate is exactly $$4T^3 + 4T\,h^2$$, where $$h$$ = 500 K is the half spacing, and use it to explain the gap.

## What to hand in

Prelab answers, the table copies with their graphs and fits, your values of $$b$$ and $$\sigma$$ with comparisons, and answers to the questions (and to Uncertainty and With calculus, if assigned). Identify simulated data.
