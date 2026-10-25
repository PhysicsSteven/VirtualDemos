# A Technetium Generator
Student laboratory · Medical Physics

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/radioactive-decay.html?setup=mo99)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** ⁹⁹Mo generator (this worksheet); Technetium 99m; Fluorine 18 (PET); Iridium 192; Cobalt 60; the chains and single isotopes of the Modern Physics worksheets.

**Using the demo.**

- The tray shows every nucleus: ⁹⁹Mo as large balls, ⁹⁹ᵐTc as slightly smaller balls in a second color, ⁹⁹Tc as small gray balls. Choose 100, 400, 1600 or 10 000 nuclei.
- Half lives are the evaluated values (ENSDF; Browne and Tuli, Nucl. Data Sheets 145, 25 (2017)): ⁹⁹Mo 65.924 h, ⁹⁹ᵐTc 6.0072 h. A share B = 0.886 of the ⁹⁹Mo decays feed ⁹⁹ᵐTc (the value in the prescribing information of the Ultra‑TechneKow V4 generator; nuclear data compilations give 87 to 88.6%); the rest go straight to ⁹⁹Tc, whose 2.1 × 10⁵ yr half life makes it stable on this scale.
- Time advances in steps of 0.5 h. In each step every nucleus changes with the exact probabilities for that step, decided by its own random number, so the counts scatter about the Bateman curves as real counts would.
- Elute now takes every ⁹⁹ᵐTc nucleus off the column, as saline washing the column would; Elute every 24 h does it at each whole day. The readouts show the time of the last elution, how many ⁹⁹ᵐTc nuclei it took off and their activity. A real column releases about 90% of its technetium; the demo's elution takes all of it.
- Record reading stores the time, the counts of each kind and the last elution. Export to worksheet sends the readings to the Data tables below; Clear starts a new series, which goes into a new copy of the table.

</details>

## Goal

Measure how technetium 99m grows back on a molybdenum 99 generator after it is eluted, find the time of its peak, and measure the branching share B from the transient equilibrium between parent and daughter.

## Background

Most nuclear medicine scans use technetium 99m: its 141 keV γ ray suits a gamma camera, and its 6 h half life is long enough for a scan but short enough to keep the patient's dose low. It is made on site from ⁹⁹Mo (66 h) held on an alumina column. ⁹⁹Mo β decays, and a share B of the decays land in the 143 keV isomeric state ⁹⁹ᵐTc; the rest go to the ground state ⁹⁹Tc. Saline pulls the pertechnetate off the column and leaves the molybdate behind.

With the parent count $$N_P = N_P(0)e^{-\lambda_P t}$$, the daughter obeys

$$\frac{dN_D}{dt} = B\lambda_P N_P - \lambda_D N_D .$$

Just after an elution at $$t = 0$$ there is no technetium on the column, and the solution is

$$N_D(t) = B\,N_P(0)\,\frac{\lambda_P}{\lambda_D - \lambda_P}\left(e^{-\lambda_P t} - e^{-\lambda_D t}\right).$$

Here $$\lambda_D/\lambda_P = 10.97$$, so after a few daughter half lives the second exponential is gone and the activities settle into transient equilibrium,

$$\frac{A_D}{A_P} = \frac{\lambda_D N_D}{\lambda_P N_P} \;\to\; B\,\frac{\lambda_D}{\lambda_D - \lambda_P}.$$

## Before the lab

1. Find $$\lambda_P$$ and $$\lambda_D$$ in 1/h from the half lives above.
2. Show that $$N_D(t)$$ above solves the differential equation with $$N_D(0) = 0$$.
3. Show that $$N_D$$ peaks at $$t_{\max} = \ln(\lambda_D/\lambda_P)/(\lambda_D - \lambda_P)$$ and evaluate it. Show that at the peak $$A_D = B A_P$$, not $$A_D = A_P$$.
4. Evaluate the long time ratio $$A_D/A_P$$ for B = 0.886. What would it be if every ⁹⁹Mo decay fed ⁹⁹ᵐTc?
5. A generator is eluted every 24 h. Show that the number of ⁹⁹ᵐTc nuclei on the column at each elution is $$N_D = Y\,N_P$$, with $$N_P$$ the ⁹⁹Mo count at that moment and $$Y = B\,\frac{\lambda_P}{\lambda_D - \lambda_P}\left(1 - e^{-(\lambda_D - \lambda_P)\,24\ \mathrm{h}}\right)$$, and evaluate Y.

## Safety

