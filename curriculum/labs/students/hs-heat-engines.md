# Heat Engines and Refrigerators
Student worksheet · High school Physics and College Physics 2e

Textbook: OpenStax *Physics* (high school), §§12.2 and 12.4, and OpenStax *College Physics 2e*, §§15.1–15.4. Access for free at https://openstax.org/details/books/physics and https://openstax.org/details/books/college-physics-2e.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/heat-engines.html?ws=hs-heat-engines)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Used here:** the Rectangle cycle (under Cycle), and the Carnot cycle and Run it backward: refrigerator setups (under Setups).

**Using the demo.**

- The picture shows the cycle on a pressure against volume (PV) diagram, with the gas in its cylinder beside it. The shaded area inside the loop is the net work done in one trip round the cycle.
- The **Corners** panel gives the pressure $$P$$, volume $$V$$ and temperature $$T$$ of each corner. The **Energy per leg** panel gives, for each leg, the work $$W$$ done by the gas, the heat $$Q$$ into the gas and the change $$\Delta U$$ of its internal energy. The **Efficiency** panel (Coefficient of performance for a refrigerator) gives the heat taken in, the heat given off and the net work.
- The Carnot cycle's temperatures are set with the **Hot temperature T<sub>h</sub>** and **Cold temperature T<sub>c</sub>** sliders under Cycle, in 10 K steps. Click a slider and use the arrow keys to set it exactly.
- **Record reading** (under Readings) stores the cycle, the gas, its temperatures, the heat in, the heat out and the net work. **Export to worksheet** sends the readings to this page's Data table; **Clear** starts a new series, which goes into a new copy of the table.

**What the demo models.** An ideal gas, taken round the cycle slowly. For a monatomic gas, such as helium, the internal energy is $$U = \tfrac32 nRT$$, with $$R$$ = 8.314 J/(mol·K).

</details>

## Goal

Follow the energy round an engine cycle one leg at a time, find the net work as the area of the cycle on a PV diagram, and compare the efficiency of real cycles and refrigerators with the Carnot limit.

## Background

**The first law of thermodynamics** says that the heat $$Q$$ put into a gas goes partly into its internal energy and partly into work $$W$$ done by the gas as it pushes a piston out:

$$Q = \Delta U + W.$$

$$Q$$ is positive when heat goes into the gas, and $$W$$ is positive when the gas expands. For a monatomic ideal gas, $$\Delta U = \tfrac32 nR\,\Delta T$$, and since $$PV = nRT$$, also $$\Delta U = \tfrac32\,\Delta(PV)$$.

- At **constant pressure** the work is $$W = P\,\Delta V$$, the area under the line on the PV diagram.
- At **constant volume** the piston does not move, so $$W = 0$$ and $$Q = \Delta U$$.

**A heat engine** takes the gas round a closed cycle. Back at the start, the gas has its original temperature, so over the whole cycle $$\Delta U = 0$$ and the net work equals the net heat: $$W_\mathrm{net} = Q_\mathrm{in} - Q_\mathrm{out}$$. On the PV diagram, $$W_\mathrm{net}$$ is the area inside the loop. The **efficiency** is the share of the heat taken in that comes out as work:

$$\eta = \frac{W_\mathrm{net}}{Q_\mathrm{in}}.$$

**The Carnot limit.** No engine working between a hot temperature $$T_h$$ and a cold temperature $$T_c$$ (in kelvins) can do better than the Carnot engine:

$$\eta_\mathrm{C} = 1 - \frac{T_c}{T_h}.$$

The only way to raise it is to make the hot side hotter or the cold side colder. Since some heat must always be given off at $$T_c$$, no engine reaches 100 %.

**A refrigerator** runs a cycle backward: work $$W$$ goes in, and heat $$Q_c$$ is pulled out of the cold side. Its **coefficient of performance** is $$\mathrm{COP} = Q_c/W$$, and the best possible, for a Carnot refrigerator, is

$$\mathrm{COP_C} = \frac{T_c}{T_h - T_c}.$$

## Before the lab

1. A gas at a constant 200 kPa expands from 10 L to 30 L. How much work does it do? (1 L = 0.001 m³.)
2. In one leg, 500 J of heat goes into a gas and the gas does 200 J of work. Find $$\Delta U$$. Does the gas get hotter or colder?
3. Find the Carnot efficiency of an engine between 300 K and 600 K, and between 300 K and 1200 K.
4. In item 3, doubling the hot temperature from 600 K to 1200 K doubles how hot the hot side is. Do you think it will double the efficiency, raise it by less than double, or raise it by more? Write your guess and the reason for it before you open the demo.

## Safety

No hazards in the virtual lab. Real engines run hot, at high pressure, with moving parts: never open one while it runs.

## Procedure

The link at the top opens the Heat Engine Cycles demo. Leave **Amount of gas n** at 1.00 mol for the whole worksheet.

