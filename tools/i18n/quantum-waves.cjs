/* harvest steps for quantum-waves: every select, checkbox and slider end (explore.cjs); then Light drives a transition in 2D with
   the light along y (the (1,1) to (2,1) transition is forbidden for it), and then tuned to (1,2) and switched back to x, so the
   readouts of a transition forbidden for each polarization show */
const explore = require('./explore.cjs');
module.exports = async (page, grab) => {
  await explore(page, grab);
  const step = (fn) => page.evaluate(fn).catch(() => {});
  await step(() => {
    const q = document.querySelector('#qdSeg [data-qd="2d"]'); if (q) q.click();
    const d = document.querySelector('#presets2 [data-p="rabi"]'); if (d) d.click();
    const b = document.querySelector('#q2Pol [data-pol="y"]'); if (b) b.click();
  });
  await page.waitForTimeout(300); await grab(page);
  await step(() => {
    const s = document.getElementById('q2Tune'), o = [...s.options].find((o) => /→ \(1,2\)/.test(o.textContent));
    if (o) { s.value = o.value; s.dispatchEvent(new Event('change', { bubbles: true })); }
    const b = document.querySelector('#q2Pol [data-pol="x"]'); if (b) b.click();
  });
  await page.waitForTimeout(300); await grab(page);
  await step(() => { const q = document.querySelector('#qdSeg [data-qd="1d"]'); if (q) q.click(); });
};
