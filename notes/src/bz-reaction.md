---
title: Belousov–Zhabotinsky Reaction
level: Thermodynamics (systems far from equilibrium); intro nonlinear dynamics and chaos
time: 20 to 35 minutes
---
## What students should come away with

- A reaction can oscillate without breaking the second law: reactants are used up steadily and the free energy falls the whole time; only intermediates (HBrO₂, Br⁻, oxidized catalyst) rise and fall.
- The stirred beaker is a limit cycle: every start settles onto the same closed loop with the same period. It is periodic, not chaotic. It oscillates only when its steady state is unstable, here for f between two Hopf points.
- In an unstirred layer the same chemistry is excitable. A front of autocatalysis, relayed by diffusion of HBrO₂, travels at a constant speed and leaves a refractory band behind it, so waves do not pass through each other. A spot that oscillates on its own makes target rings; a wave with a free end curls into a spiral.
- Chaos needs more than oscillation. In a stirred flow reactor the Györgyi–Field model goes from one peak height to 2, 4, 8 and then to chaos as the flow rate changes, and two runs that start almost together separate exponentially.

## Before class

Students need rate laws, steady states, and the idea that an isolated system moves toward equilibrium. Define autocatalysis. Use Projector mode; the flow reactor scan takes a minute.

## Running it in class

1. **Oscillating beaker.** Ask Q1 first. The solution snaps to blue each time x (HBrO₂) shoots up, then fades to red. In the 3D phase portrait the path joins one closed loop. Period: 7.74 τ = 6.45 min.
2. **Stop the oscillation.** At f = 2.6: one pulse, then red for good. Drag the f line on the lower plot below the Hopf point at 2.33 and the clock restarts; below 0.505 it stops in the other state (Q3).
3. **Target waves.** Switch to the dish. A spot with φ = 0 oscillates by itself and sends out rings. Use the probe readouts: period at the probe, front speed, and the lone plane wave speed for comparison (Q4).
4. **Make a spiral.** A wave with one free end winds into a spiral. Back in Target waves, use Cut a wave to drag from near the pacemaker to the rim: a spiral pair forms and takes over (Q5).
5. **Route to chaos.** Switch to the flow reactor. The scan fills in the peaks of z against flow rate: one branch splits to 2, then 4, then 8, then a smear (Q6). Drag k_f on the diagram into the smear and watch the next peak map trace out one humped curve.
6. **Butterfly effect.** Two runs start 10⁻⁶ apart. On the log plot the distance between them climbs along a straight line until it saturates. Ask Q7.

## Questions

**Q1.** Predict: two identical stirred beakers of BZ solution are started a few minutes apart, so one is partway through its cycle when the other begins. After an hour, do their color changes keep the same rhythm, or does the small difference between them grow until their behavior is unrelated?

**Q2.** In the Oscillating beaker the period is 7.74 τ, and one unit of τ is 50 s for the concentrations in the model. How long is one cycle in minutes, and how many blue flashes does the beaker give in an hour?

**Q3.** The parameter f sets how much bromide (the inhibitor) is made each time oxidized catalyst is reduced. Explain why the beaker stops oscillating when f is above about 2.33. Then predict the color of a beaker with f = 0.4, below the lower Hopf point, and check it with the demo (full blue in the demo means z ≥ 0.2).

**Q4.** In Target waves the probe reads a period of 4.50 and a front speed of 6.19. In Make a spiral it reads 2.60 and 4.72. Find the wavelength in each case. Both speeds are below the lone plane wave speed, 6.53. Why does a wave that follows closely behind another move more slowly?

**Q5.** Use the demo: cut a ring of the target pattern with a long cut from near the pacemaker to the rim. Why do two spirals form, and why do they turn in opposite senses? Then try a short cut across just one ring. Over the next few minutes, which source ends up controlling the whole dish, and why?

**Q6.** In the Route to chaos scan, the number of peak heights doubles at k_f ≈ 3.164, 3.223 and 3.238 × 10⁻⁴ s⁻¹. Find the ratio of the first gap to the second. For a period doubling cascade this ratio should approach Feigenbaum's δ ≈ 4.67 as more doublings are included. How close is this first estimate, and where do you expect chaos to begin?

**Q7.** At k_f = 3.50 × 10⁻⁴ s⁻¹ the largest Lyapunov exponent is about λ = 0.011 s⁻¹. Two runs start 10⁻⁶ apart. Roughly how long until they differ by order 1 (the size of the attractor)? If you could make the starting difference 1000 times smaller, how much longer would the prediction stay good?

## Common misconceptions

- **"The reaction runs backward and forward, so it beats the second law."** The overall reaction only goes forward and the free energy falls monotonically. The oscillating species are intermediates, kept far from equilibrium by the steady supply of bromate and malonic acid.
- **"The BZ reaction is chaotic."** The stirred beaker is periodic and the dish patterns are deterministic waves. Chaos was found in stirred flow reactors (Hudson and Mankin 1981; Simoyi, Wolf and Swinney 1982), only at some flow rates.
- **"The blue rings are dye spreading out."** Diffusion slows down (distance ∝ √t); these fronts keep a constant speed because each spot reacts and triggers its neighbor, and fronts that meet annihilate.
- **"Chaotic means random."** The equations are deterministic: each peak follows from the last through a smooth one humped map. What fails is long range prediction.

## Physics behind the demo

- **Beaker:** the Oregonator (Field and Noyes 1974), the five step skeleton of the Field–Körös–Noyes mechanism, in scaled form ε dx/dτ = qy − xy + x(1 − x), ε′ dy/dτ = −qy − xy + fz, dz/dτ = x − z, with ε = 9.90 × 10⁻³, ε′ = 1.98 × 10⁻⁵, q = 7.62 × 10⁻⁵ (Field, Scholarpedia 2007), and τ = 1 equal to 50 s. Reactants are held constant, so the beaker never runs down. Hopf points f = 0.5052 and 2.3324 (from the Jacobian's eigenvalues); stiff Rosenbrock integration.
- **Dish:** the two variable Oregonator with diffusion of u only (the catalyst is fixed, as in a gel), ε = 0.02, q = 0.002, f = 1.4 and a bromide source φ = 0.05 (values used by Adamatzky and coworkers). Model units for length and time. Grid 256 × 256, Δx = 0.25, Δt = 0.005: plane wave speed within 1 % and spiral period within 3 % of finer grids.
- **Flow reactor:** the Györgyi–Field model (Nature 1992) of the cerium catalyzed reaction, with rate constants and concentrations as tabulated by Buchlovská Nagyová, Jansík and Lampart (2020), and k_f the inverse residence time. The Lyapunov exponent is a finite time estimate.
