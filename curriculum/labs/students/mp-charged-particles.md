# Charged Particles in Matter: Stopping Power, Range and the Bragg Peak
Student laboratory · Medical Physics

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/charged-particles.html?ws=mp-charged-particles)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Proton 150 MeV; Proton 70 MeV; Proton 230 MeV; Bone in the way; Lung in the way; Lead range shifter; Alpha 150 MeV/u; Carbon 290 MeV/u; No straggling; Stopping power curves; Range against PSTAR. This worksheet uses Stopping power curves, Range against PSTAR, the three proton setups, No straggling and Bone in the way.

**Using the demo.**

- **Beam in water** is a side view of a water tank, with an optional slab of another material in front of the water. Fire sends particles in one at a time; each track is drawn colored by its energy, and a dot marks a proton lost to a nuclear reaction. The graph under the tank shows the dose against depth: the model's curve for a broad beam, and the dose the drawn tracks have put down so far. Clear tracks starts the count again.
- The detector is a small chamber at the depth set on the card (drag it in the tank or on the graph, or type a depth). The readouts give the dose there as a percentage of the peak, the mean energy of the protons still going there, and the stopping power at that energy. They also give the number of tracks that stopped, the mean depth where they stopped and the spread (standard deviation) of those depths.
- **Stopping power** and **Range** graph the mass stopping power and the CSDA range against kinetic energy on log scales, for the particle and the material chosen on the card. The energy slider moves the marked point. The Range graph also shows the NIST PSTAR ranges of protons in water and a power law fitted to them.
- Blind (in the Lab fold) hides the model's ranges, peak depth and widths, so you find them with the detector.
- Record reading stores, in the Beam view, the beam, the slab, the detector depth and what it reads, and the track statistics; in the Stopping power and Range views, the particle, material, energy, stopping power, range and stopping power relative to water. Export to worksheet sends graph readings to the first Data table and beam readings to the second. Clear starts a new series.

</details>

## Goal

Find how fast protons lose energy in water and other materials, test the continuous slowing down range against the NIST PSTAR table, measure the Bragg peak and its distal edge at several energies, measure range straggling from individual proton histories, and find the water equivalent thickness of bone, lung and lead.

## Background

A charged particle moving through matter loses energy mostly to the electrons it passes. The mean energy lost per unit path is the stopping power $$S = -dE/dx$$; divided by the density $$\rho$$ it becomes the mass stopping power $$S/\rho$$, in MeV cm²/g, which depends much less on the material. For a particle of charge $$ze$$ and speed $$\beta c$$, the Bethe formula is

$$\frac{S}{\rho} = K z^2 \frac{Z}{A} \frac{1}{\beta^2} \left[ \frac{1}{2} \ln\frac{2 m_e c^2 \beta^2 \gamma^2 W_{max}}{I^2} - \beta^2 \right],$$

with $$K = 0.307075$$ MeV cm²/mol, $$Z/A$$ the material's electrons per unit atomic mass, $$I$$ its mean excitation energy (75.0 eV for water in PSTAR) and $$W_{max}$$ the largest energy one collision can give an electron. Below a few hundred MeV the $$1/\beta^2$$ factor dominates: the slower the particle, the faster it loses energy.

If the particle loses energy continuously at the mean rate, the path it travels before stopping is the CSDA (continuous slowing down approximation) range

$$R(E) = \int_0^E \frac{dE'}{S(E')}.$$

For protons in water over the therapy range, $$R$$ follows the Bragg–Kleeman rule $$R = \alpha E^p$$ closely, with $$p$$ near 1.75. The dose a broad beam puts down at depth $$z$$ is the fluence times $$S/\rho$$ there. As the protons slow, $$S$$ rises, so the dose rises with depth and peaks just before the protons stop: the Bragg peak. Energy loss is a random process, so protons of the same energy stop at slightly different depths (range straggling, a spread of about 1 % of the range for protons in water). The straggling, any energy spread of the beam and the loss of about 1 % of the protons per centimeter to nuclear reactions set the height and width of the peak.

A slab of another material moves the peak. Its water equivalent thickness $$t_w$$ is the depth of water that takes away the same energy; to a good approximation $$t_w = t \, \rho \, (S/\rho)_m / (S/\rho)_w$$, the thickness times the relative stopping power.

NIST PSTAR CSDA ranges of protons in liquid water (from the NIST PSTAR database, Berger, Coursey, Zucker and Chang, with the methods of ICRU Report 49; values as tabulated on the UCL proton therapy wiki):

