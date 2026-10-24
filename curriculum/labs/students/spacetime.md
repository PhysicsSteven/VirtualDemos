# Spacetime Diagrams and the Lorentz Transformation
Student laboratory · Modern Physics

Textbook: OpenStax *University Physics*, Vol. 3, §§5.1 to 5.5. Access for free at https://openstax.org/details/books/university-physics-volume-3.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/spacetime.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Light cone basics; Relativity of simultaneity; Time dilation; Length contraction; Twin paradox; Causality.

**Using the demo.**

- The diagram has time going up and position going across, in one space dimension. Time is drawn as $$ct$$ in light years (ly) and position $$x$$ in light years, so light travels along the 45° lines and one year of time is one light year up the diagram.
- Frame S is drawn in blue. A second observer, S′, moves along $$x$$ at speed $$v = \beta c$$, set from −0.95 to 0.95 in steps of 0.01; its axes are drawn in red. "Moving frame's view" redraws the diagram in S′.
- Click empty space to add an event; it snaps to a grid of 0.25 ly in the frame drawn. Drag an event to move it. The readouts give the last event you selected in S, $$(ct, x)$$, to 0.01 ly, and in S′, $$(ct', x')$$, to 0.001 ly. All coordinates come from the exact Lorentz transformation.
- Worldlines can be switched on for a home clock at rest in S, a rocket at rest in S′, a traveling twin and a rod at rest in S′. Ticks on a worldline mark each year on that clock.
- Record reading stores the selected event, $$\beta$$, and its coordinates in both frames. Export to worksheet sends the readings to the Data table below; Clear (under Readings) starts a new series, which goes into a new copy of the table.
- Blind (under Moving observer S′) hides $$\gamma$$, the interval $$s^2$$, the type of separation and the proper time, the clock, twin and rod results, and the rod length in S on the diagram.

</details>

## Goal

Use the Lorentz transformation to find the coordinates of events in a moving frame, and show from your measurements that the spacetime interval is the same in every frame, that moving clocks run slow, that simultaneity depends on the frame, and that moving rods are short.

## Background

Einstein's two postulates (§5.1) say the laws of physics, and the speed of light $$c$$, are the same for every inertial observer. The Lorentz transformation (§5.5) follows from them. For a frame S′ moving at $$v = \beta c$$ along $$x$$,

$$ct' = \gamma\,(ct - \beta x), \qquad x' = \gamma\,(x - \beta\, ct), \qquad \gamma = \frac{1}{\sqrt{1 - \beta^2}}.$$

Two observers disagree about the time and the place of an event, but they agree on the spacetime interval from the origin,

$$s^2 = (ct)^2 - x^2 = (ct')^2 - (x')^2 .$$

So for one event seen from frames at many speeds, a graph of $$(ct')^2$$ against $$(x')^2$$ is a straight line of slope 1 whose intercept is $$s^2$$. If $$s^2 > 0$$ the separation is timelike, and $$\sqrt{s^2}/c$$ is the proper time read by a clock that moves at constant velocity from the origin to the event (any other path reads less, as the twins show). If $$s^2 < 0$$ it is spacelike, and $$\sqrt{-s^2}$$ is the distance between the events in the frame where they are simultaneous.

A clock at rest in S that reads $$t$$ is read at time $$t' = \gamma t$$ in S′ (time dilation, §5.3). A rod of proper length $$L_0$$ moving along its length measures $$L = L_0/\gamma$$ (length contraction, §5.4). Events simultaneous in S are not simultaneous in S′ unless they are at the same place (§5.2).

## Before the lab

1. Find $$\gamma$$ for $$\beta = 0.6$$ and $$\beta = 0.8$$.
2. Event E is at $$(ct, x) = (10\ \text{ly}, 0)$$: a clock at rest at the origin of S reads 10 years. Find $$ct'$$ and $$x'$$ for $$\beta = 0.6$$. Which clock runs slow according to S′?
3. Events O at $$(0, 0)$$ and B at $$(0, 4\ \text{ly})$$ happen at the same time in S. Find $$ct'$$ of B for $$\beta = 0.5$$. Which happens first in S′?
4. Use the Lorentz transformation to show that $$(ct')^2 - (x')^2 = (ct)^2 - x^2$$ for every $$\beta$$.

