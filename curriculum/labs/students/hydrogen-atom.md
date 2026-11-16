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
4. Which of the four pairs in the second Data table will give out light? Go through them one at a time before you open the demo, and for each say what about its two states makes the center of the cloud swing back and forth, or keeps it still.

## Safety

No hazards in the virtual lab.

## Procedure

**Finding the electron.** Stay in the 3D cloud view (Measure is not in Slice) and click the 1s preset. For each of the real orbitals 1s, 2s, 2p<sub>z</sub>, 3s, 3p<sub>z</sub>, 3d<sub>z²</sub>, 4p<sub>z</sub> and 4f<sub>z³</sub>: (1) under State, click the shell and subshell button (1s, 2s, 2p, …) and check that Real is on and the Orbital m chip is the m = 0 one (p<sub>z</sub>, d<sub>z²</sub>, f<sub>z³</sub>); (2) press Measure and wait until the counter in the view ("positions measured") stops, about 20 s, which is well past 5000; (3) press Record reading. When all eight are recorded, press Export to worksheet.

**How the mean settles.** Press Clear under Readings. Pick 1s, press Measure once and, in that same run, press Record reading as the counter passes 100, 1000 and 10,000 positions. The finds speed up (about 4000 a second by 10,000), so a count somewhat above each target is fine; use the N the demo records. Press Export to worksheet: this run goes into a new copy of the table.

**Light from superpositions.** For each pair in the second table: (1) pick the first state under State; (2) tick Add a second state, half and half, and choose the second state in the list below it (B = …); (3) write the readouts ΔE = E<sub>B</sub> − E<sub>A</sub>, Beat period h/ΔE and Photon λ = hc/ΔE as they read (a λ shown in μm goes in the table in nm: 1 μm = 1000 nm; a readout that says none goes in as none), and from the Electric dipole readout whether the center of the cloud (gold dot) moves; (4) press Play and watch the cloud for at least two beat periods. Turn the second state off before you record single states again.

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
| 2s + 2pz | | | | |
| 2pz + 3dz² | | | | |

## Analysis

1. Graph the mean r of the finds against $$3n^2 - l(l + 1)$$ for the first run. Find the slope and the intercept and compare them with $$a_0/2$$ and zero. Does every state fall on the line within its standard error?
2. For the states with $$l = n - 1$$ (1s, 2p, 3d, 4f), compare the most probable r with $$n^2a_0$$, Bohr's orbits. For the same states, how much farther out than the most probable r is the mean?
3. Compare the 2s and 2p readings, and the 3s, 3p and 3d readings. How does l change the mean distance within a shell?
4. For the second run, how does the standard error change from 100 to 10,000 finds? Is the mean within two standard errors of 1.5 $$a_0$$ each time?
5. Which superpositions moved the center of the cloud? Check each against the selection rule and your prelab answer. Identify the light from the 1s + 2p<sub>z</sub> and 2p<sub>z</sub> + 3d<sub>z²</sub> pairs in the hydrogen spectrum.
6. Check that the beat period equals h/ΔE for one moving pair of your choice, using $$h = 4.1357$$ eV·fs.

## Uncertainty

The demo's finds are random, so your means scatter; the standard error says by how much. Compare the deviation of each mean from the exact ⟨r⟩ with its standard error: about two thirds should lie within one standard error.

## Questions

1. The electron in 1s is found inside $$r = a_0$$ about 32% of the time. Is it ever found far outside? What does that say about the size of an atom?
2. Why does the mean of the finds settle down as N grows, while each single find stays as unpredictable as the first?
3. Which pairs moved the center of the cloud, and did they match your choices in Before the lab 4? For each pair that kept the center still, use its readouts (ΔE, the beat period and the Electric dipole) to explain what it lacks, and then say what a pair of states needs in order to give out light.

## What to hand in

Prelab answers, both table copies with your graph and fit, the table of superpositions, your comparison of the means with ⟨r⟩ and with Bohr's radii, your selection rule check, and answers to the questions. Identify simulated data.
