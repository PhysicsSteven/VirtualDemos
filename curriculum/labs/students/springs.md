# Finding an Unknown Spring Constant
Student laboratory · Physics I

Textbook: OpenStax *University Physics*, Vol. 1, §§15.1 to 15.3, 15.5 and 15.6. Access for free at https://openstax.org/details/books/university-physics-volume-1.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/springs.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Simple harmonic motion; Hanging spring; Three kinds of damping; Resonance; Normal modes; Beats. The Sandbox has its own ready made rigs: Two in series; Two in parallel; Series and parallel; One spring; Two blocks; Start empty; and, between two walls, One block; Two blocks; Side by side; Empty track.

**Using the demo.**

- With $$k_1 = k_2$$, mode 1 has both blocks moving together, so the middle spring never stretches, and mode 2 has them moving opposite, so it adds $$2k_c$$. With unequal outer springs the modes are lopsided: one block swings more than the other, shown by the amplitude ratio below. Any motion is a sum of the two modes.
- The oil pushes on each block with a force $$-bv$$. The damping ratio $$\zeta = b/(2\sqrt{km})$$ sorts the motion: $$\zeta < 1$$ underdamped, $$\zeta = 1$$ critically damped, $$\zeta > 1$$ overdamped. Drag the grip on the oil to change $$b$$.
- The wall at the end of the spring moves as $$X_w\cos\omega t$$. That pulls on the block exactly like a force $$F_0\cos\omega t$$ with $$F_0 = kX_w$$. The sweep starts at the steady state for its first $$\omega$$ and raises $$\omega$$ slowly; if $$b$$ is small the oscillator needs time $$2m/b$$ to catch up, so the measured dots fall a little below the peak and ring just after it, more so for a lightly damped spring.
- Press Stopwatch (or W on the drawing) as the block passes a mark you choose, count N full oscillations, and press it again as the block passes the same mark going the same way. The stopwatch runs on simulation time, so slow motion makes timing easier, but your own reaction time still counts. It reads to 0.01 s. The gold ticks on the ruler hold the largest \|x\| since Reset peak.
- Capture stores what is on screen, rounded as displayed: the stopwatch time, your N, the ruler peak (or, when driven, the amplitude of the last drive cycle) and the settings $$m$$, $$k$$, $$b$$, $$F_0$$ and $$\omega$$. $$T = t/N$$. Cells can be edited; rows stay through setup changes until Clear.
- Blind hides the period, $$\omega_0$$ and $$f_0$$ predicted from $$m$$ and $$k$$, the damping ratio, Q, the damped period and decay time, the predicted steady amplitude, phase and peak, the mode frequencies and beat period, the static stretch, the reference circle, the envelope, the $$\zeta$$ comparison traces, the curves on the resonance plot and the $$k$$ derived from your fit. The stopwatch, the ruler, the clock, the measured period and amplitude, and the settings stay.
- Unknown spring picks a random $$k$$ from 5 to 60 N/m and hides it: the $$k$$ slider, the $$k$$ labels, the energy values, the wall amplitude and the $$k$$ column of the CSV. It turns Blind on, and the $$\zeta$$ buttons are off because they would give $$k$$ away. The measured period stays. Change $$m$$, time the period and find $$k$$ from the slope of $$T^2$$ against $$m$$. One block only. Turning it off shows $$k$$, so you can check your answer.
- Keep a trace, then drag the block farther out and let go: the peaks move apart in height but not in time.
- The Sandbox hangs any arrangement of springs, hooks and blocks from a ceiling, moving straight up and down. Every spring is 10.0 cm long unstretched and every block 4.0 cm tall. Hooks and bars have no mass, so they always sit where the spring forces on them balance. Parts are dragged from the tray in the picture onto the ceiling, a hook or a block; a hook dragged onto another hook joins them into one bar, so the springs on it stretch together (side by side); a spring hung below a hook puts springs one after another; anything dropped on the bin is taken away. Oil dropped on a block damps that block alone with a force $$-bv$$; the shaker dropped on the ceiling moves the whole ceiling as $$Y = A\cos\omega t$$, and the readouts give each block's swing over the last drive period. The Sandbox can also lay the rig on its side: blocks slide without friction on a level track between two walls, so gravity plays no part; a hook dragged onto the right wall ties its spring there, the right wall can be dragged to change the gap, and the shaker moves the left wall. The motion is the exact solution of the equations of motion.

</details>

## Goal

Determine an unknown spring constant from the dependence of oscillation period on mass, relate the motion to a point going around a circle, measure how a driven oscillator responds near its natural frequency, and find the spring constant of springs combined one after another and side by side.

## Background

For a mass on a linear spring (§15.1),

$$m\ddot x=-kx,\qquad T=2\pi\sqrt{\frac{m}{k}}.$$

