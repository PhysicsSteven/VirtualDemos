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

Read the photon interaction coefficients of tissues and shields from the NIST tables, and find how each process depends on photon energy and atomic number.

## Background

**Attenuation.** A photon crossing a thin layer $$dx$$ interacts with probability $$\mu\,dx$$, where $$\mu$$ is the linear attenuation coefficient. For a beam of $$N$$ photons that have not yet interacted, $$dN = -\mu N\,dx$$, so $$N(x) = N_0 e^{-\mu x}$$. Dividing by the density gives the mass attenuation coefficient $$\mu/\rho$$ (cm²/g), which does not depend on how tightly the material is packed. The half value layer is $$\ln 2/\mu$$ and the mean free path $$1/\mu$$. In terms of the cross section per atom, $$\mu/\rho = \sigma_a N_A/A$$, and the processes add: $$\mu/\rho = \sigma_{coh}/\rho + \sigma_{incoh}/\rho + \tau/\rho + \kappa/\rho$$.

**The processes.** In coherent (Rayleigh) scattering the photon is deflected by the whole atom and keeps its energy. In incoherent (Compton) scattering it gives part of its energy to an electron; per electron this hardly depends on Z, so $$\sigma_{incoh}/\rho$$ follows the electrons per gram, $$N_A Z/A$$. In the photoelectric effect the photon is absorbed and an electron is ejected from an inner shell; per atom $$\tau$$ grows roughly as $$Z^n/(h\nu)^3$$ with $$n$$ between 3 and 5, and it jumps at each absorption edge. Above $$2m_ec^2 = 1.022$$ MeV the photon can turn into an electron and a positron in the field of a nucleus ($$\kappa \propto Z^2$$ per atom) or, above $$4m_ec^2$$, of an electron.

**Energy transfer and absorption.** Only part of the photon's energy goes to charged particles. The energy transfer coefficient $$\mu_{tr}$$ counts what is handed to electrons and positrons: all of $$h\nu$$ in the photoelectric effect except what fluorescence X-rays carry off, the electron's mean share in Compton scattering, and $$h\nu - 2m_ec^2$$ in pair production. Some of that energy is radiated again as bremsstrahlung while the electrons slow down, a fraction $$g$$, so the energy absorbed nearby is $$\mu_{en} = \mu_{tr}(1-g)$$. Kerma is $$\Phi E\,\mu_{tr}/\rho$$ and the collision kerma, which equals the dose under charged particle equilibrium, is $$\Phi E\,\mu_{en}/\rho$$.

## Before the lab

1. Water has 10 electrons per molecule and a molar mass of 18.015 g/mol. How many electrons are there in a gram of water? Lead has 82 electrons per atom and a molar mass of 207.2 g/mol. Which has more electrons per gram, and by how much?
2. If the photoelectric cross section per atom goes as $$Z^4$$ and $$A \approx 2Z$$, how does $$\tau/\rho$$ go with Z?
3. Use your answer to question 2 to explain why bone shows up against soft tissue on a 30 keV radiograph but hardly at all on a 6 MV treatment image.
4. Lead is the usual shield for diagnostic X-rays. Gram for gram, how does lead compare with water at attenuating photons ($$\mu/\rho$$), at 100 keV and at 1 MeV? For each energy, pick one: lead far more, lead somewhat more, about the same, or lead less.

## Safety

No hazards in the virtual lab. In the real lab, the sources and X-ray beams used for these measurements are radiation hazards: follow your facility's radiation safety rules and your dosimetry badge requirements.

## Procedure

**Part 1: the coefficients of water.** (1) In the Coefficients view, choose water in the Material list and press cm²/g for the scale. Click the Energy hν value, type each energy, 10, 30, 100, 300, 1000, 3000 and 10,000 keV, and press Record reading at each. Press Export to worksheet, then Clear. (2) In the same way, record lead at 30, 100, 1000 and 10,000 keV, and export those as a second copy of the table.

**Part 2: how the photoelectric effect depends on Z.** Still in the Coefficients view, choose Any element, by Z in the Material list and set Energy hν to 100 keV. Click the Element Z value, type each Z, 6, 13, 20, 29, 42, 50, 64, 74 and 82, and record a reading at each. (100 keV is above the K edge of every one of them.) Export the readings to the worksheet; they go to the second table. Clear them.

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

## Analysis

1. From the water table: at which of your energies is each process the largest share of $$\mu/\rho$$? Between which two of your energies does the photoelectric effect give way to Compton scattering, and between which does pair production overtake Compton scattering (or does it at none of them)?
2. For water, compute $$\mu_{tr}/\mu$$ at 10 keV, 100 keV, 1 MeV and 10 MeV. Explain why it is near 1 at 10 keV, falls to a minimum near 100 keV, and rises again. At 100 keV, what share of the photon energy does the Compton electron get on average?
3. From the Z dependence table, graph ln $$\tau_a$$ against ln Z. Is it a straight line? Find the slope $$n$$ and its standard error, so that $$\tau_a \propto Z^n$$ at 100 keV. Is $$n$$ between 3 and 5?
4. From the water and lead readings at 1 MeV, divide each $$\mu/\rho$$ by the electrons per gram (your Before the lab question 1) to get the attenuation per electron. Lead has fewer electrons per gram than water: how does its attenuation per electron at 1 MeV compare with water's, and which process makes up the difference? Use the shares in the table.

## Uncertainty

The coefficients come from the NIST XCOM and SRD 126 tables, so a repeated reading gives the same values; the tables leave out photonuclear absorption, which NIST notes can add 5 % to 10 % to the total cross section near its peak, between about 10 and 30 MeV. Compare the Z dependence you found in Analysis 3 with the range of 3 to 5 that the simple argument gives, and say what limits the precision of the slope.

## Questions

1. Set your answers to Before the lab 4 beside your water and lead readings at 100 keV and at 1 MeV: how many times more does a gram of lead attenuate than a gram of water at each energy, and a centimeter (lead's density is 11.35 g/cm³)? Explain what you find at each energy from which process carries most of $$\mu/\rho$$ there, and say what that tells you about why lead is chosen for diagnostic X-rays.

## What to hand in

Prelab answers, every Data table with its graphs, the answers to the analysis and uncertainty sections, and the answer to the question. Identify simulated data.
