// How this works: Acoustic Levitation. The worksheet's first reading: Stack of beads, foam bead radius 0.30 mm, 10 V, phase 0°,
// the traps near the center read and recorded.
// Expected: λ = c/f = 343.2/40 000 = 8.58 mm, plane wave node spacing λ/2 = 4.29 mm; the sound meets the axis at an angle,
// ⟨cos θ⟩ = 0.901, so the traps near the center are λ/(2⟨cos θ⟩) = 4.76 mm apart.
require('./lib.cjs')({ demo: 'acoustic-levitation', title: 'Acoustic Levitation' }, async (r) => {
  const { state, W, p } = r;
  const thumb = (sel) => p.evaluate((s) => { const e = document.querySelector(s), q = e.getBoundingClientRect(), f = (e.value - e.min) / (e.max - e.min);
    return [q.x + 8 + f * (q.width - 16), q.y + q.height / 2]; }, sel);

  state.caption = 'Sample reading: the traps near the center, foam beads 0.30 mm in radius, 10 V';
  await r.secs(3.0);

  state.caption = 'Choose the Stack of beads setup';
  await r.click('#presets [data-p="stack"]');
  await r.secs(1.0);

  state.caption = 'Set the bead radius: drag the slider to 0.30 mm';
  const rad = await r.box('#rad');
  state.zoom = [rad[0] - 30, rad[1] - 150, 560, 315];
  await r.moveTo(...(await thumb('#rad')), 0.8);
  r.check.a = await r.dragUntil(-2, 0, '#radOut', '0.30 mm');
  state.arrow = { rect: await r.box('#radOut') };
  await r.secs(1.2);
  state.arrow = null; state.zoom = null;

  state.caption = 'Switch to Slice: the traps sit just below the pressure nodes';
  await r.click('#v3d');
  await r.secs(2.4);

  state.caption = 'Read the trap positions near the center in the trap table';
  await r.scrollRail('#trapTable');
  const tt = await r.box('#trapTable');
  state.zoom = [W - 600, tt[1] - 60, 600, 337.5];
  state.arrow = { rect: tt };
  await r.secs(2.6);
  r.check.traps = (await r.text('#trapBody')).replace(/\s+/g, ' ');
  r.check.spacing = await p.evaluate(() => [...document.querySelectorAll('.rail dt')].find(d => /Trap spacing/.test(d.textContent)).nextElementSibling.textContent);
  r.check.ratio = await r.text('#rRatio');
  state.arrow = null; state.zoom = null;

  state.caption = 'Record this setup. The row lists the five traps nearest the center';
  await r.scrollRail('#recSetup');
  await r.click('#recSetup');
  await r.tick(4);
  r.check.status = await r.text('#capStatus');
  const cs = await r.box('#capStatus');
  state.zoom = [W - 600, cs[1] - 160, 600, 337.5];
  state.arrow = { rect: cs };
  await r.secs(2.2);
  state.arrow = null; state.zoom = null;

  state.caption = 'Then follow one trap as the phase changes, and send each part to the worksheet';
  const ex = await r.box('#toWs');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.8);
});
