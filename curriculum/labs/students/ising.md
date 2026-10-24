# The Ising Model
Student laboratory · Thermodynamics

Textbook: OpenStax *University Physics*, Vol. 2, §12.7 (ferromagnetism and the Curie temperature) and §4.7 (entropy on a microscopic scale: counting arrangements). The Ising model itself goes beyond the book. Access for free at https://openstax.org/details/books/university-physics-volume-2.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/ising.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Cold: one domain; Hot: paramagnet; At $$T_c$$: fractal domains; Quench and coarsen; Hysteresis; Antiferromagnet.

**Using the demo.**

- The lattice shows every spin, amber for up and navy for down. The thermometer beside it and the field bar below it can be dragged, and dragging on the lattice paints spins. The plots show the magnetization and energy as the run goes, the readings you have taken against temperature, and the magnetization against the field.
- The units are those of the model: the coupling $$J = 1$$ and Boltzmann's constant $$k = 1$$, so temperatures are in units of $$J/k$$ and energies in units of $$J$$. Time is counted in sweeps, one attempted update per spin.
- Three update rules draw the spins with the Boltzmann probability: Metropolis and heat bath change one spin at a time, and Wolff flips a whole cluster of aligned spins at once (only with no field).
- A measurement first lets the lattice settle for a number of sweeps that it throws away, then averages over more sweeps. It gives the mean of $$\lvert m\rvert$$, the mean energy per spin, the heat capacity and susceptibility from the fluctuations, the autocorrelation time, and the error of each; the errors allow for the readings being correlated. A temperature scan measures at 17 temperatures from 1.5 to 3.6, heating from the ordered state.
- The exact results of Onsager, Yang and Kaufman are drawn for comparison where they exist (no field). They can be hidden.
- Every measurement you keep goes into the demo's table. Export to worksheet sends the table to the first data table below, or to the second when every reading is at $$T_c$$; Clear starts a new series, which goes into a new copy of the table.

</details>

## Goal

Watch order appear in a magnet as it cools, test the simulation against the exact solution of the two dimensional Ising model, and use lattices of different sizes to measure how the magnetization, susceptibility and heat capacity behave at the critical point.

## Background

**The model.** Each site of an $$L \times L$$ square lattice holds a spin $$s = +1$$ (up) or $$-1$$ (down). The energy is

$$E = -J\sum_{\text{neighbors}} s_i s_j - h\sum_i s_i,$$

where the first sum runs over each pair of nearest neighbors once. With $$J > 0$$ neighbors lower their energy by agreeing, like the atoms of a ferromagnet; $$h$$ is an applied field. The edges wrap around, so every spin has four neighbors. The magnetization per spin is $$m = \frac{1}{N}\sum s_i$$ and the energy per spin is $$e = E/N$$, where $$N = L^2$$.

**Thermal equilibrium.** At temperature $$T$$ an arrangement of energy $$E$$ occurs with probability proportional to $$e^{-E/kT}$$. The Metropolis rule produces this: pick a spin, find the energy change $$\Delta E$$ if it flipped, and flip it with probability 1 if $$\Delta E \le 0$$ and $$e^{-\Delta E/kT}$$ otherwise. With no field, flipping a spin $$s$$ whose four neighbors add up to $$S$$ changes the energy by $$\Delta E = 2JsS$$.

**Fluctuations.** The heat capacity and susceptibility per spin come from how much $$e$$ and $$m$$ fluctuate during the run:

$$c = \frac{N\left(\langle e^2\rangle - \langle e\rangle^2\right)}{kT^2},\qquad \chi = \frac{N\left(\langle m^2\rangle - \langle \lvert m\rvert\rangle^2\right)}{kT}.$$

The heat capacity found this way should agree with $$c = d\langle e\rangle/dT$$.

The susceptibility uses $$\langle \lvert m\rvert\rangle$$ in place of $$\langle m\rangle$$, the usual form on a finite lattice: with no field a long run flips between up and down, so $$\langle m\rangle$$ averages to zero and the response $$\chi_{\text{resp}} = N\left(\langle m^2\rangle - \langle m\rangle^2\right)/kT$$ would grow in proportion to $$N$$ below $$T_c$$ from those flips instead of falling. The two are not the same quantity. Far above $$T_c$$, where the spins are nearly independent, $$\langle \lvert m\rvert\rangle^2 \approx (2/\pi)\langle m^2\rangle$$, so this $$\chi$$ is $$(1 - 2/\pi) \approx 0.363$$ times $$N\langle m^2\rangle/kT$$. Both peak near $$T_c$$ and grow with $$L$$ with the same critical exponent, which is what the size comparison below uses.

