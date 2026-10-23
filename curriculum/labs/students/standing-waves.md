# Standing Waves: Finding Resonances on a String
Student laboratory · Physics I / Acoustics

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/standing-waves.html)

## Goal

Measure the resonance frequencies of a stretched string and test their dependence on harmonic number, length, tension and linear density.

## Background

For a string with tension $$T$$ and mass per unit length $$\mu$$, the transverse wave speed is

$$v=\sqrt{\frac{T}{\mu}}.$$

With fixed ends separated by $$L$$, the allowed frequencies are

$$f_n=\frac{n}{2L}\sqrt{\frac{T}{\mu}},\qquad n=1,2,3,\ldots.$$

The standing wave has $$n$$ antinodes. A graph of $$f_n$$ against $$n$$ should be approximately linear, with slope $$v/(2L)$$. This ideal relation assumes uniform tension and density, small transverse displacement and fixed endpoints.

## Before the lab

1. What happens to the fundamental frequency if the tension is multiplied by four?
2. How many antinodes does the third harmonic have?
3. Why is a peak in the driven response more useful than an arbitrary drive frequency for identifying a normal mode?

## Safety

On a real vibrating string bench, secure the string and hanging masses, keep hands away from the moving driver, and avoid overloading the string. Switch off the driver before changing the load.

## Procedure

**Harmonic scan.** Investigate a driven string at fixed length, tension and linear density. Find and record the first six resonance frequencies, counting antinodes to identify each harmonic. Keep the same drive amplitude and damping setting throughout. Record the frequency at the response maximum rather than assuming that a nearby rounded setting is exact.

**Tension check.** Keep the same string and length. Measure the fundamental resonance at three different tensions. Test whether $$f_1^2$$ is proportional to $$T$$.

**Length check.** Keep tension and density fixed. Measure the fundamental at three lengths. Test whether $$f_1$$ is proportional to $$1/L$$.

**Using the virtual apparatus.** Investigate the String mode in its driven configuration, beginning with Find the resonances. Set one consistent length, tension and linear density, then find successive response peaks and count the visible antinodes. Repeat at new tensions and lengths without mixing the scan settings. The drive frequency is adjustable on the function generator. Record readings in the Data table; do not treat repeated frames of the same deterministic response as independent trials.

## Data

| Scan | Harmonic $$n$$ | $$f$$ (Hz) | Amplitude (mm) | $$L$$ (m) | $$T$$ (N) | $$\mu$$ (g/m) |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |
| | | | | | | |
| | | | | | | |

Keep harmonic, tension and length scans separate and record how each peak was identified.

## Analysis

1. Fit $$f_n$$ against $$n$$ with a free intercept. Determine wave speed and compare it with $$\sqrt{T/\mu}$$.
2. Plot $$f_1^2$$ against $$T$$. Use the slope to infer $$\mu$$ and compare with the selected string density.
3. Plot $$f_1$$ against $$1/L$$. Check whether the inferred wave speed agrees with the harmonic scan.
4. Describe how damping and frequency resolution affect the location and width of the measured peaks.

## Uncertainty

Record the smallest available frequency adjustment and how sharply the peak can be located. String length, tension and density are prescribed values in the simulation, not independent noisy measurements. For real apparatus, include uncertainties in vibrating length, hanging mass, pulley friction and peak identification. Do not assign statistical errors from repeated identical simulation states.

## Questions

1. Why are the resonance frequencies approximately equally spaced?
2. How does increasing linear density change the resonances at fixed tension?
3. What would change if one end were not effectively fixed?
4. Why does a large driven amplitude challenge the small displacement model?

## What to hand in

Prelab answers, a completed data table, three labeled plots and fits, inferred wave speed and density, uncertainty discussion and answers to the questions. Label simulated measurements as simulated.
