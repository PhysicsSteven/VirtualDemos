---
title: The Bragg Peak
level: Medical Physics, proton therapy (upper level, calculus)
time: 10 to 45 minutes
---
## What students should come away with

- A proton beam puts most of its dose down near the end of its range, because each proton loses energy faster as it slows. The beam energy sets the depth: R = αE^p, from about 4.1 cm at 70 MeV to 33 cm at 230 MeV in water, the energies of the IBA Proteus ONE.
- The distal 80 % point sits at the CSDA range. The peak widens with depth, since range straggling is about 1.1 % of the range.
- The same beam stops sooner in bone and later in fat. Plans convert every tissue to water equivalent depth, and the conversion is why they add range margins.
- One peak is a few millimeters wide. A spread out Bragg peak covers a target with weighted energy layers, the deepest one weighted most. The price is an entrance dose that rises with the width of the target.
- Against a single 6 MV photon field, which peaks 1.5 cm deep and keeps going, a single proton field gives about half the dose in front of the target and almost none behind it.

## Before class

Three views. **One energy**: a single proton energy from 70 to 230 MeV in water, muscle, adipose tissue or compact bone, with an optional energy spread. **Spread out peak**: a target set by its two depths, energy layers 0.3 to 1.0 cm apart in range, and weights fitted for a flat dose or all equal; each weighted layer can be shown on the graph. **Protons and photons**: the same spread out peak and a measured 6 MV beam (10 × 10 cm², SSD 100 cm), both scaled to the same mean dose over the target, with the phantom showing either beam. The phantom shows the dose as a clinical color wash. Beam on animates the particles: protons slow and stop, and photons keep going. A Bragg peak chamber on a scanning carriage reads the dose at its depth on the electrometer. Blind hides the ranges, widths and dose ratios.

## Running it in class

1. **150 MeV in water.** Ask Q1. The peak is at 15.60 cm, R80 at 15.76 cm (PSTAR range 15.77 cm), and the peak is 4.9 times the entrance dose.
2. **70 MeV, lowest**, then **230 MeV, highest.** The peak to entrance ratio falls from 5.9 to 3.7, and the 80 % to 20 % falloff widens from 0.6 mm to 4.5 mm.
3. **150 MeV in bone**, then **in fat.** Ask Q2. R80 is 9.16 cm in bone, 15.32 cm in muscle and 16.65 cm in fat.
4. **Spread out peak, 10 to 15 cm.** Ask Q3. It takes 18 layers, 146.7 down to 116.2 MeV. The deepest carries 30 % of the weight, and the entrance dose is 62 % of the target dose.
5. **Equal weights**, then **Layers too far apart.** The dose tilts toward the front, then ripples between 80 % and 133 %.
6. **Protons against photons.** Ask Q4. Before the target the mean dose is 71 % for protons against 145 % for photons. In the 5 cm past it, it's 5 % against 75 %.

## Questions

**Q1.** Why is the dose largest near the end of the range, not where the beam enters?

**Q2.** The same 150 MeV beam stops 6.6 cm sooner in bone than in water. What does a planning system need to know about the tissue in front of a tumor?

**Q3.** Why does the deepest energy layer need the largest weight?

**Q4.** Both beams give the target the same dose. Where does each give its highest dose, and which gives more outside the target?

## Common misconceptions

- **"Protons put their dose only in the peak."** The plateau in front of the peak gets 17 to 27 % of the peak dose for one energy. A spread out peak's entrance dose is 40 to 80 % of the target dose, depending on its width.
- **"A higher energy means a stronger beam."** The energy sets the depth; the number of protons (the monitor units) sets the dose.
- **"The peak is as sharp at any depth."** Straggling grows with range, so deep peaks are wider and their distal edges less steep.

## Physics behind the demo

- Proton depth dose: the broad beam model of the shared core (demos/lib/vdstop.js). It uses Bethe stopping powers with NIST PSTAR material data, CSDA ranges within 0.2 mm of PSTAR in water from 10 to 250 MeV, Bohr range straggling, the beam's energy spread, and nuclear losses of 1.2 % per cm with 60 % of the energy deposited locally (Bortfeld 1997). A tissue medium is turned into water equivalent depth with its stopping power ratio to water; R80 in each tissue is within 0.2 mm of its CSDA range (curriculum/validation/test_vdstop.cjs).
- Machine: the IBA Proteus ONE at Willis-Knighton, which has a C230 cyclotron, 70 to 230 MeV, a variable degrader of beryllium, graphite and aluminum, and a 4.1 cm water equivalent range shifter (Pidikiti et al., J. Appl. Clin. Med. Phys. 19(1), 94, 2018).
- Spread out peak: layers evenly spaced in range from one range straggling width past the target's end, energies from the CSDA range. Weights come from non negative least squares over the target (Lee and Seung's multiplicative update, 3000 passes), scaled to a mean of 100 % over the target.
- Photons: a four parameter curve (buildup, attenuation, a slow scatter term, inverse square from SSD 100 cm) fitted through the measured VitalBeam points of Chowdhury et al., Int. J. Radiol. Radiat. Ther. 11(4), 100 (2024). The points are surface 50.7 %, d_max 1.5 cm, d80 6.6 cm, D10 66.8 % and d50 15.2 cm, and the curve passes within 0.05 % of each. Past 15.2 cm it is extrapolated (37.7 % at 20 cm), so the photon dose behind deep targets is uncertain by a few percent.
- Dose wash: the central axis curve with field edges. The edges use the Fermi–Eyges lateral spread for protons and a fixed 3 mm blur for a diverging photon field (a picture). The moving particles are a picture too, with end depths drawn from the model's distribution. Dose is physical dose; clinical proton doses use an RBE of 1.1.

## Going further

- Pair with **Charged Particles in Matter** for the stopping power and straggling behind each peak, and with **Proton Therapy QA** for how a clinic checks the range and output of these layers every day.
- Ask for a target from 1 to 3 cm deep. The demo stops at the 70 MeV range, which leads to range shifters.
