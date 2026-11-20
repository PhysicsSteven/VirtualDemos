---
title: "Chance Lab: Dice, Cards and Candies"
level: Statistics (OpenStax Introductory Statistics 2e 3.1 to 3.6, 4.1, 4.2, 4.5, 4.7 and 4.8) and physics labs that count random events
time: 15 to 40 minutes
---
## What students should come away with

- A probability is a long run relative frequency: over many trials the share of trials where A happens settles toward P(A), and the average of X settles toward its expected value μ. The settling goes as 1/√n (the law of large numbers).
- The rules: P(A or B) = P(A) + P(B) − P(A and B); P(A and B) = P(A)·P(B | A). A and B are independent when P(B | A) = P(B), and mutually exclusive when they cannot happen together. Events can overlap and still be independent.
- Drawing with replacement keeps the draws independent; drawing without replacement makes each draw depend on the ones before.
- A random variable has a probability distribution with mean μ = Σ x·P(x) and standard deviation σ = √(Σ (x − μ)²·P(x)). With replacement the count of successes is binomial; without, hypergeometric, with the same mean but a smaller σ.
- The expected value says whether a game is fair: a negative expected profit loses money in the long run, however lucky a short run is.

## Before class

Nothing to install. Three modes: **Dice** (Dice 1 to 4, Your number), **Cards** (Cards drawn 1 to 10, With replacement) and **Cup of candies** (a cup of 40: 12 red, 8 green, 8 blue, 6 yellow, 4 brown, 2 orange; two drawn, With replacement or not). Three tabs: **Events** (Event A and Event B, with a Venn diagram, a tree diagram, a contingency table and the rules in theory and in your trials), **Random variable** (Random variable X and its probability distribution function) and **Long run** (Relative frequency of A, Average of X, Average profit Y). Run 10 to Run 10,000 add trials; Play runs them in a stream. New draw moves to another seeded set of trials. Blind, in the Lab fold, hides the probabilities, μ and σ. Every trial is simulated. The Handout and worksheet link opens the probability worksheet.

## Running it in class

1. **Two dice.** Open on **Two dice: sums and doubles**. Ask for P(A), P(B) and P(A and B) before running, then Run 1,000 and read the table (Q1).
2. **Exclusive and independent.** Change Event A to The dice add up to 7, then set Your number to 6 and pick The first die matches your number (Q2).
3. **One card.** **One card: hearts and face cards** (Q3).
4. **With and without.** **Ten cards with replacement**, then **Ten cards without replacement** on the Random variable tab (Q4).
5. **Candies.** **Cup of candies with replacement** and **Cup of candies without replacement** (Q5).
6. **A game.** **Three dice: bet on a number**, Long run tab, Average profit Y (Q6).

## Questions

**Q1.** Roll two dice. A: they add up to 8 or more. B: doubles. Count the 36 equally likely outcomes to find P(A) = 15/36, P(B) = 6/36 and P(A and B) = 3/36. Find P(B | A). Are A and B independent? Run 1,000 trials and compare the relative frequencies in the contingency table with these.

**Q2.** Change A to "the dice add up to 7". Why are A and B now mutually exclusive, and what does that do to the Venn diagram? Now take A as a sum of 7 and B as "the first die shows 6": show that P(A and B) = P(A)·P(B), so they are independent. Can two events be both mutually exclusive and independent?

**Q3.** Draw one card. A: a heart. B: a face card (J, Q or K). Show that P(A and B) = 3/52 = (13/52)(12/52). The events overlap: are they independent? What about "a heart" and "the first card is a diamond"?

**Q4.** Draw ten cards with replacement and count diamonds: X ~ B(10, 0.25). Find μ = np and σ = √(npq) = 1.3693. Without replacement, μ is still 2.5 but σ = 1.2426. Why is σ smaller? Find P(the second card is a diamond | the first is a diamond) both ways (13/52 and 12/51).

**Q5.** From the cup of 40, draw two candies. Find P(R1 and G2) with replacement, (12/40)(8/40), and without, (12/40)(8/39). Without replacement, is P(G2) still 8/40 when you do not know the first candy? Why is P(G2 | R1) different?

**Q6.** The book's three dice lab (4.8): bet $1 on a number and roll three dice; X, the number of matches, is B(3, 1/6), so P(X = 0) = 125/216 and μ_X = 0.5. The demo pays as the fairground game chuck-a-luck does: win $1 for each matching die, lose your $1 when none match. Find the expected profit (−17/216, about −$0.079 a game). Is the game fair? Run 10,000 and watch Average profit Y on the Long run tab: why does it wander early on and settle late?

## Common misconceptions

- **"Independent means they do not overlap."** Hearts and face cards overlap and are independent; a sum of 7 and doubles never overlap and are dependent (one rules out the other).
- **"After many tails, heads is due."** Independent trials have no memory; the relative frequency settles because later trials swamp the early ones, not because they make up for them.
- **"The law of large numbers says the count of A gets close to n·P(A)."** The share gets close; the difference in counts typically grows as √n.
- **"Without replacement changes the mean."** The mean count is the same (np); only the spread shrinks.
- **"An expected value is what you expect on one game."** −$0.079 is never the result of one game; it is the long run average.

## How the demo works

- Every trial is simulated with a seeded random number generator (mulberry32 in demos/lib/vdstats.js), so the same draw set always gives the same trials. Dice are fresh draws of 1 to 6; cards come from one shuffled deck of 52, reshuffled before each draw with replacement; the cup holds 40 candies.
- The probabilities are exact: the demo counts every equally likely ordered outcome and writes P as a fraction of them. The distribution of X is binomial with replacement and hypergeometric without (book 4.3 and 4.5), and a full count of the 6ⁿ outcomes for the sum of the dice.
- The shaded band in the Long run graph is μ ± 2σ/√n (or p ± 2√(p(1 − p)/n) for a relative frequency): about 95 % of running averages lie inside it once n is large.
- The candy mix is the demo's own (the book's candy lab uses the colors of your own bag), and the three dice payout is chuck-a-luck's, since the book's lab leaves it to you.
