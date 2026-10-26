# Proton Therapy QA: Morning Checks, Drift and Patient Plans
Student laboratory · Medical Physics

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/proton-qa.html?ws=mp-proton-qa)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Daily QA, all good; Output 4 % high; Energy 0.5 % high, at 150 MeV; Same error, at 100 MeV; Steering off 2.5 mm; Scanning magnet gain 3 % high; Spots 15 % larger; Output drifting; Mystery drift; Patient QA, clean delivery; Patient QA, spots shifted 2 mm; Range error, measured at the edge; Patient QA, spots 20 % larger. This worksheet uses all of them.

**Using the demo.**

- The picture is the treatment room: the gantry's nozzle points down at the couch, where the QA device sits, cabled to the electrometer on a cart. The green room lasers cross at isocenter. Run QA delivers the beam, spot by spot, and the lamp above the room shows the beam is on.
- **Daily QA** measures four things at the QA energy: the output (dose at 2 cm depth in a water equivalent phantom), the range R90 (from a stack of ion chambers 2 mm apart), and the position and size of nine spots on a scintillating screen. The graph shows one check in detail; the gauges beside it show all four against their tolerances.
- The **Machine faults** in the setup card are what is wrong with the machine. In a real QA you do not know them: the point of QA is to find them.
- **Drift over weeks** runs the same QA one morning at a time on a machine that may be changing. Choose what is happening to it, or choose Mystery and find out. Next day and Next 10 days run the mornings; Start over begins again.
- **Patient QA** delivers a patient plan (a target 8 to 14 cm deep) to water equivalent slabs over a 2D array of 1020 ion chambers and compares the measured dose with the plan by gamma analysis. Set the measurement depth, the gamma criteria and the delivery errors in the setup card.
- Record reading stores the last daily QA, every morning run since the last record (in Drift over weeks), or the patient QA result at all three gamma criteria. Export to worksheet sends each mode's readings to its own Data table. Clear starts a new series.

</details>

## Goal

Run the morning QA of a pencil beam scanning proton machine and decide whether it can treat patients; find how big the reading noise is and which fault each check catches; measure how a range error from an energy error grows with energy; follow a drifting machine and predict when it will fail; and see what gamma analysis of a patient plan can and cannot detect.

## Background

A proton plan is only as good as the machine that delivers it. Every morning, before the first patient, a physicist or therapist checks that the machine still gives the beam it gave at commissioning: the dose per monitor unit (the output), the depth the protons reach (the range), and where and how big the scanned spots are. AAPM Task Group 224 (Arjomandy et al., Med. Phys. 46(8), e678, 2019) sets the daily tolerances:

- output: within ±3 % of the baseline
- range: within ±1 mm of the baseline
- spot position: within ±2 mm of where it was planned (absolute), and within ±1 mm relative to the other spots (here, each spot's place measured from the central spot), which a scanning magnet gain error moves while a steering error does not

TG-224 sets no daily spot size check; centers that trend it use about ±10 % of the baseline (auto trending daily QA program of a ProBeam center, J. Appl. Clin. Med. Phys., 2021, PMC7856486).

The machine here is modeled on the IBA Proteus ONE at Willis-Knighton (Pidikiti et al., J. Appl. Clin. Med. Phys. 19(1), 94, 2018): a C230 cyclotron whose beam is slowed by a degrader of beryllium, graphite and aluminum to any energy from 70 to 226.7 MeV, then scanned across the field by magnets, spot by spot. Its range is defined at R90, the depth past the Bragg peak where the dose falls to 90 % of the peak, and its output is measured at 2 cm depth, in the plateau. Over a year its daily output and spot position varied by less than 2 %.

The range of protons in water follows the Bragg–Kleeman rule

$$R = \alpha E^p,$$

with $$p \approx 1.77$$ (Bortfeld 1997). If the energy is off by a small fraction $$\Delta E / E$$, the range is off by

$$\frac{\Delta R}{R} = p \, \frac{\Delta E}{E}.$$

The range stack reads the dose every 2 mm, which is too coarse to read R90 straight off a peak a few millimeters wide; its software fits each morning's readings with the commissioning curve, shifted and scaled, and reports R90 as the baseline R90 plus the shift.

A spot's size at isocenter in air, $$\sigma_{air}$$, grows in the patient by multiple Coulomb scattering:

$$\sigma^2 = \sigma_{air}^2 + \sigma_{MCS}^2.$$

The demo uses the spot sizes in air measured by Langner et al. (J. Appl. Clin. Med. Phys. 18(3), 96, 2017) on a Varian ProBeam, since Pidikiti gives the Proteus ONE values only in a figure: in x and y, 5.75 and 6.15 mm at 70 MeV, 4.37 and 4.27 mm at 160 MeV, 3.61 and 3.86 mm at 245 MeV. Every check compares with the baseline, not with the absolute size.

Each plan is also checked before the first treatment. The plan is delivered to a phantom, the dose in a plane is measured with a 2D array (here 32 × 32 parallel plate chambers 4.5 mm across, 7.62 mm apart, as in the MatriXX; Arjomandy et al., Med. Phys. 35, 3889, 2008), and each measured point is compared with the plan by the gamma index (Low et al., Med. Phys. 25, 656, 1998):

$$\Gamma = \min \sqrt{\frac{r^2}{(\Delta d)^2} + \frac{\delta^2}{(\Delta D)^2}},$$

where the minimum is over the points of the plan, $$r$$ is the distance from the measured point to a plan point, $$\delta$$ the difference between the measured dose and the plan's dose there, $$\Delta d$$ the distance criterion and $$\Delta D$$ the dose criterion (here a percentage of the plan's maximum). A point passes if $$\Gamma \le 1$$. Pidikiti et al. required at least 95 % of points to pass at 3 %/3 mm; AAPM TG-218 (Miften et al., Med. Phys. 45(4), e53, 2018) recommends 3 %/2 mm with at least 95 % passing and action below 90 %, both with points below 10 % of the maximum left out.

