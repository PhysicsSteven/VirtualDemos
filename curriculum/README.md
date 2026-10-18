# VirtualDemos laboratory curriculum — starter collection

This directory contains **26 student laboratory starters and 26 instructor guides**. These are **draft teaching materials**, not validated measurements or approved grading keys. The main demonstration code is unchanged.

## Structure
- [Student labs](labs/students/) — guided activities, measurement tables, graphs, uncertainty and conclusions
- [Instructor guides](labs/instructors/) — analytic benchmarks, grading guidance, pre-assignment checks
- [Validation guide](validation/README.md) — how to check each demonstration before grading
- [Claude handoff](CLAUDE_HANDOFF.md) — outstanding work and implementation recommendations

## Recommended first pilots
1. RC Circuits — charging curve and energy conservation
2. Gauss's Law — shape independence of closed-surface flux
3. Photoelectric Effect — stopping potential versus frequency
4. Blackbody Radiation — Wien's law
5. Projectile Range — drag-free trajectory
6. Radioactive Decay — stochastic half-life estimation

## Important limitations
The reference equations are independent theoretical checks. The browser UI, numerical solver, and data export workflows have **not** been systematically exercised for every starter. Some activities may require adjustments to match the available controls. No material in this folder should be described as a passed validation test until the checklist has been completed.

For the actual demonstration, use `https://physicssteven.github.io/VirtualDemos/demos/<slug>.html`. Some student guides contain a relative link that should be replaced by this canonical link; use the absolute URL if the relative link does not resolve.

## Coordination
Keep physics source modifications separate from curriculum changes. When validated, add date, source commit SHA, tested parameter sets, measured results, tolerance, and reviewer initials to the instructor guide.
