/* harvest steps: every setup with the shuffle test run to its end and a reading recorded, a point selected, removed and put
   back, Blind, a prediction outside the data, Type your own with each kind of bad table, a phone width meter, and the exports.
   The screen reader description is refreshed before every grab. */
module.exports = async (page, grab0) => {
  const grab = async (pg) => { await pg.evaluate(() => { for (const e of document.querySelectorAll('canvas,svg')) if (e.vdDescribe) e.vdDescribe.refresh(); }).catch(() => {}); await pg.waitForTimeout(120); await grab0(pg); };
  await require('./explore.cjs')(page, grab, { press: ['#play'] });
  const ev = (f, a) => page.evaluate(f, a).catch(() => {});
  const keys = await page.evaluate(() => [...document.querySelectorAll('#presets [data-p]')].map((b) => b.dataset.p)).catch(() => []);
  for (const k of keys) {
    await ev((k) => document.querySelector(`#presets [data-p="${k}"]`).click(), k); await grab(page);
    await ev(() => { const R = window.__reg; R.setRun(true); for (let i = 0; i < 4; i++) R.S.sh && R.S.sh.rs.push(R.S.sh.next().r); }); await page.waitForTimeout(300); await grab(page);
    await ev(() => { const R = window.__reg; while (R.S.sh && R.S.sh.rs.length < R.S.sh.N) R.S.sh.rs.push(R.S.sh.next().r); }); await page.waitForTimeout(300); await grab(page);
    await ev(() => document.getElementById('play').click()); await page.waitForTimeout(200); await grab(page);
    await ev(() => document.querySelector('.vd-rec').click()); await grab(page);
    await ev(() => { const S = window.__reg.S; S.sel = 0; window.__reg.refit(); }); await grab(page);
    await ev(() => document.getElementById('rmSel').click()); await grab(page);
    await ev(() => document.getElementById('rmSel').click()); await grab(page);
  }
  await ev(() => document.querySelector('#presets [data-p="exam"]').click());
  await ev(() => { const e = document.getElementById('px'); e.value = '90'; e.dispatchEvent(new Event('input')); }); await grab(page);
  await ev(() => document.getElementById('labBlind').click()); await grab(page);
  await ev(() => document.querySelector('.vd-rec').click()); await grab(page);
  await ev(() => document.getElementById('labBlind').click());
  await ev(() => { const S = window.__reg.S; S.sel = 0; S.on[0] = false; window.__reg.refit(); }); await grab(page);
  await ev(() => document.querySelector('#presets [data-p="own"]').click());
  const type = async (s) => { await ev((s) => { const b = document.getElementById('dataIn'); b.value = s; b.dispatchEvent(new Event('input')); }, s); await page.waitForTimeout(150); await grab(page); };
  await type('1, 2\n2, 3'); await type('1, 2\n2\n3, 4'); await type('1, 2\n2, b\n3, 4'); await type('1, 2\n2, 1e15\n3, 4'); await type('1, 5\n2, 5\n3, 5');
  await type(Array.from({ length: 502 }, (_, i) => i + ', ' + i).join('\n')); await type('2, 1\n2, 3\n2, 5'); await type('1, 2\n2, 4\n3, 6'); await type('1, 2\n2, 3\n3, 5\n4, 4\n5, 6');
  await ev(() => document.querySelector('.vd-export').click()); await grab(page);
  await ev(() => document.querySelector('.vd-clear').click()); await grab(page);
  await page.setViewportSize({ width: 400, height: 800 }).catch(() => {}); await page.waitForTimeout(300); await grab(page);
};
