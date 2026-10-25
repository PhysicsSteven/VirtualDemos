// How this works: Build a Microscope or Telescope, Astro 2203 worksheet "intro-telescope". Part 1's first reading: the Keplerian
// telescope (objective f₁ = 50 cm, 5 cm across; eyepiece f₂ = 5 cm, 55 cm behind it) on the full Moon, the eye's pupil at 7 mm.
// Expected: M = −f₁/f₂ = −10; exit pupil D/|M| = 5.0 mm; the exit pupil is smaller than the eye's 7 mm, so all the objective's light
// gets in and a star gives (D/d)² = (50/7)² = 51.0 times the bare eye (100 at the 4 mm the demo opens with, where the eye's pupil
// is the stop: (40/4)²).
require('./lib.cjs')({ demo: 'instrument-builder', title: 'Build a Telescope', query: '?ws=intro-telescope' }, async (r) => {
  const { state, p, W } = r;
  const thumb = sel => p.evaluate(sel => { const e = document.querySelector(sel), q = e.getBoundingClientRect(), f = (e.value - e.min) / (e.max - e.min);
    return [q.x + 8 + f * (q.width - 16), q.y + q.height / 2]; }, sel);
  const span = (a, b) => p.evaluate(([a, b]) => { const x = document.querySelector(a).closest('div').getBoundingClientRect(), y = document.querySelector(b).closest('div').getBoundingClientRect();
    const l = Math.min(x.left, y.left), t = Math.min(x.top, y.top); return [l - 6, t - 4, Math.max(x.right, y.right) - l + 12, Math.max(x.bottom, y.bottom) - t + 8]; }, [a, b]);

  state.caption = 'Sample: the first reading on the worksheet, a Keplerian telescope looking at the full Moon';
  await r.secs(3.0);

  state.caption = 'Choose the Keplerian telescope';
  await r.click('#presets [data-p="kepler"]');
  await r.secs(1.2);

  state.caption = 'Set the eye\'s pupil to 7 mm, its size at night: drag its slider to the right';
  await r.scrollRail('#sP');
  const sp = await r.box('#sP');
  state.zoom = [W - 600, sp[1] - 150, 600, 337.5];
  await r.moveTo(...(await thumb('#sP')), 0.7);
  r.check.pupil = await r.dragUntil(3, 0, '#oP', '7.0 mm');
  state.arrow = { rect: await r.box('#oP') };
  await r.secs(1.0);
  state.arrow = null; state.zoom = null;

  state.capTop = true;
  state.caption = 'Read M = −10 and the 5.00 mm exit pupil, smaller than the eye\'s, so all the light gets in';
  state.arrow = { rect: await span('#qM', '#qXP') };
  await r.secs(3.0);
  state.caption = 'A star now looks 51 times brighter than to the bare eye: (50 mm ÷ 7 mm)²';
  state.arrow = { rect: await span('#qGather', '#qGather') };
  r.check.read = await p.evaluate(() => ['qM', 'qXP', 'qFov', 'qBright', 'qGather'].map(id => document.getElementById(id).textContent));
  await r.secs(3.0);
  state.arrow = null; state.capTop = false;

  state.caption = 'Record the reading';
  await r.scrollRail('.vd-rec');
  await r.click('.vd-rec');
  await r.tick(4);
  const tb = await r.box('.vd-readings table');
  state.zoom = [W - 600, Math.max(0, tb[1] - 150), 600, 337.5];
  state.arrow = { rect: await r.box('.vd-readings tbody tr') };
  await r.secs(2.4);
  state.arrow = null; state.zoom = null;

  state.caption = 'Repeat with the 2.5 cm and 4.0 cm eyepieces, then send the table to the worksheet';
  const ex = await r.box('.vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(3.0);
  r.check.row = await p.evaluate(() => JSON.stringify(window.vdRows()[0]));
});
