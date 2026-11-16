# The Bragg Peak: One Energy, a Spread Out Peak, and Photons
Student laboratory · Medical Physics

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/bragg-peak.html?ws=mp-bragg-peak)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** 150 MeV in water; 70 MeV, lowest; 230 MeV, highest; 150 MeV in bone; 150 MeV in fat; Spread out peak, 10 to 15 cm; Equal weights; Layers too far apart; Deep target, 20 to 28 cm; Protons against photons; 6 MV photons alone. This worksheet uses 150 MeV in water, Spread out peak, 10 to 15 cm and Protons against photons.

**Using the demo.**

- The picture is a side view of a phantom on a bench: a tank of water, or a block of muscle, fat or bone. The beam comes in from the left, and the dose it puts down is drawn as a color wash, from blue at 10 % through green and yellow to red at 100 %, then magenta above it. Beam on shows the particles moving: protons slow down and stop, and photons keep going.
- **One energy** is a single proton energy, from 70 to 230 MeV. The IBA Proteus ONE's S2C2 synchrocyclotron extracts 230 MeV and delivers 70 to 226.7 MeV at the patient. **Spread out peak** stacks energy layers to cover a target, and **Protons and photons** adds a 6 MV photon beam aimed at the same target. In the last two views the dose is given as a percentage of the target's mean dose.
- The detector is a Bragg peak chamber on a scanning carriage. Drag it in the phantom or on the graph, or type a depth. The electrometer and the readouts give the dose there.
- The setup card sets the medium, the energy and its spread, the target's depths, the spacing of the energy layers and their weights (fitted flat, or all equal), and which beam the phantom shows.
- Blind (in the Lab fold) hides the ranges, widths and dose ratios in the readouts, so you find them with the detector.
- Record reading stores the setup, the detector depth and the dose there; in Protons and photons it stores both beams' doses. Export to worksheet sends each view's readings to its own Data table. Clear starts a new series.

</details>

## Goal

Measure where a proton beam puts its dose and how that depends on the energy and the tissue, build a spread out Bragg peak that covers a target and find what it costs at the entrance, and compare the dose a single proton field and a single 6 MV photon field give in front of, in and behind the same target.

## Background

A proton loses energy mostly to the electrons it passes, at a rate (the stopping power $$S$$) that grows as it slows, roughly as $$1/\beta^2$$. A broad proton beam's dose at depth $$z$$ is the proton fluence times the mass stopping power there, so the dose rises slowly with depth and then sharply in the last centimeter, where the protons are slowest: the Bragg peak. Past the end of the range there are no primary protons left and the dose falls to nearly zero.

The depth where the protons stop is set by the energy. For protons in water the CSDA range follows the Bragg–Kleeman rule

$$R = \alpha E^p,$$

with $$\alpha \approx 0.0022$$ cm MeV⁻ᵖ and $$p \approx 1.77$$ (Bortfeld 1997). Energy loss is random, so protons of one energy stop over a spread of depths, about 1.1 % of the range (range straggling). That spread, the beam's own energy spread and the loss of about 1.2 % of the protons per centimeter to nuclear reactions set the height and width of the peak. The depth of the distal 80 % dose, $$R_{80}$$, falls almost exactly at the CSDA range, which is why it is the usual measure of a beam's range.

A single peak is a few millimeters wide, much narrower than most tumors. A treatment covers a target by delivering a series of energy layers, each with a slightly shorter range, and weighting them so that their sum is flat over the target: a spread out Bragg peak (SOBP). On the Proteus ONE the energies run from 70 to 230 MeV (ranges of about 4.1 to 33 cm in water); the energy is lowered with a variable degrader of beryllium, graphite and aluminum, and a range shifter of 4.1 cm water equivalent thickness reaches shallower targets (Pidikiti et al. 2018).

A megavoltage photon beam behaves differently. The photons set electrons moving forward, so the dose builds up over the first centimeter or two to a maximum at $$d_{max}$$, then falls slowly as the photons are absorbed and the beam spreads out from its source:

$$D(d) \propto e^{-\mu_{eff} d} \left( \frac{\text{SSD} + d_{max}}{\text{SSD} + d} \right)^2 \quad (d > d_{max}).$$

