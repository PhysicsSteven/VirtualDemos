---
title: Orbital Resonances
level: Astro 2203, Topics 9 and 11 (no textbook section); Astronomy module, gravitation and orbits
time: 10 to 45 minutes
---
## What students should come away with

- Kepler's third law ties each distance from the Sun to one period, so a period that is a simple fraction of Jupiter's (1/3, 2/5, 1/2) belongs to one distance: 2.50, 2.82, 3.28 AU.
- At a resonance the planet passes the body at the same places on its orbit time after time, so its small tugs add up like pushes on a swing given at the same point of every swing. Elsewhere the passes move round the orbit and the tugs cancel.
- The added up tugs stretch an asteroid's orbit until it crosses Mars's, and close passes by the inner planets then remove it: the Kirkwood gaps sit exactly at Jupiter's resonances in the real counts of more than 880,000 numbered asteroids.
- A resonance can also protect. The Hildas at Jupiter's 3:2 and Pluto and the plutinos at Neptune's 3:2 are timed so the planet always passes when they are far away: Pluto crosses Neptune's orbit but never comes within 17 AU of Neptune.
- An unseen planet can be found from its pull: Uranus's drift from any orbit that fits it pointed Le Verrier to Neptune, and the direction comes out much better than the distance or the mass.

## Before class

