# Ripple Tank: Wavelength, Refraction and Interference
Student laboratory · Physics II

Textbook: OpenStax *University Physics*, Vol. 1, §§16.1 and 16.5, and Vol. 3, §§1.6, 3.1, 3.2 and 4.1. Access for free at https://openstax.org/details/books/university-physics-volume-1 and https://openstax.org/details/books/university-physics-volume-3.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/ripple-tank.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Plane waves; One dipper; Two dippers; Single slit; Double slit; Reflection from a wall; Dipper beside a wall; Shallow water slows waves; Refraction; Focusing mirror; Focusing lens; Draw your own. This worksheet uses Plane waves, Shallow water slows waves, Refraction, Double slit and Single slit.

**Using the demo.**

- The tank is 450 mm by 300 mm of water, seen from above in the Flat view and from the side in 3D. A straight bar across the tank makes plane waves 0.50 mm in amplitude; a dipper (a small ball bobbing in the water) makes circular ones, holding the water it touches at an amplitude of 0.50 mm. Both move at the frequency you set. Waves that come back to the bar pass under it into the beach behind it.
- The sides of the tank are beaches that absorb the waves, or walls that reflect them. A glass plate under the water makes the water shallow over it (shown tinted). You can draw your own walls and plates, and erase them, with the tools at the bottom of the picture.
- The measuring line runs from A to B. Drag its ends (or select the picture and use the arrow keys; press A or B to choose the end). The readouts and the label next to B give its length L and its angle θ, measured counterclockwise from the +x direction (to the right, the way the bar's waves travel). The graph under the picture shows the water's height along the line now, and the amplitude averaged over the last two periods.
- **Surface** shows the water now, crests bright and troughs dark. **Amplitude** shows how much the water moves at each place, averaged over the last two periods: quiet (nodal) lines are dark. After any change, wait until the waves have crossed the tank and the readout says the average has built up over at least four periods.
- The time can run in slow motion; the clock gives the simulated time. Pause freezes the waves so you can line up the measuring line with the crests.
- Record reading stores the setup, the frequency, the water depth at A and at B, the line's length and angle, and the amplitude at B. Export to worksheet sends the readings to the Data table below; Clear starts a new series, which goes into a new copy of the table.

</details>

## Goal

Measure the wavelength and speed of water waves at several frequencies and depths, watch waves bend where the water gets shallower and test Snell's law, and test d sin θ = (m + ½)λ for the quiet lines of two slits and a sin θ = λ for one slit.

## Background

A wave of frequency $$f$$ and wavelength $$\lambda$$ travels at

$$v = f\lambda$$

(§16.1). For waves on water the speed depends on the depth $$d$$ and on the wavelength itself. Gravity and the surface tension $$\sigma$$ both pull a displaced surface back, and the linear theory of water waves gives

$$\omega^2 = \left(gk + \frac{\sigma k^3}{\rho}\right)\tanh(kd),$$

with $$\omega = 2\pi f$$, $$k = 2\pi/\lambda$$ and $$\rho$$ the density. When the wavelength is much longer than the depth, $$\tanh(kd) \approx kd$$, and if surface tension can be left out the speed is

$$v = \sqrt{gd}.$$

Ripples a few centimeters long feel the surface tension too, so they are faster than that. Because the speed depends on the frequency, water is a dispersive medium: different frequencies travel at different speeds.

At a place where the water suddenly gets shallower, the frequency stays the same (each crest arriving makes one crest leaving), so the wavelength gets shorter. The crests must stay joined along the edge, so if the incoming crests make an angle $$\theta_1$$ with the edge and the crests past it an angle $$\theta_2$$, the length of edge between two crests is $$\lambda_1/\sin\theta_1 = \lambda_2/\sin\theta_2$$:

$$\frac{\sin\theta_1}{\sin\theta_2} = \frac{\lambda_1}{\lambda_2} = \frac{v_1}{v_2}.$$

This is Snell's law (§1.6, with Huygens's wavelets).

