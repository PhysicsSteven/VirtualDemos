# Finding Exoplanets
Student laboratory · Astronomy

Textbook: OpenStax *University Physics*, Vol. 1, §§13.4 and 13.5 (orbits and Kepler's laws), and Vol. 1 §9.6 (center of mass). Access for free at https://openstax.org/details/books/university-physics-volume-1.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/exoplanets.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Hot Jupiter; Earth and Sun; Jupiter and Sun; Eccentric planet; Not edge on; TRAPPIST-1 like; and a Mystery system with its own button.

**Using the demo.**

- One planet orbits its star. The top view shows the orbit from above, the telescope view what a distant observer would see, and below them the star's brightness and its velocity toward or away from us (radial velocity) through one orbit. Drag the planet or either graph to move in time; Zoom on transit spreads the transit across the graph.
- Change the star's mass and radius, the planet's mass and radius, and the orbit. The planet and orbit sliders are logarithmic.
- The star's middle is brighter than its edge (limb darkening, with fixed Sun like coefficients), so the dip in brightness is not exactly $$(R_p/R_s)^2$$. The planet's own light is ignored.
- Noise adds random scatter to each measurement. With noise, the readouts and Record reading give the measurement nearest the cursor and its time; without noise, the true curves at the cursor.
- New mystery system draws a star with a transiting planet. Its size, mass and orbit are hidden, the measurements are noisy, and only the star's mass and radius are given. Reveal the planet shows them once you have your answers. Choosing a setup or moving a slider ends the mystery.
- Record reading stores the system, the star's radius, the planet's radius and mass (hidden for a mystery planet), the cursor's time from mid transit, the drop in brightness and the star's velocity there. Export to worksheet sends the readings to the Data table below; Clear starts a new series, which goes into a new copy of the table.

</details>

## Goal

Find a planet around another star from the two signals it makes: the dip in the star's light as it crosses in front, and the star's wobble as the planet pulls it around. Measure the planet's radius, mass, orbit and density.

## Background

**Transits.** A planet of radius $$R_p$$ crossing a star of radius $$R_s$$ blocks a fraction of the star's light close to

$$\delta \approx \left(\frac{R_p}{R_s}\right)^2.$$

Because the middle of the star is brighter than its average, the drop at the middle of a central transit is a little more than this. Your first graph measures by how much. Use $$R_\oplus/R_\odot = 6.371\times10^6\ \text{m}/6.957\times10^8\ \text{m} = 0.009158$$.

**Radial velocity.** Star and planet both orbit their center of mass (§9.6). For a circular orbit the star's speed along our line of sight swings between $$+K$$ and $$-K$$, with

$$K = \left(\frac{2\pi G}{P}\right)^{1/3}\frac{M_p \sin i}{(M_s + M_p)^{2/3}},$$

where $$P$$ is the period and $$i$$ the inclination ($$i = 90°$$ is edge on). A planet that transits has $$i$$ close to 90°, so $$\sin i \approx 1$$. For $$M_p \ll M_s$$, $$K$$ is proportional to $$M_p$$.

**The orbit.** Kepler's third law (§13.5) gives the orbit's radius from the period and the star's mass:

$$P^2 = \frac{4\pi^2}{G(M_s + M_p)}\,a^3.$$

Constants: $$GM_\odot = 1.3271\times10^{20}$$ m³/s², $$GM_\oplus = 3.9860\times10^{14}$$ m³/s², $$G = 6.6743\times10^{-11}$$ N·m²/kg², 1 AU = $$1.4960\times10^{11}$$ m.

## Before the lab

1. Jupiter's radius is 11.2 $$R_\oplus$$. What fraction of the Sun's light does it block in a transit? And Earth?
2. Show that for $$M_p \ll M_s$$, $$M_p = K\,(P/2\pi G)^{1/3}\,M_s^{2/3}$$ for an edge on circular orbit.
3. A planet with a period of 4.23 days orbits a star of 1.11 $$M_\odot$$. Find its orbit's radius in AU.
4. Why does a transit tell you that $$\sin i \approx 1$$, while radial velocity alone gives only $$M_p \sin i$$?

## Safety

No hazards in the virtual lab.

## Procedure

**Transit depth and planet size.** Choose Hot Jupiter, set the noise to none and pause. Put the cursor at mid transit (time from mid transit 0). Set the planet's radius to five values from about 0.3 to 2 Jupiter radii, and record a reading at each.

**The star's wobble and planet mass.** Clear the readings and choose Hot Jupiter again, with no noise. Set the planet's mass to five values from about 0.1 to 10 Jupiter masses. At each, put the cursor at the top of the velocity curve and record a reading.

**A mystery planet.** Clear and press New mystery system. Record the star's mass, its radius and the period. With Zoom on transit, record ten readings spread across the flat bottom of the transit and ten before or after it. Then, on the full orbit, record five readings near the highest star velocity and five near the lowest. Do not reveal the planet until your analysis is done.

## Data

| Reading | System | Star radius $$R_s$$ ($$R_\odot$$) | Planet radius $$R_p$$ ($$R_\oplus$$) | Planet mass $$M_p$$ ($$M_\oplus$$) | Time from mid transit (h) | Brightness drop (ppm) | Star velocity (m/s) | $$(R_p/R_s)^2$$ (ppm) |
|---|---|---|---|---|---|---|---|---|
| | | | | | | | | |
| | | | | | | | | |
| | | | | | | | | |

## Analysis

1. Fill in the last column for the transit depth readings, and graph the brightness drop against $$(R_p/R_s)^2$$. What is the slope? Explain why it is more than 1.
2. Graph the star's top velocity $$K$$ against the planet's mass. Compare the slope with $$K/M_p$$ from the formula, using the period and the star's mass from the demo.
3. For the mystery planet, find the transit depth from your readings in and out of transit (average each group). Use your slope from Analysis 1 to find $$R_p/R_s$$, then $$R_p$$ in Earth radii.
4. Find $$K$$ from your velocity readings, and the planet's mass in Earth masses.
5. Find the orbit's radius $$a$$ in AU, and the planet's density in g/cm³. Is it rocky (Earth is 5.5 g/cm³), mostly water or ice, or a gas giant (Jupiter is 1.3 g/cm³, Saturn 0.69)?
6. Now reveal the planet and compare each of your results.

## Uncertainty

Each measurement has the noise shown in the Mystery system section. The average of $$N$$ readings with scatter $$\sigma$$ has an uncertainty of about $$\sigma/\sqrt{N}$$. Estimate the uncertainty of your transit depth and of $$K$$ this way, and carry them through to $$R_p$$, $$M_p$$ and the density. Which of the three is least certain, and why?

## Questions

1. A transit is seen only if the orbit is nearly edge on: the chance is about $$R_s/a$$. What is it for a hot Jupiter at 0.05 AU from a Sun like star, and for Earth? What does that mean for transit surveys?
2. Earth makes the Sun move at about 9 cm/s. Why are Earth sized planets around Sun like stars so much harder to find than hot Jupiters?
3. Planets around small red dwarfs, like TRAPPIST-1, are easier to find by both methods. Explain why for each method.
4. Choose Not edge on. Why is there no transit, and why does the velocity curve shrink by $$\sin i$$?
5. The radial velocity method found the first planet around a Sun like star, 51 Pegasi b, in 1995. Its $$M_p \sin i$$ is half of Jupiter's mass. What can and can't you say about its true mass?

## What to hand in

Prelab answers, the table copies with their graphs and fits, the mystery planet's radius, mass, orbit and density with uncertainties and the comparison with the revealed values, and answers to the questions. Identify simulated data.
