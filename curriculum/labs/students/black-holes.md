# Gravitational Lensing
Student laboratory · Astronomy

Textbook: OpenStax *University Physics*, Vol. 1, §13.7 (Einstein's theory of gravity: black holes, light bending and gravitational time dilation). Access for free at https://openstax.org/details/books/university-physics-volume-1.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/black-holes.html)

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

Use gravitational lensing to measure a lens: find how the Einstein radius depends on the lens mass, and use a microlensing light curve to find the crossing time, the closest approach and the mass of the lens.

## Background

**The Schwarzschild radius.** A mass $$M$$ squeezed inside

$$r_s = \frac{2GM}{c^2}$$

is a black hole: nothing, not even light, gets out from inside $$r_s$$ (§13.7).

**Light bending and the Einstein radius.** Light passing a mass at a distance $$b$$ much larger than $$r_s$$ is bent by an angle $$2r_s/b$$. A source exactly behind a lens at distance $$D_L$$, with the source at $$D_S$$, appears as a ring of angular radius $$\theta_E$$, where

$$\theta_E^2 = 2r_s\,\frac{D_S - D_L}{D_L D_S} = 2r_s\left(\frac{1}{D_L} - \frac{1}{D_S}\right).$$

A source off to the side by $$u$$ (in units of $$\theta_E$$) makes two images, together brighter than the source alone by

$$A(u) = \frac{u^2 + 2}{u\sqrt{u^2 + 4}}.$$

**A microlensing event.** A star passing in front of a more distant star makes images only about a milliarcsecond apart, far too close to see as two. What a telescope sees is one star that brightens and fades. If the source moves past the lens in a straight line, with closest approach $$u_0$$ at time $$t_0$$, then

$$u^2 = u_0^2 + \left(\frac{t - t_0}{t_E}\right)^2,$$

where $$t_E$$ is the time to cross one Einstein radius: $$t_E = \theta_E D_L/v$$ for a speed $$v$$ across the line of sight.

Constants: $$GM_\odot = 1.3271\times10^{20}$$ m³/s², $$c = 2.9979\times10^8$$ m/s, 1 pc $$= 3.0857\times10^{16}$$ m, 1 mas $$= 4.8481\times10^{-9}$$ rad.

## Before the lab

1. Find $$r_s$$ for the Sun (1 $$M_\odot$$), in km.
2. A 0.5 $$M_\odot$$ star 4 kpc away lenses a star 8 kpc away. Find $$\theta_E$$ in milliarcseconds, and the crossing time $$t_E$$ in days at 200 km/s.
3. Show that the magnification formula can be turned around to give the offset from the magnification: $$u^2 = \dfrac{2A}{\sqrt{A^2 - 1}} - 2$$. (Hint: with $$x = u^2$$, $$A^2 = (x + 2)^2/[(x + 2)^2 - 4]$$.)
4. Keep the distances of 2 and make the lens ten times heavier, from 1 to 10 $$M_\odot$$. Guess before you measure: does the Einstein radius grow a hundred times, ten times, about three times, or not at all? Give your reason.

## Safety

No hazards in the virtual lab.

## Procedure

**Einstein radius and lens mass.** Press the **Microlensing event** setup (Lensing view, 0.5 $$M_\odot$$ lens at 4 kpc, source at 8 kpc) and press **Pause**. Keep **Lens distance D<sub>L</sub>** and **Source distance D<sub>S</sub>** as they are. Set the **Mass M** slider (a log scale) to four values from about 0.1 to 10 $$M_\odot$$, for example 0.1, 1, 3 and 10, and press **Record reading** at each. Press **Export to worksheet**, then **Clear**.

**A microlensing light curve.** Press **Microlensing event** again and **Pause**. Without changing the lens, the distances or **Track offset u₀**, move the source with the **Along the track, x = (t − t₀)/t<sub>E</sub>** slider (or drag the time marker on the light curve) and record eight readings, at $$x = -2,\ -1,\ -0.5,\ -0.3,\ 0,\ 0.3,\ 0.5$$ and $$1$$. Use only the time from closest approach and the point source magnification for your analysis, as an observer would. Export to worksheet, then Clear.

## Data

| Reading | Lens mass $$M$$ ($$M_\odot$$) | Lens distance $$D_L$$ (kpc) | Source distance $$D_S$$ (kpc) | Einstein radius $$\theta_E$$ (mas) | $$\theta_E^2$$ (mas²) |
|---|---|---|---|---|---|
| | | | | | |
| | | | | | |
| | | | | | |

**Light curve.**

| Reading | Time from closest approach $$t - t_0$$ (days) | Magnification $$A$$, point source | Magnification, the source as drawn | $$u$$ from $$A$$ | $$u^2$$ | $$(t - t_0)^2$$ (days²) |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |
| | | | | | | |

## Analysis

1. Fill in $$\theta_E^2$$ and graph it (vertical) against the lens mass (horizontal). Use the slope and the two distances to find $$r_s$$ for one solar mass, in km, and compare with your prelab answer.
2. For the light curve, find $$u$$ from each magnification (prelab 3), then $$u^2$$ and $$(t - t_0)^2$$. Graph $$u^2$$ against $$(t - t_0)^2$$. Find $$t_E$$ from the slope and $$u_0$$ from the intercept, and compare with the crossing time and the offset at closest approach the demo shows.
3. From your $$t_E$$, with $$v = 200$$ km/s and the two distances, find $$\theta_E$$ and then the lens mass. How close is it to 0.5 $$M_\odot$$?
## Uncertainty

The demo's readings are exact values of its model, shown to six significant figures, so the scatter about your lines is tiny: report each slope with its standard error. A real light curve is not exact. Suppose each magnification near the peak were measured to 1%. Use the slope of $$A(u)$$ near $$u_0$$ to estimate how well that measures $$u_0$$.

## Questions

1. Compare the point source magnification with the magnification of the source as drawn near the peak and far from it. Why do they differ near the peak, and when would a real star's size matter?
2. Your Einstein radii at 1 and 10 $$M_\odot$$ settle Before the lab 4. By what factor did $$\theta_E$$ grow? A lens ten times heavier bends light ten times more at the same $$b$$: use where the ring forms to explain the factor you measured, and say what it does to $$t_E$$. In a real microlensing event astronomers measure $$t_E$$ but usually not the speed $$v$$ or the lens distance $$D_L$$. What can they say about the lens mass from $$t_E$$ alone?

## What to hand in

Prelab answers, the table copies with their graphs and fits, your values of $$r_s$$ per solar mass, $$t_E$$, $$u_0$$ and the lens mass, and answers to the questions. Identify simulated data.
