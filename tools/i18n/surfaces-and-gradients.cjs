/* harvest steps: every setup in each of its tools, Play for a moment, Blind on and off, a typed function and typing errors */
module.exports = async (page, grab) => {
  await require('./explore.cjs')(page, grab, { press: ['#play'] });
  await page.waitForTimeout(600); await grab(page);
  for (const k of ['hill', 'gas', 'dipole', 'well', 'twoq', 'peaks', 'monkey', 'fence', 'hoop', 'lim1', 'lim2', 'lim3']) {
    await page.evaluate((k) => window.__sg.applyPreset(k), k).catch(() => {});
    await page.waitForTimeout(250); await grab(page);
    await page.evaluate(() => document.getElementById('play').click()).catch(() => {}); await page.waitForTimeout(500); await grab(page);
    await page.evaluate(() => { document.getElementById('play').click(); document.getElementById('labBlind').click(); }).catch(() => {}); await page.waitForTimeout(150); await grab(page);
    await page.evaluate(() => document.getElementById('labBlind').click()).catch(() => {});
    const crit = await page.$('#crit button'); if (crit) { await crit.click().catch(() => {}); await page.waitForTimeout(150); await grab(page); }
  }
  for (const t of ['slopes', 'grad', 'crit']) { await page.evaluate((t) => { window.__sg.applyPreset('gas'); document.querySelector(`#toolSeg [data-tool="${t}"]`).click(); }, t).catch(() => {}); await page.waitForTimeout(200); await grab(page); }
  for (const v of ['x y', 'x +', 'x + z', 'sin(x))', 'sin(x,y)', 'sqrt', '#', '']) {
    await page.evaluate((v) => { const e = document.getElementById('fIn'); e.value = v; e.dispatchEvent(new Event('input')); }, v).catch(() => {}); await page.waitForTimeout(150); await grab(page);
  }
  await page.evaluate(() => { window.__sg.applyPreset('fence'); const e = document.getElementById('cIn'); e.value = 'q'; e.dispatchEvent(new Event('input')); }).catch(() => {}); await page.waitForTimeout(150); await grab(page);
  await page.evaluate(() => { const e = document.getElementById('cIn'); e.value = '40'; e.dispatchEvent(new Event('input')); }).catch(() => {}); await page.waitForTimeout(200); await grab(page);
};
