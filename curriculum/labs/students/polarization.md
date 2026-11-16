# Polarization
Student laboratory · Physics II

Textbook: OpenStax *University Physics*, Vol. 3, §1.7. Access for free at https://openstax.org/details/books/university-physics-volume-3.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/polarization.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Malus's law; Crossed polarizers; Three polarizer surprise; Quarter wave plate makes circular light; Half wave plate rotates polarization; Brewster's angle and glare.

**Using the demo.** Two views. On the bench, a beam of light (unpolarized, linear at an angle you set, or circular) passes up to four elements in order: polarizers, quarter wave plates (λ/4) and half wave plates (λ/2). The angle of each element is its transmission axis for a polarizer and its fast axis for a wave plate, measured from the vertical; drag a disk on the drawing to turn it, and click a disk or its number to plot it. Light out gives the intensity after the last element, its polarization, and $$I/I_0$$ after each element. The Many polarizers fold gives the light through $$N$$ polarizers, each turned $$90°/N$$ more than the last. In the reflection view, light meets a flat surface between two media; the readouts give the reflected and transmitted fractions for the two polarizations, the Brewster angle and the critical angle.

**What the demo models.** Ideal elements: a polarizer passes the component of the field along its axis and absorbs the rest, and a wave plate is lossless and delays the slow component by exactly a quarter or a half cycle. The light is followed with Jones and Stokes vectors, so unpolarized light is handled exactly. Reflection uses the Fresnel equations for a flat, smooth surface between two transparent media,

$$r_s = \frac{n_1\cos\theta_i - n_2\cos\theta_t}{n_1\cos\theta_i + n_2\cos\theta_t},\qquad r_p = \frac{n_2\cos\theta_i - n_1\cos\theta_t}{n_2\cos\theta_i + n_1\cos\theta_t},$$

with the reflectances $$R_s = r_s^2$$ and $$R_p = r_p^2$$, and $$\tan\theta_B = n_2/n_1$$. Simulated data.

</details>

## Goal

Test Malus's law for light passing two and three polarizers, and find how reflection polarizes light, with the Brewster angle at which the reflected light is completely polarized.

## Background

Light is a transverse wave: its electric field oscillates across the direction it travels. In linearly polarized light the field oscillates along one direction; in unpolarized light, such as light from the Sun or a bulb, the direction changes at random. An ideal polarizer passes only the component of the field along its transmission axis. Unpolarized light loses half its intensity in the first polarizer, whatever the axis. Linearly polarized light of intensity $$I_0$$ meeting a polarizer whose axis makes an angle $$\theta$$ with its polarization keeps the component $$E_0\cos\theta$$ of its field, and since intensity goes as the field squared,

$$I = I_0\cos^2\theta.$$

This is Malus's law. Each polarizer sends on light polarized along its own axis, so the next polarizer applies Malus's law with the angle between the two axes.

Light reflected from a surface is partly polarized. Its two components, $$s$$ (field perpendicular to the plane of incidence, so parallel to the surface) and $$p$$ (field in the plane of incidence), reflect differently. At the Brewster angle $$\theta_B$$,

$$\tan\theta_B = \frac{n_2}{n_1},$$

the $$p$$ component is not reflected at all, so the reflected light is completely $$s$$ polarized. At that angle the reflected and refracted rays are perpendicular.

## Before the lab

1. Unpolarized light of intensity $$I_0$$ passes a polarizer with a vertical axis and then a second polarizer with its axis at 30° from vertical. What fraction of $$I_0$$ gets through?
2. Two polarizers are crossed (axes at 0° and 90°). A third is put between them with its axis at 45°. What fraction of the unpolarized light now gets through? Show that with the middle axis at an angle $$\theta$$ the fraction is $$\tfrac{1}{8}\sin^2 2\theta$$.
3. Find the Brewster angle for light in air reflecting from glass ($$n = 1.50$$) and from water ($$n = 1.33$$).

## Safety

There are no hazards in the simulation. In a real optics lab, never look into a laser beam or its reflection, and never look at the Sun, with or without polarizers.

## Procedure

Before each part, predict what you will see. Then measure.

**Part 1: one and two polarizers.** (1) Press the Malus's law setup (unpolarized light, polarizers at 0° and 40°) and remove element 2 with its × button. (2) Set element 1's Transmission axis slider to 0°, 45° and 90°, pressing Record reading at each. (3) Set element 1 back to 0° and press Add an element: a second polarizer appears after it. Record with the second one's Transmission axis at 0°, 30°, 45°, 60° and 90°, and at −30°.

