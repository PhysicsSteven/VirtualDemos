---
title: Radioactive Decay
level: Modern physics; PHYS 202 (exponential decay, as in RC circuits)
time: 15 to 25 minutes
---
## What students should come away with

- Each nucleus has the same fixed chance per unit time of decaying, λ, whatever its age. Which nucleus goes next is pure chance.
- A large sample therefore follows N(t) = N₀e^(−λt) = N₀(½)^(t/T½), with T½ = ln 2/λ = 0.693τ and the activity A = λN falling the same way.
- The spread about the expected count is about √N (σ = √(N₀f(1 − f))), so the relative scatter falls as 1/√N: a large sample is as predictable as a clock.
- The age of a sample follows from the fraction left: t = (T½/ln 2) ln(N₀/N). This is the basis of carbon 14 dating.
- In a chain the daughter grows while the parent feeds it. It peaks when the two activities are equal, and if it is the shorter lived of the two its activity settles to track the parent's.

## Before class

Students should know exponentials and logarithms; the RC discharge in PHYS 202 is the same mathematics. Parents are large balls, daughters smaller balls in a second color, stable end products small gray balls; each decay flashes with a short track (beta, or alpha for polonium 210), and a Geiger counter under the tray counts every decay (taken as 100% efficient; its last step reading is the activity in one step). The N(t) plot has **Linear** and **Log** scales. Each run is a new random sample; **Earlier runs** keeps up to three as ghosts.

## Running it in class

1. **Coin flip nuclei.** 400 parents, each flipping a fair coin every step. Ask Q1 before pressing **Step**. Step three times and compare **Remaining N/N₀** with **Expected e^(−λt)** and the **Off by** readout in units of σ.
2. **Nuclei: 100, then 10,000.** Press **Reset** a few times at each size and compare the ghosts with the ±1σ band (Q5). The relative spread shrinks as 1/√N.
3. **Follow a nucleus.** Click one in the grid, or press **Follow one**, and run. Nobody can say when it will go. Read **Parents alive one half life ago that are still alive**: about half, whatever their age (Q2).
4. **Carbon 14 dating.** Switch the N(t) plot to **Log**: a straight line. Do the **Carbon dating task** together, then press **New sample** and let students work one alone (Q3).
5. **Iodine 131.** The activity histogram falls with the same 8 day half life as N. After 10 half lives, about 80 days, 1/1024 of the activity is left (Q4).
6. **Two step chain.** Bismuth 210 (5.0 d) feeds polonium 210 (138 d). Ask when the polonium will peak before running (Q6).
7. **Short daughter, long parent.** Tellurium 132 (76.9 h) feeds iodine 132 (2.3 h). On the log scale the two lines become parallel; read the activity ratio (Q7).
8. **Alpha decay and Beta decay, one nucleus up close.** Switch the view to **Alpha decay** with ²¹²Po and press **Watch it decay** a few times: the waits are all different. Then pick ²³⁸U: Q is only half as large, yet the half life is about 5 × 10²³ times longer, because the alpha must tunnel through a wider barrier. The Geiger–Nuttall plot puts twenty alpha emitters on one line, and Gamow's model lands within about half a decade of each. In **Beta decay** run ¹⁴C at 200/s and watch the electron energies spread out under Q, then tick **No neutrino**: every electron would carry all of Q. The missing energy is the antineutrino.

## Questions

**Q1.** Predict: 400 coin flip nuclei each decay with probability ½ per step. How many do you expect to be left after one step, and after three? Will exactly that many be left? How large a difference from the expected count would surprise you?

**Q2.** A nucleus with a half life of 5730 years has already survived 3 half lives. What is the chance it decays within the next 5730 years? Use the **Parents alive one half life ago that are still alive** readout to check your answer late in a run, when the survivors are old.

**Q3.** A piece of charcoal has 18.0% of the carbon 14 of a living sample. Using T½ = 5730 yr, how old is it? About how many half lives is that? The method assumes something about the atmosphere in the past; what?

**Q4.** Iodine 131 has a half life of 8.03 days. What fraction of a dose is left after 30 days? What is its mean life τ? Why is the activity in a patient's thyroid in practice lower than this calculation says?

**Q5.** With 100 nuclei and with 10,000 nuclei, what relative spread σ/N do you expect in the number of parents left after one half life? Check with the **Expected spread σ/N** readout and with several runs. Why can a physicist predict the activity of a gram of radium very precisely but not the decay time of one nucleus?

**Q6.** In **Two step chain**, ²¹⁰Bi (T½ = 5.01 d) decays to ²¹⁰Po (T½ = 138 d). Explain why the number of polonium nuclei rises, peaks and then falls. Show that at the peak the two activities are equal. Then check: when does the demo say the peak occurs?

**Q7.** In **Short daughter, long parent**, ¹³²Te (76.9 h) feeds ¹³²I (2.30 h). After a day or so the iodine activity settles at about 1.03 times the tellurium activity. Explain why it tracks the parent, and find the ratio of the numbers of nuclei N_I/N_Te in that state.

## Common misconceptions

- **"After two half lives everything is gone."** Half of what is left goes in each half life: a quarter remains after two, an eighth after three.
- **"An old nucleus is due to decay."** Nuclei do not age. A survivor of many half lives has exactly the same chance of decaying in the next half life, 50%, as a fresh one.
- **"The half life means each nucleus lives T½."** Individual lifetimes are spread from almost zero to many half lives; the mean life is τ = T½/ln 2 = 1.44 T½, longer than the half life.
- **"Radioactive decay is perfectly regular."** Only on average. For small samples the count wanders by about √N about the curve.
- **"A daughter can never have more activity than its parent."** In transient equilibrium the daughter's activity is slightly greater, by λ_D/(λ_D − λ_P); with a long lived daughter, its activity exceeds the parent's after the peak.

## Physics behind the demo

- Each step of length Δt, every nucleus draws one random number and changes with the exact probability for that time, p = 1 − e^(−λΔt). For the coin preset Δt = T½ = 1 step, so p = ½; other half lives give p = 1 − 2^(−1/T½).
- For a chain the step uses the Bateman probabilities, so a parent can pass through the daughter within one step. N_D(t) = N₀ λ_P/(λ_D − λ_P)(e^(−λ_P t) − e^(−λ_D t)); the daughter peaks at t = ln(λ_D/λ_P)/(λ_D − λ_P).
- The ±1σ band is σ = √(N₀f(1 − f)) with f the expected fraction (a binomial spread).
- Half lives are evaluated values: ¹⁴C uses the conventional 5730 yr (the current evaluation is 5700 ± 30 yr, and radiocarbon labs quote ages with Libby's 5568 yr and then calibrate). The ¹³¹ᵐXe branch of ¹³¹I and a tiny α branch of ²¹⁰Bi are left out. The dating method assumes a constant atmospheric ¹⁴C level; real dates use a calibration curve.
- A followed nucleus's age is taken at the middle of the step in which it decays. In the real nuclide presets the steps are short and the **Mean age at decay** tends to τ. In **Coin flip nuclei** decays can only happen once per whole step, so the mean tends to 1.5 steps rather than τ = 1.44 steps: a discrete process is not quite exponential decay.

## Going further

- Homework: the activity of a sample falls from 800 to 50 counts per minute in 12 hours. Find the half life and predict the count rate after 18 hours.
