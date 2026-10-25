---
title: Charged Particles in Matter
level: Medical Physics, charged particles in matter and proton therapy (upper level, calculus)
time: 15 to 50 minutes
---
## What students should come away with

- A charged particle loses energy mostly to electrons, at a rate set by its charge and speed and by the material's electrons per gram (Z/A) and mean excitation energy I: the Bethe formula. Below a few hundred MeV the 1/β² factor dominates, so the slower the particle, the faster it loses energy.
- The CSDA range is the integral R = ∫ dE/S. For protons in water over the therapy range it follows R = αE^p with p near 1.75.
- The Bragg peak comes from S rising as the protons slow. Range straggling (about 1.1 % of the range), the beam's energy spread and nuclear reactions give the real peak its finite height and width; the distal 80 % point sits at the CSDA range.
- A slab moves the peak by its water equivalent thickness less its own thickness; the water equivalent thickness is its thickness times its stopping power relative to water.

## Before class

Three views. **Beam in water**: a side view of a water tank with an optional slab in front (bone, lung, adipose, muscle, PMMA, graphite, aluminum, copper or lead), particle tracks fired one at a time and drawn colored by energy, and under it the depth dose curve, the model's broad beam curve with the dose the drawn tracks have put down. A detector chamber reads the dose (% of the peak), mean energy, stopping power and fluence at its depth. **Stopping power** and **Range**: mass stopping power and CSDA range against energy on log scales for any particle and material, with the NIST PSTAR ranges of protons in water and a power law fitted to them; electrons can be added to the stopping power graph (collision stopping only). Particles: protons, alpha particles and carbon 12 ions, 1 to 250 MeV per nucleon (430 for carbon). Range straggling and nuclear reactions can be turned off, and the tracks stretched sideways ×5 to see the scattering. Blind hides the model's ranges, peak and widths.

## Running it in class

1. **Proton 150 MeV.** Ask Q1. Fire a few dozen tracks, then a few hundred: the orange bars build the same Bragg curve as the model line (R80 at 15.76 cm, the PSTAR range 15.77 cm).
2. **No straggling.** Ask Q2. The peak grows to about 30 times the entrance dose and sits at the end of range, 15.74 cm.
3. **Proton 70 MeV** and **Proton 230 MeV.** The peak to entrance ratio falls from 5.9 to 3.7 and the distal edge widens.
4. **Bone in the way.** Ask Q3. The peak moves 1.45 cm toward the surface.
5. **Carbon 290 MeV/u.** Ask Q4.
6. **Stopping power curves**, then **Range against PSTAR.** Ask Q5. Add bone and lead to compare.

## Questions

**Q1.** Why does the dose rise slowly at first and then peak sharply just before the protons stop?

**Q2.** With straggling and nuclear reactions off, why does the peak become so tall and narrow? What sets the height of a real peak?

**Q3.** Two centimeters of compact bone stop protons 1.72 times as fast as water. How far does the peak move, and which way?

**Q4.** Carbon ions of 290 MeV per nucleon reach about the same depth as 150 MeV protons. Why is their peak so much sharper?

**Q5.** Per gram, lead stops protons only half as well as water. Why, when lead is so much denser?

## Common misconceptions

- **"The dose is largest where the beam enters, as for X rays."** A proton beam's dose rises with depth, because each proton loses energy faster as it slows; most of it is put down near the end of range.
- **"All protons of one energy stop at exactly the same depth."** Energy loss is random; protons of one energy stop over a spread of about 1 % of the range.
- **"Denser always means better at stopping."** Per gram, materials with fewer electrons per nucleon and more tightly bound electrons (high Z) stop protons less well; per centimeter, density usually wins.

## Physics behind the demo

- Electronic stopping: the Bethe formula with the full maximum energy transfer, S/ρ = K z²(Z/A)(1/β²)[½ ln(2mₑc²β²γ²W_max/I²) − β²], K = 0.307075 MeV cm²/mol, with no shell, Barkas, Bloch or density corrections, and the NIST PSTAR material data (density, I, composition; Z/A from the composition by weight). For protons in water (I = 75.0 eV) the CSDA ranges are within 0.2 mm of PSTAR from 10 to 250 MeV (curriculum/validation/test_vdstop.cjs). It is used down to 1 MeV per nucleon; a proton's last 1 MeV in water takes less than 0.04 mm. The core is shared with the other Medical Physics demos in demos/lib/vdstop.js.
- Range straggling: Bohr's energy straggling with the relativistic factor (1 − β²/2)/(1 − β²), integrated as σ_R² = ∫ (dσ_E²/dx)/S³ dE; it comes out about 7 % larger than Bortfeld's fit σ = 0.012 R^0.935 cm.
- Broad beam curve: the end points spread as a Gaussian of the straggling and the beam's energy spread; the dose is ∫ p(w + r) S(r) dr over the residual range r. Nuclear reactions (protons only): the primaries fall by 0.012 per cm of water and 60 % of the energy they carried is put down locally (Bortfeld 1997, Med. Phys. 24, 2024). Ions: nuclear reactions and fragments are left out, so the carbon fragment tail is missing.
- Slabs: turned into water equivalent depth with their stopping power ratio to water at the energy there; the dose in the slab is scaled to that material.
- Tracks: Monte Carlo steps of up to 0.5 mm with Gaussian energy loss straggling, Highland multiple scattering (good to about 11 %, PDG), and nuclear removal; a dot marks a proton lost to a nuclear reaction, whose local share of energy goes into the bin where it was lost (hence the spikes in the orange bars with few tracks).
- Electrons (Stopping power view): collision stopping from the ICRU 37 formula, with Sternheimer's density effect for water only; radiative losses are left out.

## Going further

- Pair with **Rutherford Scattering** for the single Coulomb collision that multiple scattering adds up, and with **Proton Therapy QA** for what a clinic measures from these curves every day.
- Compare graphite, beryllium and aluminum at 230 MeV: why therapy degraders are made of low Z material.
