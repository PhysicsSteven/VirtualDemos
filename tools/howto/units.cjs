// How this works: Units, Scales and Estimates. Worksheet 1's first conversion, 72.0 km/h to m/s, in Convert units.
// Expected: 72.0 km/h × (1000 m / 3600 s per km/h) = 20.0 m/s exactly.
require('./lib.cjs')({ demo: 'units', title: 'Units, Scales and Estimates' }, async (r) => {
  const { state, p } = r;
  /* the box around an element's text, not the whole row it sits in */
  const tbox = (sel) => p.evaluate((sel) => { const g = document.createRange(); g.selectNodeContents(document.querySelector(sel)); const q = g.getBoundingClientRect(); return [q.x - 6, q.y - 4, q.width + 12, q.height + 8]; }, sel);
  const pick = async (sel, v) => { await r.click(sel); await p.selectOption(sel, v); await r.tick(8); };

  state.caption = 'Sample: convert 72.0 km/h to m/s, the first conversion on Worksheet 1';
  await r.secs(3.0);

  state.caption = 'Open Convert units';
  await r.click('[data-t="convert"]');
  await r.secs(1.0);

  const panel = await r.box('#pConvert');
  state.zoom = [panel[0] - 10, panel[1] - 70, 800, 450];
  state.caption = 'Pick the quantity: speed';
  await r.click('#cKind [data-k="speed"]');
  await r.secs(0.6);

  state.caption = 'Type the value: 72.0';
  const v = await r.box('#cVal');
  await r.moveTo(v[0] + v[2] / 2, v[1] + v[3] / 2, 0.5);
  await p.click('#cVal', { clickCount: 3 }); state.click = r.frame; await r.tick(4);
  for (const ch of '72.0') { await p.keyboard.type(ch); await r.tick(5); }
  await r.secs(0.5);

  state.caption = 'Choose the units: from km/h to m/s';
  await pick('#cFrom', 'km/h');
  await pick('#cTo', 'm/s');
  r.check.chain = await r.text('#cChain');
  state.arrow = { rect: await tbox('#cChain') };
  await r.secs(2.4);

  state.caption = 'Each factor equals 1, so km/h cancels and the answer is 20.0 m/s';
  state.arrow = { rect: await tbox('#cOut') };
  r.check.out = await r.text('#cOut');
  await r.secs(3.4);
  state.arrow = null; state.zoom = null;

  state.caption = 'Write the other two as factor chains too, then fill in the Data table';
  await r.moveTo(640, 600, 0.8);
  await r.secs(3.0);
});
