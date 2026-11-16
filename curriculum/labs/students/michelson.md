# Michelson Interferometer
Student laboratory · Physics II

Textbook: OpenStax *University Physics*, Vol. 3, §3.5 (with §1.1 for the index of refraction). Access for free at https://openstax.org/details/books/university-physics-volume-3.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/michelson.html?setup=hene)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Using the demo.**

- The top view shows the interferometer on an optical table: a light source focused to a point just before the beam splitter, the compensator plate, the movable mirror M₁ on a micrometer stage, the fixed mirror M₂ with two tilt screws, a gas cell 5.00 cm long in the M₂ arm, and the screen. The second picture is the screen itself, 80 mm across, with a millimeter scale.
- The micrometer reads the mirror's position to 0.1 μm. Turn it with its slider, the step buttons, by dragging the drum in the picture, or with the arrow keys.
- A fringe counter (a photodiode at the center of the screen) adds one for each bright fringe that passes, whichever way it moves. Zero the counter starts it again and remembers the micrometer reading. A new light source, or putting the cell in or taking it out, cannot be counted.
- The gas cell has a pump and a needle valve. Pump out takes it to 2 Pa; Let air in lets air back at about 1 kPa/s; Closed stops either. The gauge reads to 0.1 kPa.
- Record reading stores the light source, the micrometer reading, where the counter was zeroed, the cell pressure and the fringe count. Export to worksheet sends the readings to the Data table below; Clear starts a new series, which goes into a new copy of the table.
- Mystery laser hides the wavelength; New mystery laser picks another (and tells you the old one). Blind hides the wavelength and $$n - 1$$ readouts so you can make your own predictions.

**What the demo models.**

- Each mirror makes an image of the source point, so the screen sees two coherent point sources; the pattern drawn is exactly the two point interference pattern. Seen along the axis the images are $$2d$$ apart and the fringes are circles; tilting M₂ moves its image sideways and near equal paths the fringes become straight lines.
- The room's air is dry, at 20.0 °C and 101.325 kPa. Air's index comes from Ciddor's formula (Applied Optics, 1996) and is taken in proportion to the gas density: at constant temperature, $$n - 1$$ is proportional to the pressure.
- The laser lines are perfectly sharp. White light has a daylight spectrum, so its fringes appear only within about a micrometer of equal paths.

</details>

## Goal

Measure the wavelength of a laser by counting fringes as one mirror of a Michelson interferometer moves, measure the index of refraction of air by pumping out a gas cell, and find the position of equal path lengths with white light.

## Background

A beam splitter sends half of the light to mirror M₁ and half to mirror M₂; the two halves come back and overlap on the screen. If M₁ is a distance $$d$$ farther from the splitter than M₂, the light that went to M₁ travels $$2d$$ farther, so along the axis

$$\text{bright fringe:}\quad 2d = m\lambda, \qquad \text{dark fringe:}\quad 2d = \left(m + \tfrac{1}{2}\right)\lambda .$$

Moving M₁ by $$\Delta d$$ changes the path difference by $$2\,\Delta d$$, so the number of fringes $$N$$ that pass a fixed point is (§3.5)

$$2\,\Delta d = N\lambda .$$

Light in a medium of index $$n$$ has wavelength $$\lambda/n$$ (§1.1). A cell of length $$L$$ in one arm holds $$2nL/\lambda$$ wavelengths over the round trip, against $$2L/\lambda$$ when it is empty. Letting gas into an empty cell therefore passes

$$N = \frac{2L\,(n - 1)}{\lambda}$$

fringes. For a gas at constant temperature, $$n - 1$$ is proportional to the density and so to the pressure $$P$$: a graph of $$N$$ against $$P$$ is a straight line through the origin.

Light off the axis at angle $$\theta$$ has path difference $$2d\cos\theta$$, so the fringes are rings around the axis. When $$d$$ grows, new rings appear at the center and move outward.

## Before the lab

1. A red He–Ne laser has $$\lambda = 632.8$$ nm. How far must M₁ move for 200 fringes to pass the center?
2. The textbook's Table 1.1 gives $$n = 1.000293$$ for air at 0 °C and 1 atm. At 20 °C, the same pressure, the density is lower by the ratio of the absolute temperatures. Predict $$n - 1$$ at 20 °C and the number of fringes that pass when a 5.00 cm cell of air is pumped out with the red laser.
3. As M₁ moves to make the arms more unequal, do the rings appear at the center and grow outward, or shrink into the center? Explain from $$2d\cos\theta = m\lambda$$.

