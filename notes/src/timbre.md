---
title: Timbre and Harmonics
level: Acoustics; intro physics (waves and sound); music and physics
time: 15 to 30 minutes
---
## What students should come away with

- A steady musical tone is a sum of sine waves at whole number multiples of a fundamental, fₙ = n f₁. The mix of amplitudes, the spectrum, sets the tone color (timbre).
- The square, sawtooth and triangle waves have exact Fourier series: odd harmonics at 1/n, all harmonics at 1/n, and odd harmonics at 1/n² with alternating signs.
- Pitch follows the repetition period of the waveform. Removing the fundamental leaves the period, and the pitch, unchanged.
- The ear is nearly deaf to the phases of a steady tone's harmonics (Ohm's acoustic law): the waveform can change shape completely while the sound barely changes. The rule has limits.
- Partials that are not exact harmonics make the waveform stop repeating: a slowly drifting shape for one detuned harmonic, a clangy tone with no clear pitch for strongly stretched partials.

## Before class

Students should know frequency, period and the harmonics of a string or pipe. Bring speakers or use headphones: laptop speakers drop the lowest fundamentals, which muddles the missing fundamental demonstration. Sound starts off: press **Sound off** and set **Volume** before class. Every tone is scaled to the same RMS level, so presets compare fairly. The waveform, spectrum, **Harmonic ladder** and **Harmonic bars** share one color per harmonic.

## Running it in class

1. **Sawtooth wave** (the opening state, A3 = 220 Hz). Play it, then press **Pure tone** and back. Point out the three views: one bar per harmonic, one line per partial in the spectrum, one vibrating mode per harmonic on the ladder. Ask Q2.
2. **Square wave**, then **Triangle wave**. Both have only odd harmonics; listen to how much mellower the triangle is. Tick **Ideal shape** off and on to see the 16 harmonic sum against the infinite series, with the ripple at the jumps (Q3 first part).
3. **Like a clarinet**. Switch the ladder to **Closed pipe**: the even modes are crossed out. Ask Q3.
4. **Compare instruments**. Keep f₁ fixed and drag the slider slowly from Flute to Bowed string. Name what changes at each stop: the flute is nearly a sine, the clarinet's even bars drop out, the oboe's fundamental is weaker than harmonics 3 and 4, the trumpet keeps many strong harmonics. The pitch readout never moves: only the mix of harmonics, and so the tone color, changes. The spectra are illustrative, and real instruments also differ in their attacks.
5. **Missing fundamental**. Ask Q1 before playing. Play it, tick and untick **Remove harmonic 1 (the fundamental)**, then **Also remove harmonic 2**: the bracket still reads 4.55 ms and the pitch stays A3. Then set only harmonics 2, 4, 6, 8 with the bars (Q4).
6. **Randomize phases** on the **Sawtooth wave**, several times, with sound on. The waveform and **Peak / RMS** change; the spectrum, the RMS and the sound barely do (Q5). Try again at f₁ = 55 Hz (drag the slider to A1).
7. **Inharmonic partials**. Set **by Δf** to 1.5 Hz on harmonic 3: the trace drifts and the tone throbs (Q6). Press **Back to exact harmonics**, then raise **Stiffness B** to about 0.01 for a clangy tone like a bell.
8. Finish on the piano: play C3 and read harmonic 3 and 5 in the table against the G4 and E5 keys (Q7).
9. **Wave packet.** The waveform is plotted against position: a sound wave carries it at 343.2 m/s, so T₁ becomes λ₁ = v/f₁. Widen the **Packet spread σ** and the packet narrows: Δx · Δk stays near 1/2.
10. **Medium for the packet.** Press **Deep water**: the crests (marked v_p) run forward through the packet, appearing at its back and vanishing at its front, while the envelope (v_g) moves at half their speed and slowly spreads. Then **Bar or particle**: now the crests slip backward through the envelope. **Start the packet again** to compare from the same start (Q8).
11. **Vowels.** Pick **ah · hod**, then **ee · heed** and **oo · who'd**, with sound on: the dashed envelope in the spectrum peaks at the formants F1, F2, F3 and the harmonics under it change, while the pitch stays A3. Then drag f₁ down an octave and back: the harmonics slide under the same envelope and the vowel stays the same (Q9).

## Questions

**Q1.** Predict: a tone has harmonics 2 to 10 of 220 Hz but nothing at 220 Hz itself. Will its waveform repeat every 1/220 s, every 1/440 s, or not at all? Which pitch will listeners hear? Check with **Missing fundamental**.

**Q2.** The **Sawtooth wave** preset has f₁ = 220 Hz and aₙ = 1/n. Find the period, the frequencies of harmonics 3 and 16, and the level of harmonic 3 and of harmonic 5 relative to the fundamental in dB. What are those two levels for the triangle wave? Check with the **Strongest partials** table.

