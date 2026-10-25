# Doppler Effect and Shock Waves
Student laboratory · Acoustics

Textbook: OpenStax *University Physics*, Vol. 1, §§17.7 and 17.8. Access for free at https://openstax.org/details/books/university-physics-volume-1.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/doppler.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Ambulance passing; Source at rest, observer moving; Mach 1: the sound barrier; Supersonic jet: Mach cone; Redshift and blueshift; Transverse Doppler. The last two are Light setups and go with the Doppler Effect for Light worksheet; this handout uses **Sound**. In Supersonic jet: Mach cone the source starts 200 m left of the center of the view and 70 m above it at Mach 2 with f = 300 Hz, the observer stands 90 m left of center and 70 m below, and the setup plays at 1/16 speed.

**Using the demo.**

- The picture shows the crests spreading from the source as circles, each centered where the source was when it emitted it, and the observer; below it is a plot of the received frequency f′ over time. **3D** shows the same simulation with each crest as a sphere, and **Flat** is the slice through them (the ground for the ambulance, the upright plane of the flight for the jet). Everything is to scale. The clock above the picture gives t to 0.01 s, and the Time fold's **Playback speed** runs from 1/32 to 4 times real: slow motion only slows the drawing, and the audio always plays the real pitch.
- Drag the source or the observer to move them, and the round grip at the tip of an arrow to set that velocity. The card beside the picture holds the same values as sliders: for the source, **Mach number v<sub>s</sub>/v** (0 to 2.5), **Direction** and **Emitted frequency f** (100 to 1500 Hz in 10 Hz steps); for the observer, **Speed v<sub>o</sub>/v** (0 to 0.9) and **Direction**. **Restart** runs the setup again from its start.
- Readouts under What the observer hears: **Received frequency f′**, **f′/f**, the **Angle θ at emission**, when the sound now arriving left the source, and, from Mach 1 up, the **Mach cone half angle**. When the cone reaches the observer the picture flashes "boom" and a red line marks that moment on the f′ plot.
- **Record reading** stores the sound arriving now: which one moves, the emitted frequency, the part of that velocity along the line from where the sound left the source to the observer (the only part that shifts the frequency), whether it approaches or recedes, f′, f′/f and the angle θ. It refuses a reading while no sound has reached the observer, while two sounds arrive at once (supersonic), and in Light.
- **Export to worksheet** fills the Data table in order: Scan, Motion, Emitted f₀, Speed (the part along the line), Direction, Observed f, f/f₀.

**What the demo models.**

- A point source in still, uniform air with $$v = 343.2\ \text{m/s}$$ (dry air at 20 °C). The medium picks out a frame, so only for sound does it matter which one moves.
- The received frequency comes from the geometry of the crests: the program finds the emission time whose crest reaches the observer now and uses $$f' = f\,\frac{v - \vec v_o\cdot\hat n}{v - \vec v_s\cdot\hat n},$$ where $$\hat n$$ points from where the source was when it emitted this sound to where the observer is now (the dashed line on the drawing). For an observer at rest this is $$f' = \frac{f}{1 - (v_s/v)\cos\theta}.$$
- From Mach 1 up the crests touch two lines through the source, the Mach cone, with half angle $$\sin\theta_c = v/v_s.$$ Inside the cone two sounds arrive at once, one of them heard backward and drawn dashed at \|f′\| on the plot. A real aircraft is not a point: its nose and tail shocks give two booms close together.
- Each drawn circle is one crest, or at high frequency every nth crest (the Time fold says which); loudness falls as 1/r in the audio but is not drawn. The readings are simulated: computed from this model, not measured.

</details>

## Goal

Measure how the observed frequency of sound changes when a source moves relative to a stationary observer, and distinguish source motion from observer motion. Then time a sonic boom to measure the angle of a Mach cone.

## Background

For a source moving directly toward a stationary observer in still air,

$$f_{\mathrm{obs}}=f_0\frac{v}{v-v_s},$$

where $$f_0$$ is emitted frequency, $$v$$ is sound speed and $$v_s$$ is source speed toward the observer. For a stationary source and an observer moving toward it,

$$f_{\mathrm{obs}}=f_0\frac{v+v_o}{v}.$$

The virtual sound model uses $$v=343.2\ \mathrm{m/s}$$ at 20 °C. These one dimensional expressions assume subsonic motion along the line of sight; a passing source has a changing radial component.

**Shock waves** (§17.8). A source faster than sound outruns its own crests. Each crest is a circle centered where it was emitted, and the circles touch two lines through the source, the **Mach cone** (in three dimensions a cone). In the time $$t$$ since a crest was emitted, the crest has spread to radius $$vt$$ while the source has moved $$v_s t$$, so the half angle $$\theta$$ of the cone obeys

$$\sin\theta = \frac{v}{v_s} = \frac{1}{M},$$

