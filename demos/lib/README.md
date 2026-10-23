# Shared demo library

`vd.css` and `vd.js` hold what the demos share, so a change to a shared piece is one edit here instead of one in every demo. Steve approved the move on 2026-10-23; the plan and its independent review are in the project files (`framework/plan.md`, `framework/review.md`).

## What a moved demo looks like

```html
<html lang="en" data-vd-off="mono bar-h1 ...">
<head>
...
<link rel="stylesheet" href="lib/vd.css">
<script src="lib/vd.js"></script>
<style>/* only what this demo does differently */</style>
```

- The demo keeps its physics (`// ==CORE START==` to `// ==CORE END==`), its drawing, its markup, and every id and control name.
- `vd.css` comes before the demo's own `<style>`, so the demo can override anything.
- Most rules in `vd.css` carry a name in a comment. A demo that never had a rule lists its name in `data-vd-off` on `<html>`, and the rule stays off there. `tools/vdlib.py` writes that list. Removing a name from a demo's list is a visible change (the demo adopts the shared rule), so do it on purpose and check the result.
- Links are relative, so the demos also work opened from a file (`tools/thumbs.py` does that).

## What `vd.js` does

Runs by itself once the page has loaded:

| Markup | Behaviour |
|---|---|
| `.vd-qr` button (from `tools/qr.py`) | shown in Projector mode; large on click, closes on click or Esc; removes itself when the page is not the hosted copy it points to |
| `#vdReset` (from `tools/reset.py`) | Reset all: reloads the page, asking first when readings would be lost (`window.vdReadings = () => n` overrides the count; `button.vdLost()` for tests) |
| `details.plotfold` | presses the pressed `[data-plot]` button again (or sends a resize) when the fold opens |

Called by the demo:

| Helper | Use |
|---|---|
| `VD.projector({ onChange })` | wires `#proj`, restores the saved choice (`vd-projector`), and calls `onChange` on the next frame after each change; returns `set(on)` |
| `VD.setupCard(card, { grip })` | the Set up card on the picture. Returns `away(on)` (fades it and makes it inert while the apparatus runs: call `away(false)` on Pause so it comes back, as Steve asked), `ghost(on)` (see through while something under it is dragged) and `reset()`. Where the card floats over the picture, its grip (default: its first child, given a ⠿ mark) drags it anywhere inside the picture; arrow keys on the grip move it 10 px (Shift 40 px); a double click puts it back. On phones, where the card sits under the picture, it stays put. The demo still places the card; the drag is a CSS translate on top. |

Phase two helpers (presets, step buttons, readings, Export to worksheet) are added when a demo is being edited anyway, each behind the same checks. Pendulum uses `VD.setupCard`; other demos with a Set up card switch to it when they are next edited.

## Rules

1. Moving a demo changes nothing a student sees or does. `tools/vdcheck.cjs` must pass for it: CORE unchanged, the same controls, the same computed style on every element, the same colour tokens, the same Export to worksheet data, and the same screenshots.
2. Never change or remove what is here: moved demos rely on it. Add a new named rule or a new helper or option instead. A new named rule applies to every moved demo that does not list its name, so add the name to the lists of those that should not get it.
3. After any edit here, run `tools/vdcheck.cjs --full` on every moved demo before pushing.
4. No brace next to a percent sign in these files (GitHub Pages runs Liquid on Markdown), and confirm the Pages build after pushing.
5. Before moving a batch, list its demos below under "Being moved" and in a COLLABORATION.md entry, so no one else edits them meanwhile.

## Moving a demo

```sh
python3 tools/vdlib.py <demo>...
NODE_PATH=/opt/node-tools/node_modules node tools/vdcheck.cjs <demo>...     # --full for the full set
```

For a demo with Export to worksheet, first write `tools/vdcheck/<demo>.cjs` with an `export` script that records a few readings and an `edit` step (see `pendulum.cjs`), so the export check compares real data. Then run the demo's Node tests, and log the batch in COLLABORATION.md.

The QR, Reset all, handout button and sidebar trim tools see the library link and insert only markup in a moved demo.

## Moved demos

| Demo | Date | Notes |
|---|---|---|
| pendulum | 2026-10-23 | pilot |
| string-density | 2026-10-23 | pilot |
| collisions | 2026-10-23 | batch 1 |
| fluids | 2026-10-23 | batch 1 |
| forces | 2026-10-23 | batch 1 |
| kepler-orbits | 2026-10-23 | batch 1 |
| motion-graphs | 2026-10-23 | batch 1 |
| projectile-drag | 2026-10-23 | batch 1 |
| rotational-dynamics | 2026-10-23 | batch 1 |
| springs | 2026-10-23 | batch 1 |
| stress-strain | 2026-10-23 | batch 1 |
| vectors | 2026-10-23 | batch 1 |
| viscometer | 2026-10-23 | batch 1 |

## Being moved

Batch 2 (Physics II), from 2026-10-23 23:10: capacitors, circuits, coulomb-sandbox, currents-fields, displacement-current, eddy-currents, electrostatics-at-work, em-waves, faraday, gauss-law, household-wiring, huygens, induced-electric-field, induction-at-work, induction, magnetic-force, magnetism-in-matter, optics-bench, polarization, resistivity, the-eye, wire-force.
