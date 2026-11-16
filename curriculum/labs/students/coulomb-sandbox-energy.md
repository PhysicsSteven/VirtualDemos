# Rings, Arcs and Potential Energy
Student laboratory · Physics II

Textbook: OpenStax *University Physics*, Vol. 2, §§5.3–5.5 and 7.1–7.3 (rings and arcs of charge in §5.5). Access for free at https://openstax.org/details/books/university-physics-volume-2.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/coulomb-sandbox.html?ws=coulomb-sandbox-energy)

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

Test the textbook results for the field and potential of a ring and an arc of charge, and use potentials to find the potential energy of a set of charges.

## Background

Outside a small spherical charge, the field and potential are those of a point charge (§§5.3–5.4 and 7.3):

$$\mathbf E=\frac{q}{4\pi\epsilon_0r^2}\hat{\mathbf r},\qquad V=\frac{q}{4\pi\epsilon_0r}.$$

Fields add as vectors and potentials add as signed numbers.

**A ring and an arc of charge (§5.5).** Adding up $$k\,dq/r^2$$ over a ring of radius $$R$$ and charge $$Q$$ gives, at a distance $$z$$ along its axis,

$$E_z=\frac{kQz}{\left(z^2+R^2\right)^{3/2}},\qquad V=\frac{kQ}{\sqrt{z^2+R^2}}.$$

At the center of an arc of radius $$R$$ that spans an angle $$\theta$$ (in radians) with $$\lambda = Q/(R\theta)$$, every bit of charge is the same distance $$R$$ away, and the sideways parts of the field cancel in pairs:

$$E=\frac{2k\lambda\sin(\theta/2)}{R},\qquad V=\frac{kQ}{R}.$$

**Potential energy of a set of charges (§7.1).** Bringing a charge $$q$$ from far away to a point where the other charges make a potential $$V$$ takes work $$W = qV$$, and that work is stored as electric potential energy. Assembling charges one at a time therefore stores

$$U = \sum_{\text{pairs}}\frac{q_iq_j}{4\pi\epsilon_0 r_{ij}},$$

one term for each pair, counted once. $$U$$ is negative when attraction wins: then work must be done to pull the charges apart. The demo shows $$U$$ for point charges in microjoules ($$1\ \mu\mathrm J = 10^{-6}$$ J).

## Before the lab

1. Find the potential energy of +2 nC and −2 nC that are 6.0 cm apart, and the work needed to pull them apart to 12.0 cm.
2. Show from the ring formula that $$E_z$$ is largest at $$z = R/\sqrt 2$$. Where is it for a 2.0 cm ring?
3. Bend a half circle arc of charge around, keeping its charge and radius, until it is a full ring. At the center, does the field get stronger, stay the same or drop to zero? Does the potential get larger, stay the same or drop to zero? Give a reason for each.

## Safety

For a real electrostatics apparatus, follow the instructor's charging and discharge procedure. Keep high voltage equipment dry and disconnect it before handling electrodes.

## Procedure

**Ring and arc of charge.** Use a ring of +2 nC and radius 2.0 cm with its axis in the plane of your map. Record $$V$$ and $$E$$ on the axis at $$z$$ = 0, 0.5, 1.0, 1.4, 1.5, 2.0, 3.0 and 5.0 cm from its center, and find where the field is strongest. Then use a half circle arc of +2 nC and radius 3.0 cm lying in the map. Record $$V$$ and $$E$$ at its center. Keep $$Q$$ and $$R$$ and change the arc's angle to 90°, 270° and 360°, recording $$V$$ and $$E$$ at the center each time.