- 10 MeV: 0.123; 20 MeV: 0.426; 30 MeV: 0.885; 40 MeV: 1.489; 50 MeV: 2.227; 60 MeV: 3.093; 70 MeV: 4.080; 80 MeV: 5.184; 90 MeV: 6.398; 100 MeV: 7.718 g/cm²
- 120 MeV: 10.66; 140 MeV: 13.98; 150 MeV: 15.77; 160 MeV: 17.65; 180 MeV: 21.65; 200 MeV: 25.96; 220 MeV: 30.55; 230 MeV: 32.95; 250 MeV: 37.94 g/cm²

## Before the lab

1. Show that if $$R = \alpha E^p$$, then $$S = E^{1-p}/(\alpha p)$$, and that a proton with residual range $$r$$ has $$S = r^{1/p - 1}/(p\,\alpha^{1/p})$$. Why does this predict a dose that grows without limit at the end of the range, and what in a real beam keeps the peak finite?
2. From the PSTAR ranges at 100 MeV and 200 MeV, find $$p$$ and $$\alpha$$ (with $$R$$ in g/cm² and $$E$$ in MeV). Use them to predict the range at 150 MeV and compare with the table.
3. For a 100 MeV proton ($$m_p c^2$$ = 938.272 MeV), find $$\gamma$$, $$\beta^2$$ and $$\beta^2\gamma^2$$. With $$W_{max} \approx 2 m_e c^2 \beta^2\gamma^2$$ (the exact value is 0.12 % smaller), $$Z/A$$ = 0.5551 and $$I$$ = 75.0 eV, evaluate the Bethe formula for water.
4. A proton beam of 150 MeV crosses 2.0 cm of compact bone (1.85 g/cm³) whose mass stopping power is 0.931 times that of water. Find the relative stopping power, the water equivalent thickness, and how far the Bragg peak moves toward the surface.
5. If range straggling is 1.1 % of the range, estimate the spread of the stopping depths at 70 MeV and at 200 MeV. Which peak will be wider and lower compared with the entrance dose?

## Safety

No hazards in the virtual lab. In a real proton beam room, nobody stays in the room while the beam is on; the treatment room is entered only after the beam is off and the interlocks allow it.

## Procedure

**Part 1: Stopping power and range.** Choose Stopping power curves. For protons in water, record readings at 10, 20, 50, 70, 100, 150, 200 and 230 MeV (type each energy into the readout), and send them to the worksheet. Clear the readings; then, at 150 MeV, record readings for compact bone, lung tissue, PMMA, aluminum and lead. Switch to the Range view and check that the CSDA ranges are the same as those recorded. Send the readings to the worksheet before you clear them.

**Part 2: The Bragg curve.** Turn on Blind. Choose Proton 150 MeV (energy spread 0, straggling and nuclear reactions on). With the detector, record the dose at the entrance (depth 0), at the peak (find the depth of largest dose to 0.01 cm) and at the depths on the far side of the peak, to 0.01 cm, where the dose is nearest 90 %, 80 % and 20 % of the peak. Do the same at 70, 100 and 200 MeV. Then choose No straggling and find the depth of the peak at 150 MeV. Send the readings to the worksheet before you clear them.

**Part 3: Range straggling.** In the Beam view at 70 MeV, turn off nuclear reactions (so every proton reaches its end) and fire at least 500 tracks; then record a reading. Clear the tracks between energies, and do the same at 100, 150 and 200 MeV. Send the readings to the worksheet before you clear them.

**Part 4: Slabs in the beam.** Turn nuclear reactions back on. Choose Bone in the way (150 MeV, 2.0 cm of compact bone). Find the depth of the distal 80 % dose, as in Part 2, and record it. Do the same with 2.0 cm of lung tissue, 2.0 cm of PMMA and 1.0 cm of lead, and with no slab. Send the readings to the worksheet.

## Data

| Reading | Particle and material | Kinetic energy $$T$$ (MeV) | Mass stopping power $$S/\rho$$ (MeV cm²/g) | CSDA range $$R$$ (g/cm²) | Relative stopping power | $$\ln T$$ | $$\ln(S/\rho)$$ |
|---|---|---|---|---|---|---|---|
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |

| Reading | Beam and slab | Depth $$z$$ (cm) | Dose (% of the peak) | Mean energy (MeV) | Tracks stopped | Mean end depth (cm) | Spread of end depths (cm) |
|---|---|---|---|---|---|---|---|
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |

### Bragg curves

| $$T$$ (MeV) | Entrance dose (% of the peak) | Peak depth (cm) | $$R_{90}$$ (cm) | $$R_{80}$$ (cm) | $$R_{20}$$ (cm) | PSTAR range (cm) | $$R_{80}$$ − PSTAR (mm) |
|---|---|---|---|---|---|---|---|
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |

