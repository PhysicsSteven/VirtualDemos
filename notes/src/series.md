---
title: Sequences and Series
level: Calculus II (OpenStax Calculus Vol 2 5.1 to 5.6) and Physics I and II (geometric sums, center of mass, electrostatic energy, statistical physics)
time: 15 to 40 minutes
---
## What students should come away with

- A sequence is a list a(n); a series is the running total of a list, S_N = a(n₀) + … + a(N). The series converges when the partial sums S_N settle on a number S.
- A geometric series a + ar + ar² + … adds to a/(1 − r) when |r| < 1. Infinitely many terms can add to a finite total: a bouncing ball makes infinitely many bounces in a finite time and distance.
- The terms must go to 0 for the series to converge (the divergence test), but that is not enough: the harmonic series 1 + 1/2 + 1/3 + … grows without bound, like ln N.
- Each test answers the question for a family of series: the integral test (compare with ∫ a(x) dx), comparison (bigger than a divergent series, or smaller than a convergent one), the ratio and root tests (eventually like a geometric series, ρ < 1 or ρ > 1; ρ = 1 says nothing), and the alternating series test (signs alternate and |a(n)| falls to 0).
- For an alternating series the error after N terms is less than the next term: |S − S_N| ≤ |a(N + 1)|. The integral test bounds the error too: ∫ from N+1 to ∞ ≤ S − S_N ≤ ∫ from N to ∞.

## Before class

Nothing to install. Projector mode enlarges the graphs and labels. Blind (Lab fold) hides the sum, the verdict and the limits so students can predict them first. The pictures across the top switch between Terms and sums, A sequence, Integral test, Comparison and Ratio and root; Play adds terms (one every 0.4 s, then tenfold every 2.5 s on a log axis, up to a million). Power series, where each term holds an x, are in Taylor Polynomials and Series.

## Running it in class

1. **The bouncing ball.** The opening setup drops a ball from 1 m; each bounce reaches 0.64 of the last height. Ask how far the ball travels in all before showing the readouts, then press Play (Q1). Bouncing ball: total time does the same for the time in the air.
2. **Zeno.** Zeno: half the rest each time. The partial sums are 1 − 1/2ᴺ (Q2).
3. **The harmonic series.** Press Harmonic: past 10 and beyond and Play. The terms shrink to zero, yet the total passes 10 at N = 12,367 (Q3). Terms that do not go to 0 shows the divergence test.
4. **Books.** Stacking books past the edge: the overhang is half the harmonic series, so a tall enough stack reaches as far as you like (Q4).
5. **The integral test.** Integral test: 1/n², π²/6, then Integral test: 1/(n ln n) diverges (Q5).
6. **Comparison and ratio.** The two comparison setups, then the three ratio setups (Q6).
7. **Alternating series.** Alternating harmonic: ln 2, Leibniz: π/4 and the Madelung constant of an ion chain: watch the zigzag and the bound in the readouts (Q7).
8. **Sequences.** The four sequence setups and the ε slider (Q8).

## Questions

**Q1.** A ball dropped from 1 m bounces back to 0.64 of its height each time. Write the total distance as 1 m plus a geometric series and sum it. How long is the ball in the air in all, with g = 9.81 m/s²? How many bounces does it make, and how can infinitely many fit in a finite time?

**Q2.** In Zeno's setup, what is S_N, and what is the smallest N with 1 − S_N below 1 mm? If the runner moves at a steady 1 m/s, how long do all the steps take?

**Q3.** The terms 1/n go to 0. Why does that not make the sum converge? Using H_N ≈ ln N + 0.5772, estimate the N where H_N passes 10, and compare with the demo's 12,367. About how many terms would it take to pass 100?

**Q4.** In a stack of books, why does book k from the top stick out 1/(2k) past the one below it? How many books do you need for the top book to clear the table edge by one full book length, and by two?

**Q5.** Use the integral test rectangles to show 1 < Σ 1/n² < 2. With N = 5, the demo gives bounds on S; what are they, and is π²/6 between them? Why does Σ 1/(n ln n) diverge although it adds only about 3.4 in a million terms?

**Q6.** Show that 1/(n(n + 1)) < 1/n² and find Σ 1/(n(n + 1)) exactly. Why does comparing 1/(2n − 1) with 1/(2n) prove divergence, while comparing it with 1/n² would prove nothing? What is ρ for 1/n!, n/2ⁿ and 1/n², and what does each value tell you?

**Q7.** For 1 − 1/2 + 1/3 − …, what is the largest the error can be after 6 terms? Read the actual error. For Leibniz's series, about how many terms give π/4 to six decimal places? For the ion chain, why do the nearest neighbors contribute 2, and why is the energy of an ion negative?

**Q8.** For (1 + 1/n)ⁿ, find N(ε) for ε = 0.05 and for ε = 0.005. Why does (−1)ⁿ n/(n + 1) have no limit? For the bounce heights 0.64ⁿ, what is the difference between the sequence converging to 0 and the series converging?

## Common misconceptions

- **"If the terms go to zero, the sum is finite."** The harmonic series is the counterexample: its terms go to zero and its partial sums grow like ln N.
- **"Infinitely many positive terms must add to infinity."** A geometric series with |r| < 1 adds to a/(1 − r); the bouncing ball stops in finite time.
- **"A sequence and a series are the same thing."** The sequence is the list of terms; the series is the list of running totals. 0.64ⁿ converges to 0 while Σ 2(0.64)ⁿ converges to 32/9.
- **"ρ = 1 means it diverges."** ρ = 1 means the ratio test cannot tell: 1/n diverges and 1/n² converges, and both have ρ = 1.
- **"Adding more terms on a computer will show whether it converges."** Σ 1/(n ln n) diverges, yet a million terms add only about 3.4; only a test can settle it.

## How the demo works

- The box is read by the shared parser (demos/lib/vdmath.js); nothing typed is run as code. n! is computed exactly for whole numbers up to 170.
- Partial sums are added in double precision with compensated (Kahan) summation, up to N = 1,000,000; the first N to pass a total is found by adding up to 10,000,000 terms.
- Each setup shows its sum as a closed form (32/9, π²/6, ln 2, e and so on), checked against what the demo finds. For a typed series the demo tries, in order, the divergence test, the ratio test, the alternating series test and the integral test, and names the one that decided; it says so when none decides (1/n^1.01, sin(n)/n²). Sums are found by direct addition (ratio test), Cohen, Rodriguez Villegas and Zagier's acceleration (alternating) or 1,000 terms plus the Euler–Maclaurin tail (integral test), to about 13 significant figures.
- A sequence's limit is read from short windows of terms at n = 10⁴, 10⁶ and 10⁸; N(ε) is checked term by term up to n = 1,000,000.
- The bouncing ball assumes a constant coefficient of restitution of 0.8 and no air resistance; real balls lose more energy on small bounces.
