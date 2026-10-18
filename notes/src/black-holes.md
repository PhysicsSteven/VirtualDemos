---
title: Black Holes and Lensing
level: Intro astronomy; modern physics or upper level astrophysics (general relativity)
time: 20 to 30 minutes
---
## What students should come away with

- Mass bends light. A point mass lens turns one source into two images on opposite sides of the lens, one outside the Einstein radius θ_E and one, mirror flipped, inside it; exact alignment gives a ring. θ_E² = 2r_s(D_S − D_L)/(D_L D_S) sets the angular scale.
- Lensing keeps surface brightness, so a magnified image is a bigger patch of the same brightness: more light. A star passing in front of another, with images a milliarcsecond apart, shows up as a brightening over weeks.
- The Schwarzschild radius r_s = 2GM/c² grows in proportion to M. Near it, a static observer's clock runs slow by √(1 − r_s/r) and light climbing out is redshifted by the same factor.
- Tides at the horizon, 2GML/r_s³, fall as 1/M²: a stellar black hole tears you apart far outside the horizon; a supermassive one lets you cross unharmed.
- The dark shadow is larger than the horizon: rays with impact parameter below b_c = (√27/2) r_s ≈ 2.6 r_s are captured, and rays just above it circle the photon sphere at 1.5 r_s.

## Before class

Students should know Newton's gravity, angles in arcseconds, and that general relativity predicts light bending and gravitational time dilation. Three views: **Lensing** (a source seen through a point mass lens, with a light curve; drag the source, its edge, an image or the time marker), **Ray traced** (the exact view from an observer hovering near a Schwarzschild black hole) and **Near the hole** (drag the observer to read clock rate, redshift and tides). Turn on **Projector** for the room.

## Running it in class

1. **Einstein ring.** A galaxy exactly behind a 10¹² M☉ point mass halfway to it (2 Gpc away) appears as a ring. θ_E = 2.02″, so the ring is about 4″ across (**Image separation** reads 4.04″). Drag the true position off center and the ring breaks into two arcs.
2. **Two images.** One bright image outside the ring, one fainter inside on the opposite side; μ₋ is negative because that image is mirror flipped. The total A = |μ₊| + |μ₋| is 1.82 for a point source.
3. **Microlensing event.** Ask Q4 first. A 0.5 M☉ star at 4 kpc drifts in front of one at 8 kpc. θ_E is only 0.713 mas, so a telescope sees one point that brightens and fades; t_E is 24.7 days.
4. **Close to a stellar black hole.** Ask Q1 first. **Near the hole**: 10 M☉, r_s = 29.5 km, observer at 30 r_s (886 km). The clock runs at 0.983 and green light arrives at 509 nm, but the tidal stretch is 778 g: torn apart.
5. **Sagittarius A\*.** 4.3 million M☉, observer at 1.2 r_s. The clock runs at 0.408 and green light arrives at 1225 nm, yet the stretch at the horizon is only about 10⁻⁴ g. The predicted shadow from Earth, 53.3 µas, matches the EHT ring.
6. **M87\*.** **Ray traced** from 15 r_s: the shadow's edge is 9.63° from its center, thin copies of the sky pile up there, and a source straight behind would make a ring of radius 23.7°. Hover to trace a ray. From Earth the shadow would be 39.7 µas, close to the EHT's 42 µas ring.

## Questions

**Q1.** Predict: you fall feet first into a 10 M☉ black hole, and separately into Sagittarius A* (4.3 × 10⁶ M☉). Near which horizon is the stretch between your head and feet larger? Then compare **Same person at the horizon** in both presets.

**Q2.** Find r_s = 2GM/c² for 10 M☉ and for 4.3 × 10⁶ M☉ (GM☉ = 1.327 × 10²⁰ m³/s², c = 3.00 × 10⁸ m/s). Then find the stretch on a 2 m person at each horizon, ΔA = 2GML/r_s³, in m/s² and in g.

**Q3.** For the microlensing preset, M = 0.5 M☉, D_L = 4 kpc and D_S = 8 kpc (1 pc = 3.086 × 10¹⁶ m). Find θ_E from θ_E² = 2r_s(D_S − D_L)/(D_L D_S), in milliarcseconds. Then find R_E = θ_E D_L and the time to cross it at 200 km/s.

**Q4.** Predict, then calculate: in the microlensing preset the source passes the lens at closest offset u₀ = 0.3 θ_E. A point source is magnified by A(u) = (u² + 2)/(u√(u² + 4)). What is the peak magnification? How much brighter is that in magnitudes? Pause at closest approach and compare with the rail.

**Q5.** A lens makes no light and keeps surface brightness. How can the two images add up to more light than the unlensed source? Check in **Two images** that the brighter image is also the bigger one.

**Q6.** In **Sagittarius A\*** the observer hovers at r = 1.2 r_s. Find the clock rate √(1 − r_s/r), how long one hour of this clock lasts far away, and where 500 nm light sent outward arrives. Check with the rail.

**Q7.** Light with impact parameter less than b_c = (√27/2) r_s falls in, so a distant observer sees a shadow of angular diameter 2b_c/D. Find it for M87* (6.5 × 10⁹ M☉ at 16.8 Mpc) in µas and compare with the EHT's 42 µas ring. Why is 2b_c about 2.6 times the horizon's diameter 2r_s?

## Common misconceptions

- **"A black hole sucks in everything around it."** Far from the hole its gravity is just GM/r², like any body of that mass; even at 30 r_s clocks run within 2% of normal.
- **"Everyone who falls in is torn apart at the horizon."** The tidal stretch at the horizon falls as 1/M². For 10 M☉ it is 2 × 10⁷ g; for Sagittarius A* about 10⁻⁴ g.
- **"The black disk in the EHT image is the event horizon."** The shadow is set by the photon orbit: its radius is about 2.6 r_s for a distant observer, far larger than the horizon.
- **"Time stops at the horizon."** The rail's clock rate is for an observer hovering with a rocket. A falling observer's own clock ticks normally; the outside world just never sees them arrive.

## Physics behind the demo

- **Lensing:** thin lens, point mass, small angles: β = θ − θ_E²/θ (impact parameter ≫ r_s), images θ± = (u ± √(u² + 4))/2, μ = 1/(1 − 1/θ⁴), in units of θ_E. Each pixel is traced back to the source plane. Distances are ordinary distances, not the angular diameter distances cosmology needs; real galaxy lenses are not point masses. The microlensing source star is drawn far too big so its images show.
- **Ray traced:** exact Schwarzschild light paths, d²u/dφ² = −u + (3/2) r_s u² (u = 1/r), for a hovering observer and an infinitely distant sky. Left out: the observer's blueshift of incoming light, spin, and the glowing gas the EHT images show, unless the **Thin accretion disk (illustrative)** box is ticked: then a thin disk from 3 to 9 r_s is drawn along the exact light paths with exact Doppler and gravitational shifts for circular orbits, but an illustrative temperature profile.
- **Near the hole:** nonrotating. Clock rate and redshift for static observers are exact; 2GML/r³ is exact for a body falling radially with L ≪ r. The 100 g line is a rough guide; the drawing's radial scale is compressed.

## Going further

- Homework: show that the tidal stretch at the horizon is ΔA = c⁶L/(4G²M²), and find the mass above which a 2 m person feels less than 1 g there.
- History: starlight bending by the Sun was measured at the 1919 eclipse; the EHT imaged M87* (2019) and Sagittarius A* (2022).
