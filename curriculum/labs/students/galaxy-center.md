# Finding the Center of the Galaxy and Weighing It
Student laboratory · Astronomy

Textbook: OpenStax *Astronomy 2e*, §25.1 (the architecture of the Galaxy) and §25.3 (the mass of the Galaxy). Access for free at https://openstax.org/details/books/astronomy-2e.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/milky-way.html?ws=galaxy-center)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** four views, chosen above the picture. Shapley's clusters: Where is the center?, Herschel's fog, Shapley's ruler, 1918. Two populations: Old means metal poor. Galactic year: The Sun's lap, A star 40,000 ly out, Half the distance, same speed. Spiral arms: Arms that wind up, Traffic jam, Riding with the arms. This worksheet uses **Shapley's clusters** and **Galactic year**.

**Using the demo.**

- Shapley's clusters shows 141 real globular clusters (from the Harris catalog) on a map of the Galaxy seen from above, and on a map of the whole sky. Each distance comes from the cluster's RR Lyrae stars, $$d = \sqrt{L/b}$$, with the luminosity L you assume and the dust correction on or off. The clusters are measured brightest first; **Measure all** measures the rest. The green ring marks the center of the swarm.
- The selected cluster (NGC 104 when the page opens) shows its RR Lyrae brightness b in Suns (how bright they look, compared with the Sun seen from 1 AU), the same with the dust taken out, and the distance you get.
- Galactic year shows the Sun and a second star going around the center, and the measured rotation curve. With **Speed from the measured rotation curve** checked, the star's speed comes from the curve at its distance. The readouts give one lap, $$t = 2\pi r/v$$, and the mass inside the star's orbit from Kepler's third law.
- Record reading stores the star's distance r, its speed v, its lap, a in AU, P in years, the mass inside its orbit and the Ghost speed (how fast it would move if all the mass sat inside the Sun's orbit). Export to worksheet sends the readings to the first Data table below.
- The disk stars drawn behind the clusters are a sketch; the clusters are real. Orbits are circles.

</details>

## Goal

Find the center of the Milky Way the way Harlow Shapley did in 1918, from the globular clusters, and then weigh the Galaxy with the orbits of its stars.

## Background

**Living inside the disk.** We live inside a flat disk of stars, gas and dust about 100,000 light years (ly) across. The dust dims everything along the disk beyond a few thousand light years, so when William Herschel counted stars around 1785 he saw about the same number in every direction along the Milky Way and put the Sun near the middle. He was really seeing only the part of the disk near us.

**Shapley's clusters.** Globular clusters are balls of hundreds of thousands of old stars. Most sit well above or below the disk, out of the dust, so they can be seen across the whole Galaxy. If the Sun were at the center, they would be spread evenly around our sky. Shapley found instead that most of them are on one side, toward the constellation Sagittarius, and that their swarm is centered far from the Sun. That center is the center of the Galaxy.

**A standard candle.** Shapley measured each cluster's distance from its RR Lyrae stars, which all give out about the same light, about 50 times the Sun's. If a star gives out L times the Sun's light and looks b times as bright as the Sun does from 1 AU, then light spreads out as one over distance squared, $$b = L/d^2$$, so its distance in AU is

$$d = \sqrt{\frac{L}{b}}.$$

There are 63,241 AU in a light year. Dust makes a cluster look dimmer than it is, so an uncorrected b puts it too far away. A wrong L shifts every distance by the same factor.

**One lap of the Galaxy.** A star on a circle of radius r at speed v takes $$t = 2\pi r/v$$ to go around once. With v in km/s, r must be in km: 1 ly = $$9.461\times10^{12}$$ km and 1 year = $$3.156\times10^7$$ s. For the Sun this lap is the galactic year.

**Weighing with an orbit.** Kepler's third law weighs whatever is inside an orbit. With the orbit's size a in AU and the time for one lap P in years, the mass inside it, in solar masses, is

$$M = \frac{a^3}{P^2}.$$

Only the mass inside the orbit counts: the pulls of the mass outside it nearly cancel. In the solar system almost all the mass is in the Sun, so far planets move slowly: Neptune, 30 times farther out than Earth, moves at about a fifth of Earth's speed. If the Galaxy's mass were packed near its center in the same way, stars far out would move slowly too.

## Before the lab

1. An RR Lyrae star in a globular cluster gives out 50 times the Sun's light and looks $$2.0\times10^{-17}$$ times as bright as the Sun does from 1 AU. How far away is it, in AU and in light years?
2. A star 40,000 ly from the center moves at 230 km/s. How long does one lap take, in years?
3. The Sun is 26,700 ly from the center and moves at 229 km/s. Imagine a star three times farther out, at 80,000 ly. If the Galaxy's mass were concentrated near the center, like the Sun's mass in the solar system, that star would move at about 132 km/s. Guess what the real Milky Way gives at 80,000 ly: much slower than the Sun, about 132 km/s, or about as fast as the Sun? Give the reason for your guess before you open the demo.

