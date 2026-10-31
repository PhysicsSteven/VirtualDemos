# Van de Graaff Generator
Student laboratory · Physics II

Textbook: OpenStax *University Physics*, Vol. 2, §7.6 (and §7.3, §8.1, §8.3). Access for free at https://openstax.org/details/books/university-physics-volume-2.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/electrostatics-at-work.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Machines in the demo:** Van de Graaff generator; Ink jet printer; Smoke precipitator; Shuffle and spark. This worksheet uses the generator and, in Part 4, Shuffle and spark.

**Using the demo.** A rubber belt carries charge up into a hollow metal dome. The Set up card sets the dome radius $$R$$ (5 to 50 cm) and the belt current $$I$$ (0.5 to 50 μA); it fades while the motor runs. Start the motor and the dome charges until a spark jumps; the readouts count the sparks since the motor started and show how long it has run. Touch with the grounded wand empties the dome at once. Pick up the wand (the card at the top of the picture) to hold it by hand: drag its brass ball anywhere near the dome, in the flat picture or in 3D (arrow keys move it 1 mm, Shift 1 cm). The ball takes on an opposite charge, the dome's charge crowds toward it, electrons run up or down the earth lead as blue dots, a close up shades the air in the gap by how near it is to breaking down, and the spark comes sooner the closer the ball is. Touching grounds the dome. Hang it up again and the dome is on its own. This worksheet's procedure is done with the wand hung up. Graphs show the dome voltage against time and the field against distance from the center (with the wand in hand, the field along the line to its ball). Blind hides the charge, the voltage, the surface field, the highest voltage, the time to spark and the numbers on the graphs.

**What the demo models.** The dome is an isolated conducting sphere far from everything else, so $$C = 4\pi\varepsilon_0 R$$, $$V = kQ/R$$ and the field at its surface is $$V/R$$. The belt delivers a constant current and no charge leaks away until the surface field reaches 3.0 MV/m, the breakdown field of dry air at 1 atm (approximate: damp air, dust and a rough surface spark sooner). A spark empties the dome completely; a real one leaves a little charge. With the wand in hand, its ball (radius 3.0 cm, grounded) is part of the calculation: two conducting spheres, solved exactly with Kelvin image charges on the line between their centers at every position (the wand's rod, handle and lead are left out). Air breaks down where the field first reaches 3.0 MV/m, on the dome or on the ball. That rule is a good guide for a gap no wider than about the ball's radius; across a wider gap a real discharge starts as a corona glow at the ball and the voltage can climb further before a spark jumps, so the breakdown voltage shown there is a lower limit. A gap under 0.5 mm counts as touching. Simulated data.

**Shuffle and spark.** A person in rubber soles or wool socks shuffles across a wool or fur rug, then reaches for a grounded doorknob. Rubbing moves electrons between the soles and the rug (the triboelectric order fur, glass, wool, silk, hard rubber, Teflon; OpenStax Vol. 2, §5.1); each step closes 12% of the way to the limit the soles can hold, times how far apart the two materials sit in that order (a stated model, not measured data). The limit is set by air's breakdown just outside the soles, $$\varepsilon_0E_bA$$ with $$A = 2\times250\ \text{cm}^2$$: 1.33 μC. The body is 100 pF to ground (the human body model, ANSI/ESDA/JEDEC JS-001), so $$V = Q/C$$. The spark jumps when the voltage reaches the breakdown voltage of the air gap, from Schumann's fit for a uniform field at 1 atm, $$V_b = 6.72\sqrt{pd} + 24.36\,pd$$ kV ($$p$$ in bar, $$d$$ in cm); below 0.1 mm (about 0.9 kV) the hand touches the knob without a visible spark. A reading is of the last spark: the steps shuffled since the body was last discharged, the body's voltage, the gap, the spark's energy $$\tfrac12CV^2$$ and $$V_b$$ for that gap; a series of them goes to the Spark table.

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

**Part 4: shuffle and spark.** In Shuffle and spark, with rubber soles on the wool rug, shuffle 1 step and reach for the doorknob: write what happens in the notes. Then, each time from a discharged body, shuffle 2, 3, 5, 10, 20 and 40 steps, reach for the doorknob, and record the spark. Then switch to the fur rug and record after 10 and after 40 steps. Last, try wool socks on the wool rug and write what happens in the notes. Send this series; it goes to the Spark table.

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

**Spark.** Part 4. Work out the last column.

| Trial | Feet | Rug | Steps | Body voltage $$V$$ (kV) | Spark gap $$d$$ (mm) | Spark energy (mJ) | Breakdown voltage from the fit (kV) | Average field in the gap $$V/d$$ (kV/cm) |
|---|---|---|---|---|---|---|---|---|
| | | | | | | | | |
| | | | | | | | | |
| | | | | | | | | |

## Analysis

1. Graph the highest voltage against $$R$$ for Part 1. From the slope, find the breakdown field the model uses. Graph $$C$$ against $$R$$ and find $$4\pi\varepsilon_0$$ from the slope.
2. For Part 1, how does the time to spark depend on $$R$$? Check by graphing it against $$R^2$$. How does the spark energy depend on $$R$$?
3. For Part 2, graph the time to spark against $$1/I$$. What is the slope, and what does it mean?
4. For Part 3, find the time per spark from your counts, and compare it with $$Q_{\max}/I$$ worked out from the dome's size and belt current. Why does the count give a time a little longer than one charging time per spark?
5. For Part 4, graph the size of the body voltage against the spark gap. Is it a straight line through the origin? Fill in the size of $$V/d$$ and compare it with the 30 kV/cm usually quoted for air (3.0 MV/m, the value the dome model uses): why is a short gap harder to break down, per centimeter, than a long one? What sign is the body's charge with rubber soles, and why? Explain why the voltage levels off after many steps, and why rubber soles on wool charge the body while wool socks on wool do not. For the largest spark, compare the energy with the dome's spark energy in Part 1.

## Uncertainty

The model is exact, so Parts 1 and 2 have no scatter. In Part 3 the count is a whole number and the run starts with an empty dome, so the time per spark from a count over 20 s is uncertain by up to one spark in the count. On a real generator, the breakdown field depends on humidity, pressure and the smoothness of the dome; charge leaks away through damp air and the column, so the dome may never reach $$E_b R$$; and the dome is not far from other objects, which changes its capacitance.

## Questions

1. Why is a Van de Graaff dome made smooth and round, with no sharp points?
2. Why can the belt keep adding charge to a dome that is already at hundreds of kilovolts?
3. A person standing on an insulating stool touches the dome while it charges. Why does their hair stand on end?
4. Why does a Van de Graaff generator work poorly on a humid day?

## What to hand in

Prelab answers, a Data table copy for each part, the graphs and fits, your breakdown field, $$\varepsilon_0$$ and time per spark, the Spark table with its graph, and answers to the questions. Identify simulated data.
