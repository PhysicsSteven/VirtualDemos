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