## Safety

None.

## Procedure

Turn Blind on before you start.

**A clock at rest in S.** Start with the Time dilation setup. Add an event on the home worldline where the home clock reads 10 years, at $$(ct, x) = (10\ \text{ly}, 0)$$, and select it. Record it at $$\beta$$ = 0, 0.15, 0.30, 0.45, 0.60, 0.75 and 0.90.

**Two events at the same time in S.** Clear the readings and choose the Relativity of simultaneity setup. Select event B, at $$(0, 4\ \text{ly})$$, and record it at the same seven speeds. Send this run to a new copy of the table.

**Your own event.** Clear the readings, add an event of your own that is not on the light lines, and write down whether it is inside or outside the light cone of the origin. Record it at at least five speeds, including negative ones, and send it to a third copy of the table.

**Order of events.** Choose the Causality setup. Find the speed at which events A and B happen at the same time in S′, and check whether any speed changes the order of A and C. Write your findings in the answer box below Analysis 5.

**Twin paradox.** Choose the Twin paradox setup and select O and T. Find the traveler's age at the turnaround and at home again from the coordinates of T. Write it below Analysis 6.

**Length.** Choose the Length contraction setup. At $$\beta = 0.6$$ add events at the two ends of the rod at $$ct = 0$$ and read the length of the rod in S. Repeat at $$\beta = 0.8$$. Write the lengths below Analysis 7.

## Data

| Reading | Event | Speed β | ct (ly) | x (ly) | ct′ (ly) | x′ (ly) | (ct′)² (ly²) | (x′)² (ly²) |
|---|---|---|---|---|---|---|---|---|
| | | | | | | | | |
| | | | | | | | | |
| | | | | | | | | |

## Analysis

1. For the clock at rest in S, graph $$(ct')^2$$ against $$(x')^2$$. Give the slope and the intercept. What is $$s^2$$, and what does $$\sqrt{s^2}$$ mean for this event?
2. For each speed, find $$ct'/ct$$ and compare it with $$\gamma$$ from $$\beta$$. Find $$x'/ct'$$ as well. What does S′ say about the clock at rest in S: how fast does it move, and how long did its 10 years take?
3. For event B, graph $$(ct')^2$$ against $$(x')^2$$. What are the slope and intercept, and what kind of separation is this? Is B simultaneous with O in S′? Which happens first for $$\beta > 0$$?
4. For your own event, predict $$s^2$$ from its S coordinates and compare it with the intercept of your graph.
5. At what speed are A and B of the Causality setup simultaneous? Compare with $$\beta = c\Delta t/\Delta x$$. Can any speed change the order of A and C? Why not?
6. What does the traveler's clock read at T and at home again? How much does the home twin age?
7. How long is the rod in S at 0.6c and at 0.8c? Compare with $$L_0/\gamma$$.

## Uncertainty

The S′ coordinates are given to 0.001 ly. How large an uncertainty does that put on $$(ct')^2$$ for your largest value of $$ct'$$? Compare it with the scatter of your points about the line and with the uncertainty of the intercept.

## Questions

1. Why do the light lines stay at 45° in the diagram of every frame? Which postulate does this show?
2. S says the clock in S′ runs slow, and S′ says the clock in S runs slow. How can both be right? Use the lines of simultaneity in your answer.
3. Why can the order of two events be reversed by changing frames only when the separation is spacelike? What would it mean if a signal could connect two such events?
4. In the twin paradox both twins see the other moving at 0.8c. What makes the situation unsymmetrical?
5. The rod is 5 ly long in S′ and shorter in S. Which length is the proper length, and why is the measurement in S not simply wrong?

## What to hand in

Prelab answers, the table copies with their graphs and fits, $$s^2$$ for each event with uncertainties, the dilation, order, twin and length results, and answers to the questions. Identify simulated data.
