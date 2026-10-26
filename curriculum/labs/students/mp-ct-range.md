# CT Numbers and Proton Range: Calibration, Stopping Power and Margins
Student laboratory · Medical Physics

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/ct-range.html?ws=mp-ct-range)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Calibration scan, 120 kV; Same phantom, 80 kV; Both curves; Bone on the substitute curve; Substitute curve without Teflon; Mystery tissue; Brain, 3.5 % + 1 mm; Prostate through the femoral head; Lung tumor; Lung, CT numbers 10 HU high; Prostate, tissue I values 10 % low; Prostate planned on the substitute curve; Brain, no margin. This worksheet uses all of them.

**Using the demo.**

- The demo has three steps, chosen at the top: **Scan the phantom**, **CT number to stopping power**, and **Range and margins**. The button beside them runs the step: Scan, Measure the range shift, or Deliver.
- **Scan the phantom** shows a CT scanner with a calibration phantom: a 20 cm water cylinder with eight inserts of known composition. The image is the slice, and the graph plots each insert's mean CT number against its electron density, with the Schneider fit. Choose the tube voltage, the insert whose region of interest the readouts show, and the display window.
- **CT number to stopping power** shows the two calibration curves, stopping power ratio against CT number, with the reference tissues. The picture is a proton beam line: a slab of the chosen tissue in front of a water tank, and the Bragg peak moved closer by the slab. Measure the range shift gives the slab's water equivalent thickness. Choose Mystery as the tissue for a tissue you are not told; New mystery gives the next one and Show the answer names it.
- **Range and margins** plans one proton beam to a target in a patient. The plan reads each tissue's stopping power off the chosen curve and places the distal edge (R90) at the target's far side plus the margin. The two error sliders are what is wrong that the planner does not know; Deliver shows where the beam really stops. The graph shows the planned and delivered dose along the beam.
- Record reading stores the step's results: every insert of the scan, every reference tissue, the mystery slab, or the plan. Export to worksheet sends each step's readings to its own Data table. Clear starts a new series.

</details>

## Goal

Calibrate a CT scanner for proton planning with the stoichiometric method; measure how far a calibration built straight from tissue substitute plastics misses real tissue; test the calibration with a mystery tissue in a proton beam; and find how CT number errors, mean excitation energy errors and the calibration method move the range in a patient, and how big a margin they need.

## Background

A proton plan needs the stopping power of every voxel of the patient, but a CT scanner measures X-ray attenuation. The CT number of a voxel is its linear attenuation coefficient relative to water's,

$$H = 1000 \left( \frac{\mu}{\mu_w} - 1 \right),$$

in Hounsfield units (HU): water reads 0 and air about −1000. At CT energies (a tube voltage of 80 to 140 kV, mean detected photon energies of 55 to 80 keV) a material's attenuation per unit volume is a sum over its elements,

$$\mu = \rho N_A \sum_i \frac{w_i}{A_i} \left( Z_i K_{KN} + Z_i^{2.86} K_{coh} + Z_i^{4.62} K_{ph} \right),$$

where $$w_i$$ is the fraction by weight of element $$i$$, $$Z_i$$ and $$A_i$$ its atomic number and molar mass, and the three terms are Compton scattering (Klein–Nishina, per electron), coherent scattering and the photoelectric effect, with constants $$K$$ that belong to the scanner's spectrum (Schneider, Pedroni and Lomax, Phys. Med. Biol. 41, 111, 1996). The Compton term is proportional to the electron density; the photoelectric term grows steeply with $$Z$$. Relative to water only the ratios $$k_{coh} = K_{coh}/K_{KN}$$ and $$k_{ph} = K_{ph}/K_{KN}$$ remain.

The stopping power of a material for protons of speed $$\beta c$$ is, by the Bethe formula,

$$S = C \frac{\rho_e}{\beta^2} L, \qquad L = \ln \frac{2 m_e c^2 \beta^2 \gamma^2}{I} - \beta^2,$$

where $$\rho_e$$ is the electron density, $$I$$ the material's mean excitation energy and $$C$$ a constant. Relative to water, the stopping power ratio is

$$\mathrm{RSP} = \frac{\rho_e}{\rho_{e,w}} \, \frac{L}{L_w},$$

which depends on the elements only through $$\ln I$$. A CT number and a stopping power ratio both depend on electron density, but the photoelectric effect makes the CT number depend on the elements far more strongly. No single curve holds for every material.

Schneider's stoichiometric method scans plastics of known composition, fits $$k_{coh}$$ and $$k_{ph}$$ to their measured CT numbers, and then computes the CT numbers of real tissues from their published compositions (the ICRP and ICRU tissues). Each tissue gives one point (its computed $$H$$, its RSP from the Bethe formula), and the curve through those points is the calibration. The simpler method fits the curve straight through the plastics' own measured $$H$$ and RSP.

The proton's range in the patient is its water equivalent depth. Along a path $$z$$ through the patient, the water equivalent thickness up to depth $$z$$ is

