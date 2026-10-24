# Center of Mass
Student laboratory · Physics I

Textbook: OpenStax *University Physics*, Vol. 1, §9.6. Access for free at https://openstax.org/details/books/university-physics-volume-1.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/center-of-mass.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Masses on a plate; Exploding firework; Walking on a boat.

**Using the demo.**

- **Masses on a plate:** up to four masses on a 1.0 m × 0.6 m plate. Drag a mass to move it (or select it with the keys 1 to 4 and move it with the arrow keys in 0.01 m steps), add or remove masses, and set the selected mass. The readouts give each mass and its position, the total mass and the centre of mass.
- **Exploding firework:** a firework launched at 20 m/s and 60° splits into two pieces at the top of its flight. Set the front piece's share of the mass, the speed the explosion gives the pieces apart and the direction the front piece is thrown. Launch pauses and resumes the flight; Start over goes back to the launch. The readouts give the time, the centre of mass of the pieces, where the unexploded firework would be, and where each piece lands.
- **Walking on a boat:** a person walks from the back of a 4.0 m boat to the front at 1 m/s relative to the boat. Set the person's and the boat's masses; Walk starts and pauses the walk. The readouts give how far the person has walked, how far the boat has moved and the centre of mass of person and boat; a post on the dock is a fixed reference.
- Record reading stores the current setup's readouts, including the mass share $$f$$: the share of the total mass in mass 2 (plate, with two masses), in the front piece (firework) or in the person (boat). Export to worksheet sends the readings to the Data table below; Clear starts a new series, which goes into a new copy of the table.
- Blind hides the centre of mass marker, its coordinates and the predicted boat shift. Nothing can be recorded while Blind is on.

**What the demo models.**

- Point masses on a massless plate. The firework is a point mass with no air resistance and $$g = 9.81\ \text{m/s}^2$$; the explosion gives the two pieces equal and opposite momentum changes. A piece stops where it lands.
- The boat floats with no water drag, so no horizontal force acts on the person and boat together.

</details>

## Goal

Locate the centre of mass of a set of masses, show that the centre of mass of a firework keeps to its parabola after the firework explodes, and use the centre of mass to predict how far a boat moves when someone walks along it.

## Background

The centre of mass of point masses $$m_i$$ at positions $$x_i$$ is the mass weighted average position (§9.6),

$$x_\text{cm} = \frac{\sum m_i x_i}{M}, \qquad M = \sum m_i,$$

and the same for $$y$$. For two masses on a line, with $$f = m_2/M$$ the share of the mass in mass 2,

$$x_\text{cm} = x_1 + f\,(x_2 - x_1),$$

so the centre of mass sits the fraction $$f$$ of the way from mass 1 to mass 2.

The centre of mass of a system moves as if all the mass were there and all the external forces acted on it: $$M\vec a_\text{cm} = \vec F_\text{ext}$$. Forces between parts of the system, such as an explosion, cancel in pairs and cannot change its motion. A firework's pieces therefore have a centre of mass that keeps following the unexploded firework's parabola, until the ground pushes on one of them. On a boat with no water drag there is no external horizontal force, so the centre of mass of person and boat stays where it was. If the person, of mass $$m$$, walks a length $$L$$ along a boat of mass $$M_\text{b}$$, the boat moves

$$\Delta x_\text{boat} = -\frac{m}{m + M_\text{b}}\,L = -fL.$$

## Before the lab

1. A 1.0 kg mass sits at $$x = 0.20$$ m and a 3.0 kg mass at $$x = 0.80$$ m. Where is the centre of mass? Is it nearer the heavier mass or the lighter one?
2. A firework splits into two equal pieces at the top of its flight, and the explosion throws them apart horizontally. Predict how the two landing points compare with where the unexploded firework would have landed.
3. A 70 kg person walks 4.0 m along a 150 kg boat floating at rest. Predict which way and how far the boat moves.

## Safety

There is no hazard in the simulation. In a real lab, keep loaded plates on a stable support. Fireworks are for licensed operators only; do not stand up and walk about in a small boat.

