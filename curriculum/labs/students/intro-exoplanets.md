# Finding Planets Around Other Stars
Student worksheet · Astro 2203

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/exoplanets.html?ws=intro-exoplanets)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Hot Jupiter; Earth and Sun; Jupiter and Sun; Eccentric planet; Not edge on; TRAPPIST-1 like; and a Mystery system with its own button.

**Using the demo.**

- One planet orbits its star. The top view shows the orbit from above, the telescope view what a distant observer would see, and below them two graphs through one orbit: the star's brightness, and the star's speed toward or away from us. Drag the planet or either graph to move the cursor in time; Zoom on transit spreads the transit across the graph.
- The cards set the star's mass and radius, the planet's mass and radius, and the orbit. The planet's sizes read in Earth units, the star's in Sun units.
- Noise adds random scatter to each measurement, as a real telescope would. With noise, the readouts and Record reading give the measurement nearest the cursor.
- New mystery system draws a star with a planet that crosses in front of it. The planet's size, mass and orbit are hidden and every measurement has noise; only the star's mass and radius are given. Reveal the planet shows the answers.
- Record reading stores the system, the star's mass and radius, the planet's radius and mass (hidden for a mystery planet), the period, the cursor's time from the middle of the transit, the drop in brightness and the star's speed there. Export to worksheet sends the readings to the Data table below; Clear starts a new series, which goes into a new copy of the table.

</details>

## Goal

Find a planet around another star from the two signals it makes: the small dip in the star's light when the planet passes in front, and the star's small wobble as the planet pulls it around. From them, work out the planet's size, its mass, its orbit, what it is made of, and whether it could have liquid water.

## Background

**We almost never see the planet itself.** A planet is billions of times fainter than its star and, from light years away, sits right beside it. So astronomers watch the star instead.

**Transits measure size.** If we see the orbit edge on, the planet passes in front of the star once every orbit and blocks a little of its light. The share of light blocked is about the planet's area over the star's area: (planet radius ÷ star radius) squared. A star's middle is a little brighter than its edge, so the dip at the middle of a transit is about 1.2 times that ratio. Brightness drops are given in parts per million (ppm): 10 000 ppm is 1%. The Sun's radius is 109.2 Earth radii.

**The wobble measures mass.** The planet does not simply orbit the star: both go around their shared center of mass. The star swings toward us and away from us once each orbit, and its light shifts slightly blue, then red (the Doppler effect). The top speed of the star, $$K$$, is bigger for a heavier planet and for a closer one. Earth moves the Sun at only 0.0895 m/s (9 cm/s, a slow crawl), Jupiter at about 12 m/s.

**Recipes.** For a planet that transits, on a nearly circular orbit, and much lighter than its star (all true here), with the star's mass $$M_s$$ in Sun masses and the period $$P$$ in years:

- Planet radius in Earth radii = 109.2 × star radius (in Sun radii) × √(brightness drop ÷ 1.21), with the drop as a fraction (ppm ÷ 1 000 000).
- Planet mass in Earth masses = ($$K$$ ÷ 0.0895 m/s) × $$P^{1/3}$$ × $$M_s^{2/3}$$. (On a calculator, $$x^{1/3}$$ is the cube root and $$x^{2/3}$$ is the cube root of $$x^2$$.)
- Orbit size in AU, from Kepler's third law: $$a = (M_s \times P^2)^{1/3}$$.
- Density in g/cm³ = 5.51 × mass ÷ radius³, with mass and radius in Earth units. Earth is 5.51, rock about 3 to 5, water 1.0, Jupiter 1.33, Saturn 0.69.

**Could it have liquid water?** The starlight a planet gets, compared with Earth, is the star's luminosity $$L$$ (its power, Sun = 1) divided by $$a^2$$. For stars near the Sun's mass a rough rule is $$L \approx M_s^4$$. A planet like Earth could keep liquid water if it gets between about 0.36 and 1.11 times Earth's starlight: that is the habitable zone (Kopparapu and others, 2014, for a Sun like star). With no greenhouse and an albedo like Earth's, a planet's temperature is about 255 K × (starlight compared with Earth)$$^{1/4}$$.

## Before the lab

1. Jupiter's radius is 11.2 Earth radii. What fraction of the Sun's light does Jupiter block when it crosses the Sun? What fraction does Earth block? Give both in ppm.
2. A Jupiter and an Earth orbit the same star at the same distance. Which makes the star wobble more, and roughly how many times more?
3. Guess: if aliens far away watched the Sun, would they find Earth more easily by its transit or by its wobble?

