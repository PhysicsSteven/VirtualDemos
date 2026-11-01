/* Extra harvest states for demos/doppler.html (tools/i18n.cjs harvest doppler), after the shared explore.cjs steps: readings before any sound arrives and in
   Light, the transverse and approaching light readouts, and the 3D view of each setup. */
const explore = require('./explore.cjs');
module.exports = async (page, grab) => {
  await explore(page, grab);
  const W = (ms) => page.waitForTimeout(ms);
  const click = (sel) => page.evaluate((s) => { const b = document.querySelector(s); if (b && !b.disabled) b.click(); }, sel).catch(() => {});
  const range = (id, v) => page.evaluate(([id, v]) => { const e = document.getElementById(id); if (!e) return; e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); e.dispatchEvent(new Event('change', { bubbles: true })); }, [id, v]).catch(() => {});
  const play = () => page.evaluate(() => { const b = document.getElementById('play'); if (b && /Play/.test(b.getAttribute('aria-label') || b.textContent)) b.click(); }).catch(() => {});
  for (const p of ['ambulance', 'jet', 'mach1', 'observer']) {
    await click(`[data-p="${p}"]`); await W(200); await play(); await click('#restart'); await W(30); await click('.vd-rec'); await W(200); await grab(page);
    await W(1500); await click('.vd-rec'); await W(200); await grab(page);
  }
  await click('[data-p="transverse"]'); await click('#restart'); await W(30); await grab(page); await click('.vd-rec'); await W(200); await grab(page);
  await W(2500); await grab(page);
  for (const d of ['90', '180', '0']) { await click('[data-p="redshift"]'); await range('dir', d); await W(1500); await grab(page); }
  await click('[data-p="transverse"]'); await W(400);
  for (let t = 0; t < 12; t++) { await W(400); await grab(page); }
  await click('[data-dim="3d"]'); await W(600);
  for (const p of ['ambulance', 'observer', 'mach1', 'jet', 'redshift', 'transverse']) { await click(`[data-p="${p}"]`); await W(900); await grab(page); }
  await click('[data-dim="flat"]'); await click('[data-p="ambulance"]'); await W(300);
  /* export with no readings, then one reading and then two, each sent to the worksheet */
  await click('.vd-clear'); await W(100); await click('.vd-export'); await W(200); await grab(page); await click('.vd-rec'); await W(200); await click('.vd-export'); await W(300); await grab(page);
  await click('.vd-rec'); await W(200); await click('.vd-export'); await W(300); await grab(page);
};
