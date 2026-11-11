# Notes for Claude sessions working on VirtualDemos

Steve Anderson's interactive physics demos for introductory courses, live at https://physicssteven.github.io/VirtualDemos/.
Steve owns the site and makes the decisions. This file lists the rules. The detail lives in the files it points to, so read those
only when the work needs them.

## Start of every session
1. `git config core.hooksPath .githooks` turns on the house rules check before each commit. CI runs the same check on every push.
2. See what changed lately with `git log --oneline -30`. Commit messages are the work log: say what changed, why, and what is
   left. Project memory holds Steve's decisions.
3. Before each commit, run `node tools/rules.cjs` (about 4 s). It checks the rules marked **[checked]** below.
   `--list` explains each rule. To make an exception, add a reasoned ALLOW entry in the script, never a blanket skip.
4. Read only what the work needs: this file, the memory notes for the demo or topic at hand, and a `docs/` page when a step calls
   for it. Bulk subagent work (translation, mass checks, sweeps) runs on a cheaper model (`model: "sonnet"` or `"haiku"`).

## Repos and roles
- This repo is public and served by GitHub Pages: `demos/`, `notes/`, `curriculum/`, `tools/` and the course pages. Claude writes
  the demos, notes, tools, course pages and student handouts (`curriculum/labs/students/`). No other assistant works here now:
  Steve ended the GPT collaboration on 2026-11-01 and removed `COLLABORATION.md`, which is still in git history.
- `PhysicsSteven/TeacherKeys` (private) holds demo answer keys (`demo-keys/answers/<demo>.md`, built to `demo-keys/key/`),
  worksheet keys from real demo runs (`worksheet-keys/`), lab guides, TA guides and practice exams.
- **Never put answers, keys or instructor guides in this repo.** [checked; `--keys <TeacherKeys clone>` also looks for copied answers]
- Never read, use or publish anything from Steve's thesis repo (`wd-thesis`) or his other private work.

## House rules
- Physics must be exact. Every number shown comes from code or a cited source, every approximation is stated on the page, and
  limits and conservation laws are checked. Never fake data: label simulated data as simulated.
- Constants: every physical constant, with its source, is in `demos/lib/constants.js` (`VDC`): CODATA 2022, IAU nominal values,
  g = 9.81 m/s², sound 343.2 m/s at 20 °C, 0 °C = 273.15 K. Add a missing one there first; a copy in demo code must equal it
  [checked, in code and in written text]. Significant figures follow the precision.
  Fits use a free intercept. Details: memory `consistency-pass-2026-10-24`.
