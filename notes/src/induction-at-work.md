---
title: Induction at Work
level: PHYS 202
time: 15 to 25 minutes
---
## What students should come away with

- In each device a changing flux makes an EMF, ε = −dΦ/dt. The size of the EMF depends on how fast the flux changes, so it grows with the speed of the magnet, the pen or the card.
- The shake flashlight turns the work of your hand into stored electric energy: a magnet moving through a coil, a rectifier, and a capacitor. The energy readouts show where every joule goes.
- A graphics tablet of the kind OpenStax describes finds a magnetic pen from the EMFs in a grid of wires. Because the EMF needs a changing flux, a pen held still is invisible to it.
- A magnetic stripe stores bits as regions of opposite magnetization. Each flip passing the reading head gives a pulse, and the pattern of pulses (F2F) carries its own clock, so the speed of the swipe does not matter.

## Before class

Students need Faraday's law with flux, ε = −N dΦ/dt, and P = IV. **Blind** hides the EMF plots, the light's glow, the capacitor voltage, the tablet's estimate and the decoded number.

## Running it in class

1. **Shake flashlight.** The EMF is a pair of opposite pulses each time the magnet passes through the coil: the flux rises as it enters and falls as it leaves. Peak EMF 2.84 V at 3 shakes per second; double the rate and it doubles. The capacitor creeps up; turn on Fast forward.
2. **Flashlight, light on.** The capacitor starts at 3.0 V and the light dims within seconds. Shake with the light on and read the energy column: from your hand, heat in the coil, the diodes, the light, the capacitor.
3. **Graphics tablet.** Watch which wires light up under the moving pen and the EMF bars: a peak under the pen that changes sign with the direction of motion. The tablet's fit puts the pen within a small fraction of the 5 mm wire spacing.
4. **Tablet, pen held still.** Nothing. Ask why. Real tablets make the pen's field alternate so that it changes even when the pen does not move.
5. **Card reader.** 50 bits, 65 flips, 65 pulses, read back as 2026. Change the speed: taller, narrower pulses, the same number.
6. **Card, uneven swipe.** The pulses bunch and spread, yet the number reads.

## Questions

**Q1.** In the shake flashlight the magnet's peak speed is v = 2πfA. For f = 3 Hz and A = 3.0 cm, find v. The largest value of N dΦ/dz for this coil is 5.17 Wb/m, about 7 mm from the coil's center. Estimate the peak EMF and explain why it is less than (5.17 Wb/m)v_max.

**Q2.** The capacitor is 0.10 F. How much energy does it hold at 2.6 V, where the light starts to glow? If the bridge rectifier loses 0.60 V and the peak EMF is 2.84 V, what is the highest voltage the capacitor can reach? What could you change to charge it higher?

**Q3.** Explain, with energy, why shaking gets harder when the capacitor is charging than when the coil is disconnected. Where does the work you do go?

**Q4.** The tablet's pen magnet (m = 0.0163 A·m²) is 5.0 mm above a wire and moves across it at 10 cm/s. The flux through the wire's circuit is Φ = −μ₀m u/(2π(u² + h²)), with u the sideways distance. Find the EMF when the pen is right over the wire. What is it when the pen stops?

**Q5.** Track 2 of a card stores 75 bits per inch. How long is one bit? How long does a 50 bit record take to pass the head at 0.50 m/s? Why does a reader that relies on F2F pulses not need to know the swipe speed?

## Common misconceptions

- **"A strong magnet makes a big EMF."** A strong magnet that does not move makes none. The EMF depends on the rate of change of flux.
- **"The flashlight makes energy from the magnet."** The magnet is unchanged; the energy comes from the work done against the coil's magnetic force.
- **"The coil's EMF is largest when the magnet is in the middle."** That is where the flux is largest and momentarily not changing as the magnet passes through: the EMF changes sign there.

## Physics behind the demo

- Flashlight: point dipole magnet m = B_rV/μ₀ (B_r = 1.3 T, typical NdFeB), coil of 1000 turns of radius 12 mm over 10 mm, resistance from 75 m of 0.20 mm copper (40.3 Ω). Bridge with two 0.30 V diodes conducting, LED as 2.6 V plus 20 Ω. Chosen values except the copper's resistivity. Time step 0.2 ms.
- Tablet: dipole pen, wires closed far away, flux through a half plane (closed form), EMF = −dΦ/dt; the pen is found by a least squares fit of the known shape to five wires; detection threshold 0.5 µV (chosen).
- Card: ISO/IEC 7811 track 2 density and character code (the check character is left out); F2F recording; pulse shape g²/((x − x_k)² + g²) with a chosen g = 0.04 mm; decoding by tracking the bit period.
