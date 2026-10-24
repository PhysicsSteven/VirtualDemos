# Michelson Interferometer
Student laboratory · Physics II

Textbook: OpenStax *University Physics*, Vol. 3, §3.5 (with §1.1 for the index of refraction). Access for free at https://openstax.org/details/books/university-physics-volume-3.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/michelson.html?setup=hene)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Using the demo.**

- The top view shows the interferometer on an optical table: a light source focused to a point just before the beam splitter, the compensator plate, the movable mirror M₁ on a micrometer stage, the fixed mirror M₂ with two tilt screws, an optional gas cell 5.00 cm long in the M₂ arm, and the screen. The second picture is the screen itself, 80 mm across, with a millimetre scale.
- The micrometer reads the mirror's position to 0.1 μm. Turn it with its slider, the step buttons, by dragging the drum in the picture, or with the arrow keys.
- A fringe counter (a photodiode at the centre of the screen) adds one for each bright fringe that passes, whichever way it moves. Zero the counter starts it again and remembers the micrometer reading. A new light source, or putting the cell in or taking it out, cannot be counted.
- The gas cell has a pump and a needle valve. Pump out takes it to 2 Pa; Let air in lets air back at about 1 kPa/s; Closed stops either. The gauge reads to 0.1 kPa.
- Record reading stores the light source, the micrometer reading, where the counter was zeroed, the cell pressure and the fringe count. Export to worksheet sends the readings to the Data table below; Clear starts a new series, which goes into a new copy of the table.
- Mystery laser hides the wavelength; New mystery laser picks another (and tells you the old one). Blind hides the wavelength and $$n - 1$$ readouts so you can make your own predictions.

**What the demo models.**

- Each mirror makes an image of the source point, so the screen sees two coherent point sources; the pattern drawn is exactly the two point interference pattern. Seen along the axis the images are $$2d$$ apart and the fringes are circles; tilting M₂ moves its image sideways and near equal paths the fringes become straight lines.
- The room's air is dry, at 20.0 °C and 101.325 kPa. Air's index comes from Ciddor's formula (Applied Optics, 1996) and is taken in proportion to the gas density: at constant temperature, $$n - 1$$ is proportional to the pressure.
- The laser lines are perfectly sharp. White light has a daylight spectrum, so its fringes appear only within about a micrometre of equal paths.

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

Light off the axis at angle $$\theta$$ has path difference $$2d\cos\theta$$, so the fringes are rings around the axis. When $$d$$ grows, new rings appear at the centre and move outward.

## Before the lab

1. A red He–Ne laser has $$\lambda = 632.8$$ nm. How far must M₁ move for 200 fringes to pass the centre?
2. The textbook's Table 1.1 gives $$n = 1.000293$$ for air at 0 °C and 1 atm. At 20 °C, the same pressure, the density is lower by the ratio of the absolute temperatures. Predict $$n - 1$$ at 20 °C and the number of fringes that pass when a 5.00 cm cell of air is pumped out with the red laser.
3. As M₁ moves to make the arms more unequal, do the rings appear at the centre and grow outward, or shrink into the centre? Explain from $$2d\cos\theta = m\lambda$$.
4. Why do white light fringes appear only when the two arms are almost exactly equal, while laser fringes appear at any setting?

## Safety

A real He–Ne laser is class II or IIIa: never look into the beam or its reflection from a mirror. Keep your eyes above the height of the beam.

## Procedure

**Part 1: The wavelength of the red He–Ne laser.** Start with the Measure λ, red He–Ne setup. Zero the counter and write down the micrometer reading there. Turn the micrometer in one direction only, and record the reading each time the counter reaches 20, 40, 60, … up to 200 fringes (stop at the first reading where the counter shows the new value). Send the readings to the worksheet.

**Part 2: The mystery laser.** Clear the readings and pick the Mystery laser setup. Repeat Part 1 with it, and send this run to a new copy of the table. Do not press New mystery laser until you have finished, or the laser changes.

**Part 3: The index of refraction of air.** Clear the readings and pick the Air in a gas cell setup (red He–Ne). Pump the cell out until the gauge reads 0.0 kPa and close the valves. Zero the counter, then let air in. Each time the counter reaches 5, 10, 15, … fringes, close the valve and record the pressure, then let air in again. Send the run to a new copy of the table. Then let the cell fill to room pressure (101.3 kPa) and write down the total count.

**Part 4: White light and equal paths (optional).** Pick the Tilted mirror setup and turn the micrometer until the fringes are straight, evenly spaced lines. Switch to white light and turn the micrometer slowly, in 0.1 μm steps, until coloured fringes appear. Record the reading where the centre fringe is white, and describe the colours on each side.

## Data

| Reading | Light source | Micrometer reading (μm) | Mirror displacement Δd (μm) | Cell pressure P (kPa) | Fringe count N |
|---|---|---|---|---|---|
| | | | | | |
| | | | | | |
| | | | | | |

Mirror displacement is the micrometer reading minus the reading where you zeroed the counter. In Part 3 the mirror does not move; leave Δd blank.

## Analysis

1. For Part 1, graph $$N$$ against $$\Delta d$$ and fit a straight line. From the slope find $$\lambda$$ and compare it with 632.8 nm. Why is the slope a better measure than the intercept, and why need the line not pass through the origin?
2. Do the same for the mystery laser. What colour is it?
3. For Part 3, graph $$N$$ against $$P$$. Is it a straight line? Why can it miss the origin by up to one fringe? From the slope, find $$n - 1$$ of air at 101.3 kPa and 20 °C, and compare it with your prediction from Before the lab question 2. Compare also with $$n - 1$$ from the total count when the cell filled to room pressure.
4. Use your result from Analysis 3 to find $$n - 1$$ for air at 0 °C and 1 atm, and compare it with the textbook's 1.000293. (The textbook's value is for 589 nm light; air's index is only a little higher at shorter wavelengths.)
5. From Part 4, how many coloured fringes could you see on each side of the white one? Use that to estimate how close to equal the arms must be for white light fringes.

## Uncertainty

The counter counts whole fringes, and you stop at the first reading where it changes, so each micrometer reading is uncertain by about one 0.1 μm step. Estimate the uncertainty of $$\lambda$$ from a single reading at 200 fringes and compare it with the uncertainty of the slope from the fit. In Part 3, the gauge reads to 0.1 kPa; how does that compare with the change in pressure for one fringe? Which matters more for $$n - 1$$: the pressure readings or the count?

## Questions

1. The wavelength in the room's air is a little shorter than in vacuum. Which one does Part 1 measure, and does the difference (about 3 parts in 10 000) matter at your precision?
2. What is the compensator plate for? Why does it matter for white light but not for a laser?
3. With the sodium lamp, the rings fade and come back as M₁ moves. The two yellow lines are 588.995 nm and 589.592 nm. How far must the mirror move between one fading and the next? Check it in the demo with the Sodium doublet setup.
4. LIGO detects gravitational waves with Michelson interferometers whose arms are 4 km long. A passing wave changes the arm lengths by about $$10^{-18}$$ m. What fraction of a fringe is that for light of 1064 nm, and why does LIGO not count fringes?

## What to hand in

Prelab answers, the table copies with their graphs and fits, the wavelengths and $$n - 1$$ with uncertainties and comparisons, the Part 4 reading and description, and answers to the questions. Identify simulated data.
