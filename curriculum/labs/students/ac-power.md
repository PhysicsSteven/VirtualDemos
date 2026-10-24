# Power in an AC Circuit
Student laboratory · Physics II

Textbook: OpenStax *University Physics*, Vol. 2, §§15.1 and 15.4. Access for free at https://openstax.org/details/books/university-physics-volume-2.

[Open the virtual Circuits bench](https://physicssteven.github.io/VirtualDemos/demos/circuits.html#power)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups for this worksheet:** Wall outlet and Power factor, in the AC power row of AC mode.

**Using the demo.**

- Both setups run on a North American outlet: 120 V rms at 60 Hz, so the source's peak voltage is $$V_0 = 120\sqrt2 = 169.7$$ V. The parts and meters are ideal, and the circuit is solved exactly in its steady state with complex impedances.
- In Wall outlet the bulb is a 100 W bulb modelled as its hot resistance, 144 Ω. A real filament's resistance is far lower when it is cold; that is left out.
- In Power factor the load is a 10 Ω resistor in series with a 50 mH inductor, a simple model of a motor or other coil. Ammeter A1 reads the current from the source and A2 the current into the load. Closing switch S1 connects capacitor C1 across the load.
- Meters read rms values. The readout under Source and frequency gives the phase $$\phi$$ of the source voltage ahead of its current (positive when the current lags), the power factor and the average power the source delivers.
- Under Graphs, Power in time plots $$p = vi$$ into the selected part over two periods, with its average; with nothing selected it plots the power out of the source. Power, in the same place, plots the average power against frequency.
- Capture reading stores the frequency, the source's peak and rms voltage, the rms source current, the phase, $$\lvert Z\rvert$$, the average power, every part value and the switch position, as the panel shows them. Export to worksheet sends them to the Data table below; Clear starts a new series, which goes into a new copy of the table.
- Blind hides the predictions in the setup notes; the meters and readouts still read.

</details>

## Goal

Find how much power an AC source delivers on average, see why a coil load draws more current than its power needs, and correct its power factor with a capacitor.

## Background

The power into a part at each instant is $$p = vi$$. For a source $$v = V_0\sin\omega t$$ driving a current $$i = I_0\sin(\omega t - \phi)$$, the average over a cycle is (§15.4)

$$P_{\rm ave} = \tfrac12 V_0 I_0\cos\phi = V_{\rm rms}I_{\rm rms}\cos\phi.$$

The factor $$\cos\phi$$ is the power factor. A resistor has $$\phi = 0$$, so $$P_{\rm ave} = V_{\rm rms}I_{\rm rms} = I_{\rm rms}^2R$$. An ideal capacitor or inductor has $$\phi = \pm 90°$$ and takes no power on average: it stores energy for a quarter cycle and returns it in the next. For a load with resistance $$R$$ and reactance $$X$$ in series,

$$\cos\phi = \frac{R}{\sqrt{R^2 + X^2}},\qquad P_{\rm ave} = I_{\rm rms}^2R.$$

The current splits into a part in phase with the voltage, $$I_{\rm rms}\cos\phi = P_{\rm ave}/V_{\rm rms}$$, which carries the power, and a part a quarter cycle behind it, $$I_{\rm rms}\sin\phi$$, which carries none but still flows in the wires. A capacitor across the load draws a current $$\omega C V_{\rm rms}$$ a quarter cycle ahead of the voltage, which cancels some of the lagging part (beyond the book: this is how utilities and factories correct the power factor).

## Before the lab

1. An outlet supplies 120 V rms. What is its peak voltage? A bulb takes 100 W from it: what are its rms current and its resistance?
2. For the load of 10 Ω in series with 50 mH at 60 Hz, find $$X_L$$, $$\lvert Z\rvert$$, $$\phi$$, the power factor, $$I_{\rm rms}$$ and $$P_{\rm ave}$$.
3. The load takes the same power whether or not a capacitor sits across it. Why would the utility still want the capacitor there?

## Safety

The virtual outlet is harmless. A real outlet can kill: never work on mains wiring, and treat the 170 V peak, not the 120 V rms, as the voltage insulation must stand.

## Procedure

**Part 1, wall outlet.** Open the Wall outlet setup and take a reading. Pick Power in time and read the largest and smallest values of $$p$$ for the bulb and how many times per second $$p$$ repeats. Change the bulb to 240 Ω (a 60 W bulb) and take a second reading. Export both to the worksheet, then clear the readings.

**Part 2, power factor.** Open the Power factor setup. Take a reading with S1 open. Close S1 and take readings with C1 at 22, 47, 68, 100, 150 and 220 µF. Note A2 each time. Export the series (it goes into a second copy of the table).

**Part 3, power in time.** In the Power factor setup with S1 open, look at Power in time for R1, for L1 and for the source in turn. Then close S1 and look at C1.

## Data

Part 1 goes in the first copy of the table and Part 2 in the second. Fill in the last two columns yourself for Part 2: the capacitance switched in (0 with S1 open), and $$I_{\rm rms}\sin\phi$$ from the current and phase.

| Reading and parts | f (Hz) | V_rms (V) | I_rms (A) | Phase (degrees) | P_ave (W) | C switched in (µF) | I_rms sin φ (A) |
|---|---|---|---|---|---|---|---|
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |

## Analysis

1. Part 1: compare $$P_{\rm ave}$$ with $$V_{\rm rms}I_{\rm rms}$$ and with $$V_{\rm rms}^2/R$$ for both bulbs. From Power in time, what are the largest value of $$p$$ and its frequency? Explain both from $$p = V_0I_0\sin^2\omega t$$.
2. Part 2 with S1 open: compute $$V_{\rm rms}I_{\rm rms}\cos\phi$$ and $$I_{\rm rms}^2R$$ and compare them with $$P_{\rm ave}$$. Compare the measured phase and power factor with your prelab answer.
3. Plot $$I_{\rm rms}\sin\phi$$ against the capacitance switched in. Find the slope and compare it with $$-2\pi f V_{\rm rms}$$.
4. From the line, find the capacitance that makes $$\sin\phi = 0$$, so the power factor is 1. Compare it with $$X_L/[\omega(R^2 + X_L^2)]$$.
5. How did $$P_{\rm ave}$$ change as the capacitance changed, and how did A2 change? Explain both.

## Uncertainty

The phase is rounded to 0.1° and the current to four significant figures. Estimate the largest error these give in $$I_{\rm rms}\sin\phi$$, and compare it with the scatter about your line. Use the standard errors of the fit for the slope and for the capacitance of part 4.

## Questions

1. In Part 3, describe $$p(t)$$ for R1, L1 and C1. Which takes energy all the time, and which take it and give it back? Give the average for each.
2. With S1 open, the power out of the source is negative for part of each cycle. What is happening to the energy then?
3. Suppose the wires from the source to the load have a resistance of 0.50 Ω in all. Ignoring the small change they would make to the current, find the power lost in them with S1 open and with C1 = 100 µF switched in.
4. What happens to the phase and the source current when C1 is larger than the value from Analysis 4? Is that better or worse than leaving S1 open?

## What to hand in

Prelab answers, both data tables and the graph, the slope and the capacitance for unit power factor with uncertainties, and answers to the questions. Identify simulated data.
