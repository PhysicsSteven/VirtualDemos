/* Harvest and leaks steps for every student worksheet (tools/i18n.cjs uses this file for a ws/<slug> page that has no
   tools/i18n/ws-<slug>.cjs of its own). The states curriculum/labs/worksheet.js and symbols.js reach only when a student does
   something: a symbol's tip, Add a row, a second copy of a table, a column of one's own, a formula and its errors, the graph with
   its axes picked and every kind of fit, error bars, the status lines after saving and exporting, readings sent by the demo, and
   a saved file from an older version of the worksheet (answers that no longer match). Buttons are found by their place in the
   worksheet, never by their text, since in the test language the text is translated.
   Shared worksheet text (worksheet.js, symbols.js) goes into en/common.js at tools/i18n.cjs common, from its VDI18N.t literals
   and from the many worksheets that show it. */
'use strict';
module.exports = async (page, grab) => {
  const wait = (ms) => page.waitForTimeout(ms);
  const collect = /i18n=collect/.test(page.url());
  await Promise.race([page.evaluate(() => (window.MathJax && MathJax.startup && MathJax.startup.promise ? MathJax.startup.promise.then(() => 1) : 0)).catch(() => 0), wait(8000)]);
  await wait(300);

  /* the symbol tips: in the harvest every meaning of this handout's glossary is looked up (each is a string the page can show);
     in both, a few tips are shown by hovering over the equations */
  if (collect) await page.evaluate(async () => {
    const m = location.pathname.match(/^(.*)\/curriculum\/labs\/students\/([a-z0-9-]+?)(?:\.html)?$/);
    if (!m || !window.VDI18N) return;
    const g = await fetch(m[1] + '/curriculum/labs/symbols/' + m[2] + '.json').then((r) => (r.ok ? r.json() : null)).catch(() => null);
    if (!g) return;
    const one = (e) => { if (!Array.isArray(e)) return; if (e[0]) VDI18N.t(e[0]); if (e[2]) VDI18N.t(e[2]); };
    for (const k in g) { if (k === '@ctx') { for (const kk in g[k]) g[k][kk].forEach((l) => one(l.slice(1))); } else one(g[k]); }
  }).catch(() => {});
  for (let i = 0; i < 6; i++) {
    const ok = await page.evaluate((i) => {
      const cs = [...document.querySelectorAll('.markdown-body mjx-container mjx-mi')];
      const e = cs[Math.floor(i * cs.length / 6)]; if (!e) return false;
      e.dispatchEvent(new MouseEvent('mouseover', { bubbles: true })); return true;
    }, i).catch(() => false);
    if (!ok) break;
    await wait(60); await grab(page);
  }
  await page.evaluate(() => document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }))).catch(() => {});

  const isWs = await page.evaluate(() => !!document.querySelector('.ws-panel')).catch(() => false);
  if (!isWs) return;
  /* helpers in the page: type into a field, press a button of the first table */
  await page.evaluate(() => {
    window.__ws = {
      set(f, v) { f.focus(); f.value = v; f.dispatchEvent(new Event('input', { bubbles: true })); },
      box(i) { return document.querySelectorAll('.ws-tablebox')[i || 0]; },
      /* the block under the original table: [bar, buttons (Add a row, Remove the last added row, Add a column, Remove the last added column), notes] */
      under(i) { const b = this.box(i); return b && [...b.children].find((x) => x.querySelector && x.querySelector(':scope > .ws-bar')); },
      press(i, k) { const u = this.under(i), bs = u && u.querySelectorAll(':scope > .ws-btns > button'); if (bs && bs[k]) bs[k].click(); },
      cells(t) { return [...t.querySelectorAll('tbody:not(.ws-pad) tr')].map((tr) => [...tr.cells].map((td) => td.querySelector('input.ws-f'))); },
    };
  });
  const firstTable = () => page.evaluate(() => { const t = document.querySelector('table.ws-table'); return !!t; });
  if (!(await firstTable())) { await grab(page); return; }

  /* a formula in an empty cell: its bar, an error, Fill down */
  await page.evaluate(() => {
    const W = window.__ws, t = document.querySelector('table.ws-table'), rows = W.cells(t);
    const col = rows.length ? rows[0].findIndex(Boolean) : -1; if (col < 0) return;
    const f = rows[0][col]; f.focus();
  });
  await wait(80); await grab(page);
  for (const v of ['=1/0', '=SQRT(-1)', '=LN(0)', '=(1', '=', '=B1:B2', '=2']) {
    await page.evaluate((v) => { const W = window.__ws, t = document.querySelector('table.ws-table'), rows = W.cells(t), col = rows[0].findIndex(Boolean); if (col >= 0) W.set(rows[0][col], v); }, v);
    await wait(60); await grab(page);
  }
  await page.evaluate(() => { const b = document.querySelector('.ws-bar .ws-btn'); if (b) b.click(); });   /* Fill down (a confirm is dismissed) */
  await wait(80); await grab(page);
  await page.evaluate(() => { const W = window.__ws, t = document.querySelector('table.ws-table'), rows = W.cells(t), col = rows[0].findIndex(Boolean); if (col >= 0) W.set(rows[0][col], ''); });
  await wait(400); await grab(page);   /* Saved in this browser at ... */

  /* Add a row, Add a column, a second copy of the table */
  await page.evaluate(() => { window.__ws.press(0, 0); window.__ws.press(0, 2); });
  await wait(100); await grab(page);
  await page.evaluate(() => { const b = window.__ws.box(0), tools = b && b.lastElementChild, bs = tools && tools.querySelectorAll('button'); if (bs && bs[1]) bs[1].click(); });
  await wait(150); await grab(page);

  /* the graph: numbers in the first rows, then each axis pick, every kind of fit, error bars, all points at one x */
  const hasPlot = await page.evaluate(() => !!document.querySelector('.ws-plot select'));
  if (hasPlot) {
    const fill = (pattern) => page.evaluate((pattern) => {
      const W = window.__ws, t = document.querySelector('table.ws-table'), rows = W.cells(t);
      const cols = []; for (let c = 0; c < (rows[0] || []).length; c++) if (rows.slice(0, 5).every((r) => r[c])) cols.push(c);
      if (cols.length < 2) return null;
      for (let r = 0; r < Math.min(5, rows.length); r++) {
        const x = r + 1;
        W.set(rows[r][cols[0]], String(pattern === 'same' ? 2 : x));
        W.set(rows[r][cols[1]], String(pattern === 'line' ? 2 * x + 1 : 3 * Math.exp(-x / 2) + 0.1 * x * x + (r % 2 ? 0.05 : -0.05)));
        if (cols[2] != null) W.set(rows[r][cols[2]], '0.1');
      }
      return cols;
    }, pattern);
    const cols = await fill('curve');
    if (cols) {
      const pick = (k, v) => page.evaluate(([k, v]) => {
        const p = document.querySelector('.ws-plot'), ss = p.querySelectorAll('select'), s = { y: ss[0], x: ss[1], fit: ss[2], err: ss[3] }[k];
        if (!s) return false; s.value = v; s.dispatchEvent(new Event('change', { bubbles: true })); return true;
      }, [k, v]);
      await pick('y', String(cols[1])); await wait(80); await grab(page);
      await pick('x', String(cols[0])); await wait(150); await grab(page);
      const kinds = await page.evaluate(() => { const s = document.querySelectorAll('.ws-plot select')[2]; return s ? [...s.options].map((o) => o.value) : []; });
      for (const k of kinds) { await pick('fit', k); await wait(k ? 500 : 120); await grab(page); }
      await pick('fit', '');
      if (cols[2] != null) { await pick('err', String(cols[2])); await wait(150); await grab(page); await pick('fit', 'exp'); await wait(500); await grab(page); await pick('fit', ''); }
      await pick('fit', 'quad'); await fill('line'); await wait(150); await grab(page);
      await pick('fit', ''); await wait(150); await grab(page);
      await fill('same'); await wait(150); await grab(page);
      await pick('fit', 'power'); await wait(300); await grab(page); await pick('fit', '');
    }
  }

  /* Save to a file and Download data tables: their status lines */
  await page.evaluate(() => { const bs = document.querySelectorAll('.ws-panel .ws-btns button'); if (bs[2]) bs[2].click(); });
  await wait(200); await grab(page);

  /* a saved worksheet from an older version (answers that no longer fit, a table whose columns changed), and readings sent by the
     demo: the page is opened again with them in this browser */
  await page.evaluate(() => {
    const m = location.pathname.match(/\/curriculum\/labs\/students\/([a-z0-9-]+?)(?:\.html)?$/), slug = m && m[1];
    if (!slug) return;
    const S = JSON.parse(localStorage.getItem('vd-worksheet:' + slug) || '{}');
    S.answers = Object.assign({}, S.answers, { 'gone-1': { q: 'A question that is no longer on the page', text: 'An old answer' } });
    if (S.tables && S.tables[0]) S.tables[0].columns = ['An old column'];
    S.tables = (S.tables || []).concat([{ columns: ['x', 'y'], runs: [{ label: null, notes: 'n', rows: [['1', '2']] }] }]);
    localStorage.setItem('vd-worksheet:' + slug, JSON.stringify(S));
    localStorage.setItem('vd-handoff:' + slug, JSON.stringify({ sent: new Date().toISOString(), demo: 'x', series: '1', columns: ['row'], rows: [['1'], ['2']], csv: 'row\n1\n2\n' }));
  });
  await page.goto(page.url(), { waitUntil: 'load' }).catch(() => {});
  await wait(700); await grab(page);
  const hand = await page.evaluate(() => { const b = document.querySelector('.ws-hand:not([hidden]) .ws-btn.ws-main'); if (b) b.click(); return !!b; });
  if (hand) { await wait(200); await grab(page); }
  /* a copy holding readings: the update note */
  await page.evaluate(() => {
    const m = location.pathname.match(/\/curriculum\/labs\/students\/([a-z0-9-]+?)(?:\.html)?$/);
    localStorage.setItem('vd-handoff:' + m[1], JSON.stringify({ sent: new Date(Date.now() + 1000).toISOString(), demo: 'x', series: '1', columns: ['row'], rows: [['1']], csv: '' }));
    window.dispatchEvent(new StorageEvent('storage', { key: 'vd-handoff:' + m[1] }));
  });
  await wait(150); await grab(page);
  await page.evaluate(() => { try { localStorage.clear(); } catch (_) {} });
};
