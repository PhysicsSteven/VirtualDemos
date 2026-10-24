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
- Modules (textbook chapters, not a syllabus): Acoustics = Vol 1 ch 16–17, Thermodynamics (`thermo.html`) = Vol 2 ch 1–4, Modern
  Physics (`modern.html`) = Vol 3 ch 5–11, Astronomy (`astro.html`) = every astronomy demo in four units (Vol 1 ch 13
  and Vol 3 §§10.6, 11.6, 11.7 where they apply). Wave optics (Vol 3 ch 3–4) is Physics II's second optional unit. A demo may sit in
  several courses or modules (list each in its `course`); Misc is what is left (`later`: BZ and DNA, one heading). Moving a demo is a map change only.
- Commits end with the attribution lines the session gives you. Commit and push when a piece of work is finished and checked.

## Demos
- One HTML file each, plus the shared library in `demos/lib/` (`vd.css`, `vd.js`; read `demos/lib/README.md`). Demos are being
  moved onto it in batches (Steve, 2026-10-23); the README lists which. A moved demo links the library and keeps only its physics,
  drawing and what it does differently. Shared styles and behaviour go in the library, never pasted into each file again; moving a
  demo must change nothing visible, which `tools/vdcheck.cjs` checks. Other libraries: three.js r128 from cdnjs (only where already
  used). Fonts from Google Fonts.
- **Edit `demos/<name>.html` directly.** Do not rebuild a demo from an older copy elsewhere: that once wiped a finished scenery pass.
- Physics lives between `// ==CORE START==` and `// ==CORE END==` and must run in Node. Never put a `//` comment mid line before code
  (use `/* */`). Tests: `curriculum/validation/test_<demo>.cjs` using `core('<demo>', 'fn,...')` from `demo_source.cjs`.
- House style: light and dark themes via CSS tokens (in `:root`, the dark `@media` block and `[data-theme=dark]`), projector mode,
  400 px and 360 px phones with no sideways scroll, keyboard access, Reduce motion, Blind mode for predictions, at most 6 presets.
- Keep existing control names: handouts refer to them. Add, don't rename.
- Check visually (Playwright/Chromium is installed) at desktop and phone width, light and dark, and look at the screenshots.

## How to add a demo
1. Copy `demos/lib/template.html` to `demos/<name>.html` and change its `../lib/` links to `lib/`. It is a small working demo on the
   shared library: header with Projector, picture with a Set up card (`VD.setupCard`), Setups chips, readouts, Lab fold.
2. Replace the physics between the CORE markers (it must run in Node) and the drawing; keep the page structure and class names, so
   the shared styles in `vd.css` apply. Put only what this demo does differently in its own `<style>`; don't copy shared rules in,
   and don't add `data-vd-off` (that list is only for demos that were moved and never had a rule).
3. For readings and Export to worksheet, copy the Readings section and its code from `demos/pendulum.html` (the `vd-handoff:<name>`
   key, `FROM_DEMO` map in worksheet.js) until the library has a readings helper.
4. Run `python3 tools/reset.py <name>` and `python3 tools/qr.py <name>` (markup only, since the demo links the library), then the
   new demo checklist below, and check it with `NODE_PATH=/opt/node-tools/node_modules node tools/vdcheck.cjs --only after <name>`
   (page errors, sideways scroll) and by looking at the screenshots it saves.

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
- `python3 tools/qr.py <demo>`, `python3 tools/reset.py <demo>` (Reset all button), `python3 tools/thumbs.py <demo>` (add an OVERRIDES entry for a good thumbnail state).
- New demo checklist: demo file, tests, notes source + key answer, `curriculum/catalog.json`, `curriculum/textbook-map.json`
  (demo entry and the sections' demo lists), QR, Reset all, thumbnails, `tools/courses.py`, a `COLLABORATION.md` entry.
- Handout math: `$$...$$` only (kramdown + MathJax); check with `node curriculum/validation/check_math.cjs` after
  `npm install --no-save mathjax-full@3.2.2`. Don't run scripted notation rewrites over keys or guides.
