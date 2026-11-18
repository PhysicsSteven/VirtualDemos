# Star Colors, Lines and Temperature
Student laboratory · Astronomy

Textbook: OpenStax *Astronomy 2e*, §17.2 to §17.4 (the colors of stars, the spectra of stars, using spectra to learn about stars). Access for free at https://openstax.org/details/books/astronomy-2e.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/spectral-classes.html?ws=stellar-temperature)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Betelgeuse, 3,500 K; The Sun, 5,772 K; An A star, 9,600 K; Rigel, 12,000 K; A B star, 20,000 K; An O star, 40,000 K; A giant: thinner gas. The same setups work in all four modes, chosen above the picture: **Color**, **Spectral lines**, **Payne** and **Hydrogen at A**. This worksheet uses all four.

**Using the demo.**

- The picture shows the star in its own color, its visible spectrum with dark absorption lines, and the spectral class bar from O to M. Change the temperature with the **Surface temperature** slider, by dragging along the class bar, or by clicking the temperature readout and typing a value.
- Color graphs the light the star gives off at each wavelength, with its peak marked. Spectral lines graphs how many atoms can make each line, against temperature. Payne shows, for each element, the share of its atoms that have lost no electrons, one or two (H I, H II and so on; Ca II is calcium that has lost one electron). Hydrogen at A counts the hydrogen atoms on each energy level.
- Record reading stores the temperature, the class, the peak wavelength, the calcium shares and the hydrogen on level 2, in any mode. Export to worksheet sends the readings to the first data table. Clear starts a new series, which goes into a new copy of the table.
- The model: blackbody light (Planck), and the Boltzmann and Saha equations for how many atoms are on each level and in each stage of ionization, with the gas's electron pressure held fixed. Line strength is taken to follow the number of atoms able to make the line, as Cecilia Payne did.

</details>

## Goal

Read a star's temperature from its color, sort stars into spectral classes, and find out why the dark lines in a star's spectrum depend on its temperature, not on what it is made of.

## Background

**Color.** A hot, dense object glows with light of every color, and the hotter it is, the shorter the wavelength where its light is brightest. That peak wavelength follows **Wien's law**,

$$\lambda_\text{peak} = \frac{b}{T},\qquad b = 2.90\times10^6\ \text{nm K},$$

with $$T$$ in kelvin and $$\lambda_\text{peak}$$ in nanometers. Visible light runs from about 400 nm (violet) to 700 nm (red). A cool star's peak is in the infrared and its visible light leans red; a hot star's peak is in the ultraviolet and its visible light leans blue. Moving a star farther away makes it fainter at every wavelength by the same factor, so its color, and its peak, do not change: color measures temperature at any distance.

**Spectral classes.** A star's spectrum is a rainbow crossed by dark lines, where atoms in its outer layers absorb particular wavelengths. Stars are sorted by these lines into classes, hottest to coolest O B A F G K M (OpenStax *Astronomy 2e*, Table 17.2):

- O: above 30,000 K
- B: 10,000 to 30,000 K
- A: 7,500 to 10,000 K
- F: 6,000 to 7,500 K
- G: 5,200 to 6,000 K
- K: 3,700 to 5,200 K
- M: 2,400 to 3,700 K

**Why the lines change.** An atom can absorb a line only if it is in the right state. Heat knocks electrons off atoms (ionization): calcium that has lost one electron, written Ca II, makes the strong H and K lines; calcium that has lost two, Ca III, has no lines in the visible at all. Heat also lifts electrons to higher energy levels: hydrogen's visible lines are absorbed only by atoms whose electron starts on level 2. In 1925 Cecilia Payne showed that once you account for these states, nearly every star has the same make up, mostly hydrogen and helium. Different stars show different lines because they have different temperatures.

## Before the lab

