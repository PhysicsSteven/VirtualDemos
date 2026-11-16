# Thin Film Interference
Student laboratory · Physics II

Textbook: OpenStax *University Physics*, Vol. 3, §3.4 (with §1.2 and §3.1). Access for free at https://openstax.org/details/books/university-physics-volume-3.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/thin-films.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Two reflections; Soap bubble colors; Black film; Air wedge fringes; Anti reflection coating; Oil on water.

**Using the demo.**

- A film of index $$n_f$$ and thickness $$t$$ sits between a medium of index $$n_1$$ above (the light comes from there) and $$n_2$$ below. You set the three indices, the thickness, the angle of incidence $$\theta_1$$, the polarization and one wavelength $$\lambda_0$$ (in vacuum), from 380 to 780 nm.
- Four views. Rays draws the two reflected rays and their waves (the film is drawn far thicker than scale); you can drag the bottom surface to change $$t$$. Soap film, Wedge and Newton's rings show a film whose thickness changes from place to place, in white light or in the one wavelength $$\lambda_0$$; a probe line reads the thickness where you put it, and the Wedge view also gives the probe's distance $$x$$ from the edge where the slides touch.
- The readouts give the reflectance $$R$$ at $$\lambda_0$$ for the film (at the probe in the pattern views), the phase shift at each surface, and below the drawing the whole spectrum $$R(\lambda)$$.
- Blind (in the Lab section) hides what the demo works out for you: the ray lag, the brightest and darkest wavelengths, the condition for bright and dark, the quarter wave thickness and its reflectance, the fringe spacing and the ring radii. $$R$$, $$t$$ and the probe stay.
- Record reading stores $$\lambda_0$$, $$t$$, $$R$$ and the settings (and $$x$$ in the Wedge view). Export to worksheet sends the readings to the Data table below; Clear starts a new series, which goes into a new copy of the table.

**What the demo models.** The reflectance is the exact single layer (Airy) result: every reflection inside the film is added, with the Fresnel coefficients of the two surfaces. The indices are the same at every wavelength (no dispersion) and nothing absorbs light. A wave reflecting toward a medium of lower index is not shifted; one reflecting from a medium of higher index is shifted by half a cycle (§3.4). Simulated data.

</details>

## Goal

Find the thinnest film that reflects a wavelength most strongly and the thinnest coating that reflects it least, see how those thicknesses follow the wavelength and the phase shifts at the two surfaces, and use the fringes of an air wedge to measure a thickness far smaller than a ruler can.

## Background

Light reflected from the top of a film and light reflected from the bottom travel different distances. At normal incidence the second wave goes down through the film and back, an extra path $$2t$$ in a medium where the wavelength is $$\lambda_n = \lambda_0/n_f$$ (§1.2). Each reflection from a medium of higher index adds a phase shift of half a wavelength; a reflection from a medium of lower index adds none.

If exactly one of the two reflections is shifted (a soap film in air, or an air gap between glass slides), the two waves add when

$$2t = \left(m + \tfrac{1}{2}\right)\frac{\lambda_0}{n_f}, \qquad m = 0, 1, 2, \ldots$$

and cancel when $$2t = m\lambda_0/n_f$$. If both are shifted, or neither, the conditions swap: they cancel when $$2t = \left(m + \tfrac{1}{2}\right)\lambda_0/n_f$$ and add when $$2t = m\lambda_0/n_f$$. So the thinnest film that reflects most strongly in the first case is a quarter wave thick, $$t = \lambda_0/(4n_f)$$, and the thinnest film (other than zero) that cancels the reflection is half a wave thick, $$t = \lambda_0/(2n_f)$$.

Two flat glass slides touching at one edge and held apart by a spacer of thickness $$h$$ at a distance $$L$$ make an air wedge with gap $$t = xh/L$$ at a distance $$x$$ from the edge. Each dark fringe has half a wavelength more gap than the one before, so the fringes are evenly spaced,

$$\Delta x = \frac{\lambda_0 L}{2 n_f h}.$$

## Before the lab

1. Light in air falls on a soap film ($$n_f = 1.33$$) with air behind it. Which of the two reflections is shifted by half a wavelength? Write the conditions for strong and weak reflection.
2. Predict the thinnest soap film that reflects 550 nm light most strongly.
3. A magnesium fluoride coating ($$n_f = 1.38$$) is put on glass ($$n = 1.52$$). Which reflections are shifted now? Predict the thinnest coating that reflects 550 nm light least.
4. Just before a soap bubble bursts, its film is only about 10 nm thick, far thinner than the wavelength of light. Does a 10 nm soap film in air reflect 550 nm light more strongly than the film you found in Before the lab 2, about as strongly, or much less? Why?

