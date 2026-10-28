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
| `#vdReset` (from `tools/reset.py`) | Reset all: reloads the page without any shared settings (`set=`), asking first when readings would be lost (`window.vdReadings = () => n` overrides the count; `button.vdLost()` for tests) |
| `details.plotfold` | presses the pressed `[data-plot]` button again (or sends a resize) when the fold opens |
| `header.bar > div:first-child` with an `h1` | loads `nav.js` (written by `tools/courses.py`, never by hand), which puts the course navigation above the title: Home › course › unit › demo, and the previous and next demo in that course in course page order. A demo in several courses follows the course page or demo the student came from (sessionStorage `vd-course`), else its first course. Hidden in Projector and print; sends a resize after it adds its line. |
| `#proj` | adds **Copy link** (`VD.share`) and **Fullscreen** (`VD.fullscreen`) just before it, and the keyboard shortcuts (2026-10-25, below) |

**Copy link** copies a link that reopens the demo with every setting that differs from how the page opened: each range or number input, select, check box and radio with an id, the pressed button of each group of `aria-pressed` buttons (scene, view, mode, preset, toggles), and each `VD.knob` given `get` and `set`. They ride in one parameter, `set=key~value!key~value`, beside the page's own (`setup`, `view`); once a mode, view or select differs, every control on show goes in too, since a mode switch can set other controls when pressed. Opening the link presses the groups, then sets selects, check boxes and values with the same events a student's hand makes, twice, and once more 0.8 s later for a demo that loads its data late; it never starts a run. Left out on purpose: text boxes, inputs in tables (readings), Reduce motion, controls inside `[hidden]` or `[data-vd-noshare]`, and a Mystery that is on (a check box or pressed button whose label says Mystery), so a link never gives a Mystery away. What a student places or draws in the picture rides along where the demo gives it to `VD.share.picture(key, { get, set })` (2026-10-25): the charges and probe in Coulomb, the flux setup in Gauss (surface, its shape and the charges), the vector tips in Vectors, a rewired or built circuit board with its scope channels in Circuits, and a Draw your own curve with its energy line in Potential Energy Curves. `get()` returns a short string ('' for nothing to carry) and `set(s)` puts the picture back; it is set last, after the switches and values. `VD.share.pack(obj)` and `VD.share.unpack(s)` give a compact URL safe form of JSON. Still not carried: caliper jaws and cursors, the run itself and recorded readings. Where the clipboard is not allowed (a page opened from a file), it shows the link to copy by hand.

**Fullscreen** puts the whole page in full screen (Esc leaves); the button removes itself where the browser cannot (iPhone Safari).

**Keyboard shortcuts:** Space plays or pauses, R resets the run, P switches Projector, F switches fullscreen. Space presses the first shown button of `[data-vd-key~="play"]`, `#play`, `#playBtn`, `#stream`, `#acq`, `#run`, `#go`, `#pause`, `#motor`, `#launch`, `#drop`, `#fire`; R the first of `[data-vd-key~="reset"]`, `#reset`, `#restart`, `#restartBtn`, `#again`, else Reset all (which asks before clearing readings). Mark a different button with `data-vd-key="play"` or `"reset"`; `VD.keyTarget('space' | 'r' | 'p' | 'f')` says what a key would press. They never fire while a text or number box, select or editable cell has the focus, with Ctrl, Alt or Cmd, or while the focus is on the picture or a control with its own keys (a canvas, a knob, a typed readout, anything with a tabindex), so the demos' own keys there (Space on many canvases, R on Heat engines, Ising, Eddy currents, Gyroscope and Magnetic force, P on EM waves) keep their meaning. Space on a focused button or check box presses that control, as browsers do.

Called by the demo:

