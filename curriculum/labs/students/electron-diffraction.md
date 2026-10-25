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
- Capture reading stores the meter reading and your $$D_1$$ and $$D_2$$, with the tool. Export to worksheet sends the readings, and the wavelength $$\lambda$$ worked out from each meter reading, to the Data table below; Clear starts a new series, which goes into a new copy of the table. Blind hides the accepted spacings, the true ring positions and the angles. Tube seed fixes the small simulated imperfections, so a class can share one tube.
- The X-rays button turns the demo into an X-ray spectrometer, used in the X-Ray Diffraction worksheet.

**What the demo models.** The tube follows the maker's data sheet of a common teaching tube: graphite spacings 0.213 nm and 0.123 nm, graphite to screen $$L = 125$$ mm, bulb radius $$R = 65$$ mm. The wavelength is $$\lambda = h/p$$ with the relativistic momentum, and each ring is where the cone of electrons Bragg reflected at $$2\theta$$ meets the spherical screen, found exactly. The ring widths and brightness, the small tilt and slow wander of the beam, the meter jitter and the magnet's effect are modeled, not computed from first principles. Simulated data.

</details>

## Goal

Show that electrons are diffracted like waves, measure how the ring size depends on the accelerating voltage, and use de Broglie's relation $$\lambda = h/p$$ to find the spacings of the planes of atoms in graphite.

## Background

De Broglie proposed that a particle of momentum $$p$$ has a wavelength $$\lambda = h/p$$ (§6.5). An electron accelerated from rest through a voltage $$V$$ has kinetic energy $$eV$$, so $$p = \sqrt{2meV}$$ and

$$\lambda = \frac{h}{\sqrt{2meV} }, \qquad \text{or, with the small relativistic correction,} \qquad \lambda = \frac{h}{\sqrt{2meV\left(1 + \dfrac{eV}{2mc^2}\right)} }.$$

A crystal reflects a wave strongly from a set of parallel planes of atoms a distance $$d$$ apart only when Bragg's law holds (§4.6):

$$2d\sin\theta = m\lambda,$$

where $$\theta$$ is the glancing angle between the beam and the planes. The reflected beam leaves at $$2\theta$$ to the incident beam. The graphite film is made of many tiny crystals turned every way, so the reflected electrons leave on a cone around the beam and make a ring on the screen. Each ring comes from a different spacing $$d$$ (first order, $$m = 1$$).

For small angles, a ring of diameter $$D$$ on a screen a distance $$L$$ from the graphite has $$\tan 2\theta = D/(2L)$$, and with $$\sin\theta \approx \theta$$ and $$\tan 2\theta \approx 2\theta$$,

$$D \approx \frac{2L}{d}\,\lambda.$$

On this tube's spherical screen, a diameter measured as the arc along the glass follows this line to within 0.2 %.

## Before the lab

1. Find the electron wavelength at 2.50 kV and at 5.00 kV, with and without the relativistic correction. By what percentage does the correction change $$\lambda$$?
2. As the voltage rises, should the rings grow or shrink? By what factor should $$D$$ change from 2.5 kV to 5.0 kV?
3. Why does a film of many small crystals turned every way give rings rather than spots?
4. If the magnet moves the whole pattern, what does that tell you about what makes the rings? Would X-rays be moved?

## Safety

A real tube runs at several kilovolts and has a thin, evacuated glass bulb. Change connections only with the supply off, keep the heater within its rating, and do not press measuring tools on the glass.

## Procedure

**Part 1: ring diameters with the ruler.** Write down the tube seed and turn on Blind. Keep the magnet away. Using the ruler, measure both ring diameters at 2.50, 3.00, 3.50, 4.00, 4.50 and 5.00 kV, putting each mark on the middle of the glowing band, and capture a reading at each voltage. Send the six readings to the worksheet.

**Part 2: the caliper.** Clear the readings. Measure both rings with the caliper at 2.50, 3.50 and 5.00 kV and capture a reading at each. Send them; they go into a new copy of the table.

**Part 3: the magnet.** At 4.00 kV bring the magnet to 40 mm from the neck with the N pole facing it, then turn it to the S pole, then try 4.00 kV against 2.50 kV. Describe what happens to the pattern each time, and take the magnet away before measuring again.

## Data

| Reading | Tool | Meter reading $$V$$ (kV) | Wavelength $$\lambda$$ (pm) | $$D_1$$ (mm) | $$D_2$$ (mm) |
|---|---|---|---|---|---|
| | | | | | |
| | | | | | |
| | | | | | |

Record the tube seed, and $$L = 125$$ mm and $$R = 65$$ mm, in the notes.

## Analysis

1. Check one row's wavelength against your own calculation from the meter reading.
2. Graph $$D_1$$ against $$\lambda$$ for the Part 1 readings. Is it a straight line through the origin? From the slope $$2L/d_1$$ find $$d_1$$. Your points are far from the origin, so the slope of a line with a free intercept is sensitive to small reading errors: also find $$d_1 = 2L\lambda/D_1$$ for each row and take the mean, and compare the two results.
3. Graph $$D_2$$ against $$\lambda$$ and find $$d_2$$ the same two ways. Compare both spacings with the graphite values from the textbook or the demo's Model section, and find the ratio $$d_1/d_2$$. In a sheet of hexagonal rings the two spacings are $$a\sqrt{3}/2$$ and $$a/2$$; does your ratio agree with $$\sqrt{3}$$?
4. For one Part 1 reading, find $$d_1$$ the exact way: on the spherical screen an arc $$D$$ is the angle $$\alpha = D/(2R)$$ at the center of the bulb, the graphite is $$L - R = 60$$ mm behind the center, so the scattering angle $$\psi = 2\theta$$ satisfies $$\tan\psi = R\sin\alpha/(R\cos\alpha + L - R)$$; then $$d = \lambda/(2\sin\theta)$$. How different is it from the small angle result?
5. Find $$d_1$$ and $$d_2$$ from the Part 2 caliper readings with the small angle formula, row by row. Are they high or low compared with Part 1, and why does a straight chord across a curved screen do that?
6. Describe your Part 3 observations. What do they show about the particles that make the rings?

## Uncertainty

Each ring is a band about 1.5 mm wide, so placing a mark on its middle is uncertain by a few tenths of a millimeter, and the ruler reads to 0.5 mm. Estimate the uncertainty of one diameter, and compare it with the scatter of your points about the line. Give $$d_1$$ and $$d_2$$ with uncertainties, from the standard error of the slope and from the spread of the row by row values (standard deviation divided by $$\sqrt{n}$$); which is smaller, and why? An error in $$L$$ affects every reading the same way: if $$L$$ were 130 mm instead of 125 mm, how would your $$d$$ values change? Can more readings reduce that error?

## Questions

1. Why do faster electrons give smaller rings?
2. The spacing between the graphite sheets is 0.335 nm, yet no ring for it appears. Why? (Try the Why only two rings setup.)
3. What accelerating voltage gives electrons the wavelength of Cu Kα X-rays, 0.154 nm? Would the rings be larger or smaller than at 5 kV?
4. A 1 g marble rolling at 1 m/s has a de Broglie wavelength. Find it, and explain why we never see a marble diffract.

## What to hand in

Prelab answers, the tube seed, both table copies with their graphs and fits, $$d_1$$, $$d_2$$ and their ratio with uncertainties and comparisons, the exact calculation for one reading, the magnet observations, and answers to the questions. Identify simulated data.
