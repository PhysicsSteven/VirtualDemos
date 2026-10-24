---
title: Double Slit, One Particle at a Time
level: Modern physics; also optics (interference and diffraction)
time: 15 to 25 minutes
---
## What students should come away with

- Each photon, electron or molecule is detected at one point, like a particle. The interference pattern appears only in the pile of many detections, and it appears even when the particles go through one at a time.
- The pattern is the one a wave of wavelength λ = h/p would make: bright fringes at d sin θ = mλ, spaced Δy ≈ λL/d, inside a single slit envelope whose first zero is at sin θ = λ/a.
- Amplitudes from the two slits add, not probabilities. Opening a second slit can lower the count at a point.
- Any record of which slit each particle went through removes the interference, even if the detector does nothing else to the particle. A detector that fires for a fraction η leaves fringes of contrast 1 − η.
- The same formula works for light, electrons and C₆₀ molecules of 720 u. Only λ, set by the momentum, changes.

## Before class

Students should know two slit interference for light (d sin θ = mλ, spacing λL/d) and λ = h/p; single slit diffraction helps for the envelope. The demo opens in **Electrons (Jönsson 1961 style)**, streaming; press **Pause** and **Clear** before class so the first hits happen in front of the students.

## Running it in class

1. **Electrons (Jönsson 1961 style).** Ask Q1 first. Press **Fire 1** a few times: each electron makes one dot, and nothing about where one lands tells you where the next will. Then stream, raise **Stream rate**, and watch the histogram fill. After a few dozen hits the screen looks random; after a few thousand it matches the **Predicted curve**.
2. **One slit.** Slit 2 is closed. The fringes are gone and the single slit pattern remains. Point to a position that was dark with both slits open: it now gets hits (Q3). Click slit 2 on the drawing to open it again.
3. **Which slit detector on.** Every electron is now recorded at slit 1 or slit 2, and the hits are colored by slit. The fringes vanish. Lower **Detector efficiency η** to 50% and let the screen fill again (Q4).
4. **Light, red laser.** The same experiment with single photons, as in G. I. Taylor's faint light experiment. Read the **Predicted pattern** readouts: fringes 2.6 mm apart and nine bright fringes inside the central envelope (Q6).
   To measure rather than read, tick **Cursors on the screen** under **Measure**: the predictions hide, and students put cursors A and B on bright fringes −3 and +3 and divide B − A by 6. The falling envelope pulls each fringe peak about 1.7% toward the center here (d/a = 5), so a careful measurement comes out slightly below λL/d. This is the double slit worksheet.
5. **Buckyballs (Arndt 1999 style, grating).** A molecule of 60 carbon atoms at 220 m/s has λ = 2.5 pm. With d = 2a the second order falls on an envelope zero and is missing (Q5).
6. **Change the momentum.** Back with electrons, lower **Accelerating voltage** from 50 kV to 12.5 kV and predict the new fringe spacing before reading it (Q7).

## Questions

**Q1.** Predict: electrons are fired at the two slits so slowly that only one is in the apparatus at a time. What will the screen look like after 10 electrons? After 10,000? Can an electron that goes through alone interfere with anything?

**Q2.** In the electron preset the electrons are accelerated through 50 kV, the slits are 1.0 µm apart (center to center) and the screen is 0.35 m away. Find the de Broglie wavelength, first ignoring relativity (λ = h/√(2meV)), and then with the relativistic momentum p = √(2meV(1 + eV/2mc²)). Find the fringe spacing. Check both with the readouts.

**Q3.** In **One slit**, some points that were dark with both slits open now receive electrons. Explain how opening a second path for the electrons can reduce the number arriving at a point. Near the center of the screen, how does the count per second with both slits open compare with the count with one slit open?

**Q4.** With the which slit detector on at η = 100%, the fringes disappear. What is the pattern now, in terms of the one slit patterns? With η = 50%, what fringe contrast (I_max − I_min)/(I_max + I_min) do you expect near the center, and what ratio I_max/I_min? Check by letting a few thousand hits build up.

**Q5.** C₆₀ has a mass of 720 u. Find its de Broglie wavelength at 220 m/s and compare it with the size of the molecule, about 1 nm. In the buckyball preset the slits are 50 nm wide and 100 nm apart. Which bright fringes are missing, and why?

**Q6.** In **Light, red laser**, λ = 650 nm, a = 0.05 mm, d = 0.25 mm and L = 1.0 m. Find the fringe spacing and the distance from the center to the first zero of the envelope. How many bright fringes lie inside the central envelope, and why is the fifth order missing?

**Q7.** Predict, then check: if the accelerating voltage is cut from 50 kV to 12.5 kV, by what factor should the fringe spacing change? The demo's readout does not give exactly the simple answer. Why not?

## Common misconceptions

- **"Each electron splits in two and half goes through each slit."** Every electron is detected whole, at one point. What goes through both slits is the probability amplitude, which decides where electrons are likely to land.
- **"The pattern comes from electrons interfering with each other."** It builds up just the same with one electron at a time. Each interferes only with itself.
- **"The detector destroys the fringes by knocking the electron."** In the demo the detector does nothing but record which slit; that record alone removes the interference.

## Physics behind the demo

- Photons have p = h/λ. Electrons use the relativistic momentum p = √(2m eV(1 + eV/2mc²)); at 50 kV the nonrelativistic formula gives a λ about 2.4% too long. C₆₀ uses λ = h/mv with m = 720 u, and every molecule has the same speed (the real beam had a wide spread that blurred the side peaks).
- The screen pattern is the paraxial Fresnel calculation for a monochromatic plane wave on two slits. In the far field it matches I(θ) = I₀ cos²(πd sin θ/λ) [sin β/β]², β = πa sin θ/λ. The **Far field check** (d + a)²/λL tells how close the setup is to that limit; the electron preset is near it (about 0.8), so the screen pattern departs a little from the formulas.
- Each hit is drawn at random from the computed pattern; positions along the slit length are spread out only for display.
- The which slit detector is idealized: with probability η it records the slit and does nothing else, giving η(I₁ + I₂) + (1 − η)I₁₂.
- The buckyball preset uses two slits at the 100 nm period of the real grating; many slits would only sharpen the same peaks. Slits are drawn enlarged and L is not to scale.

## Going further

- History: Claus Jönsson made electron double slit patterns in 1961, and Arndt, Zeilinger and colleagues reported C₆₀ interference in 1999. G. I. Taylor (1909) recorded fringes in light so faint that far less than one photon was in the apparatus at a time.
