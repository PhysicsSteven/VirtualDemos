---
title: Falling Ball Viscometer
level: PHYS 201
time: 30 to 50 minutes
---
## What students should come away with

- Viscosity η measures a fluid's resistance to shearing. A slow sphere feels Stokes drag F = 6πηrv, proportional to its speed.
- A dropped ball quickly reaches terminal speed, where weight = buoyancy + drag. With Stokes drag v_t = 2(ρ_b − ρ_f)g r²/(9η), so v_t ∝ d², and timing the fall measures η.
- Stokes' law needs slow flow: a small Reynolds number Re = ρ_f v d/η. At large Re (a steel ball in water) the drag grows faster than v and Stokes' law fails by factors of ten or more.
- Real measurements must also correct for the tube walls, which slow the ball noticeably even when the tube is ten times wider than the ball.

## Before class

Students need buoyancy (Archimedes) and the idea of terminal speed. The tube is drawn to scale; the marks A and B are 0.200 m apart, starting 0.150 m below the surface so the ball is at terminal speed before A. Playback can run ×10 or ×100 for the slow cases (the timer always shows real time). Nylon is lighter than glycerol: it rises from the bottom. The **Mystery liquid** shows its density but hides η; **Blind** hides η, the Stokes prediction, the wall factor and Re.

## Running it in class

1. **Steel, 3 mm, glycerol, 40 mm tube.** A to B in 10.54 s: v = 19.0 mm/s. Stokes' law alone predicts 22.7 mm/s. Ask where the 17% went: the walls (K = 1.186).
2. **Same ball, 100 mm tube.** 9.49 s: 21.1 mm/s, closer to Stokes. Even here K = 1.067.
3. **Ball size.** 1, 2, 3 mm in glycerol: v grows as d². At 8 and 10 mm the points fall well below the d² line (walls and, at Re ≈ 1, inertia).
4. **Water.** A 3 mm steel ball takes 0.26 s; Stokes' law predicts 33 m/s and would give η = 43 mPa·s, over 40 times water's real 1.0 mPa·s. Re ≈ 2300, and the readout says so: this flow is far from slow, and the wake becomes turbulent.
5. **Nylon in glycerol.** It rises: ρ_b < ρ_f, so the drag balances the net upward buoyant force.
6. **Lab.** Capture several small ball sizes in one liquid and tube, plot v against d², find η; then correct each speed by K and compare. Repeat with the Mystery liquid.

## Questions

**Q1.** Draw the forces on the ball at terminal speed and derive v_t = 2(ρ_b − ρ_f)g r²/(9η) from Stokes' law.

**Q2.** A 3.0 mm steel ball takes 10.54 s between the marks in glycerol (40 mm tube). Find v and η from Stokes' law alone, then with the wall factor K = 1.186 (v_∞ = Kv).

**Q3.** Find the Reynolds number for Q2. Why is Stokes' law reasonable here but not for a steel ball in water?

**Q4.** Why does a nylon ball rise in glycerol but sink in motor oil? What is its terminal speed in glycerol according to Stokes' law, for d = 6.0 mm?

**Q5 (lab).** Show that v against d² is a line through the origin with slope (ρ_b − ρ_f)g/(18η). Find η for the Mystery liquid, with and without the wall correction, and say which balls you left out and why.

## Common misconceptions

- **"Heavier balls fall faster because gravity pulls harder."** In a viscous liquid the speed is set by a balance of forces; a ball twice the diameter has 8 times the weight but only 2 times the Stokes drag at the same speed, so it falls 4 times faster.
- **"Terminal speed means the forces vanish."** The net force is zero; all three forces are still there.
- **"Stokes' law always works for falling balls."** Only when Re is small, roughly below 0.1 to 1. In water everyday balls are in the opposite regime.
- **"The tube is wide enough not to matter."** The wall correction is about 2.1 d/D for small balls: 6% for a 3 mm ball in a 100 mm tube.

## Physics behind the demo

- Equation of motion with x downward: (m + ½m_f) dv/dt = (m − m_f)g − F_drag, where m_f = ρ_f V is the displaced liquid and ½m_f the added mass of a sphere. Integrated with RK4 (steps a twentieth of the response time) until terminal speed, then exactly.
- Drag F = 6πηrv × K(d/D) × C_D Re/24. C_D is the standard drag curve for a sphere (Clift, Grace and Weber 1978), with Oseen's 1 + 3Re/16 below Re = 0.01; its published pieces meet within 1%. K is Haberman and Sayre's wall factor for a sphere on the axis of a long tube in slow flow, the factor students apply. At higher Re the walls slow the ball less; the factor is raised to the power nα/3.3, with α = (3.3 + 0.085 Re)/(1 + 0.1 Re) from Di Felice (1996) and n = d ln F/d ln v of the unbounded drag, which reproduces Di Felice's terminal speed ratio to within 0.4% (his fit covers Re up to about 200).
- At small Re the inertial correction is 3Re/16: 0.9% for the 3 mm steel ball in glycerol. The wall corrected fit of the 1 to 3 mm balls gives 1.423 Pa·s against the true 1.41.
- The readouts say whether Stokes' law applies (Re under 0.1, about 1, or inertia dominated) and warn when the ball is still speeding up at mark A (large balls in water).
- Liquids at 20 °C: glycerol 1261 kg/m³, 1.41 Pa·s; castor oil 961, 0.986 Pa·s; motor oil (typical SAE 30, varies by brand) 875, 0.29 Pa·s; water 998, 1.00 mPa·s. Balls: steel 7800, glass 2500, nylon 1140 kg/m³. The Mystery liquid has η between 0.30 and 2.5 Pa·s.
- The timer records the exact crossing times of A and B and rounds their difference to 0.01 s; there is no added noise.
