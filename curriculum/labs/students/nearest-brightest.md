# The Nearest Stars and the Brightest Stars
Student laboratory · Astronomy

Textbook: OpenStax *University Physics*, Vol. 3, §6.1 (blackbody radiation) and §10.6 (nuclear fusion, the energy source of stars). Access for free at https://openstax.org/details/books/university-physics-volume-3.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/hr-diagram.html?ws=nearest-brightest)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** The Sun; Red dwarf; Sirius A; Massive star; White dwarf cooling; Cluster; Nearest and brightest. This worksheet uses **Nearest and brightest**.

**Using the demo.**

- Nearest and brightest plots real stars, not a model, the way observers plot them: absolute V magnitude (up is more luminous) against the color index B − V (left is hotter). The Sun is marked.
- Nearest: every star the HYG database puts within 10 parsecs of the Sun. Brightest: the 100 stars that look brightest from Earth. Both shows the two sets together, with a colored ring for each set.
- Pick a star from the list, tap it on the diagram, or step through the stars with the arrow keys. The readouts give the set's counts and medians and the picked star's spectral type, apparent magnitude V, absolute magnitude M_V, B − V and distance.
- Data: HYG database v3.8 (D. Nash, astronexus.com, CC BY-SA 4.0), with distances from Hipparcos parallaxes (van Leeuwen 2007) and the Gliese catalog of nearby stars. Stars HYG lists without a B − V, mostly faint companions, are counted but not plotted.
- Record reading stores the picked star with its set, its numbers and the set's counts. Export to worksheet sends the readings to the first data table below; Clear starts a new series, which goes into a new copy of the table.

</details>

## Goal

Compare the stars closest to the Sun with the stars that look brightest in our sky, and find out why the two samples are so different.

## Background

**Apparent and absolute magnitude.** The apparent magnitude V says how bright a star looks from Earth; smaller is brighter, and 5 magnitudes is a factor of 100 in brightness. The absolute magnitude $$M_V$$ is how bright the star would look from 10 parsecs (1 pc = 3.26 light years), so it measures the star's luminosity. Because brightness falls as $$1/d^2$$,

$$V - M_V = 5\log_{10}\frac{d}{10\ \text{pc}}.$$

$$V - M_V$$ is called the distance modulus. The Sun has $$M_V = 4.81$$.

**The observer's HR diagram.** Plotting $$M_V$$ against B − V is the Hertzsprung Russell diagram in the quantities a telescope measures. B − V stands in for surface temperature (hot stars have small B − V) and $$M_V$$ for luminosity.

**Samples.** A sample of stars chosen by how bright they look favors stars that are luminous, because those can be seen from far away. A sample chosen by distance takes every star in a volume, faint or not.

## Before the lab

1. A star 100 pc away has V = 2.0. Find its absolute magnitude. Is it more or less luminous than the Sun, and by about what factor? (Each magnitude is a factor of $$10^{0.4}$$.)
2. Proxima Centauri has $$M_V \approx 15.5$$. How many times less luminous in V is it than the Sun?
3. A star with $$M_V = 15$$ placed at 10 pc has V = 15. Can you see it without a telescope (the eye reaches about V = 6)? Now place a star with $$M_V = -5$$ at 500 pc: what is its V?
4. If the stars around the Sun were spread evenly in space, how would the number of stars within a distance d grow with d?

## Safety

No hazards in the virtual lab.

## Procedure

**Part 1. The nearest stars.** Choose Nearest and brightest, then Nearest. Record a reading for each of the ten nearest stars that have a B − V (the list runs nearest first; skip any marked "no B − V"), then for 61 Cyg A and Procyon. Write the set's counts and medians in the second table. Send the readings to the worksheet, then clear them.

**Part 2. The brightest stars.** Choose Brightest. Record a reading for each of the ten brightest stars (the list runs brightest first), then for Deneb. Write the set's counts and medians in the second table. Send the readings to the worksheet.

## Data

**The stars.** The last two columns are computed by you (the formulas in the table help).

| Reading | Star | Set | Spectral type | Apparent magnitude V | Absolute magnitude $$M_V$$ | B − V | Distance $$d$$ (pc) | $$V - M_V$$ | log₁₀ $$d$$ |
|---|---|---|---|---|---|---|---|---|---|
| | | | | | | | | | |
| | | | | | | | | | |
| | | | | | | | | | |

**The two sets.** Read from the readouts.

| Set | Stars in the set | Plotted (with a B − V) | More luminous than the Sun | Less luminous than the Sun | Median $$M_V$$ | Median distance (pc) |
|---|---|---|---|---|---|---|
| Nearest | | | | | | |
| Brightest | | | | | | |

## Analysis

1. Fill in $$V - M_V$$ and log₁₀ $$d$$ for each star, then graph $$V - M_V$$ against log₁₀ $$d$$ and fit a straight line. What slope and intercept does the distance modulus formula predict? Do your stars agree?
2. Look at the diagram with Nearest chosen. Where do most of the nearest stars sit? What fraction of them are less luminous than the Sun?
3. Look at the diagram with Brightest chosen. Where do most of the brightest stars sit? How many are less luminous than the Sun?
4. Compare the median distances of the two sets. Use the median $$M_V$$ of the nearest stars and the eye's limit V = 6 to find how far away a typical nearby star could be and still be seen without a telescope.
5. The brightest stars include supergiants such as Rigel and Deneb. Use their absolute magnitudes to find how far away each could be and still be among the stars brighter than V = 2.6.
6. Choose Both. Only a handful of stars are in both sets. Name them, and explain why a star must be both nearby and fairly luminous to be in both.

## Uncertainty

Distances come from parallaxes. A parallax with a 1% error gives a 1% distance error. How big an error in $$M_V$$ does that make? For the most distant brightest stars the parallax errors are 10% or more. How big an error in $$M_V$$ is that?

## Questions

1. Which sample, the nearest or the brightest, gives the better picture of what stars in our galaxy are typically like? Explain.
2. Most stars in the brightest sample are rare kinds of stars. Use what you know about stellar lifetimes to explain why luminous stars are rare.
3. The census of stars within 10 pc is still not complete. What kinds of stars are most likely to be missing, and why?
4. Where do the white dwarfs sit on the diagram? Why are none of them among the brightest stars?

## What to hand in

Prelab answers, the data tables, the graph with its fit, the answers to the analysis and uncertainty sections, and answers to the questions. Identify simulated data (here the data are real catalog values).
