/* harvest steps for units: every select, checkbox and slider end (explore.cjs), its buttons, then a longer run; then the
   Dimensional analysis answers for every question (unsolved, matched and shown, and in Blind), the Significant figures cases
   (sums and products, placeholder and ambiguous zeros), and a conversion whose smaller unit is too small to draw */
const explore = require('./explore.cjs');
module.exports = async (page, grab) => {
  await explore(page, grab, { press: ['#flyIn', '#flyOut', '#dSolve'] });
  await page.evaluate(() => { const p = document.querySelector('#play, #go, #run, #sdPlay'); if (p) p.click(); }).catch(() => {});
  await page.waitForTimeout(3000); await grab(page);
  const ev = (f, a) => page.evaluate(f, a).catch(() => {});
  const blind = (on) => ev((on) => { const b = document.getElementById('labBlind'); if (b && b.checked !== on) b.click(); }, on);
  await ev(() => document.querySelector('[data-t="dims"]').click());
  for (const q of ['pendulum', 'spring', 'wave', 'orbit', 'fall']) {
    for (const on of [false, true]) {
      await blind(on);
      await ev((q) => { document.querySelector(`#dQ [data-q="${q}"]`).click(); }, q); await page.waitForTimeout(80); await grab(page);
      await ev(() => { const s = (i, v) => { const e = document.getElementById('dx' + i); if (e) { e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); } }; s(0, 1); }); await page.waitForTimeout(80); await grab(page);
      await ev(() => document.getElementById('dSolve').click()); await page.waitForTimeout(80); await grab(page);
    }
  }
  await blind(false);
  await ev(() => document.querySelector('[data-t="sig"]').click());
  for (const [a, op, b] of [['12.07', '*', '0.0350'], ['12.4', '+', '0.56'], ['1500', '*', '2.0'], ['1.5e3', '+', '27.25'], ['3.20', '/', '0.0450'], ['100.0', '-', '0.5'], ['7', '*', '3']]) {
    await ev(([a, op, b]) => { const A = document.getElementById('sA'), B = document.getElementById('sB'), O = document.getElementById('sOp'); A.value = a; B.value = b; O.value = op; O.dispatchEvent(new Event('change')); A.dispatchEvent(new Event('input')); }, [a, op, b]);
    await page.waitForTimeout(80); await grab(page);
  }
  await ev(() => document.querySelector('[data-t="convert"]').click());
  await ev(() => { document.querySelector('#cKind [data-k="length"]').click(); const f = document.getElementById('cFrom'), t = document.getElementById('cTo'); f.value = 'light year'; f.dispatchEvent(new Event('change')); t.value = 'mm'; t.dispatchEvent(new Event('change')); });
  await page.waitForTimeout(150); await grab(page);
  await ev(() => document.querySelector('[data-t="scale"]').click());
};
