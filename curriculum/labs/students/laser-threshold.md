# Lasers: Threshold, Efficiency and Cavity Modes
Student laboratory · Modern Physics

Textbook: OpenStax *University Physics*, Vol. 3, §8.6. Access for free at https://openstax.org/details/books/university-physics-volume-3.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/lasers.html?setup=thresh)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Absorption vs stimulated emission; No laser without inversion; Threshold; Turning on: relaxation oscillations; Three level vs four level; Cavity modes of a He–Ne laser. The views are Processes, Laser, Levels and Modes.

**Using the demo.**

- The Laser view is a rod of gain medium, 1 cm long, in a cavity 10 cm long between two mirrors. One mirror reflects everything; the output mirror has reflectivity R. Besides the light that leaves through it, 2% of the light is lost on each round trip.
- Nd:YAG is pumped at 808 nm and lases at 1064 nm; its lower laser level empties at once (an ideal four level laser). Ruby is pumped with green light (550 nm) and lases at 694.3 nm down to its ground state (an ideal three level laser). Doping, cross sections and lifetimes are from Koechner, *Solid State Laser Engineering*.
- Pump rate $$W_p$$ is the rate at which each ion in the ground state is pumped, per second. The demo solves the rate equations for the inversion N and the number of photons q in the cavity. A small fraction of the spontaneous emission (10⁻⁹) goes into the laser mode and starts it.
- Threshold and output shows the threshold, the output power now, the inversion now in units of the threshold inversion $$N_\mathrm{th}$$, and the steady output the rate equations predict. After the pump or the mirror changes, the output rings and then settles; the trace shows it.
- The Modes view is a He–Ne laser at 632.8 nm with mirror spacing L. Its readouts give the mode spacing, the Doppler width of the gain and how many modes lase.
- Record reading works in the Laser view once the output has settled. It stores the medium, R, the pump rate, the absorbed pump power, the output power, the inversion N/N<sub>th</sub> and the time since the pump was switched on. Export to worksheet sends the readings to the Data table below. Clear starts a new series, which goes into a new copy of the table.

</details>

## Goal

Measure how the output of a laser depends on the pump power, find the threshold and the slope efficiency for two output mirrors and for a three level and a four level medium, and measure the spacing of the cavity modes of a He–Ne laser.

## Background

An atom in an upper level can be made to emit by a passing photon of the right energy, and the new photon travels with the first, in step (§8.6). This stimulated emission competes with absorption. Light grows as it passes through a medium only if more atoms are in the upper level than in the lower: a population inversion. Atoms in thermal equilibrium never have one, and pumping two levels with light cannot make one, so lasers use three or four levels.

In a laser, light bounces between two mirrors through the medium. It builds up when the gain on a round trip beats the loss: light leaving through the output mirror (a fraction $$1 - R$$ per round trip) and other losses. The inversion at which gain equals loss is the threshold, $$N_\mathrm{th}$$. Above threshold the inversion stays at $$N_\mathrm{th}$$, however hard the medium is pumped, and every extra pump photon absorbed adds to the laser light. So the output rises in a straight line,

$$P_\mathrm{out} = \eta\,(P_\mathrm{abs} - P_\mathrm{th}),$$

where $$P_\mathrm{abs}$$ is the absorbed pump power and $$P_\mathrm{th}$$ its threshold value. In this ideal model the slope efficiency η is the fraction of each pump photon's energy carried by a laser photon, times the fraction of the light that leaves through the output mirror rather than being lost:

$$\eta = \frac{\lambda_\mathrm{pump}}{\lambda_\mathrm{laser}}\cdot\frac{-\ln R}{-\ln R - \ln(0.98)} .$$

In a four level laser the lower laser level is empty, so any excited ion adds to the inversion. In a three level laser the lower level is the ground state, and more than half of all the ions must be excited before there is any inversion at all.

The mirrors also choose the frequencies. A standing wave fits between mirrors a distance L apart when L is a whole number q of half wavelengths, so the allowed frequencies are $$\nu_q = qc/2L$$, spaced by $$c/2L$$. Every mode inside the band where the gain beats the loss can lase.

