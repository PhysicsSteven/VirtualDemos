---
title: Retrograde Motion and World Models
level: Intro astronomy (non majors and majors); Astro 2203, planetary motion and the Copernican revolution (OpenStax Astronomy 2e §§2.2 to 2.4 and 3.1)
time: 15 to 40 minutes
---
## What students should come away with

- A planet's position on the sky is where the line from Earth through the planet points. Mars drifts east among the stars for most of its 780 day synodic period and backs up for about 10 weeks around opposition, when Earth, on the faster inside track, passes it. Nothing about Mars changes; the loop comes from where we stand.
- The synodic period (opposition to opposition, or inferior conjunction to inferior conjunction) and the sidereal period (once around the Sun) are related by 1/S = |1/P − 1/P⊕|.
- Ptolemy's epicycles reproduce the loops, and with the equant they place Mars to about a degree, which is why the model lasted 1400 years. Copernicus's simple circles are tidier but no more accurate, and Kepler's ellipses beat both.
- Accuracy alone cannot pick between the Earth centered and Sun centered pictures. The phases of Venus can: in Ptolemy's arrangement Venus always lies between Earth and the Sun and is never more than half lit, but Galileo saw it gibbous and nearly full. That rules out Ptolemy, not Tycho, whose system has the same geometry as Copernicus's seen from Earth.

## Before class

The top view shows the planets' orbits from above with the line of sight from Earth to the chosen planet; the sky strip below shows the planet's path against the stars and constellations, along the ecliptic, with the stationary points and oppositions marked; the telescope shows the planet's phase and size. The World model switch puts the same sky through Kepler's ellipses (JPL's approximate elements, valid 1800 to 2050), Copernicus's circles or Ptolemy's deferent, equant and epicycle, with the parameters fitted to the JPL positions. In the Kepler model the top view can be centered on the Sun or held on Earth (Tycho's picture). Presets: Mars 2024 to 2025, Mars 2020, Jupiter, Saturn, Mercury, three Mars oppositions in a row (the synodic period), Tycho's view, Ptolemy's Mars, Copernicus's Mars, Venus as Galileo saw it in each model. Jump to finds the next or previous opposition, station, conjunction or greatest elongation. Play runs at 2 to 120 days per second; Shift with the day buttons steps 10 days. The 3D switch shows the orbits tilted, with the sight line to the planet.

## Running it in class

1. **Mars 2024 to 2025.** Play and ask Q1 while Earth catches up with Mars. Pause at the first station (7 Dec 2024), then jump to the opposition (16 Jan 2025) and the second station (24 Feb 2025).
2. **Three oppositions.** Ask Q2. The oppositions fall about 26 months apart, but the gap varies from 764 to 811 days because the orbits are ellipses.
3. **Venus as Galileo saw it (Kepler).** Ask Q3. Venus swings no more than about 47° from the Sun. Watch the phase and size together.
4. **Venus in Ptolemy's model.** Ask Q4 and Q5. The sky positions are nearly the same, but the telescope never shows more than half lit.
5. **Copernicus's Mars** and **Ptolemy's Mars.** Ask Q6. The real sky is drawn faintly beside the model's, so the miss shows directly.

## Questions

**Q1.** Mars moves backward among the stars from 7 December 2024 to 24 February 2025. Where are Earth and Mars in their orbits during those weeks, and why does Mars appear to move backward?

**Q2.** Mars's oppositions in the demo fall on 8 December 2022, 16 January 2025 and 19 February 2027. Find the synodic period and compare it with 1/S = 1/P⊕ − 1/P for P⊕ = 365.26 days and P = 686.98 days.

**Q3.** Venus's greatest elongation on 10 January 2025 is 47.2°. Use it to estimate the radius of Venus's orbit in AU, as Copernicus did. Why is Venus never seen at midnight?

**Q4.** In the Kepler model, Venus is 44 % lit and 28″ across two months before inferior conjunction, and 91 % lit and 11″ across 200 days before. In the Ptolemy model it is 27 % and 35 % lit at those dates. Why can Ptolemy's Venus never be gibbous?

**Q5.** Does Galileo's observation of a gibbous Venus prove that Earth goes around the Sun?

**Q6.** Copernicus's circles put the 2020 opposition of Mars on 24 September, 19 days early, and miss Mars by up to 33° over 1900 to 2050. Ptolemy's fitted model misses by at most 1.4°. Why did Copernicus's model win anyway, and what did Kepler have to change?

## Common misconceptions

- **"The planet really turns around and goes backward."** Every planet moves the same way around the Sun all the time; the backward motion is in the direction we see it, not in its orbit.
- **"Copernicus's model was more accurate than Ptolemy's."** With circles and no equant it was not; it was simpler to explain the loops and fixed the order and relative sizes of the orbits.
- **"Venus looks bigger because it is full."** It is the other way round: Venus is largest when it is a thin crescent, close to Earth, and smallest when it is nearly full on the far side of the Sun.
- **"Retrograde motion happens because the planet comes close."** Mars is closest at opposition, in the middle of its loop, but the loop comes from Earth overtaking it, which changes the direction we look; the distance only makes the loop bigger.

## Physics behind the demo

- Kepler model: heliocentric ecliptic positions from the Keplerian elements and rates in JPL's Approximate Positions of the Planets (E. M. Standish, Table 1, valid 1800 to 2050), solving Kepler's equation to 1e−12, with Earth taken as the Earth–Moon barycenter. Positions are in J2000 ecliptic coordinates. Light time, aberration, nutation and precession are left out, so the longitudes are within 0.02° to 0.25° of astronomy-engine 2.1.19 (VSOP87), the table's own accuracy (curriculum/validation/test_retrograde-motion.cjs).
- Copernicus model: circles centered on the Sun with radius a and a steady mean longitude, in the J2000 tilted planes; the same rule applied to Earth.
- Ptolemy model: a deferent of radius 1 with its center offset by e toward the apogee A, an equant at 2e about which the epicycle center moves at a steady rate, and an epicycle of radius r. For Mars, Jupiter and Saturn the epicycle radius stays parallel to the mean Sun; for Mercury and Venus the epicycle center stays on the mean Sun line. The parameters are a least squares fit to the JPL longitudes from 1900 to 2050, not Ptolemy's numbers (his Mars, e = 0.100 and r = 0.658, matches the fit's 0.0995 and 0.6579). Distances use Ptolemy's nesting of the spheres in Earth radii (Van Helden, Measuring the Universe, 1985), which is why Ptolemy's Venus also changes size. Ptolemy's moving deferent center for Mercury is left out, so the fitted Mercury misses by up to 3.3°.
- Phase: the lit fraction is (1 + cos α)/2 with α the angle Sun–planet–Earth; size is 2 asin(R/Δ) with the IAU mean radii. Saturn's rings use the IAU pole.
- Events are found a day at a time and refined by bisection: oppositions and conjunctions from the elongation, stations where the rate in longitude changes sign, greatest elongations where the elongation peaks.
- Stars are the Hipparcos stars to magnitude 4.5, and to 5.2 within 32° of the ecliptic, with constellation figures and IAU boundaries from d3-celestial 0.7.35 (Olaf Frohn, BSD license).

## Going further

- Pair with **Kepler's Laws** for the ellipses themselves, and with Stellarium to watch Mars's 2024 to 2025 loop against the real sky.
- Hold the Kepler model on Earth (Tycho's view): the Sun goes around Earth and the planets go around the Sun, and the sky is exactly the same. Ask what observation would separate Tycho from Copernicus (stellar parallax, first measured in 1838).
