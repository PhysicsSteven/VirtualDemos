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
| `VD.setupCard(card, { grip, within })` | the Set up card on the picture. Returns `away(on)` (fades it and makes it inert while the apparatus runs: call `away(false)` on Pause so it comes back, as Steve asked), `ghost(on)` (see through while something under it is dragged) and `reset()`. Where the card floats over the picture, its grip (default: its first child, given a ⠿ mark) drags it anywhere inside the picture; arrow keys on the grip move it 10 px (Shift 40 px); a double click puts it back. It stays inside the card's offsetParent, or inside `within` (an element or selector) for a card placed on the bench over the stage. On phones, where the card sits under the picture, it stays put. The demo still places the card; the drag is a CSS translate on top. |
| `VD.knobs()` | every range input inside `.instr` (the instrument panel in the picture) becomes a knob: 15° a step, arrow keys (Shift for ten steps), Page Up/Down, Home/End, the wheel (Shift for ten steps). Its readout (`output for` the input) takes a typed value through `VD.typeIn`. `data-unit` on the input names the unit when the readout can show a word ("none"). Used by forces, cart-launch, impulse, induction-at-work and wire-force (2026-10-24; it replaced the copy pasted in each). |
| `VD.typeIn(out, { get, set, min, max, step, unit, label, can, knobs, seed })` | click or tap a readout (or focus it and press Enter, or type a digit) to type an exact value; Enter or tapping away keeps it, Esc cancels. The value is clamped to min..max and rounded to the step from min, and a short note says so when it was changed. Phones get the number keypad, with a ± key when the range goes below zero. `can()` false (Mystery, Blind) leaves the readout alone; each element in `knobs` opens the same entry on a double click, Enter or a typed digit. min, max and step may be functions. |

The Acoustics module look is in the library too: `look.css` (depth, quieter secondary text, the instrument finish) and `gear.js` (`window.VDGear`, canvas drawing for lab equipment). `tools/look.py` links both into the module's demos, just before `</head>`; edit them here and run `tools/vdcheck.cjs` on the module.

`vd3.js` (`window.VD3`) is for a demo that adds a three.js view beside its flat one: `VD3.load(cb)` loads three.js r128 from cdnjs the first time a 3D view opens; `VD3.renderer()` gives a WebGL renderer with its pixel ratio capped (or null, so the demo keeps its flat view); `VD3.lowPower()` says when to open the flat view first; `VD3.orbit(el, o, onChange, opt)` turns, zooms and resets a z up camera kept in `o = { th, ph, zoom }` (drag, wheel, pinch, double click, comma and period; on a touch screen one finger scrolls the page and two fingers turn and pinch, `opt.oneFinger` for the old one finger turning; `VD3.touch(el, h)` gives a demo with its own orbit code the same touch handling), with `opt.grab(e)` to take a pointer for a drag on the apparatus; `VD3.place(cam, o, target, r)` puts the camera there. Room acoustics uses it (2026-10-24); the force table, Chladni and levitation still have their own copies and can switch when next edited.

