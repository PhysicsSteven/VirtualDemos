/* Harvest and leaks steps for the site pages (home, course, topic and OpenStax pages): every title the home page hero can show,
   and the search box's count line, for a search
   with several matches, with one and with none (search.js, written by tools/courses.py). Search results are the catalog's titles
   and descriptions, which the pages show already. */
'use strict';
module.exports = async (page, grab) => {
  /* the home page's hero shows one demo title, picked at random: every title it can pick is looked up */
  await page.evaluate(() => {
    const sc = document.getElementById('hero-pick'), m = sc && sc.textContent.match(/const HERO_DEMOS = (\[[\s\S]*?\]);/);
    if (m && window.VDI18N) JSON.parse(m[1]).forEach(([, title]) => VDI18N.t(title));
  }).catch(() => {});
  await grab(page);
  const q = await page.$('.filter[role=search] input');
  if (!q) return;
  for (const v of ['pendulum', 'millikan', 'zzqx']) {
    await q.fill(v); await page.waitForTimeout(120); await grab(page);
  }
  await q.fill(''); await page.waitForTimeout(60);
};
