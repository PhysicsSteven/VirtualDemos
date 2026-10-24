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

1. Earth moves at 29.78 km/s at 1 AU. Find the Sun's mass from $$M = v^2r/G$$, in kg and in solar masses ($$M_\odot = 1.989\times10^{30}$$ kg).
2. Mercury orbits at 0.387 AU and Neptune at 30.07 AU. What fraction of Mercury's speed is Neptune's?
3. The Sun orbits the Milky Way's center at about 230 km/s, 8.2 kpc out. Find the mass inside its orbit and its orbital period.
4. Gas moving at 200 km/s away from us shifts the 21 cm line by how many kHz? Hα by how many nm?

## Safety

No hazards in the virtual lab.

## Procedure

**The solar system.** Choose Solar system (Kepler). Record a reading at the distance of each planet: 0.39, 0.72, 1.00, 1.52, 5.20, 9.54, 19.19 and 30.07 AU.

**The Milky Way.** Clear the readings and choose Milky Way. Record a reading at 1, 2, 4, 6, 8.2, 10, 12, 15, 20, 25 and 30 kpc.

**Doppler.** Clear the readings and choose Measure with Doppler. With the 21 cm line, record a reading at 4, 8, 12, 16 and 20 kpc. Then switch to Hα and record at 4, 8 and 12 kpc.

## Data

| Reading | Setup | Radius $$r$$ (kpc, or AU) | Orbital speed $$v$$ (km/s) | Visible matter alone (km/s) | Mass inside $$r$$, $$v^2r/G$$ (M☉) | Visible mass inside $$r$$ (M☉) | Dark matter share of $$v^2$$ (%) | Orbital period (Myr, or yr) | Line | Shift of the line's edge | Speed from the shift (km/s) | $$1/r$$ | $$v^2$$ |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| | | | | | | | | | | | | | |
| | | | | | | | | | | | | | |
| | | | | | | | | | | | | | |

## Analysis

1. For the solar system, fill in the last two columns and graph $$v^2$$ against $$1/r$$. What does the slope measure? Convert it to SI units and find the Sun's mass in kg.
2. For the Milky Way, graph the orbital speed against radius. Beyond which radius is the curve nearly flat? Sketch on the same axes, or describe, what the visible matter alone would give.
3. Graph the mass inside $$r$$ against $$r$$. Over the flat part, what does the slope tell you? Find the ratio of the mass inside $$r$$ to the visible mass inside $$r$$ at 8.2 kpc and at 30 kpc.
4. If $$M(<r) \propto r$$ far out, how must the density of the extra mass fall with $$r$$? Show your reasoning from $$M = \int 4\pi r^2\rho\,dr$$.
5. For each Doppler reading, find the speed from the shift yourself, and compare with the speed in the table and with the orbital speed at that radius. What happened to the Hα reading at 12 kpc, and why do radio astronomers use the 21 cm line to measure the outer parts of galaxies?
6. Using the Sun's orbit in the Milky Way model, how many times has the Sun gone around the galaxy in its 4.6 billion years?

## Uncertainty

The model's numbers are exact; the uncertainty is in the method. $$M = v^2r/G$$ assumes a spherical mass, but the stars and gas are in a flat disk, which pulls harder in its own plane than a sphere of the same mass: the formula then overestimates the mass, by up to about 35% near three scale lengths. Real speeds are also measured with scatter: the Milky Way circles shown are a fit with an uncertainty of a few km/s. If $$v$$ is uncertain by 3%, how uncertain is $$M(<r)$$? Which of these effects could change your answer to Analysis 3 by more than a factor of 2?

## Questions

1. In a galaxy most of the light comes from within about 10 kpc of the center. If the visible matter were all there is, how should the speed at 20 kpc compare with the speed at 5 kpc?
2. A flat rotation curve does not mean the galaxy turns like a solid wheel. Explain the difference, using the orbital periods at 8.2 kpc and 20 kpc in your data.
3. Why could astronomers who measured only the bright inner parts of galaxies miss the dark matter? Use the dark matter share of $$v^2$$ at small and large $$r$$.
4. Choose NGC 3198. Its disk and gas alone fall to about 71 km/s at 30 kpc while the measured speed stays near 150 km/s. By what factor is the mass inside 30 kpc larger than the visible mass?
5. A disk galaxy tilted by an angle $$i$$ from face on shows Doppler shifts of only $$v \sin i$$. What would you get for the mass of a galaxy if you forgot to correct for a tilt of 30°?

## What to hand in

Prelab answers, the table copies with their graphs and fits, the answers to the analysis and uncertainty sections, and answers to the questions. Identify simulated data.
