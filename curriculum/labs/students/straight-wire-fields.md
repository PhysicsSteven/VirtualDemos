# Fields and Forces of Straight Wires
Student laboratory · Physics II

Textbook: OpenStax *University Physics*, Vol. 2, §12.1 to §12.3 and §12.5. Access for free at https://openstax.org/details/books/university-physics-volume-2.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/currents-fields.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Where it is in the demo:** Magnetic Fields of Currents, Straight wires view. The setups used here are One wire, Two wires (parallel and opposite currents) and Ampère's law.

**Using the demo.** Long straight wires cross the page; a dot means current out of the page and a cross means current into it. Drag new wires onto the page from the tray in the corner of the picture (up to six), and drop a wire back on the tray to remove it. Drag a wire, the probe or the Amperian loop; click a wire to set its current. The Probe section gives the field at the probe and its direction, the Force between currents section gives the force per meter between two wires, and the Amperian loop (circle or rectangle, either direction) shows the current through it and the numerical value of $$\oint \vec B\cdot d\vec l$$ around it. Positions are in centimeters, to 0.1 cm.

**What the demo models.** Each wire is infinitely long and thin, with field $$\mu_0 I/(2\pi r)$$ circling it, and the field of several wires is the vector sum. The force per meter on a wire is $$I\,\hat z\times\vec B$$ from the others' field. The demo does not use Ampère's law to find $$\oint \vec B\cdot d\vec l$$: it adds up $$\vec B\cdot d\vec l$$ around the loop numerically (adaptive Gauss and Kronrod quadrature, relative error below $$10^{-10}$$). $$\mu_0 = 1.25663706127\times10^{-6}\ \mathrm{T\cdot m/A}$$ (CODATA 2022). Simulated data.

</details>

## Goal

Measure how the magnetic field of a long straight wire depends on the current and the distance, find the force between two parallel currents, and test Ampère's law around loops of different shapes.

## Background

The Biot and Savart law gives the field of a short piece $$d\vec l$$ of a wire carrying current $$I$$, at a point a distance $$r$$ away along the unit vector $$\hat r$$:

$$d\vec B = \frac{\mu_0}{4\pi}\,\frac{I\,d\vec l\times\hat r}{r^2}.$$

Adding up the pieces of a long straight wire gives a field that circles the wire, at right angles to the line from the wire, with size

$$B = \frac{\mu_0 I}{2\pi r}.$$

Point your right thumb along the current: your fingers curl the way $$\vec B$$ goes. A current out of the page has a counterclockwise field.

A second wire parallel to the first, a distance $$d$$ away, sits in that field and feels a force $$\vec F = I_2\vec L\times\vec B_1$$. Per meter of length,

$$\frac{F}{L} = \frac{\mu_0 I_1 I_2}{2\pi d}.$$

Parallel currents attract and opposite currents repel, and the forces on the two wires are equal and opposite.

Ampère's law says that around any closed loop,

$$\oint \vec B\cdot d\vec l = \mu_0 I_{\text{enc}},$$

where $$I_{\text{enc}}$$ is the current through the loop, counted positive along your right thumb when your fingers curl along the loop's direction (out of the page for a counterclockwise loop). Currents outside the loop change $$\vec B$$ on the loop but add nothing to the integral.

## Before the lab

1. Find the field 2.0 cm from a long straight wire carrying 5.0 A.
2. Two long parallel wires 4.0 cm apart each carry 5.0 A in the same direction. Find the force per meter on each. Do they attract or repel?
3. For the wires in item 2, what is the field midway between them? What is it if one current is reversed?
4. A loop surrounds a wire carrying 5.0 A out of the page and a wire carrying 2.0 A into the page. Find $$\oint \vec B\cdot d\vec l$$ counterclockwise around the loop. Does the answer depend on where the wires are inside the loop, or on the loop's shape?

## Safety

There are no hazards in the simulation. Real wires carrying tens of amperes get hot; laboratory experiments use short pulses of current or thick wires.

## Procedure

Before each part, predict what you will see. Then measure.

**Part 1: field against distance.** In the One wire setup (5.0 A out of the page), record the field with the probe on the line to the right of the wire at distances of 1.0, 1.5, 2.0, 3.0, 4.0 and 6.0 cm.

**Part 2: field against current.** With the probe 3.0 cm from the wire, record the field for currents of 20, 10, 5.0, 2.0, −5.0 and −10 A.

**Part 3: direction of the field.** With 5.0 A out of the page, record the field with the probe 3.0 cm from the wire on its right, above it, on its left and below it. Then reverse the current and record once more with the probe above the wire.

