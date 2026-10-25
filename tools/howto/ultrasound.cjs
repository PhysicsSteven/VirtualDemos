// How this works: Ultrasound. Part 1's first reading: the water tank, 2.0 cm of water over an air pocket, 3.5 MHz, the cursor on
// the peak of the echo. Expected: t = 2d/c = 2 × 0.020 m/1500 m/s = 26.67 μs (water c = 1500 m/s, OpenStax College Physics Table 17.5).
require('./lib.cjs')({ demo: 'ultrasound', title: 'Ultrasound: Echoes and Blood Flow' }, async (r) => {
  const { state, p, W } = r;
  const WANT = 26.67;

  state.caption = 'Sample reading: the echo from the air pocket under 2.0 cm of water';
  await r.secs(2.6);

  state.caption = 'Choose the Speed of sound in water setup';
  await r.click('#presets [data-p="water"]');
  await r.secs(0.6);

  state.caption = 'Turn on Blind in the Lab section, so the predicted echo times are hidden';
  await r.scrollRail('#labBlind');
  await r.click('#labBlind');
  r.check.blind = await p.evaluate(() => document.querySelector('#labBlind').checked);
  state.arrow = { rect: await r.box('#labBlind + span') };
  await r.secs(1.0);
  state.arrow = null;

  state.caption = 'Set the water depth: drag the slider to 2.0 cm';
  const card = await r.box('#card');
  state.zoom = [card[0] + card[2] - 640, card[1] - 20, 640, 360];
  const sl = await r.box('#sW'), v = +(await p.evaluate(() => document.querySelector('#sW').value));
  await r.moveTo(sl[0] + 8 + (sl[2] - 16) * (v - 2) / 13, sl[1] + sl[3] / 2, 0.7);
  r.check.depth = await r.dragUntil(-1, 0, '#oW', '2.0 cm');
  state.arrow = { rect: await r.box('#oW') };
  await r.secs(1.2);
  state.arrow = null; state.zoom = null;

  state.caption = 'Start the scanner. The echo comes back from the air pocket';
  await r.click('#run');
  await r.secs(1.2);

  state.caption = 'Put the cursor on the peak of the echo: drag it, zoom in, then use the fine steps';
  const shelf = await r.box('#shelf');
  const cs = await r.box('#sCur'), c0 = +(await p.evaluate(() => document.querySelector('#sCur').value));
  await r.moveTo(cs[0] + 8 + (cs[2] - 16) * c0 / 200, cs[1] + cs[3] / 2, 0.7);
  await r.dragTo(cs[0] + 8 + (cs[2] - 16) * WANT / 200, cs[1] + cs[3] / 2, 0.8);
  await r.click('#tbSeg [data-tb="zoom"]');
  state.zoom = [shelf[0] + shelf[2] - 780, shelf[1] + shelf[3] - 440, 800, 450];   /* the screen, the cursor's LCD and the steps */
  for (let i = 0; i < 12; i++) {
    const d = Math.round((WANT - +(await p.evaluate(() => document.querySelector('#sCur').value))) * 100) / 100;
    if (!d) break;
    const st = Math.abs(d) >= 0.95 ? 1 : Math.abs(d) >= 0.095 ? 0.1 : 0.01;
    await r.click(`#curSteps [data-dc="${d < 0 ? -st : st}"]`); await r.tick(3);
  }
  r.check.cursor = await r.text('#oCur');
  state.arrow = { rect: await r.box('#oCur') };
  await r.secs(1.8);
  state.arrow = null; state.zoom = null;

  state.caption = 'Record the reading. It goes into the table';
  await r.scrollRail('#record');   /* Blind leaves the table and the cursor time */
  await r.click('#record');
  await r.tick(4);
  const tb = await r.box('#rowsTbl');
  state.zoom = [W - 600, tb[1] - 150, 600, 337.5];
  state.arrow = { rect: await r.box('#rowsTbl tbody tr') };
  await r.secs(2.4);
  state.arrow = null; state.zoom = null;

  state.caption = 'Repeat at depths up to 14 cm, then send the table to the worksheet';
  const ex = await r.box('#exportWs');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(3.0);
  r.check.row = await p.evaluate(() => [...document.querySelectorAll('#rowsTbl tbody tr td')].map(td => td.textContent));
});
