/* Helper for tools/vdlib.py: which elements of a demo each selector matches, as the page opens.
   node tools/vdlib_match.cjs demos/<demo>.html selectors.json  ->  {"selector": [element indices], ...} on stdout */
'use strict';
const fs = require('node:fs'), path = require('node:path');
const { chromium } = require('playwright');
(async () => {
  const [file, list] = process.argv.slice(2), sels = JSON.parse(fs.readFileSync(list, 'utf8'));
  const browser = await chromium.launch(), out = {};
  for (const [w, h] of [[1280, 800], [400, 860]]) {
    const page = await browser.newPage({ viewport: { width: w, height: h } });
    await page.route(/fonts\.(googleapis|gstatic)\.com/, (r) => r.abort());
    await page.goto('file://' + path.resolve(file)); await page.waitForTimeout(300);
    /* open every fold so rules for their contents are matched too */
    const got = await page.evaluate((sels) => {
      document.querySelectorAll('details').forEach((d) => { d.open = true; });
      const all = [...document.querySelectorAll('*')], r = {};
      for (const s of sels) { try { r[s] = all.map((e, i) => (e.matches(s || ':root') ? i : -1)).filter((i) => i >= 0); } catch (_) { r[s] = null; } }
      return r;
    }, sels);
    for (const [s, v] of Object.entries(got)) out[s] = v === null ? null : [...new Set([...(out[s] || []), ...v.map((i) => `${w}:${i}`)])];
    await page.close();
  }
  await browser.close();
  process.stdout.write(JSON.stringify(out));
})();
