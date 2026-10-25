// How this works: Linear Density of a String. The frequency scan's first reading, as in the worksheet key: Sweep the frequency,
// 200 g (String B, L = 1.20 m, 50 g hanger + 150 g), Blind on, the drive swept up past the first resonance with the Coarse knob
// and brought back to the top of the peak with the Fine knob. Expected: T = 0.200 × 9.81 = 1.962 N, μ = 1.20 g/m,
// v = √(T/μ) = 40.43 m/s, f₁ = v/2L = 16.85 Hz; on the 0.1 Hz steps the amplitude is largest at 16.8 Hz (8.84 mm, 8.79 at 16.9).
require('./lib.cjs')({ demo: 'string-density', title: 'Linear Density of a String' }, async (r) => {
  const { state, W } = r;
  /* turn a knob until its readout shows want, starting from the top of the knob (da > 0 turns it clockwise) */
  const turn = async (sel, outSel, want, da) => {
    const [x, y, w, h] = await r.box(sel), cx = x + w / 2, cy = y + h / 2, R = w / 2 - 4;
    let a = -Math.PI / 2;
    await r.moveTo(cx, cy - R, 0.6);
    await r.p.mouse.down(); state.down = true; await r.tick(4);
    for (let i = 0; i < 300 && (await r.text(outSel)) !== want; i++) { a += da; state.ptr = [cx + R * Math.cos(a), cy + R * Math.sin(a)]; await r.p.mouse.move(...state.ptr); await r.tick(); }
    const got = await r.text(outSel); await r.tick(6); await r.p.mouse.up(); state.down = false; await r.tick(); return got;
  };
  const ddBox = (t) => r.p.evaluate((t) => { const e = [...document.querySelectorAll('#out dt')].find((x) => x.textContent.startsWith(t)).parentElement.getBoundingClientRect(); return [e.x, e.y, e.width, e.height]; }, t);
  const ddText = (t) => r.p.evaluate((t) => [...document.querySelectorAll('#out dt')].find((x) => x.textContent.startsWith(t)).nextElementSibling.textContent, t);

  state.caption = 'Sample reading: the first resonance of String B, 1.20 m long, with 200 g hanging';
  await r.secs(3.0);

  state.caption = 'Hide μ and the predictions: tick Blind in the Lab section';
  await r.scrollRail('details.fold:has(#labBlind) > summary');
  await r.click('details.fold:has(#labBlind) > summary');
  await r.tick(4);
  await r.scrollRail('#labBlind');
  await r.click('#labBlind');
  await r.secs(0.6);
  await r.p.evaluate(() => { document.querySelector('.rail').scrollTop = 0; });

  state.caption = 'Sweep up with the Coarse knob: widest swing near 17 Hz';
  const shelf = await r.box('#shelf');
  state.zoom = [16, shelf[1] + shelf[3] - 540 + 8, 960, 540];   /* the string, the hanger and the driver; short captions here, so the knobs stay clear */
  r.check.coarse = await turn('#knobC', '#oF', '18.0 Hz', 0.05);
  await r.secs(0.3);

  state.caption = 'Back to the top of the peak with Fine: 16.8 Hz';
  r.check.f = await turn('#knobF', '#oF', '16.8 Hz', -0.07);
  state.arrow = { rect: await r.box('#oF') };
  await r.secs(1.0);
  state.arrow = null; state.zoom = null;

  state.caption = 'Check the readouts: the largest amplitude, and one loop, so n = 1';
  await r.scrollRail('#out');
  const a = await ddBox('Largest amplitude'), n = await ddBox('Loops seen');
  r.check.amp = await ddText('Largest amplitude'); r.check.loops = await ddText('Loops seen');
  r.check.mass = await ddText('Hanging mass'); r.check.T = await ddText('Tension');
  state.arrow = { rect: [Math.min(a[0], n[0]) - 2, Math.min(a[1], n[1]) - 2, Math.max(a[0] + a[2], n[0] + n[2]) - Math.min(a[0], n[0]) + 4, Math.max(a[1] + a[3], n[1] + n[3]) - Math.min(a[1], n[1]) + 4] };
  await r.moveTo(a[0] + a[2] / 2, a[1] + a[3] + 8, 0.6);
  await r.secs(2.0);
  state.arrow = null;

  state.caption = 'Record the reading. It goes into the table';
  await r.scrollRail('#record');
  await r.click('#record');
  await r.tick(4);
  const tb = await r.box('#rowsTbl');
  state.zoom = [W - 600, tb[1] - 150, 600, 337.5];
  state.arrow = { rect: await r.box('#rowsTbl tbody tr') };
  await r.secs(2.2);
  state.arrow = null; state.zoom = null;

  state.caption = 'Find the next four resonances the same way, then send the table to the worksheet';
  const ex = await r.box('#exportCsv');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(3.0);
  r.check.row = await r.p.evaluate(() => [...document.querySelectorAll('#rowsTbl tbody tr td')].map((td) => td.querySelector('input') ? td.querySelector('input').value : td.textContent));
  r.check.blindOut = await r.text('#out');
});
