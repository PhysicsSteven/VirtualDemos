# Electric Fields and Potential
Student laboratory · Physics II

Textbook: OpenStax *University Physics*, Vol. 2, §§5.3–5.4 and 7.2–7.5. Access for free at https://openstax.org/details/books/university-physics-volume-2.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/coulomb-sandbox.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Dipole; Like pair; +3 and −1; Triangle; Quadrupole; Rod; Ring; Disk; Arc; Ring in the map.

**Using the demo.**

- Hover over the field, tap to place the probe, or press P on the field and use the arrow keys. The probe sits on a 0.1 cm grid. Each charge is modeled as a uniformly charged ball 1.2 mm in radius, inside its drawn disc; outside the ball V and E are exact point charge values.
- The field of this object alone (other charges left out), compared with the formulas of OpenStax section 5.5 at the probe. Each formula is exact only where its note says; elsewhere it is a limit. Select another rod, ring or disk to compare it.
- Record reading stores the probe position and the values shown above, rounded as displayed, with the charges that produced them (listed in the CSV header). Cells can be edited; rows stay through setup changes until Clear. Press C on the field to capture.
- Blind hides the field lines, the equipotentials, the potential shading, the 3D landscape and the field map data table. The charges, the grid and the probe stay, so students map the field from probe readings.
- In 3D, height is the potential: hills at positive charges, wells at negative ones. Heights are compressed near each charge, where V grows without bound.
- Along a line graphs V and the part of E along a line through the probe (or along a ring's or disk's axis, an arc's line of symmetry or a rod's bisector), with −ΔV/Δs worked out from V alone as dots.
- A ring or disk stands across the map with its axis in the map; an arc lies in the map, and an arc of 360° is a ring lying in the map. Their V and E are the exact integrals of k dq/r.

</details>

## Goal

Use electric field and potential measurements to test the distance laws for a charge and investigate how two charges combine.

## Background

Outside a small spherical charge, the field and potential are those of a point charge (§§5.3–5.4 and 7.3):

$$\mathbf E=\frac{q}{4\pi\epsilon_0r^2}\hat{\mathbf r},\qquad V=\frac{q}{4\pi\epsilon_0r}.$$

Fields add as vectors and potentials add as signed numbers. Potential differences determine the field (§7.4):

$$E_x=-\frac{\partial V}{\partial x},\qquad E_y=-\frac{\partial V}{\partial y}.$$

A small displacement along an equipotential has no component along the field (§7.5).

## Before the lab

1. Predict how $$E$$ and $$V$$ change if the distance from one charge doubles.
2. Can $$V$$ be zero where the electric field is nonzero? Sketch an example.
3. Why must a slope used to estimate $$E$$ have distance in meters?
4. Two equal positive charges sit 6 cm apart. At the midpoint between them, is the electric field twice that of one charge alone, the same as one charge's, or zero? Is the potential twice that of one charge, the same, or zero? Sketch the pair and explain each answer.

## Safety

For a real electrostatics apparatus, follow the instructor's charging and discharge procedure. Keep high voltage equipment dry and disconnect it before handling electrodes.

## Procedure

**One charge.** Use a small charged sphere and suitable probes, or the virtual apparatus. Keep the same charge for a distance scan. Record at least six points along one radial line. Keep the probe well outside the sphere and use distances that span at least a factor of three.

**Two charges.** Place equal and opposite charges at fixed positions. Record the potential, field magnitude and direction at their midpoint and at four points along the perpendicular bisector. Repeat with two equal positive charges.

