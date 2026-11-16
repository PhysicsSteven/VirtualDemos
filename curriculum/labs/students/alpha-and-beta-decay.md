# Alpha and Beta Decay
Student laboratory · Modern Physics

Textbook: OpenStax *University Physics*, Vol. 3, §7.6 and §10.4. Access for free at https://openstax.org/details/books/university-physics-volume-3.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/radioactive-decay.html?view=alpha)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Views in the demo:** Many nuclei (the Measuring a Half Life and Parent and Daughter worksheets); Alpha decay and Beta decay (this worksheet), which show one nucleus at a time.

**Using the demo.**

- Alpha decay has twenty even–even alpha emitters, from samarium 146 to californium 252. For the chosen one it shows the potential energy of the alpha particle against its distance from the center of the daughter nucleus, the Geiger–Nuttall plot of all twenty, and a readout table: Q, the alpha energy, the radius R where the alpha and the daughter touch, the barrier top, the turning point b, the Gamow factor, the model and measured half lives and their ratio.
- The model is Gamow's (1928): the alpha rattles inside and hits the wall $$f = v/2R$$ times a second, and at each hit it tunnels through the Coulomb barrier with the WKB chance $$e^{-2G}$$. R is $$r_0(A_d^{1/3} + 4^{1/3})$$, and the nuclear radius constant $$r_0$$ can be changed from 1.00 to 1.60 fm. Masses (for Q), half lives and the alpha branch are from the NUBASE2020 evaluation; the measured half life is the partial alpha half life, the half life divided by the share of decays that are alpha decays.
- Watch it decay waits a random time drawn from the measured half life, at a scale where one mean life takes 3 s.
- Beta decay has five beta emitters: the free neutron, tritium, carbon 14, phosphorus 32 and fluorine 18 (a positron emitter). Each decay draws the electron's energy from the allowed spectrum with the nonrelativistic Fermi function, and the histogram of your decays builds against the spectrum curve. One decay makes one; Run makes them continuously. The No neutrino setting shows what two body decay would give.
- Record reading stores one emitter: in the Alpha decay view its Q, r₀ and the measured and model half lives in seconds; in the Beta decay view its Q, the number of decays so far, their mean energy and the mean of the spectrum. Export to worksheet sends alpha readings to Table 1 and beta readings to Table 2; Clear starts a new series, which goes into a new copy of the table.

</details>

## Goal

Test Gamow's tunneling model of alpha decay against twenty measured half lives that span 26 powers of ten, find the nuclear radius constant that fits them, and use the energies of beta electrons to show that a third particle, the neutrino, carries energy away.

## Background

**Alpha decay.** A heavy nucleus can lower its energy by sending out an alpha particle, a helium 4 nucleus. The energy released, Q, comes from the masses. Momentum is shared with the daughter, so the alpha's kinetic energy is $$T_\alpha = Q\,m_d/(m_d + m_\alpha)$$, a little less than Q, and the same in every decay.

Outside the nucleus the alpha feels the Coulomb repulsion of the daughter, of charge $$Z_d e$$:

$$V(r) = \frac{2Z_d\,e^2}{4\pi\varepsilon_0\,r}, \qquad \frac{e^2}{4\pi\varepsilon_0} = 1.440\ \mathrm{MeV\,fm}.$$

At the nuclear surface R this barrier is about 28 MeV for uranium, far above Q (about 4 to 9 MeV). Classically the alpha can never get out. Quantum mechanically it tunnels through, from R to the turning point $$b = 2Z_d e^2/(4\pi\varepsilon_0 Q)$$ where $$V = Q$$ (§7.6). The chance per hit on the barrier is $$e^{-2G}$$, with the Gamow factor

$$G = \frac{\sqrt{2\mu Q}}{\hbar}\,b\left[\arccos\sqrt{R/b} - \sqrt{(R/b)(1 - R/b)}\right],$$

where $$\mu$$ is the reduced mass of the alpha and the daughter. With f hits a second, the decay constant is $$\lambda = f e^{-2G}$$ and $$T_{1/2} = \ln 2/\lambda$$. Because G is in an exponent, a small change in Q changes the half life enormously.

When $$R \ll b$$ the bracket is close to $$\pi/2$$, and $$2G$$ is proportional to $$Z_d/\sqrt{Q}$$. So $$\log_{10} T_{1/2}$$ is nearly a straight line against $$Z_d/\sqrt{Q}$$: the Geiger–Nuttall rule, found by experiment in 1911, before anyone knew why.

**Beta decay.** In $$\beta^-$$ decay a neutron in the nucleus becomes a proton, and an electron comes out; in $$\beta^+$$ decay a proton becomes a neutron and a positron comes out. If only the electron and the daughter came out, momentum and energy would fix the electron's energy at nearly Q every time, as for the alpha. Instead the electrons come out with every energy from 0 to Q. Pauli proposed (1930) that a third particle, the neutrino (an antineutrino in $$\beta^-$$ decay), takes the rest. For an allowed decay the spectrum is

$$N(T) \propto F(Z_d, T)\,p\,E\,(Q - T)^2,$$

