# The Galactic Habitable Zone
Student laboratory · Astronomy

Textbook: OpenStax *University Physics*, Vol. 3, §10.6 (nuclear fusion, which makes the heavy elements in stars) and §11.6 (the age of the universe). Access for free at https://openstax.org/details/books/university-physics-volume-3.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/planet-temperatures.html?ws=galactic-habitable-zone)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** two views, Star system and Galaxy. This worksheet uses **Galaxy**, with its setups The Sun; Inner disk; Outer disk; Young star near the Sun; Old star near the Sun.

**Using the demo.**

- The Galaxy view follows a simplified version of the model of Lineweaver, Fenner and Gibson (2004, Science 303, 59). The picture shows the Milky Way's disk with the star you choose, a map of where and when stars that could host complex life today were born (distance from the center across, birth time up), with the smallest regions holding 68% and 95% of them outlined, and a bar for each of the four factors below.
- Choose a star by its distance from the center R and how long ago it was born, by dragging it on the map or with the sliders. The model's assumptions are three more sliders: the chance that Earth's own history of nearby supernovae would have sterilized it, the metallicity gradient across the disk, and the time complex life needs.
- Record reading stores the star's place, its four factors and their product, the assumptions, and the zone's size. Export to worksheet sends the readings to the matching table below: stars born at one time to the first, stars at one distance to the second, and readings that change an assumption to the third. Clear starts a new series, which goes into a new copy of the table.
- The model and where each ingredient comes from are under "The model and where it comes from" in the demo. Each ingredient is a simple stand in for a much more detailed calculation, so the numbers are a model's, not measurements.

</details>

## Goal

Find where and when in the Milky Way stars were born that could have planets with complex life today, and how that zone depends on what we assume about metals, supernovae and the time life needs.

## Background

Four needs, each a chance between 0 and 1 in this model; their product P is the chance that a star born at distance R, a time ago, has a planet with complex life today.

**Metals to build Earths.** Rocky planets are made of elements heavier than helium, which stars make and spread. A star's iron content relative to the Sun is $$[\text{Fe/H}] = \log_{10}\frac{(\text{Fe/H})_\star}{(\text{Fe/H})_\odot}$$. In the model the gas is richer toward the center (a gradient g, about −0.06 dex per kpc today) and grows richer with time, and

$$P_{\text{metals}} = 10^{[\text{Fe/H}]}\ \text{(at most 1)}.$$

**No wrecking giants.** Stars rich in metals more often have a giant planet on a short orbit (Fischer and Valenti 2005), taken here to wreck the system's Earths as it moves inward: $$P_{\text{safe}} = 1 - 0.03\times 10^{2[\text{Fe/H}]}$$.

**Few nearby supernovae.** Supernovae follow star formation, which is fastest near the center and early on. A planet's dose N over its first 4 billion years, in units of Earth's dose, gives $$P_{\text{SN}} = (1 - p_E)^{N}$$, where $$p_E$$ is the chance that Earth's own dose would have sterilized it.

**Time for evolution.** Complex life took about 4 billion years on Earth. With a spread of 1 billion years, $$P_{\text{time}} = \Phi\!\left(\frac{\text{age} - t_{\text{life}}}{1\ \text{Gyr}}\right)$$, where Φ is the cumulative normal distribution.

The disk in the model began forming stars 12 billion years ago; the Sun was born 4.57 billion years ago, 8.2 kpc from the center.

## Before the lab

1. A star has [Fe/H] = −0.3. What fraction of the Sun's iron (relative to hydrogen) does it have, and what is its $$P_{\text{metals}}$$?
2. With a gradient of −0.06 dex/kpc, what [Fe/H] does the model give a star born at the same time as the Sun 4 kpc from the center? 14 kpc from the center?
3. With $$p_E = 0.5$$, find $$P_{\text{SN}}$$ for a planet whose supernova dose is 3 times Earth's, and for one whose dose is 0.5 times Earth's.
4. A star was born 3 billion years ago. With $$t_{\text{life}} = 4$$ Gyr, find $$P_{\text{time}}$$ (use $$\Phi(-1) = 0.159$$).
5. Which factor would you expect to limit the zone on the inside, and which on the outside? Which limits it in time?

