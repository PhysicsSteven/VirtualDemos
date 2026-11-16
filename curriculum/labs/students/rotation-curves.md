# Weighing a Galaxy
Student laboratory · Astronomy

Textbook: OpenStax *University Physics*, Vol. 1, §§13.4 and 13.5 (circular orbits and Kepler's laws) and §13.2 (gravitation near a spherical mass), and Vol. 3, §§5.7 and 11.6 (the Doppler effect for light, and dark matter). Access for free at https://openstax.org/details/books/university-physics-volume-1.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/rotation-curves.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Solar system (Kepler); Visible matter only; Add a dark matter halo; Milky Way; Measure with Doppler; NGC 3198.

**Using the demo.**

- The galaxy is drawn face on or edge on, beside its rotation curve: the orbital speed of stars and gas against distance from the center. Choose the radius on the galaxy, on the plot or in the rail. The Solar system setup does the same for the planets.
- The galaxy model has a bulge, a stellar disk, a gas disk and a dark matter halo, each with its own mass and size, and each can be turned off. The circles are approximate measured speeds for the Milky Way (the fit of Eilers et al. 2019) or NGC 3198 (rounded from Begeman 1989).
- The readouts give the orbital speed at the chosen radius, the speed the visible matter alone would give, the mass inside the radius from the curve, $$v^2r/G$$, the visible mass inside it, the share of $$v^2$$ due to dark matter and the orbital period.
- In the edge on view a slit along the disk records a spectral line, blueshifted on one side and redshifted on the other. The rail gives the shift of the line's outer edge at the chosen radius and the speed it implies, for the 21 cm line of neutral hydrogen or Hα. The demo's Hα gas ends at four disk scale lengths.
- Orbits are circles in the disk's plane. The disks are infinitely thin, and $$v^2r/G$$ is exact only for spherical mass: for a disk it reads high, by up to about 35%.
- Record reading stores the setup, the radius, the speeds, both masses, the dark matter share and the period, and in the edge on view the line, its shift and the speed from the shift. Radii and periods are in kpc and Myr for a galaxy, AU and years for the solar system. Export to worksheet sends the readings to the Data table below; Clear starts a new series, which goes into a new copy of the table.

</details>

## Goal

Use orbital speeds to weigh the Sun and the Milky Way, compare the mass the speeds require with the mass we can see, and measure the speeds the way astronomers do, from Doppler shifts.

## Background

**Weighing with an orbit.** A star or planet on a circular orbit of radius $$r$$ moves at speed $$v$$ with $$v^2/r = GM(<r)/r^2$$, if the mass $$M(<r)$$ inside its orbit is spherically spread (§13.2: then it pulls as if it were all at the center, and the mass outside pulls nothing). So

$$M(<r) = \frac{v^2 r}{G}.$$

If nearly all the mass is in the middle, as in the solar system, $$v = \sqrt{GM/r}$$ falls as $$r^{-1/2}$$. If instead $$v$$ stays the same at every $$r$$ (a flat rotation curve), $$M(<r)$$ must grow in proportion to $$r$$.

**Units.** In kiloparsecs, km/s and solar masses, $$G = 4.30091\times10^{-6}$$ kpc (km/s)²/M☉, and 1 kpc/(km/s) = 977.8 Myr. For the solar system, 1 AU = $$1.4960\times10^{11}$$ m, $$G = 6.6743\times10^{-11}$$ N·m²/kg², and 1 year = $$3.156\times10^7$$ s.

**Doppler shifts.** Gas moving toward or away from us at speed $$v \ll c$$ shifts a spectral line by $$\Delta\lambda/\lambda_0 = v/c$$, or in frequency $$\Delta f/f_0 = -v/c$$ (Vol. 3, §5.7). The 21 cm line of neutral hydrogen has $$f_0 = 1420.41$$ MHz and Hα has $$\lambda_0 = 656.28$$ nm; $$c = 2.9979\times10^5$$ km/s. Seen edge on, a line of sight through the disk crosses gas at many radii; the largest shift along it comes from the radius where the line of sight just grazes an orbit, which gives $$v$$ at that radius.

## Before the lab

1. Mercury orbits at 0.387 AU and Neptune at 30.07 AU. What fraction of Mercury's speed is Neptune's?
2. The Sun orbits the Milky Way's center at about 230 km/s, 8.2 kpc out. Find the mass inside its orbit and its orbital period.
3. Gas moving at 200 km/s away from us shifts the 21 cm line by how many kHz? Hα by how many nm?

## Safety

No hazards in the virtual lab.

## Procedure

**The solar system.** Press the **Solar system (Kepler)** setup. Set the **Radius r** slider (under At the selected radius) to the distance of each planet, 0.39, 0.72, 1.00, 1.52, 5.20, 9.54, 19.19 and 30.07 AU, and press **Record reading** at each. Drag the slider close, then the arrow keys move it 0.01 AU at a time; the value shows beside the slider. Then press **Export to worksheet** and **Clear**.

**The Milky Way.** Press the **Milky Way** setup. Set **Radius r** to 1, 2, 4, 6, 8.2, 10, 12, 15, 20, 25 and 30 kpc (the arrow keys move it 0.05 kpc at a time) and press **Record reading** at each. Press **Export to worksheet** and **Clear**.

**Doppler.** Press the **Measure with Doppler** setup; it turns on the **Edge on, Doppler** view with the **21 cm** line chosen under Doppler measurement. Set **Radius r** to 4, 8, 12, 16 and 20 kpc and press **Record reading** at each. Then press **Hα 656.28 nm** and record at 4, 8 and 12 kpc. Press **Export to worksheet** (all eight readings).

## Data

| Reading | Setup | Radius $$r$$ (kpc, or AU) | Orbital speed $$v$$ (km/s) | Visible matter alone (km/s) | Mass inside $$r$$, $$v^2r/G$$ (M☉) | Visible mass inside $$r$$ (M☉) | Dark matter share of $$v^2$$ (%) | Orbital period (Myr, or yr) | Line | Shift of the line's edge | Speed from the shift (km/s) | $$1/r$$ | $$v^2$$ |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| | | | | | | | | | | | | | |
| | | | | | | | | | | | | | |
| | | | | | | | | | | | | | |

## Analysis

1. For the solar system, fill in the last two columns ($$r$$ in AU, $$v$$ from the Orbital speed column) and graph $$v^2$$ (vertical) against $$1/r$$ (across). What does the slope measure? Convert it to SI units and find the Sun's mass in kg.
2. For the Milky Way, graph the orbital speed (vertical) against radius (across). Beyond which radius is the curve nearly flat? Sketch on the same axes, or describe, what the visible matter alone would give (the Visible matter alone column).
3. For the Milky Way, graph the mass inside $$r$$ ($$v^2r/G$$, vertical) against $$r$$ (across). Over the flat part, what does the slope tell you? Find the ratio of the mass inside $$r$$ to the visible mass inside $$r$$ at 8.2 kpc and at 30 kpc.
4. If $$M(<r) \propto r$$ far out, how must the density of the extra mass fall with $$r$$? Show your reasoning from $$M = \int 4\pi r^2\rho\,dr$$.
5. For three Doppler readings (the 21 cm reading at 12 kpc and the Hα readings at 4 and 12 kpc), find the speed from the Shift of the line's edge column yourself, and compare with the Speed from the shift column and with the Orbital speed column at that radius. What happened to the Hα reading at 12 kpc, and why do radio astronomers use the 21 cm line to measure the outer parts of galaxies?

## Uncertainty

The model's numbers are exact; the uncertainty is in the method. $$M = v^2r/G$$ assumes a spherical mass, but the stars and gas are in a flat disk, which pulls harder in its own plane than a sphere of the same mass: the formula then overestimates the mass, by up to about 35% near three scale lengths. Real speeds are also measured with scatter: the Milky Way circles shown are a fit with an uncertainty of a few km/s. If $$v$$ is uncertain by 3%, how uncertain is $$M(<r)$$? Which of these effects could change your answer to Analysis 3 by more than a factor of 2?

## Questions

1. A flat rotation curve does not mean the galaxy turns like a solid wheel. Explain the difference, using the orbital periods at 8.2 kpc and 20 kpc in your data.
2. A disk galaxy tilted by an angle $$i$$ from face on shows Doppler shifts of only $$v \sin i$$. What would you get for the mass of a galaxy if you forgot to correct for a tilt of 30°?

## What to hand in

Prelab answers, the table copies with their graphs and fits, the answers to the analysis and uncertainty sections, and answers to the questions. Identify simulated data.
