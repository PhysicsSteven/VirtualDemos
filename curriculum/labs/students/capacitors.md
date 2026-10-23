# Capacitance, Dielectrics and Stored Energy
Student laboratory · Physics II

Textbook: OpenStax *University Physics*, Vol. 2, §§8.1–8.4. Access for free at https://openstax.org/details/books/university-physics-volume-2.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/capacitors.html)

## Goal

Find how plate geometry and a dielectric change capacitance, then compare charge, voltage and energy with the battery connected and disconnected.

## Background

Capacitance relates charge magnitude to potential difference (§8.1):

$$C=\frac{Q}{V},\qquad C_0=\frac{\epsilon_0A}{d}.$$

A dielectric filling the whole gap gives $$C = \kappa C_0$$ (§8.4). Stored energy can be written in three equivalent forms (§8.3):

$$U=\frac{Q^2}{2C}=\frac12 CV^2=\frac12 QV.$$

Disconnecting the battery holds $$Q$$ fixed. Leaving it connected holds $$V$$ fixed. The same increase in capacitance can therefore change stored energy in opposite directions.

## Before the lab

1. Predict $$C$$, $$Q$$ and $$U$$ when $$d$$ doubles with the battery connected.
2. Repeat the prediction when the charged capacitor is disconnected first.
3. For three capacitors, explain why charge is equal in series but voltage is equal in parallel (§8.2).

## Safety

Discharge real capacitors through a suitable resistor before handling them. Observe polarity and voltage ratings. Move plates or dielectric pieces only under the instructor's approved procedure.

## Procedure

**Geometry.** Use parallel plates with known area. With the battery connected, measure $$C$$, $$Q$$ and $$V$$ at five plate separations. Begin near $$A = 144\ \text{cm}^2$$, $$d = 1.00\ \text{cm}$$ and $$V = 100\ \text{V}$$ in the simulation; use safe assigned values on a real bench. Repeat after charging and disconnecting the battery. Calculate stored energy from your own measurements.

**Dielectric.** Begin with an empty gap. Insert a dielectric in five steps while holding the gap fixed. Repeat connected and isolated. Measure the inserted area fraction, capacitance and voltage. At full insertion, compare $$C/C_0$$ with $$\kappa$$.

**Combinations.** Measure the equivalent capacitance and component voltages for 10, 22 and 47 pF capacitors in series, parallel and the mixed arrangement. Draw each circuit and calculate its predicted equivalent capacitance before measuring.

**Using the virtual apparatus.** Compare connected and isolated parallel plates, beginning near an area of 144 cm², a separation of 1.00 cm and a battery voltage of 100 V. Begin each geometry scan from a clearly recorded starting state and measure capacitance, charge and voltage at five separations, with predictions hidden. Send each scan to the worksheet before changing the setup, so connected and isolated scans get their own copies of the Data table. For the dielectric scan, keep the gap fixed and measure five insertion fractions, again comparing connected and isolated plates. Analyze $$C$$ against $$1/d$$, $$C$$ against insertion fraction and $$V$$ against $$d$$ for the appropriate cases. Finally, compare series, parallel and mixed networks of 10, 22 and 47 pF capacitors. Record energy and work observations separately if they are not visible during blind measurement; reveal predictions only after completing your calculations.

## Data

| Run: connected/isolated/network | $$d$$ (m) | $$A$$ (m²) | Inserted fraction | $$C$$ (F) | $$Q$$ (C) | $$V$$ (V) | $$U$$ (J) |
|---|---|---|---|---|---|---|---|
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |

Use a separate copy for each scan. For networks, put the component label in the first column and leave geometry columns blank.

## Analysis

1. Plot $$C$$ against $$1/d$$ and infer $$\epsilon_0$$ from the slope and plate area. Treat this as a consistency test of the ideal model.
2. For the isolated scan, plot $$V$$ against $$d$$ and explain its slope using $$Q = CV$$.
3. Plot $$C$$ against inserted fraction. Infer $$\kappa$$ from the fully filled and empty values. Do not use $$C = \kappa C_0$$ if an air gap remains beside the slab thickness.
4. Compare stored energy in connected and isolated scans. Use the battery work $$V\Delta Q$$ to explain the energy change in the connected case.
5. Test the series/parallel formulas and sum the component energies. The mixed arrangement has $$C_1$$ in series with the parallel pair $$C_2$$ and $$C_3$$.

## Uncertainty

Include plate area and gap resolution in the capacitance comparison. A small gap error can dominate $$C$$. For real plates, fringing and misalignment can shift the slope. The virtual model is ideal; captured rounding and setting resolution are not random instrumental noise. State which values you measured and which you calculated.

## Questions

1. Why does disconnecting the battery change what remains constant?
2. Why can inserting a dielectric increase $$U$$ at fixed $$V$$ but decrease $$U$$ at fixed $$Q$$?
3. Why is the smallest series capacitor at the largest voltage?
4. Does the battery's work all become stored electric energy when capacitance changes?

## What to hand in

Prelab answers, settings and CSV, the geometry/dielectric graphs, inferred $$\epsilon_0$$ and $$\kappa$$ with uncertainty, network calculations, energy interpretation and answers to the questions. Identify simulated data.