**Part 4: two wires, distance.** In the Two wires, parallel currents setup (5.0 A each, 6.0 cm apart), record with the probe at the midpoint and 3.0 cm above it. Then record with the probe at the midpoint and the wires 2.0, 4.0, 8.0, 10 and 12 cm apart.

**Part 5: two wires, current.** With the wires 6.0 cm apart and the probe at their midpoint, record with the second wire carrying 10, 2.0 and −5.0 A. Then record the Two wires, opposite currents setup with the probe at the midpoint.

**Part 6: Ampère's law.** In the Ampère's law setup, record the reading as it opens. Then record with the loop clockwise; as a rectangle; moved so it also surrounds the third wire; and moved so it surrounds no wire. Next, in the One wire setup with the Amperian loop shown, record with a circle centered on the wire of radius 2.0, 3.0 and 5.0 cm, then with a circle of radius 3.0 cm whose center is 1.5 cm from the wire, and with a circle that does not surround the wire.

**Using the virtual apparatus.** The force on wire 1 is recorded only when there are exactly two wires; a positive value means wire 1 is pulled toward wire 2. A reading with a wire on the Amperian loop cannot be recorded, since $$\oint \vec B\cdot d\vec l$$ is not defined there. Send each part to the worksheet before clearing, so each part gets its own copy of the Data table. The last two columns are for you to fill in.

## Data

| Trial | Setup | Current I₁ (A) | Current I₂ (A) | Distance d between wires 1 and 2 (cm) | Probe at (x, y) (cm) | Probe distance r from wire 1 (cm) | Field B at the probe (μT) | Direction of B (° from +x) | Force per meter on wire 1 (μN/m, + toward wire 2) | Amperian loop | Current through the loop (A) | Circulation of B around the loop (μT·m) | 1/r (1/m) | 1/d (1/m) |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| | | | | | | | | | | | | | | |
| | | | | | | | | | | | | | | |
| | | | | | | | | | | | | | | |
| | | | | | | | | | | | | | | |
| | | | | | | | | | | | | | | |
| | | | | | | | | | | | | | | |

## Analysis

1. For Part 1, fill in $$1/r$$ and graph $$B$$ against $$1/r$$. Is it a straight line through the origin? From the slope, find $$\mu_0$$.
2. For Part 2, graph $$B$$ against the size of the current. From the slope, find $$\mu_0$$ again. How does the direction of the field change when the current reverses?
3. For Part 3, compare the direction of $$\vec B$$ at each probe position with the direction from the wire to the probe. What angle is between them? Show that the directions agree with the right hand rule, and that reversing the current reverses the field.
4. For Parts 4 and 5, explain the field at the midpoint for parallel and for opposite currents, and the field 3.0 cm above the midpoint, as the vector sum of the two wires' fields (check one of them by working out each wire's field and adding).
5. For Part 4, fill in $$1/d$$, graph $$F/L$$ against $$1/d$$, and find $$\mu_0$$ from the slope. For Part 5, graph $$F/L$$ against $$I_2$$ and find $$\mu_0$$ again. What does the sign of $$F/L$$ tell you?
6. For Part 6, divide the circulation by the current through the loop for every row with current inside. What do you get, and does it depend on the loop's shape, size, position or direction? What happens with no current inside, even though $$B$$ on the loop is not zero?
7. For the circles centered on the wire in Part 6, $$B$$ is the same all around the loop and along it, so $$\oint \vec B\cdot d\vec l = B\,(2\pi r)$$. Use this and your circulation to find $$B$$ at 2.0, 3.0 and 5.0 cm, and compare with Part 1. Why does the same step not work for the off center circle, although its circulation is the same?

## Uncertainty

The model has no noise: the field is given to four significant figures and the circulation to six, and positions are set to 0.1 cm, so a distance read as 1.0 cm could be up to 0.05 cm off when you place the probe by hand (5% at 1 cm). Work out what that does to $$B$$ at 1.0 cm. In a real experiment the wires are not infinitely long or thin, Earth's field (about 50 μT) adds to the wire's, and a probe has a size of its own.

## Questions

1. Two long wires 1.0 m apart each carry 1.0 A. Find the force per meter between them. This force was used to define the ampere until 2019.
2. A power line 10 m overhead carries 200 A. Compare its field at the ground with Earth's field. Should you worry about a compass reading under it?
3. Why can Ampère's law alone not give the field at the probe in the Ampère's law setup, although the law holds for every loop there?
4. Use the Biot and Savart law to explain why the field of a wire only 10 cm long, measured 3 cm from its middle, is smaller than $$\mu_0 I/(2\pi r)$$.

## What to hand in

Prelab answers, a Data table copy for each part, the graphs and fits, your values of $$\mu_0$$, and answers to the questions. Identify simulated data.
