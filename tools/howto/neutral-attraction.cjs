// How this works: Charging by Induction, Attracting a neutral insulator setup (the Attracting a Neutral Insulator worksheet).
// Part 1's first reading: polystyrene ball (a = 2.00 cm, κ = 2.56), rod −20 nC, gap 2.0 cm, Blind on. Expected: the exact
// multipole series F = Σ (l + 1) β_l k q² a^(2l+1)/D^(2l+3), β_l = l(κ − 1)/(lκ + l + 1), D = a + s = 4.0 cm, gives 314.1 µN
// (the dipole term alone is 192 µN), so the balance reads −F/g = −32.02 mg: the ball is pulled up, whatever the rod's sign.
require('./lib.cjs')({ demo: 'induction', title: 'Charging by Induction', query: '?setup=polar' }, async (r) => {
  const { state, p, W } = r;
  /* drag a slider's thumb from its value to near want, then a fraction of a pixel per frame until its value is want */
  const slide = async (sel, want, fine) => {
    const s = await r.box(sel), lo = +(await p.getAttribute(sel, 'min')), hi = +(await p.getAttribute(sel, 'max'));
    const at = (v) => s[0] + 8 + (s[2] - 16) * (v - lo) / (hi - lo), v0 = +(await p.inputValue(sel)), y = s[1] + s[3] / 2;
    await r.moveTo(at(v0), y, 0.6);
    await p.mouse.down(); state.down = true; await r.tick(3);
    await r.moveTo(at(want), y, 0.6);
    const val = async () => +(await p.inputValue(sel));
    for (let i = 0; i < 90 && Math.abs((await val()) - want) > 1e-9; i++) {
      state.ptr = [state.ptr[0] - Math.sign((await val()) - want) * fine, y]; await p.mouse.move(...state.ptr); await r.tick();
    }
    await r.tick(4); await p.mouse.up(); state.down = false; await r.tick();
  };
  const ddBox = (t) => p.evaluate((t) => { const e = [...document.querySelectorAll('#out dt')].find((x) => x.textContent.startsWith(t)).parentElement.getBoundingClientRect(); return [e.x, e.y, e.width, e.height]; }, t);
  const ddText = (t) => p.evaluate((t) => [...document.querySelectorAll('#out dt')].find((x) => x.textContent.startsWith(t)).nextElementSibling.textContent, t);
  await p.click('#presets [data-p="polar"]'); await p.clock.runFor(300);
  if (!(await p.evaluate(() => document.querySelector('#ballChips [data-b="polystyrene"]').getAttribute('aria-pressed') === 'true'))) await p.click('#ballChips [data-b="polystyrene"]');
  const can = await r.box('#stage');
  r.check.zero = await ddText('Balance reading');

  state.caption = 'Sample reading: the pull of a −20 nC rod on a polystyrene ball 2.0 cm away';
  await r.secs(3.0);

  state.caption = 'Hide the answers: tick Blind in the Lab section';
  await r.scrollRail('details.fold:has(#labBlind) > summary');
  await r.click('details.fold:has(#labBlind) > summary');
  await r.tick(4);
  await r.scrollRail('#labBlind');
  await r.click('#labBlind');
  await r.secs(0.5);

  state.caption = 'Set the rod charge to −20 nC';
  await r.scrollRail('#sQp');
  await slide('#sQp', -20, 0.4);
  r.check.q = await r.text('#oQp');
  await r.secs(0.3);

  state.caption = 'Lower the rod (tick Charged rod lowered), then set the gap to 2.0 cm';
  await r.click('#rodP');
  await r.secs(0.3);
  await slide('#sS', 2, 0.3);
  r.check.s = await r.text('#oS');
  await r.moveTo(can[0] + 560, can[1] + 420, 0.5);
  state.caption = 'Wait for the settling ring to go out, then read the balance';
  const bal = [can[0] + 120, can[1] + can[3] - 400, 711, 400];
  state.zoom = bal;
  for (let i = 0; i < 200 && /settling/.test(await ddText('Balance reading')); i++) await r.tick();
  await r.secs(1.2);
  r.check.bal = await ddText('Balance reading');
  state.zoom = null;
  await r.scrollRail('#out');
  state.arrow = { rect: await ddBox('Balance reading') };
  await r.secs(1.6);
  state.arrow = null;

  state.caption = 'Record the reading. It goes into the table';
  await r.scrollRail('.vd-readings .vd-rec');
  await r.click('.vd-readings .vd-rec');
  await r.tick(4);
  const tb = await r.box('.vd-readings table');
  state.zoom = [W - 600, tb[1] - 150, 600, 337.5];
  state.arrow = { rect: await r.box('.vd-readings tbody tr') };
  await r.secs(2.2);
  state.arrow = null; state.zoom = null;

  state.caption = 'Repeat for each rod charge, then send the table to the worksheet';
  const ex = await r.box('.vd-readings .vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.8);
  r.check.row = await p.evaluate(() => [...document.querySelectorAll('.vd-readings tbody tr td')].map((td) => td.textContent));
  r.check.out = await r.text('#out');
});