The site wide visual pass (from 2026-10-24) links the same two files into every demo it reaches (`python3 tools/look.py <demo>`), and redraws the demo's apparatus with `VDGear`. Helpers added for it: `ball` (shaded sphere), `wall` (lit lab wall), `stand` (retort stand), `boss` (boss head clamp), `gate` (photogate), `panel` (frosted panel for a trace drawn on the canvas), `spring` (helical coil), `outdoors` (sky and field). The pass changes only drawing and the look link: CORE, controls and exports stay as they were, which `tools/vdcheck.cjs` confirms (its only differences are the two new ids `vd-look` and `vd-gear`, the look's styles and tokens, and the screenshots).

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
| capacitors | 2026-10-23 | batch 2 |
| circuits | 2026-10-23 | batch 2 |
| coulomb-sandbox | 2026-10-23 | batch 2 |
| currents-fields | 2026-10-23 | batch 2 |
| displacement-current | 2026-10-23 | batch 2 |
| eddy-currents | 2026-10-23 | batch 2 |
| electrostatics-at-work | 2026-10-23 | batch 2 |
| em-waves | 2026-10-23 | batch 2 |
| faraday | 2026-10-23 | batch 2 |
| gauss-law | 2026-10-23 | batch 2 |
| household-wiring | 2026-10-23 | batch 2 |
| huygens | 2026-10-23 | batch 2 |
| induced-electric-field | 2026-10-23 | batch 2 |
| induction-at-work | 2026-10-23 | batch 2 |
| induction | 2026-10-23 | batch 2 |
| magnetic-force | 2026-10-23 | batch 2 |
| magnetism-in-matter | 2026-10-23 | batch 2 |
| optics-bench | 2026-10-23 | batch 2 |
| polarization | 2026-10-23 | batch 2 |
| resistivity | 2026-10-23 | batch 2 |
| the-eye | 2026-10-23 | batch 2 |
| wire-force | 2026-10-23 | batch 2 |
| rocket | 2026-10-23 | layout clean |
| gyroscope | 2026-10-23 | layout clean |
| elevator | 2026-10-23 | layout clean |
| cart-launch | 2026-10-23 | batch 3 |
| catenary | 2026-10-23 | batch 3 |
| center-of-mass | 2026-10-23 | batch 3 |
| circular-motion | 2026-10-23 | batch 3 |
| double-pendulum | 2026-10-23 | batch 3; merged into pendulum 2026-10-24 (double-pendulum.html now redirects) |
| energy-sources | 2026-10-23 | batch 3 |
| equilibrium | 2026-10-23 | batch 3 |
| gravity-near-earth | 2026-10-23 | batch 3 |
| gps-clocks | 2026-10-23 | batch 3 |
| impulse | 2026-10-23 | batch 3 |
| potential-curves | 2026-10-23 | batch 3 |
| rotation | 2026-10-23 | batch 3 |
| tides | 2026-10-23 | batch 3 |
| units | 2026-10-23 | batch 3 |
| acoustic-levitation | 2026-10-23 | batch 4 (Acoustics) |
| chladni | 2026-10-23 | batch 4 (Acoustics) |
| doppler | 2026-10-23 | batch 4 (Acoustics) |
| kundts-tube | 2026-10-23 | batch 4 (Acoustics) |
| resonators | 2026-10-23 | batch 4 (Acoustics) |
| room-acoustics | 2026-10-23 | batch 4 (Acoustics) |
| sound-intensity | 2026-10-23 | batch 4 (Acoustics) |
| sound-waves | 2026-10-23 | batch 4 (Acoustics) |
| standing-waves | 2026-10-23 | batch 4 (Acoustics) |
| timbre | 2026-10-23 | batch 4 (Acoustics) |
| two-speaker | 2026-10-23 | batch 4 (Acoustics) |
| ultrasound | 2026-10-23 | batch 4 (Acoustics) |
| wave-power | 2026-10-23 | batch 4 (Acoustics) |
| binding-energy | 2026-10-24 | batch 5 (Misc) |
| black-holes | 2026-10-24 | batch 5 (Misc) |
| blackbody | 2026-10-24 | batch 5 (Misc) |
| compton | 2026-10-24 | batch 5 (Misc) |
| diffraction-grating | 2026-10-24 | batch 5 (Misc) |
| distance-ladder | 2026-10-24 | batch 5 (Misc) |
| double-slit | 2026-10-24 | batch 5 (Misc) |
| exoplanets | 2026-10-24 | batch 5 (Misc) |
| franck-hertz | 2026-10-24 | batch 5 (Misc) |
| gamma-spectroscopy | 2026-10-24 | batch 5 (Misc) |
| heat-engines | 2026-10-24 | batch 5 (Misc) |
| hr-diagram | 2026-10-24 | batch 5 (Misc) |
| ideal-gas | 2026-10-24 | batch 5 (Misc) |
| ising | 2026-10-24 | batch 5 (Misc) |
| lagrange-points | 2026-10-24 | batch 5 (Misc) |
| lasers | 2026-10-24 | batch 5 (Misc) |
| moon-phases | 2026-10-24 | batch 5 (Misc) |
| photoelectric | 2026-10-24 | batch 5 (Misc) |
| quantum-waves | 2026-10-24 | batch 5 (Misc) |
| radioactive-decay | 2026-10-24 | batch 5 (Misc) |
| rotation-curves | 2026-10-24 | batch 5 (Misc) |
| rutherford | 2026-10-24 | batch 5 (Misc) |
| seasons | 2026-10-24 | batch 5 (Misc) |
| spacetime | 2026-10-24 | batch 5 (Misc) |
| spectra | 2026-10-24 | batch 5 (Misc) |
| thin-films | 2026-10-24 | batch 5 (Misc) |
| white-dwarf-cooling | 2026-10-24 | batch 5 (Misc) |
| bz-reaction | 2026-10-24 | batch 6 (three.js) |
| dna | 2026-10-24 | batch 6 (three.js) |
| e-over-m | 2026-10-24 | batch 6 (three.js) |
| electron-diffraction | 2026-10-24 | batch 6 (three.js) |
| hydrogen-orbitals | 2026-10-24 | batch 6 (three.js) |
| relativity-em | 2026-10-24 | batch 6 (three.js) |
| speed-of-light | 2026-10-24 | batch 6 (three.js) |
| spin-resonance | 2026-10-24 | batch 6 (three.js) |
| star-slice | 2026-10-24 | batch 6 (three.js), built from tools/star-slice/star-slice.template.html |

## Being moved

Visual pass (Claude, from 2026-10-24): Physics I, then Physics II, demo by demo; drawing code and the look link only. Misc is skipped for now (Steve, 2026-10-24).

Nothing at the moment. Every demo is on the library except the redirect pages (nonuniform-circular, and circuit-builder, transient-circuits, rc-circuits, ac-circuits, which open the matching mode of Circuits).