Therefore a graph of $$T^2$$ against $$m$$ is a line with slope $$4\pi^2/k$$. The displacement $$x$$ is measured from equilibrium. Energy alternates between kinetic and spring potential energy (§15.2):

$$E=\frac12mv^2+\frac12kx^2.$$

**The reference circle (§15.3).** The motion $$x = A\cos(\omega_0 t + \phi)$$, with $$\omega_0 = \sqrt{k/m} = 2\pi/T$$, is the shadow on the $$x$$ axis of a point going around a circle of radius $$A$$ at constant angular speed $$\omega_0$$. The point's speed $$A\omega_0$$ is the block's largest speed, reached as it passes equilibrium, and at position $$x$$ the block's speed is

$$v = \omega_0\sqrt{A^2 - x^2}.$$

**Driven oscillations (§15.6).** When a force $$F_0\cos\omega t$$ drives a block with damping force $$-bv$$, the motion settles, once the start up transient has died away (time constant $$2m/b$$), into oscillation at the drive frequency $$\omega$$ with amplitude

$$A(\omega) = \frac{F_0}{\sqrt{(k - m\omega^2)^2 + (b\omega)^2}}.$$

At low $$\omega$$ this is the static stretch $$F_0/k$$; it peaks near $$\omega_0$$ (exactly at $$\sqrt{\omega_0^2 - b^2/2m^2}$$), where for light damping it is about $$F_0/(b\omega_0)$$; and it falls toward zero far above $$\omega_0$$. Less damping gives a taller, narrower peak: for light damping the full width of the peak where $$A$$ is $$1/\sqrt2$$ of its largest value is about $$b/m$$. In the demo the wall at the far end of the spring moves as $$(F_0/k)\cos\omega t$$, which pulls on the block exactly like the force $$F_0\cos\omega t$$.

**Springs combined.** Springs hung one below the other are *in series*: each one pulls on the next, so every spring in the line carries the same tension, and the total stretch is the sum of their stretches. Springs that hold the same block or bar side by side are *in parallel*: they stretch the same amount, and the load is shared among them. Any combination behaves like a single spring with some effective constant $$k_{\text{eff}}$$. A block of mass $$m$$ hanging at rest stretches it by $$mg/k_{\text{eff}}$$, so the block's position below the ceiling is

$$y = y_0 + \frac{g}{k_{\text{eff}}}\,m,$$

where $$y_0$$ is where it would sit with the springs unstretched.

## Before the lab

1. Predict the change in $$T$$ when $$m$$ doubles.
2. What are the units of the slope of $$T^2$$ against $$m$$, and how do they give $$k$$ in N/m?
3. Does the ideal period depend on release amplitude?
4. A block of 1.00 kg on a spring of 40.0 N/m is driven with $$F_0 = 0.50$$ N and $$b = 0.632$$ kg/s. Find $$\omega_0$$, the static stretch $$F_0/k$$, and the steady amplitude at $$\omega = 3.00$$ rad/s and at $$\omega = \omega_0$$.
5. Two springs of constants $$k_1$$ and $$k_2$$ hold a load $$F$$. Find $$k_{\text{eff}}$$ when they are in series (same tension, stretches add) and when they are in parallel (same stretch, forces add). Evaluate both for $$k_1 = k_2 = 20.0$$ N/m.

## Safety

Secure a real spring support and keep clear of falling masses. Do not stretch the spring beyond its elastic range or overload its attachment.

## Procedure

**Mass scan.** Keep the same unknown spring for the whole scan. Use at least five masses, such as 0.20, 0.40, 0.60, 0.80 and 1.00 kg in the simulation. Displace the mass moderately and release it. Measure a stable period after each mass change.

**Amplitude check.** At one mass, repeat with three release amplitudes. Compare periods and explain any difference within resolution.

**Damping.** After the undamped scan, introduce modest damping and compare the oscillation period and amplitude decay. Keep these points out of the undamped spring constant fit.

**Reference circle.** The reference circle is hidden while predictions and answers are hidden, so do this after you have revealed the spring constant and shown predictions again. Repeat one of your undamped runs, watch the reference circle beside it and check that the block is always at the shadow of the moving point. From that run's measured period and release amplitude, predict the block's speed as it passes equilibrium and as it passes half the amplitude.

**Driven oscillator.** Use the Resonance setup as it opens: $$m = 1.00$$ kg, $$k = 40.0$$ N/m, $$b = 0.632$$ kg/s and $$F_0 = 0.50$$ N. Measure the steady amplitude at drive frequencies of 3.00, 5.00, 5.80, 6.10, 6.30, 6.50, 6.80, 7.50 and 9.00 rad/s. After each change of $$\omega$$, wait until the amplitude stops changing (about 20 s of simulated time; speed the simulation up if you like) before you record it. Then make the damping stronger, $$b = 2.09$$ kg/s, and measure again at 3.00, 5.00, 5.80, 6.30, 6.80, 7.50 and 9.00 rad/s. Send each damping to the worksheet, then clear the readings, so each is its own series; driven readings go into the Driven oscillator table.

