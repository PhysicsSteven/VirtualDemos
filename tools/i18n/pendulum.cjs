/* Extra harvest states for demos/pendulum.html (tools/i18n.cjs harvest pendulum), after the shared explore.cjs steps: readings and export, Blind and the
   Mystery planet, the 3D captions of the Exact period and Double pendulum scenes, copies, the plots, the data table. */
const explore = require('./explore.cjs');
module.exports = async (page, grab) => {
  await explore(page, grab);
  const W = (ms) => page.waitForTimeout(ms);
  const click = (sel) => page.evaluate((s) => { const b = document.querySelector(s); if (b && !b.disabled) b.click(); }, sel).catch(() => {});
  const range = (id, v) => page.evaluate(([id, v]) => { const e = document.getElementById(id); if (!e) return; e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); e.dispatchEvent(new Event('change', { bubbles: true })); }, [id, v]).catch(() => {});
  const check = (id, on) => page.evaluate(([id, on]) => { const e = document.getElementById(id); if (e && e.checked !== on) e.click(); }, [id, on]).catch(() => {});
  const scene = async (s) => { await click(`#sceneSeg [data-s="${s}"]`); await W(300); };
  const dim = async (d) => { await click(`#dimSeg [data-dim="${d}"]`); await click(`#dimSeg2 [data-dim="${d}"]`); await W(500); };

  /* the photogate lab: two readings at two lengths, the fit, export, Blind, the Mystery planet, the 3D gate */
  await scene('lab'); await click('[data-p="simple"]'); await W(200);
  /* the messages before any reading: capture before a timed swing, export and the readings panel with no rows */
  await click('#clearRows'); await click('#capture'); await W(200); await grab(page); await click('#exportCsv'); await W(200); await grab(page);
  await click('.vd-clear'); await click('.vd-export'); await W(200); await grab(page);
  for (const L of ['0.5', '1.2']) {
    await range('sL', L); await range('sA', '8'); await click('#go'); await W(5200); await grab(page);
    await click('#capture'); await W(200); await grab(page);
  }
  await click('#exportCsv'); await W(400); await grab(page);
  await check('labBlind', true); await W(300); await grab(page); await check('labBlind', false);
  await page.evaluate(() => { const b = [...document.querySelectorAll('#gSeg button')].pop(); if (b) b.click(); }); await W(300); await grab(page);
  await click('#gSeg [data-g="9.81"]');
  await dim('3d'); await click('#go'); for (let i = 0; i < 8; i++) { await W(250); await grab(page); }
  await dim('flat');
  await click('#clearRows'); await W(200); await grab(page);

  /* Exact period: over the top, the 3D caption, the bottom plot focused */
  await scene('phase'); await click('[data-p="over"]'); await W(400); await grab(page);
  await dim('3d'); await click('#play'); await W(800); await grab(page); await click('#play'); await dim('flat');
  await page.evaluate(() => { const c = document.getElementById('bCan'); if (c) c.focus(); }); await W(300); await grab(page);
  await click('#dataBtn'); await W(300); await grab(page); await click('#dataBtn'); await W(200); await grab(page);

  /* Double pendulum: captions in 3D (trail on and off), copies, separation, Poincaré, starts, Reduce motion */
  await scene('double'); await click('[data-p="chaos"]'); await W(300);
  await dim('3d'); await click('#play'); await W(900); await grab(page); await check('tTrail', false); await W(400); await grab(page); await check('tTrail', true);
  await click('#play'); await dim('flat');
  await click('[data-p="fly"]'); await W(300); await click('#play'); await W(1500); await grab(page);
  for (const v of ['sep', 'poinc', 'config']) { await click(`#plotSeg [data-v="${v}"]`); await W(500); await grab(page); }
  await click('#dataBtn'); await W(300); await grab(page); await click('#dataBtn');
  await click('#play');
  await range('sN', '1'); await click('#plotSeg [data-v="sep"]'); await W(500); await grab(page);
  await click('#dataBtn'); await W(300); await grab(page); await click('#dataBtn'); await click('#plotSeg [data-v="config"]');
  await click('[data-p="poinc"]'); await W(400); await click('#plotSeg [data-v="poinc"]'); await W(600); await grab(page);
  await click('#clearPoinc'); await W(300); await click('#dataBtn'); await W(300); await grab(page); await click('#dataBtn');
  for (const s of ['rest', 'm1']) { await click(`[data-start="${s}"]`); await W(300); await click('.vd-rec'); await W(300); await grab(page); }
  await click('[data-p="chaos"]'); await W(300); await click('.vd-rec'); await W(300); await grab(page);
  await check('tReduce', true); await W(300); await grab(page); await check('tReduce', false); await W(300); await grab(page);
  await page.evaluate(() => { const s = document.getElementById('sRate'); if (s) { s.value = s.max; s.dispatchEvent(new Event('input', { bubbles: true })); } });
  await click('#play'); await W(2000); await grab(page); await click('#play');
  await click('.vd-export'); await W(400); await grab(page);

  /* Pendulum wave: the small swing lengths and the table */
  await scene('wave'); await check('pwSmall', true); await W(300); await grab(page); await check('pwSmall', false);
  await scene('lab');
};
