// How this works: Units, Scales and Estimates, Worksheet "estimation-and-evidence" (Estimating and Reporting a Physical Result).
// The worksheet needs no simulation; the demo's part is its supplied reporting task, done in Significant figures. Expected:
// 12.4 + 0.56 = 12.96, kept to one decimal place (12.4 has the fewest) → 13.0; 3.20 × 0.0450 = 0.144, three significant
// figures (both factors have three) → 0.144.
require('./lib.cjs')({ demo: 'units', title: 'Units, Scales and Estimates: Reporting a Result', query: '?ws=estimation-and-evidence' }, async (r) => {
  const { state, p } = r;
  const type = async (sel, txt) => {
    const b = await r.box(sel);
    await r.moveTo(b[0] + b[2] / 2, b[1] + b[3] / 2, 0.5);
    await p.click(sel, { clickCount: 3 }); state.click = r.frame; await r.tick(4);
    for (const ch of txt) { await p.keyboard.type(ch); await r.tick(4); }
  };
  const pick = async (sel, v) => { await r.click(sel); await p.selectOption(sel, v); await r.tick(8); };

  state.caption = 'Sample: the worksheet\'s reporting task, 12.4 + 0.56 with the right number of figures';
  await r.secs(3.0);

  state.caption = 'Open Significant figures';
  await r.click('[data-t="sig"]');
  await r.secs(0.8);

  const panel = await r.box('#pSig');
  state.zoom = [panel[0], panel[1], 800, 450];
  state.caption = 'Type the two numbers and pick the operation: 12.4 + 0.56';
  await type('#sA', '12.4');
  await pick('#sOp', '+');
  await type('#sB', '0.56');
  await r.secs(0.6);

  state.caption = 'Adding: keep the fewest decimal places, one from 12.4, so 12.96 becomes 13.0';
  state.arrow = { rect: await r.box('#sTbl') };
  await r.secs(2.0);
  state.arrow = { rect: await r.box('#sOut') };
  r.check.sum = await r.text('#sOut');
  await r.secs(2.4);
  state.arrow = null;

  state.caption = 'Now 3.20 × 0.0450: multiplying keeps the fewest significant figures, three';
  await type('#sA', '3.20');
  await pick('#sOp', '*');
  await type('#sB', '0.0450');
  state.arrow = { rect: await r.box('#sOut') };
  r.check.product = await r.text('#sOut');
  await r.secs(2.6);
  state.arrow = null; state.zoom = null;

  state.caption = 'Write both in the Data table and explain the two rules; the rest is on paper';
  await r.moveTo(640, 600, 0.8);
  await r.secs(3.0);
});
