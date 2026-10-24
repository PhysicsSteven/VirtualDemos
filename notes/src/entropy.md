---
title: Entropy and the Second Law
level: Intro physics (second law, statistical meaning of entropy)
time: 20 to 30 minutes
---
## What students should come away with

- Irreversible means overwhelmingly improbable to undo, not forbidden by the laws of motion. Four molecules return to one half 1/16 of the time; a hundred essentially never do (2⁻¹⁰⁰ ≈ 8 × 10⁻³¹).
- Entropy counts ways: S = k ln Ω. Energy spreads between two solids because the shared state has vastly more microstates, and it stops where the two temperatures match, since 1/T = dS/dU.
- Over a cycle only the reservoirs change entropy, by Q/T each. The second law, ΔS_universe ≥ 0, gives the Carnot limit, and the Kelvin and Clausius statements stand or fall together: pair a device that beats Carnot with an ordinary one and you break both.

## Before class

Students should know heat engines, efficiency and the Carnot efficiency, and ideally have met S = Q/T for a reservoir. The demo has three views. **Free expansion**: hard disks in a box 2 by 1 units start in the left half behind a partition; the count on the left and a histogram of time spent at each count are shown once the partition is removed. **Einstein solids**: two solids of N_A and N_B oscillators share q quanta by random exchanges of one quantum at a time; Ω_A Ω_B is plotted against q_A. **Second law**: an engine or refrigerator between two reservoirs, with ΔS of each reservoir and of the universe, and an optional pairing with a Carnot partner.

## Running it in class

1. **Four molecules.** Ask Q1, then remove the partition. All four come back to the left again and again; the histogram settles near the binomial shares 1/16, 4/16, 6/16, 4/16, 1/16.
2. **A hundred molecules.** The count settles near 50 and wobbles by about ±5 (Q2). The histogram never reaches 100 or 0.
3. **Small solids.** 3 and 3 oscillators sharing 6 quanta: only 462 microstates. The share of time at each q_A matches Ω_A Ω_B/462, peaking at q_A = 3 (Q3).
4. **Hot solid meets cold.** 100 oscillators holding all 150 quanta meet 200 holding none. q_A falls to about 50 and stays there; total ln Ω rises by 115.6 (Q4).
5. **A real engine**, **Beats Carnot?**, **Perfect engine**, **Perfect refrigerator.** Read ΔS_universe for each (Q5). Then turn on the pairing for **Beats Carnot?** and **Perfect refrigerator** (Q6).

## Questions

**Q1.** Four molecules wander independently around a box. What fraction of the time do you expect all four to be in the left half? Two on each side?

**Q2.** With 100 molecules, how large are the typical wobbles of the left count about 50? What is the chance of finding all 100 on the left, and what does that say about why free expansion is irreversible?

**Q3.** Two solids of 3 oscillators share 6 quanta. Count the microstates with q_A = 0 and with q_A = 3, using Ω(N, q) = (q + N − 1)!/(q! (N − 1)!). Which is more likely, and by how much?

**Q4.** In **Hot solid meets cold**, where should q_A settle, and why is that also where the two temperatures are equal? The total ln Ω rises from 164.4 to 279.9. How much more likely is the shared state than the start?

**Q5.** For each engine setup (600 K and 300 K, Q_h = 500 J): find ΔS_universe for W = 150 J, 300 J and 500 J. Which are allowed? For the perfect refrigerator, 400 J from 270 K to 300 K with W = 0, find ΔS_universe.

**Q6.** Pair the **Beats Carnot?** engine with a Carnot refrigerator that returns its 200 J of waste heat to the hot reservoir. What does the pair do overall, and which statement does it break? Pair the refrigerator with W = 20 J and Q_c = 400 J with a Carnot engine that supplies its 20 J. What does that pair do?

**Q7.** A free expansion of one mole doubles the volume with no heat and no work. What is ΔS of the gas, and how can entropy rise when no heat flowed?

## Common misconceptions

- **"Entropy is disorder."** It counts microstates. Disorder is a loose picture that often helps and sometimes misleads (crystals forming from solution can raise total entropy).
- **"Entropy can never decrease anywhere."** Only the total of an isolated system cannot. A refrigerator lowers the entropy of its contents while raising the room's by more.
- **"The second law is absolute, so four molecules can never return to one side."** They do, often. The law is statistical, and for macroscopic numbers the exceptions are too rare ever to see.
- **"A better engine design could beat Carnot."** The limit comes from entropy, not engineering: any engine that beat it could be paired to break the Kelvin statement.

## Physics behind the demo

- **Free expansion.** Elastic hard disks in a box 2 × 1 with a time step of 0.004; radii shrink with N. The histogram starts counting only once the left count first falls to half, so the initial rush out does not skew the shares. Exact shares are binomial, C(N, n)/2^N; ΔS = Nk ln 2 (R ln 2 = 5.763 J/K per mole).
- **Einstein solids.** Ω(N, q) = C(q + N − 1, q) for each solid; each step picks a random oscillator in either solid and, if it has a quantum, moves it to another random oscillator. The temperature readout is kT/ε = 1/(d ln Ω/dq) by a centred difference (0 at q = 0).
- **Second law.** For an engine ΔS_universe = −Q_h/T_h + Q_c/T_c with Q_c = Q_h − W; for a refrigerator ΔS = Q_h/T_h − Q_c/T_c with Q_h = Q_c + W. The pairing partner is a reversible Carnot device between the same reservoirs.

## Going further

- Homework: find kT/ε for an Einstein solid of N oscillators holding q quanta when both are large, and show that energy flows from the solid with the higher q/N.
- Pair with **Heat Engine Cycles** (real cycles against the Carnot limit) and **Gas in a Box** (the same irreversibility in a gas you can watch).
