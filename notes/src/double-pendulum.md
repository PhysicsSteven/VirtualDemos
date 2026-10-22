---
title: Pendulums and Chaos
level: Intro mechanics (pendulum, simple harmonic motion); upper level classical mechanics (normal modes, chaos)
time: 15 to 30 minutes
---
## What students should come away with

- T = 2π√(L/g) is a small angle result. The exact period grows with amplitude, T = 4√(L/g) K(sin(θ₀/2)), and is infinite for a release at 180°.
- For small swings a double pendulum is linear, and every motion is a sum of two normal modes, each with one frequency and a fixed shape: the rods swing together (mode 1) or opposite (mode 2). For equal masses and lengths ω² = (g/L)(2 ∓ √2) and θ₂/θ₁ = ±√2.
- At large energy the same equations are chaotic: deterministic, yet two starts 10⁻⁶ rad apart separate exponentially, d ∝ e^(λt). Improving the starting accuracy a hundredfold buys only ln(100)/λ more seconds of prediction.
- A Poincaré section separates regular motion (closed curves, islands) from chaotic motion (a scattered sea) at one energy.

## Before class

For an intro class, steps 1, 2, 4 and 5 are enough; the mode numbers and the Poincaré section suit an upper level class that has seen Lagrangians. The **Pendulum** switch picks **Simple** or **Double**. Drag a bob to set its angle and let go; with **Release with drag speed** on, a moving pointer gives it a starting speed, so hold still before releasing. The lower right plot switches between **Angle path**, **Separation** and **Poincaré**. To start from a point on the phase portrait or the Poincaré section without a mouse, focus the plot, move the cross with the arrow keys and press **Enter**. **Show data table** under **Plot data** lists the plotted points, and **Reduce motion** in **Time and display** pauses the pendulum. Turn on **Projector** for the room.

## Running it in class

1. **Big swings take longer.** Ask Q1 first. A 1.00 m pendulum from 150° falls behind the dashed small angle model every swing: T = 3.536 s against T₀ = 2.006 s, a ratio of 1.762. Drag the marker on the top plot toward 180°.
2. **Normal mode 1.** Both rods swing together at one frequency; the angle path is a straight line along a gold mode line. The rail shows ω₁ = 2.397 rad/s (period 2.622 s) and shape θ₂/θ₁ = 1.414. The **Mode amplitude, larger angle** slider (6°) sets the larger starting angle, here the lower rod's, so θ₁ starts at 4.2° and θ₂ at 6.0°.
3. **Normal mode 2.** The rods swing opposite ways, period 1.086 s. Ask Q3. Then raise **Mode amplitude, larger angle** to its 60° maximum and press **Mode 2**: the angle path spreads into a band around the gold line, because the large angle motion is no longer linear.
4. **Double pendulum chaos.** Both rods start at 130°, with E = 48.3 J against 58.8 J needed to stand both rods straight up. The lower bob flips over the top at irregular times. Point to the **λ estimate** in **Copies and separation**; after half a minute it settles near 1.5 s⁻¹.
5. **Butterfly effect: 100 copies.** Ask the class how long 100 pendulums started 10⁻⁶ rad apart will stay together. They move as one for several seconds, then fan out. On the log plot the separation rises along a straight line and levels off near d ≈ 1 to 5. Do Q5.
6. **Poincaré section** (upper level). At E = 15 J each dot marks the lower rod passing straight down moving right. Click inside the curve to start orbits, then raise **Section energy E**: the islands shrink (Q7).

## Questions

**Q1.** Predict: a pendulum released from 150° and one from 10°. Which has the longer period, or are they the same? Textbooks say the period does not depend on amplitude: when is that true?

**Q2.** For L = 1.00 m and g = 9.81 m/s², find T₀. Use T ≈ T₀(1 + θ₀²/16), θ₀ in radians, to estimate T/T₀ at 30° and at 150°, and compare with the **Ratio T/T₀** readout (1.0174 and 1.7622). Where does this correction stop being useful?

**Q3.** For equal masses and equal lengths L = 1.00 m, the normal mode frequencies are ω² = (g/L)(2 ∓ √2). Find both periods. Then explain why: why should the mode in which the rods swing opposite ways have the higher frequency?

**Q4.** Predict: in **Normal mode 1**, pause, drag the lower bob to hang straight down, hold still and let go, so only the upper rod starts displaced. Will the motion ever repeat exactly? What shape will the angle path fill? Explain using ω₂/ω₁, then check.

**Q5.** In **Butterfly effect: 100 copies** the first two copies start 10⁻⁶ rad apart, and the Lyapunov exponent is about λ = 1.5 s⁻¹. Estimate how long until their separation reaches about 1, so that the two are completely different. If you could measure the starting angle 100 times more precisely, how much longer could you predict the motion? Check with the **Start difference δ, upper rod** slider (it runs from 10⁻⁶ to 10⁻³ rad).

**Q6.** A student says the copies spread because of the computer's rounding errors, not physics. Use the demo to argue against this. (Look at **Energy drift**, and at 50 copies in **Normal mode 1**.)

**Q7.** In a Poincaré section, what does a set of dots lying on a closed curve tell you about that orbit, and what does a scattered cloud of dots tell you? Predict what the section looks like at very low energy, where the small angle equations apply.

## Common misconceptions

- **"A pendulum's period never depends on its amplitude."** That holds only for small swings. At 30° the period is 1.7% longer than 2π√(L/g); at 150° it is 76% longer.
- **"Chaos means random."** The equations have no randomness: the same start always gives the same motion. Nearby starts separate exponentially, so any tiny uncertainty grows.
- **"Better measurements fix chaos."** The error grows like e^(λt), so each factor of 10 in starting accuracy adds only ln(10)/λ, about 1.5 s here.
- **"A chaotic system is chaotic everywhere."** At low energy the double pendulum is regular, and even at high energy the Poincaré section shows regular islands in the chaotic sea.

## Physics behind the demo

- Point masses on rigid massless rods, frictionless pivots, no air drag, uniform g; angles from straight down. The exact nonlinear equations (from the Lagrangian) are integrated with an adaptive Dormand–Prince 5(4) method at a tolerance of 10⁻¹¹ per step; **Energy drift** shows how well energy stays fixed.
- Simple pendulum: θ″ = −(g/L) sin θ, exact period T = 4√(L/g) K(sin(θ₀/2)), with K from the arithmetic–geometric mean.
- Normal modes come from the linearized equations, det(K − ω²M) = 0, drawn as gold reference lines. The **Mode amplitude, larger angle** slider sets the larger starting angle, the lower rod's for equal masses and lengths.
- Separation: d² = Δθ₁² + Δθ₂² + (Δω₁² + Δω₂²)L₁/g; copy k starts with the upper rod turned k·δ more than copy 0. The λ estimate follows a nearby orbit pulled back to 10⁻⁸ every 0.1 s; it is a finite time estimate. The Poincaré section records θ₁ and ω₁ each time θ₂ crosses zero moving right.

## Going further

- Upper level homework: derive the Lagrangian, linearize it, and show that for equal masses and lengths ω² = (g/L)(2 ∓ √2) with θ₂/θ₁ = ±√2.
