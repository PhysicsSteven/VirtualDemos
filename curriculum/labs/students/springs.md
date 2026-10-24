# Finding an Unknown Spring Constant
Student laboratory · Physics I

Textbook: OpenStax *University Physics*, Vol. 1, §§15.1–15.2; optional damping comparison: §15.5. Access for free at https://openstax.org/details/books/university-physics-volume-1.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/springs.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Simple harmonic motion; Hanging spring; Three kinds of damping; Resonance; Normal modes; Beats.

**Using the demo.**

- With $$k_1 = k_2$$, mode 1 has both blocks moving together, so the middle spring never stretches, and mode 2 has them moving opposite, so it adds $$2k_c$$. With unequal outer springs the modes are lopsided: one block swings more than the other, shown by the amplitude ratio below. Any motion is a sum of the two modes.
- The oil pushes on each block with a force $$-bv$$. The damping ratio $$\zeta = b/(2\sqrt{km})$$ sorts the motion: $$\zeta < 1$$ underdamped, $$\zeta = 1$$ critically damped, $$\zeta > 1$$ overdamped. Drag the grip on the oil to change $$b$$.
- The wall at the end of the spring moves as $$X_w\cos\omega t$$. That pulls on the block exactly like a force $$F_0\cos\omega t$$ with $$F_0 = kX_w$$. The sweep starts at the steady state for its first $$\omega$$ and raises $$\omega$$ slowly; if $$b$$ is small the oscillator needs time $$2m/b$$ to catch up, so the measured dots fall a little below the peak and ring just after it, more so for a lightly damped spring.
- Press Stopwatch (or W on the drawing) as the block passes a mark you choose, count N full oscillations, and press it again as the block passes the same mark going the same way. The stopwatch runs on simulation time, so slow motion makes timing easier, but your own reaction time still counts. It reads to 0.01 s. The gold ticks on the ruler hold the largest \|x\| since Reset peak.
- Capture stores what is on screen, rounded as displayed: the stopwatch time, your N, the ruler peak (or, when driven, the amplitude of the last drive cycle) and the settings $$m$$, $$k$$, $$b$$, $$F_0$$ and $$\omega$$. $$T = t/N$$. Cells can be edited; rows stay through setup changes until Clear.
- Blind hides the period, $$\omega_0$$ and $$f_0$$ predicted from $$m$$ and $$k$$, the damping ratio, Q, the damped period and decay time, the predicted steady amplitude, phase and peak, the mode frequencies and beat period, the static stretch, the reference circle, the envelope, the $$\zeta$$ comparison traces, the curves on the resonance plot and the $$k$$ derived from your fit. The stopwatch, the ruler, the clock, the measured period and amplitude, and the settings stay.
- Unknown spring picks a random $$k$$ from 5 to 60 N/m and hides it: the $$k$$ slider, the $$k$$ labels, the energy values, the wall amplitude and the $$k$$ column of the CSV. It turns Blind on, and the $$\zeta$$ buttons are off because they would give $$k$$ away. The measured period stays. Change $$m$$, time the period and find $$k$$ from the slope of $$T^2$$ against $$m$$. One block only. Turning it off shows $$k$$, so you can check your answer.
- Keep a trace, then drag the block farther out and let go: the peaks move apart in height but not in time.

</details>

## Goal

Determine an unknown spring constant from the dependence of oscillation period on mass.

## Background

For a mass on a linear spring (§15.1),

$$m\ddot x=-kx,\qquad T=2\pi\sqrt{\frac{m}{k}}.$$

Therefore a graph of $$T^2$$ against $$m$$ is a line with slope $$4\pi^2/k$$. The displacement $$x$$ is measured from equilibrium. Energy alternates between kinetic and spring potential energy (§15.2):

$$E=\frac12mv^2+\frac12kx^2.$$

## Before the lab

1. Predict the change in $$T$$ when $$m$$ doubles.
2. What are the units of the slope of $$T^2$$ against $$m$$, and how do they give $$k$$ in N/m?
3. Does the ideal period depend on release amplitude?

## Safety

Secure a real spring support and keep clear of falling masses. Do not stretch the spring beyond its elastic range or overload its attachment.

## Procedure

**Mass scan.** Keep the same unknown spring for the whole scan. Use at least five masses, such as 0.20, 0.40, 0.60, 0.80 and 1.00 kg in the simulation. Displace the mass moderately and release it. Measure a stable period after each mass change.

**Amplitude check.** At one mass, repeat with three release amplitudes. Compare periods and explain any difference within resolution.

**Optional damping.** After the undamped scan, introduce modest damping and compare the oscillation period and amplitude decay. Keep these points out of the undamped spring constant fit.

**Using the virtual apparatus.** Investigate one unknown spring in free horizontal motion with no damping. Measure the period for masses 0.20, 0.40, 0.60, 0.80 and 1.00 kg after several oscillations. Keep the same unknown spring throughout: choosing a new one changes the hidden spring constant. Use the automatically measured periods for the main $$T^2$$ against $$m$$ fit; the demo's own graph instead uses separately timed stopwatch readings. If you use hand timing, count complete oscillations and keep those results distinct. Compare three release amplitudes at one mass, then investigate damping separately. Send each series to the worksheet before clearing, so each gets its own copy of the Data table. Reveal the spring constant only after completing your estimate.

## Data

| Run | $$m$$ (kg) | Release amplitude (m) | Automatic measured $$T$$ (s) | $$N$$, if timed | Stopwatch $$t$$ (s), if timed | $$T^2$$ (s²) |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |
| | | | | | | |

Use the same period method throughout the main fit. State whether the data came from the automatic readout or hand timing.

## Analysis

1. Fit $$T^2 = a + s m$$ and infer $$k = 4\pi^2/s$$. Inspect the intercept and residuals.
2. Compare the inferred $$k$$ with the revealed value. Include slope uncertainty and any mass uncertainty.
3. Compare the amplitude runs. Explain why the ideal linear spring model predicts the same period.
4. If you timed oscillations, compare $$t/N$$ with the automatic readout; explain the different reading resolutions.

## Uncertainty

For automatic periods use the displayed/CSV resolution and the stability of successive estimates. For hand timing, include start/stop uncertainty and divide elapsed time by the counted number of cycles. Do not treat a deterministic automatic readout as a noisy laboratory instrument. In a real spring, effective spring mass and nonlinearity can affect the intercept and amplitude dependence.

## Questions

1. Why does increasing mass lengthen the period?
2. At which points are kinetic and spring potential energy greatest?
3. Why is a straight line fit useful compared with calculating $$k$$ from one mass?
4. Why should damped runs be excluded from the undamped period fit?

## What to hand in

Prelab answers, settings and CSV, the graph of $$T^2$$ against $$m$$ with residuals, $$k$$ with uncertainty, the amplitude comparison and answers to the questions. Identify simulated data.