1. Betelgeuse's surface is about 3,500 K. Where does its light peak? Is that in the visible?
2. A star's light peaks at 145 nm. What is its temperature, and what class is it?
3. Use the list of classes in the Background to give the class of the Sun (5,772 K), of a 9,600 K star and of Rigel (12,000 K).
4. The Sun's spectrum has very strong calcium lines (Ca II H and K). Rigel, at about 12,000 K, shows much weaker ones. Does Rigel have less calcium than the Sun? Write your answer and your reason before you open the demo.

## Safety

No hazards in the virtual lab.

## Procedure

**Part 1. Color.** Open the demo and choose **Color** above the picture.

1. Under Setups, press **Betelgeuse, 3,500 K** and press **Record reading** in the Readings section of the sidebar. Do the same for **The Sun**, **An A star**, **Rigel**, **A B star** and **An O star**.
2. Set two more temperatures by clicking the **Surface temperature** readout and typing them: 4,500 K and 7,000 K. Record a reading at each.
3. Press **Export to worksheet**. The eight readings fill Table 1 below. Fill in the last column, $$1/T$$, for each row (in 1/K; for 3,500 K it is 0.000286).

**Part 2. Payne.** Choose **Payne** above the picture and press **The Sun**. Each bar splits one element's atoms by how many electrons they have lost; the outlined parts are the ones that make lines in the visible. Then press **Rigel**. Your Table 1 already has calcium's shares for both stars.

Compare the calcium bar for the two stars, and the Ca II column of Table 1 for the Sun and Rigel: note which stage of calcium most of Rigel's calcium is in, and whether that stage is outlined.

**Part 3. Hydrogen.** Choose **Hydrogen at A** and press **An A star**. In Table 2 record the **Balmer lines strongest at** readout, then the **Hydrogen ionized** readout for the Sun, the A star and the B star.

## Data

**Table 1. Stars by temperature.**

| Reading | Temperature T (K) | Class | Peak wavelength (nm) | Ca II (%) | Ca III (%) | Hydrogen on level 2 (per billion) | 1/T (1/K) |
|---|---|---|---|---|---|---|---|
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |

**Table 2. Hydrogen.**

| Readout | Value |
|---|---|
| Balmer lines strongest at (K) | |
| Hydrogen ionized, the Sun (%) | |
| Hydrogen ionized, An A star (%) | |
| Hydrogen ionized, A B star (%) | |

## Analysis

1. Graph the peak wavelength (vertical) against $$1/T$$ (horizontal) for Table 1 and fit a straight line. If you graph by hand, label the horizontal axis in units of $$10^{-4}$$ 1/K (so 0.000286 is 2.86) and multiply the slope you read by $$10^4$$. The slope is Wien's constant $$b$$: what is it, in nm K? Compare it with $$2.90\times10^6$$ nm K.
2. Which rows of Table 1 have their peak in the visible (400 to 700 nm)? Which are in the infrared, and which in the ultraviolet?
3. From Table 1, how many times larger is the share of calcium in the Ca II stage in the Sun than in Rigel?
4. In Table 1, at which of your temperatures is the most hydrogen on level 2, and what class is it? Use Table 2 to explain why there is less on level 2 at 20,000 K than at 9,600 K.

## Uncertainty

The temperatures in the setups are round values, good to perhaps 5 %. If Betelgeuse were 5 % hotter than 3,500 K, by what percentage would its peak wavelength change? Would it still be class M?

## Questions

1. Choose **Payne** and press **Betelgeuse**. What share of the titanium is in titanium oxide (TiO) molecules (the **Titanium in TiO** readout)? Press **The Sun** and read it again. Why do molecule bands show up only in the coolest stars?
2. A cool M star and a hot O star both show weak hydrogen lines. Use Table 1 and Table 2 to say whether it is for the same reason.
3. Look back at your answer to Before the lab 4 and at the calcium in your table and in the Payne bars. Where has Rigel's calcium gone, and why does that make its lines weak? Did you get it right, and what does this tell you about reading a star's make up from how strong its lines are?

## What to hand in

Prelab answers, both tables with the 1/T column filled, the graph with its fit, the answers to the analysis and uncertainty sections, and answers to the questions. Identify simulated data: every reading in this lab comes from the demo's model.
