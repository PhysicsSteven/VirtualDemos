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

$$\begin{gathered} \lvert Z\rvert=\sqrt{R^2+(X_L-X_C)^2}, \\[4pt] I_{\rm rms}=\frac{V_0}{\sqrt2\,\lvert Z\rvert}. \end{gathered}$$

Here $$V_0$$ is the source's peak voltage. Current lags the voltage when $$X_L$$ is larger than $$X_C$$, and leads when $$X_C$$ is larger. At resonance (§15.5) the reactances cancel:

$$f_0=\frac{1}{2\pi\sqrt{LC}}.$$

The current is largest at resonance. The two half power frequencies occur where the current is its peak value divided by $$\sqrt{2}$$. Their separation is the bandwidth:

$$\begin{gathered} \Delta f=\frac{R}{2\pi L}, \\[4pt] Q=\frac{f_0}{\Delta f}. \end{gathered}$$

## Before the lab

1. How do the impedances of a pure inductor and a pure capacitor change when frequency doubles?
2. At resonance, why can the inductor and capacitor each have a large voltage even when their combined voltage is zero?
3. Explain the difference between peak voltage and rms voltage.
4. The same series circuit ($$L = 10\ \text{mH}$$, $$C = 1\ \mu\text{F}$$) is swept first with $$R = 22\ \Omega$$ and then with $$R = 100\ \Omega$$. Where does the current peak sit with the larger resistance: at a lower frequency, a higher one, or the same one? Explain your choice.

## Safety

For a real circuit, turn off the supply before changing connections. Stay within the component and generator ratings. Check the voltage across the capacitor and inductor near resonance; it can exceed the source voltage.

## Procedure

**Series resonance.** Connect $$R = 22\ \Omega$$, $$L = 10\ \text{mH}$$ and $$C = 1\ \mu\text{F}$$ in series, or use the assigned values: the Below resonance setup has exactly these parts. Set the source amplitude to 10 V peak (select the AC source; Amplitude V₀ is under Selected).

1. Measure current from about 0.5 to 3 kHz. Take at least twelve frequencies, with more readings near the peak.
2. Find the maximum current. Locate the half power current on both sides and take extra readings to bracket each crossing.
3. Record phase and average power at a frequency below resonance, near resonance and above resonance.
4. Repeat a shorter sweep (about six frequencies, including the peak and both half power crossings) with $$R = 100\ \Omega$$ (select R1 and set Resistance R), keeping $$L$$, $$C$$ and source voltage fixed. Which frequency gives the largest $$I_{\rm rms}$$ this time (the phase reads about 0 there)? Write it, with the peak frequency of your 22 Ω sweep, in your answer to Question 1.

**Using the virtual apparatus.** Work in the AC analysis mode with predictions and answers hidden (tick Blind: hide predictions and answers under Lab), starting from the Below resonance setup. To set a frequency, select the AC source and type it in the Frequency f box under Selected; the Frequency f slider under Source and frequency is logarithmic and coarse, so type each frequency near the peak and the half power points rather than dragging to it. Press Record reading (under Frequency response readings) at each frequency; it stores $$f$$, the source $$V_0$$ and rms voltage, the rms current, the phase, $$\lvert Z\rvert$$, the average power, the part values and the rms voltage across each part, all as the panel shows them. The table on the page shows $$f$$, $$I_{\rm rms}$$ in mA, phase and power; the CSV has every column, in SI units. Check each new row against the readout and delete any row taken by mistake. Rows from different circuits can share the table, since every row keeps its part values; a sweep recorded after clearing goes into its own copy of the Data table. Press Export to worksheet to send the table here; the CSV that goes with it starts with comment lines that list the circuit and mark the data as simulated. Use Go to $$f_0$$ only after you have found the peak yourself: Blind hides it and the Q readout, so untick Blind to use it, and tick it again before the next sweep. To compare the steady state traces, put the voltage and current on the scope (select a part, then Scope V or Scope I) and press Export scope CSV.

## Data

