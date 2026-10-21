---
title: Faraday's and Lenz's Laws
level: PHYS 202
time: 20 to 30 minutes
---
## What students should come away with

- An EMF is induced only while the flux changes: EMF = −N dΦ_B/dt. A magnet at rest induces nothing.
- Lenz's law: the induced current's field opposes the change in flux, so the coil resists the motion; that work becomes heat in R.
- The charge that flows depends only on the change in flux, Q = −NΔΦ_B/R, not on how fast.
- A turning coil gives EMF = NBAω sin ωt, largest when the flux is zero; a sliding bar gives BLv and is braked by ILB.
- Mutual induction: an alternating current in one coil induces an EMF in a neighbouring coil, EMF₂ = −M dI₁/dt when the second coil is open. Closed, its current opposes the change, pushes the coils apart and changes the current the source has to supply.

## Before class

Students need Φ_B = BA cos θ, the field of a bar magnet and the right hand rule for a loop. Signs follow the **Sign convention** panel.

## Running it in class

1. **Push the magnet in.** Ask Q1 first. Φ_B rises; the coil's near face acts as a north pole and pushes back. When the magnet stops, so does the current. Then **Pull out**.
2. **Speed matters.** Still in **Push the magnet in**: the gray trace is the same push at 0.10 m/s, yours is 0.20 m/s: twice the EMF for half the time, and equal shaded areas. Set the speed to 0.40 m/s and press **Push in** for Q3.
3. **Pass it through.** Two EMF lobes of opposite sign; net charge zero (Q4).
4. **Flip the magnet.** Φ_B goes from +Φ to −Φ: the current runs one way all the turn, and Q is twice what removing the magnet would give.
5. **Generator.** Pause at an EMF peak: the coil is edge on to the field. Then turn the **Motor** off.
6. **Sliding bar.** **Pull at v**: the readouts show your power Fv equal to I²R. Then **Push and let go** to see the bar braked to rest.
7. **Two coils.** Time runs 100 times slower. Ask Q7(a) first, then **Open switch**: Φ₂ follows I₁ and EMF₂ is largest where I₁ crosses zero. Close it again: the dashed flux (from I₁ alone) is much bigger than the actual Φ₂, because I₂ runs nearly opposite to I₁ and cancels much of it; the force arrow shows the secondary pushed away. Compare I₁ with the gray dashed curve (the open switch steady state), then drag the secondary away and watch k fall.

## Questions

**Q1.** Predict: the north pole of a bar magnet is pushed toward a coil connected to a resistor. Does the coil attract or repel it? Which face of the coil acts as a north pole? What happens once the magnet stops inside the coil?

**Q2.** In **Push the magnet in** the flux per turn rises from 4.3 µWb to 292.5 µWb, with N = 400 and R = 100 Ω. How much charge flows? Would it change if the push were twice as fast?

**Q3.** The same push heats the resistor by 457 µJ at 0.20 m/s. Predict the heat at 0.40 m/s, then check: in **Push the magnet in** set the speed to 0.40 m/s and press **Push in** from the start. Why does the heat depend on speed when the charge does not?

**Q4.** In **Pass it through** the net charge is zero, yet the resistor gets warm. Explain. The coil repels the magnet on the way in; which way is the force on the way out, and why must it be so?

**Q5.** The **Generator** has N = 100 turns of area 100 cm² in 0.20 T, turning at ω = 6.3 rad/s. Find the peak and rms EMF and the frequency. What is the flux when the EMF peaks? With R = 100 Ω, what average power must the motor supply?

**Q6.** In **Sliding bar** (B = 1.0 T, L = 20 cm, R = 0.47 Ω) the bar is pulled at 1.0 m/s. Find the EMF, the current, the force needed and your power; compare with I²R. How far does the 20 g bar coast if let go at 1.0 m/s?

**Q7.** In **Two coils** (N₁ = N₂ = 200, f = 200 Hz, V₀ = 5.0 V, d = 2.5 cm, R_L = 0.47 Ω) the readouts give L₁ = L₂ = 3.94 mH, M = 1.44 mH, R₁ = 1.58 Ω and R₂ = 1.55 Ω. (a) With the switch open, find the amplitudes of I₁ and of EMF₂. The ideal transformer ratio is N₂/N₁ = 1; why is |EMF₂|/V₀ so much smaller? (b) Closing the switch raises the primary current amplitude to 1.06 A. Use the reflected impedance ω²M²/(R₂ + iωL₂) to explain why. At 50 Hz closing the switch lowers it slightly instead, from 2.49 A to 2.46 A: why the difference?

## Common misconceptions

- **"A strong magnet inside a coil makes a current."** Only a changing flux does.
- **"The induced field always points opposite to the magnet's field."** It opposes the change: pulling the magnet out, the induced field points along it.
- **"Moving the magnet faster sends more charge around."** The EMF is larger but briefer; Q is the same.
- **"A generator's EMF peaks when the flux peaks."** The flux is then steady for an instant.
- **"Two coils with the same number of turns make a 1 : 1 transformer."** Only if all the flux of one passes through the other (k = 1, as on a shared iron core). Air coils a few centimetres apart have k well below 1.

## Physics behind the demo

- The magnet is a uniformly magnetized cylinder (6 cm × 2 cm); its field and flux are computed exactly. The coil is short and its self inductance is neglected. The magnet moves as you move it: the induced force is shown but does not slow it. Field lines are 45 µWb apart.
- Generator: uniform field, ω fixed by the motor. Sliding bar: frictionless rails, R is the whole circuit; let go, v = v₀e^(−t/τ), τ = mR/(B²L²).
- Two coils: coaxial air coils of 1.0 mm copper wire. M is Maxwell's exact formula for coaxial rings averaged over both winding cross sections; L is Maxwell's formula for a coil of circular cross section, L = μ₀N²a[(1 + c²/8a²) ln(8a/c) − 7/4 + c²/24a²] (Rosa and Grover; Grover 1946). The coupled circuit equations are solved exactly (matrix exponential for the transient plus the phasor steady state). The EMF from moving the coil, I dM/dt, is left out.
