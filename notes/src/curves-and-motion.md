---
title: Curves and Motion
level: Calculus II and III (OpenStax Calculus Vol 2 7.1 to 7.5, Vol 3 3.1 to 3.4) and Physics I (Vol 1 4.2, 4.4, 13.5) or Physics II (Vol 2 11.3)
time: 15 to 40 minutes
---
## What students should come away with

- Velocity is the derivative of the position vector and always points along the path; acceleration is the second derivative and usually does not. Its tangential part a_T = d|v|/dt changes the speed, and its normal part a_N = κ|v|² turns the motion.
- Curvature κ is a property of the path alone, the same however fast the point goes. The osculating circle, radius 1/κ, is the circle that fits the path best at a point, and its center is where a_N points.
- Arc length and area are integrals of the same derivatives: s = ∫|r′| dt, and the area swept from the origin is ½∫(x y′ − y x′) dt, which is ½∫r² dθ for a polar curve.
- A conic is the set of points whose distance to a focus is e times their distance to a directrix. Planets, comets and escaping bodies follow conics with the Sun at the focus, and sweep equal areas in equal times because the force points at the Sun.

## Before class

Nothing to install. Projector mode makes the arrows and labels readable from the back. Blind (Lab fold) hides the curvature, the parts of the acceleration and the areas, so students can predict them first. Every setup can be edited in the boxes; the range boxes take expressions such as 2pi. The arrows are drawn to scale, and the scale bar at the bottom left of the picture says what length means 1 m/s (or 1 au/yr) and what means 1 m/s².

## Running it in class

1. **The rolling wheel.** Open the page (A rolling wheel: the cycloid). Before pressing Play, ask where on the tire the point moves fastest and where slowest. Play, then drag the point to the bottom of an arch: v = 0, but the acceleration arrow is still there (Q1).
2. **The projectile.** Turn on the split of a. Ask what happens to a_T and a_N as the ball climbs, peaks and falls; then read the radius of curvature at the top (Q2).
3. **Circular motion.** Press Uniform circular motion, then A car speeding up on a circular track, and compare where the acceleration points in each (Q3).
4. **The helix.** Press A proton in a magnetic field. Switch to 3D and turn the view. Ask whether the osculating circle is the circle seen from above (Q4).
5. **Kepler.** Press An elliptical orbit. Count the slices and read their areas, then move Eccentricity e through 1 and beyond (Q5).
6. **Polar area and length.** Press the Cardioid, Blind on, and have students compute the area and the length before turning Blind off (Q6).

## Questions

**Q1.** At the bottom of an arch the point on the tire is at rest for an instant. Is its acceleration zero there? Find its size and direction from the demo, explain them by looking at the wheel from the hub, and say why T, N and κ are undefined at that point.

**Q2.** For the projectile, explain why a_T is negative on the way up and positive on the way down although the acceleration never changes. At the top, use a_N = v²/ρ to predict the radius of curvature ρ from the launch velocity and g, and check it against the demo.

**Q3.** For uniform circular motion at r = 2 m and ω = 3 rad/s, predict v, a_T, a_N and κ, then check. For the car speeding up on the 50 m track, read a_T and a_N at t = 10 s and find the size of the total acceleration. Where does the acceleration point at the start, and toward what does it turn as the car speeds up?

**Q4.** The proton's helix seen from above is a circle of radius R = 10.44 cm. Is the radius of curvature of the helix itself also R? Predict it from κ = R/(R² + c²), with c the rise per radian, and check it in the demo. Why is the acceleration perpendicular to B?

**Q5.** For the orbit with e = 0.6 and q = 0.6 au, find the semimajor axis, the semiminor axis and the period, and predict the area of each of the twelve slices. Why are they equal? Read the speed at perihelion and at aphelion and explain their ratio. What happens to the orbit as e passes 1, and why is e = 1 called escape?

**Q6.** For the cardioid r = 1 + cos θ, compute the area inside and the length of the curve with the polar formulas, then check them against the readouts after a full turn. Why does the curvature grow without limit at the cusp?

## Common misconceptions

- **"At rest means no acceleration."** The point on the tire is at rest at the bottom but accelerates at 4π²R straight up; a ball at the top of its flight has v ≠ 0 but a_T = 0.
- **"Acceleration points along the motion."** Only its tangential part does. In uniform circular motion and in a magnetic field the acceleration is entirely normal and the speed never changes.
- **"The radius of curvature is the distance to the center of whatever the path goes around."** For the helix it is R + c²/R, larger than R; for an ellipse it changes from point to point and is not the distance to the Sun.
- **"Planets speed up because they get closer, so equal times sweep equal angles."** Equal times sweep equal areas, not equal angles; the slices near the Sun are short and wide.

## How the demo works

- What students type is read by the site's own parser (`demos/lib/vdmath.js`), never run as code. The first and second derivatives are exact formulas from the rules of calculus, compiled to functions; velocity, acceleration, T, N, B and κ = |v × a|/|v|³ at the point are computed from them exactly.
- A polar curve moving evenly in θ uses θ as the time, so the arrows are dr/dθ and d²r/dθ². Moving with equal areas in equal times, dθ/dt = h/r² with h constant, and the chain rule gives v and a; the point is stepped with a fourth order Runge–Kutta step, and the clock shown is the integral ∫ r²/h dθ, so it is exact for the θ shown.
- Arc length, area and the orbit's time are integrals by adaptive Simpson's rule, to about nine significant figures. The equal time slices are found by inverting the time integral.
- Orbits use the Sun's nominal GM (IAU 2015), the astronomical unit and the Julian year, so a 1 au circular orbit takes 1.00 yr. The orbiting body's mass and every other body are left out. The helix uses CODATA 2022 values for the proton, rounded to four significant figures in the boxes.
