// How this works: Functions and Their Derivatives, worksheet derivatives-reading-graphs. The first table's first reading:
// the cubic x³ − 3x, sketched with f′ and f″ hidden, then the point typed at x = −2 and recorded.
// Expected: f(−2) = −2, f′(−2) = 9, f″(−2) = −12 (and at x = −1: f = 2, f′ = 0, f″ = −6).
require('./lib.cjs')({ demo: 'derivatives', title: 'Functions and Their Derivatives' }, async (r) => {
  const { state, p } = r;
  const typeIn = async (sel, v) => { await r.click(sel); await p.keyboard.press('Control+A'); await p.keyboard.type(String(v), { delay: 60 }); await r.secs(0.3); await p.keyboard.press('Enter'); await r.secs(0.4); };
  const row = () => p.evaluate(() => window.vdReadingRow());

  state.caption = 'Sample reading: f, f′ and f″ of the cubic x³ − 3x at x = −2';
  await r.secs(2.4);

  state.caption = 'Press the setup A cubic: peaks and an inflection';
  await r.scrollRail('#presets [data-p="cubic"]');
  await r.click('#presets [data-p="cubic"]');
  await r.secs(0.6);

  state.caption = 'Sketch first: untick f′ and f″ under Curves, so only f is drawn';
  const cards = await r.box('#shelf');
  await p.evaluate((y) => window.scrollTo(0, y), Math.max(0, cards[1] - 260)); await r.tick(2);
  await r.click('#showD1'); await r.secs(0.3);
  await r.click('#showD2'); await r.secs(1.0);
  state.caption = 'Sketch f′ and f″ from the shape of f, then tick them again to check';
  await r.click('#showD1'); await r.secs(0.3);
  await r.click('#showD2');
  await p.evaluate(() => window.scrollTo(0, 0)); await r.tick(2);
  const pane = await r.box('#pane');
  state.zoom = [pane[0], pane[1], pane[2], pane[2] * 9 / 16];
  await r.secs(2.4);
  state.zoom = null;

  state.caption = 'Type −2 in Move the point to and press Enter';
  await r.scrollRail('#pxIn');
  await typeIn('#pxIn', -2);
  r.check.at2 = await row();
  state.caption = 'At the point shows f, f′ and f″ there: −2, 9 and −12';
  state.arrow = { rect: await r.box('#out') };
  await r.secs(2.6);
  state.arrow = null;

  state.caption = 'Press Record reading'; state.capTop = true;
  await r.scrollRail('.vd-rec');
  await r.click('.vd-rec');
  await r.secs(1.0);

  state.caption = 'Repeat at x = −1, 0, 1 and 2; then the corner, and send them to the worksheet'; state.capTop = true;
  await r.scrollRail('#pxIn');
  await typeIn('#pxIn', -1);
  r.check.at1 = await row();
  await r.scrollRail('.vd-rec');
  await r.click('.vd-rec');
  await r.secs(0.6);
  const ex = await r.box('.vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.4);
  r.check.rows = await p.evaluate(() => [...document.querySelectorAll('.vd-readings tbody tr')].map((tr) => [...tr.cells].map((c) => c.textContent).join(' | ')));
});
