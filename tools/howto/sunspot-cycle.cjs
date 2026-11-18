// How this works: The Sun: Surface and Cycle (Sunspots and the Solar Cycle, Cycle). The first table's first reading:
// the minimum that starts cycle 13, March 1890, smoothed sunspot number 8.3.
// Expected: March 1890, cycle 13, smoothed 8.3.
require('./lib.cjs')({ demo: 'sun-surface', title: 'The Sun: Surface and Cycle', query: '?ws=sunspot-cycle' }, async (r) => {
  const { state, p, W } = r;
  const rd = (label) => p.evaluate((l) => { for (const d of document.querySelectorAll('#out > div')) if (d.querySelector('dt').textContent.trim().startsWith(l)) { const q = d.getBoundingClientRect(); return { t: d.querySelector('dd').textContent, b: [q.x, q.y, q.width, q.height] }; } return null; }, label);
  state.ptr = [1100, 300]; await p.mouse.move(...state.ptr);
  state.caption = 'Sample reading: the sunspot minimum that starts cycle 13';
  await r.secs(2.2);

  state.caption = 'Choose Cycle above the picture';
  await r.click('#modeSeg [data-mode="cycle"]'); await r.secs(1.2);

  state.caption = 'Click the Date readout, type 1890 and press Enter';
  await r.scrollRail('#oYear');
  await r.click('#oYear'); await p.keyboard.press('Control+A'); await r.tick(2);
  for (const ch of '1890') { await p.keyboard.type(ch); await r.tick(2); }
  await p.keyboard.press('Enter'); await r.secs(1.0);

  state.caption = 'Click the Date slider and press the arrow keys, a month at a time, to the lowest Smoothed value';
  await r.click('#sYear'); await r.tick(4);
  /* the click may move the knob: go back to January 1890, then step to March */
  await p.evaluate(() => { const s = document.getElementById('sYear'); s.value = 1890; s.dispatchEvent(new Event('input', { bubbles: true })); }); await r.tick(4);
  for (let k = 0; k < 2; k++) { await p.keyboard.press('ArrowRight'); await r.secs(0.5); }
  await r.secs(0.6);

  state.caption = 'Read the Smoothed and Cycle readouts';
  await r.scrollRail('#out');
  const s = await rd('Smoothed'), c = await rd('Cycle');
  r.check.smoothed = s.t; r.check.cycle = c.t; r.check.date = (await rd('Date')).t;
  const top = Math.min(s.b[1], c.b[1]), bot = Math.max(s.b[1] + s.b[3], c.b[1] + c.b[3]);
  state.zoom = [W - 600, top - 140, 600, 337.5];
  state.arrow = { rect: [Math.min(s.b[0], c.b[0]) - 6, top - 6, 300, bot - top + 12] };
  await r.secs(2.6); state.arrow = null; state.zoom = null;

  state.caption = 'Press Record reading. The row goes into the table';
  await r.scrollRail('.vd-readings');
  await r.click('.vd-rec'); await r.tick(4);
  const tb = await r.box('.vd-readings table');
  state.zoom = [W - 600, tb[1] - 150, 600, 337.5];
  state.arrow = { rect: await r.box('.vd-readings tbody tr') };
  await r.secs(2.0); state.arrow = null; state.zoom = null;
  r.check.row = await p.evaluate(() => JSON.stringify(window.vdRows()[0]));

  state.caption = 'Do the same for each minimum, then press Export to worksheet';
  const ex = await r.box('.vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.4);
});
