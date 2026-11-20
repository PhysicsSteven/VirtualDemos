# Energy on a Track: Height, Speed and Friction
Student worksheet · High school Physics and College Physics 2e

Textbook: OpenStax *Physics* (high school), §§9.1–9.2, and OpenStax *College Physics 2e*, §§7.2–7.6. Access for free at https://openstax.org/details/books/physics and https://openstax.org/details/books/college-physics-2e.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/energy-track.html?ws=hs-energy-skate)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups used here:** Valley, Valley with friction and Loop, under Setups.

**Using the demo.**

- **Play** lets the skater go from its starting point, and the same button then reads **Pause**. **Return skater** puts the skater back at its start. The buttons ¼×, ½× and 1× above the picture set the speed of the playback; ¼× makes it easy to pause where you want.
- The readouts give the skater's Speed v and Height y above the ground, the kinetic, potential and thermal energies with their total, and the Normal force N, the push of the track on the skater, as a multiple of the skater's weight mg.
- To move the starting point, click the picture, then press the right arrow key to move the start 1 % of the track's length to the right, or the left arrow key to move it left. Hold Shift for 5 % steps. You can also drag the skater.
- **Skater mass m** and **Friction μ** are sliders in the box on the picture, shown while the skater is at its start.

**What the demo models.** The skater is a point that slides on the track, with no air drag. The potential energy is measured from the ground, $$U = mgy$$, with $$g$$ = 9.81 m/s². Friction turns kinetic energy into thermal energy: $$E_\mathrm{th}$$ grows by $$\mu N$$ for every meter slid.

</details>

## Goal

Find how a skater's speed depends on the height it has dropped, test whether a heavier skater goes faster, track where the energy goes when there is friction, and find how high a skater must start to make it round a loop.

## Background

A skater of mass $$m$$ at height $$y$$ has **gravitational potential energy** $$U = mgy$$; moving at speed $$v$$, it has **kinetic energy** $$K = \tfrac12 mv^2$$. On a track with no friction, the track pushes at right angles to the motion and does no work, so the **mechanical energy** $$K + U$$ stays the same. A skater let go from rest at height $$y_0$$ has, at any lower height $$y$$,

$$\tfrac12 mv^2 = mg(y_0 - y), \qquad\text{so}\qquad v^2 = 2g(y_0 - y).$$

The mass cancels. A graph of $$v^2$$ against the drop $$y_0 - y$$ is a straight line through the origin with slope $$2g$$.

**Friction** turns some of the kinetic energy into **thermal energy** $$E_\mathrm{th}$$ (the track and the wheels warm up). The total $$K + U + E_\mathrm{th}$$ still stays the same, so the skater can no longer climb back to its starting height. If it turns around at height $$y_1$$, the thermal energy made so far is $$E_\mathrm{th} = mg(y_0 - y_1)$$.

**A loop.** At the top of a loop the skater moves in a circle of radius $$R$$, upside down. The track can push but not pull. Gravity alone gives a centripetal acceleration $$g$$, so if $$v^2/R$$ is less than $$g$$ the skater falls away from the track. The slowest speed that stays on is $$v_\mathrm{top}^2 = gR$$. From energy, the skater must start at least $$R/2$$ above the top of the loop:

$$y_0 - y_\mathrm{top} = \frac{v_\mathrm{top}^2}{2g} = \frac{R}{2}.$$

When the skater moves faster than that, the track pushes down too, and at the top $$v^2/R = g + N/m$$. Writing $$N$$ as a multiple of $$mg$$, as the demo does, $$R = \dfrac{v^2}{g(1 + N/mg)}$$.

## Before the lab

1. A 60 kg skater starts from rest 5.0 m above the ground. Find its potential energy at the start. What is its speed when it is 1.0 m above the ground (no friction)?
2. The same skater, with friction, turns around at a height of 3.9 m. How much thermal energy has friction made?
3. A loop has a radius of 0.80 m at its top, and the top is 4.1 m above the ground. Find the slowest speed at the top that keeps the skater on the track, and the lowest starting height that gets the skater round.
4. Two skaters, one of 60 kg and one of 120 kg, start from rest at the same height on the same track with no friction. At the bottom of the valley, will the heavier skater be faster, slower, or the same speed? Write your guess and the reason for it before you open the demo.

## Safety

No hazards in the virtual lab. At a real skate park, wear a helmet and pads.

## Procedure

The link at the top opens the Energy on a Track demo on its Valley setup. Press **¼×** above the picture and keep it for the whole worksheet. This demo has no Record reading button: type your readings into the tables below.

**Part 1: speed and height.** In the Lab fold, tick **Blind: hide the energies**. Before you press Play, write down the skater's starting height $$y_0$$ from the Height y readout. Press **Play**, then **Pause** at some point on the way down, and write down the Height y and Speed v. Press Play again and pause at another point. Take 7 readings spread over the first trip down the valley and up the other side, including one as close to the bottom as you can manage (Height y smallest). Fill in $$v^2$$ and the drop $$y_0 - y$$.

