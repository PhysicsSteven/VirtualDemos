---
title: Ripple Tank
level: Physics II, waves and wave optics (OpenStax Vol. 1 §§16.1 and 16.5, Vol. 3 §§1.6, 3.1, 3.2 and 4.1); Acoustics, waves
time: 10 to 40 minutes
---
## What students should come away with

- Frequency is set by the source; the water sets the speed; the wavelength follows from v = fλ. Over shallower water the waves are slower and shorter, with the same frequency.
- Water ripples are dispersive: their speed depends on the frequency, and it is not √(gd) unless the waves are much longer than the water is deep and surface tension does not matter.
- Crests stay joined at an edge where the speed changes, which gives Snell's law, sin θ₁/sin θ₂ = λ₁/λ₂.
- Two sources in step make quiet lines where the paths differ by a half wavelength, an odd number of times: far away, d sin θ = (m + ½)λ. Two slits lit by one plane wave are such a pair. One slit spreads the waves more the narrower it is, with its first quiet lines at a sin θ = λ.

## Before class

The tank is 450 mm by 300 mm of water, 10 mm deep unless changed, with beaches at the sides (or walls). A straight bar makes plane waves; one or two dippers make circular waves, with the second dipper's spacing and phase adjustable. Students and the instructor can draw walls and shallow plates anywhere and erase them. Presets: plane waves, one dipper, two dippers, single slit, double slit, reflection from a 45° wall, a dipper beside a wall, a shallow plate across the tank, a plate edge turned 0° to 60°, a parabolic mirror and a lens shaped plate. The measuring line A to B reads its length and angle, the amplitude at B, and graphs the water along it. The Amplitude view shows the quiet lines; Draw the predicted lines overlays d sin θ = (m + ½)λ. Slow motion 1/4 is the default; the 3D view shows the surface from the side with the heights drawn 12 times larger.

## Running it in class

1. **Plane waves.** Ask Q1. Change the frequency from 6 Hz to 20 Hz: the wavelength falls from 44 mm to 12 mm, but not in proportion (the speed falls from 0.266 to 0.232 m/s near 13 Hz and rises again).
2. **Shallow water slows waves.** Ask Q2. Over the 1.5 mm plate the wavelength at 8 Hz drops from 30.9 mm to 19.5 mm. Turn the edge with Refraction and the crests bend toward the normal.
3. **Two dippers**, then **Double slit.** Ask Q3. Show the Amplitude, then tick Draw the predicted lines: the dark lines sit on them far from the sources and curve away close in.
4. **Single slit.** Ask Q4. Narrow the slit from 60 mm to 10 mm: the waves past it spread more and more until they look like a dipper's.
5. **Focusing mirror** and **Focusing lens.** Ask Q5.

## Questions

**Q1.** The bar makes waves 23.6 mm long at 10 Hz. What is their speed? What would √(gd) give for water 10 mm deep, and why is it different?

**Q2.** At a plate edge the waves slow from 0.247 m/s to 0.156 m/s. What happens to the frequency and the wavelength? If the crests meet the edge at 30°, at what angle do they leave it?

**Q3.** Two slits are 45 mm apart and the waves are 15.45 mm long. At what angles are the quiet lines? Why are they curved near the slits?

**Q4.** Plane waves 15.45 mm long pass a slit 30 mm wide. Where is the first quiet line? What happens when the slit is narrower than the wavelength?

**Q5.** A plate that makes the water shallow, shaped like a convex lens, focuses plane waves. Why does it converge them, when it makes the waves slower in the middle, as glass does to light?

## Common misconceptions

- **"Shallower water changes the frequency."** The frequency is fixed by the wave maker: every crest that arrives makes a crest that leaves.
- **"Water waves all travel at √(gd)."** Only long waves on shallow water do. Ripples a few centimeters long are faster than that, because surface tension adds to gravity, and their speed depends on their frequency.
- **"The quiet lines are straight rays from the slits."** They are hyperbolas, with straight asymptotes through the midpoint at d sin θ = (m + ½)λ; close to the slits they curve.

## Physics behind the demo

- The water's surface follows the small wave equation ∂²h/∂t² + 2β ∂h/∂t = c²∇²h on a grid of 1.25 mm squares. In each place c is the phase speed at the source frequency from ω² = (gk + σk³/ρ) tanh(kd) (Lamb, Hydrodynamics, §§228 and 267), with g = 9.81 m/s², σ = 72.74 mN/m, ρ = 998.2 kg/m³ (water at 20 °C). That is exact for one frequency, which is all the wave makers produce, so the demo makes no pulses.
- Leapfrog in time and the isotropic nine point Laplacian, with the grid's own dispersion taken out at the source frequency: the wavelengths match the relation to better than 0.05 % in every direction (curriculum/validation/test_ripple-tank.cjs).
- β is the viscous damping 2νk² (Lamb §348), plus the beaches, a ramp of damping 50 mm wide that reflects less than 3 % of the amplitude. Walls reflect everything (∂h/∂n = 0). The bar adds to the water each step instead of holding it, set from the grid's own dispersion so its plane waves are 0.50 mm in amplitude, so waves reflected back to it pass under it into the beach; a bar that held the water would mirror them and the tank between bar and barrier would ring, bending the waves that reach a slit. Friction with the floor in very shallow water, the meniscus and nonlinear waves are left out.
- One speed in each place is exact for one frequency, with two approximations that follow: the waves carry energy at the phase speed, not the group speed, so the slow viscous fall of the amplitude with distance is off by their ratio (0.8 at 6 Hz to 1.5 at 8 Hz over 1.5 mm of water); and at a change of depth the wavelengths and directions are exact but the share reflected and the change of height are the model's.

## Going further

- Pair with **Huygens's Principle** for light (§1.6) and **Double Slit** (§3.1): the same geometry at a wavelength a hundred thousand times shorter.
- Draw a harbor wall with a gap, or a corner reflector, and predict the pattern before running it.
