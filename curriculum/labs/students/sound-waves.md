# Sound Waves and the Speed of Sound
Student laboratory · Acoustics

Textbook: OpenStax *University Physics*, Vol. 1, §17.1 and §17.2. Access for free at https://openstax.org/details/books/university-physics-volume-1.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/sound-waves.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** A sound wave in air; The same note in helium; Time a clap, 1.00 m apart; A cold day, −10 °C; Unknown gas; Race through materials.

**Using the demo.** The Sound wave view shows a tube of air as dots that swing back and forth, with graphs of the displacement and the pressure change along the tube. The Time of flight view has a clap, two microphones on a bench and a two channel recorder. Frequency, amplitude, the microphone positions, the gas and its temperature are on the Set up card on the picture; the microphones can also be dragged. The Race view lays out up to six lanes of different materials, each 3 m wide, side by side on a course 100 m, 1 km or 10 km long, with a 1.75 m person at the start for scale. A hammer strikes a steel plate across the start of every lane at the same instant, and the pulse in each lane runs to the finish; the board lists each lane's speed and arrival time. It runs in real time, or 10, 100 or 1000 times slower, in 3D or as a flat drawing with the lengths to scale. Blind hides $$v$$, $$\lambda$$ and the predictions; an unknown gas and a mystery material always hide their own values.

