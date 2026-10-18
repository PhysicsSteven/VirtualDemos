---
title: Gas in a Box
level: Intro physics (kinetic theory, thermodynamics)
time: 15 to 25 minutes
---
## What students should come away with

- Temperature measures the average kinetic energy of the molecules (in this 2D gas ⟨KE⟩ = kT), not the speed of any one of them. Collisions spread any starting speeds into the Maxwell–Boltzmann distribution.
- Pressure is momentum delivered to the walls per unit time. Hotter molecules hit both harder and more often, so P ∝ T: the ideal gas law P = NkT/A.
- Work is energy moved by a moving wall: a molecule bouncing off an advancing piston comes back faster. A slow squeeze with no heat flow raises T (T × A stays constant in 2D); a wall pulled away faster than the molecules can follow takes almost no energy out.
- Heat is energy carried by molecular collisions from a hotter region to a colder one, with no wall moving.

## Before class

Students should know KE = ½mv², that momentum reverses in an elastic bounce, and the ideal gas law. The gas is argon in two dimensions, in a box 30 nm high whose right wall is a piston, so area plays the part of volume and pressure is force per length (N/m). One second on screen is 80 ps at **Fixed rate**. Drag the right wall or use the arrow keys on the box; click a molecule to follow it. **P measured** averages over about a second, so let it settle before reading it.

## Running it in class

1. **Relax to equilibrium.** Every molecule starts at 353 m/s: one spike in the histogram. Ask Q1, then play. Within seconds the bars settle onto the Maxwell–Boltzmann curve, while **Temperature T** stays at 300 K.
2. **Pressure from bounces.** Compare **P measured** with **P ideal, NkT/A** (414 µN/m). Drag **Temperature** to 600 K: every speed is rescaled and P doubles (Q2, Q3).
3. **Hot vs cold.** Fast molecules (700 K) on the left, slow ones (100 K) on the right. No wall moves, so what crosses is heat. The box settles at 400 K (Q6).
4. **Compress.** Ask Q4 first. Set **Piston top speed** to 50 m/s and drag **Box width** from 50 to 25 nm: T climbs to a bit over 600 K. Back out slowly, T returns near 300 K.
5. **Free expansion.** Squeeze again, set **Piston top speed** to 1000 m/s and pull the wall straight out to 50 nm. T barely drops (Q5).
6. **Dilute gas** and **Near absolute zero** (if time allows). With 25 molecules the spike relaxes slowly and P is noisy. At 0.01 K the molecules average about 2 m/s but keep the same distribution shape.

## Questions

**Q1.** Predict: in **Relax to equilibrium** all 150 molecules start with the same speed in random directions, and every collision is perfectly elastic. After many collisions, will they still all have the same speed? Will the temperature reading change?

**Q2.** The box holds N = 150 argon atoms (m = 6.63 × 10⁻²⁶ kg) at T = 300 K in an area of 50 nm × 30 nm. In two dimensions ⟨½mv²⟩ = kT. Find the rms speed and the ideal pressure P = NkT/A in N/m, and compare with the **rms speed** and **P ideal, NkT/A** readouts.

**Q3.** If the temperature is doubled at fixed N and area, by what factor does the momentum delivered per bounce change? The number of bounces per second? Use these to explain why P ∝ T.

**Q4.** Predict, then check with **Compress**: the area is halved slowly, from 1500 nm² to 750 nm², with no heat exchanged. For this 2D gas U = NkT, and on each small step ΔU = −P ΔA. Show that T × A stays constant, and predict the final temperature and rms speed. Where does the energy come from, molecule by molecule?

**Q5.** Pulled out from 25 nm to 50 nm at **Piston top speed** 1000 m/s, the gas barely cools, though its area doubles. Pulled out slowly, its temperature halves. Explain the difference in terms of the work the gas does.

**Q6.** In **Hot vs cold**, 100 molecules at 700 K start on one side and 100 at 100 K on the other. What final temperature do you expect, and why? Is the energy that moves heat or work? Why does it never move back to recreate a hot side and a cold side?

**Q7.** **P / P ideal** reads a few percent above 1. Set **Molecules N** to 400 and **Piston top speed** to 25 m/s, then slowly squeeze the box to 15 nm: the ratio climbs to about 1.5. What feature of these molecules makes P exceed NkT/A, and why does crowding make it worse?

## Common misconceptions

- **"All molecules at one temperature move at the same speed."** The speeds spread over a wide distribution; T sets only the average kinetic energy.
- **"Pressure comes from molecules pushing on each other."** Wall pressure is the momentum the molecules carry into the wall. Collisions between molecules share energy around; they do not create the pressure.
- **"Compressing a gas heats it by friction."** Nothing rubs. Each molecule that bounces off the advancing piston comes back faster: that is the work done on the gas.
- **"Every expansion cools a gas."** Only if the gas does work; in a free expansion it does almost none.
- **"Near absolute zero the molecules are nearly still."** Classically they slow as √T but keep a full Maxwell–Boltzmann spread at any T above zero. Real argon would have liquefied long before (near 87 K at 1 atm), and quantum effects matter near 0 K.

## Physics behind the demo

- Hard disks 0.5 nm across with the mass of argon. Collisions are elastic: equal masses swap their velocity components along the line of centers. Walls reflect elastically; the piston reflects each molecule relative to its own motion, v′ = 2u − v.
- T comes from ⟨½mv²⟩ = kT (two degrees of freedom), so v_rms = √(2kT/m), and the 2D Maxwell–Boltzmann curve is f(v) = (mv/kT) e^(−mv²/2kT).
- **P measured** is momentum delivered to the walls per unit length per unit time, smoothed over about a second; it lags while the wall moves.
- Finite disk size makes P run above NkT/A, by about 1 + N(πd²/2)/A (4% in the starting box), and makes a slow squeeze heat slightly more than T × A = constant predicts.
- A slow squeeze with no heat flow: U = NkT and dU = −P dA give T × A = constant (γ = 2 in 2D; in 3D it would be T V^(2/3) = constant).
- The **Temperature** slider rescales every speed at once (0.01 to 1000 K). There are no attractive forces, so the gas never condenses, and the physics is classical at every temperature.

## Going further

- Homework: derive P = NkT/A from one molecule bouncing between two walls; in 3D, ⟨v_x²⟩ = ⟨v²⟩/3 instead of ⟨v²⟩/2.
