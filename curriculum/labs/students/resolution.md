# Circular Apertures and Resolution
Student laboratory · Physics II (if time allows: wave optics)

Textbook: OpenStax *University Physics*, Vol. 3, §4.5. Access for free at https://openstax.org/details/books/university-physics-volume-3.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/resolution.html?setup=pinhole)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Laser through a pinhole; Two point sources; Headlights and the eye; Hubble and two stars; Camera lens; Mystery pinhole; Near the hole: Fresnel zones; A disk: the Poisson spot.

**Using the demo.**

- The pattern is the exact far field diffraction pattern of a circular hole, $$I = I_0\left[2J_1(x)/x\right]^2$$ with $$x = \pi D\sin\theta/\lambda$$, where $$J_1$$ is a Bessel function. The lens, mirror or eye is taken to be perfect, so the only blur is diffraction.
- Each setup shows the apparatus, the pattern it makes (on a screen, a sensor, or as angles in the focal plane) and a graph of the intensity along the line through the center or through both sources. Intensities are given as $$I/I_0$$, where $$I_0$$ is the central peak of one source alone.
- The cursor is the orange line. Drag it on the graph or the pattern, or use its slider or the arrow keys; it reads its position and the intensity there. Zoom in for a finer cursor: it moves in steps of 1/1000 of the view.
- In the pinhole setups a laser lights the pinhole and a screen at distance $$L$$ catches the light; the cursor reads the distance $$x$$ from the center of the screen in mm. In the other setups the cursor reads angles in µrad (1 µrad = 10⁻⁶ rad).
- Two sources are equally bright and independent, so their intensities add. **Show each source alone** draws each one's pattern as a dashed curve.
- **Bring out the faint rings** gives the picture 30 times more exposure; it does not change the graph or the readings.
- Record reading stores the setup, λ, D, L, the cursor reading, the separation of the sources and the intensity at the cursor. Export to worksheet sends the readings to the Data table below; Clear starts a new series, which goes into a new copy of the table.
- Mystery pinhole hides the pinhole's diameter; New mystery pinhole picks another (send your readings first).
- Blind hides the dark ring marks, the Rayleigh limit and the predicted values, so you can find them yourself.

</details>

## Goal

Measure where the first dark ring of a circular hole's diffraction pattern falls, test $$\sin\theta_1 = 1.22\,\lambda/D$$, and use Rayleigh's criterion to find the smallest angle a lens, an eye or a telescope can resolve.

## Background

Light passing through a circular hole of diameter $$D$$ spreads out. A distant point source does not make a point image: it makes a bright central disk surrounded by faint rings, the **Airy pattern**. The first dark ring is at the angle

$$\sin\theta_1 = 1.22\,\frac{\lambda}{D},$$

and for small angles $$\theta_1 \approx 1.22\,\lambda/D$$ in radians. On a screen a distance $$L$$ away, a point $$x$$ from the center is at the angle $$\theta = \arctan(x/L) \approx x/L$$.

Two point sources make two Airy patterns, which overlap. **Rayleigh's criterion** says they are just resolved when the center of one pattern falls on the first dark ring of the other, so the smallest angle between two sources that can be told apart is

$$\theta_{\min} = 1.22\,\frac{\lambda}{D}.$$

A larger aperture or a shorter wavelength resolves finer detail. That is why telescopes have large mirrors, and why stopping a camera lens down to a small aperture softens a photograph.

## Before the lab

1. A helium neon laser (632.8 nm) lights a pinhole 200 µm across, and a screen is 2.00 m away. Predict the radius of the first dark ring on the screen.
2. If the pinhole's diameter is doubled, what happens to the ring? If the wavelength is shorter?
3. A pupil is 3.00 mm across and the light is 550 nm. What is the smallest angle between two points the eye can resolve? A car's headlights are 1.30 m apart. How far away can the car be with the two lights still seen as two?
4. Sketch the intensity along the line through two sources that are just resolved. About what fraction of the peaks would you guess the dip between them is?

## Safety

Never look into a laser beam or its reflection from a shiny surface. In a real lab use a low power laser, keep the beam at bench height, and block it at the end of the bench.

## Procedure

