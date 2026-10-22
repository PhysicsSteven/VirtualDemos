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

[Second-pass report](validation/SECOND_PASS_2026-10-18.md) supersedes the next-work list for the newly completed scope. Seven requested demo cores now have direct-source Node tests; 67 supported branch groups pass including transient/AC. Current-main baseline exposes two Faraday failures and strict probes expose Gauss origin and Coulomb near-core inconsistency. Five full labs are aligned with main bc0485a and checked in scoped Chromium workflows. No demos/, notes/ or keys/ files changed. Steve reassigned the unfinished KEY_AUDIT and gamma comparison to GPT after Claude’s usage cap; see the checkpoint below. Source requests remain in root collaboration file.


## Audit takeover checkpoint — 2026-10-18

Read main collaboration and merged main (already current). [Key audit (private)](https://github.com/PhysicsSteven/TeacherKeys/blob/main/curriculum/curriculum-virtual-lab-starter-kits/curriculum/validation/KEY_AUDIT.md) covers initial RC/Faraday/Gauss checkpoints with proposed wording corrections, not all keys. The executable checkpoint script passed against main bc0485a. [Gamma report](validation/GAMMA_PUBLISHED_COMPARISON.md) records31 runs/6.2 million histories and visually transcribed Heath Appendix III values. P/T is systematically high; inverse-square behavior is approached in the far field. Measured absolute efficiency versus distance remains unvalidated. No demo, notes or teaching-key edits. Continue the named remaining key queue and laboratory review; do not relabel the partial audits complete.


## Rewritten-history queue — 2026-10-19

Continue from the fresh checkout and rewritten main7e350d3; never merge old history. All27 instructor files are verified in TeacherKeys. Photoelectric student instructions and private instructor key now describe selected-voltage recording, CSV and no recording RNG. Four modern cores have11 test groups; unified Circuits has6; selected-voltage Photoelectric functions have a source/CSV check. All85 supported groups/checks passed locally. Browser tests are updated for rewritten main and merged Faraday controls but were not run locally (browser binary absent). Public main is untouched. See [queue record](validation/QUEUE_2026-10-19.md).


## Lab-writing delivery — 2026-10-19

Current base9fa5e30; eight new full student labs (four modern benches, three acoustics and Franck–Hertz), three RC/AC/RLC handouts migrated to unified Circuits. Eleven companion instructor guides/rubrics and reproducible numerical reference outputs are private in TeacherKeys; see its `curriculum/LAB_GUIDE_INDEX.md`. No demo HTML changed. All96 supported Node groups/checks passed; added acoustics/Franck suites and near-critical Circuits cases. Browser CI removed per Steve's explicit coordination instruction. Read [writing/validation record](validation/LAB_WRITING_2026-10-19.md) for limitations. Department handouts have not yet been supplied; reconcile with them before classroom use. Continue on the feature branch; no main merge authorized for this writing pass.


## Plain student-handout revision — 2026-10-19

The ten requested handouts now follow Claude’s e/m example: Goal, short Background with display equations, Before the lab, Safety, Procedure, one Data table, Analysis, one-paragraph Uncertainty, Questions and What to hand in. e/m itself is unchanged. Matching guides in TeacherKeys answer every new prelab/postlab question and keep detailed model caveats private. Reference calculations remain applicable: compared affected CORE blocks between9fa5e30 and main2000710 and found them identical; updated e/m is separate. Checked formatting/links rather than rerunning numerical suites for prose changes. Work is on the feature branch, pending owner review/merge.


## Owner-approved integration — 2026-10-20

The plain-language handouts are merged with latest main bce8304 under Steve’s explicit approval. Newer Rutherford/timbre source updates are preserved. Ran the 14 workflow Node suites plus Rutherford: 105 supported groups/checks passed locally. Counts: 57 catalog entries, 61 retained demo HTML pages, 35 student handouts. Eleven priority packages have full revised student/instructor materials; the rest are at mixed draft/starter stages. Browser CI stays off as requested. Recommended next work: review one modern bench package against its departmental handout and reconcile controls/materials, then continue through the priority modern benches; do not promote the collection to release-ready. Future main merges still need approval.


## Weekend review checkpoint — 2026-10-22

Clean feature checkout fast forwarded to main 77d11e3. Claude owns all demo HTML this weekend. Ran seven existing newest-demo suites (111 groups) and new DNA (10) and Lagrange (5) suites: 126 supported groups passed on Node v24.19.0. DNA `--strict-ter` fails: TER chainID is one column early; requested correction in COLLABORATION.md. Supported-case Node workflow includes both new suites; browser CI remains off. No remote CI result claimed. See [review and remaining scope](validation/WEEKEND_REVIEW_2026-10-22.md). Independent nine-demo review is partial, not release approval. New handout batches wait for Claude's E&M/mechanics notes. Do not merge to main without Steve's approval.