**Potential energy.** Work with the answers hidden, and calculate each energy before you show it. Start from the Triangle setup (+2 nC at (−3, 2) cm, +2 nC at (3, 2) cm, −2 nC at (0, −2.5) cm) and calculate $$U$$ of the three charges. Then take the charges away one at a time, which is the assembly run backwards: remove the −2 nC charge, put the probe where it was and read $$V$$ there, which gives the work needed to bring it back; then remove one +2 nC charge and do the same. Record each step in the Potential energy table, then show the answers (untick Blind) and check each $$U$$ in the Potential energy panel. Finally, place +2 nC and −2 nC 6.0 cm apart (the Dipole setup, charges at (−3, 0) and (3, 0) cm) and then 12.0 cm apart on the same line (drag them to (−6, 0) and (6, 0) cm), and record $$U$$ for each.

**Using the virtual apparatus.** Choose **2D map**, keep **1 cm grid** on (under Layers), and turn on **Blind: hide predictions and answers** (under Lab). Click the map to place the probe, or press P on the map and use the arrow keys (0.1 cm a press); read V, the field magnitude, the direction and the position from the Probe panel. Stay at least 0.5 cm from a charge. Use **Record reading** at every point and **Export to worksheet** after each configuration, then **Clear**. For the ring use **Ring**: its axis runs up the map through the origin, so the probe at (0, $$z$$) is on the axis. **Along a line** with **Object’s axis** graphs $$V$$ and $$E_z$$ along that axis. For the arc use **Arc**, which puts the probe at the center; select the arc to change its **Arc angle**. For the potential energy part start from **Triangle** and **Dipole**, and turn Blind off only when the step says to.

## Data

| Configuration and $$q$$ (C) | Probe $$x$$ (m) | Probe $$y$$ (m) | $$r$$ (m) | $$V$$ (V) | $$E$$ (V/m) | Direction from $$+x$$ (°) |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |
| | | | | | | |

Add rows for all measurements. Export leaves $$r$$ blank; you do not need it here.

**Potential energy.** Energies in μJ; positions in cm.

| Step | Charges on the map | $$U$$ by hand (μJ) | $$U$$ shown (μJ) | $$V$$ where the removed charge was (V) | Work to bring it back, $$qV$$ (μJ) |
|---|---|---|---|---|---|
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |

**Ring and arc of charge.** Positions in cm along the axis ($$z$$) for the ring, at the center for the arc.

| Object | $$z$$ or arc angle | $$V$$ (V) | $$E$$ (V/m) | $$E$$ from the formula (V/m) |
|---|---|---|---|---|
| | | | | |
| | | | | |
| | | | | |
| | | | | |
| | | | | |
| | | | | |
| | | | | |
| | | | | |
| | | | | |
| | | | | |
| | | | | |
| | | | | |

## Analysis

1. Add the works you found for bringing the charges back, in the order they would be assembled, and compare the sum with $$U$$ of the full triangle. Which pairs make the largest contributions, and why is the total negative?
2. From the two dipole rows, find the work needed to pull the charges from 6.0 cm to 12.0 cm apart, and check it against your answer to item 1 of Before the lab.
3. Plot the ring's $$E$$ (vertical) against $$z$$ (horizontal). Compare the measured field at each point with the ring formula, and the position of the largest field with item 2 of Before the lab. Estimate $$E_z = -dV/dz$$ at $$z$$ = 1.0 cm from your $$V$$ readings at 0.5 and 1.5 cm, and explain why it differs from the field you read there.
4. Compare each arc's field at the center with $$2k\lambda\sin(\theta/2)/R$$.

## Uncertainty

Use coordinate and readout resolution to estimate uncertainty. Distance errors matter most near a charge. The simulation is deterministic; do not invent random scatter.

## Questions

1. Far from the ring ($$z \gg R$$), what does the ring formula become, and why?
2. How did $$V$$ and $$E$$ at the center change from your 180° arc reading to your 360° one, and was that what you said in Before the lab 3? Explain each from how the contributions of the pieces of the arc add, the field as vectors and the potential as numbers.

## What to hand in

Prelab answers, raw data and CSV, the ring's $$E$$ against $$z$$ graph, the Ring and arc and Potential energy tables and answers to the questions. Identify simulated data.
