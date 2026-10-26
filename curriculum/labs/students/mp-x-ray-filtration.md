# Filtration and Half Value Layers
Student laboratory · Medical Physics

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/shells-and-x-rays.html?setup=hvl)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Half value layer, 80 kV (this worksheet), with a tungsten target and 2.5 mm of aluminum filtration; the shell, periodic table and X-ray spectrum setups of the Modern Physics worksheets.

**Using the demo.**

- With a filter or sheets in the beam of the tungsten target (20 to 100 kV), the tube's spectrum is that of SpekPy 2.5.4 (Poludniowski and others 2021), a tube model checked against measured spectra and half value layers: a tungsten anode at 12° behind a 0.8 mm beryllium window, in 1 keV bins, with its K and L lines. Unlike Kramers's thick target law, it includes the absorption of the X‑rays in the target itself. It is the same spectrum the Photon Interactions in Matter demo uses, and the two demos give the same half value layers.
- A filter of aluminum (up to 10 mm) and copper (up to 0.5 mm) sits in the beam at the tube. Its transmission is $$e^{-(\mu/\rho)\rho x}$$ with the mass attenuation coefficients of NIST XCOM (Berger and others), interpolated log–log between the tabulated energies; ρ = 2.699 g/cm³ for aluminum and 8.96 g/cm³ for copper. The solid spectrum is the filtered beam, the dashed one the beam with no filter, on the same scale.
- An ion chamber reads air kerma, $$K \propto \sum \Phi(E)\,T(E)\,E\,(\mu_{en}/\rho)_{\text{air}}$$ over the 1 keV bins, each at its center energy, with the air mass energy absorption coefficients of NIST SRD 126 (Hubbell and Seltzer). Aluminum sheets stacked on the chamber (up to 20 mm) attenuate the beam it sees; the readout gives the reading with the sheets over the reading without them, K/K₀. The geometry is narrow beam: no scattered photons reach the chamber.
- With Blind off the readouts give the first and second half value layers (found from the same air kerma integral), the homogeneity coefficient, the mean photon energy and the minimum half value layer of the United States rule for diagnostic X‑ray equipment (21 CFR 1020.30(m)). Blind hides the half value layers.
- Record reading stores the tube voltage, the filters, the sheets and the chamber reading, and the half value layers when they are shown. Export to worksheet sends the readings to the Data tables below; Clear starts a new series.

</details>

## Goal

Measure the attenuation curve of a filtered diagnostic X‑ray beam in aluminum, find its first and second half value layers, see the beam harden as it passes through the metal, and compare the beam's quality with the federal minimum.

## Background

A diagnostic X‑ray beam holds photons from a few keV up to $$eV$$. The softest ones never reach the image receptor: they are absorbed in the patient's skin and add dose without adding information. A metal filter at the tube takes most of them out. The beam's quality is summed up by its half value layer (HVL), the thickness of aluminum that halves the air kerma. Federal rules set a minimum first HVL for each tube voltage, which in practice sets a minimum filtration.

For one photon energy, $$K(x) = K_0 e^{-\mu x}$$ and $$\text{HVL} = \ln 2/\mu$$. For a spectrum each energy is attenuated with its own μ(E), so

$$K(x) = \int k(E)\,e^{-\mu(E)\,x}\,dE ,$$

where $$k(E)\,dE$$ is the kerma carried by photons between E and E + dE before the sheets. The slope of ln K is then the kerma weighted mean attenuation coefficient of the beam that remains, and as the soft photons are taken out first the beam hardens: the second HVL, which halves the kerma once more, is longer than the first. The homogeneity coefficient HVL₁/HVL₂ is 1 only for a single energy.

## Before the lab

