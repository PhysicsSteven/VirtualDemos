# From RC Decay to RLC Oscillations
Student laboratory · Physics II

Textbook: OpenStax *University Physics*, Vol. 2, §§14.3–14.6; RC comparison: §10.5. Access for free at https://openstax.org/details/books/university-physics-volume-2.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/circuits.html#transients)

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

Observe how circuits store and lose energy. Measure an oscillation period, find a damping rate, and compare oscillating, critically damped and overdamped responses.

## Background

A capacitor stores electric energy (§8.3) and an inductor stores magnetic energy (§14.3):

$$\begin{gathered} U_C=\frac{Q^2}{2C}, \\[4pt] U_L=\frac12 LI^2. \end{gathered}$$

When a charged capacitor is connected to an inductor, energy moves back and forth between them. Without resistance the natural frequency is

$$\omega_0=\frac{1}{\sqrt{LC}}.$$

A resistor turns some of that energy into heat. The free series circuit (§14.6) obeys

$$L\frac{d^2Q}{dt^2}+R\frac{dQ}{dt}+\frac{Q}{C}=0.$$

For weak damping, the charge oscillates with a shrinking envelope. Its decay rate and damped frequency are

$$\begin{gathered} \alpha=\frac{R}{2L}, \\[4pt] \omega_d=\sqrt{\omega_0^2-\alpha^2}. \end{gathered}$$

Oscillations disappear at the critical resistance:

$$R_{\rm crit}=2\sqrt{\frac{L}{C}}.$$

## Before the lab

1. At what point in an ideal LC cycle is the magnetic energy largest?
2. Predict what increasing $$R$$ does to the oscillation period and amplitude.
3. Find the critical resistance for $$L = 0.100\ \text{H}$$ and $$C = 10\ \mu\text{F}$$.

## Safety

For a real circuit, turn off the supply before rewiring. Discharge capacitors through the specified resistor. Do not open an inductor circuit abruptly unless the apparatus is designed for the resulting voltage.

## Procedure

**LC oscillations.** Charge a capacitor to a known voltage, then connect it to the inductor. Record capacitor voltage and inductor current for several cycles.

1. Find the time between successive positive voltage maxima.
2. Read voltage and current near the beginning, quarter cycle, half cycle and full cycle.
3. Calculate electric and magnetic energy at those times.

**Damped oscillations.** Add a series resistor. For $$L = 0.100\ \text{H}$$ and $$C = 10\ \mu\text{F}$$, take separate runs at $$R = 20,\ 50\ \text{and}\ 100\ \Omega$$. Record at least three positive voltage maxima when they are large enough to read. Then compare resistances just below, at and just above your predicted critical value. Include one clearly overdamped run.

**RC and RL.** Record capacitor voltage during an RC discharge and inductor current during an RL decay. Start the time measurement at the switch event and note the initial voltage or current.

**Using the virtual apparatus.** Work in time with predictions and answers hidden. The LC oscillation circuit starts with its capacitor charged to 10 V; use L1 = 100 mH and C1 = 10 µF. Use the RLC damping circuit for the resistance study, changing R2 and resetting before each run. Put the capacitor voltage and the inductor current on the scope, read them at the times you choose by stepping $$\Delta t$$ or placing the time cursor, and send the readings and energies to the worksheet. For the full visible trace, save the whole run as a CSV, and record the energy since $$t = 0$$ readings separately from it. The flip mid way circuit gives an RC discharge and the RL rise and decay circuit an RL decay. Current directions follow the drawn terminals of each part; check them before you compare signs.

## Data

| Run and $$R$$ (Ω) | $$t$$ (s) | $$V_C$$ (V) | $$I_L$$ (A) | $$U_C$$ (J) | $$U_L$$ (J) | Heat (J) | Log ratio |
|---|---|---|---|---|---|---|---|
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |

Use a separate copy for each run. Write $$L$$, $$C$$, initial voltage and switch time above it. For RC or RL runs the columns a circuit does not have stay blank. For the RC and RL decays, fill in the last column yourself after the switch: $$\ln(V_C/V_{C0})$$ for the RC discharge and $$\ln(I_L/I_{L0})$$ for the RL decay, where $$V_{C0}$$ and $$I_{L0}$$ are the values at the switch. Each copy's graph fits a line to every row that has both of its columns filled.

## Analysis

1. Find the LC period and infer $$L$$ from the known $$C$$. Check whether $$U_C + U_L$$ stays constant.
2. For each oscillating RLC run, find the damped period $$T_d$$. Use two successive positive maxima to calculate

   $$\begin{gathered} \delta=\ln\!\left(\frac{\lvert V_n\rvert}{\lvert V_{n+1}\rvert}\right), \\[4pt] \alpha=\frac{\delta}{T_d}, \\[4pt] R_{\rm fit}=2L\alpha. \end{gathered}$$

3. Compare the measured period and damping with the predicted values. Check whether stored energy plus heat equals the initial energy.
4. Compare runs at 0.95, 0.99, 1.00, 1.01 and 1.05 times $$R_{\rm crit}$$. Explain why a barely visible or absent sign change is not enough by itself to identify critical damping.
5. Plot the log ratio against $$t$$ for the RC and RL decays and find their time constants from the slopes. Compare them with $$RC$$ and $$L/R$$.

## Uncertainty

Bracket peak times using nearby samples and estimate how precisely you can read each peak height. Small late peaks give a poor damping estimate, so state which peaks you used and why. Check the actual CSV timestamps rather than the animation's speed. Compare fits over more than one interval to see how peak choice changes the answer. Include uncertainty in the component values when interpreting an inferred $$L$$ or $$R$$.

## Questions

1. Why does a resistor reduce the energy even though charge still oscillates?
2. Why is energy lost faster than the charge envelope shrinks?
3. Why does an ideal RL loop with zero resistance keep a constant current rather than oscillate?
4. Which response returns fastest without overshooting for an initially charged capacitor with zero current?

## What to hand in

Prelab answers, settings and raw traces, the LC period and energy check, damping calculations, the critical damping comparison, RC/RL time constants with uncertainty, and answers to the questions. Identify simulated data.
