# Fitting a Line and Judging the Fit
Student laboratory · Statistics for physics

Textbook: OpenStax *Introductory Statistics 2e*, §§12.1 to 12.6 (Linear Equations, Scatter Plots, The Regression Equation, Testing the Significance of the Correlation Coefficient, Prediction, Outliers). Access for free at https://openstax.org/details/books/introductory-statistics-2e.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/regression.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** under From the book, Third exam and final exam; Dive depth and dive time; Ice cream cones and temperature; Consumer Price Index, 1915 to 1999; Olympic 100 m freestyle times; under Physics lab (simulated), Spring: stretch against mass; Pendulum: T² against length; Ohm's law: V against I; Pendulum: period against bob mass; and Type your own.

**Using the demo.**

- The scatter plot shows the points (dots), the **least squares line** (amber; dashed where it runs past the data) and **your line** (violet), which you move by dragging its two round handles or the line itself. Each residual is drawn as a square; the box at the top left, **Total area of the squares**, compares the least squares total with your line's.
- In the bar above the plot, **Play** runs the shuffle test and **Reset** puts the setup back as it started. **Points** (**Move**, **Add**, **Remove**) sets what a click on the plot does. Click a point (in Move) to select it: a gray dashed line shows the fit without it.
- Under the plot: the **residual plot** (residuals y − ŷ against x, with lines at ±2s) and the **shuffle test** histogram. Below them, the cards **Squares** (which squares to draw; **Your line flat at ȳ**), **Predict** (type x, or drag the diamond on the x axis), **Points** (**Remove selected point**, **Put all points back**), **Shuffle test** (**Shuffles**, **Draw**, **New draw**) and **The view**.
- Readouts: the least squares line, **Slope b** and **Intercept a** with their standard errors, **r**, **r²**, **s, standard error of estimate**, the sums of squares, **Slope in context**, **Intercept in context**, the t test (**t**, **p value, t test**), **Critical value r\***, **Shuffle p value**, **Prediction ŷ**, and **Outliers**. The fold **Data and residuals** in the sidebar lists every point with ŷ, y − ŷ and $$\lvert y - \hat y\rvert/s$$.
- **Record reading** stores the data set and its fit; **Export to worksheet** sends the rows to Table 1.

**What the demo computes.**

- Every number is computed (demos/lib/vdstats.js). The intercept is always free. The shuffles and the simulated data are seeded, so the same **Draw** gives the same numbers every time.
- The book's data sets are cited on the page. The physics lab data are simulated (an ideal law plus random errors) and labeled so: they are not measurements.

</details>

## Goal

Fit a least squares line, read its slope and intercept in context with their uncertainties, decide whether the correlation is significant three ways, tell a prediction from an extrapolation, find an outlier with the residual plot and judge how much it pulls the line, then use the same tools to measure g with a pendulum.

## Background

**The least squares line.** For data pairs (x, y), a line $$\hat y = a + bx$$ predicts ŷ at each x. The **residual** of a point is $$e = y - \hat y$$, how far the point sits above (+) or below (−) the line. The least squares line is the one line that makes the sum of squared residuals

$$\text{SSE} = \sum (y - \hat y)^2$$

as small as possible. Draw each residual as a square: SSE is the total area of the squares, and every other line has more. Its slope and intercept are

$$b = \frac{\sum (x - \bar x)(y - \bar y)}{\sum (x - \bar x)^2},\qquad a = \bar y - b\,\bar x .$$

**Reading b and a in context.** The slope b is the change in predicted y for each one unit increase in x, in units of y per unit of x. The intercept a is the predicted y at x = 0; it means something only when x = 0 is inside (or near) the data. Otherwise it only sets the height of the line.

**r, r² and s.** The correlation coefficient r (between −1 and 1) measures how closely the points follow a straight line; its sign is the sign of the slope. r² is the share of the variation in y that the line explains: $$r^2 = 1 - \text{SSE}/\sum (y - \bar y)^2$$, where $$\sum (y - \bar y)^2$$ is the sum of squares of the flat line at ȳ. The **standard error of estimate**

$$s = \sqrt{\frac{\text{SSE}}{n - 2}}$$

is the typical size of a residual, in units of y. It has n − 2 in the denominator because the line used up two numbers, a and b.

**Uncertainty of the slope and intercept.** A physics lab reports b and a with their standard errors,