**The exact solution.** Onsager solved the model with no field on an infinite lattice in 1944. Order appears below the critical temperature

$$T_c = \frac{2J}{k\ln(1 + \sqrt{2})} = 2.269185\ J/k,$$

where the energy per spin is $$-\sqrt{2}\,J$$ and the heat capacity grows without limit. Below $$T_c$$ the magnetization is (Yang, 1952)

$$m = \left[1 - \sinh^{-4}\!\left(\frac{2J}{kT}\right)\right]^{1/8}.$$

**Finite lattices.** A finite lattice has no sharp transition: at $$h = 0$$ it can flip as a whole between up and down, so the demo averages $$\lvert m\rvert$$. At $$T_c$$ the exact theory predicts how its properties change with the size $$L$$:

$$\langle \lvert m\rvert\rangle \propto L^{-1/8},\qquad \chi \propto L^{7/4},\qquad c \approx \frac{8K_c^2}{\pi}\ln L + \text{constant},$$

where $$K_c = J/kT_c = 0.440687$$, so $$8K_c^2/\pi = 0.4945$$.

**Critical slowing down.** Successive sweeps are not independent. The integrated autocorrelation time $$\tau_{\text{int}}$$ is about the number of sweeps between independent readings, so a run of $$n$$ sweeps holds about $$n/(2\tau_{\text{int}})$$ independent samples. At $$T_c$$, for Metropolis updates, $$\tau_{\text{int}} \propto L^z$$ with $$z = 2.17$$ (Nightingale and Blöte, 1996). Cluster updates such as Wolff's are designed to avoid this.

## Before the lab

1. With $$J = 1$$ and no field, find $$\Delta E$$ for flipping a spin when all four of its neighbors agree with it, when three do, and when two do. What is the Metropolis probability of each flip at $$T = 1.5$$ and at $$T_c$$?
2. Find the energy per spin when every spin is up. Then find it for a checkerboard, with every neighbor opposite. What does it approach at very high temperature?
3. Show that $$\sinh(2/T_c) = 1$$, so Yang's formula gives $$m = 0$$ at $$T_c$$. Then find $$m$$ at $$T = 2.0$$.
4. By what factor do $$\langle \lvert m\rvert\rangle$$ and $$\chi$$ change at $$T_c$$ from $$L = 32$$ to $$L = 256$$? By how much does $$c$$ grow?
5. Each Metropolis sweep of a $$128 \times 128$$ lattice takes 16 times the work of a $$32 \times 32$$ sweep. Use $$z = 2.17$$ to find how many times more computing an independent sample at $$T_c$$ costs on the larger lattice.

## Safety

No hazards in the virtual lab.

## Procedure

Keep the field at zero and the coupling ferromagnetic ($$J = +1$$) throughout.

**Heating through $$T_c$$.** On a $$64 \times 64$$ lattice with Metropolis updates, discard 1000 sweeps and average over 5000. Run a temperature scan from 1.5 to 3.6 and keep every reading.

**At $$T_c$$ with cluster updates.** Clear. Set $$T$$ to exactly $$T_c$$ and use Wolff updates. Discard 1000 sweeps and average over 20 000. Measure on lattices of 32, 64, 128 and 256. The largest can take a few minutes.

**Critical slowing down.** Clear. Still at $$T_c$$, use Metropolis updates. Discard 5000 sweeps and average over 100 000. Measure on lattices of 32, 64 and 128.

## Data

**Heating through $$T_c$$.**

| Reading | Lattice and update | Temperature $$T$$ | Magnetization ⟨∣m∣⟩ | ± | Energy per spin ⟨e⟩ | Heat capacity $$c$$ | ± | ⟨∣m∣⟩⁸ | sinh⁻⁴(2/T) |
|---|---|---|---|---|---|---|---|---|---|
| | | | | | | | | | |
| | | | | | | | | | |
| | | | | | | | | | |

