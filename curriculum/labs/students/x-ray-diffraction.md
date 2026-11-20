# X-Ray Diffraction
Student laboratory · Physics II

Textbook: OpenStax *University Physics*, Vol. 3, §4.6 (and §8.5 for the X-ray lines). Access for free at https://openstax.org/details/books/university-physics-volume-3.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/electron-diffraction.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Using the demo.** This worksheet uses the X-rays view of the Electron Diffraction demo (the X-rays button above the picture).

- An X-ray tube run at 35 kV, with a copper or a molybdenum anode, sends a narrow beam onto a crystal of sodium chloride (NaCl) or lithium fluoride (LiF) on a turntable. The crystal is cut so that its face is parallel to its (200) planes.
- You turn the crystal to a glancing angle $$\theta$$ between 2° and 65°. The counter rides on an arm at $$2\theta$$, so it always sits where a ray reflected from the planes would go. It shows the count rate in counts per second.
- The graph traces the count rate against $$\theta$$ as you turn the crystal. Scan turns it from 2° to 65° on its own; Clear the graph starts a new trace.
- Record reading stores the tube, the crystal, $$\theta$$ and the count rate. Export to worksheet sends the readings to the Data table below; Clear starts a new series, which goes into a new copy of the table.

**What the demo models.** The peaks are at the exact Bragg angles of the Kα₁ and Kβ₁ lines of copper (0.15406 nm and 0.13923 nm) and molybdenum (0.07093 nm and 0.06323 nm), from the line energies of the X-ray Data Booklet, reflected by the (200) planes of NaCl and LiF in every order that fits. The heights of the peaks, their width (0.12°), how they fall with the order, the smooth background from the continuous spectrum and the steady background of 4 counts per second are illustrative, chosen to look like a teaching spectrometer. The weaker lines (Kα₂ among them) are left out, and the count rate shown is the expected rate; a real counter's counts scatter by about their square root. Simulated data.

</details>

## Goal

Use a crystal as a diffraction grating for X-rays: measure the angles at which the characteristic lines of an X-ray tube are reflected, find their wavelengths from a crystal of known spacing, and then use them to measure the spacing of another crystal.

## Background

X-rays are electromagnetic waves with wavelengths around 0.01 to 1 nm, about the spacing of atoms in a solid. In a crystal, the atoms lie on many sets of parallel planes. A wave reflected from one plane adds to the waves reflected from the planes below it only if the extra path, $$2d\sin\theta$$, is a whole number of wavelengths (§4.6):

$$2d\sin\theta = m\lambda, \qquad m = 1, 2, 3, \ldots$$

This is Bragg's law. Here $$d$$ is the spacing of the planes and $$\theta$$ the glancing angle between the beam and the planes, not the angle from the normal. The reflected beam leaves at $$2\theta$$ to the incident beam. For a fixed $$\lambda$$ and $$d$$, $$\sin\theta$$ is in proportion to the order $$m$$.

An X-ray tube gives a smooth spread of wavelengths (it starts at the shortest wavelength $$hc/eV$$) and, on top of it, sharp lines that are the anode metal's own: the stronger Kα line and the weaker, shorter Kβ line (§8.5). Each line is reflected at its own angle in each order, so a scan of $$\theta$$ shows pairs of peaks, Kβ at the smaller angle.

The (200) planes of NaCl are $$d = 0.2820$$ nm apart.

## Before the lab

1. Copper Kα X-rays have $$\lambda = 0.15406$$ nm. At what angles $$\theta$$ should they be reflected from NaCl's (200) planes, in each order? What is the highest order that can be seen, and why is there a highest one?
2. Why does the counter have to be at $$2\theta$$ when the crystal is at $$\theta$$?
3. Molybdenum Kα X-rays are about half the wavelength of copper's. Will their peaks come at larger or smaller angles, and will there be more orders or fewer?
4. The (200) planes of LiF are closer together than those of NaCl. Keeping the molybdenum tube, you change the crystal from NaCl to LiF. Will the first order Kα peak come at a larger angle, a smaller angle or the same angle, and will more orders or fewer fit below 65°? Why?

