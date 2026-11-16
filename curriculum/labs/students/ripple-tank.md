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

Measure the wavelength and speed of water waves at several frequencies and depths, watch waves bend where the water gets shallower and test Snell's law, and test d sin θ = (m + ½)λ for the quiet lines of two slits.

## Background

A wave of frequency $$f$$ and wavelength $$\lambda$$ travels at

$$v = f\lambda$$

(§16.1). For waves on water the speed depends on the depth $$d$$ and on the wavelength itself. Gravity and the surface tension $$\sigma$$ both pull a displaced surface back, and the linear theory of water waves gives

$$\omega^2 = \left(gk + \frac{\sigma k^3}{\rho}\right)\tanh(kd),$$

with $$\omega = 2\pi f$$, $$k = 2\pi/\lambda$$ and $$\rho$$ the density. When the wavelength is much longer than the depth, $$\tanh(kd) \approx kd$$, and if surface tension can be left out the speed is

$$v = \sqrt{gd}.$$

Ripples a few centimeters long meet neither condition. On water a centimeter deep they are not much longer than the depth, so $$\tanh(kd)$$ is well below $$kd$$, which makes them slower than $$\sqrt{gd}$$; and surface tension pulls on them too, which makes them faster. Because the speed depends on the frequency, water is a dispersive medium: different frequencies travel at different speeds.

At a place where the water suddenly gets shallower, the frequency stays the same (each crest arriving makes one crest leaving), so the wavelength gets shorter. The crests must stay joined along the edge, so if the incoming crests make an angle $$\theta_1$$ with the edge and the crests past it an angle $$\theta_2$$, the length of edge between two crests is $$\lambda_1/\sin\theta_1 = \lambda_2/\sin\theta_2$$:

$$\frac{\sin\theta_1}{\sin\theta_2} = \frac{\lambda_1}{\lambda_2} = \frac{v_1}{v_2}.$$

This is Snell's law (§1.6, with Huygens's wavelets).

Two sources in step a distance $$d$$ apart send waves that meet with a path difference $$\Delta r$$. Where $$\Delta r$$ is a whole number of wavelengths, crest meets crest; where $$\Delta r = (m + \tfrac12)\lambda$$, crest meets trough and the water stays still (§16.5). Far from the sources ($$r \gg d$$), $$\Delta r = d\sin\theta$$ for the direction $$\theta$$ from the line straight ahead, so the quiet (nodal) lines are at

$$d\sin\theta = \left(m + \tfrac12\right)\lambda, \qquad m = 0, 1, 2, \ldots$$

on either side (§§3.1 and 3.2). Two slits lit by the same plane wave act as two such sources. One slit of width $$a$$ has its first quiet lines either side at

$$a\sin\theta = \lambda$$

(§4.1).

## Before the lab

1. At 8 Hz the wavelength is 30.85 mm in water 10 mm deep and 19.46 mm over a plate where the water is 1.5 mm deep. Find the speed in each. Plane waves meet the edge of the plate with their crests at 30° to it. Find the angle the crests make with the edge past it.
2. Plane waves of wavelength 15.45 mm reach two slits 45 mm apart. Find the angles of the quiet lines for $$m$$ = 0, 1 and 2.

## Safety

No hazards in the virtual lab.

## Procedure

**Part 1: Wavelength and speed.** Choose Plane waves (water 10 mm deep). Set the Frequency f slider (0.5 Hz steps). Once the waves have crossed the tank, press Pause and, with the Move tool, drag the ends of the measuring line along the direction the waves travel, with A on one crest and B on another as many wavelengths away as fit comfortably in the clear water (not on the beaches). Press Record reading, and later write the number of wavelengths $$N$$ between A and B in the last column of the table. Press Play again before changing a setting. Do this at 6, 10, 15 and 20 Hz. Then, at 8 Hz, do it with the Water depth slider at 3 mm. Press Export to worksheet, then Clear.

**Part 2: Shallow water and refraction.** Choose Shallow water slows waves (8 Hz, water 10 mm deep and 1.5 mm over the plate). Measure the wavelength in the deep water and over the plate as in Part 1, and record both. Then choose Refraction: the plate's edge is turned 30° from the incoming crests (the Plate edge turned by slider). Past the edge, well away from it, lay the line along one crest from its lower end to its upper end and record its angle. Lay it along an incoming crest the same way and record that too. Repeat with Plate edge turned by at 60°. Press Export to worksheet, then Clear.

**Part 3: Two slits.** Choose Double slit (15 Hz, slits 45 mm apart and 8 mm wide). A is at the middle of the barrier. Press Amplitude above the picture and wait until the Average built up over readout shows at least 4 periods. Drag B onto the middle of each quiet line, about 150 mm from A, where the amplitude at B is smallest: three lines above the axis and the same three below it if they fit in the clear water. Press Record reading for each. Press Export to worksheet, then Clear.

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

## Analysis

1. Fill in the Wavelength and speed table from Part 1 and Part 2's first two readings. Graph $$\lambda$$ against $$1/f$$ for the water 10 mm deep. If every frequency had the same speed, the points would lie on a straight line through the origin with slope $$v$$. Do they? Over what range does the speed change? Then compare the speeds you measured with $$\sqrt{gd}$$ at each depth: at which depth and frequency is $$\sqrt{gd}$$ closest, and why there?
2. Past the plate's edge, the angle of a crest you recorded is measured from the +x direction, and the edge itself runs at $$90° - \theta_1$$. So $$\theta_2$$ = (angle of the crest) − (90° − $$\theta_1$$). Fill in the Refraction table. Check that the incoming crests ran at 90°.
3. Work out $$\sin\theta_2/\sin\theta_1$$ for each edge and compare it with $$\lambda_2/\lambda_1$$ from Part 2's wavelengths, and with your answer to Before the lab 1.
4. For the two slits, fill in the table with $$m + \tfrac12$$ positive above the axis and negative below it. Graph $$\sin\theta$$ against $$m + \tfrac12$$. Find the slope and the wavelength it gives ($$\lambda = d \times$$ slope). Compare with the wavelength at 15 Hz from Part 1.

## Uncertainty

The line's ends can be placed to about 1 mm, and a crest is hard to place better than about a tenth of a wavelength by eye, so estimate the uncertainty of each wavelength from that and from $$N$$. A quiet line's angle can be found to about half a degree by watching the amplitude at B. The quiet lines curve slightly near the slits (they are hyperbolas whose asymptotes obey $$d\sin\theta = (m + \tfrac12)\lambda$$), so an angle measured too close to the slits is a little off.

## Questions

1. Light passes a pair of slits 0.1 mm apart and makes fringes a few milliradians apart. Why does the ripple tank make the same physics easy to see with the naked eye?

## What to hand in

Prelab answers, the tables with their graphs and fits, your wavelengths, speeds and slopes with uncertainties and comparisons, and answers to the questions. Identify simulated data.
