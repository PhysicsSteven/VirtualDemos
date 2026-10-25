# Anechoic Chamber
Student laboratory · Acoustics

Textbook: OpenStax *University Physics*, Vol. 1, §17.3. The wedge cutoff follows L. L. Beranek and H. P. Sleeper, *J. Acoust. Soc. Am.* 18, 140 (1946). Access OpenStax for free at https://openstax.org/details/books/university-physics-volume-1.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/room-acoustics.html#anechoic)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Bare room; Add absorbing panels; Room with an audience; Anechoic chamber; Below the cutoff; Mystery panels.

**Using the demo.** A 3D view of a room (Plan switches to the view from above), with a loudspeaker and a microphone on its center line, 1.5 m up; drag the microphone along the center line in either view. Under it is a graph of the sound level against distance. The room's size, its walls (hard, with panels, or lined with wedges), the wedge depth, the floor and the microphone distance are on the Set up card (the arrow keys move the microphone in steps of 0.1 m, 1 m with Shift; the slider moves it in 0.05 m steps). Measure chooses Level against distance (this worksheet) or Reverberation time (the Reverberation Time worksheet), and the octave band from 125 Hz to 4 kHz. Blind hides the free field line, the predictions and the wedge cutoff; the level meter stays.

**What the demo models.** A steady 10 mW source, the same in every direction, playing noise in the chosen band. Ray tracing gives the reflected sound: each surface keeps a fraction $$\alpha$$ of a ray's energy and sends the rest off in a random direction, and energies add, so there is no interference. The direct sound is exact, $$I = P/(4\pi r^2)$$. The wedges absorb all but a pressure fraction $$R = 0.1\,(f_c/f)^2$$ (at most 0.9) of the sound, with $$f_c = c/(4d)$$; the form of $$R$$ is this demo's stated model, not measured data. Air absorbs nothing, $$c = 343.2$$ m/s and $$\rho = 1.204\ \mathrm{kg/m^3}$$. The meter reads to 0.1 dB, with no noise. Simulated data.

</details>

## Goal

Show that sound from a small source falls off as $$1/r^2$$ when nothing reflects it, find the source's power, find where wedges stop working, and compare with an ordinary room.

## Background

In free space, a source of power $$P$$ spreads its sound over a sphere, so the intensity at distance $$r$$ is $$I = P/(4\pi r^2)$$. A sound level meter measures the pressure: in a traveling wave $$I = p_{\text{rms}}^2/(\rho c)$$, and the level is

$$L = 20\log_{10}\frac{p_{\text{rms}}}{20\ \mathrm{\mu Pa}}.$$

Each doubling of $$r$$ divides $$I$$ by 4, so $$L$$ falls by $$10\log_{10}4 = 6.02$$ dB. A graph of $$L$$ against $$\log_2 r$$ is then a straight line of slope $$-6.02$$ dB per doubling, and its value at $$r = 1$$ m gives $$P$$.

An anechoic chamber is lined with wedges of porous material that absorb almost all of the sound reaching them, so only the direct sound is left. A wedge works when it is long compared with the wavelength. The usual rule is that wedges of length $$d$$ absorb 99 % of the energy down to the cutoff frequency

$$f_c = \frac{c}{4d},$$

where $$d$$ is a quarter wavelength. Below $$f_c$$ they reflect more and more. In an ordinary room, the reflected sound fills the room at a nearly steady level, so far from the source the level stops falling. The critical distance, where the direct and reflected sound are equal, is about $$r_c = \sqrt{A/(16\pi)}$$, with $$A$$ the room's total absorption in square meters.

## Before the lab

1. A 10 mW source: find $$I$$ at 1.0 m, then $$p_{\text{rms}}$$ and $$L$$ ($$\rho c = 413\ \mathrm{kg/(m^2\,s)}$$).
2. Find the cutoff frequency of wedges 0.30 m deep, and the depth needed for a cutoff of 100 Hz.
3. Why does the level in a free field fall by 6 dB for each doubling of distance, while in a hard room it levels off?
4. A room has $$A = 5.0$$ m². Find its critical distance.

## Safety

A real anechoic chamber is very quiet and can be disorienting: do not work alone, keep the door open when not measuring, and walk only on the wire floor's walkways. The wedges are fragile.

## Procedure

**Part 1: the anechoic chamber.** In the chamber with 0.30 m wedges, at 500 Hz, measure the level at eight distances from 0.5 to 5 m, including 0.5, 1, 2 and 4 m.

**Part 2: below the cutoff.** In the same chamber, at 125 Hz, measure the level at the same distances.

**Part 3: deeper wedges.** Line the chamber with 0.80 m wedges and repeat Part 2 at 125 Hz, at distances from 0.5 to 4 m (the room is now smaller inside).

**Part 4: an ordinary room.** In the 9 m × 7 m × 3 m room with hard walls and a concrete floor, at 500 Hz, measure the level at eight distances from 0.5 to 7 m.

**Using the virtual apparatus.** Measure Level against distance in every part. Choosing the bare room for Part 4 switches the measurement back to Reverberation time, so choose Level against distance again after setting up the room. Send each part to the worksheet before clearing, so each part gets its own copy of the Data table. Fill the $$\log_2 r$$ column yourself.

## Data

| Reading | Walls | Band (Hz) | Distance $$r$$ (m) | $$\log_2 r$$ | Level $$L$$ (dB) |
|---|---|---|---|---|---|
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |

## Analysis

1. For Part 1, graph $$L$$ against $$\log_2 r$$. Compare the slope with $$-6.02$$ dB per doubling. From the level at $$r = 1$$ m on your line, find the source's power and compare it with 10 mW.
2. For Part 2, compare the levels with Part 1 at the same distances, and find the slope. Where do the levels depart most from $$1/r^2$$, and why? Find the cutoff of the 0.30 m wedges and compare it with 125 Hz.
3. For Part 3, find the slope again. Did deeper wedges restore the $$1/r^2$$ law at 125 Hz?
4. For Part 4, graph $$L$$ against $$\log_2 r$$ and compare with Part 1. Far from the source the level is nearly steady: this is the reverberant level. Find the distance at which Part 1's free field line reaches the reverberant level; this is the critical distance. Compare it with $$\sqrt{A/(16\pi)}$$, using $$A$$ from the demo's Absorption coefficients table.

## Uncertainty

The meter reads to 0.1 dB and the direct sound is exact. The reflected sound comes from a ray trace with a finite number of rays, a scatter of a few percent in the reflected energy, which matters only where the reflections are a large part of the level. On a real chamber add the source not being a point at short range, its directionality, reflections from the wire floor, the microphone stand and the person measuring, and background noise from outside the chamber.

## Questions

1. Why are the wedges of an anechoic chamber shaped as wedges and not flat slabs of the same material?
2. Why are anechoic chambers used to test loudspeakers and microphones?
3. Outdoors, far from buildings, is close to a free field. Why does sound outdoors still not fall exactly 6 dB per doubling at long range?
4. In a hard room, why does moving closer to a talker help you hear them much more than moving from 5 m to 3 m away?

## What to hand in

Prelab answers, a Data table copy for each part, graphs with fits, the source power, the wedge cutoff, the critical distance of the room, and answers to the questions. Identify simulated data.
