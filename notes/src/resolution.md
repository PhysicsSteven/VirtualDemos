---
title: Circular Apertures and Resolution
level: Intro physics (wave optics: circular apertures, the Rayleigh criterion)
time: 15 to 30 minutes
---
## What students should come away with

- Light through a round hole does not make a point: it makes the Airy pattern, a bright central disk with faint rings. The first dark ring is at sin θ = 1.22 λ/D, so a larger hole or a shorter wavelength makes a smaller disk.
- Two point sources make two overlapping Airy patterns. By Rayleigh's criterion they are just resolved when the center of one falls on the first dark ring of the other: θ_min = 1.22 λ/D. The intensity midway between them then dips to about 73.5% of the peaks.
- Every optical instrument has this limit: the pupil of the eye, a telescope's mirror, a camera lens. Bigger apertures resolve finer detail.
- The 1.22 is not a fudge factor: it is the first zero of the Bessel function J₁, 3.8317, divided by π.
- Close to the hole the far field pattern has not formed yet. Seen from a point on the screen, the hole holds N_F = D²/4λL Fresnel zones; neighboring zones nearly cancel, so the center of the pattern is bright for an odd number of zones and dark for an even number. Far away (N_F ≪ 1) the Airy pattern returns.
- The shadow of a small round disk has a bright spot at its center, as bright as the beam itself: the Poisson (or Arago) spot, the observation that settled the wave theory of light in 1818.

## Before class

Students should know single slit diffraction (sin θ = mλ/a for the dark fringes). The demo has six setups: **Laser through a pinhole** (a screen at distance L, positions in mm), **Two point sources** (an iris in front of a lens, angles in µrad), **Headlights and the eye**, **Hubble and two stars**, **Camera lens** (positions on the sensor in µm), **Mystery pinhole**, and two near field setups, **Near the hole: Fresnel zones** and **A disk: the Poisson spot**. The graph under the picture is the intensity along the line through the sources; the orange cursor reads position and intensity anywhere on it.

## Running it in class

1. **Laser through a pinhole.** Ask Q1. 632.8 nm, 200 µm, 2.00 m: the first dark ring is 7.72 mm from the center. Tick **Bring out the faint rings** to see the rings, which are only 1.75% as bright as the center. Change D and λ.
2. **Two point sources.** Ask Q2. With a 5 mm iris at 550 nm the limit is 134 µrad; start at 160 µrad (resolved), then close the gap or the iris until the two merge. Tick **Show each source alone** to see each pattern as a dashed curve: at the limit one peak sits on the other's zero.
3. **Headlights and the eye.** Ask Q3. Move the car away: with a 3.00 mm pupil the headlights merge at 5.81 km. Open the pupil to 8 mm (night) and they stay separate to 15.5 km.
4. **Hubble and two stars.** Ask Q4. 2.40 m mirror, 550 nm: 2.80 × 10⁻⁷ rad, so stars at 2.0 million ly must be 0.56 ly apart.
5. **Camera lens.** Ask Q5. Step from f/4 to f/22 and watch the two points blur together as the Airy disk grows (2.44 λN: 5.4 µm at f/4, 29.5 µm at f/22).
6. **Near the hole: Fresnel zones.** Ask Q6. A 2.00 mm hole with the screen 0.50 m away holds 3.16 zones and the center is 3.75 times as bright as the beam. Press **Move the screen**: the center goes dark at 0.790 m (two zones) and reaches 4.00 times the beam at 1.580 m (one zone), while the inset shows the zones in the hole.
7. **A disk: the Poisson spot.** Ask Q7 before showing it. The center of the shadow is as bright as the open beam; zoom to 4× to see the spot and its first dark ring.

## Questions

**Q1.** A 632.8 nm laser lights a pinhole 200 µm across. How far from the center of a screen 2.00 m away is the first dark ring? What happens to it if the pinhole is made smaller?

**Q2.** Two point sources are seen through a 5.0 mm iris in 550 nm light. What is the smallest angle between them that can be resolved? What happens if the iris is closed to 2.5 mm?

**Q3.** A pupil is 3.00 mm across and the light is 550 nm. How far away can a car be with its headlights, 1.30 m apart, still seen as two?

