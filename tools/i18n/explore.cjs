/* Shared harvest steps for a demo (tools/i18n.cjs harvest and leaks): the states the presses do not reach. A demo's own steps file
   tools/i18n/<demo>.cjs can be just  module.exports = require('./explore.cjs');  or call it and add its own:
     const explore = require('./explore.cjs');
     module.exports = async (page, grab) => { await explore(page, grab); ...; await grab(page); };
   explore(page, grab, opts) chooses every option of every <select>, turns every checkbox on and off, sets every range slider
   to its ends and back, and presses the buttons named in opts.press (CSS selectors, pressed in order), calling grab after each.
   Then it presses the Setups chips, switch segments and tabs again on a 400 px wide phone, where many demos draw shorter labels
   (opts.phone: false leaves that out). opts.skip: a CSS selector of controls to leave alone. opts.wait: milliseconds after each
   change (default 120). */
'use strict';
const fire = (el, kinds) => kinds.forEach((k) => el.dispatchEvent(new Event(k, { bubbles: true })));

async function explore(page, grab, opts = {}) {
  const wait = opts.wait || 120, skip = opts.skip || '';
  const ok = (sel) => page.evaluate(([sel, skip]) => [...document.querySelectorAll(sel)].filter((e) => !(skip && e.matches(skip)) && !e.disabled && !e.closest('.vd-lang, .vd-theme, [data-i18n-skip]')).map((e, i) => { e.setAttribute('data-i18n-x', sel + i); return sel + i; }), [sel, skip]).catch(() => []);
  const act = (id, fn, arg) => page.evaluate(([id, fn, arg, fireSrc]) => {
    const fire = eval(fireSrc), e = document.querySelector('[data-i18n-x="' + id + '"]'); if (!e || e.disabled) return null;
    return eval(fn)(e, arg, fire);
  }, [id, fn.toString(), arg === undefined ? null : arg, fire.toString()]).catch(() => null);
  const pause = () => page.waitForTimeout(wait);

  for (const id of await ok('select')) {
    const n = await act(id, (e) => e.options.length) || 0, was = await act(id, (e) => e.selectedIndex);
    for (let i = 0; i < n; i++) { await act(id, (e, i, fire) => { e.selectedIndex = i; fire(e, ['input', 'change']); }, i); await pause(); await grab(page); }
    await act(id, (e, i, fire) => { e.selectedIndex = i; fire(e, ['input', 'change']); }, was);
  }
  for (const id of await ok('input[type="checkbox"]')) {
    for (let k = 0; k < 2; k++) { await act(id, (e) => e.click()); await pause(); await grab(page); }
  }
  for (const id of await ok('input[type="range"]')) {
    const was = await act(id, (e) => e.value);
    for (const end of ['min', 'max']) {
      await act(id, (e, end, fire) => { e.value = e[end] || (end === 'min' ? 0 : 100); fire(e, ['input', 'change']); }, end); await pause(); await grab(page);
    }
    await act(id, (e, v, fire) => { e.value = v; fire(e, ['input', 'change']); }, was); await pause();
  }
  for (const sel of opts.press || []) {
    await page.evaluate((sel) => { for (const b of document.querySelectorAll(sel)) if (!b.disabled) try { b.click(); } catch (_) {} }, sel).catch(() => {});
    await page.waitForTimeout(Math.max(wait, 300)); await grab(page);
  }
  await grab(page);
  /* a phone: many demos draw shorter labels on a narrow canvas */
  if (opts.phone !== false) {
    const size = page.viewportSize();
    await page.setViewportSize({ width: 400, height: 860 }); await page.waitForTimeout(400); await grab(page);
    const sel = '[data-p], .seg button, [role="tab"], .chips button, .viewbar button, .dimbar button, .scenes button, #sceneSeg button';
    const n = await page.evaluate((sel) => { const all = [...document.querySelectorAll(sel)].filter((b) => !b.closest('a') && !/^(vdFull|vdShare)$/.test(b.id)); all.forEach((b, i) => b.setAttribute('data-i18n-y', i)); return Math.min(all.length, 220); }, sel).catch(() => 0);
    for (let i = 0; i < n; i++) {
      await page.evaluate((i) => { const b = document.querySelector('[data-i18n-y="' + i + '"]'); if (b && !b.disabled) try { b.click(); } catch (_) {} }, i).catch(() => {});
      await page.waitForTimeout(wait); await grab(page);
    }
    if (size) await page.setViewportSize(size); await page.waitForTimeout(300); await grab(page);
  }
}
/* explore.narrow(page, grab, width): press the Setups, switches and tabs again at a narrower width (default 320 px), for demos that
   fall back to a shorter wording when a label does not fit (a longer language picks the short wording at widths English never does) */
explore.narrow = async (page, grab, width = 320) => {
  const size = page.viewportSize();
  await page.setViewportSize({ width, height: 700 }); await page.waitForTimeout(400); await grab(page);
  const sel = '[data-p], .seg button, [role="tab"], .chips button, .viewbar button, .dimbar button, .scenes button, #sceneSeg button';
  const n = await page.evaluate((sel) => { const all = [...document.querySelectorAll(sel)].filter((b) => !b.closest('a') && !/^(vdFull|vdShare)$/.test(b.id)); all.forEach((b, i) => b.setAttribute('data-i18n-z', i)); return Math.min(all.length, 220); }, sel).catch(() => 0);
  for (let i = 0; i < n; i++) {
    await page.evaluate((i) => { const b = document.querySelector('[data-i18n-z="' + i + '"]'); if (b && !b.disabled) try { b.click(); } catch (_) {} }, i).catch(() => {});
    await page.waitForTimeout(150); await grab(page);
  }
  if (size) await page.setViewportSize(size); await page.waitForTimeout(300); await grab(page);
};
module.exports = explore;
