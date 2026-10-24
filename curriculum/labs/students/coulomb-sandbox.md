# Electric Fields and Potential
Student laboratory · Physics II

Textbook: OpenStax *University Physics*, Vol. 2, §§5.3–5.7 and 7.1–7.5. Access for free at https://openstax.org/details/books/university-physics-volume-2.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/coulomb-sandbox.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Dipole; Like pair; +3 and −1; Triangle; Quadrupole; Rod; Ring; Disk.

**Using the demo.**

- Hover over the field, tap to place the probe, or press P on the field and use the arrow keys. The probe sits on a 0.1 cm grid. Each charge is modeled as a uniformly charged ball 1.2 mm in radius, inside its drawn disc; outside the ball V and E are exact point charge values.
- The field of this object alone (other charges left out), compared with the formulas of OpenStax section 5.5 at the probe. Each formula is exact only where its note says; elsewhere it is a limit. Select another rod, ring or disk to compare it.
- Capture stores the probe position and the values shown above, rounded as displayed, with the charges that produced them (listed in the CSV header). Cells can be edited; rows stay through setup changes until Clear. Press C on the field to capture.
- Blind hides the field lines, the equipotentials, the potential shading, the 3D landscape and the field map data table. The charges, the grid and the probe stay, so students map the field from probe readings.
- In 3D, height is the potential: hills at positive charges, wells at negative ones. Heights are compressed near each charge, where V grows without bound.

</details>

## Goal

Use electric field and potential measurements to test the distance laws for a charge, then investigate how two charges combine.

## Background

Outside a small spherical charge, the field and potential are those of a point charge (§§5.3–5.4 and 7.3):

$$\mathbf E=\frac{q}{4\pi\epsilon_0r^2}\hat{\mathbf r},\qquad V=\frac{q}{4\pi\epsilon_0r}.$$

Fields add as vectors and potentials add as signed numbers. Potential differences determine the field (§7.4):

$$E_x=-\frac{\partial V}{\partial x},\qquad E_y=-\frac{\partial V}{\partial y}.$$

A small displacement along an equipotential has no component along the field (§7.5).

**Potential energy of a set of charges (§7.1).** Bringing a charge $$q$$ from far away to a point where the other charges make a potential $$V$$ takes work $$W = qV$$, and that work is stored as electric potential energy. Assembling charges one at a time therefore stores

$$U = \sum_{\text{pairs}}\frac{q_iq_j}{4\pi\epsilon_0 r_{ij}},$$

one term for each pair, counted once. $$U$$ is negative when attraction wins: then work must be done to pull the charges apart. The demo shows $$U$$ for point charges in microjoules ($$1\ \mu\mathrm J = 10^{-6}$$ J).

## Before the lab

1. Predict how $$E$$ and $$V$$ change if the distance from one charge doubles.
2. Can $$V$$ be zero where the electric field is nonzero? Sketch an example.
3. Why must a slope used to estimate $$E$$ have distance in metres?
4. Find the potential energy of +2 nC and −2 nC that are 6.0 cm apart, and the work needed to pull them apart to 12.0 cm.

## Safety

For a real electrostatics apparatus, follow the instructor's charging and discharge procedure. Keep high voltage equipment dry and disconnect it before handling electrodes.

## Procedure

**One charge.** Use a small charged sphere and suitable probes, or the virtual apparatus. Keep the same charge for a distance scan. Record at least six points along one radial line. Keep the probe well outside the sphere and use distances that span at least a factor of three. Repeat for the opposite charge sign.

**Two charges.** Place equal and opposite charges at fixed positions. Record the potential, field magnitude and direction at their midpoint and at four points along the perpendicular bisector. Repeat with two equal positive charges. Predict each result before reading it.

**Potential gradient.** Choose a point away from either charge. Measure $$V$$ at equal small distances to its left and right. Use the central difference to estimate $$E_x$$. Repeat with a smaller separation, then compare with the measured field component.

