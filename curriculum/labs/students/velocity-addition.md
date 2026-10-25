# Adding Velocities Near c
Student laboratory · Modern Physics

Textbook: OpenStax *University Physics*, Vol. 3, §§5.1 and 5.6. Access for free at https://openstax.org/details/books/university-physics-volume-3.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/relativistic-motion.html?setup=probe)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Rocket fires a probe; Rocket fires light; Mystery rocket (these three use the Adding velocities view, the subject of this worksheet); Electron, steady force (the momentum worksheet); Bertozzi's electrons and Mystery particle (the energy worksheet).

**Using the demo.**

- Everything moves along one straight line in empty space. Beacons A and B are at rest in the ground frame, 3.000 light seconds apart (one light second is the distance light goes in 1 s, 2.998 × 10⁸ m).
- The rocket passes a launch mark 0.600 light seconds before beacon A and fires the probe there. The launch speed $$u'$$ is measured by the crew, in the rocket's own frame, from 0 to 0.99c. You can fire a pulse of light instead.
- Each beacon carries a ground clock. The timers show the ground time between a body passing A and passing B, to 0.0001 s, for the probe and for the rocket.
- The run plays in real time at 1× (a light second takes one second); 5× and 20× play it faster. The rocket is drawn at a fixed size.
- Record reading stores the rocket speed, the launch speed, whether a probe or light was fired, and both timer readings. It needs the probe to have passed beacon B. Export to worksheet sends the readings to the Data table below; Clear starts a new series, which goes into a new copy of the table.
- New mystery rocket picks another unknown speed, from 0.300c to 0.900c.
- Blind hides the graph and the predicted ground speeds.

</details>

## Goal

Measure the speed of a probe fired from a fast rocket, as seen from the ground, and find the rule for adding velocities that keeps every speed below c.

## Background

In Galileo's mechanics a probe fired forward at $$u'$$ from a rocket moving at $$v$$ has ground speed $$u = v + u'$$. That cannot be right near c: a rocket at 0.6c firing a probe at 0.5c would give 1.1c, and a pulse of light fired from the rocket would move at 1.6c, which contradicts the second postulate (§5.1). The Lorentz transformation gives instead (§5.6)

$$u = \frac{v + u'}{1 + vu'/c^2}.$$

For small speeds the denominator is close to 1 and Galileo's rule comes back. Multiplying out and rearranging gives a form with no fraction,

$$u - u' = v\left(1 - \frac{uu'}{c^2}\right),$$

so a plot of $$u - u'$$ against $$1 - uu'/c^2$$ for one rocket is a straight line through the origin with slope $$v$$. Here the ground speed comes from the beacon timer: $$u = (3.000\ \text{light seconds})/\Delta t$$, which in units of c is $$u = 3.000/\Delta t$$ with $$\Delta t$$ in seconds.

## Before the lab

1. A rocket at 0.60c fires a probe forward at 0.50c. Find the probe's ground speed by Galileo's rule and by the relativistic rule, and predict the beacon timer reading for each.
2. Show that the relativistic rule gives $$u = c$$ when $$u' = c$$, whatever $$v$$ is.
3. Starting from the relativistic rule, show that $$u - u' = v(1 - uu'/c^2)$$.
4. How fast must a rocket at 0.90c fire a probe for the probe's ground speed to be 0.99c?

## Safety

None for the virtual apparatus.

## Procedure

**One rocket, many probes.** Start with the Rocket fires a probe setup (rocket at 0.60c). Fire probes at launch speeds from 0.10c to 0.90c in steps of 0.10c and record each one once it has passed beacon B. Then fire a pulse of light, record it too, and send the run to the worksheet before you clear the readings.

**A faster rocket.** Clear the readings, set the rocket to 0.90c and repeat at 0.10c, 0.30c, 0.50c, 0.70c, 0.90c and with light. Send this run to a new copy of the table.

**Mystery rocket.** Clear the readings and choose the Mystery rocket setup (picking it again, or New mystery rocket, changes the speed). Fire probes at five or more launch speeds from 0.10c to 0.90c and record each. Write down the rocket's own timer reading (Rocket, A to B) as well: the demo shows it, but the table has no column for it. Send this run to a third copy of the table.

## Data

| Reading | Launch speed $$u'$$ (c) | Probe time A to B $$\Delta t$$ (s) | Ground speed $$u$$ (c) | $$u - u'$$ (c) | $$1 - uu'/c^2$$ |
|---|---|---|---|---|---|
| | | | | | |
| | | | | | |
| | | | | | |

## Analysis

1. Graph $$u$$ against $$u'$$ for the 0.60c rocket. Is it a straight line? Compare your ground speeds with Galileo's $$v + u'$$: where do they differ most?
2. Graph $$u - u'$$ against $$1 - uu'/c^2$$ for each rocket. Is the intercept zero within its uncertainty? Compare each slope with the rocket speed you set.
3. Find the mystery rocket's speed from its slope. Then find it directly from the rocket's own timer reading, $$v = 3.000/\Delta t$$, and compare.
4. Where does the light pulse sit on each graph, and what was its timer reading? What does this say about the speed of light seen from the ground?

## Uncertainty

The timer reads to 0.0001 s and the beacons are exactly 3.000 light seconds apart. Find the uncertainty in $$u$$ for a probe that takes about 3.5 s, and say whether it can explain any scatter in your residuals.

## Questions

1. Why can no rocket firing a probe forward ever produce a ground speed above c, however fast both are?
2. The crew of the 0.60c rocket watches the probe you timed at 0.8462c. What speed do they say it has? Use the inverse rule $$u' = (u - v)/(1 - uv/c^2)$$.
3. Two rockets approach the ground station from opposite sides, each at 0.60c. How fast does one move as seen from the other? Why is the answer not 1.20c?
4. At what speeds does Galileo's rule give a ground speed within 1% of the relativistic one, for a rocket at 0.60c? Why do we never notice the difference in daily life?

## What to hand in

Prelab answers, the table copies with their graphs and fits, the mystery rocket's speed by both methods with uncertainties, and answers to the questions. Identify simulated data.
