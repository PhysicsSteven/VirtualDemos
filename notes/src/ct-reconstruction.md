---
title: CT Image Reconstruction
level: Medical Physics, imaging (upper level, calculus)
time: 15 to 45 minutes
---
## What students should come away with

- A CT scanner measures line integrals of μ, one view of parallel lines at a time; the sinogram is all of them, and a point traces a sine curve through it.
- Backprojection alone gives the true image blurred by 1/r. The ramp filter, |f| in frequency, undoes exactly that blur, which is why the filtered projection dips below zero beside every edge.
- The detector bins set the resolution (the point spread grows in proportion to the bin width), the number of views must keep up with the bins (about π/2 views per bin across the object) or streaks appear, and a missing range of angles smears edges that run along the missing directions.
- Image noise comes from counting photons: it falls as 1/√N₀, so halving it costs four times the dose. A softer filter trades resolution for noise.

## Before class

Three panes: the scanner (tube, rays, detector and the projection it measures), the sinogram, and the image, which can show the reconstruction, the true phantom or their difference. Scan takes the views one by one, slowed down. Once a scan exists every control recomputes it at once, so students can drag the Views or Detector bin width slider and watch. The graph shows the projection with its filtered version, a profile along a line across the image, or the three filters against spatial frequency. Four phantoms: Shepp and Logan's head (its values read as μ/μ_water, so brain +20 HU, ventricles 0 HU, skull +1000 HU), a 20 cm water cylinder with +10 and +5 HU discs, bone rods from 2 to 0.5 mm across, and a 0.2 mm tungsten wire.

## Running it in class

1. **Head, filtered backprojection.** Press Scan and let the class watch a few views go in. Pause, click a row of the sinogram and show that the scanner turns to that view and the graph shows its projection. Ask Q1.
2. **Head, simple backprojection.** The image is a haze brightest in the middle. Switch Reconstruction back to filtered and back again.
3. **Wire, simple backprojection.** The profile is b = A/r: about 0.0225 at 1 cm and 0.0045 at 5 cm. Ask Q2.
4. **Wire, filtered: the point spread.** The FWHM is 1.12 mm with 1 mm bins and the ramp, 1.87 mm with Hann; drag Detector bin width and it scales in proportion. Switch the graph to Filter to show why.
5. **Too few views**, then drag Views up. Press Difference to see the streaks alone. Ask Q3.
6. **Only 120° of angles** in the Wide window. Ask Q4.
7. **Resolution rods, 1 mm bins**, then **2 mm bins.** With 1 mm bins the 1 mm rods (5 line pairs per cm) are about the finest group that separates; with 2 mm bins only the 2 mm group does.
8. **Low dose water**, then **Low dose, Hann filter.** About 12 HU of noise per pixel hides the small +10 HU discs; Hann brings it to about 5 HU and they show. Ask Q5.

## Questions

**Q1.** A single small object in the phantom makes a sine curve in the sinogram. Why a sine, and what sets its amplitude and its phase?

**Q2.** Simple backprojection of a point gives b = A/r. Why does the blur fall off as 1/r, and why does that make a ramp, |f|, the right filter?

**Q3.** With 18 views the streaks start at the skull's edge and run in straight lines. Why there, why straight, and why do they fade as the views increase?

**Q4.** Parallel projections repeat after 180°. With only 120° covered, which edges of the head stay sharp and which smear, and why are the CT numbers far off?

**Q5.** The low dose scan has about 12 HU of noise per pixel. How many times the dose would bring it to 3 HU, and what else could you change to lower the noise without more dose?

## Common misconceptions

- **"The scanner takes a picture of the slice."** It never sees the slice; it measures sums along lines, and the image is computed.
- **"Backprojection undoes projection."** It is the adjoint, not the inverse: without the filter it blurs as 1/r.
- **"More views always sharpen the image."** Past the sampling rule the views only remove streaks; the sharpness is set by the detector bins and the filter.
- **"Twice the dose, half the noise."** Noise goes as 1/√dose: twice the dose lowers it by only 29 %.

## Physics behind the demo

- Geometry: parallel beam over a 25.6 cm field, the middle detector bin centered on the axis; real scanners use a fan beam and resort it into parallel views. Projections are exact line integrals through ellipses (Kak and Slaney, Principles of Computerized Tomographic Imaging, 1988, eq. 3.12), averaged over each bin's width; the nonlinear partial volume effect is left out.
- One energy, 60 keV: μ of water 0.2059 /cm, cortical bone 0.6044 /cm, tungsten 71.66 /cm (NIST SRD 126). No beam hardening or scatter; CT Numbers and Proton Range has a polychromatic scanner.
- Noise: Poisson counts N₀ e^−p in each bin (Knuth's method below a mean of 30, Hörmann's PTRS above), p = ln(N₀/N). Simulated.
- Filter: the band limited ramp built in space (Kak and Slaney eq. 3.61), times a Shepp–Logan or Hann window, by FFT with zero padding; linear interpolation in backprojection. Sampling rule: Kak and Slaney eq. 5.4.
- Tested in curriculum/validation/test_ct_reconstruction.cjs: projections integrate to μ × area, the head returns its CT numbers, b = A/r for the wire, FWHM in proportion to the bin width, noise as 1/√N₀, streaks below the sampling rule.

## Going further

- Pair with **CT Numbers and Proton Range** for what the reconstructed numbers mean and how they are calibrated, and with **Photon Interactions in Matter** for where μ comes from.
- Iterative reconstruction, used for low dose scans today, solves the same projections as a system of equations with a noise model. Ask students what information the filtered backprojection throws away that an iterative method could use.