## Safety

No hazards in the virtual lab.

## Procedure

**Part 1. Where is the center?** The page opens in **Shapley's clusters** with the setup **Where is the center?**: the 20 brightest clusters are already measured, with L = 50 L☉ and **Correct for dust** checked.

1. In the second Data table, row "First 20 clusters", write the **Clusters measured**, the number **In the half of the sky toward Sagittarius** and the **Center of the swarm, from the Sun** (in ly).
2. The cluster NGC 104 (47 Tuc) is selected. Write its **RR Lyrae brightness b, in Suns**, its **b with the dust taken out**, its **Distance d = √(L/b) you get** and its **Catalog distance** in Analysis 1.
3. Press **Measure all**. Fill the row "All clusters" the same way.
4. Press the setup **Shapley's ruler, 1918**. It turns the dust correction off and sets L to 80 L☉, as Shapley's numbers effectively did. Fill the row "Shapley's ruler".

**Part 2. The galactic year.** Press **Galactic year** above the picture, then the setup **The Sun's lap**. Leave **Speed from the measured rotation curve** checked.

1. Set **Star's distance from the center r** to 20,000 ly: click the readout beside the slider, type 20000 and press Enter. Press **Record reading**.
2. Do the same at 30,000, 40,000, 50,000, 60,000, 70,000 and 80,000 ly.
3. Press **Export to worksheet**. The seven readings fill the first Data table.

Look at the row for 80,000 ly. Its speed v sits beside the Ghost speed, the 132 km/s the star would have if all the mass were inside the Sun's orbit. Which one matches your guess in Before the lab 3?

## Data

**Orbits.** Sent by Export to worksheet.

| Reading | Distance $$r$$ (ly) | Speed $$v$$ (km/s) | One lap $$t$$ (million yr) | $$a$$ (AU) | $$P$$ (yr) | Mass inside the orbit $$M$$ (M☉) | Ghost speed (km/s) |
|---|---|---|---|---|---|---|---|
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |

**The swarm of clusters.** Typed from the readouts in Part 1.

| Survey | Clusters measured | Toward Sagittarius | Center of the swarm, from the Sun (ly) |
|---|---|---|---|
| First 20 clusters | | | |
| All clusters | | | |
| Shapley's ruler | | | |

## Analysis

1. NGC 104: find its distance in AU from $$d = \sqrt{L/b}$$ with L = 50 and the b with the dust taken out, then convert it to light years. Does it agree with the demo's distance? Find it again with the b that still has the dust in it. By what percent does the dust push the cluster too far away? Which of your two distances is closer to the catalog distance?
2. From the swarm table: how did the center of the swarm move as the fainter clusters came in, and how close did all the clusters bring it to the modern distance to the center, 26,673 ly? How far off was Shapley's ruler, as a ratio of the modern distance?
3. In the 40,000 ly row of the Orbits table, work out one lap $$t = 2\pi r/v$$ yourself, in millions of years, and compare it with the table.
4. In the same row, work out $$M = a^3/P^2$$ from the a and P columns and compare it with the Mass inside the orbit column.
5. Graph the mass inside the orbit (vertical) against the distance r (horizontal). Is it close to a straight line? How many times more mass is inside 80,000 ly than inside 40,000 ly?

## Uncertainty

The measured speeds scatter by a few km/s around the curve the demo uses. The mass goes as $$v^2$$, so a 2% error in v gives about a 4% error in M. A wrong luminosity for the RR Lyrae stars moves every cluster by the same factor. Which of these two would have mattered more to Shapley, and why?

## Questions

1. Choose **Herschel's fog** under Shapley's clusters and read its hint. Why did counting stars in every direction along the Milky Way put Herschel near the middle, and why did Shapley's clusters escape the same trap?
2. Go back to your guess in Before the lab 3 and to the 80,000 ly row. How fast does the star really move, and how far is that from the Ghost speed? Your answer to Analysis 5 says the mass keeps growing as you go out. If the mass really sat near the center, how would the speeds and masses in your table look instead? What does the real table say about mass we cannot see?

## What to hand in

Prelab answers, both Data tables with your graph, Analysis 1 to 5 with the numbers you worked out, the uncertainty answer and the answers to the questions. Identify simulated data: the cluster positions and brightnesses are real catalog data; the orbits are a model built on a measured rotation curve.
