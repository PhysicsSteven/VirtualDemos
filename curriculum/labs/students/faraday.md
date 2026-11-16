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

For $$N$$ turns with flux $$\Phi_B$$ through each turn (§13.1),

$$\mathcal E=-N\frac{d\Phi_B}{dt},\qquad \Phi_B=\int\mathbf B\cdot d\mathbf A.$$

The minus sign expresses Lenz's law (§13.2). For a rotating coil, $$\Phi_B = BA\cos(\omega t)$$ (§13.6). For a coil that a magnet moves in or out of, integrating Faraday's law over the move gives $$\int \mathcal E\,dt = -N\,\Delta\Phi_B$$, which depends only on the flux at the start and the end.

## Before the lab

1. Derive the generator emf from $$\Phi_B = BA\cos(\omega t)$$.
2. Predict what doubling $$\omega$$ does to emf amplitude and period.
3. A generator coil turns steadily in a uniform field. At the instant the flux through it is largest, is the emf largest, zero, or somewhere in between? Why?

## Safety

Keep real magnets away from sensitive electronics. Switch off supplies before rewiring coils. Do not open a powered inductor circuit abruptly unless the apparatus is designed for it. Keep hands away from rotating parts.

## Procedure

**Generator.** Press the Generator setup. Use Turns N = 100, Field B = 0.20 T, Coil area A = 100 cm² and Circuit resistance R = 100 Ω (the setup's values). Set the Angular speed ω slider to 3.0, 6.3 and 12.0 rad/s in turn, and for each measure flux and emf over one cycle (the period is $$T = 2\pi/\omega$$). Type about $$T/12$$ in Advance by (s): 0.175 s at 3.0 rad/s, 0.083 s at 6.3 rad/s and 0.044 s at 12.0 rad/s. Then press Advance and pause, then Capture measurement, and repeat twelve times. Repeat the 6.3 rad/s run once with Turns N = 200.

**Magnet check.** Press the Push the magnet in setup and press Push in at two settings of the Speed of the magnet v slider, so the starting and ending positions match. Compare peak emf and the time integral of emf. Reverse the motion and explain the sign change.

**Using the virtual apparatus.** Choose **Generator** or **Push the magnet in**. The notebook controls are in the **Lab notebook** fold under Measurements. Keep **Blind: hide predictions and answers** on while collecting. Use **Pause**, **Step 1 ms**, or enter **Advance by (s)** and press **Advance and pause**. Press **Capture measurement** for selected points; **Export to worksheet** sends these points to the Data table and **Export current run CSV** saves the trace. Export, then press **Clear notebook**, before changing setup, so each run gets its own copy of the table. Record the displayed settings needed for your calculations after your measurements are complete.

## Data

| Setup and settings | $$t$$ (s) | $$\Phi_B$$ per turn (Wb) | emf (V) | Current (A) | $$I_1$$ (A), two coils | Speed/frequency |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |
| | | | | | | |

Use a separate copy for each run and state which current is recorded. Keep both endpoint time and interval midpoint time from the CSV when present.

## Analysis

1. Plot flux and emf against time for the 6.3 rad/s run. Compare period, relative phase and sign with Faraday's law. Plot generator emf amplitude against $$\omega$$ and infer $$NBA$$.
2. Estimate $$-N\,\Delta\Phi_B/\Delta t$$ from nearby flux readings. Compare with emf averaged over that same interval, not a different endpoint value.
3. Compare the magnet runs using $$\int \text{emf}\,dt = -N\,\Delta\Phi_B$$. Distinguish this integral check from an independent measurement of the magnetic field.

## Uncertainty

Use time spacing, peak bracketing and readout rounding to estimate amplitude and period uncertainty. Avoid fitting only one sampled peak. The generator and magnet emf and current are interval averages; the flux is an endpoint value. State your sampling interval and check whether reducing it changes the result.

## Questions

1. Find the readings in your 6.3 rad/s run where $$\Phi_B$$ is largest in size and where it is closest to zero. What is the emf at each, and does it agree with Before the lab 3? Explain with Faraday's law.
2. Why can faster magnet motion change peak emf without changing its integral between matched endpoints?

## What to hand in

Prelab answers, settings and CSV, flux/emf plots, generator scaling, the magnet integral check, uncertainty and answers to the questions. Identify simulated data.
