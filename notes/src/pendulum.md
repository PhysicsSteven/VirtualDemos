---
title: Pendulum
level: PHYS 201
time: 25 to 40 minutes
---
## What students should come away with

- For small swings a pendulum's period is T = 2π√(L/g): set by length and gravity, not by mass and almost not by the size of the swing.
- So a plot of T² against L is a straight line through the origin with slope 4π²/g, a way to measure g.
- Large swings take longer (18% longer at 90°), because sin θ < θ.
- A swinging rod is not a simple pendulum: its mass is spread out, and it swings like a simple pendulum 2L/3 long.

## Before class

The photogate at the bottom times every second pass, so it reads the full period to 0.001 s. Drag the bob to set the release angle, or use ← →. The **Mystery planet** hides its g.

## Running it in class

1. **Simple pendulum.** 1.00 m, 8°: the photogate reads 2.009 s; 2π√(L/g) gives 2.006 s.
2. **Does mass matter?** Change the mass from 2 kg to 50 g: nothing changes.
3. Change L from 1.60 m to 0.40 m: the period halves (2.541 s to 1.270 s), since T ∝ √L.
4. **Large swings.** At 90° the period is 2.368 s, 18% longer. Capture several angles and plot T against θ₀.
5. **Swinging rod.** A 1.00 m rod: 1.640 s, like a 0.667 m simple pendulum.
6. **On the Moon** and the **Mystery planet**: measure g from T² against L.

## Questions

**Q1.** Predict the period of a 0.25 m pendulum on Earth, and of a 1.00 m pendulum on the Moon (g = 1.62 m/s²).

**Q2.** Why does the mass cancel? Use Newton's second law along the arc.

**Q3 (lab).** Your T² against L fit gives g slightly low (about 9.78 m/s² with 8° releases). Is that a random or a systematic error? What causes it and how would you reduce it?

**Q4.** How long would a pendulum have to be for its swing (half a period) to take exactly 1 s? Why were clock pendulums about that length?

**Q5.** A 1.00 m uniform rod and a 1.00 m simple pendulum swing side by side. Which is faster, and why?

## Common misconceptions

- **"A heavier bob swings faster."** Mass cancels.
- **"A bigger swing takes longer because it travels farther."** For small swings it also moves faster, and the two cancel; only large swings take noticeably longer.
- **"Length is the string length."** It is to the bob's centre of mass (and for a rod, the effective length is 2L/3).

## Physics behind the demo

- θ'' = −(g/ℓ) sin θ (ℓ = L for a point bob, 2L/3 for a uniform rod about its end), integrated with fourth order Runge–Kutta in 1 ms steps; the exact period is T₀ (2/π) K(sin(θ₀/2)) with K the complete elliptic integral.
- Point bob, massless inextensible string, frictionless pivot. Air drag (optional) is a small force in proportion to speed.
- The photogate interpolates each crossing of the bottom and reports the time between every second crossing, to 0.001 s.
