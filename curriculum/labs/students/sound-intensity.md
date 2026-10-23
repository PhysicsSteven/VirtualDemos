# Sound Intensity and Decibels
Student laboratory · Acoustics

Textbook: OpenStax *University Physics*, Vol. 1, §17.3. Access for free at https://openstax.org/details/books/university-physics-volume-1.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/sound-intensity.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Inverse square law; Two equal sources; A loud and a quiet source; Background noise; Mystery source.

**Using the demo.** A loudspeaker stands at the end of a measuring tape in an open field, with a sound level meter on a tripod. Drag the meter along the tape, or set its distance on the Set up card (with steps of 0.1 m, halving and doubling). The card also sets the power of source A (10 μW to 1 W in 1, 2, 5 steps), a second source B beside A, and a steady background of 35, 45 or 55 dB. Blind hides the intensities and the predicted levels; the mystery source always hides its power.

**What the demo models.** Point sources in a free field, with no reflections and no absorption in the air: $$I = P/(4\pi r^2)$$ exactly. Independent sources and the background add as intensities. The meter reads to 0.1 dB, with no noise.

</details>

## Goal

Test the inverse square law for sound, learn how decibel levels combine, and find the power of an unknown source.

## Background

A point source of acoustic power $$P$$ spreads its energy over a sphere, so at distance $$r$$ the intensity is

$$I = \frac{P}{4\pi r^2}.$$

The sound level in decibels compares $$I$$ with the threshold of hearing $$I_0 = 10^{-12}\ \mathrm{W/m^2}$$:

$$\beta = 10\log_{10}\frac{I}{I_0}\ \mathrm{dB}.$$

Combining the two, $$\beta = 10\log_{10}\frac{P}{4\pi I_0} - 20\log_{10} r$$. Writing $$\log_{10} r = \log_{10}2\cdot\log_2 r$$, a graph of $$\beta$$ against $$\log_2 r$$ is a straight line of slope $$-20\log_{10}2 = -6.02$$ dB per doubling of distance, and its intercept at $$r = 1$$ m gives $$P$$. Sources that are not in step with each other add their intensities, not their levels: two equal sources give twice the intensity, $$10\log_{10}2 = 3.0$$ dB more than one.

## Before the lab

1. A 10 mW source: find the intensity and the sound level 1.0 m away.
2. By how many decibels does the level fall when the distance doubles? When it goes up by a factor of 10?
3. Two equal sources each give 80 dB at a point. What level do they give together? Why not 160 dB?
4. A source gives 70 dB at a point where a steady background is 70 dB. What does the meter read?

## Safety

On a real sound level meter bench, keep levels moderate (below about 85 dB at any listener), wear hearing protection near loud sources, and do not point a loudspeaker at anyone's ear from close range.

## Procedure

**Part 1: inverse square law.** With one 10 mW source and no background, measure the level at seven distances from 0.5 m to 32 m, doubling the distance each time.

**Part 2: adding sources.** At 4.0 m, measure the level of one 10 mW source, then of two equal 10 mW sources side by side. Then measure a 10 mW source together with a 1 mW source.

**Part 3: background noise.** With the 10 mW source and a 55 dB background, measure the level at the seven distances of Part 1.

**Part 4: mystery source.** Measure the level of the mystery source at five or more distances and find its power. Keep the same mystery source for the whole part.

**Using the virtual apparatus.** Record each reading, and send each part to the worksheet before clearing, so each part gets its own copy of the Data table. Fill the last two columns yourself: $$\log_2 r$$, and the intensity worked out from the level.

## Data

| Reading | Distance $$r$$ (m) | Sources | Sound level $$\beta$$ (dB) | $$\log_2 r$$ | Intensity $$I$$ (W/m²) |
|---|---|---|---|---|---|
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |

## Analysis

1. Graph $$\beta$$ against $$\log_2 r$$ for Part 1. Find the slope and compare it with $$-6.02$$ dB per doubling. From the intercept, find the source's power and compare it with 10 mW.
2. From Part 2, find how much the level rises when the second equal source is added, and when the 1 mW source is added to the 10 mW one. Explain both from the intensities.
3. For Part 3, compare each level with Part 1. At what distance does the background change the reading by more than 0.5 dB? Find the source's own level at 32 m by subtracting the background's intensity.
4. From Part 4, find the mystery source's power from the intercept of $$\beta$$ against $$\log_2 r$$.

## Uncertainty

The meter reads to 0.1 dB and there is no noise, so the scatter about the line comes only from that rounding: 0.1 dB is a 2.3 % change in intensity. On a real field, add reflections from the ground and nearby objects (they can add or cancel by several decibels), the source not being a point at short range, wind and background noise, and the meter's own calibration (often ±1 dB).

## Questions

1. Why is the decibel scale logarithmic, and why is that useful for hearing?
2. How far from a source must you move for the level to drop by 20 dB?
3. Ten identical machines run in a workshop. How much louder is the workshop than one machine?
4. Why does real outdoor sound often fall faster than 6 dB per doubling at large distances?

## What to hand in

Prelab answers, a Data table copy for each part with the last two columns filled, graphs with fits, your values of the slope and of the powers, and answers to the questions. Identify simulated data.
