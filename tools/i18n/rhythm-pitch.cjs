/* harvest steps: every control and setup, the axle sped into pitch, harmonics on, Blind on, and the Song through its bars */
module.exports = async (page, grab) => {
  await require('./explore.cjs')(page, grab, { press: ['#play'] });
  await page.click('#sound').catch(() => {}); await page.waitForTimeout(400); await grab(page); await page.click('#sound').catch(() => {}); await page.waitForTimeout(200); await grab(page);
  for (const k of ['one', 'octave', 'fifth', 'fourth', 'major', 'minor', 'seventh', 'clash', 'song']) {
    await page.evaluate((k) => { const D = window.vdDemo; D.applyPreset(k); D.setRun(true); }, k).catch(() => {});
    await page.waitForTimeout(250); await grab(page);
    for (const om of [0.5 / 4, 15 / 4, 55]) { await page.evaluate((om) => window.vdDemo.setOm(om), om).catch(() => {}); await page.waitForTimeout(200); await grab(page); }
  }
  await page.evaluate(() => { const D = window.vdDemo; D.applyPreset('song'); D.setOm(55); D.setRun(true); }).catch(() => {});
  for (let i = 0; i < 4; i++) { await page.evaluate((i) => { window.vdDemo.S.songT = 2 * i + 0.1; }, i).catch(() => {}); await page.waitForTimeout(250); await grab(page); }
  await page.evaluate(() => { const D = window.vdDemo; D.applyPreset('major'); D.addWheel(); D.addWheel(9); D.setTeeth(D.S.wheels[0].id, 1); }).catch(() => {});
  await page.waitForTimeout(200); await grab(page);
  await page.evaluate(() => { document.getElementById('chkH').click(); document.getElementById('labBlind').click(); }).catch(() => {}); await page.waitForTimeout(200); await grab(page);
  await page.evaluate(() => { document.getElementById('labBlind').click(); window.vdDemo.applyPreset('clash'); window.vdDemo.setOm(14.7); }).catch(() => {}); await page.waitForTimeout(200); await grab(page);
};
