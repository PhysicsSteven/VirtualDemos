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
- **Math in Markdown** (Steve, 2026-10-23): symbols and equations are LaTeX, never Unicode lookalikes. Site handouts use `$$...$$` only; GitHub files in TeacherKeys use `$...$` inline and `$$...$$` display. Details and checker in the 2026-10-23 08:30 entry below.

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

## Claude: GPT's open technical requests closed — 2026-10-20 (Steve approved)

- Circuits (0e939d8): AC mode has Capture reading, an editable table and Export CSV (SI, header describes the circuit); Export scope CSV moved to the Oscilloscope section and works in AC. New `test_circuits_readings.cjs`. AC handout updated.
- Gauss (efde82c): `Esphere` gives 0 at r = 0 for ball and conductor; NaN on an ideal charged surface unless a side is given, plus `EsphereLimits`; exclusion zone (0.03 cm) labelled as numerical; `integrate()` returns ok/stop/panels and flux results carry `converged`. Exact x/y entry, Capture/Export CSV, hideable prediction. Quadrature presets not added (tolerance fixed, stated). Tests: 11 groups plus `test_gauss_law_browser.cjs`.
- Coulomb (84ffab0): each charge is a uniformly charged ball of radius 0.12 cm for both V and E, so E = −∇V everywhere; `--strict-core` passes.
- Gamma (aec9b42): no transport change; Model note, handout and notes state the peak to total gap against Heath and the omitted physics. Heath's values are from GPT's transcription; Steve to spot-check.

## Weekend sprint, 2026-10-22 to 2026-10-26 (Steve's decisions)

Focus: Physics I and II through the release gate (curriculum/RELEASE_GATE.md), E&M first, then mechanics. Claude batches visible demo changes for Steve's screenshot review; pure bug fixes push directly. GPT works in parallel on the items below. **Claude owns `demos/*.html` this weekend; GPT please don't edit demo HTML.** Pull main before each task; new demos and features land on main all weekend.

### Queue for GPT (in this order)
1. **Independent physics review of the newest demos** (the author shouldn't be the only reviewer). For each, read the CORE block and Model note, recompute key numbers independently, and report errors or overstated claims in this file (don't edit the demo): `ising`, `bz-reaction`, `relativity-em`, `chladni`, `faraday` (Two coils setup), `lagrange-points` (Sun centered frame), `acoustic-levitation` (3D field), `gamma-spectroscopy` (ORTEC setup), `dna`. Each already has a node test except `dna`; if you write one for `dna` (bond lengths, Watson–Crick distances, rise and twist, PDB columns), put it at `curriculum/validation/test_dna.cjs`.
2. **E&M student handouts and instructor guides, plain style** (the e/m example), for demos that don't have one or whose controls changed: `capacitors`, `magnetic-force`, `currents-fields`, `em-waves`, `coulomb-sandbox`, and update `gauss-law`, `faraday` (Two coils), `ac-circuits`/`rc-circuits`/`rlc-transients` (Circuits now has AC Capture and CSV). Wait for Claude's E&M feature batch notes below before naming new controls; check every bold control name against the live demo.
3. **Mechanics handouts and guides**, same style: `projectile-drag`, `springs`, `collisions`, `rotation`, `fluids`, `potential-curves`, after Claude's mechanics batch.
4. **Validation records**: for each demo Claude reports as release candidate, run its tests and the browser checks, and record evidence (commit SHA, results) in `curriculum/validation/`.

Steve still decides which demos keep lab handouts and which become demos only; until then, write handouts only for the demos listed above.

### Claude feature batches landed on main, 2026-10-22 (for GPT's handouts and guides)
- **E&M (1b88d9a):** faraday, gauss-law, circuits, capacitors, coulomb-sandbox, magnetic-force. Common new controls: **Blind: hide predictions and answers** (Lab section, stage tag "Blind"), **Capture reading**, **Export CSV**, **Clear** (Readings section), **Show data table** / **Hide data table**, **Reduce motion**. Circuits adds **Step Δt**, **Step forward**, a scope **Time cursor** (click/drag or ←/→, Home/End, Esc, C captures), and Readings in In time and DC; AC keeps **Frequency response readings**. Capacitors plot choices **C vs 1/d**, **C vs x/s**, **V vs d**. Magnetic force adds **Show ruler**, **Ruler reads** (Diameter/Radius), **Start timer**/**Stop timer**, **Reset timer**, **Turns timed**, plots **r against v**, **r against m/|q|**, **T against v**. Coulomb: probe readings and keys (P probe, ]/[ cycle charges, arrows move, +/− change q, C capture). Stale text to fix: capacitors handout "no measurement CSV notebook"; Faraday handout's old "Hide predicted amplitudes and integral checks" name; the Faraday, Gauss and AC instructor guides that say Step/Capture/CSV or AC export don't exist.
- **Mechanics (3602495):** projectile-drag (**Dot interval**, **Earlier dot**/**Later dot**, **Hide cursor**, plots **y against t**, **R against sin 2θ**), springs (**Stopwatch**, **Oscillations counted, N**, **Reset stopwatch**, **Reset peak**, plots **T² against m**, **A against ω**), collisions (**Photogates** section with **Gate A position**, **Gate B position**, **Place gates for this run**; fits **p′ vs p**, **Separation vs approach**, **K lost vs ½μu²**; in Blind the e slider becomes **Bumper** A–D with fixed hidden e), fluids (readouts Depth ruler h, Pressure gauge, Spring scale T, Flow meter Q, Standpipe h₁/h₂; cavitation banner; g = 9.80665 so the guide's 9.81 N should read 9.807 N), kepler-orbits (**Start timer**/**Stop timer**, **Zero timer**, **Ruler**, "Arrow keys move" options, **Third law**/**Your readings**). All have node tests now. potential-curves, rotation, catenary, double-pendulum stay lecture demos (labels, keyboard, data tables, Reduce motion, tests).
- **From GPT's review:** Ising γ₀ comment fixed (e43dffb). DNA TER column fix is in progress in Claude's polish batch.

## Textbook alignment (Steve's decision, 2026-10-22): OpenStax University Physics
Physics 1 uses **University Physics Volume 1** (chapters 1–17), Physics 2 uses **Volume 2** (chapters 1–16). Volume 3 isn't used in a course; it is free supplementary reading (optics and modern physics demos, modern physics labs). Steve is giving GPT the Volume 1 and 2 PDFs (current OpenStax web editions, April 2026). Calculus-based level, so the existing calculus in handouts is fine.

**Plan:** the site will later get course pages (Physics 1, Physics 2, Modern Physics Labs, Acoustics, Astronomy, Explore) built from one mapping file; demo URLs and QR codes stay unchanged. Claude builds the pages after Sunday's usage reset; Claude also adds the missing Physics 1 demos (motion along a line, Newton's laws with friction and inclines, circular motion, work and energy, static equilibrium) and a Physics 2 calorimetry demo.

### For GPT, in this order
1. **Draft the mapping** at `curriculum/textbook-map.json` (on your branch), one entry per demo in `demos/` that is on the index:
   `{"demo": "faraday", "course": ["physics-2"], "sections": [{"vol": 2, "sec": "13.1", "title": "Faraday's Law"}, ...], "role": "lab" | "demo", "beyond_book": false, "note": "optional"}`.
   Use the exact section numbers and titles from the PDFs. A demo can list several sections and both courses. Mark `"beyond_book": true` for demos with no Volume 1/2 home (e.g. ising, bz-reaction, dna, chladni, acoustic-levitation, relativity-em) and give Volume 3 sections where relevant. Leave `"role"` as your best guess; Steve's labs versus demos list will override it. Also list, in `curriculum/TEXTBOOK_GAPS.md`, every Volume 1 and 2 section with no demo, so Claude can prioritize new demos.
2. **Rewrite handouts and instructor guides to the book**, lab by lab, in course order (Physics 1: projectile-drag, springs, collisions, fluids, kepler-orbits, then Physics 2: capacitors, circuits labs, gauss-law, magnetic-force, faraday): the book's notation and sign conventions, "Textbook: Vol. N, §x.y" references at the top and where each idea is used, the book's terminology. Keep the plain e/m style and the control names listed in the feature batches above. Notation conflicts between a demo's on-screen labels and the book: list them in this file for Claude rather than working around them in prose.
3. Keep the earlier queue items (independent physics review; validation records) going in between as you see fit.

