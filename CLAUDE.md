# Notes for Claude sessions working on VirtualDemos

Steve Anderson's interactive physics demos, live at https://physicssteven.github.io/VirtualDemos/. Steve owns the site and makes
the decisions. This file holds the rules; detail lives in the files it points to, so read those only when the work needs them.

## Start of every session
1. `bash tools/cloud/setup.sh` (add `--site` for worksheets or keys), then `source ~/.vd-env`. It turns on the house rules hook,
   fetches the libraries cloud sessions can't reach, and writes the environment every check needs.
2. `git log --oneline -30`. Commit messages are the work log: say what changed, why, and what is left. Project memory holds
   Steve's decisions; search it by demo name.
3. Read only what the job needs. Small jobs: `docs/recipes.md` (with model choices). Checks, one command each: `docs/checks.md`.
   Bulk subagent work (translation, mass checks, sweeps) runs on `model: "haiku"` or `"sonnet"`.
4. Before each commit, `node tools/rules.cjs` (the hook runs it) checks the rules marked **[checked]**. `--list` explains each.
   To make an exception, add a reasoned ALLOW entry in the script, never a blanket skip.

## Repos and roles
- This repo is public and served by GitHub Pages: `demos/`, `notes/`, `curriculum/`, `tools/` and the course pages. Claude writes
  the demos, notes, tools, course pages and student handouts (`curriculum/labs/students/`). No other assistant works here
  (the GPT collaboration ended 2026-11-01; `COLLABORATION.md` is in git history).
- `PhysicsSteven/TeacherKeys` (private) holds demo answer keys (`demo-keys/`), worksheet keys from real demo runs
  (`worksheet-keys/`), lab guides, TA guides and practice exams.
- **Never put answers, keys or instructor guides in this repo.** [checked; `--keys <TeacherKeys clone>` also looks for copied answers]
- Never read, use or publish anything from Steve's thesis repo (`wd-thesis`) or his other private work.
- A change to `.github/workflows` goes by pull request for Steve to merge.

## House rules
- Physics must be exact. Every number shown comes from code or a cited source, every approximation is stated on the page, and
  limits and conservation laws are checked. Never fake data: label simulated data as simulated.
- Constants: every physical constant, with its source, is in `demos/lib/constants.js` (`VDC`): CODATA 2022, IAU nominal values,
  g = 9.81 m/s², sound 343.2 m/s at 20 °C, 0 °C = 273.15 K. Add a missing one there first; a copy elsewhere must equal it
  [checked, in code and in written text]. Significant figures follow the precision. Fits use a free intercept.
- Writing: plain, precise teaching language, American spelling [checked]. No hyphens in compound modifiers ("time constant",
  "white dwarf", "nonrotating") [checked]; a part of one letter is fine (X-ray, f-number). Nothing is called "optional"
  (Steve 2026-10-24) [checked]. Say "switch modes". Big numbers take commas (12,000).
- GitHub Pages runs Liquid on every Markdown file, including this one: never put a brace next to a percent sign, and never write
  a double brace [checked].
- A demo's opening state is never at equilibrium: the first Play or Release press must visibly do something (Steve 2026-10-28)
  [checked by `tools/opencheck.cjs`].
- Measuring tools (the Tools button) are supplementary only. Never use them in handouts, keys or videos.
- Keep existing control names, because handouts and keys refer to them. Add names rather than renaming; a rename updates every
  reference in the same commit. Reset and Play are the action names everywhere.
- No cap on presets (Steve 2026-10-24). Prefer folding a new feature into an existing demo; a build that is unique enough can be
  its own demo (Steve 2026-10-31).
- Don't claim a test passed unless you ran it. Commit and push finished, checked work; commits end with the attribution lines
  the session gives you.

## Demos
- One HTML file each on the shared library `demos/lib/` (read `demos/lib/README.md`). Shared styles and behavior go in the
  library, never pasted into a demo. A new 3D view uses `demos/lib/vd3kit.js`. Outside libraries: three.js r128 from cdnjs (only
  where already used) and Google Fonts.
- The site skin is `demos/lib/paper.css`, written by `python3 tools/genpaper.py` (edit its palettes and `tools/paper-src/`, never
  paper.css). Warm lab is the default; Preferences offers Cool lab for the page chrome only, so demos stay warm. Night is the
  first visit default. Blues only where they mean something (negative charge, cold, sky, water, stars, spectra).
- **Edit `demos/<name>.html` directly.** Never rebuild a demo from an older copy elsewhere: that once wiped a finished pass.
- Physics lives between `// ==CORE START==` and `// ==CORE END==` and must run in Node. Never put a `//` comment in the middle of a
  line before code (use `/* */`). Tests: `curriculum/validation/test_<demo>.cjs`.
- Before pushing a new or changed demo: `node tools/democheck.cjs <demo>`. A visual fix comes with a picture from
  `node tools/beforeafter.cjs <demo>` attached to the reply.