## Safety

A real He–Ne laser is class II or IIIa: never look into the beam or its reflection from a mirror. Keep your eyes above the height of the beam.

## Procedure

**Part 1: The wavelength of the red He–Ne laser.** (1) Press the Measure λ, red He–Ne setup. (2) Press Zero the counter, then Record reading: this first row (N = 0) holds the micrometer reading where you zeroed. (3) Turn the micrometer in one direction only, with the +1 and +0.1 buttons under the Micrometer (mirror position) slider. Each time the Counter reaches 40, 80, 120, 160 and 200 fringes, press Record reading (stop at the first 0.1 μm step where the Counter shows the new value). (4) Press Export to worksheet.

**Part 2: The mystery laser.** Press Clear and pick the Mystery laser setup. Repeat Part 1 steps 2 to 4 with it; Export to worksheet sends this run to a new copy of the table. Do not press New mystery laser until you have finished, or the laser changes.

**Part 3: The index of refraction of air.** (1) Press Clear and pick the Air in a gas cell setup (red He–Ne). (2) In the gas cell card, press Pump out until the Gauge reads 0.0 kPa, then press Closed. (3) Press Zero the counter, then Record reading (N = 0). (4) Press Let air in. Each time the Counter reaches 10, 20, 30 and 40 fringes, press Closed and then Record reading, then press Let air in again. (5) At the end let the cell fill to room pressure (101.3 kPa) and press Record reading once more: that row is the total count. (6) Press Export to worksheet.

**Part 4: White light and equal paths.** Pick the Tilted mirror setup and turn the micrometer until the fringes on the screen are straight, evenly spaced lines. Press White light in the Light source buttons and turn the micrometer slowly with the +0.1 button until colored fringes appear. Write down the micrometer reading where the center fringe is white, and describe the colors on each side.

## Data

| Reading | Light source | Micrometer reading (μm) | Mirror displacement Δd (μm) | Cell pressure P (kPa) | Fringe count N |
|---|---|---|---|---|---|
| | | | | | |
| | | | | | |
| | | | | | |

Mirror displacement is the micrometer reading minus the reading where you zeroed the counter. In Part 3 the mirror does not move; leave Δd blank.

## Analysis

1. For Parts 1 and 2, graph $$N$$ against $$\Delta d$$ for both lasers on one graph, as two series, and fit a straight line to each. From each slope find $$\lambda$$ and compare the red laser's with 632.8 nm. What color is the mystery laser? Why is the slope a better measure than the intercept, and why need the line not pass through the origin?
2. For Part 3, graph $$N$$ against $$P$$. Is it a straight line? Why can it miss the origin by up to one fringe? From the slope, find $$n - 1$$ of air at 101.3 kPa and 20 °C, and compare it with your prediction from Before the lab question 2. Compare also with $$n - 1$$ from the total count when the cell filled to room pressure.
3. From Part 4, how many colored fringes could you see on each side of the white one? Use that to estimate how close to equal the arms must be for white light fringes.

## Uncertainty

The counter counts whole fringes, and you stop at the first reading where it changes, so each micrometer reading is uncertain by about one 0.1 μm step. Estimate the uncertainty of $$\lambda$$ from a single reading at 200 fringes and compare it with the uncertainty of the slope from the fit. In Part 3, the gauge reads to 0.1 kPa; how does that compare with the change in pressure for one fringe? Which matters more for $$n - 1$$: the pressure readings or the count?

## Questions

1. What is the compensator plate for? Why does it matter for white light but not for a laser?
2. LIGO detects gravitational waves with Michelson interferometers whose arms are 4 km long. A passing wave changes the arm lengths by about $$10^{-18}$$ m. What fraction of a fringe is that for light of 1064 nm, and why does LIGO not count fringes?

## What to hand in

Prelab answers, the table copies with their graphs and fits, the wavelengths and $$n - 1$$ with uncertainties and comparisons, the Part 4 reading and description, and answers to the questions. Identify simulated data.
