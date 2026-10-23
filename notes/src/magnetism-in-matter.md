---
title: Magnetism in Matter
level: PHYS 202
time: 15 to 25 minutes
---
## What students should come away with

- Filling a long solenoid with a material changes the field from B₀ = μ₀nI to B = (1 + χ)B₀ (OpenStax Eq. 12.36 and 12.37). The susceptibility χ says how strongly the material answers.
- Paramagnets (χ > 0, about 10⁻⁵) add a tiny field: their atomic moments line up a little, fighting thermal motion. Diamagnets (χ < 0, about −10⁻⁵) subtract a tiny field: the applied field induces moments that oppose it.
- Para and diamagnetic effects are tiny in B, but a strong field that changes quickly with position can still push on them hard enough to matter: liquid oxygen is pulled into a magnet, and water can be floated.
- Iron is ferromagnetic: B is thousands of times B₀, χ is not a constant, and B depends on the history of the field. At zero current it stays magnetized; a reverse current is needed to bring B back to zero. This is hysteresis.

## Before class

Students need B₀ = μ₀nI for a long solenoid and the idea of a magnetic dipole moment from a current loop. **Blind** hides B, B − B₀ and the plot and covers the core, so students can predict first.

## Running it in class

1. **Aluminum core.** At 1.000 A and 20 turns per cm, B₀ = 2.51 mT, and the bars for B₀ and B look the same. Ask: did the aluminum do anything? Point to B − B₀ = 55 nT, and the plot: a straight line whose slope is χ.
2. **Bismuth core.** Now B − B₀ is negative. Flip the current with the arrow keys or the slider: B − B₀ flips too, so it always opposes B₀.
3. **Liquid oxygen.** The same line, 160 times steeper than aluminum. Mention the classic demo: liquid oxygen poured between magnet poles hangs there.
4. **Floating water.** Read off B dB/dz = 1352 T²/m. At 16 T the field would need to fall by about 85 T per metre: possible only with research magnets, which is how a frog was once floated.
5. **Iron, Example 12.10.** At 0.200 A, B₀ = 503 µT and B = 1.41 T: the model reproduces the book's 1.4 T and χ ≈ 2.8 × 10³. Move the current: χ changes, so iron is not a linear material.
6. **Iron hysteresis loop.** Let the sweep run. Stop at I = 0: B is still about 1.7 T. Ask what current brings B to zero (about −0.10 A). Then **Demagnetize**.

## Questions

**Q1.** A long solenoid has 20 turns per cm and carries 1.00 A. Find B₀. It is filled with aluminum (χ = 2.2 × 10⁻⁵). By how much does B differ from B₀? Would you notice it on a typical laboratory gaussmeter?

**Q2.** For atomic hydrogen, μ = 9.3 × 10⁻²⁴ A·m². In a 1.0 T field at 27 °C, compare the energy to flip an aligned moment, 2μB, with kT. What does this say about how well the moments in a paramagnet line up, and why is χ so small?

**Q3.** A small piece of a material with susceptibility χ in a field that changes with height feels a force per volume (χ/μ₀) B dB/dz along z. Above a magnet the field falls with height. Show that water floats where |B dB/dz| = μ₀ρg/|χ| and evaluate it (ρ = 998.2 kg/m³, χ = −9.1 × 10⁻⁶). Could a paramagnet such as aluminum be floated above a magnet the same way?

**Q4.** Use OpenStax Figure 12.25 (or the demo's iron) to find χ at B₀ = 1.0 × 10⁻⁴ T and at B₀ = 6.0 × 10⁻⁴ T. Why is it misleading to quote a single susceptibility for iron?

**Q5.** In the demo's iron loop (20 turns per cm, current swept between ±1.00 A), B is about 1.7 T when the current returns to zero, and B reaches zero at a reverse current of about 0.10 A. What are H and B₀ at that reverse current? Explain, in terms of domains, why B is not zero when I = 0. Why do transformer cores use iron with a narrow loop, and permanent magnets a material with a wide one?

## Common misconceptions

- **"Only iron is magnetic."** Every material responds; most do so a hundred thousand times more weakly than iron.
- **"Diamagnets are not magnetic."** They respond, with χ < 0, and are pushed out of strong fields.
- **"χ for iron is a constant of the material."** For iron it depends on the field and on its history.
- **"Turning the current off unmagnetizes the core."** Hysteresis leaves a remanent field; demagnetizing needs a shrinking alternating field (or heating).

## Physics behind the demo

- Long solenoid, core filling it: B₀ = μ₀nI, B = (1 + χ)B₀, μ = (1 + χ)μ₀. Susceptibilities from OpenStax Table 12.2.
- Levitation: force per volume (χ/μ₀) B dB/dz; balance with ρg. Densities at 20 °C from the CRC Handbook (water 998.2, copper 8960, bismuth 9780 kg/m³); g = 9.81 m/s².
- Iron: Jiles and Atherton model (1986) with M_s = 1.707 × 10⁶ A/m (Kittel) and chosen a = 80 A/m, k = 300 A/m, α = 2.0 × 10⁻⁴, c = 0.4, fitted to the two points of OpenStax Figure 12.25 (model 0.56 T and 1.51 T against 0.60 T and 1.5 T). The model gives a remanence of 1.72 T and a coercive field of 204 A/m for a ±2000 A/m loop; these are properties of the chosen parameters, not of a measured sample. The drawings inside the core are cartoons, with exaggeration stated on the page.