| Helper | Use |
|---|---|
| `VD.projector({ onChange })` | wires `#proj`, restores the saved choice (`vd-projector`), and calls `onChange` on the next frame after each change; returns `set(on)` |
| `VD.setupCard(card, { grip, within })` | the Set up card on the picture. Returns `away(on)` (fades it and makes it inert while the apparatus runs: call `away(false)` on Pause so it comes back, as Steve asked), `ghost(on)` (see through while something under it is dragged) and `reset()`. Where the card floats over the picture, its grip (default: its first child, given a ⠿ mark) drags it anywhere inside the picture; arrow keys on the grip move it 10 px (Shift 40 px); a double click puts it back. It stays inside the card's offsetParent, or inside `within` (an element or selector) for a card placed on the bench over the stage. On phones, where the card sits under the picture, it stays put. The demo still places the card; the drag is a CSS translate on top. |
| `VD.fitStage(stage)` | for a picture whose controls float over it on cards (position absolute) and handles placed on the drawing: gives the stage (default `#stage`) a minimum height that fits every such card and handle, so a short window or Projector never cuts a control off. It only grows the stage past its CSS, and only while something would be cut; it measures again on window resize, Projector, a click in the stage and any size change of the stage or a card. Returns `update()`. A stage whose controls stack in the page flow needs CSS instead: `@media (min-width: 821px) { .bench > .stage { align-self: start; min-height: max(760px, 100%); } }` (the stage grows with its content and still fills a tall window; a fixed `min-height` alone sizes the grid row and clips what is taller). `node tools/vdcheck.cjs --only clip --all` finds controls cut off at six window sizes. |
| `VD.pictureSize(stage)` | automatic on every demo with a `.bench > .stage` (vd.js wires it; a demo does not call it). From 821 px wide, the picture (the stage row with the most canvas and svg area, or the whole stage where a drawing fills it) keeps at least a third of its width in height, up to 400 px and 60 % of the window, so a short wide window (a tablet in landscape) no longer squashes it into a strip; big screens are unchanged. A grip on the stage's bottom edge (`.vd-size`) drags it taller or shorter (mouse or finger; arrow keys, Shift for bigger steps, Home or a double click to go back), never below what the CSS gives. The size is a factor on the default, kept per demo in localStorage `vd-size:<demo>`; Reset all clears it. It grows the stage (the picture's row takes the extra) or else gives the picture a minimum height; where neither works the grip is left off. Demos redraw on their own ResizeObserver. Tests: `VD.pictureSize.factor()`, `.set(f)`, `.pic()`, `.natural()`, `.grip`. |
| `VD.split(el, o)` | a divider between two pieces a demo draws side by side or one above the other (Steve, 2026-10-28). Drag it (mouse or finger); it snaps to 1/3, 1/2, 2/3 and the default when let go near one, and the snap marks show while dragging; arrow keys step snap to snap (Shift 1 %), Home or a double click goes back. Kept per demo, key and direction in localStorage `vd-split:<demo>:<key>:<x\|y>`; Reset all clears every one. `o = { key, axis() -> "x" \| "y" \| null, def, min, max, snaps, onChange, label, host, box() }`. Returns `s` with `s.f()` (the first piece's share: use it wherever the demo had a fixed share), `s.place()` (call in the demo's resize) and `s.set(f)`. A single canvas demo swaps its constant (Forces `W * 0.6`, Pendulum `W * 0.55`) for `s.f()`; panes in a grid set `grid-template-columns` or `-rows` from it in `onChange` (Exoplanets, Spin Resonance). Pilot: forces, chladni, pendulum, exoplanets, spin-resonance. |
| `VD.knobs()` | every range input inside `.instr` (the instrument panel in the picture) becomes a knob: 15° a step, arrow keys (Shift for ten steps), Page Up/Down, Home/End, the wheel (Shift for ten steps). Its readout (`output for` the input) takes a typed value through `VD.typeIn`. `data-unit` on the input names the unit when the readout can show a word ("none"). Used by forces, cart-launch, impulse, induction-at-work and wire-force (2026-10-24; it replaced the copy pasted in each). |
| `VD.typeIn(out, { get, set, min, max, step, unit, label, can, knobs, seed })` | click or tap a readout (or focus it and press Enter, or type a digit) to type an exact value; Enter or tapping away keeps it, Esc cancels. The value is clamped to min..max and rounded to the step from min, and a short note says so when it was changed. Phones get the number keypad, with a ± key when the range goes below zero. `can()` false (Mystery, Blind) leaves the readout alone; each element in `knobs` opens the same entry on a double click, Enter or a typed digit. min, max and step may be functions. |
| `VD.typeAt(x, y, o)`, `VD.knobAt(inp, x, y, o)`, `VD.tap(e[, up])` | the same entry floating over a picture, for knobs drawn in a canvas or 3D view. A demo calls `VD.tap(e)` when a press grabs a knob and `VD.tap(e, true)` on its release; when that says it was a tap (within 6 px and 600 ms), `VD.knobAt` opens the entry at the pointer for the range input behind the knob, and the typed value goes into that input as a slider move would ('input', then 'change'). Used by photoelectric, e-over-m, electron-diffraction, gamma-spectroscopy, speed-of-light, spin-resonance, capacitors and coulomb-sandbox (2026-10-24). |
| `VD.knob(k, { deg, turn, home, end, page, get, set })` | the turning of a DOM knob that is not a range input in a panel: a click every `deg` degrees calls `turn(n)`; wheel and arrow keys `turn(±1)` (Shift ±10), Page Up/Down `turn(±page)`, Home and End. The demo keeps the value and draws the mark. Used by `VD.knobs` and the function generator and supply knobs of string-density, two-speaker, wave-power, resistivity, standing-waves and chladni. With `get()` and `set(v)` (and an id on `k`), Copy link carries the knob's value (string-density, two-speaker, wave-power and resistivity, 2026-10-25; the other two have a range input behind each knob). |
| `VD.tools({ el, time, timeUnit, scale, strip, stage, float })` | the measuring tools (`vdtools.js`, loaded the first time a demo calls this): a **Tools** button in the strip opens a draggable **stopwatch** and a draggable **ruler**. `time()` gives the demo's simulated time (null when the view has no clock), so the stopwatch runs only while the demo's own clock advances: it stops on Pause, runs slow in slow motion, and ignores a reset to zero. `scale()` gives meters per CSS pixel of `el`, or `{ el, m, area, unit }` with `area = [x, y, w, h]` for the part drawn to scale, or null (3D, a graph, a picture not to scale); a demo without `scale` has no ruler, so it never shows a length the picture does not have. The ruler reads to the nearest pixel. A demo with several scenes calls it once per scene; the button moves to the strip on show and hides when nothing in view has a clock or a scale. Added 2026-10-25 to 48 demos (list in COLLABORATION.md). |
| `VD.energy({ el, terms, total, unit, run, hidden, phase })` | energy bars (one per term, plus a total) and an optional phase plot (`phase: { el, get, x, v, n }`, v against x with a trail), drawn every frame on the demo's own canvases while they are on show, so a folded panel costs nothing; the scale only grows within a run (`run()` gives a key that starts it again). Loads `vdenergy.js` the first time; its comment lists the options. Used by projectile-drag and kepler-orbits (Energy bars) and springs (Phase plot), 2026-10-25. |
| `VD.howTo({ src, poster, title })` | a **How this works** button under the handout button in the sidebar; it opens a popup with a short video (30 s or less, dark theme) of one sample measurement, made from a script by `tools/howto/` (see its README). The video loads only when opened, plays muted at once unless Reduce motion is on, and stops when the popup closes (Esc, ✕ or a click outside). `src`, `poster` and `title` may be functions, read each time it opens, so a demo with several worksheets shows the video for the one its controls are on (Room Acoustics, by its Measure switch). |

