# Charged Particles in Matter: Stopping Power and Range
Student laboratory · Medical Physics

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/charged-particles.html?ws=mp-charged-particles)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Proton 150 MeV; Proton 70 MeV; Proton 230 MeV; Bone in the way; Lung in the way; Lead range shifter; Alpha 150 MeV/u; Carbon 290 MeV/u; No straggling; Stopping power curves; Range against PSTAR. This worksheet uses Stopping power curves and Range against PSTAR.

**Using the demo.**

- **Beam in water** is a side view of a water tank, with or without a slab of another material in front of the water. Fire sends particles in one at a time; each track is drawn colored by its energy, and a dot marks a proton lost to a nuclear reaction. The graph under the tank shows the dose against depth: the model's curve for a broad beam, and the dose the drawn tracks have put down so far. Clear tracks starts the count again.
- The detector is a small chamber at the depth set on the card (drag it in the tank or on the graph, or type a depth). The readouts give the dose there as a percentage of the peak, the mean energy of the protons still going there, and the stopping power at that energy. They also give the number of tracks that stopped, the mean depth where they stopped and the spread (standard deviation) of those depths.
- **Stopping power** and **Range** graph the mass stopping power and the CSDA range against kinetic energy on log scales, for the particle and the material chosen on the card. The energy slider moves the marked point. The Range graph also shows the NIST PSTAR ranges of protons in water and a power law fitted to them.
- Blind (in the Lab fold) hides the model's ranges, peak depth and widths, so you find them with the detector.
- Record reading stores, in the Beam view, the beam, the slab, the detector depth and what it reads, and the track statistics; in the Stopping power and Range views, the particle, material, energy, stopping power, range and stopping power relative to water. Export to worksheet sends graph readings to the Data table. Clear starts a new series.

</details>

## Goal

Find how fast protons lose energy in water and other materials, and test the continuous slowing down range against the NIST PSTAR table.

## Background

A charged particle moving through matter loses energy mostly to the electrons it passes. The mean energy lost per unit path is the stopping power $$S = -dE/dx$$; divided by the density $$\rho$$ it becomes the mass stopping power $$S/\rho$$, in MeV cm²/g, which depends much less on the material. For a particle of charge $$ze$$ and speed $$\beta c$$, the Bethe formula is

$$\frac{S}{\rho} = K z^2 \frac{Z}{A} \frac{1}{\beta^2} \left[ \frac{1}{2} \ln\frac{2 m_e c^2 \beta^2 \gamma^2 W_{max}}{I^2} - \beta^2 \right],$$

with $$K = 0.307075$$ MeV cm²/mol, $$Z/A$$ the material's electrons per unit atomic mass, $$I$$ its mean excitation energy (75.0 eV for water in PSTAR) and $$W_{max}$$ the largest energy one collision can give an electron. Below a few hundred MeV the $$1/\beta^2$$ factor dominates: the slower the particle, the faster it loses energy.

If the particle loses energy continuously at the mean rate, the path it travels before stopping is the CSDA (continuous slowing down approximation) range

$$R(E) = \int_0^E \frac{dE'}{S(E')}.$$

For protons in water over the therapy range, $$R$$ follows the Bragg–Kleeman rule $$R = \alpha E^p$$ closely, with $$p$$ near 1.75. The dose a broad beam puts down at depth $$z$$ is the fluence times $$S/\rho$$ there. As the protons slow, $$S$$ rises, so the dose rises with depth and peaks just before the protons stop: the Bragg peak. Energy loss is a random process, so protons of the same energy stop at slightly different depths (range straggling), which, with any energy spread of the beam, keeps the peak finite.

NIST PSTAR CSDA ranges of protons in liquid water (from the NIST PSTAR database, Berger, Coursey, Zucker and Chang, with the methods of ICRU Report 49; values as tabulated on the UCL proton therapy wiki):

- 10 MeV: 0.123; 20 MeV: 0.426; 30 MeV: 0.885; 40 MeV: 1.489; 50 MeV: 2.227; 60 MeV: 3.093; 70 MeV: 4.080; 80 MeV: 5.184; 90 MeV: 6.398; 100 MeV: 7.718 g/cm²
- 120 MeV: 10.66; 140 MeV: 13.98; 150 MeV: 15.77; 160 MeV: 17.65; 180 MeV: 21.65; 200 MeV: 25.96; 220 MeV: 30.55; 230 MeV: 32.95; 250 MeV: 37.94 g/cm²