The demo opens on the asteroid belt with the 3:1 resonance. Three scenes: Asteroid belt (the Sun, Jupiter and asteroids), Kuiper belt (the Sun, Neptune and icy bodies) and Finding Neptune (Uranus's sightings from 1690 to 1846). The large view, 3D or flat, shows the orbits with a yellow dot wherever the planet passed the body; Turns with the planet holds the planet still so the pattern of the passes stands out. A card sets the starting distance, eccentricity and angle ahead of the planet, and shows the period ratio. Below, the real counts from the JPL Small Body Database with the resonances marked (click a bar to start a body there; Blind hides the marks), with a dot per simulated body at its largest eccentricity, and a chart of the eccentricity or the distance from Neptune over time. Asteroids are stopped when their orbits reach Mars's. In Finding Neptune the chart shows Uranus's leftover drift from the best fitting orbit, and a card adds a planet X. The student worksheet is the Astro 2203 intro worksheet.

## Running it in class

1. **3:1 resonance.** Ask Q1, then run it with Turns with the planet: the passes pile up at two places and the orbit stretches until it crosses Mars's orbit, at 4,157 years. Point out the gap at 2.50 AU in the real counts.
2. **Between the gaps**, then the 3:1 setup moved to 2.55 AU. Ask Q2. The passes spread round the orbit and nothing grows.
3. **Whole belt.** Ask Q3. 271 asteroids from 2.10 to 3.45 AU, run for 20,000 years: the ones at the 3:1 and 5:2 cross Mars's orbit (at 4,834 and 12,997 years) and turn to crosses; the rest stay near e = 0.15, except beyond 3.2 AU, near the 2:1 and closer to Jupiter, where e swings higher.
4. **Hildas at 3:2** and the Kuiper belt's **Pluto**. Ask Q4. Then **Pluto's orbit, bad timing**: the same orbit started 60° further round is thrown out by Neptune at 3,621 years.
5. **Finding Neptune.** Uranus alone (7.3″ rms leftover), Le Verrier's planet (3.7″), then Hunt for it yourself. Ask Q5.

## Questions

**Q1.** Jupiter takes 11.86 years to go round the Sun. Where would an asteroid be that goes round exactly three times for each turn of Jupiter?

**Q2.** An asteroid at 2.55 AU is only 0.05 AU from the 3:1 resonance. Why does Jupiter not clear it too?

**Q3.** The real gaps took millions of years to clear, and the demo runs only thousands. What does the demo show, and why can we trust it to explain the gaps?

**Q4.** Pluto's orbit crosses Neptune's. Why can they never collide?

**Q5.** Le Verrier's planet was 6 AU too far out and twice too heavy, yet Galle found Neptune within a degree of the predicted place. Why does the direction come out well when the distance does not?

## Common misconceptions

- **"The gaps are empty rings in space."** The gaps are in the distribution of average distances a. Asteroids on stretched orbits cross the gap distances all the time, so a picture of the belt at one moment shows no clear gaps.
- **"Jupiter's pull is strongest at the gaps."** The pull is no stronger there; it is better timed. A body at 2.55 AU feels nearly the same tugs, but they cancel.
- **"Resonances always clear things out."** The Hildas (3:2 with Jupiter), the Trojans (1:1) and Pluto (3:2 with Neptune) are crowded resonances where the timing keeps the bodies away from the planet.
- **"Neptune was found by searching the sky."** It was found by mathematics first: Le Verrier predicted where to look, and Galle found it the first night.

## Physics behind the demo

- Kepler: P = a^(3/2) in years and AU, so a resonance with period ratio r sits at a = a_planet × r^(−2/3): Jupiter's 4:1 at 2.06 AU, 3:1 at 2.50, 5:2 at 2.82, 7:3 at 2.96, 2:1 at 3.28, 3:2 at 3.97; Neptune's 4:3 at 36.4, 3:2 at 39.4, 5:3 at 42.3, 7:4 at 43.7, 2:1 at 47.7, 5:2 at 55.4 AU.
- Model: the planar restricted three body problem. The planet moves on its J2000 Kepler ellipse (Standish, JPL, table 1); masses from the IAU 2009 constants (Jupiter 1/1047.348644, Neptune 1/19412.26 of the Sun); GM☉ = k² with Gauss's k, 39.4769 AU³/yr². The bodies are stepped with the Wisdom–Holman method (Wisdom and Holman 1991, AJ 102, 1528), heliocentric, with exact Kepler drifts and the planet's direct and indirect pull as kicks; 0.1 yr steps in the asteroid belt, 0.5 yr in the Kuiper belt.
- A body is removed when its perihelion falls inside Mars's aphelion, 1.666 AU (close passes by Mars and Earth then remove real asteroids within millions of years; Gladman et al. 1997, Science 277, 197), or when it comes within one Hill radius of the planet, a(m/3M)^(1/3): 0.355 AU for Jupiter, 0.776 AU for Neptune.
- Times: the 3:1 setup (a = 2.502 AU, e = 0.15, 60° ahead of Jupiter) crosses Mars's orbit at 4,157 years, the 5:2 at 11,921 years. Wisdom (1983, Icarus 56, 51) showed that 3:1 orbits jump to e above 0.3 after quiet stretches; the demo's preset starts are chosen to show the growth within a class period. The 2:1 asteroid swings to e = 0.29 but is not removed in 20,000 years: clearing the real 2:1 gap needs Saturn and much longer times.
- Real counts: JPL Small Body Database Query API, 2026-10-25: 881,333 numbered asteroids with a from 1.80 to 4.10 AU in 0.02 AU bins, and all 6,620 known objects with a from 30 to 56 AU in 0.5 AU bins. They count objects found so far; faint distant ones are missing.
- Finding Neptune: Jupiter, Saturn, Uranus and Neptune integrated together (Runge–Kutta, 0.05 yr) back from J2000 to 1690; this model's Uranus, seen once a year from 1781 to 1845 and at the pre discovery sightings of 1690, 1748, 1750, 1753, 1756, 1764 and 1769, stands in for the observations. Uranus's position and velocity in 1781 are fitted by least squares with Jupiter and Saturn pulling, with no Neptune (7.3″ rms, up to 18″ in 1781 to 1845 and 231″ for the old sightings) or with a planet X on a fixed ellipse. Le Verrier's elements (a = 36.154 AU, e = 0.10761, mass 1/9300) from Laskar 2017 (Comptes Rendus Physique 18, 504) leave 3.7″ and put planet X 0.36° from the model's Neptune on 1846 September 23; the real Neptune's elements leave 0.1″. Longitudes are heliocentric, J2000 equinox.
- Checks: curriculum/validation/test_resonances.cjs.

## Going further

- Pair with **Kepler's Laws** for P² = a³ and with **Lagrange Points** for the Trojans at Jupiter's 1:1 resonance.
- Blind hides the resonance marks: let students find the gaps in the real counts first, then predict their places from Kepler's third law.
