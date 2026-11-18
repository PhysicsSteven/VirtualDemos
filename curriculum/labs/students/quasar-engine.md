# Inside a Quasar
Student laboratory · Astronomy

Textbook: OpenStax *Astronomy 2e*, §27.1 (quasars) and §27.2 (supermassive black holes: what quasars really are). Access for free at https://openstax.org/details/books/astronomy-2e.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/active-galaxies.html?ws=quasar-engine)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** three views, chosen above the picture. Flicker means small: Brightens in an hour, Changes over a week, A light year across. The engine: One Sun of gas a year, Fusion instead, Too much light: the Eddington limit, A small black hole glows in X-rays. Jets faster than light?: M87's jet: faster than light?, A jet seen from the side. This worksheet uses all three views.

**Using the demo.**

- Flicker means small shows a glowing ball seen from far to the right. Every part of it brightens at the same instant, but light from the far side has farther to travel, so we see the change spread out over the time light takes to cross the ball.
- The engine shows a black hole of mass M fed $$\dot m$$ solar masses of gas a year, with its hot disk. The share of the mass turned into light, η, is chosen with the buttons under the sliders. The readouts give the power L, the Eddington limit and their ratio.
- Jets faster than light? shows a blob shot out of the core at speed v at an angle θ to our line of sight, with a dot for the light it gives off each year, and a graph of what a telescope sees.
- To set a value exactly, click the readout beside a slider, type the value and press Enter (for example 0.3 for 0.3 solar masses a year, or 3e8 for $$3\times10^8$$ solar masses).
- Record reading stores the engine's mass, feeding rate, η, power, Eddington limit and ratio in The engine view, or the blob's speed, angle, the time between arrivals, the distance across the sky and the apparent speed in the jet view. Export to worksheet sends engine readings to the first Data table and jet readings to the third. Clear starts a new series, which goes into a new copy of its table.

</details>

## Goal

Find out how big a quasar can be from how fast it flickers, how much power a black hole makes from the gas it swallows, and why blobs in quasar jets can seem to cross the sky faster than light.

## Background

**Flicker means small.** A quasar is a point of light that outshines a whole galaxy of a hundred billion stars, and many quasars change brightness in days or even hours. Suppose every part of a glowing ball brightened at the same instant. Light from the near side would reach us first, and light from the far side a little later, because it has to cross the ball. A change we see happening in a time t must come from a region no bigger than the distance light goes in that time,

$$D \approx c\,t,$$

with $$c = 3.00\times10^5$$ km/s. One AU is $$1.496\times10^8$$ km, and one light year is 63,241 AU.

**The engine.** Gas falling toward a black hole swirls into a flat disk, rubs, heats to over 100,000 K and glows. Falling in can turn about 10% of the gas's mass into energy; hydrogen fusion in stars turns only 0.7%. If η is that share and $$\dot m$$ is the mass swallowed each second, the power is

$$L = \eta\,\dot m\,c^2,$$

with $$c = 3.00\times10^8$$ m/s, the mass in kg and L in watts. One solar mass is $$1.988\times10^{30}$$ kg, one year is $$3.156\times10^7$$ s, and the Sun gives out $$L_\odot = 3.83\times10^{26}$$ W.

**Too much light.** Light pushes on the infalling gas. At the Eddington limit the push balances the black hole's pull; a brighter source would blow its own fuel away. The limit is proportional to the black hole's mass: $$L_{\text{Edd}} = 1.26\times10^{31}$$ W for every solar mass. So a quasar that shines steadily must hold a black hole of at least $$L/(1.26\times10^{31}\ \text{W})$$ solar masses.

**Jets.** Some quasars shoot out jets of gas at nearly the speed of light. A blob moving nearly toward us almost keeps up with its own light: light it gives off a year apart reaches us much less than a year apart. Its apparent speed across the sky is the distance it moves sideways in one year, in light years, divided by the time between the arrivals of that light, in years.

## Before the lab

1. A quasar brightens noticeably in one hour. How big can it be, in km and in AU?
2. A black hole swallows one solar mass of gas a year and turns 10% of it into energy. Find the power in watts and in Suns.
3. A blob in a quasar's jet moves at 0.99 times the speed of light, aimed 17° from our line of sight, almost straight at us. Measured with a telescope over several years, will it seem to cross the sky slower than light, at about the speed of light, or faster than light? Commit to one and say why before you open the demo.

## Safety

No hazards in the virtual lab.

## Procedure

