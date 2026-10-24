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

There is no n = 0: the lowest energy is not zero. Walls of finite height let the wave leak into them, so each level lies a little lower than in the infinite box, and there are only a few levels.

A harmonic oscillator has evenly spaced levels (§7.5):

$$E_n = \left(n + \tfrac{1}{2}\right)\hbar\omega, \qquad n = 0, 1, 2, \dots$$

with a zero point energy of $$\tfrac{1}{2}\hbar\omega$$.

A single energy eigenstate is stationary: $$\lvert\psi\rvert^2$$ never changes (§7.3). A superposition of two levels with energies $$E_a$$ and $$E_b$$ moves back and forth with period

$$T = \frac{h}{E_b - E_a} .$$

## Before the lab

1. Find the three lowest energies of an electron in an infinite box 1.00 nm wide, using $$\hbar^2/2m = 0.0381$$ eV·nm².
2. How do the energies change if the box is made twice as wide?
3. An oscillator has ħω = 0.200 eV. List its four lowest energies. What is the spacing between them?
4. Find the period of the motion when the n = 1 and n = 2 states of the 1.00 nm box are added, using h = 4.136 eV·fs.

## Safety

No hazards in the virtual lab.

## Procedure

**The infinite box.** Start with Square well, infinite walls. For box widths of 0.50, 1.00, 1.50, 2.00 and 3.00 nm, record a reading; each records every level listed.

**The oscillator.** Clear the readings and pick Oscillator. With a level spacing of 0.200 eV, record a reading. Send this run to a new copy of the table.

**The finite well.** Clear again and pick Square well with Walls set to Finite. With a depth of 0.50 eV and a width of 2.00 nm, record a reading. Then make the well 0.20 eV deep and record again. Send this run to a third copy.

**Motion of a superposition.** Pick Square well, infinite walls, 1.00 nm wide, with the levels n = 1 and n = 2 chosen. Play it at ¼× speed and time ten swings of the packet from one side to the other and back, using the clock. Then pick Double well (levels 1 and 2 chosen), play it and time one full trip of the electron from the left well to the right well and back. Write both in the second table.

## Data

| Reading | Well | Width L (nm) | Level spacing ħω (eV) | Level n | Energy E_n (eV) | n²/L² (1/nm²) |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |
| | | | | | | |

Work out the last column yourself for the infinite box.

| Superposition | Levels chosen | Energy difference ΔE (eV) | Period measured (fs) | h/ΔE (fs) |
|---|---|---|---|---|
| Box, 1.00 nm | n = 1 and 2 | | | |
| Double well | n = 1 and 2 | | | |

## Analysis

1. Graph E against $$n^2/L^2$$ for every reading of the infinite box. Do all the levels of all the boxes fall on one line? Find the slope and compare it with $$\pi^2\hbar^2/2m$$.
2. From your slope, find $$\hbar^2/2m$$, and from it the mass of the electron, using $$\hbar c = 197.327$$ eV·nm. Give the mass as $$mc^2$$ in keV.
3. Graph E against n for the oscillator. Find the slope and the intercept and compare them with ħω and $$\tfrac{1}{2}\hbar\omega$$.
4. Compare each level of the 2.00 nm finite well with the same level of the 2.00 nm infinite box. How many levels does the finite well hold at each depth, and why are they lower?
5. Compare your measured periods with h/ΔE. Why does the double well take so much longer than the box?

## Uncertainty

The levels come from solving the Schrödinger equation on a grid, so they carry a small numerical error. Find it by comparing your box levels with the exact formula; does it grow with n? For the periods, estimate how well you could read the clock at the turning points, and why timing ten swings helps.

## Questions

1. Why can't an electron in a box have zero energy? Connect your answer to the uncertainty principle.
2. A real electron in a molecule or a quantum dot a few nanometres across absorbs light when it jumps between levels. Would a bigger dot absorb redder or bluer light?
3. Why are the levels of the oscillator evenly spaced while those of the box spread further apart as n grows?
4. In the double well the two lowest levels are very close together. What would happen to their spacing, and to the period, if the barrier between the wells were made higher?

## What to hand in

Prelab answers, the three table copies with their graphs and fits, the table of periods, $$\hbar^2/2m$$ and $$mc^2$$ with uncertainties and comparisons, the comparison of the finite well with the box, and answers to the questions. Identify simulated data.
