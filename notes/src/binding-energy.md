---
title: Nuclear Binding Energy
level: Modern physics; intro astronomy (stellar fusion)
time: 15 to 25 minutes
---
## What students should come away with

- The binding energy B is the energy needed to pull a nucleus apart into free protons and neutrons. It shows up as missing mass: B = [Z m(¹H) + N m_n − m(atom)]c², computed here from measured masses.
- B/A rises steeply through the light nuclei, peaks at about 8.8 MeV near iron and nickel, and falls slowly to 7.6 MeV for uranium. Any reaction that moves nucleons toward the peak releases energy: fusion from the left, fission from the right.
- The energy released, Q, equals the binding energy gained (when the number of protons and neutrons is unchanged). A change of about 1 MeV per nucleon is a million times the energy per atom of chemistry.
- The liquid drop model explains the shape: every nucleon binds to its neighbors (volume), minus losses for nucleons at the surface, for proton repulsion, and for an excess of neutrons over protons.
- Nuclei with 2, 8, 20, 28, 50, 82 or 126 protons or neutrons are bound more tightly than the smooth model predicts: closed shells.

## Before class

Students should know E = mc², 1 u = 931.494 MeV/c², and Z, N and A. The demo uses mass excesses Δ = (M − A u)c², so B = ZΔ(¹H) + NΔ(n) − Δ(A, Z). Views: **Curve**, **Liquid drop**, **Shell effects** and **Chart**. Click a dot to select a nuclide; the **Mass number A** slider picks the most tightly bound nuclide of that A.

## Running it in class

1. **The curve of binding energy.** Ask Q1 first. Each dot is a measured nuclide, blue if stable or found in nature. Click ⁴He, ¹²C and ¹⁶O: they sit above their neighbors. Point out the peak at ⁶²Ni (8.795 MeV) and the slow fall to uranium.
2. **Fusion: D + T.** The reaction arrow runs from two loosely bound nuclei up to ⁴He. Read **Q from the masses** (17.589 MeV) and **Energy per kg of fuel** (Q2, Q3).
3. **Fission of uranium 235.** The arrow runs from uranium up to the fragments. Q is 173 MeV at once, about ten times the D + T value per reaction, but less per kilogram (Q4).
4. **The liquid drop model.** Start with only **Volume** checked, then add **Surface**, **Coulomb**, **Asymmetry** and **Pairing** one at a time, and watch the model curve take the shape of the data. Ask the prediction in Q5 before removing the Coulomb term. **Fit to AME2020** shows how good five numbers can be.
5. **Why iron is the end of the line.** Near the peak, compare **B/A measured** and **Mass per nucleon M/A** for ⁶²Ni, ⁵⁸Fe and ⁵⁶Fe: the order is not the same (Q6).
6. **Magic numbers.** Measured B minus the fitted drop, against N, then **Against Z**. The spikes sit at the magic numbers; ²⁰⁸Pb is doubly magic (Q7).

## Questions

**Q1.** Predict: B/A for ²H is 1.1 MeV, for ⁴He 7.1 MeV, for ⁵⁶Fe 8.8 MeV and for ²³⁵U 7.6 MeV. Which of these releases energy: fusing two light nuclei, splitting a uranium nucleus, fusing two iron nuclei, splitting an iron nucleus? Explain using the shape of the curve.

**Q2.** The mass excesses are Δ(¹H) = 7.289 MeV, Δ(n) = 8.071 MeV and Δ(⁴He) = 2.425 MeV. Find the binding energy of ⁴He and its B/A. What fraction of the mass of two hydrogen atoms and two neutrons disappears when they form one ⁴He atom? Check with the demo.

**Q3.** For D + T → ⁴He + n, the mass excesses are Δ(²H) = 13.136 MeV and Δ(³H) = 14.950 MeV (with the values in Q2). Find Q. The deuterium and tritium are nearly at rest; how is Q shared between the neutron and the alpha particle, and why?

**Q4.** Uranium sits at 7.59 MeV per nucleon, and the fragments ¹⁴¹Ba and ⁹²Kr at about 8.33 and 8.51 MeV. Estimate the energy released in ²³⁵U + n → ¹⁴¹Ba + ⁹²Kr + 3n from these numbers. Why does fission release about ten times more energy per reaction than D + T, but D + T about five times more per kilogram of fuel?

**Q5.** Predict, then check in **Liquid drop**: if protons did not repel each other (turn off the **Coulomb** term), what would the model curve of B/A do at large A? What does your answer say about why heavy nuclei can fission at all?

**Q6.** ⁶²Ni has the highest binding energy per nucleon, yet ⁵⁶Fe has the lowest mass per nucleon of any nucleus. Explain how both can be true. Use the **Mass per nucleon M/A** readout for both.

**Q7.** In **Magic numbers**, ²⁰⁸Pb (Z = 82, N = 126) is bound about 10 MeV more tightly than the fitted liquid drop. What does it mean for a nucleus to have a closed shell, and what is the chemical analogy? Find one more nuclide on the plot with an unusually large positive value and check whether its Z or N is magic.

## Common misconceptions

- **"Binding energy is energy stored in the nucleus that comes out in reactions."** It is energy the nucleus does not have: the energy you must supply to take it apart. A more tightly bound nucleus has less mass, and the difference is what is released.
- **"Iron releases the most energy."** Iron is the end point: nothing is gained by fusing or splitting nuclei near the peak.
- **"Fission releases energy because uranium is unstable."** It releases energy because the fragments are bound about 0.7 MeV per nucleon more tightly.

## Physics behind the demo

- Masses: AME2020 ground state mass excesses (2550 nuclides with measured masses; values estimated from systematics are left out). B = ZΔ(¹H) + NΔ(n) − Δ(A, Z). Atomic masses count the electrons with the protons, so the electrons' own binding (at most 0.8 MeV for uranium, 0.04%) is left in B.
- Q = Σ Δ(before) − Σ Δ(after) for nuclei at rest in their ground states. For D + T, fission and triple alpha, Q equals the binding energy gained. For the pp chain, two protons become neutrons, so Q is less than the binding of ⁴He by 2(m_n − m_H)c² = 1.565 MeV.
- Fission uses one fragment pair; real fission gives a spread of pairs, and later beta decays bring the total to about 200 MeV.
- Liquid drop: B = a_V A − a_S A^(2/3) − a_C Z(Z−1)/A^(1/3) − a_A(N−Z)²/A ± a_P/A^(1/2), with the textbook values a_V = 15.75, a_S = 17.8, a_C = 0.711, a_A = 23.7, a_P = 11.18 MeV, or a least squares fit to every measured nucleus with A ≥ 16. The model curve follows its own valley of stability Z(A) and leaves out pairing; it is poor for light nuclei (dashed below A = 16).

## Going further

- Homework: from the masses, Q for 4 ¹H → ⁴He is 26.73 MeV but the binding energy of ⁴He is 28.30 MeV. Explain the difference, then estimate how many kilograms of hydrogen the Sun turns into helium each second from its luminosity, 3.8 × 10²⁶ W.
