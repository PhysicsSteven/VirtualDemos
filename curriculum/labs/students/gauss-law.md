# Electric Flux and Gauss's Law
Student laboratory · Physics II

Textbook: OpenStax *University Physics*, Vol. 2, §§6.1–6.4. Access for free at https://openstax.org/details/books/university-physics-volume-2.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/gauss-law.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Charge inside; Charge outside; Dipole inside; Uniform sphere; Line of charge; Plane of charge.

**Using the demo.**

- Capture freezes the surface, the charges and the numerical flux in a row (flux in N·m²/C). The CSV holds every row in SI units, with the closest charge distance and the quadrature status.
- 3D view: the whole closed surface, with its area elements drawn as tiles. Field lines leave each charge evenly in all directions, three times as many per nC as set above, so lines out minus lines in follows Q<sub>enc</sub>. Drag empty space to turn the view.
- 3D view: charge dots inside the Gaussian surface are bright, the rest faint. With flux patches on, the caps of the line's cylinder and the side of the pillbox stay gray: E runs along them, so E·dA = 0.

**What the demo models.**

- Model: point charges in empty space, all in the plane z = 0, which is the slice you see. Their field lines in that plane stay in the plane, so the drawn lines are exact field lines. Lines are drawn in proportion to charge, but in a slice the spacing of lines does not show the field strength the way it does in 3D. The surface color fades where E·n is small. Arrows on the surface show the direction of E; their length grows with E and levels off for strong fields.

</details>

## Goal

Test how enclosed charge, surface shape and charge position affect electric flux. Use symmetry to connect total flux with electric field.

## Background

Electric flux uses the outward area normal (§6.1):

$$\Phi_E=\oint\mathbf E\cdot d\mathbf A.$$

Gauss's law relates net outward flux to enclosed charge (§6.2):

$$\Phi_E=\frac{Q_{\rm enc}}{\epsilon_0}.$$

It holds for every closed surface. Extracting $$E$$ from the integral requires sufficient symmetry (§6.3). A drawing's field-line count is a visual aid, not a measurement of the continuous integral.

## Before the lab

1. Predict net flux when a +1 nC charge is moved within a closed surface without crossing it.
2. Can an external charge change the field on the surface without changing its net flux?
3. Why can a spherical Gaussian surface simplify a spherically symmetric problem?

## Safety

For a real electrostatics bench, follow the instructor's high voltage and discharge procedures. Do not touch charged conductors or move leads with the supply on.

## Procedure

**Shape and position.** Place one +1 nC charge inside a closed surface. Record numerical flux for a sphere, box and cylinder, keeping the charge clearly inside. Repeat with the charge displaced from the center. Predict flux before consulting a theoretical readout.

**Superposition.** Put +2 nC and −1 nC inside the same surface. Record flux. Move only the negative charge outside and repeat. Then compare equal-and-opposite charges both inside with both outside. Record enough information to reconstruct the charge positions.

**Approach to a boundary.** Keep a charge fixed and change the surface size to approach it from either side. Record five or more separations where the numerical integral is available. Compare numerical error and field-evaluation count as the separation shrinks.

**Symmetry.** Compare a uniformly charged ball and a conducting sphere with the same $$Q$$ and $$R$$. Record $$E$$ at several radii inside and outside. Use the conductor's one-sided surface limits rather than assigning one field value to the ideal charged surface (§6.4).

**Using the virtual apparatus.** Choose **Any surface**, then **Charge inside** and **Pause**. Select the charge, set **Selected charge q**, and enter its $$x$$/$$y$$ coordinates. Use **Sphere**, **Box** and **Cylinder**. Clear **Show predicted flux Qenc/ε₀** while measuring. Press **Capture reading** and **Export to worksheet**; the export includes geometry and numerical status. Use **Dipole inside** for the charge combinations. Keep the charge at least 0.03 cm from the surface: this is a numerical exclusion zone. Flag rows marked **Quadrature tolerance not met** rather than treating them as reliable measurements. For the last part choose **Symmetry**, **Sphere**, then **Ball** or **Conductor**.

## Data

| Geometry/distribution | Charge positions or $$r$$ (m) | $$Q_{\rm enc}$$ (C) | Numerical flux (N m²/C) | Predicted flux (N m²/C) | $$E$$ (N/C), if used | Numerical status/evaluations |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |
| | | | | | | |

Record all shape dimensions and $$Q$$, $$R$$ above the relevant table. Keep separate copies for each investigation.

## Analysis

1. Calculate $$Q_{\rm enc}/\epsilon_0$$ independently for every flux row. Compare shapes and charge positions.
2. Use a nonzero scale such as $$\lvert q \rvert/\epsilon_0$$ to normalize errors when predicted net flux is zero.
3. Plot flux error and evaluation count against the closest charge-to-surface separation. Distinguish boundary sensitivity from a controlled quadrature-tolerance study.
4. Derive $$E(r)$$ inside/outside a uniform ball and a conductor using symmetry. Compare with the radial measurements and discuss continuity or a jump at $$R$$.

## Uncertainty

Include coordinate and surface-size resolution when deciding whether a charge is inside. Omit positions whose classification is uncertain. Numerical quadrature error is different from measurement rounding. Near a charge, the field changes rapidly and cancellation can be difficult; an integration warning is not a physical violation of Gauss's law. Only an exact point charge on the surface creates the mathematical singularity.

## Questions

1. Does zero net flux imply zero electric field on the surface?
2. Why can changing shape alter outward and inward contributions while leaving their sum unchanged?
3. When can $$E$$ be taken outside the flux integral?
4. Why is the field zero inside a conductor in electrostatic equilibrium but not generally inside a uniformly charged insulating ball?

## What to hand in

Prelab answers, configurations and CSV, calculated fluxes, the boundary-error graph, radial-field comparison, uncertainty and answers to the questions. Identify simulated data.
