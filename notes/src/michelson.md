---
title: Michelson Interferometer
level: Physics II, wave optics (OpenStax Vol. 3 §3.5)
time: 15 to 30 minutes
---
## What students should come away with

- Two beams from one source interfere when they meet again; moving one mirror by d changes the path difference by 2d, so N fringes pass for 2d = Nλ. Counting fringes turns a micrometer into a ruler marked in half wavelengths.
- Gas in one arm adds 2L(n − 1) of optical path. Pumping out a 5.00 cm cell of air passes about 43 fringes of red light, and the count grows in proportion to the pressure: n − 1 of a gas is proportional to its density.
- The fringes are rings because light off the axis has path difference 2d cos θ; a tilted mirror makes nearly straight fringes near equal paths.
- White light makes fringes only within a micrometre or so of equal paths, which is how the position of equal paths is found.

## Before class

The demo shows a top view of the interferometer on an optical table (source focused to a point 30 mm before the beam splitter, compensator, M₁ on a micrometer stage, M₂ with tilt screws, an optional gas cell with pump, needle valve and gauge) and, beside it, the screen. The micrometer reads to 0.1 μm and a fringe counter (a photodiode at the screen's centre) counts each bright fringe that passes. Sources: red and green He–Ne lasers, the mercury green line, the sodium D lines, white light and a mystery laser. The room's air is dry, 20.0 °C and 101.325 kPa; air's index is from Ciddor (1996).

## Running it in class

1. **Measure λ, red He–Ne.** Ask Q1. Zero the counter and turn the micrometer up 31.6 μm: 100 fringes pass.
2. **Mystery laser.** Students measure the wavelength from the fringe count; New mystery laser picks another.
3. **Air in a gas cell.** Ask Q2. Pump out the cell (about 30 s), zero the counter, and let air in: the count reaches 43 at room pressure, one fringe every 2.36 kPa.
4. **Tilted mirror**, then **White light.** Ask Q3. Turn the micrometer until the red fringes are straight, then switch to white light and look for the coloured fringes; the white one is at 143.2 μm.
5. **Sodium doublet.** Ask Q4. Turn the micrometer up from 200 μm and watch the rings fade near 290 μm and come back.

## Questions

**Q1.** How far must the mirror move for 100 fringes of 632.8 nm light to pass the centre?

**Q2.** The textbook gives n = 1.000293 for air at 0 °C. How many fringes pass when a 5.00 cm cell of air at 20 °C and 1 atm is pumped out, with 632.8 nm light? What should a graph of count against pressure look like?

**Q3.** Why do white light fringes appear only near equal paths, and why is the centre one white?

**Q4.** Sodium's two lines are 588.995 nm and 589.592 nm. How far does the mirror move between fadings of the rings, and why do they not disappear completely?

**Q5.** As M₁ moves to make the arms more unequal, do rings come out of the centre or sink into it? Why are there more rings across the screen when the arms are very unequal?

## Common misconceptions

- **"Moving the mirror by λ moves one fringe."** The light goes there and back: one fringe for every λ/2 of mirror travel.
- **"The gas changes the wavelength of the laser."** It changes the wavelength inside the gas, λ/n, so the cell holds more wavelengths; the laser's own wavelength is unchanged.
- **"Equal paths can be found with the laser."** A laser's fringes look the same at any setting (only the ring size changes); white light finds equal paths.

## Physics behind the demo

- Each mirror makes an image of the source point, so the screen sees two coherent points 2d apart along the axis; the pattern is computed exactly from |P − S₁| − |P − S₂| for every point on the screen, with an ideal 50:50 splitter that gives both beams the same phase. Tilting M₂ reflects its image sideways.
- Air: Ciddor's 1996 formula for standard dry air (n − 1 = 2.7653 × 10⁻⁴ at 632.99 nm, 15 °C, 101.325 kPa), scaled with P/T; linear in pressure at constant temperature. Wavelengths from the NIST Atomic Spectra Database, given in standard air.
- White light: the CIE D65 spectrum through the CIE 1931 colour matching functions; each 5 nm band is averaged over its width so distant fringes wash out to white.
- The lasers are perfectly sharp; the cell's windows are left out (they add the same path full or empty).

## Going further

- LIGO's interferometers have 4 km arms and sense changes near 10⁻¹⁸ m by measuring power, not counting fringes.
- Pair with **Thin Film Interference** (§3.4): the same 2d path difference, without the separate arms.
