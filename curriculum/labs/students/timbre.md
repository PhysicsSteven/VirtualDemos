# Timbre and Harmonics
Student laboratory · Acoustics

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/timbre.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo** (the Presets chips)**:** Square wave; Sawtooth wave; Triangle wave; Like a clarinet; Like a flute; Missing fundamental. The demo opens on Sawtooth wave with f₁ = 220 Hz (A3); Square wave, Triangle wave and Missing fundamental also set 220 Hz, Like a clarinet sets D3 (146.8 Hz) and Like a flute A4 (440 Hz).

**Using the demo.**

- The picture is a harmonic synthesizer: 16 bars for the amplitudes of harmonics 1 to 16 with a phase dial under each, the spectrum (its dots can be dragged to set levels in dB), the waveform (the sum, with its repetition period bracketed; drag the end of the bracket to change f₁) and a ladder showing each harmonic as a mode of a **String**, **Open pipe** or **Closed pipe**. Drag the bars (sweep across several to paint them) and the dials. Keys: left and right arrows select a harmonic, up and down change its amplitude by 0.05 (0.01 with Shift), the bracket keys turn its phase by 15°, 0 or Delete silences it.
- **Fundamental f₁** moves in steps of one cent from three octaves below A4 to one octave above it, and the piano keyboard plays C3 to C5 in equal temperament. Buttons: **Pure tone** (harmonic 1 alone), **All equal**, **Randomize phases**, **All phases zero**; ticks **Remove harmonic 1 (the fundamental)** and **Also remove harmonic 2**. The **Compare instruments** slider blends five illustrative spectra (flute, clarinet, oboe, trumpet and bowed string like).
- Readouts: **Period T₁ = 1/f₁** and where harmonic 16 lies; **Waveform repeats every** and **Pitch from the period**; the **Strongest partials** table, the six strongest harmonics with their frequencies and levels relative to the strongest, which is 0 dB; **Peak / RMS** and **RMS (bar units)**. The folded Inharmonic partials section has **Detune harmonic** (1 to 16) **by Δf** (−20 to 20 Hz in 0.1 Hz steps), **Stiffness B** (0 to 0.02), the readouts **Shape cycles every** and **Partial 16 / 16 f₁**, and **Back to exact harmonics**.
- **Record harmonics 1 to 6** adds six rows for the tone as it is now: the run number and preset name, n, frequency, amplitude relative to the strongest partial, level in dB (0 dB for the strongest, "off" for a silent harmonic) and phase in degrees, with the RMS, peak/RMS, repetition period, f₁, B, Δf and any removed harmonics in the notes of the first row. **Export to worksheet** fills the Data table in order: Run or preset, n, Frequency, Relative amplitude, Level, Phase, notes.
- With **Sound** on you hear exactly the drawn sum, 16 sine oscillators, scaled to one RMS level so the presets compare fairly; harmonics above 8 kHz play 12 dB quieter.

**What the demo models.**

- Each harmonic is a pure sine held steady with no attack or decay, $$x(t) = \sum_n a_n\sin(2\pi f_n t + \phi_n),\qquad f_n = n f_1,$$ and a dial points along $$\phi_n$$, measured counterclockwise from the right. Real instruments change their spectrum during every note.
- Levels are $$20\log_{10}(a_n/a_{\rm ref})$$ with the strongest partial as the 0 dB reference (in the spectrum, the top of a bar); the RMS is $$\sqrt{\tfrac12\sum_n a_n^2}$$ in bar units; the repetition period comes from the greatest common factor of the harmonic numbers present, and a tone with a detuned or stretched partial never repeats exactly. Equal temperament: $$f = 440\ \text{Hz}\times 2^{k/12},$$ k semitones from A4.
- Square wave, Sawtooth wave and Triangle wave are the exact Fourier series cut off at 16 harmonics, which causes the ripples near the jumps: $$a_n = 1/n$$ for every harmonic (sawtooth), $$a_n = 1/n$$ for odd n (square) and $$a_n = 1/n^2$$ for odd n with harmonics 3, 7, 11 and 15 inverted (triangle). The Like a clarinet and Like a flute presets and the instrument slider are illustrative spectra chosen to show one feature, not measurements of real instruments.
- Inharmonic partials: a detuned harmonic is shifted by Δf, so the shape drifts through a full cycle every $$1/|\Delta f|$$; stiffness stretches every partial as $$f_n = n f_1\sqrt{\frac{1 + Bn^2}{1 + B}},$$ scaled so partial 1 stays at $$f_1$$. The ladder shows ideal string and pipe modes with no end correction, slowed so f₁ is drawn at 0.5 Hz.
- The readings are simulated: the tone is synthesized, not recorded.

