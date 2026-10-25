---
title: Photon Interactions in Matter
level: Junior and senior medical physics track (calculus); beside the radiation physics class, photon interactions unit
time: 20 to 50 minutes
---
## What students should come away with

- A photon beam is attenuated one photon at a time: each photon either goes through untouched or interacts, so the photons that never interacted fall as $$e^{-\mu x}$$, and $$\mu/\rho$$ is a sum of coherent, incoherent (Compton), photoelectric and pair production parts.
- Which process wins depends on energy and Z. In water the photoelectric effect wins below 28 keV, Compton scattering from there to 24 MeV, and pair production above. In lead the Compton region shrinks to 0.56 to 4.7 MeV. Nearly every photon used in radiotherapy interacts in tissue by Compton scattering.
- The photoelectric effect per atom rises steeply with Z, roughly as $$Z^4$$ at 100 keV, which makes bone contrast in a diagnostic beam (cortical bone's $$\mu/\rho$$ is 3.5 times soft tissue's at 30 keV) and makes lead a good shield for diagnostic X-rays. Compton scattering per gram follows the electrons per gram, which hardly change from tissue to tissue.
- Attenuation is not absorption: $$\mu_{tr}$$ counts the energy handed to charged particles and $$\mu_{en} = \mu_{tr}(1-g)$$ what stays nearby. In water at 100 keV the electrons get only 15 % of the energy of the photons that interact.
- Behind a broad beam the kerma is $$B e^{-\mu t}$$ with a buildup factor $$B$$ well above 1: 2.5 behind 20 cm of water for ¹³⁷Cs, 4.1 behind 30 cm of concrete for ⁶⁰Co. A shield designed with the narrow beam law lets through several times the design dose.
- Filtration hardens a polyenergetic beam: the mean energy and the half value layer rise, and $$\mathrm{HVL}_2 > \mathrm{HVL}_1$$ because $$-d\ln K/dx$$, a kerma weighted mean of $$\mu$$, falls with depth.

## Before class

The strip across the top switches between four views. **Coefficients** plots $$\mu/\rho$$ from 1 keV to 100 MeV with its five parts and $$\mu_{tr}/\rho$$ and $$\mu_{en}/\rho$$, for 15 materials (water, ICRU 44 soft tissue, muscle, adipose, lung and cortical bone, air, PMMA, LiF, ordinary concrete, graphite, aluminum, copper, tungsten, lead) or any element Z = 1 to 92, in cm²/g, 1/cm, barns per atom or barns per electron; drag across the chart to move the energy. **Which process wins** draws the classic map of Z against energy with the material marked, and stacks the shares for it below. **Narrow and broad beam** is a Monte Carlo simulation of a broad parallel beam on a slab (photons only), drawn to scale with 160 sample tracks, the spectrum behind the slab, and $$T$$ and $$K/K_0$$ against $$\mu t$$ for every run at that energy; 20 000 photons take about a second. **Beam hardening** filters a tungsten anode spectrum with aluminum and an added filter and finds HVL₁, HVL₂, the homogeneity coefficient, the mean and effective energies and the air kerma. Fourteen setups. The Lab section can hide the tabulated $$\mu$$ and the narrow beam prediction so a class measures $$\mu$$ blind.

## Running it in class

1. **Water at 100 keV**, then **Bone against soft tissue, 30 keV**. Ask Q1 before showing the shares.
2. **Iodine K edge** and **Lead K edge**. Ask Q2 while the cursor crosses the edge.
3. **Where Compton wins in water**, then **Lead from 1 keV to 100 MeV** and the map in Which process wins. Ask Q3.
4. **Cs 137 through water**: send photons at 5, 10, 20 and 30 cm and watch the two sets of points part. Ask Q4. Then **Co 60 through a concrete wall**.
5. **80 kVp diagnostic beam**: add aluminum and watch HVL₁ and the mean energy rise; then **120 kVp with copper**. Ask Q5.

## Questions

**Q1.** At 100 keV, Compton scattering is 95 % of water's $$\mu/\rho$$ = 0.1707 cm²/g, yet $$\mu_{en}/\rho$$ is only 0.0255 cm²/g. Where does the rest of the energy go? Why does bone show up against soft tissue at 30 keV but hardly at all at 1.25 MeV?

**Q2.** Iodine's photoelectric coefficient jumps by a factor of 6.0 at its K edge, 33.17 keV. Why is there an edge at all, and why does an iodine contrast agent work best with a beam whose photons sit just above the edge?

**Q3.** The photoelectric effect wins in water below 28 keV and in lead below 0.56 MeV. Use $$\tau_a \propto Z^4/(h\nu)^3$$ and $$\sigma_{incoh} \propto Z$$ per atom to show roughly how the crossing energy should scale with Z, and compare with these two numbers.

**Q4.** For ¹³⁷Cs through 20 cm of water ($$\mu t$$ = 1.71) the narrow beam transmission is 0.180 but the broad beam kerma ratio is 0.449. What is the buildup factor, and where do the extra photons come from? Why is the buildup factor smaller in lead for the same $$\mu t$$?

**Q5.** At 80 kVp with 2.5 mm Al, HVL₁ is 2.74 mm Al and HVL₂ is 4.09 mm Al. Why is HVL₂ larger? What would $$h$$ be for a beam of one energy, and why does adding copper bring $$h$$ closer to 1?

## Common misconceptions