- Writing: plain, precise teaching language with American spelling [checked]. No hyphens in compound modifiers ("time
  constant", "white dwarf", "nonrotating") [checked]; a part of one letter is fine (X-ray, f-number). Nothing is called
  "optional": the site supplements whatever the course does (Steve 2026-10-24) [checked]. Say "switch modes".
- GitHub Pages runs Liquid on every Markdown file, including this one: never put a brace next to a percent
  sign, and never write a double brace [checked].
- A demo's opening state is never at equilibrium: the first Play or Release press must visibly do something (Steve 2026-10-28)
  [checked by `tools/opencheck.cjs`].
- Measuring tools (the Tools button) are supplementary only. Never use them in handouts, keys or videos.
- Keep existing control names, because handouts and keys refer to them. Add names rather than renaming them. A rename updates every
  reference in the same commit.
- No cap on presets: add as many as the demo needs (Steve 2026-10-24).
- Prefer folding a new feature into an existing demo. A build that is unique enough can be its own demo (Steve 2026-10-31).
- Don't claim a test passed unless you ran it. Commits end with the attribution lines the session gives you. Commit and push
  finished, checked work, with a commit message that says what changed and what is left.

## Courses and the map
- Textbook: OpenStax University Physics. `curriculum/textbook-map.json` maps every section to demos and activities. Physics I is
  Vol 1 ch 1 to 15. Physics II follows the PHYS 202 syllabus (`docs/syllabi.md`). Modules are textbook chapters, not a syllabus:
  Acoustics is Vol 1 ch 16 to 17, Thermodynamics Vol 2 ch 1 to 4, Modern Physics Vol 3 ch 5 to 11, and Astronomy holds every
  astronomy demo.
- Astro 2203 (`astro-2203.html`) is its own course page holding only its subset, in schedule order (`INCLUDED` in
  `tools/courses.py`). A new demo used only in Astro 2203 needs a `MERGE_PLACE` entry.
- PHYS 202 (`phys-202.html`, unlisted) lays out every Physics II demo and worksheet in the order of Steve's 14 lectures, then the
  rest of the syllabus (`SAME_AS` in `tools/courses.py`). A new Physics II demo joins it by itself; place it with the unit sections.
- A demo can sit in several courses (list each one in its `course`). `later` marks a demo in no course. Moving a demo is a map
  change only.
- The home page shows Courses (only those in `LISTED`, currently Astro 2203), then OpenStax by section, then All demos by topic.
  Every catalog demo must be in at least one topic in `curriculum/topics.json`.
- When students or TAs would notice a change, add an entry at the top of `whats-new.js` in the same commit. Leave out invisible
  fixes, videos and anything about keys.

## Demos
- Each demo is one HTML file on the shared library `demos/lib/` (read `demos/lib/README.md`). The look of the whole site (tokens,
  fonts, the header band) is `demos/lib/paper.css`, the warm lab look of 2026-11-08 (direction C): a walnut band, ivory panels, amber accents. Preferences offers a second Look, Cool lab (graphite
  band, white panels, teal; `data-vd-look="lab"` from localStorage `vd-look`, its palette blocks in paper.css), for the page skin only. The
  demos draw in warm grays too; blues stay only where they mean something (negative charge, cold, sky, water, stars, spectra). paper.css is written by `python3 tools/genpaper.py` (edit the palettes and `tools/paper-src/`, never paper.css). A new demo gets the link from `python3 tools/paper.py`. Shared styles and behavior go in
  the library, never pasted into a demo. A new 3D view uses `demos/lib/vd3kit.js`. The only outside libraries are three.js r128
  from cdnjs (only where it is already used) and Google Fonts.
- **Edit `demos/<name>.html` directly.** Never rebuild a demo from an older copy elsewhere: that once wiped a finished pass.
- Physics lives between `// ==CORE START==` and `// ==CORE END==` and must run in Node. Never put a `//` comment in the middle of a
  line before code (use `/* */`). Tests are in `curriculum/validation/test_<demo>.cjs`.
- Before pushing a new or changed demo, run `node tools/democheck.cjs <demo>` (rules, map, tests, translation, page checks,
  opening state). A visual fix comes with a picture from `node tools/beforeafter.cjs <demo>` attached to the reply. See `docs/tools.md`.
- House style: Day and Night themes (the warm lab look, `demos/lib/paper.css`, linked last on every page; Night is the default, Steve 2026-11-08), projector mode, 400 px and 360 px phones with no sideways scroll, keyboard access, Reduce
  motion, and Blind mode for predictions. Check the screenshots at desktop and phone width, light and dark.
- Languages: English text is the key. After you build or change a demo, harvest its strings and check for leaks with
  `?lang=qps`. Every demo must be harvested [checked]. Never read displayed text back as state. See `demos/lib/i18n.md`.
- How to add a demo, and the new demo checklist: `docs/adding-a-demo.md`.
- Break-it test (Steve 2026-11-09): before an interactive demo or tool is reported done, use it the way a student would: zoom far out
  and back in, pan, drag, push every control to its limits, type extreme or odd inputs, resize the stage, switch setups, themes and
  looks. Known values must stay exact throughout (the derivatives grapher's f′(0) for x³ − 3x stays −3 at any zoom). Static checks
  miss these: the derivatives grapher shipped with zoom bugs that only showed after a zoom out and back in. `node tools/breakit.cjs
  <demo>` runs the scripted part (see `docs/tools.md`); put the demo's known values in `tools/breakit/<demo>.cjs`, then try the
  odd sequences the script can't guess and look at the pictures.
- Watch it like a student (Steve 2026-11-11), part of the break-it test. The script finds things that break, not things that are
  wrong to look at or hard to follow: Orbital Resonances passed every scripted check while it opened at 1,000 years per second. So
  also judge these by eye, and fix what you find (keeping the physics exact):
  - Fresh-eyes first minute: open the demo cold at its defaults, change nothing, no notes. Within a minute a student should be able
    to tell what to do and what to notice, the labels should make sense and stay readable while things move, and the first view,
    before any click, should already show something worth learning. Repeat at each setup or preset's own defaults.
  - Time scale is visible: any animation shows its rate on screen ("1 s = 3 years") and opens at a pace where the key event takes a
    few seconds and the eye can follow it (no blur, no strobing, nothing lapping faster than about once a second).
  - Picture matches the physics: what is drawn must be physically right, not only the numbers. Sizes, directions, arrows, what
    floats or sinks, what moves with what. Correct readouts beside a misleading drawing still teach the wrong thing.
  - Matches the worksheet: when a demo changes, walk its worksheet steps against the demo's defaults, so a change (a default speed,
    a preset, a label, a control) can't silently break a step or make a recorded value unreachable.
  - Controls behave the same across demos: a student who learned one demo should not be surprised in the next. Scroll zoom keeps
    the point under the pointer fixed, + and − zoom, drag pans or turns the view the same way, Reset and Play mean the same thing.
    Where a demo differs, make it match the common behavior rather than adding a new one.
  A future judgment pass (not a rule yet): name the one or two misconceptions students bring to each demo (heavier falls faster,
  seasons from distance) and check the demo doesn't accidentally reinforce them.

## Handouts, worksheets and videos
- Procedure steps state the task, not the control. Rules for headings, `worksheet.js` maps and course lines: `docs/handouts.md`.
- Every worksheet has a How this works video, or a `HOWTO_VIDEO` map entry pointing to its demo's video [checked].
  The recipe is in memory `how-this-works-videos`.
- After a handout edit, rebuild the key PDFs in TeacherKeys [checked with `--keys`]. After a demo change, rerun the key captures
  that load it and compare (democheck names them).

## Tools and generated files
- Commands for the build scripts (courses, notes, Canvas, theme, QR, reset, thumbnails, math check): `docs/tools.md`.
- Generated files are rebuilt from their source, never edited by hand: `docs/generated-files.md` [checked: course pages, theme
  switch, symbol glossaries, and notes pages when python's `markdown` is installed].
- Every script on a page parses, and every relative link and image points at a file in the repo [checked].

## Mistakes that came back (no script can check these)
- Before writing that something is the smallest, largest, first or only one, check it against a data table (the tritium
  "smallest Q" claim was wrong: rhenium 187 is smaller).
- Compute every "agrees within one standard error" or "within N %" claim; never judge it by eye (keys said one standard error
  where it was 1.2 to 5).
- Work key numbers from the rounded values and the fit the worksheet shows, not from unrounded exports.
- One value per quantity in the demo, handout, notes and key, with a real citation; add it to `constants.js` first (the Sun's
  M_V was 4.83 with a wrong citation in one demo and 4.81 elsewhere).
- After a push, confirm that both CI jobs passed through the Actions API (the physics regression job once failed on every
  push for days).
- After a layout change, look at 1280 by 720 and at a 400 px phone, in English and Spanish: controls cut off by the stage and
  labels overlapping on phones came back many times. democheck catches cut off controls; overlaps still need the pictures.
