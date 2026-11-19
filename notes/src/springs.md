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

For the lab, students time N oscillations with **Stopwatch** on the stage (press to start, press again to stop; W on the drawing does the same), enter their count in **Oscillations counted, N**, and press **Record reading**. The ruler's gold ticks hold the largest |x| since **Reset peak**. Rows collect in the **Readings** table; **T² against m** fits a line with its residuals (slope 4π²/k), **A against ω** plots driven captures, **Show data table** lists the plotted points and **Export to worksheet** sends everything to the student worksheet's Data table (the worksheet can download the full CSV). **Blind: hide predictions and answers** (Lab section) hides every predicted value, the reference circle, the envelope, the resonance curves and the k from the fit. **Reduce motion** pauses the run and stops the plots gliding.

## Running it in class

1. **Simple harmonic motion.** Ask Q1. Press **Keep trace**, then drag the block from 15 cm to 25 cm and let go. The new peaks are taller but line up in time; the measured period stays 0.9935 s. Point to the reference circle: x is the shadow of a point going around at ω₀.
2. **Hanging spring.** Ask the class to predict whether the period changes when the spring hangs. The block sits 24.5 cm lower, and the period readout and measured period are unchanged (Q2, Q3). Watch the three energy bars trade.
3. **Three kinds of damping.** The gray traces for ζ = 0.2, 1 and 2.5 start from the same 20 cm. Before playing, ask which returns to equilibrium first. Then measure the decay of the underdamped peaks (Q4).
4. **Resonance.** The block starts at rest; watch the transient beat with the drive and die away. Drag the ω marker on the resonance curve through ω₀ and watch the phase lag pass 90° (Q5). Press **Sweep ω** to trace the whole curve.
5. **Damping on the resonance.** Still driven, use the **ζ = 0.2** button or the damping slider and ask Q6 before the curve redraws.
6. **Lab: k from T² against m.** In Simple harmonic motion, turn on Blind, time 10 oscillations at four or five masses and capture each. The fitted slope is 4π²/k; the intercept should be zero within the scatter because these springs have no mass (Q8).
7. **Normal modes, then Beats.** Show mode 1, press **Mode 2**, then switch to **Beats** with a weak coupling spring and watch block 2 take all the motion and give it back (Q7).
8. **Chain of ten** (Sandbox, Normal modes pane). Click mode 1 and then mode 10: every block moves at one frequency. Pull one block and let go and the pane shows the motion shared among all ten modes. The frequencies crowd together near the top, fₙ = (1/π)√(k/m) sin(nπ/22), instead of rising as n f₁.
9. **Grid of pucks** (Sandbox, Normal modes pane). A 3 × 3 grid of pucks joined by springs, seen from above. Pull one puck and let go: its x and y motion is a jumble. Click a mode square and every puck moves together at one frequency, from 2.436 Hz for mode (1, 1) to 5.882 Hz for (3, 3). Modes (1, 3), (2, 2) and (3, 1) all have 4.502 Hz: different shapes at one frequency (degenerate modes), as on a square drumhead.
10. **Drop a block on it.** The 1 kg block swings 15 cm on 40 N/m (period 0.9935 s, 0.450 J). Ask what a second 1 kg block, let fall onto it, will do to the amplitude and the period. Press **Drop it now** (or D) as the block passes equilibrium at 0.949 m/s: momentum along the track is kept, so the pair moves on at 0.474 m/s, the amplitude falls to 10.61 cm (15/√2) and the period grows to 1.405 s (√2 longer); 0.225 J, half the energy, goes into the landing. Press **Reset** and drop it at a turning point instead: nothing is moving, nothing is lost, and the amplitude stays 15 cm while the period still grows to 1.405 s.
11. **Falling slinky** (Sandbox). Ten 100 g blocks hang one below another on 50 N/m springs, a slinky in pieces. Ask Q9 before you press **Play** (or **Let go of the top**). The top block starts down at 10g, the coils close one after another, and the bottom block hangs in the air for a quarter of a second (it has moved less than a micrometer at 0.2 s) until the collapse reaches it at 0.257 s. Point to the readouts: the center of mass has fallen exactly ½gt² the whole time. The graph shows each block's drop against time: flat lines that bend down one after another.
12. **Roots of mr² + br + k = 0.** The lower pane shows the two roots of the characteristic equation in the complex plane: at b = 1.90 kg/s (ζ = 0.15) a complex pair −0.949 ± 6.253i. Ask what happens to the roots as the oil gets thicker, then drag a root to the left (or use the **Damping constant b** slider): the pair slides around the dashed circle |r| = ω₀ = 6.325 rad/s, meets on the real axis at b = 2√(km) = 12.65 kg/s (one double root, critical damping), and splits along the real axis past it. Point out that the slower root then moves back toward 0, which is why overdamping settles more slowly (Q10). The words beside the plane give x_h with the C₁ and C₂ that match the release.
13. **Transient plus steady state.** The block starts at rest and the wall starts to move at ω = 3.00 rad/s. The x plot splits x = x_h + x_p: the thin line is the steady swing x_p = 3.20 cm cos(3.00t − 7.0°), the dashed line the transient x_h, which starts at −x_p so the two cancel at t = 0. The drive's ±iω sits on the imaginary axis next to the roots. Raise b and the roots move left and the transient dies sooner (Q11).