$$\mathrm{WET}(z) = \int_0^z \mathrm{RSP}(z') \, \mathrm{d}z'.$$

A slab of thickness $$t$$ in front of a water tank moves the Bragg peak closer by its WET, which for a uniform slab is about $$\mathrm{RSP} \times t$$. The plan places the distal R90 (where the dose past the peak falls to 90 %) at a water equivalent depth

$$R = \mathrm{WET}_{plan}(z_{target}) \, (1 + a) + b,$$

where $$z_{target}$$ is the target's far edge, $$a$$ a fraction of the range and $$b$$ a fixed distance. Paganetti (Phys. Med. Biol. 57, R99, 2012) lists the uncertainties in the range, and the margin 3.5 % + 1 mm used at many centers; Yang et al. (Phys. Med. Biol. 57, 4095, 2012) estimate the stoichiometric method's own share. If the real stopping powers differ from the planned ones, the beam stops at the depth where the real WET reaches $$R$$, not at the planned one.

The scanner here is a model, not any one machine: a tungsten tube spectrum (SpekPy) through 6 mm of aluminum, hardened by 20 cm of water, with NIST XCOM attenuation coefficients. The tissue compositions, densities and I values are NIST's; the pixel noise (10 HU at 120 kV), the reading noise of the range shift (0.1 mm) and the patients' tissue layers are the demo's choices.

## Before the lab

1. Show that a material whose attenuation per electron equals water's has $$H = 1000 (\rho_e/\rho_{e,w} - 1)$$. Where on a graph of $$H$$ against $$\rho_e$$ should a material rich in hydrogen fall, and one with calcium?
2. Show that $$\partial \ln S / \partial \ln I = -1/L$$. Find $$L$$ for water ($$I$$ = 75 eV) for 150 MeV protons ($$m_p c^2$$ = 938.272 MeV, $$m_e c^2$$ = 0.510999 MeV). By what percentage does a 10 % error in a tissue's $$I$$ change its stopping power?
3. A beam crosses 0.2 cm of skin (RSP 1.09), 0.7 cm of skull (RSP 1.66) and 8.1 cm of brain (RSP 1.03) to the far edge of a target. Find the WET. With a margin of 3.5 % + 1 mm, where in water equivalent depth does the plan put R90?
4. A margin of 4.0 mm of water equivalent depth lies in inflated lung with RSP 0.26. How long is it in the patient?
5. Independent uncertainties add in quadrature. Combine 0.5 %, 0.5 %, 0.3 % and 1.5 % (Paganetti's CT imaging and calibration, CT conversion, CT grid and I values).

## Safety

No hazards in the virtual lab. A real CT scan gives the patient a dose of ionizing radiation, which is why the calibration is done on a phantom, never on a person.

## Procedure

**Part 1: The calibration scan.** Choose Calibration scan, 120 kV. Scan the phantom and record the reading (all nine regions). Scan again and record it, then choose Same phantom, 80 kV, scan and record. Send the readings to the worksheet before you clear them.

**Part 2: The two curves.** Choose Both curves and record the reading (all eighteen reference tissues). Choose Bone on the substitute curve and read the two curves' values for cortical bone. Then choose Substitute curve without Teflon and record the reading. Send the readings to the worksheet before you clear them.

**Part 3: The mystery tissue.** Choose Mystery tissue (a 5 cm slab). Measure the range shift and record the reading. Repeat with the slab at 2 cm and at 6 cm. Then go to the next mystery, measure and record it at 5 cm, and do the same for each of the five mysteries. Send the readings to the worksheet.

**Part 4: Range and margins.** Choose Brain, 3.5 % + 1 mm, deliver and record. Set the CT number error to −20, −10, +10 and +20 HU, recording each. Choose Lung tumor and do the same, starting from Lung, CT numbers 10 HU high for +10 HU. Choose Prostate through the femoral head and record it, then Prostate, tissue I values 10 % low; set the I value error to −5, +5 and +10 %, recording each. Then choose Prostate planned on the substitute curve and Brain, no margin, and record each. Send the readings to the worksheet.

## Data

| Reading | Scan | Insert | $$\rho_e$$ (relative to water) | $$H$$ (HU) | Pixel SD (HU) | Fitted $$H$$ (HU) | $$1000(\rho_e - 1)$$ (HU) |
|---|---|---|---|---|---|---|---|
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |

| Reading | Tissue | $$H$$ (HU) | $$\rho_e$$ | $$I$$ (eV) | RSP (Bethe) | RSP, stoichiometric curve | RSP, substitute curve | Stoichiometric error (%) | Substitute error (%) |
|---|---|---|---|---|---|---|---|---|---|
| | | | | | | | | | |
| | | | | | | | | | |
| | | | | | | | | | |

| Reading | Mystery | $$H$$ (HU) | Slab $$t$$ (cm) | Range shift (mm) | RSP measured | RSP from the curve | Curve against measured (%) |
|---|---|---|---|---|---|---|---|
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |

| Reading | Plan | CT number error (HU) | I value error (%) | Margin | Target's far edge (cm) | Planned R90 (cm of water) | Range error (mm) | Real R90 past the target (mm) | Target covered |
|---|---|---|---|---|---|---|---|---|---|
| | | | | | | | | | |
| | | | | | | | | | |
| | | | | | | | | | |

### Fits of range error against CT number error

| Patient | Slope (mm per HU) | Slope's standard error | Intercept (mm) | Mean RSP slope of the curve there (per HU) |
|---|---|---|---|---|
| | | | | |
| | | | | |

### Range uncertainty budget

| Source (Paganetti 2012) | Uncertainty | Your squared term |
|---|---|---|
| | | |
| | | |
| | | |

## Analysis

1. From the 120 kV scan, fill in the last column of the first table. Graph $$H$$ against $$\rho_e$$ for the plastics and water (leave out air). Fit a straight line (with an intercept), and look at the residuals: which inserts sit far from it, and on which side? Explain each from its elements. Compare the 80 kV scan: which inserts moved, and by how much?
2. The fitted $$k_{coh}$$ and $$k_{ph}$$ are in the readouts. Explain why $$H$$ is linear in $$k_{coh}$$ and $$k_{ph}$$ once the compositions are known, so that the fit is a linear least squares problem. How well does the fit reproduce the inserts (compare the measured and fitted columns)?
3. From the second table, compute each tissue's error on each curve, 100 (RSP from the curve / RSP − 1). Which tissues does the stoichiometric curve miss by more than 1 %? How large is the substitute curve's error for cortical bone, with and without Teflon? Explain why Teflon matters so much.
4. Graph the stoichiometric curve's RSP against $$H$$ for the soft tissues (adipose to skin) and fit a straight line (with an intercept). Give the slope per HU with its standard error: the change in the planned stopping power ratio for a 1 HU error in soft tissue. Do the same for the tissues' own RSP (Bethe), and explain why the two slopes differ.
5. From the third table, compute each slab's RSP from its range shift, and its uncertainty from the 0.1 mm reading noise. Does the measured RSP depend on the slab thickness? Which mysteries sit off the curve by more than their uncertainty? Press Show the answer for each, and explain the largest miss from the tissue's composition.
6. Graph the range error against the CT number error for the brain and for the lung, and fit each with a straight line (with an intercept). Fill in the fits table. Predict the brain's slope from Analysis 4 and the length of tissue the beam crosses, $$\Delta R \approx \Delta H \, (\mathrm{d}\,\mathrm{RSP}/\mathrm{d}H) \, z$$, and compare. Why is the lung's slope so much larger? (Where does the lung beam stop, and what is the stopping power ratio there?)
7. From the prostate readings, graph the range error against the I value error and fit a straight line. From prelab 2, predict the slope from the prostate's WET of about 21.3 cm, and compare.
8. Compare the prostate on the substitute curve with the margin. Would a margin of 3.5 % + 1 mm protect against using the wrong calibration method? Look at Brain, no margin: by how much is the target missed, and why is no margin at all never used?
9. Fill in the budget table from the table in the demo's Lab section, at 1.5 standard deviations, and combine the percentage terms in quadrature, with and without the term for complex lateral inhomogeneities. Compare with 3.5 %. Which of the errors you measured in Parts 2 to 4 are in the budget, and which would a margin never be meant to cover?

## Uncertainty

The pixel noise (10 HU at 120 kV) averages down over each 490 pixel region to about 0.5 HU, so two scans differ by about a HU; compare the two 120 kV scans to see it. The slab's RSP has an uncertainty of 0.1 mm divided by the slab thickness. The fits use equal weights, so their standard errors come from the scatter of the points about the line; the range error against the CT number error is not exactly linear in lung, so look at the residuals before quoting a slope. The tissues' compositions and I values are tabulated values with their own uncertainty, which the demo does not add; Paganetti puts the I values at ±1.5 % in range.

## Questions

1. Two inserts have nearly the same electron density but CT numbers 100 HU apart. Which beam, X-rays or protons, can tell them apart, and why?
2. Why does the stoichiometric method use the plastics only to learn the scanner, and not as points on the curve?
3. A patient has a titanium hip implant. What happens to its CT numbers on a 120 kV scan, and what would you do in the plan?
4. A scanner's CT numbers drift by 10 HU after a tube replacement. Which patients are most at risk, and what daily check would catch it?
5. Dual energy CT scans each voxel at two tube voltages. From your 80 and 120 kV scans, explain why two scans give the electron density and an effective atomic number, where one scan gives a mixture of both.
6. The margin is placed beyond the target, along the beam. Why is the range uncertainty a larger problem for protons than for photons, and why do planners avoid aiming a proton beam's distal edge at a critical organ?

## What to hand in

Prelab answers, the tables with their graphs and fits, the curves' errors on the tissues, the mystery RSPs with uncertainties, the range error slopes with uncertainties and your predictions, the budget, and answers to the questions. Identify simulated data.
