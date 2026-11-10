/* Known values for the break-it test (tools/breakit.cjs), kundts-tube. Hook: window.__kt (S, fNow, vGas, gain, nodes, resonantL, ...).
   The readouts equal the physics of the settings (gas speed sqrt(gamma R T/M), counter f = n v/2L, rod speed sqrt(E/rho), heap
   spacing lambda/2 = v_gas/2f, plunger and pointer positions, loudest motion); the presets give the values their hints quote
   (steel 2524 Hz, 5048 m/s, heaps 6.80 cm; helium 1007 m/s, 19.96 cm; L/4 5048 Hz, 3.40 cm; brass 3430 m/s, 1715 Hz, 10.0 cm);
   air at 20 C is 343.2 m/s; neighboring displacement nodes are about half a wavelength apart and the tube is loudest at the
   resonant plunger position; the dust stays inside the tube's range; the unknown rod is within its stated range. */
const pre = `const K = window.__kt; if (!K) return true; const S = K.S, f = K.fNow(), v = K.vGas(), vr = K.rodSpeed(K.rodNow()), rd = (id) => document.getElementById(id).textContent;
  const dd = (name) => { for (const d of document.querySelectorAll('#out dt')) if (d.textContent.indexOf(name) === 0) return d.nextElementSibling.textContent; return null; };
`;
module.exports = {
  checks: [
    { name: "readouts equal the physics of the settings (gas speed, counter, rod speed, heap spacing, plunger, pointer)", fn: `(() => { ${pre}
      if (!(f > 0) || !isFinite(v) || !isFinite(vr)) return 'f ' + f + ', v ' + v + ', v rod ' + vr;
      const want = (name, w) => { const g = dd(name); return g === w || g === null ? true : name + ' shows "' + g + '", physics gives "' + w + '"'; };
      const ring = S.keep || S.env > 0.2, hide = S.blind || S.rod === 'unknown'; let r;
      if (!S.blind && (r = want('Speed in the gas', v.toFixed(1) + ' m/s')) !== true) return r;
      if (ring && (r = want('Counter f', Math.round(f) + ' Hz')) !== true) return r;
      if (!hide && (r = want('Speed in the rod', Math.round(vr) + ' m/s')) !== true) return r;
      if (!hide && (r = want('Heap spacing', (v / f / 2 * 100).toFixed(2) + ' cm')) !== true) return r;
      if ((r = want('Plunger', (S.l * 100).toFixed(1) + ' cm')) !== true) return r;
      if ((r = want('Pointer x', (S.x * 100).toFixed(1) + ' cm')) !== true) return r;
      if (ring) { const G = K.gain(f, v, S.l); if ((r = want('Loudest air motion', G.toFixed(1) + " × the disc's (" + (20 * Math.log10(G)).toFixed(1) + ' dB)')) !== true) return r; }
      if (S.x > S.l + 1e-9 || S.x < 0 || S.l < 0.2 - 1e-9 || S.l > 1.4 + 1e-9) return 'pointer ' + S.x + ' or plunger ' + S.l + ' out of range';
      if (Math.abs(K.gasSpeed(K.GASES.air, 20) - 343.2) > 0.05) return 'air at 20 C is ' + K.gasSpeed(K.GASES.air, 20);
      if (Math.abs(f - S.n * vr / (2 * S.L)) > 1e-9) return 'f is not n v/2L';
      return true; })()` },
    { name: "presets give the values their hints quote", fn: `(() => { ${pre}
      const w = { steel: [2524, 5048, 343.2, '6.80'], helium: [2524, 5048, 1007, '19.96'], quarter: [5048, 5048, 343.2, '3.40'], brass: [1715, 3430, 343.2, '10.0'] }[S.preset];
      if (!w || S.rod === 'unknown') return true;
      const h = S.preset === 'brass' ? (v / f / 2 * 100).toFixed(1) : (v / f / 2 * 100).toFixed(2);
      if (Math.round(f) !== w[0] || Math.round(vr) !== w[1] || (S.preset === 'helium' ? Math.round(v) !== 1007 : v.toFixed(1) !== '343.2') || h !== w[3]) return S.preset + ': f ' + f + ', v rod ' + vr + ', v gas ' + v + ', heap ' + h;
      return true; })()` },
    { name: "tube acoustics: nodes half a wavelength apart, the nearest resonance is where the tube is loudest", fn: `(() => { ${pre}
      const lam = v / f, nd = K.nodes(f, v, S.l);
      for (let i = 1; i < nd.length; i++) if (Math.abs((nd[i] - nd[i - 1]) - lam / 2) > 0.04 * lam / 2) return 'nodes ' + nd[i - 1].toFixed(4) + ' and ' + nd[i].toFixed(4) + ' are ' + (nd[i] - nd[i - 1]).toFixed(4) + ' apart, lambda/2 = ' + (lam / 2).toFixed(4);
      if (nd.some((x) => !(x > 0 && x < S.l))) return 'a node outside the tube';
      const m = Math.max(1, Math.round(1.0 / (lam / 2))), rl = K.resonantL(m, f, v);
      if (!(rl < m * lam / 2 + 1e-9) || m * lam / 2 - rl > 0.03 * lam) return 'resonant plunger ' + rl + ' for m = ' + m + ', m lambda/2 = ' + m * lam / 2;
      const g0 = K.gain(f, v, rl); if (K.gain(f, v, rl - 0.004) > g0 + 1e-9 || K.gain(f, v, rl + 0.004) > g0 + 1e-9) return 'the tube is not loudest at its resonant length ' + rl;
      return true; })()` },
    { name: "dust: 1500 grains, all finite and within 0 to 1.4 m; unknown rod speed 2500 to 5500 m/s", fn: `(() => { ${pre}
      if (S.dust.length !== 1500) return S.dust.length + ' grains';
      for (let i = 0; i < S.dust.length; i++) if (!(S.dust[i] >= 0 && S.dust[i] <= 1.4 + 1e-9)) return 'grain ' + i + ' at ' + S.dust[i];
      if (S.unknown.v < 2500 || S.unknown.v > 5500 || S.unknown.v !== Math.round(S.unknown.v)) return 'unknown rod ' + S.unknown.v;
      return true; })()` },
  ],
  steps: [
    { name: 'tune to resonance, stroke, record the heaps at the nodes, the fit gives the gas speed; then odd plunger, rod and temperature settings while ringing', fn: `(async () => {
      const K = window.__kt, pause = (ms) => new Promise((r) => setTimeout(r, ms)), click = (id) => document.getElementById(id).click();
      document.querySelector('#presets [data-p=steel]').click(); await pause(150);
      const f = K.fNow(), v = K.vGas(); K.S.l = Math.round(K.resonantL(Math.max(1, Math.round(1.0 / (v / f / 2))), f, v) * 1000) / 1000;
      click('clearRows'); const pl = document.getElementById('sl'); pl.value = K.S.l; pl.dispatchEvent(new Event('input', { bubbles: true }));
      document.getElementById('keep').click(); await pause(1500);
      const nd = K.nodes(K.fNow(), K.vGas(), K.S.l).slice(0, 4);
      nd.forEach((x, i) => { const sx = document.getElementById('sx'); sx.value = x; sx.dispatchEvent(new Event('input', { bubbles: true })); click('record'); });
      await pause(200);
      const m = [...document.querySelectorAll("#fitOut dd")].map((e) => e.textContent).join(" | ");
      const vv = parseFloat(m.split('|').pop());
      if (nd.length >= 3 && !(Math.abs(vv - K.vGas()) < 0.03 * K.vGas())) throw new Error('v_gas from the heaps shows ' + m + ', true ' + K.vGas());
      for (const t of [-20, 40, 40, -20]) { const s = document.getElementById('sT'); s.value = t; s.dispatchEvent(new Event('input', { bubbles: true })); await pause(150); }
      for (const l of [0.2, 1.4, 0.2, 0.7]) { pl.value = l; pl.dispatchEvent(new Event('input', { bubbles: true })); await pause(150); }
      for (const l of [0.5, 1.5, 0.5, 1.0]) { const s = document.getElementById('sL'); s.value = l; s.dispatchEvent(new Event('input', { bubbles: true })); await pause(150); }
      document.getElementById('keep').click(); click('clearRows'); document.querySelector('#presets [data-p=steel]').click(); await pause(200);
    })()` },
    { name: 'every gas and rod with the unknown rod, new unknown rod, clamp at L/4, Blind, stroke, spread the dust', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), click = (sel) => document.querySelector(sel).click();
      for (const g of document.querySelectorAll('#gases button')) { g.click(); await pause(100); click('#stroke'); await pause(150); }
      for (const r of document.querySelectorAll('#rods button')) { r.click(); await pause(100); click('#stroke'); await pause(100); }
      click('#newUnknown'); click('#newUnknown'); for (const c of document.querySelectorAll('#clampSeg button')) { c.click(); await pause(100); }
      click('#labBlind'); click('#stroke'); click('#spread'); await pause(300); click('#labBlind');
      document.querySelector('#presets [data-p=unknown]').click(); await pause(200);
    })()` },
  ],
};
