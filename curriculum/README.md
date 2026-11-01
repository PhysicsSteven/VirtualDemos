# curriculum

What the course pages, worksheets and tests are built from.

- `labs/students/<slug>.md`: the student worksheets (225). Each is an interactive page run by `labs/worksheet.js`; its rules are in
  `docs/handouts.md`. Answer keys are in the private TeacherKeys repo, never here.
- `catalog.json`, `textbook-map.json`, `topics.json`: the demo catalog, the OpenStax section map and the topic list that
  `tools/courses.py` turns into the course, topic and OpenStax pages.
- `labs/symbols/`, `labs/symbols.js`: the symbol glossary shown when a reader hovers over a symbol in a worksheet.
- `validation/`: the physics tests (see its README).

Demos are at `https://physicssteven.github.io/VirtualDemos/demos/<slug>.html`.
