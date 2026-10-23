---
title: Sound Intensity and Decibels
level: Intro physics (sound, OpenStax Vol 1 17.3)
time: 15 to 30 minutes
---
## What students should come away with

- Intensity is power per area. A point source spreads its power P over a sphere, so I = P/(4πr²): double the distance and the intensity falls to a quarter.
- The decibel scale compares intensities by their ratio: β = 10 log(I/I₀) with I₀ = 10⁻¹² W/m². A factor of 4 in intensity is 10 log 4 = 6.0 dB, so every doubling of distance takes 6.0 dB off.
- Levels in decibels do not add. Independent sources add their intensities: two equal sources give 3.0 dB more than one, and a source 10 dB quieter adds only 0.4 dB.
- A steady background sets a floor: far from the source the meter reads the background, and the inverse square law can no longer be seen.

## Before class

Students should know what intensity is (OpenStax 17.3) and how to use logarithms. The loudspeaker stands at the left end of a measuring tape in an open field; drag the sound level meter along the tape, or use the Set up card's distance slider and its **r ÷ 2** and **r × 2** buttons. The card also sets each source's power, switches on source B (beside A) and adds a background noise. **Record reading** stores r and the meter's level; the graph under the readings puts r on a doubling scale.

## Running it in class

1. **Inverse square law.** One 10 mW source. Ask Q1, then record 0.5, 1, 2, 4, 8, 16 and 32 m: 95.0, 89.0, 83.0, 77.0, 70.9, 64.9 and 58.9 dB. The graph's slope is −6.02 dB per doubling (Q2).
2. **Two equal sources.** At 4 m each source alone gives 77.0 dB and both together 80.0 dB (Q3).
3. **A loud and a quiet source.** 10 mW and 1 mW: switching the quiet one on raises 77.0 dB to 77.4 dB (Q4).
4. **Background noise.** A 55 dB background. Up to about 4 m the readings match the first run; at 16 m the meter reads 65.3 dB instead of 64.9 dB, at 32 m 60.4 dB instead of 58.9 dB (Q5).
5. **Mystery source.** A source of hidden power: measure β at several distances and find P (Q6).

## Questions

**Q1.** Predict: you walk away from a loudspeaker in an open field until you are twice as far away. Does the sound intensity halve, fall to a quarter, or something else? By how many decibels does the level change?

**Q2.** A 10 mW source reads 89.0 dB at 1.0 m. Find the intensity there from P/(4πr²) and check the level. Predict the level at 2, 4 and 32 m, then measure. What slope should the graph of β against log₂ r have?

**Q3.** Two identical 10 mW sources stand side by side, 4.0 m from the meter. Each alone gives 77.0 dB. What does the meter read with both on, and why is it not 154 dB? How many such sources would you need to reach 87.0 dB?

**Q4.** A 10 mW and a 1 mW source play together. The quiet one alone gives 67.0 dB at 4.0 m. Find the reading with both on. Why do engineers say a source more than 10 dB quieter than another hardly matters?

**Q5.** With a steady 55 dB background, at what distance does the source alone give 55 dB? What does the meter read there? Explain why the 6 dB per doubling rule fails far from the source, and how you would correct a reading for the background.

**Q6.** With the Mystery source, record the level at three or more distances. Find its power P from your graph. Then find the pressure amplitude Δp at 1.0 m, with I = Δp²/(2ρv), ρ = 1.20 kg/m³ and v = 343 m/s.

**Q7.** A 1.0 W source reads 109.0 dB at 1.0 m. How far away must you stand for it to read 85 dB, a common limit for an 8 hour working day? Is the inverse square law a good model inside a room? (See the Room Acoustics demo.)

## Common misconceptions

- **"Twice as far, half as loud."** The intensity falls to a quarter (6 dB). How loud it sounds is another matter: listeners judge a 10 dB drop as roughly half as loud.
- **"Decibels add like other units."** 80 dB + 80 dB is 83 dB: decibels are logarithms of intensity ratios, so intensities add, not levels.
- **"0 dB means no sound."** 0 dB is I₀ = 10⁻¹² W/m², near the threshold of hearing at 1 kHz; negative levels exist.
- **"The background just shifts every reading by the same amount."** The background adds intensity, so it matters only where the source's own intensity is comparable.

## Physics behind the demo

- Each source is a point that radiates its power P equally in all directions in a free field: I = P/(4πr²), exactly, from 0.5 m out. Close to a real loudspeaker (within about its own size) and near the ground, where reflections arrive, the point source picture fails; neither is modelled.
- The sources play independent noise, so intensities add: I = I_A + I_B + I_background, and the meter shows β = 10 log(I/I₀) rounded to 0.1 dB. Two speakers playing the same tone would interfere instead (OpenStax 16.5). Source B is beside A, at the same distance from the meter.
- No energy is lost in the air: absorption at 1 kHz, 20 °C and 50 % humidity is about 5 dB per km (ISO 9613-1), 0.15 dB over 32 m.
- The pressure amplitude uses I = Δp²/(2ρv) with ρ = 1.20 kg/m³ and v = 343 m/s. The source powers run in 1, 2, 5 steps from 10 µW to 1 W; the Mystery source is between 0.5 mW and 50 mW.

## Going further

- The decibel is named after Alexander Graham Bell; the bel (a factor of 10) was too coarse, so engineers use tenths of it.
- Sound level meters weight frequencies the way the ear does (dB(A)); this demo reads unweighted levels.
