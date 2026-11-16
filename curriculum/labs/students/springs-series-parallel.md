# Springs in Series and Parallel
Student laboratory · Physics I

Textbook: OpenStax *University Physics*, Vol. 1, §15.1. Access for free at https://openstax.org/details/books/university-physics-volume-1.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/springs.html?ws=springs-series-parallel)

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

Find the spring constant of springs combined one after another and side by side, and compare each with the value predicted from the constants of the single springs.

## Background

For one spring, the force is $$F = kx$$ and $$k$$ is its spring constant (§15.1).

**Springs combined.** Springs hung one below the other are *in series*: each one pulls on the next, so every spring in the line carries the same tension, and the total stretch is the sum of their stretches. Springs that hold the same block or bar side by side are *in parallel*: they stretch the same amount, and the load is shared among them. Any combination behaves like a single spring with some effective constant $$k_{\text{eff}}$$. A block of mass $$m$$ hanging at rest stretches it by $$mg/k_{\text{eff}}$$, so the block's position below the ceiling is

$$y = y_0 + \frac{g}{k_{\text{eff}}}\,m,$$

where $$y_0$$ is where it would sit with the springs unstretched.

## Before the lab

1. Two springs of constants $$k_1$$ and $$k_2$$ hold a load $$F$$. Find $$k_{\text{eff}}$$ when they are in series (same tension, stretches add) and when they are in parallel (same stretch, forces add). Evaluate both for $$k_1 = k_2 = 20.0$$ N/m.
2. A long spring is cut into two equal halves. How does the spring constant of each half compare with that of the whole spring: half as large, the same, or twice as large?

## Safety

Secure a real spring support and keep clear of falling masses. Do not stretch the spring beyond its elastic range or overload its attachment.

## Procedure

Under **System** press **Sandbox**. Use three of its rigs, all with $$k = 20.0$$ N/m: **One spring**, **Two in series** and **Two in parallel**. For each, set the **Block on it** slider to 100, 200 and 400 g in turn, press **Settle** so the block comes to rest, and write down the readout **Block 1: its top face below the ceiling** in the $$y$$ column by hand (in the Sandbox, Record reading stores timed oscillations only). Use one copy of the Springs combined table for each arrangement. Two in series is one spring twice as long as the One spring rig, and each of its two springs is one half of it; for each of these two rigs, find how far the block moved from 100 g to 400 g, and write both in your answer to Question 1.

## Data

**Springs combined.** One copy of the table for each arrangement.

| Arrangement | $$m$$ (kg) | Top of the block below the ceiling $$y$$ (cm) |
|---|---|---|
| | | |
| | | |
| | | |
| | | |

## Analysis

1. For each arrangement, fit $$y = y_0 + s\,m$$ and find $$k_{\text{eff}} = g/s$$ (with $$s$$ in m/kg). Compare each with your prediction from Before the lab question 1, and explain what the intercept $$y_0$$ is for each arrangement.

## Uncertainty

The readout gives $$y$$ to 0.01 cm and the block masses are exact settings, so each fit's residuals are the rounding of the readout, and any difference between $$k_{\text{eff}}$$ and your prediction beyond the slope's standard error is arithmetic or rounding in your work. Every spring in the model is exactly 20.0 N/m. On a real bench the largest errors would come from the springs' own mass, from a spring constant that is not the same for every spring of one kind, and from reading the block's position to about a millimeter against a ruler.

## Questions

1. How far did the block move from 100 g to 400 g on One spring, and on Two in series? From the two, find the spring constant of each half of a cut spring, and check it against your answer to Before the lab 2. Explain using springs in series.
2. Hanging a block in the Sandbox, how does the period of oscillation change when one spring is replaced by two of the same springs in series, and by two in parallel?

## What to hand in

Prelab answers, the Springs combined tables with their fits and $$k_{\text{eff}}$$ values, and answers to the questions. Identify simulated data.
