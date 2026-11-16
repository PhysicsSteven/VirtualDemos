# Recipes for small jobs

Written 2026-11-15 for upkeep on a smaller plan. Each recipe is the shortest path that still meets the house rules. Start every
session with `bash tools/cloud/setup.sh` (add `--site` for worksheets or keys) and `source ~/.vd-env`; the checks are in
`docs/checks.md`.

## Which model

- Default for a small job: work in the main session; don't start subagents.
- Bulk mechanical work (translation, the same edit across many files, running a check list and summarizing it): subagents on
  `model: "haiku"`, or `"sonnet"` when it needs judgment (reading screenshots, walking a worksheet).
- Physics judgment, a new demo, or a key whose answers must be reworked: Opus, in the main session.
- Fable passes and site-wide sweeps only when Steve asks for one.
- Read only what the job needs: CLAUDE.md, the memory note for that demo (search memory by demo name), and the one doc a step
  points to. Don't read whole demo files to find one control: `grep -n` for it.

## Fix one demo

1. Reproduce it: open the demo on the local server or run `node tools/breakit.cjs <demo>` and look at the pictures.
2. Edit `demos/<demo>.html` (physics between the CORE markers, constants from `demos/lib/constants.js`). Add or fix a test in
   `curriculum/validation/test_<demo>.cjs` when the physics changed.
3. `node tools/democheck.cjs <demo>`. Then the break-it and student-view checks for what changed (`docs/checks.md`).
4. Visual fix: `node tools/beforeafter.cjs <demo>` and attach the picture to the reply.
5. Text changed: `node tools/i18n.cjs harvest <demo>`, then keep Spanish complete: `node tools/i18n.cjs todo es demo/<demo>`
   prints the new strings as JSON; fill them in Mexican Spanish (decimal point, tú; a haiku subagent is fine for a few dozen)
   and `node tools/i18n.cjs merge es demo/<demo> filled.json`. Worksheets use `ws/<slug>`: `node tools/i18n.cjs harvest --site $VD_SITE ws/<slug>` after `setup.sh --site`.
   A local build adds header strings ("Site", "Library", ...) the live page lacks: drop them from the en catalog before committing.
   Spanish stays a draft; no Spanish review passes (Steve 2026-11-08). Rules: `demos/lib/i18n.md`.
6. Students would notice: add an entry at the top of `whats-new.js`.
7. democheck named key captures: `rekey.sh` each one (below). Controls, defaults or layout changed: retake its video (below).
8. Commit (the hook runs rules.cjs), push, confirm CI with `gh run list -R PhysicsSteven/VirtualDemos -L 3`.

## Update one worksheet key

In the TeacherKeys clone, with the local site running (`setup.sh --site`):

    bash worksheet-keys/tools/rekey.sh <slug>            # shows data cells and key words that moved
    bash worksheet-keys/tools/rekey.sh <slug> --apply    # keeps the new data, key .json and PDF
    bash worksheet-keys/tools/rekey.sh <slug> --reprint  # no capture: reprints from the committed data (answers or handout edit)

If an answer a student would quote moved, rework it in `worksheet-keys/<course>/<slug>-answers.json` from the rounded values
the worksheet shows (compute every "within N %" claim), then `--apply`. Ignore last digit changes (Steve 2026-11-08). Many
keys hold tables typed by hand or a random Mystery draw the capture does not repeat; `--apply` then refuses (it would empty
committed cells), so merge the new data by hand or `--reprint`. A demo
key (`demo-keys/answers/<demo>.md`) is rebuilt with `python3 tools/notes.py <demo> --keys $TEACHERKEYS/demo-keys` from this
repo. Commit TeacherKeys separately, with the reason. Two threads editing TeacherKeys at once conflict in the PDFs and
`handout-hashes.json`: keep key work in one thread.

## Edit a worksheet

1. Edit `curriculum/labs/students/<slug>.md` (rules in `docs/handouts.md`: an hour or less, clear steps).
2. `bash tools/cloud/setup.sh --site` rebuilds it; open `http://127.0.0.1:8765/VirtualDemos/curriculum/labs/students/<slug>.html`.
3. `rekey.sh <slug> --reprint` reprints its key so `rules.cjs --keys` stays clean.

## Retake one How this works video

    bash tools/howto/take.sh <name>

Then look at `/tmp/takes/<name>-sheet.jpg` and check the readings it prints against the script's Expected line. If the demo's
layout moved, fix the steps in `tools/howto/<name>.cjs` (find positions from the demo's test hooks, never fixed pixels) and
take it again. Rules: Night only, no measuring tools, no off camera time skips. Full recipe: `tools/howto/README.md`.
Videos are not What's new items.

## Add a constant or fix a cited number

Add it with its source to `demos/lib/constants.js`, use `VDC.<name>` in the demo, and grep the handouts, notes and keys for
the old value: one value per quantity everywhere. `rules.cjs` flags copies that differ.

## Add a demo (rare; ask Steve first on a smaller plan)

Follow `docs/adding-a-demo.md` and its checklist. Expect a full session of Opus.

## Before ending a session

Commit and push finished, checked work; say in the commit message what is left. Save Steve's new decisions to project memory
in the turn you learn them. Leave scratch files out of the repo (`git status` before committing; stray `*.log` files have
slipped in before).
