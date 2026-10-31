---
title: Chladni Plates
level: Acoustics; intro physics (waves and sound, resonance)
time: 15 to 25 minutes
---
## What students should come away with

- A plate has a discrete set of modes, each with its own frequency and pattern of nodal lines. Driven near one of those frequencies, it moves in that mode's shape.
- Sand gathers on the nodal lines because it is thrown off wherever the plate's acceleration amplitude exceeds g and stays put where it does not.
- A drive can only excite a mode if the drive point moves in that mode. A center drive on a circle excites only the ring modes; on a square, only the modes symmetric about both center lines and both diagonals.
- Bending waves are dispersive: plate frequencies grow roughly as the square of the number of nodal lines (Chladni's law, f ≈ C(n + 2m)^p with p near 2), not in a harmonic series. For a given shape, f ∝ (h/ℓ²)√(E/ρ(1 − ν²)).
- A real wave driver is bolted to the plate. At low frequency it shakes the whole plate up and down, about F/(M + m) everywhere, so all the sand jumps; its own moving mass on the post shifts every resonance.

## Before class

Students should know standing waves on a string, nodes and antinodes, and driven resonance. The default **Driver** is **Wave driver**, a voice coil bolted at the post; **Point force** is an ideal force on a free plate. The plate is shown from above with sand (**Sand**) or in **3D**, next to the computed response curve. Sound starts off (**Sound off**, **Volume**). **Sprinkle fresh sand** starts the sand over.

## Running it in class

1. **First pattern.** Ask Q1 before the sand settles. Then point to the response curve: the red line sits on the first tall peak, and the readout under **Drive** names the mode. Turn on **Nodal lines** to compare the computed nodal lines with the sand.
2. **Next resonance**, a few times. Each peak gives a new pattern with more nodal lines. Point out the faint ticks along the bottom of the plot: modes that exist but do not respond, because the center is on one of their nodal lines. Ask Q6, then switch **Driver** to **Point force**, drag the brass drive post off center and press **Previous resonance** back down.
3. **Rings on a circle.** Ask Q2 as a prediction first. Step through with **Next resonance**: every pattern is a set of circles.
4. **A cross**, then **High mode**. Off center and at the rim, the modes with nodal diameters appear. Switch **Plot** to **Chladni's law** and use Q5.
5. **Sweep and listen.** Ask Q4 first. Turn on sound. At 60 Hz the whole plate rides with the driver and all the sand jumps; the tone swells at each peak and the sand snaps into a pattern, then breaks up again between peaks. Stop near a peak and use **Fine tune** and **Modal Q (damping)** to show the width f/Q.
6. **Square: classic star** (if time allows). Try **Where |a| > g** and **3D** (bending exaggerated and slowed). Change **Metal** and **Thickness h** for Q3.
7. **Drumhead: rings** and **Drumhead overtones.** Switch to a drumhead: the circular modes sit at Bessel zeros, so f/f₁ = 1, 1.593, 2.136, 2.295, … and the (0, 3) mode at 3.598 f₁ is no harmonic. That is why a drum has no clear pitch. Raise the tension and every mode rises as √T.
8. **Bar: bending overtones**, then **Bar on the driver.** A steel bar 24 × 3 cm, 1 mm thick, free at both ends and tapped at one end. Ask Q8. The lowest mode is at 90.1 Hz with two nodes 5.4 cm in from the ends; **Next resonance** gives 248.3, 486.8 and 804.7 Hz, 2.756, 5.404 and 8.933 times the lowest. On the driver at its middle only the symmetric modes answer.

## Questions

**Q1.** Predict: sand is sprinkled evenly on a plate that is vibrating in one of its modes. After a few seconds, where will the sand be, and why does it end up there rather than somewhere else?

**Q2.** Predict: a circular plate is driven at its center by a vibrating post. Why can only patterns made of circles appear, never ones with straight nodal lines through the center? Check with **Rings on a circle** and **Next resonance**.

**Q3.** With **Driver: Point force**, the lowest mode a center drive excites on the 24 cm, 1.00 mm steel square is at 102.4 Hz. Predict its frequency (a) for a 2.00 mm steel plate, (b) for a steel plate 18 cm on a side and 1.00 mm thick, and (c) for a 1.00 mm aluminum plate (E = 69 GPa, ρ = 2700 kg/m³ instead of 200 GPa and 7850 kg/m³). Aluminum is almost three times lighter; why is (c) nearly the same? Check (a) and (c) with the demo (still with **Point force**; why does the wave driver not follow the same simple rule?).

**Q4.** Predict: in **Sweep and listen** the wave driver pushes with a coil force of 9.9 N on its own 50 g moving mass and the 452 g plate. Well below the first resonance, about how large is the plate's acceleration, and will the sand sit still or jump? A grain launched from a plate at 2 g flies for t = 2v/g with v = (g/ω)√(Γ² − 1); compare its flight time and hop height at 30 Hz and at 120 Hz.

**Q5.** With **High mode** loaded, switch **Plot** to **Chladni's law**. Use the fitted C and p shown on the plot to predict the frequency of the (4, 2) mode, then compare with the demo's resonance. How good is the law, and what kind of statement is it?

**Q6.** In **First pattern**, the readout says the lowest resonance is mostly mode 3 of the plate, yet the plot shows no peak below it. Where are modes 1 and 2, and how could you make them appear? Switch **Driver** to **Point force** and use the demo to check your answer; give the frequency of mode 1.

**Q7.** The maker of a common square teaching plate lists its "best frequencies" starting near 345 Hz, and they do not match the demo's resonances. Give two physical reasons why a real plate on a real driver differs from this model, and one thing you could measure to tell which matters most.

**Q8.** In **Bar: bending overtones** the lowest mode of the free bar is at 90.1 Hz. If the bar were like a string, where would the next two resonances be? Find them with **Next resonance** and compare. Where do the sand lines of the lowest mode sit, and why does a xylophone bar rest on cords at those points? Predict what switching to aluminum does to the lowest frequency.

## Common misconceptions

- **"The sand collects where the plate vibrates most."** It is thrown away from there. Only very fine powder, like lycopodium, collects at the antinodes, carried by air currents over the plate (Faraday, 1831); the demo does not model air.
- **"The overtones of a plate are harmonics, like a string's."** Plate modes are not whole number multiples of the lowest one; their frequencies grow roughly as the square of the number of nodal lines, because bending waves are dispersive.
- **"Away from resonance the plate is still."** A real driver shakes the plate at every frequency; only within about f/Q of a resonance does it move in one mode's shape, so only there does the sand draw a clean pattern.

## Physics behind the demo

- Thin plate (Kirchhoff–Love) theory, D∇⁴w = −ρh ∂²w/∂t², D = Eh³/(12(1 − ν²)), all edges free. Modes: f = λ²/(2πℓ²) √(D/ρh) (ℓ the side or radius); circle exact (Bessel J_n, I_n), square by Rayleigh–Ritz, converged to one part in a million.
- **Wave driver**: a voice coil bolted at the post pushing its own 50 g moving mass and the plate, x = F_c/(1/G − m ω²), with G the plate's point receptance at the post; stroke limit 3.5 mm, full drive 17 N (estimates from PASCO's stated millimeter amplitudes at 50 Hz). **Point force**: an ideal force on a free plate. Every mode has the same Q.
- Sand: where |a| > g a grain is launched at v = (g/ω)√(Γ² − 1), flies 2v/g and hops randomly with a drift toward smaller |a|; where |a| < g it stays put. Plates are 24 cm across, about 1 mm thick; steel E = 200 GPa, ρ = 7850 kg/m³, ν = 0.30.
- **Bar** (Fletcher and Rossing, The Physics of Musical Instruments, ch. 2): an Euler–Bernoulli beam free at both ends. Modes cosh βx + cos βx − σ(sinh βx + sin βx) with cos βL cosh βL = 1, f = (βL)² (h/L²)√(E/12ρ)/2π: βL = 4.7300, 7.8532, 10.9956, 14.1372, so f₂/f₁ = 2.756, f₃/f₁ = 5.404. The same modal sum, sand and drive as the plates. Left out: shear and rotary inertia, twisting, bending across the width.
