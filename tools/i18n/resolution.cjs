/* Extra harvest states for demos/resolution.html, after the shared explore.cjs steps: the 3D view's labels (the dip between two
   stars, one merged peak, the 30× exposure note), which only show in 3D with two sources. */
const explore = require('./explore.cjs');
module.exports = async (page, grab) => {
  await explore(page, grab);
  const W = (ms) => page.waitForTimeout(ms);
  const click = (sel) => page.evaluate((s) => { const b = document.querySelector(s); if (b && !b.disabled) b.click(); }, sel).catch(() => {});
  const range = (id, v) => page.evaluate(([id, v]) => { const e = document.getElementById(id); if (!e) return; e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); }, [id, v]).catch(() => {});
  await click('[data-dim="3d"]'); await W(1500);
  for (const p of ['telescope', 'two', 'eye', 'camera', 'pinhole', 'mystery', 'near', 'disk']) { await click(`[data-p="${p}"]`); await W(500); await grab(page); }
  await click('[data-p="telescope"]'); await W(300); await range('sSep', '0.4'); await W(500); await grab(page);
  await range('sSep', '0.56'); await W(500); await grab(page);
  await click('#gainToggle'); await W(500); await grab(page); await click('#gainToggle'); await W(300);
  await click('[data-p="pinhole"]'); await W(300);
};
