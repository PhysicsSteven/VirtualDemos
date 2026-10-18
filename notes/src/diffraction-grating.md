---
title: Diffraction Grating
level: PHYS 202 (optics lab); intro astronomy (spectra)
time: 15 to 30 minutes
---
## What students should come away with

- Light from neighboring slits adds up in step only where the path difference is a whole number of wavelengths: d sin θ = mλ. The bright orders are sharp because hundreds of slits must all agree.
- The angle depends on λ/d. Longer wavelengths bend more, so a grating spreads white light into a spectrum in each order, red farthest out (the opposite order of colors from a prism).
- A finer grating (more lines per mm, smaller d) spreads the orders wider and allows fewer of them; an order exists only if mλ/d ≤ 1.
- Measuring the spot position y at distance L gives θ = arctan(y/L) and then λ = d sin θ/m. The shortcut λ ≈ dy/(mL) fails at the angles a real grating gives.
- A gas lamp's lines repeat in every order, which is how a spectrograph identifies elements in a lamp or a star.

## Before class

Students should know wave superposition and path difference (the double slit). 600 lines/mm means d = 1.667 µm. In **Measure** mode the **Orders** table is hidden so students can find the wavelength themselves. On the bench students can drag the grating to change L, turn its knob to rotate it, and drag the caliper jaws on the wall; the arrow keys move the selected jaw by 1 mm (A and B choose the jaw).

## Running it in class

1. **Red laser through 600 lines/mm.** Spots at m = 0, ±1 and ±2 on the wall; the **Orders** table gives 22.3° and 49.4°. Ask Q1, then press the **1000** grating button. Point out that y = L tan θ, so the second order at 49.4° lands far out (116.7 cm at L = 1 m).
2. **Measure the wavelength.** A laser of unknown color, L = 0.80 m. Students put jaw A on the m = 0 spot and jaw B on m = 1, press **Use bench values**, then **Compute and check**. The result shows the exact and small angle values side by side. Q2.
3. **Green, red and blue together.** One beam, three spots in each order, red farthest out; only blue reaches a third order. Ask Q3.
4. **White light rainbows and overlapping orders.** At 300 lines/mm each order is a spectrum with violet inside and the center stays white. The second and third orders overlap. Q4.
5. **Hydrogen lamp spectrum.** The four Balmer lines repeat in every order. Use the wavelength chips above the **Orders** table to read each line's position. For astronomy, this is the pattern a spectrograph records from a star or nebula. Try the **Na** lamp for Q6.
6. **CD as a grating.** The track pitch of a CD acts as a 625 lines/mm grating; press **DVD** to compare. Q7. If time allows, set **Illuminated slits N** to 5 and choose **0 to 1st order** on the plot: between orders there are N − 1 zeros and N − 2 small maxima, and the orders sharpen as N grows.

## Questions

**Q1.** Predict: the red He-Ne laser (632.8 nm) shines through 600 lines/mm and makes spots up to m = ±2. You swap in a 1000 lines/mm grating. Do the first order spots move in or out? How many orders will you see now?

**Q2.** In **Measure** with 600 lines/mm and L = 0.80 m, the caliper reads B − A = 26.9 cm from the m = 0 spot to m = 1. Find λ with the exact relations tan θ = y/L and d sin θ = mλ, and with the small angle form λ ≈ dy/(mL). Which laser is it, and how large is the small angle error? How could you halve the effect of a 1 mm error in placing the jaws?

**Q3.** A prism bends blue light more than red, but a grating bends red more than blue. Explain why the grating does this, using the path difference between neighboring slits.

**Q4.** White light (400 to 700 nm) falls on a 300 lines/mm grating. Show that the first order spectrum does not overlap the second, but the second overlaps the third. Which wavelength in the third order lands at the same angle as 700 nm in the second order? Check with the demo.

**Q5.** The hydrogen lamp shines through 600 lines/mm with L = 0.60 m. Where on the wall (y) are the first order Hα (656.3 nm) and Hβ (486.1 nm) lines? Is there a third order for either line? Check with the **Orders** table.

**Q6.** The sodium D lines are at 589.0 and 589.6 nm. A grating separates two lines when the resolving power mN is at least λ/Δλ. How many illuminated slits are needed in first order? On a 600 lines/mm grating the 1 mm beam lights 600 slits: will the lines separate in first order, in second order? Choose the **Na** lamp and its 589 nm chip, set **Illuminated slits N**, and check the note under the **Orders** table.

**Q7.** A 650 nm laser reflected from a CD gives first order spots at 24.0° from the straight through beam. Find the track pitch d. A DVD has d = 0.74 µm. At what angle is its first order, and why does it have no second order?

## Common misconceptions

- **"More lines per mm gives more orders."** It gives fewer: d is smaller, so mλ/d reaches 1 at a smaller m. The orders that remain are spread wider.
- **"A grating sorts colors like a prism."** A prism bends violet most, through dispersion in glass; a grating bends red most, through interference, d sin θ = mλ.
- **"λ = dy/(mL) is the grating formula."** That is the small angle form of the double slit. For a grating, θ is often 15° to 50°: tan θ is 8% larger than sin θ at 22° and 56% larger at 50°. The demo marks the small angle result good only within 1%.
- **"More slits move the spots."** The spot angles depend only on d and λ. More slits make each order narrower and brighter; they do not move it.

## Physics behind the demo

- Spot positions are exact: sin θₘ = sin θᵢ + mλ/d and yₘ = L tan θₘ on a flat wall square to the beam. Turning the grating sets θᵢ; the simple formulas apply only with the turn at 0°.
- The plot is the far field pattern of N slits of width a: I ∝ [sin(Nφ)/sin φ]² × [sin β/β]², with φ = πd(sin θ − sin θᵢ)/λ and β = πa(sin θ − sin θᵢ)/λ, scaled so the central peak is 1. Whole numbers of d/a make orders missing.
- On the wall each order carries power in proportion to the slit envelope; obliquity factors are left out. Spot widths include the beam width and diffraction spread but have a minimum size in pixels, so spot brightness is not to scale. Fine structure such as the 0.6 nm sodium doublet is far too small to see on the wall (about 0.4 mm at L = 1 m); the resolving power is reported in the note under the **Orders** table.
- Lamp light passes a slit and a lens to make a parallel beam. A real lamp is too faint to project; in lab you look through the grating. Lines are NIST air wavelengths on a log brightness scale; white light is CIE D65 from 400 to 700 nm.

## Going further

- In the lab, measure between the ±1 spots and halve, then repeat in second order. The **d from λ** button in **Measure** finds the spacing of an unlabeled grating from a known laser.
