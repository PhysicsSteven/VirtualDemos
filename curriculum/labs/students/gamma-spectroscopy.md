# Gamma Spectroscopy: Calibrating a Detector
Student laboratory · Modern Physics

Textbook: OpenStax *University Physics*, Vol. 3, §§10.3 and 11.4. Access for free at https://openstax.org/details/books/university-physics-volume-3.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/gamma-spectroscopy.html?setup=cal)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Energy calibration; Unknown source (these two are the subject of this worksheet); Compton edge and backscatter; Activity against the standard; Absorption coefficient (the Absorbing Gamma Rays worksheet); Photoelectric absorption.

**Using the demo.**

- The bench is a teaching gamma spectrometer modelled on ORTEC's: a source in a lead castle, a 38 mm × 38 mm NaI(Tl) scintillation crystal on a photomultiplier, an amplifier and a 2048 channel multichannel analyzer (MCA). Each photon that deposits energy in the crystal makes a pulse whose height is proportional to that energy, and the MCA counts the pulses by height, one channel per small range of height.
- The spectra are simulated, not measured: a Monte Carlo calculation of how photons deposit energy in the crystal (photoelectric absorption, Compton scattering, pair production, backscatter from the castle), smeared by the detector's resolution and given random counting noise. Line energies and intensities are the ENSDF evaluated values.
- Acquire runs the MCA; Preset live stops it after that much live time. The clock speed buttons run it 1, 10 or 100 times faster than real time. Clear empties the spectrum.
- Drag across a peak to set a region of interest. The readouts give its net counts above a straight background, the centroid channel with its uncertainty, and the FWHM.
- The Energy calibration section can make the demo's own calibration from marked peaks; the Unknown source setup starts with a calibration made earlier with cesium 137 and cobalt 60.
- Record reading stores the region of interest's numbers with the source, distance and absorber, and its energy if the demo has a current calibration. Export to worksheet sends the readings to the Data table below; Clear (under Readings) starts a new series, which goes into a new copy of the table.

</details>

## Goal

Calibrate a scintillation detector with sources of known gamma ray energies, measure its energy resolution, and use the calibration to identify an unknown source from its lines.

## Background

A nucleus left in an excited state after a decay drops to its ground state by emitting a gamma ray photon with an energy set by the nuclear levels (§10.3). In a NaI(Tl) crystal the photon gives some or all of its energy to electrons, which make a flash of light in proportion to the energy deposited. A photomultiplier turns the flash into a pulse, and the MCA sorts the pulses by height into channels.

When the photon is absorbed completely, the pulse falls in the photopeak, whose centroid channel $$c$$ is very nearly a linear function of the photon energy:

$$E = a + b\,c .$$

Photons that Compton scatter and escape leave less energy, making a continuum below the photopeak that ends at the Compton edge, $$E_C = 2E^2/(m_ec^2 + 2E)$$.

The width of the photopeak, its full width at half maximum (FWHM), comes mostly from the statistics of the light collected. The energy resolution is FWHM divided by $$E$$; for NaI(Tl) it is about 7% at 662 keV and grows roughly as $$1/\sqrt{E}$$ at lower energies.

Gamma lines of the sources (ENSDF; keV): cobalt 57, 122.1 and 136.5; cadmium 109, 88.0; barium 133, 81.0, 276.4, 302.9, 356.0 and 383.8; sodium 22, 511.0 (from positron annihilation) and 1274.5; cesium 137, 661.7; manganese 54, 834.8; zinc 65, 1115.5; cobalt 60, 1173.2 and 1332.5.

## Before the lab

1. Two photopeaks of a source sit at channels 475 and 958 and are known to be 661.7 keV and 1332.5 keV. Find $$a$$ and $$b$$ for a straight line calibration.
2. With that calibration, what energy is a peak at channel 841?
3. Find the Compton edge for the 661.7 keV line of cesium 137.
4. Why does a sodium 22 source give a line at 511 keV, although no nuclear level of neon 22 has that energy?

## Safety

No hazards in the virtual lab. Real check sources are sealed and weak (about 1 µCi), but keep the time near them short and the distance large.

## Procedure

**Calibration.** Start from the Energy calibration setup (cesium 137 at 2 cm, 120 s of live time). Acquire, set a region of interest across the photopeak, and record a reading. Then, one source at a time, record every clear photopeak of cobalt 60, sodium 22, manganese 54 and cobalt 57 (122.1 keV), each acquired for 120 s at the same distance. Clear the spectrum before each new source.

**Unknown source.** Export your readings, Clear them, and pick the Unknown source setup. Acquire for 300 s of live time and record every clear photopeak.

## Data

| Reading | Source | Centroid (channel) | Centroid uncertainty (channel) | Known energy E (keV) | Net counts | FWHM (channel) | Energy from the demo's calibration (keV) |
|---|---|---|---|---|---|---|---|
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |

Type the known energy of each line yourself. The last column is filled only when the demo has a calibration of its own (the Unknown source setup has one).

## Analysis

1. Graph the known energy against the centroid channel for the calibration sources. Find the slope $$b$$ (keV per channel) and the intercept $$a$$. Are the residuals small enough for a straight line?
2. Convert each FWHM to keV with your slope, and find the resolution FWHM/E for each line. How does it change with energy? Test whether it goes as $$1/\sqrt{E}$$.
3. Use your calibration to find the energy of each photopeak of the unknown source. Which source is it?
4. Compare your energies for the unknown with the demo's own calibration in the last column.

## Uncertainty

Use the centroid uncertainties and the scatter of the calibration residuals to estimate the uncertainty of an energy read from your calibration. Is it small enough to tell 1115.5 keV (zinc 65) from 1173.2 keV (cobalt 60)? What about 1332.5 keV from 1274.5 keV?

## Questions

1. Why is the photopeak the useful part of the spectrum for identifying a source?
2. What makes the continuum below the photopeak, and where should it end for manganese 54?
3. Particle physics detectors (§11.4) also use scintillators. What does the detector measure about each particle, and what limits how well it can tell two energies apart?
4. Why does a larger crystal give a larger photopeak compared with the Compton continuum?

## What to hand in

Prelab answers, both table copies, the calibration graph with its fit, the resolution against energy, the energies and identity of the unknown, and answers to the questions. Identify simulated data.
