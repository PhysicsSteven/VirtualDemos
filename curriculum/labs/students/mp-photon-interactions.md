# Photon Interactions in Matter
Student worksheet · Medical Physics

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/photon-interactions.html?ws=mp-photon-interactions)

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

Read the photon interaction coefficients of tissues and shields from the NIST tables, find how each process depends on photon energy and atomic number, measure an attenuation coefficient and a buildup factor with a simulated beam, and measure how filtration hardens an X-ray beam.

## Background

**Attenuation.** A photon crossing a thin layer $$dx$$ interacts with probability $$\mu\,dx$$, where $$\mu$$ is the linear attenuation coefficient. For a beam of $$N$$ photons that have not yet interacted, $$dN = -\mu N\,dx$$, so $$N(x) = N_0 e^{-\mu x}$$. Dividing by the density gives the mass attenuation coefficient $$\mu/\rho$$ (cm²/g), which does not depend on how tightly the material is packed. The half value layer is $$\ln 2/\mu$$ and the mean free path $$1/\mu$$. In terms of the cross section per atom, $$\mu/\rho = \sigma_a N_A/A$$, and the processes add: $$\mu/\rho = \sigma_{coh}/\rho + \sigma_{incoh}/\rho + \tau/\rho + \kappa/\rho$$.

**The processes.** In coherent (Rayleigh) scattering the photon is deflected by the whole atom and keeps its energy. In incoherent (Compton) scattering it gives part of its energy to an electron; per electron this hardly depends on Z, so $$\sigma_{incoh}/\rho$$ follows the electrons per gram, $$N_A Z/A$$. In the photoelectric effect the photon is absorbed and an electron is ejected from an inner shell; per atom $$\tau$$ grows roughly as $$Z^n/(h\nu)^3$$ with $$n$$ between 3 and 5, and it jumps at each absorption edge. Above $$2m_ec^2 = 1.022$$ MeV the photon can turn into an electron and a positron in the field of a nucleus ($$\kappa \propto Z^2$$ per atom) or, above $$4m_ec^2$$, of an electron.

**Energy transfer and absorption.** Only part of the photon's energy goes to charged particles. The energy transfer coefficient $$\mu_{tr}$$ counts what is handed to electrons and positrons: all of $$h\nu$$ in the photoelectric effect except what fluorescence X-rays carry off, the electron's mean share in Compton scattering, and $$h\nu - 2m_ec^2$$ in pair production. Some of that energy is radiated again as bremsstrahlung while the electrons slow down, a fraction $$g$$, so the energy absorbed nearby is $$\mu_{en} = \mu_{tr}(1-g)$$. Kerma is $$\Phi E\,\mu_{tr}/\rho$$ and the collision kerma, which equals the dose under charged particle equilibrium, is $$\Phi E\,\mu_{en}/\rho$$.

**Narrow and broad beams.** The exponential law holds for a narrow beam, where a detector sees only photons that never interacted. Behind a broad beam, photons scattered in the slab reach the detector too, so the kerma behind the slab is larger: $$K/K_0 = B\,e^{-\mu t}$$, with a buildup factor $$B \ge 1$$ that grows with the thickness in mean free paths, $$\mu t$$. Shielding calculations need $$B$$.

**Beam hardening.** An X-ray tube makes a spread of photon energies. A filter removes low energy photons more than high energy ones, because $$\mu$$ falls steeply with energy, so the beam left behind has a higher mean energy and is harder to stop. The air kerma behind a thickness $$x$$ of absorber is $$K(x) = \int \Phi(E)\,E\,(\mu_{en}/\rho)_{air}\,e^{-\mu(E)x}\,dE$$. With $$\mu_{en}$$ this is strictly the collision kerma; in air at diagnostic energies $$g$$ is below 0.1 %, so it equals the kerma to the precision of the readings, and HVLs are quoted for it. The first half value layer HVL₁ halves it; the second, HVL₂, halves it again. The homogeneity coefficient $$h = \mathrm{HVL}_1/\mathrm{HVL}_2$$ is 1 only for a beam of one energy. The effective energy of a beam is the single energy that has the same HVL₁.

## Before the lab

