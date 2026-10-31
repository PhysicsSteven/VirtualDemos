---
title: Standing Waves
level: Intro physics (waves and sound)
time: 20 to 40 minutes
---
## What students should come away with

- Two equal waves traveling in opposite directions add to a standing wave, with fixed nodes half a wavelength apart. With unequal amplitudes part of the wave travels and the minima no longer reach zero.
- Boundaries select the frequencies: a string fixed at both ends holds n half wavelengths, fₙ = n v/2L with v = √(T/μ).
- Driving at a natural frequency gives resonance, taller and narrower for higher Q. Where a string is plucked decides which harmonics it contains. Two tones a few hertz apart beat at the difference frequency.

## Before class

Students should know v = fλ and superposition. Three views are chosen at the top: **Two waves**, **String** and **Beats**; the five setups load them. **Sound on** plays the string and beat tones (bring speakers). Air columns and pipes are in the Resonators demo, and beads held by sound in Acoustic Levitation.

## Running it in class

1. **Two waves make a standing wave.** Two 1 Hz waves at 2 m/s, λ = 2.00 m. Ask Q1 first. **Node spacing** reads 1.00 m and the nodes stay put. Drag A₂ down: the **Standing wave ratio** drops from ∞.
2. **Harmonics of a string.** A guitar's low E string, f₁ = 82.4 Hz, shown at n = 3. Click **n=1** to **n=8** with sound on; drag the bridge to shorten the string, as a fret does (Q2).
3. **Find the resonances.** Driven at 60 Hz the string barely moves. Drag the red marker across the curve: peaks at 82.4, 164.8, 247.2 Hz. Raise **Quality factor Q of mode 1** from 30 to 300 (Q4).
4. **Pluck at the middle.** The table marks the even harmonics "(missing)". Drag **Pluck point d** toward the bridge and listen: the tone brightens (Q3).
5. **Beats.** 440 and 443 Hz with sound on: the loudness swells and fades 3 times a second. Drag **Difference f₂ − f₁** toward zero and the beats slow and stop.
6. **Two pulses pass through each other.** Watch the two humps add where they overlap (A₁ + A₂ at the moment the peaks coincide) and come out the other side unchanged. Tick **Pulse 2 upside down** and where they meet the sum drops to A₁ − A₂ (zero for equal pulses), yet both reappear.

## Questions

**Q1.** Predict: two waves of equal amplitude and frequency travel in opposite directions along a string. Will any points stay still? If so, how far apart are they, in wavelengths? Check in **Two waves make a standing wave**, where v = 2 m/s and f = 1 Hz.

**Q2.** A guitar's low E string is 0.648 m long, with linear density 6.14 g/m and tension 70.0 N. Find the wave speed, the fundamental and the third harmonic. What tension tunes it to F2 (87.3 Hz) at the same length? Where must a finger press to sound 164.8 Hz? Check with **Harmonics of a string**.

**Q3.** In **Pluck at the middle** every even harmonic is missing. Explain why, using where the even harmonics have their nodes. Which harmonics go missing for a pluck at d = L/4? Check by setting **Pluck point d** to 0.25 L.

**Q4.** In **Find the resonances** the string hardly moves at 60 Hz but swings strongly at 82.4 Hz, though the driving force is the same. Explain why. When Q goes from 30 to 300, what happens to the height and width of the peaks, and to the time the string needs to build up? Check with the curve and the readouts.

## Common misconceptions

- **"Nothing travels, so a standing wave has no energy."** It holds energy that sloshes between kinetic (near the antinodes) and elastic (near the nodes) within each loop; none crosses a node.
- **"Beats are a third tone."** The pitch heard is (f₁ + f₂)/2; only the loudness varies at |f₁ − f₂|.

## Physics behind the demo

- **Two waves:** y = A₁ sin(k₁x − ω₁t) + A₂ sin(k₂x + ω₂t) at 2 m/s: a standing part 2 min(A) plus a traveling part |A₁ − A₂|. Nodes are v/(f₁ + f₂) apart.
- **String:** ideal flexible string, small amplitude, fixed ends. The pluck is 200 undamped modes, bₙ = 2hL² sin(nπd/L)/(n²π² d(L − d)). The driven string has a point force at L/20 and damping rate γ = ω₁/Q for every mode, solved exactly, transients included.
- **Beats:** two pure tones added.

## Going further

- Homework: a guitar string beats 3 times a second against a 110.0 Hz tuning fork, and the beats slow when the string is tightened slightly. What was its frequency?
