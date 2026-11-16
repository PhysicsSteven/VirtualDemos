---
title: Measurement Uncertainty
level: Physics I (Vol 1 1.6 and 15.4) and any lab course
time: 10 to 25 minutes
---
## What students should come away with

- Random error shows up as scatter and shrinks when you average: the standard error of the mean is s/√n. A bias produces no scatter at all, so repeating can never reveal it or reduce it.
- How you design a measurement matters as much as how often you repeat it. Timing 10 swings at once beats timing one swing 10 times, and a fit over a range of lengths exposes a length offset that any number of repeats at one length hides.
- An instrument with no visible scatter (the photogate) still has an uncertainty: its resolution.
- An approximation in the model (the small angle formula) is a bias too.

## Before class

Use Projector mode. The demo opens on Hand timing, one swing. Every instrument error is simulated and labeled on the page; say so to the class. Blind in the Lab fold hides g and the predicted periods, so students can work them out. Reveal (also in the Lab fold) shows what a real experiment never tells you: the true length, the true period and each timing's error. The random draws repeat when the page is reloaded, so a class run gives the same numbers every time you rehearse it.

## Running it in class

1. **One swing by hand.** Press Release and let the class watch one timing. Ask what the next timing will read. Press Repeat 10 times and look at the dot plot: the mean, the ± s lines and the narrow ± s/√n band (Q1).
2. **Ten swings by hand.** Press Hand timing, 10 swings, then Repeat 10 times. The period's scatter is about ten times smaller (Q2).
3. **The photogate.** Press Photogate and Repeat 10 times: one tall stack of identical readings. Ask what uncertainty to quote (Q3).
4. **A bias.** Press Length read to the bottom of the bob, time 10 swings at seven lengths (L +20 cm, 16× speed), and switch the graph to T² against L. The line misses the origin; ask where it crosses T² = 0 and why (Q4).
5. **Big swings.** Press Big swings, 40° and compare g from the small angle formula with 9.81 m/s² (Q5).

## Questions

**Q1.** Ten hand timings of one swing of a 1.000 m pendulum have a mean of 2.012 s and s = 0.071 s. What is the standard error? About how many of the ten single timings would you expect within ± s of the mean? Report the period as mean ± standard error.

**Q2.** Each stopwatch press is early or late by a random amount with a standard deviation of 0.05 s. What is the standard deviation of a timed interval? Of the period, when the interval is 10 swings? How many single swing timings would you have to average to do as well as one timing of 10 swings?

**Q3.** Ten photogate timings all read 2.007 s. What uncertainty do you quote for the period, and for g from L = 1.000 ± 0.0005 m?

**Q4.** Every length is read to the bottom of a 6.0 cm bob. Show that the data still lie on a straight line in T² against L, and find its slope and where it crosses T² = 0. What value of g does a single length of 1.00 m give with the small angle formula?

**Q5.** Released from 40°, the period is 1.0313 times 2π√(L/g). By what percentage is g from the small angle formula too low? Would timing more swings help?

## Common misconceptions

- **"More repeats fix everything."** Repeats shrink random error only. The bottom of the bob mistake gives a perfectly repeatable wrong answer.
- **"No scatter means no uncertainty."** Identical photogate readings still carry half the last digit.
- **"s is the uncertainty of the mean."** s describes one reading; the mean's uncertainty is s/√n.
- **"A good straight line proves the measurement right."** The offset data fit a straight line just as well; only the intercept gives the mistake away. A big release angle shifts every point by the same factor and leaves no trace in the residuals at all.

## How the demo works

- The pendulum is exact: a point bob on a light string with no drag, g = 9.81 m/s², and the period at any angle from the arithmetic geometric mean (the complete elliptic integral). The swing on screen is the full equation θ″ = −(g/L) sin θ, stepped with fourth order Runge–Kutta.
- Hand stopwatch: each of the two presses is early or late by a random amount from a normal distribution with standard deviation 0.05 s (cut off at four standard deviations); a delay common to both presses cancels and is left out. The display reads to 0.01 s. Photogate: exact, rounded to 0.001 s.
- Lengths are set as meter stick readings, in whole centimeters. Read to the bottom of the bob, the true length is the reading minus 3.0 cm.
- Random draws come from a seeded generator: the same steps from the same draw set give the same numbers. New random draws in the Lab fold moves to the next set.
- The Analysis section uses the standard error of the mean (or half the timer's last digit divided by N, if larger) and half a millimeter for the length, and an unweighted least squares line with a free intercept for the fit.
