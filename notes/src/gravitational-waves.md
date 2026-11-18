---
title: Gravitational Waves
level: Astronomy (gravitation; OpenStax University Physics Vol. 1 §13.7)
time: 20 to 30 minutes
---
## What students should come away with

- Two orbiting masses send out ripples in space itself. The waves carry energy away, so the orbit shrinks, the masses speed up and the wave frequency and strength climb: a "chirp" that ends when the black holes merge and the new hole rings down.
- How fast the frequency climbs depends on one combination of the masses, the chirp mass M_c = (m₁m₂)^(3/5)/(m₁ + m₂)^(1/5). Measuring the chirp weighs the black holes. Heavier pairs chirp lower and faster; neutron stars chirp slowly up to kilohertz.
- A passing wave stretches one direction and squeezes the one at right angles. LIGO compares two 4 km arms; the change is ΔL = hL, about 1/400 of a proton's diameter for GW150914.
- Two detectors a few thousand kilometers apart see the wave a few milliseconds apart, which tells the direction (a ring on the sky). A wave turned 45° to the arms is missed, which is one reason for several detectors.
- In 2017 gravitational waves and gamma rays from the same neutron star merger arrived 1.74 s apart after 130 million years: gravity travels at the speed of light to about one part in 10¹⁵.

## Before class

Students should know Kepler's third law and that waves carry energy, and have met the idea that general relativity describes gravity as curved spacetime. The demo has four views of one binary, set by the masses, the distance and the starting frequency. **Inspiral**: the ripples in the plane of the orbit at true scale with a close up of the two black holes, and below the strain h (with its frequency) against time from the peak. **Detector**: LIGO Hanford from above with its arms stretching, a ring of free masses, and the signals at Hanford and Livingston. **GW150914 data**: the real Hanford strain and the numerical relativity waveform, with the half cycles between zero crossings fitted to weigh the chirp. **Race with light**: GW170817's waves and gamma rays traveling 130 million years to Earth.

## Running it in class

1. **GW150914: two black holes.** Press Play (slow motion, 1 s on the screen is 20 ms). Ask what changes as the orbit shrinks. Read the last stable orbit, ringdown and final black hole (Q1).
2. **Heavy pair, lower pitch** and **Equal masses**; then **GW170817: two neutron stars**, which runs in real time (Q2, Q3).
3. **Arms stretching**, then **How small? The peak** (Q4).
4. **A wave the arms miss** and **Livingston first, 6.9 ms** (Q5, Q6).
5. **The real signal**, then **Weigh the black holes**: move Fit from and Fit to and watch the chirp mass (Q7).
6. **Gravity against light**, then **If gravity were slower** (Q8).

## Questions

**Q1.** In the GW150914 setup, how long does the wave take to climb from 20 Hz to the last stable orbit, and at what frequency is that orbit? At what frequency does the final black hole ring, and how long does the ringing last? The two black holes had 36 and 29 solar masses; how massive is the final black hole, and where did the rest go? How much energy is that?

**Q2.** Compare the last stable orbit and ringdown frequencies for GW150914 (65 M☉ in all) and the Heavy pair (160 M☉). The demo's formula says these frequencies scale as 1/M. Check it with the numbers.

**Q3.** In the GW170817 setup, how long do the neutron stars take from 100 Hz to their last stable orbit, and at what frequency is that? The hint says that from 30 Hz they take almost a minute. Why does a light pair chirp so much longer than a heavy one?

**Q4.** In the How small? setup, what are h and ΔL at the peak for a binary seen face on and straight overhead? Hanford actually recorded a peak of about 1.0 × 10⁻²¹. What ΔL is that, and what fraction of a proton's diameter (1.68 × 10⁻¹⁵ m)?

**Q5.** In A wave the arms miss, the wave is turned 45° from the arms. What does the detector feel, and why? What does that mean for building a network of detectors?

**Q6.** GW150914 reached Livingston 6.9 ms before Hanford. The sites are 3,002 km apart. At what angle to the line between them did the wave arrive? Why does one time delay give a ring on the sky rather than a point?

**Q7.** In Weigh the black holes, fit from 0.30 s to 0.42 s, then from 0.33 s to 0.42 s. Record the chirp mass at the detector and at the source each time. The full analysis gives 30.6 M☉ at the detector (28.1 M☉ at the source). Is the simple straight line fit above or below? Why might the answer depend on which half cycles you include?

**Q8.** In Gravity against light, how long did the trip take, and what fraction δ would make gravity lag by the measured 1.74 s? If gravity were 0.1% slower than light, how much later would the waves have come?

## Common misconceptions

- **"Gravitational waves are sound."** "Hear it" plays the wave as sound so we can sense its chirp, but the wave is a stretching of space, traveling at the speed of light through empty space where sound cannot go.
- **"The waves push the mirrors."** The mirrors hang free; the wave changes the distance between them. The light takes longer to travel the stretched arm.
- **"LIGO's arms change by a large amount, just very briefly."** The change is 4 × 10⁻¹⁸ m, about 1/400 of a proton. The detection depends on measuring that, not on the time.
- **"The black holes collide and stop."** The orbit shrinks continuously; the merger leaves one spinning black hole that rings like a struck bell and settles in a few milliseconds.
- **"A heavier pair is louder at every frequency, so it is always easier to hear."** Heavier pairs merge at lower frequencies; very heavy pairs merge below LIGO's band.

## Physics behind the demo

- **The chirp.** Leading order (quadrupole) inspiral of two point masses on a circular orbit: f(τ) = (1/π)(5/(256τ))^(3/8)(GM_c/c³)^(−5/8) at a time τ before coalescence, phase −2(τc³/(5GM_c))^(5/8), strain h = (4/d)(GM_c/c²)^(5/3)(πf/c)^(2/3) for a binary face on and overhead. Masses are multiplied by 1 + z (redshift from the distance in a flat Planck 2018 universe), so the frequencies are those at the detector. The model stops at the last stable orbit of a test body, f = c³/(6^(3/2)πGM); the plunge and merger after it are drawn as a smooth rise to the ringdown frequency, not computed.
- **Remnant and ringdown.** Spin from Rezzolla et al. (2008), radiated mass from the equal mass simulation of Scheel et al. (2009) scaled by (4η)², quasinormal mode frequency and damping time from the fits of Berti, Cardoso and Will (2006).
- **Detector.** ΔL = hL cos 2ψ with L = 3,994.5 m (Aasi et al. 2015); the picture leaves out the Fabry–Perot cavities that fold the light. Site delay (d/c) cos θ with d = 3,002 km.
- **Data.** Abbott et al. (2016), PRL 116, 061102, Figure 1, from the LIGO Open Science Center: Hanford strain band passed 35 to 350 Hz and the numerical relativity waveform, every fourth sample. Each half cycle between zero crossings gives f = 1/(2Δt); f^(−8/3) is linear in time for the leading order chirp, fitted with a free intercept (the coalescence time).
- **Race.** GW170817 at about 40 Mpc and GRB 170817A 1.74 ± 0.05 s later (Abbott et al. 2017, ApJL 848, L13).

## Going further

- Pair with **Black Holes and Lensing** (the horizons and light near them) and **Equivalence and Tests of Gravity** (the other classic tests of general relativity).
- Homework: from Kepler's third law with ω = πf, show that at the last stable orbit, f = c³/(6^(3/2)πGM), the separation is 6GM/c² and the relative speed is c/√6 = 0.41c. Check against the close up label in the demo.
