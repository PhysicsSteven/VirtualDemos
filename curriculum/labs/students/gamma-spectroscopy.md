# Gamma Spectroscopy: Student Lab Starter

**Simulation:** [Open](../../demos/gamma-spectroscopy.html) (from curriculum/labs/students use repository link instead: https://physicssteven.github.io/VirtualDemos/demos/gamma-spectroscopy.html)

**Research question:** Calibrate detector channel against photon energy and identify unknown lines.

## Model
E=a·channel+b

## Procedure (50–75 minutes)
1. State a prediction and identify independent, dependent and controlled variables.
2. Choose the mode matching the equation; record every fixed parameter.
3. Collect five or more independent measurements, recording values, units and measurement method.
4. Where the model is stochastic, repeat each setting and report variability.
5. Plot the measurements with labeled axes. Fit two or more known peaks and use residuals to estimate calibration accuracy.
6. Compute the inferred physical parameter, check dimensions and compare with theory.
7. Describe systematic limitations and explain any discrepancies.

## Raw data
| Trial | Controlled setting (units) | Measured response (units) | Uncertainty / notes |
|---|---|---|---|
| 1 | | | |
| 2 | | | |
| 3 | | | |
| 4 | | | |
| 5 | | | |

## Analysis questions
1. Derive or justify the model equation.
2. What does the graph slope represent?
3. What limiting case can you test?
4. How would measurement uncertainty propagate to your result?
5. What assumptions would fail in a real experiment?

**Caution:** Distinguish photopeaks from Compton edges and background; report counting uncertainty.

**Submit:** Data table, graph, calculations, units and a short conclusion.

## How the simulated detector differs from a real one

The simulated crystal is bare. It has no aluminum can or reflector, no photomultiplier behind it and no source holder, and electrons in it never escape or radiate. In a real detector these parts scatter photons into the Compton continuum or carry energy out of the crystal, so fewer events land in the photopeak.

As a result the simulated peak to total ratio (full energy events divided by all events) is higher than on a real detector. For a 3" × 3" NaI(Tl) crystal with the source 10 cm away, Heath's measured catalogue values (R. L. Heath, *Scintillation Spectrometry: Gamma-Ray Spectrum Catalogue*, IDO-16880, 1964, Appendix III, Table I) are 2 to 17% lower, and the gap grows with energy:

| Energy (keV) | Measured (Heath) | Simulated |
|---:|---:|---:|
| 323 | 0.820 | 0.834 |
| 662 | 0.536 | 0.568 |
| 1114 | 0.395 | 0.428 |
| 1837 | 0.280 | 0.328 |

No comparison has been made for a 2" × 2" crystal. Use the simulation for peak energies, resolution and the shape of a spectrum, not to find a real source's activity from its absolute efficiency. Close to the crystal the count rate does not follow a simple inverse square law, because the crystal's size and the depth of each interaction matter. The full comparison is in the [benchmark report](../../validation/GAMMA_PUBLISHED_COMPARISON.md).