Open Lab and tick Blind (the checkbox that starts "Blind: hide the dark ring marks") for Parts 1 to 4. Move the cursor with the Cursor position slider, by dragging on the graph, or with the arrow keys; the Zoom buttons (1× to 16×) above the picture make its steps finer. Press Export to worksheet at the end of each part, then Clear before the next; each part goes into its own copy of the table.

**Part 1. The first dark ring.** The link opens the Laser through a pinhole setup (Helium neon laser, 632.8 nm, screen at 2.00 m). For each Pinhole diameter D of 100, 200 and 300 µm (the slider moves in 5 µm steps): (1) choose the highest Zoom at which the first dark ring is still in view; (2) put the cursor on the first dark ring on one side, where the intensity readout is smallest; (3) press Record reading. Then set the pinhole back to 200 µm and do the same with Violet laser diode, 405 nm and Red laser diode, 650 nm in the Wavelength λ menu.

**Part 2. Resolving two sources.** Pick the Two point sources setup (550 nm) and tick Show each source alone. For each Iris diameter D of 2, 4, 8 and 12 mm: (1) move the Angle between the sources Δθ slider (0.5 µrad a step) until the peak of one dashed curve sits exactly on the first zero of the other; (2) set the cursor to 0, midway between the sources; (3) press Record reading.

**Part 3. Headlights and the eye.** Pick Headlights and the eye (550 nm, pupil 3.00 mm). Move the Distance to the car R slider until the two headlights are just resolved by the same criterion, set the cursor to 0 and press Record reading. Repeat with the Pupil diameter D slider at 8.00 mm (a pupil is small in bright light and large in the dark). The Setup column stores the car distance.

**Part 4. Mystery pinhole.** Pick Mystery pinhole. Measure the radius of the first dark ring as in Part 1 with the Screen distance L slider at 1.50, 2.00 and 3.00 m. Export before you press New mystery pinhole, which picks another diameter.

## Data

| Reading | Setup | λ (nm) | D (mm) | Screen distance L (m) | Cursor x (mm) | Separation Δθ (µrad) | Intensity at the cursor I/I₀ | θ₁ = x/L (µrad) | λ/D (µrad) | 1/D (1/mm) |
|---|---|---|---|---|---|---|---|---|---|---|
| | | | | | | | | | | |
| | | | | | | | | | | |
| | | | | | | | | | | |

Export fills every column up to Intensity at the cursor. Fill in θ₁ = x/L for the screen readings (x in mm over L in m gives mrad, so multiply by 1000 for µrad; use the size of x), λ/D for Part 1 (λ in nm divided by D in mm gives µrad) and 1/D for Parts 2 and 3.

## Analysis

1. Graph θ₁ (vertical) against λ/D (horizontal) for Part 1. Is it a straight line through the origin? Compare the slope with 1.22.
2. Graph the smallest resolved angle Δθ (the Separation column, vertical) against 1/D (horizontal) for Part 2. From the slope find the factor multiplying λ, and compare it with 1.22.
3. At the Rayleigh separation, what was the intensity midway between the two sources, as a fraction of the peaks? Is it the same for every D?
4. From Part 3, find the farthest distance at which the headlights are resolved for each pupil size. Compare the 3.00 mm result with your answer to Before the lab question 3.
5. From Part 4, find the mystery pinhole's diameter from each reading, $$D = 1.22\,\lambda/\theta_1$$, and give the mean with its spread.

## Uncertainty

The cursor moves in steps of 1/1000 of the view, so the ring radius is uncertain by about one step; say how zooming in changed that. Near the first dark ring the intensity changes slowly, so the darkest point is harder to pin down than its step suggests; estimate how far you could move the cursor without the reading changing in its fourth decimal. In Part 2, judging when one peak sits on the other's zero is a judgment by eye: how much could Δθ change before you would notice? Propagate the uncertainty in the ring radius into the mystery pinhole's diameter.

## Questions

1. The Hubble Space Telescope has a 2.40 m mirror. For 550 nm light, what is the smallest angle it can resolve, and how close can two stars 2.48 million light years away be and still be seen as two? Check with the Hubble and two stars setup.

## What to hand in

Prelab answers, the settings for each part, the table copies with their graphs and fits, the slopes compared with 1.22, the headlight distances, the mystery pinhole's diameter with its uncertainty, and answers to the questions. Identify simulated data.