## Before the lab

1. Find the energies of an 808 nm pump photon and a 1064 nm laser photon. What fraction of the pump energy can at most become laser light?
2. The cavity is 10 cm long, so light takes $$2L/c$$ for a round trip. With R = 0.95 and 2% other loss per round trip, find the photon lifetime $$\tau_c = (2L/c)/(-\ln R - \ln 0.98)$$, and the slope efficiency η for Nd:YAG.
3. Why can a medium with only two levels never amplify light, however hard it is pumped?
4. Find the mode spacing c/2L of a He–Ne laser with L = 30 cm. Its gain is about 1.5 GHz wide; about how many modes can lase?

## Safety

No hazards in the virtual lab. Real laser beams can blind: never look into a beam or its reflection, and wear goggles rated for the wavelength.

## Procedure

**Nd:YAG, R = 0.95.** In the Laser view, with Nd:YAG and an output mirror of 0.950, set the pump rate to 6, 8, 10, 12, 16, 20, 30 and 40 per second, and record a reading for each once the output has settled. Note the threshold pump rate and absorbed power the demo gives.

**Nd:YAG, R = 0.90.** Clear the readings. With the output mirror at 0.900, record readings at pump rates of 10, 14, 20, 28, 34 and 40 per second. Send this run to a new copy of the table.

**Ruby.** Clear again and pick Ruby, with the output mirror at 0.950. Record readings at pump rates of 600, 800, 1000, 1200, 1600 and 2000 per second (the output takes a few milliseconds to settle). Send this run to a third copy.

**Below threshold.** With Nd:YAG at R = 0.95, look at the output power at pump rates of 2, 3 and 4 per second, and write it down.

**Cavity modes.** In the Modes view, with the peak gain at 2.00 times the loss, fill in the second table for mirror spacings of 15, 30, 50 and 100 cm.

## Data

| Reading | Medium | Mirror R | Pump rate W (1/s) | Absorbed pump power (W) | Output power (W) | Inversion N/N_th |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |
| | | | | | | |

| Mirror spacing L (cm) | Mode spacing (MHz) | Modes lasing | Band above threshold (MHz) | 2L × mode spacing (m/s) |
|---|---|---|---|---|
| 15 | | | | |
| 30 | | | | |
| 50 | | | | |
| 100 | | | | |

Work out the last column yourself.

## Analysis

1. Graph the output power against the absorbed pump power for the Nd:YAG run at R = 0.95. Find the slope efficiency and the threshold absorbed power from the slope and the intercept on the power axis, and compare them with your prelab η and the demo's threshold.
2. Do the same for R = 0.90. Compare the threshold and the slope with R = 0.95, and explain both changes. Which mirror gives more output at 3.0 W absorbed?
3. What is the inversion N/N<sub>th</sub> in every reading above threshold? What does that say about the gain once the laser runs?
4. For ruby, find the threshold absorbed power and the slope efficiency. Compare them with Nd:YAG in the same cavity, and explain the difference in threshold.
5. What was the output below threshold? Where does that light come from?
6. From the second table, find c from 2L × mode spacing for each L. How does the number of modes lasing change with L, and why?

## Uncertainty

The simulation has no noise, but a reading taken before the output settles is wrong; the demo records only once the output is within 1% of its final value. Estimate the uncertainties of the slope and the threshold from the fit. Say whether the measured slope efficiencies agree with the formula within those uncertainties, and why readings close to threshold would bend the line (spontaneous emission into the mode).

## Questions

1. Above threshold, why can't the inversion grow beyond $$N_\mathrm{th}$$ however hard the laser is pumped?
2. Real ruby lasers are pumped by a flash lamp in short pulses rather than run continuously. Use your threshold comparison to explain why.
3. A laser pointer gives 5.0 mW at 650 nm. How many photons does it send out each second?
4. How short would a He–Ne cavity have to be for only one mode to lase?

## What to hand in

Prelab answers, the three table copies with their graphs and fits, the table of cavity modes, the slope efficiencies and thresholds with uncertainties and comparisons, your below threshold observations, and answers to the questions. Identify simulated data.
