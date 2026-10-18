# Tasks 1, 3 and 5 — second pass, 2026-10-18

GPT scope: finish transient execution/key checkpoint; regression for seven named cores; five current-main laboratory write-ups. Claude Fable owns the independent `keys/answers/` audit and gamma-spectroscopy comparison. No `demos/`, `notes/` or `keys/` files were modified in this pass. Gauss and hydrogen remain reserved in the main collaboration table.

Main was fetched, `COLLABORATION.md` read, and `git merge origin/main` reported already up to date at **bc0485a5fc20a130175dd370b45ff741d4f9acb2**. Lab/control alignment is explicitly against that snapshot, not an unobserved future redesign. Published test snapshot: **fe372581346043570c14344b70a6569918740ecb**. Local Node v24.19.0, Playwright 1.51.1, Chromium 134.0.6998.35.

## 1. Transient circuits checkpoint

The 18-group Node suite was rerun and passed. Existing real-browser workflows were rerun in Chromium at 1440×1000 and 390×844, covering all modes, critical control, keyboard time adjustment, scope scale/channel controls, capture/clear and both CSV exports. All passed. The instructor key now explicitly includes RC/RL/LC and all RLC analytic branches, identifies RL I0=1 A for its numerical example, and includes a critical-point reference checkpoint. Default peak/period/damping reference tables were independently recomputed from the characteristic roots.

