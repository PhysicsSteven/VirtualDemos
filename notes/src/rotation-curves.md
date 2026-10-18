---
title: Galaxy Rotation Curves
level: Intro astronomy; majors astronomy (circular orbits, Doppler shift)
time: 15 to 25 minutes
---
## What students should come away with

- For a circular orbit, v² = GM(<r)/r. Measuring v at radius r weighs the mass inside r, M(<r) = v²r/G.
- With nearly all the mass in the middle, as in the solar system, v ∝ r^(−1/2). A galaxy's visible stars and gas predict a similar fall beyond a few disk scale lengths.
- Measured rotation curves stay nearly flat far out. A flat curve means M(<r) keeps growing in proportion to r, well beyond where the light runs out: a halo of dark matter whose density falls roughly as 1/r².
- Speeds are measured with Doppler shifts of spectral lines; the 21 cm line of neutral hydrogen traces gas far beyond the stars.

## Before class

Students should know the circular orbit speed v = √(GM/r) and the Doppler shift Δλ/λ = v/c. The canvas shows the galaxy (**Face on**, or **Edge on, Doppler**) on the left and the rotation curve on the right. Pick a radius with the **Radius r** slider, the dashed ring or the vertical line on the plot. Round handles on each component's curve change its mass and size; on the canvas, H toggles the halo and V the view. Turn on **Projector**.

## Running it in class

1. **Solar system (Kepler).** Drag the radius from Mercury out to Neptune. The speed falls from 47.7 to 5.4 km/s, yet every planet gives M(<r) = 1.0000 M_sun. Ask Q1 before moving on.
2. **Visible matter only.** Stars and gas of a Milky Way like galaxy. Their curve peaks near 5 kpc at about 180 km/s and falls to 116 km/s at 20 kpc; the measured circles stay between 200 and 230 km/s. Let the class say what that means.
3. **Add a dark matter halo.** The halo's own speed levels off, and the total runs flat through the data. At 20 kpc the readout says 69% of v² is the halo. Press H on the canvas to toggle it and watch the curve drop back.
4. **Milky Way.** The Sun's orbit at 8.2 kpc: 231 km/s, 218 Myr per orbit, 1.02 × 10¹¹ M_sun inside (Q3). Slide out to 20 or 25 kpc and read how the visible fraction of the mass shrinks (Q7).
5. **Measure with Doppler.** The edge on view puts a slit along the disk: one side blueshifted, the other redshifted. At 12 kpc the outer edge of the 21 cm line is shifted by 1062 kHz, which gives 224 km/s. Switch the **Spectral line** to **Hα 656.28 nm**: at 12 kpc there is no emission, because the demo's Hα gas ends at 10.4 kpc (Q6).
6. **NGC 3198.** The galaxy whose flat 21 cm curve made the case for dark halos. Disk and gas alone fall to 71 km/s at 30 kpc; the data stay near 150 km/s.

## Questions

**Q1.** Predict: in a galaxy the stars and gas are spread out, but most of the light comes from within about 10 kpc of the center. If that visible matter were all there is, how should the orbital speed at 20 kpc compare with the speed at 5 kpc? Sketch the curve you expect, then press **Visible matter only**.

**Q2.** Mercury orbits at 0.387 AU and Neptune at 30.07 AU. What fraction of Mercury's speed (47.9 km/s) is Neptune's? Check with **Solar system (Kepler)**.

**Q3.** The Sun orbits the center of the Milky Way at about 230 km/s, 8.2 kpc out. Find the orbital period in millions of years and the mass inside the Sun's orbit. Use G = 4.30 × 10⁻⁶ kpc (km/s)²/M_sun and 1 kpc/(km/s) = 978 Myr.

**Q4.** The measured Milky Way curve gives about 209 km/s at 20 kpc. How much mass must lie inside 20 kpc? The visible mass inside 20 kpc in the model is 5.6 × 10¹⁰ M_sun. How many times more mass is needed than we can see? Check against the readouts in the **Milky Way** preset at r = 20 kpc.

**Q5.** Explain why a flat rotation curve (v the same at every large r) requires M(<r) ∝ r. What does this say about how the density of the extra matter falls with r? Why does the halo in **Add a dark matter halo** have a density that falls as 1/r² far out?

**Q6.** At 12 kpc in **Measure with Doppler** the gas moves at 224 km/s along our line of sight. How big is the shift of the 21 cm line, whose frequency is 1420.41 MHz? How big would the shift of Hα (656.28 nm) be, if there were Hα emission there? Check with the **Spectral line** buttons, and explain what the demo shows for Hα at 12 kpc. Why do radio astronomers use 21 cm to trace the outer parts of galaxies?

**Q7.** In the **Milky Way** preset, read the **Dark matter share of v²** at r = 3, 8.2 and 20 kpc. Does dark matter matter more in the inner or the outer galaxy? Why could astronomers measuring only the bright inner parts of galaxies miss it?

## Common misconceptions

- **"Stars in a galaxy orbit like the planets, slower farther out."** Only if the mass were concentrated at the center; measured speeds stay nearly flat.
- **"A flat rotation curve means the galaxy turns like a solid wheel."** A wheel has v ∝ r. With a flat curve the period grows in proportion to r, so the disk shears.
- **"Dark matter must be in the disk with the stars."** The model's halo is a sphere much larger than the disk, dominant where the light runs out.
- **"M = v²r/G is exact for any galaxy."** Only for spherical mass; for a flat disk it reads up to 35% high.

## Physics behind the demo

- Circular orbits in the midplane; components add as v² = v_b² + v_d² + v_g² + v_h², since their potentials add.
- Bulge: Hernquist sphere, v² = GMr/(r + a)². Disks: infinitely thin exponentials (Freeman 1970), v² = 2GMy²[I₀(y)K₀(y) − I₁(y)K₁(y)]/R_d, y = R/2R_d; real neutral hydrogen is flatter than exponential. Gas mass includes helium.
- Halo: pseudo isothermal, ρ = ρ₀/(1 + r²/r_c²), or NFW, ρ = ρ_s/[(r/r_s)(1 + r/r_s)²].
- Measured points are approximate: the Milky Way circles are the linear fit of Eilers et al. (2019), v = 229 − 1.7(R − 8.122) km/s from 5 to 25 kpc; NGC 3198 points are rounded from Begeman (1989), good to about ±10 km/s. The Milky Way model was fitted to these for the demo.
- Edge on view: each sightline collects gas at many radii, so the line spreads toward zero; its outer edge (the tangent point) gives v(r). 21 cm gas reaches the plot edge, Hα gas four stellar scale lengths (10.4 kpc). Shifts: Δλ/λ = v/c, 10 km/s line width, recession removed.
- The drawn galaxy illustrates the model; bulge stars are drawn on circles, though real ones move on random orbits.

## Going further

- Homework: show that the pseudo isothermal halo gives v → √(4πGρ₀) r_c far out (186 km/s in **Add a dark matter halo**).
