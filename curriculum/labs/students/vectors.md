# Vectors: Components, Sums, Differences and Products
Student activity · Physics I

Textbook: OpenStax *University Physics*, Vol. 1, §2.1, §2.2, §2.4, §4.1 and §4.2. Access for free at https://openstax.org/details/books/university-physics-volume-1.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/vectors.html?setup=comp)

## Goal

Find the components, magnitude and direction of a vector, add and subtract vectors by components, use a difference of two vectors to find a displacement and an average acceleration, and compute the scalar and vector products of two vectors.

## Background

A **scalar** has a size only (a mass, a time, a temperature). A **vector** has a size and a direction (a displacement, a velocity, a force). In a plane with $$x$$ and $$y$$ axes, a vector $$\vec A$$ is the sum of its two **components** along the axes,

$$\vec A = A_x\,\hat i + A_y\,\hat j,\qquad A_x = A\cos\theta_A,\qquad A_y = A\sin\theta_A,$$

where $$\theta_A$$ is measured counterclockwise from the $$+x$$ axis. Going the other way,

$$A = \sqrt{A_x^2 + A_y^2},\qquad \tan\theta_A = \frac{A_y}{A_x}.$$

The inverse tangent on a calculator only returns angles between $$-90^\circ$$ and $$+90^\circ$$, so check the quadrant from the signs of $$A_x$$ and $$A_y$$ and add $$180^\circ$$ (or $$360^\circ$$) when needed. In this activity every angle is given from $$0^\circ$$ to $$360^\circ$$.

Vectors add and subtract **component by component**:

$$\vec R = \vec A + \vec B:\qquad R_x = A_x + B_x,\qquad R_y = A_y + B_y,$$

$$\vec D = \vec A - \vec B:\qquad D_x = A_x - B_x,\qquad D_y = A_y - B_y.$$

Magnitudes do not add: $$\lvert\vec A + \vec B\rvert \le A + B$$, with equality only when the two vectors point the same way.

A difference of vectors is how motion is described. If an object is at position $$\vec r_1$$ at time $$t_1$$ and at $$\vec r_2$$ at $$t_2$$, its **displacement** is $$\Delta\vec r = \vec r_2 - \vec r_1$$ and its average velocity is $$\vec v_{\rm avg} = \Delta\vec r/\Delta t$$ (§4.1). In the same way its average acceleration is $$\vec a_{\rm avg} = (\vec v_2 - \vec v_1)/\Delta t$$ (§4.2). The acceleration points along the change in velocity, which need not be the direction of either velocity.

Two products are defined (§2.4). The **scalar (dot) product** is a number,

$$\vec A\cdot\vec B = AB\cos\varphi = A_xB_x + A_yB_y,$$

where $$\varphi$$ is the angle between the vectors (from $$0^\circ$$ to $$180^\circ$$). It is positive when the angle is acute, zero when the vectors are perpendicular and negative when the angle is obtuse. The **vector (cross) product** $$\vec A\times\vec B$$ is perpendicular to both vectors, with size $$AB\sin\varphi$$, the area of the parallelogram they span. For two vectors in the $$xy$$ plane it points along $$\pm z$$, out of the page or into it, with

$$(\vec A\times\vec B)_z = A_xB_y - A_yB_x,$$

positive (out of the page) when $$\vec B$$ is counterclockwise from $$\vec A$$ by less than $$180^\circ$$. Reversing the order reverses the cross product, $$\vec B\times\vec A = -\vec A\times\vec B$$, but leaves the dot product unchanged.

The demo draws vectors on a grid, and every component is a whole number of grid squares when the tips snap to the grid. The grid squares stand for whatever unit a part gives (metres, metres per second, or no unit). The demo works in a plane only, so every cross product here is along $$z$$.

## Before the activity

1. Classify as a scalar or a vector: the 3.0 m length of a rope, a 3.0 m displacement due north, a speed of 12 m/s, a velocity of 12 m/s east, a time of 4.0 s, a weight of 9.8 N.
2. A vector has components $$(-3, 4)$$. Find its magnitude, and explain why a calculator's $$\tan^{-1}(4/(-3))$$ does not give its direction. Give the correct angle from $$+x$$.
3. A vector has magnitude 10 and points at $$233.13^\circ$$ from $$+x$$. Find its components to the nearest 0.01.
4. Without calculating, decide the sign of $$\vec A\cdot\vec B$$ and the direction of $$\vec A\times\vec B$$ for $$\vec A$$ along $$+x$$ and $$\vec B$$ at $$120^\circ$$.

## Procedure

Work with the answers hidden, so the demo shows only the vectors you set and the grid. Leave tips snapping to the grid. For each row, calculate the results by hand in the Data table (and the Products table for Part 4) before you show the answers to check, then record the row. Record every row in the setup it belongs to.

**Part 1: components, magnitude and direction.** In the Components setup, set $$\vec A$$ to $$(4, 3)$$, $$(-5, 2)$$, $$(-3, -6)$$ and $$(6, -2)$$ in turn. For each, find $$A$$ and $$\theta_A$$ (enter $$\vec A$$ itself as the result). Then set the vector of item 3 of Before the activity from your components and check that its magnitude and angle come out as given.

**Part 2: adding vectors.** In the Adding setup, find $$\vec A + \vec B$$, its magnitude and its angle for $$\vec A = (5, 1)$$, $$\vec B = (-2, 4)$$; then for $$\vec A = (2, 1)$$, $$\vec B = (4, 2)$$; then for $$\vec A = (6, 8)$$, $$\vec B = (-3, -4)$$. Compare $$\lvert\vec A + \vec B\rvert$$ with $$A + B$$ each time. Draw $$\vec B$$ head to tail for the first sum, and from the origin for the same sum again, and note that the result is the same.

