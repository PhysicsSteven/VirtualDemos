---
title: Standing Waves
level: Intro physics (waves and sound)
time: 20 to 40 minutes
---
## What students should come away with

- Two equal waves traveling in opposite directions add to a standing wave, with fixed nodes half a wavelength apart. With unequal amplitudes part of the wave travels and the minima no longer reach zero.
- Boundaries select the frequencies: a string fixed at both ends holds n half wavelengths, fₙ = n v/2L with v = √(T/μ); a pipe closed at one end holds an odd number of quarter wavelengths, fₙ = n v/4L, n odd.
- Driving at a natural frequency gives resonance, taller and narrower for higher Q. Where a string is plucked decides which harmonics it contains. Two tones a few hertz apart beat at the difference frequency.
- A standing sound wave can hold small beads in air: the time averaged acoustic force drives them to the pressure nodes, where the air moves fastest, and they sit just below those nodes.

## Before class

Students should know v = fλ and superposition. Five views are chosen at the top: **Two waves**, **String**, **Air column**, **Beats** and **Levitation**. The six setups load the first four; **Levitation** has no setup, so select its view directly. **Sound on** plays the string, pipe and beat tones (bring speakers); the 40 kHz levitator is silent.

## Running it in class

1. **Two waves make a standing wave.** Two 1 Hz waves at 2 m/s, λ = 2.00 m. Ask Q1 first. **Node spacing** reads 1.00 m and the nodes stay put. Drag A₂ down: the **Standing wave ratio** drops from ∞.
2. **Harmonics of a string.** A guitar's low E string, f₁ = 82.4 Hz, shown at n = 3. Click **n=1** to **n=8** with sound on; drag the bridge to shorten the string, as a fret does (Q2).
3. **Find the resonances.** Driven at 60 Hz the string barely moves. Drag the red marker across the curve: peaks at 82.4, 164.8, 247.2 Hz. Raise **Quality factor Q of mode 1** from 30 to 300 (Q4).
4. **Pluck at the middle.** The table marks the even harmonics "(missing)". Drag **Pluck point d** toward the bridge and listen: the tone brightens (Q3).
5. **Closed pipe: odd harmonics only.** A 0.600 m pipe closed at one end, end correction on: 141.9 Hz, near a clarinet's lowest note. Switch to **Both ends open** and compare the tables (Q5).
6. **Beats.** 440 and 443 Hz with sound on: the loudness swells and fades 3 times a second. Drag **Difference f₂ − f₁** toward zero and the beats slow and stop.
7. **Levitation** view. A 40 kHz transducer 17.16 mm above a reflector, four half wavelengths. Ask Q6 first. Foam beads sit just below the four pressure nodes. Choose **Water droplet** and lower **Drive amplitude p₀** below **Needs p₀ above**: they fall. Restore 2000 Pa, **Drop a bead**, then raise **Air temperature** to 40 °C and press **Tune H to resonance** (Q7).

## Questions

**Q1.** Predict: two waves of equal amplitude and frequency travel in opposite directions along a string. Will any points stay still? If so, how far apart are they, in wavelengths? Check in **Two waves make a standing wave**, where v = 2 m/s and f = 1 Hz.

**Q2.** A guitar's low E string is 0.648 m long, with linear density 6.14 g/m and tension 70.0 N. Find the wave speed, the fundamental and the third harmonic. What tension tunes it to F2 (87.3 Hz) at the same length? Where must a finger press to sound 164.8 Hz? Check with **Harmonics of a string**.

**Q3.** In **Pluck at the middle** every even harmonic is missing. Explain why, using where the even harmonics have their nodes. Which harmonics go missing for a pluck at d = L/4? Check by setting **Pluck point d** to 0.25 L.

**Q4.** In **Find the resonances** the string hardly moves at 60 Hz but swings strongly at 82.4 Hz, though the driving force is the same. Explain why. When Q goes from 30 to 300, what happens to the height and width of the peaks, and to the time the string needs to build up? Check with the curve and the readouts.

**Q5.** A pipe 0.600 m long is closed at one end. With v = 343.2 m/s (air at 20 °C), find its lowest three frequencies, ignoring the end correction, and the lowest frequency of the same pipe open at both ends. Compare with the **Air column** table, end correction off. Why does the closed pipe have only odd harmonics?

**Q6.** Predict: in **Levitation** a small foam bead floats in the standing sound wave. Will it sit at a pressure antinode, where the pressure swings most, or at a pressure node, where it does not change? Explain, and say why the bead sits slightly below that point.

**Q7.** The levitator runs at 40.0 kHz in air at 20 °C (c = 343.2 m/s) with H = 17.16 mm. Find the wavelength, the spacing of the traps and how many fit in the gap. A foam bead (30 kg/m³) needs p₀ above 304 Pa, a water droplet (998 kg/m³) 1742 Pa: explain the difference. Then predict what happens to trapped droplets if the air warms to 40 °C at the same H, and check.

## Common misconceptions

- **"Nothing travels, so a standing wave has no energy."** It holds energy that sloshes between kinetic (near the antinodes) and elastic (near the nodes) within each loop; none crosses a node.
- **"Beats are a third tone."** The pitch heard is (f₁ + f₂)/2; only the loudness varies at |f₁ − f₂|.
- **"The bead floats where the pressure is highest."** That push averages out over each cycle; the steady force is a second order effect pointing toward the pressure nodes.

## Physics behind the demo

- **Two waves:** y = A₁ sin(k₁x − ω₁t) + A₂ sin(k₂x + ω₂t) at 2 m/s: a standing part 2 min(A) plus a traveling part |A₁ − A₂|. Nodes are v/(f₁ + f₂) apart.
- **String:** ideal flexible string, small amplitude, fixed ends. The pluck is 200 undamped modes, bₙ = 2hL² sin(nπd/L)/(n²π² d(L − d)). The driven string has a point force at L/20 and damping rate γ = ω₁/Q for every mode, solved exactly, transients included.
- **Air column:** plane waves, ideal ends, v = 331.3 √(1 + T/273.15) m/s, optional end correction 0.6 r per open end. **Beats:** two pure tones added.
- **Levitation:** an ideal plane standing wave p = p₀ cos kz cos ωt above a rigid reflector, no absorption or beam spreading. Gor'kov's potential for a sphere much smaller than λ, U = 2πa³[f₁⟨p²⟩/(3ρ₀c²) − f₂ρ₀⟨v²⟩/2], gives F = F_max sin 2kz with F_max = πΦka³p₀²/(ρ₀c²) and Φ = f₁/3 + f₂/2. Force and weight both scale as a³, so F_max/W does not depend on bead size. The demo warns above a = λ/10. Off resonance the amplitude falls as for a cavity with an illustrative loss. Beads move only along the axis, with buoyancy, added mass and drag, and do not interact. The foam's bulk modulus (about 3 MPa) is a rough figure.

## Going further

- Homework: a guitar string beats 3 times a second against a 110.0 Hz tuning fork, and the beats slow when the string is tightened slightly. What was its frequency?
