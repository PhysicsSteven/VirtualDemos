---
title: The Cavendish Experiment
level: Intro mechanics (gravitation)
time: 15 to 25 minutes
---
## What students should come away with

- Gravity between ordinary objects is real but tiny: two lead spheres of 1.5 kg and 20 g a few centimeters apart attract with less than a nanonewton, about five billionths of the small sphere's weight.
- A torsion balance turns that force into something measurable: the fiber's torsion constant comes from the period of the swing, and a light lever turns a twist of a few milliradians into centimeters on a scale.
- Measuring G is what lets us find the mass of the Earth from g and its radius.

## Before class

Students should know Newton's law of gravitation, torque, and the period of a torsion pendulum. The demo is a top view of a torsion balance, to scale except that the beam's turn is drawn 20 times larger. Two large lead spheres on a swivel frame go to position A, position B or away. A laser reflects from a mirror on the beam to a scale 5.000 m away, and a strip chart records the spot. The clock is real time; ×10 and ×100 only shorten the wait, and one button runs to the next turning point. Blind hides the twist, the forces, the resting positions and G.

## Running it in class

1. **Open the page.** It starts settled in A and swings the spheres to B. Ask Q1 while the spot sets off: the force arrows show 0.87 nN on each small sphere, the net of both large spheres.
2. **Watch the swing.** At ×100 a full swing takes under 4 s. The spot oscillates about the new resting line, 5.66 cm below the old one, and dies away by e every 720 s. Ask Q2.
3. **Turning points.** Run to a few turning points and show that they are half a period apart and that three successive ones give the resting position (Q3).
4. **Find G.** With ΔS and T, Q4. Then switch Blind off to compare with the model's G.
5. **Weigh the Earth.** Q5.

## Questions

**Q1.** Find the force between a 1.500 kg and a 20.0 g lead sphere whose centers are 46.5 mm apart. Compare it with the small sphere's weight.

**Q2.** The beam with its two 20.0 g spheres 50.0 mm from the fiber swings with a period of 360 s. What is the fiber's torsion constant, and how far should the beam turn with the spheres in one position?

**Q3.** Three successive turning points of the spot are 42.76, 50.60 and 44.48 cm. Where will the spot come to rest?

**Q4.** The resting spot moves 5.66 cm when the spheres go from A to B, the period is 361 s, and the scale is 5.000 m away. Find G, first from the near spheres alone, then corrected for the pull of each large sphere on the far small sphere.

**Q5.** Use your G with g = 9.81 m/s² and R_E = 6.37 × 10⁶ m to find the mass and the average density of the Earth.

## Common misconceptions

- **"Gravity only matters for planets."** Every pair of masses attracts; it is only too weak to notice between everyday objects.
- **"The beam stops at the new position."** It overshoots and swings for a long time; with a period of minutes the balance takes an hour or more to settle, which is why resting positions are found from turning points.
- **"The spot moves by twice the twist."** It moves by L tan 2θ: the mirror doubles the angle, and the scale distance multiplies it.
- **"Doubling the spheres' masses doubles ΔS."** Only the large masses matter: the small mass cancels, because the torsion constant is found from a period that depends on the small spheres too.

## Physics behind the demo

- The beam is massless with small spheres m = 20.0 g at ±50.0 mm; the large spheres M = 1.500 kg sit on a frame at radius √(l² + r²), r = 46.5 mm, so in A and B each is 46.5 mm from the nearer small sphere, square to the untwisted beam. Spheres of lead (11 340 kg/m³), radii 7.50 and 31.6 mm, attract as points.
- I θ'' = τ(θ) − κθ − 2Iγθ', with I = 2ml², κ = 4π²I/T₀², T₀ = 360.0 s and γ = 1/720 s; τ(θ) is the exact sum over all four pairs and changes as the beam turns. RK4 with turning points found by bisection.
- Spot = 0.500 m + L tan 2θ, read to 1 mm; clock to 1 s; G = 6.674 30 × 10⁻¹¹ N·m²/kg² (CODATA 2022). No noise, drift or seismic shaking.
- The swing of the frame takes 5 s (a smooth step); the torque follows the frame's angle during the swing.

## Going further

- Pair with **Gravity Near Earth** (g against height) and **Kepler's Orbits** (G times the Sun's mass from a planet's orbit).
- Homework: what period would the balance need for ΔS to be 50 cm, and why is a fiber that weak hard to use?
