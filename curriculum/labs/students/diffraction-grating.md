# Diffraction Grating
Student laboratory · Physics II

Textbook: OpenStax *University Physics*, Vol. 3, §4.4 (with §§3.3 and 4.3). Access for free at https://openstax.org/details/books/university-physics-volume-3.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/diffraction-grating.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Red laser through 600 lines/mm (the setup for this worksheet); Measure the wavelength; Green, red and blue together; White light rainbows and overlapping orders; Hydrogen lamp spectrum; CD as a grating.

**Using the demo.**

- A laser, a gas discharge lamp or white light shines through a grating onto a wall a distance $$L$$ away. The top panel plots the intensity across the wall, the middle panel shows the wall face on with a meter stick (in cm, 0 at the straight through beam), and the bottom panel is the bench seen from above.
- You choose the source, the grating (lines per mm, or a CD or DVD), how many slits $$N$$ the beam lights, the ratio of slit spacing to slit width, a turn of the grating and $$L$$. The Single slit aperture is for the single slit worksheet.
- Measure hides the table of orders and puts caliper jaws A and B on the wall, read to 1 mm. Enter $$L$$, $$y$$ and $$m$$ to compute $$\lambda$$ or $$d$$ and check it.
- Record reading (in Measure) stores the source, the grating, the order number in the order box, $$L$$ and the caliper reading $$y = B - A$$. Export to worksheet sends the readings to the Data table below; Clear starts a new series, which goes into a new copy of the table.

**What the demo models.** Spot positions are exact: $$d\sin\theta_m = m\lambda$$ and $$y_m = L\tan\theta_m$$ on a flat wall square to the beam. The intensity plot is the far field pattern of $$N$$ slits. Lamp lines are from the NIST atomic spectra tables. The laser body, lamps and grating holder are not to scale; $$L$$, $$y$$ and the angles are. Simulated data.

</details>

## Goal

Measure the angles of the bright orders of a grating for lasers of known wavelength, find the grating's line spacing from them, and then use the grating to measure unknown wavelengths.

## Background

A grating is a large number $$N$$ of equally spaced slits a distance $$d$$ apart. Light from neighbouring slits reaching the wall at angle $$\theta$$ has a path difference $$d\sin\theta$$, and every slit adds in step when that is a whole number of wavelengths (§§3.3 and 4.4):

$$d\sin\theta = m\lambda, \qquad m = 0, \pm 1, \pm 2, \ldots$$

With hundreds of slits these bright orders are very sharp, which is why a grating separates nearby wavelengths so well. A grating with $$n$$ lines per millimetre has $$d = (1\ \mathrm{mm})/n$$. On a wall a distance $$L$$ away, order $$m$$ lands at $$y$$ with $$\tan\theta = y/L$$, so

$$\sin\theta = \frac{y}{\sqrt{y^2 + L^2}}.$$

The small angle form $$y \approx m\lambda L/d$$ fails badly here: first order angles are typically 15° to 25°. Two wavelengths $$\lambda$$ and $$\lambda + \Delta\lambda$$ are just resolved in order $$m$$ when $$\lambda/\Delta\lambda = mN$$, the resolving power.

## Before the lab

1. Find $$d$$ for a grating of 600 lines per mm.
2. For the He-Ne laser (632.8 nm) and this grating, find the angle of the first and second orders, and their distances from the center on a wall 0.50 m away. Why is there no third order?
3. Show that a graph of $$\sin\theta$$ against $$m\lambda$$ should be a straight line through the origin. What is its slope?
4. The sodium D lines are 588.995 nm and 589.592 nm. What resolving power is needed to separate them? How many slits must be lit to do it in first order? In second order?

## Safety

There are no hazards in the simulation. A real laser can damage the eye: never look into the beam or its reflection, and remember that the orders leave the grating at large angles. Gas discharge lamps run at high voltage and get hot.

## Procedure

Start from the Red laser through 600 lines/mm setup, switch to Measure and set $$L = 0.50$$ m with the grating square to the beam. For each reading put jaw A on the center spot (0 on the stick), jaw B on the center of the spot you are measuring, type the order number $$m$$ in the order box, and record.