with p and E the electron's momentum and total energy and F the Fermi function, which accounts for the daughter's charge pulling the electron back (or pushing a positron away). For a slow electron and no Coulomb effect $$pE \propto \sqrt{T}$$, and the mean kinetic energy is exactly Q/3.

## Before the lab

1. Uranium 238 alpha decays to thorium 234 with Q = 4.270 MeV. Find the alpha's kinetic energy, taking the masses as 234 u and 4 u. Where does the rest of Q go?
2. Show that for $$R \ll b$$, $$\log_{10} T_{1/2}$$ grows linearly with $$Z_d/\sqrt{Q}$$, and that the slope is $$2\pi(1.440\ \mathrm{MeV\,fm})\sqrt{2\mu c^2}/(\hbar c\,\ln 10)$$. Evaluate it for $$\mu c^2 = 3727$$ MeV and $$\hbar c = 197.3$$ MeV fm, with Q in MeV.
3. A neutron at rest decays into a proton and an electron only (no third particle). Using momentum conservation, explain why the electron would always have the same energy.

## Safety

No hazards in the virtual lab. Real alpha emitters are dangerous if swallowed or breathed in; real beta sources are handled with shielding and tongs.

## Procedure

**Twenty alpha emitters.** The link opens the Alpha decay view. Under Nucleus in the side panel there is a button for each of the twenty emitters, the Nuclear radius constant r₀ slider (it opens at 1.20 fm) and a table of readouts. With r₀ at 1.20 fm, press each emitter's button and then Record reading.

**Fitting the radius constant.** Press Export to worksheet (Table 1) and then Clear. For each of ²¹⁰Po, ²¹²Po, ²²²Rn, ²³⁸U and ²⁵²Cf, press its button, click the r₀ slider and use the arrow keys (0.01 fm a press) until Model ÷ measured in the Nucleus table is closest to 0 decades, then press Record reading. Export them to a new copy of Table 1.

**Beta spectra.** Press Clear, then the Beta decay button at the top of the picture. For each of the five beta emitters, press its button under Nucleus (this starts a fresh histogram), press Run (pick 200/s to go faster) and press Stop once Decays in the Nucleus table reads at least 1000; then press Record reading. Then for carbon 14, press Reset, run again to at least 1000 decays and record; do this four times. Press Export to worksheet: the readings go to Table 2.

**No neutrino.** For carbon 14, check No neutrino, as expected before 1930 (under Nucleus), press Run, and note what the histogram does. Press Stop and uncheck it again.

## Data

Table 1. Alpha emitters.

| Reading | Emitter | Daughter Z_d | Q (MeV) | r₀ (fm) | Measured T½ (s) | Model T½ (s) | Z_d/√Q (MeV^−1/2) | log₁₀ T½ measured |
|---|---|---|---|---|---|---|---|---|
| | | | | | | | | |
| | | | | | | | | |
| | | | | | | | | |

In the first copy, fill in $$Z_d/\sqrt{Q}$$ and the logarithm of the measured T½ (in seconds) for each row; leave those two columns empty in the second copy.

Table 2. Beta spectra.

| Reading | Nuclide | Q (keV) | Decays N | Mean energy, your decays (keV) | Mean energy, spectrum (keV) | Q/3 (keV) | Mean ÷ Q |
|---|---|---|---|---|---|---|---|
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |

Fill in Q/3 and the ratio of the mean of your decays to Q.

## Analysis

1. Graph the measured $$\log_{10} T_{1/2}$$ (vertical) against $$Z_d/\sqrt{Q}$$ (horizontal) for the twenty emitters (Table 1, first copy) and fit a straight line. Do all twenty fall on one line? Fit the four polonium isotopes ²¹²Po to ²¹⁸Po on their own too (with a calculator, since the graph fits every row). Compare the slopes with your answer to Before the lab 2, and say which approximation in that estimate could explain the difference.
2. From the second copy of Table 1, find the mean and the standard deviation of your five values of $$r_0$$. Compare with the nuclear radius $$R = r_0 A^{1/3}$$, $$r_0 \approx 1.2$$ fm, found by electron scattering (§10.1). Which emitter is the outlier?
3. For each beta emitter in Table 2, compare the mean of your decays with the mean of the spectrum and with Q/3. Which nuclides come out above 1/3 of Q and which below? Explain using the electron's speed (is it relativistic?) and the sign of the Coulomb force on it.
4. For each beta emitter find the mean energy the neutrino (or antineutrino) carries away per decay, Q minus the mean electron energy.

## Uncertainty

Find the mean and the standard deviation of the five carbon 14 means. The standard deviation is the uncertainty of one run's mean. Is the difference between your first carbon 14 mean and the spectrum mean within it? With this uncertainty, are the differences from Q/3 in Analysis 3 real?

## Questions

1. Tritium has one of the smallest Q values of any beta emitter, 18.59 keV. Why would measuring the very top of its electron spectrum, near T = Q, tell you about the neutrino's mass?

## What to hand in

Prelab answers, both tables with their computed columns, the Geiger–Nuttall graph with its fit, your mean $$r_0$$ with its spread, the neutrino energies, and answers to the questions. Identify simulated data.
