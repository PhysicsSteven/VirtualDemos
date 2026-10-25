---
title: Two Speaker Interference
level: Acoustics module (OpenStax University Physics Vol 1, §16.5, §17.2, §17.3)
time: 25 to 45 minutes
---
## What students should come away with

- Sound from two speakers playing the same tone adds. Where one wave arrives a whole number of wavelengths after the other (r₂ − r₁ = mλ) the two add up and it is loud; halfway between, (m + ½)λ, they cancel and it is quiet.
- The quiet and loud places lie on curves (hyperbolas) spreading out from between the speakers. Far away they run along straight lines at sin θ = Δr/d.
- Only path differences smaller than d are possible, so the number of quiet lines is set by d/λ.
- Wiring one speaker backwards swaps loud and quiet: straight ahead becomes quiet.
- The quiet spots give λ, and with v = fλ the speed of sound, which depends on the air temperature.
- Sound level in dB: one speaker drops 6 dB for each doubling of distance; two in phase give 6 dB more than one, where they add.

## Before class

Students need v = fλ, superposition (§16.5) and the decibel scale (§17.3). **Blind** hides the wavelength in the meter and the quiet lines on the floor; the **Mystery frequency** covers the generator display (choosing another shows the last one in the status line).

## Running it in class

1. **Walk across, 686 Hz.** λ = 0.500 m at 20 °C, d = 1.00 m, walk line at x = 4 m. Press **Walk** and watch the trace: dips near y = ±1.04 m (Δr = λ/2) and ±4.55 m (3λ/2, at the edge of the room). Put the microphone in each dip and record; students check r₂ − r₁ against (m + ½)λ.
2. **Speaker 2 off.** The dips vanish: one speaker gives a smooth level falling with distance.
3. **Speakers close together.** d = 0.40 m < λ: one quiet line on each side only.
4. **Wired backwards.** The center is quiet; the quiet lines are now at Δr = mλ.
5. **Speed of sound.** At several frequencies, λ from the dips; λ against 1/f has slope v. Change the temperature and repeat.

## Questions

**Q1.** The speakers play 686 Hz on a 20 °C day. Find the speed of sound from v = 331.3 m/s √(1 + t/273.15 °C) and the wavelength.

**Q2.** With d = 1.00 m, where on the line x = 4.00 m is the first quiet spot from the center? Find it two ways: exactly from r₂ − r₁ = λ/2, and from the far field rule sin θ = Δr/d with y = x tan θ.

**Q3.** How many quiet lines are there on each side of the center for d = 1.00 m at 686 Hz? For d = 0.40 m?

**Q4.** Straight ahead at x = 4 m the meter reads 73.9 dB with both speakers, and at the first quiet spot 43.2 dB. One speaker alone gives 80 dB at 1 m. Explain the 73.9 dB, and why the quiet spot is not silent.

**Q5.** Speaker 2 is wired backwards. Where are the quiet lines now?

**Q6.** In the Mystery frequency setup (d = 1.20 m, 20 °C) a student finds the first quiet spot on the line x = 4.00 m at y = 1.20 m. Find the frequency.

## Common misconceptions

- **"Two speakers are always twice as loud."** Only where the waves arrive in step. Elsewhere they cancel, and on average over the room the power adds (3 dB more than one, not 6).
- **"Quiet spots mean the sound energy is destroyed."** It is moved: the loud places are louder than two speakers' worth of separate power.
- **"The quiet lines are evenly spaced across the room."** Only in the small angle region far away; near the speakers and at large angles they bend (hyperbolas).
- **"A higher note gives fewer quiet lines."** Shorter λ means more path differences fit below d, so more lines.

## Physics behind the demo

- Each speaker is a point source in free field: complex pressure amplitude a e^{−ikr}/r, with a set so that one speaker gives 80 dB (re 20 μPa rms) at 1 m (chosen). Speaker 2 can have phase π (wired backwards) or be off. The level is 20 log₁₀(|p|/√2 ÷ 20 μPa). This is exact for monopoles.
- Left out: reflections from walls, floor and ceiling (as outdoors or in an anechoic room), the speakers' directivity, and absorption in air. The speed of sound is 331.3 m/s √(1 + t/273.15 °C) with t the air temperature in °C, 343.2 m/s at 20 °C (§17.2 writes this as 331 m/s √(T/273 K)).
- A quiet spot is not silent: the residual pressure is a(1/r₁ − 1/r₂), since the farther speaker is weaker (checked in the tests). On the center line, wired backwards, the cancellation is exact.
- The walk moves the microphone along the walk line at 0.5 m/s and plots the level every 4 mm. The waves on the floor are slowed about a thousand times. Simulated data with no noise.
