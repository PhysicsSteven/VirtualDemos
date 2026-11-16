# CT Numbers and Proton Range: Range Errors and Margins
Student laboratory · Medical Physics

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/ct-range.html?ws=mp-ct-range-margins)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Calibration scan, 120 kV; Same phantom, 80 kV; Both curves; Bone on the substitute curve; Substitute curve without Teflon; Mystery tissue; Brain, 3.5 % + 1 mm; Prostate through the femoral head; Lung tumor; Lung, CT numbers 10 HU high; Prostate, tissue I values 10 % low; Prostate planned on the substitute curve; Brain, no margin. This worksheet uses the Brain, 3.5 % + 1 mm; Prostate through the femoral head; Lung tumor; Lung, CT numbers 10 HU high; Prostate, tissue I values 10 % low; Prostate planned on the substitute curve; and Brain, no margin setups.

**Using the demo.**

- The demo has three steps, chosen at the top: **Scan the phantom**, **CT number to stopping power**, and **Range and margins**. The button beside them runs the step: Scan, Measure the range shift, or Deliver.
- **Scan the phantom** shows a CT scanner with a calibration phantom: a 20 cm water cylinder with eight inserts of known composition. The image is the slice, and the graph plots each insert's mean CT number against its electron density, with the Schneider fit. Choose the tube voltage, the insert whose region of interest the readouts show, and the display window.
- **CT number to stopping power** shows the two calibration curves, stopping power ratio against CT number, with the reference tissues. The picture is a proton beam line: a slab of the chosen tissue in front of a water tank, and the Bragg peak moved closer by the slab. Measure the range shift gives the slab's water equivalent thickness. Choose Mystery as the tissue for a tissue you are not told; New mystery gives the next one and Show the answer names it.
- **Range and margins** plans one proton beam to a target in a patient. The plan reads each tissue's stopping power off the chosen curve and places the distal edge (R90) at the target's far side plus the margin. The two error sliders are what is wrong that the planner does not know; Deliver shows where the beam really stops. The graph shows the planned and delivered dose along the beam.
- Record reading stores the step's results: every insert of the scan, every reference tissue, the mystery slab, or the plan. Export to worksheet sends each step's readings to its own Data table. Clear starts a new series.

</details>

## Goal

Find how CT number errors, mean excitation energy errors and the calibration method move the range of a proton beam in a patient, and how big a margin they need.

## Background

A proton plan needs the stopping power of every voxel of the patient, but a CT scanner measures X-ray attenuation. The CT number $$H$$ of a voxel is its linear attenuation coefficient relative to water's, in Hounsfield units (HU): water reads 0 and air about −1000. The stopping power of a material for protons of speed $$\beta c$$ is, by the Bethe formula,

$$S = C \frac{\rho_e}{\beta^2} L, \qquad L = \ln \frac{2 m_e c^2 \beta^2 \gamma^2}{I} - \beta^2,$$

where $$\rho_e$$ is the electron density, $$I$$ the material's mean excitation energy and $$C$$ a constant. Relative to water, the stopping power ratio is

$$\mathrm{RSP} = \frac{\rho_e}{\rho_{e,w}} \, \frac{L}{L_w},$$

which depends on the elements only through $$\ln I$$. A calibration curve turns each CT number into a stopping power ratio. Schneider's stoichiometric method computes the CT numbers of real tissues from their published compositions and draws the curve through the tissues' RSP values; the simpler method fits the curve straight through the CT numbers and RSP of tissue substitute plastics, which can miss real tissue badly, most of all bone.

The proton's range in the patient is its water equivalent depth. Along a path $$z$$ through the patient, the water equivalent thickness up to depth $$z$$ is

