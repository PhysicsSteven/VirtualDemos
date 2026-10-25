---
title: Temperature and Heat
level: Intro physics (temperature, heat, expansion, conduction)
time: 20 to 35 minutes
---
## What students should come away with

- Temperature is what two bodies share once heat stops flowing between them (the zeroth law). Heat is energy in transit because of a temperature difference; a body holds internal energy, not heat.
- In an insulated box the heat one body loses is the heat the other gains, so the final temperature is the heat capacity weighted average, (C_A T_A + C_B T_B)/(C_A + C_B). The approach is exponential, set by the bar's conductance and both heat capacities.
- A constant volume gas thermometer is linear in temperature, and every gas sample's line points to the same zero of pressure, −273.15 °C. That is why the kelvin scale starts there.
- Solids grow by ΔL = αL₀ΔT. Liquids grow by about ten to a hundred times more per degree, and water does the odd thing: it is densest at 3.98 °C.
- Steady conduction through layers adds resistances d/k, like resistors in series. The temperature drops most across the layer with the largest resistance, and the air films on each side (convection) count as layers too.

## Before class

Students should know Q = mcΔT and the Celsius and Kelvin scales. The demo has five views: **Equilibrium** (two bodies joined by a 2.00 cm diameter conducting bar in a perfectly insulated box), **Thermometer** (a 1.000 L bulb of gas and a pressure gauge in a choice of baths), **Expansion** (a 1.000 m rod against a dial gauge, or 5.000 mL of liquid in a Pyrex flask with a 1.00 mm capillary) **Conduction** (steady heat flow through up to three layers) and **Cooling** (a metal sphere in room air losing heat by convection and radiation, with or without a fan). All the material constants are from OpenStax University Physics Volume 2, Tables 1.2, 1.3 and 1.5. The speed buttons run the slow views faster than real time.

## Running it in class

1. **Hot metal, cool water.** 0.50 kg of aluminum at 90 °C, 0.25 kg of water at 20 °C, a 10 cm copper bar. Ask Q1, then start. The two traces meet at 41.05 °C after a few time constants (τ = 257 s); by then **Heat that has left A** reads 22.0 kJ.
2. **Mystery block.** Ask Q2. The block's specific heat is hidden; students time the run to equilibrium and work it out from the final temperature.
3. **Gas thermometer.** Ask Q3. Put the bulb in **Ice water**, **Boiling water**, **Dry ice** and **Liquid nitrogen** in turn; each reading takes about a minute to settle (the bulb follows the bath with a 12 s time constant). Change **Gas in the bulb** and repeat: a different slope, the same zero.
4. **Rod in a water bath**, then **Water near 4 °C.** Ask Q4 first. The rod's gauge moves 0.025 mm per degree; the water's level falls as it cools, turns near 4.5 °C and rises again.
5. **House wall in winter.** Ask Q5. 13 mm plasterboard, 90 mm glass wool and 100 mm brick between 20 °C still air and −5 °C wind: 10.0 W through each square meter, and 21.5 °C of the 25 °C drop is across the glass wool. Drag **Probe position** through the wall. Then switch to **Window** (Q6) and **Rods in series**.

## Questions

**Q1.** Predict the final temperature in **Hot metal, cool water**: 0.50 kg of aluminum (c = 900 J/(kg·°C)) at 90 °C and 0.25 kg of water (c = 4186 J/(kg·°C)) at 20 °C. Which body's temperature changes more, and why?

**Q2.** In **Mystery block**, 0.50 kg of an unknown metal at 95 °C and 0.50 kg of water at 20 °C end at 26.4 °C. Find the metal's specific heat and use Table 1.3 to name it.

**Q3.** The bulb holds 20 mmol of gas in 1.000 L. Predict the gauge reading in ice water and in boiling water (99.974 °C). Extend the straight line through those two points to zero pressure. Where does it cross, and does the answer depend on how much gas is in the bulb?

**Q4.** Predict how much a 1.000 m aluminum rod (α = 25 × 10⁻⁶ /°C) grows from 20 °C to 80 °C. Then predict what the level in the capillary does as water in the flask is cooled from 20 °C to 0 °C.

**Q5.** For the house wall, the resistances per square meter are 0.12 (inside air), 0.013/0.16, 0.090/0.042, 0.100/0.84 and 0.030 (outside air), in m²·°C/W. Find the heat flow per square meter and the temperature drop across the glass wool. How much more heat would flow without the glass wool?

**Q6.** A single pane of glass 4 mm thick (k = 0.84 W/(m·°C)) separates 20 °C still air from a −5 °C wind. Why does the glass itself contribute almost nothing to the resistance, and what does set the heat flow? Why does the inside of the glass feel so cold?

**Q7.** In **Rods in series**, a steel rod and an aluminum rod, each 25 cm long and 1.0 cm across, join a 100 °C bath to a 20 °C bath. Find the junction temperature and the heat flow. Which rod has the steeper temperature gradient?

## Common misconceptions

- **"Heat and temperature are the same thing."** A bathtub of warm water holds far more internal energy than a red hot nail, but the nail has the higher temperature, and heat would flow from the nail into the water.
- **"Metal is colder than wood at the same temperature."** Both are at room temperature; metal conducts heat out of your hand faster, so it feels colder.
- **"Final temperature is halfway between the two."** Only for equal heat capacities. Water's large c pulls the final temperature toward its own.
- **"A hole in a plate shrinks when the plate is heated."** Every length grows by the same fraction, including the hole.
- **"Insulation stops heat."** It slows it. The steady flow depends on the total resistance, and in a single pane window the air films, not the glass, do almost all the work.

## Physics behind the demo

- **Equilibrium.** Heat flows through the bar at P = kA(T_A − T_B)/L (the bar's own heat capacity is neglected), so the difference decays as exp(−t/τ) with 1/τ = (kA/L)(1/C_A + 1/C_B). The box is perfectly insulated.
- **Thermometer.** P = nRT/V for an ideal gas at fixed volume. The glass does not expand and the tube holds no gas. The baths are ITS-90 fixed points at 1 atm: nitrogen boils at 77.355 K, solid CO₂ sublimes at −78.464 °C, water boils at 99.974 °C.
- **Expansion.** L = L₀[1 + α(T − 20 °C)] with the textbook's average α. The flask level is h = (ΔV_liquid − ΔV_flask)/A with β_Pyrex = 9 × 10⁻⁶ /°C. Water uses Tanaka et al. (Metrologia 38, 301, 2001) for its density, so it reproduces the minimum volume at 3.98 °C.
- **Conduction.** Steady state only: P = AΔT/ΣR with R = d/k for each layer and the ASHRAE air film resistances (0.12 m²·°C/W for still indoor air, 0.030 in a 24 km/h wind, 0.044 in a 12 km/h wind). A still air layer added to **Window** is conduction only; a real gap also carries heat by convection and radiation, so real double glazing passes about twice what the demo shows.

## Going further

- Homework: why do engineers quote R values (resistance per area) rather than conductivities? Convert the house wall's ΣR = 2.49 m²·°C/W into the US R value (ft²·°F·h/BTU, multiply by 5.68).
- Pair with **States of Matter** for heating curves and with **Heat Capacities of Gases** for c at constant volume and pressure.
