---
title: Room Acoustics and the Anechoic Chamber
level: Intro physics (sound, OpenStax Vol 1 17.3, and beyond the textbook)
time: 20 to 45 minutes
---
## What students should come away with

- A clap in a room keeps arriving from the walls. Each reflection loses a fraction α of its energy, so the sound decays exponentially, and the reverberation time T is the time for it to fall by 60 dB.
- Sabine's formula T = 0.161 V/A, with A = Σ Sα, says that T grows with the volume and falls with the total absorption. Double the absorption and T halves.
- Absorption depends on frequency: soft materials absorb highs much better than lows, so a room can ring at 125 Hz and be dry at 2 kHz.
- An anechoic chamber absorbs nearly everything, so only the direct sound arrives and the level falls as 1/r², 6.0 dB per doubling of distance. A reverberant room is the opposite: beyond a short critical distance the level hardly changes.
- Wedges stop working when the wavelength is more than about four times their depth (Beranek and Sleeper 1946): below that cutoff the chamber reflects again.

## Before class

Students should know β = 10 log(I/I₀) and that intensity falls as 1/r² from a point source (the Sound Intensity and Decibels demo). The picture is a plan view of the room with the loudspeaker and the microphone on its centre line; the Set up card holds the room's size, its walls (hard, absorbing panels, or wedges), the floor and the microphone distance. Under **Measure**, **Reverberation time** shows the decay of a clap and **Level against distance** the steady level of a 10 mW noise source. **Clap** plays the clap in slow motion (×1/100): each dot is a ray of sound, and it fades as the surfaces absorb it. The **Absorption coefficients** fold lists the α of every surface in the chosen octave band.

## Running it in class

1. **Bare room.** A 9 m × 7 m × 3 m room (189 m³) with painted brick walls and a concrete floor. Ask Q1, then clap. At 500 Hz the measured T is 4.75 s; Sabine gives 4.81 s. Switch to 125 Hz: 13.66 s, and at 1 kHz 6.79 s.
2. **Add absorbing panels.** Twenty foam panels (14.4 m²) cut T at 500 Hz to 1.62 s (Sabine 1.69 s). Record T for 0, 5, 10, 20, 30 and 40 panels and plot T against 1/A (Q2, Q3). At 125 Hz the same panels barely help: 8.01 s (Q4).
3. **Room with an audience.** A 12 m × 9 m × 4 m hall whose floor is an audience on wooden chairs. T at 500 Hz is 0.65 s, against 6.32 s with a bare concrete floor (Q5).
4. **Anechoic chamber.** Wedges 0.3 m deep on all six surfaces. Switch to **Level against distance** and record 0.5, 1, 2 and 4 m at 500 Hz: 95.2, 89.1, 83.1, 77.1 dB, a clean 6.0 dB per doubling. Clap: only the direct sound arrives (Q6).
5. **Below the cutoff.** The same chamber at 125 Hz, where λ = 2.74 m is more than four times the wedge depth (cutoff c/4d = 286 Hz). The readings are 95.3, 89.7, 84.7 and 80.4 dB: only 5.6, 5.0 and 4.3 dB per doubling (Q7).
6. **Mystery panels.** Twenty panels of a hidden material. Measure T with and without them and find their α in each band (Q8).

## Questions

**Q1.** Predict: you clap once in an empty concrete stairwell and once in a bedroom full of furniture and curtains. In which does the sound last longer, and why? What do you think happens to the sound energy?

**Q2.** In the bare 9 m × 7 m × 3 m room at 500 Hz the demo measures T = 4.75 s. Use Sabine's formula to find the total absorption A, and compare with the A the readouts give from the table of coefficients. How many square metres of perfectly absorbing surface (an open window) would absorb as much?

**Q3.** Twenty foam panels, 0.72 m² each with α = 0.83 at 500 Hz, replace painted brick with α = 0.02. By how much do they raise A? Predict T with Sabine, then measure it. If you plot T against 1/A for 0 to 40 panels, what should the graph look like, and what is its slope?

**Q4.** The same twenty panels give T = 1.62 s at 500 Hz but 8.01 s at 125 Hz. Explain with the absorption coefficients. Why is it hard to stop a room from booming at low frequency?

