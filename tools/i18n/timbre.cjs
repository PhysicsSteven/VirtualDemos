/* harvest steps for timbre: every select, checkbox and slider end (explore.cjs), its buttons, then a longer run; then the Sampling
   and aliasing section: each setup with each window and join, the filter, the noise, a recorded reading and the export */
const explore = require('./explore.cjs');
module.exports = async (page, grab) => {
  await explore(page, grab, { press: ['#pure', '#allOn', '#randPh', '#zeroPh', '#pkMake', '#pkAgain', '#recTone', '#harmonicAgain'] });
  await page.evaluate(() => { const p = document.querySelector('#play, #go, #run, #sdPlay'); if (p) p.click(); }).catch(() => {});
  await page.waitForTimeout(3000); await grab(page);
  const click = async (sel) => { await page.evaluate((sel) => { const b = document.querySelector(sel); if (b) b.click(); }, sel).catch(() => {}); await page.waitForTimeout(200); await grab(page); };
  await click('#smpRec');   /* before sampling is on: the "tick it first" status */
  for (const s of ['slow', 'fold', 'filter', 'leak', 'noise']) {
    await click(`#smpSetups [data-s="${s}"]`);
    for (const j of ['smooth', 'lines']) await click(`#smpJoinSeg [data-j="${j}"]`);
    for (const w of ['hann', 'rect']) await click(`#smpWinSeg [data-w="${w}"]`);
  }
  for (const n of ['32', '1024', '256']) await click(`#smpNSeg [data-n="${n}"]`);
  await click('#smpWhole'); await click('#smpNewNoise');
  await click('#smpToWs'); await click('#smpRec'); await click('#smpToWs'); await click('#smpClear');
  await page.setViewportSize({ width: 400, height: 900 }); await page.waitForTimeout(300);
  for (const s of ['slow', 'filter', 'noise']) { await click(`#smpSetups [data-s="${s}"]`); await click('#smpJoinSeg [data-j="smooth"]'); }
  await page.setViewportSize({ width: 300, height: 800 }); await page.waitForTimeout(300);
  for (const s of ['slow', 'fold', 'filter', 'noise']) { await click(`#smpSetups [data-s="${s}"]`); await click('#smpJoinSeg [data-j="smooth"]'); await click('#smpJoinSeg [data-j="lines"]'); }
  await click('#smpRec'); await click('#smpToWs'); await click('#smpClear');
  await click('#smpOn');
};
