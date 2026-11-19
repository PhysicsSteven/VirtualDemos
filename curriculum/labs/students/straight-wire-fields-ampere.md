# Ampère's Law and Straight Wires
Student laboratory · Physics II

Textbook: OpenStax *University Physics*, Vol. 2, §12.2 and §12.5. Access for free at https://openstax.org/details/books/university-physics-volume-2.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/currents-fields.html?ws=straight-wire-fields-ampere)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Where it is in the demo:** Magnetic Fields of Currents, Straight wires view. The setups used here are Ampère's law and One wire.

**Using the demo.** Long straight wires cross the page; a dot means current out of the page and a cross means current into it. Drag a wire, the probe or the Amperian loop; click a wire to set its current. The Amperian loop (circle or rectangle, either direction) shows the current through it and the numerical value of $$\oint \vec B\cdot d\vec l$$ around it. Positions are in centimeters, to 0.1 cm.

**What the demo models.** Each wire is infinitely long and thin, with field $$\mu_0 I/(2\pi r)$$ circling it, and the field of several wires is the vector sum. The demo does not use Ampère's law to find $$\oint \vec B\cdot d\vec l$$: it adds up $$\vec B\cdot d\vec l$$ around the loop numerically (adaptive Gauss and Kronrod quadrature, relative error below $$10^{-10}$$). $$\mu_0 = 1.25663706127\times10^{-6}\ \mathrm{T\cdot m/A}$$ (CODATA 2022). Simulated data.

</details>

## Goal

Test Ampère's law around loops of different shapes, sizes, positions and directions, and find what the circulation of the magnetic field depends on.

## Background

A long straight wire carrying current $$I$$ makes a magnetic field that circles the wire, at right angles to the line from the wire, with size

$$B = \frac{\mu_0 I}{2\pi r}$$

at a distance $$r$$ (§12.2). Point your right thumb along the current: your fingers curl the way $$\vec B$$ goes. A current out of the page has a counterclockwise field.

Ampère's law says that around any closed loop,

$$\oint \vec B\cdot d\vec l = \mu_0 I_{\text{enc}},$$

where $$I_{\text{enc}}$$ is the current through the loop, counted positive along your right thumb when your fingers curl along the loop's direction (out of the page for a counterclockwise loop). Currents outside the loop change $$\vec B$$ on the loop but add nothing to the integral.

## Before the lab

1. A loop surrounds a wire carrying 5.0 A out of the page and a wire carrying 2.0 A into the page. Find $$\oint \vec B\cdot d\vec l$$ counterclockwise around the loop. Does the answer depend on where the wires are inside the loop, or on the loop's shape?
2. A circle of radius 3.0 cm is centered on a long straight wire carrying 5.0 A out of the page. Find $$B$$ on the circle, then work out $$\oint \vec B\cdot d\vec l$$ counterclockwise around it, and compare with $$\mu_0 I_{\text{enc}}$$.
3. Move the circle of question 2 off to one side, so that it no longer surrounds the wire (still 5.0 A out of the page, radius still 3.0 cm). Is the field on the circle zero or not? Is $$\oint \vec B\cdot d\vec l$$ counterclockwise around it zero, positive or negative? Explain.

## Safety

There are no hazards in the simulation. Real wires carrying tens of amperes get hot; laboratory experiments use short pulses of current or thick wires.

## Procedure

Before each part, predict what you will see. Then measure. Pick each setup under Setups. To place a wire or the loop, drag it, or press N on the picture to select a wire or the loop in turn and move it with the arrow keys (0.1 cm a step, 1 cm with Shift). Press Record reading for each row; at the end press Export to worksheet, then Clear.

**Part 1: Ampère's law.** In the Ampère's law setup, record the reading as it opens. Then record (1) with Clockwise pressed in the Ampère's law section; (2) back on Counterclockwise, with Rectangle pressed; (3) with the loop moved, or made larger, so it also surrounds the third wire at (6.0, 1.5); and (4) with the loop moved so it surrounds no wire. Next pick the One wire setup, press the Amperian loop button above the picture and press Circle. Record with a circle of radius 3.0 cm centered on the wire, at (0, 0), then with a circle of radius 3.0 cm centered at (1.5, 0), and with a circle of radius 3.0 cm centered at (5.0, 0), which does not surround the wire. Change the radius by dragging the loop's edge or, with the loop selected, with the + and − keys (0.2 cm a press); the Loop readout shows the radius. With that last circle still in place, drag the probe onto its point nearest the wire, then onto its point farthest from it, and at each read the size of B at the probe and its direction in the Probe position and direction of B readout; these go in your answer to Question 2.

**Using the virtual apparatus.** A reading with a wire on the Amperian loop cannot be recorded, since $$\oint \vec B\cdot d\vec l$$ is not defined there. Export fills every column of the Data table.

## Data

| Trial | Setup | Current I₁ (A) | Current I₂ (A) | Amperian loop | Current through the loop (A) | Circulation of B around the loop (μT·m) |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |
| | | | | | | |
| | | | | | | |
| | | | | | | |
| | | | | | | |
| | | | | | | |
| | | | | | | |

## Analysis

1. Divide the circulation by the current through the loop for every row with current inside. What do you get, how does it compare with $$\mu_0$$, and does it depend on the loop's shape, size, position or direction? What happens with no current inside?

## Uncertainty

The model has no noise: the circulation is given to six significant figures and positions are set to 0.1 cm, so the ratios in Analysis 1 should agree with one another to about the last digit; say how closely they do. In a real experiment the wires are not infinitely long, Earth's field (about 50 μT) adds to the wire's but cancels around a closed loop, and a probe has a size of its own.

## Questions

1. Ampère's law holds for the rectangle and the circle alike, but only for the circle centered on a single wire can you use it to find $$B$$ on the loop. Explain why, and use your circle of radius 3.0 cm to find $$B$$ from the circulation.
2. For the circle beside the wire, what were the circulation and the two probe readings, and how do they square with your answers to Before the lab 3? Explain them using the direction of $$\vec B$$ along the loop on the side near the wire and on the far side.

## With calculus

For courses that use calculus. This section is not counted in the 75 minutes; do it when your instructor assigns it.

1. Put the wire at the origin and use polar coordinates $$r$$ and $$\varphi$$. A short step $$d\vec l$$ along any path has a part $$dr$$ straight away from the wire and a part $$r\,d\varphi$$ around it. Show that for a long straight wire $$\vec B\cdot d\vec l = \frac{\mu_0 I}{2\pi}\,d\varphi$$, whatever the path. Use this to show that $$\oint \vec B\cdot d\vec l = \mu_0 I$$ for any loop that goes once around the wire counterclockwise, and 0 for any loop that does not go around it.
2. For your circle of radius 3.0 cm centered at (5.0, 0), find the angle $$\varphi$$ of its top point (5.0, 3.0) and of its bottom point (5.0, −3.0), seen from the wire. Use the result of With calculus 1 to find $$\int \vec B\cdot d\vec l$$ counterclockwise along the half nearest the wire (from the top through (2.0, 0) to the bottom) and along the half farthest from it, and check that they add to your recorded circulation. Your probe readings show the field on the near side four times stronger than on the far side. Why, then, do the two halves contribute the same amount?

## What to hand in

Prelab answers, the Data table copy with its comparisons, your ratios and what they equal, and answers to the questions (and to With calculus, if assigned). Identify simulated data.
