# Standing Waves: Finding Resonances on a String
Student laboratory · Physics II / Acoustics

Textbook: OpenStax *University Physics*, Vol. 1, §§16.1–16.3, 16.5, 16.6 and 17.6. Access for free at https://openstax.org/details/books/university-physics-volume-1.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/standing-waves.html)

## Goal

Measure the resonance frequencies of a stretched string and test their dependence on harmonic number, length, tension and linear density. Then use beats to measure an unknown frequency.

## Background

For a string with tension $$T$$ and mass per unit length $$\mu$$, the transverse wave speed is

$$v=\sqrt{\frac{T}{\mu}}.$$

With fixed ends separated by $$L$$, the allowed frequencies are

$$f_n=\frac{n}{2L}\sqrt{\frac{T}{\mu}},\qquad n=1,2,3,\ldots.$$

The standing wave has $$n$$ antinodes. A graph of $$f_n$$ against $$n$$ should be approximately linear, with slope $$v/(2L)$$. This ideal relation assumes uniform tension and density, small transverse displacement and fixed endpoints.

**Beats** (§17.6). Two tones of equal amplitude and close frequencies $$f_1$$ and $$f_2$$ add to

$$y = A\cos(2\pi f_1 t) + A\cos(2\pi f_2 t) = \left[2A\cos\left(2\pi\,\frac{f_1 - f_2}{2}\,t\right)\right]\cos\left(2\pi\,\frac{f_1 + f_2}{2}\,t\right).$$

The ear hears the average frequency, with a loudness that follows the slow envelope in brackets. The envelope reaches its full size twice in each of its own cycles, so the loudness swells and fades at the **beat frequency**

$$f_{\rm beat} = \lvert f_1 - f_2\rvert.$$

Between swells the envelope pinches to zero, a quiet moment. If quiet moments are seen at times $$t_1$$ and $$t_N$$, with $$N$$ quiet moments from the first to the last counted, there are $$N - 1$$ beat periods between them and $$f_{\rm beat} = (N - 1)/(t_N - t_1)$$. A single beat frequency does not say whether the unknown tone is above or below the known one; changing the known tone and watching whether the beats speed up or slow down settles it. This is how a piano tuner or a guitarist tunes by ear.

## Before the lab

1. What happens to the fundamental frequency if the tension is multiplied by four?
2. How many antinodes does the third harmonic have?
3. Why is a peak in the driven response more useful than an arbitrary drive frequency for identifying a normal mode?
4. A 440 Hz tuning fork and a guitar string sound together and give 4 beats per second. What are the two possible frequencies of the string? The string is tightened a little and the beats slow to 2 per second. Which was it?

## Safety

On a real vibrating string bench, secure the string and hanging masses, keep hands away from the moving driver, and avoid overloading the string. Switch off the driver before changing the load.

## Procedure

**Harmonic scan.** Investigate a driven string at fixed length, tension and linear density. Find and record the first six resonance frequencies, counting antinodes to identify each harmonic. Keep the same damping setting throughout; the driver's amplitude is fixed. Record the frequency at the response maximum rather than assuming that a nearby rounded setting is exact.

**Tension check.** Keep the same string and length. Measure the fundamental resonance at three different tensions. Test whether $$f_1^2$$ is proportional to $$T$$.

**Length check.** Keep tension and density fixed. Measure the fundamental at three lengths. Test whether $$f_1$$ is proportional to $$1/L$$.

**Beats.** Use two pure tones. First check the method with tones of 440 Hz and 443 Hz: count the quiet moments in a 4 s stretch of the sum, read the times of the first and last, and find $$f_{\rm beat}$$. Then turn on the mystery tone, whose frequency $$f_2$$ is hidden. Change $$f_1$$ until the beats are slowest, by ear or by eye. Then choose six whole number values of $$f_1$$, three below that point and three above it, each giving between 3 and 25 quiet moments in the 4 s strip. For each, measure $$f_{\rm beat}$$ as before and record it in the Beats table. Reveal $$f_2$$ only after the analysis.

**Using the virtual apparatus.** Use the driven string (Find the resonances). A peak needs a few damping times to build up, so let the amplitude settle before you read it. Record a reading at each peak: it records the drive frequency, the steady amplitude and the string's settings, and leaves the harmonic number for you to fill in from the antinodes you count. Send each scan to the worksheet before clearing, so each scan gets its own copy of the Data table. Repeated readings of the same deterministic response are not independent trials.

## Data

| Scan | Harmonic $$n$$ | $$f$$ (Hz) | Amplitude (mm) | $$L$$ (m) | $$T$$ (N) | $$\mu$$ (g/m) |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |
| | | | | | | |
| | | | | | | |

Keep harmonic, tension and length scans separate and record how each peak was identified.

**Beats.** One row for the 440 and 443 Hz check, then one row for each $$f_1$$ with the mystery tone.

| Run | $$f_1$$ (Hz) | First quiet moment $$t_1$$ (s) | Last quiet moment $$t_N$$ (s) | Quiet moments $$N$$ | $$f_{\rm beat}$$ (Hz) |
|---|---|---|---|---|---|
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |

## Analysis

1. Fit $$f_n$$ against $$n$$ with a free intercept. Determine wave speed and compare it with $$\sqrt{T/\mu}$$.
2. Plot $$f_1^2$$ against $$T$$. Use the slope to infer $$\mu$$ and compare with the selected string density.
3. Plot $$f_1$$ against $$1/L$$. Check whether the inferred wave speed agrees with the harmonic scan.
4. Describe how damping and frequency resolution affect the location and width of the measured peaks.
5. For the 440 and 443 Hz check, compare your $$f_{\rm beat}$$ with $$\lvert f_1 - f_2\rvert$$.
6. Plot $$f_{\rm beat}$$ against $$f_1$$ for the mystery tone. Fit a straight line to the points below the slowest beats and another to the points above. What slopes do you expect, and what do you get? Find $$f_2$$ where the two lines meet, and from each row as $$f_1 \pm f_{\rm beat}$$. Then reveal $$f_2$$ and compare.

## Uncertainty

Record the smallest available frequency adjustment and how sharply the peak can be located. String length, tension and density are prescribed values in the simulation, not independent noisy measurements. For real apparatus, include uncertainties in vibrating length, hanging mass, pulley friction and peak identification. Do not assign statistical errors from repeated identical simulation states. For beats, the quiet moments can be read from the time axis to about 0.02 s, so the time between the first and last is uncertain by about 0.03 s; carry that into $$f_{\rm beat}$$.

## Questions

1. Why are the resonance frequencies approximately equally spaced?
2. How does increasing linear density change the resonances at fixed tension?
3. What would change if one end were not effectively fixed?
4. Why does a large driven amplitude challenge the small displacement model?
5. Why is it hard to measure $$f_{\rm beat}$$ precisely when $$f_1$$ is very close to $$f_2$$, and also when it is far from it? Which part of the range gives the most precise $$f_2$$?

## What to hand in

Prelab answers, a completed data table, three labeled plots and fits, inferred wave speed and density, the Beats table with its plot and your value of $$f_2$$, uncertainty discussion and answers to the questions. Label simulated measurements as simulated.