1. Show that $$\frac{d\ln K}{dx} = -\langle\mu\rangle_x$$, where $$\langle\mu\rangle_x$$ is the mean of μ(E) weighted by the kerma $$k(E)e^{-\mu(E)x}$$ that remains behind x.
2. Differentiate once more to show that $$\frac{d\langle\mu\rangle_x}{dx} = -\left(\langle\mu^2\rangle_x - \langle\mu\rangle_x^2\right) \le 0$$. Explain why this proves HVL₂ ≥ HVL₁, with equality only for a single energy.
3. From the NIST table, μ/ρ of aluminum is 1.128 cm²/g at 30 keV and 0.5685 cm²/g at 40 keV. Find the HVL in aluminum at each energy (ρ = 2.699 g/cm³).
4. 21 CFR 1020.30(m) gives these minimum first HVLs for diagnostic equipment (the table in paragraph (m)(1) of the rule), in mm of aluminum: 0.3 at 30 kV, 0.4 at 40 kV, 0.5 at 50 kV, 1.3 at 51 kV, 1.5 at 60 kV, 1.8 at 70 kV, 2.5 at 71 kV, 2.9 at 80 kV, 3.2 at 90 kV and 3.6 at 100 kV. Why does the table jump between 50 and 51 kV and between 70 and 71 kV? (The rule's categories of operating range explain it.)

## Safety

No hazards in the virtual lab. A real HVL measurement is made with the chamber far from any scattering surface, the beam collimated to just cover it, and the operator behind the console barrier.

## Procedure

**Attenuation curve.** Turn Blind on in the Lab section. With the setup's tungsten target, 80 kV and 2.5 mm of aluminum filtration, record the chamber reading with no sheets on the chamber, then with 0.5 mm steps of aluminum sheets to 4 mm, then 1 mm steps to 10 mm. Export the readings; they go to Table 1. Clear them.

**Beam quality survey.** Turn Blind off. At 2.5 mm of aluminum filtration and no sheets, record a reading at each tube voltage from 50 kV to 100 kV in 10 kV steps. Export the readings; they go to Table 2. Clear them. Then, at 80 kV, record readings with 1, 2, 2.5, 3 and 4 mm of aluminum filtration, and with 2.5 mm of aluminum plus 0.1 mm and then 0.2 mm of copper. Export these into a second copy of Table 2.

## Data

Table 1. Air kerma behind aluminum sheets: 80 kV, tungsten, 2.5 mm Al filtration.

| Reading | Tube voltage (kV) | Filtration (mm Al) | Sheets x (mm Al) | Chamber reading K/K₀ | ln(K/K₀) |
|---|---|---|---|---|---|
| | | | | | |
| | | | | | |
| | | | | | |

Table 2. First and second half value layers.

| Reading | Tube voltage (kV) | Filtration (mm Al) | Filtration (mm Cu) | First HVL (mm Al) | Second HVL (mm Al) | Mean photon energy (keV) | HVL₁/HVL₂ | Minimum first HVL (mm Al) |
|---|---|---|---|---|---|---|---|---|
| | | | | | | | | |
| | | | | | | | | |
| | | | | | | | | |

Work out ln(K/K₀) in Table 1, and the last two columns of Table 2 (the minimum from Before the lab question 4).

## Analysis

1. Graph ln(K/K₀) against x (Table 1). Is it a straight line? Describe the residuals of a straight line fit and what they show.
2. Interpolate in your table (linearly in ln K, between the two points on either side) to find the thickness where K/K₀ = 0.5 (HVL₁) and the extra thickness from there to K/K₀ = 0.25 (HVL₂). Find the homogeneity coefficient. Check your values against the first row at 80 kV in Table 2.
3. Fit a straight line to the first three points of Table 1 only, and to the last three only. Convert each slope to an effective attenuation coefficient and, with Before the lab question 3, to an effective photon energy. How much has the beam hardened between the front and the back of the stack?
4. Graph HVL₁ against tube voltage (the first copy of Table 2). At which voltages does the model's beam meet the federal minimum?
5. From the second copy of Table 2, graph HVL₁ against the aluminum filtration for the rows with no copper. How much total aluminum filtration does the model need for HVL₁ ≥ 2.9 mm? Compare the effect on HVL₁ of 0.1 mm of copper with that of 1 mm of extra aluminum.

## Uncertainty

The model is exact, so the scatter comes from rounding: the chamber reading is given to 4 decimals and the sheets to 0.1 mm. Estimate the uncertainty of your interpolated HVL₁ from those two, and from the error of linear interpolation in ln K (compare with interpolation in K itself). In a real measurement the chamber's energy response, scatter from the sheets and the purity of the aluminum dominate.

## Questions

1. The model's beam, with 2.5 mm of aluminum, falls below the federal minimum at 80 kV, while real tubes with 2.5 mm of added aluminum usually pass. Name the parts of a real tube that filter the beam before the added filter (inherent filtration). Which of them does the model include, and which does it leave out?
2. Why does adding filtration raise the mean photon energy while lowering the air kerma? What does this trade cost in exposure time and tube loading?
3. Copper filters are used in fluoroscopy and interventional rooms. Why is copper so much more effective per millimeter than aluminum at these energies, and why is a thin aluminum sheet placed after a copper filter in real tubes? (Look at the copper K edge energy.)
4. Why does the HVL method need narrow beam geometry? What would broad beam geometry do to the measured HVL?
5. The homogeneity coefficient of your beam is well below 1. What would it be for the 141 keV γ rays of ⁹⁹ᵐTc, and why?

## What to hand in

Prelab answers, both tables with their graphs, HVL₁, HVL₂ and the homogeneity coefficient with uncertainties, the filtration needed to meet the federal minimum, and answers to the questions. Identify simulated data.
