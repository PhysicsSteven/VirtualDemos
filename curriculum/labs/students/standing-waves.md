# Standing Waves: Finding Resonances on a String
Student laboratory · Physics II / Acoustics

Textbook: OpenStax *University Physics*, Vol. 1, §§16.1–16.3, 16.5, 16.6 and 17.6. Access for free at https://openstax.org/details/books/university-physics-volume-1.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/standing-waves.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Two waves make a standing wave; Harmonics of a string; Find the resonances; Pluck at the middle; Beats; Two pulses pass through each other. The demo opens on Two waves make a standing wave. This handout uses Find the resonances (the **String** view with **Driven** chosen) and Beats (the **Beats** view).

**Using the demo.**

- String view: a string with fixed ends, drawn **Flat** or in **3D** on a sonometer. The card under the picture has **Harmonic**, **Pluck** and **Driven**; **Length L**, 0.300 to 1.000 m in 1 mm steps; **Tension T**, 10 to 150 N in 0.5 N steps; **Linear density μ**, 0.30 to 15.00 g/m. The string setups use a guitar's low E string, L = 0.648 m, T = 70 N, μ = 6.14 g/m, so f₁ = 82.4 Hz. Grips on the picture change lengths and amplitudes.
- In Driven, the function generator under the picture sets the **Drive frequency f** with its **Coarse** (1 Hz a click) and **Fine** (0.1 Hz a click) knobs or its slider, from 0.25 f₁ to 8.75 f₁ in 0.1 Hz steps; dragging the red marker on the response plot sweeps it. **Quality factor Q of mode 1** runs from 10 to 300 (30 in the setup). Readouts: **Wave speed v = √(T/μ)**, **Fundamental f₁ = v/2L**, the steady amplitude with the damping time 2/γ, and a table of the harmonics.
- **Record reading** works in the String view with Harmonic or Driven. It stores the mode, the harmonic number (left blank in Driven for you to fill in from the antinodes you count), the frequency, the steady amplitude in mm (Driven), L, T, μ and Q. **Export to worksheet** fills the Data table in order: Scan (the row and mode), n, f, Amplitude, L, T, μ.
- Beats view: two pure tones. **Frequency f₁**, 100 to 1000 Hz in 1 Hz steps; **Difference f₂ − f₁**, −20 to 20 Hz in 0.1 Hz steps; **Amplitude A₂ / A₁**. The two upper strips zoom in on about five cycles of each tone and of their sum at the playhead; the long strip shows the band the sum fills, its envelope (dashed) and a bracket labeled T_beat between two loud moments. Readouts: **Frequency f₂**, **Pitch heard (f₁ + f₂)/2**, **Beat frequency** and **Beat period**. With **Sound** on both tones play.
- **Mystery tone: f₂ hidden** draws a new f₂ at random between 425.0 and 455.0 Hz and hides the difference slider, f₂, the pitch heard, the beat frequency and the beat period; the T_beat bracket goes away and the long strip becomes a fixed 4 s window with a time axis, so the beats in it are yours to count. Ticking it again draws a new f₂; unticking it shows f₂.

**What the demo models.**

- An ideal flexible string: small amplitude, fixed ends, no stiffness, so $$v = \sqrt{\frac{T}{\mu}},\qquad f_n = \frac{n}{2L}\sqrt{\frac{T}{\mu}}.$$ Harmonic and pluck motion have no damping, and the pluck is a sum of 200 modes. Up and down displacement is exaggerated; in 3D the string is drawn three times thicker than a 1.2 mm guitar string and the hanging mass is $$m = T/g$$ with $$g = 9.81\ \text{m/s}^2$$.
- The driven string is a point force $$F_0\cos(2\pi f t)$$ with $$F_0 = 0.25\ \text{N}$$ at $$x = L/20$$, with the same damping rate $$\gamma = \omega_1/Q$$ for every mode, solved exactly with 40 modes, transients included. Each peak has a full width at half power of $$\gamma/2\pi$$ in Hz, and the amplitude needs a few damping times $$2/\gamma$$ (116 ms at Q = 30 in the setup) to settle; the response plot is the steady state amplitude against f.
- Beats: two pure tones added, nothing else, $$y = A_1\cos(2\pi f_1 t) + A_2\cos(2\pi f_2 t),$$ with the loudness envelope $$\sqrt{A_1^2 + A_2^2 + 2A_1A_2\cos 2\pi(f_2 - f_1)t},$$ which repeats every $$1/\lvert f_1 - f_2\rvert$$.
- The readings are simulated: computed from this model, not measured.

</details>

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
3. A 440 Hz tuning fork and a guitar string sound together and give 4 beats per second. What are the two possible frequencies of the string? The string is tightened a little and the beats slow to 2 per second. Which was it?
4. On one string at one tension, the fourth harmonic vibrates four times as often as the fundamental. Does its wave travel along the string faster than the fundamental's, slower, or at the same speed? Why do you think so?

