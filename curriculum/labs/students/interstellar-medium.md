# Dust, Glowing Gas and the 21 cm Line
Student laboratory · Astronomy

Textbook: OpenStax *Astronomy 2e*, §20.1 to §20.3 (the interstellar medium, interstellar gas and cosmic dust). Access for free at https://openstax.org/details/books/astronomy-2e. The physics behind it: OpenStax *University Physics*, Vol. 3, §6.1 (blackbody radiation) and §6.4 (the hydrogen spectrum), and Vol. 2, §16.5 (the electromagnetic spectrum, $$c = \lambda f$$). Access for free at https://openstax.org/details/books/university-physics-volume-2 and https://openstax.org/details/books/university-physics-volume-3.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/between-the-stars.html?ws=interstellar-medium)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Dust, with A star behind a dust lane; Dust lets through 1/10; Dust lets through 1/100; Toward the Galaxy's center; Sunset: the Sun through air. Nebulae, with A hot O star: emission; Same cloud, a cooler B star: reflection; No star nearby: a dark nebula; A star like the Sun. 21 cm line, with One atom; A thousand atoms; A cloud moving away at 50 km/s; Warm gas behind thick dust; All the Milky Way's hydrogen.

**Using the demo.**

- The three buttons above the picture switch modes: **Dust** (a star seen through gas and dust, with its spectrum before and after), **Nebulae** (a cloud lit by a star, or by none) and **21 cm line** (hydrogen atoms flipping their spins, and the radio line they make).
- **Play** runs the stage: in Dust it looks through more and more gas, in Nebulae it heats the star, and in 21 cm line it runs time at a million years each second. Click a slider's readout (the number beside its name) to type an exact value.
- The readouts list what the demo works out. **Blind** (in the Lab section) hides the answers, so you can work them out first.
- **Record reading** stores the setup and the readouts of the mode you are in. **Export to worksheet** sends the readings to the table for that mode below; **Clear** starts a new series.
- The model: the dimming follows the measured average for dust in the Milky Way, one magnitude of dimming for each $$2.21\times10^{21}$$ atoms per cm² of gas, with blue dimmed more than red; real sight lines vary. The star is a blackbody. The glowing gas is pure hydrogen, ionized out to the Strömgren radius. The 21 cm flips are simulated at random at the real rate. The glow brightnesses are schematic.

</details>

## Goal

Measure what the thin gas and dust between the stars does to starlight, find which stars make a cloud glow red and which make it glow blue, and see why radio astronomers map the Galaxy with the 21 cm line of cold hydrogen.

## Background

**Emptier than any vacuum.** The space between the stars, the **interstellar medium**, holds about one hydrogen atom per cubic centimeter, far emptier than the best vacuum made on Earth. By mass it is about 99% gas and 1% dust: tiny grains of rock and soot about the size of a wavelength of blue light. Light crossing thousands of light years (1 ly = $$9.46\times10^{15}$$ m) still meets a lot of it. The number of atoms in a column 1 cm² across along the path $$L$$ is

$$N_H = nL,$$

and the dust that comes with that gas dims the light by $$A_V = N_H/(2.21\times10^{21}\ \text{cm}^{-2})$$ **magnitudes**. Each magnitude lets through $$1/2.512$$ of the light: 5 magnitudes let through 1/100.

**Dimming and reddening.** Grains the size of a wavelength scatter blue light out of the beam more than red, so a star behind dust looks dimmer **and** redder. Astronomers who don't know the dust is there are fooled: brightness falls as $$1/d^2$$, so a star dimmed to a share $$f$$ of its light looks $$1/\sqrt{f}$$ times farther away than it is.

**Three kinds of nebulae.** A very hot star (an O star) gives off so much ultraviolet light that it strips the electrons off the hydrogen around it, out to a radius called the **Strömgren radius**. When the electrons fall back, the gas glows in hydrogen's red line at 656 nm: an **emission nebula**. A cooler star can't ionize much hydrogen; the dust near it just scatters its light, blue best: a **reflection nebula**. A cold, dense cloud with no star near blocks the light from behind it: a **dark nebula**.

**The 21 cm line.** The proton and the electron in a hydrogen atom both spin, like tiny magnets. The energy is a little higher when their spins point the same way. Now and then the electron flips, and the atom gives off a radio photon of wavelength 21 cm, frequency $$f_0 = 1{,}420.405751768$$ MHz. One atom gives off a photon about once in 15 million years (the upper level lasts 11 million years, and collisions keep the atom in it 3/4 of the time), but the Galaxy holds so many atoms that the glow is steady. Radio waves pass straight through dust. A cloud moving away at speed $$v$$ is seen at a lower frequency (a Doppler shift):

$$f_m = \frac{f_0}{1 + v/c},\qquad v \approx c\,\frac{f_0 - f_m}{f_0},\qquad c = 3.00\times10^5\ \text{km/s},$$

where $$f_m$$ is the measured frequency. Any radio wave's wavelength and frequency are tied by $$c = \lambda f_m$$.

## Before the lab

1. How much mass is in a cube of interstellar space 1 km on a side, at one hydrogen atom per cubic centimeter? A hydrogen atom is $$1.67\times10^{-27}$$ kg, and 1 km = $$10^5$$ cm.
2. Dust lets through only 1/10 of a star's light, and an astronomer doesn't know it is there. How many times too far does she put the star? What if the dust lets through 1/100?
3. What is the frequency of a 21 cm radio wave? Use $$c = \lambda f_m$$.
4. A star seen through dust looks redder than it really is. Do the dark lines in its spectrum, such as hydrogen's at 486 nm and 656 nm, move toward the red too, the way they would if the star were moving away? Write your answer and one sentence of reasoning before you open the demo.

