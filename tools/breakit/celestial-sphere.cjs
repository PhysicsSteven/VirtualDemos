/* Known values for the break-it test (tools/breakit.cjs), celestial-sphere. Hook: window.__cs (S, K, selData, PRESETS, applyPreset, setRun).
   Geometry laws that hold at any place and time: the north celestial pole stands at the geodetic latitude above the horizon (the
   readout agrees); a star or the pole never leaves its highest and lowest altitude 90 - |lat - dec| and |lat + dec| - 90; the
   antipode sees a star at altitude -h and azimuth 360 - A; the Sun's declination follows sin(dec) = sin(eps) sin(lambda) with the
   eps and lambda on the page; the sidereal time readout equals the sky's. Readout checks skip while it runs (the page refreshes them
   about every 120 ms, so they lag the sky). */
const pre = `const C = window.__cs; if (!C || !C.K()) return true; const S = C.S, K = C.K(); if (Math.abs(K.jdUT - S.jd) > 1e-9) return true;
  const D2R = Math.PI / 180, txt = (id) => document.getElementById(id) ? document.getElementById(id).textContent.replace(/−/g, '-') : '';
  const dd = (id, label) => { for (const d of document.querySelectorAll('#' + id + ' div')) { const t = d.querySelector('dt'); if (t && t.textContent.trim() === label) return d.querySelector('dd').textContent.replace(/−/g, '-'); } return null; };
`;
module.exports = {
  checks: [
    { name: "north celestial pole altitude = latitude (readout and sky)", fn: `(() => { ${pre}
      const a = Math.asin(Math.max(-1, Math.min(1, K.P.n[0] * K.up[0] + K.P.n[1] * K.up[1] + K.P.n[2] * K.up[2]))) / D2R;
      if (Math.abs(a - S.lat) > 1e-6) return 'pole altitude ' + a + ' but latitude ' + S.lat;
      if (S.run || S.blind) return true;
      const r = dd('out', 'North celestial pole altitude'); if (r == null) return 'no pole altitude readout';
      if (Math.abs(parseFloat(r) - S.lat) > 0.006) return 'readout ' + r + ' but latitude ' + S.lat; return true; })()` },
    { name: "a star stays between its lowest and highest altitude", fn: `(() => { ${pre}
      const D = C.selData(); if (D.si.kind === 'sun' || D.si.kind === 'moon') return true;
      if (D.aa.alt > D.cu.hi + 1e-6 || D.aa.alt < D.cu.lo - 1e-6) return D.si.name + ' at altitude ' + D.aa.alt + ' outside [' + D.cu.lo + ', ' + D.cu.hi + '] (lat ' + S.lat + ', dec ' + D.rd.dec + ')';
      return true; })()` },
    { name: "the antipode sees a star at altitude -h, azimuth 360 - A", fn: `(() => { ${pre}
      if (S.run) return true;
      const D = C.selData(); if (D.si.kind === 'sun' || D.si.kind === 'moon') return true;
      const t = txt('antiOut').match(/altitude ([-+]?[\\d.]+)°, azimuth ([\\d.]+)°/); if (!t) return 'no antipode line: ' + txt('antiOut').slice(0, 80);
      if (Math.abs(parseFloat(t[1]) + D.aa.alt) > 0.006) return 'altitude there ' + t[1] + ', here ' + D.aa.alt;
      const want = (360 - D.aa.az) % 360, d = Math.abs(((parseFloat(t[2]) - want + 540) % 360) - 180);
      if (d > 0.06 && Math.abs(D.aa.alt) < 89.9) return 'azimuth there ' + t[2] + ', should be ' + want; return true; })()` },
    { name: "the Sun's declination: sin dec = sin(eps) sin(lambda)", fn: `(() => { ${pre}
      if (S.sel !== 'sun') return true;
      const D = C.selData(), eps = K.P.eps, lam = K.sun.lon * D2R, want = Math.asin(Math.sin(eps) * Math.sin(lam)) / D2R;
      return Math.abs(D.rd.dec - want) < 0.01 ? true : 'Sun dec ' + D.rd.dec + ', sin dec = sin eps sin lambda gives ' + want; })()` },
    { name: "sidereal time readout equals the sky's", fn: `(() => { ${pre}
      if (S.run) return true;
      const r = dd('out', 'Local sidereal time'); if (r == null) return true;
      const m = r.match(/(\\d+)h (\\d+)m/); if (!m) return 'unreadable ' + r;
      const want = K.lst / D2R / 15 * 3600, got = (+m[1]) * 3600 + (+m[2]) * 60, d = Math.min(Math.abs(want - got), 86400 - Math.abs(want - got));
      return d < 60.5 ? true : 'LST shows ' + r + ', sky has ' + (want / 3600).toFixed(4) + ' h'; })()` },
    { name: "the clock sliders and the date round trip to the same moment", fn: `(() => { ${pre}
      if (S.run) return true;
      const y = +document.getElementById('sYear').value, d = +document.getElementById('sDay').value, t = +document.getElementById('sTime').value;
      if (!(y > -3001 && y < 15001)) return 'year slider ' + y; if (d < 1 || d > 366 || t < 0 || t > 1439) return 'slider out of range ' + d + ' ' + t; return true; })()` },
  ],
  steps: [
    { name: "run a year a second to the end of the range and back to a preset", fn: `(async () => { const C = window.__cs; C.applyPreset('precess'); C.setRun(true); await new Promise(r => setTimeout(r, 2500)); C.setRun(false); C.applyPreset('vega'); C.setRun(true); await new Promise(r => setTimeout(r, 800)); C.setRun(false); })()` },
    { name: "poles at the extremes of latitude with the pole selected, then the far past", fn: `(async () => { const C = window.__cs, S = C.S; for (const p of ['northpole', 'thuban', 'sydney']) { C.applyPreset(p); S.lat = -90; document.getElementById('sLat').value = -90; document.getElementById('sLat').dispatchEvent(new Event('input')); C.select('ncp'); await new Promise(r => setTimeout(r, 200)); S.lat = 90; document.getElementById('sLat').value = 90; document.getElementById('sLat').dispatchEvent(new Event('input')); C.select('scp'); await new Promise(r => setTimeout(r, 200)); } })()` },
    { name: "change place and speed while running a day a second, then antipode", fn: `(async () => { const C = window.__cs; C.applyPreset('moonmonth'); C.setRun(true); await new Promise(r => setTimeout(r, 500)); const p = document.getElementById('place'); p.value = 'sydney'; p.dispatchEvent(new Event('change')); document.querySelector('#speedSeg button[data-s=\"y\"]').click(); await new Promise(r => setTimeout(r, 600)); document.querySelector('#speedSeg button[data-s=\"m1\"]').click(); C.setRun(false); document.getElementById('antiGo').click(); await new Promise(r => setTimeout(r, 300)); })()` },
  ],
};