- **"Attenuated means absorbed."** Most of the attenuation of a megavoltage beam in tissue is scattering; a scattered photon carries most of its energy elsewhere. Dose follows $$\mu_{en}$$, not $$\mu$$.
- **"Lead is the best shield at every energy."** Per gram, lead and water attenuate about the same in the Compton region (0.0710 against 0.0707 cm²/g at 1 MeV). Lead wins at low energy (photoelectric) and at high energy (pair production), and per centimeter because it is dense. Concrete is used for megavoltage rooms because it is cheap per tenth value layer and also slows neutrons.
- **"The exponential law gives the dose behind a shield."** It gives the photons that never interacted. Behind a broad beam the scattered photons add a buildup factor that can be several times larger.
- **"The half value layer is a property of the material."** For a polyenergetic beam it depends on the beam too, and it grows with depth as the beam hardens.
- **"Pair production starts as soon as a photon has 1.022 MeV."** It becomes possible there in a nucleus's field but stays small until several MeV; in the field of an electron (triplet production) the threshold is 2.044 MeV.

## Physics behind the demo

- Cross sections: NIST XCOM (Berger and others, Standard Reference Database 8), coherent, incoherent, photoelectric, pair in the nuclear and the electron field, for Z = 1 to 92 on XCOM's standard energy grid with the edges, interpolated log–log. A compound is the sum of its elements by weight. The tables used here come from the MIT licensed MuMassCalculator repository (tabulated XCOM data used with NIST's permission); summed for each material they match NIST SRD 126 $$\mu/\rho$$ to a median of 0.01 % (water and air to 0.05 % at every table energy). Photonuclear absorption is left out, as in XCOM.
- $$\mu/\rho$$, $$\mu_{en}/\rho$$, compositions and densities: Hubbell and Seltzer, NIST SRD 126 (tissues from ICRU Report 44). Ordinary concrete is SRD 126's, 2.30 g/cm³.
- Energy transfer: $$\mu_{tr}/\rho = (\tau/\rho)(1-\delta/h\nu) + (\sigma_{incoh}/\rho)\langle T\rangle/h\nu + (\kappa/\rho)(1-2m_ec^2/h\nu)$$ (Attix, Introduction to Radiological Physics and Radiation Dosimetry, 1986, ch. 7). $$\langle T\rangle$$ is the Klein–Nishina energy transfer weighted by the incoherent scattering function $$S(x,Z)/Z$$ (Hubbell and others 1975), integrated in $$\ln(1-\cos\theta)$$; the closed form Klein–Nishina total is matched to $$2\times10^{-5}$$. $$\delta$$ counts K and L fluorescence with Krause's yields (1979) and Deslattes's line energies (2003); every L vacancy gets the L3 yield and the Lα₁ energy, and M shells are left out. So $$g = 1-\mu_{en}/\mu_{tr}$$ is the radiative yield only where fluorescence is small: water 0.0004 at 100 keV, 0.0025 at 1 MeV, 0.037 at 10 MeV; lead at 100 keV reads 0.039, most of it fluorescence the model leaves out.
- Crossings from the tables: water photoelectric = incoherent at 28.0 keV, incoherent = pair (both fields) at 24.1 MeV; lead 556 keV and 4.75 MeV; cortical bone 55.3 keV. The equivalent Z of a material is the Z of the element whose photoelectric = incoherent crossing is at the same energy (water 7.50, cortical bone 13.7).
- Monte Carlo: photons only, in a slab infinite sideways. Coherent sampling with the form factor as in PENELOPE; incoherent with Klein–Nishina (Geant4's method) and rejection on $$S(x,Z)/Z$$, free electron energies, no Doppler broadening; K and L fluorescence emitted isotropically; positrons annihilate where they are made into two 511 keV photons. Scored: photons that never interacted ($$T$$, binomial standard error), and air kerma through the back face, $$\sum E\,(\mu_{en}/\rho)_{air}/\lvert\cos\theta\rvert$$, relative to the unattenuated beam. Averaged over 30 seeds the narrow beam count matches $$e^{-\mu t}$$ (0.18048 against 0.18018 ± 0.0007, water at 661.657 keV, 20 cm). Buildup here is for a broad parallel beam on a slab; the point isotropic buildup factors of ANSI/ANS 6.4.3 (infinite medium) are larger.
- X-ray spectra: SpekPy 2.5.4 (Poludniowski and others, Med. Phys. 48, 3630, 2021), tungsten anode at 12°, 0.8 mm Be, 50 to 150 kVp in 10 kV steps, 1 keV bins. The HVLs here use each bin at its center energy with narrow beam attenuation and SRD 126 air $$\mu_{en}/\rho$$, and agree with SpekPy's own to 0.1 to 0.2 % (80 kVp, 2.5 mm Al: HVL₁ 2.740 mm, HVL₂ 4.093 mm, mean 42.98 keV). The air kerma per mAs differs from SpekPy's by about 2.5 % from the bin center approximation, so read it as a relative number.
- ⁶⁰Co is one beam at the mean of its two lines, 1252.86 keV (ENSDF: 1173.228 and 1332.492 keV); ¹³⁷Cs 661.657 keV.

## Going further

- Pair with **Compton Scattering** for the Klein–Nishina angular distribution and the Compton edge, with **Gamma Spectroscopy** for attenuation measured with a NaI detector and lead absorbers, and with **Shells and X-Rays** for the tube spectrum and the K lines.
- The Lab section's blind mode hides the tabulated $$\mu$$: give each group a different energy or material and have them find $$\mu$$ from a fit of ln $$T$$ against $$t$$ with its standard error.
- Ask why CT numbers (Hounsfield units) of bone depend on the tube voltage while those of fat and muscle barely do.
