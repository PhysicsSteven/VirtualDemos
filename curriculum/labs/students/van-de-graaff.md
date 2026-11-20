# Van de Graaff Generator
Student laboratory · Physics II

Textbook: OpenStax *University Physics*, Vol. 2, §7.6 (and §7.3, §8.1, §8.3). Access for free at https://openstax.org/details/books/university-physics-volume-2.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/electrostatics-at-work.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Machines in the demo:** Van de Graaff generator; Ink jet printer; Smoke precipitator; Shuffle and spark. This worksheet uses the generator.

**Using the demo.** A rubber belt carries charge up into a hollow metal dome. The Set up card sets the dome radius $$R$$ (5 to 50 cm) and the belt current $$I$$ (0.5 to 50 μA); it fades while the motor runs. Start the motor and the dome charges until a spark jumps; the readouts count the sparks since the motor started and show how long it has run. Touch with the grounded wand empties the dome at once. Pick up the wand (the card at the top of the picture) to hold it by hand: drag its brass ball anywhere near the dome, in the flat picture or in 3D (arrow keys move it 1 mm, Shift 1 cm). The ball takes on an opposite charge, the dome's charge crowds toward it, electrons run up or down the earth lead as blue dots, a close up shades the air in the gap by how near it is to breaking down, and the spark comes sooner the closer the ball is. Touching grounds the dome. Hang it up again and the dome is on its own. This worksheet's procedure is done with the wand hung up. Graphs show the dome voltage against time and the field against distance from the center (with the wand in hand, the field along the line to its ball). Blind hides the charge, the voltage, the surface field, the highest voltage, the time to spark and the numbers on the graphs.

**What the demo models.** The dome is an isolated conducting sphere far from everything else, so $$C = 4\pi\varepsilon_0 R$$, $$V = kQ/R$$ and the field at its surface is $$V/R$$. The belt delivers a constant current and no charge leaks away until the surface field reaches 3.0 MV/m, the breakdown field of dry air at 1 atm (approximate: damp air, dust and a rough surface spark sooner). A spark empties the dome completely; a real one leaves a little charge. With the wand in hand, its ball (radius 3.0 cm, grounded) is part of the calculation: two conducting spheres, solved exactly with Kelvin image charges on the line between their centers at every position (the wand's rod, handle and lead are left out). Air breaks down where the field first reaches 3.0 MV/m, on the dome or on the ball. That rule is a good guide for a gap no wider than about the ball's radius; across a wider gap a real discharge starts as a corona glow at the ball and the voltage can climb further before a spark jumps, so the breakdown voltage shown there is a lower limit. A gap under 0.5 mm counts as touching. Simulated data.

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
5. What if the dome stays at 20 cm and the belt current goes up from 2 μA to 50 μA, so the belt carries charge to the dome 25 times as fast? Does the highest voltage the dome reaches before it sparks go up, go down or stay the same? Why?

## Safety

A real Van de Graaff generator can give a painful shock and can damage electronics. Keep phones, laptops and pacemaker wearers away, discharge the dome with the grounded wand before touching it, and do not touch anyone standing near it.

## Procedure

**Part 1: dome size.** Use the Set up the generator card on the picture (motor stopped): set the Belt current I slider to 10 μA, and for domes of radius 5, 10, 20, 30, 40 and 50 cm on the Dome radius R slider press Record reading. Each reading stores the capacitance, highest voltage, time to spark and spark energy for those settings, so the motor need not run. Press Export to worksheet, then Clear.

**Part 2: belt current.** With a 20 cm dome, record the same at belt currents of 2, 5, 10, 20 and 50 μA. Export, then Clear.

**Part 3: counting sparks.** Tick Blind: hide predictions and answers (Lab fold, at the bottom of the side panel). For each of a 10 cm dome at 5 μA, then 10 μA, then a 15 cm dome at 10 μA: press Start motor (Generator section), let it run until the Motor running for readout passes 20 s, press Stop motor, then press Record reading, which stores the sparks counted and the running time.

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

1. Graph the highest voltage (vertical) against $$R$$ in meters (horizontal) for Part 1 and fit a straight line. From the slope, find the breakdown field the model uses. Graph $$C$$ (vertical) against $$R$$ (horizontal) and find $$4\pi\varepsilon_0$$ from the slope.
2. For Part 1, how does the time to spark depend on $$R$$? Check by graphing it against $$R^2$$. How does the spark energy depend on $$R$$?
3. For Part 2, graph the time to spark (vertical) against $$1/I$$ (horizontal). What is the slope, and what does it mean?
4. For Part 3, find the time per spark from your counts, and compare it with $$Q_{\max}/I$$ worked out from the dome's size and belt current. Why does the count give a time a little longer than one charging time per spark?

## Questions

1. Why can the belt keep adding charge to a dome that is already at hundreds of kilovolts?
2. A person standing on an insulating stool touches the dome while it charges. Why does their hair stand on end?
3. Set the 2 μA row of Part 2 beside the 50 μA row. What happened to the highest voltage and to the time to spark, and how does that fit your answer to Before the lab 5? Use the breakdown field of air to explain what the belt current changes and what it does not.

## Uncertainty

For courses that treat measurement uncertainty. This section is not counted in the 75 minutes; do it when your instructor assigns it.
{: .ws-assigned}

The model is exact, so Parts 1 and 2 have no scatter. In Part 3 the count is a whole number and the run starts with an empty dome, so the time per spark from a count over 20 s is uncertain by up to one spark in the count. On a real generator, the breakdown field depends on humidity, pressure and the smoothness of the dome; charge leaks away through damp air and the column, so the dome may never reach $$E_b R$$; and the dome is not far from other objects, which changes its capacitance.

## What to hand in

Prelab answers, a Data table copy for each part, the graphs and fits, your breakdown field, $$\varepsilon_0$$ and time per spark, and answers to the questions (and to Uncertainty, if assigned). Identify simulated data.
