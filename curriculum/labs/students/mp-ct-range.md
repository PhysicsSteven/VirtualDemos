# CT Numbers and Proton Range: Calibration and Stopping Power
Student laboratory · Medical Physics

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/ct-range.html?ws=mp-ct-range)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Calibration scan, 120 kV; Same phantom, 80 kV; Both curves; Bone on the substitute curve; Substitute curve without Teflon; Mystery tissue; Brain, 3.5 % + 1 mm; Prostate through the femoral head; Lung tumor; Lung, CT numbers 10 HU high; Prostate, tissue I values 10 % low; Prostate planned on the substitute curve; Brain, no margin. This worksheet uses the Calibration scan, 120 kV; Same phantom, 80 kV; Both curves; Bone on the substitute curve; Substitute curve without Teflon; and Mystery tissue setups.

**Using the demo.**

- The demo has three steps, chosen at the top: **Scan the phantom**, **CT number to stopping power**, and **Range and margins**. The button beside them runs the step: Scan, Measure the range shift, or Deliver.
- **Scan the phantom** shows a CT scanner with a calibration phantom: a 20 cm water cylinder with eight inserts of known composition. The image is the slice, and the graph plots each insert's mean CT number against its electron density, with the Schneider fit. Choose the tube voltage, the insert whose region of interest the readouts show, and the display window.
- **CT number to stopping power** shows the two calibration curves, stopping power ratio against CT number, with the reference tissues. The picture is a proton beam line: a slab of the chosen tissue in front of a water tank, and the Bragg peak moved closer by the slab. Measure the range shift gives the slab's water equivalent thickness. Choose Mystery as the tissue for a tissue you are not told; New mystery gives the next one and Show the answer names it.
- **Range and margins** plans one proton beam to a target in a patient. The plan reads each tissue's stopping power off the chosen curve and places the distal edge (R90) at the target's far side plus the margin. The two error sliders are what is wrong that the planner does not know; Deliver shows where the beam really stops. The graph shows the planned and delivered dose along the beam.
- Record reading stores the step's results: every insert of the scan, every reference tissue, the mystery slab, or the plan. Export to worksheet sends each step's readings to its own Data table. Clear starts a new series.

</details>

## Goal

Calibrate a CT scanner for proton planning with the stoichiometric method; measure how far a calibration built straight from tissue substitute plastics misses real tissue; and test the calibration with a mystery tissue in a proton beam.

## Background

A proton plan needs the stopping power of every voxel of the patient, but a CT scanner measures X-ray attenuation. The CT number of a voxel is its linear attenuation coefficient relative to water's,

$$H = 1000 \left( \frac{\mu}{\mu_w} - 1 \right),$$

in Hounsfield units (HU): water reads 0 and air about −1000. At CT energies (a tube voltage of 80 to 140 kV, mean detected photon energies of about 60 to 85 keV) a material's attenuation per unit volume is a sum over its elements,

$$\mu = \rho N_A \sum_i \frac{w_i}{A_i} \left( Z_i K_{KN} + Z_i^{2.86} K_{coh} + Z_i^{4.62} K_{ph} \right),$$

where $$w_i$$ is the fraction by weight of element $$i$$, $$Z_i$$ and $$A_i$$ its atomic number and molar mass, and the three terms are Compton scattering (Klein–Nishina, per electron), coherent scattering and the photoelectric effect, with constants $$K$$ that belong to the scanner's spectrum (Schneider, Pedroni and Lomax, Phys. Med. Biol. 41, 111, 1996). The Compton term is proportional to the electron density; the photoelectric term grows steeply with $$Z$$. Relative to water only the ratios $$k_{coh} = K_{coh}/K_{KN}$$ and $$k_{ph} = K_{ph}/K_{KN}$$ remain.

The stopping power of a material for protons of speed $$\beta c$$ is, by the Bethe formula,

$$S = C \frac{\rho_e}{\beta^2} L, \qquad L = \ln \frac{2 m_e c^2 \beta^2 \gamma^2}{I} - \beta^2,$$

where $$\rho_e$$ is the electron density, $$I$$ the material's mean excitation energy and $$C$$ a constant. Relative to water, the stopping power ratio is

$$\mathrm{RSP} = \frac{\rho_e}{\rho_{e,w}} \, \frac{L}{L_w},$$

which depends on the elements only through $$\ln I$$. A CT number and a stopping power ratio both depend on electron density, but the photoelectric effect makes the CT number depend on the elements far more strongly. No single curve holds for every material.

Schneider's stoichiometric method scans plastics of known composition, fits $$k_{coh}$$ and $$k_{ph}$$ to their measured CT numbers, and then computes the CT numbers of real tissues from their published compositions (the ICRP and ICRU tissues). Each tissue gives one point (its computed $$H$$, its RSP from the Bethe formula), and the curve through those points is the calibration. The simpler method fits the curve straight through the plastics' own measured $$H$$ and RSP.

