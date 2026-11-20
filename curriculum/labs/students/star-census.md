# Counting the Sun's Neighbors
Student laboratory · Astronomy

Textbook: OpenStax *Astronomy 2e*, §17.1 (the brightness of stars and magnitudes), §18.1 (a census of the stars) and §19.2 (distances to stars). Access for free at https://openstax.org/details/books/astronomy-2e.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/starlight.html?ws=star-census)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** five modes, chosen above the picture. Inverse square: The first square, Twice as far, Three times as far, The Sun from Jupiter. Two stars: 4 times as luminous, 3 times as far; 25 times as luminous, equally bright; A giant and a red dwarf; Twins at different distances. Magnitudes: After sunset; From town, magnitude 5; A dark field, magnitude 6; Vega and a magnitude 15 star. Absolute magnitude: The Sun, Sirius, Deneb, Proxima Centauri, m − M = 10. Census: Count the neighbors, Only what the eye sees, Why the sky lies. This worksheet uses **Two stars**, **Absolute magnitude** and **Census**.

**Using the demo.**

- Two stars sets each star's luminosity (in units of the Sun's, L☉) and distance (in parsecs, pc; 1 pc = 3.26 light years) and shows how bright each looks.
- Absolute magnitude places a star on a distance line; **Play** carries it to 10 pc, where its apparent magnitude equals its absolute magnitude.
- Census maps every star in the HYG catalog within 10 pc of the Sun, and counts those inside the **Survey radius** by spectral class. Click the Survey radius readout to type a radius. The check box **Show only the stars you can see without a telescope** keeps only stars of magnitude 6 or brighter.
- Record reading (Census mode only) stores the survey radius and the number of stars inside it: all of them, the red dwarfs (class M) and those more luminous than the Sun. Export to worksheet sends the readings to the first data table. Clear starts a new series, which goes into a new copy of the table.
- The data: the HYG star database version 3.8 (D. Nash), from the Hipparcos, Yale Bright Star and Gliese catalogs. Luminosities are in the V band, the light the eye sees best.

</details>

## Goal

Use the inverse square law and the magnitude scale to compare stars, then count the stars near the Sun and find out how many there are in each cubic parsec, and how many of them you could ever see.

## Background

**Luminosity and brightness.** A star's luminosity $$L$$ is the light it gives off each second. How bright it looks from here, its brightness $$b$$, is the light that reaches each square meter of Earth. The light spreads out over a sphere whose area grows as the square of the distance $$d$$, so

$$b \propto \frac{L}{d^2}.$$

Twice as far means a quarter as bright. Comparing two stars A and B, $$b_A/b_B = (L_A/L_B)(d_B/d_A)^2$$.

**Magnitudes.** Astronomers rank brightness with magnitudes, a scale that runs backward: a bigger magnitude is a fainter star. Five magnitudes are a factor of exactly 100 in brightness, so one magnitude is a factor of $$100^{1/5} = 2.512$$. A star of magnitude 1 is 100 times brighter than one of magnitude 6, the faintest you can see on a dark night.

**Absolute magnitude.** The magnitude a star seems to have, $$m$$, depends on its distance. Its **absolute magnitude** $$M$$ is the magnitude it would have at 10 pc. Each factor of 10 in distance is a factor of 100 in brightness, which is 5 magnitudes. So a star at 10 pc has $$m - M = 0$$, at 100 pc $$m - M = 5$$, at 1,000 pc $$m - M = 10$$, and at 10,000 pc $$m - M = 15$$.

**Counting stars.** If stars were spread evenly through space, with $$n$$ stars in each cubic parsec, the number inside a sphere of radius $$r$$ around the Sun would be

$$N = n \times \tfrac{4}{3}\pi r^3,$$

so $$N$$ graphed against $$r^3$$ is a straight line through the origin with slope $$\tfrac43\pi n$$. Doubling the radius takes in 8 times the volume and should take in 8 times the stars.

## Before the lab

1. Jupiter is 5.2 AU from the Sun. How bright does the Sun look from Jupiter, as a fraction of how bright it looks from Earth (1 AU)?
2. Star A is 4 times as luminous as star B but 3 times as far away. Which looks brighter, and by what factor?
3. Which looks brighter, a star of magnitude 2 or one of magnitude 7, and by what factor? A star of magnitude 0 or one of magnitude 15?
4. On a dark night you can see a few thousand stars. Now think of every star within 10 pc of the Sun, our nearest neighbors. Guess what fraction of them you could see with your eyes alone, and whether most of them are more luminous or less luminous than the Sun. Write your guesses, with a reason, before you open the demo.

