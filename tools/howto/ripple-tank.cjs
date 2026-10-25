// How this works: Ripple Tank. Part 1's first reading: plane waves at 6 Hz in water 10 mm deep, A on the first crest past
// x = 90 mm and B on the last crest before the beach (x = 400 mm), along the middle of the tank; N wavelengths between them.
// Expected: λ = 44.32 mm at 6 Hz in water 10 mm deep (ω² = (gk + σk³/ρ) tanh(kd)), so B lies about 5λ = 222 mm past A.
require('./lib.cjs')({ demo: 'ripple-tank', title: 'Ripple Tank', query: '?setup=plane' }, async (r) => {
  const { state, W, p } = r;
  const sc = await r.box('#scene');
  const px = (x, y) => p.evaluate(([x, y]) => window.__rt.px(x, y), [x, y]);
  /* the crests along the middle of the paused tank, between x0 and x1 (mm), from the water's height in the demo's own grid */
  const crests = (x0, x1) => p.evaluate(([x0, x1]) => { const T = window.__rt.T, D = 1.25, out = [], hs = [];
    const h = (x) => { const u = x / D - 0.5, i = Math.floor(u), fu = u - i, q = (Math.floor(150 / D - 0.5) + 1) * T.W + i + 1; return T.h[q] * (1 - fu) + T.h[q + 1] * fu; };
    for (let x = x0; x <= x1; x += 0.25) hs.push([x, h(x)]); const top = Math.max(...hs.map((v) => v[1]));
    for (let i = 1; i < hs.length - 1; i++) if (hs[i][1] > hs[i - 1][1] && hs[i][1] >= hs[i + 1][1] && hs[i][1] > 0.3 * top) out.push(hs[i][0]);
    return out; }, [x0, x1]);
  const row = (n) => r.box(`#out > :nth-child(${n})`);
  /* the stage here is taller than the frame, so the page scrolls as well as the sidebar: bring sel to the middle */
  const into = async (sel) => { await p.evaluate((sel) => document.querySelector(sel).scrollIntoView({ block: 'center' }), sel); await r.tick(2); };

  state.caption = 'Sample reading: the wavelength of plane waves at 6 Hz in water 10 mm deep';
  await r.secs(2.6);

  state.caption = 'Set the frequency: drag Frequency f down to 6 Hz';
  const sf = await r.box('#sF');
  await r.moveTo(sf[0] + sf[2] * (10 - 6) / 14 + 8 * (1 - 2 * (10 - 6) / 14), sf[1] + sf[3] / 2, 0.8);
  r.check.f = await r.dragUntil(-3, 0, '#oF', '6.0 Hz');
  state.arrow = { rect: await r.box('#oF') };
  await r.secs(1.0);
  state.arrow = null;

  state.caption = 'Wait until the waves have crossed the tank and settled (shown 4 times faster)';
  state.zoom = [sc[0], sc[1], sc[2], sc[2] * 9 / 16];
  await r.moveTo(sc[0] + sc[2] * 0.5, sc[1] + sc[3] * 0.85, 0.6);
  r.speed = 4; await r.secs(3.2); r.speed = 1;

  state.caption = 'Pause, so the crests hold still';
  await r.click('#play');
  await r.secs(0.6);
  const c = await crests(90, 390), N = c.length - 1;
  r.check.crests = c.map((x) => x.toFixed(1)).join(' ');

  state.caption = `Drag A onto a crest, and B onto a crest ${N} wavelengths further on`;
  await r.moveTo(...(await px(120, 150)), 0.6);
  await r.dragTo(...(await px(c[0], 150)), 0.9);
  await r.moveTo(...(await px(214.4, 150)), 0.6);
  await r.dragTo(...(await px(c[N], 150)), 1.2);
  await r.secs(0.8);
  state.zoom = null;
  await into('#out > :nth-child(5)');
  r.check.L = await p.evaluate(() => window.__rt.lineInfo().L.toFixed(1));
  const lr = await row(5);
  state.caption = `Read the length L between them: λ = L/${N}`;
  state.arrow = { rect: lr };
  await r.secs(2.4);
  state.arrow = null;

  state.caption = 'Record the reading, and write the number of wavelengths in the worksheet';
  await into('.vd-readings .vd-rec');
  await r.click('.vd-readings .vd-rec');
  await r.tick(4);
  state.arrow = { rect: await r.box('.vd-readings tbody tr') };
  await r.secs(2.2);
  state.arrow = null;

  state.caption = 'Repeat at each frequency and depth, then send the readings to the worksheet';
  await into('.vd-readings .vd-export');
  const ex = await r.box('.vd-readings .vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.6);
  r.check.row = await p.evaluate(() => JSON.stringify(window.vdRows ? window.vdRows()[0] : null));
  r.check.N = N;
});
