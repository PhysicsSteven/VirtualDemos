---
title: "Ultrasound: Echoes and Blood Flow"
level: Acoustics module (OpenStax University Physics Vol 1, §17.2, §17.7; College Physics §17.7)
time: 30 to 45 minutes
---
## What students should come away with

- Ultrasound imaging is echo timing: a pulse goes down and back, so a boundary at depth d sends an echo after t = 2d/c. Scanners assume c = 1540 m/s in soft tissue.
- How much comes back is set by the change in acoustic impedance Z = ρc: the pressure reflection is r = (Z₂ − Z₁)/(Z₂ + Z₁), the intensity reflection r². Soft tissue boundaries send back about 1%, bone about 40%, air nearly everything (hence the gel).
- Going from high to low impedance turns the echo upside down (negative r).
- A shorter pulse (higher frequency) separates boundaries closer together.
- Blood moving at speed v, at angle θ to the beam, sends back a frequency shifted by Δf ≈ 2f₀v cos θ / c: the Doppler effect twice, once as a moving observer and once as a moving source.

## Before class

Students need v = fλ, the speed of sound in different media, and the Doppler formulas for a moving observer and a moving source (§17.7, and the **Doppler Effect** demo). **Blind** hides the true depths, the echo list and the blood speed; **Find the hidden cyst** and **Doppler: mystery flow** hide them for good (choosing another shows the last value in the status line). The scanner's depth for the cursor can be switched on under Lab.

## Running it in class

1. **Fat, muscle and bone.** Echoes at 20.69, 58.43 and 63.33 μs. The bone echo is by far the largest (r = 0.642); the echo from the far side of the bone is upside down (zoom in). Depths from 1540 m/s: 1.59, 4.50 and 4.88 cm, against true 1.50, 4.50 and 5.50 cm: the scanner misplaces what lies under bone, where sound is much faster.
2. **Speed of sound in water.** Record the echo time at six water depths; t against depth has slope 2/c = 1.333 μs/mm, so c = 1500 m/s.
3. **Find the hidden cyst.** Two weak echoes (r = ∓0.0625) mark its top and bottom.
4. **Resolve a thin layer.** 1.0 mm of fat: at 2 MHz one blurred echo, at 7.5 MHz two.
5. **Doppler: blood flow.** 5 MHz, θ = 60°, v = 0.50 m/s: shift 1592.6 Hz. Change θ and the shift follows cos θ. Smooth flow spreads the spectrum from 0 to the shift of the fastest blood. **Listen** plays the shift, as a scanner does.

## Questions

**Q1.** In the Fat, muscle and bone setup the echoes come at 20.69, 58.43 and 63.33 μs. What depths does a scanner using 1540 m/s give? The true depths are 1.50, 4.50 and 5.50 cm: explain the differences.

**Q2.** Find the intensity reflection at a fat to muscle boundary and at a muscle to bone boundary (Z: fat 1.34, muscle 1.70, bone 7.8, all × 10⁶ kg/(m²·s)). Why must gel be used between the transducer and the skin (air: Z = 429 kg/(m²·s))?

**Q3.** In the water tank, the echo from the air pocket under 8.0 cm of water comes at 106.67 μs. Find the speed of sound in water. Why is the echo so strong, and why is it upside down?

**Q4.** The thin layer is 1.0 mm of fat (c = 1450 m/s) in muscle. How far apart in time are its two echoes? Each pulse is three cycles long at half height. At which of 2, 3.5, 5 and 7.5 MHz are the two echoes clearly separate?

**Q5.** At 5.0 MHz, with the beam at 60° to the flow, the spectrum peaks at 1593 Hz. Find the blood speed using c = 1570 m/s (blood), and again using the scanner's 1540 m/s. What error does the scanner's value cause?

**Q6.** An error of 1° in θ is easy to make. What error in v does it cause at θ = 60° and at θ = 80°? Why do sonographers keep θ below about 60°?

**Q7.** In smooth (laminar) flow the spectrum is flat from 0 to its top edge. What does the top edge give, and what is the average speed of the blood?

## Common misconceptions

- **"The echo time is the depth divided by the speed."** The pulse goes down and back: d = ct/2.
- **"Stronger echoes come from denser tissue."** They come from a bigger change in Z = ρc at the boundary.
- **"The scanner measures depth directly."** It measures time and assumes 1540 m/s; where the real speed differs, depths are off.
- **"The Doppler shift gives the blood speed directly."** It gives v cos θ; the angle must be known.

## Physics behind the demo

- Media: speeds and impedances from OpenStax College Physics §17.7 (table of the ultrasound properties of various media); bone varies from 5.7 to 7.8 × 10⁶ kg/(m²·s), and 7.8 × 10⁶ is chosen. A fluid filled cyst is taken as water. 1540 m/s is the book's soft tissue value.
- Pulses are plane waves with a Gaussian envelope, three cycles at half height (chosen). One echo per boundary, at t = Σ 2dᵢ/cᵢ, with amplitude r times (1 − rᵢ²) for every boundary above (down and back). The screen shows the coherent sum of the echoes: its envelope at 0 to 200 μs, the radio frequency trace when zoomed.
- Left out: multiple echoes, absorption in tissue (real scanners raise the gain with depth), beam spreading and speckle. Gel couples with no echo.
- Doppler: f = f₀(c + u)/(c − u), u = v cos θ, c = 1570 m/s in blood (exact for the two step process). The spectrum is taken over a 20 ms window (chosen), so each speed gives a sinc² line about 50 Hz wide. Laminar flow v(r) = v_max(1 − r²/R²) gives equal amounts of blood at every speed from 0 to v_max (checked in the tests). Simulated data with no noise.
