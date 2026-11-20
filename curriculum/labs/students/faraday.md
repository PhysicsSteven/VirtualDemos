# Magnetic Flux and Electromagnetic Induction
Student laboratory · Physics II

Textbook: OpenStax *University Physics*, Vol. 2, §§13.1–13.3, 13.6 and 14.1–14.3. Access for free at https://openstax.org/details/books/university-physics-volume-2.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/faraday.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Using the demo.** Pick a setup with the buttons under Setups; its sliders appear on the card below them. Pause (Play when paused) runs and stops the clock, and Reset starts the run again. The Measurements readouts give the values at the displayed time: flux at that instant, and EMF and current as averages over the preceding 1 ms. The Lab notebook fold under Measurements steps or advances the clock, captures readings and exports them to the Data table. Blind: hide predictions and answers is ticked when the demo opens; it hides the predicted amplitudes, the integral checks, the Steady state (phasors) panel, M and k, and the theory curves on the plots.

**Setups in the demo:** Push the magnet in; Pass it through; Flip the magnet; Generator; Sliding bar; Two coils; Self inductance.

</details>

## Goal

Measure how changing magnetic flux produces an emf in a rotating coil and in a coil with a moving magnet, and test Faraday's law and Lenz's law with the readings.

## Background

The magnetic flux through one turn of a flat coil of area $$A$$ in a uniform field $$B$$ is $$\Phi_B = BA\cos\theta$$, where $$\theta$$ is the angle between the field and the coil's axis (§13.1). A changing flux makes an emf. For a coil of $$N$$ turns, if the flux through each turn changes by $$\Delta\Phi_B$$ in a time $$\Delta t$$, the average emf over that time is

$$\mathcal E_{\rm avg}=-N\frac{\Delta\Phi_B}{\Delta t}.$$

The shorter the interval, the closer this comes to the emf at that moment. The minus sign is Lenz's law (§13.2): the induced current flows in the direction whose own magnetic field opposes the change in flux. Push the north pole of a magnet toward a coil and the current makes the near face of the coil a north pole, which pushes back; pull the magnet away and the current reverses.

**The area under the emf graph.** Over each short interval, $$\mathcal E\,\Delta t = -N\,\Delta\Phi_B$$. On a graph of emf against time, $$\mathcal E\,\Delta t$$ is the area of a thin strip, so adding the strips over a whole move adds up all the small changes in flux:

$$\text{area under the emf against time graph} = -N\,(\Phi_{\rm end} - \Phi_{\rm start}).$$

It depends only on the flux at the start and at the end, not on how fast the magnet moved. From readings, find the area by adding trapezoids, $$\tfrac12(\mathcal E_i+\mathcal E_{i+1})(t_{i+1}-t_i)$$, one for each pair of neighboring readings (a spreadsheet column and its sum), or by counting squares under the graph.

**Generator.** A coil turning steadily at angular speed $$\omega$$ in a uniform field has $$\theta = \omega t$$, so its flux per turn is $$\Phi_B = BA\cos(\omega t)$$ (§13.6). Its emf is

$$\mathcal E = NBA\omega\,\sin(\omega t),$$

a sine with amplitude $$NBA\omega$$ and period $$T = 2\pi/\omega$$, a quarter cycle out of step with the flux.

## Before the lab

1. Use $$NBA\omega$$ to find the emf amplitude of the Generator setup (N = 100, B = 0.20 T, A = 100 cm²) at ω = 6.3 rad/s, and its period.
2. Predict what doubling $$\omega$$ does to emf amplitude and period.
3. A generator coil turns steadily in a uniform field. At the instant the flux through it is largest, is the emf largest, zero, or somewhere in between? Why?

## Safety

Keep real magnets away from sensitive electronics. Switch off supplies before rewiring coils. Do not open a powered inductor circuit abruptly unless the apparatus is designed for it. Keep hands away from rotating parts.

## Procedure

**Using the virtual apparatus.** The notebook controls are in the **Lab notebook** fold under Measurements. Keep **Blind: hide predictions and answers** on while collecting. **Step 1 ms** and **Advance and pause** (with the time typed in **Advance by (s)**) move the clock on and pause it; **Capture measurement** records the readouts; **Export to worksheet** sends the captured points to the Data table. Press Export to worksheet and then **Clear notebook** after each run, so each run gets its own copy of the table.

