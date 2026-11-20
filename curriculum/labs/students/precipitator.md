# Smoke Precipitator
Student laboratory · Physics II

Textbook: OpenStax *University Physics*, Vol. 2, §7.6. The particle charge and drift speed go beyond the textbook; see W. C. Hinds, *Aerosol Technology*, chapter 15. Access OpenStax for free at https://openstax.org/details/books/university-physics-volume-2.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/electrostatics-at-work.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Machines in the demo:** Van de Graaff generator; Ink jet printer; Smoke precipitator. This worksheet uses the precipitator.

**Using the demo.** Smoky gas flows along a channel between two grounded plates, past a high voltage wire midway between them, 0.125 m from each plate. The Precipitator section sets the particle diameter (0.1 to 20 μm), the particles (conducting soot or an insulating dust with $$\kappa = 4$$), the field, the gas speed and the plate length. Counters show how many particles are caught and how many get through, and the measured efficiency; Reset the counts starts them again (changing a setting also does). Blind hides the particle charge, the drift speed and the predicted efficiency; the counters stay.

**What the demo models.** Each particle carries the saturation charge of field charging, $$q = 4\pi\varepsilon_0 a^2 E\cdot 3\kappa/(\kappa + 2)$$ (Pauthenier, with $$a$$ the radius; 3 for a conductor), with the charging and collecting fields equal. Diffusion charging is left out, so particles below about 0.5 μm are given too little charge. The drift speed is $$w = qEC_c/(3\pi\eta d)$$: Stokes drag with the Cunningham slip correction $$C_c$$ (air at 20 °C, $$\eta = 1.81\times10^{-5}$$ Pa·s, mean free path 0.066 μm). The efficiency follows the Deutsch equation, which assumes turbulence keeps the dust spread evenly across the channel; the counters catch each particle at random with that probability, about 30 particles a second. Gravity is left out. Simulated data.

</details>

## Goal

Measure how well an electrostatic precipitator cleans smoky gas, and test how its efficiency depends on the particle size, the plate length and the gas speed.

## Background

A high voltage wire ionizes the gas around it, and the ions charge the particles. In a field $$E$$ a particle of diameter $$d$$ reaches a charge proportional to $$d^2E$$. The field pushes it toward a plate with force $$qE$$, against the drag of the air, $$3\pi\eta d\,w/C_c$$, so it drifts sideways at the steady speed

$$w = \frac{qEC_c}{3\pi\eta d},$$

which grows with the particle's size (as $$d$$ for large particles). If turbulence keeps the particles spread evenly across a channel whose plates are $$s$$ from the wire, a particle in the channel for a time $$L/u$$ is caught with probability (the Deutsch equation)

$$\eta = 1 - \exp\left(-\frac{wL}{us}\right).$$

So $$-\ln(1 - \eta)$$ is proportional to the plate length $$L$$ and to $$1/u$$.

## Before the lab

1. A precipitator catches 90 % of the particles. What fraction gets through if the plates are made twice as long? Three times as long?
2. Why does the Deutsch equation predict that the efficiency never quite reaches 100 %?
3. Find the drift speed $$w$$ that gives 90 % with $$L = 5.0$$ m, $$u = 1.0$$ m/s and $$s = 0.125$$ m.
4. Why should a precipitator catch large particles more easily than small ones?
5. Soot conducts. If the 0.5 μm particles were an insulating dust with κ = 4 instead, in the same field, gas speed and plates, would the precipitator catch about the same fraction, a noticeably smaller fraction, or almost none of them? Explain your choice.

## Safety

Industrial precipitators run at tens of kilovolts and are interlocked; never open one in service. The collected dust may be toxic.

## Procedure

**Part 1: particle size.** Press Smoke precipitator. In the Precipitator section press Conducting (soot) and set Field between wire and plates to 3.0 kV/cm, Gas speed to 1.0 m/s and Plate length L to 5.0 m. Measure the efficiency with the Particle diameter slider at 0.1, 0.2, 0.3, 0.5, 1.0 and 2.0 μm. Count at least 500 particles (caught plus through) for each.

**Part 2: plate length.** With the Particle diameter at 0.3 μm (other settings as in Part 1), measure the efficiency with Plate length L at 2, 5, 8, 11 and 15 m, counting at least 500 particles each.

**Part 3: gas speed and material.** With the Particle diameter at 0.5 μm and Plate length L at 5.0 m, measure the efficiency with Gas speed at 0.5, 1.0, 2.0 and 3.0 m/s. Then press Insulating, κ = 4 and repeat at 1.0 m/s.

**Using the virtual apparatus.** The counters run at about 30 particles a second and start again when you change a setting, so after each change wait until caught plus through is at least 500, then press Record reading. Keep Blind: hide predictions and answers off, so each reading records the predicted efficiency and the drift speed. After each part press Export to worksheet, then Clear, so each part gets its own copy of the Data table.

## Data

| Trial | Particle diameter (μm) | Particles | Field (kV/cm) | Gas speed $$u$$ (m/s) | Plate length $$L$$ (m) | Drift speed $$w$$ (cm/s) | Predicted efficiency (%) | Caught | Through | Measured efficiency (%) |
|---|---|---|---|---|---|---|---|---|---|---|
| | | | | | | | | | | |
| | | | | | | | | | | |
| | | | | | | | | | | |
| | | | | | | | | | | |
| | | | | | | | | | | |
| | | | | | | | | | | |

## Analysis

1. For Part 1, compare the measured and predicted efficiencies. How does the efficiency change with particle size? Which sizes are hardest to catch, and why might real precipitators do better than the model for the smallest?
2. For Part 2, work out $$-\ln(1 - \eta)$$ from each measured efficiency and graph it against $$L$$. Is it a straight line through the origin? From the slope, find the drift speed and compare it with the drift speed the demo recorded.
3. For Part 3, work out $$-\ln(1 - \eta)$$ for the four conducting readings and graph it against $$1/u$$ to show how it depends on the gas speed. Why does a faster gas leave more smoke in the air?

## Questions

1. Why does a precipitator need both a strong field near the wire (to make ions) and a field across the whole channel?
2. A power station needs to catch 99.9 % of its fly ash. Using the Deutsch equation, how much longer must the plates be than for 90 %?
3. Why are precipitators less effective for very fine smoke, which is also the most harmful to breathe?
4. Was the insulating dust caught as you said in Before the lab 5? Compare the Measured efficiency and the Drift speed $$w$$ of your two Part 3 readings at 1.0 m/s, soot and Insulating, κ = 4. Can a particle whose charges cannot move through it pick up charge from the ions? Use the two drift speeds and the Deutsch equation to account for the two efficiencies.

## Uncertainty

For courses that treat measurement uncertainty. This section is not counted in the 75 minutes; do it when your instructor assigns it.
{: .ws-assigned}

Each particle is caught or not at random, so a measured efficiency from $$N$$ particles has a standard uncertainty of $$\sqrt{\eta(1-\eta)/N}$$, about 2 % for $$N = 500$$ near 50 %. The model's approximations matter more for real precipitators: diffusion charging, which helps the smallest particles; dust knocked back off the plates; uneven gas flow; and the field near the wire being much stronger than near the plates. Find the uncertainty of each measured efficiency from the counts, with $$N$$ the number counted. Do the measured and predicted values agree within it?

## What to hand in

Prelab answers, a Data table copy for each part, the graph and fit for Part 2, the measured efficiencies, and answers to the questions (and to Uncertainty, if assigned). Identify simulated data.
