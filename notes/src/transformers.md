---
title: Transformers
level: Intro physics (mutual inductance, AC, power transmission)
time: 15 to 30 minutes
---
## What students should come away with

- A transformer works only on changing current: the changing flux in the shared iron core makes the same voltage per turn in both coils, so V_S/V_P = N_S/N_P.
- Power in equals power out in an ideal transformer, so raising the voltage lowers the current by the same factor: I_S/I_P = N_P/N_S. A load R on the secondary looks like (N_P/N_S)²R to the source.
- With no load an ideal transformer draws nothing; a real one draws a small magnetizing current a quarter cycle behind the voltage, which takes almost no power. Loading the secondary pulls more current into the primary (Lenz's law).
- A line carrying power P at voltage V carries I = P/V and loses I²R = P²R/V². Transformers make high voltage transmission possible, and high voltage is what keeps the loss small.

## Before class

Students should know Faraday's law and rms values. The demo has two views. **Transformer**: an AC source, a laminated iron core, a primary and a secondary coil with adjustable turns, and a load resistor, with rms meters and an oscilloscope of v_P, v_S, i_P and i_S (each trace scaled to its own peak). The model is either the textbook's **ideal** transformer or a **real** one (coupled coils on a core of relative permeability 4000, copper windings, adjustable coupling k; no core loss or saturation). **Power line**: a 12 kV generator, an ideal step up to the transmission voltage, a line of resistance R, an ideal step down to 240 V and a town.

## Running it in class

1. **Step down, 120 V to 12 V.** Ask Q1 first. 400 and 40 turns, 10 Ω load: 12.00 V, 1.200 A, and the primary draws 120.0 mA; 14.40 W in and out. Slide the secondary turns and watch V_S follow.
2. **Step up, 12 V to 120 V.** The same transformer turned round: ten times the voltage, a tenth of the current.
3. **Doorbell transformer.** Q2 (OpenStax Check Your Understanding 15.9). Turn Blind on to hide the ratios and the resistance the source sees.
4. **Real transformer, no load.** Q4. The primary still draws 89.05 mA, almost 90° behind the voltage, and takes only 15.6 mW. Add a 10 Ω load: the primary current rises and moves toward the voltage's phase, and V_S sags to 11.70 V.
5. **Utility pole, 12 kV to 240 V** and then **Power line.** Q3 (OpenStax Example 15.6), then Q5: drag the transmission voltage and watch the loss curve fall as 1/V².

## Questions

**Q1.** A transformer steps 120 V down to 12 V with 400 turns on the primary and a 10 Ω load on the secondary. Predict the secondary turns, the secondary and primary currents, the power in and out, and the resistance the source sees.

**Q2.** OpenStax Check Your Understanding 15.9: line voltage 110 V is stepped down to 9.0 V to deliver 0.50 A to a doorbell. Find N_P/N_S, the primary current, and the resistance the 110 V source sees.

**Q3.** OpenStax Example 15.6: a utility pole transformer steps 12 kV down to 240 V, and the line to it has a resistance of 200 Ω. With 2.0 A in the primary, find the turns ratio, the secondary current and the power lost in the line. What would the line lose carrying the same power at 240 V?

**Q4.** In **Real transformer, no load**, nothing is connected to the secondary, yet the primary draws about 89 mA from the 120 V source. Why does it draw a current, why does that current lag the voltage by almost 90°, and how much power does it take?

**Q5.** A station sends 10 MW down a line whose two wires have 10 Ω in all. Find the share of the power lost at 69 kV and at 765 kV.

**Q6.** The peak field in the bench core is 0.70 T at 120 V, 60 Hz on 400 turns, whatever the load. Why does the load not change it? What happens to it if the same transformer is run at 50 Hz?

## Common misconceptions

- **"A step up transformer makes energy."** It raises the voltage only by lowering the current; the power out is never more than the power in.
- **"A transformer works on DC."** A steady current makes a steady flux, and a steady flux induces nothing.
- **"An unloaded transformer draws its full rated current."** An ideal one draws none; a real one draws a small magnetizing current that is almost all reactive.
- **"High voltage lines lose less because high voltage is more efficient."** The loss is I²R; high voltage helps only because it lowers I for the same power.

## Physics behind the demo

- **Ideal.** V_S = (N_S/N_P)V_P in phase with V_P, I_S = V_S/R, I_P = (N_S/N_P)I_S; the core flux is Φ = V_P/(jωN_P), so the peak field is B = √2 V_P/(ωN_P A).
- **Real.** L = μ_r μ₀N²A/l for each coil, M = k√(L_P L_S), R = ρ_Cu N²(turn length)/(copper area) with each winding given the same copper area (so the referred resistances are equal). Bench core: A = 16 cm², l = 0.36 m, turns 0.22 m, 3.0 cm² copper per winding; pole core: A = 225 cm², l = 1.2 m, turns 0.80 m, 30 cm² copper. Solved exactly in steady AC; tested so that P_in = P_out + copper loss and so that it tends to the ideal model as k → 1, R → 0 and μ_r → ∞. Real distribution transformers have k above 0.999; at k = 0.98 the leakage is large enough to see easily.
- **Not modeled.** Hysteresis and eddy current loss in the core, saturation (the readout flags peak fields above 1.6 T), winding capacitance, and three phase wiring on the line.
- **Line.** I = P/V, loss I²R, delivered P − I²R at V − IR; the town transformer has the fixed ratio V : 240 V, so the houses see 240(1 − PR/V²). Line inductance and capacitance are neglected.

## Going further

- Pair with **Faraday's Law** (two coils setup) for mutual inductance and with **Circuits** (AC) for reactance and power factor.
- Homework: the 10 Ω line in Q5 is about 59 km of a pair of 2.0 cm aluminum wires. How long could the line be at 765 kV for the same 2.1% loss as at 69 kV?