- Break-it test (Steve 2026-11-09): before an interactive demo or tool is reported done, use it like a student (zoom out and back,
  pan, drag, limits, extreme inputs, setups, themes, looks) and check known values stay exact. `node tools/breakit.cjs <demo>`
  is the scripted half; known values go in `tools/breakit/<demo>.cjs`.
- Watch it like a student (Steve 2026-11-11), part of the break-it test: fresh-eyes first minute, time scale on screen at a
  followable pace, picture matches the physics, worksheet steps still work, controls behave like other demos (scroll and + −
  zoom about the view's center, never the pointer; Steve 2026-11-12). The full list is in `docs/checks.md`; read it before
  judging a demo.
- House style: Day and Night, projector mode, 400 px and 360 px phones with no sideways scroll, keyboard access, Reduce motion,
  Blind mode for predictions, the size grip and dividers. Look at desktop and phone width, light and dark.
- Languages: English text is the key. After you build or change a demo, harvest its strings and check leaks with `?lang=qps`
  [checked: every demo harvested]; keep Spanish complete (`docs/recipes.md`). Never read displayed text back as state.
  See `demos/lib/i18n.md`.
- How to add a demo, and the new demo checklist: `docs/adding-a-demo.md`.

## Courses, map and What's new
- Textbook: OpenStax University Physics; `curriculum/textbook-map.json` maps every section to demos and activities. Physics I is
  Vol 1 ch 1 to 15, Physics II follows the PHYS 202 syllabus (`docs/syllabi.md`), Acoustics Vol 1 ch 16 to 17, Thermodynamics
  Vol 2 ch 1 to 4, Modern Physics Vol 3 ch 5 to 11, Astronomy holds every astronomy demo. OpenStax Astronomy 2e has its own
  map, `curriculum/astronomy-map.json` (`openstax-astronomy.html`): a new astronomy demo or worksheet goes into its sections.
  College Physics 2e (also the AP edition) and high school Physics have maps the same way (`college-physics-map.json`,
  `hs-physics-map.json`; `BOOKS` in `tools/courses.py`): put a new demo or worksheet into their sections too.
- Astro 2203 (`astro-2203.html`) holds only its subset, in schedule order (`INCLUDED` in `tools/courses.py`); a new demo used only
  there needs a `MERGE_PLACE` entry. PHYS 202 (`phys-202.html`, unlisted) follows Steve's 14 lectures (`SAME_AS`).
- A demo can sit in several courses (each in its `course`); `later` marks one in no course. Moving a demo is a map change only.
  Every catalog demo is in at least one topic in `curriculum/topics.json`. Home page: Courses (only `LISTED`, now Astro 2203),
  OpenStax by section, All demos by topic.
- When students or TAs would notice a change, add an entry at the top of `whats-new.js` in the same commit (English only).
  Leave out invisible fixes, videos and anything about keys.

## Handouts, worksheets, keys and videos
- Every worksheet takes a student 75 minutes (a class period) or less, done alone as homework or in place of the lecture, so Background still teaches the idea, and every step says what to do and how: what to set, which readout to
  record, what to plot; name the control on first use or wherever a student could miss it (Steve 2026-11-16). Headings, `worksheet.js` maps and course lines: `docs/handouts.md`.
- Intro worksheets put all uncertainty work in a closing Uncertainty section outside the 75 minutes, assigned by the instructor
  (Steve 2026-11-20); upper level sheets keep it required. Pattern: `docs/handouts.md`.
- Every worksheet has a How this works video or a `HOWTO_VIDEO` entry [checked]. One video: `bash tools/howto/take.sh <name>`;
  recipe in `tools/howto/README.md`. Night look only.
- After a handout edit, reprint its key; after a demo change, rerun the key captures democheck names. Both with
  `worksheet-keys/tools/rekey.sh <slug>` in TeacherKeys [checked with `--keys`]. Steve wants substantive key fixes only, not
  last digit differences.

## Tools and generated files
- Build scripts (courses, notes, Canvas, theme, QR, reset, thumbnails, math check): `docs/tools.md`.
- Generated files are rebuilt from their source, never edited by hand: `docs/generated-files.md` [checked].
- Every script on a page parses, and every relative link and image points at a file in the repo [checked].

## Mistakes that came back (no script can check these)
- Before writing that something is the smallest, largest, first or only one, check a data table (the tritium "smallest Q"
  claim was wrong: rhenium 187 is smaller).
- Compute every "agrees within one standard error" or "within N %" claim; never judge it by eye.
- Work key numbers from the rounded values and the fit the worksheet shows, not from unrounded exports.
- One value per quantity in the demo, handout, notes and key, with a real citation, in `constants.js` first.
- After a push, confirm both CI jobs passed (`gh run list -R PhysicsSteven/VirtualDemos -L 3`) and the Pages build.
- After a layout change, look at 1280 by 720 and a 400 px phone, in English and Spanish: cut off controls and overlapping
  labels on phones came back many times. democheck catches cut off controls; overlaps need the pictures.
- Two threads editing TeacherKeys at once conflict in the key PDFs and `handout-hashes.json`; keep key work in one thread.
