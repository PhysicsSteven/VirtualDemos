# Reverberation Time
Student laboratory · Acoustics

Textbook: OpenStax *University Physics*, Vol. 1, §17.3. Sabine's formula goes beyond the textbook; see H. Kuttruff, *Room Acoustics*, chapter 5. Access OpenStax for free at https://openstax.org/details/books/university-physics-volume-1.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/room-acoustics.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Bare room; Add absorbing panels; Room with an audience; Anechoic chamber; Below the cutoff; Mystery panels.

**Using the demo.** A 3D view of a room (Plan switches to the view from above), with a loudspeaker and a microphone on its center line, 1.5 m up; drag the microphone along the center line in either view. Under it is a graph of the decay of a clap at the microphone. The room's size, its walls (hard, with panels, or lined with wedges), the number and material of the panels, the floor and the microphone distance are on the Set up card, which fades during a clap. Nothing plays until you clap. Measure chooses Reverberation time (this worksheet) or Level against distance (the Anechoic Chamber worksheet), and the octave band from 125 Hz to 4 kHz. Clap, then record the measured $$T$$. The Absorption coefficients table lists every surface, its area and its $$\alpha$$ in the band. Blind hides $$A$$ and the predicted reverberation times; the mystery panels always hide their $$\alpha$$.

**What the demo models.** Ray tracing: thousands of rays leave the source, each surface keeps a fraction $$\alpha$$ of a ray's energy and sends the rest off in a random direction (diffuse reflection by Lambert's law), and the microphone is a 0.5 m sphere that adds up the energy of the rays crossing it. Energies add, so there is no interference. Absorption coefficients are measured values for octave bands from the materials database of the pyroomacoustics library; air absorbs nothing, and $$c = 343.2$$ m/s. $$T$$ is read as a real meter does: the decay curve from $$-5$$ to $$-25$$ dB is fitted with a straight line and extended to 60 dB (T20, ISO 3382). The ray trace is repeatable: the same room always gives the same $$T$$. Simulated data.

</details>

## Goal

Measure how long sound lasts in a room, test Sabine's formula for the reverberation time, and find the absorption coefficient of an unknown material.

## Background

After a sound stops, it keeps bouncing between the walls, losing a fraction of its energy at each one. The reverberation time $$T$$ is the time for the sound level to fall by 60 dB, a millionth of its energy. Each surface of area $$S_i$$ absorbs a fraction $$\alpha_i$$ of the sound that meets it, so the room's total absorption is

$$A = \sum_i S_i\,\alpha_i,$$

measured in square meters: one square meter of a perfect absorber, such as an open window. If the sound is spread evenly through the room, the energy falls exponentially, and Sabine's formula gives

$$T = \frac{24\ln 10}{c}\,\frac{V}{A} = 0.161\ \mathrm{s/m}\times\frac{V}{A},$$

with $$V$$ the room's volume and $$c = 343.2$$ m/s. Doubling the absorption halves $$T$$; a larger room, with the same absorption, rings longer. Sabine's formula assumes the absorption is spread over the whole room and is small; when $$\alpha$$ is large, or all the absorption is on a few surfaces, the measured $$T$$ differs from it. Absorption coefficients depend on frequency: soft, porous materials absorb high frequencies much better than low ones.

## Before the lab

1. A room is 9.0 m × 7.0 m × 3.0 m. Find $$V$$ and the total surface area $$S$$.
2. All its surfaces have $$\alpha = 0.02$$. Find $$A$$ and Sabine's $$T$$.
3. Twenty panels of 0.72 m² each, with $$\alpha = 0.83$$, are hung on the walls of that room, covering wall with $$\alpha = 0.02$$. By how much does $$A$$ grow? Find the new $$T$$.
4. Why does a graph of $$T$$ against $$1/A$$ test Sabine's formula? What should its slope be for this room?

## Safety

On a real reverberation measurement, a starting pistol, a burst balloon or a loudspeaker playing an impulse is very loud close up: wear hearing protection and keep others back.

## Procedure

**Part 1: the bare room.** In the 9 m × 7 m × 3 m room with hard walls and a concrete floor, measure $$T$$ in each of the six octave bands.

