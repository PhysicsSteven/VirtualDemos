---
title: Hanging Chains and Arches
level: Intro mechanics (statics, Newton's laws); calculus based
time: 15 to 25 minutes
---
## What students should come away with

- Any piece of a hanging chain is in equilibrium under three forces: the pulls at its two ends, along the chain, and its weight. Nothing pushes sideways, so the horizontal part of the tension, H, is the same everywhere.
- The vertical part of the tension at a point holds up the chain between there and the lowest point: V = λgs, with s the arc length from the bottom. So T is smallest at the bottom (T = H) and largest at the supports.
- That fixes the shape: a catenary, y = a cosh(x/a) with a = H/(λg). A parabola belongs to a load spread evenly along the horizontal, like a bridge deck; for a shallow chain the two nearly agree.
- A heavy chain cannot be pulled straight. For a shallow sag d over a span Δx, H ≈ λgΔx²/(8d), which grows without limit as d → 0.
- Turn the chain upside down and every pull becomes a push of the same size: an arch in this shape stands in pure compression, but its feet must be held against the sideways thrust H.

## Before class

Students need free body diagrams and force components. Besides the chain, the page shows the **Free body diagram** of a chosen piece and a graph of **Largest tension against sag**. Drag the supports A and B, the grip at the middle (this changes the length), and the two small markers that choose the piece. The rail has **Length S**, **Mass per length λ**, a **Hanging chain** / **Arch (flipped)** switch and checkboxes such as **Color by tension** and **Directrix**. Turn on **Projector** for the room.

## Running it in class

1. **Hanging chain.** Ask Q1 first. **Color by tension** runs from low at the bottom to high at the supports. The rail: H = 55.0 N everywhere, T = 55.0 N at the lowest point and 121 N at A and B; the supports hold up 108 N + 108 N, the whole weight λgS = 216 N.
2. **Tension along the chain.** The first marker sits at the lowest point. Slide the second: both ends have the same H, the vertical parts differ by the piece's weight, and the forces close into a triangle. The tension anywhere is λg times the height above the dashed directrix, a = 2.34 m below the lowest point.
3. **Uneven supports.** Ask Q4 first. The lowest point shifts toward the lower support B; A carries 151 N of the weight and B only 84.5 N. Drag B up and in until the vertex leaves the span.
4. **Pull it tight.** Ask: with a strong enough rope, could you pull it perfectly straight? Here the sag is 1.25 m and H = 129 N, already more than half the chain's weight of 167 N. Drag the marker on the graph to the left: both curves shoot up. Then do Q5.
5. **Chain vs parabola.** The gold parabola shares the supports and the lowest point. The largest gap is 6.65 cm on a sag of 2.92 m, about 2%. Pull the middle down and the gap grows. Turn on **Suspension bridge** and ask Q7.
6. **Arch.** Each block pushes its neighbors along the curve; the **Thrust on each support** is 23.3 N sideways. Compare **Gateway Arch** (a weighted catenary) and **Semicircle**, then ask Q6.

## Questions

**Q1.** Predict: a chain hangs between two hooks at the same height. Where is the tension largest, and where smallest? Is it zero anywhere? Then check with **Color by tension**.

**Q2.** In **Hanging chain** the chain is 11.0 m long with λ = 2.00 kg/m, the supports are level, and the demo says H = 55.0 N. Using g = 9.81 m/s², find the vertical force each support supplies, the tension at each support, and the angle below the horizontal at which the chain leaves each support.

**Q3.** Draw a free body diagram of the chain from the lowest point to any point P. Use it to explain why the horizontal part of the tension at P equals the tension at the bottom, and why the vertical part equals the weight of that piece. Check with **End 1 (H, V)** and **End 2 (H, V)** in **Tension along the chain**.

**Q4.** Predict: in **Uneven supports**, support A is 3.0 m higher than B. Which support holds up more of the chain's weight? Explain using the position of the lowest point, then check the **Supports hold up (vertical)** readout.

**Q5.** For a shallow chain, take torques on the half chain from the lowest point to one support, with its weight λg(Δx/2) acting a quarter span from the support. Show that H ≈ λgΔx²/(8d). Evaluate it for **Pull it tight** (Δx = 8.00 m, λ = 2.00 kg/m, d = 1.25 m), compare with the demo's 129 N, and say what halving the sag does.

**Q6.** In **Arch**, the feet must be held against a sideways thrust. Where does it come from? Predict: if you make the arch flatter over the same span (smaller **Length S**), does the thrust go up or down, even though the arch weighs less? Check.

**Q7.** A suspension bridge cable is very nearly a parabola, but a chain hanging under its own weight is a catenary. Using V = (load between the lowest point and P) and slope = V/H, explain the difference. Which load gives y = wx²/(2H)?

## Common misconceptions

- **"The tension is the same all along the chain, like an ideal string."** Only for a massless string. A heavy chain holds up its own weight, so its tension grows from the bottom to the supports; only H is constant.
- **"A strong enough rope can be pulled straight."** The vertical parts at the supports must add to the weight, and for a nearly straight chain they are a tiny fraction of T, so H ≈ λgΔx²/(8d) blows up as d → 0. Power lines sag on purpose.
- **"An arch just pushes down on its supports."** An arch also pushes outward, with the same horizontal thrust H all the way along. Buttresses, abutments, or a tie rod must hold that back.

## Physics behind the demo

- A perfectly flexible chain that does not stretch, with uniform λ, at rest, treated as continuous (the links are drawn for looks). The shape is the exact catenary y = a cosh((x − x₀)/a) + c through both supports with arc length S, from √(S² − Δy²) = 2a sinh(Δx/2a).
- At arc length s from the vertex: H = λga, V = λgs, T = λg√(a² + s²) = λg(y − c), λg times the height above the directrix y = c.
- The parabola shares the supports and lowest height; for level supports the largest gap is about d³/(12L²), L the half span.
- Arch: rigid blocks, uniform weight per length, no friction limit. The **Semicircle** view is qualitative: its dashed curve is a uniform chain of the same span and rise, not the exact thrust line of those blocks. The **Suspension bridge** cable's own weight is ignored.

## Going further

- Homework: from dy/dx = s/a, show that y = a cosh(x/a).
- History: Hooke gave the rule as a 1675 anagram: "as hangs the flexible line, so but inverted will stand the rigid arch."
