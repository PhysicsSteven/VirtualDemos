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
4. You graph $$\sin\theta$$ against $$m$$ for one line. What should the slope be?

## Safety

Real X-ray sets are shielded and interlocked. Never open the shielding or defeat an interlock, and follow the radiation rules of your lab.

## Procedure

**Part 1: copper on NaCl.** Switch the demo to X-rays with the copper tube and the NaCl crystal, and scan the whole range once to see the spectrum. Then, for each Kα peak, turn the crystal to the angle where the count rate is highest and record a reading there. Send the readings to the worksheet. Clear, record a reading at the top of each Kβ peak the same way, and send them; they go into a new copy of the table. In both copies, type the line, the order $$m$$ and $$\sin\theta$$.

**Part 2: molybdenum on NaCl.** Clear the readings and the graph, change to the molybdenum tube and scan again. Record a reading at the top of every Kα peak below 65°, send them and fill in the last three columns.

**Part 3: molybdenum on LiF.** Clear the readings and the graph, change to the LiF crystal and scan again. Record a reading at the top of every Kα peak, send them and fill in the last three columns.

## Data

| Reading | Tube and crystal | Crystal angle $$\theta$$ (°) | Count rate (1/s) | Line | Order $$m$$ | $$\sin\theta$$ |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |
| | | | | | | |

Use one copy of the table for each line in each part.

## Analysis

1. Graph $$\sin\theta$$ against $$m$$ for the Part 1 copper Kα peaks. Is it a straight line through the origin? From the slope $$\lambda/(2d)$$ and $$d = 0.2820$$ nm find the wavelength of copper Kα, and compare it with 0.15406 nm.
2. Do the same for the copper Kβ peaks. What is the ratio of the two wavelengths?
3. Graph the Part 2 peaks the same way and find the wavelength of molybdenum Kα. Compare it with the copper value: the energy of a K line grows roughly as the square of the atomic number (Moseley's law, §8.5). In the form the textbook gives, the Kα energy is in proportion to $$(Z - 1)^2$$; is your ratio of wavelengths close to $$(28/41)^2$$, for copper ($$Z = 29$$) and molybdenum ($$Z = 42$$)?
4. Graph the Part 3 peaks and, using your molybdenum Kα wavelength from Analysis 3, find the spacing $$d$$ of the (200) planes of LiF.
5. LiF has the same cubic structure as NaCl, with the (200) spacing equal to half the cube edge $$a$$. Find $$a$$ for LiF and for NaCl. Which crystal has the smaller ions?

## Uncertainty

The crystal angle is set in steps of 0.05°, and each peak is about 0.3° wide. Estimate how well you can find the top of a peak, and propagate that into $$\sin\theta$$ for a low order and a high order peak. Which orders give the wavelength most precisely, and why? Use the standard error of the slope to give each wavelength and $$d$$ with an uncertainty.

## Questions

1. Why is there no peak of any kind below about 3.6° with the NaCl crystal? (Hint: what is the shortest wavelength a 35 kV tube can make?)
2. Why can visible light not be used to find the spacing of atoms in a crystal?
3. In Part 2, at high orders the Kβ peak of one order comes between the Kα peaks of two others. How did you tell which peak was which?
4. The electron diffraction tube on the other view uses electrons at a few kilovolts. Find the voltage at which an electron's wavelength equals that of copper Kα. Why can both electrons and X-rays be diffracted by the same crystals?

## What to hand in

Prelab answers, the four table copies with their graphs and fits, the wavelengths of copper Kα and Kβ and molybdenum Kα, the spacing of LiF and the cube edges, with uncertainties and comparisons, and answers to the questions. Identify simulated data.
