# Absorbing Gamma Rays: Shielding and Distance
Student laboratory · Modern Physics

Textbook: OpenStax *University Physics*, Vol. 3, §§10.3 and 10.7. Access for free at https://openstax.org/details/books/university-physics-volume-3.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/gamma-spectroscopy.html?setup=pb)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Absorption coefficient (the subject of this worksheet); Energy calibration; Unknown source (the Calibrating a Detector worksheet); Compton edge and backscatter; Activity against the standard; Photoelectric absorption.

**Using the demo.**

- The bench is a teaching gamma spectrometer modeled on ORTEC's: a source in a lead castle, absorber sheets between the source and a 38 mm × 38 mm NaI(Tl) scintillation crystal, a photomultiplier, an amplifier and a 2048 channel multichannel analyzer (MCA).
- The spectra are simulated, not measured: a Monte Carlo calculation of how photons deposit energy in the crystal, smeared by the detector's resolution and given random counting noise. Attenuation coefficients are from NIST XCOM; line energies and intensities are the ENSDF values.
- The lead absorbers are the four sheets of the ORTEC RAS20 set, 1124, 2066, 3448 and 7367 mg/cm²; pressing a sheet adds it to the stack. The distance slider moves the source from 1 cm to 30 cm from the face of the crystal.
- Acquire runs the MCA; Preset live stops it after that much live time; the clock speed buttons run it 1, 10 or 100 times faster. Clear empties the spectrum. The region of interest (set by dragging across a peak) gives the net counts above a straight background and the net rate per live second with its uncertainty.
- Record reading stores the region of interest's net counts and rate with the distance and absorber. Readings go to this worksheet while the Attenuation or Distance analysis plot is chosen. Export to worksheet sends the readings to the Data table below; Clear (under Readings) starts a new series, which goes into a new copy of the table.

</details>

## Goal

Measure how lead absorbs the 662 keV gamma rays of cesium 137, find its mass attenuation coefficient and half value layer, and test how the count rate falls with distance: the two ways to cut a radiation dose besides time.

## Background

Gamma rays are not slowed down gradually like alpha or beta particles. Each photon either passes through a thin layer untouched or is removed from the beam by one interaction (photoelectric absorption, Compton scattering or pair production). The chance of an interaction per unit thickness is the same everywhere, so the number of photons that get through falls exponentially:

$$R = R_0\,e^{-(\mu/\rho)\,x} ,$$

where $$x$$ is the mass thickness (density times thickness, in g/cm²) and $$\mu/\rho$$ is the mass attenuation coefficient. Counting only the photopeak counts photons that arrived with their full energy, which is what this law describes. The half value layer, the mass thickness that halves the rate, is $$x_{1/2} = \ln 2/(\mu/\rho)$$.

A small source sends its photons out equally in all directions, so the number crossing the detector face falls as the inverse square of the distance. The photons interact at some depth inside the crystal, so the distance that matters is $$d + d_0$$, where $$d$$ is measured to the face of the crystal and $$d_0$$ is an effective depth:

$$R = \frac{k}{(d + d_0)^2}, \qquad \frac{1}{\sqrt{R}} = \frac{d + d_0}{\sqrt{k}} .$$

Time, distance and shielding are the three ways to reduce a radiation dose (§10.7): the dose is proportional to the time spent and to the rate, and the rate falls with distance and shielding.

## Before the lab

1. NIST lists $$\mu/\rho = 0.110$$ cm²/g for lead at 662 keV. Find the half value layer in g/cm² and in mm (lead has a density of 11.35 g/cm³).
2. What mass thickness of lead cuts the rate to one tenth? To one hundredth?
3. If the source is moved from 5 cm to 10 cm from a point detector, by what factor does the rate fall?
4. Show that a graph of $$\ln R$$ against $$x$$ is a straight line, and say what its slope is.

## Safety

No hazards in the virtual lab. Lead is toxic if swallowed: wash your hands after handling real lead sheets.

## Procedure

**Lead.** Start from the Absorption coefficient setup (cesium 137 at 5 cm, region of interest on the 661.7 keV photopeak, 60 s of live time). Record a reading with no lead. Then add lead and record a reading, each for 60 s of live time with the spectrum cleared first, at about 1.1, 2.1, 3.4, 5.5, 7.4, 9.4, 10.8, 12.9 and 14.0 g/cm² (the sheets give these totals in different combinations).

**Distance.** Export your readings and Clear them. With no lead, record readings for 60 s of live time with the source 3, 5, 7, 10, 14, 20 and 30 cm from the crystal.

## Data

| Reading | Distance d (cm) | Absorber | Mass thickness x (g/cm²) | Live time (s) | Net counts | Net rate R (1/s) | Rate uncertainty (1/s) | ln R | $$1/\sqrt{R}$$ (√s) |
|---|---|---|---|---|---|---|---|---|---|
| | | | | | | | | | |
| | | | | | | | | | |
| | | | | | | | | | |

Work out $$\ln R$$ (with $$R$$ in 1/s) for the lead readings and $$1/\sqrt{R}$$ for the distance readings.

## Analysis

1. Graph $$\ln R$$ against $$x$$ for the lead readings. From the slope find $$\mu/\rho$$ and compare with the NIST value, 0.110 cm²/g.
2. Find the half value layer from your $$\mu/\rho$$, in g/cm² and in mm of lead. How many half value layers did the thickest stack give?
3. Graph $$R$$ against $$d$$ for the distance readings. Then graph $$1/\sqrt{R}$$ against $$d$$. Is it a straight line? Find $$d_0$$ from the intercept and slope, and say what it means.
4. A worker stands 1 m from a cesium 137 source. Using your results, which halves the dose rate more cheaply in space and weight: stepping back by how much, or a sheet of lead of what thickness?

## Uncertainty

Each net rate has a counting uncertainty, given in the table. Compare the relative uncertainty of the thickest lead reading with the first. How should that change the weight each point gets in the fit, and would it change your $$\mu/\rho$$ much?

## Questions

1. Why does a gamma ray beam fall off exponentially in lead, while alpha particles stop at a definite range?
2. Why count only the photopeak, rather than every pulse, to measure $$\mu/\rho$$?
3. Lead is used for shielding gamma rays, but concrete and water are used too. What property of the absorber matters, and how could a thick wall of concrete do the same job as lead?
4. Name the three ways to reduce a dose from a gamma source, and say which of your measurements showed two of them.

## What to hand in

Prelab answers, both table copies with their graphs, $$\mu/\rho$$ and the half value layer with uncertainties, $$d_0$$, and answers to the questions. Identify simulated data.
