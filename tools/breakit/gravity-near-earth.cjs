/* Known values for the break-it test (tools/breakit.cjs), gravity-near-earth. The hook window.__gne exposes only h, so the state is
   read from the controls (planet buttons, #sH, #sL, #spin) and the readouts in #out are compared with GM/r² recomputed here.
   Checks (skipped in Blind and when the control state is odd): gravity alone and the fraction of the surface value follow GM/(R+h)²
   for the chosen planet; the 1 kg scale reads the effective g; at the geostationary preset (Earth, equator, spin on) the effective g
   is about 0 and the mass floats; the orbit speed and period readouts obey v² = GM/r and T = 2πr/v; the readings row (Record) matches. */
const read = `const BODY = { earth: [3.986004418e14, 6.371e6, 7.2921159e-5], moon: [4.9028001e12, 1.7374e6, 2.6617e-6], mars: [4.282837e13, 3.3895e6, 7.088218e-5] };
  const bb = document.querySelector('#bodySeg [aria-pressed="true"]'); if (!bb || !BODY[bb.dataset.b]) return true;
  const [GM, R, w] = BODY[bb.dataset.b], blind = document.getElementById('labBlind').checked, spin = document.getElementById('spin').checked;
  const h = window.__gne.h, lat = +document.getElementById('sL').value * Math.PI / 180, r = R + h;
  const out = {}; for (const d of document.querySelectorAll('#out > div')) { const t = d.querySelector('dt'), v = d.querySelector('dd'); if (t && v) out[t.textContent] = v.textContent; }
  const num = (s) => parseFloat(String(s).replace(/−/g, '-').replace(/,/g, ''));
  const near = (got, want, tol, abs) => Math.abs(got - want) <= Math.max(tol * Math.abs(want), abs || 0);
`;
module.exports = {
  checks: [
    { name: "gravity alone, fraction and r/R follow GM/(R+h)² for the chosen planet", fn: `(() => { ${read}
      if (blind || !window.__gne) return true;
      const g = GM / (r * r), g0 = GM / (R * R);
      if (!near(num(out['Gravity alone GM/r²']), g, 1e-4, 6e-5)) return 'GM/r² shows ' + out['Gravity alone GM/r²'] + ', should be ' + g + ' (h = ' + h + ')';
      if (!near(num(out['Fraction of surface value']), 100 * g / g0, 1e-4, 6e-3)) return 'fraction shows ' + out['Fraction of surface value'] + ', should be ' + 100 * g / g0;
      if (!near(num(out['r / R']), r / R, 1e-4, 6e-5)) return 'r/R shows ' + out['r / R'] + ', should be ' + r / R;
      return true; })()` },
    { name: "effective g, the centrifugal term and the 1 kg scale agree with the vector sum", fn: `(() => { ${read}
      if (blind || !spin || !window.__gne) return true;
      const g = GM / (r * r), c = w * w * r * Math.cos(lat), rad = g - c * Math.cos(lat), tan = c * Math.sin(lat), ge = Math.sign(rad || 1) * Math.hypot(rad, tan);
      const ce = out['Centrifugal term ω²r cos(lat)'], eg = out['Effective g (what a scale feels)'];
      if (!near(num(ce), c, 1e-4, 6e-5)) return 'centrifugal term shows ' + ce + ', should be ' + c;
      if (!near(num(eg), ge, 1e-4, 6e-5)) return 'effective g shows ' + eg + ', should be ' + ge;
      const sc = Object.keys(out).find((k) => /^1\\.000 kg on a spring scale/.test(k)); if (!sc) return 'no scale readout';
      if (rad < 0) return /^0 N/.test(out[sc]) ? true : 'outward but the scale shows ' + out[sc];
      if (!near(num(out[sc]), ge, 1e-3, 6e-4)) return 'scale shows ' + out[sc] + ', effective g is ' + ge;
      return true; })()` },
    { name: "geostationary preset on Earth at the equator: the effective g is about 0", fn: `(() => { ${read}
      if (blind || !spin || bb.dataset.b !== 'earth' || h !== 35793000 || +document.getElementById('sL').value !== 0) return true;
      const e = num(out['Effective g (what a scale feels)']); return Math.abs(e) < 5e-3 ? true : 'effective g at geostationary radius shows ' + e + ' (should be about 0)'; })()` },
    { name: "orbit speed and period obey v² = GM/r and T = 2πr/v", fn: `(() => { ${read}
      if (blind || h <= 1e5 || !window.__gne) return true;
      const v = Math.sqrt(GM / r), T = 2 * Math.PI * r / v, sv = num(out['Circular orbit speed here']), st = out['Orbit period'], tv = num(st) * (/min/.test(st) ? 60 : 3600);
      if (!near(sv * 1000, v, 6e-3)) return 'orbit speed shows ' + out['Circular orbit speed here'] + ', should be ' + v / 1000 + ' km/s';
      if (!near(tv, T, 6e-3)) return 'orbit period shows ' + st + ', should be ' + T / 3600 + ' h';
      if (Math.abs(v * v / r - GM / (r * r)) > 1e-12) return 'v²/r != GM/r²';
      return true; })()` },
    { name: "slider height stays in 0..4e7 m and the label matches the height", fn: `(() => { const h = window.__gne && window.__gne.h; if (h === undefined) return true;
      if (!(h >= 0 && h <= 4e7)) return 'h = ' + h;
      const o = document.getElementById('oH').textContent.replace(/,/g, ''), v = parseFloat(o), want = /km/.test(o) ? h / 1000 : h;
      return Math.abs(v - want) <= (/km/.test(o) ? 0.5 : 0.5) ? true : 'label "' + o + '" but h = ' + h; })()` },
  ],
  steps: [
    { name: "Geostationary preset, then Moon, then Mars, then back to Earth sea level", fn: `(async () => { const q = (s) => document.querySelector(s), w = (ms) => new Promise((r) => setTimeout(r, ms));
      q('#places [data-h="35793000"]').click(); await w(80); for (const b of ['moon', 'mars', 'earth']) { q('#bodySeg [data-b="' + b + '"]').click(); await w(80); }
      q('#places [data-h="0"]').click(); })()` },
    { name: "Latitude 90 with spin at max height, then spin off and latitude 0", fn: `(async () => { const q = (s) => document.getElementById(s), w = (ms) => new Promise((r) => setTimeout(r, ms));
      const set = (id, v) => { q(id).value = v; q(id).dispatchEvent(new Event('input', { bubbles: true })); };
      set('sL', 90); set('sH', 1000); await w(80); q('spin').click(); await w(80); set('sL', 0); set('sH', 0); await w(80); q('spin').click(); })()` },
    { name: "Blind on at the geostationary height, Moon, then Blind off", fn: `(async () => { const q = (s) => document.querySelector(s), w = (ms) => new Promise((r) => setTimeout(r, ms));
      q('#places [data-h="35793000"]').click(); q('#labBlind').click(); await w(80); q('#bodySeg [data-b="moon"]').click(); await w(80); q('#labBlind').click(); await w(80); q('#bodySeg [data-b="earth"]').click(); })()` },
  ],
};
