# Random Scatter and Bias in a Measurement of g
Student laboratory · Physics I

Textbook: OpenStax *University Physics*, Vol. 1, §1.6 (accuracy and precision) and §15.4 (the pendulum). Access for free at https://openstax.org/details/books/university-physics-volume-1.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/measurement-uncertainty.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Hand timing, one swing; Hand timing, 10 swings; Photogate; A range of lengths; Length read to the bottom of the bob; Big swings, 40°. Each setup sets the timer, the swings per timing, the length, the release angle and where the length is read; it does not clear your readings.

**Using the demo.**

- The Set up cards under the picture hold the **Length L, as read on the meter stick** (slider, the L −1 cm, L +1 cm and L +20 cm buttons, or click its readout and type), the **Release angle θ₀**, the **Timer** (**Hand stopwatch** or **Photogate**), the **Swings per timing N** (1, 5, 10 or 20) and where the length is read (**Center of the bob** or **Bottom of the bob**). You can also drag the bob: sideways for θ₀, along the string for L.
- **Release** swings the pendulum and times N swings, starting as the bob first passes the bottom; **16×** in the strip runs it faster. **Repeat 10 times** makes 10 more timings of the same setup at once. Every timing is recorded as a row in Readings by itself; × deletes a row.
- The graph shows **Repeated timings** (a dot for each timing at the present setup, the mean, ± s and ± s/√n) or **T² against L** (every reading, the fitted line and the residuals below). The Analysis section gives the mean, s, s/√n and the fit's slope and intercept. Blind (under Lab) hides g and the predicted periods.

**What the demo models.**

- The pendulum is exact: a point bob on a light string, no drag, g = 9.81 m/s², with the period at any release angle $$T = T_0\,\frac{2}{\pi}K\!\left(\sin\frac{\theta_0}{2}\right)$$, where $$T_0 = 2\pi\sqrt{L/g}$$.
- The instrument errors are simulated, and labeled so. Each press of the hand stopwatch is early or late by a random amount with a standard deviation of 0.05 s; the display reads to 0.01 s. The photogate has no reaction time and reads to 0.001 s. Read to the bottom of the bob (diameter 6.0 cm), every length reading is 3.0 cm longer than the true length from pivot to bob center.
- The random draws repeat when the page is opened again (same steps, same numbers); **New random draws** under Lab moves to another set, so your numbers can differ from a classmate's.

</details>

## Goal

Tell random scatter from bias in a measurement of g, decide which changes to the procedure make the result better, and report g with an uncertainty that the data justify.

## Background

A measurement has two kinds of error. **Random error** changes from one try to the next: a hand on a stopwatch is sometimes early and sometimes late. It shows up as scatter, and averaging many tries reduces it. **Systematic error (bias)** is the same on every try: a length read from the wrong point, or a formula that does not quite apply. It produces no scatter at all, so repeating never reveals it and never reduces it. A result can be *precise* (little scatter) and still *inaccurate* (biased).

For $$n$$ repeated readings $$T_1, \dots, T_n$$ the mean is $$\bar T = \frac{1}{n}\sum T_i$$ and the standard deviation is

$$s = \sqrt{\frac{\sum (T_i - \bar T)^2}{n-1}}.$$

$$s$$ describes one reading: about two thirds of single readings fall within $$\pm s$$ of the mean. The uncertainty of the *mean* is the standard error $$s/\sqrt{n}$$, which shrinks as you take more readings. An instrument also has a resolution: when every reading is identical, use half of its last digit as the uncertainty.

For a small swing, $$T = 2\pi\sqrt{L/g}$$, so

$$g = \frac{4\pi^2 L}{T^2},\qquad \frac{\delta g}{g} = \sqrt{\left(\frac{\delta L}{L}\right)^2 + \left(2\,\frac{\delta T}{T}\right)^2}.$$

The period counts twice because it is squared. Timing N swings at once divides the timing error by N: the start and stop presses are just as uncertain, but their error is now shared by N periods.

