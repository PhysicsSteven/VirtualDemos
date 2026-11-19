/* harvest steps for measurement-uncertainty: Record reading with nothing to record (its message), then every setup with both
   graphs, a Repeat 10 times and a short swing, with Blind and Reveal on and off, both timers and both length marks; then the
   Histogram graph with Repeat 100 times, Blind on and off, the photogate (no spread) and Bottom of the bob */
const explore = require('./explore.cjs');
module.exports = async (page, grab) => {
  await page.evaluate(() => document.querySelector('.vd-readings .vd-rec').click()).catch(() => {}); await page.waitForTimeout(150); await grab(page);
  await explore(page, grab, { press: ['#newDraw'] });
  const n = await page.evaluate(() => document.querySelectorAll('#presets button').length).catch(() => 0);
  for (let i = 0; i < n; i++) for (const view of ['rep', 'fit']) {
    await page.evaluate(([i, view]) => { document.querySelectorAll('#presets button')[i].click(); document.querySelector(`#viewSeg [data-view="${view}"]`).click(); }, [i, view]).catch(() => {});
    await page.waitForTimeout(200); await grab(page);
    await page.evaluate(() => { document.getElementById('rep').click(); window.__mu.S.L = 0.6; document.getElementById('rep').click(); window.__mu.S.L = 1; }).catch(() => {});
    await page.waitForTimeout(200); await grab(page);
    for (const sel of ['#labReveal', '#labBlind', '#labBlind', '#labReveal']) { await page.evaluate((q) => document.querySelector(q).click(), sel).catch(() => {}); await page.waitForTimeout(150); await grab(page); }
    await page.evaluate(() => { document.querySelector('#speed [data-sp="16"]').click(); document.getElementById('go').click(); }).catch(() => {});
    await page.waitForTimeout(700); await grab(page);
    await page.evaluate(() => document.getElementById('labReveal').click()).catch(() => {}); await page.waitForTimeout(2500); await grab(page);
    await page.evaluate(() => { document.getElementById('labReveal').click(); if (window.__mu.S.run) document.getElementById('go').click(); }).catch(() => {}); await page.waitForTimeout(150); await grab(page);
  }
  await page.evaluate(() => { document.querySelector('#presets [data-p="many"]').click(); }).catch(() => {}); await page.waitForTimeout(200); await grab(page);
  await page.evaluate(() => document.getElementById('rep100').click()).catch(() => {}); await page.waitForTimeout(300); await grab(page);
  for (const sel of ['#labBlind', '#labBlind', '#timerSeg [data-timer=gate]', '#rep', '#timerSeg [data-timer=hand]', '#markSeg [data-mark=bottom]', '#rep100']) {
    await page.evaluate((q) => document.querySelector(q).click(), sel).catch(() => {}); await page.waitForTimeout(200); await grab(page);
  }
  await page.evaluate(() => document.querySelector('.vd-readings .vd-clear').click()).catch(() => {}); await page.waitForTimeout(150); await grab(page);
};
