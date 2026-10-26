// How this works: Ultrasound, worksheet "Attenuation of Ultrasound in Tissue" (Medical Physics). The first reading: the
// Attenuation in muscle setup (muscle over 3 cm of bone, absorption on) at 2 MHz, 2.0 cm of muscle, the cursor on the peak of the
// bone echo. Expected (key row 1): t = 2d/c = 2 × 0.020 m / 1590 m/s = 25.16 µs, echo level −12.57 dB: absorption 1.09 dB/(cm·MHz)
// × 2 MHz × 4 cm of round trip = 8.72 dB, plus the 3.85 dB that the muscle to bone boundary and the pulse shape take at any depth.
require('./lib.cjs')({ demo: 'ultrasound', title: 'Ultrasound: Echoes and Blood Flow', query: '?setup=atten&view=3d' }, async (r) => {
  const { state, p, W } = r;
  const WANT = 25.16;
  /* the echo level readout in the rail: the readouts are redrawn each frame, so find it by its label each time */
  const lvl = () => p.evaluate(() => { const dt = [...document.querySelectorAll('.rail dt')].find((e) => /Echo level at the cursor/.test(e.textContent));
    const q = dt.parentElement.getBoundingClientRect(); return { box: [q.x, q.y, q.width, q.height], text: dt.nextElementSibling.textContent }; });
  const toLvl = async () => { await p.evaluate(() => { const rl = document.querySelector('.rail'), dt = [...rl.querySelectorAll('dt')].find((e) => /Echo level at the cursor/.test(e.textContent));
    rl.scrollTop += dt.getBoundingClientRect().top - rl.getBoundingClientRect().top - 300; }); await r.tick(2); };

  state.ptr = [700, 420]; await p.mouse.move(...state.ptr);
  state.caption = 'Sample reading: the bone echo under 2.0 cm of muscle, at 2 MHz';
  await r.secs(2.4);

  state.caption = 'The Attenuation in muscle setup, at 2 MHz. Drag the muscle depth to 2.0 cm';
  const pre = await r.box('#presets [data-p="atten"]');
  state.arrow = { rect: pre };
  await r.moveTo(pre[0] + pre[2] / 2, pre[1] + pre[3] / 2 + 4, 0.6);
  await r.secs(0.5);
  state.arrow = null;
  const card = await r.box('#card');
  state.zoom = [card[0] + card[2] - 640, card[1] - 20, 640, 360];
  const sl = await r.box('#sW'), v = +(await p.evaluate(() => document.querySelector('#sW').value));
  const mn = +(await p.evaluate(() => document.querySelector('#sW').min)), mx = +(await p.evaluate(() => document.querySelector('#sW').max));
  await r.moveTo(sl[0] + 8 + (sl[2] - 16) * (v - mn) / (mx - mn), sl[1] + sl[3] / 2, 0.7);
  r.check.depth = await r.dragUntil(-1, 0, '#oW', '2.0 cm');
  state.arrow = { rect: await r.box('#oW') };
  await r.secs(1.0);
  state.arrow = null; state.zoom = null;

  state.caption = 'Start the scanner. The bone echo comes back';
  await r.click('#run');
  await r.secs(1.0);

  state.caption = 'Put the cursor on the peak of the bone echo: drag it, zoom in, then use the fine steps';
  const shelf = await r.box('#shelf');
  const cs = await r.box('#sCur'), c0 = +(await p.evaluate(() => document.querySelector('#sCur').value));
  await r.moveTo(cs[0] + 8 + (cs[2] - 16) * c0 / 200, cs[1] + cs[3] / 2, 0.7);
  await r.dragTo(cs[0] + 8 + (cs[2] - 16) * WANT / 200, cs[1] + cs[3] / 2, 0.8);
  await r.click('#tbSeg [data-tb="zoom"]');
  state.zoom = [shelf[0] + shelf[2] - 780, shelf[1] + shelf[3] - 440, 800, 450];
  for (let i = 0; i < 12; i++) {
    const d = Math.round((WANT - +(await p.evaluate(() => document.querySelector('#sCur').value))) * 100) / 100;
    if (!d) break;
    const st = Math.abs(d) >= 0.95 ? 1 : Math.abs(d) >= 0.095 ? 0.1 : 0.01;
    await r.click(`#curSteps [data-dc="${d < 0 ? -st : st}"]`); await r.tick(3);
  }
  r.check.cursor = await r.text('#oCur');
  state.arrow = { rect: await r.box('#oCur') };
  await r.secs(1.4);
  state.arrow = null; state.zoom = null;

  state.caption = 'The echo level readout: the bone echo as a share of the pulse sent, in dB';
  await toLvl();
  const L = await lvl();
  r.check.level = L.text;
  state.zoom = [W - 600, Math.max(0, Math.min(L.box[1] - 170, r.H - 337.5)), 600, 337.5];
  state.arrow = { rect: L.box };
  await r.secs(1.8);
  state.arrow = null; state.zoom = null;

  state.caption = 'Record the reading. It goes into the table';
  await r.scrollRail('#record');
  await r.click('#record');
  await r.tick(4);
  const tb = await r.box('#rowsTbl');
  state.zoom = [W - 600, Math.max(0, tb[1] - 150), 600, 337.5];
  state.arrow = { rect: await r.box('#rowsTbl tbody tr') };
  await r.secs(1.8);
  state.arrow = null; state.zoom = null;

  state.caption = 'Go on to 12 cm, send the table to the worksheet, then repeat at 3.5, 5 and 7.5 MHz';
  const ex = await r.box('#exportWs');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.6);
  r.check.ws = await p.evaluate(() => window.vdWorksheet && window.vdWorksheet());
  r.check.rows = await p.evaluate(() => JSON.stringify(window.vdRows ? window.vdRows() : null));
});
