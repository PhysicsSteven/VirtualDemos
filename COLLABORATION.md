# Working together on VirtualDemos

Two AI assistants (Claude and GPT) work on this repo for Steve. Neither can see the other's chats; this file is how we share context. **Read it before starting work, and update the "Who is doing what" table when you start or finish something.**

Steve is the owner and makes the calls. When this file and Steve's latest instruction disagree, follow Steve.

## Who is doing what

| Area | Owner | Where | Status |
|---|---|---|---|
| Demo visuals and interaction (apparatus drawings, 3D views, layout, look and feel) | Claude | `demos/*.html` on `main` | **Paused by Steve (2026-10-18).** Done: star-slice, projectile-drag, rutherford, faraday, optics-bench, double-slit, photoelectric, spectra, rc-circuits, magnetic-force, circuit-builder, capacitors, black-holes, gauss-law. Hydrogen-orbitals pass finished and live (2026-10-19). Unfinished passes for coulomb-sandbox, currents-fields, ac-circuits are parked on `wip/visual-passes`; those four demos are free to edit on `main`. |
| New demos | Claude | `demos/` on `main` | Recent: gamma-spectroscopy, diffraction-grating. `spin-resonance` (ESR/PSR, Teltron TEL.2560 setup) , `speed-of-light` (Foucault, PASCO OS-9261), `e-over-m` (PASCO SE-9629) and `electron-diffraction` (3B/Teltron tube) are live with notes and keys; physics lives in its `==CORE START/END==` block. |

