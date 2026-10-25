# The Hydrogen Atom: Finding the Electron
Student laboratory · Modern Physics

Textbook: OpenStax *University Physics*, Vol. 3, §§7.1 and 8.1. Access for free at https://openstax.org/details/books/university-physics-volume-3.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/hydrogen-orbitals.html?setup=1s)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** 1s, 2s, 2p<sub>z</sub>, 3d<sub>z²</sub>, 4f<sub>xyz</sub>, and 1s + 2p<sub>z</sub>, a superposition. Any state up to n = 6 can be picked under State.

**Using the demo.**

- The wave functions are the exact solutions of the Schrödinger equation for one electron and a point nucleus, $$\psi = R_{nl}(r)\,Y_{lm}(\theta, \phi)$$. Spin, fine structure and the Lamb shift are left out.
- Distances are in Bohr radii, $$a_0 = 0.0529177$$ nm. Energies use 13.598 eV, the measured ionization energy of hydrogen.
- Pick the shell and subshell (1s, 2p, 3d, …) and the orbital m. Real orbitals (the default) are the chemistry shapes, 2p<sub>z</sub>, 3d<sub>z²</sub> and so on; with m = 0 they are the same as the complex states.
- This state lists the energy, the quantum numbers, the numbers of nodes, the mean radius ⟨r⟩, the most probable radius and the angular momentum, all from the exact solution. The plot below the cloud is the radial probability density P(r); hover it to read P(r) and the probability inside that radius.
- Measure empties the atom and then finds the electron one position at a time, each drawn at random from $$\lvert\psi\rvert^2$$, faster and faster. Each find is an independent simulated measurement. Changing the state starts the measurement again.
- Superposition adds a second state, half and half. Its readouts give the energy difference, the beat period h/ΔE, the wavelength hc/ΔE of the light it would give out, and whether the center of the cloud moves.
- Record reading stores the orbital, n, l and m, the number of positions found N, their mean distance from the nucleus, its standard error $$s/\sqrt{N}$$ (s is the standard deviation of the finds), s itself, and the most probable radius. It works on one state at a time, after Measure has found some positions. Export to worksheet sends the readings to the Data table below. Clear starts a new series, which goes into a new copy of the table.

</details>

## Goal

Find the electron in a hydrogen atom many times over, use the finds to measure how far from the nucleus it is in each state, and compare with the exact results. Then use superpositions of two states to see which pairs give out light, and at what wavelength.

## Background

An electron in hydrogen has no orbit. Its state is a wave function ψ, and $$\lvert\psi\rvert^2\,dV$$ is the probability of finding it in a small volume dV (§7.1). The states are labeled by n, l and m (§8.1), and their energies depend on n alone:

$$E_n = -\frac{13.6\ \text{eV}}{n^2} .$$

The probability of finding the electron between r and r + dr is $$P(r)\,dr$$, with $$P(r) = r^2\lvert R_{nl}(r)\rvert^2$$ after the angles are summed over. For the ground state P(r) peaks at $$r = a_0$$, the radius of Bohr's first orbit, and for every state with $$l = n - 1$$ it peaks at $$n^2a_0$$. The mean distance has an exact formula, a standard result of the solution that OpenStax does not derive:

$$\langle r\rangle = \frac{a_0}{2}\left[3n^2 - l(l + 1)\right] .$$

Each measurement of the position gives one value of r. The mean of N measurements scatters about ⟨r⟩ with a standard error $$s/\sqrt{N}$$, where s is the spread of single measurements.

A superposition of two states with energies $$E_A$$ and $$E_B$$ changes with time, repeating once per beat period $$h/(E_B - E_A)$$. If the center of the electron's charge moves back and forth, the atom radiates light of energy $$hf = E_B - E_A$$. That happens only when l changes by one, $$\Delta l = \pm 1$$ (and m by 0 or ±1): the selection rule.

## Before the lab

