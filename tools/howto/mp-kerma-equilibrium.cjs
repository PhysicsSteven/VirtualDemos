// How this works: Dosimetry, worksheet "Kerma, Dose and Charged Particle Equilibrium" (Medical Physics). The first reading: ⁶⁰Co
// buildup setup (1.25 MeV, Φ = 10¹⁰ photons per cm²), Monte Carlo run past 2 million histories and paused, probe at 0.05 cm,
// recorded, in the 3D view of the magnified buildup. Expected (key row 1): K_col = Φ E μ_en/ρ e^(−μz) = 0.059193 Gy (NIST μ/ρ 0.06323,
// μ_en/ρ 0.02965 cm²/g), model dose 0.012412 Gy, D/K_col 0.2097, Monte Carlo dose 0.01243 ± 0.00017 Gy. The Monte Carlo digits
// differ from run to run within the uncertainty (histories per frame depend on the frame rate).
require('./lib.cjs')({ demo: 'dosimetry', title: 'Dosimetry: Kerma, Equilibrium and the Ion Chamber', query: '?ws=mp-kerma-equilibrium&view=3d' }, async (r) => {
  const { state, p, W } = r;
  const z = () => p.evaluate(() => +window.vdReadingRow().z_cm);
  const n = () => p.evaluate(() => window.__dos.MC.n);
  state.ptr = [640, 420]; await p.mouse.move(...state.ptr);

  state.caption = 'Sample reading: kerma and dose 0.05 cm into the water, ⁶⁰Co photons';
  await r.secs(2.4);

  state.caption = 'Choose the ⁶⁰Co buildup setup';
  await r.click('[data-p="co60"]');
  await r.secs(0.8);

  state.caption = 'Press Start and let it run past 2 million histories, then pause';
  await r.click('#play');
  const ck = await r.box('#clock');
  state.arrow = { rect: ck };
  for (let i = 0; i < 200 && (await n()) < 2e6; i++) await r.tick();
  state.arrow = null;
  await r.click('#play');   /* paused, the setup card comes back over the counter; the readouts keep the count */
  r.check.histories = await n();
  r.check.running = await p.evaluate(() => window.__dos.S.run);
  await r.secs(0.6);
  state.arrow = null;

  state.caption = 'Set the probe to 0.05 cm: drag the depth probe slider, then the arrow keys';
  const sb = await r.box('#sZ');
  state.zoom = [Math.max(0, Math.min(sb[0] - 330, W - 640)), Math.max(0, sb[1] - 200), 640, 360];
  r.check.z = await r.slide('#sZ', z, 0.05, 0.00006, 0.006);
  await r.secs(0.8);
  state.zoom = null;
  const pane = await r.box('#stage');
  state.zoom = [pane[0], pane[1] + 40, 760, 427.5];
  await r.secs(1.4);
  state.zoom = null;

  const ro = (k) => p.evaluate((k) => { const t = [...document.querySelectorAll('#out dt')].find((t) => t.textContent.startsWith(k)); return t.nextElementSibling.textContent.trim(); }, k);
  r.check.K = await ro('Collision kerma'); r.check.D = await ro('Absorbed dose'); r.check.ratio = await ro('D/K_col'); r.check.MC = await ro('Monte Carlo D');
  state.caption = `Read the kerma ${r.check.K}, the model dose ${r.check.D} and the Monte Carlo dose`;
  const sel = (k) => p.evaluate((k) => { const t = [...document.querySelectorAll('#out dt')].find((t) => t.textContent.startsWith(k)); t.parentElement.id = t.parentElement.id || 'ro' + Math.random().toString(36).slice(2, 7); return '#' + t.parentElement.id; }, k);
  const kSel = await sel('Collision kerma'), mSel = await sel('Monte Carlo D'), dSel = await sel('Absorbed dose');
  await r.scrollRail(kSel);
  const kb = await r.box(kSel);
  state.zoom = [W - 600, Math.max(0, Math.min(kb[1] - 60, r.H - 337.5)), 600, 337.5];
  state.arrow = { rect: kb };
  await r.secs(1.3);
  state.arrow = { rect: await r.box(dSel) };
  await r.secs(1.2);
  state.arrow = { rect: await r.box(mSel) };
  await r.secs(1.3);
  state.arrow = null; state.zoom = null;

  state.caption = 'Record the reading. Then 0.10, 0.15, 0.20 cm and on to 1.00 cm';
  await r.scrollRail('.vd-readings .vd-rec');
  await r.click('.vd-readings .vd-rec');
  await r.tick(4);
  if ((await r.box('.vd-readings tbody tr:last-child'))[1] > r.H - 50) await r.scrollRail('.vd-readings tbody tr:last-child');
  const row = await r.box('.vd-readings tbody tr:last-child');
  state.zoom = [W - 600, Math.max(0, Math.min(row[1] - 200, r.H - 337.5)), 600, 337.5];
  state.arrow = { rect: row };
  await r.secs(2.2);
  state.arrow = null; state.zoom = null;
  state.caption = 'Then send the readings to the worksheet';
  const ex = await r.box('.vd-readings .vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(1.8);
  r.check.rows = await p.evaluate(() => JSON.stringify(window.vdRows()));
  r.check.ws = await p.evaluate(() => window.vdWorksheet());
});
