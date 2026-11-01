---
title: Telescope Aberrations
level: Intro astronomy and physics (optics: aberrations, the Strehl ratio, seeing and adaptive optics)
time: 15 to 30 minutes
---
## What students should come away with

- Even a perfect telescope blurs a star into an Airy disk, 1.22 λ/D across to its first dark ring. Anything more is an aberration (or the air), and the Strehl ratio, the star's peak brightness compared with a perfect telescope's, measures how much. A Strehl ratio of 0.8 or more counts as diffraction limited.
- Each aberration has its own fingerprint and its own fix. Out of focus: a ring with a dark center, fixed by focusing. Spherical aberration: no focus is sharp and the star differs inside and outside focus, fixed by a parabola. Coma: a comet that grows with the angle from the center of the view, fixed by a corrector. Astigmatism: lines that turn by 90° through focus, fixed by removing the stress. Color: each color sharp at its own focus, fixed by an achromat.
- Spherical aberration falls steeply with the focal ratio (as 1/N³), so a slow sphere can be good enough and a fast telescope must be a parabola. Coma grows as θ/N², so fast parabolas are sharp only near the center of the view.
- Hubble's 1990 mirror was about 2.2 µm too flat at the edge: spherical aberration, which no focus could fix. Corrective optics with the opposite error fixed it in 1993.
- On the ground, moving air limits a telescope to about λ/r₀, where r₀ (about 10 cm on an average night) is the size of the air's smooth patches. A bigger telescope does not see finer detail through the air; adaptive optics does, best in the infrared, where r₀ is larger.

## Before class

Students should know the Airy disk and 1.22 λ/D (the Circular Apertures and Resolution demo). The demo has twelve setups: **Through moving air** (it opens there, paused), **Perfect telescope**, **Out of focus**, **Spherical mirror**, **Star off center: coma**, **Pinched mirror: astigmatism**, **Single lens: color**, **Achromatic lens**, **Hubble in 1990**, **Hubble fixed (1993)**, **Adaptive optics** and **Mystery telescope**. The left side of the picture is the telescope seen from the side, with the rays near the camera magnified; the right side is the computed star image, and the graph under it is the brightness along a line through the star, with a perfect telescope's for comparison. **Star test** shows the star a little inside and outside the focus.

## Running it in class

1. **Perfect telescope.** Ask Q1. A 200 mm parabola at f/8 in 550 nm light: the Airy disk, Strehl ratio 1, half light diameter 0.596″.
2. **Out of focus.** Ask Q2, then move the focus back to 0.
3. **Spherical mirror.** Ask Q3. At f/6 the best Strehl ratio is 0.243; at f/12 it is 0.964. Mask the edge of the aperture to see the blur shrink, then switch the mirror to a parabola.
4. **Star off center: coma.** Ask Q4. Move the star from 0′ to 20′ and watch the comet grow; add the corrector.
5. **Pinched mirror: astigmatism.** Turn on the star test: the line turns by 90° from inside to outside the focus.
6. **Single lens: color**, then **Achromatic lens.** Ask Q5. Step through the filters and find each color's best focus.
7. **Hubble in 1990** and **Hubble fixed (1993).** Ask Q6. Bring out faint light to see the 1990 halo.
8. **Through moving air.** Ask Q7. Let the air move, then take a long exposure.
9. **Adaptive optics.** Ask Q8. Switch it off and on, then change to green light.
10. **Mystery telescope.** Let students (or the class by vote) test, name the cause and fix it. Each New mystery picks a cause at random.

## Questions

**Q1.** A perfect 200 mm telescope at f/8 looks at a star in 550 nm light. How big is the Airy disk on the sky (1.22 λ/D, in arcseconds), and how far from the center is its first dark ring on the camera?

**Q2.** Predict: the camera is moved 0.400 mm beyond the focus of the same telescope. What does the star look like, and how big is the wavefront error, in wavelengths?

**Q3.** A spherical mirror's wavefront error at its edge is D/(512 N³). How big is it, in waves of 550 nm, for a 200 mm mirror at f/6 and at f/12? Which would you expect to be diffraction limited?

**Q4.** A parabola at f/4 images a star 20′ from the center of its view. How long is the comet (3θ/16N²), in arcseconds, compared with the 0.69″ Airy disk?

