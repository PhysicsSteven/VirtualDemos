# Checks: one command each

Written 2026-11-15 for upkeep on a smaller plan. Run the cheap ones every time and the long ones only when the change calls for
them. Don't claim a check passed unless you ran it.

## Once per cloud session

    bash tools/cloud/setup.sh            # hooks, Python markdown, three.js/MathJax/anchor-js packs, ~/.vd-env (about 30 s)
    bash tools/cloud/setup.sh --site     # also Jekyll and the local site at http://127.0.0.1:8765/VirtualDemos/ (about 1 min)
    source ~/.vd-env                     # in every shell that runs a check below

`--site` is needed only for worksheets and keys. cdnjs and jsdelivr are blocked in cloud sessions, which is why the packs exist;
`tools/cloud/vendor-routes.cjs` serves them to your own Playwright scripts. After editing a worksheet `.md`, run `--site` again
to rebuild it (about 10 s).

## The checks

| Check | Command | Time | When |
|---|---|---|---|
| House rules | `node tools/rules.cjs --keys $TEACHERKEYS` | 15 s | before every commit (the hook runs it without `--keys`) |
| One changed demo | `node tools/democheck.cjs <demo>` (`--fast` skips the browser) | 3 min | any demo change: rules, map, tests, strings, layout, opening state, names the key captures to rerun |
| Break-it, scripted | `node tools/breakit.cjs <demo>` (`--zoom-only` for just zoom and drag) | 30 s a demo | any interactive change; then try the odd sequences yourself |
| Watch like a student | `node tools/watch.cjs <demo>` then look at `/tmp/vdcheck/watch/<demo>/*.png` | 40 s a demo | any change a student would see; judge the pictures (below) |
| Frame rate over time | `node tools/perfcheck.cjs <demo>` (`--seconds 60`) | 70 s a demo | anything that animates, adds particles or tracks; run it alone |
| Opening state | `node tools/opencheck.cjs <demo>` | 20 s | part of democheck; alone after a default change |
| Start here setups | `node tools/startcheck.cjs [demo]` (`--lang es`; `--link <demo> click:<chip>` makes a setup string) | 15 s a step | after a change to `curriculum/start-here.json` or to a demo with a Start here; look at the pictures |
| Before and after picture | `node tools/beforeafter.cjs <demo>` | 1 min | every visual fix; attach the picture to the reply |
| One worksheet key | in TeacherKeys: `bash worksheet-keys/tools/rekey.sh <slug>` (`--apply` to keep; `--reprint` after an answers or handout edit) | 1 to 3 min | when democheck names it, or after a worksheet edit |
| One video | `bash tools/howto/take.sh <name>` | 5 min | when the demo's controls, layout or defaults changed |
| Offline copies | `node tools/offlinecheck.cjs <demo>` (`--all`, `--course astro-2203`; needs `--site`) | 1 min a demo, 6 min the course | a change to `demos/lib/vdoffline.js`, to how a demo loads files (a new data file, a script loaded by name, a new outside library), or to the worksheet or course page templates |
| CI after a push | `gh run list -R PhysicsSteven/VirtualDemos -L 5` | seconds | after every push; every workflow must pass, then the Pages build |

Every browser check writes pictures and JSON under `/tmp/vdcheck/` (set `VDCHECK_DIR` when two jobs run at once). The cloud box has
4 cores: run at most 3 browser jobs at a time, and a photo timeout under load is the machine, not the demo (rerun it alone).

## On GitHub, free (2026-11-15)

GitHub Actions runs the scripted checks on its own machines, so they cost no Claude usage. Let them do the waiting: push, then
read the results, instead of running the long checks in the session.
- **Demo checks** (`.github/workflows/demo-checks.yml`, this repo): on every push and pull request, the demos that changed get
  democheck, break-it and perfcheck (`tools/ci/pick.cjs` picks them; a change to `demos/lib/*.js` or `*.css` or to a check script
  checks every demo, and so does a commit message containing [check all]). Every Sunday at 9:17 UTC, every demo gets break-it, opencheck and perfcheck in parallel jobs. Actions tab,
  Demo checks, Run workflow: type demos, or all. The repo is public, so this is free with no limit.
- **Key checks** (`.github/workflows/key-checks.yml`, TeacherKeys): every Monday at 10:41 UTC, `rekey.sh` (never `--apply`) on the
  keys whose demo or worksheet changed in the last 8 days, plus `rules.cjs --keys`. Run workflow: changed, all, or slugs.
  TeacherKeys is private, so this uses Actions minutes (a run of every key is about 7 hours of them): prefer changed or slugs.
- Reading results: `gh run list -R PhysicsSteven/VirtualDemos -L 5`, then `gh run view <id> --log-failed`. Each run's Summary
  page lists the failures (and for keys, what moved); the pictures, reports and new key files are the run's downloads (on its GitHub page; `gh run download` is blocked in cloud sessions).
  A failed run also emails Steve. Moved keys still need the judgment in "Keys after a demo change" below.
- Still by hand: watching like a student (judging the pictures), the odd sequences break-it can't script, and videos.

## Watch it like a student (Steve 2026-11-11): what the scripts cannot judge

