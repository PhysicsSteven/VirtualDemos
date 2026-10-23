# Van de Graaff Generator
Student laboratory · Physics II

Textbook: OpenStax *University Physics*, Vol. 2, §7.6 (and §7.3, §8.2). Access for free at https://openstax.org/details/books/university-physics-volume-2.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/electrostatics-at-work.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Machines in the demo:** Van de Graaff generator; Ink jet printer; Smoke precipitator. This worksheet uses the generator.

**Using the demo.** A rubber belt carries charge up into a hollow metal dome. The Set up card sets the dome radius $$R$$ (5 to 50 cm) and the belt current $$I$$ (0.5 to 50 μA); it fades while the motor runs. Start the motor and the dome charges until a spark jumps; the readouts count the sparks since the motor started and show how long it has run. The grounded wand empties the dome. Graphs show the dome voltage against time and the field against distance from the centre. Blind hides the charge, the voltage, the surface field, the highest voltage, the time to spark and the numbers on the graphs.

**What the demo models.** The dome is an isolated conducting sphere far from everything else, so $$C = 4\pi\varepsilon_0 R$$, $$V = kQ/R$$ and the field at its surface is $$V/R$$. The belt delivers a constant current and no charge leaks away until the surface field reaches 3.0 MV/m, the breakdown field of dry air at 1 atm (approximate: damp air, dust and a rough surface spark sooner). A spark empties the dome completely; a real one leaves a little charge. Simulated data.

</details>

## Goal

Find how the highest voltage of a Van de Graaff generator, and the time it takes to reach it, depend on the size of its dome and the current its belt delivers.

## Background

Charge put on a conductor moves to its outside surface, so the belt can keep carrying charge into the hollow dome, where the field is zero. A sphere of radius $$R$$ holding charge $$Q$$ is at the potential $$V = kQ/R$$, with $$k = 1/(4\pi\varepsilon_0)$$, so its capacitance is

$$C = \frac{Q}{V} = 4\pi\varepsilon_0 R.$$

The field just outside the surface is $$E = kQ/R^2 = V/R$$. When it reaches the breakdown field of air, $$E_b \approx 3.0\ \mathrm{MV/m}$$, the air conducts and a spark jumps. The highest voltage and charge are therefore

$$V_{\max} = E_b R,\qquad Q_{\max} = 4\pi\varepsilon_0 R^2 E_b.$$

A belt current $$I$$ brings the dome from zero to $$Q_{\max}$$ in $$t = Q_{\max}/I$$, and each spark releases the stored energy $$U = \tfrac12 Q_{\max}V_{\max}$$.

## Before the lab

1. Find $$C$$, $$V_{\max}$$ and $$Q_{\max}$$ for a dome of radius 15 cm.
2. With a belt current of 2.0 μA, how long does that dome take to charge from zero to a spark? How many sparks would you count in a minute?
3. How do $$V_{\max}$$, $$Q_{\max}$$, the charging time and the spark energy change if $$R$$ is doubled at the same belt current?
4. Why can a small dome never reach a very high voltage, however long the belt runs?

## Safety

A real Van de Graaff generator can give a painful shock and can damage electronics. Keep phones, laptops and pacemaker wearers away, discharge the dome with the grounded wand before touching it, and do not touch anyone standing near it.

## Procedure

**Part 1: dome size.** With a belt current of 10 μA, record the highest voltage, the time to spark and the spark energy for domes of radius 5, 10, 20, 30, 40 and 50 cm.

**Part 2: belt current.** With a 20 cm dome, record the same at belt currents of 2, 5, 10, 20 and 50 μA.

**Part 3: counting sparks.** Turn Blind on. With a 10 cm dome at 5 μA, then 10 μA, then a 15 cm dome at 10 μA, run the motor for at least 20 s and record how many sparks it made and how long it ran.

**Using the virtual apparatus.** The dome radius and belt current are set while the motor is off. The spark count and the running time start again each time the motor starts. Send each part to the worksheet before clearing, so each part gets its own copy of the Data table.

## Data

| Trial | Dome radius $$R$$ (cm) | Belt current $$I$$ (μA) | Capacitance $$C$$ (pF) | Highest voltage (kV) | Time to spark (s) | Spark energy (J) | Sparks counted | Running time (s) |
|---|---|---|---|---|---|---|---|---|
| | | | | | | | | |
| | | | | | | | | |
| | | | | | | | | |
| | | | | | | | | |
| | | | | | | | | |
| | | | | | | | | |

## Analysis

1. Graph the highest voltage against $$R$$ for Part 1. From the slope, find the breakdown field the model uses. Graph $$C$$ against $$R$$ and find $$4\pi\varepsilon_0$$ from the slope.
2. For Part 1, how does the time to spark depend on $$R$$? Check by graphing it against $$R^2$$. How does the spark energy depend on $$R$$?
3. For Part 2, graph the time to spark against $$1/I$$. What is the slope, and what does it mean?
4. For Part 3, find the time per spark from your counts, and compare it with $$Q_{\max}/I$$ worked out from the dome's size and belt current. Why does the count give a time a little longer than one charging time per spark?

## Uncertainty

The model is exact, so Parts 1 and 2 have no scatter. In Part 3 the count is a whole number and the run starts with an empty dome, so the time per spark from a count over 20 s is uncertain by up to one spark in the count. On a real generator, the breakdown field depends on humidity, pressure and the smoothness of the dome; charge leaks away through damp air and the column, so the dome may never reach $$E_b R$$; and the dome is not far from other objects, which changes its capacitance.

## Questions

1. Why is a Van de Graaff dome made smooth and round, with no sharp points?
2. Why can the belt keep adding charge to a dome that is already at hundreds of kilovolts?
3. A person standing on an insulating stool touches the dome while it charges. Why does their hair stand on end?
4. Why does a Van de Graaff generator work poorly on a humid day?

## What to hand in

Prelab answers, a Data table copy for each part, the graphs and fits, your breakdown field, $$\varepsilon_0$$ and time per spark, and answers to the questions. Identify simulated data.
