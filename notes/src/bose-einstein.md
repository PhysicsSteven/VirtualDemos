---
title: Bose–Einstein Condensation
level: Intro modern physics or thermodynamics
time: 15 to 25 minutes
---
## What students should come away with

- A particle at temperature T has a thermal de Broglie wavelength λ_T = h/√(2πmkT), and that is the size of the wave packet it can be squeezed into without violating the uncertainty principle. Cold means long wavelength: λ_T grows as 1/√T.
- A gas is classical while λ_T is much smaller than the spacing between atoms. Once Nλ_T²/L² (in two dimensions) is about 1, the packets overlap and quantum statistics take over.
- Bosons can share a state. Below the overlap temperature a growing share of the atoms drops into the single lowest level, and that share is one wavefunction with one phase: a Bose–Einstein condensate. The condensate has almost no spread in velocity, which is how the first one was seen in 1995.

## Before class

Students should know the de Broglie wavelength, the particle in a box levels E = (h²/8mL²)(nx² + ny²), and the idea of a Maxwell–Boltzmann speed distribution. The demo is an ideal (noninteracting) gas of N atoms in a square box in two dimensions, with the exact Bose–Einstein occupation of every level (the chemical potential is solved so the occupations add up to N). The **Atoms in the box** view draws each excited atom as a packet the size of its thermal spread, moving at the speed of its level, with the condensate drawn as the exact ground state wavefunction; an energy ladder on the left shows which level each atom is in, and a thermometer on the right the temperature (1 nK to 1 µK, logarithmic). **Velocities** draws how many atoms move at each velocity, the picture a time of flight image gives. **Condensate fraction** graphs the ground state share against temperature. Play runs time 10,000 times slower than the atoms and, with Cool down pressed, lowers the temperature a factor of ten every 8 seconds.

## Running it in class

1. **Cool a hot gas to a condensate.** Ask Q1 and Q2 first. Press Play. At 1 µK the 100 rubidium atoms are dots (packets 0.19 µm across, spacing 1 µm) spread over thousands of levels. Near 35 nK the packets are as big as the spacing and touch; below about 20 nK the ladder empties into its bottom rung, and at 1 nK about 98 of the 100 atoms are in the ground state, one broad bump filling the box.
2. **Where the packets touch.** Hold the gas at 35 nK. Only 2 of 100 atoms are condensed: in a finite box the pile up is gradual (Q3). Drag the temperature slider down slowly and watch the readout.
3. **Almost all condensed, with phase as color.** One color across the whole condensate; the few excited packets carry their own colors and stripes. Switch the color to Density and back.
4. **A lighter atom: sodium.** Ask Q4. The ladder empties at about 130 nK instead of 35 nK.
5. **Few atoms, big box.** A dilute gas must be colder: 20 atoms in a 20 µm box touch at 1.8 nK.
6. **The velocity picture of 1995.** Ask Q5. Press Play and watch the spike grow out of the thermal hill as the gas cools, then switch to Flat for the image a camera gives.
7. **Condensate fraction.** The curve for this box, with the overlap temperature marked. Change N and L and see the curve slide.

## Questions

**Q1.** Rubidium 87 has a mass of 86.909 u. Find its thermal de Broglie wavelength at 1.00 µK, and at 35 nK. By what factor does it grow?

**Q2.** 100 atoms sit in a square box 10.0 µm on a side. What is the mean spacing between neighbors, L/√N? At what temperature does the thermal wavelength of rubidium 87 equal that spacing?

**Q3.** The demo shows only 2 of the 100 atoms in the ground state at 35 nK, where the packets just touch, but 37 at 10 nK and 98 at 1 nK. In this box the lowest level is at E₀/k = 0.55 nK and the next at 1.38 nK. Why is the pile up gradual rather than a sharp transition at one temperature?

**Q4.** Sodium 23 is 3.78 times lighter than rubidium 87. For the same 100 atoms in the same box, at what temperature do sodium's packets touch? Check it against the thermometer mark in the sodium setup.

**Q5.** In the velocity view at 170 nK (the temperature where the 1995 JILA condensate appeared), how fast do the thermal rubidium atoms move, √(2kT/m)? The ground state of a 10 µm box has a velocity spread of about h/(2mL) along each axis. Find it, and explain why the condensate shows up as a sharp spike.

**Q6.** For a uniform three dimensional ideal Bose gas the condensation temperature is kT_c = (2πħ²/m)(n/2.612)^(2/3). Liquid helium 4 has a density of 0.1451 g/cm³. Find T_c and compare it with the measured lambda point, 2.17 K. Why is the agreement only rough?

## Common misconceptions

- **"The atoms slow down and stop at the bottom of the box."** They drop into the lowest quantum state, whose wavefunction fills the whole box; the condensate is as spread out as the box allows, not a puddle in one corner.
- **"A condensate forms when the atoms get close together."** The density does not change as the gas cools here. What changes is the size of each atom's wave packet, which grows until the packets overlap.
- **"Any particle would do this."** Only bosons (integer total spin, an even number of neutrons plus protons plus electrons) can share a level. Fermions such as helium 3 or lithium 6 fill the levels one each, like the electrons in a metal.
- **"Each atom still has its own wavefunction inside the condensate."** The condensed atoms are described by one wavefunction with one phase, which is why two condensates interfere like two coherent light beams.
- **"Cooling is the whole story."** The gas must also stay a gas: at these densities it would rather be a solid, so real experiments use dilute vapors (far fewer atoms per volume than air) that take a long time to find their true state.

## Physics behind the demo

- Levels E = (h²/8mL²)(nx² + ny²) with nx, ny ≥ 1; each holds ⟨n⟩ = 1/(e^((E − μ)/kT) − 1) atoms; μ is solved so that Σ⟨n⟩ = N, exactly over every level with nx² + ny² ≤ 200,000 and with Weyl's density of states beyond that (the correction is below one part in 10⁵).
- The condensate density is N₀(4/L²) sin²(πx/L) sin²(πy/L). Each excited atom is drawn as a minimum uncertainty packet whose momentum spread is the thermal √(mkT) per axis, so its position spread is σ = λ_T/(2√2π); it moves at ħπ√(nx² + ny²)/(mL) and bounces off the walls. The height of the surface is the square root of the density.
- The ladder samples the occupations once per atom with a fixed random number per atom, so the same atoms sink as the gas cools; the readouts are the averages.
- Velocity view: the condensate's exact momentum spread (the Fourier transform of the box ground state) plus the thermal atoms as the semiclassical Bose distribution 1/(e^(mv²/2kT + x) − 1), normalized to N − N₀.
- Left out: interactions between atoms (which widen a real condensate and shift the transition by a few percent), the third dimension (an infinite two dimensional ideal gas would not condense; a finite one crosses over gradually, as shown), and the trap (real condensates sit in harmonic traps, where kT_c = 0.94 ħω N^(1/3)).
- Constants: h, k and u from CODATA 2022; atomic masses from AME2020. The 1995 rubidium numbers (about 2000 atoms, 170 nK, 2.5 × 10¹² per cm³) are from Anderson et al., Science 269, 198 (1995).
