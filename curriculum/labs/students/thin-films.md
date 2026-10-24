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
- Record reading stores $$\lambda_0$$, $$t$$, $$R$$ and the settings (and $$x$$ in the Wedge view). Export to worksheet sends the readings to the Data table below; Clear starts a new series, which goes into a new copy of the table.

**What the demo models.** The reflectance is the exact single layer (Airy) result: every reflection inside the film is added, with the Fresnel coefficients of the two surfaces. The indices are the same at every wavelength (no dispersion) and nothing absorbs light. A wave reflecting toward a medium of lower index is not shifted; one reflecting from a medium of higher index is shifted by half a cycle (§3.4). Simulated data.

</details>

## Goal

Find the thinnest films that reflect a wavelength most strongly and least, see how those thicknesses follow the wavelength and the phase shifts at the two surfaces, and use the fringes of an air wedge to measure a thickness far smaller than a ruler can.

## Background

Light reflected from the top of a film and light reflected from the bottom travel different distances. At normal incidence the second wave goes down through the film and back, an extra path $$2t$$ in a medium where the wavelength is $$\lambda_n = \lambda_0/n_f$$ (§1.2). Each reflection from a medium of higher index adds a phase shift of half a wavelength; a reflection from a medium of lower index adds none.

If exactly one of the two reflections is shifted (a soap film in air, or an air gap between glass slides), the two waves add when

$$2t = \left(m + \tfrac{1}{2}\right)\frac{\lambda_0}{n_f}, \qquad m = 0, 1, 2, \ldots$$

and cancel when $$2t = m\lambda_0/n_f$$. If both are shifted, or neither, the conditions swap: they cancel when $$2t = \left(m + \tfrac{1}{2}\right)\lambda_0/n_f$$ and add when $$2t = m\lambda_0/n_f$$. So the thinnest film that reflects most strongly in the first case is a quarter wave thick, $$t = \lambda_0/(4n_f)$$, and the thinnest film (other than zero) that cancels the reflection is half a wave thick, $$t = \lambda_0/(2n_f)$$.

Two flat glass slides touching at one edge and held apart by a spacer of thickness $$h$$ at a distance $$L$$ make an air wedge with gap $$t = xh/L$$ at a distance $$x$$ from the edge. Each dark fringe has half a wavelength more gap than the one before, so the fringes are evenly spaced,

$$\Delta x = \frac{\lambda_0 L}{2 n_f h}.$$

## Before the lab

1. Light in air falls on a soap film ($$n_f = 1.33$$) with air behind it. Which of the two reflections is shifted by half a wavelength? Write the conditions for strong and weak reflection.
2. Predict the thinnest soap film that reflects 550 nm light most strongly, and the thinnest film (other than zero) that does not reflect it at all.
3. A magnesium fluoride coating ($$n_f = 1.38$$) is put on glass ($$n = 1.52$$). Which reflections are shifted now? Predict the thinnest coating that reflects 550 nm light least.
4. Two glass slides 50 mm long touch at one edge, with a spacer 10.0 μm thick at the other. Predict the spacing of the dark fringes in sodium light, 589 nm.

## Safety

This is a virtual activity. With a real lamp and soap films, keep soap solution away from the eyes and electrical equipment, and do not look straight into a bright lamp.

## Procedure

**Part 1: soap film, strongest reflection.** Start from the Black film setup: a soap film in air, light at normal incidence, unpolarized. For each wavelength $$\lambda_0$$ = 400, 450, 500, 550, 600, 650 and 700 nm, start from a very thin film and thicken it slowly until the reflectance $$R$$ at $$\lambda_0$$ is as large as it gets (the first maximum), and record a reading there. Send the seven readings to the worksheet.

**Part 2: soap film, no reflection.** Clear the readings. For the same seven wavelengths, find the thinnest film other than zero at which $$R$$ falls to zero, and record a reading there. Send them; they go into a new copy of the table.

