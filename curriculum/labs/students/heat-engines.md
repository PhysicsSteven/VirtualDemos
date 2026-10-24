# Heat Engine Cycles
Student laboratory · Thermodynamics

Textbook: OpenStax *University Physics*, Vol. 2, §§3.4 to 3.6 and 4.2 to 4.5. Access for free at https://openstax.org/details/books/university-physics-volume-2.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/heat-engines.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Carnot cycle; Otto cycle (gasoline engine); Diesel cycle; Stirling engine; Run it backward: refrigerator; Build your own cycle.

**Using the demo.**

- An ideal gas, monatomic ($$\gamma = 5/3$$) or diatomic ($$\gamma = 7/5$$), is taken around a cycle of isothermal, adiabatic, constant pressure and constant volume legs. You choose the cycle, the gas, the amount and the direction, and drag the corners or legs on the PV diagram, or use the sliders.
- Each leg's work, heat and change of internal energy are worked out on their own, so the first law $$\Delta U = Q - W$$ can be checked on every leg.
- The Otto, Diesel and Brayton cycles start at 300 K and 100 kPa. The Stirling engine has a regenerator that you can turn off.
- The efficiency panel shows the heat taken in, the heat given off and the net work, and the textbook formula for the cycle chosen.
- Record reading stores the cycle, the gas, the amount, the direction, the cycle's parameters (temperatures, compression ratio and so on), the heat in, the heat out, the net work and the lowest and highest temperatures. Export to worksheet sends the readings to the Data table below; Clear starts a new series, which goes into a new copy of the table.

</details>

## Goal

Measure the efficiency of the Carnot and Otto cycles as their settings change, compare them with the textbook formulas, and run a cycle backward as a refrigerator.

## Background

An engine takes heat $$Q_\mathrm{in}$$ from a hot source, does net work $$W$$ and gives heat $$Q_\mathrm{out}$$ to a cold one; over a whole cycle $$W = Q_\mathrm{in} - Q_\mathrm{out}$$ (§4.2). Its efficiency is

$$\eta = \frac{W}{Q_\mathrm{in}}.$$

A **Carnot cycle**, two isotherms joined by two adiabats, has the highest efficiency possible between two temperatures (§4.5): $$\eta = 1 - T_c/T_h$$.

The **Otto cycle** models a gasoline engine: adiabatic compression by a ratio $$r = V_1/V_2$$, heating at constant volume, adiabatic expansion, and cooling at constant volume. Along each adiabat $$TV^{\gamma-1}$$ is constant (§3.6), which gives

$$\eta_\mathrm{Otto} = 1 - r^{1-\gamma}, \qquad \ln(1 - \eta_\mathrm{Otto}) = (1 - \gamma)\ln r.$$

Run backward, a cycle is a refrigerator, with coefficient of performance $$Q_c/W$$; for a Carnot cycle it is $$T_c/(T_h - T_c)$$ (§4.3).

## Before the lab

1. Find the Carnot efficiency between 500 K and 300 K.
2. Find the Otto efficiency for $$r = 8$$ with air ($$\gamma = 7/5$$).
3. Sketch $$\ln(1 - \eta)$$ against $$\ln r$$ for the Otto cycle. What is the slope?
4. Find the COP of a Carnot refrigerator between 250 K and 320 K.

## Safety

No hazards in the virtual lab. Real engines get hot and have moving parts.

## Procedure

**Carnot.** Pick Carnot cycle. Keep $$T_c$$ at 300 K and record a reading for $$T_h$$ from 400 K to 1200 K in steps of 100 K.

**Otto.** Clear the readings and pick Otto cycle. Record a reading for compression ratios from 2 to 12.

**Otto, monatomic.** Repeat the Otto readings with the monatomic gas, in a new copy of the table.

**Refrigerator.** Pick Run it backward: refrigerator and record a reading. Then change $$T_c$$ in a few steps and record each.

**Stirling.** Pick Stirling engine and record a reading with the regenerator on and with it off.

## Data

| Reading | Cycle and gas | Setting ($$T_h$$, $$T_c$$ or $$r$$) | $$Q_\mathrm{in}$$ (J) | $$Q_\mathrm{out}$$ (J) | $$W_\mathrm{net}$$ (J) | $$\eta = W/Q_\mathrm{in}$$ or COP | Formula $$\eta$$ or COP | $$1/T_h$$ (1/K) or $$\ln r$$ | $$\ln(1 - \eta)$$ |
|---|---|---|---|---|---|---|---|---|---|
| | | | | | | | | | |
| | | | | | | | | | |
| | | | | | | | | | |

## Analysis

1. For every reading, check that $$W_\mathrm{net} = Q_\mathrm{in} - Q_\mathrm{out}$$.
2. For the Carnot readings, plot $$\eta$$ against $$1/T_h$$. What slope and intercept do you expect, and what do you find?
3. For the Otto readings, plot $$\ln(1 - \eta)$$ against $$\ln r$$. From the slope find $$\gamma$$ for each gas.
4. For the refrigerator readings, find each COP and compare with $$T_c/(T_h - T_c)$$.
5. Compare the Stirling engine's efficiency with and without the regenerator, and with the Carnot efficiency for its two temperatures.

## Uncertainty

The energies are shown to several significant figures and the model has no noise, so the residuals of your fits show only rounding. Real engines fall well short of these ideal cycles; list three reasons.

## Questions

1. Why can no engine between 300 K and 500 K beat 40% efficiency?
2. Why does raising the compression ratio make a gasoline engine more efficient, and what limits how high it can go?
3. A heat pump delivers more heat to a house than the electrical energy it uses. Does that break the first law?
4. Why does the regenerator raise the Stirling engine's efficiency?

## What to hand in

Prelab answers, the table copies with their graphs and fits, the efficiencies and COPs with comparisons, your values of $$\gamma$$, and answers to the questions. Identify simulated data.