$$\text{SE}(b) = \frac{s}{\sqrt{\sum (x - \bar x)^2}},\qquad \text{SE}(a) = s\sqrt{\frac1n + \frac{\bar x^2}{\sum (x - \bar x)^2}} .$$

A quantity worked out from the slope, such as $$g = 4\pi^2/b$$, carries the same relative uncertainty: $$\text{SE}(g) = g\,\text{SE}(b)/b$$.

**Is r significant?** A sample can show some r even when x and y are unrelated. The book tests $$H_0: \rho = 0$$ against $$H_a: \rho \ne 0$$ two ways, at the 5 % level:

- **p value:** $$t = \dfrac{r\sqrt{n-2}}{\sqrt{1 - r^2}}$$ with df = n − 2; r is significant when p < 0.05.
- **Critical value:** r is significant when $$\lvert r\rvert$$ is larger than the 95 % critical value r* for df = n − 2, from the book's table (for df = 9, r* = 0.602).

The two always agree. A third way, the **shuffle test**, needs no table: keep the x values, shuffle the y values among them at random (which breaks any real link), compute r, and repeat a thousand times. The share of shuffles with $$\lvert r\rvert$$ at least as large as the real $$\lvert r\rvert$$ is the shuffle p value. If shuffling rarely matches the real r, the link is real.

**Prediction and extrapolation.** Using the line at an x inside the range of the data is an interpolation. Using it outside that range is an **extrapolation**: the data say nothing about whether the line still holds there.

**Outliers and influential points.** The book's rule (§12.6): a point is an **outlier** when its residual is at least 2s in size, $$\lvert y - \hat y\rvert \ge 2s$$. On the residual plot, it sits outside the lines at ±2s. A point is **influential** when removing it changes the line a lot. An outlier is removed only for a reason (a recording error, a different kind of case), never just because it spoils the fit.

**A pendulum.** For a simple pendulum of length L, $$T = 2\pi\sqrt{L/g}$$, so $$T^2 = (4\pi^2/g)\,L$$: T² against L is a straight line through the origin with slope $$4\pi^2/g$$. A free intercept lets the data test whether it really goes through the origin.

## Before the lab

1. By hand, for the five points (1, 2), (2, 3), (3, 5), (4, 4), (5, 6): find x̄, ȳ, $$\sum(x - \bar x)^2$$ and $$\sum(x - \bar x)(y - \bar y)$$, then b and a.
2. A study with n = 11 finds r = 0.55. Using the critical value for df = 9 in Background, is r significant? What does that say about the population?
3. For a pendulum, what slope of T² against L do you expect with g = 9.81 m/s², in s²/m?
4. Predict, before you open the demo: in the book's third exam and final exam data, one student scored 65 on the third exam and 175 on the final, high above the trend. If that point is removed, will the slope get larger or smaller, and will r move toward 1 or toward 0? Give a reason from a sketch.

## Safety

No hazards in the virtual lab.

## Procedure

**A. Fit by eye first.** Press the **Third exam and final exam** setup. Open **Lab** at the bottom of the sidebar and tick **Blind**: the least squares line and its numbers are hidden. Your violet line starts flat at ȳ; write its sum of squares (**Sum of squares, your line** in Readouts, or **Your line** in the box on the plot) as Table 4, row 1, and copy **Σ(y − ȳ)², your line flat at ȳ** into the last column. Now drag the two round handles of your line until you think it fits best, and write its sum of squares as row 2. Try once more to make it smaller (row 3). Untick **Blind**, and copy **Sum of squares, least squares** into the third column of every row.

**B. Fit and test.** Still on Third exam and final exam, press **Record reading**. Copy **r**, **t**, **p value, t test (two sided)** and **Critical value r\*** into Table 2, row 1. Make sure **Shuffles** is 1,000 and **Draw** is 1 in the Shuffle test card, then press **Play** and wait until the note says the shuffle test is done (about seven seconds). Copy **Shuffle p value** into Table 2.

**C. Predict.** In the **Predict** card, type 73 in the **x =** box and copy **Prediction ŷ** and whether it is inside the data (the readout **Inside or outside the data?**) into Table 3. Do the same for x = 90.

**D. Find the outlier.** Look at the residual plot under the scatter plot and open **Data and residuals** in the sidebar. Find the point with the largest $$\lvert y - \hat y\rvert/s$$ and write its x, y, residual y − ŷ and $$\lvert y - \hat y\rvert/s$$ in Table 5, with 2s from the **Outliers** readout. Click that point on the scatter plot to select it (the gray dashed line is the fit without it), then press **Remove selected point** in the **Points** card. Press **Record reading**, copy r, t, p and the critical value into Table 2, row 2 (press **Play** again for the shuffle p), and predict at x = 73 again (Table 3).

