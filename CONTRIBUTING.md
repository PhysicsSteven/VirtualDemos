# Building a demo

Every demo in this collection follows the same house style, so the site reads as one course resource. This file is the spec for adding a new one, whether you write it by hand or ask Claude to build it.

## The basics

- One demo is one self-contained HTML file in `demos/`. Nothing to install, no build step.
- Use `demos/coulomb-sandbox.html` as the reference for layout and code patterns, and `demos/projectile-drag.html` for a demo with a chart.
- After adding a demo, add a card to `index.html` under the right subject and a row to the table in `README.md`.

## House style

- **Document wrapper:** doctype, head, the small reset `<style>`, and the Google Fonts link for Atkinson Hyperlegible and JetBrains Mono.
- **Design tokens:** copy the CSS tokens exactly from the reference demo: the `:root` block, the `@media (prefers-color-scheme: dark)` block guarded by `:root:not([data-theme="light"])`, and the `:root[data-theme="dark"]` block. New tokens are fine if they are defined in all three blocks.
- **Layout and components:** reuse `.app`, `.bar` (title, one line subtitle, mono units line on the right), `.bench` (canvas stage on the left, 290px `.rail` on the right, stacking under 820px), `.stage`, `.rail` sections with uppercase `h2` labels, `.chips` presets with `aria-pressed`, `.btn`, `.seg`, `.readout`, `.toggles`, `.slider-head`, `.hint` and `.key`.
- **Colors:** `--pos` and `--neg` are the two physics colors, `--accent` is for interactive highlights, `--equi` (gold) is for a secondary curve, and `--muted` is for ghosts and labels.
- **Canvas:** handle devicePixelRatio, resize with a ResizeObserver on the stage, read colors from the CSS tokens at draw time, and redraw when the color scheme or the root `data-theme` attribute changes. Interactive canvases use pointer events with `touch-action: none`.
- **3D:** only when the demo truly benefits. Use three.js r128 from cdnjs with Z up and hand written orbit controls, as in the Coulomb Sandbox. No other libraries.
- **Phones:** must work at about 400px wide with no horizontal page scroll.
- **Opening state:** the demo opens working and interesting, either running or with a meaningful picture drawn. If it animates and `prefers-reduced-motion` is set, it starts paused with a visible Play button.
- **Controls:** Play/Pause and Reset where there is animation, a time speed control where useful, and 3 to 6 presets for the most teachable scenarios, each with a one sentence hint about what to look for. Interactive canvases are focusable, and arrow keys nudge a selected object where it makes sense.

## Projector mode

Every new demo has a Projector toggle in the `.bar`. It sets `data-projector="on"` on the root element, scales the UI text up (about 1.25x), and makes canvas lines thicker and labels larger, so the demo reads from the back of a lecture hall and in a recorded video. The choice is remembered in localStorage, wrapped in try/catch.

Demos built before this rule (Coulomb Sandbox, Gas in a Box, Optics Bench, Projectile Range) still need projector mode added.

## Physics and writing

- Real units and real numbers in the readouts: SI, or the field's standard units (AU, solar masses, years, parsecs, nm, K). Use tabular numbers.
- Physically correct within the stated model. When something is simplified, say so in a short hint in the rail. Never fake behavior.
- Copy is plain, direct and short. No em dash asides and no emoji. Avoid hyphens in compound modifiers unless truly necessary: "main sequence star", "two body problem", "light curve".
- The `<title>` is the demo's name, two to four words, the same as the `h1`.

## Checking a demo

1. Run `node --check` on the extracted inline script.
2. Load it in a browser at desktop width in light mode and at phone width in dark mode. Check for console errors and for horizontal scroll on the phone.
3. Sanity check the core physics against a known textbook value.

## Planned demos

- **Astronomy:** Moon Phases, Reasons for Seasons, Kepler's Laws, Stellar Evolution (HR diagram with white dwarf cooling), Finding Exoplanets (transit and radial velocity), parallax and the distance ladder, Hubble expansion, tides, Doppler effect
- **Electricity and magnetism:** charged particle in E and B fields, RC circuit, Faraday induction, Gauss's law, parallel plate capacitor, magnetic fields of currents
- **Mechanics and waves:** pendulum to chaos, collisions, springs and simple harmonic motion, standing waves
- **Thermodynamics:** PV diagram engine, entropy and mixing
- **Optics:** double slit interference and diffraction
- **Modern physics:** photoelectric effect, atomic spectra
