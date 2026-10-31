---
title: Rocket Propulsion
level: PHYS 201
time: 15 to 25 minutes
---
## What students should come away with

- A rocket pushes exhaust backward and the exhaust pushes the rocket forward; no ground or air is needed. Thrust = u × (burn rate).
- As fuel burns the rocket gets lighter, so the same thrust gives more and more acceleration.
- In empty space Δv = u ln(m₀/m), whatever the burn rate. The final speed can exceed the exhaust speed.
- Against gravity, every second of burning costs g × (1 s) of speed: burn fast, and lift off promptly.

## Running it in class

1. **In deep space.** 10 000 kg with 9000 kg of fuel, u = 2500 m/s: Δv = 2500 ln 10 = 5756 m/s, more than twice the exhaust speed. Change the burn rate: the final speed does not change.
2. **Launch from the ground.** Thrust 500 kN against a 98 kN weight. Burnout speed 5315 m/s: 441 m/s lost to gravity in the 45 s burn.
3. **Too heavy at first.** Thrust 175 kN is less than the 186 kN launch weight: it burns fuel on the pad for 16.6 s before lifting off.
4. **Same fuel, burned slowly.** 150 s instead of 45 s: burnout at 4285 m/s, 1472 m/s lost to gravity.
5. **Two stage rocket.** 11 000 kg at launch: a first stage of 7000 kg fuel in a 1000 kg casing, under an upper stage of 2000 kg fuel and 1000 kg dry. The casing drops at 35 s (2186 m/s, 30.9 km) and the upper stage burns out at 45 s at 4834 m/s. The same masses in one stage, carrying the empty casing to the end, reach only 3820 m/s. Without gravity: u ln(11/4) + u ln 3 = 5276 m/s against u ln(5.5) = 4262 m/s.

## Questions

**Q1.** Why can a rocket accelerate in empty space, where there is nothing to push against?

**Q2.** Use Δv = u ln(m₀/m) to find the final speed in deep space for the default rocket. How much fuel would double that Δv?

**Q3.** For the launch from the ground, explain why the burnout speed is lower than the rocket equation says, and by how much.

**Q4.** Two identical rockets burn the same fuel, one in 45 s and one in 150 s. Which ends up faster, and why? Why is waiting on the pad (Too heavy at first) wasteful?

## Common misconceptions

- **"The exhaust pushes on the air or the ground."** It pushes on the rocket from inside.
- **"A rocket can't go faster than its exhaust."** Δv = u ln(m₀/m) exceeds u once m₀/m > e.
- **"Burning faster or slower gives the same speed."** Only without gravity.

## Physics behind the demo

- Variable mass: m dv/dt = u b − mg (b = burn rate), exact solution v = u ln(m₁/m) − g(t − t₀) after lift off at t₀, height from its integral, coasting after burnout.
- Two stages: both stages have the same engine (u and burn rate). Each burn is solved exactly from the speed and height it starts with; the casing is let go the moment the first stage's fuel runs out and the upper stage fires at once. The casing then coasts with no air.
- Constant g = 9.81 m/s² and no air drag. At hundreds of kilometers gravity is noticeably weaker, so the highest point shown is a rough figure (the readout says so).
- The animation is sped up so a flight takes about 25 s; the clock shows real time.
