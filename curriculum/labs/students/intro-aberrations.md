# Fixing a Blurry Telescope: Aberrations
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
- Mystery telescope hides the cause of the blur. Pick the cause you think it is, check it, then fix it. New mystery makes another one. The moving air, adaptive optics and the mystery telescopes are the subject of the worksheet Seeing and Adaptive Optics.
- Record reading stores the setup, the focus, the filter, the air and the readouts. Export to worksheet sends the readings to the Data tables below (each part goes to its own table); Clear starts a new series, which goes into a new copy of the table.
- All data are simulated.

</details>

## Goal

Find out the main ways a telescope's mirror or lens can blur a star, what causes each one, how to tell them apart, and how astronomers fix them.

## Background

**A perfect telescope.** Even a perfect telescope cannot focus a star to a point. Light spreads (diffraction), so the star becomes a small disk with faint rings, about 1.22 λ/D across in radians, where λ is the wavelength and D the diameter of the mirror or lens. To turn radians into seconds of arc, multiply by 206,265.

**Aberrations.** A real telescope also has to bring all the light from the star to one point. When the mirror or lens has the wrong shape, or the star is in the wrong place, light from different parts of the mirror arrives at slightly different places: the star is blurred more than a perfect telescope would blur it. Each kind of blur is called an **aberration**, and each leaves its own clue:

- **Out of focus:** the camera is in front of or behind the focus. Clue: the star is a ring with a dark center. Fix: move the camera.
- **Spherical aberration:** a spherical mirror focuses light from its edge closer than light from its center. Clue: no focus is sharp, the star looks different inside and outside the focus, and masking the edge helps. Fix: make the mirror a parabola.
- **Coma:** a fast mirror seen away from the center of its view. Clue: a comet shaped star, worse farther from the center. Fix: keep the star near the center, or add a corrector lens.
- **Astigmatism:** a mirror squeezed out of round. Clue: a line one way inside the focus and the other way outside it. Fix: loosen the clamps.
- **Color (chromatic aberration):** glass bends blue light more than red. Clue: a colored blur, while each color alone is sharp at its own focus. Fix: an achromat, two glasses together.

**Strehl ratio.** Astronomers measure how good a telescope's image is by comparing its peak brightness with that of a perfect telescope: the Strehl ratio. A Strehl ratio of 0.8 or more counts as **diffraction limited**: the telescope is about as sharp as its size allows.

**Moving air.** Even a perfect telescope is blurred by the moving air above it (seeing). That is the subject of the worksheet Seeing and Adaptive Optics; this one works with telescopes in space, where only the optics blur the star.

## Before the lab

1. Using 1.22 λ/D, what is the size of a perfect 200 mm (0.200 m) telescope's star image in green light (550 nm = 0.000 000 550 m), in seconds of arc?
2. Spherical aberration gets weaker as a mirror is made "slower" (a larger focal ratio N, so the mirror is longer for its width). For mirrors of f/8 and slower, the wavefront error at the sharpest focus grows as 1/N³ (for a faster mirror the sharpest focus is no longer the focus with the least error, so its reading comes out larger). How many times bigger is it at f/8 than at f/12?

## Safety

No hazards in the virtual lab.

## Procedure

After each change, wait for the picture to finish before you read the Strehl ratio. To find the best focus, drag the Camera focus slider near the sharpest picture, then use the arrow keys and keep the setting with the highest Strehl ratio.

**Part 1. Mirror shape.** The demo opens on Spherical mirror (200 mm, Focal ratio f/N at f/6). Find the best focus and record a reading. Do the same with Focal ratio f/N at f/8 and at f/12. Then set Focal ratio f/N back to f/6, press Mirror shape: Parabola, set Camera focus back to 0 mm and record a reading. Finally choose Hubble in 1990 and record a reading (it opens at its best focus), then Hubble fixed (1993) and record a reading. Export the six readings to the worksheet, then press Clear.

**Part 2. Coma.** Choose Star off center: coma (f/4). With Camera focus at 0 mm, record a reading with the slider Star's angle from the center of the view at 0′, 10′ and 20′. Export the three readings to the worksheet, then press Clear. Then tick Coma corrector lens in front of the camera, record one more reading at 20′, export it (it goes into a new copy of the table) and press Clear.

**Part 3. Color.** Choose Single lens: color (60 mm, f/15, focal length 900 mm). Set Filter on the camera to Blue, 486 nm (F line), find the best focus and record a reading; do the same with Red, 656 nm (C line). Then choose Achromatic lens and repeat the two colors. Export the four readings to the worksheet, then press Clear.

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

## Analysis

1. Part 1: which of the four mirrors are diffraction limited (Strehl ratio 0.8 or more)? How slow (what focal ratio) must a spherical mirror of this size be to give a sharp star, and what does a parabola let a telescope maker do instead?
2. Divide the wavefront error at f/8 by the one at f/12, and compare with your answer to Before the lab 2.
3. Compare Hubble's Strehl ratio in 1990 with that after the 1993 repair. Its mirror was about 2.2 µm (0.0022 mm) too flat at the edge. Explain, using your results for the spherical mirror, why no focus setting could make Hubble's 1990 images sharp.
4. Part 2: is your graph close to a straight line? Use it to predict the half light diameter for a star 30′ from the center. By how many times did the corrector shrink the half light diameter at 20′?
5. Part 3: for the single lens, subtract the best focus for blue light from the best focus for red light. A lens's colors spread over about f ÷ V, where f is the focal length and V the glass's Abbe number (64.2 for this crown glass). Compare your gap with 900 mm ÷ 64.2. How big is the gap for the achromat?

## Uncertainty

You found each best focus by eye from the Strehl ratio. For the single lens in red light, how far (in mm) can you move the camera from your best focus before the Strehl ratio drops by 0.05? Use that as the uncertainty of each best focus, and say whether your blue to red gap in Analysis 5 agrees with 900 mm ÷ 64.2 within it.

## Questions

1. Large research telescopes are fast (f/1 to f/2) parabolas. What problem do they then have away from the center of the view, and how do they deal with it?
2. Why are almost all large research telescopes mirrors rather than lenses? Give two reasons from this lab.
3. Hubble's mistake was found only after launch. Using the clues in the Background and your results for the spherical mirror, describe a test that would have shown the problem on the ground.

## What to hand in

Prelab answers, the three tables and the graph, the answers to the analysis and uncertainty sections, and answers to the questions. Identify simulated data.
