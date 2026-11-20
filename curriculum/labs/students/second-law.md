# Testing the Second Law
Student laboratory · Thermodynamics

Textbook: OpenStax *University Physics*, Vol. 2, §§4.2 to 4.6. Access for free at https://openstax.org/details/books/university-physics-volume-2.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/entropy.html?setup=slReal)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** A real engine; Beats Carnot?; Perfect engine; Perfect refrigerator (these four use the Second law view, the subject of this worksheet); Four molecules; A hundred molecules (the Free expansion worksheet); Small solids; Hot solid meets cold (the Einstein solids worksheet).

**Using the demo.**

- The Second law view has a device that runs one complete cycle between a hot and a cold reservoir, each so large that its temperature does not change. Choose a heat engine or a refrigerator, the two temperatures, and two of the three energies.
- For an engine you set the heat $$Q_h$$ taken from the hot reservoir and the work $$W$$ it does; the first law gives the heat $$Q_c = Q_h - W$$ it gives to the cold reservoir. For a refrigerator you set the heat $$Q_c$$ it takes from the cold reservoir and the work $$W$$ done on it; then $$Q_h = Q_c + W$$.
- The arrows are drawn with widths in proportion to the energies. The graph shows the entropy change of each reservoir, of the device, and of the universe.
- Pair it with a Carnot device adds a reversible device between the same reservoirs, and shows what the pair does together.
- Record reading stores the device, both temperatures and all three energies. Export to worksheet sends the readings to the Data table below; Clear starts a new series, which goes into a new copy of the table.
- Blind hides the Carnot limit, the entropy changes and the verdict.

</details>

## Goal

Test proposed engines and refrigerators against the second law by working out the entropy change of the universe, and see why the Kelvin and Clausius statements and the Carnot limit all say the same thing.

## Background

A device that runs in a cycle ends where it started, so over one cycle its own entropy does not change. Only the reservoirs change: a reservoir at temperature $$T$$ that gains heat $$Q$$ gains entropy $$Q/T$$ (§4.6). For an engine,

$$\Delta S_\mathrm{universe} = -\frac{Q_h}{T_h} + \frac{Q_c}{T_c}.$$

The second law says $$\Delta S_\mathrm{universe} \ge 0$$, with equality only for a reversible device. For an engine this means its efficiency $$W/Q_h$$ can be no more than the Carnot efficiency $$1 - T_c/T_h$$ (§4.5); for a refrigerator, its coefficient of performance $$Q_c/W$$ can be no more than $$T_c/(T_h - T_c)$$.

The **Kelvin statement** says no engine can turn heat from a single reservoir entirely into work. The **Clausius statement** says no refrigerator can move heat from a cold reservoir to a hot one with no work (§4.4). Joining a device that beat either one with an ordinary device between the same reservoirs would make a device that beat the other, so the two statements stand or fall together.

## Before the lab

1. An engine between 600 K and 300 K takes 500 J from the hot reservoir and does 150 J of work. Find $$Q_c$$, its efficiency and $$\Delta S_\mathrm{universe}$$.
2. What is the most work that engine could do with the same 500 J?
3. Find $$\Delta S_\mathrm{universe}$$ for an engine that turns all 500 J into work. Which statement does it break?
4. A refrigerator moves 400 J from a 270 K freezer to a 300 K room with 50 J of work. Is it allowed?
5. Over one cycle of that refrigerator, does the entropy of the freezer go up, go down, or stay the same? And the entropy of the room, and of the refrigerator itself? Decide before you open the demo.

## Safety

No hazards in the virtual lab.

## Procedure

**Engines.** Press the A real engine setup (600 K and 300 K, $$Q_h$$ = 500 J). Set the Work done by the engine W slider (5 J steps) to 0, 50, 100 and so on to 500 J, and press Record reading at each. Press Export to worksheet.

**Another temperature.** Press Clear, set the Hot reservoir T<sub>h</sub> slider to 900 K, keep $$Q_h$$ at 500 J, and repeat with $$W$$ = 0, 100, 200 and so on to 500 J (six readings). Press Export to worksheet, which sends this run to a new copy of the table.