**What the demo models.** An ideal gas at 101325 Pa, with $$v = \sqrt{\gamma R T/M}$$ and density $$\rho = PM/(RT)$$. Dry air has $$\gamma = 1.400$$ and $$M = 28.9647$$ g/mol; helium and argon have $$\gamma = 5/3$$. The recorder samples both microphones at 48 kHz, and each channel triggers on the first sample at or after the sound arrives, so every $$\Delta t$$ is a whole number of samples of $$1/48000\ \mathrm{s} = 20.8\ \mathrm{\mu s}$$. The sampling clock starts at a random point of a sample at each clap, which is the only scatter in the readings. In the Race view, air, helium and argon follow the same ideal gas model; the other 22 materials use measured speeds at fixed conditions (gases at 0 °C and liquids at 20 °C from Table 17.1 of the textbook; the rest from OpenStax College Physics §17.7, the CRC Handbook values listed by The Engineering ToolBox, and Evident's table of material sound velocities). Solids carry their bulk longitudinal speed, which for some metals is higher than the thin rod value in Table 17.1. Each pulse arrives at exactly $$t = L/v$$.

</details>

## Goal

Describe a sound wave as displacement and pressure waves a quarter cycle apart, then measure the speed of sound by timing a clap between two microphones and compare it with the ideal gas prediction. Then race sound through gases, liquids and solids to see how much the material matters.

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

In any material the speed of sound is set by how stiff the material is against the squeeze of the wave and by its density. In a fluid,

$$v = \sqrt{\frac{B}{\rho}},$$

with $$B$$ the bulk modulus; for an ideal gas $$B = \gamma P$$, which gives the formula above. In a large block of solid the speed depends on its resistance to both compression and shear, and in a thin rod it is $$\sqrt{Y/\rho}$$, a little slower. A pulse that travels a distance $$L$$ arrives after $$t = L/v$$.

## Before the lab

1. Calculate the speed of sound in dry air at 20 °C and at −10 °C.
2. A 500 Hz tone travels in air at 20 °C. What is its wavelength? Where along the wave is the pressure change largest, compared with the displacement?
3. The recorder samples at 48 kHz. What is the smallest change in $$\Delta t$$ it can show? For what spacing $$d$$ is that one part in a hundred of $$\Delta t$$ in air at 20 °C?
4. How long does sound take to travel 1.00 km in air at 20 °C, in fresh water (1480 m/s) and in steel (5940 m/s)? Predict the order in which pulses in air, helium, fresh water, concrete, steel and diamond would finish a 1 km course. Of the six, steel is the densest, more than twice as dense as diamond, and helium the least dense, about a seventh as dense as air: say which property of a material your order goes by.

## Safety

On a real bench, keep claps and starter pistols away from ears, and use a clapper board rather than a gun. Keep microphone cables off the floor.

## Procedure

**Part 1: the wave.** In air at 20 °C, watch a 500 Hz wave with its displacement and pressure graphs. Note where the dots bunch up and spread out, and where the pressure graph peaks compared with the displacement graph. Record $$v$$, $$\lambda$$ and $$\Delta p_{\max}$$ for 500 Hz and 1.0 μm in air and in helium, both at 20 °C, in the Wave table.

**Part 2: time of flight in air.** In air at 20 °C, with the clap 0.50 m from the near microphone, time the clap at five spacings $$d$$: 0.50, 1.00, 1.50, 2.00 and 3.00 m. Hide the predictions first. At $$d = 1.00$$ m, clap five times to see how much single readings scatter.

**Part 3: temperature.** Repeat Part 2 at −10 °C with three spacings, for example 0.50, 1.50 and 2.50 m.

**Part 4: race through materials.** Race pulses over 1 km at 20 °C through air, helium, fresh water, concrete, steel and diamond, in real time, and compare the order with your prediction. Record each lane's speed and arrival time in the Race table.

**Using the virtual apparatus.**

1. Part 1: choose **A sound wave in air** (500 Hz, 1.0 μm, 20 °C), then **The same note in helium**. Copy **Speed of sound v = √(γRT/M)**, **Wavelength λ = v/f** and **Pressure amplitude Δp\_max = ρvω s\_max** from Readouts into the Wave table. Leave Blind off for this part.
2. Parts 2 and 3: choose **Time a clap, 1.00 m apart** (Part 2) or **A cold day, −10 °C** (Part 3); each keeps the clap 0.50 m from microphone A. For Part 2 tick **Blind: hide v, λ and the predictions** under Lab. Set **Distance between the microphones d** (0.01 m steps, or the d −1 cm and d +1 cm buttons), press **Clap**, read **Timer Δt (last clap)** and press **Record reading**. For the five claps at 1.00 m, clap and record five times.
3. Part 4: choose **Race through materials** (the six lanes, 1 km, real time) and press **Strike**; copy each lane's speed and arrival time from the board into the Race table.

At the end of each of Parts 2 and 3 press **Export to worksheet**, then **Clear**, so each part gets its own copy of the Data table. The Wave and Race tables are yours to fill.

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

**Race.** Readouts from Part 4.

| Material | Phase | $$v$$ (m/s) | $$L$$ (m) | $$t$$ (s) | $$t_{\text{air}}/t$$ |
|---|---|---|---|---|---|
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |

## Analysis

1. From Part 1, explain why the pressure change is a quarter cycle out of step with the displacement. Why is $$\Delta p_{\max}$$ smaller in helium for the same $$s_{\max}$$ and $$f$$, even though $$v$$ is larger?
2. Graph $$\Delta t$$ against $$d$$ for Part 2. Find $$v$$ from the slope, with its uncertainty, and compare it with $$\sqrt{\gamma RT/M}$$.
3. From the five claps at $$d = 1.00$$ m, find the spread of $$\Delta t$$ in samples. Explain why using several spacings and the slope is better than one clap at one spacing.
4. From Part 3, find $$v$$ at −10 °C. Test whether $$v_{20}/v_{-10}$$ agrees with $$\sqrt{T_{20}/T_{-10}}$$ (temperatures in kelvin).
5. From Part 4, check that $$t = L/v$$ for helium, concrete and diamond (Before the lab 4 worked out the other three), and rank the six materials by speed.

## Uncertainty

Each $$\Delta t$$ is a whole number of 20.8 μs samples, and the start of the count falls at a random point within a sample, so a single reading can be off by up to one sample. That is a larger fraction of $$\Delta t$$ at small $$d$$. The fit's slope uncertainty reflects this scatter. Distances are set to 0.01 m in the simulation. On a real bench add the measurement of $$d$$, the size of the microphones, the clap not being exactly in line, the trigger level of each channel and the air's humidity and temperature.

## Questions

1. Why must the clap be in line with the two microphones for $$\Delta t = d/v$$ to hold?
2. How did the race compare with your order in Before the lab 4, and did the densest material win? Use $$v = \sqrt{\text{stiffness}/\rho}$$ to explain why solids carry sound faster than gases, and what density alone gets wrong about the order.

## What to hand in

Prelab answers, the Data table copies for each part, the Wave table and the Race table, graphs with fits, your values of $$v$$ with uncertainties and their comparison with theory, and answers to the questions. Identify simulated data.
