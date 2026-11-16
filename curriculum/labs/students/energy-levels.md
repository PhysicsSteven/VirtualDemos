# Energy Levels in a Box and a Spring
Student laboratory · Modern Physics

Textbook: OpenStax *University Physics*, Vol. 3, §§7.3, 7.4, 7.5 and 7.6. Access for free at https://openstax.org/details/books/university-physics-volume-3.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/quantum-waves.html?setup=iwell)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Square well, with infinite or finite walls; Oscillator; Double well (these use this worksheet); Step and Barrier (the tunneling worksheet); Free particle (the uncertainty principle worksheet).

**Using the demo.**

- An electron moves in one dimension. Positions are in nm, energies in eV and times in fs, and $$\hbar^2/2m = 0.0381$$ eV·nm².
- The energy levels are found by solving the time independent Schrödinger equation numerically, on the same grid the demo uses to move the electron. They are listed under Energy eigenstates, with the exact formula beside them for the infinite well and the oscillator.
- Pick one level for a stationary state, or two or more for a superposition; the electron then moves as the time dependent equation says. The readout gives the beat period h/ΔE of two chosen levels.
- The infinite well has walls at $$x = \pm L/2$$. The finite well has walls of height $$V_0$$. The oscillator has $$V = \tfrac{1}{2}m\omega^2x^2$$, set by its level spacing ħω. The double well has two minima with a barrier of height $$V_0$$ between them.
- Record reading stores every level the demo lists, one row each: the well, its width, depth or ħω, the level number n and its energy. Export to worksheet sends the readings to the Data table below. Clear starts a new series, which goes into a new copy of the table.

</details>

## Goal

Measure the energy levels of an electron in a box and in a harmonic oscillator, find how they depend on the quantum number and the size of the box, and time the motion of a superposition of two levels.

## Background

An electron confined to a box of width L with infinitely high walls has standing waves that fit a whole number of half wavelengths in the box, $$L = n\lambda/2$$ (§7.4). With $$p = h/\lambda$$ its energies are

$$E_n = \frac{n^2\pi^2\hbar^2}{2mL^2}, \qquad n = 1, 2, 3, \dots$$

There is no n = 0: the lowest energy is not zero. Walls of finite height let the wave leak into them, so each level lies lower than in the infinite box (only a little when the walls are much higher than the level), and there are only a few levels.

A harmonic oscillator has evenly spaced levels (§7.5):

$$E_n = \left(n + \tfrac{1}{2}\right)\hbar\omega, \qquad n = 0, 1, 2, \dots$$

with a zero point energy of $$\tfrac{1}{2}\hbar\omega$$.

A single energy eigenstate is stationary: $$\lvert\psi\rvert^2$$ never changes (§7.3). A superposition of two levels with energies $$E_a$$ and $$E_b$$ moves back and forth with period

$$T = \frac{h}{E_b - E_a} .$$

## Before the lab

1. Find the three lowest energies of an electron in an infinite box 1.00 nm wide, using $$\hbar^2/2m = 0.0381$$ eV·nm².
2. An oscillator has ħω = 0.200 eV. List its four lowest energies. What is the spacing between them?
3. Find the period of the motion when the n = 1 and n = 2 states of the 1.00 nm box are added, using h = 4.136 eV·fs.
4. A box twice as wide, 2.00 nm, has levels a quarter of those you found in 1, so with infinite walls only its lowest level lies below 0.20 eV. Now give the same 2.00 nm well walls only 0.20 eV high. Make a guess before you measure: will its lowest level lie above the infinite box's, at it, or below it? Will the well hold no level, one level, or more than one?

## Safety

No hazards in the virtual lab.

## Procedure

**The infinite box.** The link opens the Square well setup with Walls set to Infinite. Under Potential, set the Box width L slider to 0.50, 1.00, 1.50, 2.00 and 3.00 nm in turn and press Record reading at each; each reading records every level listed under Energy eigenstates, one row per level. Press Export to worksheet.

**The oscillator.** Press Clear and pick the Oscillator setup. With Level spacing ħω at 0.200 eV (where the setup opens), press Record reading, then Export to worksheet. This run goes to a new copy of the table.

**The finite well.** Press Clear, pick Square well and set Walls to Finite. Set Well depth V₀ to 0.50 eV and Well width a to 2.00 nm and press Record reading. Then set Well depth V₀ to 0.20 eV and record again. Export this run to a third copy.

**Motion of a superposition.** (1) Pick Square well with Walls on Infinite and Box width L at 1.00 nm, and choose levels n = 1 and n = 2 under Energy eigenstates (the setup opens with them chosen). (2) Press the 1× speed button and Play. Note the clock (t, in fs, above the picture) when the packet is at one side, let it swing over and back ten times, note the clock again, and divide the difference by ten: that is the Period measured. (3) Pick Double well (levels 1 and 2 are chosen when it opens), play it and time one full trip of the electron from the left well to the right well and back. (4) Write both periods, and ΔE from the two energies under Energy eigenstates, in the second table.

## Data

| Reading | Well | Width L (nm) | Level spacing ħω (eV) | Level n | Energy E_n (eV) | n²/L² (1/nm²) |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |
| | | | | | | |

Work out the last column yourself for levels n = 1 to 4 of each infinite box.

| Superposition | Levels chosen | Energy difference ΔE (eV) | Period measured (fs) | h/ΔE (fs) |
|---|---|---|---|---|
| Box, 1.00 nm | n = 1 and 2 | | | |
| Double well | n = 1 and 2 | | | |

## Analysis

1. Graph E against $$n^2/L^2$$ for levels n = 1 to 4 of each infinite box (20 points). Do all of them fall on one line? Find the slope and compare it with $$\pi^2\hbar^2/2m$$.
2. From your slope, find $$\hbar^2/2m$$, and from it the mass of the electron, using $$\hbar c = 197.327$$ eV·nm. Give the mass as $$mc^2$$ in keV.
3. Graph E against n for the oscillator. Find the slope and the intercept and compare them with ħω and $$\tfrac{1}{2}\hbar\omega$$.
4. Compare each level of the 2.00 nm finite well with the same level of the 2.00 nm infinite box. How many levels does the finite well hold at each depth?
5. Compare your measured periods with h/ΔE. Why does the double well take so much longer than the box?

## Uncertainty

The levels come from solving the Schrödinger equation on a grid, so they carry a small numerical error. Find it by comparing your box levels with the exact formula; does it grow with n? For the periods, estimate how well you could read the clock at the turning points, and why timing ten swings helps.

## Questions

1. A real electron in a molecule or a quantum dot a few nanometers across absorbs light when it jumps between levels. Would a bigger dot absorb redder or bluer light?
2. How did the 0.20 eV well compare with your guess in Before the lab 4? Use the shape of the wave function at the walls to explain where its levels lie compared with the box's, and how many of them a well this shallow can hold.

## What to hand in

Prelab answers, the three table copies with their graphs and fits, the table of periods, $$\hbar^2/2m$$ and $$mc^2$$ with uncertainties and comparisons, the comparison of the finite well with the box, and answers to the questions. Identify simulated data.
