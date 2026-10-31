---
title: Color Vision
level: Intro optics (algebra based)
time: 15 to 25 minutes
---
## What students should come away with

- The eye has three kinds of cones (L, M and S), each sensitive to a broad band of wavelengths. The color we see is set by the three cone signals, nothing more.
- Lights add: red and green lamps together excite L and M and look yellow, although no yellow wavelength is present. All three lamps at full excite the three cones equally and look white.
- Two lights with different spectra but the same three cone signals look identical (metamers). This is why a screen with three colors can show most colors.
- No mix of three real lamps reaches the purest spectral colors: some would need a negative amount of one lamp.
- A filter only removes light. A red filter on a white bulb passes the red part and absorbs the rest; it never turns other light into red.
- The eye is far more sensitive near 555 nm than at the ends of the spectrum.
- Paints subtract: each pigment absorbs part of the spectrum, so cyan and yellow paint leave only green. A surface's color is the light falling on it times its reflectance, so the same costume looks different under different lamps.
- Each lamp throws its own shadow. In the shadow of one colored lamp the others still arrive, so shadows of red, green and blue lamps are cyan, magenta and yellow.

## Before class

Students should know that white light contains all visible wavelengths. Choose **Three lamps**, **One wavelength**, **Bulb and filter**, **Paints** or **Stage lights** at the top of the picture, and **Beams** or **Photons**. The card sets the lamp powers, the wavelength and its power, or the bulb and the filter. Under the room are the spectrum reaching the eye with the three cone sensitivities, and the three cone signals (white = 1). In One wavelength, **Mix it from the three lamps** finds the lamp powers that give the same cone signals. In Paints the card sets the parts of cyan, magenta, yellow and white paint and the light on the board; in Stage lights it sets the three footlights, the costume, the backdrop and where the performer stands, and a tap on the stage moves the ring the eye looks at. **Blind** in **Lab** hides the color seen.

## Running it in class

1. **Red + green + blue.** Ask what the person sees (Q1), then turn the blue lamp off.
2. **Red + blue** and **Green + blue.** Read the cone signals for each mix.
3. **Pure yellow, 580 nm.** Compare its spectrum and cone signals with red + green, then press Mix it from the three lamps (Q2).
4. **Pure cyan, 490 nm.** Press Mix it again (Q3).
5. One wavelength at 100% power: move it from 450 to 555 to 650 nm (Q4).
6. **Red filter on a bulb** and **Green filter, photons** (Q5, Q6).
7. **Colored filters on any light.** Put a yellow filter and a cyan filter on a white bulb, one after the other: each passes its own band and only green gets through both. Then **Red and green filters stacked**: no wavelength passes both, so the screen goes dark. Filters subtract; lamps add (ideal filters with edges at 500 and 600 nm, stated in the Model).
8. **Cyan + yellow paint**, then **All three paints** (Q7). Compare with **Green + blue**: lamps add, paints subtract.
9. **Colored shadows.** Ask for the color of each shadow before tapping on it (Q8), then **Performer near the lamps** and **Red costume, green light**.

## Questions

**Q1.** All three lamps at 100% look white. Predict what the person sees with only red and green, and read the three cone signals. Why does the result look yellow when the lamps give out no light near 580 nm?

**Q2.** Compare the 580 nm light (60% power) with the lamp mix that matches it. Read the cone signals of each. Why do the two look the same? What does a camera or a screen exploit here?

**Q3.** Ask for a lamp mix that matches 490 nm. What goes wrong, and why can a screen not show this color exactly?

**Q4.** Set one wavelength at 100% power and read the brightness Y at 450 nm, 555 nm and 650 nm. Which looks brightest, and by about what factor? What does this tell you about the eye?

**Q5.** Put the red filter (600 to 700 nm) in front of the incandescent bulb. What fraction of the bulb's brightness gets through? Switch to Daylight: why does less of the brightness get through?

**Q6.** With the green filter (500 to 560 nm) on daylight, watch the photons. About what fraction of the photons from the bulb pass the filter? What happens to the others?

**Q7.** Mix one part cyan paint with one part yellow. Read the reflectance at 450, 550 and 650 nm and the cone signals: what color is the mix, and why? Now add one part magenta. Why is the result a dark gray rather than black?

**Q8.** In Colored shadows, predict the color of each lamp's shadow on the white backdrop, then tap on them to check. What do you see where two shadows overlap, and where all three do? Move the performer to 3 m from the backdrop: how large are the shadows now, and why?

## Common misconceptions

- **"Red and green paint make brown, so red and green light must too."** Lights add; paints and filters subtract.
- **"Yellow light must contain yellow wavelengths."** Red plus green light looks just as yellow.
- **"A red filter colors the light red."** It removes everything but the red.
- **"Each cone sees one color."** Each cone type responds to a broad band; the cones overlap heavily, which is why L and M respond together to most light.
- **"A shadow is always black."** Only the light of the blocked lamp is missing; the other lamps still light the spot.
- **"A red shirt is red in any light."** It reflects red light; in green light there is no red to reflect, and it looks nearly black.
- **"A screen can show every color."** No three primaries cover the spectral colors.

## Physics behind the demo

- Each cone signal is ∫S(λ) times its sensitivity over 380 to 780 nm in 1 nm steps. The sensitivities are the CIE 1931 2° color matching functions (fit of Wyman, Sloan and Shirley 2013) through the Hunt–Pointer–Estevez matrix normalized to D65, so daylight white gives L = M = S = 1.
- The lamps are Gaussian spectra 20 nm wide at 630, 532 and 465 nm, with powers set so all three at full give D65 white exactly. One wavelength at 100% has the brightness of that white at 555 nm.
- Incandescent is a blackbody at 2856 K (CIE illuminant A); Daylight is CIE D65. The filter is an ideal band pass.
- The color shown is the light's sRGB color at its brightness; colors outside the screen's range are desaturated. Photons are drawn at random in proportion to their number (power times λ), at a rate slowed enormously.
- Paints are model pigments (not measured ones) that absorb whole thirds of the spectrum with smooth edges; a coat of mixed paint follows single constant Kubelka–Munk theory: K/S = (1 − R)²/2R for each paint, the mix has the K/S of the paints averaged by their parts. Gloss is left out.
- Stage lights: point lamps on the floor 4 m from the backdrop light it evenly; a performer d from the backdrop casts a shadow m = D/(D − d) times life size about each lamp (similar triangles). Costumes and backdrops use the same pigments; each spot's light is lamp × reflectance.
- Tests (curriculum/validation/test_color_vision.cjs): the white calibration, additivity, the brightness of single wavelengths, metamer matches and the negative red at 490 nm, the bulbs, the filters, the pigments and Kubelka–Munk mixing, the shadow geometry, and colored shadows and costumes.

## Going further

- The Eye forms the image these cones receive.
- Blackbody Radiation and the Spectra Explorer give the color of hot objects and glowing gases from the same color matching functions.
