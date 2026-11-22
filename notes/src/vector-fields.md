---
title: Vector Fields, Work and Curl
level: Calculus III (OpenStax Calculus Vol 3, 6.1 to 6.5, and 6.7 in the plane) and Physics I and II (Vol 1 7.1, 8.2; Vol 2 12.5)
time: 15 to 40 minutes
---
## What students should come away with

- A line integral ∫F·dr adds up the part of F along the path, piece by piece. For a force it is the work; the sign depends on the direction of travel.
- A force is conservative when the work between two points does not depend on the path. Then it is the gradient of a potential f, the work is f(B) − f(A), and the work around every loop is zero. Gravity is; a swirl is not, and friction is not even a field.
- The curl ∂Q/∂x − ∂P/∂y measures local turning: a paddle wheel turns at half of it. A field can have curl with straight streamlines (shear), and no curl while circling a point (the wire).
- Green's theorem: the circulation around a loop is the curl summed inside, and the outward flux is the divergence summed inside, but only when F is defined everywhere inside. The wire's 2π (Ampère's law) and the source's 2π come from the one point where the field is undefined.

## Before class

Nothing to install. Projector mode thickens the arrows and the path. Blind (Lab fold) hides the curl, the divergence, the potential contours and the conservative verdict, so students decide from the work first. Every setup's field is typed in the two boxes, so students can edit it (change −y to −2y in the swirl and watch the circulation double).

## Running it in class

1. **Gravity, two paths.** Open on Uniform gravity. The straight line and the path along x, then y both give −19.62 J. Ask why the flat leg adds nothing (Q1). Press Play: the work grows only where the bead rises.
2. **A swirl.** Press A swirl force. Same A and B: 0 J and 6 J. Switch Compare with to Along y, then x: −6 J. Ask what that says about a potential energy for this force (Q2).
3. **Closed loops and Green's theorem.** Set the path to a circle. For the swirl the circulation is 2 times the area for any center (shade by curl: it is uniform). For gravity it is zero.
4. **Find the potential.** Back to gravity with Blind off: the contours are horizontal lines of f = −9.81y, and f(B) − f(A) matches W. Then the point mass: the line and the half circle both give 0.6667, and f = 1/r (Q3).
5. **The wire.** Press The field around a long wire. The paddle does not turn anywhere, yet the circle gives 2π. Drag the loop off the wire: 0. Ask students to reconcile this with Green's theorem (Q4).
6. **Shear and divergence.** A shear flow turns the paddle clockwise with straight streamlines (Q5). A spreading flow and the source and sink show the flux form: drag the box over the source.

## Questions

**Q1.** In uniform gravity, F = (0, −9.81) N on 1.00 kg, why does the path along x, then y take the same work as the straight line from (0, 0) to (3, 2)? Which leg does all the work?

**Q2.** The swirl force F = (−y, x) N takes 0 J along the straight line from (0, 0) to (3, 2), 6 J along x then y, and −6 J along y then x. Can it have a potential energy? What is the work around the loop that goes out along x, then y and back along the straight line?

**Q3.** Show that f = 1/r is a potential of the point mass field F = −r̂/r², and predict the work from (3, 0) to (1, 0). Why is the work zero along any arc of a circle centered on the mass?

**Q4.** The wire's field has zero curl everywhere it is defined, but the circulation around a circle centered on the wire is 2π (in units of μ₀I/2π). Why does Green's theorem not force this to be zero? What is the circulation around a loop that does not enclose the wire, and why?

**Q5.** In the shear flow v = (y, 0) every streamline is a straight line, yet the paddle wheel turns. Which way, how fast, and why?

## Common misconceptions

- **"Work is force times distance, whatever the path."** Only the part of F along the path counts, and for a nonconservative force the route matters: the swirl gives 0, 6 and −6 J between the same points.
- **"If the arrows go in circles the curl is nonzero, and straight arrows mean no curl."** The wire's arrows circle the origin with zero curl away from it; the shear flow's arrows are straight with curl −1.
- **"Curl zero means conservative."** Only on a region without holes. Around the wire the curl is zero wherever B is defined, and the circulation is still 2π.
- **"Tracers show the path a particle would take."** For a force field they move with velocity F, which is not how a mass moves (a mass accelerates along F). They show the direction and size of F.

## How the demo works

- The two boxes are read by the site's math parser (demos/lib/vdmath.js), never run as code. The four partial derivatives, the curl and the divergence are exact symbolic formulas.
- Paths are made of straight pieces and circular arcs. Each line integral and flux is computed by adaptive Simpson's rule along each piece, to about nine significant figures. The summed curl and divergence inside a circle or square are double integrals by the same rule; inside a freehand loop they are summed on a 200 × 200 grid, good to about three figures, as the page says. A sum that does not converge shows as undefined: around the point mass, div F = 1/r³ (the plane has no inverse square Gauss's law), so ∬ div F dA has no value although the circulation is 0 and the flux is −2π/R.
- The verdict samples the curl on a grid over the view, then builds the potential on a grid by adding the work along grid edges and checks that every small loop closes. A loop around a point where F is undefined does not close for the wire, so the page says there is no single potential there; away from the wire the angle θ is a potential.
- The paddle wheel turns at ω = ½ curl F. The flux box gives its net outflow by integrating F·n along its four sides; divided by its area it approaches the divergence as the box shrinks. Tracers move with velocity F, sped up by the factor shown on the picture for flows.
- These are computed values, not measurements: the same settings always give the same digits.