**Part 3: displacement and acceleration.** Use the Subtracting setup, with $$\vec A$$ the later vector and $$\vec B$$ the earlier one, so the demo's $$\vec A - \vec B$$ is the change.
- (a) A ball is at $$\vec r_1 = (2, 6)$$ m at $$t_1 = 1.0$$ s and at $$\vec r_2 = (8, 3)$$ m at $$t_2 = 3.0$$ s. Find $$\Delta\vec r$$, its magnitude and direction, and then the average velocity.
- (b) A thrown ball has velocity $$\vec v_1 = (3, 5)$$ m/s at $$t_1 = 0.50$$ s and $$\vec v_2 = (3, -5)$$ m/s at $$t_2 = 1.52$$ s. Find $$\Delta\vec v$$ and the average acceleration, and compare it with free fall.
- (c) A car rounds a corner at constant speed: $$\vec v_1 = (8, 0)$$ m/s, then $$\vec v_2 = (0, 8)$$ m/s four seconds later. Find $$\Delta\vec v$$ and the average acceleration, with its direction.

**Part 4: scalar and vector products.** In the Dot and cross products setup, for each pair find $$\vec A\cdot\vec B$$ from components and $$(\vec A\times\vec B)_z$$ from components, then find the angle $$\varphi$$ between them from the dot product and check that $$AB\sin\varphi$$ matches the size of the cross product. Pairs: $$\vec A = (5, 1)$$, $$\vec B = (2, 4)$$; $$\vec A = (4, 0)$$, $$\vec B = (0, 3)$$; $$\vec A = (3, 4)$$, $$\vec B = (4, 3)$$; then the same two in the other order, $$\vec A = (4, 3)$$, $$\vec B = (3, 4)$$; and $$\vec A = (4, 0)$$, $$\vec B = (-4, 3)$$.

**Using the demo.** Send your recorded rows to the worksheet when you have finished all four parts; they fill the setup and component columns of the Data table in order, and the result columns stay yours. For Part 4 rows, leave the result columns of the Data table empty and use the Products table.

## Data

Components in grid squares, or in the unit the part gives.

| Trial | Setup | $$A_x$$ | $$A_y$$ | $$B_x$$ | $$B_y$$ | Result $$x$$ | Result $$y$$ | Magnitude | Angle from $$+x$$ (°) |
|---|---|---|---|---|---|---|---|---|---|
| | | | | | | | | | |
| | | | | | | | | | |
| | | | | | | | | | |
| | | | | | | | | | |
| | | | | | | | | | |
| | | | | | | | | | |
| | | | | | | | | | |
| | | | | | | | | | |

Note what each trial is (a position, a velocity, a sum) and give the unit of the result.

**Products.** One row for each pair in Part 4.

| Trial | $$\vec A\cdot\vec B$$ from components | $$AB$$ | Angle $$\varphi$$ (°) | $$(\vec A\times\vec B)_z$$ from components | $$AB\sin\varphi$$ | Out of or into the page |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |
| | | | | | | |
| | | | | | | |
| | | | | | | |

## Analysis

1. In Part 1, which of your angles needed a quadrant correction to the calculator's inverse tangent? State the correction you made for each.
2. In Part 2, for which sum is $$\lvert\vec A + \vec B\rvert = A + B$$, and for which is it $$\lvert A - B\rvert$$? What do the two cases have in common, and what is the general rule?
3. In Part 3(a), the ball's path between the two positions need not be straight. Which of your results depend on the path it took, and which do not?
4. In Part 3(b), the speed is the same at both times, yet the average acceleration is not zero. Explain, and give the direction of $$\vec a_{\rm avg}$$. In Part 3(c), the car's speed does not change either: find the size and direction of its average acceleration and say what it points toward.
5. In Part 4, show from your Products table that $$\vec A\cdot\vec B$$ is the same in either order and that $$(\vec A\times\vec B)_z$$ changes sign. Use $$(\vec A\times\vec B)_z$$ to give the area of the parallelogram spanned by $$(3, 4)$$ and $$(4, 3)$$.

## Uncertainty

With tips snapped to the grid every component is exact, and the demo's results are computed from those exact values, so any difference from your answers is arithmetic or rounding, not measurement. Give magnitudes to three significant figures and angles to 0.1°. On paper with a ruler and protractor, a scale drawing is good to about a millimetre and a degree, so components found from a drawing carry that uncertainty.

## Questions

1. Can a vector have a component larger than its magnitude? Can its magnitude be zero if one component is not?
2. Two vectors have magnitudes 3 and 4. What are the largest and smallest possible magnitudes of their sum, and what is the magnitude when they are perpendicular?
3. If $$\vec A\cdot\vec B = 0$$ and $$\vec A\times\vec B = 0$$, what must be true of $$\vec A$$ or $$\vec B$$?
4. A ball thrown upward is at the top of its path. Its velocity there is horizontal. Which way does its acceleration point, and how does Part 3(b) show it?
5. Work done by a force over a displacement is $$W = \vec F\cdot\Delta\vec r$$ and the torque of a force about a point is $$\vec\tau = \vec r\times\vec F$$. Which of the two is zero when the force is perpendicular to $$\vec r$$ or $$\Delta\vec r$$, and which is largest then?

## What to hand in

Answers to Before the activity, the Data and Products tables, the analysis and answers to the questions. Identify the demo's checks as simulated results.
