/* harvest steps: every select, checkbox and slider end, then the buttons below; then, in a tall window, Blind on in the
   Depth, Buoyancy and Venturi scenes with no reading and with one, where the readings graph shows its note alone, and in Shapes */
const explore = require('./explore.cjs');
module.exports = async (page, grab) => {
  await explore(page, grab, { press: ['#newMyst', '#mystCheck', '#capture', '#dataBtn'] });
  await page.setViewportSize({ width: 1280, height: 1100 }); await page.waitForTimeout(300);
  for (const sc of ['press', 'buoy', 'venturi']) {
    await page.evaluate((sc) => { const b = document.querySelector('[data-s="' + sc + '"]'); if (b) b.click(); const c = document.querySelector('.vd-clear'); if (c) c.click();
      const bl = document.getElementById('blind'); if (bl && !bl.checked) bl.click(); }, sc);
    await page.waitForTimeout(250); await grab(page);
    await page.evaluate(() => { const b = document.getElementById('capture'); if (b) b.click(); });
    await page.waitForTimeout(250); await grab(page);
    await page.evaluate(() => { const bl = document.getElementById('blind'); if (bl && bl.checked) bl.click(); const c = document.querySelector('.vd-clear'); if (c) c.click(); });
    await page.waitForTimeout(150);
  }
  /* Shapes with Blind on: its own hint and data table, without the pressures and forces (2026-11-16) */
  await page.evaluate(() => { const b = document.querySelector('[data-s="pascal"]'); if (b) b.click(); const bl = document.getElementById('blind'); if (bl && !bl.checked) bl.click();
    const d = document.getElementById('dataBtn'); if (d && d.getAttribute('aria-expanded') !== 'true') d.click(); });
  await page.waitForTimeout(250); await grab(page);
  await page.evaluate(() => { const bl = document.getElementById('blind'); if (bl && bl.checked) bl.click(); const d = document.getElementById('dataBtn'); if (d && d.getAttribute('aria-expanded') === 'true') d.click(); });
  await page.waitForTimeout(150);
  /* Dam or window and Pumping (2026-11-19): every preset, shape and sample point, a tapped strip, Blind on, pumping and the empty tank */
  for (const pr of ['dam', 'window', 'troughEnd', 'pumpCyl', 'pumpCone']) {
    await page.evaluate((pr) => { window.__fl.applyPreset(pr); }, pr); await page.waitForTimeout(250); await grab(page);
    await page.evaluate(() => { const bl = document.getElementById('blind'); if (bl && !bl.checked) bl.click(); }); await page.waitForTimeout(200); await grab(page);
    await page.evaluate(() => { const bl = document.getElementById('blind'); if (bl && bl.checked) bl.click(); }); await page.waitForTimeout(100);
  }
  for (const seg of ['#plateSeg', '#tankSeg', '#sampleSeg']) {
    if (seg === '#plateSeg') await page.evaluate(() => window.__fl.applyPreset('dam'));
    if (seg === '#tankSeg') await page.evaluate(() => window.__fl.applyPreset('pumpCyl'));
    const n = await page.evaluate((seg) => document.querySelectorAll(seg + ' button').length, seg);
    for (let i = 0; i < n; i++) { await page.evaluate(([seg, i]) => document.querySelectorAll(seg + ' button')[i].click(), [seg, i]); await page.waitForTimeout(200); await grab(page); }
  }
  await page.evaluate(() => { window.__fl.applyPreset('pumpCyl'); window.__fl.setRunning(true); window.__fl.go(3); window.__fl.setRunning(false); }); await page.waitForTimeout(200); await grab(page);
  await page.evaluate(() => { window.__fl.setRunning(true); window.__fl.go(9); }); await page.waitForTimeout(300); await grab(page);
  await page.evaluate(() => { window.__fl.setRunning(false); window.__fl.applyPreset('float'); }); await page.waitForTimeout(150);
  /* Hydraulic lift and Blood pressure: the stroke part way and at its end, the cuff above, between and below the taps, lying flat,
     the dial gauge, an IV bag too low and high enough, and Blind on (2026-11-19) */
  const st = async (fn, arg) => { await page.evaluate(fn, arg); await page.waitForTimeout(200); await grab(page); };
  /* Torricelli with its data table open, in 3D: the caption and the 3D note */
  await st(() => { const b = document.querySelector('[data-s="torr"]'); if (b) b.click(); const d = document.getElementById('dataBtn'); if (d && d.getAttribute('aria-expanded') !== 'true') d.click(); });
  await st(() => { const g = document.querySelector('#graphSeg [data-v="model"]'); if (g) g.click(); const v = document.querySelector('#viewSeg [data-dim="3d"]'); if (v) v.click(); }); await page.waitForTimeout(800); await grab(page);
  await st(() => { const v = document.querySelector('#viewSeg [data-dim="flat"]'); if (v) v.click(); const d = document.getElementById('dataBtn'); if (d && d.getAttribute('aria-expanded') === 'true') d.click(); });
  await st(() => { const c = document.querySelector('[data-p="lift"]'); if (c) c.click(); });
  await st(() => { const F = window.__fl; if (F) { F.setParam('x', 0.4); F.go(0); } });
  await st(() => { const F = window.__fl; if (F) { F.setParam('x', 1.2); F.go(0); } });
  await st(() => { const bl = document.getElementById('blind'); if (bl && !bl.checked) bl.click(); });
  await st(() => { const bl = document.getElementById('blind'); if (bl && bl.checked) bl.click(); const c = document.querySelector('[data-p="bp"]'); if (c) c.click(); });
  for (const dt of [6.2, 0.5, 6, 10]) await st((dt) => { const F = window.__fl; if (F) F.go(dt, 0.02); }, dt);
  await st(() => { const b = document.querySelector('#poseSeg [data-o="lie"]'); if (b) b.click(); });
  await st(() => { const b = document.querySelector('#gaugeSeg [data-u="aneroid"]'); if (b) b.click(); });
  await st(() => { const F = window.__fl; if (F) { F.setParam('hiv', 0.05); F.go(0); } });
  await st(() => { const F = window.__fl; if (F) { F.setParam('hiv', 1); F.go(0); } });
  await st(() => { const bl = document.getElementById('blind'); if (bl && !bl.checked) bl.click(); });
  await st(() => { const bl = document.getElementById('blind'); if (bl && bl.checked) bl.click(); const b = document.querySelector('#poseSeg [data-o="stand"]'); if (b) b.click(); });
  await page.setViewportSize({ width: 1280, height: 860 });
};
