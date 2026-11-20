# Electron Diffraction and de Broglie Waves
Student laboratory · Physics II and Modern Physics

Textbook: OpenStax *University Physics*, Vol. 3, §6.5 (and §4.6). Access for free at https://openstax.org/details/books/university-physics-volume-3.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/electron-diffraction.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Low voltage, big rings; Raise the voltage; Two rings, two spacings; Is it the electrons?; Measure the spacings; Why only two rings.

**Using the demo.**

- A teaching electron diffraction tube: an electron gun, a thin film of graphite crystals at the end of the anode, and a fluorescent screen on the inside of a glass bulb. You set the accelerating voltage (2 to 5 kV) and read it on the kV meter, which jitters by a few volts like a real one.
- Two rings appear. Ruler lays a flexible ruler on the glass through the central spot; it reads the arc across a ring to 0.5 mm. Caliper holds a vernier caliper in front of the screen; it reads the straight chord to 0.1 mm. Pick the ring (inner $$D_1$$ or outer $$D_2$$) and drag the two marks or jaws onto the middle of the glowing band on each side.
- A bar magnet can be held near the neck of the tube, with either pole facing it.
- Record reading stores the meter reading and your $$D_1$$ and $$D_2$$, with the tool. Export to worksheet sends the readings to the Data table below; Clear starts a new series, which goes into a new copy of the table. Blind hides the wavelength worked out from the meter reading, the accepted spacings, the true ring positions and the angles. Tube seed fixes the small simulated imperfections, so a class can share one tube.
- The X-rays button turns the demo into an X-ray spectrometer, used in the X-Ray Diffraction worksheet.

**What the demo models.** The tube follows the maker's data sheet of a common teaching tube: graphite spacings 0.213 nm and 0.123 nm, graphite to screen $$L = 125$$ mm, bulb radius $$R = 65$$ mm. The wavelength is $$\lambda = h/p$$ with the relativistic momentum, and each ring is where the cone of electrons Bragg reflected at $$2\theta$$ meets the spherical screen, found exactly. The ring widths and brightness, the small tilt and slow wander of the beam, the meter jitter and the magnet's effect are modeled, not computed from first principles. Simulated data.

</details>

## Goal

Show that electrons are diffracted like waves, and use the known spacings of the planes of atoms in graphite as a ruler to measure the electron's wavelength at each voltage. Then test de Broglie's relation $$\lambda = h/p$$ against your measurements, and find Planck's constant from them.

## Background

De Broglie proposed that a particle of momentum $$p$$ has a wavelength $$\lambda = h/p$$ (§6.5). An electron accelerated from rest through a voltage $$V$$ has kinetic energy $$eV$$, so $$p = \sqrt{2meV}$$ and

$$\lambda = \frac{h}{\sqrt{2meV} }, \qquad \text{or, with the small relativistic correction,} \qquad \lambda = \frac{h}{\sqrt{2meV\left(1 + \dfrac{eV}{2mc^2}\right)} }.$$

A crystal reflects a wave strongly from a set of parallel planes of atoms a distance $$d$$ apart only when Bragg's law holds (§4.6):

$$2d\sin\theta = m\lambda,$$

where $$\theta$$ is the glancing angle between the beam and the planes. The reflected beam leaves at $$2\theta$$ to the incident beam. The graphite film is made of many tiny crystals turned every way, so the reflected electrons leave on a cone around the beam and make a ring on the screen. Each ring comes from a different spacing $$d$$ (first order, $$m = 1$$).

For small angles, a ring of diameter $$D$$ on a screen a distance $$L$$ from the graphite has $$\tan 2\theta = D/(2L)$$, and with $$\sin\theta \approx \theta$$ and $$\tan 2\theta \approx 2\theta$$,

$$D \approx \frac{2L}{d}\,\lambda, \qquad \text{so} \qquad \lambda \approx \frac{d\,D}{2L}.$$

On this tube's spherical screen, a diameter measured as the arc along the glass follows this line to within 0.2 %. The spacings are known from X-ray diffraction: graphite is made of flat sheets of hexagonal rings of carbon with $$a = 0.246$$ nm, and the two rings come from rows of atoms $$d_1 = a\sqrt{3}/2 = 0.213$$ nm and $$d_2 = a/2 = 0.123$$ nm apart. A measured $$D$$ therefore gives the electron's wavelength.

If de Broglie is right, then (without the small relativistic correction) $$\lambda = \dfrac{h}{\sqrt{2me} }\,\dfrac{1}{\sqrt{V} }$$: a graph of $$\lambda$$ against $$1/\sqrt{V}$$ is a straight line through the origin with slope $$h/\sqrt{2me}$$.

## Before the lab

