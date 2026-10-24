# Single Slit Diffraction
Student laboratory · Physics II

Textbook: OpenStax *University Physics*, Vol. 3, §§4.1 and 4.2. Access for free at https://openstax.org/details/books/university-physics-volume-3.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/diffraction-grating.html?aperture=single)

<details class="about" markdown="1">
<summary>About the demo</summary>

**The demo:** the Diffraction Grating demo with its Single slit aperture (the link above opens it that way; the Aperture switch is at the top of the grating controls, and picking any of the grating setups switches back to the grating).

**Using the demo.**

- A laser (or a lamp, or white light) shines through one slit of width $$a$$, from 0.5 to 20 µm, onto a wall a distance $$L$$ away. The top panel plots the intensity across the wall as a fraction of the center's, $$I/I_0$$; the middle panel shows the wall face on with a meter stick (in cm, 0 at the straight through beam); the bottom panel is the bench seen from above.
- Measure hides the table of dark fringes and puts caliper jaws A and B on the wall, read to 1 mm. A light meter rides on jaw B and reads $$I/I_0$$ there. Enter $$L$$, $$y$$ and $$m$$ to compute $$\lambda$$ or $$a$$ and check it.
- Record reading (in Measure) stores the wavelength, $$a$$, $$L$$, the caliper reading $$y = B - A$$, the light meter reading and the dark fringe number in the order box. That number is stored only when jaw B sits on a dark fringe (the meter reads below 0.001); elsewhere that column stays empty. Export to worksheet sends the readings to the Data table below; Clear starts a new series, which goes into a new copy of the table.

**What the demo models.** The pattern is the exact far field (Fraunhofer) result for one slit, $$I = I_0[\sin\beta/\beta]^2$$ with $$\beta = \pi a\sin\theta/\lambda$$, with $$y = L\tan\theta$$ on a flat wall square to the beam. The far field needs $$L$$ much larger than $$a^2/\lambda$$, which is under 1 mm for every slit here. The slits are narrower than the 0.02 to 0.16 mm slits of a teaching lab so that the pattern spreads across the wall; a slit ten times wider gives the same pattern ten times smaller. For slits only a few wavelengths wide the formula is itself an approximation (it treats light as a scalar wave). The light meter is a point detector. Simulated data.

</details>

## Goal

Find where the dark fringes of a single slit fall, use them to measure the slit width, and test the single slit intensity formula with a light meter.

## Background

Divide the slit into two halves. When light from the top edge and light from the middle differ in path by half a wavelength, every point in the top half has a partner in the bottom half that cancels it, and the wall is dark. That happens where $$a\sin\theta = \lambda$$, and in the same way where (§4.1)

$$a\sin\theta = m\lambda, \qquad m = \pm 1, \pm 2, \pm 3, \ldots$$

There is no dark fringe for $$m = 0$$: the middle of the pattern is the brightest place, and the bright middle band is twice as wide as the side bands. On a wall a distance $$L$$ away, the dark fringe $$m$$ is at $$y$$ with $$\tan\theta = y/L$$, so $$\sin\theta = y/\sqrt{y^2 + L^2}$$.

Adding the waves from every point of the slit gives the intensity (§4.2):

$$I = I_0\left(\frac{\sin\beta}{\beta}\right)^2, \qquad \beta = \frac{\pi a \sin\theta}{\lambda}.$$

It is zero where $$\beta = m\pi$$ (the dark fringes) and has side maxima near $$\beta = 1.43\pi$$, $$2.46\pi$$, $$3.47\pi$$ (where $$\tan\beta = \beta$$), only 4.7%, 1.6% and 0.8% as bright as the center.

## Before the lab

1. Red light of 632.8 nm passes through a slit 5.0 µm wide. Find the angle of the first dark fringe and its distance from the center on a wall 1.00 m away. How wide is the bright middle band?
2. How many dark fringes are there on each side for this slit and wavelength? Why can there be no more?
3. Show that a graph of $$\sin\theta$$ against $$m$$ for the dark fringes should be a straight line through the origin. What is its slope? How would you get $$a$$ from it?
4. If the slit is made narrower, does the pattern spread out or shrink? What happens when $$a$$ is smaller than $$\lambda$$?
5. Find $$I/I_0$$ at $$\beta = \pi/2$$ and at $$\beta = 3\pi/2$$.

