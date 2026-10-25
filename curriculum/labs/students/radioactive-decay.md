# Measuring a Half Life
Student laboratory · Modern Physics

Textbook: OpenStax *University Physics*, Vol. 3, §10.3. Access for free at https://openstax.org/details/books/university-physics-volume-3.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/radioactive-decay.html?setup=coin)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Coin flip nuclei; Carbon 14 dating; Iodine 131 (these three have one unstable kind of nucleus, the subject of this worksheet); Two step chain; Short daughter, long parent (the Parent and Daughter worksheet).

**Using the demo.**

- The tray shows every nucleus of the sample: parents are large balls, daughters slightly smaller balls in a second color, stable end products small gray balls. Each decay flashes, and the Geiger counter under the tray counts every decay. Choose 100, 400, 1600 or 10 000 nuclei.
- Time advances in steps. In each step every parent decays with the exact probability for that step, $$p = 1 - e^{-\lambda\Delta t}$$, decided by its own random number, so no two runs are the same. Play runs the steps; Step takes one at a time. The step length is shown by the clock: one step for the coin flip nuclei, 0.2 d for iodine 131.
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
3. Show that $$\ln(N/N_0) = -\lambda t$$ follows from $$N = N_0e^{-\lambda t}$$, and say what the slope of a graph of $$\ln(N/N_0)$$ against $$t$$ tells you.
4. For $$N_0 = 100$$ and $$f = 0.5$$, find the expected spread $$\sigma$$. What is $$\sigma/N$$? What is it for $$N_0 = 10\,000$$?

## Safety

No hazards in the virtual lab. Real iodine 131 is a beta and gamma emitter handled only under license.

## Procedure

**Coin flip nuclei.** With 400 nuclei, record a reading at the start and after each step, one step at a time, until 8 steps have passed. Then Reset and record a second run the same way, in a new copy of the table.

**Iodine 131, 10 000 nuclei.** Clear the readings and choose Iodine 131 with 10 000 nuclei. Hide the expected curve and band. Record a reading at the start and every 4.0 d until 40.0 d (step to the exact times).

**Iodine 131, 100 nuclei.** Clear the readings, choose 100 nuclei and record the same times.

**One nucleus.** With any one step setup, follow at least ten nuclei, one after another, and write down their ages at decay.

## Data

| Reading | Setup and $$N_0$$ | Time $$t$$ | Parents left $$N$$ | $$N/N_0$$ | ln(N/N₀) |
|---|---|---|---|---|---|
| | | | | | |
| | | | | | |
| | | | | | |

The time unit is in the Setup column. Fill in $$N/N_0$$ and its natural log for each row.

## Analysis

1. For the coin flip nuclei, compare each count with $$400/2^n$$. Are the differences about the size of $$\sigma$$?
2. Graph $$\ln(N/N_0)$$ against $$t$$ for iodine 131 with 10 000 nuclei. From the slope find $$\lambda$$, then $$T_{1/2}$$, and compare with 8.03 d.
3. Do the same for 100 nuclei. How do the points scatter about the line compared with 10 000 nuclei?
4. Use your $$\lambda$$ to find the activity of the 10 000 nuclei at the start, in decays per day. Check it against the number that decayed in the first 4 d.
5. Find the mean of the ages at decay of the nuclei you followed, and compare with the mean life $$\tau = 1/\lambda$$.

## Uncertainty

Use the standard error of the slope to give $$T_{1/2}$$ with its uncertainty for both sample sizes. Compare the two relative uncertainties. Does their ratio match the $$1/\sqrt{N_0}$$ you would expect?

## Questions

1. A nucleus has already survived three half lives. What is the chance it decays within the next half life? Explain.
2. Why doesn't the number left fall exactly to half in each half life?
3. A piece of wood has 25% of the carbon 14 of living wood. How old is it? (Carbon 14 half life 5730 yr.) Try the Carbon 14 dating setup's task to check yourself.
4. Iodine 131 is used to treat thyroid disease. Why is waste containing it stored for about 80 days before disposal?

## What to hand in

Prelab answers, the table copies with their graphs, your values of $$\lambda$$ and $$T_{1/2}$$ with uncertainties, the ages of the nuclei you followed, and answers to the questions. Identify simulated data.
