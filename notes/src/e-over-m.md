---
title: e/m of the Electron
level: Modern physics lab
time: 20 to 40 minutes (a full lab period with the table and fit)
---
## What students should come away with

- A charge moving at right angles to a uniform field feels a force evB at right angles to its velocity, so it moves in a circle of radius r = mv/(eB). Speed comes from the gun: eV = ½mv².
- Eliminating v gives e/m = 2V/(B²r²). Neither e nor m can be found separately this way, only their ratio, which is why Thomson measured e/m.
- B at the center of a Helmholtz pair is (4/5)^(3/2) μ₀NI/a, nearly uniform over the middle; the coil radius a has to be measured.
- Reading r is the hard part: parallax between the beam and the scale, the beam's width, and choosing the edge. Averaging both sides and fitting many settings beats one careful reading.

## Before class

Students should know the magnetic force qv × B, circular motion and energy conservation. Decide whether students should enter their own coil diameters (the real lab measures inner and outer diameter). Turn on **Blind** before projecting the table.

## Running it in class

1. **No field: a straight beam.** Raise the coil current slowly and watch the beam curl upward. Ask which way the force points and why the speed never changes.
2. **A circle.** Ask Q1 first. Show the view through the front coil: the beam and its reflection only line up when your eye is straight in front of the edge you read. Read the left side, move the eye, read the right side.
3. **More voltage, bigger circle** and **More current, smaller circle.** Predict the new radius each time (Q2) before switching.
4. **Tilt the tube: a helix.** Part of the velocity is along B and is untouched. Ask why a tilted tube spoils the measurement (Q5).
5. **Measure e/m.** Six simulated readings fill the table; have students add their own and compare the fit with the accepted value.

## Questions

**Q1.** Predict: the electrons in the beam move at constant speed even though a force acts on them all the time. Why? Which way does the force point at the top of the circle?

**Q2.** At V = 200 V and I = 1.50 A, with N = 130 and a = 15.0 cm, find B, the electron speed and the radius of the circle. What radius do you expect at 300 V and the same current, and at 200 V and 2.00 A? Check with the demo.

**Q3.** Why can this experiment give only e/m, and not e and m separately? What extra experiment did physicists need to get e itself?

**Q4.** A student reads r = 4.00 cm when the true radius at 200 V and 1.50 A is 4.08 cm. What value of e/m do they get, and by what percentage is it off? Why is the error in e/m about twice the error in r?

**Q5.** In **Tilt the tube: a helix** the tube is turned 12°. What happens to the velocity component along B? Find the radius and pitch of the helix at 200 V and 1.50 A. If a student measured the helix as if it were a circle, would their e/m be too high or too low?

**Q6.** The earth's field (take 2 × 10⁻⁵ T along the coil axis) adds to or subtracts from the coil field. At 1.50 A, by what percentage does it change B, and e/m? How could you cancel it in the lab?

**Q7.** The manual warns that real results for e/m usually come out high. Give one physical reason the electrons could have less energy than eV when they reach the circle, and say which way that biases e/m.

## Common misconceptions

- **"The magnetic force speeds the electrons up."** It is always at right angles to the velocity, so it does no work: it only turns the beam.
- **"A bigger current makes the electrons go faster."** The voltage sets the speed; the current sets the field and so the radius.
- **"The beam is the electrons."** The glow is helium atoms excited by collisions with the electrons; it marks the path the electrons take.
- **"Reading one side carefully is enough."** The beam may not be centered on the scale, and parallax shifts each side differently. Reading both sides and averaging removes much of that.

## Physics behind the demo

- B = (4/5)^(3/2) μ₀NI/a ≈ 7.79 × 10⁻⁴ T/A × I for N = 130, a = 0.150 m. e/m = 2V/(B²r²); the fit is 2V against (Br)² through the origin, with slope e/m.
- The beam is traced through the exact field of the two coils (computed with elliptic integrals), not a perfectly uniform one, so circles, helices and glass hits come from the computed motion. Off center the field is a little weaker, so e/m from the center field comes out slightly low for large circles (about 1% for a 5 cm circle).
- The mirrored scale and the eye: the reading pointers are set by the student; the beam flickers by up to about 1 mm (simulated). Meter readings carry small seeded jitter.
- Not simulated: energy lost by the electrons before they reach the circle (in the anode and in collisions with helium). The earth's field is an optional toggle.

## Going further

- Have students plot r against √V at fixed I and r against 1/I at fixed V, and check both are straight lines before fitting for e/m.
- History: J. J. Thomson measured e/m for cathode rays in 1897 with crossed electric and magnetic fields and found it about a thousand times larger than for hydrogen ions, evidence that cathode rays are particles far lighter than atoms.
