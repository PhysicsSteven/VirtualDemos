# Vector Fields: Work Along Different Paths
Student laboratory · Math for physics

Textbook: OpenStax *Calculus*, Vol. 3, §§6.1 to 6.5. Access for free at https://openstax.org/details/books/calculus-volume-3. For the physics: OpenStax *University Physics*, Vol. 1, §§7.1 and 8.2, and Vol. 2, §12.5.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/vector-fields.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Uniform gravity: work depends only on height; A swirl force: work depends on the path; A point mass: inverse square; An electric dipole; The field around a long wire; A rotating fluid; A shear flow; A spreading flow; A source and a sink.

**Using the demo.**

- The two boxes above the picture hold the field, F(x, y) = (P, Q). Each setup fills them in; you can also type your own.
- **The path** card (under the picture) chooses the path: **Straight line**, **Along x, then y**, **Along y, then x**, **Half circle**, **Circle (closed loop)**, **Square (closed loop)** or **Freehand**. Type the ends in **From A** and **to B** (or the **Center** and **Radius** of a loop), or drag the dots on the picture. **Compare with** draws a second path between the same ends.
- The path is colored by the sign of F along it: warm where F pushes along the direction of travel (positive work), teal where it pushes against it. **Play** sends a bead along the path and labels the work added up so far.
- The Readouts give the line integral from A to B (for a force, the work W in joules). For a closed loop they give the circulation ∮F·dr and the summed curl inside, ∬ curl F dA; with **Flux and divergence** chosen on the Probes card, the outward flux and the summed divergence too.
- **Paddle wheel** (Probes card) puts a small wheel on the picture; drag it anywhere. The Readouts give the curl of F at its center.
- For a field with a potential, the picture shows its contours and the Readouts give f(A) and f(B), with ∇f = F.
- **Record reading** stores one row for each path on show: the field, the path and the line integral (and, for a loop, the circulation and the summed curl). **Export to worksheet** sends the rows to the Data tables below: open paths go to Table 1, loops to Table 2. **Clear** starts a new series.
- **Blind** (in the **Lab** fold at the bottom of the sidebar) hides the curl, the divergence, the potential and the demo's verdict on whether F is conservative.
- These are computed values, not measurements: the derivatives are exact and the integrals are accurate to many more digits than the readouts show.

</details>

## Goal

Add up the work done by a force along different paths between the same two points, decide from the results and from the curl which forces are conservative, and find the potential of a conservative force.

## Background

A **vector field** gives a vector at every point of the plane: $$\vec F(x,y) = \big(P(x,y),\,Q(x,y)\big)$$. Forces, electric and magnetic fields and the velocity of a fluid are all vector fields.

The **work** done by a force as an object moves along a path C is the line integral

$$W = \int_C \vec F\cdot d\vec r = \int_C (P\,dx + Q\,dy).$$

To evaluate it, describe the path by a parameter t, $$\vec r(t) = \big(x(t), y(t)\big)$$ for $$a \le t \le b$$, and integrate $$P\,x'(t) + Q\,y'(t)$$ from a to b. On a piece where only x changes, dy = 0 and only P counts; where only y changes, only Q counts. Running the path backward changes the sign of W.

A force is **conservative** when the work between two points is the same along every path that joins them; then the work around any closed loop is zero. A conservative field is a gradient: there is a **potential** f with

$$\vec F = \nabla f = \left(\frac{\partial f}{\partial x},\ \frac{\partial f}{\partial y}\right), \qquad \int_C \vec F\cdot d\vec r = f(B) - f(A).$$

Physics writes the potential energy as U = −f, so that $$\vec F = -\nabla U$$ and W = U(A) − U(B). To find f, integrate P with respect to x, then fix the part that depends only on y so that ∂f/∂y = Q.

The **curl** of a field in the plane is

$$\operatorname{curl}\vec F = \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y}.$$

If F has a potential, both mixed partial derivatives of f are equal, so the curl is zero. A small paddle wheel in a fluid moving with velocity F turns at half the curl, counterclockwise when the curl is positive.

**Green's theorem** ties the two together. For a closed loop C traveled counterclockwise around a region D, with F defined and smooth everywhere in D,

$$\oint_C \vec F\cdot d\vec r = \iint_D \operatorname{curl}\vec F\,dA.$$

The circulation around the loop is the curl summed over the inside. So a field whose curl is zero everywhere in a region without holes has zero work around every loop there, and is conservative there.

The **magnetic field of a long straight wire** carrying a current I out of the page is $$\vec B = \frac{\mu_0 I}{2\pi}\,\frac{(-y,\ x)}{x^2 + y^2}$$; the demo gives it in units of μ₀I/2π. It is undefined on the wire itself, at the origin.

## Before the lab

1. The weight of a 1.00 kg mass is $$\vec F = (0,\ -9.81)$$ N, with x and y in meters. Find the work it does along the straight line from A = (0, 0) to B = (3, 2), using $$\vec r(t) = (3t,\ 2t)$$, $$0 \le t \le 1$$.
2. A swirl force is $$\vec F = (-y,\ x)$$ N, with x and y in meters. Find the work it does from A = (0, 0) to B = (3, 2) along the straight line, and along the path that goes along x to (3, 0) and then along y to B.
3. Find the curl of each of the two forces in 1 and 2.
4. Show that the curl of the wire's field, $$\big(-y/(x^2+y^2),\ x/(x^2+y^2)\big)$$, is zero everywhere except at the origin. Then predict, before you run it: the circulation $$\oint \vec B\cdot d\vec r$$ around a circle of radius 1 centered on the wire, and around a circle of radius 1 centered at (3, 0). Write your two predictions and one sentence of reasoning.

