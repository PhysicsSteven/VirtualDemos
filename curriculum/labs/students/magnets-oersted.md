# Magnets and Oersted's Compass
Student laboratory · Physics II

Textbook: OpenStax *University Physics*, Vol. 2, §11.1 (and §12.2). Access for free at https://openstax.org/details/books/university-physics-volume-2.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/currents-fields.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Where it is in the demo:** the section Magnets and Oersted's compass, in the demo Magnetic Fields of Currents (closed at first; open it).

**Using the demo.** Two bar magnets lie end to end, with compass needles around them showing the direction of the field. Gap between the magnets sets the space between them; Turn magnet B around swaps its poles; Cut magnet B in half splits it into two short magnets. Readouts say whether magnet B is attracted or repelled, and how strong the force is compared with a 1 cm gap. Oersted's compass shows, from above, a compass needle under a wire that runs north and south. Current in the wire (positive flows north), Height of the wire above the needle and Earth's horizontal field set the experiment; readouts give the wire's field at the needle, the needle's angle from north and $$\tan\theta$$. Predict first hides the field and the angle, so you read the angle from the compass.

**What the demo models.** Each bar magnet is two equal and opposite point poles at its ends, 6 cm apart (the Gilbert model), so the force readout is a ratio and its size is in arbitrary units. The wire is long and straight, with field $$\mu_0 I/(2\pi h)$$ at the needle, horizontal and at right angles to the wire; the needle is lightly damped and settles along the sum of that field and Earth's horizontal field. Simulated data.

</details>

## Goal

See how magnets attract and repel and why there is no lone magnetic pole, then repeat Oersted's discovery that an electric current turns a compass needle, and use the needle's angle to measure the field of a current.

## Background

Every magnet has a north and a south pole. Like poles repel and unlike poles attract, and the force weakens quickly with distance. A compass needle is a small magnet: its north end points along the magnetic field, away from a north pole and toward a south pole. Cutting a magnet in half never isolates a pole; each piece has a north and a south pole of its own.

In 1820 Oersted found that a current in a wire moves a compass needle. A long straight wire carrying current $$I$$ makes a field

$$B_{\text{wire}} = \frac{\mu_0 I}{2\pi h}$$

at a distance $$h$$, circling the wire (right hand rule), with $$\mu_0 = 1.25663706127\times10^{-6}\ \mathrm{T\cdot m/A}$$ (CODATA 2022, the value the demo uses; $$4\pi\times10^{-7}$$ to nine figures, the value the textbook uses). With the wire running north and south just above the needle, its field at the needle points east or west, at right angles to Earth's horizontal field $$B_E$$. The needle settles along the sum of the two, at an angle $$\theta$$ from north with

$$\tan\theta = \frac{B_{\text{wire}}}{B_E}.$$

## Before the lab

1. Find the field of a wire carrying 5.0 A at 3.0 cm from it.
2. Earth's horizontal field is 20 μT. At what angle from north does the needle settle under that wire? Which way does it turn if the current flows north, with the wire above the needle?
3. If the current is reversed, what happens to the needle? If the current is doubled, does the angle double?
4. Two magnets attract when 2 cm apart. Magnet B is turned around. What happens, and why?

## Safety

Strong magnets can pinch skin and wipe cards; keep them away from phones and pacemakers. A wire carrying 10 A gets warm; real experiments use short pulses of current.

## Procedure

Before each part, predict what you will see. Then measure.

**Part 1: two bar magnets.** Record whether magnet B is attracted or repelled, and the size of the force, for gaps of 1, 2, 3, 4, 6 and 8 cm. Then, at a 2 cm gap, turn magnet B around and record; turn it back, cut it in half and record; and turn the half magnet around and record. Describe the compass needles in each case.

**Part 2: current in the wire.** With the wire 3.0 cm above the needle and Earth's field at 20 μT, record the needle angle for currents of −10, −5, −2, 0, 2, 5 and 10 A.

**Part 3: height of the wire.** With 5.0 A and Earth's field at 20 μT, record the needle angle with the wire 1, 2, 3, 5 and 10 cm above the needle.

**Part 4: predict, then read the compass.** Turn on Predict first. For each of these, work out the angle you expect, then read it from the compass (to the nearest 5°) and type it into the table: 4.0 A at 2.0 cm with Earth's field at 30 μT; −6.0 A at 4.0 cm with 15 μT.

**Using the virtual apparatus.** The needle swings before it settles; record once it is still. Positive angles are toward the west. Send each part to the worksheet before clearing, so each part gets its own copy of the Data table.

## Data

| Trial | Experiment | Gap (cm) | Facing poles | Force on B | Force, compared with a 1 cm gap | Current $$I$$ (A) | Height $$h$$ (cm) | $$B_E$$ (μT) | Wire field (μT) | Needle angle (°, + west) | $$\tan\theta$$ |
|---|---|---|---|---|---|---|---|---|---|---|---|
| | | | | | | | | | | | |
| | | | | | | | | | | | |
| | | | | | | | | | | | |
| | | | | | | | | | | | |
| | | | | | | | | | | | |
| | | | | | | | | | | | |
| | | | | | | | | | | | |

## Analysis

1. For Part 1, graph the force ratio against the gap. By what factor does it fall when the gap doubles from 1 to 2 cm, and from 4 to 8 cm? Compare with $$1/r^2$$ for the facing poles alone, and explain why the force falls faster than that at large gaps (think about the far poles).
2. For Part 1, explain what happened when magnet B was turned around and when it was cut, using the compass needles. Why does cutting a magnet never give a lone north pole?
3. For Part 2, graph $$\tan\theta$$ against $$I$$. Is it a straight line through the origin? From the slope, find $$\mu_0$$, using $$h$$ and $$B_E$$. Why does $$\theta$$ itself not grow in proportion to $$I$$?
4. For Part 3, graph $$\tan\theta$$ against $$1/h$$. Is it a straight line? What does that say about how the wire's field depends on distance?
5. For Part 4, compare your predictions with the angles you read. Then turn Predict first off and check.

## Uncertainty

The model has no noise, so Parts 1 to 3 are exact model values (the angle to 0.1°). In Part 4 the compass is read to about 5°, which gives the uncertainty in your angle; work out how large it is in $$\tan\theta$$ at each angle. In a real experiment the wire is not infinitely long, Earth's field varies from place to place and has a vertical part, and nearby iron and other currents disturb the needle.

## Questions

1. Oersted's needle turned when the wire ran north and south over it, but hardly moved when the wire ran east and west. Why?
2. How could you use a compass and a wire to measure Earth's horizontal field?
3. A compass is placed next to a wire carrying alternating current at 60 Hz. Why does the needle not move?
4. Why does the force between two magnets fall off faster than the force between two electric charges?

## What to hand in

Prelab answers, a Data table copy for each part, the graphs and fits, your value of $$\mu_0$$, your predictions for Part 4, and answers to the questions. Identify simulated data.
