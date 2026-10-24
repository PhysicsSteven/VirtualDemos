---
title: Circular Apertures and Resolution
level: Intro physics (wave optics: circular apertures, the Rayleigh criterion)
time: 15 to 30 minutes
---
## What students should come away with

- Light through a round hole does not make a point: it makes the Airy pattern, a bright central disk with faint rings. The first dark ring is at sin θ = 1.22 λ/D, so a larger hole or a shorter wavelength makes a smaller disk.
- Two point sources make two overlapping Airy patterns. By Rayleigh's criterion they are just resolved when the centre of one falls on the first dark ring of the other: θ_min = 1.22 λ/D. The intensity midway between them then dips to about 73.5% of the peaks.
- Every optical instrument has this limit: the pupil of the eye, a telescope's mirror, a camera lens. Bigger apertures resolve finer detail.
- The 1.22 is not a fudge factor: it is the first zero of the Bessel function J₁, 3.8317, divided by π.

## Before class

Students should know single slit diffraction (sin θ = mλ/a for the dark fringes). The demo has six setups: **Laser through a pinhole** (a screen at distance L, positions in mm), **Two point sources** (an iris in front of a lens, angles in µrad), **Headlights and the eye**, **Hubble and two stars**, **Camera lens** (positions on the sensor in µm) and **Mystery pinhole**. The graph under the picture is the intensity along the line through the sources; the orange cursor reads position and intensity anywhere on it.

## Running it in class

1. **Laser through a pinhole.** Ask Q1. 632.8 nm, 200 µm, 2.00 m: the first dark ring is 7.72 mm from the centre. Tick **Bring out the faint rings** to see the rings, which are only 1.75% as bright as the centre. Change D and λ.
2. **Two point sources.** Ask Q2. With a 5 mm iris at 550 nm the limit is 134 µrad; start at 160 µrad (resolved), then close the gap or the iris until the two merge. Tick **Show each source alone** to see each pattern as a dashed curve: at the limit one peak sits on the other's zero.
3. **Headlights and the eye.** Ask Q3. Move the car away: with a 3.00 mm pupil the headlights merge at 5.81 km. Open the pupil to 8 mm (night) and they stay separate to 15.5 km.
4. **Hubble and two stars.** Ask Q4. 2.40 m mirror, 550 nm: 2.80 × 10⁻⁷ rad, so stars at 2.0 million ly must be 0.56 ly apart.
5. **Camera lens.** Ask Q5. Step from f/4 to f/22 and watch the two points blur together as the Airy disk grows (2.44 λN: 5.4 µm at f/4, 29.5 µm at f/22).

## Questions

**Q1.** A 632.8 nm laser lights a pinhole 200 µm across. How far from the centre of a screen 2.00 m away is the first dark ring? What happens to it if the pinhole is made smaller?

**Q2.** Two point sources are seen through a 5.0 mm iris in 550 nm light. What is the smallest angle between them that can be resolved? What happens if the iris is closed to 2.5 mm?

**Q3.** A pupil is 3.00 mm across and the light is 550 nm. How far away can a car be with its headlights, 1.30 m apart, still seen as two?

**Q4.** The Hubble Space Telescope's mirror is 2.40 m across. What angle can it resolve at 550 nm, and how far apart must two stars 2.0 million light years away be for Hubble to see them as two?

**Q5.** A 50 mm lens is stopped down from f/4 to f/22. What happens to the size of the Airy disk on the sensor?

## Common misconceptions

- **"A perfect lens focuses a point to a point."** Diffraction at the edge of the aperture always spreads the image into an Airy disk; a perfect lens is only diffraction limited.
- **"Magnifying the image more will separate the two stars."** Magnification enlarges both Airy disks along with their separation; it cannot split two patterns that already overlap.
- **"Smaller apertures always give sharper pictures."** A smaller aperture reduces aberrations and increases depth of field, but the Airy disk grows as 1/D.
- **"The 1.22 comes from rounding."** It is 3.8317/π, from the first zero of J₁; the textbook rounds it to two decimals.

## Physics behind the demo

- **Pattern.** The exact Fraunhofer pattern of a uniformly lit circular hole, I = I₀[2J₁(x)/x]² with x = πD sin θ/λ. J₁ comes from Bessel's integral by the trapezoid rule, good to about 13 digits; the tests check it against tabulated values and zeros (3.8317, 7.0156, 10.1735), the 1.75% first bright ring and the 83.8% of the power inside the first dark ring.
- **Two sources.** Equal and incoherent, so intensities add; each pattern depends on the angle from its own centre (small angles). The lens or mirror is perfect: no aberrations, no turbulence, no central obstruction (a real Hubble has one, which changes the ring brightness a little).
- **Screen.** A plane wave lights the pinhole and the screen is in the far field (D²/λL ≤ 0.22 here). A point x from the centre is at θ = arctan(x/L). The camera uses D = f/N with the marked f-numbers.
- **Numbers.** Hubble from the textbook's Example 4.6 in §4.5 (2.40 m, 550 nm, 2.0 million ly); the eye from its Chapter 4 Problem 59 (3.00 mm pupil, headlights 1.30 m apart). Real eyes reach about one minute of arc (291 µrad, 20/20 vision), worse than the pupil's diffraction limit, because of aberrations and the spacing of receptors.

## Going further

- Homework: the Very Large Array spans about 36 km. What angle could it resolve at a radio wavelength of 21 cm, compared with Hubble in visible light?
- Pair with **Diffraction Grating** (single slit aperture) to compare 1.00 λ/a for a slit with 1.22 λ/D for a round hole, and with **The Eye** for the rest of the eye's optics.
