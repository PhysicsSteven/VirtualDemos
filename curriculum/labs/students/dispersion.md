# Dispersion
Student laboratory · Physics II

Textbook: OpenStax *University Physics*, Vol. 3, §1.5 (and §1.4). Access for free at https://openstax.org/details/books/university-physics-volume-3.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/optics-bench.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Where it is in the demo:** the Optics Bench, Prism setup. Click the prism to open its editor.

**Using the demo.** A narrow beam of white light meets a 60° prism and spreads into colors. Every glass element (Glass block, Prism, Semicircle) has material chips at the top of its editor: Adjustable n, Crown, Flint, Fused silica, Water and Diamond. The editor lists the index at 400, 589 and 700 nm and, for a prism, how far 400 nm and 700 nm light is turned at minimum deviation and the spread between them. Drag the prism or the source, or rotate them, to follow the rays.

**What the demo models.** Real materials use published Sellmeier formulas for the index against wavelength: Schott N-BK7 (crown) and F2 (flint), Malitson for fused silica, Daimon and Masumura for water at 20 °C and Peter for diamond. Adjustable n keeps the old behavior, with the spread of colors exaggerated so it is easy to see. Rays follow Snell's law at each face; a reading gives the index at eight wavelengths and the deviation at minimum deviation for a 60° prism, $$n\sin(A/2) = \sin\!\big((A + \delta)/2\big)$$. Simulated data.

</details>

## Goal

Measure how the index of refraction of glass, water and diamond changes with wavelength, and find how that dispersion spreads white light into colors in a prism.

## Background

The index of refraction of a material depends a little on the wavelength: for clear materials it is larger for violet light than for red. This is dispersion. Since $$v = c/n$$, violet light travels slower in glass than red light, and by Snell's law it is bent more at each surface. A prism of apex angle $$A$$ turns a ray by the deviation $$\delta$$; turned so the ray passes through it symmetrically, the deviation is the least it can be, with

$$n\sin\frac{A}{2} = \sin\frac{A + \delta}{2}.$$

Each wavelength has its own $$n$$ and so its own $$\delta$$, and white light fans out into a spectrum. Over the visible range the index is close to the Cauchy form

$$n(\lambda) \approx A_C + \frac{B_C}{\lambda^2},$$

so a material with a larger $$B_C$$ spreads colors more. A rainbow is dispersion in water drops.

## Before the lab

1. Crown glass has $$n = 1.5308$$ at 400 nm and $$n = 1.5131$$ at 700 nm. Find the speed of each color in the glass. Which arrives first through a 1.00 m block, and by how much?
2. Find the minimum deviation of a 60° prism with $$n = 1.5167$$.
3. Show that a 60° prism of diamond ($$n \approx 2.42$$) has no minimum deviation: light cannot get through it symmetrically. What happens to the light instead?
4. A narrow beam of white light passes through a 60° glass prism. Which color is turned through the largest angle: red, violet, or are all colors turned through the same angle? Explain your choice.

## Safety

There are no hazards in the simulation. Never look at the Sun through a prism or lens.

## Procedure

Before each part, predict what you will see. Then measure.

**Part 1: white light through a prism.** Press the Prism setup and click the prism to open its editor; leave the material chip on Adjustable n. Follow the white beam through the prism. Which color is bent most? Write it in your answer to Question 1. Move the prism's Rotate slider slowly (or press [ and ]) and watch the spectrum move on the far side: describe where it stops and turns back. (Nothing is recorded in the table.)

**Part 2: real materials.** With the prism selected, press the Crown chip in its editor and press Record reading once: it adds eight rows, one per wavelength from 400 to 700 nm. Press Export to worksheet, then Clear. Repeat with the Flint, Fused silica and Water chips.

**Part 3: diamond.** Press the Diamond chip, then Record reading, Export to worksheet and Clear. Its deviation column reads "none: total internal reflection". Follow the white beam: where does it go?

**Using the virtual apparatus.** Click the prism to select it before you record: a reading records the selected element's index at eight wavelengths, one row each. Export each material to the worksheet before you press Clear, so each gets its own copy of the Data table.

## Data

| Trial | Element | Material | Wavelength $$\lambda$$ (nm) | Index $$n$$ | Minimum deviation $$\delta$$ (°) | $$1/\lambda^2$$ (1/µm²) |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |
| | | | | | | |
| | | | | | | |
| | | | | | | |
| | | | | | | |
| | | | | | | |
| | | | | | | |

Fill in the last column yourself for the crown and flint rows ($$\lambda$$ in µm, so 400 nm gives $$1/0.400^2 = 6.25$$). The eight wavelengths are the same in every copy, so the column repeats.

## Analysis

1. For crown and flint glass in Part 2, graph $$n$$ (vertical) against $$1/\lambda^2$$ (horizontal) and fit a straight line: find $$A_C$$ and $$B_C$$. Is the Cauchy form a good fit? Which glass has the larger $$B_C$$?
2. For each material, find the spread of the spectrum, $$\delta(400\ \mathrm{nm}) - \delta(700\ \mathrm{nm})$$, and the index difference $$n(400) - n(700)$$. Rank the materials by each. Which would make the best prism for spreading colors, and which the best lens for keeping them together?
3. Type the 589.3 nm prism row from each of your four copies (crown, flint, fused silica and water) into one new copy of the Data table, and graph $$\delta$$ (vertical) against $$n$$ (horizontal) for the four points. Is the deviation set by $$n$$ alone, whatever the material? Use the minimum deviation formula to explain why the curve steepens as $$n$$ grows.
4. For Part 3, explain why the diamond prism gives no deviation, and why diamond's large index and dispersion make cut diamonds flash with color.

## Questions

1. Which color did the prism turn most in Part 1, and what do the Minimum deviation δ values of your crown glass rows at 400 and 700 nm say? Set them beside your answer to Before the lab 4, and explain the order with $$v = c/n$$ and Snell's law. The same difference in speed shows up in a fiber: a pulse of white light enters a long optical fiber. Why is it longer when it comes out?
2. Why is the dispersion of air hard to notice, although air does have an index above 1?

## Uncertainty

For courses that treat measurement uncertainty. This section is not counted in the 75 minutes; do it when your instructor assigns it.
{: .ws-assigned}

The model's indices come from the published Sellmeier formulas, which reproduce measured indices to about the fifth decimal place over the visible range (the older diamond formula less well); the reading gives them to five decimal places. Real glass varies a little from melt to melt, and its index changes with temperature (by a few parts in a million per kelvin for crown glass). The prism is assumed to be a perfect 60° wedge. Give $$A_C$$ and $$B_C$$ for crown and flint with their standard errors from the fits.

## What to hand in

Prelab answers, a Data table copy for each material, the graphs and Cauchy fits, your table of spreads, and answers to the questions (and to Uncertainty, if assigned). Identify simulated data.
