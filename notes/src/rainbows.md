---
title: Rainbows
level: Intro optics (algebra based), Physics II and Astronomy
time: 15 to 25 minutes
---
## What students should come away with

- A rainbow is sunlight refracted into raindrops, reflected inside and refracted out again. Each drop sends light back over a range of angles, but the turning angle has a least value, and near it many rays leave at almost the same angle. That pile up of light is the bow.
- The primary bow is a circle of about 42° round the antisolar point, the point in the sky straight opposite the Sun (where the shadow of your head points). The secondary, from two reflections inside, is a circle of about 51°.
- Water bends violet more than red (dispersion), so each color has its own bow angle: the primary is red outside, the secondary red inside.
- Light with one reflection leaves only inside 42° and light with two only outside 51°, so the sky inside the primary is bright, and between the bows is Alexander's dark band.
- The bow's top stands 42° minus the Sun's height above the horizon: with the Sun higher than about 42° there is no primary bow from the ground.
- Every observer has their own rainbow: it is made by the drops on a cone round the line from the Sun through their own eye.

## Before class

Students should know Snell's law and that n depends on wavelength (OpenStax Vol 3 §1.5). Choose **One drop** or **The sky** at the top of the picture. In One drop the card sets the number of reflections inside (1 to 4), where the ray enters (b, its distance from the center line as a fraction of the radius), the wavelength or White light, Many parallel rays, and Light leaving at each surface; below the drop is the deviation D against the angle of incidence. **Sweep the ray** moves b from 0 to 1. In The sky the card sets the Sun's height; **3D** shows you, the Sun and a curtain of rain, with **Walk sideways**; **Lower the sun** brings the Sun down. **Blind** in **Lab** hides the bow angles.

## Running it in class

1. **One ray, one reflection.** Ask which way the ray will leave (Q1), then press Sweep the ray and watch the dot on the graph.
2. **The rainbow ray.** Read the least deviation and the angle from the antisolar point (Q2). Turn on Light leaving at each surface and read how much light the observer gets.
3. **Many rays: where they pile up.** Count the rays that leave near 42° (Q3).
4. **White light splits.** Read the bow angles at 400 and 700 nm (Q4).
5. **Two reflections: secondary bow.** Compare the order of colors (Q5); try three reflections for the bow round the Sun.
6. **Evening shower, Sun at 10°**, then press Lower the sun; then **Sun higher than 42°** (Q6).
7. **Alexander's dark band.** Read the brightness graph under the sky (Q7).
8. **Your own cone of drops (3D).** Turn the view, then walk sideways (Q8).

## Questions

**Q1.** Sunlight enters a drop halfway between its center line and its edge (b = 0.5) and reflects once inside. Predict roughly where it leaves and in which direction. Then read the deviation D and the angle θ from the antisolar point.

**Q2.** Sweep b from 0 to 1 with one reflection at 589 nm. What happens to D? Read the least value of D and the angle of incidence where it happens, and check it against cos² i = (n² − 1)/3 with n = 1.3334.

**Q3.** With twenty evenly spaced red rays, how many leave within about 3° of the bow angle, and how many spread over the other 40°? Why does that make a bright ring rather than an evenly lit disk?

**Q4.** Read the primary bow angle at 400 nm and at 700 nm. Which color is on the outside of the bow, and why? How wide is the band of colors?

**Q5.** With two reflections, read the bow angles at 400 and 700 nm. In what order are the colors now? Why is the secondary bow fainter?

**Q6.** With the Sun 10° up, how high above the horizon is the top of the primary bow? At what Sun height does the primary bow disappear for someone on the ground, and why are rainbows rare at noon in summer?

**Q7.** Using the brightness graph, describe the brightness of the rain from the antisolar point out to 70°. Why is the band between 42° and 51° dark?

**Q8.** In 3D, walk 10 m sideways. Which drops light up now? Two friends standing side by side look at "the same" rainbow: are they seeing light from the same drops?

## Common misconceptions

- **"The rainbow is in a fixed place in the sky, and you could reach its end."** It is a set of directions from your eye, 42° from your antisolar point; it moves as you move.
- **"Each drop shows all the colors of the bow."** Each drop sends one color to your eye; the drops higher on the bow send red, lower ones violet.
- **"The rainbow comes from light reflected off the front of the drops."** The bow light goes into the drop, reflects off the back and comes out again; light reflected off the outside spreads evenly and makes no bow.
- **"The secondary bow is a reflection of the primary."** It is light that reflected twice inside the drops, a separate bow with its own angle.
- **"The sky is equally bright inside and outside the bow."** It is brighter inside the primary and darkest between the bows.

## Physics behind the demo

- Water at 20 °C from the Sellmeier formula of Daimon and Masumura (2007), as in the Optics Bench: n = 1.3334 at 589 nm, 1.3436 at 400 nm, 1.3305 at 700 nm.
- A ray at impact parameter b meets the drop at i with sin i = b, refracts by Snell's law, reflects k times and leaves turned by D = 2(i − r) + k(180° − 2r). The least deviation (Descartes 1637) is where cos² i = (n² − 1)/(k² + 2k): 137.97° at 589 nm for one reflection (bow at 42.03°), 230.98° for two (50.98°).
- The share of light on each ray is (1 − R)² Rᵏ from the Fresnel equations for each polarization (R is the same at every surface of the ray); the rainbow ray carries 4.6% of the light that hit the drop there, and is over 90% polarized across the plane of the ray.
- The sky's brightness is a ray trace: 12 000 rays per wavelength over an evenly lit drop, 400 to 700 nm every 5 nm, outside reflection plus one and two reflections, per unit solid angle, averaged over the Sun's 0.53° disk. Sunlight is a 5772 K blackbody; colors from the CIE 1931 functions in sRGB, desaturated where the screen cannot show them.
- Left out (stated on the page): diffraction (Airy theory: supernumerary bows, a slightly wider bow), flattened large drops, light scattered twice, the sky's own light. The sky picture is an azimuth and elevation map. In 3D the drops are drawn far larger than life.
- Tests (curriculum/validation/test_rainbows.cjs): water's index, the path against an independent vector trace, the least deviation against a brute force search, the bow angles and order of colors, Fresnel shares summing to 1, energy in the sky profile, the dark band, and the sky geometry.

## Going further

- The Optics Bench refracts white light through a prism of water or glass: the same dispersion, at minimum deviation too.
- Color Vision explains why the overlapping colors inside the bow look white and why the screen cannot show the purest spectral colors.
- Polarization: look at a real rainbow through polarizing sunglasses and turn them; the bow nearly vanishes.
