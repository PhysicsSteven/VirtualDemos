/* Shared harvest steps: the same page opened again with three.js blocked, so the notes a demo shows when 3D cannot load
   (disabled 3D buttons, their titles, the flat fallback) are harvested too. Use from a demo's steps file:
     await require('./nothree.cjs')(page, grab); */
'use strict';
module.exports = async (page, grab) => {
  const p2 = await page.context().newPage();
  p2.on('dialog', (d) => d.dismiss().catch(() => {}));
  try {
    await p2.route(/three(\.min)?\.js/, (r) => r.abort());
    await p2.goto(page.url(), { waitUntil: 'load', timeout: 60000 });
    await p2.waitForTimeout(600); await grab(p2);
    await p2.evaluate(() => document.querySelectorAll('.seg button, .viewbar button, .dimbar button, #sceneSeg button').forEach((b) => { if (!b.disabled) try { b.click(); } catch (_) {} })).catch(() => {});
    await p2.waitForTimeout(400); await grab(p2);
  } finally { await p2.close(); }
};
