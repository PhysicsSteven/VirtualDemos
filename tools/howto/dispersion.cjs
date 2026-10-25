// How this works: Optics Bench, Dispersion worksheet. Part 2's first material: the Prism setup's prism made crown glass (N-BK7),
// recorded across the spectrum. Expected (Sellmeier, N-BK7): n = 1.5308 at 400 nm, 1.5167 at 589.3 nm, 1.5131 at 700 nm; at minimum
// deviation the 60° prism turns 400 nm light by 2 asin(n sin 30°) − 60° = 39.89° and 700 nm light by 38.32°.
require('./lib.cjs')({ demo: 'optics-bench', title: 'Optics Bench: Dispersion' }, async (r) => {
  const { state, p } = r;
  const can = await r.box('#view');
  /* the recorded rows that sit clear of the caption, as one rect */
  const rowsRect = () => r.p.evaluate(() => { const q = [...document.querySelectorAll('.vd-readings tbody tr')].map((e) => e.getBoundingClientRect()).filter((b) => b.bottom < 630);
    const x = Math.min(...q.map((b) => b.left)), y = Math.min(...q.map((b) => b.top)); return [x, y, Math.max(...q.map((b) => b.right)) - x, Math.max(...q.map((b) => b.bottom)) - y]; });
  const at = (x, y) => p.evaluate(([x, y]) => window.__ob.px(x, y), [x, y]);

  state.caption = 'Sample: Part 2, a crown glass prism across the spectrum';
  await r.secs(2.8);

  state.caption = 'Choose the Prism setup';
  await r.click('#presets [data-p="prism"]');
  await r.secs(1.0);

  state.caption = 'Select the prism: click it on the bench';
  await r.moveTo(...(await at(2, -1)), 0.8);
  state.click = r.frame; state.down = true; await p.mouse.down(); await r.tick(3); await p.mouse.up(); state.down = false;
  await r.secs(0.8);

  state.caption = 'Make it crown glass';
  await r.scrollRail('#selFields');
  await r.click('#selFields button:nth-child(2)');
  await r.tick(3);
  r.check.note = await r.text('#selFields p.hint');
  state.arrow = { rect: await r.box('#selFields p.hint') };
  await r.secs(2.4);
  state.arrow = null;

  state.caption = 'Violet bends most: n is largest at short wavelengths';
  await r.moveTo(can[0] + can[2] * 0.8, can[1] + can[3] * 0.62, 0.7);
  state.zoom = [can[0] + can[2] * 0.5, can[1] + 100, can[2] * 0.5, can[2] * 0.5 * 9 / 16];   /* the spectrum leaving the prism */
  await r.secs(3.0);
  state.zoom = null;

  state.caption = 'Record with the prism selected: one row for each of eight wavelengths';
  await r.scrollRail('.vd-readings .vd-rec');
  await r.click('.vd-readings .vd-rec');
  await r.tick(4);
  await r.scrollRail('.vd-readings .status');   /* the rows clear of the caption */
  state.arrow = { rect: await rowsRect() };
  await r.secs(2.4);
  state.arrow = null;

  state.caption = 'Send crown glass to the worksheet, then repeat for flint, fused silica and water';
  const ex = await r.box('.vd-readings .vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.8);
  r.check.rows = await p.evaluate(() => window.vdRows().map((x) => `${x.lam_nm} ${x.n} ${x.dev_deg}`));
});
