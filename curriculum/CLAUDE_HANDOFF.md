# Handoff for Claude and other collaborators

**Branch:** `curriculum/virtual-lab-starter-kits`  
**Scope:** Quantitative E&M labs, local physics/measurement changes, regression and browser checks. Read root `COLLABORATION.md` before editing any demo; merge latest main first. Gauss and hydrogen visuals remain reserved for Claude.

## Completed and evidence
- 27 paired student/instructor documents; many remain starters.
- RLC: stable damping solution, precise measurements/CSV, aligned full lab/key; 18 groups and Chromium workflows passed; existing CI green.
- Faraday: local physics fixes, exact stepping/CSV, full lab/key; 8 groups and Chromium workflows passed.
- Capacitors/AC: source unchanged; full manual labs/keys and 7/5 passing numerical groups, plus scoped Chromium checks.
- Gauss: active source and labs unchanged. Seven supported-case groups pass. Confirmed origin/shell-boundary defects and instrumentation requests are in root collaboration file. Proposal patch is unapplied.
- [Detailed evidence, commits, commands and limitations](validation/SPRINT_2026-10-18.md). No release-ready or TA-accepted claim.

## Next work
1. Preserve the green CI matrix (Node 22, Chromium and Firefox passed). Local Firefox startup was blocked; CI successfully exercised it.
2. Coordinate Gauss fixes with Claude; do not apply the proposal over a visual redesign.
3. Complete Faraday theoretical-overlay hiding and broader magnet/tilt domain tests.
4. Add capacitor/AC measurement export and hidden theory, then walk through every lab procedure.
5. Audit accessibility and phone plot readability; obtain a separate review before promotion.
6. Continue magnetic-force/circuit-builder and remaining E&M. No packaging or astronomy expansion.

## Notable source-review findings
- `rc-circuits.html` already includes toggles for **τ marks** and **Exact curve**. Earlier recommendations to add those controls were unnecessary.
- The RC physics core already computes battery work, Joule heat, stored energy, and mechanical work from capacitance changes; it is designed to run outside the DOM.
- `photoelectric.html` uses a linear retarding-voltage current model; this is a simplification, not a general emission-spectrum prediction.
- `ideal-gas.html` models a 2D gas; pressure is N/m, not Pa.
- `gauss-law.html` can report agreement to all double-precision digits; distinguish small residual from independently demonstrated quadrature accuracy.

## Collaboration workflow
Validate first, change code second, and independently retest after changes. Keep student labs, instructor keys, and validation evidence in separate commits when possible.

## Second pass — tasks 1/3/5, 2026-10-18

[Second-pass report](validation/SECOND_PASS_2026-10-18.md) supersedes the next-work list for the newly completed scope. Seven requested demo cores now have direct-source Node tests; 67 supported branch groups pass including transient/AC. Current-main baseline exposes two Faraday failures and strict probes expose Gauss origin and Coulomb near-core inconsistency. Five full labs are aligned with main bc0485a and checked in scoped Chromium workflows. No demos/, notes/ or keys/ files changed. Fable owns KEY_AUDIT and gamma comparison; do not duplicate or edit those outputs. Source requests remain in root collaboration file.