## Questions

**Q1.** Predict: you pull the block twice as far before releasing it. What happens to the period, the maximum speed and the maximum acceleration? Check with Keep trace and the readouts.

**Q2.** In Hanging spring, m = 0.50 kg and k = 20 N/m. Find the static stretch, the period, and the maximum speed and acceleration when the block is pulled 10 cm below its equilibrium and released. Use g = 9.81 m/s². Compare the period with a 1.0 kg block on a 40 N/m spring.

**Q3.** Explain why gravity does not change the period of a hanging spring. Write Newton's second law with x measured from the unstretched length, then change to y measured from the new equilibrium.

**Q4.** In Three kinds of damping (m = 1.00 kg, k = 40 N/m, ζ = 0.20), find b, the damped period, and the factor by which the amplitude shrinks in one damped period. By what factor does the energy shrink in that time? Check the peaks of x(t) against the envelope.

**Q5.** In Resonance (m = 1.00 kg, k = 40 N/m, b = 0.632 kg/s, F₀ = 0.50 N), find the steady amplitude at ω = 5.00 rad/s and at ω = ω₀. Show that at ω₀ the amplitude is Q times the static stretch F₀/k. What is the phase lag at ω₀, and what does it say about when the drive pushes?

**Q6.** Predict: if b is doubled, what happens to the steady amplitude at ω₀, and to the amplitude at ω = 5.00 rad/s, well off resonance? Explain why damping matters so much more at resonance than away from it.

**Q7.** In Beats, m = 0.50 kg, k = 20 N/m and k_c = 2.0 N/m. Find the two mode frequencies, the beat period, and the time after release at which block 1 is momentarily still and block 2 has all the motion. Check with the clock and the x₁, x₂ plots.

**Q8.** Students timed 10 oscillations at m = 0.50, 1.00, 1.50, 2.00 and 3.00 kg on one spring. Explain why T² against m should be a straight line, find k from its slope, and say what a positive intercept would mean for a real spring of mass mₛ (T² = 4π²(m + mₛ/3)/k). Why is timing 10 oscillations better than timing one?

**Q9.** In Falling slinky, ten 100 g blocks hang on 50 N/m springs and the top is let go. Predict what the bottom block does for the first 0.2 s, and explain it with the forces on that block. How far has the center of mass fallen at t = 0.2 s? A smooth slinky of mass M and spring constant K collapses to the bottom in √(M/3K); evaluate it with M = 1.00 kg and K the nine lower springs in series, and compare with the **Collapse reached the bottom block at** readout.

