// How this works: Kundt's Tube. Part 1's first reading: steel rod 1.00 m clamped at its middle, air at 20 °C, the plunger tuned
// to resonance and the pointer on the heap nearest the disc.
// Expected: v_rod = √(E/ρ) = √(200 GPa / 7850 kg/m³) = 5048 m/s, f = v/(2L) = 2524 Hz; air v = √(γRT/M) = 343.2 m/s, so the heaps
// are λ/2 = v/(2f) = 6.80 cm apart, the tube resonates at ℓ = 15 × 6.80 = 102.0 cm and the first heap is at 6.8 cm.
require('./lib.cjs')({ demo: 'kundts-tube', title: 'Kundt\'s Tube' }, async (r) => {
  const { state, W, p } = r;
  const can = await r.box('#can');
  const mid = async (sel) => { const b = await r.box(sel); return [b[0] + b[2] / 2, b[1] + b[3] / 2]; };
  /* drag a handle by small steps until its readout reaches the value wanted (in cm) */
  const crawl = async (dx, sel, want) => { for (let i = 0; i < 600 && (dx > 0 ? parseFloat(await r.text(sel)) < want : parseFloat(await r.text(sel)) > want); i++) { state.ptr = [state.ptr[0] + dx, state.ptr[1]]; await p.mouse.move(...state.ptr); await r.tick(); } };
  const tube = [can[0] + 440, can[1] + 300, 520, 292.5];

  state.caption = 'Sample reading: the first heap, steel rod 1.00 m clamped at its middle, air at 20 °C';
  await r.secs(3.0);

  state.caption = 'Keep the rod ringing: tick the box. The counter shows its frequency';
  await r.click('#keep');
  await r.tick(10);
  state.arrow = { rect: [can[0] + 12, can[1] + 52, 270, 72] };
  await r.secs(1.6);
  r.check.f = await p.evaluate(() => [...document.querySelectorAll('#out div')].find(d => /Counter/.test(d.textContent)).querySelector('dd').textContent);
  state.arrow = null;

  state.caption = 'Tune the plunger: drag it until the tube is loudest and the dust gathers in heaps';
  state.zoom = tube;
  await r.moveTo(...(await mid('#plunger')), 0.8);
  await p.mouse.down(); state.down = true; await r.tick(4);
  await crawl(0.12, '#ol', 103.0);
  await r.tick(8);
  await crawl(-0.08, '#ol', 102.0);
  r.check.l = await r.text('#ol');
  await r.tick(4); await p.mouse.up(); state.down = false;
  state.zoom = null;
  state.arrow = { rect: [can[0] + 12, can[1] + 52, 270, 72] };
  await r.secs(1.0);
  state.arrow = null;
  state.zoom = tube;
  await r.secs(1.2);

  state.caption = 'Put the pointer on the first heap from the disc: drag it to the heap\'s center';
  await r.moveTo(...(await mid('#pointerH')), 0.6);
  await p.mouse.down(); state.down = true; await r.tick(4);
  await crawl(-1.5, '#ox', 9.0);
  await crawl(-0.1, '#ox', 6.8);
  r.check.x = await r.text('#ox');
  await r.tick(4); await p.mouse.up(); state.down = false;
  state.zoom = [can[0] + 455, can[1] + 360, 280, 157.5];
  await r.secs(1.6);
  state.zoom = null;

  state.caption = 'Record this heap. It goes into the table';
  await r.scrollRail('#record');
  await r.click('#record');
  await r.tick(4);
  const tb = await r.box('#rowsTbl');
  state.zoom = [W - 600, tb[1] - 150, 600, 337.5];
  state.arrow = { rect: await r.box('#rowsTbl tbody tr') };
  await r.secs(2.2);
  state.arrow = null; state.zoom = null;

  state.caption = 'Record every heap the same way, then send the part to the worksheet';
  const ex = await r.box('#exportWs');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.6);
  r.check.row = await p.evaluate(() => [...document.querySelectorAll('#rowsTbl tbody tr td')].map(td => td.querySelector('input') ? td.querySelector('input').value : td.textContent));
});
