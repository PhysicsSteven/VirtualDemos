---
title: Holography
level: Intro physics (wave optics: interference, gratings, holograms)
time: 20 to 35 minutes
---
## What students should come away with

- A hologram is a recording of interference: a reference beam and the light from the object, from one laser, make fringes on the plate. For two plane waves with an angle θ between them the fringes are d = λ/(2 sin(θ/2)) apart, about a micrometer, which is why the setup must be still to a fraction of a wavelength and why it needs a laser.
- The developed plate is a grating. Lit by the reference beam alone, it sends out three beams: straight through (the zero order), a copy of the object wave (the virtual image, seen where the object was) and the conjugate wave (which can focus into a real image).
- The diffracted light follows the grating equation, so a different color is bent through a different angle and the images move: a thin hologram needs the light it was made with.
- The off axis reference keeps the three beams apart, so the image can be seen on its own.

## Before class

Students should know two slit interference (§3.1) and the diffraction grating (§4.4). The demo has two views. **Record** shows the beams meeting on a plate 3.0 mm wide, an exact magnified picture of the light in a 12 μm patch at the plate, and a microscope on the developed plate with two cursors. **Reconstruct** lights the developed plate again (at any wavelength from 400 to 700 nm, along the reference or from the other side) and computes exactly where the light goes: a map of the light leaving the plate and of the same light traced back behind it, a screen or camera focus, and a detector for the angles. It is a two dimensional slice (each object point is a bright line across it), the plate is thin and its emulsion linear; the About text says so.

## Running it in class

1. **Two beams.** Ask Q1. Zoom the microscope in and put the cursors ten fringes apart: 12.22 μm, so d = 1.222 μm at 30°. Change the angle between the beams and watch the fringes crowd together.
2. **Record a point.** Ask Q2. The fringes are curved, and closer together on one side: a piece of a zone plate.
3. **Plane wave hologram.** Ask Q3. Switch to Reconstruct: the angle plot shows three peaks, at 25° (straight through), 0° (the image beam) and 57.7° (the conjugate). Move the wavelength and watch the image beam swing.
4. **Virtual image**, then **Real image.** Ask Q4. Move the camera focus through −20 mm and the point sharpens and fades; light the plate from the other side and a screen 20 mm in front of the plate catches a sharp real point.
5. **Another color.** Ask Q5. The three images move out to about 633/450 times their distance, and sideways.

## Questions

**Q1.** Two beams of 633 nm light cross with 30° between them. How far apart are the bright fringes on a plate that bisects the angle? What happens to the spacing as the angle grows to 60°?

**Q2.** Why must a hologram's setup be still to a small fraction of a wavelength during the exposure, when an ordinary photograph only needs the camera still to a fraction of a millimeter?

**Q3.** A plate records a plane object wave straight on and a 633 nm reference at 25°. Find the fringe spacing and the angles of the three beams that leave the plate when it is lit at 25° with 633 nm light, and the image beam's angle with 450 nm light.

**Q4.** Lit by the reference beam, the point hologram gives a virtual image 20 mm behind the plate. Lit from the other side of the normal, where does the real image form, and why?

**Q5.** The point hologram, made at 633 nm, is lit with 450 nm light. Roughly how far behind the plate is the image now? Why is a thin hologram lit with white light blurred into a rainbow?

## Common misconceptions

- **"A hologram is a picture of the object."** Under a microscope it is only fringes, about a micrometer apart; nothing on it looks like the object. The image is rebuilt by diffraction.
- **"The image is on the plate."** The virtual image is where the object was, behind the plate; a camera has to focus there to see it sharp.
- **"Any light will do to view it."** A thin hologram bends each color differently, so it needs the light it was made with; white light holograms are thick (volume) holograms that pick out one color.
- **"A piece of a hologram shows a piece of the object."** Every part of the plate receives light from every point of the object, so a piece still shows the whole object, from fewer directions and with less sharpness.

## Physics behind the demo

- **Recording.** The reference is a unit plane wave e^{ik(x sin θr + z cos θr)}; a plane object wave is the same at θo; each object point sends out the exact cylindrical wave of the slice, H₀(kr) (computed from its asymptotic series, exact to better than 1 part in 10¹² for kr above 5 × 10⁴). The beam ratio sets the object intensity at the plate's center to 1/K of the reference's. The plate records I(x) = |R + O|².
- **The developed plate.** Thin (only the light at its surface counts) and linear: amplitude transmittance t = I/I_max. No phase change.
- **Reconstruction.** u(x) = t(x) e^{ik₂ x sin θi} is sampled finely enough that the finest fringes have more than two samples each (131 072 or more points in a 28 mm window), split into plane waves with one FFT and carried to any z by e^{i k_z z}, forward or traced back. Evanescent waves are dropped, and so is any plane wave that would leave the window before reaching z (none reaches the part shown).
- **Predictions shown when Blind is off.** Beam angles from the grating equation sin θ = sin θi ± (λ₂/λ₁)(sin θo − sin θr). Image positions from tracing the rays from the plate's center and their neighbors: the image lies at z₀(λ₁/λ₂) cos³α along a beam tilted by α, which the exact light confirms to within 0.05 mm.

## Going further

- Pair with **Diffraction Grating** (the developed plane wave hologram is one) and **Thin Film Interference**.
- Homework: a hologram is recorded with 633 nm light and viewed with 532 nm light at the same angle. Use the grating equation to find how much the image beam turns when the object beam was straight on and the reference at 30°.
