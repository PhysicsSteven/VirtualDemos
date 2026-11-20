# Finding an Unknown Spring Constant
Student laboratory · Physics I

Textbook: OpenStax *University Physics*, Vol. 1, §§15.1 to 15.3. Access for free at https://openstax.org/details/books/university-physics-volume-1.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/springs.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Simple harmonic motion; Hanging spring; Three kinds of damping; Resonance; Normal modes; Beats. The Sandbox has its own ready made rigs: Two in series; Two in parallel; Series and parallel; One spring; Two blocks; Start empty; and, between two walls, One block; Two blocks; Side by side; Empty track.

**Using the demo.**

- With $$k_1 = k_2$$, mode 1 has both blocks moving together, so the middle spring never stretches, and mode 2 has them moving opposite, so it adds $$2k_c$$. With unequal outer springs the modes are lopsided: one block swings more than the other, shown by the amplitude ratio below. Any motion is a sum of the two modes.
- The oil pushes on each block with a force $$-bv$$. The damping ratio $$\zeta = b/(2\sqrt{km})$$ sorts the motion: $$\zeta < 1$$ underdamped, $$\zeta = 1$$ critically damped, $$\zeta > 1$$ overdamped. Drag the grip on the oil to change $$b$$.
- The wall at the end of the spring moves as $$X_w\cos\omega t$$. That pulls on the block exactly like a force $$F_0\cos\omega t$$ with $$F_0 = kX_w$$. The sweep starts at the steady state for its first $$\omega$$ and raises $$\omega$$ slowly; if $$b$$ is small the oscillator needs time $$2m/b$$ to catch up, so the measured dots fall a little below the peak and ring just after it, more so for a lightly damped spring.
- Press Stopwatch (or W on the drawing) as the block passes a mark you choose, count N full oscillations, and press it again as the block passes the same mark going the same way. The stopwatch runs on simulation time, so slow motion makes timing easier, but your own reaction time still counts. It reads to 0.01 s. The gold ticks on the ruler hold the largest \|x\| since Reset peak.
- Record reading stores what is on screen, rounded as displayed: the stopwatch time, your N, the ruler peak (or, when driven, the amplitude of the last drive cycle) and the settings $$m$$, $$k$$, $$b$$, $$F_0$$ and $$\omega$$. $$T = t/N$$. Cells can be edited; rows stay through setup changes until Clear.
- Blind hides the period, $$\omega_0$$ and $$f_0$$ predicted from $$m$$ and $$k$$, the damping ratio, Q, the damped period and decay time, the predicted steady amplitude, phase and peak, the mode frequencies and beat period, the static stretch, the reference circle, the envelope, the $$\zeta$$ comparison traces, the curves on the resonance plot and the $$k$$ derived from your fit. The stopwatch, the ruler, the clock, the measured period and amplitude, and the settings stay.
- Unknown spring picks a random $$k$$ from 5 to 60 N/m and hides it: the $$k$$ slider, the $$k$$ labels, the energy values, the wall amplitude and the $$k$$ column of the CSV. It turns Blind on, and the $$\zeta$$ buttons are off because they would give $$k$$ away. The measured period stays. Change $$m$$, time the period and find $$k$$ from the slope of $$T^2$$ against $$m$$. One block only. Turning it off shows $$k$$, so you can check your answer.
- Keep a trace, then drag the block farther out and let go: the peaks move apart in height but not in time.
- The Sandbox hangs any arrangement of springs, hooks and blocks from a ceiling, moving straight up and down. Every spring is 10.0 cm long unstretched and every block 4.0 cm tall. Hooks and bars have no mass, so they always sit where the spring forces on them balance. Parts are dragged from the tray in the picture onto the ceiling, a hook or a block; a hook dragged onto another hook joins them into one bar, so the springs on it stretch together (side by side); a spring hung below a hook puts springs one after another; anything dropped on the bin is taken away. Oil dropped on a block damps that block alone with a force $$-bv$$; the shaker dropped on the ceiling moves the whole ceiling as $$Y = A\cos\omega t$$, and the readouts give each block's swing over the last drive period. The Sandbox can also lay the rig on its side: blocks slide without friction on a level track between two walls, so gravity plays no part; a hook dragged onto the right wall ties its spring there, the right wall can be dragged to change the gap, and the shaker moves the left wall. The motion is the exact solution of the equations of motion.

</details>

## Goal

Determine an unknown spring constant from the dependence of oscillation period on mass, and relate the motion to a point going around a circle.

## Background

For a mass on a linear spring (§15.1),

$$m\ddot x=-kx,\qquad T=2\pi\sqrt{\frac{m}{k}}.$$

Therefore a graph of $$T^2$$ against $$m$$ is a line with slope $$4\pi^2/k$$. The displacement $$x$$ is measured from equilibrium. Energy alternates between kinetic and spring potential energy (§15.2):

$$E=\frac12mv^2+\frac12kx^2.$$

**The reference circle (§15.3).** The motion $$x = A\cos(\omega_0 t + \phi)$$, with $$\omega_0 = \sqrt{k/m} = 2\pi/T$$, is the shadow on the $$x$$ axis of a point going around a circle of radius $$A$$ at constant angular speed $$\omega_0$$. The point's speed $$A\omega_0$$ is the block's largest speed, reached as it passes equilibrium, and at position $$x$$ the block's speed is

$$v = \omega_0\sqrt{A^2 - x^2}.$$

## Before the lab

1. Predict the change in $$T$$ when $$m$$ doubles.
2. What are the units of the slope of $$T^2$$ against $$m$$, and how do they give $$k$$ in N/m?
3. Does the ideal period depend on release amplitude?
4. A block on a spring is pulled out and released from rest. At the instant it stops at the far end of its swing, what is its acceleration: zero, at its largest, or somewhere in between?

