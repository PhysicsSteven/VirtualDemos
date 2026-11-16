# Bose–Einstein Condensation
Student laboratory · Modern Physics and Thermodynamics

Textbook: OpenStax *University Physics*, Vol. 3, §6.5 (matter waves), §7.4 (the particle in a box) and §7.5 (the harmonic oscillator), and Vol. 2, §2.4 (the distribution of molecular speeds). Bose–Einstein condensation itself goes beyond the textbook; the Background gives what you need. Access for free at https://openstax.org/details/books/university-physics-volume-3.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/bose-einstein.html?setup=touch)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Cool a hot gas to a condensate; Where the packets touch; Almost all condensed; A lighter atom: sodium; Few atoms, big box; Warm a condensate back up; The velocity picture of 1995; In a harmonic trap, like the real experiments; The 1995 picture, from a trap.

**Using the demo.**

- The gas is $$N$$ atoms that do not interact, in two dimensions, held either in a square box of side $$L$$ with hard walls or in a round harmonic trap of frequency $$f$$. Choose the atom (rubidium 87, sodium 23, lithium 7, hydrogen or helium 4), the number of atoms (10 to 400), the box side (2 to 20 µm) or the trap frequency (10 to 200 Hz), and the temperature (1 nK to 1 µK). The readouts beside the sliders also take typed values.
- The demo works out exactly how many atoms, on average, sit in each energy level at that temperature (the Bose–Einstein distribution). The readouts give the thermal wavelength, the overlap of the packets, the temperature at which they touch (box) or the critical temperature (trap), and the number of atoms in the ground state $$N_0$$.
- The temperature only changes while the demo plays with Cool down or Warm up pressed; otherwise it stays where you set it.
- The thermal atoms are drawn as wave packets of the thermal wavelength; the ground state is drawn exactly. The ladder on the left shows one sample of which level each atom is in.
- Record reading stores the container, the atom, the settings, the temperature and the readouts. Box readings go to Table 1 and trap readings to Table 2, so clear the readings before you switch containers. Export to worksheet sends the readings to the worksheet; Clear starts a new series, which goes into a new copy of the table.
- Blind (Lab section) hides the ground state count, so you can predict it first. Readings cannot be recorded while it is on.

</details>

## Goal

Measure how the de Broglie wavelength of the atoms in a gas grows as it cools, find the temperature at which the atoms' waves overlap, and watch the atoms pile into a single quantum state: a Bose–Einstein condensate. Then compare a box with a harmonic trap, the way real condensates are made.

## Background

Every atom is also a wave (§6.5). In a gas at temperature $$T$$ the size of an atom's wave packet is set by its thermal de Broglie wavelength,

$$\lambda_T = \frac{h}{\sqrt{2\pi m k_B T}},$$

which grows as the gas cools. In a hot gas $$\lambda_T$$ is far smaller than the distance between atoms, and the atoms behave like little billiard balls. In two dimensions $$N$$ atoms in an area $$L^2$$ are about $$L/\sqrt{N}$$ apart, so their packets touch when $$N\lambda_T^2/L^2 = 1$$, which happens at

$$T_{\text{touch}} = \frac{h^2}{2\pi m k_B}\,\frac{N}{L^2}.$$

Atoms like rubidium 87 are bosons: any number of them can share one quantum state. On average a level of energy $$E$$ holds

$$\langle n \rangle = \frac{1}{e^{(E - \mu)/k_B T} - 1}$$

atoms, where the chemical potential $$\mu$$ is whatever makes the levels add up to $$N$$ atoms. Once the packets overlap, the excited levels cannot hold all the atoms, and the rest crowd into the ground state. That crowd, all described by one wavefunction, is the condensate.

In the box the levels are those of a particle in a two dimensional box (§7.4), $$E = \frac{h^2}{8mL^2}(n_x^2 + n_y^2)$$. In a round harmonic trap they are evenly spaced (§7.5), $$E = \hbar\omega(n_x + n_y + 1)$$ with $$\omega = 2\pi f$$. For many atoms in such a trap the condensate appears below a critical temperature, and below it the share of atoms in the ground state is

$$k_B T_c = \frac{\hbar\omega\sqrt{6N}}{\pi}, \qquad \frac{N_0}{N} = 1 - \left(\frac{T}{T_c}\right)^2 .$$

A trap with only a few hundred atoms follows this only roughly; part of this lab is to see how closely.

## Before the lab

1. Find the thermal wavelength of a rubidium 87 atom (86.909 u) at 100 nK, and the mean spacing of 100 atoms in a box 10 µm on a side.
2. At what temperature do the packets of those 100 atoms touch?
3. How should the touch temperature change if you double the number of atoms? If you double the box side? If you use sodium 23 (22.990 u) instead of rubidium?
4. Find $$T_c$$ for 400 rubidium atoms in a 50 Hz trap, and the share of them in the ground state at 20 nK if the many atom formula holds.

## Safety

