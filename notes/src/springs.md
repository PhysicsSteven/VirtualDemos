---
title: Springs and Oscillations
level: Intro mechanics (calculus based)
time: 20 to 35 minutes
---
## What students should come away with

- A restoring force proportional to displacement, F = −kx, gives x = A cos(ω₀t + φ) with ω₀ = √(k/m). The period depends on m and k only, never on the amplitude.
- Hanging the spring shifts the equilibrium down by mg/k but leaves ω₀ unchanged. Gravity moves the center of the motion, not its period.
- A damping force −bv sorts the motion by ζ = b/(2√(km)): underdamped swings shrink inside e^(−bt/2m); critical damping (ζ = 1) returns fastest without overshoot; overdamping creeps back.
- A driven oscillator settles at the drive frequency. Its steady amplitude peaks near ω₀, and the height and sharpness of that peak are set by Q = √(km)/b. The phase lag goes from 0 through 90° at ω₀ to nearly 180°.
- Two coupled blocks have two normal modes. Any motion is a sum of them, and close mode frequencies make beats: energy moves from one block to the other and back.

## Before class

Students should know Newton's second law and the derivatives of sine and cosine. Drag a block to pull it from equilibrium and let go; moving the pointer as you let go gives it a starting speed (turn off **Release with drag speed** to always release from rest). **Keep trace** freezes the current x(t) as a gray curve for comparison. The **Playback rate** slider slows everything down for the room.

For the lab, students time N oscillations with **Stopwatch** on the stage (press to start, press again to stop; W on the drawing does the same), enter their count in **Oscillations counted, N**, and press **Capture reading**. The ruler's gold ticks hold the largest |x| since **Reset peak**. Rows collect in the **Readings** table; **T² against m** fits a line with its residuals (slope 4π²/k), **A against ω** plots driven captures, **Show data table** lists the plotted points and **Export to worksheet** sends everything to the student worksheet's Data table (the worksheet can download the full CSV). **Blind: hide predictions and answers** (Lab section) hides every predicted value, the reference circle, the envelope, the resonance curves and the k from the fit. **Reduce motion** pauses the run and stops the plots gliding.

## Running it in class

1. **Simple harmonic motion.** Ask Q1. Press **Keep trace**, then drag the block from 15 cm to 25 cm and let go. The new peaks are taller but line up in time; the measured period stays 0.9935 s. Point to the reference circle: x is the shadow of a point going around at ω₀.
2. **Hanging spring.** Ask the class to predict whether the period changes when the spring hangs. The block sits 24.5 cm lower, and the period readout and measured period are unchanged (Q2, Q3). Watch the three energy bars trade.
3. **Three kinds of damping.** The gray traces for ζ = 0.2, 1 and 2.5 start from the same 20 cm. Before playing, ask which returns to equilibrium first. Then measure the decay of the underdamped peaks (Q4).
4. **Resonance.** The block starts at rest; watch the transient beat with the drive and die away. Drag the ω marker on the resonance curve through ω₀ and watch the phase lag pass 90° (Q5). Press **Sweep ω** to trace the whole curve.
5. **Damping on the resonance.** Still driven, use the **ζ = 0.2** button or the damping slider and ask Q6 before the curve redraws.
6. **Lab: k from T² against m.** In Simple harmonic motion, turn on Blind, time 10 oscillations at four or five masses and capture each. The fitted slope is 4π²/k; the intercept should be zero within the scatter because these springs have no mass (Q8).
7. **Normal modes, then Beats.** Show mode 1, press **Mode 2**, then switch to **Beats** with a weak coupling spring and watch block 2 take all the motion and give it back (Q7).

## Questions

**Q1.** Predict: you pull the block twice as far before releasing it. What happens to the period, the maximum speed and the maximum acceleration? Check with Keep trace and the readouts.

**Q2.** In Hanging spring, m = 0.50 kg and k = 20 N/m. Find the static stretch, the period, and the maximum speed and acceleration when the block is pulled 10 cm below its equilibrium and released. Use g = 9.81 m/s². Compare the period with a 1.0 kg block on a 40 N/m spring.

