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

Open the demo with the single slit (Aperture: Single slit), press the He-Ne 632.8 chip under Light source, Lasers, and press Measure in the Measure section. Keep Grating turned by at 0° and the Grating to wall L slider (Wall section) at 1.00 m unless a part says otherwise. Set the slit with the Slit width a slider (0.1 µm steps). For each reading put jaw A on the center of the bright middle band (0 on the stick) and jaw B where the part says: press on the wall to bring the nearer jaw there, then press the A or B key and use the left and right arrow keys to move that jaw 1 mm at a time. The Caliper B − A readout is $$y$$ and the Light meter at jaw B readout is $$I/I_0$$. Press Record reading (Readings section) each time.

**Part 1: dark fringes against m.** With $$a = 5.0$$ µm, put jaw B on each dark fringe from $$m$$ = 1 to 5 on the positive side (a phone may show only up to 4), typing $$m$$ in the order m box (Measure section) each time. Move jaw B until the light meter reads below 0.001; only then does Record reading store $$m$$. Press Export to worksheet, then Clear.

**Part 2: intensity across the pattern.** With $$a = 5.0$$ µm, put jaw B at $$y$$ = 0, 4, 8 and 12 cm across the middle band and then at 16, 20 and 24 cm across the first side band, pressing Record reading at each; the light meter reading goes in the I/I₀ at B column. Press Export to worksheet.

## Data

| Reading | λ (nm) | a (µm) | L (m) | Dark fringe m | y (cm) | I/I₀ at B | sin θ | β (rad) | (sin β/β)² |
|---|---|---|---|---|---|---|---|---|---|
| | | | | | | | | | |
| | | | | | | | | | |
| | | | | | | | | | |
| | | | | | | | | | |
| | | | | | | | | | |
| | | | | | | | | | |
| | | | | | | | | | |

Export fills the columns from Reading to I/I₀ at B (Dark fringe m stays empty when jaw B is not on a dark fringe). Fill in $$\sin\theta = y/\sqrt{y^2 + L^2}$$ yourself, and $$\beta = \pi a\sin\theta/\lambda$$ and $$(\sin\beta/\beta)^2$$ for Part 2 (take $$(\sin\beta/\beta)^2 = 1$$ at $$\beta = 0$$).

## Analysis

1. For Part 1, graph $$\sin\theta$$ (vertical) against $$m$$ (horizontal) and fit a straight line with a free intercept. Find the slope and intercept. From the slope, $$\lambda/a$$, find the slit width and compare it with 5.0 µm.
2. For Part 2, graph $$I/I_0$$ from the light meter (vertical) against your computed $$(\sin\beta/\beta)^2$$ (horizontal). What slope and intercept do you expect, and what do you find? Where in your readings is the side band brightest, and how bright is it compared with the center?

## Uncertainty

The caliper reads to 1 mm, and a dark fringe is a minimum of a smooth pattern, so you find its center by eye or by the light meter. Estimate the uncertainty in $$y$$ and propagate it to $$\sin\theta$$ and to $$a$$. Which dark fringe gives $$a$$ most precisely? A real slit's edges are not perfectly straight and parallel, and a real detector has a finite size: say how each would change what you measure.

## Questions

1. A double slit pattern (§4.3) is the single slit pattern times the two slit fringes. Use that to explain why some double slit fringes are missing.
2. A camera's lens opening acts like a slit. Why does a very small opening make a photograph less sharp, not more? (§4.5 takes this up for round openings.)

## What to hand in

Prelab answers, a Data table copy for each part with the graphs and fits for Parts 1 and 2, your slit width result with its uncertainty and answers to the questions. Identify simulated data.
