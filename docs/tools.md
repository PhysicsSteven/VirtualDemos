# Build tools

Moved from CLAUDE.md on 2026-11-01; checks moved to `docs/checks.md` on 2026-11-15.

- `python3 tools/notes.py <demo> --keys <TeacherKeys clone>/demo-keys` then `python3 tools/notes.py` (notes from `notes/src/<demo>.md`).
- `python3 tools/courses.py` (course pages, topic pages, openstax.html, openstax-astronomy.html, openstax-college-physics.html and openstax-hs-physics.html (from `curriculum/astronomy-map.json`, `college-physics-map.json` and `hs-physics-map.json`; the `BOOKS` list) and index from the map, catalog and topics; `--check` to verify). It also writes `search.js`, `404.html`
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

## Checks
Every check, with one command each and when to run it: `docs/checks.md`. Cloud setup: `bash tools/cloud/setup.sh`.