The reading noise of one QA run (output 0.2 %, each range chamber 0.3 % of the peak, spot centroids 0.1 mm, spot size 1 %) and the day to day variation of the machine in Drift over weeks (output 0.5 %, energy 0.035 %, steering 0.15 mm, spot size 1.5 %, each one standard deviation) are the demo's choices, not measured values.

## Before the lab

1. With $$p$$ = 1.77, by what percentage does the range change for an energy error of 0.5 %? The range of 150 MeV protons in water is about 15.8 cm. How many millimeters is that, and does it pass the 1 mm tolerance? What about at 100 MeV (range 7.7 cm)?
2. The scanning magnets deflect the beam by an angle proportional to their current. If the current calibration is 3 % high, how far is a spot planned 8 cm from the central axis misplaced? A spot on the axis?
3. The output is measured at 2 cm depth, in the plateau of the Bragg curve. Why there, and not at the peak?
4. A spot has $$\sigma_{air}$$ = 4.5 mm and spreads by $$\sigma_{MCS}$$ = 3 mm by scattering at the measurement depth. If $$\sigma_{air}$$ is 20 % too large, by what percentage is $$\sigma$$ too large there?
5. A measured point is 2 mm from the plan point it agrees with best, and there the doses differ by 1.5 % of the maximum. Find $$\Gamma$$ at 3 %/3 mm and at 2 %/2 mm. Does it pass each?

## Safety

No hazards in the virtual lab. In a real treatment room, nobody stays in the room while the beam is on; the QA device is set up at the lasers and the room is closed before the beam is turned on. A failed daily QA stops treatments until a physicist has found and fixed the cause.

## Procedure

**Part 1: The morning QA.** Choose Daily QA, all good (150 MeV). Run the QA and record the reading six times. Then choose each of Output 4 % high, Energy 0.5 % high, at 150 MeV, Steering off 2.5 mm, Scanning magnet gain 3 % high and Spots 15 % larger; run the QA and record the reading once for each. Send the readings to the worksheet before you clear them.

**Part 2: Range against energy.** Choose Energy 0.5 % high, at 150 MeV. Run the QA and record the reading at 70, 100, 150, 200 and 226.7 MeV. Send the readings to the worksheet before you clear them.

**Part 3: A drifting machine.** Choose Output drifting (30 mornings already run) and record the readings. Send them to the worksheet and clear them. Then choose Mystery drift, run 40 mornings, look at each check on the graph, and record the readings. Send them to the worksheet.

**Part 4: Patient QA.** Choose Patient QA, clean delivery (a square target, measured at 11 cm, in the middle of the target). Run the QA and record the reading. Set the spot shift to 0.5, 1.0, 1.5, 2.0, 2.5 and 3.0 mm, recording each. Set the shift back to 0 and the range error to +3 mm, and record at 11 cm and at 14.2 cm (the distal edge). Then choose Patient QA, spots 20 % larger and record the reading. Send the readings to the worksheet.

## Data

| Reading | Faults | $$E$$ (MeV) | Output (% of baseline) | R90 − baseline (mm) | Largest spot error (mm) | Spot size change (%) |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |
| | | | | | | |

