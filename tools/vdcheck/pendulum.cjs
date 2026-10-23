/* tools/vdcheck.cjs script for the pendulum: two timed readings, then one cell edited and one row deleted */
const run = async (page) => { await page.click('#go'); await page.clock.runFor(5000); await page.click('#go'); };
module.exports = {
  export: async (page) => {
    await run(page); await page.click('#capture'); await page.click('#hold');
    for (let i = 0; i < 5; i++) await page.click('[data-step="L"][data-d="0.01"]');
    await run(page); await page.click('#capture');
    await page.click('#hold'); await page.click('[data-step="A"][data-d="1"]'); await run(page); await page.click('#capture');
  },
  edit: async (page) => { const c = page.locator('#rowsTbl input').first(); await c.fill('1.07'); await c.press('Tab'); await page.locator('#rowsTbl [data-del]').last().click(); },
  states: [
    { name: 'running', run: async (page) => { await page.click('#go'); await page.clock.runFor(1300); } },
    { name: 'paused', run: async (page) => { await run(page); } },
    { name: 'plotfold', run: async (page) => { await run(page); await page.click('#capture'); await page.click('details.plotfold > summary'); } },
  ],
};
