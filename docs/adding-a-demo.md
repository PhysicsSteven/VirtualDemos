# Adding and editing demos

Moved from CLAUDE.md on 2026-11-01, unchanged. CLAUDE.md keeps the rules; this is the detail.

## Demos
- One HTML file each, plus the shared library in `demos/lib/` (`vd.css`, `vd.js`; read `demos/lib/README.md`). Demos are being
  moved onto it in batches (Steve, 2026-10-23); the README lists which. A moved demo links the library and keeps only its physics,
  drawing and what it does differently. Shared styles and behaviour go in the library, never pasted into each file again; moving a
  demo must change nothing visible, which `tools/vdcheck.cjs` checks. Other libraries: three.js r128 from cdnjs (only where already
  used). Fonts from Google Fonts. A new 3D view uses `demos/lib/vd3kit.js` (`VD3K`: scene, 3D | Flat switch, lab props, particles, sky;
  sample in `demos/lib/vd3kit.html`) on top of `vd3.js`, instead of copying 3D code from another demo.
- **Edit `demos/<name>.html` directly.** Do not rebuild a demo from an older copy elsewhere: that once wiped a finished scenery pass.
- Physics lives between `// ==CORE START==` and `// ==CORE END==` and must run in Node. Never put a `//` comment mid line before code
  (use `/* */`). Tests: `curriculum/validation/test_<demo>.cjs` using `core('<demo>', 'fn,...')` from `demo_source.cjs`.
- House style: light and dark themes via CSS tokens (in `:root`, the dark `@media` block and `[data-theme=dark]`; the site's
  Light | Dark | Browser default switch is `demos/lib/theme.js`, which sets `data-theme`, so a canvas redraws on the
  `prefers-color-scheme` `change` event), projector mode,
  400 px and 360 px phones with no sideways scroll, keyboard access, Reduce motion, Blind mode for predictions. No cap on presets (Steve, 2026-10-24): add as many as the demo needs.
- Keep existing control names: handouts refer to them. Add, don't rename.
- Check visually (Playwright/Chromium is installed) at desktop and phone width, light and dark, and look at the screenshots.

## How to add a demo
1. Copy `demos/lib/template.html` to `demos/<name>.html` and change its `../lib/` links to `lib/`. It is a small working demo on the
   shared library: header with Projector, picture with a Set up card (`VD.setupCard`), Setups chips, readouts, Lab fold.
2. Replace the physics between the CORE markers (it must run in Node) and the drawing; keep the page structure and class names, so
   the shared styles in `vd.css` apply. Put only what this demo does differently in its own `<style>`; don't copy shared rules in,
   and don't add `data-vd-off` (that list is only for demos that were moved and never had a rule).
3. For readings and Export to worksheet, copy the Readings section and its code from `demos/pendulum.html` (the `vd-handoff:<name>`
   key, `FROM_DEMO` map in worksheet.js) until the library has a readings helper.
4. If the demo has a running clock or a picture drawn to scale, give it the measuring tools in one line: `VD.tools({ el: can, time: () => S.t, scale: () => metersPerPixel })`
   (see `demos/lib/vdtools.js`; leave out `scale` when nothing is to scale, and return null from either in a view where it does not apply).
5. Run `python3 tools/reset.py <name>` and `python3 tools/qr.py <name>` (markup only, since the demo links the library), then the
   new demo checklist below, and check it with `NODE_PATH=/opt/node-tools/node_modules node tools/vdcheck.cjs --only after <name>`
   (page errors, sideways scroll) and by looking at the screenshots it saves.