The proton's range in the patient is its water equivalent depth, and a slab of thickness $$t$$ in front of a water tank moves the Bragg peak closer by its water equivalent thickness (WET), which for a uniform slab is about $$\mathrm{RSP} \times t$$.

The scanner here is a model, not any one machine: a tungsten tube spectrum (SpekPy) through 6 mm of aluminum, hardened by 20 cm of water, with NIST XCOM attenuation coefficients. The tissue compositions, densities and I values are NIST's; the pixel noise (10 HU at 120 kV), the reading noise of the range shift (0.1 mm) and the patients' tissue layers are the demo's choices.

## Before the lab

1. Show that a material whose attenuation per electron equals water's has $$H = 1000 (\rho_e/\rho_{e,w} - 1)$$. Where on a graph of $$H$$ against $$\rho_e$$ should a material rich in hydrogen fall, and one with calcium?
2. Part 1 scans the same phantom at 120 kV and then at 80 kV. Water reads 0 HU at both, by definition. Before you open the demo, decide what the lower tube voltage does to the CT number of the B-100 bone equivalent plastic (it contains calcium) and of polyethylene (only carbon and hydrogen): for each, does it rise, fall or stay the same?

## Safety

No hazards in the virtual lab. A real CT scan gives the patient a dose of ionizing radiation, which is why the calibration is done on a phantom, never on a person.

## Procedure

**Part 1: The calibration scan.** (1) Choose the Calibration scan, 120 kV setup, press Scan, and when the scan is done press Record reading (it stores all nine regions at once). (2) Press Scan again and record the second scan. (3) Choose Same phantom, 80 kV, press Scan and record. Press Export to worksheet before you clear the readings.

**Part 2: The two curves.** (1) Choose the Both curves setup and press Record reading (it stores all eighteen reference tissues). (2) Choose Bone on the substitute curve and look at the readouts for the two curves' values for cortical bone (nothing to record). (3) Choose Substitute curve without Teflon (it unchecks Teflon in the tissue substitute curve) and record a reading. Export the readings to the worksheet before you clear them.

**Part 3: The mystery tissue.** (1) Choose the Mystery tissue setup (a 5 cm slab), press Measure the range shift, and record a reading. (2) Set Slab thickness to 2 cm, measure and record; then 6 cm. (3) Set Slab thickness back to 5 cm, press New mystery, measure and record. Do the same for each of the five mysteries (New mystery goes through them in turn). Export the readings to the worksheet.

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

## Analysis

1. From the 120 kV scan, fill in the last column of the first table. Graph $$H$$ against $$\rho_e$$ for the plastics and water (leave out air). Fit a straight line (with an intercept), and look at the residuals: which inserts sit far from it, and on which side? Explain each from its elements. Compare the 80 kV scan: which inserts moved, and by how much? The Fitted $$H$$ column is the stoichiometric fit's value for each insert: how closely does it reproduce the measured $$H$$?
2. From the second table, compute the error on each curve, 100 (RSP from the curve / RSP − 1), for six tissues: Lung, inflated (ICRP), Adipose tissue (ICRP), Skeletal muscle (ICRP), Skin (ICRP), Spongy bone model, 20 % cortical bone and Cortical bone (ICRP). Which of the six does the stoichiometric curve miss by more than 1 %? How large is the substitute curve's error for cortical bone, with and without Teflon? Explain why Teflon matters so much.
3. Graph the stoichiometric curve's RSP against $$H$$ for the soft tissues (adipose to skin) and fit a straight line (with an intercept). Give the slope per HU with its standard error: the change in the planned stopping power ratio for a 1 HU error in soft tissue.
4. From the third table, compute each slab's RSP from its range shift, and its uncertainty from the 0.1 mm reading noise. Does the measured RSP depend on the slab thickness? Which mysteries sit off the curve by more than their uncertainty? Press Show the answer for each, and explain the largest miss from the tissue's composition.

## Uncertainty

The pixel noise (10 HU at 120 kV) averages down over each 490 pixel region to about 0.5 HU, so two scans differ by about a HU; compare the two 120 kV scans to see it. The slab's RSP has an uncertainty of 0.1 mm divided by the slab thickness. The fits use equal weights, so their standard errors come from the scatter of the points about the line. The tissues' compositions and I values are tabulated values with their own uncertainty, which the demo does not add.

## Questions

1. Why does the stoichiometric method use the plastics only to learn the scanner, and not as points on the curve?
2. How did the B-100 and polyethylene inserts behave between your 120 kV and 80 kV scans, compared with what you decided in Before the lab 2? Explain each change from the Compton and photoelectric terms of $$\mu$$ and how their shares shift with the photon energy. That is the idea behind dual energy CT, which scans each voxel at two tube voltages: explain why two scans give the electron density and an effective atomic number, where one scan gives a mixture of both.

## What to hand in

Prelab answers, the tables with their graphs and fits, the curves' errors on the tissues, the mystery RSPs with uncertainties, and answers to the questions. Identify simulated data.
