---
title: Solids of Revolution
level: Calculus I and II (OpenStax Calculus Vol 1 6.2, 6.3 and 6.4) and Physics I (moments of inertia, University Physics Vol 1 10.5)
time: 15 to 40 minutes
---
## What students should come away with

- A volume is a sum of thin slices. Each slice is a disk or washer (perpendicular to the axis), a cylindrical shell (parallel to it) or a slab of known cross section; as the slices get thinner the sum closes in on an integral.
- A washer's volume is π(R² − r²)Δx, not π(R − r)²Δx. Radii are measured from the axis, so turning about y = −1 adds 1 to each.
- Shells are the easier choice when disks would need x as a function of y: V = ∫2π(radius)(height) dx.
- Slicing works for any solid whose cross sections you know, turned or not: V = ∫A(x) dx.
- Arc length is the limit of a chain of chords, L = ∫√(1 + f′²) dx; surface area is the limit of frustum bands, A = ∫2πf√(1 + f′²) dx.
- A moment of inertia is a sum too: disks give ∫½ dm r², shells ∫r² dm. A solid cone has I = (3/10)MR² and a solid sphere (2/5)MR², both less than a cylinder's ½MR².

## Before class

Nothing to install. Projector mode enlarges the pictures and labels. Blind (Lab fold) hides the integral and the errors so students can predict them first. The buttons across the top choose Disks and washers, Shells, Cross sections, Arc length or Surface area; Volume and Moment of inertia switch what is added for disks and shells. 3D shows the solid built from its slices (drag to turn, scroll to zoom); Flat shows the region and the slices in the plane. Play doubles n every second, from 1 to 256; the graph below shows the sum against n on a log axis, with the integral as a dashed line.

## Running it in class

1. **The vase.** The opening setup is a vase lying on its side, sliced into 6 disks. Ask students to estimate how much it holds, then press Play (Q1).
2. **Washers.** Washers: between x and x², then Washers about the line y = −1. Ask what the inner radius is before showing it (Q2).
3. **Shells.** Shells: 2x − x² about the y axis and about the line x = −1; then Water in a round bowl (Q3).
4. **Cross sections.** Squares on a disk, Semicircles on a disk and Triangles on a parabola; turn the 3D view so the slabs stand on the base (Q4).
5. **Arc length.** Arc length of x^(3/2), then Length of a hanging cable: the chain is always short (Q5).
6. **Surface area.** Surface of a cone (exact for n = 1), Surface of a sphere and Gabriel's horn (Q6).
7. **Moments of inertia.** Moment of inertia of a solid cone, The cone again, by shells and Moment of inertia of a solid sphere (Q7).

## Questions

**Q1.** The vase's profile is f(x) = 4 + 1.5 sin(x/2.5) cm from x = 0 to 25 cm. Write the volume of one disk and the integral the disks close in on. How much does the vase hold, in liters? Read the error for n = 6, 12 and 24: by what factor does it fall each time n doubles?

**Q2.** For the region between y = x and y = x² turned about the x axis, what are R and r for the slice at x? Why is the washer's volume π(R² − r²)Δx and not π(R − r)²Δx? In Washers about the line y = −1, the region under y = x² from 0 to 1 turns about y = −1: what are R and r, and what is the volume?

**Q3.** For 2x − x² turned about the y axis, why are shells easier than disks? Write the shell integral and evaluate it. A bowl shaped like half a sphere of radius 10 cm is filled 6 cm deep: what volume of water does it hold?

**Q4.** A solid has the unit disk as its base, and its cross sections perpendicular to the x axis are squares. What is the area of the square at x, and the volume? With semicircles instead, what solid do you get, and what is its volume?

**Q5.** Find the length of y = x^(3/2) from 0 to 4. Why is a chain of chords always a little shorter than the curve? A cable hangs between posts 20 m apart in the shape y = 10 cosh(x/10): how long is it?

**Q6.** Why are frustum bands exact for a cone even with n = 1? Use the sphere's integrand to show that its area is 4πR². For Gabriel's horn, y = 1/x from 1 to b, find the volume and show that the surface area grows without bound as b grows.

**Q7.** A uniform solid cone has mass 2 kg, radius 0.1 m and height 0.3 m. Use disks to show that I about its axis is (3/10)MR², and give I in kg·m². Do disks and shells approach it from the same side? For a uniform 2 kg sphere of radius 0.1 m, what is I about a diameter?

## Common misconceptions

- **"A washer is a disk of radius R − r."** The volume is π(R² − r²)Δx: subtract the areas, not the radii.
- **"The radius is the height of the curve."** The radius is the distance to the axis; turning about y = −1 or x = −1 changes every radius.
- **"Shells and disks give different volumes."** They slice the same solid differently and close in on the same integral.
- **"Slices must be circles."** Any known cross section works: squares and triangles on a base give volumes with nothing turned.
- **"A finite volume means a finite surface."** Gabriel's horn holds less than π but has more surface than 2π ln b for every b.
- **"All mass at radius R."** I = MR² only for a ring; a cone or sphere has mass closer to the axis, so its I is a smaller fraction of MR².

## How the demo works

- The curves are read by the shared parser (demos/lib/vdmath.js); nothing typed is run as code. f′ for arc length and surface area comes from the parser's exact derivative.
- Disks, washers, shells and cross sections are sampled at the middle of each slice; the chain of chords and the frustum bands use the end points of each piece.
- The integral is computed with 10 point Gauss–Legendre quadrature on 400 pieces, which never samples an end point, so an infinite slope at the edge of a sphere does no harm. Each setup with a known closed form shows it beside the value the demo finds.
- Moments of inertia assume uniform density ρ = M/V. Disks add ½π(R⁴ − r⁴)ρΔx, shells 2πr³hρΔr.
- When the region reaches across a vertical axis, the shells on the two sides overlap and the volume counts the overlap twice; the demo says so. Disks about a vertical axis and shells about a horizontal one would need x as a function of y, so the demo asks you to switch the axis.
