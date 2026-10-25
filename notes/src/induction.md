---
title: Charging by Induction
level: PHYS 202
time: 15 to 25 minutes
---
## What students should come away with

- In a conductor, electrons move freely. A charged object nearby pulls some toward it and leaves the far side with the opposite charge (polarization), with no change in total charge.
- Separate the near and far parts (or let charge flow to ground) while the charged object is still there, and the charge stays: charging by induction, without touching.
- A grounded conductor is held at zero potential; charge flows to or from the Earth to keep it there.
- Conductors in contact share charge until they are at one potential.

## Running it in class

Use the step bar (**Next step**).

1. **Charging two spheres by induction.** Touching spheres, then a +10 nC rod near A: A's near side goes negative, B's far side positive, total zero. Separate them: A keeps −1.98 nC and B +1.98 nC. Remove the rod: the charges stay and spread out.
2. **Charging one sphere by grounding.** The rod 5 cm from A; ground A: −5.00 nC flows up from the Earth. Remove the ground, then the rod: A stays negative. Ask Q3 about the order.
3. **Sharing charge by contact.** +10 nC on a 5 cm sphere touches a neutral 3 cm sphere: 7.13 nC and 2.87 nC.
4. **Conductor shapes in a field (2D).** OpenStax §6.4 beyond spheres: a cross section of long conductors, solved numerically. A neutral cylinder in E₀ = 1000 N/C: σ = 2ε₀E₀ cos θ, ±17.71 nC/m² at the front and back, and the dashed exact curve lies on the numerical one. The ellipse reaches 30.99 nC/m² at its ends (3.50 ε₀E₀). The teardrop reaches 47.92 nC/m² at its point (surface field 5.41 E₀); with the field off and a net charge of 5 nC/m, the point still has the most (119.79 nC/m², against 29.31 nC/m² at the least). The hollow box (Faraday cage) carries all its charge on the outer surface, most at the corners; the cavity walls carry 0.000 nC/m and the cavity field is only numerical noise (about 10⁻³ N/C). Bring the line charge in: the outside changes a lot, the cavity stays free of field. Drag the probe into the metal and the cavity. Ask Q5.

## Questions

**Q1.** In the induction steps, which particles move, and which way? Why is the total charge still zero after the rod comes near?

**Q2.** Why must the spheres be separated before the rod is taken away? What happens if the rod is removed first?

**Q3.** In the grounding steps, the ground is removed before the rod. What would happen if the rod were removed first?

**Q4.** A grounded sphere of radius r has a point charge q at distance D from its center (D = r + d, with d the gap from the surface as the demo reads it). The image method gives an induced charge −qr/D. Check this against the demo's −5.00 nC for q = +10 nC, r = 5 cm, D = 10 cm (d = 5 cm).

**Q5.** In Conductor shapes in a field (2D), with E₀ = 1000 N/C: (a) check the circle's largest σ against σ = 2ε₀E₀ cos θ; (b) how many times larger is the teardrop's largest σ, where is it, and why; (c) in the last step (the hollow box with the line charge), what are the field in the cavity and the charge on the cavity walls? Explain with Gauss's law.

## Common misconceptions

- **"The rod gives the sphere some of its charge."** In induction the rod never touches; the sphere's own electrons move.
- **"Positive charges move to the far side."** Only electrons move in a metal; the far side is positive because electrons left it.
- **"Grounding always removes charge."** It holds the potential at zero; with a charged rod nearby that means taking on charge.

## Physics behind the demo

- Two perfectly conducting spheres on ideal insulating stands and a point charge for the rod's tip, solved exactly with Kelvin image charges (iterated between the spheres until negligible). Touching spheres (or a wire) are one equipotential conductor; a grounded sphere is at zero potential.
- The marks show the surface charge density σ = ε₀E·n in the plane of the drawing; darkness is in proportion to |σ|.
- Conductor shapes in a field (2D): a cross section of long conductors, so the fields lie in the plane, the point charge is a line charge λ and charges are per length. The conductor is isolated with a chosen net charge per length. A boundary element method cuts the surface into 240 straight panels (about 420 with a cavity), each with uniform σ, sets the potential equal at the panel midpoints, fixes the total charge, and solves one dense linear system; the field is then the exact field of the panel charges plus E₀ and λ. E = 0 inside the metal and in the cavity is not imposed, so the readouts show what is left (below 10⁻³ of the largest surface field). Tested against exact results: the cylinder in a uniform field (σ = 2ε₀E₀ cos θ, error below 0.003 % of 2ε₀E₀), the cylinder near a line charge (images −λ at a²/d and λ + λ_net at the center), the tip of an elliptic cylinder (E₀(1 + a/b)), and a hollow ring (same outside as a solid cylinder, no charge on the cavity walls). Doubling the panels changes the largest σ by less than 0.03 %. The teardrop's point is rounded to 1.5 mm and the box's corners to 3 mm: at a perfectly sharp point σ grows without limit.