**Q4.** The Hubble Space Telescope's mirror is 2.40 m across. What angle can it resolve at 550 nm, and how far apart must two stars 2.0 million light years away be for Hubble to see them as two?

**Q5.** A 50 mm lens is stopped down from f/4 to f/22. What happens to the size of the Airy disk on the sensor?
**Q6.** A round hole 2.00 mm across is lit by a 632.8 nm beam and the screen starts 0.50 m behind it. As the screen moves away, where does the center of the pattern first go dark, and where is it brightest? How bright is that, compared with the beam with no hole?

**Q7.** Predict: an opaque disk 2.00 mm across sits in the same beam, the screen 1.00 m behind it. What is at the center of its shadow?

## Common misconceptions

- **"A perfect lens focuses a point to a point."** Diffraction at the edge of the aperture always spreads the image into an Airy disk; a perfect lens is only diffraction limited.
- **"Magnifying the image more will separate the two stars."** Magnification enlarges both Airy disks along with their separation; it cannot split two patterns that already overlap.
- **"Smaller apertures always give sharper pictures."** A smaller aperture reduces aberrations and increases depth of field, but the Airy disk grows as 1/D.
- **"The 1.22 comes from rounding."** It is 3.8317/π, from the first zero of J₁; the textbook rounds it to two decimals.
- **"A shadow's middle is the darkest place."** Behind a round disk every point on the axis sees the same ring of uncovered zones around the edge, so the center of the shadow is as bright as the beam.
- **"Light through a hole can never be brighter than the beam."** Near the hole the center can reach four times the beam's intensity (one zone exactly fills the hole); the light is taken from elsewhere on the screen, so energy is conserved.

## Physics behind the demo

- **Pattern.** The exact Fraunhofer pattern of a uniformly lit circular hole, I = I₀[2J₁(x)/x]² with x = πD sin θ/λ. J₁ comes from Bessel's integral by the trapezoid rule, good to about 13 digits; the tests check it against tabulated values and zeros (3.8317, 7.0156, 10.1735), the 1.75% first bright ring and the 83.8% of the power inside the first dark ring.
- **Two sources.** Equal and incoherent, so intensities add; each pattern depends on the angle from its own center (small angles). The lens or mirror is perfect: no aberrations, no turbulence, no central obstruction (a real Hubble has one, which changes the ring brightness a little).
- **Screen.** A plane wave lights the pinhole and the screen is in the far field (D²/λL ≤ 0.22 here). A point x from the center is at θ = arctan(x/L). The camera uses D = f/N with the marked f-numbers.
- **Numbers.** Hubble from the textbook's Example 4.6 in §4.5 (2.40 m, 550 nm, 2.0 million ly); the eye from its Chapter 4 Problem 59 (3.00 mm pupil, headlights 1.30 m apart). Real eyes reach about one minute of arc (291 µrad, 20/20 vision), worse than the pupil's diffraction limit, because of aberrations and the spacing of receptors.
- **Near field (Fresnel).** Near the hole and A disk use the Fresnel form of the Kirchhoff integral for a plane wave of unit intensity, U(r) = −2iφ e^(ikr²/2L) ∫₀¹ J₀(kaur/L) e^(iφu²) u du with φ = πN_F, by Simpson's rule (J₀ from Abramowitz and Stegun 9.4.1 and 9.4.3, good to 5 × 10⁻⁸); the disk is the open beam minus the hole (Babinet). On the axis this gives 4 sin²(πN_F/2) for the hole and exactly 1 for the disk; the readouts compare it with the exact Rayleigh–Sommerfeld value, 1 + L²/R² − 2(L/R) cos k(R − L) and L²/R² with R = √(L² + a²), within 0.003 over the slider ranges. The tests check the far field limit (πN_F)²[2J₁(v)/v]², the power through the hole, Babinet's sum, and the Poisson spot's J₀² shape when many zones are covered. The edge is perfectly sharp and the beam perfectly even, both stated.

## Going further

- Homework: the Very Large Array spans about 36 km. What angle could it resolve at a radio wavelength of 21 cm, compared with Hubble in visible light?
- Pair with **Diffraction Grating** (single slit aperture) to compare 1.00 λ/a for a slit with 1.22 λ/D for a round hole, and with **The Eye** for the rest of the eye's optics.