## Safety

No hazards in the virtual lab.

## Procedure

**Part 1. Two stars.** Open the demo and choose **Two stars** above the picture. Press **4 times as luminous, 3 times as far**. In Table 2, record the **bA ÷ bB** readout (the brightness of A divided by that of B) and **mA − mB** (the difference in their magnitudes).

**Part 2. Absolute magnitude.** Choose **Absolute magnitude** and press **m − M = 10**. Record the **Distance** readout in Table 2. Then press **The Sun** and press **Play**; when the Sun has reached 10 pc and stopped, record its **Apparent magnitude m**.

**Part 3. The census.** Choose **Census** and press **Count the neighbors**.

1. Set the **Survey radius** to 2.0 pc (click its readout and type 2) and press **Record reading** in the Readings section of the sidebar.
2. Do the same at 3.0, 4.0, 5.0 and 6.0 pc.
3. Press **Export to worksheet**. The five readings fill Table 1 below. Fill in the last column, $$r^3$$.
4. Set the radius to 10 pc and record the **Stars in it** and **Red dwarfs (M)** readouts in Table 2. Then tick **Show only the stars you can see without a telescope** and record the **Stars in it** readout again.

With the eye only box ticked, compare the map with the one you had before: count how many of the 10 pc neighbors are left, and look at which kinds of stars they are. Record the **Naked eye stars more luminous than the Sun** readout in Table 2 too.

## Data

**Table 1. The census.**

| Reading | Survey radius r (pc) | Stars within r | Red dwarfs (M) | More luminous than the Sun | r³ (pc³) |
|---|---|---|---|---|---|
| | | | | | |
| | | | | | |
| | | | | | |

**Table 2. Single readings.**

| Part | Readout | Value |
|---|---|---|
| Two stars | bA ÷ bB | |
| Two stars | mA − mB | |
| m − M = 10 | Distance (pc) | |
| The Sun at 10 pc | Apparent magnitude m | |
| Census, 10 pc | Stars in it | |
| Census, 10 pc | Red dwarfs (M) | |
| Census, 10 pc, eye only | Stars in it | |
| Every naked eye star | Share more luminous than the Sun (%) | |

## Analysis

1. Graph the number of stars within $$r$$ (vertical) against $$r^3$$ (horizontal) for Table 1 and fit a straight line. What is the slope, in stars per cubic parsec of $$r^3$$? Divide it by $$\tfrac43\pi = 4.19$$ to find $$n$$, the number of stars in each cubic parsec near the Sun.
2. Use your line to predict how many stars should lie within 10 pc ($$r^3 = 1{,}000$$ pc³). Compare your prediction with the census count at 10 pc in Table 2. What fraction of the stars your line predicts did the catalog find?
3. At 6 pc, what percentage of the stars are red dwarfs, and what percentage are more luminous than the Sun?
4. Check Before the lab 2 against the Two stars readings, and check the Background's distance for $$m - M = 10$$ against your reading.

## Questions

1. The catalog is missing stars beyond about 6 pc. Which kind of star do you think is easiest to miss, and why? (Look at how faint the red dwarfs are on the census map.)
2. Your Sun at 10 pc in Part 2 had magnitude 4.81. How far away could you put the Sun and still see it with your eyes alone (magnitude 6)? Use the magnitude scale: is it more or less than 10 pc?
3. Return to your guesses in Before the lab 4 and set them beside Table 2. What fraction of the 10 pc neighbors can you see with your eyes, which kind of star makes up most of the neighborhood, and what are the stars you do see like? Explain why the stars in the night sky are not a fair sample of the stars around us.

## Uncertainty

For courses that treat measurement uncertainty. This section is not counted in the 75 minutes; do it when your instructor assigns it.
{: .ws-assigned}

Inside 2 pc there are only a few stars, so one star more or less changes the count a lot; with N stars, a count is uncertain by about $$\sqrt{N}$$. Work out $$\sqrt{N}$$ for your 2 pc and 6 pc counts, as a percentage of each count. Which of your points should you trust most when you judge the fit? Give the slope of your fit with its standard error.

## What to hand in

Prelab answers, both tables with the r³ column filled, the graph with its fit, the answers to the analysis section and to the questions (and to Uncertainty, if assigned). The star counts are real catalog data (HYG v3.8); the two stars and absolute magnitude readings come from the demo's formulas.
