# Fields and Forces of Straight Wires
Student laboratory · Physics II

Textbook: OpenStax *University Physics*, Vol. 2, §12.1 to §12.3. Access for free at https://openstax.org/details/books/university-physics-volume-2.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/currents-fields.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Where it is in the demo:** Magnetic Fields of Currents, Straight wires view. The setups used here are One wire and Two wires (parallel currents).

**Using the demo.** Long straight wires cross the page; a dot means current out of the page and a cross means current into it. Drag new wires onto the page from the tray in the corner of the picture (up to six), and drop a wire back on the tray to remove it. Drag a wire or the probe; click a wire to set its current. The Probe section gives the field at the probe and its direction, and the Force between currents section gives the force per meter between two wires. Positions are in centimeters, to 0.1 cm.

**What the demo models.** Each wire is infinitely long and thin, with field $$\mu_0 I/(2\pi r)$$ circling it, and the field of several wires is the vector sum. The force per meter on a wire is $$I\,\hat z\times\vec B$$ from the others' field. $$\mu_0 = 1.25663706127\times10^{-6}\ \mathrm{T\cdot m/A}$$ (CODATA 2022). Simulated data.

</details>

## Goal

Measure how the magnetic field of a long straight wire depends on the distance, and find the force between two parallel currents.

## Background

The Biot and Savart law gives the field of a short piece $$d\vec l$$ of a wire carrying current $$I$$, at a point a distance $$r$$ away along the unit vector $$\hat r$$:

$$d\vec B = \frac{\mu_0}{4\pi}\,\frac{I\,d\vec l\times\hat r}{r^2}.$$

Adding up the pieces of a long straight wire gives a field that circles the wire, at right angles to the line from the wire, with size

$$B = \frac{\mu_0 I}{2\pi r}.$$

Point your right thumb along the current: your fingers curl the way $$\vec B$$ goes. A current out of the page has a counterclockwise field.

A second wire parallel to the first, a distance $$d$$ away, sits in that field and feels a force $$\vec F = I_2\vec L\times\vec B_1$$. Per meter of length,

$$\frac{F}{L} = \frac{\mu_0 I_1 I_2}{2\pi d}.$$

Parallel currents attract and opposite currents repel, and the forces on the two wires are equal and opposite.

## Before the lab

1. Find the field 2.0 cm from a long straight wire carrying 5.0 A.
2. Two long parallel wires 4.0 cm apart each carry 5.0 A in the same direction. Find the force per meter on each. Do they attract or repel?
3. Now make the currents unequal: two long parallel wires 6.0 cm apart carry 5.0 A and 10 A in the same direction. Which wire feels the larger force per meter: the 5.0 A wire, the 10 A wire, or neither? Why?

## Safety

There are no hazards in the simulation. Real wires carrying tens of amperes get hot; laboratory experiments use short pulses of current or thick wires.

## Procedure

Before each part, predict what you will see. Then measure. Pick each setup under Setups. To place the probe or a wire, drag it, or press N on the picture to select the probe or a wire in turn and move it with the arrow keys (0.1 cm a step, 1 cm with Shift). Read the field from the Probe section (the field size at the probe, and Probe position and direction of B) and press Record reading for each row; at the end of each part press Export to worksheet, then Clear.

**Part 1: field against distance.** In the One wire setup (5.0 A out of the page), record the field with the probe on the line to the right of the wire at distances of 1.0, 1.5, 2.0, 3.0, 4.0 and 6.0 cm (probe at (1.0, 0) and so on; the wire is at the origin).

**Part 2: direction of the field.** With 5.0 A out of the page, record the field with the probe 3.0 cm from the wire on its right, above it, on its left and below it: (3.0, 0), (0, 3.0), (−3.0, 0) and (0, −3.0). Then press Reverse current (Wires section) and record once more with the probe above the wire.

**Part 3: two wires, distance.** In the Two wires, parallel currents setup (5.0 A each, 6.0 cm apart), record with the probe at the midpoint (0, 0) and 3.0 cm above it, (0, 3.0). Before you move the wires, click Wire 2 in the Wires list, set the Current in wire 2 slider to 10 A and read the force per meter, F/L, at the end of each wire's line in the list; write both in your answer to Question 3, then set wire 2 back to 5.0 A. Then record with the probe at the midpoint and the wires 2.0, 4.0, 8.0, 10 and 12 cm apart: select each wire in the Wires list and move it with the arrow keys so the wires sit at (−d/2, 0) and (+d/2, 0) (the list shows each wire's position).