## Safety

Secure a real spring support and keep clear of falling masses. Do not stretch the spring beyond its elastic range or overload its attachment.

## Procedure

**Mass scan.** Press the **Simple harmonic motion** setup (free block on a horizontal track, no damping), then open the **Lab** fold and tick **Unknown spring: hide k** (it turns Blind on). Keep the same unknown spring for the whole scan: **New unknown spring** changes the hidden $$k$$. Set the **Mass m** slider to 0.20, 0.40, 0.60, 0.80 and 1.00 kg in turn. For each, drag the block about 10 cm out and let go, wait a few oscillations, then press **Record reading**. The readout **Period, measured between upward zero crossings** (under Measurements) goes in the Automatic measured $$T$$ column, and the ruler peak in the Release amplitude column. Use the automatic periods for the main fit and square them yourself in the $$T^2$$ column; the export fills $$T^2$$ only from a stopwatch time (the demo's own graph uses stopwatch readings). If you also time with **Stopwatch** (set **Oscillations counted, N** under **Stopwatch and ruler** first), count complete oscillations and keep those results distinct. Press **Export to worksheet**, then **Clear**.

**Amplitude check.** At one mass, release the block from three different distances (for example 5, 10 and 15 cm). Press **Reset peak** (under Stopwatch and ruler) before each release, so the ruler peak is that release's amplitude, and record each. Compare periods and explain any difference. Export, then clear.

**Reference circle.** The reference circle is hidden while predictions and answers are hidden, so do this after your $$k$$ estimate: untick **Unknown spring: hide k** (the status line then gives $$k$$) and untick **Blind: hide predictions and answers**. Make sure **Reference circle** is ticked under **Display**, and repeat one of your undamped runs at the same $$k$$, mass and release distance. Check that the block is always at the shadow of the moving point. From that run's measured period and release amplitude, predict the block's speed as it passes equilibrium and as it passes half the amplitude. During that run, also press **Pause** when the block is at the far end of a swing, so that the **Velocity v** readout under Measurements is close to 0, and read **Acceleration a**; press **Play**, then pause again as the block passes equilibrium (**Displacement x** close to 0) and read Acceleration a again. Both readings go in your answer to Question 2.

**Using the virtual apparatus.** Send each series to the worksheet before clearing, so each gets its own copy of the Data table. Reveal the spring constant only after completing your estimate.

## Data

| Run | $$m$$ (kg) | Release amplitude (m) | Automatic measured $$T$$ (s) | $$N$$, if timed | Stopwatch $$t$$ (s), if timed | $$T^2$$ (s²) |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |
| | | | | | | |

Use the same period method throughout the main fit. State whether the data came from the automatic readout or hand timing.

## Analysis

1. Fit $$T^2 = a + s m$$ and infer $$k = 4\pi^2/s$$. Inspect the intercept and residuals.
2. Compare the inferred $$k$$ with the revealed value.
3. Compare the amplitude runs. Explain why the ideal linear spring model predicts the same period.
4. If you timed oscillations, compare $$t/N$$ with the automatic readout.
5. For the run you watched with the reference circle, give your predicted speeds at equilibrium and at half the amplitude, and explain from the circle why the block moves fastest at equilibrium and stops at the ends.

## Questions

1. Why is a straight line fit useful compared with calculating $$k$$ from one mass?
2. What did Acceleration a read at the far end of the swing, and as the block passed equilibrium? Does that match what you said in Before the lab 4? Use $$m\ddot x = -kx$$ to explain where the acceleration is largest and where it is zero, and say at which points the kinetic and the spring potential energy are greatest.

## Uncertainty

For courses that treat measurement uncertainty. This section is not counted in the 75 minutes; do it when your instructor assigns it.
{: .ws-assigned}

For automatic periods use the displayed/CSV resolution and the stability of successive estimates. For hand timing, include start/stop uncertainty and divide elapsed time by the counted number of cycles. Do not treat a deterministic automatic readout as a noisy laboratory instrument. In a real spring, effective spring mass and nonlinearity can affect the intercept and amplitude dependence. In Analysis 2, include the slope uncertainty and any mass uncertainty in the comparison of the inferred $$k$$ with the revealed value. In the amplitude check, say whether any difference between the periods is within the resolution of the readout. If you timed oscillations, explain why the resolution of $$t/N$$ differs from that of the automatic readout.

## With calculus

For courses that use calculus. This section is not counted in the 75 minutes; do it when your instructor assigns it.

1. Substitute $$x = A\cos(\omega_0 t + \phi)$$ into $$m\ddot x = -kx$$ and show that it is a solution only if $$\omega_0 = \sqrt{k/m}$$. Differentiate it to get $$v(t)$$, show that $$E = \tfrac12mv^2 + \tfrac12kx^2$$ does not change with time, and use $$\sin^2 + \cos^2 = 1$$ to derive $$v = \omega_0\sqrt{A^2 - x^2}$$.
2. Differentiate $$v(t)$$ once more to show that $$a = -\omega_0^2x$$. From the measured period and release amplitude of your reference circle run, work out the acceleration at the turning point, and compare it with the Acceleration a you read there for Question 2.
3. Since $$T = 2\pi\sqrt{m/k}$$, $$dT/dm = T/(2m)$$. From your mass scan rows at 0.40 and 0.80 kg, estimate $$dT/dm$$ at 0.60 kg (the difference in $$T$$ over the difference in $$m$$), and compare it with $$T/(2m)$$ from your 0.60 kg row. Why does the estimate come out a little high?

## What to hand in

Prelab answers, settings and CSV, the graph of $$T^2$$ against $$m$$ with residuals, $$k$$, the amplitude comparison, and answers to the questions (and to Uncertainty and With calculus, if assigned). Identify simulated data.
