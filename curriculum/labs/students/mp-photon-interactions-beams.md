# Photon Beams in Matter: Attenuation, Buildup and Beam Hardening
Student worksheet · Medical Physics

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/photon-interactions.html?ws=mp-photon-interactions-beams)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Water at 100 keV; Lead at 1 MeV; Bone against soft tissue, 30 keV; Iodine K edge; Lead K edge; Pair production in lead; Where Compton wins in water; Lead from 1 keV to 100 MeV; Cs 137 through water; Co 60 through lead; Co 60 through a concrete wall; 60 keV through water; 80 kVp diagnostic beam; 120 kVp with copper.

**Using the demo.**

- The strip across the top switches between four views: Coefficients, Which process wins, Narrow and broad beam, and Beam hardening.
- **Coefficients** plots the mass attenuation coefficient $$\mu/\rho$$ of a material from 1 keV to 100 MeV with its parts: coherent scattering, incoherent (Compton) scattering, the photoelectric effect, and pair production in the field of a nucleus and of an electron. The dashed and dotted curves are the energy transfer and energy absorption coefficients, $$\mu_{tr}/\rho$$ and $$\mu_{en}/\rho$$. The material list has 15 tissues, dosimeters and shields, and any element by its atomic number Z. The scale can be cm²/g, 1/cm, barns per atom or barns per electron. Drag across the chart, or type an energy, to read every coefficient at that energy.
- **Which process wins** maps, for every Z from 1 to 92, the energies where each process is the largest share, and marks where the chosen material sits. Under it the shares for the chosen material are stacked against energy.
- **Narrow and broad beam** sends a broad parallel beam of photons at a slab and follows each one until it is absorbed or leaves (a Monte Carlo simulation). The narrow beam result counts only the photons that never interacted; the broad beam result is the air kerma behind the slab from every photon that gets through, scattered or not. Their ratio is the buildup factor $$B$$. Each run uses a random seed, so the same seed gives the same run.
- **Beam hardening** filters the spectrum of an X-ray tube with a tungsten anode and finds the first and second half value layers of the air kerma, in aluminum or copper.
- Record reading stores the numbers for the view on show. Export to worksheet sends the readings to the matching Data table below; Clear starts a new series, which goes into a new copy of the table.

</details>

## Goal

Measure an attenuation coefficient and a buildup factor with a simulated beam, and measure how filtration hardens an X-ray beam.

## Background

**Attenuation.** A photon crossing a thin layer $$dx$$ interacts with probability $$\mu\,dx$$, where $$\mu$$ is the linear attenuation coefficient. For a beam of $$N$$ photons that have not yet interacted, $$dN = -\mu N\,dx$$, so $$N(x) = N_0 e^{-\mu x}$$. Dividing by the density gives the mass attenuation coefficient $$\mu/\rho$$ (cm²/g), which does not depend on how tightly the material is packed. The half value layer is $$\ln 2/\mu$$ and the mean free path $$1/\mu$$. In terms of the cross section per atom, $$\mu/\rho = \sigma_a N_A/A$$, and the processes add: $$\mu/\rho = \sigma_{coh}/\rho + \sigma_{incoh}/\rho + \tau/\rho + \kappa/\rho$$.

**The processes.** In coherent (Rayleigh) scattering the photon is deflected by the whole atom and keeps its energy. In incoherent (Compton) scattering it gives part of its energy to an electron. In the photoelectric effect the photon is absorbed and an electron is ejected from an inner shell; per atom it grows steeply with Z and falls steeply with photon energy. Above $$2m_ec^2 = 1.022$$ MeV the photon can turn into an electron and a positron in the field of a nucleus (pair production). The Coefficients view of the demo plots each process against energy.

**Narrow and broad beams.** The exponential law holds for a narrow beam, where a detector sees only photons that never interacted. Behind a broad beam, photons scattered in the slab reach the detector too, so the kerma behind the slab is larger: $$K/K_0 = B\,e^{-\mu t}$$, with a buildup factor $$B \ge 1$$ that grows with the thickness in mean free paths, $$\mu t$$. Shielding calculations need $$B$$.

**Beam hardening.** An X-ray tube makes a spread of photon energies. A filter removes low energy photons more than high energy ones, because $$\mu$$ falls steeply with energy, so the beam left behind has a higher mean energy and is harder to stop. The air kerma behind a thickness $$x$$ of absorber is $$K(x) = \int \Phi(E)\,E\,(\mu_{en}/\rho)_{air}\,e^{-\mu(E)x}\,dE$$. With $$\mu_{en}$$ this is strictly the collision kerma; in air at diagnostic energies $$g$$ is below 0.1 %, so it equals the kerma to the precision of the readings, and HVLs are quoted for it. The first half value layer HVL₁ halves it; the second, HVL₂, halves it again. The homogeneity coefficient $$h = \mathrm{HVL}_1/\mathrm{HVL}_2$$ is 1 only for a beam of one energy. The effective energy of a beam is the single energy that has the same HVL₁. The air kerma per mAs is this model's own: it runs about 2.5 % above the SpekPy code's value for the same tube, so compare the readings with each other rather than with a meter.

## Before the lab

