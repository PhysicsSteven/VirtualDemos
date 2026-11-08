# Generated files and where things live

Moved from COLLABORATION.md on 2026-11-01, when Steve removed that file.

## Generated files: edit the source, not the output
| Output | Source | Rebuild |
|---|---|---|
| `demos/star-slice.html` | `tools/star-slice/star-slice.template.html` + `tools/star-slice/data/` | `python3 tools/star-slice/build.py` |
| QR code block in every demo header (`<!-- vd-qr -->` and `/* vd-qr */`) | `tools/qr.py` | `python3 tools/qr.py <demo>`, then rebuild Star Slice |
| `notes/<demo>.html`, `notes/index.html` | `notes/src/<demo>.md` | `python3 tools/notes.py <demo>` (needs `pip install markdown`) |
| `demo-keys/key/<demo>.html` in TeacherKeys | `demo-keys/answers/<demo>.md` in TeacherKeys | `python3 tools/notes.py <demo> --keys <TeacherKeys clone>/demo-keys` |
| `thumbs/<demo>-light.webp`, `-dark.webp` | the demo itself | `python3 tools/thumbs.py <demo>` (add `--three <path>` for three.js demos) |
| course, topic and OpenStax pages, `courses.html`, `index.html` (below the hero), `search.js`, `404.html`, `demos/lib/nav.js` | `curriculum/` map, catalog and topics | `python3 tools/courses.py` (`--check`) |
| the `paper.css` link in every demo | `demos/lib/paper.css` (the parchment skin) | `python3 tools/paper.py` (`--check`) |
| `demos/lib/i18n/en/**` | the pages themselves | `node tools/i18n.cjs harvest <page>` (see `demos/lib/i18n.md`) |

## Where things live
- `demos/` (one HTML file per demo, shared library in `demos/lib/`), `notes/` (short teaching notes), `curriculum/` (map,
  catalog, topics, student handouts in `labs/students/`, tests in `validation/`), `tools/` (build and check scripts), `docs/`
  (detail moved out of `CLAUDE.md`).
- TeacherKeys: `demo-keys/`, `worksheet-keys/`, `lab-guides/`, `ta-guides/`, `practice-exams/`, `audits/`.

