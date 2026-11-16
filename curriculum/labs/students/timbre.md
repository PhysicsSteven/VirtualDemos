# Timbre and Harmonics
Student laboratory · Acoustics

Textbook: OpenStax *University Physics*, Vol. 1, §§17.4 and 17.5. Access for free at https://openstax.org/details/books/university-physics-volume-1.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/timbre.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo** (the Presets chips)**:** Square wave; Sawtooth wave; Triangle wave; Like a clarinet; Like a flute; Missing fundamental; Wave packet; Vowels. The demo opens on Sawtooth wave with f₁ = 220 Hz (A3); Square wave, Triangle wave, Missing fundamental, Wave packet and Vowels also set 220 Hz, Like a clarinet sets D3 (146.8 Hz) and Like a flute A4 (440 Hz).

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
- Inharmonic partials: a detuned harmonic is shifted by Δf, so the shape drifts through a full cycle every $$1/\lvert \Delta f\rvert$$; stiffness stretches every partial as $$f_n = n f_1\sqrt{\frac{1 + Bn^2}{1 + B}},$$ scaled so partial 1 stays at $$f_1$$. The ladder shows ideal string and pipe modes with no end correction, slowed so f₁ is drawn at 0.5 Hz.
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

**Wave packets.** A sum of harmonics with amplitudes $$a_n = \exp\left(-(n - n_0)^2/2\sigma^2\right)$$, all with a crest at the same place, is a short bump, a wave packet, centered on harmonic $$n_0$$. Seen against position, harmonic $$n$$ has wave number $$k_n = n k_1$$ with $$k_1 = 2\pi/\lambda_1$$. If $$\Delta k$$ is the spread of the wave numbers in it and $$\Delta x$$ the width of the packet, both as root mean square spreads of the squared amplitudes, then for a Gaussian with nothing cut off

$$\Delta x\,\Delta k = \frac12,$$

the smallest the product can be for any shape. A narrow packet needs a wide spread of wave numbers.

## Before the lab

1. A tone contains harmonics 2, 3, 4 and 5 of 220 Hz. Must its repetition frequency be 440 Hz because harmonic 1 is missing?
2. What does halving an amplitude do to its level in dB?
3. Suppose every harmonic of a sawtooth is given a new, random phase and keeps its amplitude. Which of these will change: the shape of the waveform, the levels in the spectrum, the RMS, the peak/RMS ratio, the repetition period?
4. A packet is made twice as narrow. What must happen to the spread of wave numbers in it?

## Safety

Use a comfortable listening level with real speakers or headphones. High volume is unnecessary for comparing tones. All quantitative parts can be completed from the plots if sound is unavailable.

## Procedure

**Compare spectra.** Press the **Sawtooth wave**, **Square wave** and **Triangle wave** presets in turn; each sets $$f_1 = 220\ \text{Hz}$$ (check the **Fundamental f₁** readout). After each one press **Record harmonics 1 to 6**, which records the frequency, relative amplitude and level of harmonics 1 to 6, with the RMS and peak/RMS in the notes of the first row. Note which harmonics are missing ("off") and how the three waveforms look. Press **Export to worksheet**, then **Clear**.

**Change the harmonics.** Press **Missing fundamental** and then **Record harmonics 1 to 6**; the repetition period (the **Waveform repeats every** readout) goes in the notes. Tick **Also remove harmonic 2** and record again. Next press **Pure tone**, make bars 2, 4, 6 and 8 equal (drag each to the top, or select it with the left and right arrow keys and press the up arrow), then select bar 1 and press 0, so only those four sound. Record again and compare this period with the Missing fundamental period. Export to worksheet, then Clear.

**Change phase.** Press **Sawtooth wave** again and record. Then press **Randomize phases** three times, pressing **Record harmonics 1 to 6** after each, so the Phase column and the RMS and peak/RMS in the notes show what changed and what did not. Write down what changes in the waveform and spectrum. If listening, describe the sound separately from the numerical results. Export to worksheet, then Clear.

**Wave packets.** Press the **Wave packet** preset, which plots the waveform against position with **Packet center n₀** at 8. In the In space section, set **Packet spread σ** to 1.0, 2.0, 3.0 and 4.0 harmonics (0.1 a step) and copy **Spread in k, Δk** and **Packet width Δx** into the Wave packets table by hand (these are not exported; Δx below 0.1 m shows in cm, so convert to m). Watch the spectrum as $$\sigma$$ grows.

**Using the virtual apparatus.** Adjust amplitudes with the harmonic bars and phases with the dials. Read frequencies and relative levels in **Strongest partials**, which lists the six strongest harmonics. Use **Waveform repeats every**, **RMS (bar units)** and **Peak / RMS** for the comparisons. **Record harmonics 1 to 6** records the six harmonics of the tone on screen as six rows, with $$f_1$$, $$B$$ and $$\Delta f$$ in the notes. Send each part to the worksheet before clearing, so each part gets its own copy of the Data table.

## Data

| Run or preset | Harmonic $$n$$ | Frequency (Hz) | Relative amplitude | Level (dB) | Phase | RMS / period / notes |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |
| | | | | | | |

Use rows for all requested harmonics and phase comparisons. State which partial is the dB reference.

**Wave packets.** Work out the last two columns yourself.

| Spread $$\sigma$$ (harmonics) | Center $$n_0$$ | $$\Delta k$$ (rad/m) | $$\Delta x$$ (m) | $$\Delta x\,\Delta k$$ | $$1/\Delta k$$ (m) |
|---|---|---|---|---|---|
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |

## Analysis

1. Compare amplitudes with $$1/n$$ for Sawtooth and odd only Square, and with $$1/n^2$$ for the odd harmonics of Triangle. Calculate one relative dB level yourself.
2. Calculate rms from the amplitudes of the Square wave and compare with the display. The presets hold 16 harmonics, following the formulas in Analysis 1, while the table lists only the first six.
3. Explain each missing fundamental period using the common factor of the harmonic numbers present.
4. Plot $$\Delta x$$ (vertical) against $$1/\Delta k$$ (horizontal) from the Wave packets table, with a free intercept. Compare the slope with 1/2. At which $$\sigma$$ does $$\Delta x\,\Delta k$$ start to rise above 1/2, and why? (Look at which harmonics the packet would need.)

## Uncertainty

State the resolution of the frequency and amplitude controls and how closely you can read waveform timing. Compare calculations with the displayed digits rather than inventing random scatter. If you estimate a peak from a plotted curve, give a reading interval. Listening impressions are observations, but they are not calibrated measurements of amplitude or loudness.

## Questions

1. A short click of sound has a wide spread of frequencies, a long steady tone a narrow one. Explain this from $$\Delta x\,\Delta k \ge 1/2$$, using $$x = vt$$ and $$k = 2\pi f/v$$.
2. Which of your answers to Before the lab 3 held up in the Change phase runs? Say what changed and what stayed put, and explain each from the rms formula in Background and from where the crests of the harmonics fall. Then say what a comparison of steady spectra alone still leaves out of a real instrument's sound.

## What to hand in

Prelab answers, the table and screenshots, dB and rms calculations, period explanations, the Wave packets table with its graph, and answers to the questions. State whether you listened as well as using the plots.
