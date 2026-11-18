// How this works: Inside the Sun (How Long Can a Star Shine?, Fuel). The first table's first reading and a typed star:
// The Sun, 1.00 M☉ at 1.00 L☉, lives 10.5 billion years; then 0.80 M☉ typed into the Star mass readout.
// Expected: lifetime 10.5 billion years for the Sun; the recorded row 1.00, 1.00, 10.5.
require('./lib.cjs')({ demo: 'inside-the-sun', title: 'Inside the Sun', query: '?ws=star-lifetimes' }, async (r) => {
  const { state, p, W } = r;
  const rd = (label) => p.evaluate((l) => { for (const d of document.querySelectorAll('#out > div')) if (d.querySelector('dt').textContent.trim().startsWith(l)) { const q = d.getBoundingClientRect(); return { t: d.querySelector('dd').textContent, b: [q.x, q.y, q.width, q.height] }; } return null; }, label);
  const typeIn = async (sel, txt) => {
    await r.click(sel); await p.keyboard.press('Control+A'); await r.tick(2);
    for (const ch of txt) { await p.keyboard.type(ch); await r.tick(2); }
    await p.keyboard.press('Enter'); await r.tick(3);
  };
  state.ptr = [1100, 300]; await p.mouse.move(...state.ptr);
  state.caption = 'Sample reading: how long the Sun can shine on its hydrogen';
  await r.secs(2.2);

  state.caption = 'Choose Fuel above the picture';
  await r.click('#modeSeg [data-mode="fuel"]'); await r.secs(1.0);

  state.caption = 'Under Setups, press The Sun';
  await r.scrollRail('#presets');
  await r.click('#presets [data-p="sun"]'); await r.secs(1.2);

  state.caption = 'Read the lifetime: fuel divided by the rate the star burns it';
  await r.scrollRail('#out');
  const a = await rd('Lifetime, this star');
  r.check.lifetime = a.t;
  state.zoom = [W - 600, a.b[1] - 160, 600, 337.5];
  state.arrow = { rect: [a.b[0] - 6, a.b[1] - 6, a.b[2] + 12, a.b[3] + 12] };
  await r.secs(2.6); state.arrow = null; state.zoom = null;

  state.caption = 'Press Record reading. The row goes into the table';
  await r.scrollRail('.vd-readings');
  await r.click('.vd-rec'); await r.tick(4);
  const tb = await r.box('.vd-readings table');
  state.zoom = [W - 600, tb[1] - 150, 600, 337.5];
  state.arrow = { rect: await r.box('.vd-readings tbody tr') };
  await r.secs(2.0); state.arrow = null; state.zoom = null;
  r.check.row = await p.evaluate(() => JSON.stringify(window.vdRows()[0]));

  state.caption = 'For your own star, click the Star mass readout and type the value';
  await r.scrollRail('#oM');
  await typeIn('#oM', '0.8');
  r.check.mass = await r.text('#oM');
  await r.secs(1.6);

  state.caption = 'Record each star, then press Export to worksheet';
  await r.scrollRail('.vd-readings');
  const ex = await r.box('.vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.4);
});
