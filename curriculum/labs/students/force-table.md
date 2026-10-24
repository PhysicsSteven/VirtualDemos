# Force Table: Adding Forces as Vectors
Student laboratory · Physics I

Textbook: OpenStax *University Physics*, Vol. 1, §2.3 and §5.1. Access for free at https://openstax.org/details/books/university-physics-volume-1.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/vectors.html?setup=table)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Components; Adding; Subtracting; Dot and cross products; River crossing; Force table. This handout uses **Force table**, which the link above opens; the first four setups go with the Vectors worksheet.

**Using the demo.**

- The picture is the force table from above (**Top view**) or in **3D**; it opens in 3D where the browser can draw it, and there you drag on empty space to turn the view, scroll or pinch to zoom and double click to put the view back. In either view, drag a pulley around the rim to change its string's angle. Keys on the picture: 1 to 4 picks a string, the left and right arrows turn its pulley by 1° (with Shift by 10°), the up and down arrows change its mass by 1 g (with Shift by 10 g), and P pulls or replaces the centre pin.
- **Strings on the table** chooses 2, 3 or 4 strings. Each string has **Mass on string n, with its hanger** (0.010 to 0.500 kg in 1 g steps) and **Angle of string n** (0° to 359° in 1° steps); the buttons on the picture add or take off 1 g or 10 g from the chosen string. **Pulley friction, up to the weight of** runs from 0 to 5 g in steps of 0.5 g and opens at 1 g.
- **Show the forces as arrows** draws each string's pull on the ring; **Show the sum tip to tail** draws the forces head to tail. **Pull the pin** takes the centre pin out to see where the ring comes to rest without it. **Set the last string to the equilibrant** sets the last string by calculation, rounded to the nearest gram and degree, so it gives the answer away; it is disabled in Blind.
- **Record this setup** stores every string's mass and angle, whether the ring is centered and the pulley friction. **Export to worksheet** sends the recorded setups to this handout's Data table in order: trial, $$m_1$$ to $$m_4$$ in kg, $$\theta_1$$ to $$\theta_4$$ in degrees and whether the ring was centered. **Clear** starts a new series. The CSV copy also records $$g$$ and the friction setting.
- Blind hides the table of forces and components, the net force and the equilibrant; the ring still shows whether it is centered, and with the pin out, whether it comes to rest off centre, without saying which way.

**What the demo models.**

- Each string pulls the ring with its tension, which for a hanging mass at rest is its weight: $$F_i = m_i g$$ with $$g = 9.81\ \mathrm{m/s^2}$$, components $$F_{ix} = F_i\cos\theta_i$$ and $$F_{iy} = F_i\sin\theta_i$$, angles counterclockwise from the 0° mark. The equilibrant of the other strings is $$\vec E = -\sum \vec F_i$$, reported as a force, an angle and the mass $$E/g$$.
- Pulley friction lets each string's tension differ from its hanging weight by up to the amount set (given as the weight of that many grams; a chosen value, not a measured one), so the ring centers over a small range of masses and angles, as on a real table. At 0 the pulleys are ideal and the ring centers only when the weights cancel exactly.
- Model: massless strings, a light ring that slides freely on the table, and every string taken to point at the pin, ignoring the ring's few millimetres of play. The table's sizes are chosen: strings leave the table 20 cm from the centre, the ring is 4 cm across (to the middle of its 3 mm wire) and the pin is 8 mm across, so an unbalanced ring rests against the pin with its centre 14.5 mm toward the net pull.
- With the pin pulled, the ring is pulled toward the pulleys by the hanging weights and can rest only where those pulls add to zero, the weighted geometric median of the pulleys (where the hangers hang lowest). It is shown sliding slowly along the net pull and stopping at the first place the pulley friction can hold it; when one string outweighs the rest it runs toward the rim and is stopped there, as a real ring would be when a hanger reaches the floor.
- The 3D view is drawn to the same scale on a table 36 cm across; each hanger drops by as much as the ring moves toward its pulley. A hanger is drawn as 50 g with brass slotted masses (density 8500 kg/m³) making up the rest; the split is a picture, only the total matters. The table is simulated: whether the ring centers comes from the model above, so an unchanged setup gives the same result every time.

</details>

## Goal

Predict the force that balances two or three given forces, by a scale drawing and by components, and test the prediction on a force table.

## Background

A light ring sits around a pin at the centre of a round table. Each string runs from the ring over a pulley at the rim to a hanging mass. A hanging mass at rest pulls its string with a tension equal to its weight, so string $$i$$ pulls the ring with a force of size $$F_i = m_i g$$ along its angle $$\theta_i$$, measured counterclockwise from the 0° mark. Its components are

$$F_{ix} = F_i\cos\theta_i,\qquad F_{iy} = F_i\sin\theta_i.$$

The ring stays centered when the forces add to zero, $$\sum F_x = 0$$ and $$\sum F_y = 0$$. The **equilibrant** of a set of forces is the single force that balances them: equal in size and opposite in direction to their resultant $$\vec R$$,

