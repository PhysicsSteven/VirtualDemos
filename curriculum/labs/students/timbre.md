# Timbre and Harmonics — Spectrum, Phase and Repetition
Student laboratory · 90 minutes · acoustics for physics majors

[Open Timbre and Harmonics](https://physicssteven.github.io/VirtualDemos/demos/timbre.html)

## Objectives and prelab
Relate a Fourier spectrum to waveform and repetition period; distinguish amplitude, phase, rms and perceived pitch; test harmonic and inharmonic models quantitatively. Prerequisites: sine waves, logarithms and elementary Fourier series. Derive x(t)=Σa_n sin(2πf_n t+φ_n), f_n=nf1, and x_rms²=Σa_n²/2 over an integer number of fundamental periods. Explain why phase-dependent cross terms integrate to zero for distinct integer harmonics. Derive an amplitude level 20log10(a_n/a_ref) and state why this is not a calibrated acoustic SPL.

For a less mathematical course, supply the Fourier coefficients and rms relation, retain the measurement tables and prediction questions, and omit the Fourier-integral derivation. Listening is optional; waveform and spectral observations support all quantitative work.

## Setup and recording
Start with f1=220 Hz, stiffnessB=0 and detuneΔf=0. The **Fundamental f1** slider is musical/logarithmic; record the displayed Hz. The harmonic bars set amplitudes, phase dials set phase; **Strongest partials** levels are relative to the strongest present partial. Record that reference if the fundamental is removed. There is no Capture, CSV or Blind in this demo: use manual tables/screenshots and save any spreadsheet calculations. The illustrated instrument spectra are models, not recordings. Audio is normalized and frequency shaped; volume/ear loudness is not a measurement of bar-unit rms or absolute pressure.

## A. Fourier families (25 minutes)
1. Compare **Sawtooth wave**, **Square wave** and **Triangle wave** at the same f1. Before looking, predict which harmonics vanish and how amplitude falls with n. Record harmonics 1, 2, 3, 5, 9 and 16, their frequencies and relative dB; mark absent harmonics as absent rather than taking log 0 as a finite value.
2. Calculate the rms of the 16-term sum from the amplitudes. Compare with **RMS (bar units)**. Compare **Peak / RMS** and the waveform shape. Use **Ideal shape** to distinguish a truncated sum from an infinite-series curve at a discontinuity.
3. Select **Closed pipe** in the harmonic ladder. Explain displacement boundary conditions and which numbered modes are unavailable; do not infer an experimentally measured spectrum from the ladder alone.

| Preset | n | f_n (Hz) | a_n/a_ref | Level (dB) | Phase | Prediction/observation |
|---|---|---|---|---|---|---|
| | | | | | | |

## B. Missing fundamental and phase (25 minutes)
1. Use **Missing fundamental** or remove harmonic 1 from a harmonic-rich spectrum. Record the remaining harmonic numbers, **Waveform repeats every** and **Pitch from the period**. Predict the repetition period using the greatest common divisor of the remaining indices.
2. Starting with **Pure tone**, set only harmonics 2, 4, 6 and 8 to equal nonzero amplitudes, all others zero. Predict and record repetition period again. Explain the difference from merely removing n=1. Separate computed period-based pitch from any optional listening impression.
3. Return to Sawtooth. Record spectrum, rms and crest factor, then use **Randomize phases** three times. Capture screenshots and readouts. Which quantities are invariant and which vary? If sound is available, report subjective comparisons separately, without treating them as a controlled psychoacoustic experiment.

## C. Inharmonicity (25 minutes)
Use **Inharmonic partials**. At f1=220 Hz, detune harmonic 3 by+1.5 Hz. Predict the actual frequency and fractional detuning, and compare the waveform's shape-drift scale with 1/|Δf|. This is a relative-phase recurrence scale, not proof that the entire signal has no long mathematical common period. Press **Back to exact harmonics**, then vary **Stiffness B** across 0, 0.005, 0.010 and 0.020. Record partials 1, 3 and 5 and compare with f_n=nf1√[(1+Bn²)/(1+B)]. Verify that this normalization holds the first partial fixed.

| B | Δf (Hz) | f1 (Hz) | f3 (Hz) | f5 (Hz) | Reported repetition/drift | Notes |
|---|---|---|---|---|---|---|
| | | | | | | |

## Analysis and submission (15 minutes)
Present coefficient/level comparisons, rms calculations, phase invariants, missing-fundamental reasoning and detuning/stiffness results. Estimate bounds from control/readout increments and waveform timing resolution. Do not assign statistical error bars to exact series coefficients without a measurement process. Distinguish finite 16-term truncation, readout precision, display sampling and human perception. Explain whether phase changes total harmonic energy, why a waveform may change while its magnitude spectrum does not, and why attack/decay and room/speaker response limit a claim about real instrument timbre.
