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
- Uniform air has $$\rho = 1.204$$ kg/m³. Air that thins with height follows the International Standard Atmosphere.
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

**Constants.** $$g = 9.81$$ m/s², $$\rho = 1.204$$ kg/m³ for uniform air. One coffee filter: $$m_1 = 0.86$$ g, top diameter 15.1 cm.

## Before the lab

1. Find the terminal speed of an 85 kg skydiver spread eagle ($$C = 1.0$$, $$A = 0.70$$ m²) in air of 1.204 kg/m³, in m/s and in km/h. How long after the jump is the speed $$0.762\,v_T$$?
2. Find the terminal speed of a 75 kg skydiver head first ($$C = 0.70$$, $$A = 0.18$$ m²). Why does the smaller skydiver fall faster?
3. A skydiver falling head first at nearly 100 m/s suddenly spreads out into the spread eagle position. What happens just after: does the skydiver move upward for a moment, keep falling but more slowly, or keep falling at the same speed?

## Safety

Skydiving is done only with training, approved equipment and a qualified instructor. In the lab, stand on a stable step stool, not a chair, to release the filters, and keep the floor clear under the drop. The simulation has no hazards.

## Procedure

Open the **Lab** fold and tick **Blind: hide predictions and answers** before you start. To take a reading at an exact time, leave the fall paused, use the 1 s step under **Time**, and press the **Step** button beside Jump until the clock shows that time; then press **Record reading** (it works only while paused). Record reading fills $$t$$, $$y$$, $$v$$ and $$a$$; you work out $$v^2$$ and $$D$$. Press **Export to worksheet** after each part, then **Clear** before the next part, so each part gets its own copy of the table.

**Part 1: spread eagle.** Press the **Spread eagle** setup: an 85 kg skydiver jumps spread eagle from 4000 m in uniform air. Record a reading at $$t = 0$$, then every 1 s up to 6 s, then at 8, 10, 12, 20 and 30 s.

**Part 2: head first, then spread eagle.** Press the **Head first** setup: a 75 kg skydiver jumps head first from 4000 m in uniform air. Record a reading at $$t = 0$$, 10, 20 and 30 s. Right after the 30 s reading press the **Spread eagle** button under the picture (not the setup), then record at 32, 34, 36 and 40 s.

**Part 3: coffee filters.** Press the **One coffee filter** setup (released 2.00 m above the motion detector), press **Drop**, and press Record reading after it lands. Set **Filters stacked n** on the Set up card to 2, 4 and 6 in turn, keeping **Release height above the detector** at 2.00 m, and repeat. This series goes into the Coffee filters table.

**Part 4: thin air.** Press the **Thin air, from 10 km** setup: an 85 kg skydiver jumps spread eagle from 10,000 m into air that thins with height. Record a reading every 10 s from $$t = 0$$ to 60 s, and find the highest speed and when it comes from your readings.

## Data

**Falling skydiver.** One copy of this table for each of Parts 1, 2 and 4. $$D = m(g - a)$$ with $$g = 9.81$$ m/s².

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

**Coffee filters.** Part 3, one row for each stack.

| Drop | Filters $$n$$ | $$m$$ (kg) | Release height (m) | $$t$$ at landing (s) | $$v$$ at landing (m/s) | $$v^2$$ (m²/s²) |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |
| | | | | | | |
| | | | | | | |
| | | | | | | |
| | | | | | | |

## Analysis

1. Graph $$v$$ against $$t$$ for Part 1. Read the terminal speed from the level part, and compare it with your answer to Before the lab 1. From the same graph, find the time when $$v = 0.762\,v_T$$ and compare it with $$v_T/g$$.
2. For Part 1, fill in $$v^2$$ and $$D = m(g - a)$$, and graph $$D$$ against $$v^2$$. From the slope, $$\tfrac12\rho CA$$, find $$CA$$ and then $$C$$ with $$A = 0.70$$ m².
3. For Part 3, graph $$v^2$$ against $$n$$. Explain why it should be a straight line through the origin, and say by what factor four filters land faster than one. From the slope, $$2m_1g/(\rho CA)$$, find $$C$$ for a filter, with $$A = \pi(0.0755\text{ m})^2$$.
4. For Part 4, give the highest speed and the altitude where it came (altitude = 10,000 m − $$y$$). Use the densities in the Background to find $$v_T$$ at that altitude, and compare. Explain why the speed then falls.

## Questions

1. J. B. S. Haldane wrote that a mouse dropped down a mine shaft walks away. If an animal is scaled down by 10 in every length, by what factor does its terminal speed change?
2. From your Part 2 readings, compare the 30 s speed with the head first terminal speed you found in Before the lab 2, then give $$v$$ and $$a$$ at 30, 32 and 40 s, and say how $$y$$ changed from 30 to 40 s. Which of the three outcomes in Before the lab 3 does that show, and is it the one you chose? After the change to spread eagle, what sign does $$a$$ have, and what does that say about $$D$$ and $$mg$$? Use $$D = \tfrac12\rho CAv^2$$ to explain why the skydiver slows down but does not move upward, and what speed the fall settles toward.

## Uncertainty

For courses that treat measurement uncertainty. This section is not counted in the 75 minutes; do it when your instructor assigns it.
{: .ws-assigned}

The speed and the acceleration are read to 0.01 m/s and 0.01 m/s², so near terminal speed $$a$$ is only a few hundredths of a m/s² and $$D = m(g - a)$$ is known to about 1 N in 830 N. The model leaves out what makes real measurements hard: a real skydiver's area and shape change as the body moves, the air has winds and gusts, the coffee filters sway and tilt, and the air carried along with a light body adds to its inertia. The drag coefficient itself depends a little on the speed; for coffee filters the drag has been measured to go as $$v^{1.93}$$ rather than $$v^2$$. Give the slope and intercept of the fits in Analysis 2 and 3 with their standard errors, and say whether each intercept is zero within its uncertainty.

## With calculus

For courses that use calculus. This section is not counted in the 75 minutes; do it when your instructor assigns it.

1. With down positive, Newton's second law is $$m\,dv/dt = mg - \tfrac12\rho CAv^2$$, which you can write as $$dv/dt = g\,(1 - v^2/v_T^2)$$. Separate the variables, integrate from $$v = 0$$ at $$t = 0$$ (with partial fractions, or $$\int dv/(1 - v^2/v_T^2) = v_T\tanh^{-1}(v/v_T)$$), and derive $$v = v_T\tanh(gt/v_T)$$.
2. Integrate once more to show that the distance fallen is $$y = (v_T^2/g)\ln\cosh(gt/v_T)$$, and check it against your Part 1 reading at 10 s. For large $$t$$, show that $$y \approx v_Tt - (v_T^2/g)\ln 2$$, check that against your 30 s reading, and say what the distance $$(v_T^2/g)\ln 2$$ means.
3. From your Part 1 readings of $$v$$ at 0, 1, 2, 3, 4, 5 and 6 s, estimate the distance fallen in the first 6 s with the trapezoid rule (the area under the $$v$$ graph, one trapezoid for each second) and compare with your $$y$$ at 6 s. Then estimate $$a$$ at 4 s from your speeds at 3 and 5 s (their difference over 2 s) and compare with your $$a$$ reading at 4 s. Use the shape of the $$v$$ graph to say why each estimate comes out high or low.

## What to hand in

Answers to Before the lab, the Data tables, the graphs with their slopes, your values of $$v_T$$, $$CA$$ and $$C$$ with the comparisons asked for, and answers to the questions (and to Uncertainty and With calculus, if assigned). Identify simulated data.
