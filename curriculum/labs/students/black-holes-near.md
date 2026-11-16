# Near a Black Hole
Student laboratory · Astronomy

Textbook: OpenStax *University Physics*, Vol. 1, §13.7 (Einstein's theory of gravity: black holes, light bending and gravitational time dilation). Access for free at https://openstax.org/details/books/university-physics-volume-1.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/black-holes.html?ws=black-holes-near)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Einstein ring; Two images; Microlensing event; Close to a stellar black hole; Sagittarius A\*; M87\*.

**Using the demo.**

- Three views. **Lensing** shows a source seen through a point mass lens, with its light curve and a graph of where its images sit. **Ray traced** is the view of an observer hovering near a black hole, with every light path computed exactly. **Near the hole** shows an observer hovering at a distance $$r$$ from the center, with that observer's clock, the light they send outward and the tidal stretch on a 2 m person.
- In Lensing, the source moves along a straight track past the lens. The light curve's time axis is in units of the Einstein crossing time $$t_E$$, the time to cross one Einstein radius at 200 km/s; the time marker on the light curve, and the source itself, can be dragged.
- The lens view is a thin lens with a point mass and small angles, using ordinary distances (cosmology would use angular diameter distances). The microlensing source star is drawn far bigger than a real star so its images can be seen; the "point source" magnification is for a source of zero size, and the "this source" value is for the disk as drawn.
- Near the hole and Ray traced use a Schwarzschild (not rotating) black hole. Clock rates and redshifts are for an observer hovering at fixed $$r$$, and are exact. The tidal stretch is for a person falling feet first, small compared with $$r$$.
- Record reading stores what the readouts of the open view show. In Lensing: the setup, lens mass, distances, Einstein radius, crossing time, the time from closest approach (the source's position along its track times $$t_E$$) and the magnifications. Near the hole: the mass, $$r_s$$, the distance in km and in $$r_s$$, the clock rate, $$1 + z$$, and the tidal stretch here and at the horizon. Ray traced: the observer's distance, the shadow's radius, its far away estimate, and the Einstein ring's radius, exact and by the thin lens formula. Export to worksheet sends the readings to the matching data table below (Lensing readings with one lens mass go to the light curve table); Clear starts a new series, which goes into a new copy of the table.

</details>

## Goal

Use two predictions of general relativity to measure a black hole: the slowing of clocks near a mass, and the shadow a black hole casts on the sky behind it.

## Background

**The Schwarzschild radius.** A mass $$M$$ squeezed inside

$$r_s = \frac{2GM}{c^2}$$

is a black hole: nothing, not even light, gets out from inside $$r_s$$ (§13.7).

**Clocks and light near a black hole.** A clock hovering at a distance $$r$$ from the center ticks slower than a clock far away by the factor $$\sqrt{1 - r_s/r}$$, and light sent outward from it arrives stretched by $$1 + z = 1/\sqrt{1 - r_s/r}$$. The difference in gravity across a body of length $$L$$ falling feet first is the tidal stretch $$\Delta A = 2GML/r^3$$.

**The shadow.** Light coming in with an impact parameter less than $$b_c = (\sqrt{27}/2)\,r_s$$ falls in. An observer hovering at $$r_o$$ sees a dark disk, the shadow, of angular radius $$\alpha$$ with

$$\sin\alpha = \frac{b_c}{r_o}\sqrt{1 - \frac{r_s}{r_o}}\qquad (r_o \ge 1.5\,r_s).$$

Far away this becomes $$\sin\alpha \approx b_c/r_o$$ (the demo's far away estimate), and $$\alpha \approx b_c/r_o$$ once the angle is small.

Constants: $$GM_\odot = 1.3271\times10^{20}$$ m³/s², $$c = 2.9979\times10^8$$ m/s, 1 pc $$= 3.0857\times10^{16}$$ m, 1 mas $$= 4.8481\times10^{-9}$$ rad, $$g = 9.81$$ m/s².

## Before the lab

1. Find $$r_s$$ for the Sun (1 $$M_\odot$$) and for a 10 $$M_\odot$$ black hole, in km.
2. Show that $$(\text{clock rate})^2$$ plotted against $$1/r$$ is a straight line. What are its slope and intercept?
3. For a 2 m person falling into a 10 $$M_\odot$$ black hole, find the tidal stretch at the horizon, in g.

## Safety

No hazards in the virtual lab.

## Procedure

**Clocks near a stellar black hole.** Press the **Close to a stellar black hole** setup (Near the hole view, 10 $$M_\odot$$). With the **Distance from the center r** slider, record readings at six distances from 1.1 $$r_s$$ out to 100 $$r_s$$: 1.1, 2, 3, 5, 10 and 100 $$r_s$$. Export to worksheet and Clear. Then, at any one distance, set **Mass M** to five values from about 1 $$M_\odot$$ to $$10^{9}$$ $$M_\odot$$ (for example 1, 100, $$10^4$$, $$10^6$$ and $$10^9$$) and record one reading at each, for the stretch at the horizon. Export these too, then Clear.

**The shadow.** Press the **M87\*** setup (Ray traced view). With the **Observer distance r<sub>o</sub>** slider, record the view from five distances from 2 $$r_s$$ out to 100 $$r_s$$: 2, 5, 10, 20 and 100 $$r_s$$, and export the readings to the worksheet.

## Data

| Reading | Mass $$M$$ ($$M_\odot$$) | Distance $$r$$ (km) | Clock rate | Tidal stretch on 2 m (g) | Same person at the horizon (g) | $$1/r$$ (1/km) | $$(\text{clock rate})^2$$ |
|---|---|---|---|---|---|---|---|
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |

**The shadow.**

| Reading | Observer distance $$r_o$$ ($$r_s$$) | Shadow radius $$\alpha$$ (°) | Far away estimate (°) | Einstein ring, exact (°) | Einstein ring, thin lens (°) | sin $$\alpha$$ | $$(r_s/r_o)\sqrt{(1 - r_s/r_o)}$$ |
|---|---|---|---|---|---|---|---|
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |

## Analysis

1. For the first series (several distances), graph $$(\text{clock rate})^2$$ (vertical) against $$1/r$$ (horizontal). Find $$r_s$$ from the slope, then the black hole's mass. Is the intercept what you expected?
2. For the series at different masses, show that the stretch at the horizon falls as $$1/M^2$$ (for example, multiply each value by $$M^2$$). Use $$r = r_s$$ in $$\Delta A = 2GML/r^3$$ to explain why.
3. For the shadow, fill in the last two columns and graph $$\sin\alpha$$ against $$(r_s/r_o)\sqrt{1 - r_s/r_o}$$. Compare the slope with $$b_c = \sqrt{27}/2 = 2.598$$ (in units of $$r_s$$). Below what distance is the far away estimate off by more than 5%?

## Uncertainty

The demo's readings are exact values of its model, shown to six significant figures, so the scatter about your lines is tiny: report each slope with its standard error. A real shadow is not exact. Suppose each shadow radius were measured to 1%. How well would the slope of your graph, and so $$b_c$$, be known?

## Questions

1. M87\* has a mass of $$6.5\times10^9\ M_\odot$$ and is 16.8 Mpc away. Find the angular diameter of its shadow seen from Earth, $$2b_c/D$$, in microarcseconds, and compare with the 42 µas ring the Event Horizon Telescope imaged in 2019. Why is the shadow 2.6 times wider than the horizon?

## What to hand in

Prelab answers, the table copies with their graphs and fits, your values of $$r_s$$, the black hole's mass and $$b_c$$, and answers to the questions. Identify simulated data.
