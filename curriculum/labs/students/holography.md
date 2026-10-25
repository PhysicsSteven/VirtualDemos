# Holography: Fringes and Images
Student laboratory · Physics II

Textbook: OpenStax *University Physics*, Vol. 3, §4.7 (with §3.1 and §4.4). Access for free at https://openstax.org/details/books/university-physics-volume-3.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/holography.html?setup=beams)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Two beams; Record a point (Record view); Plane wave hologram; Virtual image; Real image; Another color (Reconstruct view).

**Using the demo.**

- **Record view.** A reference beam (a plane wave at angle $$\theta_r$$ to the plate's normal) and the light from the object meet on a photographic plate 3.0 mm wide. The object is a plane wave at angle $$\theta_o$$ (light from a mirror), one point or three points. The magnified picture shows the exact light intensity in a 12 μm patch at the plate. The microscope shows the developed plate and the intensity $$I(x)$$ that fell on it. Its two cursors read to 0.01 μm, and the demo counts the bright fringes from cursor A to cursor B.
- **Reconstruct view.** The developed plate, with the object gone, is lit by light of wavelength $$\lambda_2$$ from 400 to 700 nm, either along the reference beam or from the other side of the normal. The map shows the light leaving the plate and, on the left, that light traced back to where it seems to come from. A screen (or a camera's focus) can be put at any $$z$$ from −32 to +32 mm; the readouts give the brightest point on it. A detector with a slit 0.05° wide reads how much light leaves the plate at its angle.
- Record reading stores the settings with the cursor span and fringe count (Record view) or the wavelength, screen position and detector angle (Reconstruct view). Export to worksheet sends the readings to the Data table below; Clear starts a new series, which goes into a new copy of the table.
- Blind hides the predicted fringe spacing, beam angles and image positions.

**What the demo models.** The light is computed exactly in a two dimensional slice: each object point is really a bright line across the slice, so its wave is cylindrical. The plate is thin (it records only the light at its surface) and linear: the developed plate passes an amplitude proportional to the light that fell on it. The reconstructed light is found by splitting the light just past the plate into plane waves and carrying each one to the screen. A real plate is two dimensional, has some thickness and is linear only over part of its range.

</details>

## Goal

Measure how the spacing of the fringes a hologram records depends on the angle between the beams, then light the developed plate again and find where its light goes: the image beam, the virtual and real images, and how they move when the color changes.

## Background

A hologram records the interference of two beams from the same laser: a **reference beam** and the **object beam**, the light scattered by the object (§4.7). Where they overlap, bright and dark fringes form (§3.1). For two plane waves with an angle $$\theta$$ between them, the bright fringes are planes that bisect that angle, a distance

$$d = \frac{\lambda}{2\sin(\theta/2)}$$

apart. On a plate that the two beams strike at angles $$\theta_r$$ and $$\theta_o$$ from its normal, the fringes are $$d = \lambda/\lvert\sin\theta_r - \sin\theta_o\rvert$$ apart; when the plate bisects the angle ($$\theta_r = -\theta_o = \theta/2$$) this is the same formula.

The developed plate is a grating with that spacing. Lit again by the reference beam alone, it diffracts light into three beams (§4.4): the light that goes straight through (the zero order) and two first orders. One first order is a copy of the object wave: an eye looking into it sees the object where it was, a **virtual image**. The other, the conjugate wave, can come to a focus in front of the plate, a **real image**. For a plate lit at angle $$\theta_i$$ with wavelength $$\lambda_2$$, a hologram recorded with $$\lambda_1$$ sends its image beam to

$$\sin\theta_\mathrm{im} = \sin\theta_i + \frac{\lambda_2}{\lambda_1}\left(\sin\theta_o - \sin\theta_r\right) = \sin\theta_i - \frac{\lambda_2}{d}.$$

A point of the object recorded at distance $$z_0$$ makes curved fringes, a piece of a zone plate. Lit with a different wavelength, the plate bends the light more or less, so the image moves: to a first approximation its distance from the plate becomes $$z_0\,\lambda_1/\lambda_2$$.

## Before the lab

1. Two beams of 633 nm light meet with 30° between them. Predict the fringe spacing. What happens to it as the angle between the beams shrinks to zero?
2. The fringes on a hologram are about a micrometer apart. Why must the plate, the mirrors and the object stay still to a small fraction of a wavelength during the exposure?
3. A plane wave hologram is made with the object beam straight on ($$\theta_o = 0$$) and the reference at $$\theta_r = 25°$$, both 633 nm. Predict the fringe spacing and the angles of the three beams that leave the plate when it is lit at 25° with 633 nm light.
4. If the same plate is lit at 25° with blue light instead, does the image beam turn toward the reference beam or away from it? Explain with the grating equation.

## Safety

Real holography uses lasers. Never look into a laser beam or its reflection from a mirror or the plate, and keep beams below eye level.

## Procedure

**Part 1: fringe spacing against angle.** Start from the Two beams setup (633 nm, the plate bisecting the angle between the beams). For angles between the beams of 10°, 20°, 30°, 40°, 50° and 60° (each beam at half the angle, on opposite sides of the normal), zoom the microscope in until the fringes are clear, put cursor A on one bright fringe and cursor B on another about ten fringes away, and record. Send the readings to the worksheet.

**Part 2: fringe spacing against wavelength.** Clear the readings. With 30° between the beams, record the fringe spacing the same way with each of the four lasers. Send this run to a new copy of the table.

**Part 3: the image beam against wavelength.** Clear the readings and pick the Plane wave hologram setup (object beam straight on, reference at 25°, recorded at 633 nm). Light the plate along the reference beam with 450, 500, 550, 600, 633, 650 and 700 nm light. Each time find the image beam's angle: move the detector until its reading is largest (in the middle of the range where it is largest), and record. Send the readings to the worksheet.

**Part 4: where the image is.** Clear the readings and pick the Virtual image setup (one point 20.0 mm from the plate, reference at 20°, recorded at 633 nm). Light the plate along the reference beam with 450, 500, 550, 600, 633 and 700 nm light. Each time move the camera focus in steps of 0.05 mm to where the brightest point is brightest, and record. Then light the plate from the other side with 633 nm light, find where the light comes to a focus in front of the plate the same way, and record. Send the readings to the worksheet.

## Data

| Reading | Setup | $$\lambda_1$$ (nm) | $$\theta$$ (°) | Periods $$N$$ | Span $$\Delta x$$ (μm) | $$d$$ (μm) | $$1/\sin(\theta/2)$$ (no unit) | $$\lambda_2$$ (nm) | $$\theta_\mathrm{im}$$ (°) | $$\sin\theta_\mathrm{im}$$ (no unit) | Image $$z$$ (mm) | $$1/\lambda_2$$ (1/μm) |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| | | | | | | | | | | | | |
| | | | | | | | | | | | | |
| | | | | | | | | | | | | |

$$\lambda_1$$ is the wavelength the hologram was recorded with and $$\theta$$ the angle between the two beams that made it; $$N$$ is the number of fringe periods between the cursors; $$\lambda_2$$ is the wavelength the plate is lit with, $$\theta_\mathrm{im}$$ the image beam's angle and $$z$$ where the image is sharpest. The demo fills the measured columns; work out $$d = \Delta x/N$$, $$1/\sin(\theta/2)$$, $$\sin\theta_\mathrm{im}$$ and $$1/\lambda_2$$ yourself. A negative $$z$$ is behind the plate (a virtual image), a positive $$z$$ in front of it.

## Analysis

1. Graph $$d$$ against $$1/\sin(\theta/2)$$ for Part 1. From the slope find the wavelength, and compare it with 633 nm.
2. Graph $$d$$ against $$\lambda_1$$ for Part 2. What slope does the formula in the Background predict at 30°, and how close is yours?
3. Graph $$\sin\theta_\mathrm{im}$$ against $$\lambda_2$$ for Part 3. From the slope find the fringe spacing $$d$$ recorded on the plate, and compare it with $$\lambda_1/\sin 25°$$. What should the intercept be?
4. Graph the image distance $$z$$ against $$1/\lambda_2$$ for Part 4 (leave out the real image). Compare the slope with $$-z_0\lambda_1$$. The simple rule assumes the image beam leaves straight on; it actually leaves at $$\sin\alpha = \sin\theta_r(1 - \lambda_2/\lambda_1)$$, and ray tracing in the plane of the slice puts the image at $$z_0(\lambda_1/\lambda_2)\cos^3\alpha$$. Find $$\alpha$$ for 450 nm and say whether this explains the point farthest from your line.
5. Where did the real image form, and how does its distance compare with the virtual image's at the same wavelength?

## Uncertainty

The cursors read to 0.01 μm, but placing them on the peak of a bright fringe is less certain; estimate how far off a cursor could be and what that does to $$d$$ when you span about ten fringes. The detector's slit is 0.05° wide, so its reading is largest over a small range of angles; use half that range as the uncertainty of $$\theta_\mathrm{im}$$. For the image distance, say how far you could move the focus before the brightest point visibly dimmed.

## Questions

1. Why does making a hologram need a laser, when an ordinary photograph does not?
2. The fringes a point records are curved and get closer together toward one edge of the plate. Use the zoomed microscope to check this and explain it with the angle between the beams at each place.
3. Why does a thin hologram lit with white light show a blurred, rainbow colored image? Use your Part 3 and Part 4 results.
4. Why is the reference beam brought in at an angle instead of straight on? Think about where the three beams leaving the plate go.

## What to hand in

Prelab answers, the table copies with their graphs and fits, the wavelength and fringe spacing found from your slopes with uncertainties and comparisons, the image distances and the real image, and answers to the questions. Identify simulated data.
