// How this works: Sampling and Aliasing (the Sampling and aliasing section of Timbre and Harmonics). The worksheet's first reading:
// the Too slow for the tone setup, N = 256, then f_s typed as 2000 Hz and the reading recorded.
// Expected: Too slow for the tone shows 440 Hz sampled at 460 Hz, a false wave at |440 − 460| = 20 Hz; at f_s = 2,000 Hz and N = 256 the
// bins are 7.81 Hz apart and the strongest peak is bin 56 at 437.5 Hz, within Δf/2 of 440 Hz.
require('./lib.cjs')({ demo: 'timbre', title: 'Sampling and Aliasing', query: '?ws=sampling-aliasing' }, async (r) => {
  const { state, W, p } = r;
  const can = await r.box('#can');

  state.caption = 'Sample reading: a pure 440 Hz tone sampled at 2,000 Hz, 256 samples';
  await r.tick(30);

  state.caption = 'Press Too slow for the tone: 440 Hz sampled 460 times a second';
  await r.scrollRail('#smpSetups');
  await r.click('#smpSetups [data-s="slow"]');
  await r.tick(4);
  const c2 = await r.box('#can');
  state.zoom = [c2[0], c2[1], 1000, 562.5];
  await r.secs(2.6);
  state.zoom = null;

  state.caption = 'The samples trace a slow 20 Hz wave that is not in the tone';
  state.arrow = { rect: await r.box('#rPeakF') };
  r.check.slowPeak = await r.text('#rPeakF');
  await r.secs(2.2);
  state.arrow = null;

  state.caption = 'Set Samples N to 256';
  await r.click('#smpNSeg [data-n="256"]');
  await r.secs(1);

  state.caption = 'Click the Sample rate readout, type 2000 and press Enter';
  await r.click('#smpFsOut');
  await p.keyboard.press('Control+A'); await r.tick(2);
  for (const ch of '2000') { await p.keyboard.type(ch); await r.tick(3); }
  await p.keyboard.press('Enter'); await r.tick(4);
  r.check.fs = await r.text('#smpFsOut');
  await r.secs(1);

  state.caption = 'Read the Strongest peak: 437.5 Hz, the bin nearest 440 Hz';
  const pk = await r.box('#rPeakF');
  state.zoom = [W - 600, pk[1] - 120, 600, 337.5];
  state.arrow = { rect: pk };
  r.check.peak = await r.text('#rPeakF'); r.check.res = await r.text('#rRes'); r.check.nyq = await r.text('#rNyq');
  await r.secs(2.6);
  state.arrow = null; state.zoom = null;

  state.caption = 'Press Record this reading';
  await r.scrollRail('#smpRec');
  await r.click('#smpRec');
  await r.tick(4);
  r.check.status = await r.text('#smpStatus');
  state.arrow = { rect: await r.box('#smpStatus') };
  await r.secs(1.8);
  state.arrow = null;

  state.caption = 'Repeat for the other sample rates, then send the readings to the worksheet';
  const ex = await r.box('#smpToWs');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.6);
  void can;
});
