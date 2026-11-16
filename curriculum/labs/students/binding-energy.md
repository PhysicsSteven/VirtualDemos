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
- The Build view makes a nucleus from protons and neutrons, one at a time. It shows whether NUBASE2020 lists it as stable, decaying (with its main decay mode and half life), not bound at all, or not listed, with its binding energy and the separation energies $$S_n$$ and $$S_p$$, the energy needed to pull off its last neutron or proton. A small chart of nuclides around it is colored by decay mode. Record reading there stores the nucleus, its status and $$S_n$$ and $$S_p$$; those readings go to Table 2.
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
4. Predict roughly where B/A is largest, and why it falls for heavier nuclei. Then decide: when uranium 235 captures a neutron and splits into barium 141, krypton 92 and three neutrons, is the total binding energy of the products larger than that of the uranium, smaller, or the same? Say where you think the energy released comes from.
5. The separation energy of the last neutron is $$S_n = B(Z, N) - B(Z, N - 1)$$. What does a negative $$S_n$$ mean for the nucleus?

## Safety

No hazards in the virtual lab.

## Procedure

**The curve.** The link opens The curve of binding energy setup. Under Selected nuclide, set the Mass number A slider (click it, then the arrow keys step A by 1); it picks the most tightly bound nuclide of that A, named in the Nuclide readout. Press Record reading at A = 2, 3, 4, 6, 9, 12, 16, 20, 28, 40, 56, 62, 90, 120, 160, 208 and 238. Add uranium 235 and helium 3: set A to 235 or 3, then press Z − or Z + under Step Z until the Nuclide readout shows ²³⁵U or ³He, and record.

**Reactions.** Under Energy from the curve, press D + T and then ²³⁵U fission, and write down Q from the masses for each (these are not recorded readings). Then record the two fission fragments, barium 141 and krypton 92, setting each A on the slider and stepping Z with Z − and Z +.

**Liquid drop.** Press The liquid drop model under Setups; it selects tin 120. Record it, then set A to 208 (lead 208) and record it, with all five terms checked under Liquid drop model. Press Export to worksheet (the curve, the fragments and these two go into one copy of the table), then Clear. Uncheck Coulomb and record tin 120 and lead 208 again, so they go into a new copy. Export, Clear, and check Coulomb again.

**Part 2: the edges of the chart.** Press Build (at the top of the picture), then Empty. Press Protons + eight times and Neutrons + three times (oxygen 11) and press Record reading. Press Neutrons + and Record reading again, up to 20 neutrons. Export to worksheet: these readings go to Table 2.

## Data

| Reading | Nuclide | Z | N | A | Mass excess Δ (MeV) | B (MeV) | B/A (MeV) | B/A liquid drop (MeV) |
|---|---|---|---|---|---|---|---|---|
| | | | | | | | | |
| | | | | | | | | |
| | | | | | | | | |

Table 2. Building nuclei.

| Reading | Nucleus | Z | N | Status | Half life | $$S_n$$ (MeV) | $$S_p$$ (MeV) |
|---|---|---|---|---|---|---|---|
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |

## Analysis

1. Graph B/A (vertical) against A (horizontal) for the curve readings (the first copy of the table). Where is the peak, and how large is it? How does B/A change for light and for heavy nuclei?
2. Check one row: find B from its Mass excess Δ with the formula above, and compare with the demo's B.
3. Use your recorded B values to find Q for D + T fusion and for $$^{235}\mathrm{U} + n \to {}^{141}\mathrm{Ba} + {}^{92}\mathrm{Kr} + 3n$$. Compare with the Q from the masses values you wrote down.
4. Compare the energy released per nucleon of fuel in D + T fusion and in uranium fission.
5. Compare the liquid drop model's B/A with the measured values along the curve. Where does the model do worst? For tin 120 and lead 208, by how much does turning off the Coulomb term raise B/A, and why is the change larger for lead?
6. From Table 2, find the heaviest bound oxygen: the neutron drip line. How does $$S_n$$ change as neutrons are added, and how does it alternate between even and odd N? Explain the alternation.
7. Find the lightest bound oxygen: the proton drip line. Which side of the stable isotopes is the chart wider, and why?

## Uncertainty

The AME2020 masses are known to a few keV or better for most stable nuclei, so the measured B/A values are good to about 0.0001 MeV. How does that compare with the differences between the liquid drop model and the data?

## Questions

1. Helium 4 has a much larger B/A than its neighbors lithium 6 and helium 3. What does that say about the alpha particle, and why are alpha particles emitted in decay?
2. Was your answer to the uranium part of Before the lab 4 right? Add the B values you recorded for barium 141 and krypton 92 and compare the sum with B for uranium 235. Binding energy is the energy you would have to supply to pull a nucleus apart, so explain why a reaction that ends with more of it gives energy out, and use the same idea to say why a massive star's core stops at iron group nuclei.

## What to hand in

Prelab answers, the table copies and the graph of B/A against A, your Q values, the liquid drop comparison, Table 2 with the drip lines you found, and answers to the questions. Identify data taken from the demo's tables.