## Safety

No hazards in the virtual lab.

## Procedure

**Part 1: transits and size.** Choose Earth and Sun, set the noise to none, and stop the motion. Put the cursor at the middle of the transit (time from mid transit 0) and record a reading. Do the same for Jupiter and Sun, TRAPPIST-1 like and Hot Jupiter. Send the four readings to the worksheet, then clear them.

**Part 2: the wobble and mass.** Choose the same four systems again, with no noise. For each, put the cursor at the top of the star velocity curve, where the star moves away from us fastest, and record a reading. Send the four readings to the worksheet, then clear them.

**Part 3: a mystery planet.** Start a new mystery system. Write the star's mass and radius in the notes for this copy of the table. With Zoom on transit, record five readings spread across the flat bottom of the transit and five well before or after it. Then, on the full orbit, record three readings near the top of the velocity curve and three near the bottom. Send the sixteen readings to the worksheet. Do not reveal the planet until you have finished the analysis.

## Data

| Reading | System | Star mass $$M_s$$ (Sun = 1) | Star radius (Sun = 1) | Planet radius (Earth = 1) | Planet mass (Earth = 1) | Period $$P$$ (days) | Time from mid transit (h) | Brightness drop (ppm) | Star velocity (m/s) | (planet radius ÷ star radius)² (ppm) |
|---|---|---|---|---|---|---|---|---|---|---|
| | | | | | | | | | | |
| | | | | | | | | | | |
| | | | | | | | | | | |

## Analysis

1. For each Part 1 reading, find the planet radius divided by the star radius (remember the star's radius is in Sun radii: multiply it by 109.2 first), square it and write it in ppm in the last column. Graph the brightness drop against this column. Is it a straight line through the origin? What is its slope, and why is it a little more than 1?
2. Compare Earth and TRAPPIST-1 like in Part 1. Their planets are about the same size, so why is one dip about 60 times deeper than the other?
3. From Part 2, rank the four systems by the star's top speed $$K$$. Jupiter has 318 times Earth's mass; how many times bigger is its $$K$$? Explain why it is less than 318 times. (Hint: which planet is farther out, and so moves more slowly?)
4. Mystery planet, size: average the brightness drops of your readings inside the transit, and of those outside it. The transit depth is the difference. Use the recipe to find the planet's radius in Earth radii.
5. Mystery planet, mass: $$K$$ is half the difference between your average top velocity and your average bottom velocity. Change the period to years (divide by 365.25) and use the recipe to find the planet's mass in Earth masses.
6. Mystery planet, orbit and makeup: find the orbit size $$a$$ in AU and the planet's density. Is it rocky like Earth, mostly water and ice, or mostly gas like Jupiter?
7. Mystery planet, water: estimate the star's luminosity and the starlight the planet gets compared with Earth. Is the planet inside the habitable zone, too close or too far? Estimate its temperature with no greenhouse.
8. Now reveal the planet. Compare your radius, mass, orbit and density with the true values.

## Uncertainty

Each mystery reading is scattered by the noise the demo states. For the transit depth and for $$K$$, look at how far your readings spread on either side of their average. Averaging several readings shrinks the scatter: the average of 4 readings scatters half as much as one reading. Which of your results, radius or mass, do you think is less certain, and why? Since the density uses the radius cubed, what does a 5% error in the radius do to the density?

## Questions

1. A transit is seen only if we happen to see the orbit nearly edge on. The chance is about the star's radius divided by the orbit's size. For Earth around the Sun it is 1 in 215. Why do surveys like Kepler watch more than a hundred thousand stars at once?
2. Choose Not edge on (the Hot Jupiter tilted by 30° from edge on). Why is there no transit at all? What happens to the wobble? Could we still find this planet, and what could we not measure?
3. Most planets found so far are big and close to their stars, unlike Earth. Use your Part 1 and Part 2 readings to explain why this does not mean that Earths are rare.
4. Was your guess in Before the lab 3 right? Which signal would aliens find more easily, and how long would they have to wait between transits?

## What to hand in

Prelab answers, the three copies of the Data table and the Part 1 graph, the mystery planet's radius, mass, orbit, density and habitable zone check with the comparison to the revealed values, the answers to the analysis and uncertainty sections, and answers to the questions. Identify simulated data.
