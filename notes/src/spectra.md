---
title: Spectra Explorer
level: Intro astronomy; modern physics; PHYS 202 (light)
time: 15 to 30 minutes
---
## What students should come away with

- Each element emits and absorbs light only at its own set of wavelengths, fixed by its energy levels: a photon carries exactly the energy difference, hc/λ = E_upper − E_lower.
- A hot glowing gas gives bright lines; a cooler gas in front of a hot continuous source removes light at the same wavelengths and gives dark lines.
- Hydrogen's lines follow 1/λ = R_H(1/n_f² − 1/n_i²). The final level sets the series: Lyman (n = 1) in the ultraviolet, Balmer (n = 2) in the visible, Paschen (n = 3) in the infrared.
- An ion has a different set of lines from its neutral atom, because removing an electron changes the energy levels.
- Line patterns identify elements in a lab source or a star, but line strength is not a direct measure of how much of an element is present.

## Before class

Students should know E = hf = hc/λ and the visible range, roughly 380 to 750 nm; hc = 1240 eV·nm helps. All wavelengths are NIST air wavelengths. There are no preset buttons: the **Mode** buttons (**Explore**, **Compare**, **Mystery**), the display buttons above the strip and the periodic table drive everything. In **Explore** the left and right arrow keys step through the table.

## Running it in class

1. **Explore, hydrogen.** The strip shows the Balmer lines. Point out the bright four (656.3, 486.1, 434.0 and 410.2 nm) and the fainter violet ones crowding toward 380 nm. In **How hydrogen makes its lines** click the arrows from n = 3, 4, 5, 6 down to n = 2 and read **Photon energy** and **Wavelength**; the gold marks show where each lands on the NIST strip. Ask Q2 here.
2. **Lyman and Paschen.** Press **Lyman**, then **Paschen**, and click a few arrows. The Lyman lines are far off the strip; switch the range to **300 to 1000 nm** and only the Paschen line from n = 8 (954.6 nm) lands on it. Ask Q3.
3. **Sodium, emission then absorption.** Click Na. Ask Q1, then press **Absorption**. The dark lines sit exactly where the bright ones were.
4. **Neon: All, Neutral, Ionized.** Click Ne. Under **All** there are blue Ne II lines; **Neutral** shows only the red and orange lines a neon sign gives off. Ask Q4.
5. **Compare.** Put hydrogen on top and helium or mercury on the bottom. No two elements share a pattern.
6. **Mystery.** Start with **Gas mixture**. Students click elements to build a guess, then **Check**. Finish with **A star**, an absorption spectrum built from five elements, and ask Q5 and Q6.

## Questions

**Q1.** Predict: hot sodium vapor glows at 589.0 and 589.6 nm. White light now shines through cool sodium vapor. Will the transmitted light show dark lines, and if so at what wavelengths? Why there and not somewhere else?

**Q2.** Use E_n = −13.6 eV/n² and hc = 1240 eV·nm to find the photon energy and wavelength for the hydrogen transition from n = 4 to n = 2. Compare with the demo's readout and the NIST line on the strip. Why might your answer differ in the last digit?

**Q3.** Explain why every Lyman line is in the ultraviolet and every Paschen line is in the infrared, without computing each line. Find the longest Lyman wavelength and the shortest possible Paschen wavelength.

**Q4.** Neutral neon (Ne I) and singly ionized neon (Ne II) have almost no lines in common. Why does losing one electron change the whole pattern? If a spectrum of a gas cloud shows strong Ne II lines, what can you say about the cloud?

**Q5.** In **Mystery** with **Gas mixture**, describe a strategy that finds every element in the mix. Why is matching one line not enough to identify an element, and how do you know when you are done? Try your strategy on two new mysteries.

**Q6.** **A star** contains the Ca II lines at 393.4 and 396.8 nm. In the real Sun these are the two darkest lines in the visible spectrum, darker than any hydrogen Balmer line, yet the Sun contains far more hydrogen than calcium. Give a reason why the darkness of a line is not a direct measure of how much of an element is there. (The demo scales each element's lines separately, so it cannot show this comparison.)

## Common misconceptions

- **"Absorption lines come from different atoms than emission lines."** The same levels give both: a downward jump emits a photon of a given energy, the upward jump absorbs the same energy.
- **"The brighter a line in the table, the more of that element there is."** The listed intensities are NIST's relative estimates for one lab source. Compare lines within one element, not between elements, and never read them as abundances.
- **"Hydrogen has exactly four lines."** Four are bright in the visible; the Balmer series has infinitely many lines crowding toward its limit at 364.6 nm, and other series lie in the ultraviolet and infrared.

## Physics behind the demo

- Line data are the NIST Handbook strong line tables (air wavelengths, 300 to 1000 nm) for 99 elements, hydrogen to einsteinium, labeled I (neutral) or II (singly ionized). Line widths and colors are drawn, not measured; brightness on screen follows the log of NIST's relative intensity within that element.
- **Absorption** draws a continuous spectrum with a dark line at every listed line of the element. A real cool gas absorbs mainly from levels that are actually populated, usually the ground state and levels just above it, so a real absorption spectrum has fewer lines than the emission spectrum. Treat the absorption view as a picture of where lines can be, not a calculation of which ones appear.
- **Lines shown** counts every NIST entry: for hydrogen, Hα and Hβ are each listed as several closely spaced components, so the count is 11 although the strip shows seven distinct Balmer positions between 380 and 750 nm.
- The hydrogen panel computes 1/λ = R_H(1/n_f² − 1/n_i²) with R_H = 1.09678 × 10⁷ m⁻¹, then converts to air wavelengths with a standard formula for the refractive index of air. Its energy levels use 13.598 eV, the value for hydrogen's own reduced mass, matching the wavelengths. Spin and fine structure are ignored there.
- The tube and swatch color is computed from the listed lines (neutral atom lines under All) weighted by their NIST intensities with the CIE 1931 color matching functions; it is only as good as those rough relative intensities (potassium, for example, comes out greenish rather than the lilac of a flame). **Mystery**: a gas mixture is two or three elements drawn at random from 23 common ones; **A star** is always H, Na, Mg, Ca and Fe in absorption.

## Going further

- History: helium was found as an unexplained yellow line (587.6 nm) in the solar spectrum in 1868, before it was found on Earth; cesium and rubidium were discovered with the spectroscope by Bunsen and Kirchhoff in 1860 and 1861.
- Lab connection: calibrate a student spectroscope with the mercury lines (404.7, 435.8, 546.1 nm), then identify the gas in an unlabeled discharge tube with **Compare**.
