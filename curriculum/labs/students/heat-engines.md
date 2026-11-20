# Heat Engine Cycles
Student laboratory · Thermodynamics

Textbook: OpenStax *University Physics*, Vol. 2, §§3.1 to 3.6 and 4.2 to 4.5. Access for free at https://openstax.org/details/books/university-physics-volume-2.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/heat-engines.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Carnot cycle; Otto cycle (gasoline engine); Diesel cycle; Stirling engine; Run it backward: refrigerator; Build your own cycle.

**Using the demo.**

- An ideal gas, monatomic ($$\gamma = 5/3$$) or diatomic ($$\gamma = 7/5$$), is taken around a cycle of isothermal, adiabatic, constant pressure and constant volume legs. You choose the cycle, the gas, the amount and the direction, and drag the corners or legs on the PV diagram, or use the sliders.
- Each leg's work, heat and change of internal energy are worked out on their own, so the first law $$\Delta U = Q - W$$ can be checked on every leg.
- The Otto, Diesel and Brayton cycles start at 300 K and 100 kPa. Changing the Otto compression ratio keeps the peak temperature $$T_3$$ at 1800 K, so the heat taken in and the heat given off both change with $$r$$. The Stirling engine has a regenerator that you can turn off.
- The efficiency panel shows the heat taken in, the heat given off and the net work, and the textbook formula for the cycle chosen.
- Record reading stores the cycle, the gas, the amount, the direction, the cycle's parameters (temperatures, compression ratio and so on), the heat in, the heat out, the net work and the lowest and highest temperatures. Export to worksheet sends the readings to the Data table below; Clear starts a new series, which goes into a new copy of the table.

</details>

## Goal

Check the first law of thermodynamics on every leg of a cycle, measure the efficiency of the Carnot and Otto cycles as their settings change, compare them with the textbook formulas, and run a cycle backward as a refrigerator.

## Background

**The first law** (§§3.1 to 3.3). The gas in the cylinder is the system. When its volume changes, it does work on the piston,

$$W = \int_{V_1}^{V_2} P\,dV,$$

the area under its path on the PV diagram: positive when it expands, negative when it is compressed, and $$W = P\,\Delta V$$ at constant pressure. Heat $$Q$$ is energy that flows in because of a temperature difference, positive into the gas. The internal energy of an ideal gas depends only on its temperature, $$U = nC_VT$$, with $$C_V = \tfrac{5}{2}R$$ for a diatomic gas and $$\tfrac{3}{2}R$$ for a monatomic one. The first law is energy conservation for the gas:

$$\Delta U = Q - W.$$

$$\Delta U$$ depends only on the end states, but $$W$$ and $$Q$$ depend on the path between them. On each kind of leg one term is simple: at constant volume $$W = 0$$; at constant pressure $$Q = nC_P\Delta T$$ with $$C_P = C_V + R$$; at constant temperature $$\Delta U = 0$$, so $$Q = W = nRT\ln(V_2/V_1)$$; on an adiabat $$Q = 0$$, so $$W = -\Delta U$$.

**Cycles.** An engine takes heat $$Q_\mathrm{in}$$ from a hot source, does net work $$W$$ and gives heat $$Q_\mathrm{out}$$ to a cold one; over a whole cycle $$W = Q_\mathrm{in} - Q_\mathrm{out}$$ (§4.2). Its efficiency is

$$\eta = \frac{W}{Q_\mathrm{in}}.$$

A **Carnot cycle**, two isotherms joined by two adiabats, has the highest efficiency possible between two temperatures (§4.5): $$\eta = 1 - T_c/T_h$$.

The **Otto cycle** models a gasoline engine: adiabatic compression by a ratio $$r = V_1/V_2$$, heating at constant volume, adiabatic expansion, and cooling at constant volume. Along each adiabat $$TV^{\gamma-1}$$ is constant (§3.6), which gives

$$\eta_\mathrm{Otto} = 1 - r^{1-\gamma}, \qquad \ln(1 - \eta_\mathrm{Otto}) = (1 - \gamma)\ln r.$$

Run backward, a cycle is a refrigerator, with coefficient of performance $$Q_c/W$$; for a Carnot cycle it is $$T_c/(T_h - T_c)$$ (§§4.3 and 4.5).

## Before the lab

1. Find the Carnot efficiency between 500 K and 300 K.
2. Find the Otto efficiency for $$r = 8$$ with air ($$\gamma = 7/5$$).
3. Sketch $$\ln(1 - \eta)$$ against $$\ln r$$ for the Otto cycle. What is the slope?
4. Find the COP of a Carnot refrigerator between 250 K and 320 K. Then, before you work out any more, decide: if its cold side is made colder, 200 K, with the hot side still at 320 K, will each joule of work move more heat out of the cold side, less, or the same, and what makes you think so?

## Safety

No hazards in the virtual lab. Real engines get hot and have moving parts.

## Procedure

**First law, leg by leg.** (1) Under Gas press Diatomic, γ = 7/5, leave Amount of gas n at 1.00 mol and the direction at Engine, then press Rectangle under Cycle (not a Setups button). (2) Read the pressure and volume of each corner from the Corners panel, and find each corner's temperature from $$PV = nRT$$; check it against the T (K) column of the Corners panel. (3) For each leg, work out $$W$$, $$Q$$ and $$\Delta U$$ by hand from the rules in the Background, and only then compare with that leg's row in the Energy per leg panel. Record all four legs in the First law table.

**Carnot.** Press the Carnot cycle setup. Keep Cold temperature T<sub>c</sub> at 300 K, set Hot temperature T<sub>h</sub> to 400 K, 500 K and so on to 1200 K (the slider moves in 10 K steps), and press Record reading at each.

