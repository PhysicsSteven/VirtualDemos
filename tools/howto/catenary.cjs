// How this works: Hanging Chains and Arches. The first Part 1 reading: Hanging chain setup (level supports 8.0 m apart,
// λ = 2.0 kg/m), chain shortened to S = 8.10 m. Expected (exact catenary, 2a sinh(4/a) = 8.10): a = 14.633 m, sag d = 0.550 m,
// H = λga = 287.10 N, T_A = T_B = λg(a + d) = 297.90 N.
require('./lib.cjs')({ demo: 'catenary', title: 'Hanging Chains and Arches' }, async (r) => {
  const { state, p } = r;
  const can = await r.box('#mCan');
  const S = async () => parseFloat(await r.text('#oS'));
  // where the grip at the middle of the chain is: the canvas shows the up and down cursor over it
  const grip = () => p.evaluate(() => {
    const can = document.querySelector('#mCan'), cr = can.getBoundingClientRect(), hits = [];
    for (let x = cr.left; x < cr.right; x += 3) for (let y = cr.top; y < cr.bottom; y += 3) {
      can.dispatchEvent(new PointerEvent('pointermove', { clientX: x, clientY: y, bubbles: true, pointerId: 9, pointerType: 'mouse', buttons: 0 }));
      if (can.style.cursor === 'ns-resize') hits.push([x, y]);
    }
    return [hits.reduce((a, h) => a + h[0], 0) / hits.length, hits.reduce((a, h) => a + h[1], 0) / hits.length];
  });

  state.caption = 'Sample reading: a chain 8.10 m long on level supports 8.0 m apart';
  await r.secs(3.0);

  state.caption = 'Choose the setup: click Hanging chain (λ = 2.0 kg/m)';
  await r.click('#presets [data-p="hang"]');
  state.arrow = { rect: await r.box('#oL') };
  await r.secs(1.4);
  state.arrow = null;

  state.caption = 'Shorten the chain: drag the grip at the bottom up until S reads 8.10 m';
  state.zoom = [can[0], can[1], 960, 540];
  await r.moveTo(...(await grip()), 0.8);
  await p.mouse.down(); state.down = true; await r.tick(4);
  for (let i = 0; i < 300; i++) {      /* fast while far off, then a pixel at a time */
    const s = await S(); if (Math.abs(s - 8.10) < 0.005) break;
    const dy = s > 8.6 ? -4 : s > 8.10 ? -1 : 1;
    state.ptr = [state.ptr[0], state.ptr[1] + dy]; await p.mouse.move(...state.ptr); await r.tick();
  }
  r.check.S = await r.text('#oS');
  await r.tick(6); await p.mouse.up(); state.down = false; await r.tick();
  state.arrow = { rect: await r.box('#oS') };
  state.zoom = null;
  await r.secs(1.6);
  state.arrow = null;

  state.caption = 'Read the forces. A small sag takes a big pull';
  await r.scrollRail('#forceBox');
  r.check.shape = (await r.text('#shapeBox')).replace(/\s+/g, ' ');
  r.check.force = (await r.text('#forceBox')).replace(/\s+/g, ' ');
  state.arrow = { rect: await r.box('#forceBox') };
  await r.secs(2.4);
  state.arrow = null;

  state.caption = 'Record the reading. It goes into the table';
  await r.scrollRail('.vd-readings .vd-rec');
  await r.click('.vd-readings .vd-rec');
  await r.tick(4);
  const tb = await r.box('.vd-readings table.rows');
  state.zoom = [r.W - 600, tb[1] - 150, 600, 337.5];
  state.arrow = { rect: await r.box('.vd-readings table.rows tbody tr') };
  await r.secs(2.6);
  state.arrow = null; state.zoom = null;

  state.caption = 'Repeat for each length, then send the table to the worksheet';
  const ex = await r.box('.vd-readings .vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(3.0);
  r.check.row = await r.p.evaluate(() => [...document.querySelectorAll('.vd-readings table.rows tr')].map(tr => tr.innerText.replace(/\s+/g, ' ')).join(' / '));
});
