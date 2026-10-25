# Terminal Velocity
Student laboratory · Physics I

Textbook: OpenStax *University Physics*, Vol. 1, §6.4 (Drag Force and Terminal Speed). Access for free at https://openstax.org/details/books/university-physics-volume-1.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/terminal-velocity.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Using the demo.**

- A skydiver jumps and falls straight down, shown in 3D (drag to turn the view) or from the side. Arrows show the weight and the drag to the same scale, and streaks show how far the air moves past in 0.05 s. Below the picture a graph shows the speed, the acceleration or the distance fallen against time, with earlier falls in gray.
- During the fall the skydiver can change between spread eagle and head first, and pull the ripcord. The parachute also opens by itself at the pull altitude.
- The Set up card on the picture sets the mass with gear, the exit and pull altitudes, and whether the air is uniform or thins with height. For the coffee filters it sets how many are stacked and the release height above a motion detector.
- The clock is the real time of the fall; faster playback only shortens the wait. Step runs to the next whole step of the clock (1 s or 0.1 s for a skydiver, 0.05 s or 0.01 s for the filters) and stops there.
- Record reading stores the time, the distance fallen, the speed and the acceleration (and the altitude, or the landing for the filters); Export to worksheet sends the readings here. Blind hides the terminal speed, the forces, the drag area and the air density.

**What the demo models.**

- The drag is $$D = \tfrac12\rho CAv^2$$ with constant $$C$$; buoyancy and the air carried along with the body are left out, and $$g = 9.81$$ m/s².
- Skydiver: $$C = 1.0$$, $$A = 0.70$$ m² spread eagle and $$C = 0.70$$, $$A = 0.18$$ m² head first, the textbook's values. A change of position takes 1.0 s.
- Parachute: a round canopy with $$CA = 63.6$$ m²; after the pull the lines stretch for 1.0 s and the canopy fills in 3.0 s. Under it the body hangs upright.
- Uniform air has $$\rho = 1.21$$ kg/m³. Air that thins with height follows the International Standard Atmosphere.
- Coffee filter: 0.86 g, 15.1 cm across the top, $$C = 0.71$$, from measurements on real filters. Nested filters have the same area.
- Readings: $$t$$ to 0.01 s, distances to 0.01 m, $$v$$ to 0.01 m/s, $$a$$ to 0.01 m/s². No noise is added.

</details>

## Goal

Watch a falling body approach its terminal speed, measure how the drag force grows with speed, and find how the terminal speed depends on the mass, the body position and the density of the air.

## Background

A body falling through air feels its weight $$mg$$ down and the drag $$D$$ up, opposite its motion. For a skydiver, a ball or a coffee filter the drag is close to

$$D = \tfrac12 \rho C A v^2,$$

where $$\rho$$ is the density of the air, $$A$$ the area the body presents to the air, and $$C$$ the drag coefficient, a number found by experiment that depends on the shape. With down positive, Newton's second law gives

$$ma = mg - D, \qquad\text{so}\qquad D = m(g - a).$$

At first the speed is small and $$a$$ is close to $$g$$. As $$v$$ grows the drag catches up with the weight, the acceleration falls towards zero, and the speed levels off at the **terminal speed**, where $$D = mg$$:

$$v_T = \sqrt{\frac{2mg}{\rho C A}}.$$

From rest, with $$\rho$$, $$C$$ and $$A$$ fixed, the speed is

$$v = v_T \tanh\!\left(\frac{gt}{v_T}\right).$$

At $$t = v_T/g$$ the speed is $$\tanh 1 = 0.762$$ of $$v_T$$, and it takes about $$2.6\,v_T/g$$ to come within 1% of it.

The density of the air falls with height. In the International Standard Atmosphere it is 1.225 kg/m³ at sea level, then 1.112, 1.006, 0.909, 0.819, 0.736, 0.660, 0.590, 0.525, 0.466 and 0.413 kg/m³ at 1, 2, 3, 4, 5, 6, 7, 8, 9 and 10 km.

**Constants.** $$g = 9.81$$ m/s², $$\rho = 1.21$$ kg/m³ for uniform air. One coffee filter: $$m_1 = 0.86$$ g, top diameter 15.1 cm.

## Before the lab

1. Find the terminal speed of an 85 kg skydiver spread eagle ($$C = 1.0$$, $$A = 0.70$$ m²) in air of 1.21 kg/m³, in m/s and in km/h. How long after the jump is the speed $$0.762\,v_T$$?
2. Find the terminal speed of a 75 kg skydiver head first ($$C = 0.70$$, $$A = 0.18$$ m²). Why does the smaller skydiver fall faster?
3. Sketch the graphs of $$v$$ and $$a$$ against $$t$$ for a jump from rest. What is $$a$$ at the start and at terminal speed?
4. Four nested coffee filters have four times the weight of one and the same area. By what factor is their terminal speed larger?

## Safety

Skydiving is done only with training, approved equipment and a qualified instructor. In the lab, stand on a stable step stool, not a chair, to release the filters, and keep the floor clear under the drop. The simulation has no hazards.

## Procedure

Turn Blind on before you start. Send the readings of each part to the worksheet, then clear them before the next part, so each part gets its own copy of the table.

