# Build tools

Moved from CLAUDE.md on 2026-11-01. Only the TeacherKeys path and the last checklist item (a commit message, not a COLLABORATION.md entry) changed.

- `python3 tools/notes.py <demo> --keys <TeacherKeys clone>/demo-keys` then `python3 tools/notes.py` (notes from `notes/src/<demo>.md`).
- `python3 tools/courses.py` (course pages, topic pages, openstax.html and index from the map, catalog and topics; `--check` to verify). It also writes `search.js`, `404.html`
  and `demos/lib/nav.js` (the breadcrumb and previous and next demo links on every demo, in course page order), so rerun it after any map or catalog change.
- `python3 tools/canvas.py` (Canvas course import files, IMS Common Cartridge 1.3, one per course, in `_build/canvas/`, from the map and
  catalog like the course pages; rerun after a map, catalog or handout change; `tools/canvas_check.rb` runs Canvas's own import code on one).
- `python3 tools/theme.py` (links the theme switch on any page that lacks it; `--check`).
- `python3 tools/genpaper.py` writes the site skin `demos/lib/paper.css` from `tools/paper-src/` (head.css, lab.css, rest.css) and the four
  palettes in the script (Warm lab and Cool lab, each Day and Night). Change colors and skin rules there, never in paper.css. `--check` (run by
  rules.cjs) also fails when any text token is under 4.5:1 on any panel color.
- `python3 tools/paper.py` (links the site skin `demos/lib/paper.css` last in every demo's head; `--check`). The skin holds the site's tokens and fonts for every page type; the site pages get it from `courses.py`, the notes from `notes.py`, the worksheets from `_includes/head-custom.html`.
- `python3 tools/qr.py <demo>`, `python3 tools/reset.py <demo>` (Reset all button), `python3 tools/thumbs.py <demo>` (add an OVERRIDES entry for a good thumbnail state).
- New demo checklist: demo file, tests, notes source + key answer, `curriculum/catalog.json`, `curriculum/textbook-map.json`
  (demo entry and the sections' demo lists), `curriculum/topics.json`, QR, Reset all, thumbnails, `tools/courses.py`, and a commit message that says what was built.
- Handout math: `$$...$$` only (kramdown + MathJax); check with `node curriculum/validation/check_math.cjs` after
  `npm install --no-save mathjax-full@3.2.2`. Don't run scripted notation rewrites over keys or guides.

## Checks (2026-11-01)
All browser checks need `NODE_PATH=/opt/node-tools/node_modules` in the cloud container, and `VD_THREE=<three.min.js r128>` for 3D demos
(cdnjs is blocked there; `npm pack three@0.128.0`).
- `node tools/rules.cjs [--keys <TeacherKeys clone>]` runs the house rules (also the pre-commit hook and CI). With `--keys` it also looks for
  copied answers and for handouts edited since their key PDF was printed (TeacherKeys `worksheet-keys/handout-hashes.json`, written by
  `fill_key.cjs`). The `constants` rule flags literals in demo code that are close to a value in `demos/lib/constants.js` without equaling it.
  Added 2026-11-01 from mistakes that recurred: `constants-text` (the same for numbers in worksheets, notes and demo strings),
  `scripts` (every inline script and .js file parses), `links` (relative links and images resolve) and `generated` (courses.py,
  theme.py, paper.py and symbols.py `--check`, and notes pages against notes/src when `pip install markdown` has been run). About 9 s in all.
- `node tools/democheck.cjs <demo> [--fast]` is the one command for a new or changed demo: house rules, map entries (catalog, textbook map,
  topic), Node tests, harvest and leaks, What's new reminder, `vdcheck --only after` and `--only clip`, and the opening state check.
  `--fast` skips the browser steps.
- `node tools/opencheck.cjs <demo>... | --all` checks that the opening state is not at equilibrium: the demo moves on open or the first
  Play or Release press visibly changes the stage. Pictures go to `/tmp/vdcheck/opencheck`.
- `node tools/beforeafter.cjs <demo> [--ref origin/main]` writes one picture of the demo before and after a change, desktop and phone,
  light and dark. Attach it to the reply for any visual fix.
