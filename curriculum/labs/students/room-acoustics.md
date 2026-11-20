# Reverberation Time
Student laboratory · Acoustics

Textbook: OpenStax *University Physics*, Vol. 1, §17.3. Sabine's formula goes beyond the textbook; see H. Kuttruff, *Room Acoustics*, chapter 5. Access OpenStax for free at https://openstax.org/details/books/university-physics-volume-1.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/room-acoustics.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Bare room; Add absorbing panels; Room with an audience; Anechoic chamber; Below the cutoff; Mystery panels.

**Using the demo.** A 3D view of a room (Plan switches to the view from above), with a loudspeaker and a microphone on its center line, 1.5 m up; drag the microphone along the center line in either view. Under it is a graph of the decay of a clap at the microphone. The room's size, its walls (hard, with panels, or lined with wedges), the number and material of the panels, the floor and the microphone distance are on the Set up card, which fades during a clap. Nothing plays until you clap. Measure chooses Reverberation time (this worksheet) or Level against distance (the Anechoic Chamber worksheet), and the octave band from 125 Hz to 4 kHz. Clap, then record the measured $$T$$. The Absorption coefficients table lists every surface, its area and its $$\alpha$$ in the band. Blind hides $$A$$ and the predicted reverberation times; the mystery panels always hide their $$\alpha$$.

**What the demo models.** Ray tracing: thousands of rays leave the source, each surface keeps a fraction $$\alpha$$ of a ray's energy and sends the rest off in a random direction (diffuse reflection by Lambert's law), and the microphone is a sphere 0.5 m in radius that adds up the energy of the rays crossing it. Energies add, so there is no interference. Absorption coefficients are measured values for octave bands from the materials database of the pyroomacoustics library; air absorbs nothing, and $$c = 343.2$$ m/s. $$T$$ is read as a real meter does: the decay curve from $$-5$$ to $$-25$$ dB is fitted with a straight line and extended to 60 dB (T20, ISO 3382). The ray trace is repeatable: the same room always gives the same $$T$$. Simulated data.

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
4. The hall of Part 3 is 12 m × 9 m × 4 m, with the same painted brick walls as the 9 m × 7 m × 3 m room of Part 1 and, with its floor bare, the same concrete floor. It has more surface to absorb sound, and more air to hold it. At 125 Hz, will its reverberation time be longer than the room's, shorter, or the same? If it differs, by roughly what factor?

## Safety

On a real reverberation measurement, a starting pistol, a burst balloon or a loudspeaker playing an impulse is very loud close up: wear hearing protection and keep others back.

## Procedure

**Part 1: the bare room.** In the 9 m × 7 m × 3 m room with hard walls and a concrete floor, measure $$T$$ in each of the six octave bands.

**Part 2: absorbing panels.** In the same room at 500 Hz, measure $$T$$ with 0, 10, 20 and 40 foam panels.

**Part 3: an audience.** In the 12 m × 9 m × 4 m hall, measure $$T$$ at 125 and 2000 Hz with the floor covered by an audience, then with a bare concrete floor.

**Part 4: mystery panels.** Hang 20 panels of the mystery material in the 9 m × 7 m × 3 m room and measure $$T$$ in four bands: 125, 500, 1000 and 2000 Hz. Part 1 gives the same room without them. Keep the same mystery material for the whole part: choosing Mystery panels again may change it.

**Using the virtual apparatus.** Every part uses **Reverberation time** under Measure. Pick the band with the **Octave band** buttons (125, 250, 500, 1k, 2k, 4k). Any change resets the clap, so for each reading press **Clap** (under the picture), read **Measured T** under Readouts, then press **Record reading**. At the end of each part press **Export to worksheet**, then **Clear**, so each part gets its own copy of the Data table.

1. Part 1: choose the **Bare room** setup.
2. Part 2: choose **Add absorbing panels** (20 foam panels, 500 Hz) and set **Number of panels** with its slider or the **One panel fewer** and **One panel more** buttons.
3. Part 3: choose **Room with an audience**, take the two bands, then press **Concrete** next to Floor and take them again.
4. Part 4: choose **Mystery panels** once and take the four bands without choosing it again.

The last three columns are yours. In Parts 1 to 3, copy $$A$$ from the **Absorption A = ΣSα** readout (the sum of area times α in the **Absorption coefficients** table) and Sabine's $$T$$ from the **Sabine T** readout. Work out $$1/A$$ in Part 2 only, which is the only part graphed against it; leave it blank in Parts 1 and 3. In Part 4, where $$\alpha$$ is hidden, work out $$A$$ from the measured $$T$$ instead, $$A = 0.161\ \mathrm{s/m}\times V/T$$.

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
4. For Part 4, find the mystery panels' absorption in each band: the difference between the room's $$A$$ with and without them is $$S_p(\alpha_p - \alpha_{\text{wall}})$$, with $$S_p$$ the panels' area (20 × 0.72 m²) and $$\alpha_{\text{wall}}$$ the coefficient of the walls they cover (the Walls, ceiling row of the Absorption coefficients table, in each band). Which material is it?

## Questions

1. A lecture room sounds muddy. Name two changes that would shorten $$T$$, and the bands they work in.
2. Before the lab 4 compared the bare hall with the bare room at 125 Hz, made of the same materials. Take the measured $$T$$ of each from Parts 1 and 3 and their ratio. Using Sabine's formula, show what sets that ratio when every surface has the same $$\alpha$$, and explain the result, given that the hall has more surface as well as more air. Concert halls ring longer than lecture rooms: why does music want that, and how does a hall's size help?

## Uncertainty

For courses that treat measurement uncertainty. This section is not counted in the 75 minutes; do it when your instructor assigns it.
{: .ws-assigned}

The ray trace uses a finite number of rays, so a measured $$T$$ carries a scatter of a few percent; the demo always gives the same $$T$$ for the same room, so repeating a reading does not show it. Compare the bare room at 500 Hz in Parts 1 and 2 (different setups) to judge it. Give the slope and intercept of the Part 2 fit with their standard errors, and say whether the line passes through the origin within the uncertainty of the intercept. On a real measurement add background noise (which limits the range of the decay), the room not being evenly filled with sound, air absorption at high frequencies, and the coefficients of real materials varying with how they are mounted.

## What to hand in

Prelab answers, a Data table copy for each part with its last three columns filled in as the parts say, the graph and fit for Part 2, your audience and mystery panel coefficients, and answers to the questions (and to Uncertainty, if assigned). Identify simulated data.
