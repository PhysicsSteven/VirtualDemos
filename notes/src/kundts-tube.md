---
title: Kundt's Tube
level: Acoustics; intro physics (sound, normal modes); intro lab (speed of sound in a gas and a solid)
time: 25 to 45 minutes
---
## What students should come away with

- A rod clamped at its middle and stroked along its length rings in its lowest longitudinal mode: free ends are antinodes, the clamp a node, so the rod is half a wavelength long and f = v_rod/2L. Clamped at L/4 it rings with two half wavelengths in it.
- The disc drives the gas at the rod's frequency. When the plunger is a whole number of half wavelengths from the disc the tube resonates, and the dust is shaken out of the loud places and settles at the displacement nodes, λ_gas/2 apart.
- One frequency, two wavelengths: v_gas = 2 d f, and v_rod/v_gas = λ_rod/λ_gas = (2L/n)/(2d) = L/(nd), so the speed of sound in the metal follows from a metre rule alone if v_gas is known.
- The heap spacing does not depend on where the plunger is; the plunger only decides whether the tube is loud enough to move the dust.
- From v_gas and the temperature, γ = v²M/(RT) tells a monatomic gas (5/3) from a diatomic one (7/5).

## Before class

Students need v = fλ, nodes and antinodes in a tube closed at both ends, and v = √(E/ρ) for a thin rod (or just that sound is faster in metals). **Blind** hides the speeds, the spacing and the resonance; **Unknown rod** hides the rod's speed and the spacing for good.

## Running it in class

1. **Steel rod, air.** A 1.00 m steel rod rings at 2524 Hz. Tick Keep it ringing and nudge the plunger a millimetre at a time; the loudness bar and the dust jump near ℓ = 102.0 cm. Put the pointer on the middle of each heap (the close up helps) and record; x against j has a slope of 6.80 cm.
2. **Steel rod, helium.** The heaps spread to 19.96 cm. Students find v_He and then γ = v²M/(RT) ≈ 5/3.
3. **Clamped at L/4.** The lowest mode with a node at L/4 has two half wavelengths in the rod: f doubles to 5048 Hz and the heaps close up to 3.40 cm.
4. **Brass rod, air.** 1715 Hz and heaps 10.0 cm apart: brass is about two thirds as fast as steel.
5. **Unknown rod.** Find v_rod two ways: L/(nd) times v_air, and 2Lf/n from the counter.

## Questions

**Q1.** A steel rod 1.00 m long (E = 200 GPa, ρ = 7850 kg/m³) is clamped at its middle. Find the speed of longitudinal waves in it and the frequency it rings at.

**Q2.** With that rod, the dust heaps in air at 20 °C are 6.80 cm apart. Find the speed of sound in the air, and the ratio of the speed in the steel to the speed in the air from the lengths alone.

**Q3.** The same rod is clamped L/4 from one end. Why can it no longer ring at 2524 Hz? At what frequency does it ring, and how far apart are the heaps in air?

**Q4.** With helium in the tube at 20 °C and the rod of Q1, the heaps are 19.96 cm apart. Find v in helium, and then γ = v²M/(RT) with M = 4.003 g/mol. What does γ tell you about helium?

**Q5.** An unknown rod 1.00 m long, clamped at its middle, makes heaps 9.50 cm apart in air at 20 °C (v = 343.2 m/s), and the counter shows 1807 Hz. Find the speed of sound in the rod two ways and say what metal it might be.

**Q6.** Why does the dust gather at the displacement nodes and not at the antinodes? A student sets the plunger 1 cm away from a resonance: what changes, and does the heap spacing change?

## Common misconceptions

- **"The dust piles where the sound is loudest."** It is shaken out of the loud places (displacement antinodes) and comes to rest where the air does not move.
- **"Moving the plunger changes the wavelength."** The rod sets f and the gas sets v; the plunger only tunes the tube into resonance.
- **"The rod and the gas have the same wavelength because they share a frequency."** Same f, different v, so different λ: that is the whole method.
- **"Sound is faster in steel because steel is denser."** Steel is much denser than aluminum, yet the two have nearly the same v; what matters is E/ρ.

## Physics behind the demo

- Thin rod: v = √(E/ρ) (rod width much less than a wavelength). Typical handbook values (chosen; real alloys vary by several percent): steel 200 GPa and 7850 kg/m³ (5048 m/s), aluminum 69 GPa and 2700 (5055 m/s), brass 100 GPa and 8500 (3430 m/s), copper 117 GPa and 8960 (3614 m/s), glass 72 GPa and 2500 (5367 m/s); an unknown rod has 2500 to 5500 m/s. Free ends, a node at the clamp, f = n v/(2L) with n = 1 at the middle and 2 at L/4. The disc's mass and the clamp's width are left out. The counter shows f to 1 Hz.
- Gas: ideal at 101325 Pa, v = √(γRT/M) as in Sound Waves. The disc drives the gas as a piston with displacement a cos ωt; the plunger is rigid. With a loss of α = 0.10 per metre in amplitude (chosen), κ = ω/v − iα and S(x) = a sin(κ(ℓ − x))/sin(κℓ). Resonance when ℓ is just under mλ/2; there the loudest motion is about 1/sinh(αℓ) times the disc's (about 10 at 1 m). The nodes are λ/2 apart to better than 1 μm.
- The dust is a picture (numbers chosen): a grain at rest is shaken loose where the local motion |S| is more than 1.5 times the disc's at a full stroke, then slides down the slope of |S|² toward the nearest node until |S| under it is less than 0.4 times the disc's. Off resonance only the loudest stretches of the tube stir; with the steel rod in air near ℓ = 102.0 cm a stroke moves some dust within about 1 cm of the resonance, and gathers all of it into sharp heaps only within about 3 mm. Real dust also forms fine ridges, which are left out. The rod dies away in about 1.5 s (chosen); Keep it ringing holds it.
- Simulated data with no noise: the precision is how well you centre the pointer on a heap (1 mm steps).