## Procedure

**Two masses on the plate.** Use two masses only. Put mass 1, of 1.0 kg, at (0.20, 0.30) m and mass 2 at (0.80, 0.30) m. Record the centre of mass for mass 2 of 0.2, 0.5, 1.0, 1.5, 2.0, 3.0, 4.0 and 5.0 kg. Then add a third mass anywhere on the plate, predict the new centre of mass from the readouts of the masses, and check your prediction.

**Firework thrown apart horizontally.** Set the front piece's share to 0.50, the explosion speed to 8 m/s and the direction to 0° (horizontal). Launch, and record the centre of mass and the unexploded firework's position at about 0.5 s intervals from 0.5 s to 3.5 s, both before and after the split. Note where each piece lands.

**Firework thrown apart at an angle.** Keep the share and the speed, set the direction to 45° and repeat. Include readings between the moment the first piece lands and the moment the second does.

**Walking on a boat.** Set the person's mass to 70 kg. For boat masses of 20, 50, 100, 150, 200, 300 and 400 kg, let the person walk the full length of the boat and record the readings at the end of the walk.

**Using the virtual apparatus.** Pause the firework to record a moment, then resume. Blind must be off to record. Send each part to the worksheet before clearing, so each part gets its own copy of the Data table.

## Data

| Reading | Setup and masses | Mass share $$f$$ | Time $$t$$ (s) | Centre of mass $$x$$ (m) | Centre of mass $$y$$ (m) | Unexploded $$x$$ (m) | Unexploded $$y$$ (m) | Walked (m) | Boat moved (m) |
|---|---|---|---|---|---|---|---|---|---|
| | | | | | | | | | |
| | | | | | | | | | |
| | | | | | | | | | |

Keep the plate, the two firework runs and the boat in separate copies of the table.

### Landing points

| Direction (°) | Front piece lands at $$x$$ (m) | Back piece lands at $$x$$ (m) | Mass weighted landing point (m) | Unexploded landing point (m) |
|---|---|---|---|---|
| 0 | | | | |
| 45 | | | | |

## Analysis

1. Graph the centre of mass $$x$$ against the mass share $$f$$ for the plate and fit a line. Explain the slope and the intercept using the positions of the two masses. What happened to the centre of mass $$y$$, and why?
2. For the horizontal firework, compare the centre of mass of the pieces with the unexploded firework at each time. Work out the mass weighted landing point of the pieces and compare it with the unexploded landing point.
3. For the firework thrown at 45°, find when the centre of mass first leaves the unexploded parabola. What external force acts then that did not act before? Compare the mass weighted landing point with the unexploded landing point.
4. Graph how far the boat moved against the person's mass share $$f$$ and fit a line. Use the slope to find how far the person walked along the boat, and compare with the boat's length.
5. Before each walk the person stood at the back of the boat, 2.00 m behind its centre, and the boat's centre was at 0. Work out the centre of mass then and compare it with the reading at the end of the walk.

## Uncertainty

Mass positions on the plate are set to 0.01 m and the masses to 0.1 kg; the demo gives positions to 0.001 m. Estimate how far a 0.01 m error in placing mass 2 moves the centre of mass for your smallest and largest $$f$$. For the firework, your readings are at the moments you paused; explain why that does not matter for the comparison in Analysis 2. On a real boat, water drag would act while the boat moves: say how that would change the boat's final position.

## Questions

1. Can the centre of mass of an object be at a point where there is no mass? Give an example.
2. Why can the explosion not change the motion of the firework's centre of mass?
3. After both pieces have landed, the centre of mass is no longer on the parabola. Does this break the rule $$M\vec a_\text{cm} = \vec F_\text{ext}$$? Explain.
4. A person on a frictionless frozen pond throws a ball to the east. What happens to the person, and where is the centre of mass of person and ball afterwards?

## What to hand in

Prelab answers, the table copies with the plate and boat graphs and fits, the third mass prediction and check, the firework comparisons and landing points, the boat length from your fit, the uncertainty discussion and answers to the questions. Identify simulated data.
