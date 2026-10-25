/* Check the symbol hover on the built handouts: every symbol of every equation, on every page, shows the meaning and unit that
   tools/symbols.py says it should (from the handout's TeX and curriculum/labs/symbols/glossary.txt), equation by equation.

     python3 tools/symbols.py                                    # build the glossaries first
     bundle exec jekyll serve                                    # or any server of the built site
     NODE_PATH=/opt/node-tools/node_modules node tools/symcheck.cjs [--base URL] [--mathjax DIR] [slug ...]

   --base is the built site (default http://localhost:4000/VirtualDemos). --mathjax serves MathJax 3.2.2 from a local copy of its
   npm package when the page cannot reach the CDN. Exits 1 on any difference and prints each one. */
const { chromium } = require('playwright');
const { execFileSync } = require('child_process');
const path = require('path');

const args = process.argv.slice(2);
const opt = (n, d) => { const i = args.indexOf(n); return i >= 0 ? args.splice(i, 2)[1] : d; };
const BASE = opt('--base', 'http://localhost:4000/VirtualDemos'), MJ = opt('--mathjax', null);
const want = JSON.parse(execFileSync('python3', [path.join(__dirname, 'symbols.py'), '--occurrences'], { maxBuffer: 1 << 28 }).toString());
const slugs = args.length ? args : Object.keys(want);
const flat = (t) => t.replace(/\s+/g, '');
const show = (o) => o[1] === null ? o[0] + ' (none)' : `${o[0]} = ${o[1]}${o[2] ? ' [' + o[2] + ']' : ''}`;

(async () => {
  const b = await chromium.launch();
  const ctx = await b.newContext({ viewport: { width: 1000, height: 1400 } });
  if (MJ) await ctx.route(/cdn\.jsdelivr\.net\/npm\/mathjax@3\.2\.2\/(.*)/, (r) => r.fulfill({ path: path.join(MJ, r.request().url().split('mathjax@3.2.2/')[1]) }));
  await ctx.route(/fonts\.(googleapis|gstatic)/, (r) => r.fulfill({ body: '' }));
  const bad = [];
  let n = 0;
  await Promise.all([0, 1, 2, 3, 4, 5].map(async (w) => {
    const page = await ctx.newPage();
    for (let i = w; i < slugs.length; i += 6) {
      const slug = slugs[i];
      page.removeAllListeners('pageerror');
      /* the theme's heading anchors come from a CDN that a local run may not reach; nothing here depends on them */
      page.on('pageerror', (e) => { if (!/anchors is not defined/.test(e.message)) bad.push(`${slug}: page error ${e.message}`); });
      await page.goto(`${BASE}/curriculum/labs/students/${slug}.html`);
      await page.waitForFunction(() => window.MathJax && MathJax.startup && MathJax.startup.promise && window.vdSymbolOccurrences, null, { timeout: 20000 }).catch(() => {});
      await page.evaluate(() => MathJax.startup.promise).catch(() => {});
      await page.waitForFunction(() => document.querySelector('.sym-hint') || !document.querySelector('mjx-container'), null, { timeout: 10000 }).catch(() => {});
      const got = await page.evaluate(() => window.vdSymbolOccurrences ? vdSymbolOccurrences() : null);
      if (!got) { bad.push(`${slug}: no symbol script on the page`); continue; }
      /* the page's equations and the handout's, matched by their TeX in order */
      const exp = want[slug] || [];
      let j = 0;
      for (const g of got) {
        let k = j;
        while (k < exp.length && flat(exp[k].tex) !== flat(g.tex)) k++;
        if (k === exp.length) { if (g.occ.length) bad.push(`${slug}: the page has an equation the handout source does not: ${g.tex}`); continue; }
        for (; j < k; j++) if (exp[j].occ.length) bad.push(`${slug}: equation not on the page: ${exp[j].tex}`);
        const e = exp[j++], a = g.occ.map(show).sort(), x = e.occ.map(show).sort();
        n += x.length;
        if (a.join('\n') !== x.join('\n')) {
          const only = (p, q) => p.filter((s, i) => p.indexOf(s) === i && p.filter((t) => t === s).length > q.filter((t) => t === s).length);
          bad.push(`${slug}: $$${e.tex}$$\n    page shows: ${only(a, x).join('; ') || '-'}\n    should be:  ${only(x, a).join('; ') || '-'}`);
        }
      }
      for (; j < exp.length; j++) if (exp[j].occ.length) bad.push(`${slug}: equation not on the page: ${exp[j].tex}`);
    }
  }));
  await b.close();
  bad.forEach((s) => console.log(s));
  console.log(`${slugs.length} handouts, ${n} symbols checked, ${bad.length} differences`);
  process.exit(bad.length ? 1 : 0);
})();
