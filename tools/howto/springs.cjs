// How this works: Springs and Oscillations. The worksheet's first run: the unknown spring with 0.20 kg, released from 15 cm,
// period from the automatic timer. Expected: T = 2π√(m/k) for the hidden k (printed after the take as r.check.k).
require('./lib.cjs')({ demo: 'springs', title: 'Springs and Oscillations' }, async (r) => {
  const { state, p } = r;
  const can = await r.box('#cCan');
  const fold = 'details.fold:has(#labUnknown) > summary';

  state.caption = 'Sample reading: the period with 0.20 kg on an unknown spring';
  await r.secs(3.0);

  state.caption = 'Hide the spring constant: tick Unknown spring in the Lab section';
  await r.scrollRail(fold);
  await r.click(fold);
  await r.tick(4);
  await r.scrollRail('#labUnknown');
  await r.click('#labUnknown');
  await r.secs(0.8);

  state.caption = 'Set the mass: drag the slider to 0.20 kg';
  await r.scrollRail('#sM');
  const s = await r.box('#sM'), m = +(await p.inputValue('#sM'));
  await r.moveTo(s[0] + 8 + (s[2] - 16) * (m - 0.1) / 4.9, s[1] + s[3] / 2, 0.7);
  r.check.m = await r.dragUntil(-1, 0, '#oM', '0.20 kg');
  state.arrow = { rect: await r.box('#oM') };
  await r.secs(1.0);
  state.arrow = null;

  state.caption = 'Release it from 15 cm: press Reset, then let it swing';
  await r.click('#reset');
  state.zoom = [can[0], can[1] + 18, 585, 329];
  await r.moveTo(560, 600, 0.6);
  await r.scrollRail('#measBox');
  for (let i = 0; i < 300 && !/\d\.\d{4} s/.test(await r.text('#measBox div:last-child dd')); i++) await r.tick();
  await r.secs(0.6);
  state.zoom = null;
  state.arrow = { rect: await r.box('#measBox div:last-child') };
  r.check.T = await r.text('#measBox div:last-child dd');
  r.check.release = await r.text('#measBox');
  state.caption = 'The timer measures each full oscillation';
  await r.secs(2.4);
  state.arrow = null;

  state.caption = 'Capture the reading. The measured period goes with it to the worksheet';
  await r.scrollRail('#capture');
  await r.click('#capture');
  await r.tick(4);
  state.arrow = { rect: await r.box('#rowsTbl tbody tr') };
  await r.secs(2.2);
  state.arrow = null;

  state.caption = 'Repeat for each mass, then send the table to the worksheet';
  const ex = await r.box('#exportCsv');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.8);
  r.check.row = await r.text('#rowsTbl tbody tr');
  /* after the last frame: reveal k to check the period against 2π√(m/k) */
  await p.click('#labUnknown'); await p.clock.runFor(100);
  r.check.k = await r.text('#oK');
});
