# Sampling and Aliasing
Student laboratory · Acoustics

Textbook: OpenStax *University Physics*, Vol. 1, §§17.4 and 17.5, with the sampling ideas below, which the book does not cover. Access for free at https://openstax.org/details/books/university-physics-volume-1.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/timbre.html?ws=sampling-aliasing)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo** (the Sampling setups chips in the **Sampling and aliasing** section of the right panel)**:** Too slow for the tone (a pure 440 Hz tone, 64 samples at 460 Hz); Harmonics fold over (the sawtooth at 220 Hz, 256 samples at 2,000 Hz, Hann window); Antialiasing filter (the same with the filter on, cutoff 800 Hz); Leakage (a pure 440 Hz tone, 64 samples at 8,000 Hz); Noise floor (a pure 440 Hz tone, 256 samples at 8,000 Hz, Hann window, noise of RMS 0.05).

**Using the demo.**

- Tick **Sample the tone with a converter**, or press a setup. The waveform panel becomes the record: the analog input in gray, the samples as dots, joined by straight lines as a digital oscilloscope draws them (or, with **Join the samples: Smooth**, by the one smooth curve through them that has nothing above f_s/2). The spectrum panel shows two strips: on top, each partial at its true frequency, with f_s/2 marked and the region above it hatched; below, the spectrum of the samples from 0 to f_s/2, what the converter reports. Dashed lines join each partial to where it lands.
- **Sample rate f_s** runs from 100 Hz to 48,000 Hz; click its readout to type an exact value. **Samples N** (32 to 1024), **Window** (Rectangular or Hann), **Whole cycles in the record** (sets f_s so the record holds a whole number of periods of f₁), **Antialiasing filter before the converter** with **Filter cutoff f_c** (a fraction of f_s), **Converter noise (RMS)** in bar units and **New noise**.
- Readouts: **Nyquist frequency f_s/2**, **Record length N/f_s**, **Resolution Δf = f_s/N**, **Samples per period of f₁**, **Strongest peak** (the frequency of the strongest bin, with its bin number), **Peak level**, **Bins within 40 dB of the peak** and **Noise floor** (with the expected value when there is noise). The table under them lists each partial: its true frequency, where it appears after sampling (↩ marks one that folded back) and its level after the filter.
- **Record this reading** adds one row: f₁, f_s, N, the window, the filter, the noise, the strongest peak, its level, the bins within 40 dB and the noise floor. **Export to worksheet** fills the Data table in order: Run, f_s, N, Window, Peak frequency, Peak level, Bins within 40 dB, Noise floor. The harmonic bars, the **Pure tone** button and the **Fundamental f₁** slider work as in Timbre and Harmonics.

**What the demo models.**

- The converter takes the signal at $$t_k = k/f_s$$, $$k = 0$$ to $$N - 1$$, with no rounding to levels. The tone is a sum of pure sines (the harmonic bars); the antialiasing filter is an ideal eighth order Butterworth low pass, $$\lvert H\rvert = 1/\sqrt{1 + (f/f_c)^{16}},$$ in front of the converter. The converter noise is simulated white noise added to each sample; **New noise** draws another set.
- The spectrum is the discrete Fourier transform of the samples, with bins at $$k\,\Delta f$$, $$\Delta f = f_s/N$$, scaled so a sine of amplitude $$a$$ that fits a whole number of cycles in the record reads exactly $$a$$ (0 dB for $$a = 1$$) with either window. The noise floor is the RMS level of the bins more than 4 bins from every partial.
- With Sound on you hear the ideal reconstruction: each partial at its apparent frequency, through the filter; the noise is not played.

</details>

## Goal

Find what a digital instrument reports when it samples a signal: the apparent frequency of a tone sampled too slowly, where harmonics above half the sample rate land, how the record length sets the frequency resolution and the noise floor, and why a tone that does not fit the record spreads out.

## Background

A converter (in a sound card, a digital oscilloscope or a phone) measures a signal only at the sample times $$t_k = k/f_s$$, where $$f_s$$ is the sample rate. Between samples it knows nothing.

**Aliasing.** A sine at $$f$$ and a sine at $$f - m f_s$$, for any whole number $$m$$, take exactly the same values at every sample time, because $$\sin(2\pi f k/f_s + \phi) = \sin(2\pi (f - m f_s) k/f_s + 2\pi m k + \phi)$$ and $$2\pi m k$$ is a whole number of turns. The converter cannot tell them apart, so it reports the one closest to zero. The apparent (alias) frequency is

$$f_a = \lvert f - m f_s\rvert,\qquad m = \text{the whole number nearest } f/f_s,$$

which always lies between 0 and the Nyquist frequency $$f_s/2$$. A signal is recorded correctly only if every frequency in it is below $$f_s/2$$: at least two samples per cycle. Above $$f_s/2$$ a frequency folds back, as if the frequency axis were folded like an accordion at every multiple of $$f_s/2$$. Once a partial has folded, nothing done to the samples later can tell it from a real one, so the signal must be filtered *before* sampling, with an antialiasing filter.

**The spectrum of a record.** $$N$$ samples last $$T = N/f_s$$. Their discrete Fourier transform gives the spectrum at the bins $$0, \Delta f, 2\Delta f, \dots, f_s/2$$, with

$$\Delta f = \frac{f_s}{N} = \frac1T .$$

A longer record gives finer resolution. A tone that fits a whole number of cycles in the record falls exactly on a bin. Any other tone spreads into the bins around it, called leakage, and its peak reads low. A window, such as the Hann window, tapers the record to zero at both ends: the peak gets wider, but the leakage far from it almost disappears.