**Otto.** Press Export to worksheet, then Clear, then press the Otto cycle (gasoline engine) setup (diatomic gas). Set Compression ratio r to 2, 3, 4 and so on to 12, and press Record reading at each.

**Otto, monatomic.** Press Export to worksheet, then Clear. Press Monatomic, γ = 5/3 under Gas and repeat the Otto readings only at r = 2, 4, 8 and 12.

**Refrigerator.** Press Export to worksheet, then Clear, then press the Run it backward: refrigerator setup ($$T_h$$ = 320 K, $$T_c$$ = 250 K) and press Record reading. Then set Cold temperature T<sub>c</sub> to 200 K and to 300 K (it moves in 10 K steps) and record each. Read the COP from Refrigerator COP = Q<sub>c</sub>/W<sub>in</sub> in the Coefficient of performance panel. Press Export to worksheet.

## Data

| Reading | Cycle and gas | Setting ($$T_h$$, $$T_c$$ or $$r$$) | $$Q_\mathrm{in}$$ (J) | $$Q_\mathrm{out}$$ (J) | $$W_\mathrm{net}$$ (J) | $$\eta = W/Q_\mathrm{in}$$ or COP | Formula $$\eta$$ or COP | $$1/T_h$$ (1/K) or $$\ln r$$ | $$\ln(1 - \eta)$$ |
|---|---|---|---|---|---|---|---|---|---|
| | | | | | | | | | |
| | | | | | | | | | |
| | | | | | | | | | |

**First law.** One row for each leg of the rectangle. Energies in kJ.

| Leg | Process | $$P$$ start, end (kPa) | $$V$$ start, end (L) | $$T$$ start, end (K) | $$W$$ by hand | $$Q$$ by hand | $$\Delta U$$ by hand | $$Q - W$$ | Demo's $$Q$$, $$W$$, $$\Delta U$$ |
|---|---|---|---|---|---|---|---|---|---|
| | | | | | | | | | |
| | | | | | | | | | |
| | | | | | | | | | |
| | | | | | | | | | |

## Analysis

1. For two readings of your choice (one Carnot, one Otto), check that $$W_\mathrm{net} = Q_\mathrm{in} - Q_\mathrm{out}$$. The Efficiency panel shows the same sum for every reading.
2. For the Carnot readings, plot $$\eta$$ against $$1/T_h$$. What slope and intercept do you expect, and what do you find?
3. For the Otto readings, plot $$\ln(1 - \eta)$$ against $$\ln r$$. From the slope find $$\gamma$$ for each gas.
4. For the refrigerator readings, find each COP and compare with $$T_c/(T_h - T_c)$$.
5. In the First law table, check $$\Delta U = Q - W$$ on every leg, and that $$\Delta U$$ adds to zero around the rectangle while $$W$$ and $$Q$$ do not. Show that the net work of the rectangle is its area on the PV diagram.

## Questions

1. Why does raising the compression ratio make a gasoline engine more efficient, and what limits how high it can go?
2. A heat pump delivers more heat to a house than the electrical energy it uses. From your 250 K refrigerator reading, how much heat reached the 320 K side for each joule of work, and does that break the first law? Then turn to your guess in Before the lab 4: what did lowering T<sub>c</sub> to 200 K do to the COP, and why?

## Uncertainty

For courses that treat measurement uncertainty. This section is not counted in the 75 minutes; do it when your instructor assigns it.
{: .ws-assigned}

The energies are shown to several significant figures and the model has no noise, so the residuals of your fits show only rounding. Real engines fall well short of these ideal cycles; give one reason.

Give the slope and intercept of each fit with their standard errors, and say whether each $$\gamma$$ agrees with its expected value within its uncertainty.

## With calculus

For courses that use calculus. This section is not counted in the 75 minutes; do it when your instructor assigns it.

1. On an isothermal leg, put $$P = nRT/V$$ into $$W = \int P\,dV$$ and show that $$W = nRT\ln(V_2/V_1)$$. On an adiabatic leg $$dQ = 0$$, so the first law gives $$nC_V\,dT = -P\,dV$$. Put in $$P = nRT/V$$, separate the variables, integrate, and show that $$TV^{\gamma-1}$$ stays constant, using $$\gamma = C_P/C_V$$ and $$C_P = C_V + R$$.
2. Differentiate $$\eta_\mathrm{Otto} = 1 - r^{1-\gamma}$$ to find $$d\eta/dr$$. From your diatomic Otto readings, estimate $$d\eta/dr$$ at $$r = 5$$ (from the r = 4 and r = 6 rows) and at $$r = 11$$ (from the r = 10 and r = 12 rows), each as the change in $$\eta$$ over the change in $$r$$, and compare both with your formula at $$\gamma = 7/5$$. How much less does one more unit of compression ratio gain at r = 11 than at r = 5?
3. On an isotherm $$T$$ is constant, so $$\int dQ/T = Q/T$$, and on an adiabat $$dQ = 0$$. From your Carnot readings at $$T_h$$ = 400 K and 1200 K, work out $$Q_\mathrm{in}/T_h$$ and $$Q_\mathrm{out}/T_c$$ and show that $$\oint dQ/T = 0$$ around the cycle. Then use the first question of this section to find the volume ratio $$V_2/V_1$$ of the hot isotherm ($$n$$ = 1.00 mol).

## What to hand in

Prelab answers, the table copies with their graphs and fits, the efficiencies and COPs with comparisons, your values of $$\gamma$$, and answers to the questions (and to Uncertainty and With calculus, if assigned). Identify simulated data.
