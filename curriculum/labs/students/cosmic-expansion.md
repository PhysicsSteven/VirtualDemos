# Hubble's Law and the Age of the Universe
Student laboratory · Modern Physics

Textbook: OpenStax *University Physics*, Vol. 3, §§11.6 and 11.7. Access for free at https://openstax.org/details/books/university-physics-volume-3.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/early-universe.html?setup=exToday)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Hubble's law today; Half the size; Matter only universe (these three use the Expansion view, the subject of this worksheet); Proton pairs stop; Atoms form (the Thermal history worksheet); First three minutes (the Helium worksheet); Glow at decoupling; Microwave sky today (the Microwave background view).

**Using the demo.**

- The Expansion view shows a patch of a model universe. Galaxies sit at fixed places in space, and space stretches by the scale factor $$a(t)$$, with $$a = 1$$ today. The picture is drawn to a fixed ruler (the 100 Mpc bar), so as time runs the galaxies drift apart.
- Choose the model: Planck ΛCDM (our universe, with the Planck 2018 values), Matter only, Empty, or de Sitter (only a cosmological constant). Every model has the same Hubble constant $$H_0$$ today, which you can also change.
- Time is counted from today: negative times are in the past. Step it by 0.1 Gyr with the buttons, or play it.
- The panel in the picture gives the distance from home to the five marked galaxies A to E, in megaparsecs (1 Mpc = 3.26 million light years). Home starts as the Milky Way; click any galaxy to watch from it.
- The graph shows $$a$$ against time for all four models.
- Record reading stores one row for each marked galaxy: the model, the time and its distance. Export to worksheet sends the readings to the Data table below; Clear starts a new series, which goes into a new copy of the table.
- Blind hides the speeds, the ages, the Hubble parameter and the velocity arrows.

</details>

## Goal

