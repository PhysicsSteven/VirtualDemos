// How this works: Finding Exoplanets. The worksheet's first part: Hot Jupiter, no noise, paused, cursor at mid transit, planet radius
// set to 0.500 R_J (the worksheet asks for five radii from about 0.3 to 2 R_J), one reading.
// Demo (2026-10-25): (Rp/Rs)² 1,996 ppm, drop at mid transit 2,423.5 ppm. By hand: Rp/Rs = 5.61 × 6371/(1.15 × 695,700) = 0.04467, squared 1,995.8 ppm;
// at the center of a disk with quadratic limb darkening (0.40, 0.26) the drop is that times 1/(1 − 0.40/3 − 0.26/6) = 1.2146: 2,424 ppm.
require('./lib.cjs')({ demo: 'exoplanets', title: 'Finding Exoplanets' }, async (r) => {
  const { state, W, p } = r;
  const thumb = (sel) => p.evaluate((s) => { const e = document.querySelector(s), q = e.getBoundingClientRect(), f = (e.value - e.min) / (e.max - e.min);
    return [q.x + 8 + f * (q.width - 16), q.y + q.height / 2]; }, sel);
  const toSel = async (sel, off) => { await p.evaluate(([sel, off]) => { const rl = document.querySelector('.rail'), c = document.querySelector(sel); rl.scrollTop += c.getBoundingClientRect().top - rl.getBoundingClientRect().top - off; }, [sel, off]); await r.tick(2); };
  /* drag a slider's thumb to where the value should be, then nudge a tenth of a pixel at a time until its value is exactly that */
  const slideTo = async (sel, value) => {
    const [x, y] = await thumb(sel), q = await r.box(sel), [mn, mx] = await p.evaluate((s) => [+document.querySelector(s).min, +document.querySelector(s).max], sel);
    await r.moveTo(x, y, 0.7); await p.mouse.down(); state.down = true; await r.tick(3);
    await r.moveTo(q[0] + 8 + (value - mn) / (mx - mn) * (q[2] - 16), y, 0.9);
    for (let i = 0; i < 80; i++) {
      const v = +(await p.evaluate((s) => document.querySelector(s).value, sel)); if (Math.abs(v - value) < 1e-9) break;
      state.ptr = [state.ptr[0] + (v > value ? -0.1 : 0.1), y]; await p.mouse.move(...state.ptr); if (i % 3 === 2) await r.tick();
    }
    await r.tick(6); await p.mouse.up(); state.down = false; await r.tick();
    return p.evaluate((s) => document.querySelector(s).value, sel);
  };
  const lc = await r.box('#lc');

  state.caption = 'Sample reading: the dip in starlight as a Hot Jupiter crosses its star';
  await r.secs(2.4);

  state.caption = 'Choose Hot Jupiter and pause. The noise is set to none';
  await r.click('#presets button[data-p="hotj"]');
  await r.click('#play');
  await toSel('#noise', 200);
  r.check.noise = await r.text('#noiseOut');
  state.arrow = { rect: await r.box('#noiseOut') };
  await r.secs(1.2);
  state.arrow = null;

  state.caption = 'Press Zoom on transit, then drag on the light curve to mid transit, time 0';
  await r.click('#lcSeg button[data-lc="zoom"]');
  await toSel('#rTnow', 260);
  const tn = await r.box('#rTnow');
  /* drag to the middle of the zoomed chart, where t = 0 falls, then correct by the time per pixel until the cursor is within 0.1 s of it */
  const x0 = lc[0] + lc[2] / 2, yc = lc[1] + lc[3] * 0.55;
  await r.moveTo(lc[0] + lc[2] * 0.3, yc, 0.6);
  await p.mouse.down(); state.down = true; await r.tick(3);
  await r.moveTo(x0, yc, 0.8);
  const tNow = () => p.evaluate(() => window.__exo.nowT());
  for (let i = 0; i < 12; i++) {
    const t = await tNow(); if (Math.abs(t) < 0.1) break;
    await p.mouse.move(state.ptr[0] + 1, yc); const k = (await tNow()) - t;   /* seconds per pixel here */
    state.ptr = [state.ptr[0] + 1 - (t + k) / k, yc]; await p.mouse.move(...state.ptr);
  }
  await r.tick(4); await p.mouse.up(); state.down = false; await r.tick();
  r.check.tnow = await r.text('#rTnow'); r.check.tsec = await tNow();
  state.arrow = { rect: tn };
  await r.secs(1.2);
  state.arrow = null;

  state.caption = "Set the planet's size: drag Radius Rp to 0.500 RJ";
  await toSel('#rp', 200);
  r.check.rp = await slideTo('#rp', 664);
  r.check.rpOut = await r.text('#rpOut');
  state.arrow = { rect: await r.box('#rpOut') };
  await r.secs(1.0);
  state.arrow = null;

  state.caption = 'Read the transit depth and the brightness now: the planet blocks less light';
  await toSel('#rDepth', 150);
  for (const k of ['rDepth', 'rTnow', 'rFnow', 'rDur']) r.check[k] = await r.text('#' + k);
  const d = await r.box('#rDepth'), f = await r.box('#rFnow');
  state.arrow = { rect: d };
  state.zoom = [lc[0], lc[1] - 140, 640, 360];
  await r.secs(1.6);
  state.zoom = null;
  state.arrow = { rect: [f[0] - 4, f[1] - 22, Math.max(f[2], 120) + 8, f[3] + 26] };
  await r.secs(1.4);
  state.arrow = null;

  state.caption = 'Record the reading. It goes into the table';
  await r.scrollRail('.vd-readings .vd-rec');
  await r.click('.vd-readings .vd-rec');
  await r.tick(2);
  /* the table sits below the bottom of a 720 px window: scroll the page and the sidebar to it */
  await p.evaluate(() => { const rl = document.querySelector('.rail'); rl.scrollTop = rl.scrollHeight;
    const b = document.querySelector('.vd-readings table.rows').getBoundingClientRect().bottom; if (b > 560) window.scrollBy(0, b - 560); });
  await r.tick(2);
  const tb = await r.box('.vd-readings table.rows');
  state.zoom = [W - 600, tb[1] - 150, 600, 337.5];
  state.arrow = { rect: await r.box('.vd-readings table.rows tbody tr') };
  await r.secs(2.0);
  state.arrow = null; state.zoom = null;

  state.caption = 'Repeat at four more sizes up to 2 RJ, then send the table to the worksheet';
  const ex = await r.box('.vd-readings .vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.6);
  r.check.row = await p.evaluate(() => JSON.stringify(window.vdRows()[0]));
});
