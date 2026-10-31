// How this works: Normal Modes (the Springs and Oscillations Sandbox, Chain of ten). The worksheet's first table: one mode started
// alone, N oscillations of one block timed with the stopwatch. The sample is mode 3, the block that swings most, N = 10.
// Expected: f₃ = (1/π)√(k/m) sin(3π/22) = 1.870 Hz, so t = 10/f₃ = 5.35 s (printed as r.check).
require('./lib.cjs')({ demo: 'springs', title: 'Normal Modes', query: '?rig=hzChain' }, async (r) => {
  const { state, p } = r;
  const MODE = 3;

  state.caption = 'Sample reading: the frequency of mode 3 of the chain of ten';
  await r.secs(3.0);

  state.caption = 'Hide the mode frequencies: tick Blind under Readings';
  await r.scrollRail('#sbBlind');
  await r.click('#sbBlind');
  await r.secs(0.8);

  state.caption = 'Start mode 3 alone: click it in the Normal modes pane';
  const e = await r.box('#eCan');
  const rowY = await p.evaluate((k) => { const c = document.getElementById('eCan'), H = c.getBoundingClientRect().height, n = 10, top = 30, rowH = Math.min(34, (H - top - 6) / n); return top + (k - 0.5) * rowH; }, MODE);
  await r.moveTo(e[0] + 40, e[1] + rowY, 0.8);
  state.click = r.frame; state.down = true; await p.mouse.down(); await r.tick(3); await p.mouse.up(); state.down = false;
  r.check.live = await r.text('#live');
  /* the block that swings most in this mode */
  const blk = await p.evaluate(() => { const z = __sp.sb.SB.z, n = __sp.sb.SB.md.n; let b = 0; for (let j = 1; j < n; j++) if (Math.abs(z[j]) > Math.abs(z[b])) b = j; return b; });
  r.check.block = blk + 1;
  await r.secs(1.2);

  state.caption = `Time block ${blk + 1}: press Stopwatch as it passes rest, again 10 passes later`;
  const sw = await r.box('#swBtn');
  state.arrow = { rect: sw };
  await r.moveTo(sw[0] + sw[2] / 2, sw[1] + sw[3] / 2, 0.6);
  /* press as the block passes its rest position going right, frame by frame, as a careful student would */
  const z = () => p.evaluate((b) => __sp.sb.SB.z[b], blk);
  const press = async () => { state.click = r.frame; state.down = true; await p.mouse.down(); await r.tick(1); await p.mouse.up(); state.down = false; };
  let prev = await z(), passes = -1;
  for (let i = 0; i < 600 && passes < 10; i++) {
    await r.tick(); const v = await z();
    if (prev < 0 && v >= 0) { passes++; if (passes === 0 || passes === 10) await press(); }
    prev = v;
  }
  state.arrow = null;
  r.check.t = await r.text('#swRead');
  await r.secs(0.6);

  state.caption = 'N is 10: capture the reading. T = t/N goes with it';
  await r.scrollRail('#sbCapture');
  await r.click('#sbCapture');
  await r.tick(4);
  state.arrow = { rect: await r.box('#sbRowsTbl tbody tr') };
  r.check.row = await r.text('#sbRowsTbl tbody tr');
  await r.secs(2.2);
  state.arrow = null;

  state.caption = 'Repeat for every mode, then send the table to the worksheet';
  const ex = await r.box('#sbExport');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.6);
});
