# Gauss's Law — Measuring Electric Flux with Numerical Integration
**Student edition · 90 minutes · calculus-based introductory physics**  
[Open simulation](https://physicssteven.github.io/VirtualDemos/demos/gauss-law.html)

## Research question
Does total electric flux depend on the shape or size of a closed surface, and how accurately can it be computed numerically when a charge approaches the boundary?

## Objectives
Distinguish net flux from outward and inward contributions; predict flux using Q_enclosed/ε₀; compare numerical surface integration for different shapes; investigate numerical conditioning near a boundary.

## Prelab
Derive Φ_E=q/ε₀ for a point charge at the center of a sphere using Coulomb's law. Explain why the result also holds for an arbitrary closed surface not crossing the charge, and why a charge outside can contribute nonzero local flux while its **net** contribution is zero. Show the SI units of Φ_E.

## Controls
Use the **Flux** mode, the charge list and surface shape controls (**Sphere**, **Box**, **Cylinder**, **Freeform**; Freeform is extruded into a prism). The demo displays numerical ∮E·dA, Q_enclosed/ε₀, outward/inward flux, field-evaluation count, and integration time. Record which surface and charge positions you actually use. Start with **Charge inside** and immediately Pause; select its charge in the list and set **Selected charge q** to +1 nC. The list reports coordinates in cm. Type exact coordinates for the selected charge in the **x** and **y** fields under the charge slider (to 0.01 cm; press Enter); dragging snaps to 0.1 cm, and the canvas arrow keys nudge by 0.1 cm (Shift: 1 cm). Untick **Show predicted flux Q_enc/ε₀** to hide the prediction and the residual while you make your own predictions. **Capture reading** adds the current surface, charges and numerical flux to the table; **Export CSV** saves all rows in SI units with the geometry, the closest charge to surface distance, field evaluations and quadrature status. The quadrature tolerance is fixed.

## Part A — Shape independence (25 min)
1. Place a single +1 nC charge clearly inside the closed surface. Choose a sphere with the charge well away from its boundary.
2. Record analytic Q_enclosed/ε₀ and numerical flux, including sign and units. Calculate signed and absolute difference.
3. Repeat with Box, Cylinder and Freeform, ensuring the charge remains inside. Keep charge and surface dimensions as similar as the UI allows.
4. Move the charge to an off-center interior location without crossing the boundary. Repeat at least two surface shapes.
5. Explain why the outward and inward contributions may change even when net flux does not.

| Shape | Charge position | Q_enclosed (nC) | Predicted Φ (N m²/C) | Numerical Φ | Abs. difference | Field evaluations |
|---|---|---|---|---|---|---|
| Sphere | | | | | | |
| Box | | | | | | |
| Cylinder | | | | | | |
| Prism | | | | | | |
| Off-center | | | | | | |

## Part B — Superposition and cancellation (20 min)
1. Select **Dipole inside**, pause, then select its −2 nC charge and set it to −1 nC. The +2 nC charge remains unchanged. Predict net flux before observing.
2. Move the negative charge outside the box using its selected canvas arrow controls or dragging. Confirm the list says outside and record actual coordinates. Record numerical and predicted net flux.
3. Place equal and opposite charges inside; compare the net flux to the outward and inward totals.
4. Move both charges outside; explain why the local field can remain nonzero while net flux vanishes.

## Part C — Boundary sensitivity (25 min)
1. Reset **Charge inside**, immediately pause, and select/set q=+1 nC. Record its actual coordinates (x,y) and the sphere center (initially 0, 0). Keep the charge and center fixed throughout this scan.
2. Compute r_q=sqrt(x²+y²). Vary **Radius R** to obtain at least five clear interior/exterior distances δ=|R−r_q|. For the unanimated preset position (−1.5, 1.0) cm, try R=3.0, 2.5, 2.1, 2.0, 1.9 cm inside and 1.7, 1.6, 1.4 cm outside. If animation moved the charge before pause, choose radii from its actual recorded position instead.
3. Record flux, field evaluations and integration time after the display settles, or capture each point. Avoid δ<0.03 cm: the demo skips the numerical integral inside this numerical exclusion zone and says so. Only δ=0 exactly is physically singular; never assign the exclusion to a physical layer of charge. If the rail reports **Quadrature tolerance not met**, flag that row (the table marks it with !).
4. Plot scaled error and evaluation count against δ. This is a boundary-conditioning experiment, not a controlled tolerance-convergence study: the current UI exposes no tolerance setting. Runtime depends on the machine; use evaluation count for reproducible cost comparison.

| Position / δ | Inside? | Predicted Φ | Numerical Φ | Difference | Evaluations | Integration time |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |
| | | | | | | |
| | | | | | | |
| | | | | | | |

Coordinate display rounding contributes at most 0.05 cm to each coordinate read to one decimal place. If exact preset coordinates were preserved, the setting values are known; otherwise propagate the coordinate bound into δ and omit points whose inside/outside status is uncertain. In **Symmetry** mode, E=0 at the center of the ball and of the conductor, and on the conductor's charged surface the demo shows E jumping from 0 to kQ/R² rather than a single value.

## Data analysis
Calculate relative error |Φ_num−Φ_theory|/max(|Φ_theory|,Φ_scale), where Φ_scale is a clearly stated nonzero characteristic flux (e.g. |q|/ε₀). This avoids division by zero when Q_enclosed=0. Plot error and evaluation count against δ (log axes if appropriate). Compare shapes. Do not interpret an exact floating-point match as a rigorous bound on quadrature error.

## Questions
1. Why does an external charge give zero net flux through a closed surface?
2. Why is a charge exactly on the surface excluded from the standard point-charge integral?
3. Can net flux be zero while the electric field is nonzero everywhere on the surface?
4. What changes physically versus numerically when δ approaches zero?
5. Why might outward and inward flux be individually large even when their sum is small?

## Submission
Prelab 15; Part A 25; Part B 15; Part C 25; graphs and discussion 20. Include numerical settings, units and a defensible error metric.
