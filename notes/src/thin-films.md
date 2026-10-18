---
title: Thin Film Interference
level: PHYS 202 (optics unit)
time: 20 to 30 minutes
---
## What students should come away with

- Light reflected from the top and bottom surfaces of a film interferes. Ray 2 travels an extra optical path 2n_f t cos θ_t, and each reflection from a higher index medium adds half a cycle.
- With one such flip (a soap film, oil on water) the film reflects strongly when 2n_f t cos θ_t = (m + ½)λ and weakly when it equals mλ. With two flips, or none, the conditions swap.
- A film much thinner than λ with one flip reflects almost nothing at any color: a soap film turns black just before it bursts.
- In white light each thickness reinforces some wavelengths and cancels others, so the film is colored. A quarter wave coating, t = λ/(4n_f), cancels the reflection at one wavelength, completely if n_f = √(n₁n₂). The energy is not destroyed: it is transmitted.
- In a wedge or under a lens the fringes are lines of equal thickness; each fringe means λ/(2n_f) more film.

## Before class

Students should know superposition and phase. The **Rays** view shows the two reflected rays and their waves at λ₀ (the film is drawn far thicker than scale); the plot below shows R across the visible spectrum. **Soap film**, **Wedge** and **Newton's rings** show the film in its computed colors; drag the probe to read the thickness. **Display gain** only brightens the colors on screen.

## Running it in class

1. **Two reflections.** A soap film 335 nm thick, with light at 30°. The readouts give π at the top surface, none at the bottom, and an extra path of 1.501 λ₀. Ray 2 lags by 1.00 cycles: the waves add. Drag the bottom surface and watch the waves slide in and out of step (Q2).
2. **Black film.** Ask Q1 before pressing it. At 10 nm the path is only 0.048 λ₀, and the flip leaves the two reflections nearly opposite. R is 0.19%, and the spectrum is low at every color.
3. **Soap bubble colors.** The film drains, thin at the top. Point out the black top, then the bands. Switch **Light** to **Only λ₀**: the colors become simple bright and dark bands. Where the film is thicker than about 1 µm, many orders overlap and the colors fade to pastels.
4. **Air wedge fringes.** Two glass slides touch at the left; sodium light (589 nm). The contact edge is dark. With a 10 µm spacer the fringes are 1.473 mm apart, 34 over the slide (Q5). Then open **Newton's rings**: dark rings at 0.767, 1.085, 1.329 mm for R = 1.0 m (Q6).
5. **Anti reflection coating.** MgF₂, 99.6 nm, on glass. Both reflections flip, so only the path counts. R drops from 4.26% to 1.26% at 550 nm and rises toward both ends of the spectrum (Q3). Set n_f to 1.23 and press **Set t to a quarter wave of λ₀**: R at λ₀ falls to almost zero.
6. **Oil on water.** One flip, like the soap film. Read the **Brightest** and **Darkest reflected wavelengths**, then set n₂ to 1.52 (oil on glass) and compare (Q4).

## Questions

**Q1.** Predict: a soap film (n = 1.33) in air drains until it is far thinner than the wavelength of light. Does it reflect strongly, weakly, or not at all? Why? Check with **Black film**.

**Q2.** In **Two reflections** a soap film (n = 1.33) 335 nm thick in air is lit at 30°. Find the angle θ_t in the film, the extra path 2n_f t cos θ_t, and its value in wavelengths for λ₀ = 550 nm. Are the two reflections in step or opposite? Which visible wavelength is reflected most weakly? Check with the readouts.

**Q3.** A lens maker coats glass (n = 1.52) with MgF₂ (n = 1.38) to reduce reflection at 550 nm at normal incidence. Find the thinnest coating that works, and R at 550 nm using the formula in the rail. Compare with bare glass. What coating index would cancel the reflection completely? Where does the light that is no longer reflected go?

**Q4.** An oil film (n = 1.47) 300 nm thick floats on water (n = 1.33). Which visible wavelengths does it reflect most and least strongly at normal incidence? The same film is now spread on glass (n = 1.52). Explain why the answer changes, and find the new wavelengths. Check both with **Oil on water** and the n₂ slider.

**Q5.** Two glass slides 50 mm long touch at one end and are held apart by a 10 µm spacer at the other. In 589 nm light, how far apart are the dark fringes, and how many are there across the slides? Why is the line of contact dark? What happens to the fringe spacing if the gap is filled with water (n = 1.33)? Check with **Air wedge fringes** and the n_f slider.

**Q6.** Explain why Newton's rings get closer together farther from the center, while the fringes of an air wedge are evenly spaced. For a lens with R = 1.0 m on flat glass in 589 nm light, find the radii of the first three dark rings around the dark center.

## Common misconceptions

- **"The colors come from dispersion, like a prism."** The demo uses the same index at every wavelength and the colors still appear. They come from the path difference, which is a different number of wavelengths for each color.
- **"Every reflection flips the wave."** Only reflection from a medium of higher index does (at normal incidence). Whether one, two or no surfaces flip decides which thicknesses are bright.
- **"A film much thinner than λ has no effect."** With one flip it cancels its own reflection and looks black. With two flips (a thin coating on glass) its reflections add, and the surface reflects like bare glass.
- **"An anti reflection coating absorbs the reflected light."** Nothing is absorbed: R + T = 1. T rises from 95.7% to 98.7% at 550 nm.

## Physics behind the demo

- R is the exact single layer (Airy) result, r = (r₁₂ + r₂₃e^(2iβ))/(1 + r₁₂r₂₃e^(2iβ)) with β = 2πn_f t cos θ_t/λ, summing all reflections inside the film. r₁₂ and r₂₃ are Fresnel coefficients for s or p light; unpolarized light averages the two. **First two only** keeps r₁₂ + (1 − r₁₂²)r₂₃e^(2iβ), which is very close when each surface reflects only a few percent.
- The half cycle rule is exact at normal incidence; at other angles the demo uses the full coefficients (for p light they change sign at Brewster's angle).
- No dispersion and no absorption. Colors: the reflectance spectrum times the D65 illuminant, converted to sRGB with the CIE 1931 color matching functions.
- Soap film: t = t_top + (t_bottom − t_top)(y/h)^p, thinning when playing. Wedge: t = xh/L. Newton's rings: t = R − √(R² − r²) ≈ r²/2R.

## Going further

- Lab: make an air wedge from two microscope slides and a strip of paper or a hair, count the fringes in sodium or laser light, and find the spacer's thickness.
