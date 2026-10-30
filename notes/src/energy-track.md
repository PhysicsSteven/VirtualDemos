---
title: Energy on a Track
level: Intro mechanics (algebra or calculus based)
time: 20 to 30 minutes
---
## What students should come away with

- With no friction, K + U is the same at every point of the track: the skater turns around at its starting height every time, however the track is shaped between.
- Friction turns mechanical energy into thermal energy, μN for every metre slid. The total K + U + E<sub>th</sub> still never changes; only the mechanical part shrinks.
- The zero of potential energy is a choice. Moving the U = 0 line changes U and the total by the same amount and changes nothing about the motion.
- A track can push but not pull. The normal force N = m(v²/R + g cosθ) on the inside of a curve, m(g cosθ − v²/R) over a crest; where it would go below zero the skater leaves the track. Rails (Stick to the track) can pull, and then N goes negative.
- The heights the skater reaches depend only on energy per unit weight, so they are the same on the Moon or Jupiter and for any mass; how fast it gets there scales as 1/√g.

## Before class

Students should know K = ½mv², U = mgh and the idea of a normal force. Drag the skater anywhere and let go: near the track it lands on it, elsewhere it falls. Drag the round grips to reshape the track, drag a new point from the tray onto the track to add a bend, and drag a grip onto the bin to remove it. The dashed U = 0 line has a tab on the left edge to drag. The pie over the skater, the energy bars in the rail and the graph under the park all show K, U and thermal energy; **Blind** in **Lab** hides them for predictions.

## Running it in class

1. **Valley.** Before pressing **Play**, ask Q1. The skater starts 5.71 m up and the bottom is 0.80 m up; at the bottom the readout gives 9.82 m/s. Let it swing: it turns at 5.71 m on both sides, every time.
2. **Valley with friction.** Ask what the total bar will do. The turning points fall (3.90, 2.72, 1.95, 1.43 m ...) and the skater comes to rest near the bottom; the total bar does not move (Q2).
3. Drag the **U = 0** line up to the bottom of the valley and back. The motion and K do not change; U and the total shift together (Q3).
4. **Loop** and **Loop, started too low.** Ask Q4 first. In the low start the skater leaves the track near the top and falls across the loop. Turn on **Stick to the track** and run it again; watch N go negative.
5. **Hump** and **Hump on rails.** Ask where the skater will leave (Q5).
6. **Valley on the Moon.** The same turning heights, but the first swing to the far side takes 6.57 s instead of 2.67 s (Q6).
7. **Jump.** The landing on the ground puts a step into the thermal energy (Q7).

## Questions

**Q1.** On the Valley, the skater starts at rest 5.71 m up and the bottom of the track is 0.80 m up. With no friction, how fast is it going at the bottom? Does the answer depend on the skater's mass or on the shape of the track? Check with the readout and by changing m.

**Q2.** With μ = 0.08 the skater turns around lower each time but the total energy bar never changes. Where does the energy go? Without friction, the skater's turning height never changes; with it, why does it end up near the bottom rather than exactly at it?

**Q3.** Move the U = 0 line from the ground to the bottom of the valley. Which readouts change, by how much, and which stay the same? Why can the zero of potential energy be put anywhere?

**Q4.** A skater on a circular loop of radius R, with no friction, starts from rest at height h above the bottom of the loop. Show that it stays on the track all the way round only if h ≥ 5R/2. In Loop, started too low, explain from N why the skater leaves the track before reaching the top.

**Q5.** Over a crest of radius R, at a point where the track makes angle θ with the horizontal, show that the normal force is N = m(g cosθ − v²/R). Where on the Hump is the skater most likely to leave the track, and why does it stay on in Hump on rails even though N < 0?

**Q6.** On the Moon (g = 1.62 m/s²) the skater on the Valley turns around at exactly the heights it did on Earth, but the first swing to the far side takes 6.57 s instead of 2.67 s. Explain both facts, and check the ratio of the times.

**Q7.** Off the end of the Jump the skater flies and lands on the ground. Which part of its kinetic energy turns into thermal energy at the landing, and which part does it keep? Use the readouts to check your answer.

## Common misconceptions

- **"A heavier skater goes faster down the hill."** Every energy is proportional to m, so the speed at each height is the same for any mass. The mass changes the joules, not the motion.
- **"Friction destroys energy."** It moves energy from mechanical to thermal; the total bar never changes.
- **"Potential energy has a definite value."** Only differences in U matter. Moving the zero shifts U and the total together.
- **"The normal force always equals mg cosθ."** On a curved track it also supplies, or takes away, the centripetal force mv²/R. It can be several times mg at the bottom of a loop and zero at the moment the skater leaves a crest.
- **"In a loop the skater falls off because gravity wins at the top."** It leaves when gravity alone would curve its path more tightly than the track: the track would have to pull it outward, and it cannot.

## Physics behind the demo

- The skater is a point mass sliding without rolling or air drag. The track is a natural cubic spline through its points, parameterized by chord length so it can loop. On the track the speed obeys m dv/dt = −mg sinθ ∓ μN with N = m(σκv² + g cosθ) (σ the side the skater rides on, κ the curvature), stepped by fourth order Runge–Kutta every 0.5 ms; after each step the speed is set from the energy balance, so K + U + E<sub>th</sub> equals the starting total at every step. Kinetic and static friction share one μ.
- Where N would go below zero (rails off) the skater leaves the track; in the air the path is the exact parabola. Landing keeps the speed along the track and turns the speed across it into thermal energy (a perfectly inelastic bump); the ground does the same with the downward speed, and the side walls stop the skater.
- Tests (curriculum/validation/test_energy_track.cjs): time down an incline with and without friction, the friction heat μmg cosθ L, leaving a round hill at 2R/3 above its center, the total kept on a valley and a loop, the projectile range and fall off a ledge, the stopping distance on the ground.
- g for the Moon, Mars and Jupiter is from the NASA Planetary Fact Sheet (1.62, 3.71 and 24.79 m/s²).

## Going further

- Build a track whose bottom is part of a circle of known radius and compare N at the bottom with m(g + v²/R).
- Use friction and the thermal readout to find μ from the distance slid on a straight ramp, then compare with the stopping distance on the ground.
