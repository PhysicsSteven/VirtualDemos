# RLC Oscillations and Damping
Student laboratory · Physics II

Textbook: OpenStax *University Physics*, Vol. 2, §§14.3–14.6. Access for free at https://openstax.org/details/books/university-physics-volume-2.

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
4. The capacitor starts at 10 V with no current. After 10 ms, which leaves $$V_C$$ closer to zero: $$R$$ at your critical value from question 3, or $$R = 1\ \text{k}\Omega$$, which damps harder? Or are they about the same? Give a reason.

## Safety

For a real circuit, turn off the supply before rewiring. Discharge capacitors through the specified resistor. Do not open an inductor circuit abruptly unless the apparatus is designed for the resulting voltage.

## Procedure

**LC oscillations.** Press the LC oscillation setup: C1 starts charged to 10 V and is connected to the inductor L1 at $$t = 0$$. Record capacitor voltage and inductor current for several cycles.

1. Find the time between successive positive voltage maxima.
2. Read voltage and current near the beginning, quarter cycle, half cycle and full cycle.
3. Calculate electric and magnetic energy at those times.

**Damped oscillations.** Press the RLC damping setup, which puts R2 in series ($$L = 0.100\ \text{H}$$, $$C = 10\ \mu\text{F}$$). Click R2, type its value in the Resistance R box, and press Reset before each run. Take separate runs at $$R = 20\ \text{and}\ 100\ \Omega$$, and record at least three positive voltage maxima in each when they are large enough to read. Then take runs at 0.95, 1.00 and 1.05 times your predicted critical value from Before the lab 3 (these are the runs Analysis 4 uses), and one clearly overdamped run at 1 kΩ. In the 1.00 $$R_{\rm crit}$$ run and the 1 kΩ run, make sure you have a reading at t = 10 ms (click the scope at 10 ms and press Record reading); Question 3 compares them.

**Using the virtual apparatus.** Work in the In time mode with Blind: hide predictions and answers ticked (in the Lab fold). The LC oscillation circuit starts with its capacitor charged to 10 V; keep L1 = 100 mH and C1 = 10 µF. Use the RLC damping circuit for the resistance study, changing R2 and resetting before each run. Put the capacitor voltage and the inductor current on the scope (select a part, then Scope V or Scope I). Read them at the times you choose, either by picking a Step Δt and pressing Step forward or by clicking the scope to place the time cursor (the arrow keys then move it), and press Record reading at each. After each run press Export to worksheet, then Clear; each reading carries the energies. For the full visible trace, press Export scope CSV, and record the energy since $$t = 0$$ readings separately from it. Current directions follow the drawn terminals of each part; check them before you compare signs.

## Data

| Run and $$R$$ (Ω) | $$t$$ (s) | $$V_C$$ (V) | $$I_L$$ (A) | $$U_C$$ (J) | $$U_L$$ (J) | Heat (J) |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |
| | | | | | | |

Use a separate copy for each run. Write $$L$$, $$C$$, initial voltage and switch time above it.

## Analysis

1. Find the LC period and infer $$L$$ from the known $$C$$. Check whether $$U_C + U_L$$ stays constant.
2. For each oscillating RLC run, find the damped period $$T_d$$. Use two successive positive maxima to calculate

   $$\begin{gathered} \delta=\ln\!\left(\frac{\lvert V_n\rvert}{\lvert V_{n+1}\rvert}\right), \\[4pt] \alpha=\frac{\delta}{T_d}, \\[4pt] R_{\rm fit}=2L\alpha. \end{gathered}$$

3. Compare the measured period and damping with the predicted values.
4. Compare runs at 0.95, 1.00 and 1.05 times $$R_{\rm crit}$$. Explain why a barely visible or absent sign change is not enough by itself to identify critical damping.

## Uncertainty

Bracket peak times using nearby samples and estimate how precisely you can read each peak height. Small late peaks give a poor damping estimate, so state which peaks you used and why. Check the actual CSV timestamps rather than the animation's speed. Compare fits over more than one interval to see how peak choice changes the answer. Include uncertainty in the component values when interpreting an inferred $$L$$ or $$R$$.

## Questions

1. Why does a resistor reduce the energy even though charge still oscillates?
2. Why is energy lost faster than the charge envelope shrinks?
3. Which response returns fastest without overshooting for an initially charged capacitor with zero current? Check your answer to Before the lab 4 against $$V_C$$ at 10 ms in your 1.00 $$R_{\rm crit}$$ and 1 kΩ runs. What does a large resistor do to the current that drains the capacitor?

## With calculus

For courses that use calculus. This section is not counted in the 75 minutes; do it when your instructor assigns it.

1. Try a solution $$Q = Q_0e^{st}$$ in the circuit equation of the Background. Show that $$s$$ must satisfy $$Ls^2 + Rs + 1/C = 0$$, and solve for $$s$$. Show that for $$R < R_{\rm crit}$$ the two roots are $$s = -\alpha \pm i\omega_d$$, with $$\alpha$$ and $$\omega_d$$ as in the Background, and that the roots become equal at $$R = R_{\rm crit}$$.
2. For $$R > R_{\rm crit}$$ both roots are real and negative, and after the first few milliseconds only the slower one is left. Find both roots for $$R = 1\ \text{k}\Omega$$, and show that the slower one is close to $$-1/RC$$ when $$R \gg R_{\rm crit}$$. In your 1 kΩ run, take readings at 5, 15 and 20 ms as well as 10 ms if you do not have them. From $$V_C$$ at 10 and 20 ms, find the decay rate $$\ln\big(V_C(10\ \text{ms})/V_C(20\ \text{ms})\big)/(10\ \text{ms})$$ and compare it with the slower root.
3. Multiply the circuit equation by $$I = dQ/dt$$ and show that $$\frac{d}{dt}\left(\frac{Q^2}{2C}+\frac12 LI^2\right) = -I^2R$$. In your 1 kΩ run, estimate the heating rate at 10 ms from the Heat readings at 5 and 15 ms (their difference over 10 ms), and compare it with $$I_L^2R$$ from the 10 ms reading. Why does the estimate come out high?

## What to hand in

Prelab answers, settings and raw traces, the LC period and energy check, damping calculations, the critical damping comparison, and answers to the questions (and to With calculus, if assigned). Identify simulated data.
