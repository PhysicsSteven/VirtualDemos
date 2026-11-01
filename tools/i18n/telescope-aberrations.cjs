/* Extra harvest states for demos/telescope-aberrations.html, after the shared explore.cjs steps: every setup, each telescope type,
   filter, adaptive optics level and exposure, the star test, and the mystery puzzle's answers (each wrong cause, each fix, a hint,
   the solved message). */
const explore = require('./explore.cjs');
module.exports = async (page, grab) => {
  await explore(page, grab);
  const W = (ms) => page.waitForTimeout(ms);
  const click = (sel) => page.evaluate((s) => { const b = document.querySelector(s); if (b && !b.disabled) b.click(); }, sel).catch(() => {});
  const pick = (id, v) => page.evaluate(([id, v]) => { const e = document.getElementById(id); if (!e) return; e.value = v; e.dispatchEvent(new Event('change', { bubbles: true })); }, [id, v]).catch(() => {});
  for (const p of ['seeing', 'perfect', 'defocus', 'sphere', 'coma', 'astig', 'singlet', 'achromat', 'hubble90', 'hubble93', 'ao']) { await click(`[data-p="${p}"]`); await W(700); await grab(page); }
  await click('#starTest'); await W(900); await grab(page); await click('#starTest');
  await click('#labBlind'); await W(300); await grab(page); await click('#labBlind');
  await click('[data-p="seeing"]'); await W(400);
  for (const a of ['off', 'tt', 'low', 'high']) { await pick('selAO', a); await W(400); await grab(page); }
  await click('#expoSeg [data-e="long"]'); await W(60); await grab(page); await W(2500); await grab(page);   /* while it exposes, then done */
  for (const f of ['white', 'F', 'd', 'C', 'K', 'g550']) { await pick('selFilter', f); await W(500); await grab(page); }
  for (const s of ['lens', 'hubble', 'mirror']) { await click(`#scopeSeg [data-s="${s}"]`); await W(600); await grab(page); }
  await click('[data-p="mystery"]'); await W(700); await grab(page);
  await click('#pzCheck'); await W(200); await grab(page);
  /* every wrong answer, on two pinned mysteries (out of focus, then the air), so each cause is wrong on one of them */
  for (const ci of [0, 5]) {
    await page.evaluate((ci) => { const r0 = Math.random, q = [(ci + 0.5) / 6, 0.5, 0.5, 0.5, 0.5, 0.5]; let i = 0; Math.random = () => (i < q.length ? q[i++] : r0()); document.querySelector('[data-p="mystery"]').click(); Math.random = r0; }, ci).catch(() => {});
    await W(300);
    for (const c of ['defocus', 'sphere', 'coma', 'astig', 'color', 'seeing']) { await pick('pzCause', c); await click('#pzCheck'); await W(250); await grab(page); }
  }
  for (const f of ['parabola', 'corrector', 'clamps', 'achromat', 'ao', 'space']) { await click('[data-p="mystery"]'); await W(300); await click(`[data-fix="${f}"]`); await W(300); await grab(page); }
  for (let h = 0; h < 5; h++) { await click('#pzHint'); await W(200); await grab(page); }   /* all five hints */
  await click('#pzShow'); await W(300); await grab(page);
  /* a solved mystery: name the right cause, make its fix, focus */
  await page.evaluate(async () => { const T = window.__ta; if (!T) return; T.applyPreset('mystery'); const m = T.S.mys; const sel = document.getElementById('pzCause'); sel.value = m.cause; document.getElementById('pzCheck').click();
    const FIX = { sphere: 'parabola', coma: 'corrector', astig: 'clamps', color: 'achromat', seeing: 'ao' }; if (FIX[m.cause]) document.querySelector(`[data-fix="${FIX[m.cause]}"]`).click();
    if (m.cause === 'seeing') T.S.expo = 'long'; if (m.cause === 'defocus') T.S.focus = -m.hidden.dz; T.recompute(); }).catch(() => {});
  await W(3000); await grab(page);
  /* a lens mystery named right (not defocus), then a mirror fix tried on it */
  await page.evaluate(() => { const r0 = Math.random, q = [4.5 / 6, 0.5, 0.5, 0.5, 0.5]; let i = 0; Math.random = () => (i < q.length ? q[i++] : r0()); document.querySelector('[data-p="mystery"]').click(); Math.random = r0;
    const sel = document.getElementById('pzCause'); sel.value = 'color'; document.getElementById('pzCheck').click(); }).catch(() => {});
  await W(400); await grab(page);
  for (const f of ['parabola', 'clamps', 'corrector']) { await click(`[data-fix="${f}"]`); await W(300); await grab(page); }
  /* every cause in turn: pinned, named right, fixed right, a hint and the answer */
  const FIX = { sphere: 'parabola', coma: 'corrector', astig: 'clamps', color: 'achromat', seeing: 'ao' };
  for (let ci = 0; ci < 6; ci++) {
    const cause = await page.evaluate((ci) => { const r0 = Math.random, q = [(ci + 0.5) / 6, 0.5, 0.5, 0.5, 0.5, 0.5]; let i = 0; Math.random = () => (i < q.length ? q[i++] : r0());
      document.querySelector('[data-p="mystery"]').click(); Math.random = r0; const m = window.__ta.S.mys; const sel = document.getElementById('pzCause'); sel.value = m.cause; document.getElementById('pzCheck').click(); return m.cause; }, ci).catch(() => null);
    await W(400); await grab(page);
    if (FIX[cause]) { await click(`[data-fix="${FIX[cause]}"]`); await W(400); await grab(page); }
    await click('#pzHint'); await W(200); await grab(page); await click('#pzShow'); await W(300); await grab(page);
  }
  await click('[data-p="seeing"]'); await W(300);
};
