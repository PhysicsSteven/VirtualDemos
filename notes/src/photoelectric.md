---
title: Photoelectric Effect
level: Modern physics; intro astronomy; PHYS 202
time: 15 to 25 minutes
---
## What students should come away with

- Light delivers its energy in photons of E = hf = hc/λ. One photon frees at most one electron, so color (frequency) sets the electron energy and brightness only sets how many electrons there are.
- Below the threshold frequency f₀ = φ/h no electrons come out, however bright the light and however long you wait.
- The fastest electrons have K_max = hf − φ, and the stopping voltage measures it directly: eV₀ = K_max.
- A graph of K_max against f is a straight line for every metal, with slope h. The intercept gives the work function, which depends on the metal.

## Before class

Students should know E = hf, c = fλ, the electron volt and that an electron crossing a potential difference V gains or loses energy eV. hc = 1240 eV·nm makes every photon energy a one line calculation. The demo starts in **Blue on sodium**; the hint under the setup buttons changes with each one.

## Running it in class

1. **Blue on sodium.** Point out the readouts: each 420 nm photon carries 2.95 eV, sodium needs 2.28 eV, so K_max = 0.67 eV and the ammeter reads about 13.6 nA.
2. **Red light, no luck.** Ask Q1 before pressing it. Full power at 680 nm, and the tube shows "hf < φ : no electrons". Slide the **Light power** up and down: nothing. Now slide **Wavelength λ** slowly toward blue and let the class call out when the current appears (544 nm, the **Threshold λ₀** readout).
3. **Brighter, not faster.** Drag **Light power**. The current tracks the power, but the −V₀ point on the current against voltage chart does not move. This is the observation the wave picture could not explain (Q3).
4. **Stopping voltage.** The collector sits at −0.78 V, just under V₀ = 0.82 V, and only a trickle gets across. Lower **Collector voltage V** past −0.82 V: the current is zero. Then bring V slowly back to 0 and watch the current rise along a straight line (Q6).
5. **UV on zinc.** Zinc needs 4.33 eV, so the threshold is 286 nm, in the ultraviolet. Slide into the visible and the current stops.
6. **Measure h.** Six recorded points fall on a line; read **h from slope** and **φ from intercept**. Then press **Clear points**, pick another metal, and have students record their own V₀ values with **Record V₀** (Q7).

## Questions

**Q1.** Predict: red light of 680 nm falls on sodium and no electrons come out. If you made the light ten times brighter, or left it on for an hour, would electrons start to come out? Explain what the wave picture of light would predict, and what the photon picture predicts.

**Q2.** Ultraviolet light of 300 nm falls on calcium (φ = 2.87 eV). Find the photon energy, the maximum kinetic energy of the electrons and the stopping voltage. What is the longest wavelength that can free electrons from calcium? Check with the demo.

**Q3.** In **Brighter, not faster**, tripling the light power triples the current but leaves the stopping voltage unchanged. Explain both facts photon by photon.

**Q4.** Predict, then check: on sodium with the light power fixed at 40 µW and V = 0, the wavelength is changed from 500 nm to 250 nm. Each photon now has twice the energy. Does the current go up, go down or stay the same, and by what factor?

**Q5.** In **Blue on sodium** the lamp delivers 40 µW of 420 nm light to the metal. How many photons arrive per second? If one photon in a thousand frees an electron that reaches the collector, what current flows? Compare with the **Photons per second** and **Current I** readouts.

**Q6.** In **Stopping voltage**, the current does not stay at full value until V reaches −V₀ and then drop to zero. It falls steadily as V goes from 0 to −0.82 V. What does that tell you about the kinetic energies of the electrons leaving the metal?

**Q7.** After **Measure h**, clear the points, choose zinc and record V₀ at four wavelengths between 150 and 280 nm. Which of the two fit results changes from the sodium result and which stays the same? Explain why.

## Common misconceptions

- **"Brighter light knocks electrons out faster."** Brightness is the number of photons per second. Each photon still carries hf, so K_max and V₀ do not change.
- **"Any light will free electrons if you wait long enough."** An electron cannot save up energy from several photons. Below f₀ the current is zero at any power and for any time; above f₀ emission starts at once, even in dim light.
- **"Every electron comes out with K_max."** K_max is the most any electron can have. Most lose some energy on the way out of the metal, which is why the current falls gradually toward V₀.
- **"Higher frequency light at the same power gives a bigger current."** At fixed power, more energy per photon means fewer photons, so the current drops.

## Physics behind the demo

- Photon energy E = hc/λ with hc = 1239.84 eV·nm; frequency f = c/λ. K_max = hf − φ and V₀ = K_max/e. The work functions are fixed textbook values (cesium 2.14 eV to platinum 5.65 eV); real values depend on the surface.
- Photon rate N = P/hf from the **Light power** P. The current with V ≥ 0 is the saturation current I = ηeN with quantum efficiency η = 0.001, and it is reached at once at V = 0. Real tubes rise gradually to saturation, and contact potentials between the two metals shift the measured V₀; the demo leaves both out.
- Electrons leave with kinetic energies spread evenly between 0 and K_max and all head straight across the gap. With V < 0 the fraction that reaches the collector is 1 − e|V|/K_max, so the current falls linearly to zero at −V₀. Real curves have a rounded tail.
- **Record V₀** adds a small random reading error (a few hundredths of a volt) before fitting a least squares line of K_max against f. The slope gives h, the intercept −φ.
- On screen every photon above threshold makes an electron, slowed enormously: at K_max = 0.67 eV a real electron moves at about 490 km/s.

## Going further

- History: Einstein proposed light quanta to explain the effect in 1905. Millikan's careful measurements of V₀ against frequency, published in 1916, confirmed the straight line and gave a value of h.
- Lab connection: a real h/e apparatus uses mercury lamp lines and filters in place of the wavelength slider.
