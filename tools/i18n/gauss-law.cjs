/* harvest steps: the data table opened first (its caption names the charge and changes with every choice), then every select,
   checkbox and slider end, the buttons below, and each setup */
const explore = require('./explore.cjs');
module.exports = async (page, grab) => {
  await page.evaluate(() => document.getElementById('eDataBtn').click()); await page.waitForTimeout(150); await grab(page);
  await explore(page, grab, { press: ['#drawBtn', '#blobBtn', '#addPos', '#capture'] });
  const n = await page.evaluate(() => document.querySelectorAll('#presets [data-p]').length);
  for (let i = 0; i < n; i++) { await page.evaluate((i) => document.querySelectorAll('#presets [data-p]')[i].click(), i); await page.waitForTimeout(150); await grab(page); }
  /* Typed field: an open surface of every shape, the piece table, a typing error and a field that blows up */
  await page.evaluate(() => { document.querySelector('[data-p="fNone"]').click(); document.getElementById('tOpen').click(); document.querySelectorAll('details').forEach((d) => { d.open = true; }); });
  for (const sf of ['sphere', 'box', 'cyl', 'free']) { await page.evaluate((sf) => document.querySelector(`#surfSeg [data-s="${sf}"]`).click(), sf); await page.waitForTimeout(400); await grab(page); }
  const type = async (v) => { await page.evaluate((v) => { const e = document.getElementById('fxIn'); e.value = v; e.dispatchEvent(new Event('input')); }, v); await page.waitForTimeout(600); await grab(page); };
  await type('x +'); await type('x)'); await type('foo(x)'); await type('1/x'); await type('');
  await page.evaluate(() => { for (const id of ['fxIn', 'fyIn', 'fzIn']) { const e = document.getElementById(id); e.value = ''; e.dispatchEvent(new Event('input')); } }); await page.waitForTimeout(400); await grab(page);
};
