# Star Clusters
Student laboratory · Astronomy

Textbook: OpenStax *University Physics*, Vol. 3, §6.1 (blackbody radiation and the Stefan–Boltzmann law) and §10.6 (nuclear fusion, the energy source of stars). Access for free at https://openstax.org/details/books/university-physics-volume-3.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/hr-diagram.html?ws=hr-diagram-cluster)

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

Use the turnoff of a star cluster to date it, and use the stars that have left the main sequence to find how many stars are born at each mass.

## Background

**Lifetime and mass.** A star's main sequence lifetime is roughly its fuel (proportional to $$M$$) divided by the rate it uses fuel (proportional to $$L$$). In this demo the lifetime follows the fit $$t = 10\ \text{Gyr}\,(M/M_\odot)^{-2.5}$$, which gives the Sun 10 Gyr.

**Star clusters.** All the stars in a cluster form at about the same time. After a time $$t$$, the stars heavier than the turnoff mass $$M_{to}$$, whose main sequence lifetime is shorter than $$t$$, have left the main sequence.

**How many stars at each mass.** Stars are born with many more of low mass than of high mass. If the number born per unit mass falls as $$dN/dM \propto M^{-x}$$ (a power law with $$x > 1$$), then the number born heavier than $$M$$ is

$$N(>M) \propto M^{1 - x} - M_{\text{max}}^{1 - x},$$

where $$M_{\text{max}}$$ is the heaviest star. For $$M \ll M_{\text{max}}$$ the second term is small, and $$N(>M) \propto M^{1-x}$$.

## Before the lab

1. Use $$t = 10\ \text{Gyr}\,(M/M_\odot)^{-2.5}$$ to find the main sequence lifetime of a 2 $$M_\odot$$ star, and the turnoff mass of a cluster 1 Gyr old.
2. Show the formula for $$N(>M)$$ in the Background by integrating $$dN/dM \propto M^{-x}$$ from $$M$$ to $$M_{\text{max}}$$. How would you find $$x$$ from a graph of $$\log N(>M)$$ against $$\log M$$?
3. The demo's cluster holds 1000 stars of 0.4 to 25 $$M_\odot$$, all born together. The Sun's main sequence lasts 10 Gyr. When the cluster is 13 Gyr old, how many of its 1000 stars do you expect still to be on the main sequence: fewer than 100, about 300, about 500, or more than 600? Write down your number and the reasoning behind it.

## Safety

No hazards in the virtual lab.

## Procedure

**A star cluster.** Press the **Cluster** setup. With the **Cluster age** slider (a log scale), record readings at seven cluster ages from 100 Myr to 13 Gyr, spread evenly on a logarithmic scale, for example 0.1, 0.2, 0.5, 1, 2.5, 6 and 13 Gyr, and export them to the worksheet.

## Data

| Reading | Cluster age $$t$$ (yr) | Turnoff mass $$M_{to}$$ ($$M_\odot$$) | Main sequence | Giants | White dwarfs | Exploded | log₁₀ $$M_{to}$$ | log₁₀ $$N_{left}$$ |
|---|---|---|---|---|---|---|---|---|
| | | | | | | | | |
| | | | | | | | | |
| | | | | | | | | |

## Analysis

1. For the cluster, fill in the last two columns: $$N_{left}$$, the number of stars that have left the main sequence, is the total, 1000, minus the main sequence count. Graph log₁₀ $$N_{left}$$ (vertical) against log₁₀ $$M_{to}$$ (horizontal). Use the slope to find $$x$$, and compare with Salpeter's value for stars near the Sun, $$x = 2.35$$.
2. Check the turnoff masses against the lifetime fit: does a star of the turnoff mass have a main sequence lifetime $$10\ \text{Gyr}\,(M_{to}/M_\odot)^{-2.5}$$ equal to the cluster's age?

## Questions

1. A cluster's turnoff is at 2 $$M_\odot$$. Use the lifetime fit to find its age. Why do astronomers date clusters this way, rather than single stars?
2. Look at the 13 Gyr row of your table. How many stars were still on the main sequence, and what turnoff mass did the demo give? Set that beside your number in Before the lab 3, and explain the count from the lifetime fit and how many stars are born at each mass.

## Uncertainty

For courses that treat measurement uncertainty. This section is not counted in the 75 minutes; do it when your instructor assigns it.
{: .ws-assigned}

The cluster readings are exact counts from a random sample of 1000 stars, so each count $$N$$ has a random scatter of about $$\sqrt{N}$$. Estimate that scatter for your smallest count of stars that have left the main sequence, and use it to judge how well your slope in Analysis 1 fixes $$x$$. The lifetime fit describes typical stars, so the turnoff check in Analysis 2 is a check of the demo's model, not of real clusters. Give your value of $$x$$ with its uncertainty from the slope, and say whether it agrees with Salpeter's value within that uncertainty.

## What to hand in

Prelab answers, the table copy with its graph and fit, your value of $$x$$, and answers to the questions (and to Uncertainty, if assigned). Identify simulated data.