</details>

## Goal

Find how a sound's harmonic amplitudes and phases affect its waveform, repetition period and timbre.

## Background

A steady musical tone can be built by adding sine waves. Harmonics have frequencies that are whole number multiples of a fundamental:

$$x(t)=\sum_n a_n\sin(2\pi n f_1t+\phi_n).$$

The amplitudes $$a_n$$ tell us how much of each harmonic is present. The phases $$\phi_n$$ tell us where each sine wave starts in its cycle. Changing either can change the waveform.

For distinct harmonics, the rms signal is

$$x_{\rm rms}=\sqrt{\frac12\sum_n a_n^2}.$$

A relative amplitude can be written in decibels:

$$L_n=20\log_{10}\left(\frac{a_n}{a_{\rm ref}}\right).$$

The waveform's shortest repetition period depends on all the harmonics present, not just the lowest frequency you can see in the spectrum.

## Before the lab

1. A tone contains harmonics 2, 3, 4 and 5 of 220 Hz. Must its repetition frequency be 440 Hz because harmonic 1 is missing?
2. What does halving an amplitude do to its level in dB?
3. Does the rms formula depend on harmonic phase?

## Safety

Use a comfortable listening level with real speakers or headphones. High volume is unnecessary for comparing tones. All quantitative parts can be completed from the plots if sound is unavailable.

## Procedure

**Compare spectra.** Set $$f_1 = 220\ \text{Hz}$$. Compare **Sawtooth wave**, **Square wave** and **Triangle wave**. Record the amplitudes, frequencies and levels of harmonics 1 to 6. Note missing harmonics. Read the rms value and compare the waveforms.

**Change the harmonics.** Use **Missing fundamental**, then remove harmonic 2 as well. Record the repetition period. Next use **Pure tone** and set only harmonics 2, 4, 6 and 8 to equal heights. Record the new period and compare it with the first case.

**Change phase.** Return to Sawtooth. Record the rms and peak/rms ratio, then use **Randomize phases** three times. Record what changes in the waveform and spectrum. If listening, describe the sound separately from the numerical results.

**Detune a partial.** In the Inharmonic partials section, set **Detune harmonic** to 3 and **by Δf** to +1.5 Hz, and watch the shape drift. Then select **Back to exact harmonics** and compare stiffness $$B = 0$$, 0.005, 0.010 and 0.020. Record the first, third and fifth partial frequencies.

**Using the virtual apparatus.** Adjust amplitudes with the harmonic bars and phases with the dials. Read frequencies and relative levels in **Strongest partials**, which lists the six strongest harmonics. Use **Waveform repeats every**, **RMS (bar units)** and **Peak / RMS** for the comparisons. **Record harmonics 1 to 6** records the six harmonics of the tone on screen as six rows. Send each part to the worksheet before clearing, so each part gets its own copy of the Data table. Keep $$f_1$$, $$B$$ and $$\Delta f$$ written beside each run. **Detune harmonic** and **Stiffness B** are in the folded Inharmonic partials section.

## Data

| Run or preset | Harmonic $$n$$ | Frequency (Hz) | Relative amplitude | Level (dB) | Phase | RMS / period / notes |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |
| | | | | | | |

Use rows for all requested harmonics and phase comparisons. State which partial is the dB reference.

## Analysis

1. Compare amplitudes with $$1/n$$ for Sawtooth and odd only Square, and with $$1/n^2$$ for the odd harmonics of Triangle. Calculate two relative dB levels yourself.
2. Calculate rms from the amplitudes and compare with the display.
3. Explain each missing fundamental period using the common factor of the harmonic numbers present.
4. Calculate the frequency of the detuned third partial and the relative phase drift time $$1/\lvert\Delta f\rvert$$.
5. Compare the stiffness results with

$$f_n=nf_1\sqrt{\frac{1+Bn^2}{1+B}}.$$

## Uncertainty

State the resolution of the frequency and amplitude controls and how closely you can read waveform timing. Compare calculations with the displayed digits rather than inventing random scatter. If you estimate a peak from a plotted curve, give a reading interval. Listening impressions are observations, but they are not calibrated measurements of amplitude or loudness.

## Questions

1. Why can phase change the waveform without changing rms?
2. Why can a tone still repeat at the original fundamental frequency after harmonic 1 is removed?
3. Why do Square and Triangle sound different even though both have only odd harmonics?
4. What part of a real instrument's sound is missing from a comparison of steady spectra alone?

## What to hand in

Prelab answers, the table and screenshots, dB and rms calculations, period explanations, the detuning and stiffness comparison, and answers to the questions. State whether you listened as well as using the plots.