1. Find the electron wavelength at 2.50 kV and at 5.00 kV, with and without the relativistic correction. By what percentage does the correction change $$\lambda$$?
2. Predict both ring diameters at 2.50 kV from the small angle formula and the spacings above.
3. As the voltage rises from 2.50 kV to 5.00 kV, each electron reaches the graphite with twice the kinetic energy. Should the rings grow, shrink or stay the same size? By what factor should $$D$$ change, and why?

## Safety

A real tube runs at several kilovolts and has a thin, evacuated glass bulb. Change connections only with the supply off, keep the heater within its rating, and do not press measuring tools on the glass.

## Procedure

**Part 1: ring diameters with the ruler.** Open Instrument (in the side panel), write down the Tube seed and tick Blind there. Keep the magnet away: leave its Distance from the beam slider at 120 mm. Press Ruler above the picture. For each Accelerating voltage of 2.50, 3.00, 4.00 and 5.00 kV (the slider moves 0.01 kV a step; drag close, then use the arrow keys): (1) press Inner D₁ and drag the two marks onto the middle of the glowing band on each side of the central spot; (2) press Outer D₂ and do the same for the outer ring; (3) check the Your D₁ and Your D₂ readouts under Measuring the rings and press Record reading, which also stores the kV meter reading. Press Export to worksheet after the fourth reading.

**Part 2: the magnet.** Set 4.00 kV. Move the Distance from the beam slider to 40 mm with N pressed under Pole facing the neck, and note how the pattern moves. Press S and note it again. Then, with the magnet still at 40 mm, change to 2.50 kV and note whether the pattern moves more or less than at 4.00 kV. Set the magnet back to 120 mm before measuring again.

## Data

| Reading | Tool | Meter reading $$V$$ (kV) | $$D_1$$ (mm) | $$D_2$$ (mm) | $$\lambda_1 = d_1D_1/2L$$ (pm) | $$\lambda_2 = d_2D_2/2L$$ (pm) | $$1/\sqrt{V}$$ (kV$$^{-1/2}$$) |
|---|---|---|---|---|---|---|---|
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |

Export fills the first five columns; you fill in the last three in Analysis 1. Record the tube seed, and $$L = 125$$ mm and $$R = 65$$ mm, in the notes.

## Analysis

1. Fill in the last three columns for every Part 1 row: the wavelength from each ring, $$\lambda_1 = d_1D_1/(2L)$$ and $$\lambda_2 = d_2D_2/(2L)$$, and $$1/\sqrt{V}$$. Do the two rings give the same wavelength at each voltage? Should they?
2. For the 2.50 and 5.00 kV rows of Part 1 (the wavelengths you found in Before the lab 1), compare the de Broglie wavelength $$h/p$$ with the relativistic correction, and find the percentage difference of $$\lambda_1$$ and $$\lambda_2$$ from it. Which ring gives the closer wavelengths, and why might it? This version takes the spacings $$d_1$$ and $$d_2$$ as known and tests $$\lambda = h/p$$; the in lab version runs the other way, taking $$\lambda = h/p$$ as known and measuring the spacings. What does each version assume?
3. Graph $$\lambda_2$$ (vertical) against $$1/\sqrt{V}$$ (horizontal) for Part 1. Is it a straight line through the origin? From the slope, $$h/\sqrt{2me}$$, find Planck's constant (convert the slope to m V$$^{1/2}$$ first). Your points are far from the origin, so the slope of a line with a free intercept is sensitive to small reading errors: also find $$h = \lambda_2\sqrt{2meV}$$ for each row and take the mean. Compare both with the accepted $$h = 6.626 \times 10^{-34}$$ J s.
4. Describe your Part 2 observations. What do they show about the particles that make the rings?

## Questions

1. The spacing between the graphite sheets is 0.335 nm, yet no ring for it appears. Why? (Try the Why only two rings setup.)
2. How did $$D_1$$ and $$D_2$$ change from 2.50 to 5.00 kV in Part 1, and was that your answer to Before the lab 3? Account for the change, and its factor, with de Broglie's relation and Bragg's law.

## Uncertainty

For courses that treat measurement uncertainty. This section is not counted in the 75 minutes; do it when your instructor assigns it.
{: .ws-assigned}

Each ring is a band about 1.5 mm wide, so placing a mark on its middle is uncertain by a few tenths of a millimeter, and the ruler reads to 0.5 mm. Estimate the uncertainty of one diameter, and compare it with the scatter of your points about the line. What uncertainty does that give one wavelength? Give $$h$$ with uncertainties, from the standard error of the slope and from the spread of the row by row values (standard deviation divided by $$\sqrt{n}$$); which is smaller, and why? Does the accepted value lie within your uncertainty?

## What to hand in

Prelab answers, the tube seed, the table with its wavelengths, the comparison with $$h/p$$, the graph and fit, Planck's constant and comparisons, the magnet observations, and answers to the questions (and to Uncertainty, if assigned). Identify simulated data.
