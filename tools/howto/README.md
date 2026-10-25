# How this works videos

Each demo can have a short video (30 s or less) of one sample measurement, opened from the "How this works" button that
`VD.howTo({ src, poster })` puts under the handout button. The video adds to the worksheet steps; it never replaces them,
and the measuring tools never appear in it. Videos are dark theme only (Steve, 2026-10-25).

Everything in a video comes from a script, so when a demo changes, rerun both steps:

1. `record.cjs` drives the demo in Chromium and saves a frame per 1/30 s on Playwright's fake clock (`page.clock`
   installed and paused, then `runFor` per frame), so the demo runs at true speed however slow the screenshots are. It
   writes `frames/` and `timeline.json` (caption, zoom, arrow target and pointer for each frame) and prints the readings it
   got, to check against the physics.

       python3 -m http.server 8811   # from the repo root
       VD_THREE=/path/to/three.min.js NODE_PATH=/opt/node-tools/node_modules node tools/howto/record.cjs /tmp/take

   Takes about 10 minutes. `DEMO_URL` overrides the page. cdnjs is blocked in cloud sessions, hence `VD_THREE`.

2. `compose.py` draws the zooms (eased), the orange arrows and rings, the pointer with its clicks and the numbered
   captions from the timeline, and encodes H.264 at 1280×720 (needs Pillow, ffmpeg and the Inter font).

       python3 tools/howto/compose.py /tmp/take demos/media/how-this-works/<demo>.mp4

   Then a poster: `ffmpeg -ss 1.5 -i <demo>.mp4 -frames:v 1 -vf scale=960:-1 -q:v 7 <demo>.jpg`.

`record.cjs` is written for Pendulum (L = 0.80 m, θ₀ = 5°, photogate reads 1.795 s). A new demo copies it and changes the
steps between the `// 1.` and `// 6.` comments.