### Range straggling

| $$T$$ (MeV) | Mean end depth $$\bar z$$ (cm) | Spread $$\sigma$$ (cm) | Uncertainty of $$\sigma$$ (cm) | $$\sigma/\bar z$$ (%) | $$\ln \bar z$$ | $$\ln \sigma$$ |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |
| | | | | | | |

### Water equivalent thickness

| Slab | Thickness $$t$$ (cm) | $$R_{80}$$ with the slab (cm) | Shift (cm) | $$t_w$$ = shift + $$t$$ (cm) | Measured $$t_w/t$$ | Relative stopping power from Part 1 |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |
| | | | | | | |

## Analysis

1. Graph $$\ln(S/\rho)$$ against $$\ln T$$ for protons in water and look at the residuals of the straight line fit. Work out the slope between 70 and 230 MeV from those two points and compare it with $$1 - p$$ from Before the lab 2. Over what energies is a single power law a poor description, and why?
2. Compare the recorded CSDA ranges with PSTAR at the same energies (in mm of water). Fit $$\ln R$$ against $$\ln T$$ for the PSTAR table from 70 to 230 MeV and give $$\alpha$$ and $$p$$ with their uncertainties. Compare with Bortfeld's values for water, $$\alpha$$ = 0.0022 cm MeV⁻ᵖ and $$p$$ = 1.77.
3. At 150 MeV, compare the mass stopping powers of bone, lung, PMMA, aluminum and lead with water's. Using the Bethe formula, explain the order from $$Z/A$$ and $$I$$ (the demo's readouts give both). Why is the relative stopping power (per centimeter) of lead so different from its mass stopping power ratio?
4. Fill in the Bragg curves table. How does $$R_{80}$$ compare with the CSDA range? How do the entrance dose and the width $$R_{20} - R_{80}$$ change with energy? What does the No straggling peak depth tell you about where the end of range is compared with the peak?
5. Fill in the Range straggling table, with the uncertainty of each spread $$\sigma/\sqrt{2(N-1)}$$ for $$N$$ tracks. Graph $$\ln \sigma$$ against $$\ln \bar z$$ and find the slope and intercept. Compare with Bortfeld's fit $$\sigma = 0.012 \, \bar z^{0.935}$$ (cm). Then compare $$R_{20} - R_{80}$$ from Part 2 with $$\sigma$$ at the same energy and find their ratio.
6. Fill in the Water equivalent thickness table and compare the measured $$t_w/t$$ with the relative stopping power at 150 MeV from Part 1. Why might they differ slightly?

## Uncertainty

The detector depth is read to 0.01 cm, so each depth found by stepping it is uncertain by about half a step; on the distal edge the dose changes by several percent per 0.01 cm, so the dose you read at the depth nearest a level also tells you how far from the level you are. The spread of $$N$$ simulated stopping depths has a statistical uncertainty of about $$\sigma/\sqrt{2(N-1)}$$, and their mean one of $$\sigma/\sqrt{N}$$; carry these into Analysis 5 and use the fit's standard errors for the slope and intercept. The model itself differs from PSTAR by less than 0.2 mm in range from 10 to 250 MeV; compare that with your other uncertainties.

## Questions

1. Turn nuclear reactions off and on at 200 MeV. What happens to the entrance dose compared with the peak, and why does the effect grow with energy?
2. Choose Carbon 290 MeV/u. Its range is close to that of 150 MeV protons. Why is its peak so much narrower? What does a real carbon beam show past its peak that this model leaves out?
3. ICRU Report 90 recommends $$I$$ = 78 eV for water instead of PSTAR's 75 eV. From the Bethe formula, estimate by how much the stopping power at 150 MeV and the range would change.
4. Choose Lung in the way. PSTAR's lung tissue has a density of 1.05 g/cm³, but an inflated lung has about a quarter of that. How would the peak move for a real lung, and why does an error in the lung density in a treatment plan matter more for protons than for X rays?
5. Treatment plans often allow 3.5 % of the range plus 1 mm for range uncertainty. For a tumor whose distal edge is 20 cm deep, how many millimeters is that, and how does it compare with the straggling width you measured?
6. Choose Lead range shifter and turn on Stretch the tracks sideways. Why does lead widen the beam so much more than the same water equivalent thickness of plastic would?

## What to hand in

Prelab answers, the tables with their graphs and fits, the ranges, widths and water equivalent thicknesses with uncertainties and comparisons with PSTAR and Bortfeld, and answers to the questions. Identify simulated data.
