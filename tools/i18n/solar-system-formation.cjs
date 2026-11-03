/* harvest steps for solar-system-formation: every select, checkbox and slider end (explore.cjs), its buttons, then a longer run;
   then The whole story through every chapter (the giant impacts and the impact that made the Moon too) and its captions, following the whole system and then Earth, in 3D and Flat */
const explore = require('./explore.cjs');
module.exports = async (page, grab) => {
  await explore(page, grab, { press: ['#restart', '#skip'] });
  await page.evaluate(() => { const p = document.querySelector('#play, #go, #run, #sdPlay'); if (p) p.click(); }).catch(() => {});
  await page.waitForTimeout(3000); await grab(page);
  for (const dim of ['3d', 'flat']) for (const pre of ['story', 'followEarth', 'followJupiter']) {
    const ok = await page.evaluate(([dim, pre]) => { if (!window.__ss) return false; const b = document.querySelector(`[data-dim="${dim}"]`); if (b) b.click();
      __ss.setRun(false); __ss.applyPreset(pre, true); __ss.redraw(); return true; }, [dim, pre]).catch(() => false);
    if (!ok) return;
    await page.waitForTimeout(400); await grab(page);
    /* the cloud: falling, landing, done */
    for (const n of [60, 250, 420, 900]) { await page.evaluate((n) => { __ss.SY.started = true; __ss.run(n); __ss.redraw(); }, n); await page.waitForTimeout(150); await grab(page); }
    /* the disk, then growth: early, middle, a giant, the end */
    await page.evaluate(() => { __ss.storyChapter(1); __ss.run(60); __ss.redraw(); }); await page.waitForTimeout(150); await grab(page);
    for (const n of [5, 300, 700, 1100]) { await page.evaluate((n) => { if (__ss.SY.ch !== 2) __ss.storyChapter(2); __ss.run(n); __ss.redraw(); }, n); await page.waitForTimeout(150); await grab(page); }
    await page.evaluate(() => { __ss.toEnd(); __ss.redraw(); }); await page.waitForTimeout(150); await grab(page);
    /* the giant impacts: the start, an impact, the middle, the end */
    await page.waitForFunction(() => !!window.VD_SSF_IMPACTS, null, { timeout: 5000 }).catch(() => {});
    for (const n of [0, 60, 600]) { await page.evaluate((n) => { if (__ss.SY.ch !== 3) __ss.storyChapter(3); __ss.run(n); __ss.redraw(); }, n); await page.waitForTimeout(150); await grab(page); }
    await page.evaluate(() => { __ss.toEnd(); __ss.redraw(); }); await page.waitForTimeout(150); await grab(page);
    /* the impact that made the Moon: before contact, the impact, the disk, the end with the Moon drawn */
    await page.waitForFunction(() => !!window.VD_SSF_MOON, null, { timeout: 5000 }).catch(() => {});
    for (const n of [0, 400, 300, 1200]) { await page.evaluate((n) => { if (__ss.SY.ch !== 4) __ss.storyChapter(4); __ss.run(n); __ss.redraw(); }, n); await page.waitForTimeout(150); await grab(page); }
    await page.evaluate(() => { __ss.toEnd(); __ss.redraw(); }); await page.waitForTimeout(150); await grab(page);
  }
  /* the other planets to follow, and the time lapse shown while the story plays */
  for (const f of ['mercury', 'venus', 'mars']) {
    await page.evaluate((f) => { const s = document.getElementById('selFollow'); s.value = f; s.dispatchEvent(new Event('change')); __ss.storyChapter(0); __ss.redraw(); }, f); await grab(page);
    await page.evaluate(() => { __ss.storyChapter(2); __ss.run(500); __ss.redraw(); }); await page.waitForTimeout(150); await grab(page);
    await page.evaluate(() => { __ss.storyChapter(3); __ss.toEnd(); __ss.redraw(); }); await page.waitForTimeout(150); await grab(page);
  }
  await page.evaluate(() => { document.querySelector('[data-dim="3d"]').click(); __ss.applyPreset('story', true); __ss.S.speed = 4; document.getElementById('play').click(); });
  for (const ms of [1500, 2500, 4000]) { await page.waitForTimeout(ms); await grab(page); }
  await page.evaluate(() => { __ss.storyChapter(2); }); for (const ms of [1000, 3000, 6000]) { await page.waitForTimeout(ms); await grab(page); }
};
