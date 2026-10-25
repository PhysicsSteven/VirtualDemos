// How this works: Resistivity of a Wire. The length scan's first reading: the Mystery wire, 0.405 mm, 0.20 A, 20 °C, L = 0.100 m.
// Expected (the demo's hidden ρ = 4.2 × 10⁻⁷ Ω·m): A = π(0.405 mm)²/4 = 0.1288 mm², R = ρL/A = 0.3260 Ω, V = IR = 0.06521 V.
require('./lib.cjs')({ demo: 'resistivity', title: 'Resistivity of a Wire' }, async (r) => {
  const { state, p, W } = r;
  const L = async () => parseFloat(await r.text('#oL'));
  /* before the first frame: find where on the 3D picture the sliding clip sits for a given L, from two trial presses on the
     wire, then put L back to 0.500 m; none of this is recorded */
  const P1 = [450, 485], P2 = [300, 468], Ls = [];
  for (const q of [P1, P2]) { await p.mouse.move(...q); await p.mouse.down(); await p.clock.runFor(100); Ls.push(await L()); await p.mouse.up(); await p.clock.runFor(100); }
  const at = (l) => { const f = (l - Ls[0]) / (Ls[1] - Ls[0]); return [P1[0] + f * (P2[0] - P1[0]), P1[1] + f * (P2[1] - P1[1])]; };
  await p.evaluate(() => { const s = document.querySelector('#sL'); s.value = 0.5; s.dispatchEvent(new Event('input', { bubbles: true })); });
  await p.clock.runFor(200);
  r.check.cal = [Ls, await r.text('#oL')];
  await p.mouse.move(640, 360);

  state.caption = 'Sample reading: the Mystery wire, 0.405 mm across, 0.20 A, 20 °C, 0.100 m between the clips';
  await r.secs(3.0);

  state.caption = 'Choose the Mystery wire. It keeps its resistivity hidden';
  await r.click('#mats [data-m="mystery"]');
  r.check.wire = [await r.text('#mats [aria-pressed="true"]'), await r.text('#gauges [aria-pressed="true"]')].join(' | ');
  state.arrow = { rect: await r.box('#gauges [aria-pressed="true"]') };
  await r.secs(1.4);
  state.arrow = null;

  state.caption = 'Set the length: drag the sliding clip along the wire to 0.100 m';
  const can = await r.box('#can');
  state.zoom = [can[0] + 120, can[1] + 160, 640, 360];
  await r.moveTo(...at(0.5), 0.8);
  await r.dragTo(...at(0.1), 1.2);
  const dir = (await L()) > 0.1 ? -1 : 1;
  if ((await L()) !== 0.1) { const u = [P2[0] - P1[0], P2[1] - P1[1]], n = Math.hypot(...u); r.check.fix = await r.dragUntil(dir * u[0] / n, dir * u[1] / n, '#oL', '0.100 m'); }
  r.check.L = await r.text('#oL');
  await r.secs(1.0);

  state.caption = 'Read the voltage between the clips. The supply holds 0.20 A, the wire 20 °C';
  r.check.supply = (await r.text('#supply')).replace(/\s+/g, ' ');
  r.check.out = (await r.text('#out')).replace(/\s+/g, ' ');
  state.zoom = [can[0] + 150, can[1] + 200, 560, 315];
  await r.secs(2.4);
  state.zoom = null;

  state.caption = 'Capture the reading. It goes into the table';
  await r.scrollRail('#capture');
  await r.click('#capture');
  await r.tick(4);
  const tb = await r.box('#rowsTbl');
  state.zoom = [W - 600, tb[1] - 150, 600, 337.5];
  state.arrow = { rect: await r.box('#rowsTbl tbody tr') };
  await r.secs(2.4);
  state.arrow = null; state.zoom = null;

  state.caption = 'Repeat at six lengths up to 1.00 m, then send the table to the worksheet';
  const ex = await r.box('#exportCsv');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(3.0);
  r.check.row = await r.text('#rowsTbl tbody tr');
});
