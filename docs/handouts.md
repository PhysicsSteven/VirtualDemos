# Handouts and worksheets

Moved from CLAUDE.md on 2026-11-01, unchanged.

- 75 minutes, clear steps (Steve 2026-11-16, replaces the 2026-10-23 "task, not control" rule): a student finishes a worksheet,
  Before the lab to Questions, in 75 minutes or less (the length of a class period; Steve moved it from an hour). Students do it alone, as homework or in place of the lecture, so never cut Background for time. Every step says what to do and how: the preset or setup, the value to set, the
  readout to record and its Data column, what to plot against what. Name the control on first use or wherever a student could
  miss it (non obvious resets, presets that reset other values, Mystery choices that regenerate, send to the worksheet before
  clearing); don't spell out obvious ones.
- Keep h2 headings, numbered lists and data table headings stable: `curriculum/labs/worksheet.js` finds answer spots by them and
  its `FROM_DEMO` maps fill the first data table's columns in order. A new handout: add its slug to `ENABLED` (and `GRAPHS`), a
  `FROM_DEMO` map, the map entry's `handouts`, a `HANDOUT_TOPIC` label in `tools/courses.py`, and a key from a real demo run in
  TeacherKeys `worksheet-keys/`.
- A handout's second line ("Student laboratory · Physics II and Modern Physics") names the courses it is for by their exact course
  titles in the map. A shared demo shows each course only its own worksheets (course page card, Canvas, and the demo's Handout and
  worksheet button when opened from that course, via `?course=` and `demos/lib/nav.js`); a course with none of its own on that demo
  shows them all. A new course needs nothing more than its title on its handouts' second line.

## With calculus (Steve 2026-11-19)

Worksheets stay one version, algebra based. Where the University Physics treatment of a topic is really calculus, the sheet ends
with an h2 "With calculus" just before What to hand in: the same intro sentence on every sheet ("For courses that use calculus.
This section is not counted in the 75 minutes; do it when your instructor assigns it."), then 2 or 3 numbered questions (derive
the result the sheet takes as given, and use the student's own data with a numerical derivative or integral), about 20 to 30
minutes. worksheet.js gives it answer boxes (ids `with-calculus-N`) and leaves it out of Your progress until the student starts
it. Keys answer it like any other section. A sheet that needed calculus in its main body (Faraday, Impulse) moved that part here.

## Self checks (checks.js)

`curriculum/labs/checks.js` lists, per worksheet, the answer boxes whose number follows from the student's own data table and
the table columns worked out from other cells of their row. worksheet.js redoes that arithmetic on what the student recorded
and says only whether the number they wrote agrees ("Agrees with your data" or "Check this one"); a worked out cell that does not
add up gets an amber mark. It never shows a value, never grades written answers, and knows nothing about the keys: every rule is
the step the question itself states, so it belongs in the public repo. When you edit a question or a column heading that a rule
names, update the rule, and run the key test (load each TeacherKeys `-key.json` into its worksheet: every note must read
Agrees and no cell may be marked). Astro 2203 has rules; add them for other worksheets the same way.
