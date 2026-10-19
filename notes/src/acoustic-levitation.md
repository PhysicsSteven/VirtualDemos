---
title: Acoustic Levitation
level: Intro physics (waves, sound); PHYS 202 (force from a potential)
time: 15 to 25 minutes
---
## What students should come away with

- Sound waves moving both ways make a standing wave, and a small bead in it feels a steady force, the time average of a very fast push, growing as the square of the sound amplitude.
- A small bead much denser and stiffer than air is pushed toward the pressure nodes, so every pressure node is a trap, about half a wavelength apart (λ/2 = 4.29 mm at 40 kHz).
- A bead floats only if the largest upward push beats its weight. Both scale with the bead's volume, so the bead's size drops out: what matters is its density and the drive.
- Changing the phase of one source moves the whole pattern of traps, one trap spacing for every 360°, and the beads ride along.

## Before class

Students should know what a standing wave is (nodes and antinodes), that sound is a pressure wave, and that a force is the downhill slope of a potential energy, F = −dU/dz. In projector mode the demo fits a 1280 × 720 screen; the Slice view reads best from the back of a room.

## Running it in class

1. **Stack of beads.** The beads hang on the axis like rungs of a ladder. Ask the prediction question (Q1) before you say anything about nodes. Then switch the colors from Pressure |p| to Potential U: the beads sit in the blue wells, on the pale bands of the pressure picture.
2. **Hold a bead.** Point to the readout F<sub>max</sub>/W, about 112 at 10 V. Lower the drive slowly with the left arrow key or the slider. Ask when it will fall; the rail's "Holds above" gives the answer, about 0.94 V.
3. **Water droplet**, then **Too heavy: steel falls.** The droplet still floats at 10 V but hangs a little lower in its trap (the "trap − node" column). Steel falls out through the hole in the bottom bowl. Ask Q3, then raise the drive until steel holds.
4. **Move with phase.** The top bowl's phase sweeps back and forth and the beads ride the traps up and down. Stop the sweep and drag a trap ring by hand. Ask Q2: why are the traps 4.76 mm apart here, not λ/2?
5. **Single emitter and reflector.** One transducer and a flat plate make the same kind of ladder, but much weaker. Try the water droplet, then try the phase slider (it does nothing). Use Q4.
6. **Sound.** Turn on the sound, sweep the phase, and listen with the microphone at the centre (Q6).

## Questions

**Q1.** Predict: a standing sound wave has pressure nodes, where the pressure hardly changes, and pressure antinodes, where it swings most. Will a small foam bead float at the nodes, at the antinodes, or somewhere in between? Give a reason before you look.

**Q2.** The speed of sound in air at 20 °C is 343.2 m/s. (a) Find the wavelength at 40 kHz and the node spacing of a plane standing wave. (b) In this levitator the sound from each bowl reaches the centre at angles θ from the axis, with ⟨cos θ⟩ = 0.901 averaged over the transducers. Along the axis the phase then advances at k⟨cos θ⟩ instead of k. What is the trap spacing at the centre? (c) By how many degrees must the top bowl's phase change to lift a bead by 1.00 mm near the centre? Check with the demo.

**Q3.** At 12 V the demo reports F<sub>max</sub>/W = 0.625 for a steel bead, so it falls. The acoustic force is proportional to the square of the pressure, and the pressure is proportional to the drive voltage. What is the lowest drive that holds steel? Would a steel bead half the radius need more, less, or the same drive? Explain, then check both with the demo.

**Q4.** Explain why one transducer over a flat reflector holds a foam bead only above about 10 V, while the two bowls hold it above about 1 V. Then explain why changing the emitter's phase moves the traps of the two bowl levitator but not those of the single emitter.

**Q5.** In a plane standing wave the force on a small bead near a node is F = F<sub>max</sub> sin 2kz − W, measured from the node. A water droplet at 10 V has F<sub>max</sub>/W = 3.42. How far below its node does it hang? Use k⟨cos θ⟩ = 660 m⁻¹ for the levitator's centre. Compare with the "trap − node" column for the traps nearest the centre, and with the same estimate for foam, F<sub>max</sub>/W = 112.

**Q6.** Use the demo: put the microphone on the axis at the centre, turn on the sound, and change the top bowl's phase slowly from 0° to 360°. How many times does the tone go quiet? Explain the count from how the pattern moves.

## Common misconceptions

- **"The sound pushes the bead up like wind."** The pressure swings 40 000 times a second and its push averages to zero. What holds the bead is a small leftover force, second order in the amplitude, pointing toward the pressure nodes.
- **"Bigger beads are harder to lift."** Weight and trapping force both grow as a³, so within the small bead theory the size cancels. Density decides: foam floats easily, water needs more drive, steel needs much more.
- **"The bead sits exactly at the node."** Gravity pulls it below until the restoring force balances its weight, by a few µm for foam and about 0.2 mm for water at 10 V.
- **"The traps are always exactly λ/2 apart."** That holds for waves running straight along the axis. Converging waves from a bowl repeat along the axis every λ/cos θ, so the traps near the centre are about 11% farther apart.

## Physics behind the demo

- The field is the sum of 72 transducers (36 per bowl, rings of 6, 12 and 18 on a sphere of radius 60 mm, as in the TinyLev levitator of Marzo, Barnes and Drinkwater, 2017). Each is a 10 mm piston in its far field, p = P₀V D(θ) e^(i(kd + φ))/d with D = 2J₁(ka sin θ)/(ka sin θ).
- Illustrative calibration P₀ = 0.30 Pa·m per volt peak to peak, from the data sheet; real arrays deliver less. Free field: no reflections from the bowls, no nonlinear acoustics, no near field (within about 9 mm of a transducer face). The single emitter setup uses one mirror image for a rigid flat reflector, so there is no resonance.
- Force: Gor'kov's potential for a small sphere (ka ≪ 1), U = K₁|p|² − K₂|∇p|², with K₁ = πa³f₁/(3ρ₀c²), K₂ = πa³f₂/(2ρ₀ω²), f₁ = 1 − ρ₀c²/K<sub>p</sub>, f₂ = 2(ρ<sub>p</sub> − ρ₀)/(2ρ<sub>p</sub> + ρ₀). Traps are minima of U + Wz along the axis, with W the weight less buoyancy. The demo warns above a = λ/10.
- Beads move only along the axis, pass through each other, and feel Schiller and Naumann drag; motion is shown 20 times slower than real. The sound is a 400 Hz stand in (40 kHz ÷ 100) whose loudness follows |p| at the microphone.

## Going further

- Homework: show that for p = p₀ cos kz the Gor'kov potential gives F = F<sub>max</sub> sin 2kz with F<sub>max</sub> = πΦka³p₀²/(ρ₀c²), Φ = f₁/3 + f₂/2, and find the drive needed for a bead of density ρ<sub>p</sub>.
