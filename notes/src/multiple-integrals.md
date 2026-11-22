---
title: Multiple Integrals
level: Calculus III (OpenStax Calculus Vol 3, 5.1 to 5.7) and Physics I (Vol 1 9.6 Center of Mass, 10.5 Calculating Moments of Inertia)
time: 20 to 50 minutes
---
## What students should come away with

- A double integral adds up f times small areas: boxes of volume f ΔA under a surface, whose sum settles on one number as the boxes shrink. When f is a density, that number is a mass or a charge.
- An iterated integral slices the region: the inner integral is the area of one slice, A(x), and the outer integral adds the slices. Either order gives the same answer over the same region (Fubini), but the bounds change, and one order may be much easier by hand.
- In polar, cylindrical and spherical coordinates the small area or volume is not dr dθ but r dr dθ, and ρ² sin φ dρ dφ dθ: the sides of a small cell are dr, r dθ, dz or dρ, ρ dφ, ρ sin φ dθ. The extra factors are Jacobians.
- The center of mass and the moment of inertia of a continuous body are integrals over it: x̄ = (1/M)∫x dm and I = ∫d² dm. Where the mass sits relative to the axis decides I, which is why a disk has ½MR², a ball ⅖MR² and a rod about its end ⅓ML².

## Before class

Nothing to install. The page opens in 3D on a plate whose density is the height of the surface; Flat shows the same region from above with each box's value. Every setup can be edited in the typed boxes. Blind (Lab fold) hides the exact integrals and the closed forms so students predict first. The 3D view needs WebGL; where it is missing the page draws everything flat.

## Running it in class

1. **Boxes.** Open on A plate's mass from its density. Press Play: the boxes halve, the Riemann sum settles on 8/3 kg. Switch the sample point to the low and high corners and compare the errors (Q1).
2. **Slices.** Between y = x² and y = x: Play sweeps a slice across; the graph of A(x) fills in and the slabs add up to 3/20 in both orders. Then Reverse the order: e^(y²) (Q2) and A common mistake in reversing, where the picture marks the region the wrong bounds describe.
3. **Polar wedges and √π.** The Gaussian integral: raise R from 3 to 6 and watch π(1 − e^(−R²)) reach π, the square and the disk agree, and √ of the volume reach √π (Q3).
4. **Triple integrals.** Volume of a ball, three ways: spherical, cylindrical and rectangular bounds give the same 4π/3. Turn on Cut away a quarter and read the labeled volume element (Q4).
5. **Mass and inertia.** Disk, sphere, rod about its end: each I matches its closed form, and Play spins the body about its axis. Switch the density to heavier at the center and watch I/(MR²) fall (Q5). The cone puts its center of mass at h/4 (Q6).
6. **Change of variables.** Area of an ellipse: J = 6u, so the area is 6π (Q7). The square map shows cells growing as |J| grows.

## Questions

**Q1.** For the plate σ = 1 + xy² kg/m² on 0 ≤ x ≤ 2 m, 0 ≤ y ≤ 1 m, find the midpoint Riemann sum with 2 × 2 boxes by hand and compare it with the exact mass. By what factor does the error shrink each time the number of boxes per side doubles?

**Q2.** ∫₀¹ ∫ₓ¹ e^(y²) dy dx cannot be done by hand in this order. Sketch the region, write it in the order dx dy, and evaluate it.

**Q3.** Explain why ∬ e^(−x² − y²) dA over the whole plane equals (∫ e^(−x²) dx)², and use polar coordinates to show that ∫ e^(−x²) dx from −∞ to ∞ is √π. With R = 3, why is the integral over the square |x|, |y| ≤ 3 a little larger than over the disk r ≤ 3?

**Q4.** Find the volume of the unit ball in spherical coordinates. Explain from the edges of a small cell where the factor ρ² sin φ comes from, and why it is not needed in rectangular coordinates.

**Q5.** Derive I = ½MR² for a uniform disk about its central perpendicular axis, and evaluate it for M = 2 kg, R = 0.5 m. For a 0.5 kg rod 1.2 m long, compare I about one end with I about its middle. Why is a ball that is denser at its center easier to spin than a uniform one of the same mass and size?

**Q6.** Show that the center of mass of a uniform solid cone of height h stands h/4 above its base.

**Q7.** The map x = 3u cos v, y = 2u sin v sends 0 ≤ u ≤ 1, 0 ≤ v ≤ 2π onto an ellipse. Find its Jacobian and the area of the ellipse.

## Common misconceptions

- **"dA in polar coordinates is dr dθ."** A wedge far from the origin is larger than one near it with the same Δr and Δθ; its area is r Δr Δθ. The Polar setups label both sides of a wedge.
- **"Reversing the order means swapping the bounds."** The bounds describe the region, so they must be found again from a sketch. The common mistake setup shows the region that swapped bounds really describe.
- **"The center of mass is in the middle of the shape."** Only for a uniform symmetric body. The cone's is at h/4; a rod whose density grows along it has its center of mass at 2L/3.
- **"Moment of inertia depends only on the mass."** It depends on where the mass is: the same rod has I = ⅓ML² about its end and 1/12 ML² about its middle.

## How the demo works

- Every typed box is read by the site's math parser (demos/lib/vdmath.js), never run as code. A bound may use only the coordinates outside it.
- Iterated integrals are computed one coordinate at a time by adaptive Gauss–Kronrod (7, 15) quadrature, to about ten significant figures (eight for triple integrals; fewer where a square root bound reaches zero, as at the edge of a disk). A function evaluation budget stops a runaway input. When pieces of the quadrature stop splitting without settling (an integrand that blows up, such as 1/x on the unit square, whose integral does not exist), the page says the value is not reliable rather than showing a number as if it were exact.
- Riemann sums use cells fitted to the region: the outer coordinate in equal steps, each inner one in equal steps between its bounds there; each cell's size is its steps times the Jacobian at its sample point.
- In Mass and inertia the density shape is scaled so the body has the mass typed. The rod, plate and disk are thin, so their density is per length or per area. Closed forms are listed for the uniform and the two graded densities.
- The Jacobian of a change of variables is an exact symbolic determinant; the marked cell's image area comes from its curved boundary by the shoelace formula.
