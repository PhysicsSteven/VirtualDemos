---
title: Related Rates and Optimization
level: Calculus I (OpenStax Calculus Vol 1 4.1 and 4.7) for physics students; Physics I (University Physics Vol 1 4.3) for the longest throw and Physics III (Vol 3 1.3) for Snell's law
time: 15 to 30 minutes
---
## What students should come away with

- In a related rates problem one quantity drives everything. Write the equation that ties the quantities together, differentiate it with respect to time, and the chain rule links the rates: dy/dt = (dy/dx)(dx/dt). A steady dx/dt can give a dy/dt that is far from steady.
- The chain rule is not just algebra: the rate it gives is the rate you would measure from the motion. The demo shows both side by side and they agree to every digit.
- In an optimization problem, graph the quantity against the choice. The best choice is where the graph is flat, f′ = 0, and the sign of f′ on either side tells you whether it is a largest or a smallest value.
- Physics is full of optimization: light takes the path of least time (Fermat's principle), which is Snell's law, and a projectile's longest range is at 45° only when it lands at the height it left.

## Before class

Nothing to install. Projector mode enlarges the scene and labels. The opening setup is the ladder, paused at its start: Play starts the foot moving out at 0.5 m/s in real time. Blind (Lab fold) hides the rates the chain rule gives, the best choice and its marks, so students can work them out first.

## Running it in class

1. **The ladder.** Press Play and watch the top: slow at first, then faster and faster. Pause with the foot at 3 m (drag the red handle or use the arrow keys) and have students work out dy/dt before turning Blind off (Q1).
2. **The cone.** Ask whether the level rises at a steady rate when water pours in at a steady rate. Play and watch the dh/dt curve fall as 1/h² (Q2).
3. **The shadow.** Ask whether the shadow grows faster when the walker is far from the lamp. It does not: ds/dt is constant (Q3).
4. **The box.** Press Play to sweep the cut x and watch the volume graph rise and fall. Where the dashed derivative crosses zero is the best box; Go to the best jumps there (Q4).
5. **The lifeguard.** Ask where she should enter the water. Sweep x and read sin θ₁/v₁ and sin θ₂/v₂: they are equal exactly at the fastest path. Switch to Light into water: the same problem with v = c/n is Snell's law (Q5).
6. **The longest throw.** Level ground gives 45°. Raise the launch height and watch the best angle drop (Q6).

## Questions

**Q1.** The foot of a 5 m ladder moves out at 0.5 m/s. How fast is the top moving down when the foot is 3 m from the wall? What happens to that speed as the top nears the floor, and why can a real ladder not do this?

**Q2.** Water flows at 0.5 L/s into a cone 30 cm deep with a rim radius of 15 cm, point down. How fast is the level rising when the water is 10 cm deep? Why does the level rise more slowly as the cone fills, although the flow is steady?

**Q3.** A 1.8 m person walks away from a 6 m lamp post at 1.4 m/s. How fast does the shadow grow, and how fast does its tip move? Does it matter how far from the post the person is?

**Q4.** From a 30 cm × 20 cm sheet, what size of square cut from each corner gives the biggest open box, and what is its volume? Show that for a square sheet the best cut is a sixth of the side.

**Q5.** Show that the time T(x) for the lifeguard has dT/dx = sin θ₁/v₁ − sin θ₂/v₂. What does dT/dx = 0 say, and how does it become Snell's law n₁ sin θ₁ = n₂ sin θ₂ for light?

**Q6.** Why is the longest throw on level ground at 45°? A shot put leaves the hand 2 m up at 14 m/s: is its best angle more or less than 45°, and why?

## Common misconceptions

- **"A steady driving rate gives steady rates everywhere."** Only when the relation is linear (the shadow). The ladder top and the cone level change at rates that vary a lot, even though the foot and the flow are steady.
- **"Set the quantity, not its derivative, to zero."** The best box is where dV/dx = 0, not where V = 0 (those are the worst boxes, at x = 0 and at x = b/2).
- **"The shortest path is the fastest."** Only when the speed is the same everywhere. The lifeguard runs further on sand, and light bends at a surface, because a longer path in the faster medium saves time.
- **"45° is always the best launch angle."** Only on level ground with no air drag. From a height (or with drag) the best angle is lower.

## How the demo works

- Each related rates scene has a driver changing at a steady rate (the ladder's foot x, the water volume V, the walker's distance x) and an exact equation for the others: x² + y² = L², V = πR²h³/(3H²), s = px/(H − p). The rate dy/dt is (dy/dx)(dx/dt), with dy/dx from the equation. The rate from the motion is measured as the change in y over ±0.1 ms of the run divided by 0.2 ms.
- Each optimization scene has an exact formula for the quantity and its derivative. The best choice comes from the closed form for the box, (a + b − √(a² − ab + b²))/6, the fence, P/4, the can, ∛(V/2π), and the throw, tan θ = v₀/√(v₀² + 2gh); for the lifeguard and the light ray it is found by bisection on the derivative, which increases along the shore.
- The throw has no air drag and g = 9.81 m/s². The light setup uses n = 1.000293 for air and 1.333 for water (OpenStax University Physics Vol 3, Table 1.1).
