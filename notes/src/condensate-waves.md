---
title: Condensates: Interference and Vortices
level: Intro modern physics, after Bose–Einstein Condensation
time: 15 to 25 minutes
---
## What students should come away with

- A Bose–Einstein condensate is one wavefunction shared by all its atoms, so two condensates interfere like two coherent light beams. The stripes are a few micrometers apart because rubidium atoms that have fallen for a few hundredths of a second have de Broglie wavelengths that long.
- A condensate cannot rotate like a bucket of water. Its velocity is set by the slope of the phase, v = (ħ/m)∇φ, so the flow has no curl wherever there are atoms. It turns by threading in vortices: holes around which the phase winds once, each carrying circulation h/m. Stirred fast enough, it fills with a lattice of them, one per area πħ/(mΩ).
- In a harmonic trap some motions do not care about the interactions at all: the center of mass sloshes at the trap frequency ω (Kohn's theorem), and in a flat trap the cloud breathes at exactly 2ω.

## Before class

Students should have seen Bose–Einstein Condensation, the de Broglie wavelength, and two slit interference. The demo solves the Gross–Pitaevskii equation, the Schrödinger equation for one wavefunction ψ shared by N atoms plus a term g|ψ|² for their repulsion, for rubidium 87 in a flat trap (20 Hz in the plane, 1 kHz across it). **3D** draws the square root of the density as a surface; **Flat** is the view from above, like an absorption image. **Color** shows the density or the phase of ψ (a hue wheel: a vortex is a point where every color meets). Rings mark the vortices, orange for counterclockwise and teal for clockwise. **Graph against time** follows the quantity that matters in each setup. The readouts give the fringe spacing, the periods and the vortex count as measured from the wavefunction.

## Running it in class

1. **Two condensates interfere.** Ask Q1 first. Press Play: the trap and the barrier switch off and the two clouds fly apart and overlap in stripes. Pause near 24 ms and compare the measured spacing with ht/(md) in the readouts. Then turn off **Atoms repel each other** and run it again (Q2).
2. **Two condensates collide in the trap.** The halves slide into the middle and run through each other. The stripes are finest where they meet fastest. The dark grooves left behind break up into vortex pairs.
3. **One vortex goes around.** Switch the color to Phase: every color meets at the hole. Ask Q3. Press Play and watch the vortex circle the center; the graph shows its angle, and the readout the time for one lap.
4. **A vortex and an antivortex.** The pair travels in a straight line, each carried by the other's flow. Ask students to predict which way it goes from the two directions of rotation.
5. **Stir it: a vortex lattice forms.** Ask Q4. Press Play (4× helps). The cloud stretches, its edge ripples, vortices enter from outside and settle into a triangular lattice, all turning the same way. The angular momentum per atom on the graph steps up as each one enters.
6. **Tighten the trap** and **Shift the trap.** Ask Q5 before Play. Turn on Blind in the Lab to hide the measured periods while students predict.

## Questions

**Q1.** In the Two condensates interfere setup the clouds start d = 14.8 µm apart. Two waves from sources d apart, observed after a time of flight t, make stripes ht/(md) apart. Find the spacing for rubidium 87 (86.909 u) after 23.9 ms, and compare with what the demo measures.

**Q2.** With the repulsion turned off, the demo measures stripes much closer to ht/(md) (d is 13.2 µm then). Why does the repulsion between the atoms make the stripes wider?

**Q3.** The fluid circles a vortex at speed v = ħ/(mr). Find the speed 1.0 µm from the core of a rubidium vortex, and the circulation ∮v·dl around any loop that encloses the core. Why does the speed not depend on how fast anything was stirred?

**Q4.** Feynman's rule says a stirred superfluid holds one vortex per area πħ/(mΩ), so that on average it turns like a solid body. Find that area for rubidium stirred at Ω = 0.75 × (2π × 20 Hz). The stirred cloud is about 26 µm across. How many vortices does the rule predict, and how many does the demo show?

**Q5.** The trap frequency is 20 Hz. Predict the sloshing period of a displaced cloud and the breathing period after the trap is tightened. Then measure both. Why does the sloshing period not depend on the number of atoms or on their repulsion?

## Common misconceptions

- **"The stripes come from atoms bumping into each other."** The stripes are interference of two waves, and they are there with the repulsion turned off too. Each atom is in both clouds at once; a single atom detected lands on a bright stripe.
- **"A stirred condensate rotates like a solid body."** It cannot: wherever there are atoms the flow has no curl. Between the vortices the fluid is irrotational; the rotation lives entirely in the cores.
- **"A vortex can carry any amount of circulation."** The phase must come back to itself around any loop, so the circulation is a whole number times h/m. Here every vortex carries one quantum.
- **"Atoms that repel each other must change every frequency."** The center of mass moves as if there were no interactions in a harmonic trap, because the internal forces cancel in pairs (Newton's third law). The breathing frequency of a flat cloud is also fixed, by a symmetry of the two dimensional equation.

## Physics behind the demo

- The two dimensional Gross–Pitaevskii equation, iħ ∂ψ/∂t = [−(ħ²/2m)∇² + V + g₂|ψ|² − ΩL_z]ψ with ∫|ψ|² = N and g₂ = √(8π)ħ²a/(m a_z), a_z = √(ħ/mω_z) = 0.341 µm, a = 98.98 a₀ (van Kempen et al. 2002). Valid while μ < ħω_z, which holds in every setup.
- Split step Fourier on a 128 × 128 grid (256 × 256 for free flight), second order in the time step; the rotation term splits exactly between the x and y transforms. Energy is conserved to about one part in 10⁷ and the atom number exactly. Ground states come from imaginary time; vortex states hold the phase winding while they settle.
- Stir: an elliptical trap (ellipticity ε = 0.1) turning at 0.75ω, solved in the turning frame with damping γ = 0.1, (i − γ)ħ ∂ψ/∂t = Hψ, a standard stand in for the thermal cloud (Tsubota, Kasamatsu and Ueda 2002). Without damping the vortices still enter but never settle.
- Breathing at exactly 2ω for any coupling in two dimensions: Pitaevskii and Rosch, Phys. Rev. A 55, R853 (1997). Sloshing at ω: Kohn's theorem.
- Experiments: interference of two condensates, Andrews et al., Science 275, 637 (1997); vortex lattices, Madison et al. (2000) and Abo-Shaeer et al., Science 292, 476 (2001).
- Left out: temperature (no thermal cloud except through γ), the third dimension, and the gravity and imaging optics of a real time of flight.