**Q3.** Explain why gravity does not change the period of a hanging spring. Write Newton's second law with x measured from the unstretched length, then change to y measured from the new equilibrium.

**Q4.** In Three kinds of damping (m = 1.00 kg, k = 40 N/m, ζ = 0.20), find b, the damped period, and the factor by which the amplitude shrinks in one damped period. By what factor does the energy shrink in that time? Check the peaks of x(t) against the envelope.

**Q5.** In Resonance (m = 1.00 kg, k = 40 N/m, b = 0.632 kg/s, F₀ = 0.50 N), find the steady amplitude at ω = 5.00 rad/s and at ω = ω₀. Show that at ω₀ the amplitude is Q times the static stretch F₀/k. What is the phase lag at ω₀, and what does it say about when the drive pushes?

**Q6.** Predict: if b is doubled, what happens to the steady amplitude at ω₀, and to the amplitude at ω = 5.00 rad/s, well off resonance? Explain why damping matters so much more at resonance than away from it.

**Q7.** In Beats, m = 0.50 kg, k = 20 N/m and k_c = 2.0 N/m. Find the two mode frequencies, the beat period, and the time after release at which block 1 is momentarily still and block 2 has all the motion. Check with the clock and the x₁, x₂ plots.

**Q8.** Students timed 10 oscillations at m = 0.50, 1.00, 1.50, 2.00 and 3.00 kg on one spring. Explain why T² against m should be a straight line, find k from its slope, and say what a positive intercept would mean for a real spring of mass mₛ (T² = 4π²(m + mₛ/3)/k). Why is timing 10 oscillations better than timing one?

## Common misconceptions

- **"Pulling farther makes it take longer to come back."** It has farther to go, but the larger force makes it go faster in proportion. For F = −kx the period is the same for every amplitude.
- **"Gravity changes the period of a hanging spring."** Gravity only shifts the equilibrium. A pendulum's period depends on g; a mass on a spring does not.
- **"More damping always means it settles faster."** Past critical damping it settles more slowly. ζ = 1 is fastest without overshooting.
- **"Resonance means the amplitude grows forever."** Only with no damping. With damping the amplitude settles where the drive's work per cycle equals the energy lost to the oil, at a height set by Q.
- **"At resonance the block moves in step with the drive."** At ω₀ the displacement lags the drive by 90°: the force is in step with the velocity, which is why the drive does the most work there.

## Physics behind the demo

- One block obeys m x″ + b x′ + k x = F₀ cos ωt. The demo uses the exact analytic solution in every regime (under, critically and overdamped), not a step by step integration. Changing a setting mid run starts a new solution from the current position and velocity.
- Steady state: A = (F₀/m)/√((ω₀² − ω²)² + (bω/m)²), tan δ = (bω/m)/(ω₀² − ω²), with the peak at ω_r = √(ω₀² − b²/(2m²)). The drive is a wall moving as X_w cos ωt, equivalent to a force F₀ = kX_w on the block. During a sweep, ω rises slowly; for small b the block needs a time of order 2m/b to catch up, so the swept dots fall a little below the steady curve near the peak.
- Two equal blocks between walls (k, k_c, k) move as normal coordinates q₁ = (x₁ + x₂)/2 at ω₁ = √(k/m) and q₂ = (x₁ − x₂)/2 at ω₂ = √((k + 2k_c)/m).
- Energy bars: hanging, ½k(x + mg/k)² plus −mgx for gravity; driven, ½mv² + ½kx², with the drive's work ∫Fv dt and the heat ∫bv² dt.
- Approximations: ideal massless springs that obey Hooke's law at any stretch (the drawing never shows a spring pressed solid), a frictionless track, damping exactly proportional to v, g = 9.80665 m/s².

## Going further

- Homework: show that for light damping the full width of the resonance peak at 1/√2 of its height is about b/m, so Q ≈ ω₀/(width). Measure the width on the resonance curve for ζ = 0.05.
