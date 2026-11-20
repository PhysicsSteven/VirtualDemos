---
title: Surfaces and Gradients
level: Calculus III (OpenStax Calculus Vol 3, 4.1 to 4.8) and Physics I and II (Vol 1 8.4; Vol 2 7.4)
time: 15 to 40 minutes
---
## What students should come away with

- A function of two variables is a surface z = f(x, y), and its contour map is the same information seen from above: each level curve is where the surface has one height.
- A partial derivative is the slope of the surface cut by a plane that holds the other variable fixed. The tangent plane at a point carries both slopes at once.
- The gradient ∇f = (∂f/∂x, ∂f/∂y) points straight uphill, across the level curve, and its size is the steepest slope. The slope in any other direction is D_u f = ∇f · u = |∇f| cos θ, zero along the level curve. In physics the field is the downhill gradient of a potential: E = −∇V, F = −∇U.
- Where ∇f = 0 the second derivative test sorts the point by D = f_xx f_yy − f_xy²: a pit, a peak, a saddle, or no verdict when D = 0.
- On a constraint g(x, y) = c, f is largest or smallest where the constraint just touches a level curve of f, so ∇f = λ∇g. The multiplier has a meaning: how fast the best value changes with c, or a constraint force.
- A limit in two variables must be the same along every path. Two paths that disagree prove it does not exist; any number of paths that agree prove nothing.
- Along a path r(t), the chain rule gives dz/dt = ∂f/∂x · dx/dt + ∂f/∂y · dy/dt = ∇f · r′: each variable's rate times how much f cares about it. In physics, the rate a moving charge's potential changes is dV/dt = −E · v.

## Before class

Nothing to install. The surface needs WebGL; without it (or with Flat pressed) the contour map takes the whole picture and every tool still works. Projector mode thickens the lines. Blind (Lab fold) hides the second derivative test, λ, the values along the limit paths and dz/dt by the chain rule, so students predict first. Every setup's function is typed in the box and can be edited.

## Running it in class

1. **A hill.** Open on A hill and its contour map. Turn the surface and compare it with the map: close contours are steep ground. Press Play to turn the direction arrow u and watch the graph of D_u h: it is a cosine, largest along ∇h, zero along the level curve (Q1).
2. **Slopes.** Press Ideal gas. The two slices are an isotherm and a constant volume line; their slopes are ∂P/∂V and ∂P/∂T (Q2). Press Play to slide along V.
3. **E = −∇V.** Press Two opposite charges. Turn on the arrows of E: they cross every equipotential at right angles and run downhill from the positive charge to the negative one.
4. **Peaks, pits and saddles.** Press A peak, a pit and two saddles and click each critical point in the list; read D. Then Two equal charges: a saddle where E = 0 (Q3), and the monkey saddle, where the test says nothing.
5. **Where a ball rolls.** Press Where a ball rolls and Play. The ball swings across a pit and settles; with drag 0 its total energy U + K stays constant on the graph. Try starting it right on the saddle.
6. **A constraint.** Press The most area for 8 m of fence and Play: the point slides along x + y = 4 until ∇A lines up with ∇g at the square (Q4). Then A bead on a hoop: λ∇g is the push of the hoop.
7. **Limits.** Press xy/(x² + y²) and drag m. Then x²y/(x⁴ + y²): every line gives 0 but the parabola gives ½ (Q5).
8. **The chain rule.** Press A hiker circling the hill and Play: the hiker walks a 1.2 km circle at 60 m/min, and the readouts split her rate of climb into ∂h/∂x · dx/dt and ∂h/∂y · dy/dt, beside the same rate from the heights along the path. It is zero where the path touches a level curve. Then A gas heated as it expands (two terms of opposite sign) and A charge carried past a dipole, where dV/dt = −E · v and q times −dV/dt is the power the field delivers (Q6).

## Questions

**Q1.** On the hill at the point (−1, −0.8) km, the slope along u is largest when u points one way and zero for two directions. Which directions, and how are they related to the level curve through the point?

**Q2.** For 1 mol of ideal gas, P = nRT/V. Find ∂P/∂V and ∂P/∂T at V = 20 L, T = 300 K, give their units, and say what each one means for a gas in a cylinder.

**Q3.** Two equal positive charges sit at (±1, 0) cm. Why must the midpoint be a critical point of V, and why is it a saddle rather than a pit? Is a positive test charge placed there stable?

**Q4.** A rectangle has 8 m of fence around it. Use ∇A = λ∇g with A = xy and g = x + y = 4 to find the best rectangle and λ. What does λ = 2 m tell you?

**Q5.** Along every straight line y = mx into the origin, f = x²y/(x⁴ + y²) goes to 0. Does the limit at the origin exist? Explain with a path.

**Q6.** A charge of +1 nC moves at 0.5 cm/µs along y = 0.8 cm past the dipole. Use dV/dt = ∇V · v to explain how V can be zero at the midpoint while it changes quickly there, and say whether the field speeds the charge up or slows it down at that moment.

## Common misconceptions

- **"The gradient is a vector pointing up the surface."** ∇f lives in the xy plane (the map), pointing in the direction to walk to climb fastest; its size is the slope, not a length on the surface.
- **"∇f = 0 means a maximum or a minimum."** It can be a saddle (the pass between two pits, the midpoint of two equal charges), or the test can fail (the monkey saddle).
- **"If the limit along every line is the same, the limit exists."** x²y/(x⁴ + y²) agrees along every line and still has no limit: the parabola y = x² gives ½.
- **"dz/dt is ∂f/∂x plus ∂f/∂y."** Each partial derivative must be multiplied by how fast its own variable changes; a hiker standing still has dz/dt = 0 on the steepest slope.
- **"Lagrange's λ is just a number to eliminate."** It is how fast the best value changes with the constraint (the fence: 2 m² more area per meter), and in mechanics it gives the constraint force (the hoop's push).

## How the demo works

- The boxes are read by the site's math parser (demos/lib/vdmath.js), never run as code. Every first and second partial derivative is an exact formula, shown in the Formulas list, so slopes, the gradient, D_u f, the Hessian and D are exact at the point.
- Critical points are found by Newton's method from a grid of starting points over the square the surface shows; constrained extremes by Newton's method on ∇f = λ∇g, g = c, from the highest and lowest points along the traced constraint. Both reach about twelve significant figures. A point outside the square is not searched for.
- Level curves are traced by marching squares on a grid. The surface is drawn on a 72 by 72 grid and cut off where it leaves its box, which the charges' 1/r spikes always do.
- The ball is a particle of mass 1 kg with acceleration −∇U − bv, stepped by fourth order Runge Kutta: a particle in a potential, not a real ball rolling on a hill.
- The chain rule value uses the exact derivatives x′(t) and y′(t) of the typed path. The rate from the values along the path is a centered difference with a step of 10⁻⁴ of the time range, so the two agree to about (Δt)²z‴/6.
- The values along limit paths are read at a distance of 10⁻⁶ of the view from the point. These are computed values: the same settings always give the same digits.