**Q5.** An audience on wooden chairs covers the 108 m² floor of the 12 m × 9 m × 4 m hall. Find A and Sabine's T at 500 Hz. The demo measures 0.65 s. Why do concert halls sound different full and empty, and why are their seats upholstered?

**Q6.** In the anechoic chamber at 500 Hz the level is 95.2 dB at 0.5 m. Predict it at 1, 2 and 4 m, then measure. In the bare room the level at the same distances is 100.0, 98.9, 98.3 and 98.0 dB. Explain the difference, and find the critical distance √(A/16π) for the bare room.

**Q7.** The wedges are 0.3 m deep. Find the wavelength at which they stop working, by the rule that the wedge depth is a quarter wavelength, and its frequency. Use it to explain the readings at 125 Hz. How deep must the wedges be to keep a chamber anechoic down to 100 Hz?

**Q8.** With the Mystery panels, measure T at 500 Hz with no panels and with all twenty. Use Sabine's formula to find the change in A, and from it the panels' absorption coefficient α. Repeat at 125 Hz and 2 kHz. Is the material more like foam, carpet, curtains or wood?

## Common misconceptions

- **"Sound bounces off walls forever."** Each reflection takes away a fraction α; even painted brick (α = 0.02) soaks up the clap within seconds, because a ray meets a wall about 100 times a second in a room this size.
- **"Absorbing panels block sound from getting out."** Absorption (less reflected back into the room) and insulation (less transmitted through the wall) are different properties; foam does little for the neighbours.
- **"Adding absorption lowers the level everywhere."** Close to the source the direct sound dominates and absorption changes little; it lowers the reverberant level far from the source.
- **"An anechoic chamber is silent."** It is free of echoes, not of sound: the direct sound is all you hear, and it falls off as 1/r².
- **"Thicker foam absorbs better at every pitch."** The low frequency limit is set by the depth compared with the wavelength.

## Physics behind the demo

- Ray tracing (geometrical acoustics). 4000 to 64000 rays leave the speaker in random directions with equal shares of the clap's energy. At a surface a ray keeps (1 − α) of its energy and leaves in a random direction (Lambert's cosine law: fully diffuse reflections). The microphone is a sphere 0.5 m in radius that adds the energy of the rays crossing it; the direct sound is added exactly as 1/(4πr²). Energies add, so there are no room modes or interference, which matter in real rooms at low frequency; air absorption is left out.
- T is found as in ISO 3382: the decay curve is the backward integral of the clap's energy (Schroeder 1965), and a least squares line from −5 to −25 dB is extended to −60 dB (T20). A measured T scatters by about 1 to 3 % from one set of rays to another; the same setup always gives the same rays.
- Sabine: T = 24 ln 10 · V/(cA) = 0.161 V/A in SI units (c = 343 m/s). Eyring: T = 0.161 V/(−S ln(1 − ᾱ)), with ᾱ = A/S. For small ᾱ the two agree; with uniform absorption the rays reproduce Eyring's T to within a few percent. With almost all the absorption on one surface (the audience) the measured T is shorter than both formulas, which assume the absorption is spread evenly; at 1 kHz it is 0.41 s against Eyring's 0.53 s.
- Absorption coefficients (random incidence, reverberation chamber measurements, octave bands 125 Hz to 4 kHz) come from the materials database of the pyroomacoustics library (LCAV, EPFL); the keys are listed in the demo. Panels are 1.2 m × 0.6 m on the walls; the ceiling is painted brick.
- Wedges line all six surfaces and the room is the space between their tips. Beranek and Sleeper (J. Acoust. Soc. Am. 18, 140, 1946) define the cutoff as the frequency where the pressure reflection reaches 10 % (99 % of the energy absorbed) and found it where the wedge length is about a quarter wavelength, f_c = c/(4d). The demo's reflection R = 0.1 (f_c/f)², at most 0.9, is a model of the shape around the cutoff, not measured data.

## Going further

- Sabine found his formula in the late 1890s while fixing the lecture hall of Harvard's Fogg Art Museum, timing how long an organ pipe stayed audible with seat cushions carried in from a theatre. Concert halls aim for T of about 2 s, lecture rooms under 1 s.
- Beranek and Sleeper's Harvard chamber had glass fibre wedges about 1.4 m long; its cutoff was near 60 to 70 Hz.