**Part 1: spread eagle.** An 85 kg skydiver jumps spread eagle from 4000 m in uniform air. Record a reading at $$t = 0$$, then every 1 s up to 15 s, then at 20 s and 30 s.

**Part 2: head first, then spread eagle.** A 75 kg skydiver jumps head first from 4000 m in uniform air. Record a reading every 2 s from $$t = 0$$ to 30 s. Right after the 30 s reading change to spread eagle, then record at 32, 33, 34, 35, 36, 38 and 40 s.

**Part 3: the parachute.** An 85 kg skydiver jumps spread eagle from 2000 m in uniform air and the canopy opens by itself at 1500 m. Record a reading every 0.1 s from 15.0 s to 17.0 s, then at 18, 20 and 30 s.

**Part 4: coffee filters.** Drop one filter from 2.00 m above the motion detector and record the reading after it lands. Repeat with 2, 3, 4, 5 and 6 nested filters.

**Part 5: thin air.** An 85 kg skydiver jumps spread eagle from 10 000 m into air that thins with height. Record a reading every 5 s from $$t = 0$$ to 60 s, and find the highest speed and when it comes.

## Data

**Falling skydiver.** One copy of this table for each of Parts 1, 2, 3 and 5. $$D = m(g - a)$$ with $$g = 9.81$$ m/s².

| Reading | Body | $$m$$ (kg) | $$t$$ (s) | Fallen $$y$$ (m) | $$v$$ (m/s) | $$a$$ (m/s²) | $$v^2$$ (m²/s²) | Drag $$D$$ (N) |
|---|---|---|---|---|---|---|---|---|
| | | | | | | | | |
| | | | | | | | | |
| | | | | | | | | |
| | | | | | | | | |
| | | | | | | | | |
| | | | | | | | | |
| | | | | | | | | |
| | | | | | | | | |

**Coffee filters.** Part 4, one row for each stack.

| Drop | Filters $$n$$ | $$m$$ (kg) | Release height (m) | $$t$$ at landing (s) | $$v$$ at landing (m/s) | $$v^2$$ (m²/s²) |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |
| | | | | | | |
| | | | | | | |
| | | | | | | |
| | | | | | | |

## Analysis

1. Graph $$v$$ against $$t$$ for Part 1. Read the terminal speed from the level part, and compare it with your answer to Before the lab 1.
2. From the Part 1 graph, find the time when $$v = 0.762\,v_T$$ and compare it with $$v_T/g$$.
3. For Part 1, fill in $$v^2$$ and $$D = m(g - a)$$, and graph $$D$$ against $$v^2$$. From the slope, $$\tfrac12\rho CA$$, find $$CA$$ and then $$C$$ with $$A = 0.70$$ m².
4. Read the head first terminal speed from Part 2 and find its ratio to the Part 1 value. Compare it with $$\sqrt{(m_2/m_1)(C_1A_1)/(C_2A_2)}$$. After the change to spread eagle, what sign does $$a$$ have, and what does that say about $$D$$ and $$mg$$? Graph $$D$$ against $$v^2$$ for the rows from 32 s on and find $$CA$$.
5. For Part 3, find the steady speed under the canopy and from it the drag area $$CA$$ of the canopy and the body. Find the largest deceleration in your readings, in m/s² and in multiples of $$g$$.
6. For Part 4, graph $$v^2$$ against $$n$$. Explain why it should be a straight line through the origin, and from the slope, $$2m_1g/(\rho CA)$$, find $$C$$ for a filter, with $$A = \pi(0.0755\text{ m})^2$$.
7. For Part 5, give the highest speed and the altitude where it came (altitude = 10 000 m − $$y$$). Use the densities in the Background to find $$v_T$$ at that altitude, and compare. Explain why the speed then falls.

## Uncertainty

The speed and the acceleration are read to 0.01 m/s and 0.01 m/s², so near terminal speed $$a$$ is only a few hundredths of a m/s² and $$D = m(g - a)$$ is known to about 1 N in 830 N. The model leaves out what makes real measurements hard: a real skydiver's area and shape change as the body moves, the air has winds and gusts, the coffee filters sway and tilt, and the air carried along with a light body adds to its inertia. The drag coefficient itself depends a little on the speed; for coffee filters the drag has been measured to go as $$v^{1.93}$$ rather than $$v^2$$.

## Questions

1. At terminal speed, is there any force on the skydiver? Explain using Newton's second law.
2. The textbook asks for the terminal speed of a 50 kg skydiver spread eagle. Find it, and check it with the demo.
3. When the parachute opens, the skydiver slows down. Does the skydiver move upward? What does the acceleration point at, and why does the drag become larger than the weight for a few seconds?
4. Landing under the canopy at the speed of Part 3 is like jumping off a wall. How high a wall?
5. J. B. S. Haldane wrote that a mouse dropped down a mine shaft walks away. If an animal is scaled down by 10 in every length, by what factor does its terminal speed change?
6. One filter is dropped from 0.50 m. Does it reach its terminal speed before landing? Use the demo to check your answer.

## What to hand in

Answers to Before the lab, the Data tables, the graphs with their slopes, your values of $$v_T$$, $$CA$$ and $$C$$ with the comparisons asked for, and answers to the questions. Identify simulated data.