**Q5.** A single crown glass lens (N-BK7, V = 64.2) has a focal length of 900 mm. How far apart are its blue (486 nm) and red (656 nm) foci?

**Q6.** Hubble's mirror was only about 2.2 µm (0.0022 mm) too flat at the edge. Why did such a tiny error ruin its images?

**Q7.** On a night with r₀ = 11.2 cm at 550 nm, how big is the seeing disk (λ/r₀), and how does it compare with a perfect 1.0 m telescope's 1.22 λ/D?

**Q8.** Why does adaptive optics on a 3.5 m telescope work far better at 2.2 µm than at 550 nm?

## Common misconceptions

- **"A perfect telescope makes a point."** Diffraction always spreads the star into an Airy disk; aberrations add to it.
- **"Any blur can be focused away."** Only defocus can. Spherical aberration, coma, astigmatism and color have no sharp focus; the best focus is a compromise.
- **"Hubble was badly out of focus."** Its mirror had the wrong shape (spherical aberration). Its best focus still left most of the light in a halo about 1.5″ across.
- **"A bigger telescope always sees finer detail."** On the ground the air sets the limit, about λ/r₀, for any telescope larger than r₀; a bigger mirror collects more light but the seeing disk stays the same size.
- **"Twinkling is the star changing."** It is the air in front of the telescope; the speckle pattern changes in milliseconds as the wind carries the air across the aperture.

## Physics behind the demo

- **Image.** Fraunhofer diffraction: the star's image is |FFT of the pupil × e^(2πiW/λ)|² on a 512 × 512 grid, the pupil 128 samples across at 550 nm (scaled with wavelength so every color has the same angular pixel). W is the wavefront error from an exact ray trace, tilt removed. Where W changes by more than about half a wave between samples, a geometric ray picture is used instead.
- **Mirrors.** Exact conic surfaces (sphere K = 0, paraboloid K = −1), stop at the mirror, path measured to a reference sphere centered on the chief ray's image point. Third order theory is quoted only for comparison; the tests check the trace against it (spherical aberration, coma, astigmatism and defocus).
- **Lenses.** Exact spherical surfaces with Snell's law and the Schott Sellmeier formulas for N-BK7 and F2. The single lens is plano convex; the achromat's powers come from the Abbe numbers, its last radius is solved so the F and C foci coincide, and the crown's bending minimizes spherical aberration.
- **Hubble.** 2.4 m, f/24, primary radius of curvature 11.04 m, conic constant as made −1.0139 against the design's −1.0023 (Allen report, 1990). The error is the difference of the two surfaces, doubled on reflection: 0.47 waves rms at 547 nm after focusing (the report gives 0.5), best focus 22.5 mm beyond the paraxial focus. Obscuration 0.33 and supports 0.022 of the radius (the Tiny Tim pupil). The 1993 corrective optics are modeled as cancelling the error exactly.
- **Air.** A Kolmogorov phase screen (FFT method with three levels of subharmonics), r₀ given at 500 nm and scaled as λ^(6/5), carried across by a 10 m/s wind (shown slowed 100 times). The tests check its structure function against 6.88 (r/r₀)^(5/3) and the Noll residuals after removing Zernike shapes. A long exposure averages 48 moments. Adaptive optics is perfect removal of the first 2, 14 or 65 Zernike shapes, with no delay or noise.
- **Color.** White light is 9 equally weighted wavelengths from 420 to 660 nm, colored with the CIE 1931 functions (Wyman, Sloan and Shirley 2013 fit) in sRGB. Equal weighting is why an achromat's white light Strehl ratio stays near 0.5: violet and deep red still focus apart.
- **Puzzle.** A mystery is solved when the right cause is named, its fix made, the star, mask and filter are back where they started, and the Strehl ratio reaches 0.8 (0.5 through the air with adaptive optics; 0.4 for an achromat in white light). Every cause has been checked solvable at the hardest settings the puzzle picks.
- All data are simulated.

## Going further

- Pair with **Circular Apertures and Resolution** (the Airy disk and Rayleigh's criterion) and **Optics Bench** (rays through lenses and mirrors, chromatic aberration).
- Homework: the Extremely Large Telescope's mirror is 39 m across. What is its diffraction limit at 2.2 µm, and how much smaller is that than a 1″ seeing disk?
