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
- Constants: g = 9.81 m/s²; sound 343.2 m/s at 20 °C; 0 °C = 273.15 K; CODATA 2022. Significant figures follow the precision.
  Fits use a free intercept. Details: memory `consistency-pass-2026-10-24`.
- Writing: plain, precise teaching language with American spelling [checked]. No hyphens in compound modifiers ("time
  constant", "white dwarf", "nonrotating") [checked]; a part of one letter is fine (X-ray, f-number). Nothing is called
  "optional": the site supplements whatever the course does (Steve 2026-10-24) [checked]. Say "switch modes".
- GitHub Pages runs Liquid on every Markdown file, including this one: never put a brace next to a percent
  sign, and never write a double brace [checked].
- A demo's opening state is never at equilibrium: the first Play or Release press must visibly do something (Steve 2026-10-28).
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
- A demo can sit in several courses (list each one in its `course`). `later` marks a demo in no course. Moving a demo is a map
  change only.
- The home page shows Courses (only those in `LISTED`, currently Astro 2203), then OpenStax by section, then All demos by topic.
  Every catalog demo must be in at least one topic in `curriculum/topics.json`.
- When students or TAs would notice a change, add an entry at the top of `whats-new.js` in the same commit. Leave out invisible
  fixes, videos and anything about keys.

## Demos
- Each demo is one HTML file on the shared library `demos/lib/` (read `demos/lib/README.md`). Shared styles and behavior go in
  the library, never pasted into a demo. A new 3D view uses `demos/lib/vd3kit.js`. The only outside libraries are three.js r128
  from cdnjs (only where it is already used) and Google Fonts.
- **Edit `demos/<name>.html` directly.** Never rebuild a demo from an older copy elsewhere: that once wiped a finished pass.
- Physics lives between `// ==CORE START==` and `// ==CORE END==` and must run in Node. Never put a `//` comment in the middle of a
  line before code (use `/* */`). Tests are in `curriculum/validation/test_<demo>.cjs`.
- House style: light and dark themes, projector mode, 400 px and 360 px phones with no sideways scroll, keyboard access, Reduce
  motion, and Blind mode for predictions. Check the screenshots at desktop and phone width, light and dark.
- Languages: English text is the key. After you build or change a demo, harvest its strings and check for leaks with
  `?lang=qps`. Every demo must be harvested [checked]. Never read displayed text back as state. See `demos/lib/i18n.md`.
- How to add a demo, and the new demo checklist: `docs/adding-a-demo.md`.

## Handouts, worksheets and videos
- Procedure steps state the task, not the control. Rules for headings, `worksheet.js` maps and course lines: `docs/handouts.md`.
- Every worksheet has a How this works video, or a `HOWTO_VIDEO` map entry pointing to its demo's video [checked].
  The recipe is in memory `how-this-works-videos`.
- After a handout edit, rebuild the key PDFs in TeacherKeys.

## Tools and generated files
- Commands for the build scripts (courses, notes, Canvas, theme, QR, reset, thumbnails, math check): `docs/tools.md`.
- Generated files are rebuilt from their source, never edited by hand: `docs/generated-files.md`.
