# Stellar Evolution
Student laboratory · Astronomy

Textbook: OpenStax *University Physics*, Vol. 3, §6.1 (blackbody radiation and the Stefan–Boltzmann law) and §10.6 (nuclear fusion, the energy source of stars). Access for free at https://openstax.org/details/books/university-physics-volume-3.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/hr-diagram.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** The Sun; Red dwarf; Sirius A; Massive star; White dwarf cooling; Cluster.

**Using the demo.**

- The Hertzsprung Russell diagram plots a star's luminosity against its surface temperature, hot on the left, both on logarithmic scales. The diagonal radius lines are lines of constant radius. Below it the star is drawn to scale next to the Sun or the Earth.
- One star at a time: choose its initial mass, then move it through its life. The life stage slider and Play stretch the short late phases so you can watch them; the age readout is always the real age. The star can also be dragged along its track on the diagram.
- Cluster shows 1000 stars born together, from 0.4 to 25 $$M_\odot$$, at the age you choose (a logarithmic slider from 10 Myr to 13 Gyr). Tap a star to read its mass and phase.
- The model: the main sequence follows fits of luminosity, radius and lifetime to the mass (a star's luminosity rises by about a factor of 2 during its main sequence life); every later phase is a schematic track, with the right shape and approximate numbers, and phase lengths set as fractions of the main sequence lifetime. White dwarfs keep a fixed radius and cool by Mestel's law. The cluster's masses are drawn at random from a fixed recipe, and its stars are single stars of solar composition.
- Record reading stores, for one star, the setup, mass, phase, age, the time left in the phase, luminosity, surface temperature and radius; for the cluster, its age, the turnoff mass and how many stars are in each stage. Export to worksheet sends the readings to the matching data table below (readings at several masses to the first, readings of one star to the second, cluster readings to the third). Clear starts a new series, which goes into a new copy of the table.

</details>

## Goal

Measure how a star's mass sets its luminosity and its lifetime, follow the Sun through its whole life, and use a star cluster to find how many stars are born at each mass.

## Background

**Luminosity, radius and temperature.** A star radiates nearly as a blackbody, so its luminosity is $$L = 4\pi R^2\sigma T^4$$. In units of the Sun's values,

$$\frac{L}{L_\odot} = \left(\frac{R}{R_\odot}\right)^2\left(\frac{T}{T_\odot}\right)^4,\qquad T_\odot = 5772\ \text{K}.$$

**Mass, luminosity and lifetime.** On the main sequence a star fuses hydrogen to helium in its core, and its mass sets everything else. Over a range of masses the luminosity follows a power law, $$L \propto M^a$$. A star's main sequence lifetime is roughly its fuel (proportional to $$M$$) divided by the rate it uses fuel (proportional to $$L$$).

**Star clusters.** All the stars in a cluster form at about the same time. After a time $$t$$, the stars heavier than the turnoff mass $$M_{to}$$, whose main sequence lifetime is shorter than $$t$$, have left the main sequence.

**How many stars at each mass.** Stars are born with many more of low mass than of high mass. If the number born per unit mass falls as $$dN/dM \propto M^{-x}$$ (a power law with $$x > 1$$), then the number born heavier than $$M$$ is

$$N(>M) \propto M^{1 - x} - M_{\text{max}}^{1 - x},$$

where $$M_{\text{max}}$$ is the heaviest star. For $$M \ll M_{\text{max}}$$ the second term is small, and $$N(>M) \propto M^{1-x}$$.

Use 1 AU $$= 215\ R_\odot$$ and $$R_\odot = 109\ R_\oplus$$.

## Before the lab

1. Two stars have the same surface temperature, but one is 100 times as luminous as the other. Which one is larger, and by what factor?
2. Near the top of its red giant branch the Sun will be about 2500 $$L_\odot$$ at 3150 K. Find its radius in $$R_\odot$$ and in AU.
3. If $$L \propto M^4$$ and the lifetime is fuel over the rate of using it, how does the lifetime depend on $$M$$? The Sun's main sequence lifetime is about 10 Gyr. Estimate it for a 2 $$M_\odot$$ star.
4. Show the formula for $$N(>M)$$ in the Background by integrating $$dN/dM \propto M^{-x}$$ from $$M$$ to $$M_{\text{max}}$$. How would you find $$x$$ from a graph of $$\log N(>M)$$ against $$\log M$$?
5. The Sun will leave a white dwarf of 0.57 $$M_\odot$$ with a radius of 0.0128 $$R_\odot$$. Find its surface temperature when it has faded to $$10^{-3}\ L_\odot$$.

## Safety

No hazards in the virtual lab.

## Procedure

**The main sequence.** Choose The Sun. Record a reading for each of about five initial masses from 0.5 to 2 $$M_\odot$$, with the star at the very start of its life (age zero), so that the time left in the phase is its whole main sequence lifetime. Clear, and do the same for about seven masses from 2 to 25 $$M_\odot$$, spread evenly on a logarithmic scale.

**The Sun's life.** Clear and choose The Sun. Record a reading today. Then record one near the end of each phase, main sequence, subgiant, red giant branch (at its top), horizontal branch and asymptotic giant branch (at its top), and one in the planetary nebula phase. Finish with three readings on the white dwarf line, at white dwarf ages near 10 Myr, 1 Gyr and 10 Gyr after the nebula.

**A star cluster.** Clear and choose Cluster. Record readings at about seven cluster ages from 100 Myr to 13 Gyr, spread evenly on a logarithmic scale.

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

**A star cluster.**

| Reading | Cluster age $$t$$ (yr) | Turnoff mass $$M_{to}$$ ($$M_\odot$$) | Main sequence | Giants | White dwarfs | Exploded | log₁₀ $$M_{to}$$ | log₁₀ $$N_{left}$$ |
|---|---|---|---|---|---|---|---|---|
| | | | | | | | | |
| | | | | | | | | |
| | | | | | | | | |

## Analysis

1. Fill in the three log₁₀ columns, and graph log₁₀ $$L$$ against log₁₀ $$M$$ for each series. What is the exponent $$a$$ in each range of mass?
2. Graph log₁₀ $$t$$ against log₁₀ $$M$$ for each series. What power of $$M$$ does the lifetime follow? Compare it with what "fuel over the rate of using it" and your exponents from Analysis 1 predict, and suggest a reason they differ.
3. For the Sun's life, find $$R$$ from $$L$$ and $$T$$ for each reading and compare with the radius the demo shows. How large does the Sun become, compared with Earth's orbit?
4. From the ages, find how long the Sun spends in each phase before it becomes a white dwarf, and what share of that time is the main sequence. Explain why most stars we see are on the main sequence.
5. For the three white dwarf readings, what happens to the radius as the white dwarf fades? Use two of them to show that $$L \propto T^4$$ along its track.
6. For the cluster, fill in the last two columns: $$N_{left}$$, the number of stars that have left the main sequence, is the total, 1000, minus the main sequence count. Graph log₁₀ $$N_{left}$$ against log₁₀ $$M_{to}$$. Use the slope to find $$x$$, and compare with Salpeter's value for stars near the Sun, $$x = 2.35$$.
7. Check the turnoff masses against the lifetimes in your first table: does a star of the turnoff mass have a main sequence lifetime equal to the cluster's age?

## Uncertainty

The single star readings are exact values of the model, but the model itself is approximate: the fits describe typical stars, and the later phases are schematic. The cluster is a random sample of 1000 stars, so each count $$N$$ has a random scatter of about $$\sqrt{N}$$. Estimate that scatter for your smallest count of stars that have left the main sequence, and use it to judge how well your slope in Analysis 6 fixes $$x$$.

## Questions

1. A star stays near the same place on the main sequence for its whole main sequence life. What sets where on the main sequence it sits?
2. Sirius A, about 2 $$M_\odot$$, is still on the main sequence. Its companion Sirius B is a white dwarf of about 1 $$M_\odot$$, and the two formed together. How can the less massive star now be the one that has died?
3. A cluster's turnoff is at 2 $$M_\odot$$. Use your lifetime fit to find its age. Why do astronomers date clusters this way, rather than single stars?
4. Choose Red dwarf. Its main sequence lifetime is far longer than the age of the universe, 13.8 Gyr. What does that mean for every red dwarf ever born?
5. Why does a white dwarf cool along a line of constant radius, while a red giant of the same luminosity is enormous?
6. Choose Massive star. How long does a 15 $$M_\odot$$ star live, compared with the Sun, and how does its life end?

## What to hand in

Prelab answers, the table copies with their graphs and fits, the exponents $$a$$ and the lifetime power, the Sun's largest radius and the share of its life on the main sequence, your value of $$x$$ with its uncertainty, and answers to the questions. Identify simulated data.
