---
title: Impulse and Momentum
level: PHYS 201
time: 25 to 40 minutes
---
## What students should come away with

- Impulse J = ∫F dt, the area under a force against time graph, equals the change of momentum Δp.
- A bounce reverses the velocity, so the momentum change is bigger than for a stop: Δp = m(1 + e)v₀.
- A softer bumper spreads the same impulse over a longer time with a smaller peak force: the idea behind airbags, crumple zones and bending your knees.
- A measured impulse depends on how well the sensor samples a short pulse.

## Before class

Students need momentum p = mv as a vector. Velocities are positive toward the sensor; the sensor reads the size of the force on it, which is equal and opposite to the force on the cart. Playback slows to 1/20 near the hit (the timer is real time). **Blind** hides the area, the momentum change and the peak force.

## Running it in class

1. **Stiff spring.** 0.50 kg at 0.600 m/s bounces back at −0.540 m/s. The force spike lasts 33.4 ms with a peak of 26.8 N. Area 0.570 N·s; m(v₂ − v₁) = −0.570 kg·m/s.
2. **Soft spring.** Same cart: the contact lasts √10 = 3.16 times longer, the peak is √10 times lower (8.49 N), and the area is the same.
3. **Clay.** The cart barely bounces (−0.060 m/s): the impulse drops to 0.330 N·s. A bounce needs more impulse than a stop.
4. **Sample rate.** At 200 Hz the stiff spring's 33 ms pulse is only 6 or 7 points: the trapezoid area can miss by about 2% low to 1.4% high over the demo's ranges, depending on where the samples fall (0.45% low for this run). At 1 kHz it agrees to about 0.01%.
5. **Lab.** Vary m and v₁ for one bumper, capture the area and m(v₂ − v₁) each time, and plot one against the other.

## Questions

**Q1.** A 0.50 kg cart hits the stiff bumper at 0.600 m/s and leaves at 0.540 m/s. Find the impulse on the cart (size and direction) and the average force over the 33.4 ms contact.

**Q2.** Why is the impulse smaller with clay, even though the cart arrives with the same momentum?

**Q3.** The soft bumper has one tenth the stiffness. How do the contact time, the peak force and the impulse compare with the stiff bumper?

**Q4.** Explain with the impulse–momentum theorem why an airbag reduces injuries.

**Q5 (lab).** Export one run's F(t) and integrate it yourself (trapezoids). Compare with m(v₂ − v₁). How does the agreement depend on the sample rate?

## Common misconceptions

- **"The bigger force gives the bigger impulse."** Impulse is force times time; soft and stiff bumpers here give the same impulse.
- **"Bouncing off takes less force than stopping."** It takes more impulse: the momentum must be reversed, not just removed.
- **"The force on the sensor and the force on the cart are different sizes."** They are a third law pair, equal and opposite at every instant.

## Physics behind the demo

- Frictionless cart. The bumper pushes with F = kx while compressing (simple harmonic, ω = √(k/m)), then unloads along a steeper line of stiffness k/e², so the cart leaves at e times its speed. Each phase is a quarter of a simple harmonic oscillation, so F(t) and the motion are exact; the contact time is (π/2)√(m/k)(1 + e).
- Stiff spring k = 4000 N/m and soft spring 400 N/m, both e = 0.90; clay 1500 N/m, e = 0.10. Some energy is lost in the unloading, as in real bumpers.
- The sensor samples at the chosen rate with a clock not synchronised to the hit and rounds to 0.01 N. The motion detector rounds the velocities to 0.001 m/s. No noise is added.
