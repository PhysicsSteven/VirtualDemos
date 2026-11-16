# Parent and Daughter: Decay Chains
Student laboratory · Modern Physics

Textbook: OpenStax *University Physics*, Vol. 3, §10.3. Access for free at https://openstax.org/details/books/university-physics-volume-3.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/radioactive-decay.html?setup=bi210)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Two step chain; Short daughter, long parent (these two have a radioactive daughter, the subject of this worksheet); Coin flip nuclei; Carbon 14 dating; Iodine 131 (the Measuring a Half Life worksheet).

**Using the demo.**

- The tray shows every nucleus: parents are large balls, daughters slightly smaller balls in a second color, stable end products small gray balls. Each decay flashes, and the Geiger counter under the tray counts every decay. Choose 100, 400, 1,600 or 10,000 nuclei.
- Two step chain: bismuth 210 (half life 5.012 d) beta decays to polonium 210 (138.376 d), which alpha decays to stable lead 206. Short daughter, long parent: tellurium 132 (76.896 h) beta decays to iodine 132 (2.295 h), which decays to stable xenon 132. Half lives are the evaluated values (ENSDF); tiny side branches are left out, as the setup notes say.
- Time advances in steps (1 d for the bismuth chain, 0.5 h for the tellurium chain). In each step every nucleus changes with the exact probabilities for that step from the Bateman solution, decided by its own random number. Play runs the steps; Step takes one at a time.
- The middle plot shows the number of each kind against time with the expected curves dashed; the lower plot shows the decays in each time bin. The Display section can hide the expected curves and band. The Parent and daughter readouts show the activity ratio now and the expected values.
- Record reading stores the setup, the time and the number of parents, daughters and stable end products. Export to worksheet sends the readings to the Data table below; Clear starts a new series, which goes into a new copy of the table.

</details>

## Goal

Follow a parent that decays into a radioactive daughter. Find when the daughter peaks, and see how the daughter's activity can come to track the parent's.

## Background

A parent P decays with constant $$\lambda_P$$ into a daughter D, which decays with $$\lambda_D$$ into a stable end product. The parent simply decays, $$N_P = N_0e^{-\lambda_P t}$$, but the daughter is made by the parent as it decays itself:

$$\frac{dN_D}{dt} = \lambda_P N_P - \lambda_D N_D .$$

Starting with no daughters, the solution (Bateman's) is

$$N_D = N_0\,\frac{\lambda_P}{\lambda_D - \lambda_P}\left(e^{-\lambda_P t} - e^{-\lambda_D t}\right).$$

The daughter count rises, peaks and falls. At the peak $$dN_D/dt = 0$$, so there the two activities $$R_P = \lambda_P N_P$$ and $$R_D = \lambda_D N_D$$ are equal. The peak comes at

$$t_{\max} = \frac{\ln(\lambda_D/\lambda_P)}{\lambda_D - \lambda_P}.$$

If the daughter lives much shorter than the parent, after a few daughter half lives the ratio of activities settles at $$R_D/R_P = \lambda_D/(\lambda_D - \lambda_P)$$, just above 1: the daughter decays as fast as it is made. This is transient equilibrium.

## Before the lab

1. Find $$\lambda_P$$ and $$\lambda_D$$ for the bismuth 210 chain (5.012 d and 138.376 d), in 1/d. When does polonium 210 peak?
2. Do the same for the tellurium 132 chain (76.896 h and 2.295 h), in 1/h, and find the long time activity ratio $$R_D/R_P$$.
3. Show that $$N_P + N_D + N_S = N_0$$ at all times, where $$N_S$$ is the number of stable end products.
4. Show from $$dN_D/dt = \lambda_P N_P - \lambda_D N_D$$ that the activities are equal when the daughter count is at its peak.

## Safety

No hazards in the virtual lab. Polonium 210 is a strong alpha emitter, dangerous if swallowed or breathed in.

## Procedure

The demo starts running as soon as it opens and whenever you choose a setup, and choosing a number of nuclei starts a new sample. So for each chain: choose the setup, press 10,000 under Nuclei, press Pause and then Reset, so the clock above the plots reads t = 0. Both chain setups open at the slow ¼× speed. To reach each time, press Play, press Pause just before it, and press Step (one step is 1 d for bismuth, 0.5 h for tellurium) until the clock reads that time; then press Record reading. Clear throws away readings not yet sent, so press Export to worksheet before you Clear.

**Bismuth 210 to polonium 210.** The link opens the Two step chain setup. With 10,000 nuclei, open the Display section and uncheck Expected. Record a reading at the start, every 5 d to 60 d, then every 20 d to 300 d.

**Tellurium 132 to iodine 132.** Press Export to worksheet and Clear, then choose the tellurium chain (the setup named Short daughter, long parent) with 10,000 nuclei. Record a reading at the start, every 1 h to 12 h, then every 24 h to 192 h. Press Export to worksheet: this series goes into a new copy of the table.

## Data

| Reading | Setup and $$N_0$$ | Time $$t$$ | Parents $$N_P$$ | Daughters $$N_D$$ | Stable $$N_S$$ | Activity ratio R_D/R_P | ln N_D |
|---|---|---|---|---|---|---|---|
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |

The time unit is in the Setup column. Work out $$R_D/R_P = \lambda_D N_D/(\lambda_P N_P)$$ for the tellurium rows and for the bismuth rows from 15 d to 35 d (the others are not used), and $$\ln N_D$$ for the tellurium rows after the ratio has settled (Analysis 5).

## Analysis

1. For the bismuth chain (first copy), graph $$N_D$$ (vertical) against $$t$$ (horizontal). When is the daughter count largest? Compare with $$t_{\max}$$ from Before the lab question 1.
2. What is $$R_D/R_P$$ at your largest $$N_D$$? Explain the value.
3. Check that $$N_P + N_D + N_S = N_0$$ in three rows of your choice: an early one, one near the peak and a late one.
4. For the tellurium chain (second copy), graph $$R_D/R_P$$ (vertical) against $$t$$ (horizontal). Where does it settle, and how long does it take? Compare with Before the lab question 2.
5. After the ratio settles, graph $$\ln N_D$$ (vertical) against $$t$$ (horizontal) for those tellurium rows. What half life does its slope give, and whose half life is it?

## Uncertainty

The counts are random. Estimate the uncertainty of your peak time from the spread of $$N_D$$ near the peak (about $$\sqrt{N_D}$$), and of the settled activity ratio from the scatter of its last few values.

## Questions

1. In the tellurium chain, the iodine 132 decays with a 2.3 h half life, yet after a day the sample still holds iodine 132. Why?
2. Hospitals get technetium 99m (6.0 h) from a "generator" of molybdenum 99 (66 h). Use transient equilibrium to explain how the generator works.
3. Radon 222 (3.8 d) comes from radium 226 (1600 yr). What is the ratio of their activities in an old rock, and why?

## What to hand in

Prelab answers, both table copies with their graphs, the peak time and settled ratio with uncertainties, and answers to the questions. Identify simulated data.