Squaring the period gives a straight line through the origin, $$T^2 = (4\pi^2/g)\,L$$. Fitting $$T^2$$ against $$L$$ with a free intercept uses every length at once: the slope $$k$$ gives $$g = 4\pi^2/k$$, and the intercept tests the model. If every length reading is too long by the same amount $$d$$, the data follow $$T^2 = (4\pi^2/g)(L - d)$$: the slope is unchanged, and the line reaches $$T^2 = 0$$ at $$L = d$$ instead of at zero. Residuals (data minus line) should scatter evenly about zero; a pattern in them means the model or the procedure is wrong.

Finally, $$2\pi\sqrt{L/g}$$ is a small angle approximation. At larger angles the true period is longer, by about $$\theta_0^2/16$$ (in radians), and a g computed from the small angle formula comes out too low.

## Before the lab

1. You time one swing of a pendulum ten times by hand and get readings that differ by up to 0.2 s. Is the mean of the ten better than any one of them? Why?
2. Which has the smaller uncertainty in the period: one swing timed ten times, or ten swings timed once? Predict before you measure.
3. A student reads every length to the bottom of the bob instead of its center. Will repeating the timings reveal the mistake? Will the slope of $$T^2$$ against $$L$$ be wrong? What about the intercept?

## Safety

On a real bench, clamp the pivot firmly, keep the swing clear of people and equipment, and release the bob without a push.

## Procedure

Open **Lab** in the sidebar and check **Blind: hide g and the predicted periods, to work them out yourself**. Leave **Reveal what the simulation hid** unchecked until Part E. Every timing goes into Readings by itself. Press **Export to worksheet** at the end of each part, then **Clear**, so each part gets its own copy of the Data table. Record each copy's mean, s and s/√n from the Analysis section in the Summary table.

**Part A: random scatter (about 15 minutes).**

1. Press the setup **Hand timing, one swing** (L = 1.000 m, θ₀ = 5°, N = 1, Hand stopwatch). Press **Release** once and watch a timing: the stopwatch starts as the bob first passes the bottom and stops one swing later. Then press **Repeat 10 times**, so you have 11 timings.
2. Under **Repeated timings** the dots spread out. Record the mean $$\bar T$$, the standard deviation $$s$$ and the standard error $$s/\sqrt{n}$$ from Analysis. Export and Clear.
3. Press **Hand timing, 10 swings** (N = 10). Press **Repeat 10 times**. Record $$\bar T$$, $$s$$ and $$s/\sqrt{n}$$ of the period T = t/N. Export and Clear.
4. Press **Photogate** (N = 1) and press **Repeat 10 times**. Record what you see. Export and Clear.

**Part B: g from one length (about 10 minutes).** Use your **Hand timing, 10 swings** data from Part A. Calculate $$g$$ from $$L = 1.000$$ m and $$\bar T$$. Take $$\delta L = 0.0005$$ m (half a millimeter) and $$\delta T$$ = the standard error, and propagate the uncertainty in g. Do the same for the photogate data, with $$\delta T$$ = half of the photogate's last digit (0.0005 s).

**Part C: a range of lengths (about 15 minutes).**

1. Press **A range of lengths** (L = 0.400 m, N = 10, Hand stopwatch, θ₀ = 5°). Choose **16×** in the strip so each timing takes a few seconds.
2. Press **Release** and wait until the timer stops (the timing then appears in Readings). Press **L +20 cm** and repeat, for seven lengths: 0.40, 0.60, 0.80, 1.00, 1.20, 1.40 and 1.60 m. One timing per length is enough.
3. Switch the graph to **T² against L**. Export, and fit $$T^2$$ against $$L$$ on the worksheet graph with a free intercept. Record the slope, the intercept and their uncertainties, and look at the residuals. Clear.

**Part D: a biased length (about 15 minutes).**

1. Press **Length read to the bottom of the bob**. Every reading is now 3.0 cm too long (a simulated mistake). Repeat Part C step 2 at the same seven lengths, then Export.
2. Fit $$T^2$$ against $$L$$ again. Record the slope, the intercept, and where the line reaches $$T^2 = 0$$ (the intercept divided by the slope, with the sign changed).
3. Before you Clear, set **L** to 1.00 m and press **Repeat 10 times**. Calculate g from the mean period at this one length, as in Part B. Then Clear.

