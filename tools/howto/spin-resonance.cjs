// How this works: Spin Resonance, worksheet "Spin Resonance". The first reading: DPPH in the electron probe on MID (bench seed
// 4127), Blind on, cursor A at the start of the CH1 ramp and B at the center of the CH2 peak, then Capture reading. The cursors
// are found from the trace the way the key's capture finds them (the ramp extended back to 0 V; the middle of the peak above half
// height), then placed on the 0.05 ms step the cursors move in at 5 ms/div. Expected: hν = gμ_B B with g = 2.0036 gives
// B = 2.1849 mT at 61.27 MHz; the key's MID readings are 23.84 and 23.80 ms, B 2.1873 and 2.1837 mT.
require('./lib.cjs')({ demo: 'spin-resonance', title: 'Spin Resonance' }, async (r) => {
  const { state, p, W } = r;
  const pageTo = async (y, s = 0.6) => { const y0 = await p.evaluate(() => scrollY), n = Math.round(s * r.FPS);
    for (let i = 1; i <= n; i++) { const u = i / n, e = u < 0.5 ? 2 * u * u : 1 - (-2 * u + 2) ** 2 / 2; await p.evaluate((v) => scrollTo(0, v), y0 + (y - y0) * e); await r.tick(); } };
  const look = () => p.evaluate(() => {
    const sc = window.__sr.scope, N = sc.N, dt = sc.span / (N - 1), c1 = sc.ch1, c2 = sc.ch2;
    let i0 = 0; while (i0 < N && c1[i0] > 0.05) i0++;
    let sx = 0, sy = 0, sxx = 0, sxy = 0, n = 0;
    for (let i = i0 + 1; i < N; i++) { if (c1[i] < 0.1) continue; if (c1[i] > 0.9) break; const t = i * dt; sx += t; sy += c1[i]; sxx += t * t; sxy += t * c1[i]; n++; }
    const k = (n * sxy - sx * sy) / (n * sxx - sx * sx), b = (sy - k * sx) / n, tA = -b / k;
    const sm = []; for (let i = 0; i < N; i++) { let s = 0, m = 0; for (let j = i - 2; j <= i + 2; j++) if (j >= 0 && j < N) { s += c2[j]; m++; } sm.push(s / m); }
    const lo = Math.ceil(tA / dt) + 2, hi = Math.min(N - 1, Math.floor((tA + 0.040) / dt) - 2), seg = sm.slice(lo, hi), srt = [...seg].sort((x, y) => x - y), base = srt[Math.floor(srt.length / 2)];
    let im = lo; for (let i = lo; i < hi; i++) if (sm[i] > sm[im]) im = i;
    const h = sm[im] - base; let a = im, z = im; while (a > lo && sm[a] - base > h / 2) a--; while (z < hi && sm[z] - base > h / 2) z++;
    return { tA, tB: (a + z) / 2 * dt };
  });
  const grid = (t) => Math.round(t / 0.00005) * 0.00005;
  const handle = (id) => p.evaluate((id) => { const c = document.getElementById('scope') || document.querySelector('canvas[id*="cope"]'), q = c.getBoundingClientRect(), h = window.__sr.scopeHandles().find((x) => x.id === id); return [q.x + h.tab[0], q.y + h.tab[1]]; }, id);
  const place = async (id, want) => {
    const [x, y] = await handle(id);
    await r.moveTo(x, y, 0.6);
    const tx = await p.evaluate(([id, want]) => { const sg = window.__sr.sg; return (want - window.__sr.S.sc[id]) / sg.span * sg.sw; }, [id, want]);
    await r.dragTo(x + tx, y, 0.8);
    for (let i = 0; i < 60; i++) { const c = await p.evaluate((id) => window.__sr.S.sc[id], id); if (Math.abs(c - want) < 0.00002) break; await p.keyboard.press((Math.abs(c - want) > 0.0006 ? 'Shift+' : '') + (c > want ? 'ArrowLeft' : 'ArrowRight')); await r.tick(1); }
    await r.tick(3);
  };
  state.ptr = [700, 420]; await p.mouse.move(...state.ptr);

  state.caption = 'Sample reading: DPPH on MID, the time from the start of the ramp to the peak';
  await r.secs(2.4);

  state.caption = 'Choose ESR on DPPH, and turn Blind on in the Instrument section';
  await r.click('[data-p="esr"]');
  await r.secs(0.3);
  await r.scrollRail('details.fold:has(#blind) > summary');
  if (!(await p.evaluate(() => document.getElementById('blind').closest('details.fold').open))) { await r.click('details.fold:has(#blind) > summary'); await r.tick(4); }
  await r.click('#blind');
  await r.secs(0.6);

  state.caption = 'On MID the peak is clear on CH2. The scope shows the ramp on CH1';
  await r.click('[data-r="MID"]');
  await r.secs(1.4);
  state.caption = 'Pause the scope, so the trace holds still while you place the cursors';
  await r.click('#play');
  await r.secs(0.4);
  const sb = await r.box('#pScope');
  await pageTo(sb[1] + (await p.evaluate(() => scrollY)) - 60);
  await r.secs(0.6);
  const L = await look();
  r.check.tA = (L.tA * 1000).toFixed(3); r.check.tB = (L.tB * 1000).toFixed(3);

  const pb = await r.box('#pScope');
  state.zoom = [Math.max(0, pb[0] - 10), Math.max(0, Math.min(pb[1] - 10, r.H - 360)), 640, 360];
  state.caption = 'Drag cursor A to where the ramp starts, the ramp extended back to 0 V';
  await place('A', grid(L.tA));
  await r.secs(0.6);
  state.caption = 'Drag cursor B to the center of the peak';
  await place('B', grid(L.tB));
  await r.secs(0.8);
  state.zoom = null;
  r.check.dT = await r.text('#dT');
  r.check.meter = await r.text('#meter');
  await pageTo(0);

  state.caption = 'Read the probe frequency on the meter, and capture the reading';
  await r.scrollRail('#meter');
  state.arrow = { rect: await r.box('#meter') };
  await r.secs(1.4);
  state.arrow = null;
  await r.scrollRail('#capture');
  await r.click('#capture');
  await r.tick(4);
  if ((await r.box('#tbl tbody tr:last-child'))[1] > r.H - 50) await r.scrollRail('#tbl tbody tr:last-child');
  const row = await r.box('#tbl tbody tr:last-child');
  state.zoom = [W - 600, Math.max(0, Math.min(row[1] - 200, r.H - 337.5)), 600, 337.5];
  state.arrow = { rect: row };
  await r.secs(2.0);
  state.arrow = null; state.zoom = null;

  state.caption = 'Place the cursors again from scratch for a second reading, then go on to LO and HI';
  const ex = await r.box('#expWs');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.6);
  r.check.row = await p.evaluate(() => document.querySelector('#tbl tbody tr:last-child').textContent);
});
