# Star Colors Through U, B and V Filters
Student laboratory · Astronomy

Textbook: OpenStax *University Physics*, Vol. 3, §6.1 (blackbody radiation). Access for free at https://openstax.org/details/books/university-physics-volume-3.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/blackbody.html?ws=ubv-colors)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Human skin; Light bulb; Sun; Betelgeuse; Rigel; Cosmic background. This worksheet uses the **U B V filters** view (the switch above the chart).

**Using the demo.**

- The chart shows the spectrum of an ideal blackbody from 290 to 760 nm, scaled to 1 at its highest point there, with the three standard astronomical filters drawn dashed: U (ultraviolet), B (blue) and V (visual, yellow green), each scaled to 1 at its peak. The shaded area under each filter is the light that filter lets through.
- Change the temperature with the temperature slider (300 K to 50 000 K), the star setups, or the arrow keys on the chart.
- The readouts give the color indexes B − V and U − B and the ratio of the light through B to the light through V.
- The filters are the standard passbands of Bessell (1990). Colors are on the Vega system: the star Vega has B − V = 0 and U − B = 0 by definition, using the Hubble Space Telescope spectrum of Vega.
- Record reading stores the temperature, 10 000 K / T, the B to V light ratio and both color indexes. Export to worksheet sends the readings to the first data table below; Clear starts a new series, which goes into a new copy of the table.

</details>

## Goal

Measure how a blackbody's B − V color index depends on its temperature, and use it as a thermometer for real stars.

## Background

**Magnitudes.** Astronomers measure brightness in magnitudes, a logarithmic scale on which smaller numbers are brighter. Two brightnesses $$F_1$$ and $$F_2$$ differ by

$$m_1 - m_2 = -2.5\log_{10}\frac{F_1}{F_2}.$$

**Color index.** The same star is measured through two filters, B and V. Its color index is the difference of the two magnitudes,

$$B - V = -2.5\log_{10}\frac{F_B}{F_V} + C,$$

where $$F_B$$ and $$F_V$$ are the light through each filter and the constant $$C$$ is fixed so that Vega has $$B - V = 0$$. A hot star is brighter in blue, so its $$B - V$$ is small or negative; a cool star is brighter in V, so its $$B - V$$ is large. A color index needs no distance and no size: it compares the same star with itself.

**The cool limit.** When $$hc/\lambda kT \gg 1$$, Planck's law becomes Wien's approximation, $$B_\lambda \approx (2hc^2/\lambda^5)\,e^{-hc/\lambda kT}$$. If each filter is treated as passing a single wavelength, $$\lambda_B \approx 440$$ nm and $$\lambda_V \approx 550$$ nm, then

$$B - V \approx \text{constant} + \frac{2.5}{\ln 10}\,\frac{hc}{k}\left(\frac{1}{\lambda_B} - \frac{1}{\lambda_V}\right)\frac{1}{T},$$

a straight line against $$1/T$$. Use $$hc/k = 1.4388\times10^{-2}$$ m·K.

## Before the lab

1. Star X sends 2.0 times as much light through B as through V; star Y sends 0.50 times as much. Without the constant $$C$$, what is $$-2.5\log_{10}(F_B/F_V)$$ for each? Which star is hotter?
2. Evaluate the slope of the cool limit formula, $$\frac{2.5}{\ln 10}\frac{hc}{k}\left(\frac{1}{\lambda_B} - \frac{1}{\lambda_V}\right)$$, in kelvins, for 440 nm and 550 nm.
3. Using the slope from question 2, by how much should $$B - V$$ change between 3000 K and 6000 K?
4. Why does a color index not depend on how far away the star is, or on how big it is?

## Safety

No hazards in the virtual lab.

## Procedure

**Part 1. The color scale.** Switch to the U B V filters view. Record readings at about eight temperatures from 3000 K to 30 000 K, spread evenly on a logarithmic scale (for example 3000, 4000, 5000, 6000, 8000, 10 000, 15 000 and 30 000 K). Send them to the worksheet, then clear them.

**Part 2. A closer look at cool stars.** Record readings at about six temperatures from 2500 K to 6000 K. Send them to the worksheet.

**Part 3. Reading real stars.** For each star in the second table, find the temperature at which the demo's B − V equals the star's measured B − V (change the temperature until the readout matches to 0.01), and write that temperature in the table.

## Data

**Part 1 and Part 2.**

| Reading | Temperature $$T$$ (K) | 10 000 K / $$T$$ | Light through B ÷ light through V | B − V | U − B |
|---|---|---|---|---|---|
| | | | | | |
| | | | | | |
| | | | | | |

**Part 3. Real stars.** Measured B − V from the HYG database (Hipparcos and Yale Bright Star catalogs); surface temperatures as the demo's star setups give them.

| Star | Measured B − V | Blackbody temperature with that B − V (K) | Surface temperature (K) |
|---|---|---|---|
| Sun | 0.66 | | 5772 |
| Betelgeuse | 1.50 | | 3600 |
| Rigel | −0.03 | | 12 100 |
| Vega | 0.00 | | |

## Analysis

1. Graph B − V against 10 000 K / T for the Part 1 readings. Is it a straight line over the whole range? Where does it bend?
2. Graph the Part 2 readings the same way and fit a straight line. Convert the slope to kelvins (multiply by 10 000 K) and compare it with your answer to Before the lab 2. Why would the two not agree exactly? (Think about what the filters really pass.)
3. As T grows very large, what does B − V approach? Use the Rayleigh–Jeans limit, $$B_\lambda \propto T/\lambda^4$$, to explain why it stops changing: why can a color index not tell a 30 000 K star from a 50 000 K star?
4. In Part 1, how does U − B change with temperature compared with B − V? Which index is more sensitive for hot stars?
5. For the Sun, Betelgeuse and Rigel, compare the blackbody temperature with the surface temperature. For which star does the blackbody thermometer work best?
6. Vega is an A star. A stars have surface temperatures between 7500 K and 10 000 K (read the spectral class readout). What temperature does the blackbody thermometer give for Vega's B − V = 0? Is Vega bluer or redder than a blackbody at an A star's temperature? Hydrogen absorbs strongly in A stars in two ways: in lines inside the B filter, which take away blue light, and in the continuum beyond 365 nm, where it absorbs more strongly at longer wavelengths, so the V light escapes from higher, cooler layers. Which effect wins for Vega? Does Rigel, a hot B star, show the same?

## Uncertainty

The demo computes an ideal blackbody exactly, so repeated readings agree. A measured B − V is usually good to about 0.01 magnitude. Use the slope from Analysis 2 to find how big a temperature error 0.01 in B − V gives near 3000 K. Is the thermometer more precise for cool stars or for hot ones?

## Questions

1. Cool stars like Betelgeuse have broad molecular absorption bands that take away more blue light than yellow green light. Which way do they push B − V? Does that agree with what you found for Betelgeuse in Analysis 5?
2. Interstellar dust dims blue light more than red light. If a star lies behind dust, does its B − V go up or down? Would you overestimate or underestimate its temperature?
3. Why do astronomers measure a color index instead of the peak wavelength of each star's spectrum?

## What to hand in

Prelab answers, the data tables, the graphs with their fits, the answers to the analysis and uncertainty sections, and answers to the questions. Identify simulated data.
