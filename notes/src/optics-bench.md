---
title: Optics Bench
level: PHYS 202 (optics unit)
time: 20 to 30 minutes
---
## What students should come away with

- An image is where the rays from one object point cross, or where they appear to come from when traced back. Two of the three principal rays are enough to find it.
- The thin lens and mirror equation 1/d_o + 1/d_i = 1/f and m = −d_i/d_o, with signs: d_i > 0 is a real image, m < 0 is inverted, f < 0 for a diverging lens.
- A converging lens or concave mirror gives a real, inverted image of an object beyond F and a virtual, upright, enlarged one inside F. A diverging lens always gives a virtual, upright, reduced image.
- Snell's law n₁ sin θ₁ = n₂ sin θ₂. Light inside glass cannot leave past the critical angle θ_c = arcsin(1/n); and because n depends on wavelength, a prism spreads white light.
- Two converging lenses a distance f₁ + f₂ apart take a parallel beam to a parallel beam, turned through a larger angle: a telescope with angular magnification f₁/f₂.

## Before class

Students should know the law of reflection and Snell's law. The sign conventions are spelled out under the Image readouts; agree on them first. Click an element to select it: lenses show draggable F and F′ dots, mirrors F and C, and a round knob turns it. Image readouts need an **Object arrow** whose rays meet exactly one lens or mirror.

## Running it in class

1. **Converging lens.** Ask Q1 first. The readouts give d_o = +30.0 cm, d_i = +15.0 cm, m = −0.50. Drag the object toward the lens: inside 2F the image is enlarged, at F it goes to infinity, inside F it becomes virtual.
2. **Magnifier.** The object is inside F (6 cm from an f = 12 cm lens). The rays leave diverging; the dashed lines trace them back to a virtual, upright image at d_i = −12.0 cm with m = +2.00 (Q2).
3. **Diverging lens.** d_i = −6.7 cm, m = +0.33. Drag the object anywhere in front of the lens: the image stays virtual, upright and reduced (Q3).
4. **Concave mirror.** Traced d_i = +19.7 cm, while the mirror equation gives +20.0 cm. Ask what causes the difference, then try the fix students suggest (Q4).
5. **Telescope.** A beam at 3° to the axis enters a 16 cm lens; the 5 cm lens sits 21 cm behind it. The beam leaves parallel, narrower, tilted the other way and steeper (Q5).
6. **Prism**, then **Total internal reflection.** A single white ray splits; violet bends most. Then select the beam and turn **Angle (pivots on the glass)**: the beam enters the semicircle along a radius and meets the flat face at the angle in **Angle inside, at exit face**. Step past 41.8° and the outgoing ray disappears (Q6).

## Questions

**Q1.** Predict: an object stands 30 cm in front of a converging lens with f = 10 cm. Where is the image, and is it upright or inverted, larger or smaller? Predict the same for the object at 15 cm and at 5 cm. Check by dragging the object in **Converging lens**.

**Q2.** In **Magnifier** the object is 6.0 cm from a lens with f = 12.0 cm. Find d_i and m from the lens equation. Where must the object be placed for m = +3? Check by moving it (arrow keys move a selected item by 0.5 cm).

**Q3.** Explain, using the lens equation and the principal rays, why a diverging lens can never form a real image of a real object, and why its image is always smaller than the object.

**Q4.** In **Concave mirror** (R = 24 cm, object 3 cm tall at 30 cm) the traced image is at 19.7 cm, but 1/d_o + 1/d_i = 1/f gives 20.0 cm. Predict which change would bring the two into agreement: a smaller mirror aperture, a narrower fan of rays, or a shorter object. Try all three. What does the result tell you about when the mirror equation holds?

**Q5.** In **Telescope**, f₁ = 16 cm and f₂ = 5 cm. Explain why the lenses must be f₁ + f₂ apart for a parallel beam to leave parallel. The beam enters 6 cm wide at 3° to the axis. At what angle does it leave, and how wide is it?

**Q6.** The semicircle in **Total internal reflection** has n = 1.50. Why does the beam enter the curved side without bending? Find the critical angle. At 30° inside the glass, at what angle does the beam leave the flat face? Predict what you see as the inside angle approaches θ_c, then check.

## Common misconceptions

- **"Covering half a lens cuts off half the image."** Every part of the lens sends rays from every object point to the image. Shrink a lens's aperture: the image stays whole and only fewer rays form it.
- **"A real image is one you can see; a virtual image is an illusion."** Both can be seen. A real image is where the light actually converges and can be caught on a screen; a virtual one is where the light only appears to come from.
- **"Total internal reflection happens when light goes into a denser medium."** It happens only going from higher n to lower n, past θ_c.
- **"The magnifier's m = +2 is what the eye sees."** The lens equation gives the lateral size of the virtual image. How much bigger it looks depends also on where the eye puts that image (angular magnification).

## Physics behind the demo

- Rays are traced in two dimensions. Lenses are ideal thin lenses (each ray's slope changes by −h/f at height h), so traced d_i always agrees with the lens equation.
- Mirrors are true spherical arcs with exact reflection, so the traced image can differ slightly from the paraxial mirror equation.
- The **Screen** element (added in the **Converging lens** preset at the image) shows the picture the traced rays form on it: sharp at the image distance and a blurred patch elsewhere, a direct way to find a real image as in the lab.
- Glass faces follow Snell's law; the faint reflection at each face has a fixed brightness (no Fresnel coefficients).
- n is quoted at 550 nm and follows a Cauchy form; n = 1.50 gives 1.529 at 400 nm and 1.487 at 700 nm, more dispersion than crown glass so the spectrum is easy to see. White light is seven wavelengths from 400 to 700 nm.

## Going further

- Homework: in **Prism** the white ray enters at 48.6°, the angle of minimum deviation for n = 1.50 (the ray inside runs parallel to the base). Show that the deviation is 37.2° for green, and find it for violet (n = 1.529) and red (n = 1.487).
