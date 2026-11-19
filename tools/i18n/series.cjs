/* harvest steps: every chip, switch and fold (explore); Play; then every setup in every picture, typing errors, typed series
   that each test decides (and ones none decides), sequences without a limit, a total to pass, Blind */
module.exports = async (page, grab) => {
  await require('./explore.cjs')(page, grab, { press: ['#play'] });
  await page.waitForTimeout(600); await grab(page);
  const ev = (f, a) => page.evaluate(f, a).catch(() => {});
  const keys = await page.evaluate(() => [...document.querySelectorAll('#presets [data-p]')].map((b) => b.dataset.p)).catch(() => []);
  for (const k of keys) {
    await ev((k) => window.__ser.applyPreset(k), k); await page.waitForTimeout(250); await grab(page);
    for (const v of ['sum', 'seq', 'integral', 'compare', 'ratio']) { await ev((v) => document.querySelector(`#viewSeg [data-v="${v}"]`).click(), v); await page.waitForTimeout(200); await grab(page); }
  }
  const type = async (s, v) => { await ev(([s, v]) => { const i = document.getElementById('an'); i.value = s; i.dispatchEvent(new Event('input')); if (v) document.querySelector(`#viewSeg [data-v="${v}"]`).click(); }, [s, v]); await page.waitForTimeout(300); await grab(page); };
  await ev(() => window.__ser.applyPreset('harmonic'));
  for (const s of ['sin(', '1/n +', 'q n', 'n x', '', '|n|', '1/(n', ')', 'n!/2^n', '2^n', '1/n^1.01', 'sin(n)/n^2', '1/(n-3)', 'cos(1/n)', '1/n^3']) await type(s, 'sum');
  for (const s of ['1/ln(n)', 'n^2', '(-1)^n', 'n']) await type(s, 'seq');
  await type('1/n^1.01', 'integral'); await type('1/n', 'integral');
  await ev(() => { const b = document.getElementById('bn'); b.value = 'n^('; b.dispatchEvent(new Event('input')); document.querySelector('#viewSeg [data-v="compare"]').click(); }); await page.waitForTimeout(250); await grab(page);
  await ev(() => { const b = document.getElementById('bn'); b.value = '1/n'; b.dispatchEvent(new Event('input')); }); await page.waitForTimeout(250); await grab(page);
  await ev(() => window.__ser.applyPreset('books')); await ev(() => { const b = document.getElementById('bound'); b.value = '0.1'; b.dispatchEvent(new Event('input')); }); await page.waitForTimeout(250); await grab(page);
  await ev(() => { const b = document.getElementById('bound'); b.value = '30'; b.dispatchEvent(new Event('input')); }); await page.waitForTimeout(1500); await grab(page);
  await ev(() => { const i = document.getElementById('n0'); i.value = '5000'; i.dispatchEvent(new Event('input')); }); await page.waitForTimeout(250); await grab(page);
  await ev(() => document.getElementById('labBlind').click()); await page.waitForTimeout(200); await grab(page);
};