A clean script run is half the test. The scripts find things that break, not things that are wrong to look at or hard to follow:
Orbital Resonances passed every scripted check while it opened at 1,000 years per second. So also judge these by eye (the
`watch.cjs` pictures help), and fix what you find, keeping the physics exact:
- Fresh-eyes first minute: open the demo cold at its defaults, change nothing, no notes. Within a minute a student should be able
  to tell what to do and what to notice, the labels should make sense and stay readable while things move, and the first view,
  before any click, should already show something worth learning. Repeat at each setup or preset's own defaults.
- Time scale is visible: any animation shows its rate on screen ("1 s = 3 years") and opens at a pace where the key event takes a
  few seconds and the eye can follow it (no blur, no strobing, nothing lapping faster than about once a second).
- Picture matches the physics: what is drawn must be physically right, not only the numbers. Sizes, directions, arrows, what
  floats or sinks, what moves with what. Correct readouts beside a misleading drawing still teach the wrong thing.
- Matches the worksheet: when a demo changes, walk its worksheet steps against the demo's defaults, so a change (a default speed,
  a preset, a label, a control) can't silently break a step or make a recorded value unreachable.
- Controls behave the same across demos: scroll, + and − all zoom about the view's center, never toward the pointer (Steve
  2026-11-12), drag pans or turns the view the same way, Reset and Play mean the same thing. Where a demo differs, make it match
  the common behavior rather than adding a new one.
- Long runs: some faults show only after minutes (the Springs two mass graphs went wavy after a few minutes); perfcheck covers it.

A future judgment pass (not a rule yet): name the one or two misconceptions students bring to each demo (heavier falls faster,
seasons from distance) and check the demo doesn't accidentally reinforce them.

## Break-it details

Use the demo the way a student would: zoom far out and back in, pan, drag, push every control to its limits, type extreme or
odd inputs, resize the stage, switch setups, themes and looks. Known values must stay exact throughout (the derivatives
grapher's f′(0) for x³ − 3x stays −3 at any zoom; it once shipped with zoom bugs that only showed after a zoom out and back
in). Put a demo's known values in `tools/breakit/<demo>.cjs` (`checks` and `steps`; model: `tools/breakit/derivatives.cjs`).
The script's full list of steps and probes is at the top of `tools/breakit.cjs`.

## Keys after a demo change

democheck lists the captures that load the demo. For each, `rekey.sh <slug>` shows the data cells and key words that moved.
Last digit changes are fine (Steve 2026-11-08). If a number a student would quote moved, rework that answer in
`<slug>-answers.json` from the rounded values the worksheet shows, run `rekey.sh <slug> --apply`, and commit TeacherKeys with
the reason. `node tools/rules.cjs --keys $TEACHERKEYS` then confirms no handout is newer than its key PDF.

## Site-wide runs (rare, expensive)

`--all` works on breakit, watch, perfcheck and opencheck. A full breakit or perfcheck run takes 1 to 1.5 hours of machine time;
a student-view run of all 153 demos took a night of Opus agents. Ask Steve before starting one on a smaller plan. Results of
the last runs are in project memory (breakit-sitewide-2026-11-14, student-view-sitewide-2026-11-15).

## Tool details (moved from docs/tools.md)
`source ~/.vd-env` sets `NODE_PATH` and `VD_THREE`, which every browser check needs in the cloud container.
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
- `node tools/breakit.cjs <demo>... | --all [--jobs 4]` is the break-it test (Steve 2026-11-09): it uses the demo like a student (zoom out and back
  in, drag past the edge, keys, Play pressed fast, every slider to its ends, odd numbers and text typed in every box, every select option,
  checkbox and preset button, Projector, Day and Cool lab, a 400 px phone, Reset all) and probes after every step for page errors, NaN or
  Infinity on the page, a stage gone blank, sideways scroll on the phone, Reset all that leaves a control changed, and the demo's known
  values from `tools/breakit/<demo>.cjs` (`checks`: page code returning true or a message; `steps`: extra sequences; see
  `tools/breakit/derivatives.cjs`). A zoom out and back that does not return is a warning to look at (a zoom limit is fine). About 30 s a
  demo. Pictures and a JSON report go to `/tmp/vdcheck/breakit/<demo>`. The script finds things that break, not things that are hard to
  watch, so it is only half the test: the other half is the "watch it like a student" checks in CLAUDE.md (fresh-eyes first minute, time
  scale on screen, picture matches the physics, worksheet steps still work, controls behave like other demos). A clean breakit run is not a pass alone.
  It also checks that scroll zoom stays centered (two notches with the pointer off center must match two at the center; Steve
  2026-11-12). `--zoom-only` runs just the canvas zoom, drag and key steps. On the 4 core cloud box use `--jobs 3` at most; a photo
  that times out or a harness "page closed" under heavy load is the machine, not the demo: rerun that demo alone.
- `node tools/perfcheck.cjs <demo>... | --all [--jobs 2] [--seconds 60] [--stress]` is the frame rate decay test (Steve 2026-11-14):
  it runs the demo at its defaults for a minute (pressing any Fire, Add or Drop button once a second), times every animation frame's
  script, and fails a demo whose script time a frame doubles past 12 ms, or that freezes; it warns on JS heap or element growth, and
  reruns the break-it known values at the end to catch drift over a long run. It caught the Charged Particles slowdown fixed in
  5aaa799 (`--file` tests an older copy of the page). Run it alone on a quiet machine: about 70 minutes for every demo at jobs 2.
