# Circular Apertures and Resolution
Student laboratory · Physics II (if time allows: wave optics)

Textbook: OpenStax *University Physics*, Vol. 3, §4.5. Access for free at https://openstax.org/details/books/university-physics-volume-3.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/resolution.html?setup=pinhole)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Laser through a pinhole; Two point sources; Headlights and the eye; Hubble and two stars; Camera lens; Mystery pinhole.

**Using the demo.**

- The pattern is the exact far field diffraction pattern of a circular hole, $$I = I_0\left[2J_1(x)/x\right]^2$$ with $$x = \pi D\sin\theta/\lambda$$, where $$J_1$$ is a Bessel function. The lens, mirror or eye is taken to be perfect, so the only blur is diffraction.
- Each setup shows the apparatus, the pattern it makes (on a screen, a sensor, or as angles in the focal plane) and a graph of the intensity along the line through the centre or through both sources. Intensities are given as $$I/I_0$$, where $$I_0$$ is the central peak of one source alone.
- The cursor is the orange line. Drag it on the graph or the pattern, or use its slider or the arrow keys; it reads its position and the intensity there. Zoom in for a finer cursor: it moves in steps of 1/1000 of the view.
- In the pinhole setups a laser lights the pinhole and a screen at distance $$L$$ catches the light; the cursor reads the distance $$x$$ from the centre of the screen in mm. In the other setups the cursor reads angles in µrad (1 µrad = 10⁻⁶ rad).
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

and for small angles $$\theta_1 \approx 1.22\,\lambda/D$$ in radians. On a screen a distance $$L$$ away, a point $$x$$ from the centre is at the angle $$\theta = \arctan(x/L) \approx x/L$$.

Two point sources make two Airy patterns, which overlap. **Rayleigh's criterion** says they are just resolved when the centre of one pattern falls on the first dark ring of the other, so the smallest angle between two sources that can be told apart is

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

Turn on Blind for Parts 1 to 4.

**Part 1. The first dark ring.** Start with the Laser through a pinhole setup (632.8 nm, screen at 2.00 m). For pinholes of 100, 150, 200, 250 and 300 µm, zoom in until the first dark ring nearly fills the view, put the cursor on the first dark ring on one side (where the intensity is smallest), and record a reading. Then, with the 200 µm pinhole, do the same at 405, 532 and 650 nm. Send the readings to the worksheet.

**Part 2. Resolving two sources.** Clear the readings and pick the Two point sources setup (550 nm). Show each source alone. For iris diameters of 2, 3, 4, 6, 8 and 12 mm, change the angle between the sources until the peak of one dashed curve sits exactly on the first zero of the other. Then put the cursor midway between the sources (at 0) and record a reading. Send this run to a new copy of the table.

**Part 3. Headlights and the eye.** Clear the readings and pick Headlights and the eye (550 nm, pupil 3.00 mm). Move the car until the two headlights are just resolved by the same criterion, and record a reading with the cursor at 0. Repeat for pupils of 2.00, 5.00 and 8.00 mm (a pupil is small in bright light and large in the dark). Send this run to a new copy of the table.

**Part 4. Mystery pinhole.** Clear the readings and pick Mystery pinhole. Measure the radius of the first dark ring with the screen at 1.50, 2.00 and 3.00 m, then at 2.00 m with 532 nm light. Send these readings before picking a new mystery pinhole.

## Data

| Reading | Setup | λ (nm) | D (mm) | Screen distance L (m) | Cursor x (mm) | Separation Δθ (µrad) | Intensity at the cursor I/I₀ | θ₁ = x/L (µrad) | λ/D (µrad) | 1/D (1/mm) |
|---|---|---|---|---|---|---|---|---|---|---|
| | | | | | | | | | | |
| | | | | | | | | | | |
| | | | | | | | | | | |

Fill in θ₁ = x/L for the screen readings, λ/D for Part 1 (λ in nm divided by D in mm gives µrad) and 1/D for Parts 2 and 3.

## Analysis

1. Graph θ₁ against λ/D for Part 1. Is it a straight line through the origin? Compare the slope with 1.22.
2. Compare your ring radius for the 200 µm pinhole at 632.8 nm with your prediction in Before the lab question 1.
3. Graph the smallest resolved angle Δθ against 1/D for Part 2. From the slope find the factor multiplying λ, and compare it with 1.22.
4. At the Rayleigh separation, what was the intensity midway between the two sources, as a fraction of the peaks? Is it the same for every D?
5. From Part 3, find the farthest distance at which the headlights are resolved for each pupil size. Compare the 3.00 mm result with your answer to Before the lab question 3.
6. From Part 4, find the mystery pinhole's diameter from each reading, $$D = 1.22\,\lambda/\theta_1$$, and give the mean with its spread.

## Uncertainty

The cursor moves in steps of 1/1000 of the view, so the ring radius is uncertain by about one step; say how zooming in changed that. Near the first dark ring the intensity changes slowly, so the darkest point is harder to pin down than its step suggests; estimate how far you could move the cursor without the reading changing in its fourth decimal. In Part 2, judging when one peak sits on the other's zero is a judgment by eye: how much could Δθ change before you would notice? Propagate the uncertainty in the ring radius into the mystery pinhole's diameter.

## Questions

1. The Hubble Space Telescope has a 2.40 m mirror. For 550 nm light, what is the smallest angle it can resolve, and how close can two stars 2.0 million light years away be and still be seen as two? Check with the Hubble and two stars setup.
2. Why do astronomers build telescopes with ever larger mirrors, and why do radio telescopes have to be far larger than optical ones?
3. A camera lens of focal length 50 mm is stopped down from f/4 to f/22. What happens to the size of the Airy disk on the sensor, and why can a photograph taken at f/22 look softer than one at f/8? Check with the Camera lens setup.
4. Your answer to Before the lab question 3 is several kilometres, yet a real eye cannot tell two headlights apart that far away. Normal (20/20) vision resolves about one minute of arc. Give two reasons a real eye does worse than the diffraction limit.
5. Would two headlights be easier or harder to resolve if they were blue rather than red? Explain.

## What to hand in

Prelab answers, the settings for each part, the table copies with their graphs and fits, the slopes compared with 1.22, the headlight distances, the mystery pinhole's diameter with its uncertainty, and answers to the questions. Identify simulated data.