**Part 1: lasers of known wavelength.** For each laser (He-Ne 632.8, red 650, green 532, blue 450 and violet 405 nm), measure every order on the positive side that lands on the wall. Send the readings to the worksheet and clear them.

**Part 2: an unknown laser.** Pick the Measure the wavelength setup (it picks a laser at random and sets $$L = 0.80$$ m). Measure orders 1 and 2, then repeat at $$L = 0.50$$ m. Send the readings. Only after you have worked out $$\lambda$$ (Analysis 3), use Compute and check.

**Part 3: the hydrogen spectrum.** Pick the Hydrogen lamp spectrum setup, switch to Measure and set $$L = 0.50$$ m. Measure the first order position of each of the four visible lines (red, cyan, blue and violet). Send the readings.

**Part 4 (optional): resolving power.** Back in Explore, choose the sodium lamp. The two D lines land less than half a millimetre apart, too close to see on the wall, but the note under the table of orders gives the resolving power for the lit slits and the smallest wavelength difference it separates. Change the number of lit slits and find the fewest that still separate the D lines in first order.

## Data

| Reading | Source | λ (nm) | Lines per mm | Order m | L (m) | y (cm) | sin θ | mλ (nm) |
|---|---|---|---|---|---|---|---|---|
| | | | | | | | | |
| | | | | | | | | |
| | | | | | | | | |
| | | | | | | | | |
| | | | | | | | | |
| | | | | | | | | |
| | | | | | | | | |
| | | | | | | | | |

Fill in $$\sin\theta = y/\sqrt{y^2 + L^2}$$ and, for the known lasers, $$m\lambda$$ yourself. Leave $$\lambda$$ and $$m\lambda$$ blank for the unknowns.

## Analysis

1. For Part 1, graph $$\sin\theta$$ against $$m\lambda$$. Find the slope and intercept. The slope is $$1/d$$: find $$d$$ and the number of lines per mm, and compare with the grating's label.
2. For one Part 1 reading, find $$\lambda$$ with the small angle form $$\lambda \approx yd/(mL)$$ and with the exact form. By what percentage is the small angle form off, and why?
3. For Part 2, find the unknown wavelength from each reading with $$\lambda = d\sin\theta/m$$, using your $$d$$ from Analysis 1. Average them and give an uncertainty. Then use Compute and check. Which laser was it?
4. For Part 3, find the wavelength of each hydrogen line. Compare them with the Balmer formula, $$1/\lambda = R_H(1/4 - 1/n^2)$$ with $$R_H = 1.097 \times 10^7\ \mathrm{m^{-1}}$$, for $$n$$ = 3, 4, 5 and 6.
5. (Optional) For Part 4, compare the fewest slits that separate the D lines with your prediction from Before the lab question 4. How wide is the lit patch of the grating then? Why would the second order need only half as many slits?

## Uncertainty

The caliper reads to 1 mm and you place each jaw by eye on a spot a few millimetres wide. Estimate the uncertainty in $$y$$ and propagate it to $$\sin\theta$$ and to $$\lambda$$. Is the relative uncertainty in $$\lambda$$ smaller in first or in second order? A real grating's line count is known only to its manufacturer's tolerance, and a wall that is not square to the beam shifts the spots on one side outward; say how each would affect your results.

## Questions

1. Why are the orders of a grating with hundreds of lit slits much sharper than the fringes of a double slit with the same $$d$$?
2. In white light, which color of each order is nearest the center? Why do the second and third orders overlap?
3. A CD's track pitch is 1.6 µm. Where would its first order land for the red laser at $$L = 0.50$$ m? Check it with the CD setup.
4. Astronomers use gratings to read the light of stars. What could they learn from a spectrum like the hydrogen lines in Part 3?

## What to hand in

Prelab answers, a Data table copy for each part with the Part 1 graph and fit, your grating spacing, the unknown wavelength with its uncertainty, the hydrogen wavelengths compared with the Balmer formula, and answers to the questions. Identify simulated data.
