---
title: Build a Microscope or Telescope
level: PHYS 202
time: 20 to 40 minutes
---
## What students should come away with

- An instrument is a chain of images: each lens images the image of the one before, with 1/d_o + 1/d_i = 1/f and m = −d_i/d_o at every step (OpenStax Vol 3 §2.4). An image the next lens intercepts before it forms is a virtual object for that lens (d_o < 0).
- What an eye judges is angle, not size. Angular magnification compares the angle the eye sees through the instrument with the angle the object fills without it: at the near point, 25 cm, for something small and near; as it is, for something far away.
- With the eye relaxed (final image at infinity): magnifier M = 25 cm/f (§2.7); compound microscope M = m_obj × (25 cm/f_eye) (§2.8); telescope M = −f_obj/f_eye, with the lenses f_obj + f_eye apart (§2.8). M < 0 means the view is upside down.
- The exit pupil is where all the light leaving the instrument passes: the image of the aperture stop (usually the objective) made by the lenses after it. The eye belongs there; the distance from the last lens is the eye relief.
- An instrument cannot make an extended object look brighter than it does to the bare eye. If the exit pupil is smaller than the eye's pupil, the view is dimmer by (exit pupil/eye pupil)².

## Before class

Students need the thin lens equation with its signs. The views at the bottom of the picture are traced backward ray by ray from the retina (or sensor) through the pupil and every lens to the object, so blur, the edge of the field and dimming come from the rays themselves. **Blind** hides the magnification, the image chain and the final image, so students can predict them first.

## Running it in class

1. **Magnifier.** Object at the focal point: M = 25/5.00 = 5.00, and the eye is relaxed. Drag the eye back and forth: M does not change. Drag the object a little closer to the lens: the image moves in, the eye accommodates, and M grows toward 1 + 25/f = 6.
2. **Compound microscope.** Read the chain: the objective makes a real, inverted image 10 times the object at the eyepiece's focal point (image 1 sits in the field stop). The eyepiece adds 25/2.50 = 10: M = −100. Compare the two views: without the microscope the 0.5 mm letter is a speck.
3. **Exit pupil.** Drag the eye away from the exit pupil (or press the button to put it back) and watch the view through the microscope shrink to a small circle: the eye is now cutting off the edge of the field.
4. **Keplerian telescope.** The Moon fills 0.518° to the eye; through the telescope it is 10 times bigger and upside down. Show both bundles of rays: they leave the eyepiece parallel, at a steeper angle.
5. **Galilean telescope.** M = +5, upright and short, but the exit pupil is virtual (eye relief −8.00 cm) so the eye cannot get to it: the apparent field is only 6.1° against 25.5° for the Keplerian telescope.
6. **Terrestrial telescope.** The erecting lens turns the image over (m₂ = −1) and costs 20 cm of tube.
7. **Start from scratch.** Have students build an instrument to a specification (below), then switch to Camera to photograph through it.

## Questions

**Q1.** In the Compound microscope setup, use the image chain to check m_obj, then M = m_obj × (25 cm/f_eye). Why does the textbook estimate M ≈ −(16 cm)(25 cm)/(f_obj f_eye) come out exactly here?

**Q2.** The microscope's exit pupil is 1.14 mm across, 2.86 cm behind the eyepiece. Find both from the lens equation (the objective is the aperture stop). Why does the view through the microscope read only about 8 % as bright as the bare eye with a 4.0 mm pupil?

**Q3.** In the Keplerian telescope, explain why the lenses must be f_obj + f_eye = 55 cm apart for the eye to be relaxed. What happens to the final image and to the eye if you slide the eyepiece 1 cm closer to the objective?

**Q4.** The Keplerian telescope's exit pupil is 5.00 mm. Set the eye pupil to 7.0 mm (a dark adapted eye). What does the brightness readout say, and why? Is the Moon's image now dimmer than to the bare eye?

**Q5.** Compare the Galilean and Keplerian telescopes: magnification, which way up, length, exit pupil, apparent field. Why does the Galilean telescope show so little sky at once?

**Q6.** In Start from scratch, build a compound microscope with M = −40 and the eye relaxed, using lenses from 1 to 10 cm. Give your lens positions and focal lengths and check M with the formula before you look.

## Common misconceptions

- **"Magnification means the image is bigger."** A telescope's final image is at infinity and has no size; what grows is the angle it fills at the eye.
- **"A bigger eyepiece focal length gives more magnification."** M goes as 1/f_eye: shorter eyepieces magnify more.
- **"A telescope makes faint objects brighter."** It collects more light, so point sources (stars) brighten, but the surface brightness of an extended object can never exceed what the bare eye sees.
- **"The eye should go right against the eyepiece."** It belongs at the exit pupil; anywhere else it clips the field.

## Physics behind the demo

- Ideal thin lenses: a ray at height x leaves with its slope changed by −x/f, which images planes perfectly; no aberrations, no thickness. Angles are handled as slopes (tan θ). Rays are traced in 3D and stopped at the rim of each lens and stop.
- Angular magnification from the ray through the center of the eye's lens: with the ray matrix [A B; C D] from the object to the eye, M = (25 cm)/B for a near object and 1/A for a far one. The textbook formulas assume the final image at infinity; the readout says when that holds.
- Pupils from imaging the stop with the same matrices; field of view where the light reaching the eye falls to half of that from the middle of the object; brightness from the fraction of the eye's pupil that light from the object fills.
- The eye is the reduced eye of The Eye demo (retina 1.80 cm behind a thin lens, accommodation 4 D, near point 25 cm, pupil 2 to 7 mm). The camera has a 50 mm lens and a 36 × 24 mm sensor, focusing from 45 cm to infinity.
- The Moon's angular diameter 0.518° is its mean radius 1737.4 km over its mean distance 384 400 km, doubled. Its face is drawn roughly. Diffraction is not drawn; its limit, 1.22λ/D or 0.61λ/NA at 550 nm, is quoted for the whole system with the viewer's pupil included.
