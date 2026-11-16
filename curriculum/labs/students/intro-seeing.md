# Seeing and Adaptive Optics
Student worksheet · Astro 2203

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/telescope-aberrations.html?setup=seeing&ws=intro-seeing)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Through moving air; Perfect telescope; Out of focus; Spherical mirror; Star off center: coma; Pinched mirror: astigmatism; Single lens: color; Achromatic lens; Hubble in 1990; Hubble fixed (1993); Adaptive optics; Mystery telescope. This worksheet opens on Through moving air.

**Using the demo.**

- The left side of the picture shows the telescope from the side, with the light from a distant star going through it to the camera. The right side shows the star as the camera records it, worked out from the way light waves add up (diffraction), not drawn by hand. The graph under the picture shows the brightness along a line through the star, with a perfect telescope of the same size for comparison.
- The telescope can be a mirror, a lens or the Hubble Space Telescope. Its diameter, its focal ratio, the shape of the mirror, the camera's focus, the star's place in the view, a mask over the edge of the aperture, the color filter and the air above the telescope can all be changed.
- Angles on the sky are in seconds of arc (″): one degree holds 3600″. The Moon is about 1800″ across.
- The readouts give the **Strehl ratio** (the peak brightness of the star compared with a perfect telescope of the same size: 1 is perfect), the **half light diameter** (the width of the circle that holds half of the star's light) and the limit 1.22 λ/D of a perfect telescope. Blind hides the limit and the predictions.
- A snapshot freezes the air for 1 ms; a long exposure adds up many moments of moving air, as a real exposure of seconds or minutes does. Adaptive optics measures the light's wavefront and bends a thin mirror to cancel the air's blur.
- Mystery telescope hides the cause of the blur. Pick the cause you think it is, check it, then fix it. New mystery makes another one.
- Record reading stores the setup, the focus, the filter, the air and the readouts. Export to worksheet sends the readings to the Data table below; Clear starts a new series, which goes into a new copy of the table.
- All data are simulated.

</details>

## Goal

Find out how moving air blurs a star, why adaptive optics fixes it best in infrared light, and how to tell the main causes of a blurry star apart and fix them.

## Background

**A perfect telescope.** Even a perfect telescope cannot focus a star to a point. Light spreads (diffraction), so the star becomes a small disk with faint rings, about 1.22 λ/D across in radians, where λ is the wavelength and D the diameter of the mirror or lens. To turn radians into seconds of arc, multiply by 206,265.

**Strehl ratio.** Astronomers measure how good a telescope's image is by comparing its peak brightness with that of a perfect telescope: the Strehl ratio. A Strehl ratio of 0.8 or more counts as **diffraction limited**: the telescope is about as sharp as its size allows.

**Moving air (seeing).** Air at different temperatures bends light by different amounts. On a typical night, the air in front of the telescope stays smooth only over patches about 10 cm across; this size is called r₀. In a very short exposure the star breaks into speckles that jump about; in a long exposure they blur into one seeing disk about λ ÷ r₀ across (in radians), whatever the size of the telescope. Light gets bigger patches: r₀ grows with the wavelength, so infrared light is blurred much less than visible light. **Adaptive optics** measures the wavefront many times a second and bends a thin mirror to cancel the air's blur; it can follow only a limited number of shapes.

**Other causes of blur.** A telescope's own optics can also blur a star. Each cause leaves its own clue:

- **Out of focus:** the camera is in front of or behind the focus. Clue: the star is a ring with a dark center. Fix: move the camera.
- **Spherical aberration:** a spherical mirror focuses light from its edge closer than light from its center. Clue: no focus is sharp, the star looks different inside and outside the focus, and masking the edge helps. Fix: make the mirror a parabola.
- **Coma:** a fast mirror seen away from the center of its view. Clue: a comet shaped star, worse farther from the center. Fix: keep the star near the center, or add a corrector lens.
- **Astigmatism:** a mirror squeezed out of round. Clue: a line one way inside the focus and the other way outside it. Fix: loosen the clamps.
- **Color (chromatic aberration):** glass bends blue light more than red. Clue: a colored blur, while each color alone is sharp at its own focus. Fix: an achromat, two glasses together.
- **Seeing:** moving air in front of the telescope. Clue: the star breaks into moving speckles. Fix: adaptive optics, or go to space.

## Before the lab

1. Using 1.22 λ/D, what is the size of a perfect 200 mm (0.200 m) telescope's star image in green light (550 nm = 0.000 000 550 m), in seconds of arc?
2. Predict: if the blur comes from the air and not from the telescope, would a bigger telescope give a smaller star image? Through the same moving air you swap a 1.0 m telescope for a 4.0 m one: will its long exposure star image (the half light diameter) be about 4 times smaller, about 2 times smaller, or about the same size? Give your reasoning.

## Safety

No hazards in the virtual lab.

## Procedure

After each change, wait for the picture to finish before you read the Strehl ratio.

**Part 1. Moving air.** The demo opens on Through moving air: a 1.0 m telescope, in green light (Green, 550 nm). With Exposure on Snapshot (1 ms), record a reading. Press Let the air move and watch for about ten seconds. Press Exposure: Long exposure, wait for it to finish and record a reading; then set Filter on the camera to Infrared, 2.2 µm (K band), take a long exposure and record that. Next choose Adaptive optics: a 3.5 m telescope in infrared light, long exposure, with Adaptive optics on High order (65 shapes). Set Adaptive optics to Off and record a reading, then set it to High order (65 shapes) and record one. Then set Filter on the camera to Green, 550 nm, with adaptive optics still on High order, and record one more. Export the six readings to the worksheet. Last, choose Through moving air again, press Exposure: Long exposure, then drag the Aperture diameter D slider to its end, 4.00 m. When the exposure finishes, read the Half light diameter and the Diffraction limit 1.22 λ/D readouts (no need to record a reading). Write them in your answer to Question 2, beside your 1.0 m long exposure in green light from the table.

**Part 2. Mystery telescopes.** Solve two mystery telescopes. For each, choose Mystery telescope (or press New mystery for the second), test it (Camera focus, the Aperture mask, the filter, Star test: in and out of focus), pick your answer under What causes the blur? and press Check my answer, then press the button for the fix and bring the star back to where it started, with the whole aperture (mask at 100%) and the starting filter. To find the best focus, drag the Camera focus slider near the sharpest picture, then use the arrow keys and keep the setting with the highest Strehl ratio. The demo says Solved when it is fixed: at a Strehl ratio of 0.8, or less for the air and for color in white light, which even the best fixes cannot make perfect. Fill in the last table by hand.

## Data

| Reading | Diameter D (mm) | Filter | Adaptive optics | Exposure | Strehl ratio | Half light diameter (″) | 1.22 λ/D (″) |
|---|---|---|---|---|---|---|---|
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |

| Mystery | What the star looked like | Tests that changed it | Cause | Fix | Strehl ratio after the fix |
|---|---|---|---|---|---|
| 1 | | | | | |
| 2 | | | | | |

## Analysis

1. Part 1: divide the long exposure half light diameter in green light by 1.22 λ/D for the 1.0 m telescope. How many times worse than a perfect telescope does the air make it? The seeing disk is about λ ÷ r₀ across; with r₀ = 0.112 m at 550 nm, work out λ ÷ r₀ in seconds of arc and compare it with your reading.
2. Compare the Strehl ratios with adaptive optics off and on in infrared light, and with it on in green light. Why does adaptive optics work so much better in the infrared?

## Uncertainty

In Part 1, let the air move between three more snapshots of the 1.0 m telescope in green light and write down each half light diameter. How much do they change from moment to moment? Why is the long exposure a steadier measure of the seeing than any one snapshot?

## Questions

1. With adaptive optics, a large telescope on a mountain can be sharper than Hubble in infrared light. Using your results, explain why space telescopes are still worth building.
2. Through the same air in green light, how did the 4.00 m telescope's long exposure compare with the 1.0 m one, in half light diameter and in 1.22 λ/D? Was your prediction in Before the lab 2 right? Use the seeing disk, λ ÷ r₀, and the 1.22 λ/D readout to explain what you saw.

## What to hand in

Prelab answers, the two tables, the answers to the analysis and uncertainty sections, and answers to the questions. Identify simulated data.