## Safety

This is a virtual activity. With a real lamp and soap films, keep soap solution away from the eyes and electrical equipment, and do not look straight into a bright lamp.

## Procedure

Set the wavelength with the Wavelength λ₀ slider (One wavelength section, 1 nm steps). Set the thickness with the Film thickness t slider, or click the picture and press the up and down arrow keys (1 nm a press, 10 nm with Shift). Read the reflectance from the R, all reflections readout. Press Record reading for each reading, Export to worksheet at the end of each part, and Clear before the next. Before Part 1, tick **Blind: hide predictions and answers** (in the Lab section) and keep it ticked for the whole lab: it hides the brightest and darkest wavelengths, the quarter wave thickness and the fringe spacing, which are what you are finding.

**Part 1: soap film, strongest reflection.** Start from the Black film setup: a soap film in air, light at normal incidence, unpolarized. It opens with the film 10 nm thick and $$\lambda_0$$ at 550 nm: before you change anything, read R, all reflections and write it in your answer to Question 1 (press Black film again if you already have). Then, for each wavelength $$\lambda_0$$ = 400, 500, 600 and 700 nm, start from a very thin film and thicken it slowly until the reflectance $$R$$ at $$\lambda_0$$ is as large as it gets (the first maximum), and record a reading there. Send the four readings to the worksheet.

**Part 2: anti reflection coating.** Clear the readings and pick the Anti reflection coating setup (magnesium fluoride on glass, normal incidence). Set $$\lambda_0$$ = 550 nm, find the thinnest coating at which $$R$$ is least, record a reading there and send it. Then, keeping that thickness, write down $$R$$ at 450 nm and at 650 nm (no need to record them), and the reflectance of bare glass, the R with no film, normal incidence readout in the Anti reflection coating section.

**Part 3: air wedge.** Clear the readings and pick the Air wedge fringes setup (sodium light, 589 nm, spacer 10.0 μm, slides 50 mm long). Put the probe line on the edge where the slides touch ($$x$$ = 0) and record a reading, then move it to the middle of each dark fringe in turn (where $$R$$ is least, in the readouts under Pattern). Drag the probe line, or click the picture and use the up and down arrow keys (each press adds 10 nm of gap) and record a reading at each, up to the eighth dark fringe. Send them, and type the order $$m$$ of each fringe (0 at the edge) into the last column.

## Data

| Reading | Setup | $$\lambda_0$$ (nm) | Thickness $$t$$ (nm) | Reflectance $$R$$ (%) | Probe $$x$$ (mm) | Order $$m$$ |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |
| | | | | | | |

Use one copy of the table for each part. In the notes for Part 2, write down the reflectance of bare glass and the coating's reflectance at 450 and 650 nm.

## Analysis

1. Graph the Part 1 thickness $$t$$ (vertical) against $$\lambda_0$$ (horizontal) and fit a straight line with a free intercept. Is it a straight line through the origin? From the slope find $$n_f$$ and compare it with 1.33.
2. From your Part 2 thickness at 550 nm, find the index of the coating, $$n_f = \lambda_0/(4t)$$, and compare it with 1.38. The soap film's strongest reflection and the coating's weakest both come at a quarter wave. Explain, using the phase shifts, why the same thickness does opposite things.
3. Compare the coating's reflectance at 550 nm with the bare glass, and with the formula $$R = \left[(n_1 n_2 - n_f^2)/(n_1 n_2 + n_f^2)\right]^2$$. Use your readings at 450 and 650 nm to explain why coated lenses look faintly purple.
4. Graph the Part 3 probe position $$x$$ (vertical) against the order $$m$$ (horizontal), with the edge reading as $$m$$ = 0, and fit a straight line. From the slope (the fringe spacing $$\Delta x$$) find the spacer thickness $$h$$, and compare it with 10.0 μm.

## Uncertainty

For the wedge, the probe reads to 0.01 mm; estimate how well you can find the middle of a dark fringe, and propagate that into $$h$$. Why does a fit over nine fringes give a better $$h$$ than one fringe spacing?

## Questions

1. How did the reflectance of the 10 nm film compare with the largest reflectance you found in Part 1, and with your answer to Before the lab 4? Using the phase shifts at the two surfaces, explain what a soap film much thinner than the wavelength does to reflected light, and what that means for the look of a bubble's top just before it bursts. Why does a coating much thinner than the wavelength on glass not make the glass look black?

## What to hand in

Prelab answers, the three table copies, the graphs and fits for Parts 1 and 3, the index of the soap film and of the coating, the spacer thickness with its uncertainty and comparison, and answers to the questions. Identify simulated data.
