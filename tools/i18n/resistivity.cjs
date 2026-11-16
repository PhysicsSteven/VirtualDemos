/* harvest steps: every select, checkbox and slider end; each view with each material, layout and state the screen reader description
   (VD.describe) words differently, with Blind off and on. The description refreshes once a second by itself, so it is refreshed before
   every grab. */
module.exports = async (page, grab0) => {
  const grab = async (pg) => { await pg.evaluate(() => { for (const e of document.querySelectorAll('canvas,svg')) if (e.vdDescribe) e.vdDescribe.refresh(); }).catch(() => {}); await pg.waitForTimeout(120); await grab0(pg); };
  await require('./explore.cjs')(page, grab);
  const ev = (f, a) => page.evaluate(f, a).catch(() => {});
  const click = (sel) => ev((sel) => { const b = document.querySelector(sel); if (b) b.click(); }, sel);
  const blind = async () => { await click('#labBlind'); await page.waitForTimeout(200); await grab(page); await click('#labBlind'); };
  await click('#views [data-view="bench"]');
  for (const m of ['nichrome', 'constantan', 'copper', 'mystery']) { await click('#mats [data-m="' + m + '"]'); await page.waitForTimeout(200); await grab(page); }
  await click('#mats [data-m="nichrome"]'); await click('#rec, .vd-rec'); await blind();
  await click('#views [data-view="inside"]'); await page.waitForTimeout(400); await grab(page); await blind();
  await click('#inPlay'); await grab(page); await click('#inPlay');
  await click('#views [data-view="cold"]'); await page.waitForTimeout(300); await grab(page);
  for (const c of ['copper', 'aluminum', 'tin', 'lead', 'ybco']) { await click('#coldMats [data-c="' + c + '"]'); await page.waitForTimeout(200); await grab(page); }
  await click('#coolBtn'); await page.waitForTimeout(1500); await grab(page); await click('#coolBtn'); await click('#warmBtn'); await page.waitForTimeout(300); await grab(page); await click('#warmBtn'); await blind();
  await click('#views [data-view="sheet"]'); await page.waitForTimeout(500); await grab(page);
  for (const l of ['bars', 'dots', 'bardot', 'slot', 'ring', 'neck', 'strip']) { await click('#shLayouts [data-sl="' + l + '"]'); await page.waitForTimeout(500); await grab(page); }
  await blind();
  await require('./nothree.cjs')(page, grab);
};