## Before the lab

1. Show that if $$R = \alpha E^p$$, then $$S = E^{1-p}/(\alpha p)$$, and that a proton with residual range $$r$$ has $$S = r^{1/p - 1}/(p\,\alpha^{1/p})$$. Why does this predict a dose that grows without limit at the end of the range, and what in a real beam keeps the peak finite?
2. From the PSTAR ranges at 100 MeV and 200 MeV, find $$p$$ and $$\alpha$$ (with $$R$$ in g/cm² and $$E$$ in MeV). Use them to predict the range at 150 MeV and compare with the table.
3. An alpha particle has twice the proton's charge and about four times its mass. At 150 MeV per nucleon (600 MeV in all) it moves at almost exactly the speed of a 150 MeV proton. How far does it go in water compared with the 150 MeV proton: about a quarter as far, about half, about as far, or about four times as far? Decide before you open the demo.

## Safety

No hazards in the virtual lab. In a real proton beam room, nobody stays in the room while the beam is on; the treatment room is entered only after the beam is off and the interlocks allow it.

## Procedure

**Part 1: Stopping power and range.** (1) Choose the Stopping power curves setup. For protons in water, set Energy per nucleon to 10, 20, 50, 70, 100, 150, 200 and 230 MeV (click its value and type each energy), and press Record reading at each. Press Export to worksheet, then Clear. (2) Set Energy per nucleon to 150 MeV and, choosing each in Material for the graph, record a reading for Compact bone, Lung tissue, PMMA, Aluminum and Lead. For each, also write down the Material: ρ, I, Z/A readout (Analysis 3 uses it). (3) Switch to the Range view and check that its CSDA range R readout matches the one recorded. Export these readings to the worksheet before you clear them. (4) With Material for the graph on Water and Energy per nucleon at 150 MeV, choose Alpha particle (⁴He) in Particle and write its Mass stopping power S/ρ and CSDA range R readouts in your answer to Question 2 (no reading to record). Then set Particle back to Proton.

## Data

| Reading | Particle and material | Kinetic energy $$T$$ (MeV) | Mass stopping power $$S/\rho$$ (MeV cm²/g) | CSDA range $$R$$ (g/cm²) | Relative stopping power | $$\ln T$$ | $$\ln(S/\rho)$$ |
|---|---|---|---|---|---|---|---|
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |

## Analysis

1. Graph $$\ln(S/\rho)$$ against $$\ln T$$ for protons in water and look at the residuals of the straight line fit. Work out the slope between 70 and 230 MeV from those two points and compare it with $$1 - p$$ from Before the lab 2. Over what energies is a single power law a poor description, and why?
2. Compare the recorded CSDA ranges with PSTAR at the same energies (in mm of water).
3. At 150 MeV, compare the mass stopping powers of bone, lung, PMMA, aluminum and lead with water's. Using the Bethe formula, explain the order from $$Z/A$$ and $$I$$ (the demo's readouts give both). Why is the relative stopping power (per centimeter) of lead so different from its mass stopping power ratio?

## Uncertainty

Use the fit's standard errors for slopes and intercepts. The model itself differs from PSTAR by less than 0.2 mm in range from 10 to 250 MeV; compare that with the differences you found in Analysis 2.

## Questions

1. ICRU Report 90 recommends $$I$$ = 78 eV for water instead of PSTAR's 75 eV. From the Bethe formula, estimate by how much the stopping power at 150 MeV and the range would change.
2. Was Before the lab 3 right? Compare the alpha particle's stopping power and range from Part 1 (4) with the proton's at 150 MeV, as ratios. Account for both ratios with the $$z^2$$ in the Bethe formula and the range integral $$R(E) = \int_0^E dE'/S(E')$$.

## What to hand in

Prelab answers, the table with its graph and fit, the comparisons with PSTAR, the stopping powers of the materials, and answers to the questions. Identify simulated data.
