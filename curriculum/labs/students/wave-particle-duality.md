# Wave and Particle: Electrons Through Two Slits
Student laboratory · Modern Physics

Textbook: OpenStax *University Physics*, Vol. 3, §§6.5 and 6.6 (with §§3.1 and 5.8). Access for free at https://openstax.org/details/books/university-physics-volume-3.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/double-slit.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Light, red laser; Electrons (Jönsson 1961 style); Buckyballs (Arndt 1999 style, grating); One slit; Which slit detector on.

**Using the demo.**

- A source sends electrons (or photons, or C₆₀ molecules) one at a time through two slits of width $$a$$ whose centers are $$d$$ apart. Each one is detected at a single point on a screen a distance $$L$$ away, and the histogram beside the screen counts the hits along $$y$$.
- Electrons are accelerated through a voltage $$V$$ from 10 V to 200 kV. C₆₀ molecules leave an oven at a speed $$v$$ from 50 to 500 m/s. Any change clears the screen; Fit sets the screen range to suit the new pattern.
- The which slit detector records, for a fraction $$\eta$$ of the particles (its efficiency), which slit the particle passed. It does nothing else to the particle.
- Measure turns on two cursors, A and B, with their difference $$B - A$$. Record reading stores the setup, the cursor positions and the number of hits within a narrow window around each cursor (1/200 of the screen range; the window width is stored too). Export to worksheet sends the readings to the Data table below; Clear (under Readings) starts a new series, which goes into a new copy of the table.
- Blind (in the particle section) hides the de Broglie wavelength, the speed, the momentum and the predicted pattern.

**What the demo models.** The pattern on the screen is the paraxial Fresnel calculation for a plane wave of the particle's de Broglie wavelength, with the relativistic momentum for electrons. Each hit is drawn at random from that pattern, so the counts have the scatter of real counting data. The slits are drawn enlarged, and the electron screen shows the pattern before the magnification a real experiment would need. Simulated data.

</details>

## Goal

Show that electrons, sent through two slits one at a time, build up an interference pattern; measure their wavelength from the fringes and test de Broglie's $$\lambda = h/p$$; and find how the fringes fade when the apparatus records which slit each electron took.

## Background

De Broglie proposed in 1924 that every particle of momentum $$p$$ has a wavelength (§6.5)

$$\lambda = \frac{h}{p} .$$

An electron accelerated from rest through a voltage $$V$$ has kinetic energy $$K = eV$$, and its relativistic momentum (§5.8) follows from $$(pc)^2 = K^2 + 2Kmc^2$$, with $$mc^2 = 511.00$$ keV. So $$\lambda = hc/(pc)$$, and a graph of $$\lambda$$ against $$1/(pc)$$ is a straight line through the origin with slope $$hc = 1.23984$$ MeV·pm.

Through two slits the waves from the slits cancel where their paths differ by a half number of wavelengths, so the dark fringes are at $$y = (m + \tfrac{1}{2})\lambda L/d$$, evenly spaced by $$\Delta y = \lambda L/d$$ (§3.1). The dark fringes are the better ones to measure: the single slit envelope pulls each bright fringe slightly toward the center, but it cannot move a zero of the two slit factor. Measuring across $$n$$ spacings gives

$$\lambda = \frac{d\,(B - A)}{nL} .$$

With $$d$$ and $$B - A$$ in micrometers and $$L$$ in meters, this gives $$\lambda$$ in picometers.

Each electron lands at one point, like a particle; the pattern of many landings is a wave pattern (§6.6). If a detector records which slit an electron took, that electron lands according to the single slit pattern of its slit, with no fringes. When the detector catches a fraction $$\eta$$ of the electrons, the screen shows $$\eta(I_1 + I_2) + (1 - \eta)I_{12}$$. The fringe contrast between a bright fringe with $$N_\mathrm{max}$$ hits and a dark one with $$N_\mathrm{min}$$ hits is

$$\mathcal{V} = \frac{N_\mathrm{max} - N_\mathrm{min}}{N_\mathrm{max} + N_\mathrm{min}} ,$$

which is 1 for perfect fringes, 0 for none, and is expected to fall as $$1 - \eta$$.

## Before the lab