where $$M = v_s/v$$ is the **Mach number**. The pressure piles up on the cone, and an observer on the ground hears nothing until the cone sweeps over, then a sudden **sonic boom**. If the source flies in a straight line at height $$h$$ above the observer, the cone reaches the observer when the source is a distance $$d$$ past the point overhead, with

$$\tan\theta = \frac{h}{d}.$$

So the boom always comes after the source has passed over, later in distance for a narrower cone.

## Before the lab

1. Does an approaching sound source raise or lower observed pitch?
2. Why are moving source and moving observer shifts not identical at the same speed?
3. What happens to the simple approaching source formula as source speed approaches sound speed?
4. A jet flies level at Mach 2.0, 140 m above an observer. Find the half angle of its Mach cone, how far past the point overhead it is when the observer hears the boom, and how long after it passed overhead that is.

## Safety

For a real sound experiment, keep loudspeaker levels safe and moving equipment clear of listeners. Do not use vehicles or fast projectiles for classroom Doppler measurements.

## Procedure

**Moving source.** Choose a fixed emitted frequency and a stationary observer. Record observed frequency for at least six subsonic approach speeds, including zero. Use speeds sufficiently below 343.2 m/s that a clean direct approach can be identified. Compare with the source motion equation.

**Moving observer.** Keep the source at rest and repeat at six observer approach speeds. Compare the two shifts at matched speeds.

**Receding case.** Repeat selected speeds with source or observer moving away. Check the sign of the shift and the limit at zero speed.

**Mach cone.** Use a source that flies in a straight line past a stationary observer faster than sound. In the Supersonic jet setup, the source starts 200 m to the left of the center of the view and 70 m above it, and flies to the right; the observer is 90 m left of center and 70 m below, so the source passes $$h = 140$$ m over the observer after flying 110 m (one grid square is 100 m). For at least four Mach numbers from 1.2 to 2.5, run the flight from the start and read the time $$t_b$$ of the boom to 0.01 s. Find the distance the source has flown, $$v_s t_b$$, the distance $$d$$ past the point overhead, and the cone's half angle from $$\tan\theta = h/d$$. Record these in the Mach cone table. Compare with the half angle the demo shows only after you have your own.

**Using the virtual apparatus.** Use Sound, not Light. Only the part of the velocity along the line between the source and the observer shifts the frequency, so a reading records that part as the speed, with whether it approaches or recedes; read it while the moving object heads almost straight toward the other one (early in the run) or straight away (late in the run). Record no readings while two sounds arrive at once (supersonic) or none has arrived. Send each scan to the worksheet before clearing, so each scan gets its own copy of the Data table.

## Data

| Scan | Motion | Emitted $$f_0$$ (Hz) | Speed (m/s) | Direction | Observed $$f$$ (Hz) | $$f/f_0$$ |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |
| | | | | | | |
| | | | | | | |

Record which one moves for every reading.

**Mach cone.** $$h = 140$$ m, and the source flies 110 m from the start to the point overhead.

| Run | Mach number $$M$$ | $$v_s$$ (m/s) | Boom time $$t_b$$ (s) | Distance flown $$v_s t_b$$ (m) | $$d$$ past overhead (m) | $$\theta$$ from $$\tan\theta = h/d$$ (°) | $$1/\sin\theta$$ |
|---|---|---|---|---|---|---|---|
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |

## Analysis

1. Plot $$f/f_0$$ against speed for source and observer scans on separate axes or clearly labeled series.
2. Calculate predicted shifts from the equations and plot residuals.
3. Infer sound speed from an appropriate rearrangement of each model and compare with 343.2 m/s.
4. Explain why the source motion curve is nonlinear while the direct moving observer relation is linear.
5. Plot $$1/\sin\theta$$ against $$M$$ for your Mach cone runs. What line do you expect? Fit a line and compare its slope with that prediction (is the intercept zero within its uncertainty?), then compare each $$\theta$$ with the demo's half angle.

## Uncertainty

Record the precision of displayed speed and frequency. The virtual model is deterministic, so repeated identical settings do not establish statistical uncertainty. Real measurements also depend on microphone timing, alignment, air temperature, wind and the changing line of sight. For the Mach cone, an uncertainty of 0.01 s in $$t_b$$ moves $$d$$ by $$v_s \times 0.01$$ s, up to about 9 m at Mach 2.5; carry that into $$\theta$$.

## Questions

1. Why does receding motion produce a lower frequency?
2. Why does a passing source's pitch change as it crosses the observer?
3. Why does the approaching source expression fail at the sound barrier?
4. Why must a relativistic light Doppler shift be modeled differently?
5. In your runs the boom time hardly changes from Mach 1.2 to Mach 2.5, although the source is twice as fast. Explain why, using the distance flown before the boom.
6. Why is there no Mach cone, and no boom, for a source moving slower than sound?

## What to hand in

Prelab answers, a completed data table, plots of the frequency ratio and residuals, two estimates of the speed of sound with limitations, the Mach cone table and plot, and answers to the questions. Identify simulated data.