**Part 1. Flicker means small.** The page opens in **Flicker means small** with the setup **Brightens in an hour**. In the second Data table, write the **Change takes t**, the **Biggest size D = c t** in km and the **in AU** readout. Press **Changes over a week** and **A light year across** and fill a row for each.

**Part 2. The engine.** Press **The engine** above the picture, then the setup **One Sun of gas a year** (M = $$10^8$$ M☉, Typical 10%). Set **Gas swallowed ṁ** to 0.1 M☉/yr (click its readout and type 0.1) and press **Record reading**. Record again at 0.3, 1, 3 and 10 M☉/yr. Press **Export to worksheet**, then **Clear**.

**Part 3. The limit and fusion.** Keep ṁ at 10 M☉/yr. Set **Black hole mass M** to $$3\times10^8$$ (type 3e8) and record, then $$1\times10^9$$ and record. Set M back to 1e8 and ṁ to 1, press **Fusion 0.7%** under Share of the mass turned into energy, and record. Press **Export to worksheet**: these three go into a new copy of the first table.

**Part 4. A jet.** Press **Jets faster than light?** above the picture, then **M87's jet: faster than light?** (0.99 c at 17°). Press **Play** and watch the dots of light reach the telescope. Press **Record reading**. Compare the **Apparent speed across the sky** with your guess in Before the lab 3. Then set **Angle from our line of sight θ** to 5°, 30°, 45°, 60° and 90° (click its readout to type) and record each. Press **Angle for the biggest apparent speed** and record. Press **Export to worksheet**: the seven readings fill the third Data table.

## Data

**The engine.** Sent by Export to worksheet (Part 2, then Part 3 in a second copy).

| Reading | Black hole mass $$M$$ (M☉) | Gas swallowed $$\dot m$$ (M☉/yr) | η (%) | Power $$L$$ (W) | Power (L☉) | Eddington limit $$L_{\text{Edd}}$$ (W) | $$L \div L_{\text{Edd}}$$ |
|---|---|---|---|---|---|---|---|
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |

**Flicker.** Typed from the readouts in Part 1. Type a number such as 1.08 × 10⁹ as 1.08e9.

| Setup | The change takes | Biggest size $$D$$ (km) | Biggest size $$D$$ (AU) |
|---|---|---|---|
| Brightens in an hour | | | |
| Changes over a week | | | |
| A light year across | | | |

**The jet.** Sent by Export to worksheet (Part 4).

| Reading | Real speed (c) | Angle θ (°) | Light given off a year apart arrives (yr apart) | Distance across the sky in that year (ly) | Apparent speed (c) |
|---|---|---|---|---|---|
| | | | | | |
| | | | | | |
| | | | | | |

## Analysis

1. From the Flicker table, where would a quasar that brightens in an hour reach in our solar system? Saturn's orbit is 19.2 AU across. Compare the one week size with the distance to the nearest star, 4.2 ly.
2. Graph the power L in watts (vertical) against $$\dot m$$ (horizontal) for the Part 2 readings. Is it a straight line through the origin? Read its slope in watts per (M☉/yr).
3. Your slope is $$\eta c^2$$ times one solar mass per year. Find η from it: multiply the slope by $$3.156\times10^7$$ s and divide by $$(1.988\times10^{30}\ \text{kg})(3.00\times10^8\ \text{m/s})^2$$.
4. Use the fusion row and the 1 M☉/yr row of Part 2: how many times more power does the black hole give from the same gas than fusion would?
5. At 10 M☉/yr onto $$10^8$$ M☉, by what factor is L over the Eddington limit? Divide L by $$1.26\times10^{31}$$ W to find the smallest black hole that could shine this brightly, and check it against your Part 3 readings.
6. For the 17° jet reading, divide the distance across the sky by the time between arrivals and compare with the apparent speed. Which angle in your table gives the biggest apparent speed?

## Uncertainty

Nobody can see η directly: it ranges from about 6% for a black hole that does not spin to 42% for one that spins as fast as possible. If a quasar gives out $$5.7\times10^{38}$$ W, how much gas a year must it swallow at 6% and at 42%?

## Questions

1. In your jet table, what is the apparent speed at 90°, with the blob moving straight across the sky? Why does the illusion need a jet pointed nearly at us?
2. Look back at your guess in Before the lab 3 and at the 17° reading. Did the blob seem to cross the sky faster than light? Explain, from the time between the arrivals of its light, how that can happen while the blob itself moves slower than light.

## What to hand in

Prelab answers, the three Data tables with the graph, Analysis 1 to 6 with your work, the uncertainty answer and the answers to the questions. Identify simulated data: every reading in this lab is simulated.
