# Normal Modes and Chaos in a Double Pendulum
Student laboratory · Physics I

Textbook: OpenStax *University Physics*, Vol. 1, §15.4 (small angle pendulums; the double pendulum's normal modes and chaos go beyond the textbook). Access for free at https://openstax.org/details/books/university-physics-volume-1.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/pendulum.html?scene=double)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Normal mode 1; Normal mode 2; Double pendulum chaos; Butterfly effect: 100 copies; Poincaré section. These are in the **Double pendulum** scene of the Pendulums demo (the link above opens it); the **Exact period** scene has the simple pendulum at any amplitude, and the **Photogate lab** scene goes with the Measuring Gravity with a Pendulum worksheet.

**Using the demo.**

- The pendulum is drawn on the left, the angles against time at the top right, and below that the path in the $$(\theta_1, \theta_2)$$ plane, the separation of the copies, or a Poincaré section. Drag a bob to set its angle, or drag the grip in the middle of a rod to change its length.
- Mode 1 and Mode 2 (under Small oscillations) start the pendulum from rest in that normal mode, with the larger of the two angles equal to the mode amplitude. Changing a mass, a length or $$g$$ carries the present motion on with the new value, so start the mode again after each change.
- The measured $$\theta_1$$ period is the mean time between the last few times the upper rod passes straight down in the same direction. It appears once those times agree to 1%, which takes a few swings.
- Copies (under Copies and separation) run the same pendulum several times at once; copy $$k$$ starts with the upper rod turned $$k\delta$$ further than copy 0. The readout gives the time at which copy 1 first gets a distance $$d = 0.1$$ away from copy 0 (see the Background for $$d$$), and an estimate of the Lyapunov exponent $$\lambda$$.
- Record reading stores the settings, how the run started, the measured period, $$\log_{10}\delta$$ and the separation time. Export to worksheet sends the readings to the Data table below; Clear starts a new series, which goes into a new copy of the table.

**What the demo models.**

- Point masses on rigid massless rods, frictionless pivots, no air drag, $$g = 9.81\ \text{m/s}^2$$. The motion comes from the exact nonlinear equations of motion, integrated with an adaptive Dormand–Prince method at a tolerance of $$10^{-11}$$; the energy readout shows how little the total energy drifts.

</details>

## Goal

Measure the two normal mode frequencies of a double pendulum at small amplitude and compare them with theory; then measure how fast two nearly identical chaotic swings separate.

## Background

A simple pendulum of length $$L$$ swinging through small angles has $$\omega^2 = g/L$$ (§15.4). Hang a second pendulum from the first and, for small angles, the two angles obey two coupled linear equations. Every small motion is then a sum of two **normal modes**, in each of which both rods swing with the same frequency. For two equal masses on two rods of equal length $$L$$,

$$\omega_1^2 = (2 - \sqrt2)\,\frac{g}{L},\quad \frac{\theta_2}{\theta_1} = +\sqrt2;\qquad \omega_2^2 = (2 + \sqrt2)\,\frac{g}{L},\quad \frac{\theta_2}{\theta_1} = -\sqrt2 .$$

In mode 1 the rods swing together; in mode 2 they swing opposite ways, faster. Both $$\omega^2$$ are in proportion to $$1/L$$. A period $$T$$ gives $$\omega = 2\pi/T$$.

At large angles the equations are nonlinear and the motion can be **chaotic**: two starts that differ by a tiny $$\delta$$ separate roughly exponentially, $$d \approx \delta\,e^{\lambda t}$$, where $$\lambda$$ is the Lyapunov exponent. The demo measures the distance between two swings as

$$d^2 = \Delta\theta_1^2 + \Delta\theta_2^2 + \frac{L_1}{g}\left(\Delta\omega_1^2 + \Delta\omega_2^2\right),$$

with angles in radians. If the separation grows exponentially, it reaches a fixed size $$D$$ at

$$t_d = \frac{1}{\lambda}\ln\frac{D}{\delta} = \frac{\ln D}{\lambda} - \frac{\ln 10}{\lambda}\,\log_{10}\delta .$$

## Before the lab

1. For equal masses and rods of 1.00 m, calculate the periods of the two normal modes.
2. If $$\lambda = 1.5\ \text{s}^{-1}$$, by what factor does a small difference grow in 10 s? How much better would you have to know the starting angle to predict the motion 10 s further ahead?

## Safety

There is no physical apparatus. A real double pendulum swings fast and unpredictably: keep faces and hands well out of its reach.

## Procedure

Keep both masses at 1.00 kg and $$g$$ at Earth's value throughout. Press the **Normal mode 1** setup (both masses 1.00 kg, both rods 1.00 m), open the **Small oscillations** fold and set the **Mode amplitude, larger angle** slider to 2°. Set a rod length with the **Upper rod L₁** and **Lower rod L₂** sliders: drag close, then fine tune with the arrow keys (0.01 m a press).

**Part 1: mode 1.** For each $$L$$ = 0.50, 1.00 and 2.00 m: (1) set both rods to $$L$$, (2) press the **Mode 1** button in the Small oscillations fold (this starts the mode again after the change of length), (3) wait until the **Measured θ₁ period** readout under Measurements shows a time, which takes a few swings, then (4) press **Record reading** under Readings. Press **Export to worksheet**, then **Clear**.

**Part 2: mode 2.** Repeat Part 1, pressing the **Mode 2** button instead. Export it, then press **Clear**, so it gets a new copy of the table.

**Part 3: how small is small?** With both rods 1.00 m long, record the mode 2 period at mode amplitudes of 2° and 24°: set the **Mode amplitude, larger angle** slider, press **Mode 2**, wait for the measured period and record. Export these, then press **Clear**.

**Part 4: separation.** Press the **Double pendulum chaos** setup (both rods 1.00 m, released from rest at 130° and 130°), open the **Copies and separation** fold and set **Number of copies** to 2. Record the time for copy 1 to reach $$d = 0.1$$ for start differences $$\delta$$ of $$10^{-6}$$ to $$10^{-3}$$ rad, every half power of ten (seven values), set with the **Start difference δ, upper rod** slider (each arrow key press is a quarter power of ten, so two presses per value). Changing $$\delta$$ starts the run again; let it run until the **Copy 1 reaches d = 0.1** readout shows a time, then press **Record reading**. Note the **λ estimate** readout when its **after** readout reaches about 20 s on the last run. Export these, then press **Clear**.

## Data

| Trial | Start | Rod length $$L$$ (m) | Measured period $$T$$ (s) | $$1/L$$ (1/m) | $$\omega^2$$ (rad²/s²) | $$\log_{10}\delta$$ | Time to separate $$t_d$$ (s) |
|---|---|---|---|---|---|---|---|
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |

Work out $$1/L$$ and $$\omega^2 = (2\pi/T)^2$$ yourself. Keep each part in its own copy of the table.

## Analysis

1. Parts 1 and 2: plot $$\omega^2$$ against $$1/L$$ for each mode and fit a line. Compare the slopes with $$(2 - \sqrt2)\,g$$ and $$(2 + \sqrt2)\,g$$, and the intercepts with zero.
2. Find the ratio of the two slopes and compare it with $$(2 + \sqrt2)/(2 - \sqrt2)$$. What is the ratio of the two frequencies?
3. Part 3: by what percentage did the mode 2 period change from 2° to 24°? Compare the 2° period with the small angle period from Before the lab 1: was 2° small enough for Parts 1 and 2?
4. Part 4: plot $$t_d$$ against $$\log_{10}\delta$$ and fit a line. Use the slope to find $$\lambda$$ and compare it with the demo's Lyapunov estimate. Why do the points scatter about the line much more than in Parts 1 and 2?

## Uncertainty

The measured periods are shown to 4 significant figures and the separation times to 0.01 s, and the integration error is far smaller than either. In Parts 1 to 3 the rounding of $$T$$ sets the uncertainty of $$\omega^2$$: work it out for your shortest period. In Part 4 the uncertainty comes from the motion itself: the growth rate of a chaotic separation changes from moment to moment, so a single $$t_d$$ can sit well off the line. Use the residuals of your fit to estimate the uncertainty of $$\lambda$$, and say why the demo's own estimate, taken over a finite time, is also only an estimate.

## Questions

1. The demo has no randomness anywhere, yet the motion at 130° cannot be predicted far ahead. Explain how both can be true.

## What to hand in

Prelab answers, the four data tables with the graphs and fits for Parts 1, 2 and 4, the slopes compared with $$(2 \mp \sqrt2)\,g$$, the amplitude comparison, your value of $$\lambda$$ with its uncertainty, and the answer to the question. Identify simulated data.
