/* harvest steps: every select, checkbox and slider end, then the buttons below; then the Magnetic field view with each planet,
   the dynamo on and off and each setup (their pictures, readouts and descriptions) */
const explore = require('./explore.cjs');
module.exports = async (page, grab) => {
  await explore(page, grab, { press: ['#restart'] });
  const ev = (js) => page.evaluate(js).catch(() => {});
  await ev(`document.querySelector('[data-mode=magnet]').click()`); await grab(page);
  for (const k of ['shield', 'storm', 'mercuryMag', 'marsNow', 'marsYoung', 'venusNone']) { await ev(`document.querySelector('[data-m=magnet][data-p=${k}]').click()`); await page.waitForTimeout(100); await grab(page); }
  for (const pl of ['mercury', 'venus', 'earth', 'moon', 'mars']) for (const dyn of [true, false]) {
    await ev(`(() => { const s = document.getElementById('selMPlanet'); s.value = '${pl}'; s.dispatchEvent(new Event('change', { bubbles: true })); const c = document.getElementById('chkDynamo'); if (c.checked !== ${dyn}) c.click(); })()`);
    await page.waitForTimeout(100); await grab(page); }
};