**Springs in series and parallel.** In the Sandbox, use three arrangements of springs with $$k = 20.0$$ N/m: one spring, two in series and two in parallel. For each, hang blocks of 0.10, 0.20, 0.30 and 0.40 kg, let the block come to rest, and record the position of its top face below the ceiling. Use one copy of the Springs combined table for each arrangement.

**Using the virtual apparatus.** Investigate one unknown spring in free horizontal motion with no damping. Measure the period for masses 0.20, 0.40, 0.60, 0.80 and 1.00 kg after several oscillations. Keep the same unknown spring throughout: choosing a new one changes the hidden spring constant. Use the automatically measured periods for the main $$T^2$$ against $$m$$ fit; the demo's own graph instead uses separately timed stopwatch readings. If you use hand timing, count complete oscillations and keep those results distinct. Compare three release amplitudes at one mass, then investigate damping separately. Send each series to the worksheet before clearing, so each gets its own copy of the Data table. Reveal the spring constant only after completing your estimate.

## Data

| Run | $$m$$ (kg) | Release amplitude (m) | Automatic measured $$T$$ (s) | $$N$$, if timed | Stopwatch $$t$$ (s), if timed | $$T^2$$ (s²) |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |
| | | | | | | |

Use the same period method throughout the main fit. State whether the data came from the automatic readout or hand timing.

**Driven oscillator.** $$\omega_0 = \sqrt{k/m}$$. Work out the last two columns from the settings.

| Run | $$m$$ (kg) | $$k$$ (N/m) | $$b$$ (kg/s) | $$F_0$$ (N) | $$\omega$$ (rad/s) | Steady amplitude $$A$$ (m) | $$\omega/\omega_0$$ | Predicted $$A$$ (m) |
|---|---|---|---|---|---|---|---|---|
| | | | | | | | | |
| | | | | | | | | |
| | | | | | | | | |

**Springs combined.** One copy of the table for each arrangement.

| Arrangement | $$m$$ (kg) | Top of the block below the ceiling $$y$$ (cm) |
|---|---|---|
| | | |
| | | |
| | | |
| | | |

## Analysis

1. Fit $$T^2 = a + s m$$ and infer $$k = 4\pi^2/s$$. Inspect the intercept and residuals.
2. Compare the inferred $$k$$ with the revealed value. Include slope uncertainty and any mass uncertainty.
3. Compare the amplitude runs. Explain why the ideal linear spring model predicts the same period.
4. If you timed oscillations, compare $$t/N$$ with the automatic readout; explain the different reading resolutions.
5. For the run you watched with the reference circle, give your predicted speeds at equilibrium and at half the amplitude, and explain from the circle why the block moves fastest at equilibrium and stops at the ends.
6. Plot the steady amplitude against $$\omega$$ for both dampings on one sketch or graph. Compare each measured amplitude with the predicted one, the frequency of the largest amplitude with $$\omega_0$$, and the heights and widths of the two peaks. How do the peak height and width depend on $$b$$?
7. For each arrangement, fit $$y = y_0 + s\,m$$ and find $$k_{\text{eff}} = g/s$$ (with $$s$$ in m/kg). Compare each with your prediction from Before the lab question 5, and explain what the intercept $$y_0$$ is for each arrangement.

## Uncertainty

For automatic periods use the displayed/CSV resolution and the stability of successive estimates. For hand timing, include start/stop uncertainty and divide elapsed time by the counted number of cycles. Do not treat a deterministic automatic readout as a noisy laboratory instrument. In a real spring, effective spring mass and nonlinearity can affect the intercept and amplitude dependence.

## Questions

1. Why does increasing mass lengthen the period?
2. At which points are kinetic and spring potential energy greatest?
3. Why is a straight line fit useful compared with calculating $$k$$ from one mass?
4. Why should damped runs be excluded from the undamped period fit?
5. Why does the driven amplitude approach $$F_0/k$$ at low drive frequency and fall toward zero at high frequency? What limits the amplitude at resonance?
6. Give one example where resonance is useful and one where it must be avoided.
7. A spring is cut in half. What is the spring constant of each half? Explain using springs in series.
8. Hanging a block in the Sandbox, how does the period of oscillation change when one spring is replaced by two of the same springs in series, and by two in parallel?

## What to hand in

Prelab answers, settings and CSV, the graph of $$T^2$$ against $$m$$ with residuals, $$k$$ with uncertainty, the amplitude comparison, the Driven oscillator table with its sketch or graph, the Springs combined tables with their fits and $$k_{\text{eff}}$$ values, and answers to the questions. Identify simulated data.
