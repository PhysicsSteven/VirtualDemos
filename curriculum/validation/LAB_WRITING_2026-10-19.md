# Full laboratory writing pass — 2026-10-19

Source reviewed: main `9fa5e30ac212c947887eb62b6b7f935b6470d88b`, fast-forwarded into the feature checkout after reading main's coordination request. Student handouts are public; instructor solutions, rubrics, reference calculations and synthetic reference data are private in TeacherKeys. No demo HTML, notes pages or teaching-key answers were edited.

## Delivered scope

| Student handout | Status and measurement route |
|---|---|
| spin-resonance | New full ESR/PSR lab: cursor-based Capture, FAST/SLOW calibration, separated H/F datasets, temperature and field-fit uncertainty |
| speed-of-light | New full Foucault lab: measured image alignment, signed-speed fit, paired zero cancellation, geometry dependence |
| e-over-m | New full Helmholtz/mirrored-scale lab: two-edge readings, core versus uniform model and Earth-field comparisons |
| electron-diffraction | New full graphite lab: measured/adopted L, arc/chord distinction, exact inversion and geometry sensitivity |
| rc-circuits | Rewritten for unified Circuits time mode, scoped CSV, switching/finite-charge and energy bookkeeping |
| ac-circuits | Rewritten for unified Circuits AC/time modes; manual frequency response, rms/phase, startup scope export |
| rlc-transients | Rewritten for unified Circuits with its actual defaults/signs, CSV and general ledger; standalone page retained only as optional exact-time comparison |
| timbre | New full manual-table lab: Fourier/rms checks, missing fundamental, phase, detuning and stiffness |
| resonators | New full resonance-tube capture/CSV fit, skipped-order labels, temperature/Q effects and optional string/bottle comparisons |
| acoustic-levitation | New full manual model-investigation lab: tracked phase/spacing, force scaling, threshold brackets and sag |
| franck-hertz | Optional full lab completed: marked peaks/manual tables, free-intercept fit, offset/collection/density tests |

Each includes objectives/prerequisites, theory/prelab, procedures, raw-data layout, quantitative analysis, uncertainty, interpretation and submission requirements. The four modern benches explicitly support physical-bench preparation or simulated substitutes. No departmental apparatus handouts have yet been supplied, so these follow the implemented Model notes and existing classroom notes; department procedures take precedence for real setup. Acoustic courses have an explicit simplification option.

Private TeacherKeys commit `01094c103bd1fee5e9f914b1ae4d93112d6279f3` contains eleven corresponding instructor guides/rubrics and `curriculum/LAB_GUIDE_INDEX.md`. Its reference generator records ideal/source-derived values separately from a seeded Franck–Hertz synthetic curve. None is labeled measured apparatus data. Archived pre-rewrite history was not imported.

## Executed checks

Ran all 14 Node suites in the retained physics workflow:18 transient,6 RC,7 Gauss,8 Faraday,7 capacitor,5 AC,6 circuit-builder,5 Coulomb,5 grating,11 modern-bench,6 unified Circuits,1 Photoelectric recording/CSV,8 acoustics and 3 Franck–Hertz groups/checks =96, all passed. Extended the Circuits damping grid to include the lab's20/50/100 Ω and 190/198/200/202/210 Ω cases. Reran its six groups after that change. Syntax checks and whitespace/link checks completed.

The new acoustics suite independently checks Fourier coefficients/integrated rms, resonance/end-correction fits, skipped-order spacing, string/bottle scaling, finite-Q peak shift, source pressure gradients, force from a potential, radius/drive scaling and bowl phase gradient. Franck checks energy/collection bookkeeping, units/density trends, seeded current bounds and known-shape peak/line analysis. These do not independently validate every physical approximation or effective cross section.

Browser CI was removed per Steve's explicit request in COLLABORATION.md; Node CI remains. No new browser run or physical apparatus test is claimed. Existing strict Gauss/Coulomb probes remain known limitations outside the supported-case green count.

## Important interface/model limits

- Spin Capture reads a placed cursor, not an automatic peak locator. Total PSR field must include temperature-corrected permanent field; no scan-only fit.
- Foucault geometry fields and e/m diameter entries are analysis inputs, not independent physical dimension measurements.
- Diffraction L/R entries do not resize the simulated tube; the handout requires their measurement/source and tests sensitivity.
- Unified Circuits exports selected channels/current time window, not settings or a full energy ledger; time samples are actual exported times. The visible export control is time-only despite an internal AC export branch. AC frequency response uses manual tables.
- Timbre/levitation/Franck lack Capture/CSV/Blind; their handouts explicitly use manual tables/screenshots. No nonexistent instrumentation is requested of students.
- Finite tube Q shifts response maxima from exact lossless quarter-wave positions. The handout separates this systematic from captured meniscus noise.
- Levitation force/voltage calibration and line/brightness models are illustrative. Matching model outputs is not a calibrated real force or apparatus measurement.

These are implemented teaching packages with scoped numerical/software evidence. No release-ready or TA-accepted status is assigned, and no merge to public main is authorized by this writing request.