## Safety

No hazards in the virtual lab.

## Procedure

**Part 1. Dust.** The demo opens in **Dust** with the setup **A star behind a dust lane**: a star like Sirius seen through 3,000 ly of gas at one atom per cm³. Press **Record reading**. Then click the readout beside **Path through it L**, type 1000, and press **Record reading**. Do the same for 8000. Then press the setups **Dust lets through 1/10** and **Dust lets through 1/100**, and press **Record reading** after each. That makes five readings. Press **Export to worksheet**: they go into Table 1.

Look at the graph below the picture for the last setup: the star's light without dust (dashed), through the dust (solid) and the share let through at each wavelength (green). Write down where hydrogen's two dark lines, Hβ near 486 nm and Hα near 656 nm, are without dust and through it.

Last, press the setup **Sunset: the Sun through air** and write down the readouts **Blue let through (440 nm)**, **Visible light let through (550 nm)** and **Red let through (700 nm)**. Do not record this one: it is air, not interstellar dust, and you need it for Question 1.

**Part 2. Nebulae.** Press **Clear**. Switch to **Nebulae**. Press each setup in turn, **A hot O star: emission**, **Same cloud, a cooler B star: reflection**, **No star nearby: a dark nebula** and **A star like the Sun**, and press **Record reading** after each. Then press **Same cloud, a cooler B star: reflection** again, click the readout beside **Star temperature**, type 25000 and press **Record reading**. That makes five readings. Press **Export to worksheet**: they go into Table 2.

**Part 3. The 21 cm line.** Press **Clear**. Switch to **21 cm line**. Press **One atom** and **Play**, and watch for about 20 seconds (20 million years): count its flips. Then press each setup in turn, **One atom**, **A thousand atoms**, **All the Milky Way's hydrogen**, **A cloud moving away at 50 km/s** and **Warm gas behind thick dust**, and press **Record reading** after each. That makes five readings. Press **Export to worksheet**: they go into Table 3. For the last setup, write down the readouts **Starlight through the dust (550 nm)** and **21 cm through the dust**.

## Data

**Table 1. Dust.** All at one atom per cm³. Type $$1/\sqrt{f}$$ yourself, with $$f$$ the visible light let through.

| Reading | Setup | Path L (ly) | Gas met N_H (per cm²) | Dimming A_V (mag) | Visible let through f | Blue let through | Distance comes out × | 1/√f |
|---|---|---|---|---|---|---|---|---|
| | | | | | | | | |
| | | | | | | | | |
| | | | | | | | | |

**Table 2. Nebulae.** One reading for each setup; the last with the B star heated to 25,000 K.

| Reading | Setup | Star temperature (K) | Ionizing photons each second | Ionized radius R_S (ly) | Cloud radius (ly) | Looks like |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |
| | | | | | | |

**Table 3. The 21 cm line.** One reading for each setup.

| Reading | Setup | Hydrogen atoms | Flips each second | Speed away v (km/s) | Measured frequency f (MHz) | Shift (kHz) |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |
| | | | | | | |

## Analysis

1. Graph the dimming $$A_V$$ (vertical) against the path $$L$$ (horizontal) for all five readings in Table 1. Is it a straight line through the origin? What does the slope mean? Use it to find how long a path at one atom per cm³ dims a star by 30 magnitudes, as dust really does toward the center of the Galaxy.
2. Does your column $$1/\sqrt{f}$$ agree with the demo's **Distance comes out ×**? Compare the two setups that let through 1/10 and 1/100 with Before the lab 2.
3. In every row of Table 1, is the share of blue let through larger or smaller than the share of visible light? What does that do to the star's color?
4. From Table 2, which stars make the cloud glow as an emission nebula, and which leave it a reflection nebula? Compare the ionized radius of the O star with that of the B star: how many times bigger is it? What changed when you heated the B star to 25,000 K?
5. For the cloud moving away at 50 km/s in Table 3, use $$v \approx c\,(f_0 - f_m)/f_0$$ with the shift you recorded to find its speed, and compare with 50 km/s. How many flips each second does all the Milky Way's hydrogen give?

## Uncertainty

The conversion from gas to dimming, $$2.21\times10^{21}$$ atoms per cm² for each magnitude, is measured to about 4%. For **Dust lets through 1/100** ($$A_V = 5$$ mag), how many magnitudes is 4% of the dimming? Each magnitude changes the light by a factor of 2.512; by about what factor could the light let through be off?

## Questions

1. In Part 1 you wrote down the shares of blue and of visible light that get through the air at sunset. Compare them. Why is the setting Sun orange, and why is the sky blue?
2. Why are dark nebulae, the cold dense clouds with no star near, where new stars form?
3. In **Warm gas behind thick dust**, what share of the starlight gets through, and how much of the 21 cm radio line? Why do astronomers map the hydrogen of the whole Galaxy, even its far side, in the 21 cm line instead of in visible light? How many flips did you count for one atom in Part 3, and why does the Galaxy still glow steadily?
4. Look back at your prediction in Before the lab 4. Where were the Hβ and Hα lines without dust and through it in Part 1? Explain why dust makes a star look redder without moving its lines, and how that lets astronomers tell a reddened star from one that is moving away.

## What to hand in

Answers to Before the lab, the three tables with the graph and its slope, the line positions and readouts you wrote down in Parts 1 and 3, your flip count, and your answers to Analysis, Uncertainty and Questions. Identify simulated data: every reading in this lab is simulated.