No hazards in the virtual lab. A real generator is shielded in lead, and every elution is assayed in a dose calibrator and checked for ⁹⁹Mo breakthrough: the United States limit is 0.15 kBq of ⁹⁹Mo per MBq of ⁹⁹ᵐTc at the time of administration (10 CFR 35.204).

## Procedure

The demo starts running when it opens and whenever you choose a number of nuclei: pause it, and choose 10 000 nuclei before the first reading, so the run starts from t = 0 with a freshly eluted column. Play at a slow speed and pause at each time; the reading stores the time on the clock. Clear throws away readings not yet sent, so Export each series before you Clear it. Hide the expected curves in the Display section.

**Ingrowth.** Record a reading at the start, every 2 h to 24 h, then every 12 h to 168 h. Do not elute. Export the readings and Clear.

**Daily elutions.** Choose 10 000 nuclei again and pause. Turn on Elute every 24 h. Play to each whole day from 24 h to 168 h; just after each elution (the Last elution readout shows its time), record a reading. Export the readings; they go to Table 2.

## Data

Table 1. Ingrowth after an elution at t = 0.

| Reading | Time t (h) | ⁹⁹Mo N_P | ⁹⁹ᵐTc N_D | ln N_P | Bateman N_D | (N_D − Bateman N_D)/√(Bateman N_D) | Activity ratio A_D/A_P |
|---|---|---|---|---|---|---|---|
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |

Table 2. Daily elutions.

| Reading | Elution time (h) | ⁹⁹Mo N_P at the elution | ⁹⁹ᵐTc eluted N_D | Predicted Y N_P | Eluted/N_P |
|---|---|---|---|---|---|
| | | | | | |
| | | | | | |
| | | | | | |

Work out the last four columns of Table 1 and the last two of Table 2 yourself. For the Bateman column use $$N_P(0) = 10\,000$$ and B = 0.886.

## Analysis

1. Graph ln N_P against t (Table 1). Find $$\lambda_P$$ and the ⁹⁹Mo half life from the slope, with the standard error, and compare with 65.924 h.
2. Graph N_D against t. Read the peak time and estimate its uncertainty from the scatter of the points near the peak. Compare with $$t_{\max}$$ from Before the lab question 3.
3. Graph the pull $$(N_D - N_D^{\text{Bateman}})/\sqrt{N_D^{\text{Bateman}}}$$ against t. If the counts scatter as Poisson counts about the Bateman curve, the pulls should have mean near 0 and standard deviation near 1. Do they?
4. Average A_D/A_P over the readings from 72 h on, with the standard error of the mean. Solve the equilibrium ratio for B with its uncertainty, and say whether your result can tell B = 0.886 from B = 1.
5. Graph the eluted N_D against N_P (Table 2). Compare the slope, with its standard error, with Y from Before the lab question 5, and the intercept with zero.

## Uncertainty

Each count N is a sample of a nearly Poisson process, with standard deviation about $$\sqrt N$$ (slightly less, since the sample is finite). Propagate $$\sqrt{N_D}$$ and $$\sqrt{N_P}$$ into each activity ratio, and say whether the scatter of your ratios from 72 h on agrees with that estimate. Readings 12 h apart are nearly independent for the daughter (two of its half lives), but not for the parent, whose count carries over from reading to reading.

## Questions

1. Why does the technetium on the column peak near 23 h, and why does a hospital still elute every 24 h? Use your Table 1 to say how much is lost by eluting an hour late.
2. Even at transient equilibrium, A_D/A_P stays below 1 here. Explain why, and why the ratio still exceeds B.
3. Before an elution at 24 h the activity ratio is about 0.90, not the equilibrium 0.975. Why does a daily eluted generator never reach transient equilibrium?
4. A real column releases about 90% of its technetium. How would that change your Table 2 slope, and the technetium available at the next elution?
5. A generator is delivered holding 37 GBq of ⁹⁹Mo at calibration. Estimate the ⁹⁹ᵐTc activity available at the first elution 24 h later, taking an elution efficiency of 90%.
6. The breakthrough limit is 0.15 kBq ⁹⁹Mo per MBq ⁹⁹ᵐTc at administration. Since ⁹⁹ᵐTc decays faster than ⁹⁹Mo, why must an eluate that passes at elution be checked again for the time it is given?

## What to hand in

Prelab answers, both tables with their graphs and fits, your ⁹⁹Mo half life, peak time and B with uncertainties, and answers to the questions. Identify simulated data.
