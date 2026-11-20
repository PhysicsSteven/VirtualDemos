# Mutual Induction and Motional emf
Student laboratory · Physics II

Textbook: OpenStax *University Physics*, Vol. 2, §§13.1, 13.3 and 14.1–14.3. Access for free at https://openstax.org/details/books/university-physics-volume-2.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/faraday.html?ws=faraday-mutual-induction)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Using the demo.** Pick a setup with the buttons under Setups; its sliders appear on the card below them. Pause (Play when paused) runs and stops the clock, and Reset starts the run again. The Measurements readouts give the values at the displayed time: flux at that instant, and EMF and current as averages over the preceding 1 ms. The Lab notebook fold under Measurements steps or advances the clock, captures readings and exports them to the Data table. Blind: hide predictions and answers is ticked when the demo opens; it hides the predicted amplitudes, the integral checks, the Steady state (phasors) panel, M and k, and the theory curves on the plots.

**Setups in the demo:** Push the magnet in; Pass it through; Flip the magnet; Generator; Sliding bar; Two coils; Self inductance.

</details>

## Goal

Determine a mutual inductance from two coupled coils, measure motional emf, and connect induced current with energy transfer.

## Background

For $$N$$ turns with flux $$\Phi_B$$ through each turn (§13.1),

$$\mathcal E=-N\frac{d\Phi_B}{dt},\qquad \Phi_B=\int\mathbf B\cdot d\mathbf A.$$

A moving bar of length $$\ell$$ in a perpendicular field has emf magnitude $$B\ell v$$ (§13.3).

In two coupled coils, a changing primary current produces an emf in the secondary (§14.1):

$$\mathcal E_2=-M\frac{dI_1}{dt}.$$

With the secondary open and a sinusoidal primary current, its emf amplitude is $$M\omega I_{1,\text{peak}}$$. The current amplitude must be measured; it need not be proportional to the applied source voltage.

## Before the lab

1. Can an open secondary have a nonzero emf but zero current? Explain.
2. With the secondary open, the primary's Frequency f goes from 20 Hz to 100 Hz, and the primary current amplitude falls, because the primary coil opposes faster changes. Does the secondary emf amplitude rise, fall or stay the same? Explain.

## Safety

Keep real magnets away from sensitive electronics. Switch off supplies before rewiring coils. Do not open a powered inductor circuit abruptly unless the apparatus is designed for it. Keep hands away from rotating parts.

## Procedure

**Mutual induction.** Press the Two coils setup and press Open under Secondary switch. Keep their turns, radii and separation fixed. Measure primary current and secondary emf amplitudes at three settings of the Frequency f slider, 20, 50 and 100 Hz. Infer $$M$$ for each run, and write the $$I_1$$ and EMF₂ amplitudes at 20 and 100 Hz in your answer to Question 3. Then set Separation d to 5.0 cm and repeat at 50 Hz only. Press Closed under Secondary switch for one setting and compare its current and the primary current after the transient has settled.

**Motional emf.** Press the Sliding bar setup and press Pull at v to move the bar across the field. At three settings of the Speed of the bar v slider, measure emf and current. Infer $$B$$ from the emf speed slope and compare electrical heating with the mechanical power needed to maintain motion.

**Using the virtual apparatus.** Choose **Two coils** or **Sliding bar**. The notebook controls are in the **Lab notebook** fold under Measurements. Keep **Blind: hide predictions and answers** on while collecting. Use **Pause**, **Step 1 ms**, or enter **Advance by (s)** and press **Advance and pause**. Press **Capture measurement** for selected points; **Export to worksheet** sends these points to the Data table and **Export current run CSV** saves the trace. Export, then press **Clear notebook**, before changing setup, so each run gets its own copy of the table. For **Two coils**, use **Primary turns N₁**, **Secondary turns N₂**, **Secondary radius a₂**, **Separation d**, **Frequency f** and **Amplitude V₀**. Choose **Open** or **Closed** under Secondary switch. Wait until successive cycles agree before fitting amplitudes. With Blind on, the Steady state (phasors) panel is hidden, so take the $$I_1$$ and EMF₂ amplitudes from your captured readings: capture points through one settled cycle (Advance by about 1/12 of the period each time) and use the largest positive and negative values. Record the **R₁** and **R₂** readouts under Measurements (the primary and secondary resistances) and the settings needed for your calculations after your measurements are complete.

## Data

| Setup and settings | $$t$$ (s) | $$\Phi_B$$ per turn (Wb) | emf (V) | Current (A) | $$I_1$$ (A), two coils | Speed/frequency |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |
| | | | | | | |

Use a separate copy for each run and state which current is recorded. Keep both endpoint time and interval midpoint time from the CSV when present.

## Analysis

1. For the open secondary, calculate $$M = \text{emf}_\text{peak}/(2\pi f I_{1,\text{peak}})$$. Compare frequency scans and separations. Explain why the air core pair need not obey an ideal transformer's turns ratio.
2. For the sliding bar, infer $$B$$ from the emf speed slope. Compare $$\lvert F\rvert v$$, $$\lvert \text{emf}\, I\rvert$$ and $$I^2 R$$ during steady motion.

## Questions

1. Why does closing the secondary change the primary current?
2. Where does the resistor's heat energy come from in each setup?
3. From 20 Hz to 100 Hz, how did the secondary emf amplitude change while the primary current fell? Was that what you said in Before the lab 2? Use $$\mathcal E_2 = -M\,dI_1/dt$$ to explain how it depends on both the primary current and the frequency.

## Uncertainty

For courses that treat measurement uncertainty. This section is not counted in the 75 minutes; do it when your instructor assigns it.
{: .ws-assigned}

Use time spacing, peak bracketing and readout rounding to estimate amplitude uncertainty. Avoid fitting only one sampled peak. For $$M$$, include uncertainties in emf amplitude, primary current amplitude and frequency. The sliding bar emf and current are interval averages; the flux is an endpoint value. State your sampling interval and check whether reducing it changes the result.

## What to hand in

Prelab answer, settings and CSV, mutual inductance estimates, motional emf and energy calculations, and answers to the questions (and to Uncertainty, if assigned). Identify simulated data.
