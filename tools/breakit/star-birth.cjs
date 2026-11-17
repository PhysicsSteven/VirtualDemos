/* Known values for the break-it test (tools/breakit.cjs), star-birth. Hook: window.__sb (S, applyPreset, jeansMass, coreT, ...).
   Checked at every probe: in Cold and dense the Jeans mass readout is the formula's and the lesson's core gives 5.46 M☉; the cloud
   radius stays positive and finite; in Protostar and disk the size runs from D₀ down to the star and the disk edge is where spin and
   orbit periods agree; in Ignition the core never passes its peak, the limit for 3 million K is 0.078 M☉, and the verdict agrees
   with the mass. */
const base = `const X = window.__sb; if (!X || !X.S) return true; const S = X.S, MSUN = 1.3271244e20 / 6.6743e-11, near = (g, w, t) => Math.abs(g - w) <= t * Math.abs(w);
  const row = (re) => { const d = [...document.querySelectorAll('#out div')].find((x) => re.test(x.querySelector('dt').textContent)); return d ? d.querySelector('dd').textContent : null; };`;
module.exports = {
  checks: [
    { name: 'cold and dense: the Jeans mass readout, 5.46 M☉ for the cold dense core, a finite cloud', fn: `(() => { ${base}
      if (S.mode !== 'cloud') return true;
      const MJ = X.jeansMass(S.T, S.n) / MSUN, t = row(/^Jeans mass/);
      if (t && !S.blind) { const v = parseFloat(t.replace(/,/g, '')); if (!/×/.test(t) && !near(v, MJ, 0.006)) return 'Jeans mass shows ' + t + ', formula ' + MJ; }
      if (S.preset === 'core' && !near(X.jeansMass(10, 1e4) / MSUN, 5.46, 0.002)) return 'core M_J ' + X.jeansMass(10, 1e4) / MSUN;
      if (!(S.cl && S.cl.R > 0 && isFinite(S.cl.R))) return 'cloud radius ' + (S.cl && S.cl.R);
      return true; })()` },
    { name: 'disk: size between the core and the star, the disk edge where spin and orbit agree', fn: `(() => { ${base}
      if (S.mode !== 'disk') return true;
      const D = X.Dnow(); if (!(D <= S.D0 * (1 + 1e-9) && D > 0)) return 'size ' + D;
      const AU = 149597870700, G = 6.6743e-11, rd = X.rDisk() * AU, M = S.Md * MSUN;
      const spin = S.P0 * Math.pow(2 * X.rDisk() / S.D0, 2), orb = 2 * Math.PI * Math.sqrt(rd ** 3 / (G * M));
      if (!near(spin, orb, 1e-9)) return 'at the edge spin ' + spin + ' s, orbit ' + orb + ' s';
      return true; })()` },
    { name: 'ignition: T_c never above the peak, 0.078 M☉ limit at 3 MK, the verdict agrees with the mass', fn: `(() => { ${base}
      if (S.mode !== 'ignite') return true;
      const M = S.Mi * MSUN, T = X.coreT(M, X.Rnow()), pk = X.coreTmax(M).T;
      if (!(T <= pk * (1 + 1e-6))) return 'T_c ' + T + ' above peak ' + pk;
      if (S.Ti === 3 && !near(X.lim() / MSUN, 0.078, 0.02)) return 'limit ' + X.lim() / MSUN;
      const star = (pk >= S.Ti * 1e6), t = row(/^Becomes a star/);
      if (t && !S.blind && (/^yes/.test(t) !== star)) return 'verdict ' + t + ' but peak ' + pk;
      if ((S.Mi * MSUN > X.lim() * 1.001) !== star && Math.abs(S.Mi * MSUN / X.lim() - 1) > 0.002) return 'mass against limit disagrees with the peak';
      return true; })()` },
  ],
  steps: [
    { name: 'every mode and setup, each run a while, extremes, then back', fn: `(async () => {
      const X = window.__sb, pause = (ms) => new Promise((r) => setTimeout(r, ms)); if (!X) return;
      for (const k of ['core', 'hot', 'gmc', 'diffuse', 'real', 'lessonDisk', 'sun', 'red', 'edge', 'bd', 'jup']) { X.applyPreset(k); await pause(150); document.getElementById('play').click(); await pause(900); document.getElementById('play').click(); }
      X.applyPreset('core');
    })()` },
  ],
};