The Acoustics module look is in the library too: `look.css` (depth, quieter secondary text, the instrument finish) and `gear.js` (`window.VDGear`, canvas drawing for lab equipment). `tools/look.py` links both into the module's demos, just before `</head>`; edit them here and run `tools/vdcheck.cjs` on the module.

`vd3.js` (`window.VD3`) is for a demo that adds a three.js view beside its flat one: `VD3.load(cb)` loads three.js r128 from cdnjs the first time a 3D view opens; `VD3.renderer()` gives a WebGL renderer with its pixel ratio capped (or null, so the demo keeps its flat view); `VD3.lowPower()` says when to open the flat view first; `VD3.orbit(el, o, onChange, opt)` turns, zooms and resets a z up camera kept in `o = { th, ph, zoom }` (drag, wheel, pinch, double click, comma and period; on a touch screen one finger scrolls the page and two fingers turn and pinch, `opt.oneFinger` for the old one finger turning; `VD3.touch(el, h)` gives a demo with its own orbit code the same touch handling), with `opt.grab(e)` to take a pointer for a drag on the apparatus; `VD3.place(cam, o, target, r)` puts the camera there. Room acoustics uses it (2026-10-24); the force table, Chladni and levitation still have their own copies and can switch when next edited.

`photondata.js` (`window.VDPHOTON`, 2026-10-25) is data, not code: NIST XCOM cross sections for Z = 1 to 92, the SRD 126 μ/ρ and μ_en/ρ tables of 15 tissues, dosimeters and shields, fluorescence and form factor data, and SpekPy tungsten tube spectra, 286 kB. It is built by `tools/photondata` (sources and checks in its README) and read by Photon Interactions in Matter; a later photon demo that needs coefficients should link it rather than carry its own tables.

