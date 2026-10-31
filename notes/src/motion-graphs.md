---
title: Motion Graphs
level: PHYS 201
time: 20 to 40 minutes
---
## What students should come away with

- Position, velocity and acceleration graphs describe one motion. Each is the slope of the one above it; the area under each (from 0 to t) is the change in the one above.
- A straight x(t) means constant velocity; a curved x(t) means acceleration. The sign of a says which way v is changing, not which way the object moves.
- At a turning point v = 0 but a need not be zero (the ball at the top of its flight).
- Displacement and distance differ once the object turns around.

## Before class

Students should know the definitions of average and instantaneous velocity and acceleration. The cart moves through up to three stages of constant acceleration. Drag on any graph, or use ← and →, to move the time marker; the tangent lines show slopes and the shading shows areas from 0 to t. Blind leaves only the position graph, as a motion detector would give.

## Running it in class

1. **Constant velocity.** v = 2 m/s from x₀ = −6 m for 6 s: x is a straight line ending at 6 m, a is zero. Move the marker and read the area under v: it equals x − x₀.
2. **Speeding up.** a = 1 m/s² from rest at −8 m: x curves upward and reaches 4.5 m at 5 s, where v = 5 m/s. The tangent on x gets steeper.
3. **Slowing down and turning around.** v₀ = 4 m/s, a = −1 m/s². Ask Q2 first. The cart stops at t = 4 s at x = 2 m and returns to −6 m at 8 s: displacement 0, distance 16 m.
4. **Stop and go.** Three stages; v is a trapezoid whose area, 20 m, is the trip from −8 m to 12 m.
5. **Ball thrown up.** 12 m/s upward with a = −9.81 m/s² throughout: top at 1.22 s, 7.34 m high, back down at 2.45 s.
6. **Walk the graph.** A volunteer drives the cart (drag it, or hold ← → with Shift for faster) to follow a dashed target, as with a real motion detector. Then switch to Match a velocity graph instead.
7. **Two cars.** Car A starts from rest at −8 m with a = 1 m/s²; car B passes −6 m at a steady 2 m/s. The x–t lines cross at t = 2 + √8 = 4.83 s, x = 3.66 m, where A overtakes B. Where the v–t lines cross (t = 2 s) the cars have equal velocity and the gap is largest, 4 m: not where they meet.
8. **Ball on ramps.** A ball rolls down a 20° piece (a = 2.40 m/s²), coasts along the flat at 3.79 m/s, and climbs a 30° piece (a = −3.50 m/s²) until it turns back at 3.46 s; with no losses it returns to its start with no speed and repeats every 6.91 s. Each piece is a straight piece of v–t. Then press Match a graph and have the class build the hidden track from the target's v–t slopes.
9. **Draw a graph.** Draw any velocity graph with the mouse or a finger on the tinted v–t pane. The a–t graph shows its slope and the x–t graph x₀ plus the area under it; press Play and the cart drives the motion. Try the **Sine**, **Steps** and **Triangle** shapes, then switch to drawing a, where both v and x come from areas. Ask the class to sketch x before you draw v.
10. **Stopping distance.** Two cars on a road, side by side when both drivers see a hazard at t = 0: car A at 15 m/s (34 mph), car B at 30 m/s, reaction time 0.67 s, braking at 6.5 m/s². Ask how much farther car B needs to stop. Car A: 10.05 m while reacting plus 17.31 m braking, 27.36 m, stopped at 2.98 s. Car B: 20.10 m plus 69.23 m, 89.33 m, stopped at 5.29 s. The reaction part doubles, the braking part goes up four times (v²/2b). On the v–t graph each stopping distance is the area under the line: a rectangle and a triangle. Lower the deceleration for a wet or icy road, or raise the reaction time for a distracted driver.

## Questions

**Q1.** Sketch v(t) and a(t) for the Speeding up setup before showing them. Then use the graphs to find the cart's position at t = 3 s two ways: from the x graph and from x₀ plus the area under v.

**Q2.** In Slowing down and turning around, the acceleration is −1 m/s² the whole time. Is the cart slowing down the whole time? When does it turn around, where, and what is its acceleration at that moment?

**Q3.** For Stop and go, find the total displacement from the area under the v graph and check it on the x graph. What are the slopes of the three pieces of v?

**Q4.** In Ball thrown up, a student says "at the top the ball's acceleration is zero because it stops". Use the a graph and the tangent to the v graph to answer. How long does the ball take to reach the top, and how high does it go?

**Q5 (lab).** With Blind on in Speeding up, capture x at five times between 1 s and 5 s and fit the parabola. What are v₀ and a from c₁ and c₂? What would the fit give if you captured rows from two different stages of Stop and go, and why?

## Common misconceptions

- **"Negative acceleration means slowing down."** It means v is decreasing; a cart moving in the −x direction with a < 0 speeds up.
- **"Zero velocity means zero acceleration."** At the turning point v = 0 but v is still changing.
- **"The graph is a picture of the path."** An x(t) graph that goes up and down describes a cart moving back and forth on a straight track.
- **"Area under v is distance."** It is displacement; parts below the axis count negative.

## Physics behind the demo

- Each stage has constant acceleration and is computed exactly: x = x₀ + v₀t + ½at², v = v₀ + at. Stages join continuously in x and v; a jumps between stages.
- Walk the graph records the cart's position every 0.02 s. Velocity is a centered difference over ±0.2 s and acceleration a second difference over ±0.3 s, like the smoothing in a motion detector, so quick jerks appear as spikes.
- The parabola fit is least squares on the captured (t, x) rows with standard errors from the residuals. Rows are rounded as displayed: t to 0.01 s, x to 0.01 m.
- Ball thrown up ignores air resistance (compare Projectile Range for drag).
- Two cars: car B keeps one constant acceleration. The meeting times solve x_A(t) = x_B(t) exactly, a quadratic within each stretch where both accelerations are constant.
- Stopping distance: each car keeps its speed v for the reaction time t_r, then brakes with a constant deceleration b to a stop, so d = v t_r + v²/2b, computed as three stages of constant acceleration (coast, brake, stand). The opening t_r = 0.67 s and b = 6.5 m/s² are close to the UK Highway Code's typical stopping distances (rule 126: thinking distance 0.3 m per mph; braking 6 m at 20 mph to 75 m at 70 mph, 6.5 to 6.7 m/s²). Real braking builds up over a fraction of a second, and the road is taken as level.
- Ball on ramps: a solid ball rolling without slipping (I = 2mr²/5), so along a piece of slope θ, a = −(5/7) g sin θ, with g = 9.81 m/s². No rolling resistance, and the ball keeps its speed through each bend (a real ball loses a little there). x is the distance along the track; each piece is 3.0 m long, and a stop at each end ends the run.
