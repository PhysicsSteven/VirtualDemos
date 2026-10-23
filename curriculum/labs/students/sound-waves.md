# Sound Waves and the Speed of Sound
Student laboratory · Acoustics

Textbook: OpenStax *University Physics*, Vol. 1, §17.1 and §17.2. Access for free at https://openstax.org/details/books/university-physics-volume-1.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/sound-waves.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** A sound wave in air; The same note in helium; Time a clap, 1.00 m apart; A cold day, −10 °C; Unknown gas.

**Using the demo.** The Sound wave view shows a tube of air as dots that swing back and forth, with graphs of the displacement and the pressure change along the tube. The Time of flight view has a clap, two microphones on a bench and a two channel recorder. Frequency, amplitude, the microphone positions, the gas and its temperature are on the Set up card on the picture; the microphones can also be dragged. Blind hides $$v$$, $$\lambda$$ and the predictions; an unknown gas always hides its own values.

**What the demo models.** An ideal gas at 101325 Pa, with $$v = \sqrt{\gamma R T/M}$$ and density $$\rho = PM/(RT)$$. Dry air has $$\gamma = 1.400$$ and $$M = 28.9647$$ g/mol; helium and argon have $$\gamma = 5/3$$. The recorder samples both microphones at 48 kHz, and each channel triggers on the first sample at or after the sound arrives, so every $$\Delta t$$ is a whole number of samples of $$1/48000\ \mathrm{s} = 20.8\ \mathrm{\mu s}$$. The sampling clock starts at a random point of a sample at each clap, which is the only scatter in the readings.

</details>

## Goal

Describe a sound wave as displacement and pressure waves a quarter cycle apart, then measure the speed of sound by timing a clap between two microphones and compare it with the ideal gas prediction.

## Background

A sound wave moving along $$x$$ moves each bit of air back and forth by

$$s(x,t) = s_{\max}\cos(kx - \omega t),$$

and changes the pressure by

$$\Delta p(x,t) = \Delta p_{\max}\sin(kx - \omega t),\qquad \Delta p_{\max} = \rho v \omega s_{\max}.$$

The pressure change is largest where the displacement is zero, a quarter wavelength from where the displacement is largest. The wave speed in an ideal gas is

$$v = \sqrt{\frac{\gamma R T}{M}},$$

with $$T$$ in kelvin, $$R = 8.314\ \mathrm{J/(mol\,K)}$$, $$\gamma$$ the ratio of specific heats and $$M$$ the molar mass. For a given frequency, $$\lambda = v/f$$.

In the time of flight method, a clap is made in line with two microphones a distance $$d$$ apart. The recorder measures the time $$\Delta t$$ between the sound's arrival at the near microphone and at the far one, so

$$\Delta t = \frac{d}{v}.$$

A graph of $$\Delta t$$ against $$d$$ is a straight line through the origin with slope $$1/v$$. Any fixed delay in the electronics would shift the intercept but not the slope.

## Before the lab

1. Calculate the speed of sound in dry air at 20 °C and at −10 °C.
2. A 500 Hz tone travels in air at 20 °C. What is its wavelength? Where along the wave is the pressure change largest, compared with the displacement?
3. The recorder samples at 48 kHz. What is the smallest change in $$\Delta t$$ it can show? For what spacing $$d$$ is that one part in a hundred of $$\Delta t$$ in air at 20 °C?
4. Why does measuring $$\Delta t$$ between two microphones avoid needing to know exactly when the clap happened?

## Safety

On a real bench, keep claps and starter pistols away from ears, and use a clapper board rather than a gun. Keep microphone cables off the floor.

## Procedure

**Part 1: the wave.** In air at 20 °C, watch a 500 Hz wave with its displacement and pressure graphs. Note where the dots bunch up and spread out, and where the pressure graph peaks compared with the displacement graph. Record $$v$$, $$\lambda$$ and $$\Delta p_{\max}$$ for 500 Hz and 1.0 μm in air and in helium, both at 20 °C, in the Wave table.

**Part 2: time of flight in air.** In air at 20 °C, with the clap 0.50 m from the near microphone, time the clap at seven spacings $$d$$ from 0.50 m to 3.00 m. Hide the predictions first. At $$d = 1.00$$ m, clap five times to see how much single readings scatter.

**Part 3: temperature.** Repeat Part 2 at −10 °C with at least five spacings.

**Part 4: unknown gas.** With an unknown gas at 20 °C, time at least five spacings. Keep the same unknown gas for the whole scan: choosing a new one changes the gas.

**Using the virtual apparatus.** Record a reading after each clap. Send each part to the worksheet before clearing, so each part gets its own copy of the Data table.

## Data

| Trial | Gas | $$T$$ (°C) | $$d$$ (m) | $$\Delta t$$ (ms) | Observation |
|---|---|---|---|---|---|
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |

**Wave.** Readouts from Part 1.

| Gas | $$f$$ (Hz) | $$v$$ (m/s) | $$\lambda$$ (m) | $$\Delta p_{\max}$$ (Pa) |
|---|---|---|---|---|
| | | | | |
| | | | | |

## Analysis

1. From Part 1, explain why the pressure change is a quarter cycle out of step with the displacement. Why is $$\Delta p_{\max}$$ smaller in helium for the same $$s_{\max}$$ and $$f$$, even though $$v$$ is larger?
2. Graph $$\Delta t$$ against $$d$$ for Part 2. Find $$v$$ from the slope, with its uncertainty, and compare it with $$\sqrt{\gamma RT/M}$$.
3. From the five claps at $$d = 1.00$$ m, find the spread of $$\Delta t$$ in samples. Explain why using several spacings and the slope is better than one clap at one spacing.
4. From Part 3, find $$v$$ at −10 °C. Test whether $$v_{20}/v_{-10}$$ agrees with $$\sqrt{T_{20}/T_{-10}}$$ (temperatures in kelvin).
5. From Part 4, find the unknown gas's $$v$$ and the value of $$\gamma/M$$. If the gas is monatomic ($$\gamma = 5/3$$), what is its molar mass? If it is diatomic ($$\gamma = 1.4$$)?

## Uncertainty

Each $$\Delta t$$ is a whole number of 20.8 μs samples, and the start of the count falls at a random point within a sample, so a single reading can be off by up to one sample. That is a larger fraction of $$\Delta t$$ at small $$d$$. The fit's slope uncertainty reflects this scatter. Distances are set to 0.01 m in the simulation. On a real bench add the measurement of $$d$$, the size of the microphones, the clap not being exactly in line, the trigger level of each channel and the air's humidity and temperature.

## Questions

1. Does the speed of sound in air depend on the frequency of the sound? What in the formula tells you?
2. Why is the speed of sound in helium almost three times that in air at the same temperature?
3. Why must the clap be in line with the two microphones for $$\Delta t = d/v$$ to hold?
4. Two gases have the same speed of sound. Must they have the same molar mass? Explain.

## What to hand in

Prelab answers, the Data table copies for each part and the Wave table, graphs with fits, your values of $$v$$ with uncertainties and their comparison with theory, the unknown gas analysis, and answers to the questions. Identify simulated data.