**Part 1: the first law, leg by leg.** Under Gas press **Monatomic**, and under Cycle press **Rectangle**, with the direction at **Engine**. The rectangle has two legs at constant pressure and two at constant volume. Read the pressure, volume and temperature of each corner from the Corners panel into Table 2. For each leg, work out $$W$$, $$\Delta U$$ and $$Q = \Delta U + W$$ by hand from the rules in the Background, and only then compare with that leg's row in the Energy per leg panel. Press **Record reading** under Readings, then **Export to worksheet** and **Clear**: the rectangle's reading fills the Data table.

**Part 2: the Carnot engine.** Press **Carnot cycle** under Setups. Keep Cold temperature T<sub>c</sub> at 300 K. Set Hot temperature T<sub>h</sub> to 400 K and press Record reading, then do the same at 600 K, 800 K, 1000 K and 1200 K. Watch the efficiency at 600 K and 1200 K: these are the numbers to compare with your guess in Before the lab 4. Press Export to worksheet, then Clear: these readings go to a second copy of the table, and its graph is the one for Analysis 3.

**Part 3: a refrigerator.** Press **Run it backward: refrigerator** under Setups ($$T_h$$ = 320 K, $$T_c$$ = 250 K) and press Record reading. Then set Cold temperature T<sub>c</sub> to 200 K and record, and to 300 K and record. Press Export to worksheet: these go to a third copy of the table.

For each reading, fill in the last two columns: the efficiency or COP from the energies, and the Carnot limit from the temperatures, $$1 - T_c/T_h$$ for an engine or $$T_c/(T_h - T_c)$$ for a refrigerator.

## Data

| Reading | Cycle and gas | Temperatures | $$Q_\mathrm{in}$$ | $$Q_\mathrm{out}$$ | $$W_\mathrm{net}$$ | $$\eta = W_\mathrm{net}/Q_\mathrm{in}$$, or COP = $$Q_c/W$$ | Carnot limit $$\eta_\mathrm{C}$$ or $$\mathrm{COP_C}$$ |
|---|---|---|---|---|---|---|---|
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |

Energies are in J. For the rectangle, use its lowest and highest corner temperatures as $$T_c$$ and $$T_h$$. For a refrigerator, $$Q_c$$ is the heat taken in from the cold side ($$Q_\mathrm{in}$$) and $$W$$ is the work put in.

**Table 2: the rectangle, leg by leg.** Energies in kJ, as the Energy per leg panel shows them.

| Leg | Kind (constant P or V) | $$P$$ start, end (kPa) | $$V$$ start, end (L) | $$T$$ start, end (K) | $$W$$ by hand | $$\Delta U$$ by hand | $$Q = \Delta U + W$$ | Demo's $$W$$, $$\Delta U$$, $$Q$$ |
|---|---|---|---|---|---|---|---|---|
| | | | | | | | | |
| | | | | | | | | |
| | | | | | | | | |
| | | | | | | | | |

## Analysis

1. Add up $$W$$ for the four legs of Table 2, and add up $$\Delta U$$. What do you get for each? Compare the net work with the area of the rectangle, $$(P_\mathrm{high} - P_\mathrm{low})(V_\mathrm{right} - V_\mathrm{left})$$.
2. Which legs of the rectangle take heat in? Add their $$Q$$ to get $$Q_\mathrm{in}$$, and find the efficiency. Compare it with the Carnot limit between the rectangle's lowest and highest temperatures. How much of the Carnot limit does the rectangle reach?
3. For the Carnot readings, make a graph of the efficiency from the energies, $$\eta = W_\mathrm{net}/Q_\mathrm{in}$$ (vertical), against the Carnot limit $$\eta_\mathrm{C} = 1 - T_c/T_h$$ (horizontal). Find the slope and the intercept of the line. What do they tell you about the Carnot engine? Then look down the efficiency column: by how much does $$\eta$$ go up for each 200 K added to $$T_h$$? Does it go up by the same amount each time?
4. For each refrigerator reading, compare the COP from the energies with $$T_c/(T_h - T_c)$$. How does the COP change as the cold side gets colder?

## Uncertainty

The demo gives energies to three or four significant figures, so the efficiencies and COPs you work out should match the formulas to about 0.1 %. Check that any difference is no bigger than that before you call it real. A real engine has friction and leaks heat, so it falls well short of these ideal values.

## Questions

1. Look back at your guess in Before the lab 4. What efficiencies did you find at 600 K and 1200 K? Explain with $$\eta_\mathrm{C} = 1 - T_c/T_h$$ why doubling $$T_h$$ does not double the efficiency, and what would have to happen for the efficiency to reach 100 %.
2. A freezer keeps its inside at 250 K in a kitchen at 300 K. From your results, why does the freezer use more electricity on a hot day, or when it is set colder?

## What to hand in

Prelab answers, the three copies of the Data table and Table 2 with the calculated columns filled in, the graph of Analysis 3, and answers to the questions. Identify simulated data.