**Part 2: three polarizers.** Press the Three polarizer surprise setup: polarizers at 0°, 45° and 90°. Record with the middle one's (element 2) Transmission axis at 0°, 30°, 45°, 60° and 90°. Then remove element 2 with its × button and record once more.

**Part 3: reflection from glass.** Press Reflection above the picture, then Air to glass ($$n_2 = 1.50$$), with Incoming light on Unpolarized. Record with the Angle of incidence θ<sub>i</sub> slider (0.1° steps; use the arrow keys for the last steps) at 0°, 40°, 50°, 55°, 56.3°, 58°, 60° and 80°.

**Part 4: reflection from water.** Repeat Part 3 with Air to water ($$n_2 = 1.33$$) at 0°, 40°, 53.1°, 60° and 80°.

**Using the virtual apparatus.** On the bench, the reading records every element in order. Choosing a setup replaces the elements and the light in, so set the light and elements again after a setup if you changed them. A new element always goes at the end of the beam, so to put a polarizer between two others, set the axes again so the new middle one has the angle you want (the Three polarizer surprise setup starts that way). After each part press Export to worksheet, then Clear, so each part gets its own copy of the Data table.

## Data

| Trial | View | Light in | Elements and their angles | Angle between the light and the last axis $$\theta$$ (°) | $$I/I_0$$ after each element | $$I/I_0$$ out | Light out | Angle of incidence $$\theta_i$$ (°) | $$n_1$$ | $$n_2$$ | $$R_s$$ | $$R_p$$ | Reflected fraction $$R$$ |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| | | | | | | | | | | | | | |
| | | | | | | | | | | | | | |
| | | | | | | | | | | | | | |
| | | | | | | | | | | | | | |
| | | | | | | | | | | | | | |
| | | | | | | | | | | | | | |
| | | | | | | | | | | | | | |

## Analysis

1. For the single polarizer in Part 1, what fraction of unpolarized light passes, and does it depend on the axis? Explain using the random direction of the field.
2. For the two polarizers in Part 1, work out $$\cos^2\theta$$ for each row and graph $$I/I_0$$ out against it (by hand or in a spreadsheet). Fit a straight line and compare it with $$\tfrac{1}{2}\cos^2\theta$$: what do the slope and intercept say about Malus's law? Why do $$+30°$$ and $$-30°$$ give the same result?
3. For Part 2, graph $$I/I_0$$ out against $$\theta$$ (here the angle between the middle and last axes, 90° minus the middle polarizer's angle) and compare with $$\tfrac{1}{8}\sin^2 2\theta$$ from Before the lab 2. Why does it make no difference which of the two angles you use? Explain how adding a polarizer, which can only absorb light, lets more light through.
4. For Part 3, graph $$R_s$$ and $$R_p$$ against the angle of incidence. Find the angle where $$R_p = 0$$ and compare it with $$\arctan(n_2/n_1)$$. Check your reading at 0° against $$\big((n_1 - n_2)/(n_1 + n_2)\big)^2$$, the reflection at normal incidence for either polarization. Near grazing incidence, what happens to both?
5. For Part 4, add the water rows to the Analysis 4 graph as a second series, then compare the Brewster angle and the reflection at 0° for water with those for glass. Why is the reflection from water weaker?
6. At the Brewster angle, what fraction of the unpolarized light is reflected, and what is its polarization? Use this to explain why polarized sunglasses have a vertical transmission axis.

## Uncertainty

The model is exact for ideal elements, and the readings are given to six figures. Element angles are set in whole degrees and the angle of incidence in steps of 0.1°, so the Brewster angle can be located only to about 0.1°. Real sheet polarizers absorb some of the light along their axis and leak a little across it, so real crossed polarizers are never completely dark, and real surfaces are not perfectly flat or clean. The index of a real material also changes a little with the wavelength.

## Questions

1. In the Many polarizers fold, light passes $$N$$ polarizers, each turned $$90°/N$$ more than the last, so that the last is crossed with the light's original polarization. Read the fraction that gets through for $$N = 1, 2, 6$$ and $$30$$. Show that each step passes $$\cos^2(90°/N)$$, and explain why the total grows toward 1 as $$N$$ grows.
2. How could you tell, using only a second pair, whether a pair of sunglasses is polarizing?

## What to hand in

Prelab answers, a Data table copy for each part, the graphs and fits, the Brewster angles you found and the predicted ones, and answers to the questions. Identify simulated data.
