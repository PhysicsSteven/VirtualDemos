/* Extra harvest states for demos/blackbody.html (tools/i18n.cjs harvest blackbody), after the shared explore.cjs steps: the temperature slider from end to end
   (the color names and glow notes), log axes, pinned curves, and a narrow chart (the short color bar title). */
const explore = require('./explore.cjs');
module.exports = async (page, grab) => {
  await explore(page, grab);
  const W = (ms) => page.waitForTimeout(ms);
  const click = (sel) => page.evaluate((s) => { const b = document.querySelector(s); if (b && !b.disabled) b.click(); }, sel).catch(() => {});
  const range = (id, v) => page.evaluate(([id, v]) => { const e = document.getElementById(id); if (!e) return; e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); e.dispatchEvent(new Event('change', { bubbles: true })); }, [id, v]).catch(() => {});
  await click('[data-view="spec"]'); await click('[data-p="sun"]'); await W(200);
  await click('[data-x="log"]'); await click('[data-y="log"]'); await W(300); await grab(page);
  for (let u = 0; u <= 1000; u += 25) { await range('temp', String(u)); await W(60); if (u % 100 === 0) await grab(page); }
  await grab(page);
  await click('#pin'); await range('temp', '300'); await click('#pin'); await W(300); await grab(page);
  await click('[data-x="lin"]'); await click('[data-y="lin"]'); await W(200); await grab(page);
  await page.setViewportSize({ width: 400, height: 860 }); await W(600); await grab(page);
  for (const u of ['0', '1000', '500']) { await range('temp', u); await W(200); await grab(page); }
  await page.setViewportSize({ width: 1280, height: 800 }); await W(400);
  await click('#unpin'); await click('[data-p="sun"]'); await W(200); await grab(page);
  /* export with no readings, then one reading and then two, each sent to the worksheet */
  await click('.vd-clear'); await W(100); await click('.vd-export'); await W(200); await grab(page); await click('.vd-rec'); await W(200); await click('.vd-export'); await W(300); await grab(page);
  await click('.vd-rec'); await W(200); await click('.vd-export'); await W(300); await grab(page);
};