1. Show from $$dN = -\mu N\,dx$$ that the half value layer is $$\ln 2/\mu$$ and that the mean distance a photon travels before its first interaction is $$1/\mu$$.
2. Water has 10 electrons per molecule and a molar mass of 18.015 g/mol. How many electrons are there in a gram of water? Lead has 82 electrons per atom and a molar mass of 207.2 g/mol. Which has more electrons per gram, and by how much?
3. If the photoelectric cross section per atom goes as $$Z^4$$ and $$A \approx 2Z$$, how does $$\tau/\rho$$ go with Z?
4. Use your answer to question 3 to explain why bone shows up against soft tissue on a 30 keV radiograph but hardly at all on a 6 MV treatment image.
5. For a beam of two energies, $$K(x) = K_1 e^{-\mu_1 x} + K_2 e^{-\mu_2 x}$$ with $$\mu_1 > \mu_2$$. Find $$-\frac{d\ln K}{dx}$$ and show that it decreases as $$x$$ grows. What does that mean for HVL₂ compared with HVL₁?

## Safety

No hazards in the virtual lab. In the real lab, the sources and X-ray beams used for these measurements are radiation hazards: follow your facility's radiation safety rules and your dosimetry badge requirements.

## Procedure

**Part 1: the coefficients of water.** In the Coefficients view, choose water with the scale in cm²/g. Record a reading at 10, 30, 100, 300, 1000, 3000 and 10 000 keV. Send the readings to the worksheet, then clear them. Then record lead at 30, 100, 1000 and 10 000 keV, cortical bone at 30 keV and soft tissue at 30 keV, and send those to the worksheet as a second copy of the table.

**Part 2: how the photoelectric effect depends on Z.** Still in the Coefficients view, choose elements by atomic number and record a reading at 100 keV for Z = 6, 13, 20, 29, 42, 50, 64, 74 and 82. (100 keV is above the K edge of every one of them.) Send the readings to the worksheet; they go to the second table. Clear them.

**Part 3: which process wins.** In the Which process wins view, record a reading for water, soft tissue, cortical bone, air, aluminum, copper and lead. Send the readings to the worksheet and clear them.

**Part 4: narrow and broad beam.** In the Narrow and broad beam view, choose water and 661.657 keV photons (¹³⁷Cs), 20 000 photons and random seed 1. Send photons through slabs 2, 5, 10, 15, 20 and 30 cm thick, recording a reading after each run. Send the readings to the worksheet and clear them. Then do the same for lead at 1252.86 keV (⁶⁰Co, one beam at the mean of its two lines) with slabs 0.5, 1, 2, 3, 5 and 8 cm thick, and send those as a second copy of the table.

**Part 5: beam hardening.** In the Beam hardening view, set the tube to 80 kVp with no added filter, half value layers in aluminum. Record a reading with 1.0, 2.5, 4.0 and 6.0 mm of aluminum filtration. Send the readings to the worksheet and clear them. Then set 120 kVp with 2.5 mm of aluminum and record a reading with 0, 0.1, 0.2 and 0.3 mm of copper added, and send those as a second copy of the table.

## Data

| Reading | Material | Energy $$h\nu$$ (keV) | Coherent $$\sigma_{coh}/\rho$$ (cm²/g) | Incoherent $$\sigma_{incoh}/\rho$$ (cm²/g) | Photoelectric $$\tau/\rho$$ (cm²/g) | Pair $$\kappa/\rho$$ (cm²/g) | $$\mu/\rho$$ (cm²/g) | $$\mu_{tr}/\rho$$ (cm²/g) | $$\mu_{en}/\rho$$ (cm²/g) | $$g$$ |
|---|---|---|---|---|---|---|---|---|---|---|
| | | | | | | | | | | |
| | | | | | | | | | | |
| | | | | | | | | | | |
| | | | | | | | | | | |
| | | | | | | | | | | |
| | | | | | | | | | | |
| | | | | | | | | | | |

### Z dependence at 100 keV

| Reading | Element | Z | Energy (keV) | Photoelectric $$\tau_a$$ (b/atom) | Incoherent per electron $$\sigma_{incoh}/Z$$ (b/electron) | ln Z | ln $$\tau_a$$ |
|---|---|---|---|---|---|---|---|
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |

### Which process wins

| Reading | Material | Z, or the equivalent Z for the photoelectric effect | Photoelectric = Compton at (keV) | Compton = pair production at (MeV) |
|---|---|---|---|---|
| | | | | |
| | | | | |
| | | | | |
| | | | | |
| | | | | |
| | | | | |
| | | | | |

### Narrow and broad beam

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