1. Find the energies of the n = 1, 2 and 3 states, and the wavelength of the photon given out from n = 3 to n = 2, using $$hc = 1239.84$$ eV·nm.
2. Find ⟨r⟩ for the 1s, 2s and 2p states, in units of $$a_0$$. Why is the 2s electron farther out on average than the 2p electron, when both have n = 2?
3. For the 1s state, $$\lvert\psi\rvert^2$$ is largest at the nucleus, yet the most probable distance is $$a_0$$. Explain.
4. Which of the pairs in the second Data table should give out light? Give the reason for each.

## Safety

No hazards in the virtual lab.

## Procedure

**Finding the electron.** For the real orbitals 1s, 2s, 2p<sub>z</sub>, 3s, 3p<sub>z</sub>, 3d<sub>z²</sub>, 4p<sub>z</sub> and 4f<sub>z³</sub> (all with m = 0), measure the electron's position until at least 5000 positions have been found, then record a reading. Measure is in the 3D cloud view, not in Slice.

**How the mean settles.** Clear the readings. Pick 1s, start a new measurement and record a reading when about 100, 1000 and 10,000 positions have been found, all in the same run. Send this run to a new copy of the table.

**Light from superpositions.** For each pair in the second table, set the first state as the state, add the second state and write the energy difference, the beat period, the wavelength and whether the center of the cloud moves. Watch the cloud for a few beat periods.

## Data

| Reading | Orbital | n | l | Positions found N | Mean r of the finds (a₀) | Standard error (a₀) | Most probable r (a₀) | 3n² − l(l + 1) |
|---|---|---|---|---|---|---|---|---|
| | | | | | | | | |
| | | | | | | | | |
| | | | | | | | | |

Work out the last column yourself.

| Superposition | Energy difference ΔE (eV) | Beat period (fs) | Wavelength λ (nm) | Does the center move? |
|---|---|---|---|---|
| 1s + 2s | | | | |
| 1s + 2pz | | | | |
| 1s + 3dz² | | | | |
| 2s + 2pz | | | | |
| 2pz + 3dz² | | | | |
| 3dz² + 4fz³ | | | | |

## Analysis

1. Graph the mean r of the finds against $$3n^2 - l(l + 1)$$ for the first run. Find the slope and the intercept and compare them with $$a_0/2$$ and zero. Does every state fall on the line within its standard error?
2. For the states with $$l = n - 1$$ (1s, 2p, 3d, 4f), compare the most probable r with $$n^2a_0$$, Bohr's orbits. For the same states, how much farther out than the most probable r is the mean?
3. Compare the 2s and 2p readings, and the 3s, 3p and 3d readings. How does l change the mean distance within a shell?
4. For the second run, how does the standard error change from 100 to 10,000 finds? Is the mean within two standard errors of 1.5 $$a_0$$ each time?
5. Which superpositions moved the center of the cloud? Check each against the selection rule and your prelab answer. Identify the light from the 1s + 2p<sub>z</sub> and 2p<sub>z</sub> + 3d<sub>z²</sub> pairs in the hydrogen spectrum.
6. Check that the beat period equals h/ΔE for each moving pair, using $$h = 4.1357$$ eV·fs. What happened to the 2s + 2p<sub>z</sub> pair, and why?

## Uncertainty

The demo's finds are random, so your means scatter; the standard error says by how much. Compare the deviation of each mean from the exact ⟨r⟩ with its standard error: about two thirds should lie within one standard error. Find the spread of single finds, $$s = (\text{standard error})\times\sqrt{N}$$, for each state, say which states have the widest spread of distances, and why their means are the least certain for the same N.

## Questions

1. The electron in 1s is found inside $$r = a_0$$ about 32% of the time. Is it ever found far outside? What does that say about the size of an atom?
2. Why does the mean of the finds settle down as N grows, while each single find stays as unpredictable as the first?
3. A hydrogen atom in the 2s state cannot get rid of its energy by giving out one photon. Use your superposition results to explain why. (It lives about a tenth of a second, against 1.6 ns for 2p.)
4. Bohr's model put the electron on a circle of radius $$n^2a_0$$. Which part of your data agrees with Bohr, and which part shows that the electron has no orbit?

## What to hand in

Prelab answers, both table copies with your graph and fit, the table of superpositions, your comparison of the means with ⟨r⟩ and with Bohr's radii, your selection rule check, and answers to the questions. Identify simulated data.