The prior Chromium/Firefox [CI run](https://github.com/PhysicsSteven/VirtualDemos/actions/runs/39155943281) was green. The expanded [second-pass CI run](https://github.com/PhysicsSteven/VirtualDemos/actions/runs/39157675420) also passed: physics job 117764168234, Chromium job 117764167996 and Firefox job 117764168195. Each browser passed both the feature-branch workflows and pinned-main controls: **40 CI demo/viewport workflows in total**. This is two sets of five workflows at two widths in two browsers; overlapping demo checks are not distinct demos. This completes the requested test/key execution work, not the entire release gate: accessibility, independent reviewer sign-off and TA acceptance remain.

## 3. Seven physics cores

`demo_source.cjs` reads working-tree HTML by default or exact `git show <DEMO_REF>:demos/<slug>.html`. It extracts source functions without patching demo files. Marker-delimited cores run in a Node VM; Coulomb uses asserted function/constant boundaries because its source lacks core markers. Faraday no longer depends on the feature branch's Node export shim, allowing the same tests on main.

| Requested core | Branch groups passing | Main groups passing | Scope |
|---|---:|---:|---|
| rc-circuits | 6/6 | 6/6 | Integrating-factor reference; independent power quadrature; switches; mechanical work; repeated events; UI corners |
| faraday | 8/8 | 6/8 | Ring/finite-magnet references, time averaging, rail power/coast; main fails zero field and invalid-input checks |
| capacitors | 7/7 | 7/7 | Ideal field energy, force/work, fixed Q/V, reconnection and networks |
| gauss-law | 7/7 | 7/7 | Supported flux geometries, near-boundary cases, independent midpoint convergence; origin excluded from this passing count |
| circuit-builder | 6/6 | 6/6 | Series/parallel, divider, bridge, internal resistance, KCL/power, shorts/open circuits, resistor extremes |
| coulomb-sandbox | 5/5 | 5/5 | SI scaling, superposition, potential gradient and closed path outside regularized cores |
| diffraction-grating | 5/5 | 5/5 | Oblique orders, independent complex phasor sums, zeros/missing orders, exact wavelength recovery, grazing geometry |

Requested-seven subtotal: **44/44 branch, 42/44 main**. Including unchanged transient (18) and AC (5) suites: **67/67 supported branch groups passed**. These are grouped parameterized checks, not counts of individual parameter combinations. Dedicated strict defect probes below deliberately fail and are not hidden in the passing denominator. Main does not pass the complete seven-suite command.

```sh
# Feature branch: all requested cores
for demo in rc_circuits faraday capacitors gauss_law circuit_builder coulomb_sandbox diffraction_grating; do
  node "curriculum/validation/test_${demo}.cjs" || exit 1
done
# Main baseline (Faraday exits 1 with two failed groups):
DEMO_REF=bc0485a5fc20a130175dd370b45ff741d4f9acb2 node curriculum/validation/test_faraday.cjs
# Known unresolved defects, each exits 1:
node curriculum/validation/test_coulomb_sandbox.cjs --strict-core
node curriculum/validation/test_gauss_law.cjs --strict-origin
```

Machine-readable outputs, exit codes and demo SHA-256 hashes are in [SECOND_PASS_RESULTS.json](SECOND_PASS_RESULTS.json). Supported-case CI does not include the intentionally failing strict probes; green CI therefore does not certify those domains. Enable the strict probes when validating a proposed fix.

## Reproduced failures and limitations

1. **Faraday main:** zero-field coast with v0=2 m/s, t=3 s gives NaN displacement; expected ballistic 6 m. Its core also accepts invalid dt/R rather than rejecting them. The latter is an API robustness boundary, not a demonstrated reachable UI setting. Existing feature-branch fixes pass both checks; no new demo edits were made.
2. **Coulomb both snapshots:** with +1 nC at origin and probe x=0.05 cm, the clamped potential has zero local gradient, while field x is **35,950,200 V/m**. Potential radius clamp is 0.12 cm; field clamp is 0.01 cm. This is a regularized-core consistency defect, not a failure of the point-charge law outside that region. A request for a consistent model or quantitative exclusion is in `COLLABORATION.md`.
3. **Gauss both snapshots:** uniform-ball field at r=0 returns NaN; regular physical limit is zero. The strict-origin probe fails. Shell-boundary ambiguity, 0.03 cm exclusion wording and quadrature error/exhaustion reporting remain prior requests. Passing near-boundary tests do not certify those cases.
4. Capacitor fringe-field grid, diffraction spectral colour rendering, broader magnet tilt/bumper behavior and full accessibility are outside these tests. The circuit builder's ideal-wire loop current assignment is a regularization convention; no claim of physically unique current in redundant ideal wire loops is made.

## 5. Current-main lab work

- **RC:** available E12 resistance sequence, actual-time manual recording, partial-charge initial conditions, actual 6 V energy preset, complete answers and uncertainty propagation. No fictitious CSV or precise time controls.
- **Faraday:** main-compatible manual generator/rails/magnet experiments, data tables and grading. Branch-only stepping/CSV retained as an explicitly optional extension. Main's endpoint/average energy issue and zero-B defect are identified.
- **Capacitors:** main/source identity confirmed, connected/isolated controls checked, existing full lab/key retained with dated scope; manual data entry remains required.
- **Photoelectric:** manual Cs plus Clear points replaces the misleading suggestion to use Measure h (which chooses Na and auto-populates six points). Correct Record V₀ semantics, 1 nm/0.01 V setting resolution, eight numerical references, current/threshold brackets, power comparison and full marking guidance. Noise is a three-uniform sum, support ±0.0375 V, σ=0.0125 V; no seeded reproducibility is claimed.
- **Gauss:** exact shape labels (Freeform is a prism), preset-based superposition, reproducible radius scan with actual charge coordinates, exclusion-zone caveat, manual data and complete conceptual key. No source edits while Claude owns the demo.

`test_main_lab_controls.cjs` served exact main HTML and passed **10 local Chromium demo/viewport workflows**: these five labs at 1440×900 and 390×900. It checked RC switching/readout, Faraday generator/rails, capacitor fixed-Q/V, photoelectric threshold/current bracket/Record and Gauss charge/flux. Test hooks advanced RC/Faraday time for deterministic readout verification; the student UI has no such exact-time control. These checks are scoped workflows, not an entire timed student lab or TA trial.

```sh
npm install --no-save --package-lock=false playwright@1.51.1
npx playwright install chromium firefox
DEMO_REF=bc0485a5fc20a130175dd370b45ff741d4f9acb2 BROWSER=chromium node curriculum/validation/test_main_lab_controls.cjs
BROWSER=chromium node curriculum/validation/test_browser.cjs
```

The local environment used the existing `PLAYWRIGHT_MODULE=/tmp/vd-browser/node_modules/playwright` override. CI installs the pinned package normally.

## Commits and next handoff

- `e22d85d`: seven-core extraction/tests and reproducible failure probes.
- `5c32aa2`: five main-compatible labs and completed transient analytic key.
- `fe37258`: expanded CI and exact-main browser checks.

Next: coordinate source fixes for Coulomb/Gauss, review Fable's independent findings when available, then add measurement/export/blinding tools to RC/capacitors/photoelectric under the ownership rules. All release statuses remain scoped; no full-release or TA-acceptance claim.