**Part 2: a heavier skater.** Press **Return skater**. Write down the Speed v as close to the bottom as you can for the 60 kg skater (or use your Part 1 reading at the bottom). Then move **Skater mass m** to 120 kg, press Play and pause as close to the bottom as you can; write down Height y and Speed v. Compare with your guess in Before the lab 4. Then set the mass back to 60 kg.

**Part 3: friction.** Untick Blind, so the energies show. Press **Valley with friction** under Setups (μ = 0.08). Write down the starting height and the energy readouts at the start. Press Play and pause each time the skater turns around (Speed v close to 0), for the first three turns. At each turn, write down Height y and the Kinetic, Potential, Thermal and Total energy readouts.

**Part 4: the loop.** Press **Loop** under Setups. Write down the starting height. Press Play and pause when the skater is as close to the very top of the loop as you can (Height y largest; if you miss, press Return skater and try again). Write down Height y, Speed v and the Normal force N (as a multiple of mg). Then press Return skater, click the picture, and press the right arrow key once to start the skater a little lower. Press Play and watch whether the skater makes it round the loop or leaves the track and falls. Press Return skater and repeat, one arrow press lower each time, until it fails. Write down the starting height of the lowest start that made it round and of the first start that failed.

## Data

**Table 1: speed and height (Parts 1 and 2).** Starting height $$y_0$$ = ______ m.

| Reading | Mass $$m$$ (kg) | Height $$y$$ (m) | Speed $$v$$ (m/s) | $$v^2$$ (m²/s²) | Drop $$y_0 - y$$ (m) |
|---|---|---|---|---|---|
| | | | | | |
| | | | | | |
| | | | | | |

**Table 2: friction (Part 3).**

| Moment | Height $$y$$ (m) | Kinetic $$K$$ (J) | Potential $$U$$ (J) | Thermal $$E_\mathrm{th}$$ (J) | Total (J) | $$mg(y_0 - y)$$ (J) |
|---|---|---|---|---|---|---|
| Start | | | | | | |
| Turn 1 | | | | | | |
| Turn 2 | | | | | | |
| Turn 3 | | | | | | |

**Table 3: the loop (Part 4).**

| Run | Starting height $$y_0$$ (m) | Height at the top $$y_\mathrm{top}$$ (m) | Speed at the top $$v$$ (m/s) | Normal force $$N$$ (multiple of mg) | Made it round? |
|---|---|---|---|---|---|
| Loop setup | | | | | |
| Lowest that made it | | | | | |
| First that failed | | | | | |

## Analysis

1. Make a graph of $$v^2$$ (vertical) against the drop $$y_0 - y$$ (horizontal) for the 60 kg readings of Table 1. Find the slope and compare it with $$2g$$ = 19.62 m/s².
2. Use your graph to predict the speed at the bottom of the valley. Compare it with the speeds you read near the bottom for the 60 kg and 120 kg skaters.
3. For each row of Table 2, compare the thermal energy readout with $$mg(y_0 - y)$$, and check that $$K + U + E_\mathrm{th}$$ equals the total at the start.
4. Each turn of Table 2 comes lower than the one before. Find the drop in turning height from the start to turn 1, from turn 1 to turn 2, and from turn 2 to turn 3. Do the drops grow or shrink? Suggest why, thinking about how far the skater slides between turns.
5. From the Loop setup row of Table 3, find the radius of the track at the top, $$R = v^2/[g(1 + N/mg)]$$. Then predict the lowest starting height that gets round, $$y_\mathrm{top} + R/2$$. Does it lie between your lowest start that made it and your first start that failed?

## Questions

1. Look back at your guess in Before the lab 4. What speeds did the 60 kg and 120 kg skaters have near the bottom? Use $$mg(y_0 - y) = \tfrac12 mv^2$$ to explain why the mass does not matter, even though the heavier skater has twice the potential energy.
2. A roller coaster designer wants a car to make it round a loop with a top radius of 5.0 m. How far above the top of the loop must the car start if there is no friction? Why would a real designer start it higher than that?

## Uncertainty

For courses that treat measurement uncertainty. This section is not counted in the 75 minutes; do it when your instructor assigns it.
{: .ws-assigned}

The demo gives heights and speeds to 0.01 m and 0.01 m/s, so $$v^2$$ is good to about 0.1 %, and your slope in Analysis 1 should come within a few tenths of a percent of $$2g$$. In Part 4 each arrow press moves the start by 1 % of the track, about 0.25 m in height, so your bracket for the lowest start is about that wide. Pausing just off the top of the loop changes the speed and normal force you read: try it twice and see how much your $$R$$ changes.

## What to hand in

Prelab answers, the three tables with the calculated columns filled in, the graph of Analysis 1, the calculations of Analysis 5, and answers to the questions (and to Uncertainty, if assigned). Identify simulated data.