$$\mathrm{WET}(z) = \int_0^z \mathrm{RSP}(z') \, \mathrm{d}z'.$$

A slab of thickness $$t$$ in front of a water tank moves the Bragg peak closer by its WET, which for a uniform slab is about $$\mathrm{RSP} \times t$$. The plan places the distal R90 (where the dose past the peak falls to 90 %) at a water equivalent depth

$$R = \mathrm{WET}_{plan}(z_{target}) \, (1 + a) + b,$$

where $$z_{target}$$ is the target's far edge, $$a$$ a fraction of the range and $$b$$ a fixed distance. Paganetti (Phys. Med. Biol. 57, R99, 2012) lists the uncertainties in the range, and the margin 3.5 % + 1 mm used at many centers; Yang et al. (Phys. Med. Biol. 57, 4095, 2012) estimate the stoichiometric method's own share. If the real stopping powers differ from the planned ones, the beam stops at the depth where the real WET reaches $$R$$, not at the planned one.

The scanner here is a model, not any one machine, with NIST XCOM attenuation coefficients. The tissue compositions, densities and I values are NIST's; the pixel noise (10 HU at 120 kV) and the patients' tissue layers are the demo's choices.

## Before the lab

1. Show that $$\partial \ln S / \partial \ln I = -1/L$$. Find $$L$$ for water ($$I$$ = 75 eV) for 150 MeV protons ($$m_p c^2$$ = 938.272 MeV, $$m_e c^2$$ = 0.510999 MeV). By what percentage does a 10 % error in a tissue's $$I$$ change its stopping power?
2. A beam crosses 0.2 cm of skin (RSP 1.09), 0.7 cm of skull (RSP 1.66) and 8.1 cm of brain (RSP 1.03) to the far edge of a target. Find the WET. With a margin of 3.5 % + 1 mm, where in water equivalent depth does the plan put R90?
3. A margin of 4.0 mm of water equivalent depth lies in inflated lung with RSP 0.26. How long is it in the patient?

## Safety

No hazards in the virtual lab. A real CT scan gives the patient a dose of ionizing radiation, which is why the calibration is done on a phantom, never on a person.

## Procedure

**Part 1: Range and margins.** Each plan: press Deliver, then Record reading. (1) Choose Brain, 3.5 % + 1 mm (CT number error 0), deliver and record. Set the CT number error slider to −20, −10, +10 and +20 HU, delivering and recording each. (2) Choose Lung tumor and record it at 0 HU; the Lung, CT numbers 10 HU high setup is the +10 HU point; then set CT number error to −20, −10 and +20 HU, recording each. (3) Choose Prostate through the femoral head and record it (I values off by 0 %). Choose Prostate, tissue I values 10 % low and record it. (4) Choose Prostate planned on the substitute curve and record it; then Brain, no margin, and record it. Export the readings to the worksheet.

## Data

| Reading | Plan | CT number error (HU) | I value error (%) | Margin | Target's far edge (cm) | Planned R90 (cm of water) | Range error (mm) | Real R90 past the target (mm) | Target covered |
|---|---|---|---|---|---|---|---|---|---|
| | | | | | | | | | |
| | | | | | | | | | |
| | | | | | | | | | |

### Fits of range error against CT number error

| Patient | Slope (mm per HU) | Slope's standard error | Intercept (mm) |
|---|---|---|---|
| | | | |
| | | | |

### Range uncertainty budget

| Source (Paganetti 2012) | Uncertainty | Your squared term |
|---|---|---|
| | | |
| | | |
| | | |

## Analysis

1. Graph the range error against the CT number error for the brain and for the lung, and fit each with a straight line (with an intercept). Fill in the fits table. Predict the brain's slope: a CT number error changes the stopping power ratio of soft tissue by about $$6 \times 10^{-4}$$ per HU (the slope of the stoichiometric curve there), so the plan's water equivalent depth changes by that times the WET of the skin and brain from Before the lab 2, times the margin's factor 1.035; divide by the RSP where the beam stops to get millimeters in the patient, and compare with your fit. Why is the lung's slope so much larger? (Where does the lung beam stop, and what is the stopping power ratio there?)
2. Compare the prostate on the substitute curve with the margin. Would a margin of 3.5 % + 1 mm protect against using the wrong calibration method? Look at Brain, no margin: by how much is the target missed, and why is no margin at all never used?
3. Fill in the budget table from the Range uncertainty budget (Paganetti 2012) table in the demo's Lab fold (each line is one standard deviation), and combine the percentage terms in quadrature, with and without the term for local lateral inhomogeneities. Multiply by 1.5 to give the totals at 1.5 standard deviations, as Paganetti does, and compare with 3.5 % + 1 mm. Which of the errors you measured in Part 1 (the CT number error, the 10 % low I value reading and the substitute curve) are in the budget, and which would a margin never be meant to cover?

## Uncertainty

The fits use equal weights, so their standard errors come from the scatter of the points about the line; the range error against the CT number error is not exactly linear in lung, so look at the residuals before quoting a slope. The demo's patients are sketched layers of tissue, so compare patterns, not absolute millimeters, with a real plan. Paganetti puts the I values at ±1.5 % in range.

## Questions

1. The margin 3.5 % + 1 mm has a part that grows with the range and a part of fixed size. Using the budget table you filled in, name two sources of uncertainty for each part and say why each belongs there.

## What to hand in

Prelab answers, the tables with their graphs and fits, the range error slopes with uncertainties and your prediction, the budget, and the answer to the question. Identify simulated data.