**Part 2: absorbing panels.** In the same room at 500 Hz, measure $$T$$ with 0, 5, 10, 20, 30 and 40 foam panels.

**Part 3: an audience.** In the 12 m × 9 m × 4 m hall, measure $$T$$ at 125, 500 and 2000 Hz with the floor covered by an audience, then with a bare concrete floor.

**Part 4: mystery panels.** Hang 20 panels of the mystery material in the 9 m × 7 m × 3 m room and measure $$T$$ in each of the six bands. Part 1 gives the same room without them. Keep the same mystery material for the whole part: choosing Mystery panels again may change it.

**Using the virtual apparatus.** Clap before each reading. Send each part to the worksheet before clearing, so each part gets its own copy of the Data table. The last three columns are yours: in Parts 1 to 3 work out $$A$$ from the Absorption coefficients table, then $$1/A$$ and Sabine's $$T$$; in Part 4, where $$\alpha$$ is hidden, work out $$A$$ from the measured $$T$$ instead, $$A = 0.161\ \mathrm{s/m}\times V/T$$.

## Data

| Reading | Band (Hz) | Room $$L\times W\times H$$ (m) | Walls and floor | Volume $$V$$ (m³) | Surface $$S$$ (m²) | Measured $$T$$ (s) | Absorption $$A$$ (m²) | $$1/A$$ (1/m²) | Sabine $$T$$ (s) |
|---|---|---|---|---|---|---|---|---|---|
| | | | | | | | | | |
| | | | | | | | | | |
| | | | | | | | | | |
| | | | | | | | | | |
| | | | | | | | | | |
| | | | | | | | | | |

For Part 4, these are the coefficients of four materials the mystery panels might be made of (pyroomacoustics materials database):

| Material | 125 Hz | 250 Hz | 500 Hz | 1000 Hz | 2000 Hz | 4000 Hz |
|---|---|---|---|---|---|---|
| Curtain fabric, folded, 15 cm from the wall | 0.12 | 0.60 | 0.98 | 1.00 | 1.00 | 1.00 |
| Vertical blinds, half open | 0.03 | 0.09 | 0.24 | 0.46 | 0.79 | 0.76 |
| Wooden lining, 12 mm on a frame | 0.27 | 0.23 | 0.22 | 0.15 | 0.10 | 0.07 |
| 9 mm tufted carpet on felt | 0.08 | 0.08 | 0.30 | 0.60 | 0.75 | 0.80 |

## Analysis

1. For Part 1, compare the measured $$T$$ with Sabine's in each band. How does $$T$$ depend on the band, and why?
2. For Part 2, graph the measured $$T$$ against $$1/A$$. Is it a straight line through the origin? Compare its slope with $$0.161\ \mathrm{s/m}\times V$$. Where do the points fall away from Sabine's line, and why might they?
3. For Part 3, find the absorption of the audience in each band from the difference in $$A$$, and the absorption per person (2 people per m²). Why is the audience much less absorbing at 125 Hz?
4. For Part 4, find the mystery panels' absorption in each band: the difference between the room's $$A$$ with and without them is $$S_p(\alpha_p - \alpha_{\text{wall}})$$, with $$S_p$$ the panels' area and $$\alpha_{\text{wall}}$$ the wall's coefficient they cover. Which material is it?

## Uncertainty

The ray trace uses a finite number of rays, so a measured $$T$$ carries a scatter of a few percent; the demo always gives the same $$T$$ for the same room, so repeating a reading does not show it. Compare readings in nearby setups (one panel more or fewer) to judge it. On a real measurement add background noise (which limits the range of the decay), the room not being evenly filled with sound, air absorption at high frequencies, and the coefficients of real materials varying with how they are mounted.

## Questions

1. Why do concert halls have a longer reverberation time than lecture rooms?
2. A lecture room sounds muddy. Name two changes that would shorten $$T$$, and the bands they work in.
3. Why does an empty hall sound different from a full one?
4. Why does Sabine's formula fail for a room whose surfaces absorb almost everything?

## What to hand in

Prelab answers, a Data table copy for each part with the last three columns filled, the graph and fit for Part 2, your audience and mystery panel coefficients, and answers to the questions. Identify simulated data.
