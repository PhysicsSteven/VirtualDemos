// How this works: Circuits (Worksheet 6, Reactance and Phase). Part 1's first reading: Capacitor only, C1 = 10 µF, V1 at 10 V peak,
// 50 Hz. Expected: X_C = 1/(2π × 50 × 10 µF) = 318.3 Ω, Vrms = 10/√2 = 7.071 V, Irms = 7.071/318.3 = 22.21 mA (I0 = 31.42 mA),
// φ = −90.0° (the current leads), average power 0; ω = 314.2 rad/s, T = 20.00 ms.
require('./lib.cjs')({ demo: 'circuits', title: 'Reactance and Phase', query: '#reactance' }, async (r) => {
  const { state, p, W } = r;
  const mid = (n) => p.evaluate((n) => { const e = __circ.byName(n), a = __circ.px(...e.a), b = __circ.px(...e.b); return [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2]; }, n);
  const clickAt = async (x, y) => { await r.moveTo(x, y, 0.7); state.click = r.frame; state.down = true; await p.mouse.down(); await r.tick(3); await p.mouse.up(); state.down = false; };
  const typeIn = async (sel, txt) => {
    await r.click(sel); await p.keyboard.press('Control+A'); await r.tick(2);
    for (const ch of txt) { await p.keyboard.type(ch); await r.tick(2); }
    await p.keyboard.press('Enter'); await r.tick(3);
  };
  const union = (sels) => p.evaluate((sels) => {
    const q = sels.map((s) => document.querySelector(s).getBoundingClientRect()), x = Math.min(...q.map((b) => b.left)), y = Math.min(...q.map((b) => b.top));
    return [x, y, Math.max(...q.map((b) => b.right)) - x, Math.max(...q.map((b) => b.bottom)) - y];
  }, sels);

  state.caption = 'Sample reading: a 10 µF capacitor alone on a 10 V peak source at 50 Hz';
  await r.secs(3.0);

  state.caption = 'Open the Capacitor only setup: C1 = 10 µF, V1 at 10 V peak';
  await r.scrollRail('#presets');
  await r.click('#presets [data-p="acC"]');
  r.check.parts = await p.evaluate(() => { const v = __circ.byName('V1'), C = __circ.byName('C1'); return `C1 ${C.C} F, V1 ${v.V0} V peak, ${v.f} Hz`; });
  state.arrow = { rect: await r.box('#cPane') };
  await r.secs(2.0);
  state.arrow = null;

  state.caption = 'Set the frequency: click V1, then type 50 Hz';
  await clickAt(...(await mid('V1')));
  await r.scrollRail('#cF');
  await typeIn('#nF', '50');
  r.check.f = await p.evaluate(() => __circ.byName('V1').f);
  state.arrow = { rect: await r.box('#cF') };
  await r.secs(1.0);
  state.arrow = null;

  state.caption = 'Read the rms current and the phase. Watch which peaks first on the scope';
  await r.scrollRail('#acRead');
  r.check.acRead = (await r.text('#acRead')).replace(/\s+/g, ' ');
  state.arrow = { rect: await union(['#acRead div:nth-child(4)', '#acRead div:nth-child(6)']) };
  await r.secs(1.6);
  state.arrow = null;
  await p.evaluate(() => window.scrollTo(0, 400)); await r.tick(2);
  const sp = await r.box('#sPane');
  state.zoom = [sp[0], r.H - 337.5, 600, 337.5];   /* the scope: the voltage and current traces and phasors */
  await r.secs(2.4);
  state.zoom = null;

  state.caption = 'Capture the reading. It goes into the table';
  await r.scrollRail('#capture');
  await r.click('#capture');
  await r.tick(4);
  const tb = await r.box('#tbl');
  state.zoom = [W - 600, tb[1] - 150, 600, 337.5];
  state.arrow = { rect: await r.box('#tbl tbody tr') };
  await r.secs(2.2);
  state.arrow = null; state.zoom = null;
  r.check.row = await p.evaluate(() => [...document.querySelectorAll('#tbl tbody tr td')].map((td) => (td.querySelector('input') ? td.querySelector('input').value : td.textContent)));
  r.check.csv = (await p.evaluate(() => __circ.readingsCSV())).trim().split('\n').slice(-2);

  state.caption = 'Repeat at 100 to 2000 Hz, then send the series to the worksheet';
  const ex = await r.box('#expTab');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(3.0);
});
