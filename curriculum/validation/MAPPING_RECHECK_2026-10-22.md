# Requested mapping recheck — 2026-10-22

Source main **4443739435f0a28e21e0a420e9c6df31f7a74f76** merged into the feature branch before map edits. All 70 catalog entries and Claude’s eight new demos preserved. No demo HTML, course pages or student/instructor handouts changed in this mapping pass.

| Volume 1 section | Decision | Source evidence and limit |
|---|---|---|
| 13.6 Tidal Forces | usable: tides promoted from later to physics-1, lecture role | `tidalAt` subtracts the acceleration at Earth’s center; axial/transverse tide readouts and equilibrium-ocean assumptions are explicit. Direct textbook topic, not general astronomy expansion. |
| 15.3 Comparing SHM and Circular Motion | usable: springs | `phasor` and `drawCircle` show the projection. Use undamped free single mass with Reference circle and Blind off. The damped shrinking-circle extension is not uniform circular motion. |
| 4.1 Displacement and Velocity Vectors | usable: vectors and projectile-drag | Component/vector algebra, river velocity and projectile velocity arrows/time-dot positions provide 2D examples. No general 3D motion viewer. |
| 4.2 Acceleration Vector | usable: vectors and projectile-drag | Vector subtraction illustrates Δv; projectile data permit finite-difference velocity/acceleration components. No dedicated acceleration-vector or general 3D viewer; note is explicit. |
| 10.5 Calculating Moments of Inertia | needs-feature: rotation | `spinI = I0 + 2mr²`, seesaw mass sums and standard-shape/rod formulas exist. These support discrete examples; they do not provide a continuous-body integration activity. |
| 13.2 Gravitation Near Earth’s Surface | missing | Projectile/motion graphs prescribe g. Kepler uses a point central mass in Sun/AU units. Neither currently investigates Earth mass/radius, g(h) or the near-surface approximation. |

These decisions assess teaching coverage rather than whole-section mastery or release readiness. Rebuilt the gap tables directly from the merged JSON; stale missing labels for Claude’s newer activities are removed. New motion-graphs, forces and stress-strain remain needs-handout.

## Executed checks

Node v24.19.0, commands from repository root:

- `node curriculum/validation/test_vectors.cjs`: 4 groups passed.
- `node curriculum/validation/test_projectile_drag.cjs`: 12 groups passed.
- `node curriculum/validation/test_springs.cjs`: 10 groups passed.
- `node curriculum/validation/test_rotation.cjs`: 6 groups passed.
- `node curriculum/validation/test_kepler_orbits.cjs`: 8 groups passed.
- `node curriculum/validation/test_textbook_map.cjs`: structural contract passed after edits.

A separate Node VM probe extracted the existing `// PHYSICS-BEGIN` to `// PHYSICS-END` block in tides, without modifying it. It compared `tidalAt` at near/far/transverse points with the explicit Newtonian difference GM(d−x,−y)/[(d−x)²+y²]^(3/2) − (GM/d²,0), verified opposite axial stretching signs and transverse compression, a factor 1/8 on doubling distance for the leading axial tide, and axial/transverse magnitude ratio 2. All checks passed. This is a scoped gravity probe, not validation of real coastal tide predictions or ocean animation.

Forty existing numerical groups plus the scoped tides probe and map contract passed. No browser or deployment checks executed. No result from this recheck should replace the separate handout/physics release gates. Claude owns course-page regeneration and the three new lab handouts remain the next writing task.

The first map-contract run failed because its old inventory reader scraped demo cards from index.html; Claude has moved that inventory into curriculum/catalog.json. Updated the checker to read the authoritative catalog and reject duplicate entries, then reran it successfully. This was a stale test-inventory assumption, not a missing-demo failure.
