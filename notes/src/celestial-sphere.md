---
title: The Sky and the Celestial Sphere
level: Intro astronomy (non-majors and majors); Astro 2203 Topic 2
time: 20 to 30 minutes
---
## What students should come away with

- The sky behaves like a sphere turning once a day about an axis through Earth's poles. Altitude and azimuth say where to look from one place at one moment; right ascension and declination are fixed on the sphere, like longitude and latitude.
- The north celestial pole stands as many degrees above the northern horizon as your latitude. Polaris is within 0.7° of it today.
- Stars within that many degrees of the pole never set (circumpolar); stars as close to the other pole never rise. A star on the celestial equator is up for half of each day, everywhere.
- The Sun moves along the ecliptic, tilted 23.4° to the celestial equator, so its noon height changes by 46.9° from June to December. The Moon moves about 13° east among the stars each day, within 5.1° of the ecliptic.
- Precession turns Earth's axis around a cone once in about 25,800 years, so the pole star and the constellation of the March equinox change.

## Before class

Students need only latitude and longitude on Earth and the idea that Earth spins. The demo pairs well with Stellarium Web (free, in the browser): Stellarium shows the real sky; this demo shows the sphere from outside so students can see why the sky moves as it does. The demo opens paused on A winter night at Ruston. Turn on **Projector** for a large room; the Flat outside view is lighter on old laptops than 3D.

## Running it in class

1. **A winter night at Ruston.** Press **Play** at 10 min/s. In the left view every star turns about the axis through the observer; in the right view stars rise in the east and set in the west, and the stars near Polaris circle it. Point out that the axis is tilted by 90° minus the latitude (Q1).
2. **North Pole, then On the equator.** At the pole the celestial equator lies on the horizon and nothing rises or sets; at the equator the axis lies along the horizon and every star is up 12 hours (Q3).
3. **Southern sky, Sydney.** The south celestial pole is 33.9° up with no bright star near it; Crux and the pointers never set; Polaris never rises (Q2).
4. **June solstice Sun, December solstice Sun, Midnight Sun.** Read the highest altitude of the Sun each time (Q4). Turn on **Always up and never up zones** to show the circumpolar caps.
5. **The Moon through a month.** One day each second at the same clock time: the Moon moves east among the stars, waxes and comes back to the same stars in 27.3 days (Q5).
6. **Pole star in 2600 BC, Precession of the pole.** The sky circles Thuban at Giza; then 500 years a second in 3D shows the axis sweeping its cone (Q6).

## Questions

**Q1.** Predict: how high above the northern horizon is Polaris seen from Ruston, at 32.5° N? Select Polaris in A winter night at Ruston and check. Why is it not exactly 32.5°?

**Q2.** From Ruston, is Kochab (declination 74°) circumpolar? Is Capella (declination 46°)? From Sydney, at 33.9° S, does Acrux, in the Southern Cross (declination −63°), ever set?

**Q3.** On the equator, where on the horizon does Mintaka, almost exactly on the celestial equator, rise? How long is it above the horizon each day?

**Q4.** Find the Sun's highest altitude at Ruston on June 21 and on December 21. Explain the difference using the tilt of Earth's axis. Why does the Sun not set at Tromsø, at 69.6° N, in late June?

**Q5.** Using The Moon through a month, how far east among the stars does the Moon move from one evening to the next? How many days until it is back among the same stars?

**Q6.** Which star was near the north celestial pole when the pyramids at Giza were built, about 2600 BC? Which will be near it in AD 14000? About when does the March equinox point leave Pisces for Aquarius?

## Common misconceptions

- **"Polaris is the brightest star in the sky."** It is about the 48th brightest. What makes it special is its place within 0.7° of the north celestial pole.
- **"The stars are fixed; only the Sun moves."** The whole sky turns once a day because Earth turns. Stars also rise about 4 minutes earlier each night, so the evening sky changes through the year.
- **"The Sun is straight overhead at noon."** At Ruston the Sun is never overhead: its highest is 80.9° in June. It can be overhead only between 23.4° S and 23.4° N.
- **"The pole star is forever."** Precession moves the pole: Thuban 4,600 years ago, Polaris now, Vega in about 12,000 years.
- **"Star signs match where the Sun is."** The dates of the signs were set about 2,000 years ago; precession has since shifted the Sun's place by almost a whole constellation.

## Physics behind the demo

- Star places: the Yale Bright Star Catalogue (Hoffleit and Warren 1991, CDS V/50), 2,887 stars to V = 5.5, J2000 positions moved along their proper motions. Constellation boundaries: IAU (Delporte 1930), looked up as tabulated by Roman (1987).
- Precession of the equator and the ecliptic: Vondrák, Capitaine and Wallace (2011), valid for ±200,000 years. The Earth turns by the Earth rotation angle (IERS Conventions 2010). Nutation (up to 17″) and the aberration of starlight for the stars (up to 20″) are left out.
- Sun: Meeus, Astronomical Algorithms, ch. 25 (about 0.01°). Moon: Meeus ch. 47 with the SOFA moon98 coefficients (about 10″), seen from the observer's place on the WGS84 ellipsoid. ΔT from Espenak and Meeus (2006).
- Highest and lowest altitude in a day: 90° − |φ − δ| and |φ + δ| − 90°. No refraction: in the real sky the air lifts objects at the horizon by about 0.5°, so real days are a few minutes longer and Polaris is a little higher near the horizon.
- Eclipses: the two disks seen from the observer (solar); the Moon against the Earth's shadow with the Explanatory Supplement (1961) radii (lunar). Contact times agree with NASA's within about a minute (Dallas totality, April 8, 2024: 18:41:05 to 18:45:10 UT here, 18:40:43 to 18:44:35 UT in NASA's tables).
- Tested against ERFA (precession, sidereal time, Moon), astropy (constellations) and NASA eclipse times in curriculum/validation/test_celestial-sphere.cjs.

## Going further

- Pair with the Astro 2203 activity Reading the Sky with Stellarium: find the same stars in Stellarium Web and compare altitude, azimuth, right ascension and declination.
- Homework: from a dark spot, estimate the altitude of Polaris with a fist at arm's length (about 10°) and compare with your latitude.