No hazards in the virtual lab. Real condensates are made in ultrahigh vacuum with laser cooling and evaporation; the lasers used can damage eyes.

## Procedure

To set an exact value, click the readout beside a slider (Temperature T, Number of atoms N, Box side L, Trap frequency f) and type it. Keep Blind (Lab section) off: readings cannot be recorded while it is on.

**The thermal wavelength.** The link opens the Where the packets touch setup: 100 rubidium atoms in a 10 µm box. Type each of these temperatures and press Record reading: 1000, 200, 50 nK, the temperature where the overlap is 1.00 (type the value the Packets touch at readout shows, and check that Overlap Nλ_T²/L² reads 1.00), and 10, 2 and 1 nK. At each one, note how the packets and the ladder look.

**What sets the touch.** Press Export to worksheet, then Clear. For each of these gases, set the Atom menu, N and L, type the Packets touch at value as the temperature, and record a reading: rubidium with 100 atoms in a 10 µm box; 400 atoms in a 10 µm box; 100 atoms in a 20 µm box; then sodium 23 with 100 atoms in a 10 µm box. Export them to a new copy of Table 1.

**A harmonic trap.** Press Clear, choose Harmonic trap under Container, choose rubidium 87 in the Atom menu, and set N to 400 and Trap frequency f to 50 Hz. Record readings at 5, 10, 15, 20, 25 and 30 nK and export them.

**A smaller cloud.** Clear, set N to 100 in the same trap, and record readings at 2.5, 5, 7.5, 10, 12.5 and 15 nK. Export them to a second copy of Table 2.

## Data

Table 1. Atoms in a box.

| Reading | Atom | Atoms N | Box side L (µm) | Temperature T (nK) | Thermal wavelength λ_T (µm) | Overlap Nλ_T²/L² | Packets touch at (nK) | Ground state N₀ | N₀/N (%) | 1/T (1/nK) | λ_T² (µm²) |
|---|---|---|---|---|---|---|---|---|---|---|---|
| | | | | | | | | | | | |
| | | | | | | | | | | | |
| | | | | | | | | | | | |

Fill in $$1/T$$ and $$\lambda_T^2$$ for each row of the first copy only.

Table 2. Atoms in a harmonic trap.

| Reading | Atom | Atoms N | Trap frequency f (Hz) | Temperature T (nK) | Ground state N₀ | N₀/N (%) | T_c (nK) | T² (nK²) | 1 − (T/T_c)² (%) |
|---|---|---|---|---|---|---|---|---|---|
| | | | | | | | | | |
| | | | | | | | | | |
| | | | | | | | | | |

Fill in $$T^2$$ and the many atom prediction $$1 - (T/T_c)^2$$ (zero above $$T_c$$) for each row.

## Analysis

1. Graph $$\lambda_T^2$$ (vertical) against $$1/T$$ (horizontal) for the first copy of Table 1 and fit a straight line. From the slope, find the mass of the atom in atomic mass units ($$h = 6.62607015 \times 10^{-34}$$ J·s, $$k_B = 1.380649 \times 10^{-23}$$ J/K, $$1\ \text{u} = 1.66053906892 \times 10^{-27}$$ kg). Compare with 86.909 u.
2. Describe how the share of atoms in the ground state changes from 1000 nK to 1 nK. What is it where the packets touch? At about what temperature are half the atoms in the ground state?
3. For each row of the second copy of Table 1, work out $$T_{\text{touch}}\,mL^2/N$$ with $$m$$ in u, $$L$$ in µm and $$T$$ in nK. Is it the same for every gas? Compare it with $$h^2/(2\pi k_B)$$ in the same units.
4. Look at $$N_0$$ and $$N_0/N$$ at the touch for each row of the second copy of Table 1. Which settings change the number of atoms in the ground state at the touch, and which do not? What happens to the share as $$N$$ grows?
5. Graph $$N_0/N$$ (vertical, in %) against $$T^2$$ (horizontal) for the first copy of Table 2 (400 atoms, 5 to 30 nK) and fit a straight line. From the intercept and the slope, find the temperature at which the line reaches zero, your measured $$T_c$$. Compare with the $$T_c$$ readout and the intercept with 100 %.
6. Do the same for the 100 atom cloud (second copy of Table 2). By what factor do the two measured $$T_c$$ values differ, and what does the formula predict for four times as many atoms?

## Uncertainty

The demo has no noise: every reading is an exact average, rounded as the readouts show it. So the residuals of the $$\lambda_T^2$$ fit show only rounding. Estimate the uncertainty of that slope from the fit, carry it through to the mass, and say whether your mass agrees with 86.909 u within it.

## Questions

1. The electrons in a metal (Vol. 3, §9.4) are packed so closely that their de Broglie waves overlap strongly even at room temperature, yet they do not all drop into one state. Why not?

## What to hand in

Prelab answers, both tables with their computed columns, the $$\lambda_T^2$$ graph and fit with your mass, the trap graphs and fits with your measured $$T_c$$ values, and answers to the questions. Identify simulated data.
