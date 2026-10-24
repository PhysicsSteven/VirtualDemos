# Reactance and Phase
Student laboratory · Physics II

Textbook: OpenStax *University Physics*, Vol. 2, §§15.1 and 15.2. Access for free at https://openstax.org/details/books/university-physics-volume-2.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/circuits.html#reactance)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups for this worksheet:** Resistor only, Capacitor only and Inductor only, in AC mode. The other AC setups belong to the AC Resonance and Power in an AC Circuit worksheets.

**Using the demo.**

- AC mode shows the steady state: the response to a sine wave source $$v = V_0\sin(2\pi f t)$$ after the switch on transient has died away. The parts and meters are ideal, and the circuit is solved exactly with complex impedances.
- Meters read rms values. The readout under Source and frequency gives the peak current $$I_0$$, the rms current, the impedance $$\lvert Z\rvert = V_0/I_0$$ the source sees and the phase $$\phi$$ of the source voltage ahead of its current (positive when the current lags).
- The oscilloscope shows the voltage and current traces with their phasors beside them, turning at the source frequency. Under Graphs, Reactance plots $$\lvert Z\rvert$$ and the reactance of each capacitor and inductor against frequency on logarithmic scales, and Power in time plots $$p = vi$$.
- Capture reading under Frequency response readings stores the frequency, the source's peak and rms voltage, the rms current, the phase, $$\lvert Z\rvert$$, the average power, the part values and the rms voltage across each part, as the panel shows them. Export to worksheet sends them to the Data table below; Clear starts a new series, which goes into a new copy of the table.
- Blind hides the reactance formulas, the model curves and the predictions; the meters and readouts still read.

</details>

## Goal

Measure how a resistor, a capacitor and an inductor each limit an alternating current, find the capacitance and inductance from how their reactances depend on frequency, and see which way each one shifts the current in time.

## Background

An AC source gives $$v = V_0\sin\omega t$$, with $$\omega = 2\pi f$$ (§15.1). Meters read rms values; for a sine wave

$$V_{\rm rms} = \frac{V_0}{\sqrt2},\qquad I_{\rm rms} = \frac{I_0}{\sqrt2}.$$

For a resistor alone, $$I_0 = V_0/R$$ and the current is in phase with the voltage. A capacitor alone carries a current only while its charge changes, $$i = C\,dv/dt$$, so the current peaks a quarter cycle before the voltage. An inductor alone has $$v = L\,di/dt$$, so its current peaks a quarter cycle after the voltage (§15.2). In each case the ratio of the voltage amplitude to the current amplitude is the reactance:

$$\begin{gathered} X_C = \frac{V_0}{I_0} = \frac{1}{\omega C} = \frac{1}{2\pi f C}, \\[4pt] X_L = \frac{V_0}{I_0} = \omega L = 2\pi f L. \end{gathered}$$

The ratio of the rms values is the same, $$X = V_{\rm rms}/I_{\rm rms}$$. A capacitor's reactance falls as the frequency rises and an inductor's grows.

## Before the lab

1. A source is set to $$V_0 = 10$$ V peak. What do its rms voltage and the voltmeter across it read?
2. Find $$X_C$$ for a 10 µF capacitor at 50 Hz and at 2 kHz, and $$X_L$$ for a 100 mH inductor at the same two frequencies.
3. The frequency doubles with the source voltage fixed. By what factor does the current through the capacitor change? Through the inductor? Through the resistor?

## Safety

No hazards in the virtual lab. On a real bench, keep the generator within the component ratings and turn it off before changing connections.

## Procedure

**Part 1, capacitor.** Open the Capacitor only setup with $$C = 10$$ µF and a 10 V peak source. Take readings at 50, 100, 200, 500, 1000 and 2000 Hz. Watch the traces and phasors as you go: which peaks first, the voltage or the current? Export the series to the worksheet, then clear the readings.

**Part 2, inductor.** Open the Inductor only setup with $$L = 100$$ mH and the same source. Take readings at the same six frequencies, export them (they go into a second copy of the table) and clear the readings.

**Part 3, resistor.** Open the Resistor only setup with $$R = 100\ \Omega$$ and the same source. Take readings at 50, 500 and 5000 Hz and export them into a third copy.

**Part 4, peak and rms.** In any of the three setups, read the peak current from the oscilloscope trace (or the $$I_0$$ readout) at one frequency and compare it with the ammeter.

## Data

Each part goes in its own copy of the table. In a single part circuit the voltage across the part is the source voltage, so $$V_{\rm rms}$$ here is both. Fill in the last two columns yourself.

| Reading and parts | f (Hz) | V_rms (V) | I_rms (A) | Phase (degrees) | 1/f (s) | X = V_rms/I_rms (Ω) |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |
| | | | | | | |

## Analysis

1. Part 1: plot $$X$$ against $$1/f$$. From the slope, find $$C$$ and compare it with the 10 µF set on the part. What should the intercept be?
2. Part 2: plot $$X$$ against $$f$$. From the slope, find $$L$$ and compare it with 100 mH.
3. Part 3: how does $$V_{\rm rms}/I_{\rm rms}$$ for the resistor depend on frequency?
4. Give the phase for each part. Which current leads the voltage and which lags it, and by how much? Explain each sign from $$i = C\,dv/dt$$ and $$v = L\,di/dt$$.
5. At what frequency would the 10 µF capacitor and the 100 mH inductor have the same reactance? Check it on the Reactance graph with Blind off.

## Uncertainty

The current has four significant figures and the phase is given to 0.1°. How large is the rounding of $$X$$ compared with the scatter of your points about the line? Use the standard errors of the slopes for $$C$$ and $$L$$.

## Questions

1. Why is a capacitor said to block direct current but pass high frequencies, and an inductor the opposite?
2. In Part 4, how did the peak current compare with the ammeter reading? Why do AC meters read rms values rather than peaks?
3. Pick Power in time with the capacitor or the inductor alone. What is the average power? Where does the energy go during each quarter cycle?
4. What capacitance has a reactance of 100 Ω at 60 Hz? Set it and check with one reading.

## What to hand in

Prelab answers, the three data tables with the two graphs, $$C$$ and $$L$$ with uncertainties, the phases, and answers to the questions. Identify simulated data.