**Noise.** White noise spreads its power evenly over all $$N/2$$ bins, while a tone puts its power in one. So the noise level per bin falls as $$1/\sqrt N$$: each doubling of $$N$$ lowers the noise floor by $$10\log_{10}2 = 3.01$$ dB, and a factor of 10 in $$N$$ lowers it by 10 dB, while the tone's peak stays put.

## Before the lab

1. A 440 Hz tone is sampled at 500 Hz. Predict its apparent frequency.
2. What is the highest frequency a converter sampling at 2,000 Hz records correctly?
3. A record has 256 samples at 8,000 Hz. How long is it, and how far apart are its bins?

## Procedure

**A. A tone sampled too slowly.** In the right panel, find the **Sampling and aliasing** section and press the **Too slow for the tone** setup: a pure 440 Hz tone (A4) sampled at 460 Hz. Look at the record: the samples trace a slow wave that is not in the tone. Now set **Samples N** to 256. For each sample rate in this list, click the **Sample rate f_s** readout, type the value and press Enter, then press **Record this reading**: 2000, 1000, 900, 700, 600, 500, 460, 400, 300 and 250 Hz. The **Strongest peak** readout goes in the Peak frequency column. Press **Export to worksheet**, then **Clear**.

**B. Harmonics fold over.** Press **Harmonics fold over**: the sawtooth at 220 Hz (every harmonic, $$a_n = 1/n$$) sampled at 2,000 Hz. In the table under the readouts, copy the frequency, where it appears and the level of harmonics 4 to 8 into the Folding table. Then tick **Antialiasing filter before the converter** (cutoff 0.40 f_s = 800 Hz) and copy the level of the same harmonics into the last column. If you can listen, turn on **Sound** and untick and tick the filter.

**C. Leakage.** Press **Leakage**: a pure 440 Hz tone, 64 samples at 8,000 Hz, rectangular window. Press **Record this reading**. Press **Whole cycles in the record** and record again. Then choose **Window: Hann** and record a third time. Press **Leakage** once more, choose **Window: Hann** and record a fourth time. The **Peak level** and **Bins within 40 dB of the peak** readouts are the ones to compare. Export to worksheet, then Clear.

**D. The noise floor.** Press **Noise floor**: the same tone with simulated converter noise of RMS 0.05 and the Hann window. Record a reading with **Samples N** set to 64, 128, 256, 512 and 1024 in turn; the **Noise floor** readout goes in its column. Export to worksheet. To see how much the floor scatters, press **New noise** three times at N = 256 and note the noise floor each time in the notes under the table.

## Data

| Run | Sample rate $$f_s$$ (Hz) | Samples $$N$$ | Window | Peak frequency (Hz) | Peak level (dB) | Bins within 40 dB | Noise floor (dB) |
|---|---|---|---|---|---|---|---|
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |

Parts A, C and D each get their own copy of this table.

**Folding (part B, $$f_s$$ = 2,000 Hz).**

| Harmonic $$n$$ | Frequency (Hz) | Appears at (Hz) | Level, no filter (dB) | Level, filter on (dB) |
|---|---|---|---|---|
| | | | | |
| | | | | |
| | | | | |
| | | | | |
| | | | | |

## Analysis

1. For each row of part A, work out the apparent frequency $$f_a$$ from the formula in Background and the bin spacing $$\Delta f = f_s/N$$. Does every measured peak lie within $$\Delta f/2$$ of $$f_a$$?
2. Graph the peak frequency (vertical) against the sample rate (horizontal) for part A. Describe the shape. Above what sample rate is the 440 Hz tone reported correctly, and how does that compare with $$2 \times 440$$ Hz?
3. Use the formula to predict where harmonics 5 and 8 of 220 Hz appear at $$f_s$$ = 2,000 Hz, and compare with your Folding table. Are the folded partials harmonics of 220 Hz?
4. From $$\lvert H\rvert = 1/\sqrt{1 + (f/f_c)^{16}}$$ with $$f_c$$ = 800 Hz, calculate in dB how much the filter weakens harmonic 5 and harmonic 8, and compare with the change in their levels in your Folding table. Why does harmonic 5, the one closest to $$f_s/2$$, get through the most?
5. From part C, explain the peak level and the bins within 40 dB for each of the four readings.
6. Graph the noise floor (vertical) against $$N$$ (horizontal) for part D and fit a logarithm, $$y = a + b\ln x$$. The Background predicts a fall of 10 dB per factor of 10 in $$N$$, which is $$b = -10/\ln 10 = -4.34$$ dB. Compare your $$b$$ with that.

## Uncertainty

A peak frequency is known only to the nearest bin, $$\pm\Delta f/2$$, unless the tone falls exactly on a bin. The noise floor is itself an average of random numbers, so it scatters from one record to the next: use your three New noise readings at N = 256 to estimate that scatter, and compare it with the residuals of your fit in Analysis 6. Every value here is computed by the demo; the noise is simulated.

## Questions

1. A digital oscilloscope stores 1,000 samples across its screen. Set to 0.5 s across the screen, what is its sample rate, and what would it show for a 1,990 Hz signal?
2. Audio CDs use $$f_s$$ = 44,100 Hz. What is the highest frequency they record, and why must the antialiasing filter in a CD recorder fall from passing everything at 20 kHz, the top of human hearing, to almost nothing by 22.05 kHz?

## What to hand in

Prelab answers, the three copies of the Data table and the Folding table, the two graphs with the fit, the calculations in Analysis, the scatter estimate and answers to the questions.
