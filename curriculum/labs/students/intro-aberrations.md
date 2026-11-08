# Fixing a Blurry Telescope: Aberrations and Seeing
Student worksheet · Astro 2203

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/telescope-aberrations.html?setup=sphere&ws=intro-aberrations)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Through moving air; Perfect telescope; Out of focus; Spherical mirror; Star off center: coma; Pinched mirror: astigmatism; Single lens: color; Achromatic lens; Hubble in 1990; Hubble fixed (1993); Adaptive optics; Mystery telescope. This worksheet opens on Spherical mirror.

**Using the demo.**

- The left side of the picture shows the telescope from the side, with the light from a distant star going through it to the camera. The right side shows the star as the camera records it, worked out from the way light waves add up (diffraction), not drawn by hand. The graph under the picture shows the brightness along a line through the star, with a perfect telescope of the same size for comparison.
- The telescope can be a mirror, a lens or the Hubble Space Telescope. Its diameter, its focal ratio, the shape of the mirror, the camera's focus, the star's place in the view, a mask over the edge of the aperture, the color filter and the air above the telescope can all be changed.
- Angles on the sky are in seconds of arc (″): one degree holds 3600″. The Moon is about 1800″ across.
- The readouts give the **Strehl ratio** (the peak brightness of the star compared with a perfect telescope of the same size: 1 is perfect), the **half light diameter** (the width of the circle that holds half of the star's light) and the limit 1.22 λ/D of a perfect telescope. Blind hides the limit and the predictions.
- Mystery telescope hides the cause of the blur. Pick the cause you think it is, check it, then fix it. New mystery makes another one.
- Record reading stores the setup, the focus, the filter, the air and the readouts. Export to worksheet sends the readings to the Data tables below (each part goes to its own table); Clear starts a new series, which goes into a new copy of the table.
- All data are simulated.

</details>

## Goal

Find out the main ways a telescope can blur a star, what causes each one, how to tell them apart, and how astronomers fix them.

## Background

**A perfect telescope.** Even a perfect telescope cannot focus a star to a point. Light spreads (diffraction), so the star becomes a small disk with faint rings, about 1.22 λ/D across in radians, where λ is the wavelength and D the diameter of the mirror or lens. To turn radians into seconds of arc, multiply by 206,265.

**Aberrations.** A real telescope also has to bring all the light from the star to one point. When the mirror or lens has the wrong shape, or the star is in the wrong place, light from different parts of the mirror arrives at slightly different places: the star is blurred more than a perfect telescope would blur it. Each kind of blur is called an **aberration**, and each leaves its own clue:

- **Out of focus:** the camera is in front of or behind the focus. Clue: the star is a ring with a dark center. Fix: move the camera.
- **Spherical aberration:** a spherical mirror focuses light from its edge closer than light from its center. Clue: no focus is sharp, the star looks different inside and outside the focus, and masking the edge helps. Fix: make the mirror a parabola.
- **Coma:** a fast mirror seen away from the center of its view. Clue: a comet shaped star, worse farther from the center. Fix: keep the star near the center, or add a corrector lens.
- **Astigmatism:** a mirror squeezed out of round. Clue: a line one way inside the focus and the other way outside it. Fix: loosen the clamps.
- **Color (chromatic aberration):** glass bends blue light more than red. Clue: a colored blur, while each color alone is sharp at its own focus. Fix: an achromat, two glasses together.
- **Seeing:** moving air in front of the telescope. Clue: the star breaks into moving speckles. Fix: adaptive optics, or go to space.

**Strehl ratio.** Astronomers measure how good a telescope's image is by comparing its peak brightness with that of a perfect telescope: the Strehl ratio. A Strehl ratio of 0.8 or more counts as **diffraction limited**: the telescope is about as sharp as its size allows.

**Moving air.** Air at different temperatures bends light by different amounts. On a typical night, the air in front of the telescope stays smooth only over patches about 10 cm across; this size is called r₀. Light gets bigger patches: r₀ grows with the wavelength, so infrared light is blurred much less than visible light.

## Before the lab

1. Using 1.22 λ/D, what is the size of a perfect 200 mm (0.200 m) telescope's star image in green light (550 nm = 0.000 000 550 m), in seconds of arc?
2. Spherical aberration gets weaker as a mirror is made "slower" (a larger focal ratio N, so the mirror is longer for its width). For mirrors of f/8 and slower, the wavefront error grows as 1/N³ (faster mirrors pick up extra, higher order error). How many times bigger is it at f/8 than at f/12?
3. Predict: if the blur comes from the air and not from the telescope, would a bigger telescope give a smaller star image?

## Safety

No hazards in the virtual lab.

## Procedure

**Part 1. Mirror shape.** With the spherical mirror at f/6, move the camera's focus until the star is as sharp as it gets (the highest Strehl ratio), and record a reading. Do the same at f/8 and f/12. Then make the f/6 mirror a parabola, put the camera back at the focus (0 mm) and record a reading. Finally record a reading of Hubble in 1990 and of Hubble fixed (1993). Send the readings to the worksheet, then clear them.

**Part 2. Coma.** Choose the star off center (f/4). With the camera at the focus, record a reading with the star 0′, 5′, 10′, 15′ and 20′ from the center of the view. Send the readings to the worksheet, then clear them. Then add the coma corrector, record one more reading at 20′, send it (it goes into a new copy of the table) and clear it.

**Part 3. Color.** Choose the single lens (60 mm, f/15, focal length 900 mm). For blue light (486 nm), find the best focus and record a reading; do the same for yellow (588 nm) and red (656 nm) light. Repeat the three colors with the achromatic lens. Send the readings to the worksheet, then clear them.

**Part 4. Moving air.** Choose the 1.0 m telescope through moving air. Take a snapshot and record it, then let the air move and watch for a few seconds. Take a long exposure and record it; then take a long exposure in infrared light (2.2 µm) and record that. Next choose the 3.5 m telescope with adaptive optics: record a long exposure with adaptive optics off and one with it at its highest setting, then switch to green light (550 nm) with adaptive optics still on and record one more. Send the readings to the worksheet.

**Part 5. Mystery telescopes.** Solve two mystery telescopes. For each, test it, name the cause, apply the fix and bring the star back to where it started, with the whole aperture and the starting filter. The demo says when it is solved: at a Strehl ratio of 0.8, or less for the air and for color in white light, which even the best fixes cannot make perfect. Fill in the last table by hand.

## Data

| Reading | Telescope | Focal ratio N | Camera focus (mm) | Strehl ratio | Half light diameter (″) | Wavefront error (waves) |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |
| | | | | | | |

| Reading | Star's angle from the center (′) | Coma corrector | Strehl ratio | Half light diameter (″) |
|---|---|---|---|---|
| | | | | |
| | | | | |
| | | | | |

Make a graph of the half light diameter (up) against the star's angle from the center (across), using the readings without the corrector.

| Reading | Telescope | Wavelength λ (nm) | Best camera focus (mm) | Strehl ratio | Half light diameter (″) |
|---|---|---|---|---|---|
| | | | | | |
| | | | | | |
| | | | | | |

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

1. Part 1: which of the four mirrors are diffraction limited (Strehl ratio 0.8 or more)? How slow (what focal ratio) must a spherical mirror of this size be to give a sharp star, and what does a parabola let a telescope maker do instead?
2. Divide the wavefront error at f/8 by the one at f/12, and compare with your answer to Before the lab 2.
3. Compare Hubble's Strehl ratio in 1990 with that after the 1993 repair. Its mirror was about 2.2 µm (0.0022 mm) too flat at the edge. Explain, using your results for the spherical mirror, why no focus setting could make Hubble's 1990 images sharp.
4. Part 2: is your graph close to a straight line? Use it to predict the half light diameter for a star 30′ from the center, then check your prediction in the demo. By how many times did the corrector shrink the half light diameter at 20′?
5. Part 3: for the single lens, subtract the best focus for blue light from the best focus for red light. A lens's colors spread over about f ÷ V, where f is the focal length and V the glass's Abbe number (64.2 for this crown glass). Compare your gap with 900 mm ÷ 64.2. How big is the gap for the achromat?
6. Part 4: divide the long exposure half light diameter in green light by 1.22 λ/D for the 1.0 m telescope. How many times worse than a perfect telescope does the air make it? The seeing disk is about λ ÷ r₀ across; with r₀ = 0.112 m at 550 nm, work out λ ÷ r₀ in seconds of arc and compare it with your reading.
7. Compare the Strehl ratios with adaptive optics off and on in infrared light, and with it on in green light. Why does adaptive optics work so much better in the infrared?

## Uncertainty

You found each best focus by eye from the Strehl ratio. For the single lens in red light, how far (in mm) can you move the camera from your best focus before the Strehl ratio drops by 0.05? Use that as the uncertainty of each best focus, and say whether your blue to red gap in Analysis 5 agrees with 900 mm ÷ 64.2 within it. In Part 4, let the air move between three more snapshots of the 1.0 m telescope in green light and write down each half light diameter. How much do they change from moment to moment? Why is the long exposure a steadier measure of the seeing than any one snapshot?

## Questions

1. Large research telescopes are fast (f/1 to f/2) parabolas. What problem do they then have away from the center of the view, and how do they deal with it?
2. Why are almost all large research telescopes mirrors rather than lenses? Give two reasons from this lab.
3. Hubble's mistake was found only after launch. Describe a test, like the ones you used on the mystery telescopes, that would have shown the problem on the ground.
4. With adaptive optics, a large telescope on a mountain can be sharper than Hubble in infrared light. Using your results, explain why space telescopes are still worth building.

## What to hand in

Prelab answers, the five tables and the graph, the answers to the analysis and uncertainty sections, and answers to the questions. Identify simulated data.
