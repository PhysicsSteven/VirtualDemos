---
title: Linear Regression and Correlation
level: Statistics (OpenStax Introductory Statistics 2e 12.1 to 12.9) and every physics lab that fits a straight line (Hooke's law, T² against length, Ohm's law)
time: 15 to 40 minutes
---
## What students should come away with

- The least squares line ŷ = a + bx is the one line that makes the sum of the squared residuals, SSE = Σ(y − ŷ)², as small as it can be. The demo draws each residual as a square, so SSE is their total area, and no line you drag can beat it.
- r measures how closely the points follow a line, from −1 to 1, and r² is the share of the spread in y that the line accounts for: r² = 1 − SSE/Σ(y − ȳ)².
- A correlation is significant when it is unlikely to come from data with no link at all: the book's t test with n − 2 degrees of freedom, its table of critical values, or a shuffle test all ask the same question.
- A big r does not prove a line is the right model: the residual plot does. A curve in the residuals means a curve in the data.
- An outlier (a residual of at least 2s, the book's rule) can pull the line hard. Predicting outside the data (extrapolation) can give answers that make no sense.
- In a physics lab the slope is the measurement: k = g/b for a spring, g = 4π²/b for T² against L, R = b for Ohm's law, each with its standard error. The intercept is left free and should come out within its uncertainty of zero.

## Before class

Nothing to install. The Setups list has five data sets from the book (Third exam and final exam, Dive depth and dive time, Ice cream cones and temperature, Consumer Price Index, 1915 to 1999, Olympic 100 m freestyle times), four simulated physics labs (Spring: stretch against mass, Pendulum: T² against length, Ohm's law: V against I, Pendulum: period against bob mass) and Type your own. The Points switch (Move, Add, Remove) sets what a click does. The Squares card draws the residual squares of the Least squares line, Your line, Both or None, and Your line flat at ȳ puts your line back at the mean. Predict takes an x (or drag the diamond on the x axis). Click a point to select it and see the line without it; Remove selected point and Put all points back. The Shuffle test card sets the number of Shuffles; Play builds the histogram of r. Draw and New draw give another set of simulated lab readings. Blind, in the Lab fold, hides the least squares line and its numbers so students can fit by eye first. The Handout and worksheet link opens the regression fit worksheet.

## Running it in class

1. **Beat the least squares line.** Open on **Third exam and final exam** with Blind on. Ask a student to drag Your line to the best fit by eye, then turn Blind off and compare the two totals of square area (Q1).
2. **Is r significant?** Read r, the critical value and the p value, then press Play for the shuffle test (Q2).
3. **The outlier.** Click the point (65, 175) and read the line without it. Predict at x = 73 both ways (Q3).
4. **Extrapolation.** **Dive depth and dive time** and **Ice cream cones and temperature**: drag the diamond out of the data (Q4).
5. **The residual plot.** **Consumer Price Index, 1915 to 1999**, then **Olympic 100 m freestyle times** (Q5).
6. **A physics lab.** **Spring: stretch against mass** and **Pendulum: T² against length**: read k or g from the slope and check the intercept (Q6).
7. **No relation at all.** **Pendulum: period against bob mass**, then New draw a few times (Q7).

## Questions

**Q1.** In Third exam and final exam, Your line starts flat at the mean final score, ȳ = 160.45 points. Its squares add up to Σ(y − ȳ)² = 4,326.7, and the least squares squares to SSE = 2,424.3. Find r² from these two numbers. Then drag your line anywhere you like: can you get below 2,424.3? Why not?

**Q2.** For the same 11 students, r = 0.6631. The book's 95 % critical value for df = 9 is 0.602 and the t test gives p = 0.026. Is the correlation significant at the 5 % level? Press Play for the shuffle test: what does each shuffle do to the data, and why should its p value land near the t test's?

**Q3.** The least squares line is ŷ = −173.51 + 4.83x and s = 16.4. The student at (65, 175) has a residual of about 35: is that an outlier by the book's rule? Select the point: without it the line is ŷ = −355.19 + 7.39x and r = 0.9121. Predict the final score for a third exam score of 73 with and without the point. Should you delete it?

**Q4.** The dive times give ŷ = 127.24 − 1.11x (depth in feet, time in minutes), measured from 50 ft to 100 ft. What does the line predict at 110 ft, and how far can you trust it? For the ice cream cones, ŷ = −567.48 + 9.78x: at what noon temperature does the line predict zero cones? What is wrong with a prediction at 50 °F?

**Q5.** The Consumer Price Index from 1915 to 1999 has r = 0.8694, a p value far below 0.05, and no point 2s from the line. Look at the residual plot: what shape do the residuals make, and what does that tell you about the model? For the Olympic times, in what year does the line predict a winning time of zero?

**Q6.** Spring: stretch against mass, Draw 1, gives a slope b = 0.376 m/kg. Show that the spring constant is k = g/b and find it. The demo gives k = 26.09 ± 0.88 N/m against the 25.0 N/m it was simulated with: how many standard errors apart are they? The intercept is 0.0025 ± 0.0032 m: what does Hooke's law say it should be, and does it agree? Why fit with a free intercept rather than forcing the line through the origin?

**Q7.** Pendulum: period against bob mass, Draw 1, has r = 0.1265 and p = 0.73. What does physics say the slope should be? Press New draw again and again: about how often should a draw give a significant r at the 5 % level when there is no link at all? (In the demo's first 1,000 draws, 50 do; Draw 18 is the first.)

## Common misconceptions

- **"A large r means a straight line is the right model."** The CPI data have r = 0.8694 and a clear U in the residuals: a curve fits better.
- **"Significant means strong."** Significance only says the link is unlikely to be chance. With many points a weak r can be significant; with few, a strong one may not be.
- **"Correlation means one causes the other."** The line describes the data; it cannot say why they move together.
- **"Outliers should be deleted."** An outlier is a point to check. Delete it only for a reason (a mistake in the reading), never because it spoils the fit.
- **"The line holds everywhere."** Outside the data the line can predict negative cones or a swim in no time at all.
- **"Physics says the line goes through zero, so force it there."** Fit with a free intercept and check that it comes out within its uncertainty of zero; a forced line hides an offset in the apparatus.

## How the demo works

- Every number comes from the shared statistics library (demos/lib/vdstats.js): the least squares slope and intercept, r, r², s = √(SSE/(n − 2)), the standard errors of the slope and intercept, and the t test t = r√(n − 2)/√(1 − r²) with df = n − 2. The 95 % critical value of r is t\*/√(t\*² + df); it matches the book's table to the three decimals printed there, except at df = 11, where the table prints 0.555 and the exact value is 0.553.
- Outliers follow the book's rule (12.6): a residual of at least 2s. The dashed lines are ŷ ± 2s.
- The shuffle test is not in the book: it keeps the x values, shuffles the y values among them, and counts the share of shuffles with |r| at least the real |r|. Shuffles and simulated data are seeded, so the same Draw gives the same numbers on every computer.
- The simulated labs add normal errors to the ideal law: k = 25.0 N/m, g = 9.81 m/s², R = 47.0 Ω, and pendulum timing errors of 0.010 s. They are labeled simulated.
- The book's data sets are from OpenStax Introductory Statistics 2e, chapter 12, cited on each setup.
