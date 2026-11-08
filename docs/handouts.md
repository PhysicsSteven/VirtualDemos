# Handouts and worksheets

Moved from CLAUDE.md on 2026-11-01, unchanged.

- Procedure steps state the task (what to measure, at what values), not which control or where; keep specifics only where a student
  would get stuck (non obvious resets, presets that reset other values, Mystery choices that regenerate, send to the worksheet
  before clearing).
- Keep h2 headings, numbered lists and data table headings stable: `curriculum/labs/worksheet.js` finds answer spots by them and
  its `FROM_DEMO` maps fill the first data table's columns in order. A new handout: add its slug to `ENABLED` (and `GRAPHS`), a
  `FROM_DEMO` map, the map entry's `handouts`, a `HANDOUT_TOPIC` label in `tools/courses.py`, and a key from a real demo run in
  TeacherKeys `worksheet-keys/`.
- A handout's second line ("Student laboratory · Physics II and Modern Physics") names the courses it is for by their exact course
  titles in the map. A shared demo shows each course only its own worksheets (course page card, Canvas, and the demo's Handout and
  worksheet button when opened from that course, via `?course=` and `demos/lib/nav.js`); a course with none of its own on that demo
  shows them all. A new course needs nothing more than its title on its handouts' second line.

## Self checks (checks.js)

`curriculum/labs/checks.js` lists, per worksheet, the answer boxes whose number follows from the student's own data table and
the table columns worked out from other cells of their row. worksheet.js redoes that arithmetic on what the student recorded
and says only whether the number they wrote agrees ("Agrees with your data" or "Check this one"); a worked out cell that does not
add up gets an amber mark. It never shows a value, never grades written answers, and knows nothing about the keys: every rule is
the step the question itself states, so it belongs in the public repo. When you edit a question or a column heading that a rule
names, update the rule, and run the key test (load each TeacherKeys `-key.json` into its worksheet: every note must read
Agrees and no cell may be marked). Astro 2203 has rules; add them for other worksheets the same way.
