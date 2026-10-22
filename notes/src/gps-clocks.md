---
title: GPS Clocks and Relativity
level: PHYS 201
time: 10 to 20 minutes
---
## What students should come away with

- In general relativity, clocks deeper in a gravitational field run slower: a clock higher up gains, by about ΔΦ/c² = (GM/c²)(1/R − 1/r) as a fraction.
- In special relativity, a moving clock runs slower by about v²/(2c²).
- For GPS satellites (r = 26,560 km, 3.87 km/s) gravity wins: +45.7 μs/day from height, −7.1 μs/day from speed, net +38.6 μs/day. Light goes 11.6 km in that time, so uncorrected positions would drift by kilometres a day. The satellite clocks are deliberately set slow before launch.
- The effect is tiny on the ground (a 22.5 m tower: 2.5 × 10⁻¹⁵, measured by Pound and Rebka in 1959) but everyday technology depends on it.

## Before class

Students need gravitational potential energy −GMm/r and orbital speed v = √(GM/r). The left panel views Earth from above the North Pole with the second clock (square) and the ground clock (dot); the clocks run 1 simulated hour per second. The graph shows the gain per day against orbit radius: gravity (rises), speed (falls), net. **Blind** hides the rates.

## Running it in class

1. **Predict.** Blind on. Does a GPS clock run fast or slow compared with the ground? Most will say slow ("moving clocks run slow"). Run the clocks for a few hours, then turn Blind off: +38.6 μs/day.
2. **Split it.** Gravity +45.7, speed −7.1. Point at the graph: the speed curve is largest for low orbits.
3. **Space station.** At 400 km the speed effect wins: the clock loses 24.6 μs/day.
4. **Where they cancel.** About r = 9540 km (1.5R for a ground clock at rest).
5. **Lab tower.** 22.5 m: 212 ps/day, fractional 2.45 × 10⁻¹⁵. Pound and Rebka measured this frequency shift with gamma rays.

## Questions

**Q1.** Using the first order formulas, estimate the gravitational and speed parts for a GPS clock and the net gain per day.

**Q2.** How far does light travel in 38.6 μs? Why does that matter for GPS?

**Q3.** Why does a clock on the space station lose time compared with the ground, while a GPS clock gains?

**Q4.** Show that for a clock in circular orbit compared with a ground clock at rest the two effects cancel at r = 3R/2.

**Q5.** Find the Schwarzschild radius 2GM/c² of Earth. What would it mean for Earth to be squeezed inside it?

## Common misconceptions

- **"Relativity only matters near the speed of light."** Fractional effects of 10⁻¹⁰ add up to microseconds a day, and GPS needs nanoseconds.
- **"Satellite clocks run slow because they move fast."** For GPS the gravitational speed up is six times bigger than the speed slowdown.
- **"Time dilation is an illusion of the clocks."** Atomic clocks flown on aircraft and kept on satellites show the predicted offsets.

## Physics behind the demo

- Earth as a non-rotating sphere (Schwarzschild exterior). A clock at radius r moving at speed v in the non-rotating frame ticks at dτ/dt = √(1 − 2GM/(rc²) − v²/c²) of coordinate time; for a circular orbit this is the exact √(1 − 3GM/(rc²)). Computed without cancellation in double precision.
- The gravity part is the rate difference with the second clock moved to r but given the ground clock's speed; the speed part is the rest. They add to the total.
- The ground clock sits at radius 6371 km, either at rest or at the equator turning with Earth (465 m/s). The real GPS correction uses the geoid and includes Earth's flattening; the sphere model gives 38.6 μs/day, the usual quoted value.
- Not included: the Sun's and Moon's fields, orbit eccentricity (which adds a periodic term GPS receivers correct), and the Sagnac effect for signals.
