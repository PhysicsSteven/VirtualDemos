// How this works: Lagrange Points, Trojan Asteroids and Parking Spots in Space (Astro 2203, intro-lagrange). The worksheet's first reading:
// the Sun–Earth: JWST at L2 setup. Demo (2026-10-26): μ 3.04042 × 10⁻⁶, L1 0.010011 a and L2 0.0100782 a from Earth, L2 offsets grow ×e
// every 0.064064 P (23.4 days), L4 stable with librations of 220.74 P. Check: Hill's h = (μ/3)^(1/3) = 0.010046 a; L2 ≈ h(1 + h/3) = 0.010080;
// 0.0100782 × 149.6 million km = 1.508 million km; P/√(27μ/4) = 220.7 P.
require('./lib.cjs')({ demo: 'lagrange-points', query: '?ws=intro-lagrange', title: 'Lagrange Points' }, async (r) => {
  const { state, W, p } = r;
  const stage = await r.box('#stage');

  state.caption = 'Sample reading: the Lagrange points of the Sun and Earth, where JWST parks';
  await r.secs(2.6);

  state.caption = 'Choose the setup Sun–Earth: JWST at L2';
  await r.scrollRail('#presets');
  await r.click('#presets button[data-p="jwst"]');
  await r.secs(1.2);

  state.caption = 'L1 and L2 sit close to Earth: press Near m₂ to see them';
  await r.click('#vNear');
  state.zoom = [stage[0], stage[1] + 40, 945, 531.5];
  await r.secs(2.0);
  state.zoom = null;

  state.caption = 'Read how far L1 and L2 are from Earth, how fast L2 drifts, and the L4 wobble';
  await r.scrollRail('#lpts');
  const a = await r.box('#lpts');
  r.check.lpts = await p.evaluate(() => document.querySelector('#lpts').innerText.replace(/\n/g, ' / '));
  state.arrow = { rect: [a[0], a[1], a[2], Math.min(a[3], 470)] };
  await r.secs(2.8);
  state.arrow = null;

  state.caption = 'Record the reading. It goes into the table';
  await r.scrollRail('.vd-readings .vd-rec');
  await r.click('.vd-readings .vd-rec');
  await r.tick(4);
  const tb = await r.box('.vd-readings table.rows');
  state.zoom = [W - 600, tb[1] - 150, 600, 337.5];
  state.arrow = { rect: await r.box('.vd-readings table.rows tbody tr') };
  await r.secs(2.2);
  state.arrow = null; state.zoom = null;

  state.caption = 'Do the same for Earth–Moon and Jupiter\'s Trojans, then send the table to the worksheet';
  const ex = await r.box('.vd-readings .vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.6);
  r.check.row = await p.evaluate(() => JSON.stringify(window.vdRows()[0]));
});