### Steve's decisions, 2026-10-22 late morning
- **Focus:** Physics 1 and 2 (University Physics Vols 1 and 2) only for now. Astronomy, modern physics labs, thermal/statistical extras and quantum demos are on the back burner (no new work on them; the modern lab manual alignment is paused).
- **Lecture demos, not labs (for now):** em-waves, currents-fields, catenary, relativity-em. Mark them `"role": "demo"` in the textbook map; no handouts for them yet.
- **Springs:** add an "unknown spring" option to Blind (k hidden); keep the automatic period readout visible (no forced hand timing for now). Claude's task, after Sunday's reset.
- **Star slice:** loading the stellar models on demand is fine (it doesn't need to work as a downloaded file). Back burner with the astronomy set.
- **Labs versus demos:** GPT's textbook map makes the first guess; Steve reviews it.

### Map details (Steve, 2026-10-22, 11:13)
- **Physics 2 = Volume 2 chapters 5–16** (starts at electric charges and fields). Volume 2 chapters 1–4 (thermodynamics) are **unassigned** until Steve checks the Physics 1 syllabus; Physics 1 may cover some of them. In the map, give thermo demos `"course": ["thermo-tbd"]`.
- **Status label per entry** (from GPT's suggestion): add `"status": "usable" | "needs-handout" | "needs-feature" | "missing"` to each mapping entry, and in `TEXTBOOK_GAPS.md` mark each uncovered section `missing`. This gives the workload estimate.
- **Scope:** textbook companion first (every chapter listed, gaps labelled honestly as "no activity yet"), then fill the gaps students hit most (Vol 1 motion along a line, Newton's laws with friction and inclines, work and energy, equilibrium). Calorimetry waits for the thermo decision.

### Physics 1 syllabus (Steve, 2026-10-22, 11:15): Volume 1 chapters 1–15, in this order
Measurements and vectors (1–2); 1D, 2D, 3D motion, projectile and relative motion (3–4); Newton's laws (5); friction, drag, centripetal forces (6); Exam I; work and kinetic energy (7); potential and mechanical energy (8); center of mass, momentum, impulse, collisions, variable mass (9); rotational kinematics, moment of inertia (10); Exam II; torque, rotational dynamics (10); rotational energy, rolling, angular momentum (11); gravitation and orbital mechanics (13); stress and strain (12, elasticity part), static fluids and fluid dynamics (14); oscillations (15); Exam III.
- **Not in Physics 1 or Physics 2:** Volume 1 chapters 16–17 (waves, sound) and Volume 2 chapters 1–4 (thermodynamics). Map them as `"course": ["unassigned"]` until Steve says where (if anywhere) they are taught.
- Physics 1 page should follow this order (units: Kinematics, Forces, Energy, Momentum, Rotation, Gravitation and fluids, Oscillations).

### Physics 2 syllabus (PHYS 202, Steve, 2026-10-22, 11:16), by week
1–2 charge, Coulomb, fields, dipoles; 3 flux, Gauss; 4 potential, equipotentials; 5 capacitance, series/parallel, field energy; 6 current, resistivity, Ohm, power; 7 single and multiloop circuits; 8 magnetic field, Lorentz force, cyclotron, Hall effect, force on wires, dipole moment; 9 fields of currents, Ampère, solenoids; 10 Faraday, Lenz, induction energy, RL and RLC, EM oscillations; 11 induced B, displacement current, Maxwell; 12 EM waves, Poynting, reflection and refraction; 13 mirrors, lenses, optical instruments.
- **Note:** the syllabus's chapter numbers (22–34) follow Halliday, Resnick and Walker, not OpenStax. Map by **topic** to OpenStax: Volume 2 chapters 5–16, **plus Volume 3 chapters 1–2** (the nature of light; geometric optics and image formation) for weeks 12–13. So optics-bench (and polarization for week 12) belong to Physics 2. RC circuits (OpenStax 10.5) are not listed in week 7 but fit there; AC circuits (OpenStax 15) are not listed: map as Physics 2 "going further".
- Physics 2 page should follow this week order.
- **Scope rule (Steve, 11:17):** anything not in the Physics 1 or PHYS 202 syllabi is back burner until the Physics 1 and 2 interface, groupings and workflow are done. After that, Thermo, Optics and Modern become their own modules built the same way. In the map, tag such demos `"course": ["later"]` (keep their sections) and spend no handout effort on them now.

## Claude, 2026-10-22: unknown spring, Hall strip, optics instruments check

New controls (exact visible names, for handouts):

- **springs**, Lab section: checkbox **Unknown spring: hide k** and button **New unknown spring**. On: a random k from 5 to 60 N/m (0.5 N/m steps); the k slider, k labels, energy values and wall amplitude are hidden, the ζ buttons are disabled, Blind turns on, the CSV k column reads `unknown` and a `# unknown spring` line is added. The measured period (zero crossings) and the stopwatch stay. One block only (it switches off for Normal modes and Beats). Turning it off shows k in the status line, so students can check. Suggested lab: vary m, plot T² against m (the existing fit), k = 4π²/slope.
- **magnetic-force**, new collapsible section **Hall effect in a strip** (closed by default): **Strip** Copper / n-type Ge / p-type Ge; **Current I** (0 to 50 mA); **B** ⊗ Into page / ⊙ Out; **Field |B| at the strip** (0 to 1 T); **Thickness t (along B)** (0.05 to 2 mm); strip width fixed at 10 mm. A voltmeter reads V_top − V_bottom. Readouts: carriers and sign, n, v_d, E_H, R_H. Blind renames the strips Sample A/B/C and hides carriers, n, R_H and v_d; the voltmeter stays. Model: steady state V_H = IB/(nqt), one carrier type; Cu n = 8.49 × 10²⁸ m⁻³ (free electron), Ge samples n = 1.0 × 10²¹ m⁻³ (typical teaching sample). No Readings capture in this section yet: students record V_H by hand. Map: OpenStax Vol 2 §11.6, status usable.
- **optics-bench** (no change): presets Magnifier and Telescope exist; a microscope can be built with the **Lens** button (two converging lenses). The image readouts work only for one lens, so there is no two-lens magnification readout. Map Vol 3 §2.7 usable; §2.8 usable as a demo, `needs-feature` if a lab needs measured angular magnification. Camera (§2.6) is the Converging lens preset with its screen.

## Claude, 2026-10-22 11:52: map files on main

Steve approved bringing only `curriculum/textbook-map.json` and `curriculum/TEXTBOOK_GAPS.md` from c03ab7e into main (the rest of the branch stays unmerged). Course pages will read the map from main. GPT: two entries are now out of date because the features shipped in 24564e4. Please update them on your branch: **springs** → `usable` (Unknown spring is live); **magnetic-force** → Vol 2 §11.6 Hall effect `usable`, force on wires and loops still `needs-feature`. I'll re-copy the map file to main when you push, so edit it only on your branch.

## Claude, 2026-10-22 12:55: Motion Graphs (new Physics I demo) and map entries on main

New demo `demos/motion-graphs.html` (Vol 1 §3.1–3.4, 3.6; §3.5 free fall still missing). I added its entry and the five section updates to `curriculum/textbook-map.json` **on main** so the Physics I page shows it. GPT: please merge main into your branch before your next map edit so we don't diverge; I'll keep my map edits to adding new demos and their sections.

Controls (exact names): Setups **Constant velocity / Speeding up / Slowing down and turning around / Stop and go / Walk the graph**. Motion: **Start position x₀**, **Start velocity v₀**, **Stage 1–3** each with **Acceleration a** and **Time**. Walk the graph: **Start run**, **New target**, **Match a velocity graph instead**, readout **Average distance from the target, last run**. At the time marker: **Tangent lines (slope)**, **Shade the area from 0 to t**, **Motion diagram: the cart every 0.5 s**. Readings: **Capture reading** (t, x at the marker), **Export CSV** (`t_s,x_m`), **Clear**, parabola fit x = c₀ + c₁t + c₂t² with residuals and **Show data table**. Lab: **Blind: hide predictions and answers** (hides the v and a graphs, their readouts, tangents, areas, v₀ and stage a, and v₀ and a from the fit), **Reduce motion**. Status in map: `needs-handout`.

## Claude, 2026-10-22 13:10: Vectors and Relative Motion (new Physics I lecture demo)

`demos/vectors.html`, map role `demo`, status `usable`, Vol 1 §2.1–2.4 and §4.5 (entries added on main as before). Setups **Components / Adding / Subtracting / Dot and cross products / River crossing**. Vectors: **Draw B** (**Head to tail / From the origin**, Adding only), **Snap tips to the grid**, **Show components**. River: **Water speed (relative to the shore)**, **Boat speed (relative to the water)**, **Heading, from straight across (+ upstream)**, **Aim to land straight across**, buttons **Launch boat / Back to the bank**; river 60 m wide, uniform current. Lab: **Blind** hides every computed result and the resultant arrow. No Readings/CSV (lecture demo).

## Claude, 2026-10-22 13:35: Forces and Friction (new Physics I lab)

`demos/forces.html`, map role `lab`, status `needs-handout`, Vol 1 §5.1, 5.3, 5.6, 5.7, 6.1, 6.2 usable; §5.2 and 5.4 `needs-feature` (notes say why); 5.5 third law and 6.3 centripetal still missing. Setups **Push on a level floor / Ramp: when does it slip? / Pull at an angle / Hanging mass on a table / Ramp and hanging mass**. Ramp and block: **Ramp angle θ**, **Block mass m**, **Static friction μs**, **Kinetic friction μk**, **Mystery surface: hide μs and μk** + **New mystery surface**. Pulls: **Applied force F**, **Angle of F above the surface**, **Hanging mass m₂ (0 = none)**. Stage buttons **Release / Hold**, **Put back**, **Release at the top mark** (timer: time to slide 1.000 m from rest, to 0.001 s). Forces now: **Show the weight's components along and across the ramp**, **Show the net force**. Readings: **Capture reading** (θ, m, m₂, F, φ, t), **Export CSV** (`theta_deg,m_kg,m2_kg,F_N,phi_deg,t_gate_s,a_m_per_s2`), fit a/cos θ against tan θ (slope g, intercept −μk g; rows with F = 0, m₂ = 0 only). Blind hides force sizes (arrows drawn equal length), a, friction type, slip angle and μk from the fit. Suggested lab: find μs from the slip angle, then μk from the fit, on a Mystery surface.

## Claude, 2026-10-22 13:55: Displacement Current (new Physics II lecture demo)

`demos/displacement-current.html`, role `demo`, status `usable`; Vol 2 §16.1 now `usable` and §12.5 lists it too. Setups **Loop around the wire / Same loop, surface through the gap / Loop in the gap / Small loop inside the plates**. Controls: **Surface** (**Flat disk / Bag into the gap**), **Loop radius r**, drag the loop on the drawing (sideways = along the wire, up/down = radius); **Battery voltage V**, **Resistance R**; buttons **Charge / Pause**, **Start over**. Readouts list I_c and I_d through the surface, B on the loop, ∮B·dl and μ₀(I_c + I_d). Model: ideal circular plates 5.0 cm radius, 2.0 mm gap (drawn wider), no fringing, long straight wire 1 mm radius, RC charging slowed about 10⁵ times. Blind hides B, the enclosed currents and the B(r) curve.

## Claude, 2026-10-22 14:05: Forces and Friction gains work and energy

New rail section **Work and energy since release** in `demos/forces.html`: work by gravity, friction, the push and the string (W = F·Δs, exact), **By the normal force** 0 J, **By the stop at the end of the ramp** when it hits an end, **Total work on the block**, **Kinetic energy ½mv² now**, **Thermal energy from friction, −W_f**, and power now for each force. Resets on Release from rest, Put back, presets and Release at the top mark. Blind hides it. Map: Vol 1 §7.1–7.4 and 8.2 now list forces and are `usable`.

## Claude, 2026-10-22 14:30: Circular Motion (new Physics I lecture demo)

`demos/circular-motion.html`, role `demo`, status `usable`; Vol 1 §6.3 `usable`, §4.4 lists it. Setups **Ball on a string / Car on a flat curve / Banked curve / Vertical loop**. Settings **Speed v** (loop: **Speed at the bottom v₀**), **Radius r**, **Mass m**, **Static friction μs (tyres on road)**, **Bank angle θ**; stage buttons **Pause/Play**, **Cut the string** (string only), **Start over**. Readouts per setup (tension, needed mv²/r against available friction, top speed, ideal banked speed and allowed range, loop speed and N). Blind hides force sizes and limits. No Readings (lecture demo).

## Claude, 2026-10-22 14:45: Motion Graphs gains free fall

New setup **Ball thrown up** in `demos/motion-graphs.html`: vertical track beside the graphs, height **y**, v₀ = 12 m/s, a = −9.81 m/s² until it lands at 2v₀/g. Start velocity slider now ±15 m/s and stage acceleration ±10 m/s². Map: Vol 1 §3.5 now `usable` with motion-graphs.

## Claude, 2026-10-22 15:00: Rocket Propulsion (new Physics I lecture demo)

`demos/rocket.html`, role `demo`, status `usable`, Vol 1 §9.7. Setups **In deep space / Launch from the ground / Too heavy at first / Same fuel, burned slowly**. Rocket: **Mass without fuel (dry)**, **Fuel mass**, **Exhaust speed u (relative to the rocket)**, **Burn rate**, **Gravity (launch from the ground)**; buttons **Launch / Pause / Resume**, **Start over**. Readouts: thrust, launch weight, burn time, mass, speed, height, acceleration, rocket equation Δv, speed at burnout, lost to gravity, time waiting on the pad, highest point (constant g, no air). Blind hides the prediction, burnout speed and height. No Readings (lecture demo).

## Claude, 2026-10-22 15:20: Stress and Strain (new Physics I lab)

`demos/stress-strain.html`, role `lab`, status `needs-handout`, Vol 1 §12.3–12.4 `usable` (bulk and shear moduli not covered). Wire: **Mild steel / Copper (annealed) / Aluminium alloy / Mystery metal**, **Diameter d**; Load: **Hanging mass** (↑ ↓ keys on the drawing), **Graph: zoom in on the elastic part**; stage buttons **Take all the load off**, **New wire**. Dial gauge to 0.001 mm on a 2.000 m wire. Readings: **Capture reading** (m, d, ΔL), **Export CSV** (`m_kg,d_mm,dL_mm,F_N`), fit F against ΔL for this wire, Y = slope × L/A, **Show data table**. Blind hides Y, yield, strength, σ and ε readouts, the material curve and Y from the fit; the Mystery metal always hides its own properties. Suggested lab: Y of the mystery metal from elastic loads, then find its yield stress from where it stops returning to zero.

## Claude, 2026-10-22 15:40: Static Equilibrium (new Physics I lecture demo)

`demos/equilibrium.html`, role `demo`, status `usable`, Vol 1 §12.1–12.2 now `usable`. Setups **Seesaw / Plank on two supports / Sign on a strut and cable / Ladder against a wall**; each has its own sliders in **Settings** (masses, positions, lengths, cable anchor height, ladder angle, **Floor friction μs**); loads can be dragged on the drawing (keys ← →, 1 and 2 pick the seesaw child). Readouts: torques, support forces, tension, hinge components, wall push, friction needed against available, slipping angle. Blind hides forces, torques and the verdict, and draws arrows equal length.

## Claude → GPT, 2026-10-22 15:45: next GPT tasks (Steve asked)

1. **Handouts for the three new Physics I labs** (controls listed in the sections above): `motion-graphs` (incl. Ball thrown up, Walk the graph), `forces` (incl. Work and energy since release, Mystery surface), `stress-strain` (Mystery metal). Lecture demos (vectors, circular-motion, rocket, equilibrium, displacement-current) need only short instructor notes, no student handout.
2. **Map re-check for sections still `missing` that existing demos may already cover**: Vol 1 §13.6 (tides demo, now `later`), §15.3 (springs reference circle), §4.1–4.2 (vectors, projectile-drag), §10.5 (rotation: check its moment of inertia content), §13.2 (kepler-orbits / projectile g). Promote a `later` demo into `physics-1` only if it truly fits the section. Edit the map on your branch after merging main (main has my additions); I'll copy it back.
3. Remaining real gaps I'm taking next: §5.5 third law (adding to forces). Not planned: ch. 1 (worksheet material), §8.5, §11.4, §13.7, §14.7.

## Claude, 2026-10-22 15:55: third law in Forces and Friction

New checkbox **Show third law partners: the forces the block exerts** (Forces now section): dashed arrows for N and friction on the ramp, the pull on the string, and a line for the block pulling the Earth; readout lists each pair. Map: Vol 1 §5.5 `usable` with forces.

## Claude, 2026-10-22 16:10: Resistivity of a Wire (new Physics II lab)

`demos/resistivity.html`, role `lab`, status `needs-handout`, Vol 2 §9.3 `usable`. Wire: **Nichrome / Constantan / Copper / Mystery wire**, **Gauge** (0.644, 0.405, 0.255, 0.160 mm), **Length between the clips L** (drag the clip, ← →), **Supply current I**, **Wire temperature**. Meters: ammeter and voltmeter (four-wire). Readings: **Capture reading** (L, V, I with material, gauge, T), **Export CSV** (`material,d_mm,T_C,L_m,I_A,V_V,R_ohm`), **Plot**: **R against L** (ρ = slope × A, rows at one T and gauge) or **R against T** (α = slope / R(20 °C), rows at one L and gauge). Blind hides ρ, α, Ω per metre and the fitted answers; Mystery wire always hides its values. GPT: please add a handout to your queue.

## Claude, 2026-10-22 16:35: Charging by Induction (new Physics II lecture demo)

`demos/induction.html`, role `demo`, status `usable`, Vol 2 §5.1–5.2 `usable`, listed on §6.4. Setups **Charging two spheres by induction / Charging one sphere by grounding / Sharing charge by contact**, each with a step bar (**Next step**, **Start over**). Apparatus: **Charged rod present**, **Rod charge**, **Rod tip distance from sphere A**, **Gap between the spheres**, **Radius of sphere B**, **Spheres touching (connected)**, **Ground sphere A**, **Ground sphere B**. Exact image charge solution; marks from the surface charge density. Blind hides net charges and potentials.

## Claude, 2026-10-22 16:50: map merged

Copied GPT's 437e664 map to main and re-applied my two newer entries it predated (`induction`: Vol 2 §5.1–5.2 usable, on 6.4; `resistivity`: §9.3 usable). GPT: merge main again before your next map edit. Next from me: a current balance and motor demo for Vol 2 §11.4–11.5.

## Claude, 2026-10-22 17:05: Force on a Current (new Physics II lab)

`demos/wire-force.html`, role `lab`, status `needs-handout`, Vol 2 §11.4, 11.5, 11.7 `usable`. Setups **Current balance / Wire at an angle to B / Loop: torque / DC motor**. Settings **Current I**, **Length of wire in the field L**, **Angle between the wire and B**, **Turns N** (loop), **Magnet field B**, **Mystery magnet: hide B**, **Commutator (reverse the current every half turn)**; loop buttons **Release the loop / Hold the loop**, **Start over**. Balance zeroed at I = 0 reads Δm (0.01 g). Readings: **Capture reading** (I, L, θ, Δm), **Export CSV** (`I_A,L_cm,theta_deg,dm_g,F_N`), fit F = Δm g against I, B = |slope|/(L sin θ). Blind hides predicted force, torque and B from the fit. GPT: handout please (current balance lab).

## Claude, 2026-10-22 17:25: Eddy Currents (new Physics II lecture demo)

`demos/eddy-currents.html`, role `demo`, status `usable`, Vol 2 §13.5 `usable`. Controls **Magnet strength (dipole moment)**, **Pipe wall thickness**, **Pipe temperature** (down to −196 °C), **Show the induced currents in the walls**; buttons **Drop all three / Pause / Resume**, **Start over**. Readouts per pipe: σ, measured fall time, drag constant, terminal speed, predicted time, heat. Blind hides the predictions.

## Claude, 2026-10-22 17:50: Pendulum (new Physics I lab)

`demos/pendulum.html`, role `lab`, status `needs-handout`, Vol 1 §15.4 `usable`. Presets **Simple pendulum / Does mass matter? / Large swings / Swinging rod / On the Moon**. Type **Bob on a string / Uniform rod**; sliders **Length L (pivot to bob centre, or rod length)**, **Release angle θ₀**, **Mass**; gravity **Earth / Moon / Mars / Mystery planet**; **Air drag (slow decay)**. Buttons **Release / Hold at release angle**; the photogate times every second bottom crossing to 0.001 s. Readings: **Capture reading**, **Export CSV** (`row,type,L_m,theta0_deg,m_kg,T_s,T2_s2`), **Clear**; plot **T² against L** (bob rows with θ₀ ≤ 10°, g = 4π²/slope) or **T against θ₀** (with the exact curve). Blind hides predictions and g from the fit. GPT: handout please (g from T² against L, then the large angle curve).

## Claude, 2026-10-22 18:10: Rotational Dynamics (new Physics I lab)

`demos/rotational-dynamics.html`, role `lab`, status `needs-handout`, Vol 1 §10.2, 10.5, 10.7, 10.8 `usable` (10.5 note keeps the ∫r²dm caveat). On the turntable **Nothing / Disk / Ring / Two masses / Mystery object**; **Distance of the two masses from the axis** (Two masses only). Drive: **Hanging mass m**, **Spool radius r** (**1.0 cm / 2.0 cm / 3.0 cm**), **Bearing friction**. Buttons **Release** (Pause while running), **Wind it back up**. Timer for the 0.500 m drop to 0.001 s. Readings: **Capture reading** (load, m, r, t), **Export CSV** (`row,load,m_kg,r_m,t_s,a_m_per_s2,alpha_rad_per_s2,tau_N_m`), **Clear**; fit τ = m(g − a)r against α = 2h/(t²r) for the rows with the current load: slope I, intercept the friction torque. Blind hides I, a, α, T, energies and the fitted I; Mystery object always hides its I. GPT: handout please (measure the empty table, then the disk or Mystery object by subtraction, with friction on).

## Claude, 2026-10-22 18:40: GPT's four requests fixed; map copied

Copied the f6fc23f map, gap list, map contract test and the three new handouts (motion-graphs, forces, stress-strain) to main. Re-applied my two newer entries (`pendulum` §15.4, `rotational-dynamics` §10.2, 10.5, 10.7, 10.8; all usable, the 10.5 ∫r²dm caveat kept) and removed those rows from TEXTBOOK_GAPS.md. Fixes, so `forces` and `stress-strain` are now `usable`:

1. stress-strain: the fitted Y uses `hidden()`, so Mystery metal hides it with Blind off.
2. forces: readouts and force arrows use the stored v while held, so K is the real ½mv² mid-run (the `S.run ? S.v : 0` expression is gone). **Hold** pauses; **Release** resumes with the same v.
3. forces: any slider edit and switching or renewing the Mystery surface clear the last timer reading, so **Capture reading** refuses until a fresh **Release at the top mark** run finishes.
4. forces: the step that crosses an end stop is split at impact (bisection), so the work values match the path to the displayed stop; the stop's work is −½mv² at impact.
5. Also from your stress-strain handout: the fit now uses only rows taken on the wire now hanging (**New wire** starts a new fit; the CSV keeps every row).

GPT: please drop the workaround sentences from the forces and stress-strain handouts (held K reads zero; capture before changing controls; Blind needed to hide the Mystery fit; fit mixes wires), and merge main before your next map edit.

## Claude, 2026-10-22 19:05: Gyroscope Precession (new Physics I lecture demo); Rotational Dynamics style fix

`demos/gyroscope.html`, role `demo`, status `usable`, Vol 1 §11.4 `usable` (TEXTBOOK_GAPS updated; Steve asked me to keep filling gaps). Setups **Fast spin / Slow spin: wobble and dip / No spin: it falls / Smooth start / Axle tilted up**. Controls **Spin rate**, **Pivot to wheel centre d**, **Axle tilt above horizontal at release**, **Solid disk / Rim-heavy wheel**, **Mystery wheel: hide its moment of inertia**, **Start it precessing at the steady rate (no wobble)**, **Show L, the torque and the change in L**; buttons **Release / Hold**, **Put back**. A floor gate times each full precession turn (0.01 s). Readings: **Capture reading**, **Export CSV** (`row,wheel,start,tilt_deg,spin_rpm,d_m,P_s,Omega_rad_per_s,inv_spin_s`), **Clear**; fit Ω against 1/ω_s, I_s = Mgd/slope. Lecture demo, so no full handout needed; a short activity would be fine if you want one.

Also: Rotational Dynamics shipped with its theme block not loading (a stray `<style>` line in my token template); fixed and rebuilt. No other demo was affected.

## Claude, 2026-10-22 19:40: Falling Ball Viscometer (new Physics I lab)

`demos/viscometer.html`, role `lab`, status `needs-handout`, Vol 1 §14.7 `usable`. Liquid **Glycerol / Castor oil / Motor oil / Water**, **Mystery liquid: hide its viscosity**, **Tube inside diameter** (**40 mm / 100 mm**); ball **Steel / Glass / Nylon**, **Ball diameter d**; buttons **Drop the ball** (Pause / Resume), **Take it out**, playback **×1 / ×10 / ×100**. Gate timer A to B (0.200 m, 0.01 s). Readings: **Capture reading**, **Export CSV** (`row,liquid,rho_liquid_kg_m3,ball,rho_ball_kg_m3,tube_D_mm,d_mm,t_s,v_m_per_s`), **Clear**; fit v against d² through the origin for rows matching the current liquid, ball and tube, η = (ρ_b − ρ_f)g/(18 slope). Readouts include the wall factor K and Re (hidden in Blind). GPT: handout please; the key teaching points are the wall correction v_∞ = Kv and leaving out high Re balls.

## Claude, 2026-10-22 20:00: Elevator (new Physics I lecture demo)

`demos/elevator.html`, role `demo`, status `usable`, Vol 1 §5.2 and §5.4 now `usable` (gap rows removed). Rides **Up to floor 10 / Down to the ground / Up one floor / Down one floor**; **Your mass m**, **Elevator acceleration (starting and stopping)**, **Top speed**; buttons **Pause / Resume**, **Cable snaps**. Graphs of the scale reading and velocity. Blind hides the scale. No handout needed (lecture demo).

## Claude, 2026-10-22 20:20: Gravity Near Earth (new Physics I lecture demo)

`demos/gravity-near-earth.html`, role `demo`, status `usable`, Vol 1 §13.2 now `usable` (gap row and line 21 updated). Places **Sea level / Top of Everest / Airliner, 11 km / Space station, about 400 km / GPS, r = 26,560 km / Geostationary, r = 42,164 km**; **Height above the surface h**, **Latitude**, **Earth / Moon / Mars**, **Include the planet's rotation**. Blind hides g and the percentages. No handout needed.

## Claude, 2026-10-22 20:40: GPS Clocks and Relativity (new Physics I lecture demo)

`demos/gps-clocks.html`, role `demo`, status `usable`, Vol 1 §13.7 now `usable` (gap row removed; owner-deferred line updated). Places **Lab tower, 22.5 m / Space station, about 400 km / GPS, r = 26,560 km / Geostationary, r = 42,164 km**; **In a circular orbit / At rest on a tower**, **Distance from Earth's centre r**, **Ground clock turns with Earth (at the equator)**; buttons **Run the clocks / Pause**, **Set both to zero**. Blind hides the rates. No handout needed.

## Claude, 2026-10-22 21:00: Impulse and Momentum (new Physics I lab)

`demos/impulse.html`, role `lab`, status `needs-handout`, Vol 1 §9.2 now `usable`. Bumper **Stiff spring / Soft spring / Clay**; **Cart mass m**, **Launch speed**, **Sensor sample rate** (**200 Hz / 1 kHz / 10 kHz**); buttons **Launch the cart** (Pause / Resume), **Put it back**, playback **real time / ×1/20**. Readings: **Capture reading**, **Export this run's F(t) CSV** (`t_s,F_N`), **Export readings CSV** (`row,bumper,m_kg,v_before_m_per_s,v_after_m_per_s,rate_Hz,area_N_s,peak_N,contact_ms`), **Clear**. Velocities positive toward the sensor. Blind hides the area, Δp and peak force (and the area column). GPT: handout please (students integrate the exported F(t) themselves).

## Claude, 2026-10-22 21:20: Center of Mass (new Physics I lecture demo)

`demos/center-of-mass.html`, role `demo`, status `usable`, Vol 1 §9.6 now `usable`. Setups **Masses on a plate / Exploding firework / Walking on a boat**. Plate: drag masses, **Add a mass**, **Remove the selected mass**, **Selected mass**. Firework: **Mass of the front piece, fraction of the total**, **Speed the explosion gives the pieces apart**, **Direction the front piece is thrown**; **Launch / Pause**, **Start over**. Boat: **Person's mass**, **Boat's mass**; **Walk**. Blind hides the CM. No handout needed.

## Claude, 2026-10-22 21:40: Speeding Up on a Curve (new Physics I lecture demo)

`demos/nonuniform-circular.html`, role `demo`, status `usable`, Vol 1 §4.4 now `usable` alongside circular-motion. **Speeding up from rest / Braking to a stop**, **Rate of change of speed |a_t|**, **Radius of the curve r**, **Speed when braking starts**, **Road grip μs**; buttons **Go / Pause**, **Start over**. Blind hides the accelerations and slip prediction. No handout needed.

## Claude, 2026-10-22 22:00: GPT's 81ac768 merged; Mystery fit hiding fixed; six new Physics I demos

Copied from GPT's branch: the five new handouts (pendulum, rotational-dynamics, viscometer, resistivity, wire-force), the updated forces and stress-strain handouts, CLAUDE_HANDOFF, EXPERIMENT_ROADMAP, PHYSICS_I_STATUS (with an update note at the top), the validation records and the new test suites. Map: handout links set; resistivity also on Vol 2 §9.4 as in your map.

Fix for your strict Mystery-only check: pendulum, rotational-dynamics, resistivity and wire-force now hide the fitted answer when the Mystery option is on, with Blind off. The text says "hidden in Blind: ..." in Blind and "hidden for the Mystery planet/object/wire/magnet: ..." otherwise, so your workflow tests pass unchanged. All five labs set to `usable`.

New since your last map (all on main, all usable): `elevator` (§5.2, 5.4), `nonuniform-circular` (§4.4), `impulse` (§9.2, **lab, needs-handout**), `center-of-mass` (§9.6), `gravity-near-earth` (§13.2), `gps-clocks` (§13.7). Physics I is now 77 of 85 usable; left are Ch. 1 and §8.5. `test_physics1_packages.cjs` fails only on "impulse: no handout mapped" until you write it.

GPT, next: (1) the impulse handout; (2) Ch. 1 worksheets (units and conversion, dimensional analysis, Fermi estimates, significant figures, problem solving) as short student activities; (3) a §8.5 Sources of Energy reading activity using cited public data (EIA or similar), no invented numbers. Please merge main first.

## Claude, 2026-10-22 22:30: Units, Scales and Estimates (new Physics I lecture demo, Ch. 1)

`demos/units.html`, role `demo`, status `usable`, Vol 1 §§1.1–1.6 now `usable`; §1.7 stays missing (worksheet). Tabs **Scale of things / Convert units / Dimensional analysis / Significant figures / Fermi estimates**. Convert: value, from, to, quantity (**length / speed / mass / energy / time**). Dimensional analysis: questions **Pendulum / Mass on a spring / Wave on a string / Orbit / Falling time**, exponent sliders, **Show the answer**. Significant figures: two measurements and an operation. Fermi: **Heartbeats / Walk the equator / Air per day** with low and high values. Blind hides results. GPT: the Ch. 1 worksheets can point at these tabs; §1.7 needs a problem solving worksheet.

## Claude, 2026-10-22 22:50: Sources of Energy (new Physics I lecture demo, §8.5)

`demos/energy-sources.html`, role `demo`, status `usable`, Vol 1 §8.5 now `usable`. Examples **Charge a phone, about 15 Wh / Run a 1 kW heater for an hour / A household for a day, about 30 kWh / 1 kW nonstop for a year**; **Energy delivered**, **Delivered as electricity (heat engines convert only part of the heat)**, **Power station efficiency (heat to electricity)**, **Dam height (water falls through)**, **Wind speed**, **Average sunlight on a panel, day and night**. Physics only, no national statistics, so the §8.5 reading activity I asked for can stay optional. Physics I is now 84 of 85 usable; only §1.7 (problem solving worksheet) remains.

## GPT: final Physics I activity mapping, 2026-10-22

Main 9bbb97b merged first. Impulse lab plus two Chapter 1 worksheets and one §8.5 EIA reading now written with private guides/rubrics/references. Map distinguishes 84 actual catalog demos from three standalone activities; 85/85 Physics I sections have scoped resources, not claims of full mastery/release readiness. Current status/gap docs rewritten to remove stale queue/failure labels; old reports preserved with resolution notes. 47 groups in ten affected core suites plus two strict workflow suites passed; map/package contracts, activity-structure checks, proposed renderer and 78 independent comparisons passed. No browser/remote CI/classroom pass claimed. Claude owns final course-card integration and source; no public main merge by GPT.

## Claude, 2026-10-22 23:10: GPT's 456cf88 integrated

Applied the standalone activity renderer by hand (the patch did not apply to the current tools/courses.py; same code, `activity_card` plus the activities loop and the "worksheets and readings" fact). Copied the map, the four new handouts, the EIA data file, the status/gap documents, the validation records and the updated contract tests. Your map predated my last two demos, so I re-added them: `units` (§§1.1–1.6, alongside your two worksheets) and `energy-sources` (§8.5, alongside your EIA reading; your activity id `energy-sources` and my demo id are the same string in separate namespaces, which the renderer handles). Physics I: 85 of 85 sections usable through demos and/or activities. Map and package contract tests pass.

## Claude, 2026-10-22 23:40: Units, Scales and Estimates gets a zoom

The **Scale of things** tab now opens in **Zoom through** (with **Ruler** as the old view): true size models from the observable universe to a proton, buttons **Fly in** / **Fly out**, and a **Width of the view** slider (scroll, drag or arrow keys on the picture also zoom). Blind hides the object names. The Ch. 1 worksheets can point at it for §1.1.

## Claude, 2026-10-23 00:30: scenery pass on 17 Physics I demos

Settings, real-looking objects and gentle ambient motion added to forces, elevator, impulse, center-of-mass, circular-motion, nonuniform-circular, rocket, motion-graphs, pendulum, rotational-dynamics, gyroscope, stress-strain, equilibrium, viscometer, gravity-near-earth, gps-clocks and energy-sources (vectors and units earlier). Physics cores, readouts and control names are unchanged. Behaviour changes worth knowing for handouts: in Blind, the impulse **Export readings CSV** leaves area_N_s and peak_N blank, and the energy-sources rows keep a fixed order (no ranking by mass); clay in impulse keeps its dent after contact; gps-clocks' tower clock now stays on the ground clock's meridian when Earth's spin is off.

## Claude, 2026-10-23 00:50: pendulum and viscometer follow ups (your list)

- **pendulum:** the bob on a string is now limited to θ₀ ≤ 90° (a string goes slack above horizontal: tension at release is mg cos θ₀); the rod still goes to 170°. The slider, drag and arrow keys all respect it; your handout question 4 fits.
- **viscometer:** the wall factor is still exactly Haberman and Sayre's K in slow flow (the K your handout supplies), but at higher Re it is weakened following Di Felice (1996): K^(nα/3.3), α = (3.3 + 0.085 Re)/(1 + 0.1 Re), n = d ln F/d ln v. Terminal speeds now match Di Felice's ratio to 0.4% from Re 0.05 to 6000. Low Re numbers barely move (3 mm glycerol 40 mm: 10.53 → 10.54 s; 100 mm: 9.48 → 9.49 s); water changes more (3 mm: 0.26 s; 6 mm: 0.19 s, was 0.22). New readouts: "Does Stokes' law apply?" (Re under 0.1, about 1, inertia dominated) and a warning when the ball is still speeding up at mark A. Both hidden in Blind. Please check your viscometer guide and reference checks for the 10.53 s and water timings.
- **impulse:** Blind now leaves area_N_s and peak_N blank in **Export readings CSV**.

## Claude, 2026-10-23 01:20: nonuniform-circular merged into circular-motion

Steve asked why Speeding Up on a Curve was separate from Circular Motion. It is now the **Speeding up or braking** setup in `circular-motion` (new slider **Rate of change of speed a_t (negative brakes)**; **Starting speed v₀** replaces Speed v in that setup; friction μs, radius and mass as for the flat curve). `demos/nonuniform-circular.html` is a redirect to `circular-motion.html#speed`, so old links and QR codes still work. Map and catalog entries for nonuniform-circular are removed (Vol 1 §4.4 now lists circular-motion only); its notes and key questions moved into circular-motion (Q5, Q6); its test groups moved into test_circular_motion.cjs. PHYSICS_I_STATUS.md updated.

## Claude, 2026-10-23 01:30: one card per demo on the course pages

At Steve's request each demo now has a single card, in the first unit that uses it; later units that also use it get one line, "Also used in this unit: <demo> (card under <unit>; sections)". The map is unchanged (demos still list all their sections); only tools/courses.py rendering changed. Physics I: 28 cards plus 4 such lines; Physics II: 15 cards plus 6.

## Claude, 2026-10-23 08:00: Elevator scale reading ramps

At Steve's request the Elevator trip is now jerk limited: the acceleration ramps up to ±a at the **Jerk: how fast the acceleration changes** slider (default 2 m/s³), holds, and ramps back, so the scale reading changes gradually. **Instant starts and stops (textbook model)** restores the old steps. Default ride to floor 10 (60 kg, 1.5 m/s², 3 m/s): 0.75 s ramp, 1.25 s at 69.2 kg, 7.25 s cruise; instant: 2 s, 8 s, 2 s. Notes walkthrough and a new Q6 (scale climbs at mJ/g = 12.2 kg/s) updated; key in TeacherKeys.

## Claude → GPT, 2026-10-23 08:30: readable math in handouts and guides (Steve's request)

Steve found the Unicode equations in the handouts hard to read (x = x₀ + v₀t + at²/2). All 51 student handouts in `curriculum/labs/students/` are now converted on main (commit "Handouts: typeset symbols and equations with MathJax"); `_includes/head-custom.html` loads MathJax 3.2.2 for them and lets a wide display scroll inside its own box on phones. **Pull main before editing any handout.**

### Conventions (house rule from now on)

**Student handouts on the site** (`curriculum/labs/students/*.md`, rendered by kramdown, math engine MathJax):
1. Delimiters are always `$$...$$`, inline and display. Never single `$`: kramdown leaves it alone and then mangles `_` and `*` inside it. Never `\[...\]` or `\(...\)`: kramdown strips the backslash and students see brackets.
2. Inline: `$$v_0$$` inside a sentence. Display: a paragraph that is only `$$...$$`, with a blank line before and after.
3. Typeset variables and symbols in prose, every equation, and anything with fractions, roots, powers, subscripts or Greek letters. In display use `\frac`; inline prefer `\tfrac` or `a/b`.
4. Keep as plain text: plain values with units ("72.0 km/h", "4.7 kΩ", "1.5 m/s²"), unit names, the `·` in the subtitle line, and the **bold names of on-screen controls** exactly as the demo shows them (**Launch angle θ**, **Release angle θ₀**). A symbol with a value is typeset with its units: `$$m = 0.20\ \text{kg}$$`.
5. Long equations get their own display. Several equations go in one display stacked with `\begin{gathered} A, \\[4pt] B. \end{gathered}` (or `aligned` with `\text{(a)}` labels when the text refers to them), not side by side with `\qquad`: each row must fit a 400 px phone.
6. A display inside a numbered list item is indented to the item's text (three spaces after `1. `), or the list restarts at 1 after it. The same applies to a paragraph that continues the item after the display.
7. In table rows never put `|` inside math; write `\lvert x\rvert`.
8. Upright word subscripts: `I_{\rm rms}`, `R_{\rm crit}`, `\lambda_{\rm peak}`. Reynolds number `\mathrm{Re}`.

**Instructor guides and other Markdown in TeacherKeys** (viewed on github.com, which renders math itself): inline `$...$` (no space just inside the dollars), display `$$...$$` on its own lines with blank lines around it. The other rules (3 to 8) apply as written.

### Checker

`curriculum/validation/check_math.cjs` typesets every expression with MathJax and fails on TeX errors, stray single `$` (site mode), unbalanced delimiters and `|` inside table math. `UNI=1` also lists lines that still have Unicode math outside the math, for review.

```
npm install --no-save mathjax-full@3.2.2
node curriculum/validation/check_math.cjs curriculum/labs/students/*.md                 # site handouts
node curriculum/validation/check_math.cjs --github <TeacherKeys>/curriculum/curriculum-virtual-lab-starter-kits/curriculum/labs/instructors/*.md
UNI=1 node curriculum/validation/check_math.cjs ...                                     # leftovers to review
```

Current state: 51 handouts, 1016 expressions, 0 problems.

### Task for GPT

1. Rewrite the math in every instructor guide in TeacherKeys (`curriculum/curriculum-virtual-lab-starter-kits/curriculum/labs/instructors/*.md`, and any other guide or rubric with equations) to the GitHub convention above. Only notation changes: keep wording, numbers, answers and structure. Keep each guide's symbols consistent with its student handout (same subscripts, same names).
2. Run the checker with `--github` on those files, then `UNI=1`, and review every listed line. Look at a few rendered on github.com.
3. Write every new or revised student handout to the site convention and run the checker on it before committing. Don't redo the 51 converted handouts; if you find a mistake in one, fix just that line.
4. Commit the guides to TeacherKeys and log a short entry here.


## Claude, 2026-10-23 09:30: Ball Launched from a Moving Cart (new Physics I lecture demo)

`demos/cart-launch.html`, Vol 1 §4.3 and §4.5 (Steve's request). A cart on a track fires a ball perpendicular to the track at a trigger post. Setups: **Steady cart** (lands in the launcher), **Cart at rest**, **Cart speeds up** and **Cart brakes** (acceleration from the moment of launch; misses by ½aT²), **Frictionless incline** (lands in the launcher again; T = 2u/(g cos θ)). **Watch from** the ground or the cart; velocity vectors with components, acceleration vectors (relative to the cart in the cart view), strobe images every eighth of the flight, path, and a position against time graph. Blind pauses at the top of the flight. Defaults 1.2 m/s and 4.0 m/s: T = 0.816 s, both move 0.979 m. Notes with Q1–Q5, key in TeacherKeys, 5 test groups in test_cart_launch.cjs, map and catalog entries. Also: the Elevator scenery, lost in this morning's jerk commit, is restored.

## Claude, 2026-10-23 10:15: cart-launch scenery pass

Lab setting for Ball Launched from a Moving Cart: wall with a pale whiteboard and clock, a lab bench, an aluminium track with a printed scale and end stops, a stand and clamp for the incline, a trigger rod whose flag flips at launch, a cart with turning wheels and a launcher on a bracket, a shaded ball with its shadow on the track and a puff at launch. The room is drawn in ground coordinates, so it slides past in the cart view. Physics, controls and readouts unchanged.

## Claude → GPT, 2026-10-23 09:30: TeacherKeys math pass reverted (Steve's call)

TeacherKeys b5dc003 is reverted (31898f9); answers/ and the instructor guides are back to their previous plain text. The script changed content, not just notation, and the preservation check did not catch it:
- commit hashes inside prose became math: "main 24564e0d5ac1acf…" → `$24564\times10^{476}e_{0}d_{5}$ac1acf…`, "9bbb97b" → `9bbb$97b$`;
- words glued to math: `2024'$s 366$ days$=8784 h$, not8760`, `rev$/s$`, `FWHM$/E …`, `$E=a\cdot$channel$+b$`, `ka$\ll 1$`, `|VH$| = …`;
- display calculations split numbers across rows ("= 2.1" / "× 10⁷ g"), and the units answer Q1 lost its structure;
- "Sagittarius A*" became `$A*$`; the percent sign was wrapped in `\text` braces; many plain values with units were typeset.
About 175 such inline spots in all. **Do not redo this pass automatically.** If Steve asks for it again, convert by hand file by hand, never touch hashes, code, IDs or words, and compare rendered text before and after. tools/notes.py now loads MathJax on key pages and protects `$...$` from the Markdown converter, so answers/ can use math later.

## Claude, 2026-10-23 10:45: the 12 "needs feature" Physics II sections are done

Six were already covered and are relabelled usable after review: 11.2 (Currents and Fields field lines), 11.3 (Magnetic Force helix, selector, spectrometer, cyclotron; e/m), 16.2–16.5 (EM Waves plane wave, intensity, radiation pressure, spectrum). Six got new features, each with tests, notes and a key question:
- **5.5** coulomb-sandbox: **Rod**, **Ring**, **Disk** presets and **Add rod/ring/disk**; exact integrals; **Textbook formulas** panel. CSV gains per body header lines only when such bodies exist.
- **6.4** induction: setup **Conductor shapes in a field (2D)** (Circle, Ellipse, Teardrop, Hollow ring, Hollow box; E₀, line charge λ and distance, net charge; σ against θ graph).
- **9.1** resistivity: **Bench / Inside the wire** view (v_d = I/(nqA), J, electrons per second counter, transit time). Existing CSV and fits unchanged.
- **14.2** faraday: setup **Self-inductance** (solenoid or toroid, Ramp up/Ramp down/Switch on/Switch off, waveforms, L, back EMF, ½LI²).
- **Vol 3 2.3, 2.8** optics-bench: presets **Microscope**, **Refracting surface**, **Apparent depth**; **Add → Refracting surface**; Telescope now shows its measured angular magnification. Test file test_optics_bench.cjs.
Handouts for these sections can now refer to these controls.

## Claude, 2026-10-23 16:20: Physics II gaps, plan and §7.6 (Electrostatics at Work)

Steve asked for the 13 Physics II sections still `missing` in the map. Plan, in syllabus order: 7.6 new demo; 8.5 capacitors gets an "Inside the dielectric" view; 9.2 review resistivity's Inside the wire (Drude/Fermi already there); 9.6 resistivity gets a cold stage with superconductors; 10.6 new household wiring demo; 11.1 currents-fields gets a bar magnet and Oersted's compass; 12.7 new magnetic materials demo; 13.4 and 13.7 new faraday setups (induced E around a solenoid; pickup and card reader); Vol 3 1.1 speed-of-light promoted if it fits; 1.5 optics-bench prism with Sellmeier dispersion; 1.6 Huygens wavelet view; 2.5 optics-bench Eye preset. I log each one here as it lands.

**§7.6 done, ready for a handout (GPT).** `demos/electrostatics-at-work.html`, role `demo`, status `usable`. Machine buttons **Van de Graaff generator / Ink jet printer / Smoke precipitator** (also `?setup=vdg|ink|esp`).
- Van de Graaff: **Dome radius R** (5 to 50 cm), **Belt current I** (0.5 to 50 µA), **Start motor / Stop motor**, **Touch with the grounded wand**. Graphs of V against time and E against r. Sparks at a surface field of 3.0 MV/m (approximate, stated); V_max = E_b R; defaults give 450 kV in 3.76 s.
- Ink jet: **Charge on each drop q** (0 to 0.50 pC), **Deflection plate voltage** (0 to 4000 V), **Drop diameter**, **Drop speed**, **Fire one drop**, **Print PHYS**, **Clear paper**. Plates 10 mm long, 2.0 mm apart, paper 15 mm beyond; gravity included, drag left out (stated). Uncharged drops go to the gutter. A millimetre ruler on the paper stays in Blind, so q can be measured.
- Precipitator: **Particle diameter** (0.1 to 20 µm), **Conducting (soot) / Insulating, κ = 4**, **Field between wire and plates**, **Gas speed**, **Plate length L**, **Reset the counts**. Pauthenier charge, Stokes with Cunningham, Deutsch efficiency; counters give a measured efficiency.
Tests: test_electrostatics_at_work.cjs (6 groups). Notes Q1 to Q5, key in TeacherKeys. Catalog, map (7.6 usable), QR, thumbnails, course pages updated.

## Claude, 2026-10-23 16:50: §8.5 Inside the dielectric (capacitors), ready for a handout (GPT)

`demos/capacitors.html` gets a collapsible rail section **Inside the dielectric (molecular model)** (closed by default, One capacitor view). Controls: **Water: polar / Benzene: nonpolar** and **Field of the free charge E₀** (0, then 100 V/m to 3.2 MV/m on a log slider). A close view shows the plates' free charge, the bound charge on the dielectric's faces and field lines (8 in the gaps, N/κ rounded through the dielectric), with water dipoles jiggling about a slight bias or benzene electron clouds shifted. Readouts: κ, E = E₀/κ, E_i, free σ, bound σ_b = P, n, P/n, then ⟨cos θ⟩ (water, all of P credited to turning p₀ = 1.85 D) or the cloud shift P/(42ne) (benzene). The drawing's exaggeration factor is printed above the picture. Blind hides κ, E, E_i, σ_b, P/n and the alignment or shift. Nothing else in the demo changed; existing control names kept. Map: Vol 2 §8.5 usable with capacitors. New test group in test_capacitors.cjs (13 groups); notes Q7, key in TeacherKeys. GPT's capacitors handout can add a short molecular part if Steve wants it.

## Claude, 2026-10-23 17:20: §9.2 mapped, §9.6 Cold stage (resistivity), ready for a handout (GPT)

- **§9.2** reviewed: resistivity's **Inside the wire** already covers drift speed v_d = I/(nqA), current density J = nqv_d, electrons per second and transit time. Mapped `usable`; no code change. (OpenStax Example 9.3, 12 gauge at 20 A, is a calculation here: the demo's wires are thin lab gauges up to 1 A.)
- **§9.6** `demos/resistivity.html` gets a third view button **Cold stage** (also `?view=cold`) and a rail section **Cold stage**: samples **Copper / Aluminum / Tin / Lead / YBCO ceramic**, **Sample purity: residual resistance ratio R(293 K)/R(0)** (10 to 1000), **Cool down**, **Warm up**, **Clear the points**. The sample uses the bench's length, gauge and supply current; the readouts give T, V, R, R/R(293 K), ρ, T_c and the state. Two graphs (0 to 300 K and a close view near T_c) fill with simulated readings as it cools; the model curve and the T_c line are hidden in Blind (so are ρ and T_c). Model: Matthiessen plus Bloch–Grüneisen (Kittel Debye temperatures), T_c from OpenStax Table 9.3, sharp step; YBCO normal state linear and typical. Bench and Inside the wire unchanged. Tests: 11 groups. Notes Q7, key in TeacherKeys.

## Claude, 2026-10-23 18:00: §10.6 Household Wiring and Electrical Safety, ready for a handout (GPT)

`demos/household-wiring.html`, role `demo`, status `usable`. Setups **A lamp / Toaster and kettle / Short circuit / Worn cord, grounded case / No ground, dry hand / No ground, wet hand** (also `?setup=lamp|overload|short|grounded|dry|wet`). Controls: appliances **Lamp 100 W / Toaster 1200 W / Kettle 1500 W / Space heater 1500 W**; **14 gauge / 12 gauge**; breaker **15 A / 20 A / 30 A**; **Wire run, panel to outlet** (3 to 30 m); **GFCI outlet**; **Ground wire connected**; fault **No fault / Hot touches neutral / Hot touches the toaster case**; **Person touches the toaster case**; skin **Dry, 200 kΩ / Wet, 10.0 kΩ**; **Reset the breaker and GFCI**. The whole circuit (wires included) is solved by nodal analysis; numbers for skin, shock effects and the GFCI come from OpenStax §10.6 (dry 0.6 mA and wet 12 mA reproduce the book's example). Chosen values, stated on the page: fault contact 0.10 Ω, breaker delay 2 s, magnetic trip above 10 times the rating. Tests: test_household_wiring.cjs (6 groups). Notes Q1 to Q5, key in TeacherKeys.

## Claude, 2026-10-23 18:30: §11.1 Magnets and Oersted's compass (currents-fields), ready for a handout (GPT)

`demos/currents-fields.html` gets a collapsible rail section **Magnets and Oersted's compass** (closed by default; the six setups are unchanged). **Two bar magnets**: **Gap between the magnets**, **Turn magnet B around**, **Cut magnet B in half / Join magnet B again**; compass needles show the field direction; readouts give attraction or repulsion and the force relative to a 1 cm gap (Gilbert pole model, directions and ratios only). **Oersted's compass**: **Current in the wire (+ flows north)**, **Height of the wire above the needle h**, **Earth's horizontal field B_E**, **Predict first: hide B and the angle**; top view compass with degree ticks, a lightly damped needle settling at tan θ = B_wire/B_E. Tests: test_currents_fields_magnets.cjs (3 groups). Notes Q7, key in TeacherKeys. (notes/index.html also picks up the Household Wiring notes link.)

## Claude, 2026-10-23 19:20: §12.7 Magnetism in Matter, ready for a handout (GPT)

`demos/magnetism-in-matter.html`, role `demo`, status `usable`. Setups **Aluminum core / Bismuth core / Liquid oxygen / Floating water / Iron, Example 12.10 / Iron hysteresis loop** (also `?setup=al|bi|lox|water|iron|loop`). Controls: core **Empty / Aluminum / Tungsten / Liquid oxygen, 90 K / Copper / Water / Bismuth / Iron (model)** (OpenStax Table 12.2); **Current I** (−1 to +1 A; arrow keys on the picture too); **Turns per centimetre** (5 to 40); **Sweep the current**, **Demagnetize** (iron only), **Clear the trace**. Log scale bars compare B₀ and B; the plot shows B − B₀ against B₀ (slope χ) or, for iron, B against B₀ with the two OpenStax Figure 12.25 points marked. Readouts: B₀, B, B − B₀, χ and μ/μ₀; for diamagnets the |B dB/dz| = μ₀ρg/|χ| needed to float them (water 1352 T²/m); for iron B/B₀ − 1, M/M_s, the field left at I = 0 and the reverse current that brought B to zero. Iron is a Jiles and Atherton model (M_s from Kittel; a, k, α, c chosen and stated, fitted to Figure 12.25; Example 12.10 gives 1.41 T against the book's 1.4 T). Blind hides B, B − B₀, the plot and the core. Tests: test_magnetism_in_matter.cjs (6 groups). Notes Q1 to Q5, key in TeacherKeys.

## Claude, 2026-10-23 19:50: §13.4 Induced Electric Fields, ready for a handout (GPT)

A new demo rather than a faraday setup, since faraday already has seven setups. `demos/induced-electric-field.html`, role `demo`, status `usable`. Setups **Example 13.8, path outside / Path inside / Path off to the side / Path around part of it / Steady current / Alternating current** (also `?setup=outside|inside|aside|partial|steady|ac`). Controls: current **Decaying / Ramp up / Alternating / Steady**, **Current I₀**, **Decay constant α** (relabelled for ramp and AC), **Turns per metre n**, **Solenoid radius R**, **Pause/Play**, **Restart**; **Path radius**, **Path centre, distance from the axis** (or drag the path, or arrow keys), **Make the path a copper ring**. End view with E arrows, plots of I(t) and E(r). Readouts: t, I, B, dB/dt, Φ through the path, −dΦ/dt, ∮E·dl added up around the path, E on the path. Default numbers: R = 2.0 cm, n = 2000/m, I = (2.0 A)e^(−200t), path 6.0 cm: E = 3.35 mV/m. Tests: test_induced_electric_field.cjs (5 groups). Notes Q1 to Q5, key in TeacherKeys.

## Claude, 2026-10-23 20:40: §13.7 Induction at Work, ready for a handout (GPT)

A new demo, from the section's own list of applications. `demos/induction-at-work.html`, role `demo`, status `usable`. Setups **Shake flashlight / Flashlight, light on / Graphics tablet / Tablet, pen held still / Card reader / Card, uneven swipe** (also `?setup=flash|flashled|tablet|still|card|uneven`).
- Flashlight: **Shake / Stop shaking**, **Empty the capacitor**, **Shakes per second** (1 to 6 Hz), **Stroke, centre to end** (1 to 5 cm), capacitor **0.10 F / 0.47 F**, **Light switched on**, **Fast forward, 10 times**. Plot of EMF and capacitor voltage; readouts include the full energy account (hand, coil heat, diodes, light, capacitor).
- Tablet: drag the pen (or arrow keys), **Draw a circle**, **Clear the drawing**, **Show the pen's true path**. Wires glow with their EMF; bar plot of EMF across x with the tablet's fitted position; a still pen gives no EMF.
- Card: **Number on the stripe** (up to 6 digits), **Swipe speed** (0.1 to 1.5 m/s), **Uneven swipe**, **Swipe the card**. Track 2 F2F stripe; pulses, decoded bits and the number read.
Chosen values (magnets, coil, diodes, LED, head resolution, tablet threshold) are stated on the page. Tests: test_induction_at_work.cjs (5 groups). Notes Q1 to Q5, key in TeacherKeys.

## Claude, 2026-10-23 21:30: Vol 3 §1.1 and §1.6 Huygens's Principle, ready for a handout (GPT)

One new demo covers both sections. `demos/huygens.html`, role `demo`, status `usable`. Setups **Light in matter: a race / Huygens's construction / Reflection / Refraction into glass / From glass into air / Sound through a doorway** (also `?setup=race|construct|reflect|refract|out|door`). View buttons **Race / Construction / Boundary / Opening**, **Pause/Play**, **Restart**. Race: **Length of each lane** (seven Table 1.1 lanes, t = nL/c). Construction: **Straight front / Curved front**, **Wavelets along the front**. Boundary: **Upper medium**, **Lower medium** (Table 1.1 or Mirror), **Angle of incidence θ₁** (arrow keys too), **Show the reflected wave**, **Wavelets on every front**. Opening: **Width of the opening, in wavelengths**, **Show the wavelet sources**. Blind keeps the wavelets but hides the new fronts, θ₂ and the race times. §1.1 is mapped to this demo; Foucault's method stays with speed-of-light (course: later). Tests: test_huygens.cjs (4 groups). Notes Q1 to Q5, key in TeacherKeys.

## Claude, 2026-10-23 21:55: Vol 3 §1.5 Dispersion (optics-bench), ready for a handout (GPT)

`demos/optics-bench.html`: every glass element (Glass block, Prism, Semicircle) gets material chips **Adjustable n / Crown / Flint / Fused silica / Water / Diamond** at the top of its editor. Adjustable n keeps the old behaviour (the **Refractive index n** slider and the exaggerated dispersion), so existing setups and handouts are unchanged. The real materials use published Sellmeier formulas (Schott N-BK7 and F2, Malitson fused silica, Daimon and Masumura water, Peter diamond); the editor lists n at 400, 589 and 700 nm and, for a prism, the deviation of 400 nm and 700 nm light at minimum deviation and their spread. Monochrome rays use n at 589 nm for real materials. Use the **Prism** setup (white light) and click the prism. No presets added. Tests: test_optics_bench_dispersion.cjs (3 groups). Notes Q9, key in TeacherKeys.

## Claude, 2026-10-23 22:30: Vol 3 §2.5 The Eye, ready for a handout (GPT)

New demo `demos/the-eye.html` (the optics bench already has 9 setups). Setups: **Normal eye, near point / Nearsighted (Example 2.8) / Nearsighted, with glasses / Farsighted (Example 2.9) / Farsighted, with glasses / Older eye, reading**. Controls: **Eye** (Normal, Nearsighted, Farsighted, Older), **Object distance from the eye** (log scale, 10 cm to 10 m, then far away; arrow keys move it), **Wear glasses**, **Power of the glasses** (−8 to +8 D), **Prescribe for distance**, **Prescribe for reading at 25 cm**, Blind, Reduce motion. Readouts: Seen (sharp or blurred, with the blur spot), Near point, Far point, Eye's range of power, Power it uses now, Image behind the lens, For distance, For reading at 25 cm. Model: one thin lens with the retina 1.80 cm behind it (Example 2.7), glasses 1.50 cm in front; Examples 2.8 (−3.51 D) and 2.9 (+3.24 D) are reproduced; the older eye (near point 2.00 m, 0.5 D of accommodation) needs +3.75 D. Tests: test_the_eye.cjs (5 groups). Notes Q1 to Q6, key in TeacherKeys. Map: Vol 3 §2.5 usable.

## Claude, 2026-10-23 17:50: worksheet links named after their topic (Steve's request)

Every generic **Student handout** and **Open student activity** link on the course pages now names what the handout covers, in one pattern: **Worksheet: <topic>**, or **Worksheet <n>: <topic>** when a demo has several (numbered in the map's `handouts` order). The one reading is **Reading: Electricity Sources**. Labels live in `HANDOUT_TOPIC` in `tools/courses.py`; a handout added to the map needs an entry there (the build stops with a KeyError otherwise). Circuits: **Worksheet 1: Kirchhoff's Rules**, **2: RC Time Constant**, **3: RLC Oscillations**, **4: AC Resonance**. `demos/transient-circuits.html` links the same two worksheets with their circuits numbers (and now to the .html pages, not the .md files). Only link labels changed; the handouts are untouched.

**GPT, for the handouts (your files, not edited):** the four circuits handouts could show their number so students can match the link, for example "Worksheet 1: Current, Voltage and Kirchhoff's Rules". Several handouts still open with the line "Student activity · Physics I ..."; consider "Worksheet · Physics I ..." to match. Steve's call on both.

## Claude, 2026-10-23 18:00: Interactive worksheets, Physics I (Steve's request)

Steve wants students to work directly in the worksheets and export from there. First step, Physics I only, and **the demos are not touched** (their Export CSV buttons stay). New `curriculum/labs/worksheet.js`, loaded from `_includes/head-custom.html` before MathJax. It acts only on the worksheets in its `ENABLED` list (the 17 Physics I handouts on physics-1.html); every other Markdown page is unchanged. No handout Markdown was edited.
- A **Your worksheet** box before Goal: Name, Lab partners, Section, Date, and the buttons **Print or save as PDF**, **Download data tables (CSV)**, **Save to a file**, **Open a saved file**, **Clear my answers**. The buttons repeat under What to hand in.
- Data tables: every empty cell becomes a text field (filled cells such as the EIA numbers stay as printed); **Add a row**, **Remove the last added row**, **Add another copy of this table** (with a label, for another run), and a **Settings and notes** box under each table.
- Answer boxes under each numbered item in Before the lab / Before the activity, Analysis and Questions, and one under Uncertainty. Procedure gets none.
- Saves in the browser's localStorage as the student types (key `vd-worksheet:<name>`). If a handout changes later, answers are matched by question text, then by number; anything that no longer fits is kept in a yellow box rather than dropped.
- Print style shows the typed text in full and hides the buttons. Checked in Chromium on a local Jekyll build with the Primer theme: all 17 pages, desktop and 360 px (no sideways scroll), print to PDF, reload, CSV, save file and reopen.

**GPT, for the handouts (your files, not edited):** to enable a Physics II worksheet later, add its file name to `ENABLED` in `worksheet.js`. Keep the section headings (Before the lab, Analysis, Uncertainty, Questions) as they are: the script finds the answer spots by them.

## Claude, 2026-10-23 18:00: site was not publishing since 14:15 (fixed)

Every GitHub Pages build since commit 1ae7d71 failed, so nothing pushed after 14:01 today reached the live site. Cause: GitHub Pages runs Liquid over every Markdown file, this one included, and a log line here contained a brace followed by a percent sign, which Liquid reads as the start of a tag. Reworded that line. **Both of us: never write a brace followed by % or a double brace in any .md file in this repo** (log entries, handouts, notes sources); put such TeX in words or reword it.

## Claude, 2026-10-23 18:15: Export to worksheet, pendulum pilot (Steve's request)

Steve wants a demo's captured readings to go straight into the worksheet's Data table, with the button named for that. Pilot on the pendulum only; other demos wait for Steve's verdict.
- `demos/pendulum.html`: the **Export CSV** button is now **Export to worksheet** (same id `exportCsv`, physics unchanged, tests pass). It writes the readings (columns and rows from `readingsCSV`, the CSV text, and a note naming the gravity setting) to localStorage key `vd-handoff:pendulum`, then shows **Open the worksheet**. **Clear** starts a new series. If the browser blocks storage, it downloads the CSV as before.
- `curriculum/labs/worksheet.js`: a `FROM_DEMO` map (worksheet column to demo column). The worksheet shows a blue box above the Data table, at once if it is open in another tab, otherwise when it is next opened: **Put these readings in my table** (or **Update my table with these readings** for the same series), **Download them as CSV**, **Not now**. The same series updates its rows in place without touching columns the demo does not fill (Observation) or the notes; a new series after Clear goes into a new copy of the table. The table's first copy is used when its demo columns are still empty.
- `curriculum/labs/students/pendulum.md` (GPT's file; Steve asked me to make the handout match): two sentences now name **Export to worksheet** and say each scan gets its own copy of the table, instead of separate CSV files.
To add another demo: in the demo, send `{demo, series, sent, columns, rows, note, csv, csvName}` to `vd-handoff:<worksheet>`; in `worksheet.js`, add a `FROM_DEMO` entry.

## Claude, 2026-10-23 18:30: Export to worksheet on all Physics I demos (Steve's request)

After the pendulum pilot, Steve asked for it everywhere in Physics I. **Export CSV** is now **Export to worksheet** in collisions, fluids, forces, kepler-orbits, motion-graphs, projectile-drag, rotational-dynamics, springs, stress-strain and viscometer (same button ids; physics and tests unchanged). Each demo has a small `toWorksheet` helper next to its export handler: it parses the demo's own CSV text, writes `{demo, series, sent, columns, rows, meta, note, csv, csvName}` to `vd-handoff:<demo>`, and **Clear** starts a new series. `worksheet.js` `FROM_DEMO` maps each worksheet column to a CSV column, a header value (`#gate_distance_m`, `#drop_height_m`, `#wire_length_m`) or a small function (fluids block volume = L³ from its edge; joined cells such as "glycerol / steel"). Columns the demo cannot fill (Held/slipped, Observation, K, Kv, Re, estimated slope, unloaded ΔL) are left for the student. Every value is the demo's, already in the worksheet column's SI units.
- Handouts (GPT's files, at Steve's request): every **Export CSV** mention in these 10 Physics I worksheets now names **Export to worksheet**; "separate CSV files" became separate copies of the data table where the handout meant one series per file.
- Teaching notes for springs, projectile-drag, kepler-orbits, fluids and collisions name the new button; notes rebuilt (notes/index.html now also links the existing The Eye notes).
- Impulse, potential-curves and rotation have no capture or export, so their worksheets get nothing from the demo yet. Physics II demos keep Export CSV.

## Claude, 2026-10-23 18:45: live graph pilot on the pendulum worksheet (Steve's request)

`worksheet.js` has a `PLOTS` config. For pendulum, under each copy of the Data table: T² against L from the student's cells (T² column, or T squared when T² is blank), a least squares line with a free intercept and equal weights, a residual plot, slope and intercept with standard errors (n − 2), and g = 4π²/slope with its uncertainty from the slope's. If every L is the same (an amplitude or mass scan), it says there is no slope to fit. Drawn as inline SVG at the page width; prints with the page. Pilot only: Steve looks at it before graphs go on other worksheets. A new graph needs only a `PLOTS` entry (columns, names, units, the result from the slope).

## Claude, 2026-10-23 18:50: worksheet graph changes after Steve's review

- The student now chooses the columns for both axes (two dropdowns above the graph, saved with the worksheet); nothing is plotted until both are chosen. The graph shows only the points, the line, residuals, slope and intercept with standard errors: g = 4π²/slope was removed so the analysis stays the student's. `PLOTS` is replaced by `GRAPHS`, a list of worksheets that get the graph; no per worksheet settings, since the axes come from the table's own headings (name and unit split at the last parentheses).
- The first data table can be removed once a copy exists (**Remove this table**, clears what was in it) and brought back (**Bring back the first table**). Removed tables are left out of the CSV and the print.

## Claude, 2026-10-23 18:55: graphs on all Physics I worksheets

Steve approved the student chosen axis graph, so `GRAPHS` now covers all 17 Physics I worksheets (`PHYSICS_I` list; `ENABLED` starts from it, so the Physics II thread can append its own). Compound units in the slope are bracketed: (m/s)/kg, AU/(solar masses). Checked every Physics I worksheet with a test line, and at 360 px.
## Claude, 2026-10-23 19:00: Physics II worksheets interactive, with Export to worksheet (Steve's request)

The Physics I treatment now covers the 11 Physics II worksheets on physics-2.html. `worksheet.js` has a block marked `==PHYSICS II START==` / `==PHYSICS II END==`: it adds the 11 slugs to `ENABLED` and their `FROM_DEMO` maps. The graph Steve approved (student picks both axes; fit and residuals, nothing derived) is on all 11 too: `GRAPHS.push(...PHYSICS_II)` just after `GRAPHS`.
- Demos: the readings export is now **Export to worksheet** (same ids, physics unchanged, all demo tests pass) in capacitors, coulomb-sandbox, gauss-law, magnetic-force, resistivity, wire-force, faraday (**Export notebook CSV** became **Export to worksheet**; **Export current run CSV** stays a download) and circuits (the three readings tables; **Export scope CSV** stays a download). Each has the same `toWorksheet` helper as Physics I; **Clear** starts a new series.
- Circuits feeds four worksheets: DC readings go to dc-circuits (one worksheet row for each meter of each reading), AC readings to ac-circuits, and In time readings to rc-circuits or rlc-transients: the worksheet whose link opened the page (#rc or #transients), otherwise the one the current setup belongs to. The status line names the worksheet. A visible status line was added under the AC readings buttons.
- Maps fill only what the demo exports: part values and setups go in the first column or the table notes, Coulomb configurations list their charges, Gauss rows give surface, charges and quadrature status, Faraday values are rounded to 6 significant figures as its notebook shows them. Left for the student: Coulomb r, Gauss E, DC power and loop labels, wire-force Observation; magnetic-force Hall readings are not captured by the demo, so they stay hand entered.
- Tested in Chromium on a local Jekyll build: each of the 11 worksheets received real captured readings and filled correctly; demos at 360 px and 400 px dark have no sideways scroll.
- Handouts (GPT's files, at Steve's request): every readings **Export CSV** mention in the 11 Physics II worksheets now names **Export to worksheet**. Also fixed a rendering bug: in magnetic-force and acoustic-levitation the "Using the virtual apparatus" paragraph rendered as a one cell table because of an unescaped pipe in **Field |B| at the strip** and **Pressure |p|**; the pipes are escaped now. **GPT:** a pipe in handout prose needs a backslash.
- Teaching notes for circuits, capacitors, coulomb-sandbox and magnetic-force name the new button; notes rebuilt.
- Not changed: transient-circuits.html (not on any course page) keeps Export CSV.

## Claude, 2026-10-23 19:20: Linear Density of a String, the first PHYS 202 lab, ready for a handout (GPT)

Steve's first Physics II lab: measure a string's μ from its resonances. A new demo rather than a mode of standing-waves, which already has five views and six setups (the house limit); it reuses that demo's string formulas and the household-wiring skeleton. `demos/string-density.html`, role `lab`, status `needs-handout`.
- Setups **Sweep the frequency, 200 g / Add masses at 60 Hz / Third harmonic / Unknown string, sweep / Unknown string, add masses** (also `?setup=sweep|masses|third|unknownf|unknownm`).
- Controls: **Method** **Sweep frequency, fixed mass** / **Add masses, fixed frequency**; **String A / String B / String C / Unknown string**, **New unknown string**; **Length L, vibrator to pulley** (0.50 to 2.00 m); **Driver frequency f** (5 to 200 Hz) with **−1 Hz**, **−0.1 Hz**, **+0.1 Hz**, **+1 Hz**; **Add 1 g** to **Add 500 g**, **Take off the last mass**, **Take off all masses** (the 50 g hanger always hangs and counts in m); **Pause/Play**; **Clear the trace**; **Record this reading**, **Export to worksheet**, **Clear the readings**; Plot **f against n** / **T against 1/n²**; **Blind: hide μ and the predictions**, **Reduce motion**. Arrow keys on the picture: left and right change f by 0.1 Hz (Shift 1 Hz), up adds 1 g, down takes off the last mass.
- Readouts: hanging mass m (with hanger), T = mg, f, L, largest amplitude, loops seen, and (hidden in Blind and for the unknown string) μ, v and the nearest resonance. **Response** plots the largest amplitude against f or m for every value tried. The fit gives slope and intercept with standard errors and residuals, and μ = T/(4L² · slope²) or slope/(4L²f²) (hidden in Blind and for the unknown string).
- Model: exact steady state of the damped wave equation, Y = a sin(κ(L − x))/sin(κL), vibrator end moving 0.50 mm, every resonance 0.60 Hz wide (both chosen), T = mg with g = 9.80 m/s², frictionless pulley; μ of A, B, C 0.40, 1.20, 3.60 g/m (chosen), unknown 0.50 to 3.00 g/m. All stated on the page.
- Worksheet: `worksheet.js` gets `string-density` in the Physics II block with a `FROM_DEMO` map. **GPT, for the handout** `curriculum/labs/students/string-density.md`: make the first data table's columns, in order, Trial, L (m), m (kg), T (N), f (Hz), n, 1/n², Observation, so Export to worksheet fills the first seven. Each series (one mass, or one frequency) becomes its own copy of the table after **Clear the readings**. Tell students to use g = 9.80 m/s² and that m includes the 50 g hanger. Until the handout exists the demo offers the CSV instead of the worksheet link. A `HANDOUT_TOPIC` entry in tools/courses.py is needed when the map gets `handouts`.
- Map: Physics II gets a first unit **First lab: waves on a string** (Vol 1 §16.3 and §16.6, now physics-2, required), with string-density and standing-waves (standing-waves keeps `later` too). Catalog: Waves and sound. Tests: test_string_density.cjs (6 groups). Notes Q1 to Q6, key in TeacherKeys. QR and thumbnails done.

## 2026-10-23 Claude: worksheet print tweak

- `curriculum/labs/worksheet.js`: the "Choose a column for each axis" note under a graph with no axes chosen no longer prints. Found while making instructor keys (those live in TeacherKeys, not here).

## Claude, 2026-10-23 19:25: Force table lab (Vol 1 §2.3 and §5.1), ready for a handout (GPT)

Steve asked for the classic force table lab. No existing demo covered it (Forces and Friction has one hanging mass on a ramp, Static Equilibrium balances the support forces and torques on a rigid object), so it is a sixth setup in `demos/vectors.html`: **Force table** (also `?setup=table`). Mapped to Vol 1 §2.3 Algebra of Vectors (note) and added to §5.1 Forces.
- Controls: **Strings on the table** (2, 3, 4); for each string **Mass on string N, with its hanger** (0.010 to 0.500 kg in 1 g steps) and **Angle of string N** (0 to 359° in 1° steps, counterclockwise from the 0° mark); drag a pulley around the rim, or keys 1 to 4 then arrows (left and right turn it by 1°, up and down change the mass by 1 g, Shift for 10). **Pulley friction, up to the weight of** (0 to 5 g, default 1 g), **Show the forces as arrows**, **Show the sum tip to tail**, **Set string N to the equilibrant**. Readouts: Ring (centered or off center), each F = mg with F_x and F_y, Net ΣF, Net force on the ring and its direction, Equilibrant of strings 1 to N−1 (newtons, angle, and the mass that weighs that much). Record: **Record this setup**, **Export to worksheet**, **Clear**. Blind hides every force, the net force and the equilibrant; the ring still shows whether it is centered.
- Default: 0.150 kg at 20°, 0.200 kg at 110°, 0.100 kg at 230°. The first two are 90° apart, so the equilibrant is 0.250 kg at 253.1°. With 1 g of pulley friction the ring stays centered from 0.249 to 0.251 kg at 253°, and only at 253° for 0.250 kg.
- Model, stated on the page: tension mg with g = 9.81 m/s², massless strings, every string taken to point at the pin, pulley friction as each tension anywhere in mg ± f (f chosen, not measured); centered exactly when some tensions in those ranges sum to zero. Tests: test_vectors.cjs now 7 groups (two new, including a brute force check of the friction test). Notes Q5 and Q6, key in TeacherKeys.
- **Export to worksheet** writes `vd-handoff:force-table` (CSV columns trial, strings, m1_kg, theta1_deg, m2_kg, theta2_deg, m3_kg, theta3_deg, m4_kg, theta4_deg, ring; header g and the pulley friction). `worksheet.js` has `force-table` in PHYSICS_I and a FROM_DEMO entry that expects the handout's first data table to have these columns in this order: Trial | m₁ (kg) | θ₁ (°) | m₂ (kg) | θ₂ (°) | m₃ (kg) | θ₃ (°) | m₄ (kg) | θ₄ (°) | Ring centered? (more columns may follow). The demo links **Open the worksheet** only once `curriculum/labs/students/force-table.html` exists.

**GPT, for the handout:** `curriculum/labs/students/force-table.md`, with the data table above, then add it to the vectors entry's `handouts` in the map and a `HANDOUT_TOPIC` label in `tools/courses.py` (I suggest "Worksheet: Force Table"). The classic flow fits: find the equilibrant of two given forces graphically and by components, check it on the table, find the range that keeps the ring centered, then a four string trial.

## 2026-10-23 Claude: worksheet graph numbers

- `curriculum/labs/worksheet.js` graph results: slope and intercept switch to powers of ten below 0.001 and from 100000 up, such as (3.896 ± 0.019) × 10⁻¹¹ F, so tiny SI values (Physics II) read properly. When the points lie exactly on the line (deterministic data), the result says "± 0 (the points lie exactly on the line)" instead of asking for more points. A graph with no axes chosen no longer prints at all.
- Graph units: a table heading that names two quantities with different units, such as "Pressure (Pa) or head (m)" in fluids, now gives no unit on the axis or slope instead of borrowing the last one (it printed "m/m" for pressure against depth).

## Claude, 2026-10-23 19:25: controls in the scene, piloted on string-density (Steve approved)

Steve wants students to work the apparatus itself instead of a crowded sidebar. `demos/string-density.html` now has:
- **Function generator** on a shelf over the bottom left of the picture, its cable drawn to the vibrator: display, **Coarse** knob (1 Hz a click) and **Fine** knob (0.1 Hz a click), and the **−1 Hz**, **+1 Hz**, **−0.1 Hz**, **+0.1 Hz** buttons. The knobs are sliders labelled **Driver frequency f** (arrows, Page Up/Down, Home/End, mouse wheel, or turn by dragging).
- **Slotted masses** tray: click a mass, or drag it onto the hanger (the hanger is outlined while dragging). Buttons keep the names **Add 1 g** to **Add 500 g** for screen readers; **Take off the last mass** and **Take off all masses** are in the tray; clicking the stack on the hanger takes off the top mass.
- **Length L, vibrator to pulley** is now the vibrator itself: drag it along the table, or focus it and use the arrows (0.01 m), Page Up/Down (0.1 m), Home/End.
- The apparatus scales with the picture. The sidebar keeps Setups, Method, String, Readouts, Response, Readings and Lab. Physics, CSV and Export to worksheet unchanged; all 6 test groups pass.
- At 820 px and under the shelf sits under the picture instead of over it.

**GPT, for the string-density handout:** say "turn the Coarse and Fine knobs on the function generator", "drag masses from the tray onto the hanger" and "drag the vibrator to set L"; the old slider names no longer appear on screen.

Reusable pattern for the other Physics I and II demos (only where a demo has room for it, per Steve): a `.shelf` of HTML instruments over the canvas that drops below it on phones, a knob with role slider whose mark angle is derived from the value, a drag and drop tray with a drop zone kept in a `GEO` object filled by `draw()`, apparatus parts dragged directly as role slider elements positioned over the canvas, and an apparatus scale that grows with the picture.

## Claude, 2026-10-23: pendulum controls in the scene (layout redesign, Steve approved pushing)

`demos/pendulum.html`: dragging the bob now sets both the **Release angle θ₀** (sideways) and the **Length L (pivot to bob centre, or rod length)** (in or out, 0.01 m steps), and the **Mass** comes from a rack of bobs on the bench (50 g, 100 g, 200 g, 500 g, 1 kg, 2 kg; the slider allowed any 0.05 kg step, the presets use 0.2, 0.5 and 2 kg). The three sliders left the sidebar. Keys on the picture: left and right θ₀ by 1°, up and down L by 0.01 m (Shift 0.10 m). The picture shows L, θ₀ and m. On phones the rack sits under the picture. Physics, capture and Export to worksheet unchanged; 4 test groups pass.
**GPT:** the pendulum handout still reads correctly (the names are on the picture), but "set" now means drag the bob or use the arrow keys, and Mass is picked from the rack.

## Claude, 2026-10-23: springs sidebar tidied (layout redesign)

Springs already had its controls on the picture (the k, m and b grips), so only the sidebar changed: **Time and plots** and **Display** are folded behind their headings (click to open), and seven long fixed hints sit behind **More about this**. Every control keeps its name and id; the sidebar is about a third shorter. Reusable: a `details.fold` section and a `details.more` hint, same CSS in each demo.

## Claude, 2026-10-23: stress-strain load from a tray of slotted masses (layout redesign)

`demos/stress-strain.html`: the **Hanging mass** slider is replaced by a tray of slotted masses over the bottom of the wire's column (100 g, 200 g, 500 g, 1 kg, 2 kg, 5 kg, 10 kg, 20 kg; under the picture on phones). Click one to hang it; **Take off the last mass** removes the last one hung; **Take all the load off** and **New wire** are unchanged, and up and down arrows on the picture still add or take off 0.1 kg (Shift 1 kg). The most the hanger takes is still 1.15 × the breaking load. Loading still follows the curve in small steps and unloading a straight line, so the physics is unchanged; 6 test groups pass. **GPT:** in the stress-strain handout, "set **Hanging mass**" now means hang masses from the tray.

## 2026-10-23 Claude: Physics I worksheet keys (private)

- Filled answer keys for all 17 Physics I worksheets are in the private TeacherKeys repo, `worksheet-keys/` (see its README). Nothing from them is in this repo. Eleven use real demo runs sent with Export to worksheet; the scripts that drive the demos are there too, and the Physics II thread uses the same tools.

## Claude, 2026-10-23: rotational-dynamics hanging mass from slotted masses (layout redesign)

`demos/rotational-dynamics.html`: the **Hanging mass m** slider is replaced by slotted masses in the empty top corner of the side view (5, 10, 20, 50 and 100 g; under the picture on phones), with **Take off the last mass** and **Take off all masses**. m is a 5 g hanger (the old slider's least value) plus what hangs on it, at most 200 g (the old maximum), so every value the slider allowed can still be set in 5 g steps; it starts at hanger + 20 + 20 + 5 = 50 g as before. On the picture the up arrow hangs 5 g and the down arrow takes off the last mass. Physics unchanged; 4 test groups pass. **GPT:** the rotational dynamics handout's "set **Hanging mass m**" now means hang slotted masses.

## Claude, 2026-10-23: viscometer box of balls (layout redesign)

`demos/viscometer.html`: the Ball section left the sidebar for a box of balls on the bench (under the picture on phones): the **Steel / Glass / Nylon** choice and every **Ball diameter d** from 1.0 to 10.0 mm in 0.5 mm steps (the old slider's values), each drawn at 2.4 px per mm; click one to pick the next ball. Each button's label is "Ball diameter d 6.5 mm" and so on. Liquid, tube and the rest unchanged; physics unchanged, 6 test groups pass. **GPT:** in the viscometer handout, "set **Ball diameter d**" now means pick that ball from the box.
## Claude, 2026-10-23 19:45: Acoustics module (Steve asked)

- New course page `acoustics.html` (tile on the home page after Physics II): units **Waves** (Vol 1 ch 16), **Sound** (Vol 1 ch 17) and **Beyond the textbook** (Chladni Plates, Acoustic Levitation, which have no textbook section). standing-waves, resonators, timbre, doppler, chladni and acoustic-levitation left Misc. (36 demos now); standing-waves stays in Physics II as well. Demo URLs unchanged.
- Map: a course `acoustics` with units of requirement `module`; ch 16 and 17 sections now have course acoustics. 16.3 and 16.6 keep their Physics II unit and name the acoustics one in a new `unit_in` field; a unit can list demos with no section in `demos`. Policy note added; test_textbook_map.cjs updated for both. The resonators, timbre and acoustic-levitation handouts are now linked from the map (labels Speed of Sound, Timbre and Harmonics, Acoustic Levitation in HANDOUT_TOPIC).
- The Physics II tile now counts only Physics II demos (24, as its page says; it counted e-over-m, which sits in a Physics II section but is not in the course).

## Claude, 2026-10-23: resistivity supply knobs (layout redesign)

`demos/resistivity.html`: the three sliders left the sidebar. **Length between the clips L** is set by dragging the sliding clip (already possible) or the left and right arrows on the picture; **Supply current I** (0.05 A a click, 0.05 to 1 A) and **Wire temperature** (5 °C a click, 0 to 200 °C) are knobs on a supply panel that sits where the supply was drawn on the bench, with green readouts (arrow keys, Page Up/Down, Home/End, mouse wheel). The Inside the wire view hides the panel and gets **Current −0.05 A** / **Current +0.05 A** buttons in its own section; Cold stage is unchanged. Same values as the sliders; physics unchanged, 11 test groups pass. **GPT:** in the resistivity handout, "set **Supply current I**" and "**Wire temperature**" now mean turn the supply's knobs, and L means drag the clip.

## Claude, 2026-10-23: wire-force knob panel, and a reusable knob helper (layout redesign)

`demos/wire-force.html`: **Current I**, **Length of wire in the field L**, **Angle between the wire and B**, **Turns N** and **Magnet field B** moved from the sidebar to a knob panel at the bottom of the picture (under it on phones), each with its label and a green readout; the same rows still show and hide with the setup (Turns N only for the loop, B hidden for the mystery magnet). Same ranges and steps; 5 test groups pass.
Reusable: the panel is plain markup (`<div class="instr">` holding the demo's own `label`, range `input` and `output`), and a small `vd-knobs` block (CSS plus about 20 lines of JS, copied as is) turns every range inside `.instr` into a knob: one step per 15° of turn, arrows, Page Up/Down, Home/End, mouse wheel. The range input stays the source of truth (the knob dispatches its `input` event), so a demo's own code does not change. **GPT:** in the wire-force handout, "set" these five now means turn their knobs.

## Claude, 2026-10-23: forces knob panel (layout redesign)

`demos/forces.html`: the seven sliders (**Ramp angle θ**, **Block mass m**, **Static friction μs**, **Kinetic friction μk**, **Applied force F**, **Angle of F above the surface**, **Hanging mass m₂ (0 = none)**) are knobs on a panel over the top of the scene, using the vd-knobs block from wire-force (a `compact` size added); the ramp is drawn below the panel, so nothing hides it even at 60°. The Mystery surface still hides the two friction knobs. Physics unchanged; 8 test groups pass. **GPT:** "set" these in the forces handout now means turn their knobs.

## Claude, 2026-10-23: polarization sidebar tidied (layout redesign)

`demos/polarization.html` already turns each element by dragging its disk on the picture, and the picture is full, so only the sidebar changed: the **Model** section is folded behind its heading and one long hint sits behind **More about this**. No control changed. (There is no validation test for this demo.)

## Claude, 2026-10-23: capacitors sidebar tidied (layout redesign)

`demos/capacitors.html` already had grips on the picture for d, A, x/s and the battery voltage (and keys), so the duplicate sliders **Battery voltage Vb**, **Separation d**, **Plate area A** and **Inserted x/s** now sit folded under **Exact values** in the Plates section, after a short line saying which grip sets what. **Display** is folded and six long hints sit behind **More about this**. Every control keeps its id and name; the sidebar is a third shorter; 13 test groups pass.
