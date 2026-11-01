/* harvest steps: every select, checkbox and slider end (explore.cjs), then Real distances with each constellation's every star
   selected in turn from Earth and from the side, since a selected star's name is drawn first and crowded names give way */
const explore = require('./explore.cjs');
module.exports = async (page, grab) => {
  await explore(page, grab);
  const cons = await page.evaluate(() => { const C = window.__cs; if (!C) return []; C.setDepth(true); const b = document.getElementById('tDepthNames'); if (b && !b.checked) b.click(); return [...document.querySelectorAll('#depthCon option')].map((o) => o.value); }).catch(() => []);
  for (const con of cons) {
    for (const look of ['earth', 'side']) {
      const n = await page.evaluate(([con, look]) => { const C = window.__cs; C.setCon(con); C.setLook(look, true); return C.depthGeom().known.length; }, [con, look]).catch(() => 0);
      for (let i = 0; i < n; i++) {
        await page.evaluate((i) => { const C = window.__cs; C.select('star:' + C.depthGeom().known[i].i); }, i).catch(() => {});
        await page.waitForTimeout(60); await grab(page);
      }
    }
  }
  await page.evaluate(() => window.__cs && window.__cs.setDepth(false)).catch(() => {});
};
