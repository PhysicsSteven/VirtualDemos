// How this works: Molecules, worksheet "The Infrared Spectrum of HCl". The first readings: the HCl band setup (300 K, 0.5 cm⁻¹,
// natural chlorine, cursor locked to peaks), the tall peaks of P(8) and P(7) recorded. Expected (key rows 1 and 2): P(8) at
// 2703.01 cm⁻¹, relative absorbance 0.091; P(7) at 2727.78 cm⁻¹, 0.178; lines about 24 cm⁻¹ apart (≈ 2B, B = 10.6 cm⁻¹).
require('./lib.cjs')({ demo: 'molecules', title: 'Molecules' }, async (r) => {
  const { state, p, W } = r;
  const pageTo = async (y, s = 0.6) => { const y0 = await p.evaluate(() => scrollY), n = Math.round(s * r.FPS);
    for (let i = 1; i <= n; i++) { const u = i / n, e = u < 0.5 ? 2 * u * u : 1 - (-2 * u + 2) ** 2 / 2; await p.evaluate((v) => scrollTo(0, v), y0 + (y - y0) * e); await r.tick(); } };
  const nu = () => p.evaluate(() => window.__mo.S.sp.nu);
  const record = async (s) => {
    await r.scrollRail('.vd-readings');
    await r.click('.vd-rec');
    await r.tick(4);
    if ((await r.box('.vd-readings tbody tr:last-child'))[1] > r.H - 50) await r.scrollRail('.vd-readings tbody tr:last-child');
    const row = await r.box('.vd-readings tbody tr:last-child');
    state.zoom = [W - 600, Math.max(0, Math.min(row[1] - 200, r.H - 337.5)), 600, 337.5];
    state.arrow = { rect: row };
    await r.secs(s);
    state.arrow = null; state.zoom = null;
  };
  /* step peak to peak with the arrow keys (the cursor is locked) until it sits on want */
  const toPeak = async (want) => {
    for (let i = 0; i < 60; i++) { const v = await nu(); if (Math.abs(v - want) < 0.006) break; await p.keyboard.press(v > want ? 'ArrowLeft' : 'ArrowRight'); await r.tick(3); }
  };
  state.ptr = [700, 420]; await p.mouse.move(...state.ptr);

  state.caption = 'Sample readings: the tall peaks of the lines P(8) and P(7)';
  await r.secs(2.0);

  state.caption = 'Choose HCl band. The cursor locks to the top of the nearest peak';
  await r.click('[data-p="band"]');
  await r.secs(1.0);

  state.caption = 'Click the spectrum near P(8), then step peak to peak with the arrow keys onto its tall peak';
  const cv = await r.box('#can'), xOf = (nu) => cv[0] + 54 + (nu - 2560) / 580 * (cv[2] - 72);   /* drawSp: L = 54, w = W − 72, 2560 to 3140 cm⁻¹ */
  await r.moveTo(xOf(2703.01), cv[1] + cv[3] * 0.6, 0.8);
  await p.mouse.down(); state.down = true; await r.tick(3); await p.mouse.up(); state.down = false; await r.tick(4);
  await p.focus('#can');
  const cb = await r.box('#curve');
  await pageTo(Math.max(0, cb[1] + cb[3] + (await p.evaluate(() => scrollY)) - 690));
  const c = await r.box('#curve');
  state.capTop = true;
  state.zoom = [Math.max(0, c[0] + c[2] * 0.3 - 320), Math.max(0, c[1] + c[3] - 360), 640, 360];
  await r.secs(0.4);
  await toPeak(2703.01);
  r.check.p8 = (await nu()).toFixed(2);
  await r.secs(0.8);
  state.zoom = null; state.capTop = false;
  await pageTo(0);
  state.caption = 'Record the tall peak of the pair';
  await record(1.6);

  state.caption = 'Step up to the next line, P(7), and record again';
  await p.focus('#can');   /* the spectrum keeps the keyboard, as after a click on it, without moving the cursor */
  await pageTo(Math.max(0, cb[1] + cb[3] - 690));
  state.capTop = true;
  state.zoom = [Math.max(0, c[0] + c[2] * 0.3 - 320), Math.max(0, c[1] + c[3] - 360), 640, 360];
  await toPeak(2727.78);
  r.check.p7 = (await nu()).toFixed(2);
  await r.secs(0.8);
  state.zoom = null; state.capTop = false;
  await pageTo(0);
  await record(1.6);

  state.caption = 'Record the tall peak of each line up to R(7), then send the table to the worksheet';
  const ex = await r.box('.vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.4);
  r.check.rows = await p.evaluate(() => JSON.stringify(window.vdRows()));
  r.check.ws = await p.evaluate(() => window.vdWorksheet());
});