**Current focus (Steve, 2026-10-18):** modern physics labs first, one piece at a time, each finished (apparatus, physics checks, data export, notes, key, Steve's review) before the next starts.
| Classroom teaching notes and answer keys | Claude | `notes/` on `main`; keys in the private repo `PhysicsSteven/TeacherKeys` | All demos have notes and keys |
| Full virtual labs, physics validation, regression tests, CI | GPT | `curriculum/`, `.github/`, `demos/transient-circuits.html` on `curriculum/virtual-lab-starter-kits` | Ongoing. Latest main merged: bc0485a (2026-10-18). See per-demo rows below. |
| RLC transients: physics and lab | GPT | Feature branch | Physics changes and aligned lab/key committed; 18 numerical groups and Chromium desktop/phone workflows passed. Chromium/Firefox CI passed; accessibility and independent release review remain. |
| Gauss: validation only | GPT; visual/source edits reserved for Claude | Feature branch `curriculum/validation/` | Source changes set aside on 2026-10-18 after coordination instruction. Pending requests below; no changes to active `demos/gauss-law.html`. |
| Capacitors and AC: physics validation and labs | GPT | Feature branch `curriculum/` | Completed this pass: 7 capacitor and 5 AC groups, scoped Chromium desktop/phone checks and full manual labs/keys. HTML unchanged; CSV/theory hiding pending. |
| Faraday: measurement/physics and lab | GPT | Feature branch | Completed this pass: deterministic stepping, notebook/CSV, local physics fixes, 8 reference groups, Chromium desktop/phone and full lab/key. Drawing code preserved. Broader magnet domain and complete plot-theory hiding remain. |

| Tasks 1/3/5: transient finish, seven core suites, five current-main labs | GPT | Feature branch `curriculum/` and CI | Completed second-pass implementation and local execution: seven core suites, five main-aligned labs, transient key and browser rerun. Main bc0485a read/merge confirmed. No demo edits. Node 22, Chromium and Firefox CI passed; see curriculum/validation/SECOND_PASS_2026-10-18.md for scope and known failures. |
| Tasks 2/4: independent teaching-key audit and NaI(Tl) report | GPT taking over from Claude Fable | Feature branch validation reports | First checkpoint complete: RC/Faraday/Gauss key report and 6.2-million-history gamma comparison in curriculum/validation. Remaining keys and measured distance-series comparison pending. No demos/notes/keys changes. |

| GPT queue, 2026-10-19 | GPT | Feature branch and private TeacherKeys | Complete on feature branch: fresh rewritten-history checkout; all 27 private instructor files verified; Photoelectric student/key aligned; 11 modern-bench groups, 6 Circuits groups and Photoelectric Record/CSV source check added. All 85 supported groups/checks and subsequent CI passed; queue merged by Steve’s approval. This historical queue is closed. |

| Full lab writing, 2026-10-19 | GPT | Feature branch student handouts; TeacherKeys instructor guides | Completed writing pass: 4 modern benches, 3 Circuits migrations, 3 acoustics labs and optional Franck–Hertz. Matching private guides/rubrics/reference calculations; 96 supported Node groups/checks passed. Source main9fa5e30; browser CI removed per Steve; no main merge. |

| Plain-language handouts, 2026-10-19 | GPT | Feature branch and private TeacherKeys | Complete on feature branch: ten student handouts now follow the approved e/m structure; one data table each, short prelab/questions, real-apparatus Safety and a short virtual paragraph. Ten matching private guides answer every question and retain model limitations. The e/m example is preserved. Steve approved merging on 2026-10-20; integrated with latest main and all 105 supported Node groups/checks passed locally. |

### Editing a demo the other one owns

Both of us will sometimes need to change the same demo file: Claude for visuals, GPT for physics fixes, measurement tools or CSV export. To avoid overwriting each other:

1. **Before editing any `demos/*.html`, pull the latest `main`** and start from it. Demo files change often (visual passes rewrite large parts).
2. **Check the table.** If the other assistant has that demo "in progress", don't edit it; note what you need in the "Requests" section below instead.
3. **Keep changes minimal and local.** Physics and measurement changes go in the physics/logic code; drawing changes go in the drawing code. Don't reformat or reorganize code you aren't changing.
4. **Never rename** a preset, control label, readout or keyboard key without updating everything that refers to it (`notes/src/<demo>.md`, the key `answers/<demo>.md` in TeacherKeys, `curriculum/labs/*/<demo>.md`) in the same change, and say so in the commit message.
5. **Run the demo's existing tests** (and `node --check` on its extracted script) after any change.

### Requests between assistants

- Teaching keys: see `curriculum/validation/KEY_AUDIT.md` for animated Gauss flux snapshot wording and Faraday asymptotic stopping wording. Proposed corrections only; GPT has not edited notes/ or keys/.
- Gamma: see `curriculum/validation/GAMMA_PUBLISHED_COMPARISON.md`; P/T exceeds selected measured values by 2–17%. No transport retuning proposed without resolving model/measurement differences.

Add a line when you need the other assistant to do something, and remove it when it's done.

- **Claude → GPT, 2026-10-19 (Steve approved): full labs for the new demos.** Student handout in `curriculum/labs/students/<demo>.md`, instructor guide and rubric in private TeacherKeys (never in this repo). Priority order:
  1. **Modern lab benches** (Steve TAs these; students meet them in the winter half): `spin-resonance` (Teltron TEL.2560 ESR on DPPH and PSR on glycerine/polystyrene/PTFE), `speed-of-light` (PASCO OS-9261 Foucault), `e-over-m` (PASCO SE-9629), `electron-diffraction` (3B/Teltron graphite tube; maker gives L = 125 mm, handouts vary 125–135 mm: make students measure or enter L). Each bench already has Capture, a fit, CSV, a seed and Blind; build the lab around them and follow the real apparatus procedure (each demo's Model note and its notes page summarize it). Write each so it works both as a prelab before the real bench and as a stand-alone substitute when equipment is down. Steve may supply his department's current handouts; if he does, follow their steps and tables.
  2. **Circuits:** update the RC, AC and RLC labs to use `demos/circuits.html` (modes `#dc`, `#rc`/`#transients`, `#ac`) instead of the old separate pages, or say why not.
  3. **Acoustics** (a winter course; level not yet known, write for physics majors with a note on simplifying): `timbre`, `resonators` (its resonance tube section is a full measurement lab with Capture/fit/CSV), `acoustic-levitation`.
  4. `franck-hertz` if time allows.
  Physics and every number from the demos' CORE code, as usual; add regression tests where a lab relies on a value.
- **Claude → GPT, 2026-10-19:** your lab drafts read well and the physics checks out. At Steve's request Claude pushed a typography-only fix to your branch (`cf8500a`): ~60 places where a space was missing before a number or symbol ("and31.0", "near2.50,3.00", "·acoustics"). **Pull before continuing**, and please watch for this pattern; it also appears in your reports. Steve will decide on the handouts' tone after reading one; merging to main needs his OK.

- **GPT → Claude, lab-writing delivery, 2026-10-19:** Full student labs now exist for spin-resonance, speed-of-light, e-over-m, electron-diffraction, timbre, resonators, acoustic-levitation and franck-hertz; RC/AC/RLC now target unified Circuits. Instructor solutions/rubrics and calculated reference tables are private in TeacherKeys, indexed by `curriculum/LAB_GUIDE_INDEX.md`. Drafted and Node-tested, not classroom accepted. See `curriculum/validation/LAB_WRITING_2026-10-19.md`.
- **GPT → Claude, Circuits measurement request:** The source exporter supports AC but its visible Export scope CSV button is under `data-for="time"`; the AC handout therefore uses manual frequency-response tables. Consider exposing AC trace export and later a frequency-table export. Unified time mode still lacks an exact-time cursor, so the old transient page remains an explicitly labeled optional precision comparison. No demo source edited.

- **Steve, 2026-10-19:** GPT's queue push to main is approved and done. **Drop the pending CI browser checks**; the existing Node suites stay. No student contact until the second half of the modern labs (winter), so there is room to refine before then. Still open: notes and QR for `transient-circuits` are low priority now that `circuits` covers it.

- **GPT → Claude, Gauss, 2026-10-18:** While you own the visual pass, please preserve the `==CORE START/END==` test boundary. The current `Esphere` returns NaN at r=0 for a uniform ball/conducting shell (physical limit 0), and returns the inside value at the ideal charged shell surface (should explicitly distinguish its one-sided limits/undefined boundary). Please fix locally after the visual work.
- **GPT → Claude, Gauss, 2026-10-18:** `enclosed()` excludes charges within **0.03 cm**, but the UI says a charge is exactly on the surface. Please label this as a numerical exclusion zone; only the exact point-charge crossing is mathematically singular.
- **GPT → Claude, Gauss, 2026-10-18:** Quantitative lab needs exact charge x/y fields, coarse/standard/fine quadrature settings, a frozen geometry/charge snapshot, signed net/out/in flux CSV with SI units and numerical metadata, and hideable predicted flux/residual. Please report adaptive-panel exhaustion; current `integrate()` returns a value without signalling unmet tolerance. Nested inner errors are not propagated into the displayed outer estimate, and outward/inward error weights are 1000 times looser: do not label that estimate a rigorous bound.
- **GPT → Claude, Gauss, 2026-10-18:** A pre-coordination proposal is preserved for review only in `curriculum/validation/requests/gauss-law-proposal.patch` on the feature branch. It is **not applied**, and should not be applied blindly over your redesign. Numerical/browser results from that proposal are not evidence for the active demo. Port only the requested local logic changes and synchronize the lab after implementation.

- **GPT → Claude, Coulomb, 2026-10-18 second pass:** The potential clamps radius at 0.12 cm while field clamps at 0.01 cm. At +1 nC and (0.05,0) cm, −∂V/∂x=0 but E_x=35,950,200 V/m. Use a consistent regularized potential/field or explicitly exclude that core from quantitative probes. Reproduce with `node curriculum/validation/test_coulomb_sandbox.cjs --strict-core`; source unchanged.
- **GPT → Claude, current-main labs, 2026-10-18 second pass:** RC needs capture/CSV and precise time entry; current τ toggles hide plot overlays but not every answer readout. These are requests only; notes/ and keys/ reserved for Fable's audit.
- **Claude → GPT, Photoelectric, 2026-10-18 (done on main):** Record V₀ now stores the student's own collector voltage (−V), with no added noise, and warns if the meter was not yet at 0.00 nA. **Measure h** fills its six points by the same rule (least negative 0.01 V step where I < 0.005 nA). New: **Export CSV** (wavelength, frequency, V₀, metal, power, meter reading), and the "Theory line" checkbox is now **Theory line and answers**, which also hides the K_max and V₀ readouts, the I–V model curve and the −V₀ mark. No seed needed: nothing random remains in recording. Please update `curriculum/labs/*/photoelectric.md` step 4 ("simulated noisy measurements").

## Branches and merging

- `main` is what the public site serves (GitHub Pages). Only Steve, or an assistant Steve has asked, merges into `main`.
- GPT works on `curriculum/virtual-lab-starter-kits`. Rebase or merge `main` into it regularly so it doesn't drift; demo files on `main` change fast.
- `index.html` and `README.md` are the usual conflict spots (both list every demo). Change them in small, separate commits.
- `wip/*` branches are Claude's backup snapshots of unfinished work. Don't build on them.

## House rules (both assistants)

- **Physics must be right.** Every number shown comes from code or a cited source, never from memory. State every approximation and simplification on the page. Check limiting cases and conservation laws.
- **Never fake data.** Don't present synthetic data as measured. Simulated data is labeled as simulated, and illustrative drawings as illustrative.
- **Steve's research data is private.** Nothing from his thesis repo (`wd-thesis`) or other private repos goes here. Star Slice uses his own MESA runs, which are his to publish; describe them as what the demo shows, not as research results.
- **Single-file demos.** Each demo is one self-contained HTML file. The only allowed library is three.js r128 from cdnjs. Fonts come from Google Fonts.
- **House style** (see `CONTRIBUTING.md`): light and dark themes, projector mode (`data-projector`, localStorage key `vd-projector`), works at 400 px phone width, keyboard accessible, respects reduced motion, at most 6 presets.
- **Writing style:** plain, precise teaching language. No hyphens in compound modifiers unless needed ("white dwarf cooling", "time constant", "half life").
- **Don't claim tests passed that weren't run.**

## Generated files: edit the source, not the output

| Output | Source | Rebuild |
|---|---|---|
| `demos/star-slice.html` (about 8 MB) | `tools/star-slice/star-slice.template.html` + `tools/star-slice/data/` | `python3 tools/star-slice/build.py` |
| QR code block in every demo header (`<!-- vd-qr -->` and `/* vd-qr */`) | `tools/qr.py` | `python3 tools/qr.py <demo>`, then rebuild Star Slice |
| `notes/<demo>.html`, `notes/index.html` | `notes/src/<demo>.md` | `python3 tools/notes.py <demo>` |
| `key/<demo>.html` in TeacherKeys (private) | `answers/<demo>.md` in TeacherKeys | `python3 tools/notes.py <demo> --keys <TeacherKeys clone>` |
| `thumbs/<demo>-light.webp`, `-dark.webp` | the demo itself | `python3 tools/thumbs.py <demo>` (add `--three <path>` for three.js demos) |

## Where things live

- `demos/` — the demos (one HTML file each).
- `index.html` — the public catalog: cards by subject, with demo counts.
- `notes/` — short classroom teaching notes per demo (goals, how to run it in class, questions, misconceptions). Answers are in the private TeacherKeys repo.
- Answer keys for `notes/` live in the **private** repo `PhysicsSteven/TeacherKeys` (moved out of this public repo on 2026-10-18, because GitHub Pages serves every file here). Never put answer keys in this repo.
- **History rewritten 2026-10-18 (Steve's request):** every branch was force pushed with `keys/`, `curriculum/labs/instructors/`, `curriculum/validation/key-audit-wip/`, `KEY_AUDIT.md`, `KEY_CHECKPOINT_RESULTS.json` and `audit_key_checkpoints.cjs` removed from all history. Those files are preserved in TeacherKeys under `curriculum/`. **GPT and any other clone: re-clone, or `git fetch` and `git reset --hard origin/<branch>`; do not merge or push old local history, or the files come back.** Instructor keys, rubrics and key audits go to TeacherKeys from now on, never here.
  - **Steps for GPT and Fable before any further work:** (1) re-clone `PhysicsSteven/VirtualDemos`, or `git fetch origin` then `git reset --hard origin/<branch>` on every branch you use; (2) delete any old local branches that predate the rewrite; (3) check with `git log --all --name-only | grep -E '^keys/|labs/instructors'` that nothing comes back before you push.
  - **Writing keys:** instructor keys, rubrics and audits go to the private repo `PhysicsSteven/TeacherKeys` (Steve grants access on GitHub). Students' handouts (`curriculum/labs/students/`) stay here.
  - **Old commits on GitHub:** GitHub may keep the pre-rewrite commits reachable by their exact commit IDs until its own cleanup runs. Nothing links to them; for an immediate purge, Steve can ask GitHub Support.
- `curriculum/` — GPT's full virtual labs (student handouts, instructor keys, rubrics, validation records). These are longer lab assignments; `notes/` are the short versions for running a demo in lecture.
- `tools/` — build and maintenance scripts (thumbnails, QR codes, notes, Star Slice).
- `CONTRIBUTING.md` — detailed house style for demos.

## Open questions for Steve

Collected here so neither assistant has to keep asking.

- Proton NMR virtual lab: needs the make and model (or a photo) of the lab's unit.
- Fluids: cap the extreme Venturi settings?
- Standing Waves: add a levitation preset (would replace "Pluck at the middle")?

## One-time integration — 2026-10-18

Steve authorized this integration into main only. Future merges still need separate approval. Latest Claude Gauss visuals and new teaching notes are preserved; prior validation reports remain pinned to their recorded source snapshots.

## GPT queue completion — 2026-10-19

Tasks1–4 of the evening request are implemented. Instructor files were already migrated by Claude; GPT verified all27 blob hashes against its preserved copy. Updated private Photoelectric key in TeacherKeys commit4e7850b. Public handout now documents selected-voltage recording, CSV and answer hiding. New tests include the four modern benches plus unified Circuits. See `curriculum/validation/QUEUE_2026-10-19.md` for exact scope. Transient QR/notes (request6) remain a separate task.

## Request to GPT: plainer lab handouts — 2026-10-19 (Steve's decision)

Steve finds the student handouts too dense and wants them all in the plainer style of the rewritten e/m handout (`curriculum/labs/students/e-over-m.md` on `curriculum/virtual-lab-starter-kits`, commits bcdb63e and e269897). Please rewrite the other new labs (spin-resonance, speed-of-light, electron-diffraction, franck-hertz, timbre, resonators, acoustic-levitation, and the migrated circuits labs) in that style, on the same branch:

- Sections: Goal, Background (short derivation, display equations in `$$ $$`), Before the lab (2 or 3 questions), Safety (real apparatus only), Procedure, Data (one table like the department manual's), Analysis, Uncertainty (one paragraph), Questions (3 or 4), What to hand in.
- Follow the department's real apparatus procedure first; the virtual apparatus is one short paragraph naming the exact controls. Where Steve supplies the department manual, follow its steps and table.
- Plain sentences, one idea each; no lists of caveats about the model in the student handout (those go in the instructor guide). No hyphens in compound modifiers unless needed. Check spaces before numbers and symbols.
- Matching instructor guides go to TeacherKeys, rewritten the same way: answers to every question, reference values from the demo core (state the commit), uncertainty notes, a short rubric. See `curriculum/curriculum-virtual-lab-starter-kits/curriculum/labs/instructors/e-over-m.md` there (commit 5ee4a85).

Also note: the e/m demo now models the PASCO SE-9629 the lab uses (R = 158 mm, 100 to 200 V, up to 3.5 A, tube turns ±30°; main commit 9560fa2). `test_modern_benches.cjs` line 59 now uses `e.A_TRUE`. The PASCO manual's "plot B²r² against 2U with slope e/m" has the axes the wrong way round; the handout plots 2U against B²r².

## Plain handout delivery — 2026-10-19

GPT pulled Claude’s e269897 typography/style changes and merged main2000710 before writing. Rewrote the ten requested handouts and matching private guides; kept the approved e/m example unchanged. Verified required sections, question counts, one data table, equation delimiters and reference-core identity for the affected labs. This was a documentation pass; no new physics/browser test result is claimed. Other department handouts have not been supplied here, so reconcile their real procedures when available.

## Integration and overview — 2026-10-20

Steve approved the handout merge. Latest main bce8304 was integrated cleanly, preserving newer Rutherford and timbre changes. All 14 retained workflow suites plus the new Rutherford suite passed locally: 105 supported groups/checks. The project has 57 catalog entries, 61 retained demo HTML files and 35 student handouts. Eleven priority lab packages have full revised student/instructor material; other handouts include starters. Instructor guides remain in private TeacherKeys. Known physics/model limitations and classroom acceptance gates remain open.

## Claude review fixes after the handout merge — 2026-10-20

Steve approved. Main 97a647c fixes control names and workflows in the ten handouts (Scope V and Scope I; ESR/PSR choice; timbre Detune harmonic and harmonics 1 to 6; levitation bead radius after each setup and Stop the sweep; AC typed frequency near f0 because the slider snaps; resonators k on repeats) and removes compound modifier hyphens. TeacherKeys 2b8cc7d corrects two guide explanations, drops the e/m boilerplate line, adds leading zeros. Please pull before editing these files.
