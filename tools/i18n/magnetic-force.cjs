/* harvest steps: every select, checkbox and slider end, then the buttons below; then the texts that appear only after time
   passes: the Hall build up reaching steady, and the cyclotron's first gap crossing */
const explore = require('./explore.cjs');
module.exports = async (page, grab) => {
  await explore(page, grab, { press: ['#fire', '#sameV', '#sameK', '#timerBtn', '#capture', '#dataBtn'] });
  await page.setViewportSize({ width: 1280, height: 800 });
  const blindOff = () => page.evaluate(() => { const c = document.querySelector('#labBlind'); if (c && c.checked) { c.checked = false; c.dispatchEvent(new Event('change', { bubbles: true })); } });
  const playing = async () => { if (!(await page.evaluate(() => __mf.playing))) await page.click('#play'); };
  await page.click('#presets [data-p="hall"]'); await blindOff(); await playing();
  await page.evaluate(() => { const e = document.getElementById('pb'); e.value = '4'; e.dispatchEvent(new Event('input', { bubbles: true })); });
  await page.waitForTimeout(2500); await grab(page);
  await page.click('#presets [data-p="cyc"]'); await blindOff(); await playing(); await page.waitForTimeout(3000); await grab(page);
  await page.click('#presets [data-p="bottle"]'); await playing(); await page.waitForTimeout(1500); await grab(page);
};