| Reading | Machine | Day | Output (% of baseline) | R90 − baseline (mm) | Largest spot error (mm) | Spot size change (%) |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |
| | | | | | | |

| Reading | Delivery errors | Depth (cm) | 3 %/3 mm (% passing) | 3 %/2 mm (% passing) | 2 %/2 mm (% passing) |
|---|---|---|---|---|---|
| | | | | | |
| | | | | | |
| | | | | | |

### Reading noise at 150 MeV

| Check | Mean | Standard deviation | Tolerance | Tolerance ÷ standard deviation |
|---|---|---|---|---|
| | | | | |
| | | | | |
| | | | | |

### Range against energy

| $$E$$ (MeV) | Baseline R90 (cm) | $$\Delta R$$ (mm) | $$\Delta R / R$$ (%) | Pass or fail |
|---|---|---|---|---|
| | | | | |
| | | | | |
| | | | | |

### Spot shift and gamma

| Spot shift (mm) | 3 %/3 mm (% passing) | 3 %/2 mm (% passing) | 2 %/2 mm (% passing) |
|---|---|---|---|
| | | | |
| | | | |
| | | | |

## Analysis

1. From the six healthy runs in Part 1, fill in the Reading noise table for the output, the R90 difference, the largest spot error and the spot size change. How many standard deviations of noise fit inside each tolerance? Could noise alone fail a healthy machine on a given morning?
2. For each fault in Part 1, say which checks failed and which passed. Explain why each fault shows up only in the checks it does. Which faults would a check of the central spot alone miss?
3. Fill in the Range against energy table. Graph $$\Delta R$$ (mm) against the baseline R90 (cm) and fit a straight line (with an intercept). From the slope and the 0.5 % energy error, find $$p$$ with its uncertainty, and compare with 1.77. Look at the residuals: is $$\Delta R / R$$ the same at every energy? At which energies does this fault pass the range check?
4. Graph the output of Output drifting against the day and fit a straight line (with an intercept). Give the drift rate with its uncertainty. Predict the day the fitted line reaches 103 %, with its uncertainty from the fit. On which morning did the QA first fail? Explain why, with day to day variation, a single morning can fail before the line crosses 103 % or pass after it.
5. For the Mystery drift, graph each check against the day. Which one is changing? Fit it and give its rate with an uncertainty, and predict when it will leave its tolerance. Then press Show the answer and compare.
6. Fill in the Spot shift and gamma table from Part 4. At each criterion, find the largest shift that still passes 95 %. Why do the criteria differ, and why do the failing points sit on the edges of the field?
7. Compare the passing rates for the +3 mm range error at 11 cm and at 14.2 cm. Explain from the shape of the spread out peak. What does this say about where to measure, and about what gamma analysis in one plane can miss? Look too at the reading with spots 20 % larger: which QA, daily or patient, catches that fault, and why does the other miss it?

## Uncertainty

Each daily reading carries the reading noise you measured in Analysis 1; quote QA results to that precision. The fits in Analyses 3 to 5 use equal weights, so their standard errors come from the scatter of the points about the line; carry them into $$p$$ and into the predicted crossing day (for the crossing day, the slope's uncertainty usually dominates). The passing rates count points: with about 150 points above the threshold, one point is about 0.7 %. The spot sizes in air are another machine's, and the noise levels and day to day variation are the demo's choices, so compare patterns, not absolute numbers, with a real machine.

## Questions

1. The output check uses one energy and one field. Name a fault that would pass this morning's output check but still give a patient the wrong dose.
2. An energy error of 0.5 % passes the range check at 100 MeV and fails it at 150 MeV. If a center can check only one energy each morning, which should it choose, and why do many centers check several?
3. Why is it better to catch a drift in the trend than to wait for the QA to fail? What would you do on the morning the trend predicts the output will cross 3 % next week?
4. A plan passes gamma analysis at 3 %/3 mm with 99 % of points. Does that prove the patient will get the planned dose? Give two errors that gamma analysis in one plane would not catch.
5. The plan is computed on a 1 mm grid, but each chamber averages the dose over a face 4.5 mm across. Where in the field does that averaging matter, and in which direction does it push the measured dose?
6. Proton plans multiply the physical dose by an RBE of 1.1. Does the QA here measure physical dose or RBE weighted dose? Would an error in the RBE show up in any of these checks?

## What to hand in

Prelab answers, the tables with their graphs and fits, the noise levels, the Bragg–Kleeman exponent, the drift rates and predicted crossing days with uncertainties, the gamma passing rates with your conclusions, and answers to the questions. Identify simulated data.