**Part E: a big release angle, and what was hidden (about 10 minutes).**

1. Press **Big swings, 40°** (Photogate, N = 1, L = 1.000 m). Press **Release** once. Calculate g from this period with the small angle formula.
2. Set **Release angle θ₀** to 5° and press **Release** again; calculate g the same way. Export and Clear.
3. Now check **Reveal what the simulation hid** and uncheck Blind. Press **Hand timing, 10 swings**, press **Release** once, and record the true period and that timing's error shown on the timer.

## Data

| Row | $$L$$ as read (m) | $$\theta_0$$ (°) | Timer | Swings $$N$$ | Time $$t$$ (s) | Period $$T = t/N$$ (s) | $$T^2$$ (s²) | Length read to |
|---|---|---|---|---|---|---|---|---|
| | | | | | | | | |
| | | | | | | | | |
| | | | | | | | | |

Keep one copy of the table for each export: three in Part A, one each in Parts C and D, one in Part E.

**Summary of the repeated timings**

| Copy | Setup | $$n$$ | Mean $$\bar T$$ (s) | $$s$$ (s) | $$s/\sqrt{n}$$ (s) | $$g$$ (m/s²) | $$\delta g$$ (m/s²) |
|---|---|---|---|---|---|---|---|
| A1 | Hand, 1 swing | | | | | | |
| A2 | Hand, 10 swings | | | | | | |
| A3 | Photogate | | | | | | |
| D3 | Bottom of the bob, 1.00 m | | | | | | |

## Analysis

1. Compare $$s$$ for one swing (A1) with $$s$$ of the period for 10 swings (A2). By what factor did it shrink? Explain the factor from how the stopwatch error arises.
2. For A1, how many of your single timings fall within $$\pm s$$ of the mean? Compare the standard error with $$s$$ and explain why the mean is more certain than a single timing.
3. Why is $$s = 0$$ for the photogate (A3)? What uncertainty should you quote for its period, and why is it not zero?
4. Report g from A2 and from A3 as value ± uncertainty with sensible rounding. Which term in $$\delta g/g$$ dominates in each case?
5. From the Part C fit, report $$g = 4\pi^2/k$$ ($$k$$ the slope) with its uncertainty. Is the intercept consistent with zero within its uncertainty? Do the residuals look random?
6. From Part D: compare the slope with Part C's, and the length where the line reaches $$T^2 = 0$$ with the bob's radius. Then compare g from the single length in D3 with the accepted 9.81 m/s². Which method was fooled by the bias, and which was not?
7. From Part E: by what percentage is g from the 40° release too low? Compare with the prediction $$g_{\text{small}}/g \approx 1/(1 + \theta_0^2/16)^2$$. Would timing more swings, or repeating, have fixed it?

## Uncertainty

Separate the two kinds. Random error: quote the standard error of the mean, or half the last digit when every reading is the same, and propagate it into g. Systematic error: estimate it from the physics (the bob's radius, the finite angle correction) or reveal it with a design that makes it visible, such as the intercept of a fit over a range of lengths. Do not add a systematic error into the standard error as if it were random, and do not claim a bias is absent just because the scatter is small. In this simulation the true length, true period and timing errors are known (Reveal), which lets you check your judgments; on a real bench they are not.

## Questions

1. A classmate's ten timings agree to within 0.01 s, but their g is 9.52 m/s². Give two possible causes, one of which their ten timings could never reveal.
2. You have time for 20 timings. Is it better to spend them all at one length or spread them over several lengths? Give one reason for each choice and say which you would pick.
3. Why does reading the length to the bottom of the bob change the intercept but not the slope of $$T^2$$ against $$L$$?
4. A real stopwatch user also has an average reaction delay. Why does a delay that is the same for the start and stop presses not bias the time?

## What to hand in

Prelab answers; the exported Data tables (identified as simulated data); the Summary table; the Part C and D fits with residuals; g with its uncertainty from A2, A3 and C; the bias comparisons from D and E; and answers to the Analysis items and the Questions.
