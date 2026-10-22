# Charging and Discharging a Capacitor
Student laboratory · Physics II

Textbook: OpenStax *University Physics*, Vol. 2, §§10.3, 10.5 and 8.3. Access for free at https://openstax.org/details/books/university-physics-volume-2.

[Open the virtual Circuits bench](https://physicssteven.github.io/VirtualDemos/demos/circuits.html#rc)

## Goal

Measure the time constant of an RC circuit, use it to find the capacitance, and follow the energy as the capacitor charges and discharges.

## Background

A resistor limits how quickly charge reaches a capacitor. Kirchhoff's loop rule (§10.3) gives

$$\varepsilon=IR+\frac{Q}{C},\qquad I=\frac{dQ}{dt}.$$

For an initially uncharged capacitor connected to a battery,

$$V_C=\varepsilon\left(1-e^{-t/RC}\right),\qquad I=\frac{\varepsilon}{R}e^{-t/RC}.$$

The time constant is τ = RC (§10.5). After one time constant, the capacitor has reached about 63% of its final voltage. During discharge,

$$V_C=V_{C0}e^{-t/RC}.$$

Stored energy follows §8.3. The battery does work on the charges. Some becomes electric energy in the capacitor, and the rest heats the resistor:

$$W=U_C+H,\qquad U_C=\frac12 CV_C^2.$$

## Before the lab

1. If R doubles while C stays fixed, what happens to the time constant?
2. Why can the capacitor voltage not jump when the switch changes position?
3. Derive the straight line relation obtained by plotting ln(1 − V_C/ε) against time during charging.

## Safety

For a real circuit, turn off the supply before changing connections. Check the capacitor's polarity and voltage rating. Discharge it through the specified resistor before handling it.

## Procedure

**Charging.** Assemble a series battery, resistor and capacitor circuit. Use ε = 10 V and C = 100 µF, or the values assigned for your apparatus.

1. Start with the capacitor discharged. Connect the battery and record capacitor voltage and current as a function of time.
2. Take at least six readings from the beginning until the voltage is close to its final value.
3. Repeat for resistances near 4.7, 6.8, 10, 15 and 22 kΩ. Use the actual resistor values in the calculations.

**Discharging.** Charge the capacitor, record its voltage, then switch the battery out and let it discharge through a resistor. Record voltage and current from the time of the switch. Repeat with a different discharge resistance if your circuit allows it.

**Energy.** For one charging run, record source work, stored capacitor energy and resistor heat at four times. Compare their sum. Then compare a slow charge with the fast discharge of a camera flash circuit.

**Using the virtual apparatus.** Select **In time** and **RC charging**. Click a component and enter its value in **Selected**. Turn on **Blind: hide predictions and answers**. Use **Reset** before each charging run and **Pause** when reading values. Select **Step Δt** and **Step forward** for controlled sampling, or click the scope to place the **Time cursor**. Press **Capture reading** under **Readings** at each chosen time and **Export CSV** to save the cursor readings, energies and part values. Add channels with **Scope V** and **Scope I**. Select **Whole run**, then **Export scope CSV**; record settings and the **Energy since t = 0** readings separately. **Flip mid way** shows switching during charging, and **Camera flash** provides separate charging and discharge resistances. The CSV contains the visible scope window, so check that it includes the part of the run you need.

## Data

| t (s) | V_C (V) | I (A) | W (J) | U_C (J) | H (J) |
|---|---|---|---|---|---|
| | | | | | |
| | | | | | |
| | | | | | |

Use a separate copy for each run. Write ε, R, C and the switch time above it. Fill the energy columns for the energy run.

## Analysis

1. Find τ from the time when V_C reaches 63.2% of ε.
2. Plot ln(1 − V_C/ε) against t. Find τ from the slope. Leave out points so close to the final voltage that rounding makes the logarithm unusable.
3. Plot τ against R. Find C from the slope and compare it with the component value.
4. For discharge, plot ln(V_C/V_C0) against time since switching. Compare its time constant with charging.
5. Check W − U_C − H at each energy reading. If using CSV, also estimate heat from the area under I²R against time.
6. In the flash run, calculate the stored energy and initial discharge power from the voltage just before the switch. Do not assume the capacitor has reached the full battery voltage.

## Uncertainty

Use the spacing between nearby time samples to estimate uncertainty in the 63.2% crossing. Compare that estimate with the uncertainty of the log fit slope. Include voltage rounding and resistor uncertainty where available. Use actual timestamps from the exported data. Do not add random scatter to a deterministic trace; describe the resolution with which you read it.

## Questions

1. Why can the current change suddenly while the capacitor voltage stays continuous?
2. Why does a larger resistor change the charging time but not the final stored energy?
3. Where does the capacitor's energy go during discharge?
4. Why does the same stored energy give much higher power in a fast discharge?

## What to hand in

Prelab answers, settings and data, CSV if available, the charging and discharge fits, the graph of τ against R, capacitance with uncertainty, the energy check, and answers to the questions. Identify simulated data.
