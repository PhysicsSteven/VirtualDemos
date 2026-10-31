---
title: Quantum Coin Toss
level: Modern physics (algebra based)
time: 20 to 30 minutes
---
## What students should come away with

- A quantum state such as a|H⟩ + b|T⟩ gives each result with probability |a|² or |b|² when measured. Single results are random; their fractions are predictable.
- Counts alone cannot tell a quantum coin from a weighted ordinary coin. The difference is that the ordinary coin already had its face before anyone looked.
- A measurement leaves the system in the state it was found in, so repeating the same measurement gives the same answer.
- For spin ½ the probability of up along an axis is cos²(γ/2), where γ is the angle between the spin and the axis on the Bloch sphere. The phase of b matters only when you measure along a different axis.
- Stern–Gerlach magnets in a row show that measuring x destroys what was known about z.

## Before class

Students should have met the wave function and probability (OpenStax Vol 3 §7.1) and electron spin (§8.3). Choose **Coins**, **Spin ½** or **Magnets in a row** at the top of the picture. The measure buttons do 1, 10, 100 or 1000 measurements; **Clear** empties the counts. In Spin ½, the card sets the state (arrow) and the magnet's axis (dashed), and **Prepare a fresh atom for every measurement** decides whether each measurement starts from the prepared state. In Magnets in a row, choose 1 to 3 magnets, their tilts, and which beam each one lets through. Changing a setting clears the counts. **Blind** in **Lab** hides the expected values.

## Running it in class

1. **Fair coins.** Measure 1000 of each (Q1).
2. **Three to one**, then set your own θ (Q2).
3. **Same odds, other phase**, then **Spin along x, measured along z** (Q3).
4. **Magnet tilted 60°** (Q4).
5. **Measure the same atom again** (Q5).
6. **z then z**, **z then x**, **z, x, then z again** (Q6).

## Questions

**Q1.** Measure 1000 ordinary and 1000 quantum fair coins. How close to one half is each fraction, and how close do you expect it to be? Could you tell which coin was quantum from the counts?

**Q2.** At θ = 60° what is P(heads) for the quantum coin? What θ gives P(heads) = 0.90? Set it and check with 1000 measurements.

**Q3.** The coin with φ = 90° gives the same heads fraction as φ = 0. On the Bloch sphere, the spin state θ = 90° points along +x for φ = 0 and along +y for φ = 90°. Measure each along x (axis tilt 90°, turn 0°). What fractions do you get, and what does this say about the phase?

**Q4.** Spin up along z, magnet axis tilted 60°: what fraction goes up? At what tilt is it one half, and at what tilt is it zero?

**Q5.** Turn off fresh atoms and measure one atom along z ten times. What do you see, and why? What happens if you then tilt the magnet to 90° and measure again?

**Q6.** Compare z then z, z then x, and z, x, then z. What fraction of the atoms from the oven reach each counter in each case? What did the x magnet do to the z information? Then set the x magnet to Both: does the last z magnet get its atoms back all up?

## Common misconceptions

- **"The quantum coin was secretly heads or tails all along."** Then the phase could not change the x results in Q3.
- **"A 50/50 result means half the atoms are up and half down before the measurement."** Atoms prepared along +x are all in the same state; only along z do they split.
- **"Measuring gently would not disturb the spin."** Measuring along x leaves the atom along ±x, whatever it was before.
- **"Probability means the experiment is imprecise."** The fractions are exact predictions; only the single results are random.

## Physics behind the demo

- |ψ⟩ = cos(θ/2)|↑⟩ + e^(iφ) sin(θ/2)|↓⟩, Bloch vector s = (sin θ cos φ, sin θ sin φ, cos θ). P(up along n) = (1 + s·n)/2 = cos²(γ/2). After a measurement the state is ±n.
- The oven's atoms are unpolarized, drawn as random directions (the same statistics as the mixture). Every magnet is a measurement; its beams are never recombined, so Both sends a mixture on. The beams are drawn splitting up and down whatever the axis (a schematic).
- Outcomes come from a seeded generator (mulberry32), so the counts are simulated. The ordinary coin is classical: its face is set by the toss.
- Tests (curriculum/validation/test_quantum_coin.cjs): normalization, cos²(θ/2), the phase, collapse, 100 000 seeded measurements, and the expected and simulated fractions for several rows of magnets.

## Going further

- Spin Resonance measures the energy difference between the two spin states of electrons and protons in a magnetic field.
- Quantum Wave Packets shows |ψ|² as a probability density, and a measurement that collapses it, for a particle in a box.