1. Show from $$dN = -\mu N\,dx$$ that the half value layer is $$\ln 2/\mu$$ and that the mean distance a photon travels before its first interaction is $$1/\mu$$.
2. For a beam of two energies, $$K(x) = K_1 e^{-\mu_1 x} + K_2 e^{-\mu_2 x}$$ with $$\mu_1 > \mu_2$$. Find $$-\frac{d\ln K}{dx}$$ and show that it decreases as $$x$$ grows. What does that mean for HVL₂ compared with HVL₁?
3. Part 1 measures the buildup behind water (¹³⁷Cs, 662 keV) and behind lead (⁶⁰Co, 1.25 MeV). Compare the two at the same thickness in mean free paths, say $$\mu t$$ = 2. Which do you expect to have the larger buildup factor $$B$$, the water or the lead, or will they be about the same?

## Safety

No hazards in the virtual lab. In the real lab, the sources and X-ray beams used for these measurements are radiation hazards: follow your facility's radiation safety rules and your dosimetry badge requirements.

## Procedure

**Part 1: narrow and broad beam.** (1) Choose the Cs 137 through water setup (water, 661.657 keV). Set Photons to 20,000 and Random seed to 1 (click the seed number to type it). (2) Click the Thickness t value and type 5 cm, press Send photons, and when the run ends press Record reading. Do the same at 10, 20 and 30 cm, keeping seed 1. Export the readings to the worksheet and clear them. (3) Choose Co 60 through lead (lead, 1252.86 keV, ⁶⁰Co as one beam at the mean of its two lines), set 20,000 photons and seed 1 again, and do the same with slabs 1, 2, 5 and 8 cm thick. Export those as a second copy of the table.

**Part 2: beam hardening.** Choose the 80 kVp diagnostic beam setup (Tube voltage 80 kVp, Added filter thickness 0, half value layers in Aluminum). Click the Aluminum filtration value and type 1.0, 2.5, 4.0 and 6.0 mm in turn, recording a reading at each. Export the readings to the worksheet and clear them.

## Data

The buildup $$B$$ is the broad beam $$K/K_0$$ divided by $$e^{-\mu t}$$ with the tabulated $$\mu$$ (the $$\mu t$$ column), not by the counted narrow beam $$T$$, so dividing the two recorded columns gives a slightly different number for thick slabs.

| Reading | Material | Energy (keV) | Thickness $$t$$ (cm) | $$\mu t$$ | Photons $$N$$ | Narrow beam $$T$$ | Standard error of $$T$$ | ln $$T$$ | Broad beam $$K/K_0$$ | Standard error of $$K/K_0$$ | Buildup $$B$$ | Standard error of $$B$$ |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| | | | | | | | | | | | | |
| | | | | | | | | | | | | |
| | | | | | | | | | | | | |
| | | | | | | | | | | | | |
| | | | | | | | | | | | | |
| | | | | | | | | | | | | |

### Beam hardening

| Reading | Tube voltage (kVp) | Aluminum filtration (mm) | Added filter | HVL measured in | HVL₁ (mm) | HVL₂ (mm) | Homogeneity $$h$$ | Mean energy (keV) | Effective energy (keV) | Air kerma at 1 m (µGy per mAs) |
|---|---|---|---|---|---|---|---|---|---|---|
| | | | | | | | | | | |
| | | | | | | | | | | |
| | | | | | | | | | | |
| | | | | | | | | | | |
| | | | | | | | | | | |
| | | | | | | | | | | |
| | | | | | | | | | | |
| | | | | | | | | | | |

## Analysis

1. From the narrow and broad beam table for water, graph ln $$T$$ against $$t$$. Find the slope and its standard error, and so $$\mu$$ with its uncertainty. Compare with the tabulated $$\mu$$ the demo gives at 661.657 keV. Do they agree within your uncertainty?
2. Graph $$B$$ against $$\mu t$$ for water and for lead. Which builds up more for the same number of mean free paths? Read $$B$$ for each at $$\mu t$$ = 2 from your graph.
3. A water shield for ¹³⁷Cs is designed with the narrow beam law to transmit 10 % of the kerma. What thickness does that give? Using your water readings, by what factor would the real broad beam kerma behind it exceed the design? Graph ln $$(K/K_0)$$ against $$t$$ and extend a line through your last three points to estimate the thickness that really brings the kerma down to 10 %. Why is that estimate uncertain?
4. From the 80 kVp readings, graph HVL₁ against the aluminum filtration. How do HVL₁, $$h$$ and the mean energy change as filtration is added? Explain with your answer to Before the lab question 2.

## Uncertainty

The narrow and broad beam values come from counting simulated photons, so they scatter from run to run. For the narrow beam, $$T$$ is a binomial proportion: show that its standard error should be $$\sqrt{T(1-T)/N}$$ and compare that with the standard error the demo gives for one of your readings. Say whether it agrees with $$e^{-\mu t}$$. Finally, say how many photons you would need to measure $$B$$ at 30 cm of water to 0.5 %.

## Questions

1. At megavoltage energies Compton scattering wins in every material, so $$\mu/\rho$$ is nearly the same for all of them and only the mass in the way counts; concrete is therefore the usual material for the walls of a treatment room. Using the buildup factors you measured, say what a designer must add to a thickness found from the narrow beam law, and why.
2. Why does a CT scanner, which measures $$\mu$$ along many lines through the patient, show streaks and a dark center in a uniform water phantom unless it corrects for beam hardening?
3. What did your graph in Analysis 2 say about Before the lab 3? Explain the result from what happens to the photons scattered in each slab: in the Coefficients view, choose the material, type an energy, and read the photoelectric share at the energies the scattered photons have.

## What to hand in

Prelab answers, every Data table with its graphs, the answers to the analysis and uncertainty sections, and answers to the questions. Identify simulated data.