Measure how fast galaxies move away from us by timing how their distances grow, show that the speed is proportional to the distance (Hubble's law), and use the Hubble constant to estimate the age of the universe.

## Background

Light from distant galaxies is redshifted, and the farther the galaxy, the larger the shift. Hubble's law (§11.6) says the speed at which a galaxy recedes is proportional to its distance,

$$v = H_0 d,$$

where $$H_0$$ is the Hubble constant, about 70 km/s/Mpc. The galaxies are not flying through space from a central explosion: space itself is stretching, like the surface of a balloon being blown up, so every galaxy sees every other moving away.

If every distance is multiplied by the same scale factor $$a(t)$$, then $$d = a\,\chi$$ for a fixed $$\chi$$, and

$$v = \frac{dd}{dt} = \frac{\dot a}{a}\,d = H\,d,$$

so the Hubble parameter is $$H = \dot a/a$$, and $$H_0$$ is its value today.

If galaxies had always moved apart at their present speeds, they would all have been together a time $$d/v = 1/H_0$$ ago: the Hubble time. Gravity slows the expansion and dark energy speeds it up, so the true age differs. For a universe of matter alone it is $$2/(3H_0)$$.

A useful conversion: $$1~\mathrm{Mpc/Gyr} = 977.8~\mathrm{km/s}$$, so $$1/H_0 = (977.8/H_0)$$ Gyr when $$H_0$$ is in km/s/Mpc.

## Before the lab

1. Using $$H_0$$ = 70 km/s/Mpc, how fast does a galaxy 100 Mpc away recede? How far away is a galaxy receding at 10,000 km/s?
2. Find the Hubble time $$1/H_0$$ in billions of years for $$H_0$$ = 67.4 km/s/Mpc.
3. A galaxy is 200 Mpc away and the universe expands at $$H_0$$ = 67.4 km/s/Mpc. By how much does its distance grow in 0.1 Gyr?
4. Predict the age of a matter only universe with $$H_0$$ = 67.4 km/s/Mpc. Then think about our own universe (the demo's Planck ΛCDM model): when it was half its present size, $$H$$ was larger than it is today. A galaxy now about 375 Mpc from us was then about 190 Mpc away. Was it moving away from us faster then than it is today, slower, or at the same speed? Say why you think so.

## Safety

No hazards in the virtual lab.

## Procedure

Open the Lab section and check Blind before you start, so the readouts do not give the speeds, H or the ages. Each press of Record reading stores five rows, one for each marked galaxy A to E. Step the time with the −0.1 Gyr, +0.1 Gyr and Today buttons on the model universe card (beside Model and the Time from today t slider).

**Today, from the Milky Way.** The link opens the Hubble's law today setup (Planck ΛCDM, home the Milky Way, t = 0). Press Record reading, press +0.1 Gyr and press Record reading again. Press Export to worksheet (ten rows).

**From another galaxy.** Press Clear, press Today, and click any other galaxy in the picture to make it home. Record at t = 0 and t = +0.1 Gyr as before, and export to a new copy of the table.

**Other universes.** Press Clear and Today, choose Matter only under Model, and record at t = 0 and t = +0.1 Gyr; export. Then do the same for Empty. Each goes to its own copy.

**The past.** Clear, press the Half the size setup (Planck ΛCDM, about 7.95 Gyr ago), record at that time, press +0.1 Gyr and record again; export.

Before you turn Blind off, write down your own estimate of each model's age from your slopes. Then uncheck Blind, choose each model under Model and note the Age today readout.

## Data

| Reading | Model | Time from today t (Gyr) | Galaxy | Distance d (Mpc) | Speed v (km/s) |
|---|---|---|---|---|---|
| | | | | | |
| | | | | | |
| | | | | | |

Fill the Speed column on the rows for the later time, from $$v = \Delta d/\Delta t$$ for the same galaxy: the change in distance in Mpc over 0.1 Gyr gives Mpc/Gyr, and 1 Mpc/Gyr = 977.8 km/s.

## Analysis

1. For the first copy (Planck ΛCDM from the Milky Way), plot $$v$$ (vertical) against $$d$$ (horizontal), using the later time's rows. Is the graph a straight line through the origin? Find its slope $$H$$ in km/s/Mpc. For each of the other four copies, find $$H = v/d$$ from the later time's row of galaxy E, the farthest one.
2. Compare the value of $$H$$ measured from the Milky Way (the slope) and from the other galaxy (galaxy E). What does that tell you about whether we are at the center of the expansion?
3. From your slope for Planck ΛCDM today, find the Hubble time $$1/H$$ in Gyr and compare it with the model's age.
4. Matter only and Empty universes have the same $$H_0$$ today. Compare their ages with $$1/H_0$$ and with $$2/(3H_0)$$, and explain the difference using the shape of each curve on the scale factor graph.
5. From the Half the size readings (galaxy E), find $$H$$ when $$a$$ = 0.5. Was the universe expanding faster or slower then, in km/s per Mpc?

## Uncertainty

The distances are given to 0.01 Mpc, and each speed comes from a difference of two distances 0.1 Gyr apart. Estimate the uncertainty in the speed of galaxy A and of galaxy E from the rounding alone, and say which galaxies give the best value of $$H$$. Your speed is an average over the 0.1 Gyr step, but the distance on the same row is the one at the end of the step: by roughly what fraction does that make your slope low? A real galaxy also has its own peculiar motion of a few hundred km/s, which the demo leaves out: how far away must a galaxy be for that to be less than 10% of its Hubble speed?

## Questions

1. Galaxies themselves do not grow as the universe expands, and neither does the solar system. Why not?
2. A de Sitter universe has no beginning. What does its scale factor graph look like going back in time, and why?
3. The galaxy in Before the lab 4 is galaxy E. Compare its speed in the Half the size copy with its speed today in the first copy, and with your prediction. Explain how its speed can change the way it did while $$H$$ falls, using $$\dot a = aH$$, and say whether the expansion of Planck ΛCDM is speeding up or slowing down today.

## What to hand in

Prelab answers, the table copies with their graphs and slopes, your age estimates next to the demo's ages, and answers to the questions. Identify simulated data.
