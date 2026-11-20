# Center of Mass
Student laboratory · Physics I

Textbook: OpenStax *University Physics*, Vol. 1, §9.6. Access for free at https://openstax.org/details/books/university-physics-volume-1.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/center-of-mass.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Masses on a plate; Exploding firework; Walking on a boat.

**Using the demo.**

- **Masses on a plate:** up to four masses on a 1.0 m × 0.6 m plate. Drag a mass to move it (or select it with the keys 1 to 4 and move it with the arrow keys in 0.01 m steps), add or remove masses, and set the selected mass. The readouts give each mass and its position, the total mass and the center of mass.
- **Exploding firework:** a firework launched at 20 m/s and 60° splits into two pieces at the top of its flight. Set the front piece's share of the mass, the speed the explosion gives the pieces apart and the direction the front piece is thrown. Launch pauses and resumes the flight; Reset goes back to the launch. The readouts give the time, the center of mass of the pieces, where the unexploded firework would be, and where each piece lands.
- **Walking on a boat:** a person walks from the back of a 4.0 m boat to the front at 1 m/s relative to the boat. Set the person's and the boat's masses; Walk starts and pauses the walk. The readouts give how far the person has walked, how far the boat has moved and the center of mass of person and boat; a post on the dock is a fixed reference.
- Record reading stores the current setup's readouts, including the mass share $$f$$: the share of the total mass in mass 2 (plate, with two masses), in the front piece (firework) or in the person (boat). Export to worksheet sends the readings to the Data table below; Clear starts a new series, which goes into a new copy of the table.
- Blind hides the center of mass marker, its coordinates and the predicted boat shift, and in the firework also the unexploded path, the Unexploded range and the Mass weighted landing point. The firework can be recorded with Blind on; the plate and the boat cannot.

**What the demo models.**

- Point masses on a massless plate. The firework is a point mass with no air resistance and $$g = 9.81\ \text{m/s}^2$$; the explosion gives the two pieces equal and opposite momentum changes. A piece stops where it lands.
- The boat floats with no water drag, so no horizontal force acts on the person and boat together.

</details>

## Goal

Locate the center of mass of a set of masses, show that the center of mass of a firework keeps to its parabola after the firework explodes, and use the center of mass to predict how far a boat moves when someone walks along it.

## Background

The center of mass of point masses $$m_i$$ at positions $$x_i$$ is the mass weighted average position (§9.6),

$$x_\text{cm} = \frac{\sum m_i x_i}{M}, \qquad M = \sum m_i,$$

and the same for $$y$$. For two masses on a line, with $$f = m_2/M$$ the share of the mass in mass 2,

$$x_\text{cm} = x_1 + f\,(x_2 - x_1),$$

so the center of mass sits the fraction $$f$$ of the way from mass 1 to mass 2.

The center of mass of a system moves as if all the mass were there and all the external forces acted on it: $$M\vec a_\text{cm} = \vec F_\text{ext}$$. Forces between parts of the system, such as an explosion, cancel in pairs and cannot change its motion. A firework's pieces therefore have a center of mass that keeps following the unexploded firework's parabola, until the ground pushes on one of them. On a boat with no water drag there is no external horizontal force, so the center of mass of person and boat stays where it was. If the person, of mass $$m$$, walks a length $$L$$ along a boat of mass $$M_\text{b}$$, the boat moves

$$\Delta x_\text{boat} = -\frac{m}{m + M_\text{b}}\,L = -fL.$$

## Before the lab

1. A 1.0 kg mass sits at $$x = 0.20$$ m and a 3.0 kg mass at $$x = 0.80$$ m. Where is the center of mass? Is it nearer the heavier mass or the lighter one?
2. A firework splits into two equal pieces at the top of its flight, and the explosion throws them apart horizontally. Predict how the two landing points compare with where the unexploded firework would have landed.
3. A 70 kg person walks 4.0 m along a 150 kg boat floating at rest, with no water drag. Which way does the boat move while the person walks, and about how far? And when the person stops at the end of the walk, does the boat stop at the same moment, keep drifting for a while or drift back?

## Safety

There is no hazard in the simulation. In a real lab, keep loaded plates on a stable support. Fireworks are for licensed operators only; do not stand up and walk about in a small boat.

## Procedure

**Two masses on the plate.** Press the **Masses on a plate** setup. Use two masses only: the plate opens with three, so click the picture, press 3 to select mass 3 and press **Remove the selected mass**. Select a mass with the key 1 or 2, move it by dragging or with the arrow keys (0.01 m a press), and set it with the **Selected mass** slider; the Readouts give each mass and its position. Put mass 1, of 1.0 kg, at (0.20, 0.30) m and mass 2 at (0.80, 0.30) m. For mass 2 of 0.5, 1.0, 2.0, 3.0 and 5.0 kg, press **Record reading** under Readings, then **Export to worksheet** and **Clear**.

