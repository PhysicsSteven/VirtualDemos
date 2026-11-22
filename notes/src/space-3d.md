---
title: Vectors and Surfaces in Space
level: Calculus III (OpenStax Calculus Vol 3, 2.1 to 2.7) and Physics I and II (Vol 1 2.2, 2.4, 10.6; Vol 2 11.2)
time: 15 to 40 minutes
---
## What students should come away with

- A vector in space is three components. Vectors add component by component, tip to tail, and the sum is the diagonal of the parallelogram.
- The dot product a · b = a<sub>x</sub>b<sub>x</sub> + a<sub>y</sub>b<sub>y</sub> + a<sub>z</sub>b<sub>z</sub> = |a||b| cos θ is a number: it gives the angle between two vectors and the part of one along the other. It is zero for vectors at right angles. Work is W = F · d.
- The cross product a × b is a vector at right angles to both, by the right hand rule, with length |a||b| sin θ, the area of the parallelogram. It is zero for parallel vectors and changes sign when the order changes. Torque is τ = r × F; the magnetic force is F = qv × B.
- A line is a point and a direction, r = P₀ + t d; a plane is a point and a normal, n · (r − Q) = 0. Put the line into the plane equation to find where they meet; n · d = 0 means the line is parallel to the plane.
- A quadric surface is known by its traces, the curves where planes x, y or z = k cut it: ellipses, hyperbolas, parabolas, or two crossing lines.
- A point has three sets of coordinates. In each, holding one coordinate fixed gives a surface: planes; a cylinder, a half plane and a plane; a sphere, a cone and a half plane. The demo uses the physics convention (ISO 80000-2): θ is the polar angle down from +z and φ the azimuth from +x. OpenStax Calculus swaps the letters: it writes θ for the azimuth, φ for the angle from +z and ρ for the distance from the origin. Its cylindrical coordinates are (r, θ, z) for the demo's (ρ, φ, z).

## Before class

Nothing to install. The 3D view needs WebGL; without it (or with Flat pressed) the same picture is drawn flat and every tool still works. Projector mode thickens the lines. Blind (Lab fold) hides the products, the meeting point and the name of the trace, so students predict first. The link at the end of the setup notes goes to Vectors and Relative Motion, the 2D demo for adding vectors by dragging.

## Running it in class

1. **Two vectors.** Open on Two vectors: sum, dot and cross. Turn the space and read a · b, the angle and a × b (Q1). Press Play to turn b about the z axis: a · b and a × b change; a × b stays at right angles to both.
2. **Torque.** Press Torque on a wrench. Find τ = r × F with the right hand rule before reading it (Q2). Press Play: the torque is largest when F is at right angles to the wrench.
3. **The magnetic force.** Press A proton in a magnetic field. The force is sideways to both v and B, so it does no work (Q3).
4. **A line and a plane.** Press Where a line meets a plane and Play: the point crosses the plane at t = 0.75 (Q4). Then A light ray and a mirror: the reflected ray keeps the part along the mirror and reverses the part along the normal.
5. **Traces.** Press A cooling tower and Play: the plane z = k sweeps through and the trace stays a circle. Switch the trace plane to x = k and move k to 1.2 (Q5). Then the Mach 2 shock cone, the dish and the saddle.
6. **Coordinates.** Press A point in spherical coordinates. Hold one coordinate fixed at a time and name its surface. Press Rectangular, set x, y and z to 1, then switch modes to Cylindrical and Spherical and read the point again (Q6). End on A point charge: V and |E| depend on r only.

## Questions

**Q1.** For a = (2, 1, 0.5) and b = (0.5, 2, 1.5), find a · b, the angle between the vectors, a × b and the area of the parallelogram they span. Check that a × b is at right angles to both.

**Q2.** A wrench 0.30 m long lies along x and is pushed at its end with F = (0, 20, 10) N. Find the torque τ = r × F and its size. Which way does it point, and which part of F does nothing?

**Q3.** A proton moves with v = (2, 0, 1) × 10⁵ m/s in a field B = 0.50 T along z. Find F = qv × B. Why does the part of v along z feel no force, and why does the force never change the proton's speed?

**Q4.** Where does the line r = (1, −2, 1) + t(1, 2, 1) meet the plane x + y + z = 3? What would n · d = 0 have meant?

**Q5.** For the hyperboloid x²/1.2² + y²/1.2² − z²/1.6² = 1, name the traces in the planes z = 0, x = 0 and x = 1.2.

**Q6.** Give the point (1, 1, 1) in cylindrical and spherical coordinates, in the physics convention. Which letters would OpenStax Calculus use for the same numbers?

## Common misconceptions

- **"The dot product and the cross product are two ways to multiply, so both give vectors."** The dot product is a number (it measures how much two vectors point together); the cross product is a vector at right angles to both (it measures how much they point apart).
- **"a × b = b × a."** The order matters: b × a = −(a × b), the same length pointing the other way. The right hand rule needs the fingers to sweep from the first vector to the second.
- **"A torque points the way the wrench turns."** It points along the axis of the turn, at right angles to both r and F.
- **"The magnetic force speeds a charge up."** F = qv × B is always at right angles to v, so it turns the motion and does no work.
- **"θ always means the angle from the z axis."** Physics and the math book use opposite letters. Say which convention is in use every time.

## How the demo works

- Every number is computed from the components in the boxes with the formulas in the Lab fold, and rounded only for display. Vectors with different units (r and F, v and B) are drawn to different scales, each named on the picture; their directions, and the direction of the cross product, are exact.
- Traces are found exactly: the quadric p x² + q y² + r z² + s z = d cut by a plane becomes a conic in the other two coordinates, and the conic is named and drawn from its coefficients.
- The proton's charge e and the Coulomb constant come from CODATA 2022 (demos/lib/constants.js). The Mach cone is drawn with a/c = 1.5/2.6, a half angle of 29.98° against the exact 30°; the readout gives the exact angle.
