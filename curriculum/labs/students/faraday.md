# Magnetic Flux and Electromagnetic Induction
Student laboratory · Physics II

Textbook: OpenStax *University Physics*, Vol. 2, §§13.1–13.3, 13.6 and 14.1–14.3. Access for free at https://openstax.org/details/books/university-physics-volume-2.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/faraday.html)

## Goal

Measure how changing magnetic flux produces an emf, determine a mutual inductance, and connect induced current with energy transfer.

## Background

For $$N$$ turns with flux $$\Phi_B$$ through each turn (§13.1),

$$\mathcal E=-N\frac{d\Phi_B}{dt},\qquad \Phi_B=\int\mathbf B\cdot d\mathbf A.$$

The minus sign expresses Lenz's law (§13.2). For a rotating coil, $$\Phi_B = BA\cos(\omega t)$$. A moving bar of length $$\ell$$ in a perpendicular field has emf magnitude $$B\ell v$$ (§13.3).

In two coupled coils, a changing primary current produces an emf in the secondary (§14.1):

$$\mathcal E_2=-M\frac{dI_1}{dt}.$$

With the secondary open and a sinusoidal primary current, its emf amplitude is $$M\omega I_{1,\text{peak}}$$. The current amplitude must be measured; it need not be proportional to the applied source voltage.

## Before the lab

1. Derive the generator emf from $$\Phi_B = BA\cos(\omega t)$$.
2. Predict what doubling $$\omega$$ does to emf amplitude and period.
3. Can an open secondary have a nonzero emf but zero current? Explain.

## Safety

Keep real magnets away from sensitive electronics. Switch off supplies before rewiring coils. Do not open a powered inductor circuit abruptly unless the apparatus is designed for it. Keep hands away from rotating parts.

## Procedure

**Generator.** Use $$N = 100$$, $$B = 0.20\ \text{T}$$, $$A = 100\ \text{cm}^2$$ and $$R = 100\ \Omega$$ in the simulation, or assigned real-apparatus values. Measure flux and emf over two cycles at angular speeds near 3.0, 6.3 and 12.0 rad/s. Take enough points to locate both signs and the peaks. Repeat one run with twice as many turns.

**Mutual induction.** Use two coaxial coils with the secondary open. Keep their turns, radii and separation fixed. Measure primary-current and secondary-emf amplitudes at three frequencies. Infer $$M$$ for each run. Then change separation and repeat. Close the secondary for one setting and compare its current and the primary current after the transient has settled.

**Motional emf.** Move a conducting bar across a perpendicular magnetic field. At three speeds, measure emf and current. Infer $$B$$ from the emf-speed slope and compare electrical heating with the mechanical power needed to maintain motion.

**Magnet check.** Move a magnet into the coil at two speeds with matched starting and ending positions. Compare peak emf and the time integral of emf. Reverse the motion and explain the sign change.

**Using the virtual apparatus.** Choose **Generator**, **Two coils**, **Sliding bar** or **Push the magnet in**. Keep **Blind: hide predictions and answers** on while collecting. Use **Pause**, **Step 1 ms**, or enter **Advance by (s)** and press **Advance and pause**. Press **Capture measurement** for selected points; **Export to worksheet** sends these points to the Data table and **Export current run CSV** saves the trace. Export before changing setup. For **Two coils**, use **Primary turns N₁**, **Secondary turns N₂**, **Secondary radius a₂**, **Separation d**, **Frequency f** and **Amplitude V₀**. Choose **Open** or **Closed** under Secondary switch. Wait until successive cycles agree before fitting amplitudes. Record the displayed winding resistance and settings needed for your calculations after your measurements are complete.

## Data

| Setup and settings | $$t$$ (s) | $$\Phi_B$$ per turn (Wb) | emf (V) | Current (A) | $$I_1$$ (A), two coils | Speed/frequency |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |
| | | | | | | |

Use a separate copy for each run and state which current is recorded. Keep both endpoint time and interval-midpoint time from the CSV when present.

## Analysis

1. Plot flux and emf against time. Compare period, relative phase and sign with Faraday's law. Plot generator emf amplitude against $$\omega$$ and infer $$NBA$$.
2. Estimate $$-N\,\Delta\Phi_B/\Delta t$$ from nearby flux readings. Compare with emf averaged over that same interval, not a different endpoint value.
3. For the open secondary, calculate $$M = \text{emf}_\text{peak}/(2\pi f I_{1,\text{peak}})$$. Compare frequency scans and separations. Explain why the air-core pair need not obey an ideal transformer's turns ratio.
4. For the sliding bar, infer $$B$$ from the emf-speed slope. Compare $$\lvert F\rvert v$$, $$\lvert \text{emf}\, I\rvert$$ and $$I^2 R$$ during steady motion.
5. Compare the magnet runs using $$\int \text{emf}\,dt = -N\,\Delta\Phi_B$$. Distinguish this integral check from an independent measurement of the magnetic field.

## Uncertainty

Use time spacing, peak bracketing and readout rounding to estimate amplitude and period uncertainty. Avoid fitting only one sampled peak. For $$M$$, include uncertainties in emf amplitude, primary-current amplitude and frequency. The generator/rails/magnet emf and current are interval averages; the flux is an endpoint value. State your sampling interval and check whether reducing it changes the result.

## Questions

1. Why is emf zero at a generator's maximum flux?
2. Why can faster magnet motion change peak emf without changing its integral between matched endpoints?
3. Why does closing the secondary change the primary current?
4. Where does the resistor's heat energy come from in each setup?

## What to hand in

Prelab answers, settings and CSV, flux/emf plots, generator scaling, mutual-inductance estimates, motional-emf and energy calculations, uncertainty and answers to the questions. Identify simulated data.
