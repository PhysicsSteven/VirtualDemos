/* Shared harvest steps for a demo (tools/i18n.cjs harvest and leaks): the states the presses do not reach. A demo's own steps file
   tools/i18n/<demo>.cjs can be just  module.exports = require('./explore.cjs');  or call it and add its own:
     const explore = require('./explore.cjs');
     module.exports = async (page, grab) => { await explore(page, grab); ...; await grab(page); };
   explore(page, grab, opts) chooses every option of every <select>, turns every checkbox on and off, sets every range slider
   to its ends and back, and presses the buttons named in opts.press (CSS selectors, pressed in order), calling grab after each.
   opts.skip: a CSS selector of controls to leave alone. opts.wait: milliseconds after each change (default 120). */
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
}
module.exports = explore;
