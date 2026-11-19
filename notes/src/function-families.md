---
title: Families of Functions
level: Precalculus and Calculus I (OpenStax Calculus Vol 1 1.1 to 1.5, 3.7) and Physics I (University Physics Vol 1 15.1, 15.3; Vol 2 10.5)
time: 15 to 40 minutes
---
## What students should come away with

- An angle in radians is an arc length divided by the radius, θ = s/r. On the unit circle the point at angle θ is (cos θ, sin θ), so sine is a height, cosine is a distance across, and sin²θ + cos²θ = 1 is the Pythagorean theorem.
- A point going around a circle at a steady rate casts a shadow that moves in simple harmonic motion: x = A cos(ωt + φ). The amplitude is the radius, the angular frequency is how fast the point turns, and the phase is where it starts.
- g(x) = a·f(b(x − c)) + d is f stretched and shifted. Numbers outside f act on the output (a stretches up and down, d moves up and down); numbers inside act on the input and work backward (b squeezes widths by 1/b, c moves the graph right by c, not left).
- The inverse of a one to one function is its graph reflected in y = x. The reflection swaps rise and run, so the slope of the inverse at (f(x₀), x₀) is 1/f′(x₀). That one fact gives the derivatives of ln, √ and arcsin.
- eˣ and ln x are mirror images. Exponential decay, N = N₀e^(−t/τ), is eᵗ flipped and stretched; it halves every half life, τ ln 2, and the inverse answers how long until a given fraction is left.

## Before class

Nothing to install. Projector mode enlarges the picture and labels. Blind (Lab fold) hides the readouts and formulas so students can predict them first. The three modes are switched by the buttons beside Play: Unit circle, Stretch and shift, Inverse. Play does what each mode is about (turns the point in real time, sweeps the number touched last, slides P along f).

## Running it in class

1. **The unit circle.** The opening setup has P at 0.8 rad. Ask what the height of P is called, then press Play. The violet arc unrolls onto the θ axis at its true length, because the graph's θ axis uses the circle's own scale (Q1).
2. **One radian.** Press One radian. The arc equals the radius; ask how many radii fit around the circle (Q1).
3. **Phasor.** Press Phasor: a mass on a spring and Play. The block on the spring stays under P. Change ω and φ with the sliders and ask what changes on the graph (Q2).
4. **Stretch and shift.** Press Move a parabola. Before touching anything, ask where the vertex of 2(x − 1)² − 3 is. Then press sin x: amplitude, period, phase and ask for the period and the shift (Q3).
5. **Physics as a transform.** Press Oscillation and then Exponential decay and half life. The same four numbers become amplitude, angular frequency, phase; and starting value and time constant (Q4).
6. **Inverse.** Press x² and √x, drag P and read the two slopes. Then eˣ and ln x and x³ + x (Q5).
7. **When it fails.** Press x² on [−2, 2]. The red lines show the horizontal line test failing on f and the vertical line test failing on its mirror image. Ask how to fix it (Q6). Finish with Decay: how long until N is left? (Q7)

## Questions

**Q1.** A circle has radius 0.40 m. How long is the arc for θ = 2.5 rad, and what angle in degrees is that? Why is a full turn 2π radians whatever the radius?

**Q2.** For x = A cos(ωt + φ) with A = 0.10 m, ω = π rad/s and φ = π/3, find x and the velocity v = −Aω sin(ωt + φ) at t = 0, and the period. What happens to the graph if φ changes to 0?

**Q3.** Without the demo, sketch g(x) = 2 sin(2x − π/2). Give its amplitude, period and horizontal shift. Why is the shift π/4 and not π/2?

**Q4.** A capacitor discharges as V = 5e^(−t/2.0 s) V. Write it as a·f(b(t − c)) + d with f = eᵗ. Find the half life and V after three half lives.

**Q5.** At P = (1.5, 2.25) on x², what is the slope of x², and what is the slope of √x at (2.25, 1.5)? Use the same idea to find d/dy of ln y and of arcsin y.

**Q6.** Why does x² on [−2, 2] have no inverse function? Give two different domains on which it does, and the inverse on each.

**Q7.** A sample decays as N/N₀ = e^(−t/τ) with τ = 1.0 s. Write t as a function of N/N₀. How long until 10% is left? What is dt/dN at N/N₀ = 0.5, and what does its sign mean?

## Common misconceptions

- **"f(x − 2) moves the graph left, because of the minus sign."** It moves it right: g reaches the value f(0) where x − 2 = 0, at x = 2. Numbers inside the function act on the input, so they work backward.
- **"b = 2 makes the graph twice as wide."** It makes it half as wide: the inside reaches each value at half the x. The period of sin(2x) is π, not 4π.
- **"f⁻¹(x) means 1/f(x)."** The inverse undoes f; the reciprocal divides by it. For eˣ the inverse is ln x, while 1/eˣ is e^(−x).
- **"Every function has an inverse."** Only one to one functions do; x² and sin x need a restricted domain first.
- **"Radians and degrees are just two units; radians are nothing special."** A radian is the angle whose arc equals the radius. That is why s = rθ, v = rω and the derivative of sin x is cos x hold only in radians.

## How the demo works

- The function box is read by the shared parser (demos/lib/vdmath.js); nothing typed is run as code. Angles are in radians.
- Unit circle: P = (A cos θ, A sin θ) with θ = ωt + φ, and Play runs in real time. With A = 1, ω = 1 and φ = 0 the graph's θ axis uses the circle's scale, so the arc and the violet piece of the axis are the same length on screen.
- Stretch and shift: g is computed from f exactly as written, and its formula is f with x replaced by b(x − c), simplified by the parser. The half life marks of the decay setup are at τ ln 2 apart, with τ = −1/b.
- Inverse: f is called one to one when its values at 4,001 evenly spaced points on the domain strictly rise or strictly fall; a narrow turn between two of those points could be missed. The slope of f is exact from the derivative rules; the slope of f⁻¹ is 1/f′(x₀), and the demo also measures it on the inverse itself (f⁻¹ by bisection to rounding, then a central difference) as a check.
- The capacitor (τ = 2.0 s, V₀ = 5 V), the spring (A = 0.10 m, ω = π rad/s) and the decaying sample (τ = 1.0 s) are chosen values, not measured ones.
