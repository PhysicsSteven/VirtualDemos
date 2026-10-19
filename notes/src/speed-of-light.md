---
title: Speed of Light
level: Modern physics lab
time: 20 to 40 minutes (a full lab period with the table and fit)
---
## What students should come away with

- Light takes a finite time to cross the bench: about 80 ns for a 24 m round trip. Foucault's method turns that time into an angle by letting a mirror rotate while the light is away.
- A mirror turned by Δθ turns the reflected beam by 2Δθ. That factor of 2 is the heart of the geometry.
- The image shift at the microscope is Δs′ = 4AD²ω / (c(D + B)). It is tiny (about a quarter of a millimeter at 1000 rev/s), so the measurement depends on reading the micrometer carefully, taking both rotation directions and fitting many speeds.
- c follows from distances and a rotation rate you can measure on a bench, with no clocks fast enough to time 80 ns directly.

## Before class

Students should know the law of reflection, angular speed ω = 2πf, and the thin lens equation. Pick a setup and a seed to share if you want the class on one instrument. Turn on **Blind** before projecting the readings table, and turn off the digital micrometer reading if you want students to read the sleeve and thimble.

## Running it in class

1. **The bench at rest.** Trace the beam: laser, L1 makes the point source S, the beam splitter, L2, the rotating mirror MR, out to MF and back. Ask why L2 must sit where it does (it focuses S onto MF). Center the crosshair on the spot and capture the rest reading.
2. **Spinning at 1000 rev/s.** Ask Q1 first. The spot moves off the crosshair; follow it with the micrometer and read the shift, about 0.25 mm.
3. **Slow motion: why the beam comes back crooked.** One pulse goes out and back. The mirror's turn is drawn 100 times larger than it is; the readouts show the true Δt and Δθ. Point at the 2Δθ return.
4. **CW then CCW.** The image moves to the other side of the rest reading. Ask why taking the difference is better than measuring from rest (Q4).
5. **Longer path (D = 20 m).** Predict the new shift before switching (Q3). Note that L1 has to move: A comes from the focus condition.
6. **Measure c.** A table filled by the procedure on this seed, labeled as simulated readings. Compare its fit with the class's own.

## Questions

**Q1.** Predict: with the mirror spinning at 1000 rev/s, the light makes a round trip of 2D = 24 m. How many revolutions does the mirror make while the light is away? Is it enough to notice?

**Q2.** For D = 12.0 m, B = 0.500 m and f₂ = 252 mm, find A from the focus condition. Then find Δt, Δθ and the image shift Δs′ at 1000 rev/s. Check with the demo.

**Q3.** If D is raised from 12 m to 20 m (B unchanged), by what factor does the shift grow? The light is away longer and the turned beam has a longer lever arm, which suggests (20/12)² ≈ 2.8. Why is the real factor much smaller?

**Q4.** Students measure the image at 1000 rev/s clockwise and 1000 rev/s counterclockwise instead of against the reading at rest. What is the difference between the two readings, and why is this the better measurement?

**Q5.** The micrometer has 0.01 mm divisions. How well must the shift be read to get c to 1 %? What does that tell you about why the lab fits many readings instead of using one?

**Q6.** A student forgets that a mirror turned by Δθ turns the reflected beam by 2Δθ. What value of c do they get, and why?

**Q7.** D is measured with a tape to ±1 cm at 12 m. Roughly what fractional error in c does that cause? Which is the larger worry, D or the image shift?

## Common misconceptions

- **"The image shift shows the light slowing down on the way back."** The light travels at c both ways. The shift comes from the mirror having turned during the flight.
- **"The beam comes back at the mirror's angle Δθ."** Reflection doubles it: the returning beam is off by 2Δθ.
- **"Faster rotation makes the light take longer."** The flight time 2D/c does not depend on the mirror. Faster rotation only turns the mirror further in that same time.
- **"A longer path just makes the shift proportionally bigger."** Δs′ grows roughly as D² / (D + B): more time for the mirror to turn, and a longer lever arm for the turned beam.

## Physics behind the demo

- Δt = 2D/c, Δθ = ωΔt with ω = 2π × (rev/s). The returning beam is turned by 2Δθ, so the image of S on MF moves 2DΔθ, and L2 reimages it at the microscope with magnification A/(D + B): Δs′ = 4AD²ω / (c(D + B)), so c = 4AD²ω / ((D + B)Δs′).
- The fit uses the slope k of reading against signed speed in rev/s: c = 8πAD² / ((D + B)k). With CW and CCW readings, Δs′ = |s_CW − s_CCW| and ω = 2π(f_CW + f_CCW).
- A is set by 1/f₂ = 1/A + 1/(D + B), with f₁ = 48 mm and f₂ = 252 mm.
- Idealized: thin lenses, a perfect point source, MF exactly at the image of S, the mirror at constant speed. The real image is a train of short flashes as the turning mirror sweeps the beam across MF; it looks steady and is drawn steady.
- Simulated from the seed: the rest position, a 2 µm jitter of the image, and a 0.15 % jitter of the speed meter. Air (n ≈ 1.000 29) is neglected; its 0.03 % effect is far below the method's resolution.

## Going further

- Have students propagate the uncertainties in D, A, B and the slope into c and compare with the scatter of the class's results.
- History: Foucault used a rotating mirror in 1862 and got about 298 000 km/s, within about 0.6 % of the modern value. Michelson refined the method over the following decades.
