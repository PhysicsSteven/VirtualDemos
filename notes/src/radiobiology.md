---
title: Radiobiology: Cell Survival and Fractionation
level: Junior and senior medical physics track (calculus); beside the radiation physics class, radiobiology unit
time: 20 to 50 minutes
---
## What students should come away with

- In the linear quadratic model the surviving fraction after a dose $$D$$ given at once is $$S = e^{-\alpha D - \beta D^2}$$. The initial slope of ln $$S$$ is $$-\alpha$$, and $$\alpha/\beta$$ is the dose at which single track and two track killing are equal: 4.2 Gy for V79 cells in air.
- Oxygen fixes radiation damage. Cells without oxygen need 2.3 to 3.3 times the dose (V79) for the same survival, and the oxygen enhancement ratio can rise or fall with dose depending on the cell line (T1: 5.0 at low dose falling to 2.3). Half the effect is reached at a few mmHg, so it is tumor hypoxia, not the difference between venous and arterial blood, that matters.
- A clonogenic assay measures survival as colonies per seeded cell, relative to the plating efficiency of unirradiated controls; counting errors are about $$\sqrt{c}$$, so the seeding rises with dose to keep every flask countable.
- Splitting a dose into $$n$$ fractions of $$d$$ gives $$\mathrm{BED} = nd(1 + d/(\alpha/\beta))$$. Tissues with a small α/β (late responding normal tissue, about 3 Gy) are spared most by small fractions; a tumor with a large α/β (about 10 Gy) loses effect when the same late effect is given in fewer fractions, a prostate cancer with α/β 1.5 Gy gains.
- The proton RBE is not a constant 1.1: it rises with LET toward the end of the range, as the dose per fraction falls, and as α/β falls. At 10 keV/µm and 2 Gy per fraction on tissue with α/β 2 Gy the model gives 1.53.

## Before class

The strip across the top switches between four views. **Survival and oxygen** draws survival against dose for V79 hamster lung cells, T1 human kidney cells (mean literature α and β in air and in hypoxia, Wenzl and Wilkens 2011) or an α and β of your own, with the α and β parts, an oxygen pressure slider from 0 to 160 mmHg, the effect of oxygen against its pressure, and the OER against dose with its low and high dose limits. **Clonogenic assay** seeds three flasks, irradiates them and draws the colonies; the counts are simulated Poisson counts, and a mystery line hides its α, β and plating efficiency behind a code. **Fractionation** draws the treatment calendar, a BED staircase for α/β 10, 3 and 1.5 Gy and one of your choosing, and the EQD2 against the number of fractions; Keep the late effect fixed makes the total dose follow $$n$$. **Proton RBE** draws the McNamara 2015 RBE against LET_d with its RBE_max and RBE_min limits and Paganetti's 2014 averages, the RBE against dose, and the photon dose for the same effect. Fourteen setups.

## Running it in class

1. **V79 in air and without oxygen**: drag the dose and watch the OER bracket. Then **OER at a high dose** and **Human kidney cells**. Ask Q1.
2. **A little oxygen goes a long way**: move the pO₂ slider from 0 to 20 mmHg and then on to 160. Ask Q2.
3. **A mystery cell line**: have each group plate a different code at 0, 1, 2, 4, 6 and 8 Gy, raising the seeding with dose, and compare their α and β. Ask Q3.
4. **60 Gy in 30 fractions**, then **60 Gy at once** and **Five fractions, same late effect**. Ask Q4. Then **Prostate in 20 fractions**.
5. **Protons at low LET**, **End of range, low α/β** and **Smaller fractions, higher RBE**. Ask Q5.

## Questions

**Q1.** V79 cells have an OER of 2.63 at 2 Gy and 3.02 at 10 Gy, but T1 cells have 2.77 at 2 Gy and 2.41 at 10 Gy. Use the low and high dose limits $$\alpha_{air}/\alpha_{hyp}$$ and $$\sqrt{\beta_{air}/\beta_{hyp}}$$ to explain why the two go opposite ways.

**Q2.** At 4 Gy the V79 dose ratio is 2.81 without oxygen, 1.44 at 4 mmHg and 1.04 at 40 mmHg. Why does tumor hypoxia matter so much for radiotherapy while the difference between venous and arterial blood hardly does?

