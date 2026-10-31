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
- The card sets the rows and p, and can show the expected counts, a normal curve, fractions instead of counts, and bins labelled by net steps 2k − n. Skip the fall drops balls straight into the bins. Changing the rows or p empties the bins.
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
4. If 100 balls give a sample mean within about 0.17 of the true mean on 12 fair rows, how many balls would you need to get within about 0.04?

## Safety

No hazards in the virtual lab.

## Procedure

**Number of balls.** Use 12 fair rows. Drop 100 balls and record a reading. Without emptying the bins, keep dropping until there are 400 balls and record again, then 1600, then 6400. Export the readings, then Clear. Write down the counts in every bin for the 1600 ball reading (you can read them under the bins) in Table 2.

**Number of rows.** With p = 0.5, drop at least 2000 balls and record a reading for 4, 8, 12, 16 and 20 rows (changing the rows empties the bins). Export the readings, then Clear.

**Chance of bouncing right.** With 12 rows, drop at least 2000 balls and record a reading for p = 0.1, 0.3, 0.5, 0.7 and 0.9. Export the readings.

## Data

Table 1. Runs of the board.

| Reading | Rows n | Chance p | Balls N | Sample mean of k | Sample standard deviation s | s² | np(1 − p) |
|---|---|---|---|---|---|---|---|
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |

Fill in s² and np(1 − p) for every reading.

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

1. For the number of balls series, how far is each sample mean from 6? Plot the distance against $$1/\sqrt{N}$$, or compare the distances by eye: does quadrupling N roughly halve them?
2. Compare the fractions in Table 2 with P(k). Which bins agree best, and which worst compared with their size?
3. For the number of rows series, plot s² against n. What straight line do you expect, and what slope do you find?
4. For the chance series, plot the sample mean against p and s² against np(1 − p). Find the slope of each and compare with the binomial.
5. Using the bins in Table 2, find the fraction of the balls within one standard deviation (1.73) of the mean. Compare with the binomial (bins 5, 6 and 7) and with the 68% of a normal curve.

## Uncertainty

The sample mean of N balls has a standard error of about $$s/\sqrt{N}$$. Find it for your 400 and 6400 ball readings, and decide whether each sample mean agrees with 6 within two standard errors.

## Questions

1. After five balls in a row have gone into the right half, is the next ball more likely to go left? Explain.
2. Why does the middle bin fill fastest, although every single path is equally likely when p = 0.5?
3. Turn on the net step labels. The spread of the net steps after n steps grows as $$\sqrt{n}$$. Use that to explain why a molecule diffusing for four times as long gets only twice as far.
4. For 12 fair rows, the middle bin has 924 paths and bin 0 has one. Find $$\ln\Omega$$ for each. How does this match the idea that a gas spreads out and does not come back by itself?

## What to hand in

Prelab answers, the tables with their graphs, your slopes compared with the binomial, the standard errors, and answers to the questions. Identify simulated data.