**E. A pendulum.** Press **Pendulum: T² against length** (simulated, Draw 1). Press **Record reading**, and fill Table 2, row 3 (press **Play** for the shuffle p). Predict T² at L = 0.55 m and at L = 3.00 m (Table 3). Then press **Pendulum: period against bob mass** (simulated, Draw 1), press **Record reading**, and fill Table 2, row 4 (press **Play** for the shuffle p). Press **Export to worksheet**: the four fits go to Table 1.

## Data

Table 1. Least squares fits.

| Reading | Data set | n | Slope b | SE of slope | Intercept a | SE of intercept | r | s |
|---|---|---|---|---|---|---|---|---|
| | | | | | | | | |
| | | | | | | | | |
| | | | | | | | | |
| | | | | | | | | |

Table 2. Testing r.

| Data set | r | t | p value, t test | Critical value r* | Shuffle p value |
|---|---|---|---|---|---|
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |

Table 3. Predictions.

| Data set | x | Prediction ŷ | Inside the data or extrapolation |
|---|---|---|---|
| | | | |
| | | | |
| | | | |
| | | | |
| | | | |

Table 4. Your line against the least squares line (third exam and final exam).

| Try | Sum of squares, your line | Sum of squares, least squares | Σ(y − ȳ)² |
|---|---|---|---|
| Flat at ȳ | | | |
| By eye | | | |
| Second try | | | |

Table 5. The point farthest from the line (third exam and final exam, all 11 points).

| x | y | Residual y − ŷ | Residual/s | 2s |
|---|---|---|---|---|
| | | | | |

## Analysis

1. From Table 4, by what factor was your best line's sum of squares larger than the least squares sum? Compute $$r^2 = 1 - \text{SSE}/\sum(y - \bar y)^2$$ from the least squares row of Table 4 and compare it with the square of r in Table 1, row 1.
2. Write the third exam and final exam line from Table 1, row 1, as ŷ = a + bx with units. In one sentence each, say what the slope means for a student, and whether the intercept means anything here (look at the range of the third exam scores).
3. From Table 1, row 1, compute $$t = r\sqrt{n-2}/\sqrt{1 - r^2}$$ by hand and compare it with t in Table 2. Is r significant by the p value? By the critical value? Do the shuffle p and the t test p agree to within 0.01?
4. Which of your exam predictions in Table 3 can you trust, and which not? Why is the prediction at x = 90 meaningless here, even before any statistics?
5. Was the point you found in part D an outlier by the book's rule? By what percentage did the slope change when you removed it (Table 1, rows 1 and 2)? Was it influential? Compare with your prediction in Before the lab 4. Would you remove it from a real study? Say what you would need to know first.
6. From the pendulum slope in Table 1, row 3, compute $$g = 4\pi^2/b$$ and its standard error $$g\,\text{SE}(b)/b$$ (the **From the slope** readout lets you check your arithmetic). How many standard errors is it from 9.81 m/s²? Is the intercept within 2 SE of zero, as the physics says it should be?
7. For the bob mass data, is r significant (Table 2, row 4)? Does a result that is not significant prove that the bob mass has no effect on the period? What does it allow you to say?

## Uncertainty

The book's data are fixed, so their fits come out the same every time. The pendulum data are simulated with a random timing error of about 0.010 s per period, so another **Draw** gives a slightly different slope: the standard error of the slope says by how much. Press **New draw** two or three times on the pendulum setup and see whether the values of g you get stay within about two standard errors of each other. The shuffle p value is itself an estimate from 1,000 shuffles, uncertain by about $$\sqrt{p(1-p)/1000}$$.

## Questions

1. Press **Consumer Price Index, 1915 to 1999**. r is large and significant and there are no outliers, yet the book says a line is the wrong model. What in the residual plot shows it?
2. Your pendulum prediction at L = 3.00 m is an extrapolation. A statistician would not trust it; a physicist might. What does the physicist know that the data alone do not say?
3. In your own words, explain why shuffling the y values among the x values shows what r looks like when there is no relationship.

## What to hand in

Before the lab answers, Tables 1 to 5, and your answers to the Analysis and Questions. Say which data are from the book (cite it) and which are simulated by the demo.
