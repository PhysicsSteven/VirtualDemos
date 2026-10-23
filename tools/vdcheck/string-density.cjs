/* tools/vdcheck.cjs script for the linear density of a string: three recorded readings, one cell edited, one row deleted */
module.exports = {
  export: async (page) => {
    await page.click('#record');
    for (let i = 0; i < 2; i++) { await page.getByRole('button', { name: '+1 Hz', exact: true }).click(); await page.clock.runFor(300); await page.click('#record'); }
  },
  edit: async (page) => { const c = page.locator('#rowsTbl input').first(); if (await c.count()) { await c.fill('1.21'); await c.press('Tab'); } await page.locator('#rowsTbl [data-del]').last().click(); },
  states: [
    { name: 'paused', run: async (page) => { await page.click('#play'); } },
    { name: 'plotfold', run: async (page) => { await page.click('#record'); await page.click('details.plotfold > summary'); } },
  ],
};
