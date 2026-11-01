/* Shared harvest steps: every Setups chip in every view (3D, Flat, ...), for text a setup shows only in one view.
   Use from a demo's steps file:  await require('./presets-views.cjs')(page, grab, { views: '[data-view]' }); */
'use strict';
module.exports = async (page, grab, opts = {}) => {
  const views = opts.views || '[data-view], .dimbar button', chips = opts.chips || '[data-p]', wait = opts.wait || 250;
  const n = await page.evaluate(([v, c]) => [document.querySelectorAll(v).length, document.querySelectorAll(c).length], [views, chips]).catch(() => [0, 0]);
  for (let i = 0; i < n[0]; i++) {
    await page.evaluate(([v, i]) => { const b = document.querySelectorAll(v)[i]; if (b && !b.disabled) b.click(); }, [views, i]).catch(() => {});
    for (let j = 0; j < n[1]; j++) {
      await page.evaluate(([c, j]) => { const b = document.querySelectorAll(c)[j]; if (b && !b.disabled) b.click(); }, [chips, j]).catch(() => {});
      await page.waitForTimeout(wait); await grab(page);
    }
  }
};