## Safety

There are no hazards in the simulation. A real laser can damage the eye: never look into the beam or its reflection.

## Procedure

Open the demo with the single slit, choose the He-Ne laser (632.8 nm) and switch to Measure. Keep the slit square to the beam and $$L = 1.00$$ m unless a part says otherwise. For each reading put jaw A on the center of the bright middle band (0 on the stick) and jaw B where the part says, and record.

**Part 1: dark fringes against m.** With $$a = 5.0$$ µm, put jaw B on each dark fringe on the positive side that the wall shows ($$m$$ = 1 to 5 on a computer screen; a phone may show only up to 4), typing $$m$$ in the order box each time. Send the readings to the worksheet and clear them.

**Part 2: the first dark fringe against slit width.** Measure the first dark fringe ($$m = 1$$) for $$a$$ = 2.0, 3.0, 4.0, 5.0, 6.0, 8.0, 10.0 and 15.0 µm. Send the readings and clear them.

**Part 3: intensity across the pattern.** With $$a = 5.0$$ µm, put jaw B at $$y$$ = 0, 2, 4, 6, 8, 10 and 12 cm across the middle band and then at 14, 16, 18, 20, 22 and 24 cm across the first side band, recording the light meter each time. Send the readings.

**Part 4: narrow slits and colors.** Set $$a = 0.5$$ µm and describe the wall. Then, back at $$a = 5.0$$ µm, compare the first dark fringe for the green (532 nm) and violet (405 nm) lasers with the red one.

## Data

| Reading | λ (nm) | a (µm) | L (m) | Dark fringe m | y (cm) | I/I₀ at B | sin θ | 1/a (1/µm) | β (rad) | (sin β/β)² |
|---|---|---|---|---|---|---|---|---|---|---|
| | | | | | | | | | | |
| | | | | | | | | | | |
| | | | | | | | | | | |
| | | | | | | | | | | |
| | | | | | | | | | | |
| | | | | | | | | | | |
| | | | | | | | | | | |

Fill in $$\sin\theta = y/\sqrt{y^2 + L^2}$$ yourself, and $$1/a$$ for Part 2, and $$\beta = \pi a\sin\theta/\lambda$$ and $$(\sin\beta/\beta)^2$$ for Part 3 (take $$(\sin\beta/\beta)^2 = 1$$ at $$\beta = 0$$).

## Analysis

1. For Part 1, graph $$\sin\theta$$ against $$m$$. Find the slope and intercept. From the slope, $$\lambda/a$$, find the slit width and compare it with 5.0 µm.
2. For Part 2, graph $$\sin\theta_1$$ against $$1/a$$. What should the slope be? Find it and compare it with the laser's wavelength.
3. For one Part 1 reading, find $$a$$ with the small angle form $$a \approx m\lambda L/y$$ and with the exact form. By what percentage is the small angle form off, and why? For which dark fringes is the small angle form good to 1%?
4. For Part 3, graph $$I/I_0$$ against $$(\sin\beta/\beta)^2$$. What slope and intercept do you expect, and what do you find? Where in your readings is the side band brightest, and how bright is it compared with the center?
5. For Part 4, explain what you saw with $$a = 0.5$$ µm, and how the first dark fringe depends on the color.

## Uncertainty

The caliper reads to 1 mm, and a dark fringe is a minimum of a smooth pattern, so you find its center by eye or by the light meter. Estimate the uncertainty in $$y$$ and propagate it to $$\sin\theta$$ and to $$a$$. Which dark fringe gives $$a$$ most precisely? A real slit's edges are not perfectly straight and parallel, and a real detector has a finite size: say how each would change what you measure.

## Questions

1. Why is the bright middle band twice as wide as the side bands?
2. A double slit pattern (§4.3) is the single slit pattern times the two slit fringes. Use that to explain why some double slit fringes are missing.
3. Sound passes easily through a doorway but light casts a sharp shadow. Use the single slit result to explain why.
4. A camera's lens opening acts like a slit. Why does a very small opening make a photograph less sharp, not more? (§4.5 takes this up for round openings.)

## What to hand in

Prelab answers, a Data table copy for each part with the graphs and fits for Parts 1, 2 and 3, your slit width and wavelength results with uncertainties, your Part 4 observations and answers to the questions. Identify simulated data.
