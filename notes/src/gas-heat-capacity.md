---
title: Heat Capacities of Gases
level: Intro physics (first law, kinetic theory)
time: 15 to 25 minutes
---
## What students should come away with

- The same heat warms a gas less when it can expand, because part of the heat leaves again as work on the surroundings. For an ideal gas the difference is exactly C_P − C_V = R per mole.
- Equipartition: each kind of motion a molecule can store energy in holds ½kT on average. Monatomic gases only move through space (C_V = 3/2 R); linear molecules also turn about two axes (5/2 R); vibration adds more only for some molecules at room temperature.
- γ = C_P/C_V is 5/3 for a monatomic gas and 7/5 for a diatomic one, and it sets how stiff a gas is when squeezed too fast for heat to flow. Rüchardt's ball measures it from the period of a ball bouncing on a trapped volume of gas.

## Before class

Students should know the first law, ΔU = Q − W, and the ideal gas law. The demo has two views. **Heat a gas**: n moles at 20 °C and 1 atm in a cylinder 10.0 cm across, with a heater of chosen power and a piston that is either pinned (constant volume) or free under the atmosphere (constant pressure). A bar shows where each joule goes: motion through space, rotation, vibration and work on the piston. **Rüchardt's ball**: a 16.60 g steel ball fits a 16.00 mm glass tube on a flask of dry air; a photogate times each full swing. Gas data are the C_V/R values of OpenStax University Physics Volume 2, Table 2.3.

## Running it in class

1. **Argon, piston locked.** Ask Q1, then start. With 0.10 mol and 2.0 W the temperature climbs at 1.604 °C/s, and the bar is all motion through space.
2. **Argon, piston free.** The piston rises and the climb slows to 0.962 °C/s. Two fifths of every joule now goes to work on the piston (Q2).
3. **Nitrogen.** Locked, it warms at 0.962 °C/s, the same rate as argon with a free piston: the bar now shows rotation taking 2/5 of the heat (Q3). Then free the piston.
4. **Mystery gas.** Students measure C_V and C_P from the two slopes, find γ, and decide whether the molecule is monatomic, linear or bent (Q4).
5. **Rüchardt's ball.** Ask Q5. Drop the ball on the 10 L flask: the period is 1.062 s. Change **Flask volume V** and time it again; T² grows in proportion to V (Q6).

## Questions

**Q1.** 0.10 mol of argon is heated at 2.0 W with the piston pinned. Predict the rate of temperature rise. Where does the energy go?

**Q2.** With the piston free, predict the new rate for argon. How much of each joule of heat leaves as work on the piston, and why is that fraction the same at every temperature?

**Q3.** Nitrogen with the piston locked warms at the same rate as argon with the piston free. Explain why, using equipartition.

**Q4.** The mystery gas, 0.10 mol at 2.0 W, warms at 0.769 °C/s with the piston locked. Find C_V/R, C_P/R and γ. What kind of molecule could it be?

**Q5.** The ball (m = 16.60 g) in the tube (A = 2.011 cm²) sits on 10.0 L of dry air with γ = 1.408. Show that the gas pressure under the ball is 102.13 kPa and predict the period, using ω² = γPA²/(mV).

**Q6.** Why must the compression in Rüchardt's experiment be adiabatic, and what period would you predict if it were isothermal instead? Why does the period grow as √V?

## Common misconceptions

- **"A substance has one specific heat."** For gases the value depends on what the container allows: at constant pressure the gas does work as it warms, so C_P is larger.
- **"The extra heat at constant pressure goes into the molecules."** It goes into lifting the piston and pushing back the atmosphere. The internal energy change for a given ΔT is the same either way.
- **"Heavier molecules have larger molar heat capacities."** Argon is ten times heavier than helium and both have C_V = 3/2 R. What counts is how many ways a molecule can store energy, not its mass.
- **"Every vibration and rotation counts at room temperature."** Vibrations of N₂ and O₂ need more energy than kT supplies at 300 K, so they contribute almost nothing; that is quantum mechanics showing up in a classical looking number.

## Physics behind the demo

- Heating at constant volume: Q = nC_VΔT, W = 0. Free piston: P stays at 1 atm, W = PΔV = nRΔT and Q = nC_PΔT with C_P = C_V + R. Every gas is ideal, and C_V is taken as constant over the range (20 °C up to the 200 °C heater cutout).
- The split of each joule follows equipartition: 3/2 R for motion through space, R of rotation for a linear molecule (3/2 R for a bent one), anything left of the measured C_V is vibration. H₂'s 2.47 R is a little under full rotation, so its rotation share is taken as 0.97 R.
- Rüchardt: at rest the gas is at P = P_atm + mg/A. A swing compresses the gas adiabatically, dP = −γPAx/V, so ω² = γPA²/(mV). Dry air uses γ = c_P/c_V = 1015/721 = 1.408 from Table 1.3. Damping has a chosen 6 s amplitude time constant; it lengthens the period by under 0.1% for flasks up to 20 L.

## Going further

- Homework: why is C_V of CO₂ (3.48 R) above 5/2 R at room temperature? Which of its vibrations can kT = 4.1 × 10⁻²¹ J excite?
- Pair with **Gas in a Box** (equipartition in two dimensions, ⟨½mv²⟩ = kT) and **Heat Engine Cycles** (γ in the Otto efficiency).
