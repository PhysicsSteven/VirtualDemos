# Quantum Tunneling
Student laboratory · Modern Physics

Textbook: OpenStax *University Physics*, Vol. 3, §§7.3 and 7.6. Access for free at https://openstax.org/details/books/university-physics-volume-3.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/quantum-waves.html?setup=barrier)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Step; Barrier, with one or two barriers (these use this worksheet); Square well, Oscillator and Double well (the energy levels worksheet); Free particle (the uncertainty principle worksheet).

**Using the demo.**

- An electron moves in one dimension. Positions are in nm, energies in eV and times in fs, and $$\hbar^2/2m = 0.0381$$ eV·nm².
- The electron starts as a Gaussian wave packet of width σ, centered at $$x_0$$, with central wave number $$k_0$$ and $$E_0 = \hbar^2k_0^2/2m$$, the energy that goes with $$k_0$$. The packet's mean energy is a little higher, $$\langle E\rangle = E_0 + \hbar^2/8m\sigma^2$$ (0.2011 eV for E₀ = 0.20 eV and σ = 3 nm), because its spread in k adds energy; the plane wave prediction is taken at E₀. Set these on the card over the picture, then press Launch packet and Play.
- The time dependent Schrödinger equation is solved on a grid of points 25 pm apart (40 pm for two barriers; Crank–Nicolson steps). The packet carries a spread of energies, wider for a narrow packet.
- Probability that reaches the edges of the view is absorbed and still counted. R is all the probability on the side the packet came from, T all of it on the far side, including what the edges have absorbed.
- The Scattering readouts also show the plane wave T at $$E_0$$ and T averaged over the packet's energies, both from the formulas.
- Record reading works once the packet has split. It stores the setup, the barrier height and width, the gap between two barriers, $$E_0$$, σ, the time and the measured R and T. Export to worksheet sends the readings to the Data table below. Clear starts a new series, which goes into a new copy of the table.

</details>

## Goal

Send an electron at a step and at a barrier, measure how much of it reflects and how much gets through, and use the way tunneling falls off with barrier width to measure the decay constant of the wave inside the barrier.

## Background

Inside a region where the potential energy V is larger than the electron's energy E, the Schrödinger equation has no oscillating solutions (§7.3). The wave function decays instead, as $$e^{-\kappa x}$$, with

$$\kappa = \frac{\sqrt{2m(V_0 - E)}}{\hbar} .$$

A wave meeting a barrier of height $$V_0 > E$$ and width a is mostly reflected, but a little gets through (§7.6). The transmission probability for a plane wave is

$$T = \left[1 + \frac{V_0^2\,\sinh^2(\kappa a)}{4E(V_0 - E)}\right]^{-1} \approx 16\,\frac{E}{V_0}\left(1 - \frac{E}{V_0}\right)e^{-2\kappa a},$$

where the approximation holds for a thick barrier, $$\kappa a \gg 1$$. So $$\ln T$$ falls in a straight line with a, with slope $$-2\kappa$$.

At a step of height $$V_0$$ with $$E > V_0$$, a classical particle always carries on. A wave partly reflects, with

$$R = \left(\frac{k_1 - k_2}{k_1 + k_2}\right)^2, \qquad T = 1 - R,$$

where $$k_1 = \sqrt{2mE}/\hbar$$ before the step and $$k_2 = \sqrt{2m(E - V_0)}/\hbar$$ after it. Below the step, everything reflects.

## Before the lab

1. Find κ and the decay length $$1/\kappa$$ for an electron with E = 0.20 eV at a barrier of height 1.00 eV.
2. Use the thick barrier formula to estimate T for the same electron and a barrier 0.50 nm wide. By what factor does T change if the barrier is 0.1 nm wider?
3. An electron with E = 0.60 eV meets a step of 0.40 eV. Find R and T.
4. A wave packet has a spread of energies, and T depends strongly on energy. Would you expect a narrow packet or a wide one to match the plane wave formula better?

## Safety

No hazards in the virtual lab.

## Procedure

**Barrier width.** Start with the Barrier setup. Set the height to 1.00 eV, and on the packet card set the center to −15 nm, the width to 3 nm and the energy to 0.20 eV. (Starting far from the barrier keeps the tail of the packet from overlapping it at the start.) For barrier widths from 0.3 nm to 0.8 nm in steps of 0.1 nm, launch the packet, let it split and record a reading.

**Packet energy.** Clear the readings. With the barrier 0.30 nm wide, record a reading for packet energies of 0.20, 0.40, 0.60, 0.80, 1.00, 1.20, 1.50 and 2.00 eV. Send this run to a new copy of the table.

**A step.** Clear again and pick Step, with a step of 0.40 eV and the packet width as it starts (about 2 nm). Record a reading for packet energies of 0.30, 0.45, 0.60, 0.80, 1.20 and 2.00 eV. Send this run to a third copy.

**Two barriers.** Clear again. Pick Barrier and set Barriers to Two; the packet starts at the first resonant energy. Record a reading there, then about 0.01 eV above and below it (the energy slider moves in steps of 0.005 eV). Note the one barrier transmission the Scattering section gives. Send this run to a fourth copy.

## Data

| Reading | Setup | Height V₀ (eV) | Width a (nm) | Packet energy E₀ (eV) | Reflected R | Transmitted T | ln T |
|---|---|---|---|---|---|---|---|
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |

Work out ln T yourself.

## Analysis

1. Check that R + T = 1 for every reading. What does that tell you about the electron?
2. Graph ln T against a for the barrier width run; all these barriers are thick. Find κ from the slope and compare it with your prelab value.
3. From your κ and $$\kappa^2 = 2m(V_0 - E)/\hbar^2$$, find $$\hbar^2/2m$$ for the electron and compare it with 0.0381 eV·nm².
4. Graph T against $$E_0$$ for the packet energy run. Does T reach 1 when $$E_0$$ reaches the top of the barrier? Compare a few points with the plane wave formula.
5. For the step, compare each measured R with the formula. What happens below the step, and what happens far above it?
6. For two barriers, compare T at the resonance with T for one barrier alone. Explain how two barriers can let through more than one.

## Uncertainty

The simulation has no noise, but it is not the plane wave the formulas describe. Compare your measured T with the plane wave value and with the value averaged over the packet, and say which the measurement follows. The grid also makes small numerical errors; estimate their size from the difference between the measured T and the packet average. Say why a packet that starts too close to the barrier, with its tail already through it, would give too large a T.

## Questions

1. Why can't a classical particle ever be found inside a barrier higher than its energy, while a quantum particle can?
2. A scanning tunneling microscope measures the current that tunnels across a gap of about 1 nm between a tip and a surface. Use your κ to estimate how much the current changes if the gap grows by 0.1 nm.
3. Alpha decay is tunneling through the Coulomb barrier of the nucleus. Why do small changes in the alpha particle's energy change half lives by many powers of ten?
4. Why does part of the packet reflect from a step that it has plenty of energy to climb?

## What to hand in

Prelab answers, the four table copies with their graphs and fits, κ and $$\hbar^2/2m$$ with uncertainties and comparisons, the comparisons with the formulas for the step and the energy run, your explanation of the resonance, and answers to the questions. Identify simulated data.
