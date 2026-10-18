---
title: Doppler Effect and Shock Waves
level: Intro physics (waves and sound); intro astronomy (redshift)
time: 15 to 30 minutes
---
## What students should come away with

- A moving source crowds its wavefronts ahead and spreads them behind. The received frequency depends on the velocity component along the line of sight, not on the distance: f′ = f/(1 − (v_s/v) cos θ) for an observer at rest.
- For sound the medium picks out a frame, so a moving source and a moving observer at the same speed give different shifts. For light only the relative motion matters.
- At Mach 1 the source keeps up with its own sound and the crests pile into a wall. Faster than sound they form a Mach cone, sin θ_c = v/v_s, and the boom is the cone sweeping past, all through the supersonic flight.
- Light from a receding source is redshifted, z = λ′/λ − 1 ≈ v_r/c at low speed. Relativity adds time dilation: a source moving across the line of sight is redshifted by f′ = f/γ.

## Before class

Students should know v = fλ and what a wavefront is. Each ring is one crest, centered where the source was when it emitted it; the dashed line is the path of the sound reaching the observer now, and the plot below tracks f′ over time. Drag the source or the observer, and the grip at the tip of an arrow to set a velocity. **Sound off** toggles audio, which always plays the true pitch, even in slow motion. Switch between **Sound** and **Light** at the top.

## Running it in class

1. **Ambulance passing.** A 700 Hz siren at 30 m/s passes an observer 60 m from its path. Ask Q1, then turn the audio on and play. **Received frequency f′** starts near 760 Hz, falls slowly at first and fastest at closest approach, and settles near 647 Hz.
2. **Source at rest, observer moving.** Evenly spaced circles; the observer, at 86 m/s, meets crests more often going in and less often coming out. Ask Q3, then give the motion to the source instead and compare.
3. **Mach 1: the sound barrier.** The forward crests never get ahead of the source. The observer ahead reads "no sound has arrived yet" until the wall arrives (Q5).
4. **Supersonic jet: Mach cone.** At Mach 2 the crests touch two lines at 30° to the path. Outside the cone, silence; once it passes, two sounds arrive at once, one heard backward (Q4).
5. **Redshift and blueshift.** **Light** mode, a 550 nm source at 0.2 c: blue ahead, red behind. Pick **H-alpha 656.3** and read **z = λ′/λ − 1** and the Hubble line (Q6).
6. **Transverse Doppler.** At 0.6 c, γ = 1.25. Pause when **Angle θ at emission** reads 90°: λ′ = 625 nm, where the classical formula predicts no shift (Q7).

## Questions

**Q1.** Predict: an ambulance siren approaches at constant speed, passes you and drives away. Sketch the pitch you hear against time. Does it rise as the ambulance gets closer, stay constant, or something else? When does it change fastest?

**Q2.** A 700 Hz siren moves at 30 m/s; sound travels at 343 m/s. Find the frequency heard by an observer at rest directly ahead and directly behind. Then find what a listener moving at 30 m/s hears from a siren at rest, approaching and receding. Compare the two pairs.

**Q3.** Explain why, for sound, it matters whether the source or the observer moves, at the same relative speed. Check with **Source at rest, observer moving**: note f′ early on. Then set the observer's **Speed v_o/v** to 0, give the source **Mach number v_s/v** 0.25 with **Direction** 180° (toward the observer), press **Restart** and compare. Why does this difference disappear for light?

**Q4.** A jet flies level at Mach 2 at an altitude of 10.0 km; take the speed of sound as 343 m/s everywhere. What is the cone's half angle? How far past you is the jet, and how long after it was overhead, when you hear the boom?

**Q5.** At exactly Mach 1, f′ = f/(1 − v_s/v) is infinite straight ahead. What is physically happening, and why does the observer ahead hear nothing at all until the wall arrives? Use the drawing in **Mach 1: the sound barrier**.

**Q6.** A galaxy's H-alpha line (656.3 nm at rest) is observed at 662.9 nm. Find z, the recession speed and, with H₀ = 70 km/s/Mpc, the distance. Why does the demo refuse a Hubble distance at z = 0.2? A star receding at 30 km/s shifts the same line by how much?

**Q7.** In **Transverse Doppler** the source moves at 0.6 c and emits 500 nm light. What wavelength arrives from where the source was moving straight across the line of sight (θ = 90°)? What does classical physics predict there? What arrives from a source coming straight at the observer, and going straight away?

## Common misconceptions

- **"The pitch rises as the source gets closer."** Head on, the pitch is constant and high; the loudness is what grows. The pitch drops as the source passes, fastest at closest approach.
- **"The shift depends on the distance."** Only the velocity along the line of sight matters; distance sets the delay and loudness.
- **"The boom happens once, when the plane breaks the sound barrier."** The cone travels with the plane for the whole supersonic flight; everyone along the track hears it pass.
- **"A redshifted star looks red."** The spectrum shifts by a tiny fraction (30 km/s moves H-alpha 0.066 nm); astronomers measure line positions.
- **"Galaxy redshifts are ordinary Doppler shifts."** Only nearby: at large z the redshift comes from the expansion of space.

## Physics behind the demo

- Sound: a point source in still air at v = 343 m/s. The program solves exactly for each emission time whose crest is arriving now, v(t − t_e) = |r_o − r_s(t_e)|, and applies f′ = f (v − v_o·n̂)/(v − v_s·n̂), with n̂ from the emission point to the observer.
- Faster than sound, two emission times reach each point inside the cone (the earlier one heard backward, with negative f′) and none reach points outside. sin θ_c = v/v_s.
- Light: special relativity in the observer's frame, f′ = f/(γ(1 − β cos θ)). Head on this is √((1 + β)/(1 − β)); at θ = 90° it is 1/γ. The Observer controls are hidden in light mode: the observer is at rest. Colors are approximate; outside 380 to 750 nm light is drawn gray.
- The Hubble line uses d = cz/H₀ (H₀ = 70 km/s/Mpc), only for 0 < z ≤ 0.1. Only some crests are drawn; real 700 Hz crests are 0.49 m apart. Loudness falls as 1/r in the audio only. A real aircraft gives two booms (nose and tail shocks).

## Going further

- Radial velocity planet searches detect stellar shifts of about 1 m/s, a few parts in 10⁹. Doppler proposed the effect in 1842; Buys Ballot tested it in 1845 with musicians on a moving train.
