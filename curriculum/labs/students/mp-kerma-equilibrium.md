# Kerma, Dose and Charged Particle Equilibrium
Student worksheet · Medical Physics

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/dosimetry.html?ws=mp-kerma-equilibrium&setup=co60)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** ⁶⁰Co buildup; Equilibrium at depth; 0.5 MeV: a thin buildup; 4 MeV: a deep buildup; Saturation curve, protons; High dose per pulse; ⁶⁰Co: hardly any recombination; Calibrate a 150 MeV layer; 70 MeV: z_ref = 1 g/cm²; Where N_D,w comes from.

**Using the demo.**

- This worksheet uses the **Kerma and dose** view. A broad beam of photons of one energy enters water from the left. The dashed line is the collision kerma of the primary photons from NIST's $$\mu_{en}/\rho$$, the solid line the model's absorbed dose, and the pink points a Monte Carlo estimate of the dose, each with its standard uncertainty.
- Start sends photons in and counts histories: each dot in the picture is an interaction and each purple line the Compton electron it sets moving, to scale. Pause stops the count; Start again clears the histories. Changing the energy or the depths shown starts a new count.
- The depth probe (the vertical line) can be dragged, moved with the arrow keys or set on the card. The readouts give the collision kerma, the model's dose and the Monte Carlo dose at the probe.
- Record reading stores the numbers at the probe. Export to worksheet sends them to the first Data table; Clear starts a new series, which goes into a new copy of the table.
- The model: each Compton electron goes straight along its starting direction for its CSDA range and leaves its collision stopping power (ESTAR) along the way; scattered photons leave the water. The Lab fold lists what it leaves out.

</details>

## Goal

Measure how collision kerma and absorbed dose part company in the first millimeters of water and run side by side past the buildup, test transient charged particle equilibrium against a Monte Carlo calculation with its statistical uncertainty, and relate the depth of the dose maximum to the range of the fastest secondary electrons.

## Background

**Kerma** (kinetic energy released per unit mass) is the energy photons hand to charged particles in a small mass, divided by that mass. Its **collision** part leaves out the energy the electrons later radiate as bremsstrahlung. For a fluence $$\Phi$$ of primary photons of energy $$h\nu$$ at the surface, the collision kerma at depth $$z$$ is

$$K_{col}(z) = \Phi\, h\nu \left(\frac{\mu_{en}}{\rho}\right) e^{-\mu z}.$$

**Absorbed dose** $$D$$ is the energy actually left in the mass. The electrons set moving at depth $$z'$$ leave their energy farther on, so the dose at $$z$$ is the kerma from shallower depths carried forward:

$$D(z) = \int_0^{z} K_{col}(z - x)\, G(x)\, dx, \qquad \int_0^{\infty} G(x)\, dx = 1,$$

where $$G(x)$$ is the share of the energy given to the electrons at one depth that ends up a distance $$x$$ deeper. Near the surface, electrons arrive from fewer depths than they leave, so $$D < K_{col}$$: the **buildup**. Once $$z$$ is deeper than the farthest electron reaches, $$R$$, the integral runs over all of $$G$$, and

$$\frac{D}{K_{col}} = \beta = \int_0^{R} G(x)\, e^{\mu x}\, dx > 1:$$

the dose and the kerma fall with the same exponential and keep a fixed ratio, **transient charged particle equilibrium**. If $$\mu R$$ were zero there would be true equilibrium, $$\beta = 1$$.

**Monte Carlo.** The demo also follows photons one at a time, choosing each interaction depth and electron energy at random from the same physics. In each depth bin (1/50 of the depths shown, or 0.5 cm for Equilibrium at depth) the dose is the average over batches of histories, and the readout at the probe is read linearly between the centers of the two nearest bins; its standard uncertainty is the standard deviation of the batch means divided by $$\sqrt{n_{batch}}$$, and it shrinks as $$1/\sqrt{N}$$ with the number of histories $$N$$.

## Before the lab

1. Suppose every electron goes straight forward and spreads its energy evenly over a distance $$R$$, so $$G(x) = 1/R$$ for $$0 \le x \le R$$. Show that for $$z < R$$, $$D(z) = K_{col}(0)\,\dfrac{1 - e^{-\mu z}}{\mu R}$$, and that for $$z \ge R$$, $$\beta = \dfrac{e^{\mu R} - 1}{\mu R} \approx 1 + \dfrac{\mu R}{2}$$.
2. In that same model, at what depth is the dose largest? Why is it not at the surface, where the kerma is largest?
3. From the NIST table below, find $$\mu$$ for ⁶⁰Co photons (1.25 MeV) in water and the fraction of the photons' energy that becomes collision kerma, $$\mu_{en}/\mu$$. Where does the rest of the energy go?
4. The most energetic Compton electron from a photon of energy $$h\nu$$ has $$T_{max} = h\nu\, \dfrac{2k}{1 + 2k}$$, with $$k = h\nu/m_ec^2$$. Find $$T_{max}$$ for 1.25 MeV photons.

**Data from NIST** (liquid water, Hubbell and Seltzer), $$\mu/\rho$$ and $$\mu_{en}/\rho$$ in cm²/g:

- 0.5 MeV: 0.09687 and 0.03299
- 1.25 MeV: 0.06323 and 0.02965
- 2.0 MeV: 0.04942 and 0.02608
- 4.0 MeV: 0.03403 and 0.02066

## Safety

No hazards in the virtual lab.

## Procedure

**Part 1: the ⁶⁰Co buildup.** Open the ⁶⁰Co buildup setup (1.25 MeV, depths 0 to 2.5 electron ranges, $$\Phi = 10^{10}$$ photons per cm²). Run at least 2 million histories, then pause. Record a reading with the probe at 0.05, 0.10, 0.15, 0.20, 0.30, 0.40, 0.45, 0.50, 0.60, 0.80 and 1.00 cm. Send the readings to the worksheet, then clear them.

**Part 2: equilibrium at depth.** Open Equilibrium at depth (1.25 MeV, 0 to 20 cm) and run at least 2 million histories. Record readings at 2, 4, 6, 8, 10, 12, 15 and 18 cm. Send them to the worksheet (a second copy of the first table), then clear them. In both copies fill in the last column.

**Part 3: the buildup against photon energy.** For 0.5, 1.25, 2 and 4 MeV, write the most energetic electron's energy, its CSDA range, the model's $$d_{max}$$ and $$\beta$$ from the readouts into the second table.

**Part 4: how the uncertainty falls.** Back in Part 1's setup, start again and note the Monte Carlo dose and its uncertainty at 0.80 cm after about 0.5, 2 and 8 million histories. Write them under the Uncertainty answer.

## Data

| Reading | Depth $$z$$ (cm) | Collision kerma $$K_{col}$$ (Gy) | Model dose $$D$$ (Gy) | $$D/K_{col}$$ | Monte Carlo dose $$D_{MC}$$ (Gy) | Uncertainty $$u(D_{MC})$$ (Gy) | $$\ln(D_{MC}/1\ \mathrm{Gy})$$ |
|---|---|---|---|---|---|---|---|
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |

### Buildup against energy

| Photon energy (MeV) | Most energetic electron $$T_{max}$$ (MeV) | Its CSDA range (mm) | Model $$d_{max}$$ (mm) | Model $$\beta$$ |
|---|---|---|---|---|
| 0.5 | | | | |
| 1.25 | | | | |
| 2 | | | | |
| 4 | | | | |

## Analysis

1. From Part 2, graph $$\ln(D_{MC}/1\ \mathrm{Gy})$$ against depth. Fit a straight line and give its slope with its standard error. Compare $$-\text{slope}$$ with $$\mu$$ for 1.25 MeV from the NIST table: do the dose and the kerma fall with the same attenuation coefficient past the buildup?
2. From Part 2, find $$D_{MC}/K_{col}$$ at each depth with its uncertainty $$u(D_{MC})/K_{col}$$, and their weighted mean. Compare it with the model's $$\beta$$ and with the estimate $$1 + \mu R/2$$ from Before the lab, using $$R$$ = the CSDA range of the most energetic electron. Why does the even spreading estimate come out larger than the model's $$\beta$$?
3. From Part 1, compute $$\chi^2 = \sum \left[(D_{MC} - D)/u(D_{MC})\right]^2$$ over your readings and divide by the number of readings. Do the Monte Carlo and the model agree within the Monte Carlo's uncertainty? (A value near 1 means yes. Neighboring readings share electrons and batches, so they are not independent: one run that fluctuates high at one depth tends to be high at the next.)
4. From Part 1, at which depth is $$D/K_{col} = 1$$? Explain why the dose can exceed the kerma deeper than that, when no energy is created.
5. From the second table, graph the model's $$d_{max}$$ against the CSDA range of the most energetic electron. What is the relation in this model, and why? Measured $$d_{max}$$ for ⁶⁰Co is about 0.5 cm; list two things the model leaves out that change the real buildup.
6. Megavoltage beams spare the skin. Use your table to explain why, and why the sparing grows with energy.

## Uncertainty

Use Part 4: by what factor did $$u(D_{MC})$$ fall each time the number of histories went up four times? Compare with $$1/\sqrt{N}$$. How many histories would give a 0.1 % uncertainty at 0.80 cm? The model's own uncertainty is not statistical: name the largest approximation in it and say which direction it pushes $$\beta$$.

## Questions

1. Kerma is defined for any mass, however small, but dose equals collision kerma only under charged particle equilibrium. Why does an ion chamber in a ⁶⁰Co beam need a wall (or a buildup cap) at least as thick as the electrons' range?
2. In a proton beam the primary particles are charged. Is "kerma" a useful quantity there? What takes its place?
3. At 4 MeV about 6 % of interactions are pair production. How would including them change $$\beta$$ and $$d_{max}$$ in this model?
4. A patient's skin dose under a 6 MV beam is much lower than the dose at 1.5 cm. Where, in terms of kerma and dose, is the energy that would have gone into the skin?

## What to hand in

Prelab answers, both copies of the first Data table with the graph from Part 2, the energy table with its graph, the answers to the analysis and uncertainty sections, and answers to the questions. Identify simulated data.
