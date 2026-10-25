# The Curve of Binding Energy
Student laboratory · Modern Physics

Textbook: OpenStax *University Physics*, Vol. 3, §§10.1, 10.2, 10.5 and 10.6. Access for free at https://openstax.org/details/books/university-physics-volume-3.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/binding-energy.html?setup=curve)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** The curve of binding energy; Why iron is the end of the line; Fusion: D + T; Fission of uranium 235; The liquid drop model; Magic numbers.

**Using the demo.**

- Every dot is a nuclide with a measured mass, from the 2020 Atomic Mass Evaluation (AME2020). Blue dots are stable or found in nature; faint ones are radioactive. Four views: the curve of binding energy per nucleon, the liquid drop model's terms, shell effects (measured minus model) and the chart of nuclides.
- Click a dot, or use the Mass number slider (it picks the most tightly bound nuclide of that A), to select a nuclide. The arrow keys step A, and Z along the same A. The readouts give Z, N, the atomic mass excess Δ, the binding energy B, B/A and the liquid drop model's B/A.
- Binding energies use atomic mass excesses: $$B = Z\Delta(^1\mathrm{H}) + N\Delta(n) - \Delta(A, Z)$$, with $$\Delta(^1\mathrm{H}) = 7.289$$ MeV and $$\Delta(n) = 8.071$$ MeV. The electrons are counted with the protons; their own binding, at most 0.8 MeV for uranium, is left in B.
- Energy from the curve shows the Q value of D + T fusion, one uranium 235 fission, the proton chain and the triple alpha process, from the masses.
- The liquid drop model starts from the textbook coefficients (Rohlf 1994). Its terms can be turned off, changed with sliders, or fitted to AME2020.
- Record reading stores the selected nuclide's numbers and the model's B/A. Export to worksheet sends the readings to the Data table below; Clear starts a new series, which goes into a new copy of the table.

</details>

## Goal

Read the binding energy of nuclei across the whole chart from measured masses, plot the curve of binding energy, and use it to see why both fusion of light nuclei and fission of heavy ones release energy.

## Background

A nucleus of $$Z$$ protons and $$N$$ neutrons ($$A = Z + N$$) has less mass than its separate nucleons. The difference, times $$c^2$$, is the binding energy $$B$$: the energy needed to pull the nucleus apart (§10.2). With atomic masses,

$$B = \left[Z\,m(^1\mathrm{H}) + N\,m_n - m(^A X)\right]c^2 .$$

Tables often give the mass excess $$\Delta = (m - A\,u)c^2$$ instead of the mass, and then $$B = Z\Delta(^1\mathrm{H}) + N\Delta(n) - \Delta(^A X)$$.

The binding energy per nucleon $$B/A$$ measures how tightly each nucleon is held. A reaction releases energy when its products are more tightly bound than what went in: the energy released is $$Q = B_\mathrm{after} - B_\mathrm{before}$$ (when the numbers of protons and neutrons are unchanged).

The liquid drop model treats the nucleus as a drop of nuclear fluid:

$$B = a_V A - a_S A^{2/3} - a_C\frac{Z(Z-1)}{A^{1/3}} - a_A\frac{(N-Z)^2}{A} \pm \frac{a_P}{A^{1/2}} .$$

The terms are the bulk binding, the missing neighbors of surface nucleons, the protons' repulsion, the cost of unequal numbers of neutrons and protons, and pairing.

## Before the lab

1. Use $$\Delta(^1\mathrm{H}) = 7.289$$ MeV, $$\Delta(n) = 8.071$$ MeV and $$\Delta(^4\mathrm{He}) = 2.425$$ MeV to find B and B/A for helium 4.
2. Deuterium has B = 2.22 MeV and tritium 8.48 MeV. Using your helium 4 value, find the energy released in $$^2\mathrm{H} + {}^3\mathrm{H} \to {}^4\mathrm{He} + n$$.
3. In the liquid drop formula, which term grows fastest with Z? Which term makes very light nuclei loosely bound?
4. Predict roughly where B/A is largest, and why it falls for heavier nuclei.

## Safety

No hazards in the virtual lab.

## Procedure

**The curve.** With the curve of binding energy setup, record the most tightly bound nuclide at A = 2, 3, 4, 6, 9, 12, 16, 20, 28, 40, 56, 62, 90, 120, 160, 208 and 238. Add uranium 235 and helium 3. Helium 3 is not the most tightly bound nuclide at A = 3, so step Z at that A (or click its dot) to select it.

**Reactions.** In Energy from the curve, read Q for D + T fusion and for uranium 235 fission. Record the two fission fragments, barium 141 and krypton 92, selecting each by its A and then stepping Z.

**Liquid drop.** With the liquid drop model setup, record tin 120 and lead 208 with all five terms on. Export them, Clear, turn off the Coulomb term and record both again, so they go into a new copy of the table.

## Data

| Reading | Nuclide | Z | N | A | Mass excess Δ (MeV) | B (MeV) | B/A (MeV) | B/A liquid drop (MeV) |
|---|---|---|---|---|---|---|---|---|
| | | | | | | | | |
| | | | | | | | | |
| | | | | | | | | |

## Analysis

1. Graph B/A against A for the curve readings. Where is the peak, and how large is it? How does B/A change for light and for heavy nuclei?
2. Check one row: find B from Δ with the formula above, and compare with the demo's B.
3. Use your recorded B values to find Q for D + T fusion and for $$^{235}\mathrm{U} + n \to {}^{141}\mathrm{Ba} + {}^{92}\mathrm{Kr} + 3n$$. Compare with the demo's Q values.
4. Estimate the fission Q a second way: 236 nucleons go from about the B/A of uranium to about the B/A of the fragments. How close is this to your answer to Analysis 3?
5. Compare the energy released per nucleon of fuel in D + T fusion and in uranium fission.
6. Compare the liquid drop model's B/A with the measured values along the curve. Where does the model do worst? For tin 120 and lead 208, by how much does turning off the Coulomb term raise B/A, and why is the change larger for lead?

## Uncertainty

The AME2020 masses are known to a few keV or better for most stable nuclei, so the measured B/A values are good to about 0.0001 MeV. How does that compare with the differences between the liquid drop model and the data?

## Questions

1. Why do both fusion of light nuclei and fission of heavy nuclei release energy, while fusing two medium nuclei, or splitting one, does not?
2. Why does a massive star's core stop at iron group nuclei?
3. Helium 4 has a much larger B/A than its neighbors lithium 6 and helium 3. What does that say about the alpha particle, and why are alpha particles emitted in decay?
4. Why do heavy stable nuclei have more neutrons than protons?

## What to hand in

Prelab answers, the table copies and the graph of B/A against A, your Q values with the two estimates for fission, the liquid drop comparison, and answers to the questions. Identify data taken from the demo's tables.
