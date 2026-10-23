# Dispersion
Student laboratory · Physics II

Textbook: OpenStax *University Physics*, Vol. 3, §1.5 (and §1.4). Access for free at https://openstax.org/details/books/university-physics-volume-3.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/optics-bench.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Where it is in the demo:** the Optics Bench, Prism setup. Click the prism to open its editor.

**Using the demo.** A narrow beam of white light meets a 60° prism and spreads into colors. Every glass element (Glass block, Prism, Semicircle) has material chips at the top of its editor: Adjustable n, Crown, Flint, Fused silica, Water and Diamond. The editor lists the index at 400, 589 and 700 nm and, for a prism, how far 400 nm and 700 nm light is turned at minimum deviation and the spread between them. Drag the prism or the source, or rotate them, to follow the rays.

**What the demo models.** Real materials use published Sellmeier formulas for the index against wavelength: Schott N-BK7 (crown) and F2 (flint), Malitson for fused silica, Daimon and Masumura for water at 20 °C and Peter for diamond. Adjustable n keeps the old behaviour, with the spread of colors exaggerated so it is easy to see. Rays follow Snell's law at each face; a reading gives the index at eight wavelengths and the deviation at minimum deviation for a 60° prism, $$n\sin(A/2) = \sin\!\big((A + \delta)/2\big)$$. Simulated data.

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

1. Crown glass has $$n = 1.5309$$ at 400 nm and $$n = 1.5131$$ at 700 nm. Find the speed of each color in the glass. Which arrives first through a 1.00 m block, and by how much?
2. Find the minimum deviation of a 60° prism with $$n = 1.5167$$.
3. Show that a 60° prism of diamond ($$n \approx 2.42$$) has no minimum deviation: light cannot get through it symmetrically. What happens to the light instead?
4. Why do we see a rainbow's red on the outside and violet on the inside, if water bends violet more?

## Safety

There are no hazards in the simulation. Never look at the Sun through a prism or lens.

## Procedure

Before each part, predict what you will see. Then measure.

**Part 1: white light through a prism.** In the Prism setup, follow the white beam through the prism with Adjustable n. Which color is bent most? Rotate the prism slowly and watch the spectrum move: describe where it turns back. (Nothing is recorded in the table.)

**Part 2: real materials.** Make the prism crown glass and record its index and deviation across the spectrum. Repeat for flint glass, fused silica and water.

**Part 3: diamond.** Make the prism diamond and record. Follow the white beam: where does it go?

**Using the virtual apparatus.** Select the element first: a reading records the selected element's index at eight wavelengths, one row each. Send each material to the worksheet before clearing, so each gets its own copy of the Data table.

## Data

| Trial | Element | Material | Wavelength $$\lambda$$ (nm) | Index $$n$$ | Minimum deviation $$\delta$$ (°) |
|---|---|---|---|---|---|
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |

## Analysis

1. For each material in Part 2, graph $$n$$ against $$\lambda$$. Then graph $$n$$ against $$1/\lambda^2$$ and fit a straight line: find $$A_C$$ and $$B_C$$. Is the Cauchy form a good fit? Which material has the largest $$B_C$$?
2. For each material, find the spread of the spectrum, $$\delta(400\ \mathrm{nm}) - \delta(700\ \mathrm{nm})$$, and the index difference $$n(400) - n(700)$$. Rank the materials by each. Which would make the best prism for spreading colors, and which the best lens for keeping them together?
3. Graph $$\delta$$ against $$n$$ for all the prism rows together. Is the deviation set by $$n$$ alone, whatever the material? Use the minimum deviation formula to explain why the curve steepens as $$n$$ grows.
4. For Part 3, explain why the diamond prism gives no deviation, and why diamond's large index and dispersion make cut diamonds flash with color.

## Uncertainty

The model's indices come from the published Sellmeier formulas, which reproduce measured indices to about the fifth decimal place over the visible range (the older diamond formula less well); the reading gives them to five decimal places. Real glass varies a little from melt to melt, and its index changes with temperature (by a few parts in a million per kelvin for crown glass). The prism is assumed to be a perfect 60° wedge.

## Questions

1. Why does a single glass lens bring red and violet light to a focus at different distances, and how does an achromatic doublet of crown and flint glass fix it?
2. A pulse of white light enters a long optical fibre. Why is it longer when it comes out?
3. Why is the dispersion of air hard to notice, although air does have an index above 1?

## What to hand in

Prelab answers, a Data table copy for each material, the graphs and Cauchy fits, your table of spreads, and answers to the questions. Identify simulated data.
