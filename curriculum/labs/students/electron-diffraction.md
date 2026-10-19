# Electron Diffraction — Measuring Graphite Plane Spacings
Student laboratory · 110 minutes · modern physics

[Open the graphite-tube bench](https://physicssteven.github.io/VirtualDemos/demos/electron-diffraction.html)

## Purpose and preparation
Determine two graphite plane spacings from measured rings, compare curved-screen geometry with the small-angle approximation, and evaluate sensitivity to apparatus dimensions. Prerequisites: de Broglie wavelength, Bragg's law, kinetic energy and regression. Use the virtual tube for preparation or as a substitute when the physical apparatus is unavailable. Label simulated data. Real tube alignment, supply and measurement procedures follow the department's current handout.

Derive λ=h/√[2meV(1+eV/(2mc²))], the scattering cone angle ψ=2θ, and2d sinθ=λ for first order. Explain why ψ is twice the Bragg angle. A polycrystalline sample produces cones rather than one pair of spots. For a flat distant screen derive D≈2Lλ/d and state the assumptions.

## Measure geometry before rings
Record **Tube seed**, then **Blind**; leave **Show the true ring positions** off. Clear prefilled readings and move the magnet to its maximum distance. Stop **Sweep V** for each measurement. Record the chosen **Ruler** (arc along glass) or **Caliper** (straight chord) tool; never analyze an arc as a chord.

Determine L, graphite to screen pole, and R, screen sphere radius, from the assigned apparatus dimensions. The virtual tube's physical geometry is L=125 mm, R=65 mm; the analysis entries can be changed without resizing it. For the real tube, measure or obtain L for that instrument, with uncertainty. Handouts quoting125–135 mm are not interchangeable. Enter your adopted L and R, state their source, and retain them with the dataset.

## A. Rings versus accelerating voltage (40 minutes)
1. Use six voltages near2.50,3.00,3.50,4.00,4.50 and5.00 kV. Record the actual kV meter. Convert kV to V for momentum calculations.
2. At each voltage select **Inner D₁**, place its two marks on a consistent center of the finite-width ring, then select **Outer D₂** and do the same. Record width/placement bounds. **Capture reading** stores both marked diameters; moving only one ring's marks leaves the other measurement unchanged.
3. Reposition both sets of marks for a repeat at one low and one high voltage. Export CSV; preserve tool metadata. Do not use **Measure the spacings** prefilled simulated readings as your own measurements.
4. Plot D against1/√V and compare slopes for the two rings. Discuss small curvature expected from relativistic wavelength and screen geometry.

| Meter (kV) | Tool | D₁ (mm) | D₂ (mm) | Placement bound (mm) | Adopted L,R (mm) |
|---|---|---|---|---|---|
| | | | | | |

## B. Exact geometry and inferred spacings (30 minutes)
For a centered ring define α=D_arc/(2R) or α=asin[D_chord/(2R)]. The source-to-screen ray gives ψ=atan2[R sinα,R cosα+L−R]. Hence d=λ/[2sin(ψ/2)]. Derive this using a cross-sectional sketch, keeping millimeters consistent within the geometric formula.

1. Use **Exact** and **Relativistic λ** to infer each d from all rows and from the fitted relation λ=d·2sin(ψ/2). Record fit slopes, uncertainty and residuals in an external spreadsheet as well as the built-in result.
2. Reanalyze the same readings with **Small angle** and with relativistic correction disabled. Quantify each change; keep the raw data fixed.
3. At one voltage measure with both Ruler and Caliper. Compare raw diameters, then demonstrate whether their respective exact inversions agree. Changing tool requires a new reading, not just relabeling a stored number.

## C. Geometry sensitivity and charged-particle evidence (20 minutes)
Reanalyze the fixed data with L=125,130 and135 mm, clearly labeled as assumed geometry. Distinguish the actual measurement from this deliberate sensitivity study. Compare its effect with ring-placement uncertainty and the relativistic correction. Restore the correct L before the final fit.

Bring the magnet near the neck, compare N and S, and describe pattern translation. Restore it to maximum distance before any spacing measurement. This qualitative deflection establishes sensitivity to charge; the magnet model is not a calibrated magnetic spectrometer. Explain why a shifted cone can spoil a centered-ring formula.

## Uncertainty and submission
Repeat placement to estimate a ring-center interval. Include meter resolution, L and R uncertainties. Propagate them by recalculating d at upper/lower inputs or a numerical derivative; distinguish shared geometry errors from row-to-row placement scatter. For the small-angle model derive δd/d≈δL/L−δD/D−(1/2)δV/V as a signed sensitivity relation. Use quadrature only for independent standard uncertainties. Compare d₁/d₂ to the hexagonal-lattice prediction without expecting the raw diameter ratio to be exactly the same at finite angles.

Submit raw CSV, geometry evidence, six-voltage plots, exact fitted spacings/residuals, arc/chord comparison, L sensitivity, magnet observations and uncertainty. Explain cones versus spots, why rings shrink with voltage, and why the two rings need not be first and second orders of one spacing.

The model uses a spherical screen and selected graphite plane spacings; brightness, widths, source wander and magnet deflection are illustrative. L/R entries affect analysis, not the simulated tube. A matching accepted spacing after copying an assumed L is not an independent geometry measurement.