**Q10.** In Roots of mr² + br + k = 0, m = 1.00 kg and k = 40 N/m. Find the roots and write x_h(t) at b = 1.90 kg/s, at critical damping, and at b = 20.0 kg/s. Show that a complex pair always lies on the circle |r| = √(k/m). Which of the three settles fastest, and why does the slower of two real roots set how long an overdamped block takes?

**Q11.** In Transient plus steady state (m = 1.00 kg, k = 40 N/m, ζ = 0.10, F₀ = 1.00 N, ω = 3.00 rad/s), find b, the amplitude and phase lag of x_p, and how long the transient x_h takes to fall to 1% of its starting size. Check x_p against the lower pane and the dashed x_h on the x plot.

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
- Drop a block on it: the dropped block falls straight down, lands and sticks at once (a perfectly inelastic collision). The track and gravity act up and down only, so momentum along the track is kept, m v = (m + m_d) v′, and x does not change; the run then carries on with the exact solution for m + m_d. The kinetic energy lost is ½ m v² m_d/(m + m_d). On the horizontal track only; Reset lifts the dropped block off.
- Falling slinky (Sandbox, any chain hung by one spring with one block under another): letting go of the top leaves that spring slack. Every other spring then stands for a slinky's coils: it pulls with k(L − L₀) and its coils touch at L₀ = 10.0 cm, and coils that meet collide perfectly inelastically (R. C. Cross and M. S. Wheatland, Am. J. Phys. 80, 1051 (2012), after M. G. Calkin, Am. J. Phys. 61, 261 (1993)). After a collision the two blocks share one speed and the springs pull them apart again, so between collisions the motion is linear and the demo uses its exact solution; each collision is found to 1e−15 s. Only gravity acts from outside, so the center of mass falls as ½gt², and energy is kept apart from what the collisions take. For the opening chain the collapse reaches the bottom at 0.2569 s; finer chains of the same mass and stiffness approach the smooth slinky's √(M/3K) = 0.2449 s (twenty blocks: 0.2510 s).
- Roots (OpenStax Calculus Vol 3, 7.1 to 7.3): x = e^(rt) solves m x″ + b x′ + k x = 0 when m r² + b r + k = 0. b² < 4mk gives r = −b/2m ± iω_d with ω_d = √(k/m − b²/4m²), so x_h = e^(−bt/2m)(C₁ cos ω_d t + C₂ sin ω_d t); b² = 4mk a double root −b/2m and x_h = (C₁ + C₂t)e^(−bt/2m); b² > 4mk two real roots and x_h = C₁e^(r₁t) + C₂e^(r₂t). The demo takes the larger real root as (−b − √(b² − 4mk))/2m and the other as k/(m r₁), so the small one stays accurate at large b, and counts b within rounding of 2√(km) (|ζ − 1| < 10⁻⁹) as the double root. Driven, x = x_h + x_p with x_p = A cos(ωt − δ); the exact solution the demo already uses is this sum, so the two parts on the plot add to x exactly.
- Approximations: ideal massless springs that obey Hooke's law at any stretch (the drawing never shows a spring pressed solid), a frictionless track, damping exactly proportional to v, g = 9.81 m/s².
- Normal modes of a sandbox rig: the generalized eigenproblem Kφ = ω²Mφ, solved by Jacobi rotations of M^(−1/2)KM^(−1/2); each mode's amplitude and share of the energy come from projecting the motion on the modes. A chain of N blocks m with N + 1 springs k between walls has ωₙ = 2√(k/m) sin(nπ/(2(N + 1))): ten 100 g blocks on 20 N/m springs give f₁ = 0.641 Hz and f₁₀ = 4.456 Hz.

## Going further

- Homework: show that for light damping the full width of the resonance peak at 1/√2 of its height is about b/m, so Q ≈ ω₀/(width). Measure the width on the resonance curve for ζ = 0.05.