**Generator.** Press the Generator setup. Use Turns N = 100, Field B = 0.20 T, Coil area A = 100 cm² and Circuit resistance R = 100 Ω (the setup's values). Set the Angular speed ω slider to 6.3 rad/s. Press Step 1 ms and Capture measurement for a first reading, type 0.083 (about $$T/12$$) in Advance by (s), and press Advance and pause and then Capture measurement twelve times: one full cycle. Then do three shorter runs, each with a first reading and six more (half a cycle, which always holds one peak of the emf): ω = 3.0 rad/s with Advance by 0.175 s, ω = 12.0 rad/s with 0.044 s, and ω = 6.3 rad/s again with Turns N = 200 and 0.083 s.

**Magnet.** Press the Push the magnet in setup (coil N = 400; Speed of the magnet v = 0.20 m/s) and press Reset: the clock starts again at 0, and the magnet starts in at t = 0.25 s and stops inside the coil 0.60 s later. Press Step 1 ms at once (it pauses) and Capture measurement, then type 0.05 in Advance by (s) and capture after each Advance and pause until the emf is back to zero, near t = 0.9 s. Export and Clear notebook. Press **Pull out** and Play, and watch the sign of the emf on the plot as the magnet leaves (no readings needed). When it has stopped, set the Speed of the magnet v slider to 0.40 m/s, press **Push in** and at once Step 1 ms, and capture every 0.025 s until the emf is back to zero. Export.

## Data

| Setup and settings | $$t$$ (s) | $$\Phi_B$$ per turn (Wb) | emf (V) | Current (A) | $$I_1$$ (A), two coils | Speed/frequency |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |
| | | | | | | |

Use a separate copy for each run. The emf and current readouts are averages over the 1 ms before each reading; the flux is its value at the reading.

## Analysis

1. Plot flux and emf against time for the full 6.3 rad/s run. Read the period and compare it with $$2\pi/\omega$$. Is the emf positive while the flux is rising or while it is falling? Then take the largest emf reading (in size) of each N = 100 run as its amplitude, plot amplitude against $$\omega$$, and compare the slope with $$NBA$$. Compare the N = 200 amplitude with the N = 100 one at 6.3 rad/s.
2. In the full 6.3 rad/s run, take the flux readings just before and just after the largest emf reading (two time steps apart) and work out the average emf over that interval, $$-N\,\Delta\Phi_B/\Delta t$$. Compare it with the emf reading in the middle, at the peak. Why is the average a little smaller?
3. For each push in run, find the area under the emf against time graph by adding trapezoids. Compare each area with $$-N(\Phi_{\rm end} - \Phi_{\rm start})$$ from the run's first and last flux readings. Compare the peak emf and the area of the two runs. Which sign did the emf have as the magnet was pulled out, and why, by Lenz's law?

## Questions

1. Find the readings in your 6.3 rad/s run where $$\Phi_B$$ is largest in size and where it is closest to zero. What is the emf at each, and does it agree with Before the lab 3? Explain with Faraday's law.
2. Why can faster magnet motion raise the peak emf without changing the area under the emf graph between the same start and end positions?

## Uncertainty

For courses that treat measurement uncertainty. This section is not counted in the 75 minutes; do it when your instructor assigns it.
{: .ws-assigned}

The readouts carry six significant figures, so rounding is not the limit; the spacing of the readings is. With readings $$T/12$$ apart (30° of turning), how far from a peak can the nearest reading fall, and how much lower than the amplitude can it read? Would your trapezoid areas come out a little high or a little low, and what would halving the Advance by step do?

## With calculus

For courses that use calculus. This section is not counted in the 75 minutes; do it when your instructor assigns it.

1. For a very short interval Faraday's law becomes $$\mathcal E=-N\,d\Phi_B/dt$$. Differentiate $$\Phi_B = BA\cos(\omega t)$$ to derive $$\mathcal E = NBA\omega\sin(\omega t)$$, and use it to show that the emf is zero whenever the flux is largest in size.
2. Integrate $$NBA\omega\sin(\omega t)$$ over an interval of length $$\Delta t$$ centered on a peak and show that the average emf over it is $$NBA\omega\,\dfrac{\sin(\omega\Delta t/2)}{\omega\Delta t/2}$$. Work it out for your interval in Analysis 2 and compare with your $$-N\,\Delta\Phi_B/\Delta t$$.
3. Integrate $$\mathcal E=-N\,d\Phi_B/dt$$ over a whole move to show $$\int\mathcal E\,dt=-N\,\Delta\Phi_B$$. The magnet moves at a steady speed, so if a move at 0.20 m/s gives the flux $$\Phi(t)$$ (with the move starting at $$t = 0$$), the same move at 0.40 m/s gives $$\Phi(2t)$$. Use the chain rule to show that the emf at 0.40 m/s at time $$t$$ is twice the emf at 0.20 m/s at time $$2t$$, and substitute $$u = 2t$$ to show that the integral is unchanged. Compare with the peaks of your two push in runs.

## What to hand in

Prelab answers, settings and data, flux and emf plots, the amplitude against $$\omega$$ graph, the magnet area check and answers to the questions (and to Uncertainty and With calculus, if assigned). Identify simulated data.
