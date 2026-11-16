# Charged Particles in Matter: The Bragg Peak and Slabs
Student laboratory · Medical Physics

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/charged-particles.html?ws=mp-charged-particles-bragg)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Proton 150 MeV; Proton 70 MeV; Proton 230 MeV; Bone in the way; Lung in the way; Lead range shifter; Alpha 150 MeV/u; Carbon 290 MeV/u; No straggling; Stopping power curves; Range against PSTAR. This worksheet uses Stopping power curves, the Proton 150 MeV and Proton 70 MeV setups, No straggling and Bone in the way.

**Using the demo.**

- **Beam in water** is a side view of a water tank, with or without a slab of another material in front of the water. Fire sends particles in one at a time; each track is drawn colored by its energy, and a dot marks a proton lost to a nuclear reaction. The graph under the tank shows the dose against depth: the model's curve for a broad beam, and the dose the drawn tracks have put down so far. Clear tracks starts the count again.
- The detector is a small chamber at the depth set on the card (drag it in the tank or on the graph, or type a depth). The readouts give the dose there as a percentage of the peak, the mean energy of the protons still going there, and the stopping power at that energy.
- **Stopping power** graphs the mass stopping power against kinetic energy on log scales, for the particle and the material chosen on the card, and its readouts give the relative stopping power (per centimeter, against water).
- Blind (in the Lab fold) hides the model's ranges, peak depth and widths, so you find them with the detector.
- Record reading stores, in the Beam view, the beam, the slab, the detector depth and what it reads; in the Stopping power view, the particle, material, energy, stopping power, range and stopping power relative to water. Export to worksheet sends graph readings to the first Data table and beam readings to the second. Clear starts a new series.

</details>

## Goal

Measure the Bragg peak and its distal edge at three energies, compare the range with the NIST PSTAR table, and find the water equivalent thickness of bone, lung, PMMA and lead.

## Background

A charged particle moving through matter loses energy mostly to the electrons it passes. The mean energy lost per unit path is the stopping power $$S = -dE/dx$$; divided by the density $$\rho$$ it becomes the mass stopping power $$S/\rho$$, in MeV cm²/g. For protons it is given by the Bethe formula, and below a few hundred MeV it grows as the proton slows, roughly as $$1/\beta^2$$. If the particle loses energy continuously at the mean rate, the path it travels before stopping is the CSDA (continuous slowing down approximation) range $$R(E) = \int_0^E dE'/S(E')$$.

The dose a broad beam puts down at depth $$z$$ is the fluence times $$S/\rho$$ there. As the protons slow, $$S$$ rises, so the dose rises with depth and peaks just before the protons stop: the Bragg peak. Energy loss is a random process, so protons of the same energy stop at slightly different depths (range straggling, a spread of about 1 % of the range for protons in water). The straggling, any energy spread of the beam and the loss of about 1 % of the protons per centimeter to nuclear reactions set the height and width of the peak.

A slab of another material moves the peak. Its water equivalent thickness $$t_w$$ is the depth of water that takes away the same energy; to a good approximation $$t_w = t \, \rho \, (S/\rho)_m / (S/\rho)_w$$, the thickness times the relative stopping power.

NIST PSTAR CSDA ranges of protons in liquid water (from the NIST PSTAR database, Berger, Coursey, Zucker and Chang, with the methods of ICRU Report 49; values as tabulated on the UCL proton therapy wiki):

- 10 MeV: 0.123; 20 MeV: 0.426; 30 MeV: 0.885; 40 MeV: 1.489; 50 MeV: 2.227; 60 MeV: 3.093; 70 MeV: 4.080; 80 MeV: 5.184; 90 MeV: 6.398; 100 MeV: 7.718 g/cm²
- 120 MeV: 10.66; 140 MeV: 13.98; 150 MeV: 15.77; 160 MeV: 17.65; 180 MeV: 21.65; 200 MeV: 25.96; 220 MeV: 30.55; 230 MeV: 32.95; 250 MeV: 37.94 g/cm²

## Before the lab

1. A proton beam of 150 MeV crosses 2.0 cm of compact bone (1.85 g/cm³) whose mass stopping power is 0.931 times that of water. Find the relative stopping power, the water equivalent thickness, and how far the Bragg peak moves toward the surface.

## Safety

No hazards in the virtual lab. In a real proton beam room, nobody stays in the room while the beam is on; the treatment room is entered only after the beam is off and the interlocks allow it.

