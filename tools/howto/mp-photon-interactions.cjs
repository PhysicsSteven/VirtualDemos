// How this works: Photon Interactions in Matter, worksheet "Photon Interactions in Matter" (Medical Physics). The first reading:
// Coefficients view, water, cm²/g, 10 keV, recorded. Expected (NIST XCOM and SRD 126 for liquid water at 10 keV): μ/ρ 5.329 cm²/g,
// μ_en/ρ 4.944 cm²/g, photoelectric 4.944 cm²/g (key row 1: coh 0.2306, incoh 0.155, τ/ρ 4.944, κ/ρ 0, μ/ρ 5.33, μ_tr/ρ 4.948,
// μ_en/ρ 4.944, g 0.000737).
require('./lib.cjs')({ demo: 'photon-interactions', title: 'Photon Interactions in Matter', query: '?ws=mp-photon-interactions' }, async (r) => {
  const { state, p, W } = r;
  const E = () => p.evaluate(() => window.__pi.S.E);
  state.ptr = [640, 420]; await p.mouse.move(...state.ptr);

  state.caption = 'Sample reading: the coefficients of water at 10 keV';
  await r.secs(2.4);

  state.caption = 'In the Coefficients view, choose water with the scale in cm²/g';
  await r.click('#viewSeg [data-v="coef"]');
  await r.secs(0.3);
  const sel = await r.box('#selMat');
  state.zoom = [0, Math.max(0, sel[1] - 120), 640, 360];
  state.arrow = { rect: await r.box('#selMat') };
  await r.secs(1.0);
  const yb = await r.box('#ySeg [data-y="mass"]');
  state.arrow = { rect: yb };
  await r.moveTo(yb[0] + yb[2] / 2, yb[1] + yb[3] / 2, 0.6);
  await r.secs(0.8);
  state.arrow = null;

  state.caption = 'Set the energy to 10 keV: drag the slider, then the arrow keys for the last step';
  r.check.E = await r.slide('#sE', E, 10, 0.0001, 0.05);
  await r.secs(0.8);
  state.zoom = null;

  const ro = (i) => p.evaluate((i) => document.querySelector(`#out > div:nth-child(${i})`).lastChild.textContent.trim(), i);
  r.check.photo = await ro(6); r.check.mu = await ro(9);
  state.caption = `The readouts split μ/ρ = ${r.check.mu.replace(' cm²/g', '')} cm²/g by process: photoelectric ${r.check.photo.replace(/.*· /, '')} at 10 keV`;
  await r.scrollRail('#out > div:nth-child(4)');
  const co = await r.box('#out > div:nth-child(4)'), pe = await r.box('#out > div:nth-child(6)'), mu = await r.box('#out > div:nth-child(9)');
  state.zoom = [W - 600, Math.max(0, Math.min(co[1] - 60, r.H - 337.5)), 600, 337.5];
  state.arrow = { rect: pe };
  await r.secs(1.8);
  state.arrow = { rect: mu };
  await r.secs(1.4);
  state.arrow = null; state.zoom = null;

  state.caption = 'Record the reading. Then go on at 30, 100, 300, 1000, 3000 and 10 000 keV';
  await r.scrollRail('.vd-readings .vd-rec');
  await r.click('.vd-readings .vd-rec');
  await r.tick(4);
  if ((await r.box('.vd-readings tbody tr:last-child'))[1] > r.H - 50) await r.scrollRail('.vd-readings tbody tr:last-child');
  const row = await r.box('.vd-readings tbody tr:last-child');
  state.zoom = [W - 600, Math.max(0, Math.min(row[1] - 200, r.H - 337.5)), 600, 337.5];
  state.arrow = { rect: row };
  await r.secs(2.4);
  state.arrow = null; state.zoom = null;
  state.caption = 'Then send the readings to the worksheet';
  const ex = await r.box('.vd-readings .vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(1.8);
  r.check.rows = await p.evaluate(() => JSON.stringify(window.vdRows()));
  r.check.ws = await p.evaluate(() => window.vdWorksheet());
});
