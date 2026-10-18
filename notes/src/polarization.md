---
title: Polarization
level: PHYS 202 (optics unit; EM waves)
time: 20 to 30 minutes
---
## What students should come away with

- Light is a transverse wave; its polarization is the direction (and pattern in time) of its electric field. An ideal polarizer passes the field component along its axis, E cos θ, so the intensity is I cos²θ (Malus's law). Unpolarized light loses exactly half at the first polarizer, whatever its angle.
- A polarizer does not only remove light: it resets the polarization to its own axis. That is why a third polarizer between crossed ones lets light through, and many small steps pass nearly all of it.
- A wave plate absorbs nothing; it delays one field component relative to the other. A quarter wave plate at 45° to linear light makes circular light; a half wave plate mirrors the polarization across its fast axis.
- Reflection polarizes light. At Brewster's angle, tan θ_B = n₂/n₁, the p component is not reflected at all, so glare from a level surface is horizontally polarized, and polarized sunglasses (vertical axis) block it.

## Before class

Students need light as a transverse electric field and components of a vector. Angles are measured from the vertical, counterclockwise as seen facing the oncoming beam; intensities are fractions of I₀. Click a disk to plot its transmission against its angle; drag it to turn it. **Reflection** switches to the Brewster view.

## Running it in class

1. **Malus's law.** Ask Q1 first. The readouts give 0.500 after the first polarizer and 0.293 after the second, at 40°. Drag the second disk: the dot runs along cos²θ.
2. **Crossed polarizers**, then ask Q2 before pressing **Three polarizer surprise**. The middle polarizer at 45° brings the output from 0 to 0.125. Remove it with its ×: dark again. **Add an element** puts a new polarizer after the last one (at −45°): still dark. Order matters.
3. **Many polarizers.** Move **Steps N** from 1 up to 30. More polarizers, more light: 0.660 at N = 6 and 0.921 at N = 30 (Q3).
4. **Quarter wave plate makes circular light.** The field tip after the plate traces a circle. Drag the last polarizer around: 0.500 at every angle. Then turn the plate away from 45° and the circle flattens into an ellipse (Q4).
5. **Half wave plate rotates polarization.** Vertical light leaves at 40° with no loss. Turn the plate by 10° and the output turns by 20° (Q5).
6. **Brewster's angle and glare.** In air to glass at θ_B = 56.31°, R_p = 0 and the reflected light is 100% s; the sunglasses block all of it. Drag the incoming ray off θ_B and glare comes back through the lenses (Q6). Try **Glass to air** and compare θ_B with θ_c.

## Questions

**Q1.** Predict: unpolarized light of intensity I₀ passes through two ideal polarizers whose axes are 40° apart. What fraction of I₀ gets through? Does the answer change if both polarizers are turned together by 30°? Check with **Malus's law**.

**Q2.** Predict: two crossed polarizers pass no light. A third polarizer, at 45°, is slipped in between them. Does light now get through, and if so what fraction of I₀ for unpolarized light? What if the 45° polarizer is put after the other two instead?

**Q3.** Vertically polarized light passes through polarizers at 30°, 60° and 90° in turn (N = 3). What fraction gets out? With N polarizers each turned a further 90°/N, explain why the total transmission climbs toward 1 as N grows, even though each added polarizer can only remove light. Check your N = 3 value with **Many polarizers**.

**Q4.** In **Quarter wave plate makes circular light**, vertical light meets a quarter wave plate with its fast axis at 45°. Explain why the light leaving it is circular, and why it is elliptical if the fast axis is at 30° instead. Why does a polarizer after circular light pass exactly half at every angle?

**Q5.** A half wave plate with its fast axis at 20° turns vertical light to 40°. Where should the fast axis be set to turn vertical light horizontal? If the plate is turned by 10°, by how much does the output turn? How much of the light is lost? Check with **Half wave plate rotates polarization**.

**Q6.** Sunlight reflects from a lake (n = 1.33). At what angle of incidence is the reflected light completely polarized, and in which direction is its field? Find the refraction angle there and show that the reflected and refracted rays are perpendicular. Using the Fresnel formula for r_s in the rail, find R_s, and the fraction of unpolarized light reflected. Check with **Air to water**.

## Common misconceptions

- **"A polarizer always cuts the intensity in half."** Only for unpolarized or circular light. For linearly polarized light it passes cos²θ, anything from 0 to all of it.
- **"A polarizer is a filter: it can only take light away, so an extra one can never help."** It does only take light away, but it also leaves the light polarized along its own axis. The next polarizer then sees a smaller angle.
- **"A wave plate is a weak polarizer."** It is lossless: I/I_in = 1 always. It changes the polarization state, not the intensity.
- **"Circular light is just unpolarized light."** A polarizer alone cannot tell them apart, but a quarter wave plate turns circular light into linear light and leaves unpolarized light unpolarized. The Stokes readout shows S₃ = ±1 for circular light and 0 for unpolarized.
- **"Reflected light is polarized."** Only fully at Brewster's angle. At normal incidence it is not polarized at all, and at other angles only partly.

## Physics behind the demo

- Ideal elements: polarizers pass the field component along the axis and absorb the rest; wave plates are lossless and delay the slow component by exactly a quarter or half cycle (real ones are exact at one wavelength only).
- Polarized light is followed with Jones vectors, E_out = J E_in. Unpolarized light is followed with Stokes vectors and Mueller matrices built from the same Jones matrices; at the first polarizer this reproduces the one half rule.
- Right circular means clockwise as seen facing the beam. Ellipse size shows the field amplitude, √(I/I₀). Unpolarized light is drawn as a field arrow wandering at random, far more slowly than in real light.
- Reflection view: Fresnel equations for a flat, smooth boundary between transparent, nonmagnetic media, with R + T = 1 for each polarization; unpolarized light averages s and p. Sunglasses are an ideal polarizer with a vertical axis on the reflected ray.

## Going further

- Lab: look at an LCD screen through a polarizer sheet and turn it; then look at glare from a floor near 55° from the normal.
- History: Malus found polarization by reflection in 1808, looking at sunlight reflected from windows through a calcite crystal.