**Potential gradient.** Choose a point away from either charge. Measure $$V$$ at equal small distances $$h$$ to its left and right (for example $$h$$ = 1.0 cm, using the probe's arrow keys, 0.1 cm a press). Use the central difference to estimate $$E_x$$. Repeat with a smaller separation, then compare with the measured field component $$E_x = E\cos(\text{direction})$$ at the point itself.

**Using the virtual apparatus.** Choose **2D map**, keep **1 cm grid** on (under Layers), and turn on **Blind: hide predictions and answers** (under Lab). Start from **Dipole**, select one charge and press **Remove** for the single charge scan; set the remaining charge to +1 nC with **Selected charge**. Place it at the grid origin and record its actual position. Click the map to place the probe, or press P on the map and use the arrow keys (0.1 cm a press); read V, the field magnitude, the direction and the position from the Probe panel. Stay at least 0.5 cm from a charge. Use **Record reading** at every point and **Export to worksheet** after each configuration, then **Clear**. Use **Dipole** and **Like pair** for the two charge scans. Inspect the saved charge positions/settings in each export rather than assuming a preset survived your edits. Turn Blind off and **Equipotentials** on for the final comparison.

## Data

| Configuration and $$q$$ (C) | Probe $$x$$ (m) | Probe $$y$$ (m) | $$r$$ (m) | $$V$$ (V) | $$E$$ (V/m) | Direction from $$+x$$ (°) |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |
| | | | | | | |

Add rows for all measurements. Fill in $$r$$ yourself (Export leaves it blank). For two charges, record both charge positions above the table and use each charge's distance separately in your calculations.

## Analysis

1. Plot $$V$$ (vertical) against $$1/r$$ (horizontal), and $$E$$ against $$1/r^2$$, for the single charge. Infer $$q$$ from each slope and compare the results.
2. Calculate the vector field and signed potential for the two charge measurements. Compare both components of the predicted field with $$E\cos\theta$$ and $$E\sin\theta$$.
3. Estimate $$E_x = -[V(x+h)-V(x-h)]/(2h)$$. Explain how the result changes when $$h$$ is reduced.
4. Compare field direction with the equipotential curves.

## Uncertainty

Use coordinate and readout resolution to estimate uncertainty. Distance errors matter most near a charge. A very small $$h$$ amplifies rounding in the potential difference; a large $$h$$ gives a poorer derivative approximation. Report the $$h$$ values used and identify the stable range. The simulation is deterministic; do not invent random scatter.

## Questions

1. Why do the field and potential follow different powers of $$r$$?
2. At the midpoint of the two equal positive charges, what did you read for $$V$$ and $$E$$, and how does that compare with Before the lab 4? Explain the difference from how fields add and how potentials add. Does a negative potential imply that the electric field points in the negative $$x$$ direction?

## With calculus

For courses that use calculus. This section is not counted in the 75 minutes; do it when your instructor assigns it.

1. For a charge $$q$$ at the origin, $$V = kq/\sqrt{x^2+y^2}$$. Take the partial derivatives to get $$E_x = -\partial V/\partial x$$ and $$E_y = -\partial V/\partial y$$, and show that together they make a field of size $$kq/r^2$$ pointing straight away from the charge. Evaluate $$E_x$$ and $$E_y$$ at the point you used for the potential gradient and compare them with $$E\cos\theta$$ and $$E\sin\theta$$ from your reading there.
2. On the perpendicular bisector of the Like pair (charges $$q$$ at $$x = \pm a$$), $$V(y) = 2kq/\sqrt{a^2+y^2}$$. Differentiate to get $$E_y(y)$$, then set $$dE_y/dy = 0$$ to find where along the bisector the field is strongest. Which of your Like pair readings is largest, and what does your $$E_y(y)$$ give at its $$y$$?
3. Since $$E = -dV/dr$$, $$V(r_1) - V(r_2) = \int_{r_1}^{r_2} E\,dr$$. Estimate this integral from 2 cm to 5 cm with the trapezoid rule, using your single charge readings of $$E$$ in that range, and compare it with the difference of your $$V$$ readings at 2 and 5 cm. Why does the trapezoid rule come out high here?

## What to hand in

Prelab answers, configuration sketches, raw data and CSV, both distance law graphs, inferred charge with uncertainty, the gradient comparison, and answers to the questions (and to With calculus, if assigned). Identify simulated data.
