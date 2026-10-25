// How this works: Charging by Induction. Part 1's first reading of the Charging by Induction worksheet: Charging one sphere by
// grounding, rod +10 nC, rod tip 1.0 cm from sphere A (R = 5 cm), the guided sequence (rod near, ground A, unground, rod away).
// Expected: the grounded sphere takes the image charge −qR/(R + d) = −10 × 5/6 = −8.33 nC, and keeps it when the ground is
// disconnected before the rod is taken away.
require('./lib.cjs')({ demo: 'induction', title: 'Charging by Induction', query: '?setup=ground' }, async (r) => {
  const { state, p, W } = r;
  /* drag a slider's thumb from its value to near want, then a fraction of a pixel per frame until its value is want */
  const slide = async (sel, want, fine) => {
    const s = await r.box(sel), lo = +(await p.getAttribute(sel, 'min')), hi = +(await p.getAttribute(sel, 'max'));
    const at = (v) => s[0] + 8 + (s[2] - 16) * (v - lo) / (hi - lo), v0 = +(await p.inputValue(sel)), y = s[1] + s[3] / 2;
    await r.moveTo(at(v0), y, 0.6);
    await p.mouse.down(); state.down = true; await r.tick(3);
    await r.moveTo(at(want), y, 0.6);
    const val = async () => +(await p.inputValue(sel));
    for (let i = 0; i < 90 && (await val()) !== want; i++) {
      state.ptr = [state.ptr[0] - Math.sign((await val()) - want) * fine, y]; await p.mouse.move(...state.ptr); await r.tick();
    }
    await r.tick(4); await p.mouse.up(); state.down = false; await r.tick();
  };
  /* press Next step and wait until the rod, the spheres and the wand have stopped */
  const next = async () => {
    await r.click('#next');
    for (let i = 0; i < 240 && (await p.evaluate(() => window.__ind.moving())); i++) await r.tick();
    return r.text('#stepText');
  };
  await p.click('#presets [data-p="ground"]'); await p.clock.runFor(300);
  r.check.steps = [await r.text('#stepText')];
  const can = await r.box('#stage');

  state.caption = 'Sample reading: charge sphere A by grounding, with a +10 nC rod 1.0 cm away';
  await r.secs(3.0);

  state.caption = 'Set the rod tip distance to 1.0 cm (the rod is already +10 nC), then press Start over';
  r.check.q = await r.text('#oQ');
  await r.scrollRail('#sQ');
  await slide('#sD', 1, 0.3);
  r.check.d = await r.text('#oD');
  if (r.check.d !== '1.0 cm') throw new Error('rod distance ' + r.check.d);
  state.arrow = { rect: await r.box('#oD') };
  await r.secs(0.6);
  state.arrow = null;
  await r.click('#restart');
  r.check.steps.push(await r.text('#stepText'));
  await r.secs(0.4);

  /* sphere A, the rod tip and the wand, with the Next step button right of the caption (so the captions here stay short) */
  state.zoom = [200, can[1] + can[3] - 427.5, 760, 427.5];
  state.caption = 'Next step: the rod comes near A';
  r.check.steps.push(await next()); await r.secs(0.5);
  state.caption = 'Next step: ground A';
  r.check.steps.push(await next()); await r.secs(0.5);
  state.caption = 'Next step: disconnect the ground';
  r.check.steps.push(await next()); await r.secs(0.5);
  state.caption = 'Next step: take the rod away';
  r.check.steps.push(await next());
  await r.secs(0.8);
  state.zoom = null;
  r.check.out = await r.text('#out');
  state.caption = `A keeps its charge: ${r.check.out.match(/Net charge on A([−\d.]+ nC)/)[1]}`;
  await r.scrollRail('#out');
  state.arrow = { rect: await r.box('#out') };
  await r.secs(1.5);
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

  state.caption = 'Start over at each distance, then send the table to the worksheet';
  const ex = await r.box('.vd-readings .vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.8);
  r.check.row = await r.p.evaluate(() => [...document.querySelectorAll('.vd-readings tbody tr td')].map((td) => td.textContent));
});
