---
title: Resonators
level: Acoustics; intro physics (waves and sound); intro lab (speed of sound)
time: 20 to 35 minutes
---
## What students should come away with

- An instrument's pitch is set by its resonator: the frequencies at which a wave fits it. For a pipe or a string, f = (wave speed)/(wavelength that fits), so size and wave speed set the pitch.
- An open end is a pressure node, a closed end a displacement node. Open at both ends: every harmonic, f = n c/2L; closed at one end: odd ones only, f = n c/4L. An open end acts as if the pipe were longer by about 0.61 radius.
- In a resonance tube, successive resonances are λ/2 apart, so the spacing gives c = 2f × spacing, and the end correction comes from the intercept of a straight line fit.
- A string's f₁ = (1/2L)√(T/μ). Where it is plucked decides which harmonics it gets: any mode with a node at the pluck point is missing.
- A bottle is not a pipe: it is a Helmholtz resonator, a mass of air in the neck on the spring of air in the body. Its note follows the volume: f = (c/2π)√(A/(V L_eff)).

## Before class

Students should know standing waves on a string and the relation c = fλ. The demo has three resonators, **Pipes** (with **Resonance tube**, **Open pipe** and **Closed pipe**), **Strings** and **Bottle**. Sound starts off: press **Sound off** and set **Volume** before class; laptop speakers lose the bottle's low note. For a lab style run, tick **Blind** so the computed response, the true resonance positions and the expected values are hidden, and give the class one **Reading seed** so everyone's simulated readings agree.

## Running it in class

1. **Resonance tube, find c**. Ask Q1 first. With sound on, drag the water surface slowly down (or use the arrow keys): the tone swells at each resonance and the swept level traces out on the plot. Press **Capture reading** at each loudest point.
2. Fit the readings. The **Readings** plot of L against (2k − 1)/4f gives c from the slope and the end correction from the intercept. Use Q2, then change **Source frequency f** (the fork chips) and add readings at a second frequency: the points stay on one line. Ask Q3 and move **Air temperature** to check.
3. **Open vs closed pipe**. Play **All modes**, then switch to **Open pipe**: the closed pipe sounds hollow and lower. Compare the rows of **Allowed frequencies**, click a mode to see its patterns, and ask Q4.
4. **Pluck at the middle**. Point out the crosses: every even harmonic is exactly zero. Ask Q5 as a prediction, then press **L/3** and pluck again.
5. **Guitar string**. Switch **Spectrum of** between **String shape bₙ** and **Bridge force n·bₙ**, and compare plucks near the bridge (**L/10**) and at the middle by ear (Q6). Try **Bow** for the steady, buzzy sawtooth of a bowed string.
6. **Bottle, blow across it**, then **Fill the bottle**. Ask Q7 before pouring, then compare the two curves on the plot.

## Questions

**Q1.** Predict: a 512 Hz fork sounds over a 1 m tube of air whose bottom is water, at 20 °C (c = 343.2 m/s). The tube's inner diameter is 3.2 cm. As the water is lowered from the top, at which air column lengths L will the sound be loud? How far apart are those positions? Check with **Resonance tube, find c**.

**Q2.** At 512 Hz a student records resonances at L = 16.0 cm, 49.1 cm and 82.9 cm. Using the first and third readings, find the wavelength, the speed of sound and the end correction ΔL. Compare ΔL with 0.61a for this 3.2 cm tube. Why is the end correction known much less precisely than c? (To see the fit, capture three readings and type these values over them.)

**Q3.** On a 30 °C day the same experiment is repeated. Do the resonance positions move up or down the tube, and by about how much is the first one shifted? Does the spacing between resonances change? Check with **Air temperature**.

**Q4.** A pipe 60 cm long and 3.0 cm across is played open at both ends and then with one end closed, at 20 °C. Find the lowest frequency in each case, including the end corrections, and list the next two resonances of each. Explain why the closed pipe has only odd harmonics, and why its lowest note is not exactly an octave below the open pipe's.

**Q5.** Predict: a string is plucked a third of the way along its length. Which harmonics are missing from its sound, and why? For a pluck at the middle, how many decibels below the fundamental is the third harmonic in the string's shape? Check with **L/3** and **Pluck at the middle**.

**Q6.** A guitar's high E string is 0.25 mm steel with μ = 0.398 g/m, under 72.6 N of tension, on a 648 mm scale. Find its wave speed and f₁. By how many cents does the pitch rise if the tension goes up by 6%? Then explain why a pluck near the bridge sounds brighter than a pluck at the middle, using **Bridge force n·bₙ**.

**Q7.** Predict: a 750 mL bottle with an 8.0 cm neck of inner diameter 1.9 cm is blown across at 20 °C. Use f = (c/2π)√(A/(V L_eff)) with L_eff = L + 1.43a to find its note. How much water raises the note an octave? Check with **Fill the bottle**. The closed pipe formula gives about 330 Hz for this bottle: why does it fail, and what condition on size makes the Helmholtz model work?

## Common misconceptions

- **"The loud positions are a quarter wavelength apart."** Successive resonances of a tube closed by water are half a wavelength apart; only the first one is (nearly) a quarter wavelength from the top.
- **"The wave stops at the open end."** The pressure node sits about 0.61 radius outside an unflanged end; ignoring it makes c from one resonance too small.
- **"Plucking anywhere gives the same note and the same sound."** The pitch is the same, but the pluck point removes every harmonic with a node there and changes the balance of the rest.
- **"A bottle is a pipe, so a taller bottle sounds lower."** Its note depends on the air volume and the neck, not on the height.

## Physics behind the demo

c = 331.3 m/s × √(1 + t/273.15 °C) (ideal gas, dry air). Pipes: plane waves; an open end is a pressure node ΔL = 0.6133a beyond the pipe (unflanged, Levine and Schwinger, ka ≪ 1). Open pipe fₙ = n c/2(L + 2ΔL); closed pipe fₙ = n c/4(L + ΔL), n odd. Resonance tube: resonances at L = (2k − 1)λ/4 − ΔL; the level is 1/|cos(k̃(L + ΔL))| with k̃ = (2πf/c)(1 − i/2Q), one illustrative Q for all resonances. Readings get a seeded simulated scatter, σ = 1.5 mm. Strings: ideal string, triangular pluck bₙ = 2 sin(nπp)/(n²π² p(1 − p)), p = x₀/L (a finger of width w multiplies bₙ by sin(u)/u, u = nπw/2L). The sound is the bridge force n·bₙ, each mode decaying with τₙ = τ₁/n (illustrative); bowing is the ideal Helmholtz motion, bₙ ∝ 1/n². Bottle: lumped Helmholtz resonator, L_eff = L + (0.6133 + 0.8216)a; comparison pipe c/4(H + 0.61a), H the height of the air space. Animations are slowed.
