---
title: Electrostatics at Work
level: PHYS 202
time: 15 to 25 minutes
---
## What students should come away with

- A conductor's charge sits on its outside surface, so a hollow dome can keep taking charge from inside. That is how a Van de Graaff generator works.
- A charged sphere's voltage is V = kQ/R and its surface field is E = V/R. The air breaks down at about 3 MV/m, so the highest voltage is V_max = E_b R: a bigger dome holds a higher voltage, and a sharp point (small R) sparks first.
- A charged drop between plates is a projectile in a uniform field. Its deflection is proportional to q/m and to the plate voltage, and falls as 1/v². An ink jet printer steers each drop by choosing its charge.
- In a precipitator, charged particles drift across the gas flow at a speed set by the electric force against air drag. The fraction caught is 1 − exp(−wL/(us)), so larger particles and longer plates are caught far better.

## Before class

Students need V = kQ/R and E = kQ/r² for a sphere (OpenStax Vol 2 §7.3, §6.3) and projectile motion. **Blind** hides the answers in each machine; the ruler beside the paper and the precipitator counters stay, so they can be used to measure.

## Running it in class

1. **Van de Graaff.** Start the motor with R = 15 cm and I = 2.0 µA. Ask: what limits the voltage? The dome reaches 450 kV in 3.76 s and sparks. Double R to 30 cm: V_max doubles to 900 kV but the time to spark goes up four times (Q_max ∝ R²).
2. **Field inside.** Point at the E(r) graph: zero inside the dome, kQ/r² outside. This is why the belt can deliver charge to the inside of the dome against a high voltage.
3. **Ink jet.** Fire one drop with the defaults: it lands 0.99 mm up. Double q: twice as high. Double v: a quarter as high. Set q = 0 and the drop goes into the gutter.
4. **Print PHYS.** The controller gives each dot its own charge. Change the plate voltage and print again: the letters keep their shape because the charges are recalculated.
5. **Precipitator.** At 1 µm the efficiency is 87%. Slide the diameter: 10 µm particles are caught to better than 99.99%, while 0.1 µm particles are mostly lost in this model. Double the plate length: the escaping fraction is squared.
6. **Shuffle and spark.** Ten shuffles in rubber soles on a wool rug leave the body at −5.16 kV (100 pF), so the spark jumps 1.16 mm to the doorknob and carries ½CV² = 1.33 mJ. Ask what a fur rug does before trying it: −8.44 kV and a 2.15 mm spark. Wool socks on a wool rug move no charge at all, and no amount of shuffling goes past 13.3 kV, where the air at the soles breaks down.

## Questions

**Q1.** A Van de Graaff dome has radius 15 cm. Taking the breakdown field of air as 3.0 × 10⁶ V/m, find the highest voltage the dome can hold and the charge on it at that voltage.

**Q2.** The belt delivers 2.0 µA. How long does the 15 cm dome take to charge from zero to breakdown? How long would a 30 cm dome take, and why is it not twice as long?

**Q3.** A 60 µm ink drop (water, 1000 kg/m³) carrying 0.15 pC moves at 20 m/s between plates 10 mm long and 2.0 mm apart at 3000 V, then travels 15 mm to the paper. How far up does it land? How much does gravity change that?

**Q4.** In the ink jet, students measure where drops land with the voltage at 3000 V and find 1.33 mm. What is the drop's charge, if the drop is the same as in Q3?

**Q5.** A precipitator catches 87% of 1 µm particles with plates 5 m long. What would it catch with plates 10 m long, all else the same? Why is it not 100%?

## Common misconceptions

- **"A bigger dome is charged faster to the same voltage."** For a fixed current, the time to reach a voltage V grows with R, because C = 4πε₀R.
- **"Charge spreads through the metal."** In equilibrium it sits on the outer surface, and the field inside is zero.
- **"The field pushes the drop all the way to the paper."** The force acts only between the plates; afterwards the drop coasts in a straight line.
- **"A precipitator filters the gas."** Nothing blocks the flow: the particles are moved sideways by the electric force.

## Physics behind the demo

- Dome: isolated conducting sphere, C = 4πε₀R. Breakdown field of dry air at 1 atm taken as 3.0 × 10⁶ V/m (approximate). Constant belt current, no leakage before the spark, spark empties the dome.
- Ink jet: uniform field V/gap between the plates and none outside; gravity included, air drag left out (stated on the page with an estimate). Drop charge kept far below the Rayleigh limit 8π√(ε₀γr³).
- Precipitator: saturation field charge q = 4πε₀a²E·3κ/(κ + 2) (Pauthenier), Stokes drag with the Cunningham slip correction 1 + Kn(1.257 + 0.4 e^(−1.1/Kn)), air at 20 °C (η = 1.81 × 10⁻⁵ Pa·s, mean free path 0.066 µm), Deutsch equation. Diffusion charging is left out, so submicron efficiencies are underestimated.
- OpenStax Vol 2 §7.6 describes these machines (plus xerography and laser printers) qualitatively; the numbers here are the demo's own calculations.