**Using the virtual apparatus.** The force on wire 1 is recorded only when there are exactly two wires; a positive value means wire 1 is pulled toward wire 2. Send each part to the worksheet before clearing, so each part gets its own copy of the Data table. Export fills every column except the last two, which are for you to fill in.

## Data

| Trial | Setup | Current I₁ (A) | Current I₂ (A) | Distance d between wires 1 and 2 (cm) | Probe at (x, y) (cm) | Probe distance r from wire 1 (cm) | Field B at the probe (μT) | Direction of B (° from +x) | Force per meter on wire 1 (μN/m, + toward wire 2) | 1/r (1/m) | 1/d (1/m) |
|---|---|---|---|---|---|---|---|---|---|---|---|
| | | | | | | | | | | | |
| | | | | | | | | | | | |
| | | | | | | | | | | | |
| | | | | | | | | | | | |
| | | | | | | | | | | | |
| | | | | | | | | | | | |

## Analysis

1. For Part 1, fill in $$1/r$$ and graph $$B$$ (vertical) against $$1/r$$ in 1/m (horizontal), with a free intercept fit; the slope is $$\mu_0 I/(2\pi)$$. Is it a straight line through the origin? From the slope, find $$\mu_0$$.
2. For Part 2, compare the direction of $$\vec B$$ at each probe position with the direction from the wire to the probe. What angle is between them? Show that the directions agree with the right hand rule, and that reversing the current reverses the field.
3. For Part 3, explain the field at the midpoint and the field 3.0 cm above the midpoint as the vector sum of the two wires' fields (check the point above the midpoint by working out each wire's field and adding).
4. For Part 3, fill in $$1/d$$ for the rows with the probe at the midpoint, graph $$F/L$$ (vertical) against $$1/d$$ in 1/m (horizontal), and find $$\mu_0$$ from the slope. What does the sign of $$F/L$$ tell you?

## Questions

1. A power line 10 m overhead carries 200 A. Compare its field at the ground with Earth's field. Should you worry about a compass reading under it?
2. Use the Biot and Savart law to explain why the field of a wire only 10 cm long, measured 3 cm from its middle, is smaller than $$\mu_0 I/(2\pi r)$$.
3. With 5.0 A and 10 A in the wires, which wire's F/L was larger? Was that your answer to Before the lab 3? Use $$F/L = \mu_0 I_1 I_2/(2\pi d)$$, the field each wire makes at the other, and Newton's third law to explain why the two forces compare as they do.

## Uncertainty

For courses that treat measurement uncertainty. This section is not counted in the 75 minutes; do it when your instructor assigns it.
{: .ws-assigned}

The model has no noise: the field is given to four significant figures, and positions are set to 0.1 cm, so a distance read as 1.0 cm could be up to 0.05 cm off when you place the probe by hand (5% at 1 cm). Work out what that does to $$B$$ at 1.0 cm. In a real experiment the wires are not infinitely long or thin, Earth's field (about 50 μT) adds to the wire's, and a probe has a size of its own.

## With calculus

For courses that use calculus. This section is not counted in the 75 minutes; do it when your instructor assigns it.

1. Integrate the Biot and Savart law along a straight wire from $$x = -L/2$$ to $$x = L/2$$ to find the field a distance $$r$$ from its middle, and show that $$B = \frac{\mu_0 I}{2\pi r}\cdot\frac{L/2}{\sqrt{(L/2)^2 + r^2}\,}$$. The integral $$\int dx/(x^2+r^2)^{3/2} = x/\big(r^2\sqrt{x^2+r^2}\,\big)$$ helps. Let $$L \to \infty$$ to get the Background's result, and find $$B$$ 3.0 cm from the middle of a wire 10 cm long carrying 5.0 A (Question 2).
2. Parallel currents attract, so pulling the wires apart takes work: per meter of wire, $$W/L = \int (F/L)\,dd$$. With 5.0 A in each, do the integral from $$d = 2.0$$ to 12 cm. Then estimate it from your Part 3 readings of $$F/L$$ at 2.0, 4.0, 6.0, 8.0, 10 and 12 cm with the trapezoid rule: for each pair of neighboring readings, multiply the average of their $$F/L$$ by the step in $$d$$, and add. Compare the two. Why is the estimate high?

## What to hand in

Prelab answers, a Data table copy for each part, the graphs and fits, your values of $$\mu_0$$, and answers to the questions (and to Uncertainty and With calculus, if assigned). Identify simulated data.
