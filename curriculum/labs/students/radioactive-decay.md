# Measuring a Half Life
Student laboratory · Modern Physics

Textbook: OpenStax *University Physics*, Vol. 3, §10.3. Access for free at https://openstax.org/details/books/university-physics-volume-3.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/radioactive-decay.html?setup=coin)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Coin flip nuclei; Carbon 14 dating; Iodine 131 (these three have one unstable kind of nucleus, the subject of this worksheet); Two step chain; Short daughter, long parent (the Parent and Daughter worksheet).

**Using the demo.**

- The tray shows every nucleus of the sample: parents are large balls, daughters slightly smaller balls in a second color, stable end products small gray balls. Each decay flashes, and the Geiger counter under the tray counts every decay. Choose 100, 400, 1600 or 10,000 nuclei.
- Time advances in steps. In each step every parent decays with the exact probability for that step, $$p = 1 - e^{-\lambda\Delta t}$$, decided by its own random number, so no two runs are the same. Play runs the steps; Step takes one at a time, and 20 steps takes twenty at once. The step length is shown by the clock: one step for the coin flip nuclei, 0.2 d for iodine 131.
- The middle plot shows the number of each kind against time. Its dashed curve is the expected number $$N_0e^{-\lambda t}$$ and the band is the expected spread; the Display section can hide both, and the half life markers.
- The half lives are the evaluated values (ENSDF), for example 8.0252 d for iodine 131. A slider, or dragging the T½ marker, changes a half life; the nuclides are then labeled parent and daughter.
- Click a nucleus to follow it. The demo lists the ages at decay of the last eight followed nuclei, in half lives, and their mean age in the setup's time unit.
- Record reading stores the setup, the number of nuclei at the start, the time and the number of each kind. Export to worksheet sends the readings to the Data table below; Clear starts a new series, which goes into a new copy of the table. Reset starts a new random sample with the same settings.

</details>

## Goal

Watch a sample of unstable nuclei decay one at a time at random, show that the number left falls exponentially, and measure the half life from your own counts.

## Background

No one can say when a particular nucleus will decay. Each one has the same chance per unit time, the decay constant $$\lambda$$, however long it has already lasted. For a large number $$N$$ of nuclei the number decaying in a short time $$dt$$ is $$\lambda N\,dt$$, so $$dN/dt = -\lambda N$$ and

$$N(t) = N_0\,e^{-\lambda t}.$$

The half life $$T_{1/2}$$ is the time for half the nuclei to decay: $$T_{1/2} = \ln 2/\lambda$$. The mean life is $$\tau = 1/\lambda$$. The activity, the number of decays per unit time, is $$R = \lambda N$$.

Taking the natural log, $$\ln(N/N_0) = -\lambda t$$: a graph of $$\ln(N/N_0)$$ against $$t$$ is a straight line through the origin with slope $$-\lambda$$.

Because each decay is random, a real sample scatters about $$N_0e^{-\lambda t}$$. If $$f = e^{-\lambda t}$$ is the expected fraction left, the count left follows a binomial distribution with standard deviation $$\sigma = \sqrt{N_0 f(1-f)}$$.

## Before the lab

1. A sample of 400 nuclei has a half life of one step. How many do you expect after 1, 2, 3 and 8 steps?
2. Iodine 131 has a half life of 8.03 d. Find its decay constant in 1/d and its mean life. What fraction is left after 40 d?
3. For $$N_0 = 100$$ and $$f = 0.5$$, find the expected spread $$\sigma$$. What is $$\sigma/N$$? What is it for $$N_0 = 10\,000$$?
4. In the coin flip sample of Before the lab 1, think about the nuclei still there after 3 steps. Each has already come through three chances to decay. During step 4, will more than half of them decay, about half, or less than half? Give your reasoning.

## Safety

No hazards in the virtual lab. Real iodine 131 is a beta and gamma emitter handled only under license.

## Procedure

The demo starts running as soon as it opens and whenever you choose a setup, and choosing a number of nuclei starts a new sample: pause it and Reset before the first reading, so it starts from t = 0. Clear throws away readings not yet sent, so Export each series before you Clear it.

**Coin flip nuclei.** With 400 under Nuclei, press Pause and Reset, press **Record reading** at t = 0, then press **Step** (beside Pause) once and record, and so on until 8 steps have passed (9 readings).

**Iodine 131, 10,000 nuclei.** Export and Clear the readings, then choose Iodine 131 and 10,000 under Nuclei; press Pause and Reset. Untick Expected and ±1σ band in the Display fold. Record a reading at the start, then press **20 steps** (beside Step; each step is 0.2 d, so one press moves 4.0 d) once between readings, so you record every 4.0 d until 40.0 d (the Elapsed time t readout shows the time).

**Iodine 131, 100 nuclei.** Export and Clear the readings, choose 100 under Nuclei, press Pause and Reset, and record the same times. Export to worksheet at the end.

**One nucleus.** Pick Iodine 131. Press **Follow one** (under One nucleus), or click a nucleus, and press Play or Step until it decays; do this for at least ten nuclei, one after another. Write down each age at decay as it appears under Ages at decay of nuclei you followed, because that list keeps only the last eight.

## Data

| Reading | Setup and $$N_0$$ | Time $$t$$ | Parents left $$N$$ | $$N/N_0$$ | ln(N/N₀) |
|---|---|---|---|---|---|
| | | | | | |
| | | | | | |
| | | | | | |

The time unit is in the Setup column. Fill in $$N/N_0$$ and its natural log for each row.

## Analysis

1. For the coin flip nuclei, compare each count with $$400/2^n$$. Are the differences about the size of $$\sigma$$?
2. Graph $$\ln(N/N_0)$$ (vertical) against $$t$$ (horizontal) for iodine 131 with 10,000 nuclei. From the slope find $$\lambda$$, then $$T_{1/2}$$, and compare with 8.03 d.
3. Do the same for 100 nuclei. How do the points scatter about the line compared with 10,000 nuclei?
4. Use your $$\lambda$$ to find the activity of the 10,000 nuclei at the start, in decays per day. Check it against the number that decayed in the first 4 d.
5. Find the mean of the ages at decay of the nuclei you followed, and compare with the mean life $$\tau = 1/\lambda$$.

## Uncertainty

Use the standard error of the slope to give $$T_{1/2}$$ with its uncertainty for both sample sizes. These counts all come from one sample, so each count depends on the ones before it: the standard error of the fit understates the real uncertainty, and your $$T_{1/2}$$ may sit several standard errors from the accepted value. Compare the two relative uncertainties. Does their ratio match the $$1/\sqrt{N_0}$$ you would expect?

## Questions

1. Take your coin flip counts and work out, for each of steps 1 to 6, the share of the nuclei present at the start of the step that decayed during it. Were the survivors of three steps any more or less likely to decay than fresh nuclei, as Before the lab 4 asked? Explain what you found from what sets a nucleus's chance of decaying, and show how it leads to the exponential law.

## What to hand in

Prelab answers, the table copies with their graphs, your values of $$\lambda$$ and $$T_{1/2}$$ with uncertainties, the ages of the nuclei you followed, and answers to the questions. Identify simulated data.
