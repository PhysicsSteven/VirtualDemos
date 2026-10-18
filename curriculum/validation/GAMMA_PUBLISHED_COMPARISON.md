# Gamma spectroscopy: transport benchmark and published comparison

2026-10-18. Report only; no demo changes. Source: main `bc0485a5fc20a130175dd370b45ff741d4f9acb2` (unchanged gamma demo on feature branch). Exact HTML SHA-256 and Node version are in `GAMMA_BENCHMARK_RESULTS.json`.

## Executed benchmark

`node curriculum/validation/benchmark_gamma.cjs > curriculum/validation/GAMMA_BENCHMARK_RESULTS.json`

Executed 31 seeded runs × 200,000 photons entering the front face = 6.2 million histories. Includes 2-inch and 3-inch diameter/length crystals, four energies at two distances, eight matched literature energies, and seven distances. Extracts the actual demo transport; does not substitute another transport engine. No parameters were fitted.

The observable is full-energy deposited histories divided by interacting histories. This is intrinsic P/T for a bare crystal, before resolution broadening, energy thresholds, entrance window, background, pileup or electronics. It is not the fraction in an arbitrarily selected UI region of interest. Absolute efficiencies multiply intrinsic probabilities by the on-axis circular-face solid angle fraction.

## Published P/T comparison

R. L. Heath, *Scintillation Spectrometry: Gamma-Ray Spectrum Catalogue*, IDO-16880, second edition (1964), electronic revision (1997), Appendix III, Table I, PDF page53: [INL archive](https://inl.gov/content/uploads/2023/07/naicat.pdf). Visually inspected the scanned table. Selected unambiguous 10 cm integration entries for a 3×3 inch NaI detector; the table provides no uncertainties. Excluded the Co-60 entry printed at1.382 MeV pending clarification. These are measured values, not digitized curve estimates.

| Energy (keV) | Published P/T | Demo P/T | MC standard error | Relative excess |
|---|---:|---:|---:|---:|
| 323 | 0.820 | 0.83396 | 0.00095 | 1.70% |
| 478 | 0.668 | 0.68703 | 0.00126 | 2.85% |
| 661.6 | 0.536 | 0.56752 | 0.00141 | 5.88% |
| 766 | 0.500 | 0.52132 | 0.00146 | 4.26% |
| 835 | 0.474 | 0.49666 | 0.00147 | 4.78% |
| 1114 | 0.395 | 0.42779 | 0.00152 | 8.30% |
| 1780 | 0.290 | 0.33330 | 0.00155 | 14.93% |
| 1837 | 0.280 | 0.32764 | 0.00155 | 17.01% |

The demo is systematically high at these points. Monte Carlo noise is much smaller than the discrepancies, but does not represent experimental uncertainty or differences in detector construction. Do not claim experimental validation or attach a goodness-of-fit p-value to this comparison.

H. Leutz, G. Schulz and L. van Gelderen, “Peak/total-ratios for NaI(Tl)-crystals,” *Nuclear Instruments and Methods*40(1966),257–260, [doi:10.1016/0029-554X(66)90383-1](https://doi.org/10.1016/0029-554X(66)90383-1), [authoritative archive](https://dspace.library.uu.nl/server/api/core/bitstreams/83f6e260-56c8-4165-9126-2c250cf9bdcb/content). Their measurements for multiple crystal sizes and source geometries were10–30% below the historical Miller calculations. This supports investigating detector construction and scattering contributions; it does not prove the same explanation for this demo.

## Independent geometry check and distance behavior

Independently integrated the probability of a first interaction over incident solid angle. For direction cosine c, entry radius is d√(1−c²)/c and in-crystal path length is the smaller of the rear-face and side-wall intersections. Integrate1−exp(−μℓ) uniformly in c across the accepted cone. This uses the demo attenuation coefficient, so it independently checks transport geometry, not the cross-section data. Across23 grid/distance cases the largest discrepancy was2.291 binomial standard errors. This check does not validate energy redistribution after the first interaction.

For a circular face, Ω/(4π)=[1−d/√(d²+R²)]/2. The far-field approximation R²/(4d²) is appropriate only for d≫R. For the3-inch detector, the exact geometric acceptance is29.50% of this approximation at2 cm,90.28% at10 cm and99.96% at160 cm. The effective exponent of the simulated full-energy efficiency between successive doubling distances rises from1.42(5–10 cm) to1.96(80–160 cm). Depth-dependent interaction/escape probability also changes the intrinsic efficiency with distance.

**Limitation:** this is an analytic inverse-square/finite-geometry check, not a completed comparison to measured absolute efficiency versus distance. The measured P/T table alone cannot establish absolute distance scaling. A matched measured distance series with crystal-face reference distance, window geometry, activity and uncertainties is still needed. Task4 is therefore partially complete.

## Consequences for the laboratory and next work

- Keep the demo usable for qualitative spectral features and explicitly simulated transport investigations; do not present its absolute efficiency or P/T as calibrated to a commercial detector.
- Treat P/T discrepancies as model limitations pending investigation. Examine attenuation interpolation, coherent scattering, reflector/canning, escape processes and experimental denominator/threshold definitions before changing numerical parameters.
- For an inverse-square lab, fit the far-distance subset and compare to the exact solid-angle model; do not require a slope of−2 for points close to the crystal.
- No changes to source, notes, keys or their reference numbers are proposed from a fitted empirical correction. No browser or electronics-chain tests were performed in this benchmark.
