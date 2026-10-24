# AC Circuits and Resonance
Student laboratory · Physics II

Textbook: OpenStax *University Physics*, Vol. 2, §§15.1–15.5. Access for free at https://openstax.org/details/books/university-physics-volume-2.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/circuits.html#ac)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Using the demo.**

- Click a switch on the drawing to flip it while the circuit runs. The plots and the clock show the circuit's own time: fast changes play in slow motion, slow ones fast forward.
- Step forward pauses the circuit, moves it on by exactly $$\Delta t$$ and puts the time cursor at the new time.
- Work done by the sources goes into stored energy, $$\tfrac{1}{2}CV^2$$ in capacitors and $$\tfrac{1}{2}LI^2$$ in inductors, or turns into heat. The difference line checks the bookkeeping.
- The equivalent resistance is what the battery sees: the rest of the circuit with every other battery replaced by its internal resistance. Power drawn from the EMFs always equals the power turned into heat and light.
- Pick a part above the drawing, then drag from one dot to another, or tap two dots. A part dragged over more than one step gets wires to fill the gap; a wire that turns a corner goes across first, then down. Batteries, sources and meters have their + end where you start. With Select, drag a part or a dot to move it, click a switch to flip it, and drag the grip beside a selected part's label to change its value.

</details>

## Goal

Measure how current depends on frequency in a series RLC circuit. Use the resonance curve to find $$R$$, $$L$$ and $$C$$.

## Background

This activity follows Chapter 15. A resistor, inductor and capacitor affect alternating current differently (§15.2). The inductor's reactance grows with frequency, while the capacitor's falls:

$$\begin{gathered} X_L=2\pi fL, \\[4pt] X_C=\frac{1}{2\pi fC}. \end{gathered}$$

For the series circuit (§15.3),

$$\begin{gathered} |Z|=\sqrt{R^2+(X_L-X_C)^2}, \\[4pt] I_{\rm rms}=\frac{V_0}{\sqrt2\,|Z|}. \end{gathered}$$

Here $$V_0$$ is the source's peak voltage. Current lags the voltage when $$X_L$$ is larger than $$X_C$$, and leads when $$X_C$$ is larger. At resonance (§15.5) the reactances cancel:

$$f_0=\frac{1}{2\pi\sqrt{LC}}.$$

The current is largest at resonance. The two half power frequencies occur where the current is its peak value divided by $$\sqrt{2}$$. Their separation is the bandwidth:

$$\begin{gathered} \Delta f=\frac{R}{2\pi L}, \\[4pt] Q=\frac{f_0}{\Delta f}. \end{gathered}$$

## Before the lab

1. How do the impedances of a pure inductor and a pure capacitor change when frequency doubles?
2. At resonance, why can the inductor and capacitor each have a large voltage even when their combined voltage is zero?
3. Explain the difference between peak voltage and rms voltage.

## Safety

For a real circuit, turn off the supply before changing connections. Stay within the component and generator ratings. Check the voltage across the capacitor and inductor near resonance; it can exceed the source voltage.

## Procedure

**Single components.** Measure current and its phase relative to the source for a resistor alone, a capacitor alone and an inductor alone. Use three frequencies for each. Record the actual component values and source voltage.

**Series resonance.** Connect $$R = 22\ \Omega$$, $$L = 10\ \text{mH}$$ and $$C = 1\ \mu\text{F}$$ in series, or use the assigned values. Set the source amplitude to 10 V peak.

1. Measure current from about 0.5 to 3 kHz. Take at least twelve frequencies, with more readings near the peak.
2. Find the maximum current. Locate the half power current on both sides and take extra readings to bracket each crossing.
3. Record phase and average power at a frequency below resonance, near resonance and above resonance.
4. Repeat a shorter sweep with $$R = 10\ \Omega$$ and $$R = 100\ \Omega$$, keeping $$L$$, $$C$$ and source voltage fixed.
5. If recording equipment is available, compare how quickly the current settles after switching on at resonance for two resistance values.

**Using the virtual apparatus.** Turn on **Blind: hide predictions and answers**, choose **AC** and use **Resistor only**, **Capacitor only**, **Inductor only** and **Below resonance**. Click parts to edit values in **Selected**. With Blind off the frequency slider snaps to $$f_0$$ near resonance, so near the peak and the half power points select the source and type **Frequency f** instead. At each frequency press **Capture reading** under **Frequency response readings**. It stores $$f$$, the source $$V_0$$ and rms voltage, the rms current, the phase, $$\lvert Z\rvert$$, the average power, the part values and the rms voltage across each part, all as the panel displays them. The table on the page shows $$f$$, $$I_{\rm rms}$$ in mA, phase and power; the CSV has every column, in SI units. Check each new row against the readout, and delete any row you took by mistake. Rows from different circuits can share the table, because every row keeps the part values; you may still press **Clear** after exporting each sweep. Press **Export to worksheet** to send the table to this worksheet's Data table; the CSV that goes with it starts with comment lines that list the circuit and mark the data as simulated. Turn Blind off and use **Go to f₀** only after locating the peak yourself. **Export scope CSV** under **Oscilloscope** saves two periods of the steady state traces for the channels you added with **Scope V** and **Scope I**. To record startup, keep the same circuit, switch to **In time**, press **Reset**, add channels with **Scope V** and **Scope I** if they are not already listed, then use **Whole run** and **Export scope CSV**.

## Data

| Run: $$R$$, $$L$$, $$C$$ | $$f$$ (Hz) | Source $$V_0$$ (V peak) | $$I_{\rm rms}$$ (A) | Phase (degrees) | Power (W) |
|---|---|---|---|---|---|
| | | | | | |
| | | | | | |
| | | | | | |

Add rows for every frequency. Keep the three resistance sweeps separate. With the virtual apparatus, **Export to worksheet** fills this table, with the $$R$$, $$L$$ and $$C$$ of each row in its first column; a sweep taken after **Clear** goes into its own copy of the table. Power is the average power, P_avg_W in the CSV, and current is Irms_A in amperes.

## Analysis

1. Plot current against frequency. Identify $$f_0$$, the peak current and the half power frequencies.
2. Infer $$R$$ from the peak current, then $$L$$ from the bandwidth and $$C$$ from $$f_0$$.
3. Compare the measured phase with the sign of $$X_L - X_C$$. Use the scope or phasor diagram to check Kirchhoff's voltage rule.
4. Calculate $$Q$$ for each resistance. Explain how the width and height change.
5. Check the power relation below, at and above resonance:

   $$P=I_{\rm rms}^2R=V_{\rm rms}I_{\rm rms}\cos\phi.$$

6. If you recorded startup, compare the settling envelopes. For an underdamped circuit the natural transient decays on the scale $$2L/R$$.

## Uncertainty

Use the frequency intervals that bracket the peak and half power crossings. Include current rounding and the uncertainty in source voltage when inferring $$R$$. Carry the crossing uncertainty into bandwidth, then into $$L$$ and $$C$$. State the frequencies you typed near the peak. A narrow peak needs finer frequency steps than a broad one.

## Questions

1. Why is the current greatest at resonance?
2. Why do the positive rms magnitudes of the three component voltages not simply add to the source voltage?
3. Why does an ideal capacitor or inductor dissipate no average power?
4. Why does a sharp resonance usually take longer to settle after switching on?

## What to hand in

Prelab answers, the data table, current and phase graphs, inferred $$R$$, $$L$$ and $$C$$ with uncertainty, the $$Q$$ comparison, power calculations, any startup trace, and answers to the questions. Identify simulated data.