**Refrigerators.** Press Clear, then press the Perfect refrigerator setup (Refrigerator, 300 K and 270 K, $$Q_c$$ = 400 J). Set the Work done on the refrigerator W slider to 0, 10, 20 and so on to 100 J and record each. At 100 J, read the ΔS bars of the hot reservoir, the cold reservoir and the device in the entropy change chart, and write all three in your answer to Question 3. Press Export to worksheet.

**The pairing argument.** Press Clear. (1) Press the Beats Carnot? setup, check Pair it with a Carnot refrigerator that returns all of Q<sub>c</sub>, and press Record reading; write what the pair does. (2) Press the Perfect refrigerator setup, set Work done on the refrigerator W to 20 J (a COP above the Carnot value), check Pair it with a Carnot engine that supplies its work W, and record it the same way. Press Export to worksheet.

## Data

| Reading | Device | $$T_h$$ (K) | $$T_c$$ (K) | $$Q_h$$ (J) | $$Q_c$$ (J) | $$W$$ (J) | $$\Delta S_\mathrm{universe}$$ (J/K) | Allowed? |
|---|---|---|---|---|---|---|---|---|
| | | | | | | | | |
| | | | | | | | | |
| | | | | | | | | |

## Analysis

1. Work out $$\Delta S_\mathrm{universe}$$ for every reading and say whether each device is allowed.
2. Plot $$\Delta S_\mathrm{universe}$$ against $$W$$ for the 600 K engines. Find the work at which it crosses zero and compare it with the Carnot limit. What is the slope, and why?
3. Repeat Analysis 2 for the 900 K engines.
4. For the refrigerators, find the least work that is allowed and compare $$Q_c/W$$ there with the Carnot COP.
5. Describe what the pair did in each case of the pairing argument, and say which statement of the second law the pair breaks.

## Questions

1. A power station runs between steam at 800 K and a river at 290 K. What is the most it could turn into electricity of each joule of heat?
2. Why is the Carnot efficiency higher when the cold reservoir is colder?
3. Before the lab 5 asked what one cycle of a refrigerator does to the entropy of the freezer, the room and the refrigerator. What did the bars show at W = 100 J, and how does that square with the second law? Use them to say why a refrigerator needs work, when heat is just moving from one place to another.

## Uncertainty

For courses that treat measurement uncertainty. This section is not counted in the 75 minutes; do it when your instructor assigns it.
{: .ws-assigned}

The energies here are set exactly, so there is no measurement uncertainty. Instead, decide how close to zero $$\Delta S_\mathrm{universe}$$ has to be before you would call a device reversible, given that the energies are shown to 0.1 J.

## With calculus

For courses that use calculus. This section is not counted in the 75 minutes; do it when your instructor assigns it.

1. A reservoir keeps its temperature as heat flows in or out. A body of heat capacity $$C$$ does not, so its entropy changes by $$dS = dQ/T = C\,dT/T$$ as it warms. Integrate to show that warming it from $$T_1$$ to $$T_2$$ raises its entropy by $$C\ln(T_2/T_1)$$. Your 600 K engine reading with $$W$$ = 150 J gave 350 J to the 300 K reservoir. If that 350 J went instead into a small body of heat capacity 10.0 J/K starting at 300 K, find its final temperature, its entropy change and $$\Delta S_\mathrm{universe}$$, and compare with the table's value. Show that $$C\ln(T_2/T_1)$$ approaches $$Q/T_1$$ when $$C$$ is very large.
2. Now the hot side is a body of heat capacity 5.00 J/K that starts at 600 K, and a Carnot engine runs between it and the 300 K reservoir until the body has cooled to 300 K. While the body is at $$T$$ it gives heat $$dQ = -C\,dT$$, and the engine turns $$dW = (1 - T_c/T)\,dQ$$ of it into work. Integrate to find the total work and the total heat the body gives. Compare the average efficiency with the Carnot limit you found at 600 K in Analysis 2, explain the difference, and use the first question of this section to check that $$\Delta S_\mathrm{universe} = 0$$.

## What to hand in

Prelab answers, the table copies with your entropy changes and graphs, the crossing points compared with the Carnot limits, your account of the pairing argument, and answers to the questions (and to Uncertainty and With calculus, if assigned). Identify simulated data.