**Firework thrown apart horizontally.** Press the **Exploding firework** setup and tick **Blind: hide predictions and answers** (Lab fold), so the demo does not show the landing point you will work out. Set **Mass of the front piece, fraction of the total** to 0.50, **Speed the explosion gives the pieces apart** to 8 m/s and **Direction the front piece is thrown** to 0° (horizontal), and press ×½ above the picture. Press **Launch**; the button becomes Pause. Each time the **Time** readout nears 1.0, 2.0, 3.0 and 3.5 s, press **Pause**, press **Record reading** (it stores the **Time**, **Center of mass of the pieces** and **Unexploded firework would be at** readouts), then press **Launch** to resume. When both pieces are down, copy the **Front piece lands at** and **Back piece lands at** readouts into the Landing points table and work out the mass weighted landing point from them. Then untick Blind, copy the **Unexploded range** readout and check your value against the **Mass weighted landing point** readout. Press **Export to worksheet** and **Clear**.

**Firework thrown apart at an angle.** Press **Reset**, tick Blind again, keep the share and the speed, set the direction to 45° and repeat. Include readings between the moment the first piece lands and the moment the second does.

**Walking on a boat.** Press the **Walking on a boat** setup and set the **Person's mass** slider to 70 kg. For each boat mass of 20, 50, 150 and 400 kg, set the **Boat's mass** slider, press **Walk** and wait until the walk stops (**Person walked along the boat** stops changing), then press **Record reading**. Export the four readings. In the 150 kg walk, keep an eye on the **Boat has moved** readout at the moment the person stops; write what it does, with your 150 kg reading, in your answer to Question 1.

**Using the virtual apparatus.** Blind must be off to record the plate and the boat; the firework records with Blind on. Send each part to the worksheet before clearing, so each part gets its own copy of the Data table.

## Data

| Reading | Setup and masses | Mass share $$f$$ | Time $$t$$ (s) | Center of mass $$x$$ (m) | Center of mass $$y$$ (m) | Unexploded $$x$$ (m) | Unexploded $$y$$ (m) | Walked (m) | Boat moved (m) |
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

1. Graph the center of mass $$x$$ against the mass share $$f$$ for the plate and fit a line. Explain the slope and the intercept using the positions of the two masses. What happened to the center of mass $$y$$, and why?
2. For the horizontal firework, compare the center of mass of the pieces with the unexploded firework at each time. Work out the mass weighted landing point of the pieces from your Landing points table (check it against the **Mass weighted landing point** readout) and compare it with the unexploded landing point.
3. For the firework thrown at 45°, find when the center of mass first leaves the unexploded parabola. What external force acts then that did not act before? Compare the mass weighted landing point with the unexploded landing point.
4. Graph how far the boat moved against the person's mass share $$f$$ and fit a line. Use the slope to find how far the person walked along the boat, and compare with the boat's length.

## Questions

1. How far did the 150 kg boat move, and what did it do when the person stopped? Check both against your answer to Before the lab 3, then use the center of mass of person and boat, and their total momentum, to explain them. A person on a frictionless frozen pond throws a ball to the east: what happens to the person, and where is the center of mass of person and ball afterwards?

## Uncertainty

For courses that treat measurement uncertainty. This section is not counted in the 75 minutes; do it when your instructor assigns it.
{: .ws-assigned}

Mass positions on the plate are set to 0.01 m and the masses to 0.1 kg; the demo gives positions to 0.001 m. Estimate how far a 0.01 m error in placing mass 2 moves the center of mass for your smallest and largest $$f$$. For the firework, your readings are at the moments you paused; explain why that does not matter for the comparison in Analysis 2. On a real boat, water drag would act while the boat moves: say how that would change the boat's final position.

## With calculus

For courses that use calculus. This section is not counted in the 75 minutes; do it when your instructor assigns it.

1. Differentiate $$Mx_\text{cm} = \sum m_ix_i$$ twice to show that $$M\,d^2x_\text{cm}/dt^2 = \sum F_{x,i}$$, and explain why the forces between the pieces drop out of the sum. With gravity the only external force on the firework, integrate $$d^2y_\text{cm}/dt^2 = -g$$ twice. Use your horizontal firework readings of the center of mass $$y$$ at 1.0 and 2.0 s to find its starting height and upward velocity, then predict its $$y$$ at 3.0 and 3.5 s and compare with your readings.
2. On the boat, $$m\,v_\text{person} + M_\text{b}\,v_\text{boat} = 0$$ at every instant. Integrate it over the walk, using the fact that the person moves the length $$L$$ relative to the boat ($$\Delta x_\text{person} = \Delta x_\text{boat} + L$$), and derive $$\Delta x_\text{boat} = -fL$$. Check it against your 150 kg reading. Why does the result not depend on how fast or how unevenly the person walks?
3. A rod of length $$L$$ has a mass per length that grows in proportion to the distance from one end: $$\lambda = \lambda_0x/L$$. Use $$x_\text{cm} = \int x\,dm\big/\!\int dm$$ to find its center of mass. Is it nearer the light end or the heavy end, and by how much does it differ from a uniform rod's?

## What to hand in

Prelab answers, the table copies with the plate and boat graphs and fits, the firework comparisons and landing points, the boat length from your fit, and answers to the questions (and to Uncertainty and With calculus, if assigned). Identify simulated data.
