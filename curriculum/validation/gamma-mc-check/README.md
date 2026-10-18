# Gamma spectroscopy: Monte Carlo against published NaI(Tl) data (in progress, paused 2026-10-18)

Scripts run the demo's own physics core, extracted at run time from `demos/gamma-spectroscopy.html` between its `==CORE START==` and `==CORE END==` markers. The demo file is not modified.

- `load.cjs` — extracts and instantiates the core.
- `pt.cjs [N]` — peak to total ratio, intrinsic total efficiency (`inter`) and full energy fraction (`peak`) for the 2″×2″ and 3″×3″ crystals, point source on axis at 1, 5 and 10 cm and a parallel beam, 13 energies from 59.5 to 2614.5 keV. `pt_results.csv` holds the run with N = 10⁶ histories per point. `PT_ideal` is the unsmeared full energy fraction over all interactions (the usual Monte Carlo definition). The `PT_smeared*` columns use a crude flat continuum subtraction that fails at high energy and should be ignored or redone.
- `inv.cjs [N] [E]` — photopeak and total rate against distance (1 to 50 cm), log slope over 3 to 30 cm, and the effective interaction depth δ in a 1/(d+δ)² fit. Written, not yet run.

## Findings so far

Intrinsic total efficiency agrees with published values. At 662 keV and 5 cm the demo gives 0.468 (2″×2″) and 0.539 (3″×3″) against 0.478 and 0.54 reported in Table 1 of Sensors 26, 3913 (2026), https://www.mdpi.com/1424-8220/26/12/3913 (TopMC simulation).

Peak to total runs high. 3″×3″ at 10 cm, demo (unsmeared) against the "experimental" column of Table 3 of the same paper (attributed there to Guo, Luo and Lin 2002; these numbers match the shape of Heath's IDO-16880 curve but the provenance should be checked against Heath directly):

| E (keV) | demo P/T | published P/T | ratio |
|---|---|---|---|
| 320 | 0.82 (interp.) | 0.820 | 1.00 |
| 478 | 0.69 (interp.) | 0.668 | 1.03 |
| 662 | 0.568 | 0.536 | 1.06 |
| 835 | 0.497 | 0.474 | 1.05 |
| 1115 | 0.43 (interp.) | 0.395 | 1.09 |
| 1836 | 0.327 | 0.280 | 1.17 |

At 5 cm, Table 1 of that paper implies P/T = 0.431 (2″×2″) and 0.522 (3″×3″) at 662 keV; the demo gives 0.464 and 0.556, about 7 % high. The excess grows with energy, which is the direction expected for a model that keeps all electron energy in the crystal (no electron escape, no bremsstrahlung escape) and has no aluminum can, MgO reflector, PMT or source mount to scatter photons into the continuum. The demo states these simplifications on its page. Conclusion so far: the demo's spectra will show photopeaks a few percent too strong relative to the continuum, worst above 1.5 MeV; acceptable for a teaching demo, worth a sentence in the notes.

Still to do: run `inv.cjs` and compare the 10 to 20 cm drop and δ with the key's Q5 claim (factor 3.3 to 3.4, δ ≈ 2 cm) and with published effective center values for NaI; obtain Heath's catalogue (INL, https://inl.gov/content/uploads/2023/07/naicat.pdf, Fig. 31 and Appendix II) or Berger and Seltzer, Nucl. Instrum. Methods 104, 317 (1972), for a primary reference; write `GAMMA_SPECTROSCOPY_MC_CHECK.md`.
