---
title: Terminal Velocity
level: Intro mechanics (drag)
time: 15 to 25 minutes
---
## What students should come away with

- Drag grows with speed, so a falling body speeds up less and less until the drag equals its weight. From then on the net force is zero and the speed stays at the terminal speed v_T = √(2mg/(ρCA)).
- The terminal speed depends on the weight and on the drag area CA: a heavier body, or one presenting less area, falls faster. The skydiver's body position and the parachute work by changing CA.
- The terminal speed is not one fixed number: it depends on the air density, so it changes on the way down from a high jump.

## Before class

Students should know Newton's second law and the drag force D = ½ρCAv² (§6.4). The demo opens on the textbook's Example 6.17: an 85 kg skydiver spread eagle (C = 1.0, A = 0.70 m²) jumps from 4000 m and falls in 3D, with the weight and drag arrows to scale with each other and streaks showing the air moving past in 0.05 s. A speed bar, the graph and the readouts show v approaching v_T. Spread eagle and Head first switch the body position during the fall (1.0 s to change), and Pull opens a round canopy (the parachute also opens by itself at the pull altitude). Other setups: Parachute (pulled at 1500 m), Thin air from 10 km (the standard atmosphere), and one or four nested coffee filters dropped 2.00 m onto a motion detector. Step stops on whole seconds (0.05 s for the filters) for readings; Blind hides v_T, the forces and the drag area.

## Running it in class

1. **Jump.** Ask Q1 before pressing Jump, then let it run: the drag arrow grows until it matches the weight, and the curve flattens at 44.4 m/s.
2. **How fast does it get there?** Pause near t = 4.5 s (v_T/g) and ask Q2.
3. **Head first.** Switch to Head first on the way down: the speed climbs again, to 98 m/s for the textbook's 75 kg diver. Ask Q3. Switch back and watch it fall back to 44 m/s.
4. **Parachute.** Run the Parachute setup at ×5. Ask Q4 while it opens; the largest deceleration is shown when Blind is off.
5. **Coffee filters.** Drop one filter, then four (Q5). The graph keeps the earlier falls in grey for comparison.
6. **Thin air.** Run Thin air, from 10 km, and ask Q6 when the speed starts to fall.

## Questions

**Q1.** Find the terminal speed of an 85 kg skydiver spread eagle, with C = 1.0, A = 0.70 m² and ρ = 1.21 kg/m³. Why does the speed stop growing?

**Q2.** From rest in uniform air, v = v_T tanh(gt/v_T). What fraction of v_T has the skydiver of Q1 reached at t = v_T/g, and when is the speed within 1% of v_T?

**Q3.** The textbook's 75 kg skydiver head first has C = 0.70 and A = 0.18 m². Find v_T, and the ratio to the spread eagle value of Q1.

**Q4.** Under a canopy with CA = 63.6 m² (plus 0.13 m² for the body), what is the 85 kg skydiver's terminal speed? Landing at that speed is like jumping off a wall of what height?

**Q5.** One coffee filter of 0.86 g falls at 1.05 m/s. How fast do four nested filters fall, and why?

**Q6.** Jumping from 10 000 m in the standard atmosphere (ρ = 0.413 kg/m³ there, 1.225 kg/m³ at the ground), the spread eagle skydiver reaches a top speed and then slows down. Explain why, and estimate the top speed.

## Common misconceptions

- **"At terminal speed there is no force on the body."** The weight and the drag are both there; they cancel.
- **"A heavier body falls faster because gravity pulls it harder."** In a vacuum all bodies fall together. With drag, the heavier body has to go faster before the drag can balance its larger weight.
- **"The parachute pulls you up."** The canopy makes the drag larger than the weight for a few seconds, so the acceleration points up and the body slows down; it never moves up.
- **"Terminal speed is reached quickly and exactly."** The approach is gradual: about 12 s and 390 m to get within 1% for the spread eagle skydiver, and in thin air it is never one number.

## Physics behind the demo

- Down positive, m dv/dt = mg − ½ρ(CA)v|v|, g = 9.80 m/s²; buoyancy and added mass left out, a straight vertical fall. RK4 with steps of at most 10 ms and v_T/(100g); it matches v_T tanh(gt/v_T) to 1 part in 10⁹, and landing is found by bisection.
- Uniform air ρ = 1.21 kg/m³ (the textbook's); the thin air option is the International Standard Atmosphere below 11 km (U.S. Standard Atmosphere 1976).
- Skydiver: C = 1.0 and A = 0.70 m² spread eagle, C = 0.70 and A = 0.18 m² head first (the textbook's Table 6.2 and examples); position changes take 1.0 s at a steady rate of change of CA.
- Canopy: flat circular, 10.0 m flat diameter, C = 0.81 on the flat area (Scher and Young, NASA TN D-6423, 1971), CA = 63.6 m²; 1.0 s line stretch, 3.0 s fill with CA growing in proportion to time (model choices), body upright under it.
- Coffee filter: 0.86 g, 15.1 cm across, C = 0.71 (Boyle and Pantaleone, arXiv:2206.14902, 2022). Nested filters: n times the mass, the same area.

## Going further

- Pair with **Projectile Range** (the same drag force on a ball in flight) and the **Falling Ball Viscometer** (Stokes' law, where the drag is proportional to v, §14.7).
- Homework: Haldane's mouse. A body scaled down by 10 in every length has 1/1000 of the weight and 1/100 of the area. By what factor does its terminal speed change?
