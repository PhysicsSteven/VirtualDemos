# Black Holes and Lensing
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

Use three predictions of general relativity to measure a black hole and a lens: the bending of light (the Einstein radius and a microlensing light curve), the slowing of clocks near a mass, and the shadow a black hole casts on the sky behind it.

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

**Clocks and light near a black hole.** A clock hovering at a distance $$r$$ from the center ticks slower than a clock far away by the factor $$\sqrt{1 - r_s/r}$$, and light sent outward from it arrives stretched by $$1 + z = 1/\sqrt{1 - r_s/r}$$. The difference in gravity across a body of length $$L$$ falling feet first is the tidal stretch $$\Delta A = 2GML/r^3$$.

**The shadow.** Light coming in with an impact parameter less than $$b_c = (\sqrt{27}/2)\,r_s$$ falls in. An observer hovering at $$r_o$$ sees a dark disk, the shadow, of angular radius $$\alpha$$ with

$$\sin\alpha = \frac{b_c}{r_o}\sqrt{1 - \frac{r_s}{r_o}}\qquad (r_o \ge 1.5\,r_s).$$

Far away this becomes $$\sin\alpha \approx b_c/r_o$$ (the demo's far away estimate), and $$\alpha \approx b_c/r_o$$ once the angle is small.

Constants: $$GM_\odot = 1.3271\times10^{20}$$ m³/s², $$c = 2.9979\times10^8$$ m/s, 1 pc $$= 3.0857\times10^{16}$$ m, 1 mas $$= 4.8481\times10^{-9}$$ rad, $$g = 9.81$$ m/s².

## Before the lab

1. Find $$r_s$$ for the Sun (1 $$M_\odot$$) and for a 10 $$M_\odot$$ black hole, in km.
2. A 0.5 $$M_\odot$$ star 4 kpc away lenses a star 8 kpc away. Find $$\theta_E$$ in milliarcseconds, and the crossing time $$t_E$$ in days at 200 km/s.
3. Show that the magnification formula can be turned around to give the offset from the magnification: $$u^2 = \dfrac{2A}{\sqrt{A^2 - 1}} - 2$$. (Hint: with $$x = u^2$$, $$A^2 = (x + 2)^2/[(x + 2)^2 - 4]$$.)
4. Show that $$(\text{clock rate})^2$$ plotted against $$1/r$$ is a straight line. What are its slope and intercept?
5. For a 2 m person falling into a 10 $$M_\odot$$ black hole, find the tidal stretch at the horizon, in g.

## Safety

No hazards in the virtual lab.

## Procedure

**Einstein radius and lens mass.** Choose Microlensing event and pause it. Keep both distances. Set the lens mass to five values from about 0.1 to 10 $$M_\odot$$ and record a reading at each. Send the readings to the worksheet, then clear them.

**A microlensing light curve.** Choose Microlensing event again and pause it. Without changing the lens, the distances or the source's track, move the event through time and record about 13 readings from about 2 $$t_E$$ before closest approach to 2 $$t_E$$ after, closer together near the peak. Read only the time and the point source magnification for your analysis, as an observer would. Send the readings to the worksheet, then clear them.

**Clocks near a stellar black hole.** Choose Close to a stellar black hole. Record readings at about eight distances from 1.1 $$r_s$$ out to 100 $$r_s$$. Send them to the worksheet and clear them, then record one reading at each of five masses from about 1 $$M_\odot$$ to $$10^{9}$$ $$M_\odot$$, for the stretch at the horizon. Send these too, then clear them.

**The shadow.** Choose M87\*. Record the view from about seven distances, from 2 $$r_s$$ out to 100 $$r_s$$, and send the readings to the worksheet.

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

**Near the hole.**

| Reading | Mass $$M$$ ($$M_\odot$$) | Distance $$r$$ (km) | Clock rate | Tidal stretch on 2 m (g) | Same person at the horizon (g) | $$1/r$$ (1/km) | $$(\text{clock rate})^2$$ | $$1/r^3$$ (1/km³) |
|---|---|---|---|---|---|---|---|---|
| | | | | | | | | |
| | | | | | | | | |
| | | | | | | | | |

**The shadow.**

| Reading | Observer distance $$r_o$$ ($$r_s$$) | Shadow radius $$\alpha$$ (°) | Far away estimate (°) | Einstein ring, exact (°) | Einstein ring, thin lens (°) | sin $$\alpha$$ | $$(r_s/r_o)\sqrt{(1 - r_s/r_o)}$$ |
|---|---|---|---|---|---|---|---|
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |

## Analysis

1. Fill in $$\theta_E^2$$ and graph it against the lens mass. Use the slope and the two distances to find $$r_s$$ for one solar mass, in km, and compare with your prelab answer.
2. For the light curve, find $$u$$ from each magnification (prelab 3), then $$u^2$$ and $$(t - t_0)^2$$. Graph $$u^2$$ against $$(t - t_0)^2$$. Find $$t_E$$ from the slope and $$u_0$$ from the intercept, and compare with the crossing time and the offset at closest approach the demo shows.
3. From your $$t_E$$, with $$v = 200$$ km/s and the two distances, find $$\theta_E$$ and then the lens mass. How close is it to 0.5 $$M_\odot$$?
4. For the first near the hole series, graph $$(\text{clock rate})^2$$ against $$1/r$$. Find $$r_s$$ from the slope, then the black hole's mass. Is the intercept what you expected?
5. Graph the tidal stretch against $$1/r^3$$ for the same series. Use the slope to find $$GM$$, and check it against your mass from Analysis 4.
6. For the series at different masses, show that the stretch at the horizon falls as $$1/M^2$$ (for example, multiply each value by $$M^2$$). Use $$r = r_s$$ in $$\Delta A = 2GML/r^3$$ to explain why.
7. For the shadow, fill in the last two columns and graph $$\sin\alpha$$ against $$(r_s/r_o)\sqrt{1 - r_s/r_o}$$. Compare the slope with $$b_c = \sqrt{27}/2 = 2.598$$ (in units of $$r_s$$). Below what distance is the far away estimate off by more than 5%?

## Uncertainty

The demo's readings are exact values of its model, shown to six significant figures, so the scatter about your lines is tiny: report each slope with its standard error. A real light curve is not exact. Suppose each magnification near the peak were measured to 1%. Use the slope of $$A(u)$$ near $$u_0$$ to estimate how well that measures $$u_0$$, and say how the error would carry through to $$t_E$$ and the lens mass.

## Questions

1. Predict, then check with your data: you fall feet first into a 10 $$M_\odot$$ black hole, and separately into Sagittarius A\* (4.3 million $$M_\odot$$). Near which horizon is the stretch between your head and feet larger, and by what factor?
2. In a real microlensing event astronomers measure $$t_E$$ but usually not the speed $$v$$ or the lens distance $$D_L$$. What can they say about the lens mass from $$t_E$$ alone?
3. Compare the point source magnification with the magnification of the source as drawn near the peak and far from it. Why do they differ near the peak, and when would a real star's size matter?
4. A lens makes no light and keeps the surface brightness of the source. How can its two images together give more light than the source alone?
5. In Sagittarius A\*, the observer hovers at 1.2 $$r_s$$. How long does one hour on their clock last far away, and at what wavelength does 500 nm light they send outward arrive? Check with the demo.
6. M87\* has a mass of $$6.5\times10^9\ M_\odot$$ and is 16.8 Mpc away. Find the angular diameter of its shadow seen from Earth, $$2b_c/D$$, in microarcseconds, and compare with the 42 µas ring the Event Horizon Telescope imaged in 2019. Why is the shadow 2.6 times wider than the horizon?

## What to hand in

Prelab answers, the table copies with their graphs and fits, your values of $$r_s$$ per solar mass, $$t_E$$, $$u_0$$, the lens mass, the black hole's mass and $$b_c$$, and answers to the questions. Identify simulated data.
