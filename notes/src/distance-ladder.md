---
title: Cosmic Distance Ladder
level: Intro astronomy; majors astronomy (magnitudes, distance modulus)
time: 20 to 35 minutes (one rung alone takes 5 to 10)
---
## What students should come away with

- Parallax is the ladder's only direct distance: d (pc) = 1/p (arcsec), with a reach set by the instrument's position accuracy.
- A standard candle is an object whose luminosity we know. Comparing that with how bright it looks gives the distance through the inverse square law, written in magnitudes as m − M = 5 log₁₀(d / 10 pc).
- Cepheids are standard candles because their period tells their luminosity (the Leavitt law). Type Ia supernovae are about 400,000 times brighter still, so they reach hundreds of Mpc.
- Each rung is calibrated by the one below it, so an error in a low rung moves every distance above it, and with them H₀.
- Hubble's law v = H₀d turns a redshift into a distance; 1/H₀ is a time scale of about 14 Gyr.

## Before class

Students should know what an arcsecond is and the magnitude scale (5 magnitudes is a factor of 100 in flux, larger m is fainter). If the distance modulus is new, show that m − M = 5 log₁₀(d / 10 pc) is just F ∝ 1/d² in magnitudes. The strip at the top of the canvas shows each method's range; clicking a bar opens that rung. Each rung keeps its state when you switch away; **Reset** reloads its setup. Turn on **Projector**.

## Running it in class

1. **1 Parallax.** Play a year (or drag Earth) and drag the ruler ends onto the January and July images. For **Proxima Centauri** the shift is 1.536″, so p = 0.768″ and d = 1.30 pc. Ask Q1, then pick **Any distance**, set **Distance d** to 1 kpc and switch between **Ground**, **Hipparcos** and **Gaia**.
2. **2 Cepheids.** In the **LMC**, the preset markers sit on two peaks of a Cepheid with P = 11.40 d. Follow the readouts down: Leavitt law M_V = −4.19, mean m_V = 14.34, m − M = 18.53, d = 50.9 kpc. Have students pick other Cepheids, place the markers on two peaks themselves (or several cycles apart, with **Cycles between the markers**) and **Record this Cepheid**; the mean comes out near 50 kpc.
3. **Inverse square law** (in the Cepheid rail). Drag the screen out to 2.00 d: the same light covers four times the area, so the flux is ×0.250, 1.51 mag fainter.
4. **3 Type Ia.** Drag the line to the peak of **SN B**. With an assumed peak M = −19.3, m = 15.06 gives d = 74.5 Mpc. Point at "Brighter than a 30 day Cepheid by": 14.1 mag, about 430,000 times.
5. **4 Hubble's law.** The least squares fit gives H₀ = 69.9 ± 0.8 km/s/Mpc from 34 galaxies, and 1/H₀ = 14.0 Gyr. Click a galaxy to see its spectrum and drag the comb of rest wavelengths until the lines match. Then move **Leavitt law zero point a** (with **Supernova calibration follows the Cepheids** checked): every point slides together (Q6).
6. **Whole ladder.** End here: the ringed dots are the measurements just made. Ask what each overlap is used for.

## Questions

**Q1.** Predict: Hipparcos measured positions to about 1 mas (0.001″). Could it measure a useful parallax for a star 1 kpc away? What about Gaia, at about 0.02 mas for a bright star? Check with **Any distance** set to 1 kpc.

**Q2.** Your ruler shows Vega's January and July images 0.260″ apart. How far away is Vega, in parsecs and in light years? (1 pc = 3.26 ly.)

**Q3.** A Cepheid in the Large Magellanic Cloud has a period of 11.4 days and a mean apparent magnitude m_V = 14.34. Use the demo's Leavitt law, M_V = −2.43 (log₁₀P − 1) − 4.05, to find its absolute magnitude and then its distance.

**Q4.** Two Cepheids in M31 have periods of 8.4 d and 52 d. Which looks brighter, and by how many magnitudes? Check with **Mean apparent m_V** for C1 and C5, and explain why the difference is not exactly your prediction.

**Q5.** **SN B** peaks at m = 15.06 and its host galaxy has redshift z = 0.0179. Assuming M = −19.3 at peak, find its distance and its recession speed (c = 2.998 × 10⁵ km/s). What value of H₀ does this one supernova give?

**Q6.** Suppose Cepheids are really 0.10 mag brighter than assumed (a = −4.15, not −4.05), and the supernova calibration, which comes from Cepheids, shifts by the same amount. By what factor does every distance on the Hubble diagram change, and what happens to H₀ = 69.9 km/s/Mpc? Check with **Leavitt law zero point a** in rung 4.

**Q7.** The fit gives 1/H₀ = 14.0 Gyr. Why is this a natural estimate of the age of the universe, and why is it not exactly the age? Separately: why measure parallaxes of nearby Milky Way Cepheids so carefully when the goal is galaxies hundreds of Mpc away?

## Common misconceptions

- **"Parallax is the shift between two nights."** The baseline is Earth's orbit: images six months apart shift by 2p.
- **"A star that looks brighter is closer."** Only for the same kind of star. Apparent brightness depends on luminosity and distance; hence standard candles.
- **"Longer period Cepheids are farther away."** They are more luminous; distance comes from comparing luminosity with apparent brightness.
- **"1/H₀ is the age of the universe."** Only if the expansion rate had never changed. The standard model gives about 13.8 Gyr, close to 1/H₀ partly by coincidence.

## Physics behind the demo

- Parallax: Earth on a circular 1 AU orbit, the star in the orbital plane with January and July at the extremes, so the shift is 2p and d = 1/p (a real star off the plane traces a small ellipse). Position uncertainties: 10 mas (Ground), 1 mas (Hipparcos), 0.02 mas (Gaia); σ_d/d = σ_p/p.
- Cepheids: simulated from M_V = −2.43 (log₁₀P − 1) + a, default a = −4.05 (Benedict et al. 2007, from Hubble Space Telescope parallaxes of Milky Way Cepheids), with a 0.1 mag spread for the instability strip width, noisy nightly photometry and a schematic light curve. Distance moduli: LMC 18.48, M31 24.40, M100 30.91. No dust extinction.
- Type Ia: peak M = −19.3 ± 0.12 mag, schematic light curve, no extinction, width, color or K corrections (fair at z < 0.1).
- Hubble diagram: illustrative data simulated with H₀ = 70 km/s/Mpc, 250 km/s peculiar velocities and distance errors of 0.10 mag (Cepheids) and 0.15 mag (supernovae); least squares fit through the origin; v = cz (off by several percent at z = 0.1).
- Galaxy pictures are drawings, the spectrum is schematic, overview ranges are approximate, and other rungs (such as the red giant branch tip) are not shown.

## Going further

- Hubble tension (ladder about 73, microwave background 67.4 km/s/Mpc): using Q6, what zero point error would close it?
