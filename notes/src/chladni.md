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
- Q sets the height and width of each resonance: Q times the static response, f/Q wide.

## Before class

Students should know standing waves on a string, nodes and antinodes, and driven resonance. The plate is shown from above with sand (**Sand**) or in **3D**, next to the computed response curve. Sound starts off (**Sound off**, **Volume**). **Sprinkle fresh sand** starts the sand over.

## Running it in class

1. **First pattern.** Ask Q1 before the sand settles. Then point to the response curve: the red line sits on the first tall peak, and the readout under **Drive** names the mode. Turn on **Nodal lines** to compare the computed nodal lines with the sand.
2. **Next resonance**, a few times. Each peak gives a new pattern with more nodal lines. Point out the faint ticks along the bottom of the plot: modes that exist but do not respond, because the center is on one of their nodal lines. Ask Q6, then drag the brass drive post off center and press **Previous resonance** back down.
3. **Rings on a circle.** Ask Q2 as a prediction first. Step through with **Next resonance**: every pattern is a set of circles.
4. **A cross**, then **High mode**. Off center and at the rim, the modes with nodal diameters appear. Switch **Plot** to **Chladni's law** and use Q5.
5. **Sweep and listen.** Turn on sound. The tone swells at each peak; the sand only moves when the curve crosses the 1 g line. Stop the sweep near a peak and use **Fine tune** to walk across it; change **Modal Q (damping)** and ask Q4.
6. **Square: classic star** (if time allows). Try **Where |a| > g** and **3D** (bending exaggerated and slowed). Change **Metal** and **Thickness h** for Q3.

## Questions

**Q1.** Predict: sand is sprinkled evenly on a plate that is vibrating in one of its modes. After a few seconds, where will the sand be, and why does it end up there rather than somewhere else?

**Q2.** Predict: a circular plate is driven at its center by a vibrating post. Why can only patterns made of circles appear, never ones with straight nodal lines through the center? Check with **Rings on a circle** and **Next resonance**.

**Q3.** The lowest mode a center drive excites on the 24 cm, 1.00 mm steel square is at 102.4 Hz. Predict its frequency (a) for a 2.00 mm steel plate, (b) for a steel plate 18 cm on a side and 1.00 mm thick, and (c) for a 1.00 mm aluminum plate (E = 69 GPa, ρ = 2700 kg/m³ instead of 200 GPa and 7850 kg/m³). Aluminum is almost three times lighter; why is (c) nearly the same? Check (a) and (c) with the demo.

**Q4.** At 102.4 Hz in **First pattern** the peak acceleration on the plate is 11.1 g. What is the largest displacement amplitude of the plate? If Q is doubled from 100 to 200 at exact resonance, what happens to that amplitude, and to the width of the peak?

**Q5.** With **High mode** loaded, switch **Plot** to **Chladni's law**. Use the fitted C and p shown on the plot to predict the frequency of the (4, 2) mode, then compare with the demo's resonance. How good is the law, and what kind of statement is it?

**Q6.** In **First pattern**, the readout calls the 102.4 Hz mode the third flexural mode of the plate, yet the plot shows no peak below it. Where are modes 1 and 2, and how could you make them appear? Use the demo to check your answer and give the frequency of mode 1.

**Q7.** The maker of a common square teaching plate lists its "best frequencies" starting near 345 Hz, and they do not match the demo's resonances. Give two physical reasons why a real plate on a real driver differs from this model, and one thing you could measure to tell which matters most.

## Common misconceptions

- **"The sand collects where the plate vibrates most."** It is thrown away from there. Only very fine powder, like lycopodium, collects at the antinodes, carried by air currents over the plate (Faraday, 1831); the demo does not model air.
- **"The overtones of a plate are harmonics, like a string's."** Plate modes are not whole number multiples of the lowest one; their frequencies grow roughly as the square of the number of nodal lines, because bending waves are dispersive.
- **"Any frequency makes a pattern if you drive hard enough."** Between resonances the plate barely moves; only close to a mode, within about f/Q, does the acceleration pass g over a large area.

## Physics behind the demo

- Thin plate (Kirchhoff–Love) theory, D∇⁴w = −ρh ∂²w/∂t², D = Eh³/(12(1 − ν²)): small, linear motion, all edges free, bending wavelength long compared with the thickness (k h ≈ 0.08 at 1.5 kHz for 1 mm steel).
- Mode frequencies: f = λ²/(2πℓ²) × √(D/ρh), with ℓ the side (square) or radius (circle) and λ² a number that depends on the mode and on ν. Circle: exact Bessel function solution, w = [J_n(λr/a) + C I_n(λr/a)] cos nθ, with the free edge frequency equation solved numerically. Square: no closed form; Rayleigh–Ritz with Legendre polynomials, converged to better than one part in a million.
- The drive is an ideal point force F₀ cos(2πft); the driver's mass, its stiffness and the clamp around the bolt are left out, which is why real kit frequencies differ. Every mode has the same Q. The response is the sum over all modes: q_k = (F₀/M) φ_k(drive point) / (ω_k² − ω² + iωω_k/Q).
- Sand is phenomenological, not a granular simulation: where |a| > g grains hop randomly with a drift toward smaller |a|; where |a| < g they stay put.
- Plates are 24 cm across, as in common kits, about 1 mm thick (makers rarely state it). Steel: E = 200 GPa, ρ = 7850 kg/m³, ν = 0.30; aluminum: 69 GPa, 2700 kg/m³, 0.33. The sound is a sine at f whose loudness follows the computed response; it is not the sound the plate radiates.

## Going further

- History: Ernst Chladni published these figures in 1787, bowing plates held at one point. Sophie Germain won the French Academy's prize in 1816 for a theory of plate vibration, an early form of the equation the demo solves.
