// How this works: Circuits (Worksheet 4, AC Resonance). The first reading of Single components: Resistor only, R1 = 100 Ω, V1 at
// 10 V peak and 100 Hz. Expected: I0 = 10/100 = 100.0 mA, Irms = I0/√2 = 70.71 mA, φ = 0.0°, P = Vrms Irms = 7.071 × 0.07071 =
// 0.500 W; ω = 2π × 100 = 628.3 rad/s, T = 10.00 ms. The video then sets the next frequency, 200 Hz, by typing it.
require('./lib.cjs')({ demo: 'circuits', title: 'AC Resonance', query: '#ac' }, async (r) => {
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

  state.caption = 'Sample reading: a 100 Ω resistor alone on a 10 V peak source at 100 Hz';
  await r.secs(3.0);

  state.caption = 'Hide the predictions: tick Blind in the Lab section';
  await r.scrollRail('details.fold:has(#blind) > summary');
  await r.click('details.fold:has(#blind) > summary');
  await r.tick(4);
  await r.click('#blind');
  r.check.blind = await p.evaluate(() => __circ.blind);
  await r.secs(0.6);

  state.caption = 'Choose Resistor only: R1 = 100 Ω, V1 at 10 V peak and 100 Hz';
  await r.scrollRail('#presets');
  await r.click('#presets [data-p="acR"]');
  r.check.parts = await p.evaluate(() => { const v = __circ.byName('V1'), R = __circ.byName('R1'); return `R1 ${R.R} ohm, V1 ${v.V0} V peak, ${v.f} Hz`; });
  state.arrow = { rect: await r.box('#cPane') };
  await r.secs(2.0);
  state.arrow = null;

  state.caption = 'Read the phase, the rms current and the average power';
  await r.scrollRail('#acRead');
  r.check.acRead = (await r.text('#acRead')).replace(/\s+/g, ' ');
  state.arrow = { rect: await union(['#acRead div:nth-child(4)', '#acRead div:nth-child(8)']) };
  await r.secs(2.6);
  state.arrow = null;

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

  state.caption = 'Next frequency: click V1, then type 200 Hz';
  await clickAt(...(await mid('V1')));
  await r.scrollRail('#cF');
  await typeIn('#nF', '200');
  r.check.f2 = await p.evaluate(() => __circ.byName('V1').f);
  state.arrow = { rect: await r.box('#cF') };
  await r.secs(1.0);
  state.arrow = null;

  state.caption = 'Capture at each frequency, for C and L alone too, then send the table to the worksheet';
  await r.scrollRail('#capture');
  const ex = await r.box('#expTab');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(3.0);
});
