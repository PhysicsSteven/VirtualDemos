# How this works videos

Each demo can have a short video (30 s or less) of one sample measurement, opened from the "How this works" button that
`VD.howTo({ src, poster })` puts under the handout button. The video adds to the worksheet steps; it never replaces them.
Videos are dark theme only (Steve, 2026-10-25).

Rules for a video:
- One real run of the demo, nothing staged or edited in: every number on screen comes from the demo. Pick the sample from
  the demo's own worksheet (the first data table's first measurement) and check what the demo shows against the physics.
- The measuring tools (Tools button, stopwatch, ruler) never appear. `lib.cjs` hides the Tools button on every take (visibility hidden, so the layout stays the live one).
- Captions: the opening line says what the sample is; then one numbered caption per step, saying the task and, since this
  is a video about the controls, how it is done ("Set the length: drag the bob up the string to 0.80 m"). Plain words, no
  hyphens in compound modifiers, American spelling. End on what comes next (repeat, then send to the worksheet).
- 30 s or less (20 to 25 s is the target), about 1 to 2 MB.

Everything comes from a script, so when a demo changes, rerun both steps:

1. `<demo>.cjs` holds only the steps; `lib.cjs` does the rest (see its top comment for the helpers). It drives the demo
   in Chromium on Playwright's paused fake clock, one frame per 1/30 s, so the demo runs at true speed however slow the
   screenshots are. It writes `frames/` and `timeline.json` (caption, zoom, arrow target and pointer for each frame) and
   prints the readings in `r.check`. `pendulum.cjs` is the model.

       python3 -m http.server 8811   # from the repo root
       VD_THREE=/path/to/three.min.js NODE_PATH=/opt/node-tools/node_modules node tools/howto/<demo>.cjs /tmp/take-<demo>

   About 10 minutes for a 22 s video. `DEMO_URL` overrides the page. cdnjs is blocked in cloud sessions, hence `VD_THREE`
   (`npm pack three@0.128.0`).

2. `compose.py` draws the zooms (eased), the orange arrows and rings, the pointer with its clicks and the numbered
   captions from the timeline, and encodes H.264 at 1280×720 (needs Pillow, ffmpeg and the Inter font).

       python3 tools/howto/compose.py /tmp/take-<demo> demos/media/how-this-works/<demo>.mp4
       ffmpeg -ss 1.5 -i demos/media/how-this-works/<demo>.mp4 -frames:v 1 -vf scale=960:-1 -q:v 7 demos/media/how-this-works/<demo>.jpg

   Look at frames from the result (`ffmpeg -vf "select='eq(n\,300)'"`) before shipping: zooms in the page, arrows on the
   right thing, captions not hiding what the step is about.

3. In the demo, after its other setup: `VD.howTo({ src: 'media/how-this-works/<demo>.mp4', poster: 'media/how-this-works/<demo>.jpg' });`
   A demo with several worksheets can pass functions instead, read each time the popup opens, as Room Acoustics does:
   `` VD.howTo({ src: () => `media/how-this-works/${S.mode === 'decay' ? 'room-acoustics' : 'anechoic-chamber'}.mp4`, ... }) ``.
   Its scripts set `demo:` to the page they record (`anechoic-chamber.cjs` records `room-acoustics`).