1. From the water table: at which of your energies is each process the largest share of $$\mu/\rho$$? Between which two of your energies does the photoelectric effect give way to Compton scattering, and between which does pair production overtake Compton scattering? Check your answers against the Which process wins table.
2. For water, compute $$\mu_{tr}/\mu$$ at 10 keV, 100 keV, 1 MeV and 10 MeV. Explain why it is near 1 at 10 keV, falls to a minimum near 100 keV, and rises again. At 100 keV, what share of the photon energy does the Compton electron get on average?
3. Compare $$g$$ for water and for lead at 1 MeV and 10 MeV. Why is $$g$$ larger for lead, and larger at higher energy?
4. From the Z dependence table, graph ln $$\tau_a$$ against ln Z. Is it a straight line? Find the slope $$n$$ and its standard error, so that $$\tau_a \propto Z^n$$ at 100 keV. Is $$n$$ between 3 and 5?
5. From the same table: how much does the incoherent cross section per electron change from carbon to lead? Why is it nearly constant, and why is it a little smaller for high Z at this energy?
6. From the water and lead readings at 1 MeV, divide each $$\mu/\rho$$ by the electrons per gram (your Before the lab question 2) to get the attenuation per electron. Lead has fewer electrons per gram than water, yet its $$\mu/\rho$$ at 1 MeV is about the same. Which process makes up the difference? Use the shares in the table.
7. Compare cortical bone and soft tissue at 30 keV: the ratio of their $$\mu/\rho$$, and the ratio of their photoelectric parts. Use the equivalent Z in the Which process wins table to explain the difference.
8. From the narrow and broad beam table for water, graph ln $$T$$ against $$t$$. Find the slope and its standard error, and so $$\mu$$ with its uncertainty. Compare with the tabulated $$\mu$$ the demo gives at 661.657 keV. Do they agree within your uncertainty?
9. Graph $$B$$ against $$\mu t$$ for water and for lead. Which builds up more for the same number of mean free paths? Explain why, using what happens to scattered photons in each (look at the photoelectric share at the energies the scattered photons have).
10. A water shield for ¹³⁷Cs is designed with the narrow beam law to transmit 10 % of the kerma. What thickness does that give? Using your water readings, by what factor would the real broad beam kerma behind it exceed the design? Graph ln $$(K/K_0)$$ against $$t$$ and extend a line through your last three points to estimate the thickness that really brings the kerma down to 10 %. Why is that estimate uncertain?
11. From the 80 kVp readings, graph HVL₁ against the aluminum filtration. How do HVL₁, $$h$$ and the mean energy change as filtration is added? Explain with your answer to Before the lab question 5.
12. From the 120 kVp readings: how much did 0.3 mm of copper raise HVL₁ and lower the air kerma? Explain why copper filtration lowers the skin dose for the same image quality.

## Uncertainty

The coefficients come from the NIST XCOM and SRD 126 tables, so a repeated reading gives the same values; the tables leave out photonuclear absorption, which NIST notes can add 5 % to 10 % to the total cross section near its peak, between about 10 and 30 MeV. The narrow and broad beam values come from counting simulated photons, so they scatter from run to run. For the narrow beam, $$T$$ is a binomial proportion: show that its standard error should be $$\sqrt{T(1-T)/N}$$ and compare that with the standard error the demo gives for one of your readings. Then repeat that reading with two other random seeds and say whether the three values of $$T$$ agree within their standard errors. Finally, say how many photons you would need to measure $$B$$ at 30 cm of water to 0.5 %.

## Questions

1. Iodine contrast agents and barium meals both rely on an absorption edge. Find the K edge energies of iodine and barium in the demo and explain why a diagnostic beam of about 30 to 40 keV mean energy is chosen for them.
2. A ⁶⁰Co therapy unit and a 6 MV linear accelerator treat at energies where Compton scattering wins in tissue. What does that mean for the dose to bone compared with the dose to soft tissue, per gram?
3. Lead is the usual shield for diagnostic X-rays, but concrete is used for the walls of a megavoltage treatment room. Use the coefficients and the buildup factors to explain both choices.
4. The buildup factor here is for a broad parallel beam hitting a slab. Would the buildup factor for a point source inside a large tank of water be larger or smaller for the same $$\mu t$$? Why?
5. Why does a CT scanner, which measures $$\mu$$ along many lines through the patient, show streaks and a dark center in a uniform water phantom unless it corrects for beam hardening?

## What to hand in

Prelab answers, every Data table with its graphs, the answers to the analysis and uncertainty sections, and answers to the questions. Identify simulated data.
