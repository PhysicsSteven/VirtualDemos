/* harvest steps: every select, checkbox and slider end, then the buttons below */
const explore = require('./explore.cjs');
module.exports = async (page, grab) => {
  await explore(page, grab, { press: ['#sbeGo'] });
  const st = async (fn, arg) => { await page.evaluate(fn, arg); await page.waitForTimeout(200); await grab(page); };
  /* Sandbox: its rigs and tray act only in Sandbox, so press them there (2026-11-19) */
  const press = async (sel) => { const n = await page.evaluate((sel) => document.querySelectorAll(sel).length, sel);
    for (let i = 0; i < n; i++) await st(([sel, i]) => { const b = document.querySelectorAll(sel)[i]; if (b && !b.disabled) b.click(); }, [sel, i]); };
  await st(() => { const c = document.querySelector('[data-p="sandbox"]'); if (c) c.click(); });
  await press('.vd-rec'); await press('#sbeAdd button'); await press('#sbeGo');
  for (const r of await page.evaluate(() => [...document.querySelectorAll('#sbeRigs button')].map((b) => b.dataset.r))) {
    await st((r) => { const b = document.querySelector('#sbeRigs [data-r="' + r + '"]'); if (b) b.click(); }, r);
    await press('#sbeGo'); await press('#sbeAdd button'); await press('#sbeGo');
  }
  /* Body levers: both parts with their sliders at the ends, and Blind on (2026-11-19) */
  await st(() => { const c = document.querySelector('[data-p="body"]'); if (c) c.click(); });
  for (const q of ['arm', 'back']) {
    await st((q) => { const b = document.querySelector('#partSeg [data-q="' + q + '"]'); if (b) b.click(); }, q);
    for (const end of ['min', 'max']) await st((end) => { for (const r of document.querySelectorAll('#ctl input[type="range"], .ctl input[type="range"]')) { r.value = r[end]; r.dispatchEvent(new Event('input', { bubbles: true })); } }, end);
    await st(() => { const bl = document.getElementById('labBlind'); if (bl && !bl.checked) bl.click(); });
    await st(() => { const bl = document.getElementById('labBlind'); if (bl && bl.checked) bl.click(); });
  }
};