$$\vec E = -\vec R,\qquad R = \sqrt{R_x^2 + R_y^2},\qquad \theta_E = \theta_R + 180^\circ.$$

Find $$\theta_R$$ from $$\tan\theta_R = R_y/R_x$$, and check its quadrant from the signs of $$R_x$$ and $$R_y$$. Because every force here is a weight $$mg$$, $$g$$ cancels: you can add the masses as vectors directly and the equilibrant is the weight of a mass $$E/g$$. The simulated table uses $$g = 9.81\ \mathrm{m/s^2}$$, massless strings, and a mass that includes its hanger.

Real pulleys have friction, so the tension in a string can differ slightly from its hanging weight. The ring then stays centered over a small range of masses and angles, not only at the exact equilibrant. The simulation models this with a chosen pulley friction, given as the weight of a few grams.

## Before the lab

1. Find the $$x$$ and $$y$$ components of the force from 0.150 kg hanging at 20°.
2. Two strings pull with the weights of 0.150 kg at 20° and 0.200 kg at 110°. Without calculating, explain why the equilibrant is not the weight of 0.350 kg.
3. Find the equilibrant of the two forces in item 2 by components: its size in newtons, the mass that weighs that much, and its angle.
4. If the pulleys had no friction at all, how many different masses (to the nearest gram) at the equilibrant angle would center the ring?

## Safety

On a real force table, level the table, keep the hangers clear of the floor and of each other, and add slotted masses gently so they do not swing. Hold the ring while you change masses, and keep feet clear of hanging weights.

## Procedure

Work with the predictions and answers hidden throughout, so the table only tells you whether the ring is centered. Keep the pulley friction at the weight of 1 g. Record each balanced setup, and fill the Components table from your own calculations.

**Part 1: two forces at right angles.** Hang 0.150 kg at 20° and 0.200 kg at 110°. Put a third string at your predicted equilibrant angle with your predicted mass, and record whether the ring is centered. Then find, to the nearest gram, the smallest and largest masses at that angle that keep the ring centered, and record a setup at each. Do the same for the angle: at your predicted mass, find the range of angles that keeps it centered.

**Part 2: two forces not at right angles.** Hang 0.120 kg at 0° and 0.180 kg at 75°. Predict the equilibrant by a scale drawing and by components before you touch the third string, then test it on the table as in Part 1.

**Part 3: four strings.** Hang 0.100 kg at 40°, 0.150 kg at 160° and 0.120 kg at 270°. Predict the mass and angle a fourth string needs, and test it.

**Using the virtual apparatus.** Send your recorded setups to the worksheet when you have finished all three parts; the rows fill the Data table in order. After each part, you may reveal the answers to check your prediction, but record your own predicted values first.

## Data

| Trial | $$m_1$$ (kg) | $$\theta_1$$ (°) | $$m_2$$ (kg) | $$\theta_2$$ (°) | $$m_3$$ (kg) | $$\theta_3$$ (°) | $$m_4$$ (kg) | $$\theta_4$$ (°) | Ring centered? |
|---|---|---|---|---|---|---|---|---|---|
| | | | | | | | | | |
| | | | | | | | | | |
| | | | | | | | | | |
| | | | | | | | | | |
| | | | | | | | | | |
| | | | | | | | | | |

Note which part each trial belongs to and which trial tests your prediction.

**Components.** One row for each force in your prediction for each part.

| Part | Force | $$F = mg$$ (N) | $$\theta$$ (°) | $$F_x$$ (N) | $$F_y$$ (N) |
|---|---|---|---|---|---|
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |

## Analysis

1. For each part, compare the predicted equilibrant (mass and angle) with the setup that centered the ring. Give the difference in grams and in degrees.
2. Compare your scale drawing with your component calculation in Part 2. Which is more precise, and why?
3. In Part 1, use the mass range and the angle range you found to state the equilibrant as a value with an uncertainty. Does your prediction fall inside it?
4. In Part 3, show from your Components table that the four forces add to zero within the range the table allows.

## Uncertainty

In the simulation, masses are set to 1 g and angles to 1°, and the only source of a range is the chosen pulley friction, so the range you find measures that friction, not random error. On a real table include the reading of the angle scale, the mass of each hanger and its slotted masses, pulley friction and the ring sitting slightly off the pin. Repeating an unchanged simulated setup gives the same result every time.

## Questions

1. Why is the equilibrant equal in size and opposite in direction to the resultant?
2. Two forces of fixed sizes act on the ring. For what angle between them is their resultant largest, and for what angle is it smallest?
3. Why does $$g$$ cancel from the angle of the equilibrant but not from its size in newtons?
4. How would the range of masses that centers the ring change if the pulley friction were doubled? If it were zero?

## What to hand in

Prelab answers, the Data and Components tables, the scale drawing for Part 2, the comparisons and ranges from the Analysis, and answers to the questions. Identify simulated data.