Measured percentage depth dose for a 6 MV beam, 10 × 10 cm² field, source to surface distance (SSD) 100 cm, in water (Varian VitalBeam; Chowdhury et al., Int. J. Radiol. Radiat. Ther. 11(4), 100, 2024):

- surface 50.7 %; $$d_{max}$$ 1.5 cm (100 %); 80 % at 6.6 cm; 66.8 % at 10 cm; 50 % at 15.2 cm
- British Journal of Radiology Supplement 25 reference values: $$d_{max}$$ 1.5 cm; 67.5 % at 10 cm; 80 % at 6.7 cm

NIST PSTAR CSDA ranges of protons in liquid water (from the NIST PSTAR database, Berger, Coursey, Zucker and Chang, with the methods of ICRU Report 49; values as tabulated on the UCL proton therapy wiki):

- 70 MeV: 4.080; 100 MeV: 7.718; 150 MeV: 15.77; 200 MeV: 25.96; 230 MeV: 32.95 g/cm²

Densities of the PSTAR materials: muscle (ICRP) 1.04, adipose tissue (ICRP) 0.92 and compact bone (ICRU) 1.85 g/cm³.

## Before the lab

1. Use the Bragg–Kleeman rule with $$\alpha$$ = 0.0022 cm MeV⁻ᵖ and $$p$$ = 1.77 to find the energy whose range in water is 15 cm, and the energy whose range is 10 cm. About how many layers 0.3 cm apart in range does a target from 10 to 15 cm deep need, and what energies do they span?
2. In a spread out peak, why does the deepest layer need the largest weight? Think about which layers put dose at the far end of the target and which put dose at the near end.
3. For the 6 MV beam, find the inverse square factor from $$d_{max}$$ = 1.5 cm to 10 cm at SSD 100 cm. With the measured 66.8 % at 10 cm, find the effective attenuation coefficient $$\mu_{eff}$$ between those depths.
4. Treatment plans often allow 3.5 % of the range plus 1 mm for range uncertainty (Paganetti 2012). Find the margin for a target whose distal edge is 15 cm deep, and for one at 28 cm.

## Safety

No hazards in the virtual lab. In a real proton treatment room, nobody stays in the room while the beam is on; the room is entered only after the beam is off and the interlocks allow it.

## Procedure

**Part 1: One energy.** Open the **Lab** fold and tick **Blind**. Press the **150 MeV in water** setup. Move the detector by typing its depth: click the number beside the **Detector depth** slider, type the depth in cm and press Enter (or drag the detector); the dose there shows in the readout **At the detector**. Press **Record reading** at the entrance (depth 0), at the peak (step the depth by 0.01 cm until the dose is largest), and at the depths past the peak, to 0.01 cm, where the dose is nearest 80 % and 20 % of the peak. For the other beams, untick **Blind** and read the answers from the readouts. Type 70 and then 230 into the number beside the **Beam energy** slider; for each, write down **Peak depth**, **Depth of 80 % (distal), R80** and **Distal falloff, R80 − R20** (so R20 is R80 plus the falloff), and press **Record reading** at the entrance (depth 0). Then, at 150 MeV, pick Muscle (ICRP), Adipose tissue (ICRP) and Compact bone (ICRU) in the **Medium** menu and write down **Depth of 80 % (distal), R80** in each. Press **Export to worksheet**, then **Clear**. Fill in the Single peaks and Tissues tables by hand from these readings and readouts.

**Part 2: A spread out peak.** Untick **Blind** in the Lab fold. Press the **Spread out peak, 10 to 15 cm** setup (layers 0.3 cm apart, weights fitted flat). Type each detector depth as in Part 1 and press **Record reading** at the entrance (0) and at every centimeter from 10 to 15 cm. Write the readouts **Energy layers**, **Entrance dose** and **Lowest and highest in the target** into the Spread out peaks table. Press the **Equal weights** setup and write down the same three readouts (no readings to record). Then press **Fitted flat** (under Layer weights) and leave **Target ends at** at 15 cm. For targets starting at 13, 11, 9, 7 and 5 cm (widths 2 to 10 cm), type each start into the number beside the **Target starts at** slider, record the dose at depth 0, and write the same three readouts into the table. Press **Export to worksheet**, then **Clear**.

