# Two Speaker Interference
Student laboratory · Acoustics

Textbook: OpenStax *University Physics*, Vol. 1, §16.5 and §17.3. Access for free at https://openstax.org/details/books/university-physics-volume-1.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/two-speaker.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Walk across, 686 Hz; Speakers close together; Speaker 2 wired backwards; Measure the speed of sound; Mystery frequency; Sandbox.

**Using the demo.** The room is seen from above, 10 m by 8 m, with two speakers on the left wall driven by one function generator (100 to 2000 Hz). The speaker separation, the wiring of speaker 2, whether speaker 2 is on, the distance of the walk line from the wall and the air temperature are on the Set up card, which fades during a walk. The microphone is dragged on the floor (or moved with the arrow keys); the meter shows the sound level and the tape distances $$r_1$$ and $$r_2$$ to the two speakers. Walking the microphone moves it along the walk line and plots the level against $$y$$. Blind hides the wavelength; the mystery frequency covers the generator's display. The Sandbox is for exploring on your own: drag up to eight speakers from the tray onto the floor, anywhere, each in phase or wired backwards; it records no readings.

**What the demo models.** Each speaker is a point source in a free field: no walls, floor or ceiling reflect and the air absorbs nothing, as outdoors or in an anechoic room. The pressure from each falls as $$1/r$$, so at a quiet spot the two do not cancel exactly unless $$r_1 = r_2$$. One speaker gives 80 dB at 1 m (chosen). The speed of sound is $$v = 331.3\ \mathrm{m/s}\,\sqrt{1 + t_{\rm C}/273.15}$$ with $$t_{\rm C}$$ the air temperature in °C, 343.2 m/s at 20 °C. Positions and distances are shown to 1 mm and the level to 0.1 dB, with no noise.

</details>

## Goal

Map the loud and quiet places in front of two speakers driven together, find the wavelength from the path difference, and use it to measure the speed of sound and an unknown frequency.

## Background

Two speakers driven in phase at frequency $$f$$ send out waves of wavelength $$\lambda = v/f$$. At a point $$r_1$$ from speaker 1 and $$r_2$$ from speaker 2, the waves arrive with a phase difference set by the path difference $$\Delta r = r_2 - r_1$$:

$$\text{loud (constructive)}:\ \Delta r = m\lambda,\qquad \text{quiet (destructive)}:\ \Delta r = \left(m + \tfrac12\right)\lambda,\qquad m = 0, \pm1, \pm2, \ldots$$

The points with the same $$\Delta r$$ lie on a hyperbola with the speakers at its foci, so the loud and quiet places form lines that fan out from between the speakers. Since $$\lvert\Delta r\rvert$$ can never exceed the separation $$d$$, the number of quiet lines is limited by $$d/\lambda$$. If one speaker is wired backwards, it adds half a cycle to its wave and the loud and quiet conditions swap. Sound levels are $$\beta = 20\log_{10}(p_{\text{rms}}/20\ \mathrm{\mu Pa})$$, so a deep dip in decibels means near cancellation.

## Before the lab

1. Find the wavelength of 686 Hz sound in air at 20 °C, using $$v = 331.3\ \mathrm{m/s}\,\sqrt{1 + t_{\rm C}/273.15}$$.
2. The speakers are 1.00 m apart and in phase. What path differences give quiet spots at 686 Hz? How many quiet lines are there on each side of the center line?
3. Why is the center line, equally far from both speakers, always loud when the speakers are in phase?
4. At a quiet spot the two waves have opposite phase. Why is the sound not exactly zero there in this room?

## Safety

On a real two speaker setup, keep levels moderate (below about 85 dB at the listening position) and do not put ears close to the speakers. Run cables along walls.

## Procedure

**Part 1: one frequency.** At 686 Hz and 20 °C, with the speakers 1.00 m apart and in phase, walk the microphone along a line 4.0 m from the wall. Find and record each quiet spot and each loud spot along that line, as precisely as the meter allows. Then switch speaker 2 off and record the level at each quiet spot again.

**Part 2: the speed of sound.** With the speakers 1.50 m apart and the walk line 3.0 m from the wall, find the quiet spots along the line at three or more frequencies between 400 and 1200 Hz.

**Part 3: one speaker wired backwards.** Predict where the quiet spots of Part 1 move if speaker 2 is wired backwards, then find them.

**Part 4: mystery frequency.** With the generator's display covered, find the quiet spots along one walk line and record them. Keep the same mystery frequency for the whole scan: choosing a new one changes it.

**Using the virtual apparatus.** Record each spot you find. Send each part (and each frequency in Part 2) to the worksheet before clearing, so each gets its own copy of the Data table; the frequency, separation and wiring go into the first column.

## Data

| Trial | $$x$$ (m) | $$y$$ (m) | $$r_1$$ (m) | $$r_2$$ (m) | Level (dB) | Loud or quiet | Path difference $$\Delta r$$ (m) | Order $$n$$ |
|---|---|---|---|---|---|---|---|---|
| | | | | | | | | |
| | | | | | | | | |
| | | | | | | | | |
| | | | | | | | | |
| | | | | | | | | |

Fill the last three columns yourself. For each spot, write loud or quiet, work out $$\Delta r = r_2 - r_1$$, and give its order $$n$$, the number of wavelengths in $$\Delta r$$ that the spot should have: $$n = m$$ at a loud spot and $$n = m + \tfrac12$$ at a quiet one when the speakers are in phase (so $$n = \ldots, -1, -\tfrac12, 0, \tfrac12, 1, \ldots$$). A graph of $$\Delta r$$ against $$n$$ is a straight line of slope $$\lambda$$.

## Analysis

1. For Part 1, list $$\Delta r$$ for every loud and quiet spot. Show that the quiet spots are at $$(m + \frac12)\lambda$$ and the loud ones at $$m\lambda$$, and find $$\lambda$$ from your quiet spots. Compare with $$v/f$$. On the graph of $$\Delta r$$ against $$n$$, which spots lie off the line, and why?
2. Explain what happened when speaker 2 was switched off.
3. For Part 2, find $$\lambda$$ at each frequency from the slope of $$\Delta r$$ against $$n$$ for its quiet spots, then $$v = f\lambda$$ at each. Find the mean speed of sound and compare it with $$v = 331.3\ \mathrm{m/s}\,\sqrt{1 + t_{\rm C}/273.15}$$.
4. For Part 3, compare the quiet spots with Part 1 and explain the change. With speaker 2 wired backwards, which orders $$n$$ do the quiet spots have?
5. For Part 4, find the mystery wavelength from the slope of $$\Delta r$$ against $$n$$, and the frequency from it.

## Uncertainty

The level changes slowly near a loud spot and very quickly near a quiet one, so quiet spots can be located much more precisely; that is why the analysis uses them. The tape reads distances to 1 mm. On a real setup add reflections from the floor, walls and people (which add their own interference), the size of the speakers and microphone, the speakers' directionality, air temperature and wind.

## Questions

1. Why do the quiet lines curve away from the center line as you move farther from the speakers?
2. Why are there more quiet lines at a higher frequency, with the same speakers?
3. Why must a pair of speakers in a home stereo be wired the same way round?
4. Two speakers 0.40 m apart play 686 Hz. Can there be a quiet spot anywhere in the room with $$\Delta r = 3\lambda/2$$? Explain.

## What to hand in

Prelab answers, a Data table copy for each part and frequency, the graphs of $$\Delta r$$ against $$n$$ with fits, your values of $$\lambda$$, $$v$$ and the mystery frequency with uncertainties, and answers to the questions. Identify simulated data.