## Procedure

**Part 1: Relative stopping powers.** Choose the Stopping power curves setup and set Energy per nucleon to 150 MeV (click its value to type). Choosing each in Material for the graph, record a reading for Compact bone, Lung tissue, PMMA and Lead. Press Export to worksheet, then Clear.

**Part 2: The Bragg curve.** (1) Open the Lab fold and check Blind: hide the model's ranges, peak and widths. Choose the Proton 150 MeV setup (energy spread 0, straggling and nuclear reactions on). (2) Set Detector depth (click its value to type a depth, or drag the detector) and read At the detector: dose. Record a reading at the entrance (depth 0), at the peak (the depth of largest dose, to 0.01 cm) and at the depths past the peak, to 0.01 cm, where the dose is nearest 90 %, 80 % and 20 % of the peak. (3) Do the same at 70 MeV (the Proton 70 MeV setup), then at 200 MeV (type it into Energy per nucleon). (4) Choose the No straggling setup (150 MeV) and record a reading at its peak depth. Export the readings to the worksheet before you clear them. The Bragg curves table takes these depths: the 90 %, 80 % and 20 % depths are $$R_{90}$$, $$R_{80}$$ and $$R_{20}$$.

**Part 3: Slabs in the beam.** Keep Blind on. (1) Choose the Bone in the way setup (150 MeV, 2.0 cm of compact bone, nuclear reactions on). Find the depth past the peak where the dose is nearest 80 %, as in Part 2, and record a reading there. (2) In Slab before the water, choose Lung tissue (ICRP) and set Slab thickness to 2.0 cm; then PMMA (acrylic) at 2.0 cm; then Lead at 1.0 cm; then None. Find and record the 80 % depth for each. Export the readings to the worksheet. The shift in the Water equivalent thickness table is the no slab $$R_{80}$$ minus the $$R_{80}$$ with the slab.

## Data

| Reading | Particle and material | Kinetic energy $$T$$ (MeV) | Mass stopping power $$S/\rho$$ (MeV cm²/g) | CSDA range $$R$$ (g/cm²) | Relative stopping power |
|---|---|---|---|---|---|
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |

| Reading | Beam and slab | Depth $$z$$ (cm) | Dose (% of the peak) | Mean energy (MeV) |
|---|---|---|---|---|
| | | | | |
| | | | | |
| | | | | |

### Bragg curves

| $$T$$ (MeV) | Entrance dose (% of the peak) | Peak depth (cm) | $$R_{90}$$ (cm) | $$R_{80}$$ (cm) | $$R_{20}$$ (cm) | PSTAR range (cm) | $$R_{80}$$ − PSTAR (mm) |
|---|---|---|---|---|---|---|---|
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |

### Water equivalent thickness

| Slab | Thickness $$t$$ (cm) | $$R_{80}$$ with the slab (cm) | Shift (cm) | $$t_w$$ = shift + $$t$$ (cm) | Measured $$t_w/t$$ | Relative stopping power from Part 1 |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |
| | | | | | | |

## Analysis

1. Fill in the Bragg curves table. How does $$R_{80}$$ compare with the CSDA range? How do the entrance dose and the width $$R_{20} - R_{80}$$ change with energy? What does the No straggling peak depth tell you about where the end of range is compared with the peak?
2. Fill in the Water equivalent thickness table and compare the measured $$t_w/t$$ with the relative stopping power at 150 MeV from Part 1. Why might they differ slightly?

## Uncertainty

The detector depth is read to 0.01 cm, so each depth found by stepping it is uncertain by about half a step; on the distal edge the dose changes by several percent per 0.01 cm, so the dose you read at the depth nearest a level also tells you how far from the level you are. The shift behind a slab is the difference of two $$R_{80}$$ readings, so its uncertainty is larger than one reading's. The model itself differs from PSTAR by less than 0.2 mm in range from 10 to 250 MeV; compare that with your other uncertainties.

## Questions

1. Treatment plans often allow 3.5 % of the range plus 1 mm for range uncertainty. For a tumor whose distal edge is 20 cm deep, how many millimeters is that, and how does it compare with the distal falloff width $$R_{20} - R_{80}$$ you measured?

## What to hand in

Prelab answer, the tables with their graphs, the ranges, widths and water equivalent thicknesses with uncertainties and comparisons with PSTAR, and the answer to the question. Identify simulated data.