**Part 3: Protons and photons.** Press the **Protons against photons** setup (a target from 10 to 15 cm, both beams scaled to the same mean dose over the target). Type each detector depth, 0, 1.5, 5, 10, 12.5, 15, 17, 20 and 25 cm, and press **Record reading**; it stores both beams' doses, which the readout **At the detector** shows. Press **Export to worksheet**, then copy the doses into the Protons and photons table.

## Data

| Reading | Beam and medium | Depth $$z$$ (cm) | Dose (% of the peak) |
|---|---|---|---|
| | | | |
| | | | |
| | | | |

| Reading | Target and layers | Weights | Depth $$z$$ (cm) | Dose (% of the target's mean) |
|---|---|---|---|---|
| | | | | |
| | | | | |
| | | | | |

| Reading | Target | Depth $$z$$ (cm) | Protons (% of the target's mean) | Photons (% of the target's mean) |
|---|---|---|---|---|
| | | | | |
| | | | | |
| | | | | |

### Single peaks

| $$E$$ (MeV) | Entrance dose (% of the peak) | Peak depth (cm) | $$R_{80}$$ (cm) | $$R_{20}$$ (cm) | $$R_{20} - R_{80}$$ (cm) | PSTAR range (cm) | $$R_{80}$$ − PSTAR (mm) |
|---|---|---|---|---|---|---|---|
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |

### Tissues at 150 MeV

| Medium | Density (g/cm³) | $$R_{80}$$ (cm) | $$R_{80}$$ in water ÷ $$R_{80}$$ |
|---|---|---|---|
| | | | |
| | | | |
| | | | |

### Spread out peaks

| Target (cm) | Width $$w$$ (cm) | Weights | Layers | Entrance dose (%) | Lowest in target (%) | Highest in target (%) |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |
| | | | | | | |

### Protons and photons

| Depth $$z$$ (cm) | Protons (%) | Photons (%) | Photons ÷ protons |
|---|---|---|---|
| | | | |
| | | | |
| | | | |

## Analysis

1. Fill in the Single peaks table from Part 1. How close is $$R_{80}$$ to the PSTAR range? How do the entrance dose and the width $$R_{20} - R_{80}$$ change with energy?
2. Graph $$R_{20} - R_{80}$$ (vertical) against $$R_{80}$$ (across) for the three energies in water and fit a straight line (with an intercept). Give the slope with its uncertainty.
3. Fill in the Tissues table. The ratio of the water range to the tissue range is the tissue's relative stopping power. Which tissue stops protons fastest, and why (think about electrons per cm³)?
4. From Part 2, compare the lowest and highest dose in the target with fitted and with equal weights. Explain why equal weights tilt the dose.
5. Fill in the Spread out peaks table. Graph the entrance dose (vertical) against the width $$w$$ (across) for the fitted weights and fit a straight line (with an intercept). Give the slope with its uncertainty, and look at the residuals: does the entrance dose rise in proportion to the width? Explain the shape from how much each extra layer adds at the entrance compared with what it adds in the target.
6. Fill in the Protons and photons table. Find the mean of the photons ÷ protons ratio in front of the target (0 to 5 cm). Behind the target (17 to 25 cm), what dose does each beam give? Where does each beam give its highest dose?

## Uncertainty

The detector depth is read to 0.01 cm, so each depth you found by stepping it (Part 1 at 150 MeV) is uncertain by about half a step (0.005 cm). On the distal edge the dose changes by several percent per 0.01 cm, so the dose you read at the depth nearest a level also tells you how far from the level you are. Carry the depth uncertainty into $$R_{20} - R_{80}$$ at 150 MeV (two depths) and use the fit's standard errors for the slopes and intercepts. The model's CSDA ranges differ from PSTAR by less than 0.2 mm in water. The photon curve passes within 0.05 % of the measured points; it is a fit, and beyond 15.2 cm it is extrapolated, so treat the 17 to 25 cm photon readings as uncertain by a few percent.

## Questions

1. Real photon treatments use several fields from different directions. Why does that spare the entrance region, and why does the integral dose (the total energy put into the patient) still stay higher than for protons?

## What to hand in

Prelab answers, the tables with their graphs and fits, the ranges, widths, entrance doses and dose ratios with uncertainties and comparisons with PSTAR, and answers to the questions. Identify simulated data.