| Run: $$R$$, $$L$$, $$C$$ | $$f$$ (Hz) | Source $$V_0$$ (V peak) | $$I_{\rm rms}$$ (A) | Phase (degrees) | Power (W) |
|---|---|---|---|---|---|
| | | | | | |
| | | | | | |
| | | | | | |

Add rows for every frequency. Keep the two resistance sweeps separate. With the virtual apparatus, **Export to worksheet** fills this table, with the $$R$$, $$L$$ and $$C$$ of each row in its first column; a sweep taken after **Clear** goes into its own copy of the table. Power is the average power, P_avg_W in the CSV, and current is Irms_A in amperes.

## Analysis

1. Plot $$I_{\rm rms}$$ (vertical) against $$f$$ (horizontal) for the 22 Ω sweep. Identify $$f_0$$, the peak current and the half power frequencies.
2. Infer $$R$$ from the peak current, then $$L$$ from the bandwidth and $$C$$ from $$f_0$$.
3. Compare the measured phase with the sign of $$X_L - X_C$$. Use the scope or phasor diagram to check Kirchhoff's voltage rule.
4. Calculate $$Q$$ for the 22 Ω and 100 Ω sweeps. Explain how the width and height change.
5. Check the power relation below, at and above resonance:

   $$P=I_{\rm rms}^2R=V_{\rm rms}I_{\rm rms}\cos\phi.$$

## Questions

1. Why is the current greatest at resonance? Answer with $$\lvert Z\rvert$$. Then look at where the peak sat in your 22 Ω and 100 Ω sweeps, and at your answer to Before the lab 4: how does changing $$R$$ change the peak's height, its width and its place, and why?
2. Why do the positive rms magnitudes of the three component voltages not simply add to the source voltage?
3. Why does an ideal capacitor or inductor dissipate no average power?

## Uncertainty

For courses that treat measurement uncertainty. This section is not counted in the 75 minutes; do it when your instructor assigns it.
{: .ws-assigned}

Use the frequency intervals that bracket the peak and half power crossings. Include current rounding and the uncertainty in source voltage when inferring $$R$$. Carry the crossing uncertainty into bandwidth, then into $$L$$ and $$C$$. State the frequencies you typed near the peak. A narrow peak needs finer frequency steps than a broad one.

## With calculus

For courses that use calculus. This section is not counted in the 75 minutes; do it when your instructor assigns it.

1. Driven by $$v = V_0\sin\omega t$$, the loop rule is $$L\,\frac{di}{dt} + Ri + \frac{q}{C} = V_0\sin\omega t$$. Try the steady current $$i = I_0\sin(\omega t - \phi)$$, so $$q = -(I_0/\omega)\cos(\omega t - \phi)$$. Substitute, write $$\sin\omega t = \sin\big((\omega t - \phi) + \phi\big)$$, and match the $$\sin(\omega t - \phi)$$ and $$\cos(\omega t - \phi)$$ terms to show $$I_0 = V_0/\sqrt{R^2 + (\omega L - 1/\omega C)^2}$$ and $$\tan\phi = (\omega L - 1/\omega C)/R$$.
2. At the half power points $$(\omega L - 1/\omega C)^2 = R^2$$. Solve the two quadratics for the positive $$\omega$$ and show that the two half power angular frequencies differ by exactly $$R/L$$, so $$\Delta f = R/(2\pi L)$$, and that their product is $$1/LC$$, so $$f_0$$ is their geometric mean. Check both against the half power crossings you found for the 22 Ω sweep.
3. Differentiate $$\tan\phi = (\omega L - 1/\omega C)/R$$ and show that at resonance, where $$\phi = 0$$, $$d\phi/df = 4\pi L/R$$ (in radians per hertz). Estimate $$d\phi/df$$ from your 22 Ω readings just below and just above $$f_0$$ (the difference of the phases over the difference of the frequencies) and compare, in degrees per hertz.

## What to hand in

Prelab answers, the data table, current and phase graphs, inferred $$R$$, $$L$$ and $$C$$, the $$Q$$ comparison, power calculations, and answers to the questions (and to Uncertainty and With calculus, if assigned). Identify simulated data.
