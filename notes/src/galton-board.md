---
title: Galton Board
level: Intro thermodynamics and statistics for physics (algebra based)
time: 15 to 25 minutes
---
## What students should come away with

- A single random event cannot be predicted, but the pattern of many is: the fraction in each bin settles toward a fixed probability as the number of balls grows.
- The bin a ball lands in counts its right bounces, so the counts follow the binomial distribution, with mean np and standard deviation √(np(1 − p)).
- The scatter of a measured fraction shrinks as 1/√N: four times as many balls halve it.
- The middle bins fill fastest because many more paths lead there. Counting paths (microstates) is the idea behind entropy, S = k_B ln Ω.
- With many rows the binomial looks like a normal (bell) curve, and the net steps of a ball are a one dimensional random walk whose spread grows as √n.

## Before class

Students should know what a probability and an average are. **Drop 1**, **Drop 10**, **Drop 100** and **Stream** release balls; **Empty the bins** starts over. The card sets the number of rows n and the chance p of bouncing right, and turns on the expected counts, the normal curve, fractions, the random walk labels, and **Skip the fall** for fast runs. Changing n or p empties the bins. **Blind** in **Lab** hides the expected values.

## Running it in class

1. **12 rows, fair.** Ask Q1 before dropping anything, then drop 100 at a time up to about 1000.
2. **One row: a coin toss.** Drop 10 several times, then 1000 (Q2).
3. **Four rows.** Compare the counts with 1 : 4 : 6 : 4 : 1 and count the paths by hand (Q5).
4. **Tilted board, p = 0.7.** Ask where the pile will sit and how wide it will be (Q3).
5. **20 rows: the bell curve.** Turn on the normal curve and the random walk labels (Q4, Q6).

## Questions

**Q1.** On the fair 12 row board, which bin will collect the most balls? Out of 1000 balls, about how many do you expect in bin 6, and in bin 0? Drop 1000 and compare.

**Q2.** With one row (a single coin toss), drop 10 balls several times and note the fraction that go right. Then drop 1000. How large a scatter in the fraction do you expect for 10 balls and for 1000?

**Q3.** Tilt the board so p = 0.7 with 12 rows. Predict the mean bin and the standard deviation, then drop at least 500 balls and compare with the readouts.

**Q4.** With 20 fair rows, what fraction of the balls should land within one standard deviation of the middle bin? Why is it not the 68% quoted for a normal distribution?

**Q5.** On the four row board, list the paths that end in bin 1 and in bin 2. How many of the 16 equally likely paths end in each bin? How is this like counting the microstates of a gas?

**Q6.** Turn on the random walk labels with 20 fair rows. What are the expected mean and spread of the net number of steps? How would the spread change with 80 rows? What does this say about how far a diffusing molecule gets in four times the time?

## Common misconceptions

- **"After five lefts in a row a right is due."** Every peg is independent; the board has no memory.
- **"With more balls the counts get closer to the expected counts."** The fractions do; the differences in counts actually grow, as √N.
- **"The middle is special."** Each single path is equally likely when p = 0.5; the middle bins simply have the most paths.
- **"The normal curve is exact."** It approximates the binomial, best when np(1 − p) is large and worst for rare events near p = 0 or 1.

## Physics behind the demo

- P(k) = n!/(k!(n − k)!) pᵏ(1 − p)ⁿ⁻ᵏ for k right bounces in n rows, mean np, standard deviation √(np(1 − p)). The sample standard deviation divides by N − 1.
- Each peg sends a ball right with probability p, independently; balls do not collide, and the fall drawn between pegs is a picture of the choice, not a simulation of bouncing. Random numbers come from a seeded generator (mulberry32), so the counts are simulated.
- The normal curve uses the binomial mean and standard deviation, one bin wide per unit of k. With net steps on, bin k is labelled 2k − n.
- Tests (curriculum/validation/test_galton_board.cjs): Pascal's triangle rows, the 924 paths to bin 6, normalization, mean and variance for many boards, the preset numbers, and 200 000 seeded balls against the binomial.

## Going further

- Gas in a Box measures diffusion from the mean square displacement of real molecules, the same √t spreading as the random walk.
- Entropy and the Second Law counts the microstates of molecules in the two halves of a box, the same counting as the board's paths.
