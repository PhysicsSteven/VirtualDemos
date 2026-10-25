// How this works: Magnetism in Matter. Part 1's first reading, the empty coil at 20 turns per centimeter and 1.00 A, then the
// next row, aluminum, to show what the core adds. Expected: B₀ = μ₀nI = 1.25663706127e-6 × 2000 × 1.00 = 2.513 mT; empty,
// B − B₀ = 0; aluminum (χ = 2.2 × 10⁻⁵, OpenStax Table 12.2), B − B₀ = χB₀ = 55.3 nT.
require('./lib.cjs')({ demo: 'magnetism-in-matter', title: 'Magnetism in Matter' }, async (r) => {
  const { state, p, W } = r;

  state.caption = 'Sample reading: the empty coil at 20 turns per cm and 1.00 A, then aluminum';
  await r.secs(3.0);

  state.caption = 'Check the coil: 1.00 A and 20 turns per centimeter';
  await r.scrollRail('#sI');
  const c1 = await r.box('#oI'), c2 = await r.box('#oN');
  state.arrow = { rect: [c2[0] - 300 + c2[2], c1[1] - 30, 300, c2[1] + c2[3] - c1[1] + 34] };
  r.check.coil = [await r.text('#oI'), await r.text('#oN')];
  await r.secs(2.0);
  state.arrow = null;

  state.caption = 'Choose the core: Empty';
  await r.scrollRail('#mats');
  await r.click('#mats [data-m="vacuum"]');
  await r.tick(4);
  await r.scrollRail('#out');
  const o = await r.box('#out > div:nth-child(1)'), o3 = await r.box('#out > div:nth-child(3)');
  state.zoom = [W - 620, o[1] - 120, 620, 348.75];
  state.arrow = { rect: [o[0], o[1], o3[0] + o3[2] - o[0], o3[1] + o3[3] - o[1]] };
  r.check.empty = await p.evaluate(() => document.querySelector('#out').innerText.replace(/\n/g, ' | '));
  await r.secs(2.4);
  state.arrow = null; state.zoom = null;

  state.caption = 'Record the reading. It goes into the table';
  await r.scrollRail('.vd-readings .vd-rec');
  await r.click('.vd-readings .vd-rec');
  await r.tick(4);
  state.arrow = { rect: await r.box('.vd-readings tbody tr') };
  await r.secs(1.8);
  state.arrow = null;

  state.caption = 'Next core, aluminum: B − B₀ is now 55 nT, so look closely';
  await r.scrollRail('#mats');
  await r.click('#mats [data-m="al"]');
  await r.tick(4);
  await r.scrollRail('#out');
  const a3 = await r.box('#out > div:nth-child(3)');
  state.zoom = [W - 620, a3[1] - 160, 620, 348.75];
  state.arrow = { rect: a3 };
  r.check.al = await p.evaluate(() => document.querySelector('#out').innerText.replace(/\n/g, ' | '));
  await r.secs(2.4);
  state.arrow = null; state.zoom = null;

  state.caption = 'Record each core, then send the table to the worksheet';
  await r.scrollRail('.vd-readings .vd-rec');
  await r.click('.vd-readings .vd-rec');
  await r.tick(3);
  const ex = await r.box('.vd-readings .vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.6);
  r.check.rows = await p.evaluate(() => JSON.stringify(window.vdRows()));
});
