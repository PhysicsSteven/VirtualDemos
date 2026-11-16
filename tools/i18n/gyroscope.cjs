/* harvest steps: every select, checkbox and slider end, then the buttons below; then the nutation setups run for a moment
   (the Nutation readouts and plot), Blind and the Mystery wheel there, and a run with friction (limits for E and L_z now) */
const explore = require('./explore.cjs');
module.exports = async (page, grab) => {
  await explore(page, grab, { press: ['#go', '#slowmo', '#strobe', '#capture'] });
  const W = (ms) => page.waitForTimeout(ms);
  const click = (sel) => page.evaluate((s) => { const b = document.querySelector(s); if (b && !b.disabled) b.click(); }, sel).catch(() => {});
  const check = (id, on) => page.evaluate(([id, on]) => { const e = document.getElementById(id); if (e && e.checked !== on) e.click(); }, [id, on]).catch(() => {});
  for (const p of ['cusps', 'loops', 'waves', 'smooth', 'none', 'rise']) { await click(`[data-p="${p}"]`); await W(200); await grab(page); await click('#go'); await W(1500); await grab(page); await click('#go'); }
  await click('[data-p="loops"]'); await check('labBlind', true); await W(300); await grab(page); await check('labBlind', false);
  await check('mystery', true); await W(300); await grab(page); await check('mystery', false); await W(300);
};