1. Find $$pc$$ and $$\lambda$$ for an electron accelerated through 50 kV, with the relativistic formula and without it ($$pc = \sqrt{2Kmc^2}$$). By what percentage do they differ?
2. For that electron with $$d = 1.00$$ µm and $$L = 0.350$$ m, find the spacing of the fringes. Why did Jönsson need electron lenses to see them?
3. Find the de Broglie wavelength of a C₆₀ molecule (mass 720 u, with 1 u = 1.66054 × 10⁻²⁷ kg) moving at 220 m/s.
4. Predict the fringe contrast when the detector records 40% of the electrons.

## Safety

None for the virtual apparatus. Real electron diffraction tubes run at several kilovolts and give off X-rays when the beam hits metal: keep the shielding in place.

## Procedure

Turn Blind on before you start.

**Building up the pattern.** Start with the Electrons setup and fire electrons one at a time, then slowly. Write down how many hits it takes before you can see fringes.

**Wavelength against voltage.** Keep $$a = 0.20$$ µm, $$d = 1.00$$ µm and $$L = 0.35$$ m. Measure at accelerating voltages of 5, 10, 20, 50, 100 and 200 kV. At each one fit the screen range, let at least 20 000 electrons land, put cursor A on the dark fringe between bright fringes −2 and −3 and cursor B on the dark fringe between +2 and +3 (5 spacings apart), and record a reading. Send these to the worksheet.

**Which slit.** Clear the readings and choose the Which slit detector on setup. Put cursor A on the middle of the central bright fringe and cursor B on the first dark fringe beside it. Set the efficiency $$\eta$$ to 0%, clear the screen, let 50 000 electrons land and record. Do the same at 20, 40, 60, 80 and 100%, clearing the screen each time. Send these to a new copy of the table.

**Molecules.** Clear the readings and choose the Buckyballs setup. Let 20 000 molecules land, put the cursors on the two dark fringes on either side of the central bright fringe (1 spacing apart), and record. (Bright fringe 2 is missing, so the screen is dark over a wide band beyond fringe 1; that band is no good for measuring.) Send it to a third copy of the table.

## Data

| Reading | Setup | Voltage V (kV) | Detector η (%) | B − A (µm) | Hits at A | Hits at B | Wavelength λ (pm) | 1/(pc) (1/MeV) | Contrast |
|---|---|---|---|---|---|---|---|---|---|
| | | | | | | | | | |
| | | | | | | | | | |
| | | | | | | | | | |

## Analysis

1. For each voltage find $$\lambda$$ from $$B - A$$ and $$pc$$ from $$V$$. Graph $$\lambda$$ against $$1/(pc)$$ and fit a straight line. Compare the slope with $$hc$$ and the intercept with zero.
2. Find $$\lambda$$ at 200 kV from the nonrelativistic momentum as well. Which agrees with your measurement?
3. For the which slit run, find the contrast at each $$\eta$$ and graph it against $$\eta$$. Give the slope and the intercept and compare them with $$1 - \eta$$.
4. Why is the contrast at $$\eta = 0$$ a little below 1?
5. Find $$\lambda$$ for C₆₀ from your reading and compare it with $$h/mv$$.

## Uncertainty

A count $$N$$ fluctuates by about $$\sqrt{N}$$. Estimate the uncertainty of your contrast at $$\eta = 0.6$$ and compare it with the scatter of your points about the line. For the wavelengths, how far could you move a cursor before it is clearly off the dark fringe, and what uncertainty does that put on $$\lambda$$?

## Questions

1. The first few dozen electrons seem to land at random. In what sense is each electron's landing random, and what is not random?
2. Only one electron is in the apparatus at a time. What is it interfering with?
3. The detector does nothing to the electron except record which slit it passed. Why does that alone destroy the fringes?
4. Why are the fringes of C₆₀ so much harder to see in a real experiment than those of electrons, and why did Arndt and colleagues need molecules that moved slowly?
5. Light behaves the same way, one photon at a time. What does the experiment say about the question "is an electron a wave or a particle?"

## What to hand in

Prelab answers, the number of hits it took to see fringes, the table copies with their graphs and fits, the slope of $$\lambda$$ against $$1/(pc)$$ with its uncertainty, the contrast fit, the C₆₀ wavelength, and answers to the questions. Identify simulated data.
