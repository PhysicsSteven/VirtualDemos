# Working together on VirtualDemos

Two AI assistants (Claude and GPT) work on this repo for Steve. Neither can see the other's chats; this file is how we share context. **Read it before starting work, and update the "Who is doing what" table when you start or finish something.**

Steve is the owner and makes the calls. When this file and Steve's latest instruction disagree, follow Steve.

## Who is doing what

| Area | Owner | Where | Status |
|---|---|---|---|
| Demo visuals and interaction (apparatus drawings, 3D views, layout, look and feel) | Claude | `demos/*.html` on `main` | Ongoing. Done so far: star-slice, projectile-drag, rutherford, faraday, optics-bench, double-slit, photoelectric, spectra, rc-circuits, magnetic-force, circuit-builder, capacitors, black-holes. In progress: gauss-law, hydrogen-orbitals. |
| New demos | Claude | `demos/` on `main` | Recent: gamma-spectroscopy, diffraction-grating |
| Classroom teaching notes and answer keys | Claude | `notes/`, `keys/` on `main` | All 50 older demos done; gamma-spectroscopy and diffraction-grating still need notes |
| Full virtual labs, physics validation, regression tests, CI | GPT | `curriculum/`, `.github/`, `demos/transient-circuits.html` on `curriculum/virtual-lab-starter-kits` | Ongoing (RLC transients, then Gauss, Faraday, capacitors, AC) |

### Editing a demo the other one owns

Both of us will sometimes need to change the same demo file: Claude for visuals, GPT for physics fixes, measurement tools or CSV export. To avoid overwriting each other:

1. **Before editing any `demos/*.html`, pull the latest `main`** and start from it. Demo files change often (visual passes rewrite large parts).
2. **Check the table.** If the other assistant has that demo "in progress", don't edit it; note what you need in the "Requests" section below instead.
3. **Keep changes minimal and local.** Physics and measurement changes go in the physics/logic code; drawing changes go in the drawing code. Don't reformat or reorganize code you aren't changing.
4. **Never rename** a preset, control label, readout or keyboard key without updating everything that refers to it (`notes/src/<demo>.md`, `keys/answers/<demo>.md`, `curriculum/labs/*/<demo>.md`) in the same change, and say so in the commit message.
5. **Run the demo's existing tests** (and `node --check` on its extracted script) after any change.

### Requests between assistants

Add a line when you need the other assistant to do something, and remove it when it's done.

- (none yet)

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
| `keys/key/<demo>.html` | `keys/answers/<demo>.md` | `python3 tools/notes.py <demo> --keys <keys folder>` |
| `thumbs/<demo>-light.webp`, `-dark.webp` | the demo itself | `python3 tools/thumbs.py <demo>` (add `--three <path>` for three.js demos) |

## Where things live

- `demos/` — the demos (one HTML file each).
- `index.html` — the public catalog: cards by subject, with demo counts.
- `notes/` — short classroom teaching notes per demo (goals, how to run it in class, questions, misconceptions). Answers are in `keys/`.
- `keys/` — answer keys for `notes/`. Not linked from anywhere, but the repo is currently public; Steve plans to make it private.
- `curriculum/` — GPT's full virtual labs (student handouts, instructor keys, rubrics, validation records). These are longer lab assignments; `notes/` are the short versions for running a demo in lecture.
- `tools/` — build and maintenance scripts (thumbnails, QR codes, notes, Star Slice).
- `CONTRIBUTING.md` — detailed house style for demos.

## Open questions for Steve

Collected here so neither assistant has to keep asking.

- Proton NMR virtual lab: needs the make and model (or a photo) of the lab's unit.
- White Dwarf Cooling: the simple envelope crystallizes a 0.6 M_sun star near 3,900 K instead of about 6,000 K. Keep, or find a better published envelope relation?
- Fluids: cap the extreme Venturi settings?
- Standing Waves: add a levitation preset (would replace "Pluck at the middle")?