## Safety

On a real vibrating string bench, secure the string and hanging masses, keep hands away from the moving driver, and avoid overloading the string. Switch off the driver before changing the load.

## Procedure

**Harmonic scan.** Choose the Find the resonances setup (String view, Driven: L = 0.648 m, T = 70 N, μ = 6.14 g/m). Find and record the first four resonance frequencies, counting antinodes to identify each harmonic. For each one: (1) change the Drive frequency f on the function generator under the picture with its Coarse knob (1 Hz a click) until the steady amplitude readout jumps up, or click the generator's display and type a frequency; (2) use the Fine knob (0.1 Hz a click) to find the largest steady amplitude, waiting a moment after each click for it to settle; (3) press Record reading and write the number of antinodes in the n column. Leave Quality factor Q of mode 1 at 30 throughout; the driver's amplitude is fixed. Record the frequency at the response maximum rather than assuming that a nearby rounded setting is exact. Press Export to worksheet, then Clear.

**Tension check.** Keep the same string and length. Measure the fundamental resonance, as above, at three tensions set with the Tension T slider (for example 35, 70 and 140 N). Export to worksheet (a new copy of the table), then Clear. Test whether $$f_1^2$$ is proportional to $$T$$.

**Beats.** Choose the Beats setup (Frequency f₁ = 440 Hz), press Play and tick Mystery tone: f₂ hidden; the strip shows a fixed 4 s stretch. Move the Frequency f₁ slider (1 Hz a step) until the beats are slowest, by ear (Sound on) or by eye. Then choose four whole number values of $$f_1$$, two below that point and two above it (for example 432, 434, 438 and 440 Hz), each giving between 3 and 25 quiet moments in the 4 s strip. For each, press Pause, count the quiet moments $$N$$, read the times of the first and last on the strip's t (s) axis, and find $$f_{\rm beat} = (N - 1)/(t_N - t_1)$$ as in the Background. Write them in the Beats table. Untick Mystery tone to reveal $$f_2$$ only after the analysis.

## Data

| Scan | Harmonic $$n$$ | $$f$$ (Hz) | Amplitude (mm) | $$L$$ (m) | $$T$$ (N) | $$\mu$$ (g/m) |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |
| | | | | | | |
| | | | | | | |

Keep the harmonic and tension scans separate and record how each peak was identified.

**Beats.** One row for each $$f_1$$ with the mystery tone.

| Run | $$f_1$$ (Hz) | First quiet moment $$t_1$$ (s) | Last quiet moment $$t_N$$ (s) | Quiet moments $$N$$ | $$f_{\rm beat}$$ (Hz) |
|---|---|---|---|---|---|
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |

## Analysis

1. Graph $$f_n$$ (vertical) against $$n$$ (horizontal) for the harmonic scan and fit a straight line with a free intercept. Determine wave speed and compare it with $$\sqrt{T/\mu}$$.
2. Plot $$f_1^2$$ (vertical) against $$T$$ (horizontal) for the tension check. Use the slope to infer $$\mu$$ and compare with the selected string density.
3. Plot $$f_{\rm beat}$$ (vertical) against $$f_1$$ (horizontal) for the mystery tone. Fit a straight line to the points below the slowest beats and another to the points above. What slopes do you expect, and what do you get? Find $$f_2$$ where the two lines meet. Then reveal $$f_2$$ and compare.

## Questions

1. Harmonic $$n$$ has wavelength $$2L/n$$, so each frequency in your harmonic scan gives a wave speed $$v = 2Lf_n/n$$. Work out the four speeds. How do they compare, and what does that say about your answer to Before the lab 4? Use $$v = \sqrt{T/\mu}$$ to explain what sets the speed of a wave on a string, and say where a higher harmonic's higher frequency comes from.

## Uncertainty

For courses that treat measurement uncertainty. This section is not counted in the 75 minutes; do it when your instructor assigns it.
{: .ws-assigned}

Report the slope and intercept of your Analysis 1 fit with their uncertainties, and say whether the intercept is zero within its uncertainty and whether your wave speed agrees with $$\sqrt{T/\mu}$$ within the frequency step. Record the smallest available frequency adjustment and how sharply the peak can be located. String length, tension and density are prescribed values in the simulation, not independent noisy measurements. For real apparatus, include uncertainties in vibrating length, hanging mass, pulley friction and peak identification. Do not assign statistical errors from repeated identical simulation states. For beats, the quiet moments can be read from the time axis to about 0.02 s, so the time between the first and last is uncertain by about 0.03 s; carry that into $$f_{\rm beat}$$.

## What to hand in

Prelab answers, a completed data table, two labeled plots and fits, inferred wave speed and density, the Beats table with its plot and your value of $$f_2$$, and answers to the questions (and to Uncertainty, if assigned). Label simulated measurements as simulated.