**Q3.** The square wave and the triangle wave both contain only odd harmonics, yet they sound quite different. Explain why, using how fast their amplitudes fall with n. Then explain why a clarinet's low notes are rich in odd harmonics, using the **Closed pipe** ladder.

**Q4.** Starting from **Pure tone** at A3, set harmonics 2, 4, 6 and 8 to equal heights and leave every other bar at zero. What do the waveform period and the pitch become, and why does this differ from removing only the fundamental in Q1? Check with **Waveform repeats every** and **Pitch from the period**.

**Q5.** **Randomize phases** changes the sawtooth's waveform dramatically. Which of these change: the spectrum, the RMS, the peak value, the sound? Explain using what the ear analyzes. Give one situation where phase can be heard.

**Q6.** With f₁ = 220 Hz, harmonic 3 is detuned by Δf = +1.5 Hz. What is its frequency, and by what percentage is it mistuned? How long does the waveform take to drift through a full cycle of its shape, and why? Roughly what Δf would mistune it by 3%, where it starts to stand out as a separate tone?

**Q7.** In equal temperament C3 is 130.81 Hz, G4 is 392.00 Hz and E5 is 659.26 Hz. Find the frequencies of harmonics 3 and 5 of C3 and how far each lies from the equal tempered note, in hertz and in cents (1 cent = 1/100 semitone, a ratio of 2^(1/1200)). If C3 and E5 are played together on an equal tempered instrument, what beat rate do you expect between E5 and the 5th harmonic of C3? Check the harmonics in the demo with the C3 key.

**Q8.** Deep water waves follow ω = √(gk). Show that their group velocity is half their phase velocity. For an ocean swell with λ = 100 m, find v_p and v_g. On **Deep water**, where do crests appear and where do they vanish as the packet moves? What changes on **Bar or particle**, where ω ∝ k²?

**Q9.** With **ah · hod** at A3 (220 Hz), which harmonics lie nearest F1 = 850 Hz and F2 = 1220 Hz? Lower f₁ to A2 (110 Hz) and answer again. Why does the vowel still sound like ah? A soprano sings ee (F1 = 310 Hz) at about 1000 Hz: why is the vowel hard to recognize?

## Common misconceptions

- **"The pitch you hear is the lowest frequency present."** The pitch follows the repetition period, 1/T, which can be a frequency with no energy at all (the missing fundamental).
- **"Two sounds with different waveforms must sound different."** Shifting the phases of a steady tone's harmonics changes the waveform a lot and the sound very little.
- **"A square wave is not made of sines."** It is exactly a sum of odd sine harmonics; any finite sum overshoots at the jumps by about 9% of the jump.
- **"Instrument timbre is just the steady spectrum."** The attack and how the spectrum changes during a note matter at least as much; the demo leaves them out.

## Physics behind the demo

The signal is x(t) = Σ aₙ sin(2π fₙ t + φₙ), n = 1 to 16, 0 ≤ aₙ ≤ 1, fₙ = n f₁. Ideal waves use the exact series with a₁ = 1: square 1/n (odd n), sawtooth 1/n, triangle 1/n² (odd n, inverted for n = 3, 7, 11, 15). Levels are 20 log₁₀ aₙ. The waveform repeats every T = 1/(g f₁), g the greatest common divisor of the harmonic numbers present; RMS = √(Σ aₙ²/2) for any phases. Stiffness: fₙ = n f₁ √((1 + Bn²)/(1 + B)). Equal temperament: f = 440 Hz × 2^(k/12). The ladder shows ideal string and pipe modes, slowed so f₁ is drawn at 0.5 Hz. Sound: 16 sine oscillators with the drawn values, scaled to a fixed RMS with the peak 12 dB below full scale, 12 dB quieter above 8 kHz. The instrument slider mixes five illustrative spectra linearly in amplitude between neighbors, aₙ = (1 − w) aₙ(left) + w aₙ(right), at fixed f₁ and phases. No attack or decay; the instrument spectra are illustrative, not recordings. Packet in a medium: ωₙ = n̄ (n/n̄)^p ω₁ (n̄ the mean harmonic weighted by aₙ²), so every medium keeps the air crest speed at the center and v_g/v_p = p there: 1/2 deep water (ω = √(gk)), 3/2 capillary ripples (ω = √(γk³/ρ)), 2 a bending bar or a free quantum particle (ω ∝ k²); drawn at f₁ = 0.125 Hz; the sound stays the packet in air. Vowels: aₙ = |H(n f₁)|/n, φₙ = arg H(n f₁), H the cascade of three resonances Fᵢ²/(Fᵢ² − f² + i f Bᵢ) with Peterson and Barney (1952) formants for women and assumed bandwidths 80, 100 and 120 Hz (source and filter model, Fant 1960).
