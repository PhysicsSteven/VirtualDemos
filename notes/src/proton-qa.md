---
title: Proton Therapy QA
level: Medical Physics, proton therapy (upper level, calculus)
time: 15 to 50 minutes
---
## What students should come away with

- A proton machine is checked every morning against its commissioning baseline: output within ±3 %, range (R90) within ±1 mm and spot position within ±2 mm (AAPM TG-224), and spot size, which many centers trend at about ±10 %.
- Each check sees its own faults. The output check at 2 cm sits in the flat plateau, so it does not see an energy error; the range check does, and more at high energy, since ΔR/R = p ΔE/E. A scanning magnet gain error moves only the spots away from the axis.
- The reading noise is far inside the tolerances, so a failed check means a real change. A drift is found in the trend long before a morning fails.
- Patient QA compares a measured plane with the plan by gamma analysis. It catches lateral errors larger than the distance criterion, but a plane in the middle of a spread out peak cannot see a range error, and a modest spot size error passes.

## Before class

Three modes. **Daily QA** runs four checks at the QA energy (70 to 226.7 MeV, the Proteus ONE energies): output at 2 cm depth in a water equivalent phantom, R90 from a stack of chambers every 2 mm, and nine spots on a scintillating screen. Six fault sliders set what is wrong with the machine. **Drift over weeks** runs the QA one morning at a time on a machine with a chosen fault, or a Mystery; the graph trends the chosen check against the tolerance. **Patient QA** delivers a plan for a target 8 to 14 cm deep to a 32 × 32 chamber array under water equivalent slabs, with delivery errors, and shows the plan, the measured points and the gamma map at 3 %/3 mm, 3 %/2 mm or 2 %/2 mm. The room shows the device for the chosen check, the lasers, and the beam scanning spot by spot.

## Running it in class

1. **Daily QA, all good.** Run it a few times. Output stays within about 0.2 % of baseline, R90 within hundredths of a millimeter, the spots within a few tenths of a millimeter.
2. **Output 4 % high**, then **Energy 0.5 % high, at 150 MeV.** Ask Q1. The output fails at 103.9 %; the energy error leaves the output alone and moves R90 by 1.38 mm.
3. **Same error, at 100 MeV.** Ask Q2. Now R90 moves 0.71 mm and passes; at 70 MeV it would be 0.37 mm.
4. **Steering off 2.5 mm**, then **Scanning magnet gain 3 % high.** The gain error leaves the central spot in place and moves the corners 2.4 mm.
5. **Output drifting.** Ask Q3. The line through 30 mornings climbs about 0.14 % a day and reaches 103 % near day 23, where the first morning fails.
6. **Patient QA, clean delivery**, then **spots shifted 2 mm**. Every point passes at 3 %/3 mm; at 3 %/2 mm about 90 % pass, and the failures sit on the shifted edges.
7. **Range error, measured at the edge.** Ask Q4. At 14.2 cm, on the distal falloff, only about a quarter of the points pass at 3 %/3 mm; move the depth to 11 cm and every point passes.

## Questions

**Q1.** Why does the output check, at 2 cm depth, not see a 0.5 % energy error?

**Q2.** The same energy error passes at 100 MeV and fails at 150 MeV. Which energy should a center check?

**Q3.** When should the physicist act on this drifting machine, and why not wait until the QA fails?

**Q4.** A 3 mm range error passes patient QA at 11 cm and fails badly at 14.2 cm. What does that say about where to measure?

## Common misconceptions

- **"If the morning QA passes, every plan is right."** The checks use one energy and one field; errors at other energies, in the plan or in the patient are not tested.
- **"Gamma passing means the dose is right."** Gamma is a tolerance in one plane. It forgives lateral shifts smaller than the distance criterion and sees nothing along the beam in the flat part of a spread out peak.
- **"A noisy reading can fail a healthy machine."** Here the tolerances are 17 to 80 standard deviations of the reading noise wide.

## Physics behind the demo

- Machine: modeled on the IBA Proteus ONE at Willis-Knighton (Pidikiti et al., J. Appl. Clin. Med. Phys. 19(1), 94, 2018): C230 cyclotron with a degrader, 70 to 226.7 MeV, pencil beam scanning, range defined at R90, output at 2 cm depth.
- Depth doses: the shared core (demos/lib/vdstop.js), with Bethe stopping powers and NIST PSTAR data, Bohr straggling and Bortfeld's nuclear losses, and no energy spread from the degrader. An energy calibration error scales the beam energy.
- Range stack: readings every 2 mm of water equivalent depth, the first at 1 mm, with noise of 0.3 % of the peak. Its R90 is the baseline R90 plus the shift that best fits the readings (deeper than half the range) with the commissioning curve; this recovers the true shift within 0.02 mm, where reading R90 straight off 2 mm points would err by up to a millimeter at low energy (curriculum/validation/test_proton-qa.cjs).
- Spots: the sizes in air at isocenter are Langner et al.'s ProBeam values (J. Appl. Clin. Med. Phys. 18(3), 96, 2017), linear in energy between 70, 160 and 245 MeV, since Pidikiti gives the Proteus ONE sizes only in a figure. In water each spot adds Fermi–Eyges scattering in quadrature, weighted over the plan's energy layers by the dose each gives at the measurement depth.
- The reading noise (output 0.2 %, range chambers 0.3 %, spot centroids 0.1 mm, spot size 1 %), the drift mode's day to day variation (output 0.5 %, energy 0.035 %, steering 0.15 mm, spot size 1.5 %) and the drift rates are the demo's choices. A steady machine stays inside Pidikiti's "under 2 %" over a year.
- Patient QA: a spread out peak over 8 to 14 cm (layers 0.3 cm apart in range, non negative least squares weights), spots on a 5 mm grid over the target, the plan on a 1 mm grid, and a 32 × 32 array of 4.5 mm chambers 7.62 mm apart (Arjomandy et al. 2008), each reading the mean over its face with 0.3 % noise. Gamma is global (Low et al. 1998) with a 10 % threshold, searched in 0.2 mm steps out to 2Δd with the plan interpolated. Tolerances: Pidikiti's 95 % at 3 %/3 mm, and TG-218's 3 %/2 mm (Miften et al. 2018).

## Going further

- Pair with **The Bragg Peak** for the spread out peak the patient plan uses, and with **Charged Particles in Matter** for the stopping power behind the range.
- Have students choose Mystery drift with New mystery several times and write a short QA log for each machine, as they will on the seniors' QA runs.