## Safety

No hazards in the virtual lab.

## Procedure

**A. Work in uniform gravity.** Open the **Lab** fold at the bottom of the sidebar and tick **Blind**. Press the **Uniform gravity: work depends only on height** setup. It sets From A = (0, 0) and to B = (3, 2). On **The path** card set **Compare with** to **No second path**. With **Path** on **Straight line**, press **Record reading**. Then set **Path** to **Along x, then y**, **Along y, then x** and **Half circle** in turn, pressing **Record reading** after each. Press **Play** once and watch the bead: note where along each path the work grows and where it stays the same.

**B. Work done by the swirl force.** Press the **A swirl force: work depends on the path** setup (it sets the same A and B), set **Compare with** to **No second path** again, and record the same four paths in the same way. Press **Export to worksheet** (the eight rows go to Table 1), then **Clear**.

**C. Around closed loops.** Press the **Uniform gravity** setup. Set **Path** to **Circle (closed loop)** and check that **Center** is (1, 1) and **Radius** is 1; press **Record reading**. Press the **A swirl force** setup, set **Path** to **Circle (closed loop)** with the same center and radius, and record. Then set **Path** to **Square (closed loop)** (center (1, 1); Radius 1 is half the side) and record.

**D. The wire (check your prediction).** Press **The field around a long wire** setup. Set **Radius** to 1 (center (0, 0)) and record. Then set the **Center** to (3, 0) and record. Press **Export to worksheet** (the five loop rows go to Table 2), then **Clear**. Read the note the Readouts show under the circulation for the first of the two loops.

**E. Curl and potential.** Untick **Blind**. Press the **Uniform gravity** setup, tick **Paddle wheel** on the Probes card, and drag the wheel to two different places; write down the **curl F at the paddle** readout each time, and the readouts f(A) and f(B). Do the same with the **A swirl force** setup. Last, press **A point mass: inverse square**: it compares the straight line and the half circle from A = (3, 0) to B = (1, 0). Write down both line integrals and f(A), f(B).

## Data

Table 1. Work from A = (0, 0) to B = (3, 2).

| Reading | Field | Path | Work W (J) |
|---|---|---|---|
| | | | |
| | | | |
| | | | |
| | | | |
| | | | |
| | | | |
| | | | |
| | | | |

Table 2. Around closed loops, counterclockwise. The circulation is in joules for the two forces and in units of μ₀I/2π for the wire.

| Reading | Field | Loop | Circulation ∮F·dr | Summed curl inside ∬ curl F dA |
|---|---|---|---|---|
| | | | | |
| | | | | |
| | | | | |
| | | | | |
| | | | | |

## Analysis

1. From Table 1, compare the four values of W for each force. Which force is conservative, and how do the tables show it? Compare with your Before the lab answers 1 and 2.
2. For the swirl force along x, then y: explain from F = (−y, x) why the first leg (along the x axis) adds no work, and why the second leg adds 3 N times 2 m.
3. Check Green's theorem in Table 2 for the swirl force: work out the curl times the area for the circle and for the square by hand, and compare with both columns.
4. Find the potential f of the uniform gravity force, with ∇f = F and f = 0 at the origin. Check that f(B) − f(A) equals the work in Table 1 and agrees with the f readouts you wrote down in step E. What is the potential energy U = −f, and why does the work depend only on the change in height?
5. Show that f = 1/r, with $$r = \sqrt{x^2 + y^2}$$, is a potential of the point mass force $$\vec F = -(x,\ y)/r^3$$ (in units where GMm = 1). Use it to predict the work from (3, 0) to (1, 0), and compare with both paths you read in step E.
6. Use the curl readouts from step E to say which force passed the curl test. Does that agree with your answer to Analysis 1?

## Uncertainty

The demo's numbers are not measurements: the same settings give the same digits every time. The derivatives are exact formulas and the line integrals are accurate to about nine significant figures, so a difference between two paths in the third or fourth figure would be real, not rounding. Say how close the gravity values in Table 1 are to each other, and whether that settles which force is conservative.

## Questions

1. Compare the wire's two circulations in Table 2 with your prediction in Before the lab 4. The curl of B is zero everywhere the field is defined, yet one loop gives 2π. Explain why Green's theorem does not apply to that loop, and how the result is Ampère's law, $$\oint \vec B\cdot d\vec r = \mu_0 I$$.
2. Friction does negative work around any closed loop, yet it cannot be drawn as a vector field F(x, y). Why not, and why does that alone keep friction from having a potential energy?
3. A student claims the swirl force has a potential energy U(x, y). Use one number from Table 2 to show that no such U can exist.

## What to hand in

Before the lab answers, the two data tables, the readings you wrote down in step E, and your answers to the Analysis and Questions. Say that the data are computed by the demo, not measured.
