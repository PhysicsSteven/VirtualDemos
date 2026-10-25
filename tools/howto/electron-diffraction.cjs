// How this works: Electron Diffraction and de Broglie Waves. Part 1's first reading: tube seed 1924, Blind on, magnet away, 2.50 kV, both
// rings read with the flexible ruler. Expected: λ = h/√(2meV(1 + eV/2mc²)) = 24.50 pm; Bragg sin θ = λ/2d gives 2θ₁ = 6.594° (d₁ 0.213 nm)
// and 2θ₂ = 11.431° (d₂ 0.123 nm); each cone from the graphite, 60 mm behind the center of the 65 mm bulb, meets the glass 12.68° and
// 21.97° round from the axis, so the arcs across the rings are D₁ = 28.77 mm and D₂ = 49.85 mm. The ruler reads each mark to 0.5 mm,
// so the marks on the true crossings give 28.5 and 50.0 mm (the beam's small simulated tilt moves the two sides a little).
require('./lib.cjs')({ demo: 'electron-diffraction', title: 'Electron Diffraction and de Broglie Waves' }, async (r) => {
  const { state, p, W } = r;
  const scr = await r.box('#scr');
  const handle = (ring, id) => p.evaluate(([ring, id, x0, y0]) => { const h = __ed.scrHandles().find((k) => k.ring === ring && k.id === id); return [h.pt[0] + x0, h.pt[1] + y0]; }, [ring, id, scr[0], scr[1]]);
  /* where each ruler mark belongs: the true crossings on the glass, snapped to the ruler's 0.5 mm (read without drawing a frame) */
  const truth = () => p.evaluate(() => { const S = __ed.S, keep = JSON.parse(JSON.stringify(S.marks)); __ed.placeMarks(null); const t = JSON.parse(JSON.stringify(S.marks.arc)); S.marks = keep; __ed.setRing(S.ring); return t; });
  const mark = (ring, id) => p.evaluate(([ring, id]) => __ed.S.marks.arc[ring][id], [ring, id]);
  const setMark = async (ring, id, want) => {
    await r.moveTo(...(await handle(ring, id)), 0.5);
    const dir = Math.sign(want - (await mark(ring, id)));
    await r.dragWhile(dir * 1.0, 0, async () => Math.sign(want - (await mark(ring, id))) === dir);
    return mark(ring, id);
  };
  /* drag a range thumb from its value v0 to about v1 (the coarse part of a setting) */
  const thumbX = (box, min, max, v) => box[0] + 8 + (box[2] - 16) * (v - min) / (max - min);

  state.caption = 'Sample: both ring diameters at 2.50 kV, read with the flexible ruler';
  await r.secs(2.6);

  state.caption = 'Turn on Blind (in Instrument) and stop the voltage sweep';
  await r.scrollRail('details.fold:has(#blind) > summary');
  await r.click('details.fold:has(#blind) > summary');
  await r.tick(3);
  await r.scrollRail('#blind');
  await r.click('#blind');
  await r.tick(6);
  await r.click('#sweep');
  await r.tick(6);

  state.caption = 'Set the high voltage: drag its slider to 2.50 kV';
  await r.scrollRail('#volt');
  const vb = await r.box('#volt'), v0 = await p.evaluate(() => +document.querySelector('#volt').value);
  await r.moveTo(thumbX(vb, 2, 5, v0), vb[1] + vb[3] / 2, 0.6);
  await r.dragTo(thumbX(vb, 2, 5, 2.56), vb[1] + vb[3] / 2, 0.7);
  await r.moveTo(...state.ptr, 0.1);
  r.check.V = await r.dragUntil(-0.4, 0, '#voltOut', '2.50 kV set');
  state.arrow = { rect: await r.box('#meter') };
  await r.secs(1.0);
  state.arrow = null;

  const t = await truth(); r.check.target = t;
  state.caption = 'Inner ring: drag ruler marks A and B onto the middle of the glowing band on each side';
  state.zoom = [scr[0] - 110, scr[1] + 150, 560, 315];
  r.check.a1 = await setMark(1, 'a', t[1].a);
  r.check.b1 = await setMark(1, 'b', t[1].b);
  await r.secs(0.4);

  state.caption = 'Outer ring: pick Outer D₂, then move the two marks onto it the same way';
  state.zoom = null;
  await r.click('#ring2');
  state.zoom = [scr[0] - 110, scr[1] + 150, 560, 315];
  r.check.a2 = await setMark(2, 'a', t[2].a);
  r.check.b2 = await setMark(2, 'b', t[2].b);
  await r.secs(0.4);
  state.zoom = null;
  r.check.live = await r.text('#liveOut');

  state.caption = 'Capture the reading: the meter reading and both diameters go into the table';
  await r.scrollRail('#capture');
  await r.click('#capture');
  await r.tick(4);
  const tb = await r.box('#tbl');
  state.zoom = [W - 600, Math.max(0, tb[1] - 150), 600, 337.5];
  state.arrow = { rect: await r.box('#tbl tbody tr') };
  await r.secs(2.0);
  state.arrow = null; state.zoom = null;

  state.caption = 'Repeat every 0.50 kV up to 5.00 kV, then send the readings to the worksheet';
  const ex = await r.box('#expWs');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.7);
  state.arrow = { rect: ex };
  await r.secs(2.4);
  r.check.row = await p.evaluate(() => [...document.querySelectorAll('#tbl tbody tr:first-child input')].map((i) => i.value));
});
