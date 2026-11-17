/* harvest steps for units: every select, checkbox and slider end (explore.cjs), its buttons, then a longer run; then the
   Dimensional analysis answers for every question (unsolved, matched and shown, and in Blind), the Significant figures cases
   (sums and products, placeholder and ambiguous zeros), and a conversion whose smaller unit is too small to draw; and the pendulum
   question with its powers set to a match, so "They match." shows */
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
  await ev(() => { document.querySelector('#dQ [data-q="pendulum"]').click(); const ins = [...document.querySelectorAll('#dExps input')], vals = [];
    for (let v = -2; v <= 3; v += 0.5) vals.push(v);
    const set = (e, v) => { e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); };
    const rec = (i) => { if (i === ins.length) return !!document.querySelector('#dOut .ok'); for (const v of vals) { set(ins[i], v); if (rec(i + 1)) return true; } return false; };
    rec(0); });
  await page.waitForTimeout(80); await grab(page);
  await ev(() => document.querySelector('[data-t="sig"]').click());
  for (const [a, op, b] of [['12.07', '*', '0.0350'], ['12.4', '+', '0.56'], ['1500', '*', '2.0'], ['1.5e3', '+', '27.25'], ['3.20', '/', '0.0450'], ['100.0', '-', '0.5'], ['7', '*', '3']]) {
    await ev(([a, op, b]) => { const A = document.getElementById('sA'), B = document.getElementById('sB'), O = document.getElementById('sOp'); A.value = a; B.value = b; O.value = op; O.dispatchEvent(new Event('change')); A.dispatchEvent(new Event('input')); }, [a, op, b]);
    await page.waitForTimeout(80); await grab(page);
  }
  await ev(() => document.querySelector('[data-t="convert"]').click());
  await ev(() => { document.querySelector('#cKind [data-k="length"]').click(); const f = document.getElementById('cFrom'), t = document.getElementById('cTo'); f.value = 'light year'; f.dispatchEvent(new Event('change')); t.value = 'mm'; t.dispatchEvent(new Event('change')); });
  await page.waitForTimeout(150); await grab(page);
  await ev(() => document.querySelector('[data-t="scale"]').click());
  /* the Scale model: each Sun size, the walker at each planet and beyond (its labels and readouts), Blind on and off; then the zoom
     at widths where light takes nanoseconds to years to cross, and past a billion light years */
  await ev(() => document.querySelector('#scaleView [data-v="model"]').click());
  for (const sun of ['softball', 'ottewell', 'voyage']) {
    await ev((v) => { const e = document.getElementById('smSun'); e.value = v; e.dispatchEvent(new Event('change', { bubbles: true })); }, sun);
    for (const x of [0, 3, 8, 12, 20, 60, 110, 210, 420, 2000]) { await ev((x) => { const c = document.getElementById('can'); c.focus(); for (let i = 0; i < x / 5; i++) c.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowUp', bubbles: true })); }, x); await page.waitForTimeout(60); await grab(page); }
    await ev(() => document.getElementById('smReset').click());
  }
  await ev(() => document.getElementById('smGo').click()); await page.waitForTimeout(1500); await ev(() => document.getElementById('smGo').click()); await grab(page);
  await blind(true); await grab(page); await blind(false);
  await ev(() => document.querySelector('#scaleView [data-v="zoom"]').click());
  for (const z of [-15, -12, -9, -6, -3, 0, 3, 6, 9, 11, 13, 15, 17, 20, 23, 25.5, 26.9]) { await ev((z) => { const e = document.getElementById('sZoom'); e.value = z; e.dispatchEvent(new Event('input', { bubbles: true })); }, z); await page.waitForTimeout(60); await grab(page); }
  await ev(() => { const e = document.getElementById('sZoom'); e.value = Math.log10(4); e.dispatchEvent(new Event('input', { bubbles: true })); });
};
