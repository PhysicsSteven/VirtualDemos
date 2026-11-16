# Stellar Evolution
Student laboratory · Astronomy

Textbook: OpenStax *University Physics*, Vol. 3, §6.1 (blackbody radiation and the Stefan–Boltzmann law) and §10.6 (nuclear fusion, the energy source of stars). Access for free at https://openstax.org/details/books/university-physics-volume-3.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/hr-diagram.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** The Sun; Red dwarf; Sirius A; Massive star; White dwarf cooling; Cluster; Nearest and brightest.

**Using the demo.**

- The Hertzsprung Russell diagram plots a star's luminosity against its surface temperature, hot on the left, both on logarithmic scales. The diagonal radius lines are lines of constant radius. Below it the star is drawn to scale next to the Sun or the Earth.
- One star at a time: choose its initial mass, then move it through its life. The life stage slider and Play stretch the short late phases so you can watch them; the age readout is always the real age. The star can also be dragged along its track on the diagram.
- Cluster shows 1000 stars born together, from 0.4 to 25 $$M_\odot$$, at the age you choose (a logarithmic slider from 10 Myr to 13 Gyr). Tap a star to read its mass and phase.
- The model: the main sequence follows fits of luminosity, radius and lifetime to the mass (a star's luminosity rises by about a factor of 2 during its main sequence life); every later phase is a schematic track, with the right shape and approximate numbers, and phase lengths set as fractions of the main sequence lifetime. White dwarfs keep a fixed radius and cool by Mestel's law. The cluster's masses are drawn at random from a fixed recipe, and its stars are single stars of solar composition.
- Record reading stores, for one star, the setup, mass, phase, age, the time left in the phase, luminosity, surface temperature and radius; for the cluster, its age, the turnoff mass and how many stars are in each stage. Export to worksheet sends the readings to the matching data table below (readings at several masses to the first, readings of one star to the second, cluster readings to the third). Clear starts a new series, which goes into a new copy of the table.

</details>

## Goal

Measure how a star's mass sets its luminosity and its lifetime, and follow the Sun through its whole life.

## Background

**Luminosity, radius and temperature.** A star radiates nearly as a blackbody, so its luminosity is $$L = 4\pi R^2\sigma T^4$$. In units of the Sun's values,

$$\frac{L}{L_\odot} = \left(\frac{R}{R_\odot}\right)^2\left(\frac{T}{T_\odot}\right)^4,\qquad T_\odot = 5772\ \text{K}.$$

**Mass, luminosity and lifetime.** On the main sequence a star fuses hydrogen to helium in its core, and its mass sets everything else. Over a range of masses the luminosity follows a power law, $$L \propto M^a$$. A star's main sequence lifetime is roughly its fuel (proportional to $$M$$) divided by the rate it uses fuel (proportional to $$L$$).

Use 1 AU $$= 215\ R_\odot$$ and $$R_\odot = 109\ R_\oplus$$.

## Before the lab

1. Two stars have the same surface temperature, but one is 100 times as luminous as the other. Which one is larger, and by what factor?
2. If $$L \propto M^4$$ and the lifetime is fuel over the rate of using it, how does the lifetime depend on $$M$$? The Sun's main sequence lifetime is about 10 Gyr. Estimate it for a 2 $$M_\odot$$ star.

## Safety

No hazards in the virtual lab.

## Procedure

**The main sequence.** Press the **The Sun** setup. Set the **Initial mass** slider (a log scale; the arrow keys give fine steps) to eight masses from 0.5 to 25 $$M_\odot$$, roughly evenly spaced on the log scale: 0.5, 0.7, 1, 1.9, 3, 5, 12 and 25. At each, move the **Life stage** slider all the way left, so the **Age** readout is 0 and **Time left in phase** is the whole main sequence lifetime, and press **Record reading**. Press **Export to worksheet**, then **Clear**.

**The Sun's life.** Press Clear and then **The Sun**, which opens at today's age, and record a reading. Then move the **Life stage** slider to the right, watching the **Phase** readout, and record one reading near the end of each phase (the last arrow key step before the phase name changes): main sequence, subgiant, red giant branch (at its top), horizontal branch and asymptotic giant branch (at its top), and one in the planetary nebula phase. Finish with two readings on the white dwarf line, at white dwarf ages near 10 Myr and 1 Gyr after the nebula (the **Age** readout minus the age at the nebula). Work out $$R$$ from $$L$$ and $$T$$ for four readings only: the subgiant, the red giant branch, the horizontal branch and the asymptotic giant branch. Export them to the worksheet, where they fill the Sun's life table.

## Data

**The main sequence, at age zero.**

| Reading | Initial mass $$M$$ ($$M_\odot$$) | Luminosity $$L$$ ($$L_\odot$$) | Surface temperature $$T$$ (K) | Radius $$R$$ ($$R_\odot$$) | Main sequence lifetime $$t$$ (yr) | log₁₀ $$M$$ | log₁₀ $$L$$ | log₁₀ $$t$$ |
|---|---|---|---|---|---|---|---|---|
| | | | | | | | | |
| | | | | | | | | |
| | | | | | | | | |

**The Sun's life.**

| Reading | Phase | Age (yr) | Time left in this phase (yr) | Luminosity $$L$$ ($$L_\odot$$) | Surface temperature $$T$$ (K) | Radius $$R$$ ($$R_\odot$$) | $$R$$ from $$L$$ and $$T$$ ($$R_\odot$$) |
|---|---|---|---|---|---|---|---|
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |

## Analysis

1. Fill in the three log₁₀ columns, and graph log₁₀ $$L$$ (vertical) against log₁₀ $$M$$ (horizontal) for all eight masses on one graph. Read the exponent $$a$$ at the two ends, from the slope of the first four points and of the last four.
2. Graph log₁₀ $$t$$ (vertical) against log₁₀ $$M$$ (horizontal), again on one graph for all eight masses. What power of $$M$$ does the lifetime follow? Compare it with what "fuel over the rate of using it" and your exponents from Analysis 1 predict, and suggest a reason they differ.
3. For the Sun's life, find $$R$$ from $$L$$ and $$T$$ for the four readings and compare with the radius the demo shows. How large does the Sun become, compared with Earth's orbit?
4. From the ages, find how long the Sun spends in each phase before it becomes a white dwarf, and what share of that time is the main sequence. Explain why most stars we see are on the main sequence.
5. For the two white dwarf readings, what happens to the radius as the white dwarf fades? Use them to show that $$L \propto T^4$$ along its track.
## Uncertainty

The single star readings are exact values of the model, but the model itself is approximate: the fits describe typical stars, and the later phases are schematic. Report each slope with its standard error.

## Questions

1. Choose Red dwarf. Its main sequence lifetime is far longer than the age of the universe, 13.8 Gyr. What does that mean for every red dwarf ever born?
2. Choose Massive star. How long does a 15 $$M_\odot$$ star live, compared with the Sun, and how does its life end?

## What to hand in

Prelab answers, the table copies with their graphs and fits, the exponents $$a$$ and the lifetime power, the Sun's largest radius and the share of its life on the main sequence, and answers to the questions. Identify simulated data.
