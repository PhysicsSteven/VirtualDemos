# The Uncertainty Principle and a Spreading Packet
Student laboratory · Modern Physics

Textbook: OpenStax *University Physics*, Vol. 3, §§7.1, 7.2 and 7.3. Access for free at https://openstax.org/details/books/university-physics-volume-3.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/quantum-waves.html?setup=free)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Free particle (this worksheet); Step and Barrier (the tunneling worksheet); Square well, Oscillator and Double well (the energy levels worksheet).

**Using the demo.**

- An electron moves in one dimension with no forces on it. Positions are in nm, energies in eV, times in fs and momenta in eV/c, and $$\hbar^2/2m = 0.0381$$ eV·nm².
- The electron starts as a Gaussian wave packet, $$\psi \propto \exp[-(x - x_0)^2/4\sigma^2 + ik_0x]$$, of width σ, with $$E_0 = \hbar^2k_0^2/2m$$ the energy that goes with the central wave number $$k_0$$. The mean energy the demo shows is higher, $$\langle E\rangle = E_0 + \hbar^2/8m\sigma^2$$, because the packet's spread in k adds energy (0.638 eV for E₀ = 0.6 eV and σ = 0.5 nm; the demo's 25 pm grid shows 0.637). Set these on the card over the picture: each change puts a fresh packet at t = 0, held there while the demo is paused. Play (or Launch packet, which starts it playing at once) sets it moving; Step advances a little at a time, and the clock shows t.
- The time dependent Schrödinger equation is solved on a grid of points 25 pm apart. The Measurements section shows ⟨x⟩, the spread Δx, ⟨p⟩, the spread Δp and their product, all computed from ψ on that grid.
- Measure x picks a position at random with probability $$\lvert\psi\rvert^2$$ and collapses ψ to a narrow packet there; Measure 200 copies measures 200 identically prepared electrons and draws a histogram.
- Probability that reaches the edges of the view is absorbed, so record while the packet is still well inside the view.
- Record reading stores σ, $$E_0$$, the time, ⟨x⟩, Δx, ⟨p⟩, Δp, their product and the energy. Export to worksheet sends the readings to the Data table below. Clear starts a new series, which goes into a new copy of the table.

</details>

## Goal

Measure the spreads in position and momentum of an electron wave packet, show that their product never falls below $$\hbar/2$$, and measure how fast a free packet spreads out.

## Background

The probability of finding the electron between x and x + dx is $$\lvert\psi\rvert^2\,dx$$ (§7.1). The spreads Δx and Δp are the standard deviations of its position and momentum. Heisenberg's uncertainty principle (§7.2) says that for any wave function

$$\Delta x\,\Delta p \ge \frac{\hbar}{2} .$$

A Gaussian packet of width σ has $$\Delta x = \sigma$$ and $$\Delta p = \hbar/2\sigma$$ at the moment it is made, the smallest product allowed. In eV/c, $$\Delta p = \hbar c/2\sigma$$ with $$\hbar c = 197.327$$ eV·nm.

A free packet keeps its momentum spread, but its faster parts run ahead of its slower ones, so it spreads (§7.3):

$$\Delta x(t)^2 = \sigma^2 + \left(\frac{\hbar t}{2m\sigma}\right)^2 = \sigma^2 + (\Delta v\,t)^2,$$

where $$\Delta v = \Delta p/m$$ is the spread of speeds.

## Before the lab

1. Find Δp, in eV/c, for packets of width 0.50 nm and 2.0 nm.
2. Find the spread of speeds Δv for the 0.50 nm packet, using $$\hbar/2m = 0.0579$$ nm²/fs. How wide is the packet after 10 fs and after 40 fs?
3. A narrower packet starts smaller. Does it stay smaller? Compare the widths of packets of 0.30 nm and 1.0 nm after 30 fs.
4. Why is it not a violation of the uncertainty principle that $$\Delta x\,\Delta p$$ grows with time?

## Safety

No hazards in the virtual lab.

## Procedure

**At launch.** Start with Free particle. With the demo paused, set packet widths of about 0.30, 0.50, 0.75, 1.0, 1.5, 2.0 and 3.0 nm and record a reading at each, at t = 0. (Launch packet starts the packet moving, so don't use it here.)

**Spreading.** Clear the readings. With the demo paused, set the width to 0.50 nm and record a reading at t = 0. Then play it, pause at about 5, 10, 15, 20, 25, 30 and 40 fs and record a reading each time. Send this run to a new copy of the table.

**Measuring position.** At about 20 fs, press Measure 200 copies a few times and compare the histogram with $$\lvert\psi\rvert^2$$. Then press Measure x once, and note what happens to the packet and to Δx and Δp.

## Data

| Reading | Width σ (nm) | Time t (fs) | Spread Δx (nm) | Momentum spread Δp (eV/c) | Δx·Δp (ħ) | 1/σ (1/nm) | t² (fs²) | Δx² (nm²) |
|---|---|---|---|---|---|---|---|---|
| | | | | | | | | |
| | | | | | | | | |
| | | | | | | | | |

Fill in the last three columns yourself where you need them.

## Analysis

1. For the readings at launch, graph Δp against 1/σ. Find the slope and compare it with $$\hbar c/2$$. What is $$\Delta x\,\Delta p$$ for each, in units of ħ?
2. For the spreading run, graph $$\Delta x^2$$ against $$t^2$$. Find the slope and the intercept and compare them with $$(\hbar/2m\sigma)^2$$ and $$\sigma^2$$.
3. From your slope, find $$\hbar^2/2m$$ for the electron (use $$\hbar = 0.6582$$ eV·fs) and compare it with 0.0381 eV·nm².
4. Does Δp change as the packet spreads? Explain why not.
5. Describe what Measure x did to the packet. Compare Δx and Δp just after the measurement with their values before it.

## Uncertainty

The demo computes Δx and Δp from ψ on a 25 pm grid. Its momentum comes from differences between neighboring points (a fourth order formula, so the grid error is about (k dx)⁴/30, a few parts in 10⁵ here); compare your Δp at launch with $$\hbar c/2\sigma$$ and say how large the remaining difference is. Say also why recording too late, once the packet reaches the absorbing edge, would spoil Δx.

## Questions

1. If you know an electron's position to within 0.1 nm, how well can you know its momentum, in eV/c? What spread of kinetic energy does that suggest for an electron in an atom?
2. Why does a narrower packet spread faster?
3. A grain of dust of mass $$10^{-15}$$ kg is located to within 1 μm. How long would its position spread take to double? Why don't we see quantum spreading of everyday objects?
4. After Measure x, the packet is narrow again. Has the electron's momentum become more or less certain? What does that say about measuring position precisely?

## What to hand in

Prelab answers, both table copies with their graphs and fits, your $$\hbar c$$ and $$\hbar^2/2m$$ with uncertainties and comparisons, your description of the measurement, and answers to the questions. Identify simulated data.
