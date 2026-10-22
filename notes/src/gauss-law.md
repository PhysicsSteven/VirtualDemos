---
title: Gauss's Law
level: PHYS 202
time: 20 to 30 minutes
---
## What students should come away with

- The net flux through any closed surface is Q_enc/ε₀, whatever its shape and size and wherever the charges sit inside.
- Charges outside change the field on the surface but add zero net flux; zero net flux does not mean zero field.
- Gauss's law always holds, but gives E directly only when symmetry makes E constant and perpendicular on the surface: E ∝ 1/r² outside a sphere, E ∝ r inside a uniform ball, E ∝ 1/r for a line, E constant for a plane.

## Before class

Students need the point charge field, flux as E·A, and line and surface charge densities. **Any surface** integrates the flux numerically without using Gauss's law; **Symmetry** walks through the derivation step by step. **Pause** stops the motion so you can drag things.

## Running it in class

1. **Charge inside.** A 2 nC charge wanders inside a sphere; Q_enc/ε₀ and the numerical ∮E·dA both stay 225.9 N·m²/C. Ask Q1, then change **Radius R** and try **Box** or **Freeform**.
2. **Charge outside.** Lines enter and leave; the flux out and the flux in (their sizes change as the charge wanders) always cancel. Drag the charge inside: Φ jumps to q/ε₀.
3. **Dipole inside.** Q_enc = 0, Φ = 0, yet E is strong on parts of the box. Add a charge with **+1 nC** and predict the new flux.
4. **Uniform sphere.** Follow **Gauss's law, step by step**; pause and drag r inside and outside the ball. Then try **Conductor**.
5. **Line of charge** and **Plane of charge.** Change the cylinder length L or the cap distance h: E does not change.

## Questions

**Q1.** Predict: in **Charge inside**, if the sphere's radius is doubled, does the flux double, quadruple, fall to a quarter, or stay the same? Explain from how E and the area change, then check.

**Q2.** In **Charge outside** the field on the sphere is not zero, yet the net flux is. Explain. Does zero net flux mean zero field everywhere on the surface? Use **Dipole inside** in your answer.

**Q3.** A closed surface surrounds +2.0 nC. What is the flux? Then −1.0 nC is added inside and +3.0 nC outside. What is the new flux? Set it up in **Any surface** to check.

**Q4.** In **Uniform sphere**, Q = 5.0 nC is spread evenly through a ball of radius 5.0 cm. Find E at r = 3.0 cm, at the surface, and at r = 10 cm. Where is E largest? Check with the step panel.

**Q5.** For a line with λ = 20 nC/m, find E at r = 4.0 cm. Why does the cylinder's length not matter? For a real wire 1 m long, where would this result stop being accurate?

**Q6.** Switch the sphere to **Conductor**. Why is E zero inside, and why does E jump at the surface instead of rising smoothly as for the ball?

## Common misconceptions

- **"Gauss's law only works for symmetric surfaces."** It holds for every closed surface (try **Freeform**); symmetry is needed only to solve for E.
- **"Zero flux means zero field on the surface."** In **Dipole inside** inward and outward flux cancel where E is strong.
- **"Charges outside do not affect the field on the surface."** They do; they only add zero net flux.
- **"A bigger surface catches more flux."** E falls as 1/r² while the area grows as r².

## Physics behind the demo

- **Any surface**: point charges in the plane z = 0 (the slice you see), with 3D Gaussian surfaces (sphere, cylinder, or box or freeform prism extended ± half the depth). ∮E·dA is computed by adaptive quadrature from the full 3D field. In a slice, line spacing does not show field strength, and line counts are only a picture of the flux.
- A point charge exactly on the surface has no defined flux. Closer than 0.03 cm the demo skips the numerical integral and says so: a numerical exclusion zone, not physics. If an adaptive integral ever runs out of panels before its error target, the rail says so. **Readings** captures the flux with the geometry and exports a CSV in SI units. In Symmetry mode, **Show data table** under Plot data lists E against distance for screen readers or for copying.
- **Symmetry**: ideal distributions; the line and plane are infinite, the ball is a uniformly charged insulator, the conductor's charge sits on its surface, so on that surface E has no single value: it jumps from 0 to kQ/R² (by σ/ε₀). At r = 0, E = 0 for the ball and the conductor. 1 nC enclosed gives 112.9 N·m²/C.