**Part 3: anti reflection coating.** Clear the readings and pick the Anti reflection coating setup (magnesium fluoride on glass, normal incidence). For $$\lambda_0$$ = 450, 500, 550, 600 and 650 nm, find the thinnest coating at which $$R$$ is least and record a reading there. Send the five readings. Then set the coating back to the thickness you found for 550 nm and write down $$R$$ at 450 nm and at 650 nm (no need to record them), and the reflectance of bare glass, which the demo gives.

**Part 4: air wedge.** Clear the readings and pick the Air wedge fringes setup (sodium light, 589 nm, spacer 10.0 μm, slides 50 mm long). Put the probe on the edge where the slides touch and record a reading, then move it to the middle of each dark fringe in turn (where $$R$$ is least) and record a reading at each, up to the eighth dark fringe. Send them, and type the order $$m$$ of each fringe (0 at the edge) into the last column.

**Part 5: a thicker spacer.** Clear the readings, change the spacer to 20.0 μm and repeat Part 4 for the edge and the first eight dark fringes. Send them and type the orders.

## Data

| Reading | Setup | $$\lambda_0$$ (nm) | Thickness $$t$$ (nm) | Reflectance $$R$$ (%) | Probe $$x$$ (mm) | Order $$m$$ |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |
| | | | | | | |

Use one copy of the table for each part. In the notes for Part 3, write down the reflectance of bare glass and the coating's reflectance at 450 and 650 nm.

## Analysis

1. Graph the Part 1 thickness $$t$$ against $$\lambda_0$$. Is it a straight line through the origin? From the slope find $$n_f$$ and compare it with 1.33.
2. Graph the Part 2 thicknesses the same way. What is the ratio of this slope to the Part 1 slope, and why?
3. Graph the Part 3 thicknesses against $$\lambda_0$$ and find the index of the coating from the slope. The soap film's strongest reflection and the coating's weakest both come at a quarter wave. Explain, using the phase shifts, why the same thickness does opposite things.
4. Compare the coating's reflectance at 550 nm with the bare glass, and with the formula $$R = \left[(n_1 n_2 - n_f^2)/(n_1 n_2 + n_f^2)\right]^2$$. Use your readings at 450 and 650 nm to explain why coated lenses look faintly purple.
5. Graph the Part 4 probe position $$x$$ against the order $$m$$. From the slope (the fringe spacing $$\Delta x$$) find the spacer thickness $$h$$, and compare it with 10.0 μm. What gap $$t$$ does each fringe add?
6. Do the same for Part 5. By what factor did the fringe spacing change, and why?

## Uncertainty

Near a maximum $$R$$ changes very slowly with $$t$$, so a range of thicknesses gives the same reading; near a zero it changes quickly. Estimate the range of $$t$$ over which each kind of reading looks the same, and say how that shows in the scatter of your Parts 1 and 2 graphs. For the wedge, the probe reads to 0.01 mm; estimate how well you can find the middle of a dark fringe, and propagate that into $$h$$. Why does a fit over nine fringes give a better $$h$$ than one fringe spacing?

## Questions

1. Just before a soap bubble bursts, its top looks black. Why does a film much thinner than the wavelength reflect almost nothing, when a coating much thinner than the wavelength on glass does not make the glass look black?
2. An oil slick ($$n_f = 1.47$$) 300 nm thick floats on water ($$n = 1.33$$). Which visible wavelengths does it reflect most strongly, and which least? Check your answer with the Oil on water setup.
3. Why do the colors of a soap film fade to white where it is more than about 1 μm thick?
4. If the air wedge of Part 4 were filled with water ($$n = 1.33$$), what would the fringe spacing be?
5. A soap film seen at a slant shows different colors from the same film seen straight on. Why? (Hint: the extra path is $$2n_f t\cos\theta_t$$.)

## What to hand in

Prelab answers, the five table copies with their graphs and fits, the index of the soap film and of the coating, the two spacer thicknesses with uncertainties and comparisons, and answers to the questions. Identify simulated data.
