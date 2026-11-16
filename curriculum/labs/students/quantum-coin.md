# Quantum Coin Toss: Superposition and Measurement
Student laboratory · Modern Physics

Textbook: OpenStax *University Physics*, Vol. 3, §7.1 and §8.3. Access for free at https://openstax.org/details/books/university-physics-volume-3.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/quantum-coin.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Fair coins; Three to one; Same odds, other phase; Spin along x, measured along z; Magnet tilted 60°; Measure the same atom again; z then z; z then x; z, x, then z again.

**Using the demo.**

- Coins: an ordinary coin, whose face is decided by the toss, beside a quantum coin in the state $$a\lvert H\rangle + b\lvert T\rangle$$ with $$a = \cos(\theta/2)$$ and $$b = e^{i\varphi}\sin(\theta/2)$$. Each press tosses and measures both.
- Spin ½: the spin state of an atom is an arrow on the Bloch sphere, set by its tilt θ from up and its turn φ about z. A Stern–Gerlach magnet measures the spin along its axis (the dashed line) and sends the atom up or down. With fresh atoms on, each measurement starts from the prepared state; with it off, the same atom is measured again and again.
- Magnets in a row: atoms leave an oven unpolarized and pass up to three magnets, each tilted in the x–z plane. Each magnet except the last lets through its up beam, its down beam or both; a blocked beam is stopped. Every magnet counts as a measurement, and its two beams are never brought back together.
- Every result is drawn at random by the computer with the quantum probabilities, so the counts are simulated data.
- Record reading stores the setup, the angle (θ for the coins, the angle γ between the spin and the magnet's axis for Spin ½), the number measured and the number of heads or up results; the coins give two rows, one per coin. Readings from Magnets in a row store the counts at the end and the number blocked. Export to worksheet sends the coin and spin readings to Table 1 and the magnet readings to Table 2; Clear starts a new series.

</details>

## Goal

Test the rule that a measurement gives each result with probability equal to the square of its amplitude, find what the phase of a superposition changes, and see how a measurement changes the state it measures.

## Background

A two state system, such as heads and tails or spin up and spin down, has the state

$$\lvert\psi\rangle = \cos\frac{\theta}{2}\,\lvert\uparrow\rangle + e^{i\varphi}\sin\frac{\theta}{2}\,\lvert\downarrow\rangle .$$

Measured along z, it gives up with probability $$\cos^2(\theta/2)$$ and down with probability $$\sin^2(\theta/2)$$; the phase φ does not change these. The state can be drawn as a unit arrow on the Bloch sphere, tilted θ from up and turned φ about z. A Stern–Gerlach magnet whose axis makes the angle γ with the arrow sends the atom up with probability

$$P_{\text{up}} = \cos^2\frac{\gamma}{2},$$

and afterwards the atom's arrow points along the axis (up) or against it (down). An unpolarized beam goes up half the time along any axis.

For N measurements, the fraction that go up scatters about $$P_{\text{up}}$$ with a standard deviation of $$\sqrt{P_{\text{up}}(1 - P_{\text{up}})/N}$$.

## Before the lab

1. Find P(heads) for the quantum coin at θ = 0°, 60°, 90°, 120° and 180°.
2. What θ gives P(heads) = 0.90?
3. A spin points along +x (θ = 90°, φ = 0°). What fraction goes up along z, along x, and along −x?
4. For 1000 measurements with P = 0.75, how far from 0.75 do you expect the measured fraction to be, typically?

## Safety

No hazards in the virtual lab.

## Procedure

Two buttons are called Clear: the one beside the Measure buttons clears the counts, and the one beside Record reading clears the readings. Moving any slider also clears the counts.

**Coins.** Pick Fair coins (ordinary coin at Chance of heads 0.50, quantum coin at φ = 0°). For each θ, set the **Amplitude angle θ** slider, press **1000** (beside Measure 1) and press **Record reading**, which stores two rows, the ordinary coin and the quantum coin: θ = 0°, 60°, 90°, 120° and 180°. Then set θ = 90° again and repeat with the **Phase φ** slider at 90° and at 180°. Press Export to worksheet, then the Clear beside Record reading.

**Spin along a tilted axis.** Pick Magnet tilted 60° (fresh atoms, spin up along z, magnet turned 0°). For each magnet tilt, set **Tilt from z** under The magnet's axis, press 1000 and Record reading: 0°, 60°, 90°, 120° and 180°. The Angle column gets γ, the angle between the spin and the magnet's axis. Press Export to worksheet, then Clear.

**What the phase does.** Pick Spin along x, measured along z, then set the magnet's Tilt from z to 90° (leave Turn about z at 0°), so the magnet is along x. Set **Turn φ about z** under The spin state to 0°, 90°, 180° and 270°, and each time press 1000 and Record reading. Press Export to worksheet, then Clear.

**The same atom again.** Pick Measure the same atom again (spin along +x, magnet along z, Prepare a fresh atom for every measurement unticked). Press Measure 1 ten times and note each result, up or down. Then set the magnet's Tilt from z to 90° and press Measure 1 ten more times. Write down the twenty results in the answer box under Analysis 4; nothing is recorded.

**Magnets in a row.** For each row below, press 1000 to send 1000 atoms and press Record reading: z then z (keep up), the z then z setup; z then x (keep up), the z then x setup; z (keep up), x (keep up), then z, the z, x, then z again setup; z (keep up), x (both), then z, the same setup with Both pressed for Magnet 2; z (keep up) then a magnet at 60°, the z then z setup with Magnet 2's Axis tilt from z at 60°. Press Export to worksheet; these readings go to Table 2.

## Data

Table 1. Coins and single magnets.

| Reading | Setup | Angle (°) | Phase φ (°) | Measured N | Heads or up | Fraction up | cos²(angle/2) |
|---|---|---|---|---|---|---|---|
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |

Table 2. Magnets in a row.

| Reading | Magnets | Atoms from the oven N | Up at the end | Down at the end | Blocked | Predicted fractions |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |
| | | | | | | |

## Analysis

1. Fill in the fraction up (Heads or up divided by Measured N) and cos²(angle/2) for every quantum coin row and every tilted magnet row (the ordinary coin rows have no angle). Plot the fraction up (vertical) against cos²(angle/2) (horizontal). What slope and intercept do you expect, and what do you find?
2. Compare the ordinary coin's heads fraction with the quantum coin's at θ = 90°. Could the counts tell you which coin is quantum?
3. For the phase series, plot the fraction up along x (vertical) against φ, the Phase φ column (horizontal). What function of φ fits? Explain why the phase changed nothing in the coin readings.
4. Describe your twenty results for the same atom. What does the first measurement do to the state?
5. Predict the fractions for every row of Table 2 and compare with your counts. Explain the difference between keeping only the x up beam and keeping both x beams.

## Uncertainty

For each tilted magnet reading, find $$\sqrt{P(1-P)/N}$$ with P = cos²(angle/2). How many of your fractions lie within one of these of the prediction, and how many within two? Compare with what you would expect.

## Questions

1. In the z, x, z row, putting in the x magnet lets some atoms reach the down counter that could not reach it before. How can adding a filter let more of something through?

## What to hand in

Prelab answers, the tables with their graphs, the twenty results for the same atom, the predicted and measured fractions for Table 2, the uncertainty count, and answers to the questions. Identify simulated data.
