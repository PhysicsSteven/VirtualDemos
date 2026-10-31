# Why Balmer Lines Peak in A Stars
Student laboratory · Astronomy

Textbook: OpenStax *University Physics*, Vol. 3, §6.4 (Bohr's model of the hydrogen atom). Access for free at https://openstax.org/details/books/university-physics-volume-3.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/spectra.html?ws=hydrogen-in-stars)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** M star, 3500 K; The Sun, 5772 K; A star, 9500 K; B star, 20,000 K. This worksheet uses the **Hydrogen in stars** mode.

**Using the demo.**

- The chart plots, against a star's surface temperature (both axes logarithmic), three numbers for the hydrogen in its atmosphere: the ratio of atoms on level n = 2 to atoms on level n = 1 (Boltzmann), the share of all hydrogen that is still neutral (Saha), and their product, the share of all hydrogen on level n = 2. The colored strip under the chart shows the Balmer absorption lines, drawn darker when more atoms are on n = 2.
- Change the temperature with the slider, the setups, or by dragging on the chart. The electron pressure slider sets how crowded the free electrons are, from 1 to 1000 N/m².
- The model is the one in Carroll and Ostlie, *An Introduction to Modern Astrophysics*, §8.1. It counts the neutral atom's partition function as its ground level only and holds the electron pressure fixed while the temperature changes.
- Record reading stores the temperature, the electron pressure, the spectral class, the three ratios and the temperature where the n = 2 share peaks at this pressure. Export to worksheet sends the readings to the first data table, or, when the readings were taken at different electron pressures, to the second. Clear starts a new series, which goes into a new copy of the table.

</details>

## Goal

Find out why the hydrogen Balmer lines are weak in both cool and hot stars and strongest near 10 000 K, and how the pressure in a star's atmosphere moves that peak.

## Background

**Balmer lines.** A hydrogen atom absorbs a Balmer line (Hα at 656 nm, Hβ at 486 nm, and so on) when its electron jumps up from level n = 2. Only atoms already on n = 2 can absorb them. The energy of level n is $$E_n = -13.6\ \text{eV}/n^2$$, so $$E_2 - E_1 = 10.2$$ eV.

**Boltzmann: excitation.** In a gas at temperature $$T$$, the ratio of atoms on two levels is

$$\frac{N_2}{N_1} = \frac{g_2}{g_1}\,e^{-(E_2 - E_1)/kT},$$

where $$g_n = 2n^2$$ is the number of states on level n, so $$g_2/g_1 = 4$$. Use $$k = 8.617\times10^{-5}$$ eV/K.

**Saha: ionization.** Hot atoms also lose their electron. The ratio of ionized to neutral hydrogen is

$$\frac{N_{II}}{N_I} = \frac{2kT\,Z_{II}}{P_e\,Z_I}\left(\frac{2\pi m_e kT}{h^2}\right)^{3/2} e^{-\chi/kT},$$

with $$\chi = 13.6$$ eV the ionization energy, $$P_e$$ the electron pressure, and partition functions $$Z_I \approx 2$$ (the neutral atom, ground level only) and $$Z_{II} = 1$$ (a bare proton). More free electrons (a larger $$P_e$$) recapture more protons, so they keep more hydrogen neutral.

**Putting them together.** The share of all hydrogen that sits on n = 2 is

$$\frac{N_2}{N_{\text{total}}} = \frac{N_2/N_1}{1 + N_2/N_1}\cdot\frac{1}{1 + N_{II}/N_I}.$$

## Before the lab

1. Find $$N_2/N_1$$ at 5772 K (the Sun) and at 10 000 K. How many times larger is it in the hotter star?
2. At what temperature would $$N_2/N_1$$ be 1, so that n = 2 holds as many atoms as n = 1? Is any star that hot? What happens to the hydrogen long before then?
3. In the Saha equation, which factor changes fastest with temperature near 10 000 K? Explain in one sentence why ionization switches on over a narrow range of temperature.
4. Why can a share of atoms on n = 2 of only about $$10^{-5}$$ still make the strongest lines in an A star's spectrum? (Think about how many hydrogen atoms there are.)

## Safety

No hazards in the virtual lab.

## Procedure

**Part 1. Across the spectral classes.** Choose Hydrogen in stars and keep the electron pressure at 20 N/m². Record readings at about ten temperatures from 4000 K to 25 000 K, closer together between 8000 K and 12 000 K. Include the temperature where the share on n = 2 is largest (the readout "Balmer lines strongest at"). Send the readings to the worksheet, then clear them.

**Part 2. The pressure.** Set the temperature to the Balmer peak, then record one reading at each of about six electron pressures from 1 to 1000 N/m², spread evenly on a logarithmic scale. Send them to the worksheet, where they fill the second table.

## Data

**Part 1. Electron pressure 20 N/m².**

| Reading | Temperature $$T$$ (K) | Spectral class | $$N_2/N_1$$ | $$N_{II}/N_I$$ | Share on n = 2, $$N_2/N_{\text{total}}$$ |
|---|---|---|---|---|---|
| | | | | | |
| | | | | | |
| | | | | | |

**Part 2. The peak against the electron pressure.**

| Reading | Electron pressure $$P_e$$ (N/m²) | Balmer peak temperature (K) | log₁₀ $$P_e$$ |
|---|---|---|---|
| | | | |
| | | | |
| | | | |

## Analysis

1. Graph the share on n = 2 against T for Part 1. At what temperature is it largest, and what spectral class is that? Compare with Carroll and Ostlie's 9900 K.
2. Use your table to explain the rise and the fall of the curve. Which ratio controls the cool side, and which controls the hot side?
3. Check one reading by hand: compute $$N_2/N_1$$ from the Boltzmann equation at one of your temperatures and compare with the demo.
4. At the Balmer peak, what fraction of the hydrogen is ionized? Does the peak come before or after half the hydrogen is ionized?
5. Graph the peak temperature against log₁₀ $$P_e$$ from Part 2 and fit a straight line. By how much does the peak move for a tenfold change in pressure?
6. Giant stars have thin atmospheres with low pressure; dwarf stars have dense ones. In which kind of star would Balmer lines peak at a lower temperature? Explain with your Part 2 results.

## Uncertainty

The model makes several approximations, stated in the demo: only the ground level counts in the partition function, the electron pressure stays fixed while T changes, and the line strength is taken to follow the share on n = 2. Pick one and explain how it could move the peak temperature, and in which direction if you can tell.

## Questions

1. The Sun is cooler than the Balmer peak, yet its Balmer lines are easy to see. Use your readings to explain why they are much weaker than in an A star.
2. Before the Saha equation (1920), astronomers thought that the strength of a star's lines told its composition. Cecilia Payne used it in 1925 to show that stars are mostly hydrogen. How does this worksheet show that weak hydrogen lines do not mean little hydrogen?
3. Ionized helium lines appear only in the hottest stars, O stars. Helium's ionization energies (24.6 eV and 54.4 eV) are larger than hydrogen's. Explain why that puts helium's lines at higher temperatures.

## What to hand in

Prelab answers, the data tables, the graphs with the fit, the answers to the analysis and uncertainty sections, and answers to the questions. Identify simulated data.
