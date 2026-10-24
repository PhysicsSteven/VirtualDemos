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

## Safety

No hazards in the virtual lab.

## Procedure

**Engines.** Start with the A real engine setup (600 K and 300 K, $$Q_h$$ = 500 J). Record a reading for each value of $$W$$ from 0 to 500 J, in steps of 50 J.

**Another temperature.** Clear the readings, set $$T_h$$ = 900 K and repeat. Send this run to a new copy of the table.

**Refrigerators.** Clear the readings and switch to Refrigerator, with 300 K and 270 K and $$Q_c$$ = 400 J. Record readings for $$W$$ from 0 to 100 J, in steps of 10 J.

**The pairing argument.** Pick Beats Carnot? and turn on the pairing. Record what the pair does. Then do the same for a refrigerator with a COP above the Carnot value.

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

## Uncertainty

The energies here are set exactly, so there is no measurement uncertainty. Instead, decide how close to zero $$\Delta S_\mathrm{universe}$$ has to be before you would call a device reversible, given that the energies are shown to 0.1 J.

## Questions

1. Why must every real engine give some heat to a cold reservoir?
2. Why does a refrigerator need work, when heat is just moving from one place to another?
3. A power station runs between steam at 800 K and a river at 290 K. What is the most it could turn into electricity of each joule of heat?
4. Why is the Carnot efficiency higher when the cold reservoir is colder?

## What to hand in

Prelab answers, the table copies with your entropy changes and graphs, the crossing points compared with the Carnot limits, your account of the pairing argument, and answers to the questions. Identify simulated data.