## Safety

No hazards in the virtual lab.

## Procedure

Use the Galaxy view, with the model's assumptions at their opening values, for Parts 1 and 2.

**Part 1. Across the disk.** Choose The Sun. Keep the birth time at the Sun's, and record a reading at distances from the center of 2, 4, 6, 8.2, 10, 12, 14 and 16 kpc. Send the readings to the worksheet.

**Part 2. Through time.** Clear the readings and choose The Sun again. Keep the distance at 8.2 kpc, and record a reading for stars born 0.5, 1, 2, 3, 4.57, 6, 8, 10 and 12 billion years ago. Send the readings to the worksheet.

**Part 3. The assumptions.** Clear the readings and choose The Sun. Record a reading at the opening assumptions. Then, one at a time, record readings with the chance that Earth's supernovae sterilize at 0.1 and 0.9, the gradient at −0.03 and −0.09 dex/kpc, and the time complex life needs at 2 and 6 billion years, returning each to its opening value before changing the next. Send the readings to the worksheet.

## Data

**Stars born with the Sun, across the disk.**

| Reading | Distance from the center $$R$$ (kpc) | [Fe/H] | $$P_{\text{metals}}$$ | $$P_{\text{safe}}$$ | Supernova dose (Earth = 1) | $$P_{\text{SN}}$$ | $$P_{\text{time}}$$ | $$P$$ |
|---|---|---|---|---|---|---|---|---|
| | | | | | | | | |
| | | | | | | | | |
| | | | | | | | | |

**Stars at the Sun's distance, born at different times.**

| Reading | Born (Gyr ago) | [Fe/H] | $$P_{\text{metals}}$$ | $$P_{\text{safe}}$$ | Supernova dose (Earth = 1) | $$P_{\text{SN}}$$ | $$P_{\text{time}}$$ | $$P$$ |
|---|---|---|---|---|---|---|---|---|
| | | | | | | | | |
| | | | | | | | | |
| | | | | | | | | |

**Changing the assumptions.**

| Reading | Chance Earth's supernovae sterilize $$p_E$$ | Gradient $$g$$ (dex/kpc) | Time complex life needs (Gyr) | 68% zone, distance (kpc) | 68% zone, born (Gyr ago) | Share of all stars born that could host complex life (%) | Older than the Sun (%) |
|---|---|---|---|---|---|---|---|
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |

## Analysis

1. Graph P against R for Part 1, and on the same axes (or in your own columns) each factor. Which factor cuts P off on the inside, and which on the outside? Where is P largest?
2. Check one reading by hand: multiply the four factors and compare with P. Check [Fe/H] from the gradient and the Sun's value.
3. Graph P against the birth time for Part 2. Explain the shape: what limits young stars, and what limits old ones?
4. From Part 3, which assumption moves the zone most? Which changes the share of stars that could host complex life most?
5. Is the Sun inside the 68% zone? What share of the stars that could host complex life today are older than the Sun? What would that mean for any complex life elsewhere in the Galaxy, if this model were right?

## Uncertainty

The model has no measurement uncertainty: every number is exact for its assumptions. The uncertainty is in the assumptions. Use your Part 3 readings to say which boundary of the zone (inner, outer, oldest, youngest) is least certain, and by how much it moves over the range you tried.

## Questions

1. Lineweaver, Fenner and Gibson found a zone 7 to 9 kpc from the center, born 8 to 4 billion years ago, with about three quarters of its stars older than the Sun. How do your results compare, and which of this model's simplifications could explain the differences?
2. The Sun has probably moved outward since its birth by a few kpc. How would that change the picture of the Sun's place in the zone?
3. Why does more metal help rocky planets but also, in this model, hurt them?
4. Elliptical galaxies formed most of their stars quickly and early. Would you expect a habitable zone in such a galaxy to be wider or narrower in time than the Milky Way's?
5. Which of the four needs do you think is least certain in reality? Explain.

## What to hand in

Prelab answers, the three tables with their graphs, the factor that limits each side of the zone, your hand check of one reading, the effect of each assumption, and answers to the questions. Identify model data: every number in this lab comes from a simplified model, not from observations.
