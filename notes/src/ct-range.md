---
title: CT Numbers and Proton Range
level: Medical Physics, proton therapy (upper level, calculus)
time: 20 to 50 minutes
---
## What students should come away with

- A CT number measures X-ray attenuation, not stopping power. Photon attenuation at CT energies depends on electron density and also, through the photoelectric effect (about Z⁴ per atom), on the elements; proton stopping power depends on electron density and, only logarithmically, on the mean excitation energy I.
- The stoichiometric calibration (Schneider, Pedroni and Lomax 1996) scans plastics of known composition, fits two constants of the scanner, then computes the CT numbers of real tissues from their compositions. A curve built directly from the plastics misses bone badly, because the plastics' elements are not the body's.
- The curve is tested by measuring the range shift of a real tissue slab. A tissue whose composition differs from the reference set sits off the curve.
- Every plan carries a range uncertainty, so the distal edge is placed beyond the target by a margin such as 3.5 % of the range plus 1 mm (Paganetti 2012). The margin is in water equivalent depth; in lung it stretches to centimeters.

## Before class

Three views. **Scan the phantom** scans a 20 cm water cylinder with eight inserts (polyethylene, polystyrene, MS20, A-150, PMMA, B-100, Teflon and air) at 80 to 140 kV, plots CT number against electron density, and fits the Schneider constants k_coh and k_ph. **CT number to stopping power** plots the stoichiometric and tissue substitute curves with the reference tissues, and puts a slab of a chosen tissue, or a Mystery, in a 150 MeV beam in front of a water tank to measure its range shift. **Range and margins** plans one beam to a target in the brain, the prostate (through a femoral head) or a lung tumor, with a CT number error, an error in the tissues' I values and the margin as sliders the planner does not see, and splits the range error into its parts.

## Running it in class

1. **Calibration scan, 120 kV.** Polyethylene sits below the line HU = 1000 (ρₑ − 1) and B-100 far above it (805 HU against a line value of 378). Ask Q1.
2. **Same phantom, 80 kV.** B-100 rises to about 1081 HU, the fit constants change, and the mean detected photon energy falls from 76.7 to 58.6 keV.
3. **Both curves**, then **Bone on the substitute curve.** Ask Q2. Muscle is off by +2.7 % on the substitute curve and +0.1 % on the stoichiometric one; cortical bone by +22.6 % and −0.4 %.
4. **Substitute curve without Teflon.** The bone error falls to −4.0 %: one insert set the whole bone end of the curve.
5. **Mystery tissue.** Measure the range shift; Mystery 1 is about 9 % below the curve. Ask Q3, then New mystery for the others, which sit within about 2 %.
6. **Brain, 3.5 % + 1 mm**, then **Brain, no margin.** With the margin the real R90 lands 4.0 mm past the target; without it the far edge is missed by 0.3 mm.
7. **Lung tumor**, then **Lung, CT numbers 10 HU high.** Ask Q4. The same rule gives a 15.8 mm margin, and a 10 HU error moves the real R90 4.5 mm deeper.
8. **Prostate, tissue I values 10 % low**, then **Prostate planned on the substitute curve.** Ask Q5. The I value error costs −2.2 mm; the substitute curve sends the beam 11.2 mm too deep, so the distal falloff lands about 2 cm into the tissue beyond the target.

## Questions

**Q1.** Polyethylene and B-100 fall on opposite sides of the line HU = 1000 (ρₑ − 1). Why, and why does lowering the kV spread them further?

**Q2.** Why does the curve built straight from the plastics miss cortical bone by over 20 %, when the plastics were made to imitate tissue?

**Q3.** The Mystery 1 slab sits about 9 % below the stoichiometric curve. What could make a real tissue miss a curve built from real tissue compositions?

**Q4.** Why is the lung margin 15.8 mm when the brain margin, from the same 3.5 % + 1 mm rule, is 4.3 mm?

**Q5.** Rank the range errors you found (curve, CT number, I values, substitute curve) and say which ones a margin is meant to cover.

## Common misconceptions

- **"The CT number is a density."** It is attenuation relative to water, and it depends on the elements and the kV. Two materials with the same electron density can differ by hundreds of HU.
- **"Tissue equivalent plastic behaves like tissue for both beams."** A plastic made to match tissue for one purpose (here, X-ray attenuation or density) need not match it for the other.
- **"The margin is a fixed distance in the patient."** It is a fraction of the water equivalent range; in low density tissue it is a much longer distance.
- **"The I value hardly matters because stopping power depends on ln I."** d ln S / d ln I = −1/L with L about 8 at 150 MeV, so a 10 % error in I is about a 1.2 % error in stopping power, a couple of millimeters at depth.

## Physics behind the demo

- Materials: compositions by weight, densities and I values from NIST ESTAR (ICRP and ICRU tissues, the plastics); inflated lung at 0.26 g/cm³ (ICRU Report 46). Mixtures (cortical bone in soft tissue from 10 % to 90 % by volume, spongy and marbled tissues) add masses and use Bragg's rule for I.
- Scanner: not any one model. A SpekPy tungsten spectrum (as in lib/photondata.js) behind 6 mm Al, hardened by 20 cm of water, weighted by the detected energy, with XCOM attenuation coefficients; HU = 1000 (μ̄/μ̄_water − 1). Pixel noise 16, 12, 10 and 9 HU at 80, 100, 120 and 140 kV, regions of 490 pixels: the demo's choices.
- Fit: Schneider et al. 1996 (Phys. Med. Biol. 41, 111), μ ∝ ρ Σ (wᵢ/Aᵢ)(Zᵢ + k_coh Zᵢ^2.86 + k_ph Zᵢ^4.62), linear least squares in k_coh and k_ph. On noiseless inserts it reproduces every insert within 3 HU and every reference tissue within 4 HU at 120 kV.
- Stopping power ratios: Bethe, through the shared core (lib/vdstop.js), at 150 MeV. Curves: continuous broken lines fitted by least squares through fixed knots (−1000, −750, −120, 60 and 1600 HU for the stoichiometric curve; −1000, −100, 100 and 1600 HU for the substitutes, since the phantom has no lung insert).
- Slab: the range shift is VDStop's water equivalent thickness at 150 MeV, read with 0.1 mm noise (a multilayer chamber's repeatability, the demo's choice).
- Plans: one beam along a sketched path of tissue layers (not anatomy); the planned distal R90 = WET(1 + a) + b, where WET is the integral of the planned stopping power ratio to the target's far edge. The range error is the difference between where that R90 lands in the real and the planned stopping powers, and is split by recomputing it with one error at a time.
- Uncertainty budget: Paganetti 2012 (Phys. Med. Biol. 57, R99), with the margin rule 3.5 % + 1 mm; Yang et al. 2012 (Phys. Med. Biol. 57, 4095) for the stoichiometric method's own uncertainty. Tested in curriculum/validation/test_ct-range.cjs.

## Going further

- Pair with **Charged Particles in Matter** for the Bethe formula and I, with **Photon Interactions in Matter** for why the photoelectric effect grows with Z, and with **The Bragg Peak** for R90 and the distal falloff.
- Dual energy CT separates electron density from effective Z by scanning twice. Have students compare the 80 and 120 kV scans of the same inserts and argue why two scans give more than one.