## Safety

Real X-ray sets are shielded and interlocked. Never open the shielding or defeat an interlock, and follow the radiation rules of your lab.

## Procedure

**Part 1: copper on NaCl.** Press X-rays above the picture, then Copper (Tube anode) and NaCl (Crystal) in the X-ray Bragg spectrometer section, and press Scan θ from 2° to 65° once to see the spectrum. Then, for each Kα peak, turn the crystal to the angle where the Count rate readout is highest and press Record reading there. Turn the crystal with the Crystal angle θ slider, or click the picture and use the left and right arrow keys (0.05° a press, 1° with Shift). Press Export to worksheet. Type the line, the order $$m$$ and $$\sin\theta$$ in the table.

**Part 2: molybdenum on NaCl.** Press Clear (Readings) and Clear the graph, press Molybdenum and scan again. Record a reading at the top of every Kα peak below 65°, send them and fill in the last three columns.

**Part 3: molybdenum on LiF.** Press Clear and Clear the graph, press LiF and scan again. Record a reading at the top of every Kα peak, send them and fill in the last three columns.

## Data

| Reading | Tube and crystal | Crystal angle $$\theta$$ (°) | Count rate (1/s) | Line | Order $$m$$ | $$\sin\theta$$ |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |
| | | | | | | |

Use one copy of the table for each part. Export fills the first four columns; type the line (Kα), the order $$m$$ and $$\sin\theta$$ yourself.

## Analysis

1. Graph $$\sin\theta$$ (vertical) against $$m$$ (horizontal) for the Part 1 copper Kα peaks and fit a straight line with a free intercept. Is it a straight line through the origin? From the slope $$\lambda/(2d)$$ and $$d = 0.2820$$ nm find the wavelength of copper Kα, and compare it with 0.15406 nm.
2. Graph the Part 2 peaks the same way and find the wavelength of molybdenum Kα. Compare it with the copper value: the energy of a K line grows roughly as the square of the atomic number (Moseley's law, §8.5). In the form the textbook gives, the Kα energy is in proportion to $$(Z - 1)^2$$; is your ratio of wavelengths close to $$(28/41)^2$$, for copper ($$Z = 29$$) and molybdenum ($$Z = 42$$)?
3. Graph the Part 3 peaks and, using your molybdenum Kα wavelength from Analysis 2, find the spacing $$d$$ of the (200) planes of LiF.

## Questions

1. Why is there no peak of any kind below about 3.6° with the NaCl crystal? (Hint: what is the shortest wavelength a 35 kV tube can make?)
2. In Part 2, at high orders the Kβ peak of one order comes between the Kα peaks of two others. How did you tell which peak was which?
3. From your Part 2 and Part 3 tables, give the first order Kα angle and the number of Kα peaks on NaCl and on LiF. Did LiF do what you expected in Before the lab 4? Use Bragg's law to explain how the spacing of the planes sets the angles and the number of orders for the same wavelength.

## Uncertainty

For courses that treat measurement uncertainty. This section is not counted in the 75 minutes; do it when your instructor assigns it.
{: .ws-assigned}

The crystal angle is set in steps of 0.05°, and each peak is about 0.3° wide. Estimate how well you can find the top of a peak, and propagate that into $$\sin\theta$$ for a low order and a high order peak. Which orders give the wavelength most precisely, and why? Use the standard error of the slope to give each wavelength and $$d$$ with an uncertainty.

## What to hand in

Prelab answers, the three table copies with their graphs and fits, the wavelengths of copper Kα and molybdenum Kα and the spacing of LiF with their comparisons, and answers to the questions (and to Uncertainty, if assigned). Identify simulated data.
