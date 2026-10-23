---
title: Sound Waves and the Speed of Sound
level: Acoustics; intro physics (sound); intro lab (speed of sound)
time: 20 to 40 minutes
---
## What students should come away with

- A sound wave in a gas is a longitudinal wave: each bit of gas swings back and forth along the direction the wave travels, s = s_max cos(kx − ωt), and returns to where it started.
- The pressure change is Δp = −B ∂s/∂x: largest where neighbouring bits of gas move toward each other (a compression), zero where the displacement is largest. Pressure and displacement are 90° (a quarter wavelength) out of phase, and Δp_max = ρvω s_max.
- The speed of sound in an ideal gas is v = √(γRT/M): set by the temperature and the gas, not by the frequency or the loudness. v = fλ then fixes the wavelength.
- The time of flight between two microphones, Δt = d/v, is a second way to measure v, independent of the resonance tube. A fit of Δt against d removes any delay common to both channels.
- A digital timer counts whole samples; its resolution sets how far apart the microphones must be.

## Before class

Students need v = fλ, k = 2π/λ, ω = 2πf and the idea of a longitudinal wave. The **Resonators** demo's resonance tube measures v the other way; pairing the two makes a good lab. **Blind** hides v, λ, the predicted Δt and v from the fit; **Unknown gas** hides them (and ρ, Δp, I and β) for good.

## Running it in class

1. **A sound wave in air.** 500 Hz in air at 20 °C. Ask where the air is squeezed and where it moves most; then show the two graphs below the tube. The dashed lines mark the compressions: Δp is largest and s is zero there. Pause and step the frequency with the buttons to watch λ shrink.
2. **The same note in helium.** λ grows almost threefold (2.01 m) at the same f. The pressure amplitude drops to about 40% for the same displacement, because Δp_max = ρvω s_max and ρv is smaller.
3. **Time a clap, 1.00 m apart.** Clap, watch the front cross the bench (slowed about 400 times), and read Δt from the recorder: about 2.917 ms (140 samples). Record, change d, clap again. Plot Δt against d: the slope is 1/v.
4. **A cold day, −10 °C.** v drops to 325.2 m/s; over 1 m that is 8 samples more. Students can find v at two temperatures and check v ∝ √T.
5. **Unknown gas.** Students find v from the slope; the status line names the gas's v, γ and M when they switch away.

## Questions

**Q1.** Use v = √(γRT/M) with γ = 1.400 and M = 28.96 g/mol to find the speed of sound in dry air at 20 °C and at −10 °C. By what fraction does v change, and how does that compare with the fraction by which the absolute temperature changes?

**Q2.** A 500 Hz tone in air at 20 °C (ρ = 1.204 kg/m³) has a displacement amplitude of 1.0 μm. Find the wavelength, the pressure amplitude Δp_max = ρvω s_max, the intensity and the sound level in dB.

**Q3.** In the demo, the dots in the tube are bunched most where the displacement graph crosses zero, not where it is largest. Explain why, using Δp = −B ∂s/∂x.

**Q4.** With the clap 0.50 m from microphone A in air at 20 °C, a student records Δt = 1.4583, 2.9167, 4.3750, 5.8333 and 7.2917 ms at d = 0.50, 1.00, 1.50, 2.00 and 2.50 m. Fit Δt against d and find v. Compare with Q1. Why do the points lie exactly on a line, and why is the result a little off?

**Q5.** The recorder samples at 48 kHz. How far apart must the microphones be for one clap to give v to 1%? Why measure the time between two microphones instead of from the clap to one microphone?

**Q6.** The same 500 Hz tone in helium at 20 °C (v = 1007 m/s, ρ = 0.1664 kg/m³). Find λ, and the pressure amplitude for the same 1.0 μm displacement. Why is it smaller than in air?

## Common misconceptions

- **"The air travels with the sound."** Each bit of air only swings back and forth about its place; the pattern travels.
- **"Pressure is highest where the air moves most."** At the largest displacement the neighbouring air has moved the same way, so it is neither squeezed nor stretched: Δp = 0 there.
- **"Higher notes travel faster."** In the ideal gas v does not depend on f; a higher f gives a shorter λ.
- **"Louder sound travels faster."** v is the same for any small amplitude.

## Physics behind the demo

- Ideal gas at 101325 Pa: v = √(γRT/M), ρ = PM/(RT), B = ρv² = γP (adiabatic). Dry air γ = 1.400, M = 28.9647 g/mol (as in Resonators); helium and argon γ = 5/3 with the IUPAC standard atomic weights 4.002602 and 39.948. An unknown gas has γ = 1.3, 1.4 or 5/3 and M from 4 to 60 g/mol. Humidity and real gas corrections are left out.
- The wave: s = s_max cos(kx − ωt), Δp = −B ∂s/∂x = ρvω s_max sin(kx − ωt), I = Δp_max²/(2ρv), β = 10 log₁₀(I/10⁻¹² W/m²). Plane wave, no loss. The drawing slows the motion to one cycle in 2 s and exaggerates the displacement by the factor shown.
- Time of flight: clap and microphones on one line. A two channel recorder samples at 48 kHz (chosen) with its clock at a random phase at each clap; each channel triggers on the first sample at or after the sound arrives, so Δt is a whole number of samples (20.83 μs each). Averaged over the clock phase the reading is exactly d/v. The drawn pulse (2 kHz, dying away in 0.25 ms, size falling as 1/r) is chosen and does not affect the timing.
- Simulated data; the only scatter is the sampling clock's phase.