**At the critical temperature.**

| Reading | Update | Lattice size $$L$$ | Magnetization ⟨∣m∣⟩ | Heat capacity $$c$$ | Susceptibility $$\chi$$ | $$\tau_{\text{int}}$$ (sweeps) | ln $$L$$ | ln ⟨∣m∣⟩ | ln $$\chi$$ |
|---|---|---|---|---|---|---|---|---|---|
| | | | | | | | | | |
| | | | | | | | | | |
| | | | | | | | | | |

## Analysis

1. For the scan readings at $$T \le 2.2$$, fill in the last two columns and graph $$\langle \lvert m\rvert\rangle^8$$ against $$\sinh^{-4}(2/T)$$. What slope and intercept does Yang's formula predict? How close are yours?
2. Where does $$\langle e\rangle$$ change fastest with temperature, and where is $$c$$ largest? Estimate $$d\langle e\rangle/dT$$ from the readings at 2.8 and 3.0 and compare it with the mean of $$c$$ at those two temperatures. Do the same with 2.25 and 2.35, around the peak, and explain why the agreement is worse there.
3. Compare your $$\langle e\rangle$$ at the lowest temperature with the energy of the fully aligned state, and at the highest with the high temperature limit (prelab 2).
4. Above $$T_c$$, $$\langle \lvert m\rvert\rangle$$ does not fall to zero. Compare its value at 3.6 with $$1/\sqrt{N}$$, and explain why a finite lattice always shows some magnetization.
5. For the Wolff readings at $$T_c$$, fill in the log columns. Graph $$\ln \langle \lvert m\rvert\rangle$$ against $$\ln L$$ and $$\ln \chi$$ against $$\ln L$$, and compare the slopes with $$-1/8$$ and $$7/4$$.
6. Graph $$c$$ against $$\ln L$$ for the Wolff readings. Compare the slope with $$8K_c^2/\pi$$.
7. Compare $$\tau_{\text{int}}$$ for the two update rules at the same $$L$$. From your Metropolis readings at 32 and 128, find $$z$$ from $$\tau_{\text{int}} \propto L^z$$ and compare with 2.17. How many independent samples did each run hold, and what does that suggest about the $$\tau_{\text{int}}$$ measured on the larger lattices?

## Uncertainty

Monte Carlo readings carry a statistical error that shrinks as one over the square root of the number of independent samples, not of sweeps. Use the ± of $$\langle \lvert m\rvert\rangle$$ at $$L = 256$$ shown in the demo's table (write it next to your reading) to find the uncertainty of $$\ln \langle \lvert m\rvert\rangle$$ there, and compare the scatter of your points about the line in Analysis 5 with these errors. For the Metropolis run at $$L = 128$$, how many independent samples were there, and how far would you trust its error bars (and its $$\tau_{\text{int}}$$, which is itself estimated from the same run)?

## Questions

1. Choose Hysteresis. In equilibrium below $$T_c$$ the magnetization would flip as soon as $$h$$ changes sign, yet the lattice stays magnetized against the field until $$h$$ is near $$\mp 0.5$$. Why? What would a slower sweep of the field do?
2. Choose Antiferromagnet ($$J = -1$$). Flipping every second spin, in a checkerboard pattern, turns any arrangement of the ferromagnet into one of the antiferromagnet with the same energy. What does that say about its critical temperature and its energy at each $$T$$?
3. Choose Quench and coarsen. Domains grow roughly as the square root of the time. How much longer does it take for the typical domain to double in size?
4. At $$h = 0$$ a long enough run on a finite lattice gives $$\langle m\rangle = 0$$ at every temperature, even well below $$T_c$$. Why, and why does the demo average $$\lvert m\rvert$$ instead?
5. Iron loses its magnetism at its Curie temperature, 1043 K. If iron were a two dimensional Ising magnet, what coupling $$J$$ (in eV) would give that $$T_c$$? Use $$k = 8.617 \times 10^{-5}$$ eV/K.

## What to hand in

Prelab answers, the table copies with their graphs and fits, the comparison with Yang's formula, the three exponents from the critical point, your value of $$z$$, and answers to the questions. Identify simulated data.