Two sources in step a distance $$d$$ apart send waves that meet with a path difference $$\Delta r$$. Where $$\Delta r$$ is a whole number of wavelengths, crest meets crest; where $$\Delta r = (m + \tfrac12)\lambda$$, crest meets trough and the water stays still (§16.5). Far from the sources ($$r \gg d$$), $$\Delta r = d\sin\theta$$ for the direction $$\theta$$ from the line straight ahead, so the quiet (nodal) lines are at

$$d\sin\theta = \left(m + \tfrac12\right)\lambda, \qquad m = 0, 1, 2, \ldots$$

on either side (§§3.1 and 3.2). Two slits lit by the same plane wave act as two such sources. One slit of width $$a$$ has its first quiet lines either side at

$$a\sin\theta = \lambda$$

(§4.1).

## Before the lab

1. In the demo, waves of 10 Hz on water 10 mm deep have a wavelength of 23.60 mm. Find their speed. Find $$\sqrt{gd}$$ for 10 mm of water ($$g$$ = 9.81 m/s²) and say why the two differ.
2. At 8 Hz the wavelength is 30.85 mm in water 10 mm deep and 19.46 mm over a plate where the water is 1.5 mm deep. Find the speed in each. Plane waves meet the edge of the plate with their crests at 30° to it. Find the angle the crests make with the edge past it.
3. Plane waves of wavelength 15.45 mm reach two slits 45 mm apart. Find the angles of the quiet lines for $$m$$ = 0, 1 and 2.
4. The same waves reach one slit 30 mm wide. Find the angle of the first quiet line. What do you expect when the slit is narrower than a wavelength?

## Safety

No hazards in the virtual lab.

## Procedure

**Part 1: Wavelength and speed.** Choose Plane waves (water 10 mm deep). Once the waves have crossed the tank, pause and lay the measuring line along the direction the waves travel, with A on one crest and B on another as many wavelengths away as fit comfortably in the clear water (not on the beaches). Record the reading and write the number of wavelengths $$N$$ between A and B in the table. Do this at 6, 8, 10, 12, 15 and 20 Hz. Then, at 8 Hz, do it for water 3 mm and 5 mm deep. Send the readings to the worksheet before you clear them.

**Part 2: Shallow water and refraction.** Choose Shallow water slows waves (8 Hz, water 10 mm deep and 1.5 mm over the plate). Measure the wavelength in the deep water and over the plate as in Part 1, and record both. Then choose Refraction: the plate's edge is turned 30° from the incoming crests. Past the edge, well away from it, lay the line along one crest from its lower end to its upper end and record its angle. Lay it along an incoming crest the same way and record that too. Repeat with the edge turned 15°, 45° and 60°. Send the readings to the worksheet before you clear them.

**Part 3: Two slits.** Choose Double slit (15 Hz, slits 45 mm apart and 8 mm wide). A is at the middle of the barrier. Show the amplitude and wait for it to build up. Drag B onto the middle of each quiet line, about 150 mm from A, where the amplitude at B is smallest: three lines above the axis and the same three below it if they fit in the clear water. Record each. Then make the slits 30 mm apart and do the same. Send the readings before you clear them.

**Part 4: One slit.** Choose Single slit (15 Hz). For slits 50, 45, 40, 35 and 30 mm wide, find the first quiet line above the axis and the first one below it, about 150 mm from the slit, and record each. These quiet lines are shallower than those of two slits: move B along the arc and look for the smallest amplitude at B. Send the readings to the worksheet.

## Data

| Reading | Setup | Frequency $$f$$ (Hz) | Water depth (mm) | Line length $$L$$ (mm) | Line angle $$\theta$$ (°) | Amplitude at B (mm) | Wavelengths counted $$N$$ |
|---|---|---|---|---|---|---|---|
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |

### Wavelength and speed

| Water depth $$d$$ (mm) | Frequency $$f$$ (Hz) | Wavelength $$\lambda = L/N$$ (mm) | Speed $$v = f\lambda$$ (m/s) | Period $$1/f$$ (s) | $$\sqrt{gd}$$ (m/s) |
|---|---|---|---|---|---|
| | | | | | |
| | | | | | |
| | | | | | |

### Refraction

