# Driven Oscillator and Resonance
Student laboratory · Physics I

Textbook: OpenStax *University Physics*, Vol. 1, §§15.5 and 15.6. Access for free at https://openstax.org/details/books/university-physics-volume-1.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/springs.html?ws=springs-driven)

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

Measure how a driven oscillator responds near its natural frequency, and compare the height, position and width of the resonance peak with the prediction from the spring constant, the mass and the damping.

## Background

For a mass $$m$$ on a spring of constant $$k$$ the natural angular frequency is $$\omega_0 = \sqrt{k/m}$$ (§15.1).

**Driven oscillations (§15.6).** When a force $$F_0\cos\omega t$$ drives a block with damping force $$-bv$$, the motion settles, once the start up transient has died away (time constant $$2m/b$$), into oscillation at the drive frequency $$\omega$$ with amplitude

$$A(\omega) = \frac{F_0}{\sqrt{(k - m\omega^2)^2 + (b\omega)^2}}.$$

At low $$\omega$$ this is the static stretch $$F_0/k$$; it peaks near $$\omega_0$$ (exactly at $$\sqrt{\omega_0^2 - b^2/2m^2}$$), where for light damping it is about $$F_0/(b\omega_0)$$; and it falls toward zero far above $$\omega_0$$. Less damping gives a taller, narrower peak: for light damping the full width of the peak where $$A$$ is $$1/\sqrt2$$ of its largest value is about $$b/m$$. In the demo the wall at the far end of the spring moves as $$(F_0/k)\cos\omega t$$, which pulls on the block exactly like the force $$F_0\cos\omega t$$.

## Before the lab

1. A block of 1.00 kg on a spring of 40.0 N/m is driven with $$F_0 = 0.50$$ N and $$b = 0.632$$ kg/s. Find $$\omega_0$$, the static stretch $$F_0/k$$, and the steady amplitude at $$\omega = 3.00$$ rad/s and at $$\omega = \omega_0$$.
2. Keep the same $$F_0$$ but drive the block three times as fast, at 9.00 rad/s instead of 3.00 rad/s. Is the steady amplitude then larger, smaller or about the same?

## Safety

Secure a real spring support and keep clear of falling masses. Do not stretch the spring beyond its elastic range or overload its attachment.

## Procedure

**Driven oscillator.** Press the **Resonance** setup and use it as it opens: $$m = 1.00$$ kg, $$k = 40.0$$ N/m, $$b = 0.632$$ kg/s and $$F_0 = 0.50$$ N. Set the **Drive frequency ω** slider (0.05 rad/s steps; the arrow keys move it one step) to 3.00, 5.00, 5.80, 6.10, 6.30, 6.50, 6.80, 7.50 and 9.00 rad/s in turn. After each change of $$\omega$$, wait until the readout **Measured, last cycle** stops changing (about 20 s of simulated time; raise the **Playback rate** under Time and plots if you like), then press **Record reading**; it stores that amplitude. Press **Export to worksheet**; the readings go into the Data table.

## Data

$$\omega_0 = \sqrt{k/m}$$. Work out the last two columns from the settings, for the readings at 3.00, 6.30 and 9.00 rad/s only.

| Run | $$m$$ (kg) | $$k$$ (N/m) | $$b$$ (kg/s) | $$F_0$$ (N) | $$\omega$$ (rad/s) | Steady amplitude $$A$$ (m) | $$\omega/\omega_0$$ | Predicted $$A$$ (m) |
|---|---|---|---|---|---|---|---|---|
| | | | | | | | | |
| | | | | | | | | |
| | | | | | | | | |

## Analysis

1. Plot the steady amplitude against $$\omega$$ on a sketch or graph. Compare the measured amplitude with the predicted one at the three readings you worked out, the frequency of the largest amplitude with $$\omega_0$$, and the height and width of the peak with $$F_0/(b\omega_0)$$ and $$b/m$$.

## Questions

1. Set your Data table readings at 3.00 and 9.00 rad/s side by side: how do the steady amplitudes compare, and was your answer to Before the lab 2 right? Why does the driven amplitude approach $$F_0/k$$ at low drive frequency and fall toward zero at high frequency? What limits the amplitude at resonance?
2. Give one example where resonance is useful and one where it must be avoided.

## Uncertainty

For courses that treat measurement uncertainty. This section is not counted in the 75 minutes; do it when your instructor assigns it.
{: .ws-assigned}

The readout stores each amplitude to the 0.0001 m (0.01 cm) the demo displays, and the settings $$m$$, $$k$$, $$b$$ and $$F_0$$ are exact, so a predicted amplitude should match your reading to that rounding once the start up transient has died away (its time constant is $$2m/b = 3.2$$ s). A reading taken too soon is off by what is left of the transient; say which of your readings you trust least. The peak height and width rest on a few readings near $$\omega_0$$, where the amplitude changes fastest with $$\omega$$, so say how the 0.05 rad/s steps of the slider limit them. A real oscillator adds noise, a drive that is not exactly sinusoidal, and a damping force that is not exactly proportional to the speed.

## With calculus

For courses that use calculus. This section is not counted in the 75 minutes; do it when your instructor assigns it.

1. Once the transient has died away, try $$x = A\cos(\omega t - \delta)$$ in $$m\ddot x + b\dot x + kx = F_0\cos\omega t$$. Expand $$\cos(\omega t - \delta)$$ and $$\sin(\omega t - \delta)$$, make the coefficients of $$\cos\omega t$$ and of $$\sin\omega t$$ equal on the two sides, and derive $$A(\omega)$$ in the Background and $$\tan\delta = b\omega/(k - m\omega^2)$$.
2. The amplitude is largest where $$D(\omega) = (k - m\omega^2)^2 + (b\omega)^2$$ is smallest. Set $$dD/d\omega = 0$$ and show that the peak is at $$\omega = \sqrt{\omega_0^2 - b^2/2m^2}$$. Work out that frequency and the peak amplitude for the Resonance settings, and compare them with your largest reading.
3. The damping force $$-bv$$ takes energy from the block at the rate $$bv^2$$. With $$v = dx/dt$$, find the average of $$bv^2$$ over one cycle (integrate over one period and divide by the period) and show that it is $$\tfrac12 b\omega^2A^2$$. Work it out from your readings at 5.80, 6.30 and 6.80 rad/s, and compare the one at 6.30 rad/s with $$F_0^2/(2b)$$, its value at $$\omega = \omega_0$$.

## What to hand in

Prelab answers, the Data table, the sketch or graph of $$A$$ against $$\omega$$, the comparison of the peak with the prediction, and answers to the questions (and to Uncertainty and With calculus, if assigned). Identify simulated data.
