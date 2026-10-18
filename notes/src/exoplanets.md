---
title: Finding Exoplanets
level: Intro astronomy; majors astronomy (Kepler's laws, momentum)
time: 15 to 25 minutes
---
## What students should come away with

- A transit dims the star by the fraction of its disk the planet covers, about (R_p/R_s)². The depth gives the planet's radius once the star's radius is known.
- Star and planet both orbit their common center of mass. The star's line of sight speed swings with semi amplitude K ∝ M_p sin i / (M_s^⅔ P^⅓), so radial velocity gives M_p sin i, not M_p.
- A transit happens only if the orbit is nearly edge on; for a random orientation the chance is about R_s/a. A transiting planet has i near 90°, so the two methods together give the true mass, and with the radius, the density.
- Both methods favor big planets close to small stars. That is a selection effect, not a statement about which planets are common.

## Before class

Students should know Kepler's third law and the idea of a Doppler shift. Turn on **Projector** and point out the four panels: **Top view, looking down on the orbit**, **What the telescope sees**, the light curve and the star's radial velocity curve. **Slow motion in transit** stretches out the transit. Dragging the planet or either chart moves through time; on a focused canvas the up and down arrows change the inclination.

## Running it in class

1. **Hot Jupiter.** Let one orbit play. Point to the two signals: a 1.15% dip (11,498 ppm) lasting 3.61 h every 4.19 d, and a star swinging at K = 55.2 m/s. The dip comes as the star's velocity crosses zero from away to toward us: the star is then behind the center of mass, moving across our line of sight. Switch the light curve to **Zoom on transit** to show the rounded bottom.
2. **Not edge on.** Ask Q1 first. Then press it: "no transit from here", but the velocity curve is still there with K = 47.8 m/s. From the **Hot Jupiter** preset, hold the down arrow (Shift for 1° steps) on the top view and watch **Transits?** change from yes to grazing to no near i = 84°.
3. **Earth and Sun.** 84 ppm for 13.1 h once a year, and K = 0.089 m/s. Raise **Noise** slowly; both signals vanish into the scatter long before the slider reaches the end. Read the **Transit probability**, 0.47%.
4. **Jupiter and Sun.** K = 12.5 m/s, but the period is 11.9 yr and the transit probability is 0.089%. Ask what kind of planets a survey lasting a few years will find first.
5. **Eccentric planet.** The velocity curve is lopsided: a short, sharp swing near periastron and a long, slow drift the rest of the orbit. Drag the planet around the top view to connect the shape to Kepler's second law.
6. **TRAPPIST-1 like.** An Earth sized planet blocks 0.5% of a star 12% the size of the Sun. Compare the depth and K with the **Earth and Sun** preset (Q7).

## Questions

**Q1.** Predict: the same hot Jupiter is tilted so that we view its orbit 30° from edge on (i = 60°). Will we still see a transit? Will the star still show a radial velocity signal, and if so, bigger, smaller or the same?

**Q2.** A transit dims a star of radius 1.15 R_sun by 1.15%. How big is the planet, in Jupiter radii? (R_sun = 6.957 × 10⁵ km, R_J = 71,492 km.) Ignore limb darkening.

**Q3.** Jupiter makes the Sun move at K = 12.5 m/s. Use K ∝ M_p/√a (for one star and a circular orbit) to estimate K for Earth, which has 1/318 of Jupiter's mass and orbits at 1 AU instead of 5.2 AU. A good spectrograph reaches about 0.3 m/s. Can it detect Earth? Check with the **Earth and Sun** preset.

**Q4.** The chance that a randomly oriented orbit transits is about R_s/a. If 1000 Sun like stars each had an Earth twin at 1 AU, about how many would show transits? How many would show transits if each had a hot Jupiter at 0.0527 AU around a star of radius 1.15 R_sun? (1 AU = 215 R_sun.)

**Q5.** The **Hot Jupiter** preset has a mass of 0.47 M_J and a density of 0.34 g/cm³. Why do you need both a transit and a radial velocity curve to find a density? What does a density this low tell you about what the planet is made of?

**Q6.** In the **Eccentric planet** preset the star's velocity changes slowly for most of the orbit and then swings sharply in a few days. Explain why, using Kepler's second law. Where in the orbit is the planet during the sharp swing? Check by dragging the planet in the top view.

**Q7.** The **TRAPPIST-1 like** planet is a little smaller than Earth, yet its transit is about 60 times deeper than Earth's across the Sun and its K is about 13 times bigger. Explain both factors. Why are small, cool stars good places to look for Earth sized planets?

## Common misconceptions

- **"The star stays still and the planet goes around it."** Both orbit their common center of mass. The star's orbit is tiny, but its speed is what radial velocity measures. The top view exaggerates the wobble by the factor shown in its corner.
- **"A planet with twice the radius makes a dip twice as deep."** The depth goes as the area, (R_p/R_s)², so twice the radius gives four times the depth.
- **"No transit means no planet."** Most planetary systems are not lined up for us. The **Not edge on** preset still has a full radial velocity signal.
- **"Radial velocity gives the planet's mass."** It gives M_p sin i. Without a transit (or another way to find i), the true mass can be larger.
- **"Most planets are hot Jupiters, since those were found first."** Their signals are the largest and repeat fastest; they orbit only about 1% of Sun like stars or fewer.

## Physics behind the demo

- Two body Kepler orbit: P = 2π√(a³/G(M_s + M_p)), solved through Kepler's equation for eccentric orbits. Time is measured from conjunction, when the planet is nearest our line of sight.
- Radial velocity: v_r = K[cos(ν + ω) + e cos ω] with K = (2πG/P)^⅓ M_p sin i / [(M_s + M_p)^⅔ √(1 − e²)]. The angle ω is the star's argument of periastron, as catalogs quote it.
- Light curve: the fraction of a limb darkened stellar disk covered by the planet's disk, computed numerically. Limb darkening is quadratic with fixed Sun like coefficients (u₁ = 0.40, u₂ = 0.26), so the true dip is a little deeper than the (R_p/R_s)² readout and has a rounded bottom.
- The planet's own light is ignored, so there is no secondary eclipse. The duration readout uses the standard approximation for eccentric orbits. Transit probability is shown as R_s/a, the circular orbit value.
- Noise is white and Gaussian, up to 1000 ppm and 10 m/s. In the top view the star and planet are drawn larger than scale and the star's wobble is magnified.

## Going further

- Homework: from P = 4.19 d and M_s = 1.11 M_sun, find a and the planet's speed, then use M_s v_s = M_p v_p to recover K = 55 m/s.
- History: 51 Pegasi b (1995), the first planet found around a Sun like star, was found by radial velocity.