| Edge turned by $$\theta_1$$ (°) | Angle of a crest past the edge (°) | $$\theta_2$$ (°) | $$\sin\theta_1$$ | $$\sin\theta_2$$ |
|---|---|---|---|---|
| | | | | |
| | | | | |
| | | | | |

### Quiet lines of two slits

| Slit spacing $$d$$ (mm) | $$m + \tfrac12$$, signed | Line angle $$\theta$$ (°) | $$\sin\theta$$ |
|---|---|---|---|
| | | | |
| | | | |
| | | | |

### First quiet lines of one slit

| Slit width $$a$$ (mm) | $$1/a$$ (1/mm) | Angle above (°) | Angle below (°) | Mean $$\theta_1$$ (°) | $$\sin\theta_1$$ |
|---|---|---|---|---|---|
| | | | | | |
| | | | | | |
| | | | | | |

## Analysis

1. Fill in the Wavelength and speed table from Part 1 and Part 2's first two readings. Graph $$\lambda$$ against $$1/f$$ for the water 10 mm deep. If every frequency had the same speed, the points would lie on a straight line through the origin with slope $$v$$. Do they? Over what range does the speed change?
2. Compare the speeds you measured with $$\sqrt{gd}$$ at each depth. At which depth and frequency is $$\sqrt{gd}$$ closest, and why there?
3. Past the plate's edge, the angle of a crest you recorded is measured from the +x direction, and the edge itself runs at $$90° - \theta_1$$. So $$\theta_2$$ = (angle of the crest) − (90° − $$\theta_1$$). Fill in the Refraction table. Check that the incoming crests ran at 90°.
4. Graph $$\sin\theta_2$$ against $$\sin\theta_1$$. Find the slope and compare it with $$\lambda_2/\lambda_1$$ from Part 2's wavelengths, and with your answer to Before the lab 2.
5. For the two slits, fill in the table with $$m + \tfrac12$$ positive above the axis and negative below it. Graph $$\sin\theta$$ against $$m + \tfrac12$$ for each spacing. Find each slope and the wavelength it gives ($$\lambda = d \times$$ slope). Compare with the wavelength at 15 Hz from Part 1.
6. For one slit, graph $$\sin\theta_1$$ against $$1/a$$. Find the slope and the intercept, and compare the slope with the wavelength. Work out $$a\sin\theta_1$$ for each slit: which slit gives the value furthest from $$\lambda$$? The rule $$a\sin\theta = \lambda$$ holds far from the slit, at distances much greater than $$a^2/\lambda$$; work out $$a^2/\lambda$$ for each slit and compare it with the 150 mm you measured at.

## Uncertainty

The line's ends can be placed to about 1 mm, and a crest is hard to place better than about a tenth of a wavelength by eye, so estimate the uncertainty of each wavelength from that and from $$N$$. A quiet line's angle can be found to about half a degree by watching the amplitude at B; repeat one setting three times and use the spread. The quiet lines curve slightly near the slits (they are hyperbolas whose asymptotes obey $$d\sin\theta = (m + \tfrac12)\lambda$$), so an angle measured too close to the slits is a little off; check one line at 100 mm and at 200 mm from A.

## Questions

1. Why is the speed of these ripples not $$\sqrt{gd}$$, even in the shallowest water?
2. In Shallow water slows waves, some of each wave is reflected at the plate's edge. How can you tell from the picture in the deep water?
3. Choose Dipper beside a wall. Where would a second dipper have to be, moving with the first, to make the same pattern in front of the wall without the wall? Check by measuring.
4. Choose Two dippers and set dipper 2 ahead by 180°. What happens to the line straight ahead, and why?
5. Choose Focusing lens. Why does a plate that makes the water shallower act like a convex glass lens, which makes light slower? Find where the waves come to a focus and compare with the thin lens estimate in the readouts.
6. Light passes a pair of slits 0.1 mm apart and makes fringes a few milliradians apart. Why does the ripple tank make the same physics easy to see with the naked eye?

## What to hand in

Prelab answers, the tables with their graphs and fits, your wavelengths, speeds and slopes with uncertainties and comparisons, and answers to the questions. Identify simulated data.