**Q3.** A group plates 200 cells at 8 Gy and counts 2, 0 and 3 colonies. What went wrong, and how should they plate instead?

**Q4.** 60 Gy in one fraction gives late responding tissue (α/β 3 Gy) the effect of 756 Gy in 2 Gy fractions and a tumor (α/β 10 Gy) that of 350 Gy. Keeping the late effect of 60 Gy in 30 fixed, five fractions give only 32 Gy in all and a tumor EQD2 of 43.6 Gy. Why does fractionation spare late responding tissue, and when would fewer fractions be better?

**Q5.** At LET_d 10 keV/µm and 2 Gy per fraction the model gives RBE 1.53 for α/β 2 Gy but 1.24 for α/β 10 Gy. Why does a low α/β tissue's RBE depend more on LET, and why does that matter for an organ just behind the end of a proton beam's range?

## Common misconceptions

- **"Survival curves are straight lines on a log plot."** Only the α part is; the β part bends them down, and the shoulder is what fractionation exploits.
- **"OER is a constant 3."** It depends on the dose and the cell line, and it falls off steeply with oxygen pressure only below about 20 mmHg.
- **"The same total dose has the same effect."** Not unless it is given the same way: 60 Gy at once and 60 Gy in 30 fractions differ by a factor of more than ten in late effect.
- **"Hypofractionation is always worse for the tumor."** Only when the tumor's α/β is larger than that of the surrounding late responding tissue; for prostate cancer it is smaller.
- **"Protons have an RBE of 1.1."** That is the clinical convention, an average; the measured RBE varies along the beam and with dose and tissue.

## Physics behind the demo

- LQ model, α/β 10 and 3 Gy, oxygen effect and clonogenic assay: Hall and Giaccia, Radiobiology for the Radiologist, 8th ed. (2019). Cell line α and β: Wenzl and Wilkens 2011, Radiat. Oncol. 6, 171, the means of the published values for V79 (air 0.135 /Gy, 0.032 /Gy²; hypoxia 0.06, 0.003) and T1 (air 0.10, 0.047; hypoxia 0.02, 0.009).
- Between hypoxia and air each of α and √β scales by $$1 + (m - 1)\frac{p}{p + K}\frac{160 + K}{160}$$ with K = 3.8 mmHg (the Alper and Howard-Flanders form as used by Zhu and others 2022, arXiv:2201.02278); the last factor makes air, 160 mmHg, give the aerobic values exactly. Real cells vary from this form.
- The assay is simulated: each flask's colonies are Poisson with mean (cells seeded) × PE × S. The plating efficiencies of V79 (0.70) and T1 (0.50) were chosen for the simulation, and a mystery line's α (0.10 to 0.40 /Gy), β (0.010 to 0.060 /Gy²) and PE (0.50 to 0.80) are made up from its code. Real assays scatter more than counting alone (Franken and others 2006, Nat. Protoc. 1, 2315).
- Fractionation: equal fractions with full repair between them and no repopulation, so overall time does not count; the LQ model is least reliable above about 8 to 10 Gy per fraction. Prostate α/β 1.5 Gy (0.8 to 2.2): Brenner and Hall 1999. 60 Gy in 20 against 74 Gy in 37: the CHHiP trial, Dearnaley and others 2016, Lancet Oncol. 17, 1047.
- Proton RBE: McNamara, Schuemann and Paganetti 2015, Phys. Med. Biol. 60, 8399, with RBE_max = 0.999064 + 0.35605 LET_d/(α/β)ₓ and RBE_min = 1.1012 − 0.0038703 √(α/β)ₓ LET_d (as implemented in matRad). Averages along a spread out Bragg peak (about 1.1 at the entrance, 1.15 in the middle, 1.35 at the distal edge and 1.7 in the distal falloff): Paganetti 2014, Phys. Med. Biol. 59, R419. LET_d is set by hand, not computed along a beam.

## Going further

- Pair with **Dosimetry** for how the dose itself is measured, and with **Photon Interactions in Matter** for why megavoltage photon dose hardly depends on tissue type.
- Give each group a different mystery code and pool the α/β values: how widely do they spread, and how well does each group's uncertainty describe its error?
- Ask how a course should change if a tumor repopulates quickly after the third week.
