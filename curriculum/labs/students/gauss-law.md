# Electric Flux and Gauss's Law
Student laboratory · Physics II

Textbook: OpenStax *University Physics*, Vol. 2, §§6.1–6.4. Access for free at https://openstax.org/details/books/university-physics-volume-2.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/gauss-law.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Charge inside; Charge outside; Dipole inside; Uniform sphere; Line of charge; Plane of charge.

**Using the demo.**

- Record reading freezes the surface, the charges and the numerical flux in a row (flux in N·m²/C). The CSV holds every row in SI units, with the closest charge distance and the quadrature status.
- 3D view: the whole closed surface, with its area elements drawn as tiles. Field lines leave each charge evenly in all directions, three times as many per nC as set above, so lines out minus lines in follows $$Q_{\text{enc}}$$. Drag empty space to turn the view.
- 3D view: charge dots inside the Gaussian surface are bright, the rest faint. With flux patches on, the caps of the line's cylinder and the side of the pillbox stay gray: $$\mathbf{E}$$ runs along them, so $$\mathbf{E}\cdot d\mathbf{A} = 0$$.

**What the demo models.**

- Model: point charges in empty space, all in the plane $$z = 0$$, which is the slice you see. Their field lines in that plane stay in the plane, so the drawn lines are exact field lines. Lines are drawn in proportion to charge, but in a slice the spacing of lines does not show the field strength the way it does in 3D. The surface color fades where $$\mathbf{E}\cdot\hat{\mathbf{n}}$$ is small. Arrows on the surface show the direction of $$\mathbf{E}$$; their length grows with $$E$$ and levels off for strong fields.

</details>

## Goal

Test how enclosed charge, surface shape and charge position affect electric flux. Use symmetry to connect total flux with electric field.

## Background

Electric flux uses the outward area normal (§6.1):

$$\Phi_E=\oint\mathbf E\cdot d\mathbf A.$$

Gauss's law relates net outward flux to enclosed charge (§6.2):

$$\Phi_E=\frac{Q_{\rm enc}}{\epsilon_0}.$$

It holds for every closed surface. Extracting $$E$$ from the integral requires sufficient symmetry (§6.3). A drawing's field line count is a visual aid, not a measurement of the continuous integral.

## Before the lab

1. Predict net flux when a +1 nC charge is moved within a closed surface without crossing it.
2. Can an external charge change the field on the surface without changing its net flux?
3. Why can a spherical Gaussian surface simplify a spherically symmetric problem?

## Safety

For a real electrostatics bench, follow the instructor's high voltage and discharge procedures. Do not touch charged conductors or move leads with the supply on.

## Procedure

**Shape and position.** Press the Charge inside setup (one +1 nC charge). Press Sphere, Box and Cylinder under Gaussian surface in turn and press Record reading for each, keeping the charge clearly inside. Then click the charge, type a new x and y (in cm) in its boxes under Charges to move it away from the center (still inside), and record the three shapes again. Predict flux before consulting a theoretical readout.

**Superposition.** Press the Dipole inside setup, click each charge and set it with the Selected charge q slider so the two are +2 nC and −1 nC, both inside the same surface. Record flux. Move only the negative charge outside (type its x and y) and repeat. Then set the charges to +1 nC and −1 nC and record with both inside and with both outside. Each reading stores every charge's position, so the table holds what you need to reconstruct them.

**Symmetry.** Press Symmetry above the picture, then Sphere and Ball under Charge distribution. Set Total charge Q and Sphere radius R, move the Gaussian radius r slider, and write the field $$E$$ from the Result line of Gauss's law, step by step into the table by hand at several radii inside and outside (Record reading stores only Any surface readings). Then press Conductor, keep the same $$Q$$ and $$R$$, and repeat at the same radii. Use the conductor's one sided surface limits rather than assigning one field value to the ideal charged surface (§6.4).

**Using the virtual apparatus.** Untick Show predicted flux $$Q_{\rm enc}/\varepsilon_0$$ (in Readings) while you measure. Start from one charge inside a surface, pause, and set the charge and its position; compare the sphere, the box and the cylinder. Start from the dipole for the charge combinations. Record every charge's position with each reading; the worksheet also gets the geometry and the numerical status of each row. Keep each charge at least 0.03 cm from the surface: this is a numerical exclusion zone, not physics. Flag any row marked **Quadrature tolerance not met** rather than treating it as a reliable measurement. For the last part, switch modes to Symmetry with a sphere, first a uniformly charged ball (Ball) and then a conductor (Conductor). Press Export to worksheet, then Clear, at the end of each investigation so each gets its own table copy.

## Data

| Geometry/distribution | Charge positions or $$r$$ (m) | $$Q_{\rm enc}$$ (C) | Numerical flux (N·m²/C) | Predicted flux (N·m²/C) | $$E$$ (N/C), if used | Numerical status/evaluations |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |
| | | | | | | |

Record all shape dimensions and $$Q$$, $$R$$ above the relevant table. Keep separate copies for each investigation.

## Analysis

1. Calculate $$Q_{\rm enc}/\epsilon_0$$ independently for every flux row. Compare shapes and charge positions.
2. Use a nonzero scale such as $$\lvert q \rvert/\epsilon_0$$ to normalize errors when predicted net flux is zero.
3. Derive $$E(r)$$ inside/outside a uniform ball and a conductor using symmetry. Compare with the radial measurements and discuss continuity or a jump at $$R$$.

## Uncertainty

Include coordinate and surface size resolution when deciding whether a charge is inside. Omit positions whose classification is uncertain. Numerical quadrature error is different from measurement rounding. Near a charge, the field changes rapidly and cancellation can be difficult; an integration warning is not a physical violation of Gauss's law. Only an exact point charge on the surface creates the mathematical singularity.

## Questions

1. Does zero net flux imply zero electric field on the surface?
2. Why can changing shape alter outward and inward contributions while leaving their sum unchanged?

## What to hand in

Prelab answers, configurations and CSV, calculated fluxes, radial field comparison, uncertainty and answers to the questions. Identify simulated data.
