---
title: Spectral Classes
level: Astronomy (stars; Stars and Galaxies Unit 1, Day 6)
time: 20 to 40 minutes
---
## What students should come away with

- Color gives temperature: the peak of a star's light is at λ = b/T (Wien), and color does not depend on distance. Betelgeuse at 3,500 K peaks at 828 nm, in the infrared, and looks orange; a 20,000 K star peaks at 145 nm, in the ultraviolet, and looks blue white.
- The spectral classes, hottest to coolest, are O B A F G K M. The Sun is G2.
- Nearly every star is made of the same thing, mostly hydrogen and helium (Cecilia Payne, 1925). Spectra differ because temperature sets the state of each atom: how many electrons it has lost and which levels its electrons sit in.
- An atom absorbs only the lines that start from the state it is in. Rigel's calcium lines are weak because nearly all its calcium has lost two electrons, not because it has less calcium.
- Hydrogen's visible (Balmer) lines start from level 2. Too cool, and almost every electron sits in level 1; too hot, and the electron is gone. The most hydrogen on level 2 comes near 10,000 K, in the A stars.
- Only cool stars hold molecules together; titanium oxide bands mark the M stars.

## Before class

Four modes, chosen above the picture; every mode shows the star, its class and the class bar (drag along the bar to set the temperature). **Color**: the star's visible spectrum with its dark lines, and the graph of its blackbody light with the peak marked. **Spectral lines**: the same spectrum, and a graph of how many atoms can make each line (H Balmer, He I, He II, Ca II H and K, Ca I, Na I D, Fe I and TiO) against temperature, each against its own peak. **Payne**: bars for the share of each element's atoms that have lost 0, 1 or 2 electrons, with the stages that make visible lines outlined. **Hydrogen at A**: hydrogen atoms per billion on level 1, on level 2 and ionized, and the graph of the share on level 2 against temperature. Sliders: surface temperature (2,500 to 40,000 K) and electron pressure. Play sweeps the temperature from cool to hot. Setups: Betelgeuse, 3,500 K; The Sun, 5,772 K; An A star, 9,600 K; Rigel, 12,000 K; A B star, 20,000 K; An O star, 40,000 K; A giant: thinner gas.

## Running it in class

1. **Color, Betelgeuse.** Ask Q1, then **A B star, 20,000 K**.
2. **Spectral lines, The Sun**, then press Play and watch the lines change through the classes. Ask Q2.
3. **Payne, Rigel.** Ask Q3.
4. **Hydrogen at A, An A star.** Drag the temperature down to 5,772 K and up to 20,000 K. Ask Q4.
5. **Spectral lines, Betelgeuse**, then **An O star**. Ask Q5.
6. **A giant: thinner gas.** Ask Q6.

## Questions

**Q1.** Betelgeuse is about 3,500 K. Where does its light peak, and in what part of the spectrum? Why does it look orange? Where does a 20,000 K star's light peak?

**Q2.** Press Play from the Sun and watch the spectrum. Which lines are strongest in the Sun, which in A stars, which in B stars and which in O stars? Does the Sun have more calcium than hydrogen?

**Q3.** In Payne mode, compare calcium in the Sun and in Rigel (12,000 K). What share of the calcium is Ca II in each? Why are Rigel's calcium H and K lines weak?

**Q4.** In Hydrogen at A, how many hydrogen atoms in each billion are on level 2 in the Sun, at 9,600 K and at 20,000 K? At what temperature are the Balmer lines strongest? A cool M star and a hot O star both show weak hydrogen lines. Is it for the same reason?

**Q5.** What share of titanium is in titanium oxide at 3,500 K and in the Sun? Which lines appear only in the hottest stars, and why?

**Q6.** The giant has the same kind of temperature as a K star but an electron pressure 20 times lower. What happens to the calcium, sodium and iron? Where do the Balmer lines peak at this lower pressure?

## Common misconceptions

- **"Hot stars are made of different elements than cool stars."** Almost every star is about 73 % hydrogen and 25 % helium by mass. The lines differ because temperature changes the state of the atoms.
- **"Strong lines mean a lot of that element."** Calcium is about 460,000 times rarer than hydrogen (Asplund and others 2009), yet its H and K lines are the strongest in the Sun. What counts is how many atoms are in the state that absorbs.
- **"The hottest stars have the strongest hydrogen lines."** In O and B stars nearly all hydrogen is ionized. The lines peak at A.
- **"A red star's light peaks in the red."** Betelgeuse peaks in the infrared; we see only the red end of its visible light.
- **"Stars are their color: Betelgeuse is red, Vega is blue."** These are pale colors next to a rainbow; even the coolest stars look orange, and the hottest blue white.

## Physics behind the demo

- Color: Planck's blackbody spectrum, its color through the CIE 1931 color matching functions (demos/lib/bbcolor.js), and Wien's law with b = 2.897771955 × 10⁻³ m K (CODATA 2022). Real stars are not perfect blackbodies.
- Saha: N_II/N_I = (2kT U_II/(P_e U_I))(2πm_e kT/h²)^(3/2) e^(−χ/kT), with ionization energies from the NIST Atomic Spectra Database (H 13.598 eV, He 24.587 and 54.418 eV, Na 5.139 eV, Ca 6.113 and 11.872 eV, Fe 7.902 and 16.199 eV). Partition functions are held at the statistical weight of each stage's ground term, an approximation that matters most for iron.
- Boltzmann: N_b/N_a = (g_b/g_a) e^(−(E_b − E_a)/kT); hydrogen n = 2 lies 10.199 eV above n = 1 with g = 8 against 2. Lower levels: He I 2³P (20.964 eV), He II n = 3 (48.371 eV); Ca II H and K, Ca I 422.7 nm, Na I D and the Fe I lines start from their ground stages.
- Line strength follows the number of absorbers (Payne's approach): abundance (Asplund and others 2009) × the share in the right stage × the share on the lower level, drawn against each line's own peak. The spectrum is drawn on a scale that saturates; it is not a radiative transfer calculation, and real line depths also depend on the continuum opacity (mostly H⁻ in cool stars), which is why observed Ca II lines peak cooler (in K stars) than the 6,300 K peak of Ca II absorbers here.
- Electron pressure: 20 N/m² by default, the round value of Carroll and Ostlie §8.1, held fixed; real stars' P_e changes with temperature and surface gravity. At 20 N/m² the share of hydrogen on n = 2 peaks at 9,872 K (Carroll and Ostlie: about 9,900 K) and hydrogen is half ionized near 9,600 K. The giant's P_e of 1 N/m² is an illustration, not a model of one star.
- Titanium oxide: chemical equilibrium of H, He, C, O and Ti with H₂, CO, OH, H₂O, TiO and TiO₂ from NIST-JANAF data at a gas pressure of 1.17 × 10⁴ N/m², the model of Spectra Explorer.
- Classes by temperature: OpenStax Astronomy 2e, Table 17.2. Setup temperatures are the lesson's round values; the Sun's is the IAU nominal 5,772 K.

## Going further

- **Spectra Explorer** for the full spectrum of a star and the titanium oxide bands in detail; **Starlight** for brightness and magnitudes; **Inside the Sun** and **The Sun: Surface and Cycle** for our own G2 star.
- Cecilia Payne's 1925 thesis, *Stellar Atmospheres*, and the Harvard computers' work (Annie Jump Cannon, Williamina Fleming, Antonia Maury) on the classes.
