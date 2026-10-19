# VirtualDemos laboratory curriculum — starter collection

This directory contains **35 student laboratory documents**; companion instructor guides and rubrics are held in the private TeacherKeys repository. These are **draft teaching materials**, not validated measurements or approved grading keys. The feature branch includes RLC and Faraday measurement improvements. See [executed validation and limitations](validation/SPRINT_2026-10-18.md); public demo links serve main until the owner merges the branch.

## Structure
- [Student labs](labs/students/) — guided activities, measurement tables, graphs, uncertainty and conclusions
- [Instructor guides (private)](https://github.com/PhysicsSteven/TeacherKeys/tree/main/curriculum/curriculum-virtual-lab-starter-kits/curriculum/labs/instructors) — analytic benchmarks and grading guidance
- [Validation guide](validation/README.md) — how to check each demonstration before grading
- [Claude handoff](CLAUDE_HANDOFF.md) — outstanding work and implementation recommendations

## Current priority: modern bench laboratories
- [Spin resonance](labs/students/spin-resonance.md) — ESR on DPPH and proton/fluorine resonance
- [Speed of light](labs/students/speed-of-light.md) — rotating mirror and signed-speed fit
- [Electron e/m](labs/students/e-over-m.md) — Helmholtz coils and mirrored-scale readings
- [Electron diffraction](labs/students/electron-diffraction.md) — arc/chord geometry and graphite spacings
- [Franck–Hertz](labs/students/franck-hertz.md) — excitation energy from peak spacing

These support real-bench preparation and simulated substitute sessions. Department apparatus handouts take precedence when supplied. [Private instructor index](https://github.com/PhysicsSteven/TeacherKeys/blob/main/curriculum/LAB_GUIDE_INDEX.md).

RC, AC and RLC student labs now use unified `circuits.html`. New acoustics labs cover [timbre](labs/students/timbre.md), [resonance tubes and resonators](labs/students/resonators.md), and [acoustic levitation](labs/students/acoustic-levitation.md), with simplification notes for introductory use.

## Important limitations
The reference equations are independent theoretical checks. The browser UI, numerical solver, and data export workflows have **not** been systematically exercised for every starter. Some activities may require adjustments to match the available controls. No material in this folder should be described as a passed validation test until the checklist has been completed.

For the actual demonstration, use `https://physicssteven.github.io/VirtualDemos/demos/<slug>.html`. Some student guides contain a relative link that should be replaced by this canonical link; use the absolute URL if the relative link does not resolve.

## Coordination
Keep physics source modifications separate from curriculum changes. When validated, add date, source commit SHA, tested parameter sets, measured results, tolerance, and reviewer initials to the instructor guide.
