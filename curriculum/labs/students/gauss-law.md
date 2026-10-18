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
Use the **Flux** mode, the charge list and surface shape controls (**sphere**, **box**, **cylinder**, **prism** where available). The demo displays numerical ∮E·dA, Q_enclosed/ε₀, outward/inward flux, field-evaluation count, and integration time. Record which surface and charge positions you actually use.

## Part A — Shape independence (25 min)
1. Place a single +1 nC charge clearly inside the closed surface. Choose a sphere with the charge well away from its boundary.
2. Record analytic Q_enclosed/ε₀ and numerical flux, including sign and units. Calculate signed and absolute difference.
3. Repeat with box, cylinder and prism, ensuring the charge remains inside. Keep charge and surface dimensions as similar as the UI allows.
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
1. Place +2 nC and −1 nC inside the same surface. Predict net flux before observing.
2. Move the negative charge outside without moving the positive charge. Record numerical and predicted net flux.
3. Place equal and opposite charges inside; compare the net flux to the outward and inward totals.
4. Move both charges outside; explain why the local field can remain nonzero while net flux vanishes.

## Part C — Boundary sensitivity (25 min)
1. With one positive charge, move it toward the inside of the surface in at least five steps. Define δ as the shortest charge-to-surface separation if the geometry permits.
2. Record the numerical flux, evaluation count and time at each step. Keep the charge **strictly** off the surface.
3. Repeat from outside if possible. Identify whether computed flux changes smoothly or shows numerical difficulty near the crossing.
4. Explain the discontinuity in *enclosed charge* when the point charge crosses the surface, and distinguish it from quadrature error.

| Position / δ | Inside? | Predicted Φ | Numerical Φ | Difference | Evaluations | Integration time |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |
| | | | | | | |
| | | | | | | |
| | | | | | | |

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