`vd3kit.js` (`window.VD3K`, 2026-10-24) is the shared 3D kit for the visual passes on Thermodynamics, Modern Physics and Astronomy, built on `vd3.js` from the 3D code that resistivity, wire force, string density, Doppler and tides each wrote for themselves. Link it after `vd3.js`. `VD3K.view` wires the 3D | Flat switch (`?view=flat` or `?view=3d`, flat on a low power device or without WebGL); `VD3K.stage` gives the renderer, scene, camera, lights, shadows, theme following and `project` for words drawn over the picture; the props are `bench`, `backdrop`, `box`, `rod`, `cable`, `meter` (LCD or needle face), `ruler`, `glass`, `bulb` and `label`; `particles` (an instanced pool coloured with `heat`), `marker` and `follow` show and track molecules or electrons; `sky`, `star`, `planet`, `earth` (loads `earth.js`, the NASA Blue Marble also used by Distances) and `ring` build space scenes. The full list with options is the comment at the top of the file, and `vd3kit.html` is a working sample of every helper (not linked from any course page). Demos that already have their own 3D code keep it; switch them only when they are edited anyway.

The site wide visual pass (from 2026-10-24) links the same two files into every demo it reaches (`python3 tools/look.py <demo>`), and redraws the demo's apparatus with `VDGear`. Helpers added for it: `ball` (shaded sphere), `wall` (lit lab wall), `stand` (retort stand), `boss` (boss head clamp), `gate` (photogate), `panel` (frosted panel for a trace drawn on the canvas), `spring` (helical coil), `outdoors` (sky and field). The pass changes only drawing and the look link: CORE, controls and exports stay as they were, which `tools/vdcheck.cjs` confirms (its only differences are the two new ids `vd-look` and `vd-gear`, the look's styles and tokens, and the screenshots).

Phase two helpers (presets, step buttons, readings, Export to worksheet) are added when a demo is being edited anyway, each behind the same checks. Pendulum uses `VD.setupCard`; other demos with a Set up card switch to it when they are next edited.

`theme.js` (`window.VDTheme`, 2026-10-25) is the site theme switch: Light, Dark or Browser default, saved in `localStorage` as `vd-theme` (`light`, `dark` or `auto`); with nothing saved the site opens in Dark (Steve, 2026-10-25). Every page links it first in `<head>` (`python3 tools/theme.py` adds it; `tools/courses.py`, `tools/notes.py`, the star slice template, `template.html` and the handouts' `_includes/head-custom.html` carry it), so `data-theme` is set before the page paints. It answers `matchMedia('(prefers-color-scheme: dark)')` for the chosen theme and runs that query's `change` listeners on a switch, so a demo that redraws on a system theme change (`retheme`, `tokens()`) redraws on a switch with no change of its own; `<picture>` thumbnails follow too, and a `vd-theme` event fires on window. It puts the switch in the demo header beside Reset all and Projector, at the top right of the home and course pages, beside Print on notes, and at the top of a handout; an empty `[data-vd-theme]` element places it elsewhere. A new canvas or 3D view reads its colors through tokens or `VD3.dark()` and redraws on that `change` event, as before.

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
