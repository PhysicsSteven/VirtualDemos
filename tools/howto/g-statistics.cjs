// How this works: Measurement Uncertainty, worksheet "Is g Really 9.81? Statistics on a Pendulum". Part A from a freshly opened
// page (random draw set 1): Many timings: histogram, Repeat 100 times, the histogram under the normal curve and the shape
// readouts, then Export to worksheet.
// Expected: n = 100, mean period 2.0097 s, s = 0.0773 s, 69 within ±s, 96 within ±2s, r = 0.992 (key row A)
require('./lib.cjs')({ demo: 'measurement-uncertainty', title: 'Measurement Uncertainty', query: '?ws=g-statistics' }, async (r) => {
  const { state, p } = r;
  state.ptr = [640, 380]; await p.mouse.move(...state.ptr);
  state.caption = 'Sample: time one swing of a 1.000 m pendulum by hand, 100 times';
  await r.secs(2.6);
  state.caption = '1. Under Setups, press Many timings: histogram';
  await r.scrollRail('#presets');
  await r.click('#presets [data-p=many]');
  await r.secs(2.4);
  state.caption = '2. Repeat 100 times: the histogram fills under the normal curve';
  await r.click('#rep100');
  await r.secs(4.2);
  state.caption = '3. Count within ±s and ±2s; the quantile plot is straight if normal';
  await r.secs(3.6);
  state.caption = '4. Record n, T̄, s, the counts, ḡ and s_g from Analysis';
  await r.scrollRail('#ana');
  const a = await r.box('#ana'); state.arrow = { rect: a };
  await r.secs(3.8); state.arrow = null;
  r.check.ana = await p.evaluate(() => { const o = {}; for (const x of document.querySelectorAll('#ana > div')) o[x.querySelector('dt').textContent] = x.querySelector('dd').textContent; return JSON.stringify(o); });
  state.caption = '5. Export to worksheet, then Clear';
  await r.scrollRail('.vd-readings');
  const ex = await r.box('.vd-export'); await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8); state.arrow = { rect: ex };
  await r.secs(2.6);
});
