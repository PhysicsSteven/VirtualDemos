---
title: Capacitors and Dielectrics
level: PHYS 202
time: 20 to 30 minutes
---
## What students should come away with

- Capacitance depends only on geometry and material: C = κε₀A/d for parallel plates. Q = CV says what happens when C changes, but not by itself which of Q or V stays fixed.
- Connected to a battery, V is fixed and Q follows C. Isolated, Q is fixed and V follows 1/C. The same move gives opposite energy changes in the two cases.
- The energy U = ½CV² = Q²/(2C) lives in the field, u = ½κε₀E², and every change is accounted for: W_hand + W_battery = ΔU + heat.
- A dielectric's bound surface charge cancels part of the field of the free charge, so the same V holds κ times the free charge. The fringe field pulls a dielectric into the gap.
- Capacitors in series share one charge and add their voltages; in parallel they share one voltage and add their charges.

## Before class

Students should know E = σ/ε₀ for a charged sheet, potential difference and work. Each setup starts a slow automatic sweep; press **Pause** to drag the plate grip or use the sliders yourself. **Mark start** zeroes the "Since the start" table and the energy bars (hand, battery, heat, ΔU): press it before each move you discuss. For a lab, **Capture reading** stores the settings and the displayed values (d, x/s, C, Q, V, E, U and the energies since Mark start), **Export CSV** saves them in SI units, and the plot under the table fits a least squares line to C vs 1/d, C vs x/s or V vs d with slope ± standard error and residuals. **Blind: hide predictions and answers** (in Lab) hides the model curves, ε₀, κ, the forces and the energy check, leaving the meters. **Reduce motion** (in Display) stops the automatic sweep.

## Running it in class

1. **Pull apart, connected.** Pause, set d = 1.0 cm, press Mark start. Ask Q1, then drag to d = 2.0 cm: C, Q, E and U all halve (U from 63.8 to 31.9 nJ), and the battery takes in 63.8 nJ, twice the drop in U (Q3).
2. **Pull apart, isolated.** Same move from 1.0 to 2.0 cm: Q and E stay, V doubles to 200 V, U doubles to 128 nJ, and your hand supplied all of it (Q2).
3. **Reconnect.** Without resetting, click **Connected** (battery at 100 V). Charge rushes back into the battery and the heat bar appears (Q6).
4. **Slide in a dielectric.** Isolated plates and a Pyrex slab. As it goes in, C rises, V and U fall, and W_hand is negative: the slab is pulled in. Turn on **Bound charges** to see what cancels the field. Then switch to **Connected** and slide it again (Q4).
5. **Energy in the field.** Sum u × volume over the air gap and the paper: it equals ½CV². The energy density is higher in the air gap than in the paper.
6. **Series and parallel.** Switch between **Series**, **Parallel** and **Mixed**; the table shows Q, V and U on each capacitor (Q5).

## Questions

**Q1.** Predict: a parallel plate capacitor stays connected to a 100 V battery while you double the plate separation. For each of C, Q, V, E and U, does it double, halve, or stay the same? Then predict the same five for an isolated capacitor. Check with the first two setups.

**Q2.** Square plates with A = 144 cm² and d = 1.00 cm are charged to 100 V and disconnected. Find C, Q and U. The plates are then pulled to d = 2.00 cm. Find the new V and U, and the work your hand did. Show that this work equals the attractive force Q²/(2ε₀A) times the distance moved.

**Q3.** In Pull apart, connected, the plates attract, so your hand does positive work pulling them apart; yet the stored energy goes down. Where does the energy go? Show that the battery's work is W_battery = VΔQ = 2ΔU for this process.

**Q4.** Explain why a dielectric slab is pulled into a charged capacitor, using the bound charges and the fringe field at the edge of the plates. Is it still pulled in when the battery stays connected, even though U then increases as the slab goes in? Check both cases with Slide in a dielectric.

**Q5.** In Series and parallel, C₁ = 10 pF, C₂ = 22 pF and C₃ = 47 pF are connected in series to 100 V. Find C_eq, the charge on each, and the voltage across each. Which capacitor stores the most energy? Check with the table.

**Q6.** After the isolated plates have been pulled to d = 2.00 cm in Q2 (now at 200 V), the 100 V battery is connected again. How much charge flows, and in which direction? How much energy becomes heat in the wires? Check the heat bar and the "Since the start" table.

## Common misconceptions

- **"Pulling the plates apart always increases the stored energy."** Only when isolated. With the battery connected, U falls, because Q flows back into the battery.
- **"A dielectric stores more energy because the energy density inside it is larger."** For the same free charge, D is the same and u = D²/(2κε₀) is smaller in the dielectric. C grows because the same V holds more free charge.
- **"In series the largest capacitor takes the largest voltage."** The charge is the same on each, so V = Q/C is largest on the smallest capacitor.
- **"The battery gives the capacitor exactly the energy it stores."** Charging from a battery, the battery does QV and the capacitor keeps ½QV; the other half becomes heat, whatever the resistance of the wires.

## Physics behind the demo

- Readouts use the ideal parallel plate model, with a uniform field and no fringing: C = ε₀A/d, U = ½CV², E = V/d, σ = ε₀E, attraction ½V²|dC/dd| = Q²/(2ε₀A).
- A partly inserted slab makes two capacitors in parallel: C(x) = ε₀(s/d)(s − x) + ε₀(s/d_in)x with d_in = (d − t) + t/κ. The force pulling it in is ½V² dC/dx, the same expression whether the battery is connected or not.
- Field lines come from a numerical solution of Laplace's equation for the cross section (plates infinitely deep, inside an insulating box), so they show fringing honestly; a share 1 − 1/κ of them ends on the bound charge. The wires and battery are not part of that solution.
- All changes are slow (quasi static), the battery and wires are ideal, and the slab slides without friction. When a battery is connected at a different voltage, the charge flows at once and ½C(ΔV)² becomes heat.
- κ values are at 20 °C and low frequency; water's 80.1 is for pure water. Tap water conducts, and the charge would leak through it.

## Going further

- Homework: show that the fraction of a battery's work lost as heat when charging a capacitor through a resistor R is ½, independent of R, by integrating I²R over the RC charging curve.
