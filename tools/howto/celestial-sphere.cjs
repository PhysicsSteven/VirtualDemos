// How this works: The Sky and the Celestial Sphere. The first reading of the worksheet: Polaris seen from Ruston on
// January 15, 2026 at 8:00 pm (A winter night at Ruston). Expected: altitude 33.14° (latitude 32.52° plus 0.62°, Polaris
// being 0.63° from the pole and near the top of its daily circle), azimuth 359.9°.
require('./lib.cjs')({ demo: 'celestial-sphere', title: 'The Sky and the Celestial Sphere' }, async (r) => {
  const { state, W, p } = r;
  /* name the readout rows so the arrows can find them (an id only; nothing on the page changes) */
  const tag = () => p.evaluate(() => { for (const d of document.querySelectorAll('#selOut div, #out div')) { const t = d.querySelector('dt'); if (!t) continue;
    if (t.textContent === 'Altitude') d.id = 'howAlt'; if (t.textContent === 'Azimuth') d.id = 'howAz'; } });

  state.caption = 'Sample reading: Polaris seen from Ruston on a winter evening';
  await r.secs(3.0);

  state.caption = 'Choose the setup A winter night at Ruston: January 15, 2026, 8:00 pm';
  await r.click('#presets [data-p="tonight"]');
  state.arrow = { rect: await r.box('#clock') };
  await r.secs(1.6);
  state.arrow = null;

  state.caption = 'Turn to face north, where the north celestial pole stands above the horizon';
  await r.click('#faceSeg [data-f="0"]');
  await r.tick(4);
  const sky = await r.box('#skyCan');
  state.zoom = [sky[0], sky[1], sky[2], sky[2] * 9 / 16];
  await r.secs(1.2);

  state.caption = 'Select Polaris: click it in the sky, or find it by name';
  const pol = await p.evaluate(() => __cs.skyPt(__cs.sv(__cs.BYNAME['Polaris'])));
  await r.moveTo(sky[0] + pol[0], sky[1] + pol[1], 0.8);
  state.click = r.frame; state.down = true; await p.mouse.down(); await r.tick(3); await p.mouse.up(); state.down = false;
  await r.secs(1.0);
  state.zoom = null;
  await r.scrollRail('#find'); await tag();
  state.arrow = { rect: await r.box('#find') };
  await r.secs(1.4);

  state.caption = 'Read its altitude and azimuth: 33.14° up, due north. Ruston is at 32.52° N';
  await tag();
  const alt = await r.box('#howAlt'), az = await r.box('#howAz');
  state.arrow = { rect: [alt[0], alt[1], az[0] + az[2] - alt[0], alt[3]] };
  state.zoom = [W - 640, alt[1] - 180, 640, 360];
  r.check.alt = await r.text('#howAlt dd'); r.check.az = await r.text('#howAz dd');
  await r.secs(3.0);
  state.arrow = null; state.zoom = null;

  state.caption = 'Record the reading. It goes into the table';
  await r.scrollRail('.vd-readings .vd-rec');
  await r.click('.vd-readings .vd-rec');
  await r.tick(4);
  const tb = await r.box('.vd-readings table');
  state.zoom = [W - 640, tb[1] - 110, 640, 360]; state.capTop = true;
  state.arrow = { rect: await r.box('.vd-readings table tbody tr') };
  await r.secs(2.4);
  state.arrow = null; state.zoom = null; state.capTop = false;

  state.caption = 'Repeat at each place and latitude, then send the readings to the worksheet';
  const ex = await r.box('.vd-readings .vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(3.0);
  r.check.row = await p.evaluate(() => JSON.stringify(window.vdRows()[0]));
});
