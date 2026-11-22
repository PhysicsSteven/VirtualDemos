# Dice and Cards: Predict, Simulate, Compare
Student laboratory · Statistics for physics

Textbook: OpenStax *Introductory Statistics 2e*, §§3.6 (Probability Topics), 4.1 and 4.2 (the probability distribution function, mean and standard deviation), 4.3 and 4.5 (binomial and hypergeometric distributions), 4.7 (Discrete Distribution, Playing Card Experiment) and 4.8 (Discrete Distribution, Dice Experiment Using Three Regular Dice). Access for free at https://openstax.org/details/books/introductory-statistics-2e.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/chance-lab.html?ws=ws-probability)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Two dice: sums and doubles; Three dice: bet on a number; One card: hearts and face cards; Ten cards with replacement; Ten cards without replacement; Cup of candies with replacement; Cup of candies without replacement.

**Using the demo.**

- The green table shows the last trial: the dice rolled, the cards dealt (the first two tagged 1st and 2nd) or the two candies drawn. One trial of **Ten cards with replacement** is ten cards, each put back and shuffled before the next; **Ten cards without replacement** deals ten cards from one deck. The bar above the table (**Experiment**) shows the number of dice or cards and the **With replacement** box.
- **Play** runs trials at the rate in **Trials a second**; **Step** runs one; **Run 10**, **Run 100**, **Run 1,000** and **Run 10,000** run that many at once. **Reset** clears every trial and starts the same draw set again. The trials are simulated from a seeded random number generator, so **Draw set 1** (shown in the right panel, under the setup's description) always gives the same trials; **New draw** moves to another set. Use draw set 1 throughout this worksheet.
- The switch under the table picks the view: **Events** (event A and event B, with a Venn diagram, a tree diagram, a contingency table and the rules of probability), **Random variable** (the probability distribution function of X as a table and as bars: outlined bars are P(x), filled bars the relative frequencies of your trials) and **Long run** (a running relative frequency or average against the number of trials).
- Readouts: **Trials**, the **Last trial**, P(A), P(B), P(A and B) and P(B given A) beside their relative frequencies, **Expected value μ** and **Average x̄**, **Standard deviation σ** and **Sample SD s**, and for three dice **Expected profit μ_Y** and **Average profit ȳ**.
- **Record reading** records what the view on show holds: on **Random variable**, one row for each value of x; on **Events**, one row with the probabilities and relative frequencies; on **Long run**, one row with the averages. **Export to worksheet** sends the rows to the matching Data table below; **Clear** starts a new series. Press Clear after each export.
- These are simulated trials, not real dice and cards: the probabilities they are compared with are exact (the demo counts every equally likely outcome).

</details>

## Goal

Predict the distribution of a count (diamonds in ten cards, matching dice in a betting game) from the binomial and hypergeometric rules, then simulate it and compare relative frequencies, means and standard deviations with the predictions; see what drawing without replacement changes; and watch the average profit of a game settle toward its expected value.

## Background

**Probability as a long run relative frequency.** If an experiment is repeated n times and an event A happens $$n_A$$ times, its relative frequency is $$n_A/n$$. As n grows, the relative frequency settles toward the probability P(A): this is the law of large numbers (Introductory Statistics §3.1). It does not settle quickly. A relative frequency from n trials typically misses P(A) by about its **standard error**,

$$SE = \sqrt{\frac{P(A)\,[1 - P(A)]}{n}},$$

so four times as many trials halve the typical miss.

**Conditional probability and independence.** The probability of B given that A happened is $$P(B \mid A) = P(A \text{ and } B)/P(A)$$, and the multiplication rule turns it around: $$P(A \text{ and } B) = P(A)\,P(B \mid A)$$. A and B are **independent** when $$P(B \mid A) = P(B)$$: knowing that A happened does not change the chance of B (§§3.2, 3.3).

**Discrete random variables.** A random variable X counts or measures the outcome of a trial. Its probability distribution function (PDF) lists every value x with its probability P(x); the probabilities add to 1. Its mean, or **expected value**, and standard deviation are (§4.2)

$$\mu = \sum x\,P(x), \qquad \sigma = \sqrt{\sum (x - \mu)^2\,P(x)} .$$

From n trials with frequencies f, the sample mean and sample standard deviation are $$\bar{x} = \sum x f / n$$ and $$s = \sqrt{\sum (x - \bar{x})^2 f / (n - 1)}$$. The sample values scatter around μ and σ and close in on them as n grows.

**Binomial distribution (with replacement).** Draw a card, note whether it is a diamond, put it back and shuffle; do it n times. The draws are independent and each has the same chance p of a diamond, so the number of diamonds X is binomial, $$X \sim B(n, p)$$ (§4.3):

$$P(x) = \binom{n}{x} p^x q^{\,n-x}, \qquad \mu = np, \qquad \sigma = \sqrt{npq},$$

with q = 1 − p.

**Hypergeometric distribution (without replacement).** Deal n cards from one deck of N = 52 that holds K = 13 diamonds, without putting any back. Now each diamond drawn makes the next one a little less likely, and X is hypergeometric (§4.5):

$$P(x) = \frac{\binom{K}{x}\binom{N - K}{n - x}}{\binom{N}{n}}, \qquad \mu = n\frac{K}{N}, \qquad \sigma = \sqrt{n\frac{K}{N}\left(1 - \frac{K}{N}\right)\frac{N - n}{N - 1}} .$$

The mean is the same as with replacement; the factor $$(N - n)/(N - 1)$$ makes the spread smaller.

**The three dice game.** The book's dice lab (§4.8) bets on one number and rolls three dice; X is the number of dice that match. The demo pays as the game chuck-a-luck does: you bet $1, win $1 for each matching die, and lose your $1 when none match. So the profit is Y = −1 when x = 0 and Y = x otherwise. A game is fair when its expected profit $$\mu_Y = \sum y\,P(x)$$ is zero.

## Before the lab

1. One card is drawn from a shuffled deck of 52. What is the probability that it is a diamond? For ten draws with replacement, X ~ B(n, p): give n and p, and compute μ and σ.
2. Three dice are rolled, betting on six. What is the chance that one die matches? Write the PDF of X, the number of matches, as four fractions with denominator 216, give the profit y for each x, and compute the expected profit $$\mu_Y$$. Is the game fair?
3. Predict before you look: ten cards are dealt without replacement instead of with replacement. Will the number of diamonds have a larger, smaller or the same mean? A larger, smaller or the same spread? And if the first card is a diamond, is the second card more, less or equally likely to be a diamond than when the cards go back? Write one sentence of reasoning for each.

## Procedure

**A. Ten cards with replacement.** In the right panel, under Setups, press **Ten cards with replacement**. It opens the **Random variable** view, with X the number of diamonds in ten draws. Check that the right panel says Draw set 1 (if not, press **Reset all** at the top of the page and press the setup again). Press **Run 100** once: Trials reads 100. Press **Record reading** in the Readings section, then **Export to worksheet** (the rows go to Table 1), then **Clear**. Copy **Average x̄** and **Sample SD s** from the Readouts into your notes.

**B. Ten cards without replacement.** Press **Ten cards without replacement**. Press **Run 100** once, **Record reading**, **Export to worksheet** (Table 2) and **Clear**. Copy Average x̄ and Sample SD s again.

**C. The three dice game.** Press **Three dice: bet on a number** (Your number is 6). Press **Run 100** twice: Trials reads 200. Record reading, Export to worksheet (Table 3) and Clear. Copy **Average profit ȳ** and **Expected profit μ_Y** from the Readouts.

**D. Does the first card change the second?** Press **Ten cards with replacement** again, and press **Events** in the switch under the table. Event A is "The first card is a diamond" and event B is "The second card is a diamond". Watch the tree diagram while you press **Step** a few times, then press **Reset** and **Run 10,000** once (Trials reads 10,000). Press Record reading. Now press **Ten cards without replacement**, press Events, **Run 10,000** once and Record reading. Export to worksheet (both rows go to Table 4) and Clear.

**E. The long run of the game.** Press **Three dice: bet on a number** and press **Long run** in the switch under the table; the graph shows **Average profit Y** against the number of trials. Press **Run 10** and Record reading (Trials 10). Press **Run 100** and record (110 trials), **Run 1,000** and record (1,110 trials), **Run 10,000** and record (11,110 trials). Export to worksheet (Table 5).

## Data

Table 1. Ten cards with replacement: the number of diamonds X in 100 trials.

| Diamonds x | P(x) | Frequency | Relative frequency |
|---|---|---|---|
| | | | |
| | | | |
| | | | |

Table 2. Ten cards without replacement: the number of diamonds X in 100 trials.

| Diamonds x | P(x) | Frequency | Relative frequency |
|---|---|---|---|
| | | | |
| | | | |
| | | | |

Table 3. Three dice, betting on six: matches X and profit Y in 200 games.

| Matches x | Profit y ($) | P(x) | Frequency | Relative frequency |
|---|---|---|---|---|
| | | | | |
| | | | | |
| | | | | |

Table 4. The second card given the first, 10,000 trials each.

| Setup | Trials | P(B) | P(B given A) | Relative frequency of B | Relative frequency of B given A |
|---|---|---|---|---|---|
| | | | | | |
| | | | | | |

Table 5. The average profit of the three dice game as the games pile up.

| Trials n | Average profit ȳ ($) | Expected profit μ_Y ($) |
|---|---|---|
| | | |
| | | |
| | | |

## Analysis

1. From Table 1, compute the sample mean $$\bar{x} = \sum x f / n$$ and the sample standard deviation s (add columns for x·f and (x − x̄)²·f if it helps). Check them against Average x̄ and Sample SD s from part A. Compare them with μ and σ of B(10, 0.25) from Before the lab 1.
2. Using the P(x) column of Table 1, find P(x = 3), P(1 < x < 4) and P(x ≥ 8), and the matching relative frequencies from your 100 trials. Which theoretical probability does your sample match worst, and why is P(x ≥ 8) hard to check with only 100 trials?
3. For Table 2, take x̄ and s from the Average x̄ and Sample SD s you copied in part B (the Readouts do the sums you did by hand in Analysis 1). Compute μ and σ of the hypergeometric distribution with N = 52, K = 13 and n = 10. Compare the two spreads, σ with and without replacement, and your two values of s. Was your prediction in Before the lab 3 right?
4. From Table 3, compute the average profit $$\bar{y} = \sum y f / n$$ and the expected profit $$\mu_Y = \sum y\,P(x)$$. Find the theoretical P(x = 3), P(0 < x < 3) and P(x ≥ 2), and the matching relative frequencies of your 200 games. Does your sample of games show a profit or a loss on average?
5. In Table 4, compute the standard error $$\sqrt{p(1 - p)/n_A}$$ of each relative frequency of B given A, where p is P(B given A) and $$n_A$$ is the number of trials in which A happened (about a quarter of 10,000; the contingency table's A row total gives it exactly). Is each relative frequency within two standard errors of its P(B given A)? Could 10,000 trials alone have told you that the second card depends on the first when dealing without replacement?
6. Graph Table 5: the average profit ȳ against the number of trials n. For each row compute the gap $$\bar{y} - \mu_Y$$ and the standard error $$\sigma_Y/\sqrt{n}$$ with $$\sigma_Y = 1.1132$$ dollars (the demo's σ_Y). Is each gap within two standard errors?

## Uncertainty

The trials are simulated from exact probabilities, so the only uncertainty is the scatter of a finite sample. A relative frequency from n trials has standard error $$\sqrt{p(1 - p)/n}$$ and an average has standard error $$\sigma/\sqrt{n}$$. About 95 % of samples land within two standard errors (a normal approximation, good when n is large); the shaded band in the Long run graph is exactly this two standard error band. Use it to judge every comparison in the Analysis: a difference smaller than two standard errors is what chance alone gives.

## Questions

1. Look back at your predictions in Before the lab 3. Which were right? Explain in a sentence or two why dealing without replacement leaves the mean at 2.5 but makes the spread smaller.
2. Describe three ways your empirical distribution in Table 1 is like the theoretical one, and the most important way it differs (§4.7 asks the same).
3. If the experiment in part A were repeated with 500 trials instead of 100, which columns of Table 1 would change, and how? Which would stay the same, and why?
4. A fairground runs the three dice game 10,000 times a season with a $1 bet. About how much does it expect to keep? Use $$\mu_Y$$, and say how large a season to season scatter you would expect (use $$\sigma_Y\sqrt{n}$$ for the total).

## What to hand in

Before the lab answers, Tables 1 to 5, the graph of Table 5, your values of x̄, s, ȳ and the standard errors, and your answers to the Analysis and Questions. Say that the data are simulated by the demo, not real dice and cards.
