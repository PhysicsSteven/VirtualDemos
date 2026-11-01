/* harvest steps: every select option, checkbox and slider end; the "Reaches the ground?" answer at every window and gap of the
   ground strip (the frequency slider swept from 10⁵ to 10²¹ Hz); then the page with three.js blocked */
module.exports = async (page, grab) => {
  await require('./explore.cjs')(page, grab);
  await page.evaluate(() => { const b = document.querySelector('#mWave'); if (b) b.click(); });
  const seen = new Set();
  for (let lf = 5; lf <= 21.0001; lf += 0.02) {
    const g = await page.evaluate((v) => { const s = document.getElementById('sf'); if (!s) return ''; s.value = v; s.dispatchEvent(new Event('input', { bubbles: true })); const d = document.getElementById('rGround'); return d ? d.textContent : ''; }, lf.toFixed(2));
    if (g && !seen.has(g)) { seen.add(g); await page.waitForTimeout(60); await grab(page); }
  }
  await require('./nothree.cjs')(page, grab);
};