**Potential energy.** Work with the answers hidden, and calculate each energy before you show it. Start from the Triangle setup (+2 nC at (−3, 2) cm, +2 nC at (3, 2) cm, −2 nC at (0, −2.5) cm) and calculate $$U$$ of the three charges. Then take the charges away one at a time, which is the assembly run backwards: remove the −2 nC charge, put the probe where it was and read $$V$$ there, which gives the work needed to bring it back; then remove one +2 nC charge and do the same. Record each step in the Potential energy table, then show the answers and check each $$U$$. Finally, place +2 nC and −2 nC 6.0 cm apart and then 12.0 cm apart on the same line, and record $$U$$ for each.

**Using the virtual apparatus.** Choose **2D map**, enable **1 cm grid**, and turn on **Blind: hide predictions and answers**. Start from **Dipole**, select one charge and press **Remove** for the single charge scan; set the remaining charge to +1 nC with **Selected charge**. Place it at the grid origin and record its actual position. Press P to activate the probe; drag it or use the arrow keys and record the actual displayed coordinates. Stay at least 0.5 cm from a charge. Use **Capture reading** at every point and **Export to worksheet** after each configuration, then **Clear**. Use **Dipole** and **Like pair** for the two charge scans. Inspect the saved charge positions/settings in each export rather than assuming a preset survived your edits. Turn Blind off and **Equipotentials** on for the final comparison.

## Data

| Configuration and $$q$$ (C) | Probe $$x$$ (m) | Probe $$y$$ (m) | $$r$$ (m) | $$V$$ (V) | $$E$$ (V/m) | Direction from $$+x$$ (°) |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |
| | | | | | | |

Add rows for all measurements. For two charges, record both charge positions above the table and use each charge's distance separately in your calculations.

**Potential energy.** Energies in μJ; positions in cm.

| Step | Charges on the map | $$U$$ by hand (μJ) | $$U$$ shown (μJ) | $$V$$ where the removed charge was (V) | Work to bring it back, $$qV$$ (μJ) |
|---|---|---|---|---|---|
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |

## Analysis

1. Plot $$V$$ against $$1/r$$ and $$E$$ against $$1/r^2$$ for the single charge. Infer $$q$$ from each slope and compare the results.
2. Calculate the vector field and signed potential for the two charge measurements. Compare both components of the predicted field with $$E\cos\theta$$ and $$E\sin\theta$$.
3. Estimate $$E_x = -[V(x+h)-V(x-h)]/(2h)$$. Explain how the result changes when $$h$$ is reduced.
4. Compare field direction with the equipotential curves. Identify one point where cancellation of potential differs from cancellation of field.

5. Add the works you found for bringing the charges back, in the order they would be assembled, and compare the sum with $$U$$ of the full triangle. Which pairs make the largest contributions, and why is the total negative?
6. From the two dipole rows, find the work needed to pull the charges from 6.0 cm to 12.0 cm apart, and check it against your answer to item 4 of Before the lab.

## Uncertainty

Use coordinate and readout resolution to estimate uncertainty. Distance errors matter most near a charge. A very small $$h$$ amplifies rounding in the potential difference; a large $$h$$ gives a poorer derivative approximation. Report the $$h$$ values used and identify the stable range. The simulation is deterministic; do not invent random scatter.

## Questions

1. Why do the field and potential follow different powers of $$r$$?
2. Why is the field nonzero at the midpoint of an equal and opposite pair?
3. Why is the field zero at the midpoint of an equal positive pair, although the potential is not?
4. Does a negative potential imply that the electric field points in the negative $$x$$ direction?
5. Why is the potential energy of a set of charges a sum over pairs, with each pair counted once, and not a sum over the charges?

## What to hand in

Prelab answers, configuration sketches, raw data and CSV, both distance law graphs, inferred charge with uncertainty, the gradient comparison, the Potential energy table and answers to the questions. Identify simulated data.
