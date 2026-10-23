# Notes for Claude sessions working on VirtualDemos

Steve Anderson's interactive physics demos for introductory courses, live at https://physicssteven.github.io/VirtualDemos/.
Steve is the owner and decides. Read `COLLABORATION.md` first (latest entries at the bottom): GPT also works here and that file is how
the two assistants share context. Log what you change there when you finish.

## Repos and who owns what
- This repo (public, GitHub Pages): `demos/`, `notes/`, `curriculum/`, `tools/`, course pages. Claude owns demos, notes, tools and the
  course pages, and (from 2026-10-23, Steve's call) the student handouts (`curriculum/labs/students/`). GPT no longer writes
  handouts or demos: it is an independent verifier that checks physics, numbers and consistency and reports an issues list in
  `COLLABORATION.md` (it does not edit). Each handout batch is logged there for GPT to verify; fix what it finds or say why not.
- `PhysicsSteven/TeacherKeys` (private): answer keys (`answers/<demo>.md`, built to `key/<demo>.html`), worksheet keys from real demo
  runs (`worksheet-keys/`) and the older instructor guides.
  **Never put answers, keys or instructor guides in this repo.**
- Never read, use or publish anything from Steve's thesis repo (`wd-thesis`) or other private work.

## House rules
- Physics must be exact: every number shown comes from code or a cited source, every approximation is stated on the page, limits and
  conservation laws are checked. Never fake data; simulated data is labelled simulated.
- Writing: plain, precise teaching language. No hyphens in compound modifiers ("time constant", "white dwarf", "charge density").
- Textbook: OpenStax University Physics (Vol 1 mechanics, Vol 2 E&M, Vol 3 optics/modern). Physics I = Vol 1 ch 1–15; Physics II
  (PHYS 202) syllabus is in `COLLABORATION.md`. `curriculum/textbook-map.json` maps every section to demos and activities.
- Commits end with the attribution lines the session gives you. Commit and push when a piece of work is finished and checked.

## Demos
- One self-contained HTML file each. Only library: three.js r128 from cdnjs (only where already used). Fonts from Google Fonts.
- **Edit `demos/<name>.html` directly.** Do not rebuild a demo from an older copy elsewhere: that once wiped a finished scenery pass.
- Physics lives between `// ==CORE START==` and `// ==CORE END==` and must run in Node. Never put a `//` comment mid line before code
  (use `/* */`). Tests: `curriculum/validation/test_<demo>.cjs` using `core('<demo>', 'fn,...')` from `demo_source.cjs`.
- House style: light and dark themes via CSS tokens (in `:root`, the dark `@media` block and `[data-theme=dark]`), projector mode,
  400 px and 360 px phones with no sideways scroll, keyboard access, Reduce motion, Blind mode for predictions, at most 6 presets.
- Keep existing control names: handouts refer to them. Add, don't rename.
- Check visually (Playwright/Chromium is installed) at desktop and phone width, light and dark, and look at the screenshots.

## Handouts
- Procedure steps state the task (what to measure, at what values), not which control or where; keep specifics only where a student
  would get stuck (non obvious resets, presets that reset other values, Mystery choices that regenerate, send to the worksheet
  before clearing).
- Keep h2 headings, numbered lists and data table headings stable: `curriculum/labs/worksheet.js` finds answer spots by them and
  its `FROM_DEMO` maps fill the first data table's columns in order. A new handout: add its slug to `ENABLED` (and `GRAPHS`), a
  `FROM_DEMO` map, the map entry's `handouts`, a `HANDOUT_TOPIC` label in `tools/courses.py`, and a key from a real demo run in
  TeacherKeys `worksheet-keys/`.

## Tools
- `python3 tools/notes.py <demo> --keys <TeacherKeys clone>` then `python3 tools/notes.py` (notes from `notes/src/<demo>.md`).
- `python3 tools/courses.py` (course pages and index from the map and catalog; `--check` to verify).
- `python3 tools/qr.py <demo>`, `python3 tools/thumbs.py <demo>` (add an OVERRIDES entry for a good thumbnail state).
- New demo checklist: demo file, tests, notes source + key answer, `curriculum/catalog.json`, `curriculum/textbook-map.json`
  (demo entry and the sections' demo lists), QR, thumbnails, `tools/courses.py`, a `COLLABORATION.md` entry.
- Handout math: `$$...$$` only (kramdown + MathJax); check with `node curriculum/validation/check_math.cjs` after
  `npm install --no-save mathjax-full@3.2.2`. Don't run scripted notation rewrites over keys or guides.
