# Galton Board: Chance, the Binomial and the Bell Curve
Student laboratory · Thermodynamics

Textbook: OpenStax *University Physics*, Vol. 2, §4.7. Access for free at https://openstax.org/details/books/university-physics-volume-2.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/galton-board.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** 12 rows, fair; One row: a coin toss; Four rows; Tilted board, p = 0.7; Rare event, p = 0.1; 20 rows: the bell curve.

**Using the demo.**

- Balls drop from the funnel through n rows of pegs. At each peg a ball goes right with probability p and left with probability 1 − p, independently of every other peg and every other ball. The bin a ball lands in, counted from the left starting at 0, is its number of right bounces k.
- The random choices are made by the computer, so the counts are simulated data. The fall drawn between the pegs is only a picture of each choice.
- The card sets the rows and p, and can show the expected counts, a normal curve, fractions instead of counts, and bins labeled by net steps 2k − n. Skip the fall drops balls straight into the bins. Changing the rows or p empties the bins.
- Record reading stores the number of rows, p, the number of balls N, the sample mean of k and the sample standard deviation s of k (dividing by N − 1). Export to worksheet sends the readings to the Data table below; Clear starts a new series.

</details>

## Goal

Find how the outcome of many random choices is distributed, measure how its mean and spread depend on the number of choices and on the chance of each, and see why the most likely outcome is the one with the most ways to happen.

## Background

A ball that makes n independent left or right choices, going right with probability p, lands in bin k with probability

$$P(k) = \frac{n!}{k!\,(n-k)!}\,p^k (1-p)^{n-k}.$$

The factor $$n!/(k!\,(n-k)!)$$ counts the paths that end in bin k, and $$p^k(1-p)^{n-k}$$ is the probability of any one of them. This is the binomial distribution. Its mean and standard deviation are

$$\mu = np, \qquad \sigma = \sqrt{np(1-p)}.$$

The sample mean of N balls scatters about μ by about $$\sigma/\sqrt{N}$$, so the scatter falls as more balls are dropped. When np(1 − p) is large the distribution is close to a normal curve with the same μ and σ.

In a gas, a microstate says where every molecule is, and a macrostate says only how many are in each place. Counting paths to a bin is counting microstates for a macrostate, and the entropy is $$S = k_B \ln \Omega$$ with Ω that count.

## Before the lab

1. For four fair rows, list every path that ends in bin 2. What is P(2)?
2. For 12 fair rows, find the mean, the standard deviation, and the probabilities of bin 6 and bin 0.
3. Predict the mean and standard deviation for 12 rows with p = 0.7.
4. Make a call before you stream any balls: compare a fair board with 16 rows of pegs and one with 4 rows. On the 16 row board, is the standard deviation of the landing bin about the same, about twice as large, or about four times as large, and what makes you think so?

## Safety

No hazards in the virtual lab.

## Procedure

**Number of balls.** Press the 12 rows, fair button and check Skip the fall on the card, so drops land at once. Press Drop 100 once and press Record reading. Without emptying the bins, press Drop 100 until there are 400 balls and record again, then 1600, then 6400 (the Balls N column of the readings shows the count). At 1600 balls, before dropping more, write the count in every bin (shown under the bins) in Table 2. Press Export to worksheet, then Clear.

**Number of rows.** With Chance of bouncing right p at 0.50, set Rows of pegs n to 4 (changing the rows empties the bins), press Stream, press Stop once the count passes 2000, and press Record reading. Repeat for 8, 12, 16 and 20 rows. Press Export to worksheet, then Clear.

**Chance of bouncing right.** With Rows of pegs n at 12, set Chance of bouncing right p to 0.10 (the slider moves in steps of 0.01; arrow keys help), stream at least 2000 balls and record a reading. Repeat for p = 0.30, 0.50, 0.70 and 0.90. Press Export to worksheet.

## Data

Table 1. Runs of the board.

| Reading | Rows n | Chance p | Balls N | Sample mean of k | Sample standard deviation s | s² | np(1 − p) |
|---|---|---|---|---|---|---|---|
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |

Fill in s² and np(1 − p) for every reading. In Table 2, fill in P(k) for bins 0 to 6 only; by symmetry, P(12 − k) = P(k) for the other bins.

Table 2. Counts in each bin, 12 fair rows, 1600 balls.

| Bin k | Count | Fraction | P(k) |
|---|---|---|---|
| 0 | | | |
| 1 | | | |
| 2 | | | |
| 3 | | | |
| 4 | | | |
| 5 | | | |
| 6 | | | |
| 7 | | | |
| 8 | | | |
| 9 | | | |
| 10 | | | |
| 11 | | | |
| 12 | | | |

## Analysis

1. For the number of balls series, how far is each sample mean from 6? Compare the distances by eye: does quadrupling N roughly halve them?
2. Compare the fractions in Table 2 with P(k). Which bins agree best, and which worst compared with their size?
3. For the number of rows series, plot s² (vertical) against n (horizontal). What straight line do you expect, and what slope do you find?
4. For the chance series, plot the sample mean (vertical) against p (horizontal), and s² (vertical) against np(1 − p) (horizontal). Find the slope of each and compare with the binomial.
5. Using the bins in Table 2, find the fraction of the balls within one standard deviation (1.73) of the mean. Compare with the binomial (bins 5, 6 and 7) and with the 68% of a normal curve.

## Uncertainty

The sample mean of N balls has a standard error of about $$s/\sqrt{N}$$. Find it for your 400 and 6400 ball readings, and decide whether each sample mean agrees with 6 within two standard errors.

## Questions

1. After five balls in a row have gone into the right half, is the next ball more likely to go left? Explain.
2. Your 4 row and 16 row readings in Table 1 settle Before the lab 4: by what factor did s grow when the rows went up four times? Explain that factor from the independence of the bounces (what adds from one row to the next, the deviations or their squares?). Then check Label bins by net steps (random walk) on the card and use the same reasoning to say how much farther a molecule diffusing for four times as long gets.

## What to hand in

Prelab answers, the tables with their graphs, your slopes compared with the binomial, the standard errors, and answers to the questions. Identify simulated data.
