# From RC Decay to RLC Oscillations
Student laboratory · Physics II

[Open the virtual Circuits bench](https://physicssteven.github.io/VirtualDemos/demos/circuits.html#transients)

## Goal

Observe how circuits store and lose energy. Measure an oscillation period, find a damping rate, and compare oscillating, critically damped and overdamped responses.

## Background

A capacitor stores electric energy and an inductor stores magnetic energy:

$$U_C=\frac{Q^2}{2C},\qquad U_L=\frac12 LI^2.$$

When a charged capacitor is connected to an inductor, energy moves back and forth between them. Without resistance the natural frequency is

$$\omega_0=\frac{1}{\sqrt{LC}}.$$

A resistor turns some of that energy into heat. The free series circuit obeys

$$L\frac{d^2Q}{dt^2}+R\frac{dQ}{dt}+\frac{Q}{C}=0.$$

For weak damping, the charge oscillates with a shrinking envelope. Its decay rate and damped frequency are

$$\alpha=\frac{R}{2L},\qquad \omega_d=\sqrt{\omega_0^2-\alpha^2}.$$

Oscillations disappear at the critical resistance:

$$R_{\rm crit}=2\sqrt{\frac{L}{C}}.$$

## Before the lab

1. At what point in an ideal LC cycle is the magnetic energy largest?
2. Predict what increasing R does to the oscillation period and amplitude.
3. Find the critical resistance for L = 0.100 H and C = 10 µF.

## Safety

For a real circuit, turn off the supply before rewiring. Discharge capacitors through the specified resistor. Do not open an inductor circuit abruptly unless the apparatus is designed for the resulting voltage.

## Procedure

**LC oscillations.** Charge a capacitor to a known voltage, then connect it to the inductor. Record capacitor voltage and inductor current for several cycles.

1. Find the time between successive positive voltage maxima.
2. Read voltage and current near the beginning, quarter cycle, half cycle and full cycle.
3. Calculate electric and magnetic energy at those times.

**Damped oscillations.** Add a series resistor. For L = 0.100 H and C = 10 µF, take separate runs at R = 20, 50 and 100 Ω. Record at least three positive voltage maxima when they are large enough to read. Then compare resistances just below, at and just above your predicted critical value. Include one clearly overdamped run.

**RC and RL.** Record capacitor voltage during an RC discharge and inductor current during an RL decay. Start the time measurement at the switch event and note the initial voltage or current.

**Using the virtual apparatus.** Select **In time** and **LC oscillation**. Its capacitor starts charged to 10 V; use L1 = 100 mH and C1 = 10 µF. Use **RLC damping** for the resistance study and edit R2 in **Selected**, then **Reset** before each run. Add channels with **Scope V** and **Scope I**, use **Whole run**, and **Export scope CSV**. **Flip mid way** provides RC discharge and **RL rise and decay** provides RL decay. Record settings and the **Energy since t = 0** readings separately from CSV. The current directions follow the drawn component terminals; check them before comparing signs.

## Data

| Run and R (Ω) | t (s) | V_C (V) | I_L (A) | U_C (J) | U_L (J) | Heat (J) |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |
| | | | | | | |

Use a separate copy for each run. Write L, C, initial voltage and switch time above it. For RC or RL, replace unused columns with the quantity you measure.

## Analysis

1. Find the LC period and infer L from the known C. Check whether U_C + U_L stays constant.
2. For each oscillating RLC run, find the damped period Td. Use two successive positive maxima to calculate

$$\delta=\ln\!\left(\frac{|V_n|}{|V_{n+1}|}\right),\qquad \alpha=\frac{\delta}{T_d},\qquad R_{\rm fit}=2L\alpha.$$

3. Compare the measured period and damping with the predicted values. Check whether stored energy plus heat equals the initial energy.
4. Compare runs at 0.95, 0.99, 1.00, 1.01 and 1.05 times Rcrit. Explain why a barely visible or absent sign change is not enough by itself to identify critical damping.
5. Fit the RC and RL decays to find their time constants. Compare them with RC and L/R.

## Uncertainty

Bracket peak times using nearby samples and estimate how precisely you can read each peak height. Small late peaks give a poor damping estimate, so state which peaks you used and why. Check the actual CSV timestamps rather than the animation's speed. Compare fits over more than one interval to see how peak choice changes the answer. Include uncertainty in the component values when interpreting an inferred L or R.

## Questions

1. Why does a resistor reduce the energy even though charge still oscillates?
2. Why is energy lost faster than the charge envelope shrinks?
3. Why does an ideal RL loop with zero resistance keep a constant current rather than oscillate?
4. Which response returns fastest without overshooting for an initially charged capacitor with zero current?

## What to hand in

Prelab answers, settings and raw traces, the LC period and energy check, damping calculations, the critical damping comparison, RC/RL time constants with uncertainty, and answers to the questions. Identify simulated data.
