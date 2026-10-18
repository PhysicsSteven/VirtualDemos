---
title: Heat Engine Cycles
level: Intro physics (thermodynamics)
time: 20 to 35 minutes
---
## What students should come away with

- Heat and work are the two ways energy enters or leaves the gas. Work W = ∫P dV is the area under the path on the PV diagram; heat Q crosses the cylinder wall because of a temperature difference. ΔU = Q − W on every leg.
- Around a closed cycle ΔU = 0, so net work equals net heat. The net work is the enclosed area: work out along the high pressure path minus work in along the low pressure path.
- An engine must give off some heat. The gas has to dump the entropy it took in, which costs the least heat at the coldest temperature, so η = W/Q_in can never exceed 1 − T_min/T_max.
- Real cycles fall short because they take in heat below T_max or give it off above T_min. A refrigerator is an engine run backward; its COP can be well above 1.

## Before class

Students should know the ideal gas law, U = n C_v T and the first law. Entropy can be introduced here as heat divided by the temperature at which it flows (Q/T on an isotherm). The drawing shows the PV diagram with the piston under it, the T–S diagram and **Energy per cycle**; the rail table **Energy per leg** lists Q, W and ΔU for each leg. Use **Slow** and **Next leg** to stop on each leg. Drag a corner, or the grip in the middle of a leg, to reshape the cycle.

## Running it in class

1. **Carnot cycle.** One mole of monatomic gas between 500 K and 300 K. Pause on leg 1→2 and ask Q1. The table: Q = W = +2.88 kJ, ΔU = 0. On the adiabat 2→3: W = +2.49 kJ, Q = 0, and the gas cools. The cycle row: W_net = Q_net = 1.15 kJ, η = 40.0%, equal to the Carnot limit.
2. **Why the loop area.** With **Area under the leg** on, step around: the area under 1→2→3 is work out, under 3→4→1 work in, and the loop is what is left (Q3). Ask Q4 before touching the **Hot temperature T_h** and **Cold temperature T_c** sliders, then check.
3. **Rectangle** (under Cycle, with **Monatomic, γ = 5/3**). W_net = ΔP ΔV = 2.70 kJ, yet η = 19.4% against a Carnot limit of 84.0% (Q2).
4. **Otto cycle (gasoline engine).** Compression ratio 8, diatomic air, peak 1800 K: η = 56.5% against 83.3%. On the T–S diagram, heat comes in while the gas warms from 689 K to 1800 K, not at 1800 K (Q5).
5. **Diesel cycle** and **Stirling engine.** The Diesel at r = 15 reaches 60.4%; at r = 8 it falls below an Otto with the same r. In the Stirling, uncheck **Ideal regenerator**: η falls from 50.0% to 29.7% (Q6).
6. **Run it backward: refrigerator.** The Carnot cycle counterclockwise between 320 K and 250 K: work goes in, COP = 3.57 (Q7).

## Questions

**Q1.** Predict: on leg 1→2 of the Carnot cycle the gas expands at a constant 500 K while touching the hot reservoir. Does its internal energy change? Where does the energy for its work on the piston come from? On leg 2→3 it expands with no heat at all. Where does that work come from?

**Q2.** In **Rectangle** with a monatomic gas, the cycle runs at 250 kPa from 12.0 L to 30.0 L, drops to 100 kPa at 30.0 L, returns at 100 kPa to 12.0 L, and rises back to 250 kPa. Find W_net. For a monatomic ideal gas Q = (5/2)P ΔV at constant pressure and Q = (3/2)V ΔP at constant volume. Find Q on each leg, Q_in and η, and check with **Energy per leg**.

**Q3.** Explain why the area enclosed by the loop is the net work per cycle, not the area under the top leg alone. What does a counterclockwise cycle mean?

**Q4.** The Carnot engine runs between 500 K and 300 K. Which raises its efficiency more: raising T_h by 100 K or lowering T_c by 100 K? Predict, then check with the sliders.

**Q5.** The Otto preset reaches η = 56.5%, while a Carnot engine between its extreme temperatures, 300 K and 1800 K, would reach 83.3%. Use the T–S diagram to explain the shortfall. Then explain why no engine of any design working between 300 K and 1800 K can beat 83.3%.

**Q6.** In the **Stirling engine**, turning off the regenerator does not change the work per cycle, yet η drops from 50.0% to 29.7%. Explain both facts. Where does the regenerator's heat go when it is off?

**Q7.** In **Run it backward: refrigerator**, heat is taken from the cold side at 250 K and given to the room at 320 K. Find the Carnot COP, Q_c/W. For each joule of work, how much heat leaves the cold side and how much reaches the room? Does a COP above 1 violate energy conservation? What happens to the COP as the room gets hotter?

## Common misconceptions

- **"A gas contains heat."** A gas has internal energy. Heat, like work, is energy in transit; the same change of state can be reached with different amounts of each.
- **"Isothermal means no heat flows."** The opposite: at constant T, ΔU = 0 for an ideal gas, so Q = W. It is the adiabatic leg that has Q = 0, and there T changes.
- **"Without friction an engine could reach 100%."** Every cycle here is frictionless; the limit comes from entropy.
- **"A bigger loop is a better engine."** A bigger loop does more work per cycle; efficiency depends on where the heat is exchanged. The **Rectangle** has a large area and a low η.
- **"A COP above 1 means free energy."** A refrigerator moves heat; Q_h = Q_c + W always.

## Physics behind the demo

- n moles of ideal gas with constant heat capacities: C_v = 3/2 R (monatomic, γ = 5/3) or 5/2 R (diatomic, γ = 7/5), C_p = C_v + R. Every process is quasistatic.
- Each leg is P V^k = constant with k = 0 (isobaric), 1 (isothermal), γ (adiabatic) or ∞ (isochoric). W comes from the area under the path; Q separately from n C_p ΔT, n C_v ΔT, T ΔS on an isotherm, or 0 on an adiabat; ΔU = n C_v ΔT. The table confirms ΔU = Q − W on every row and that ΔU and ΔS sum to zero around the cycle.
- S = n C_v ln(T/300 K) + n R ln(V/V₀); the area under a leg on the T–S diagram is its heat.
- η = W_net/Q_in, with Q_in the sum of the positive Q's (regenerator legs excluded), compared with 1 − T_min/T_max for the cycle's own extremes. The rail also shows the textbook formulas (Otto 1 − r^(1−γ), Diesel, Brayton, Stirling).
- Otto, Diesel and Brayton are air standard models: combustion is heat added, exhaust plus intake is heat removed. Real air has γ falling toward about 1.3 at combustion temperatures, and friction and fast, irreversible steps keep real engines well below these values.
- One hot and one cold side are drawn; where T changes while heat flows, a reversible version would need a series of reservoirs. The regenerator is ideal.

## Going further

- Homework: show that for the Carnot cycle Q_out/Q_in = T_c/T_h, using T V^(γ−1) = constant on the adiabats to prove that the two isotherms have the same volume ratio.
- Try **Brayton** with diatomic gas: η depends only on the pressure ratio, 44.8% at r_p = 8. Carnot found the limit in 1824, before the first law.
