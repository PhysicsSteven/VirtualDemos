/* Known values for the break-it test (tools/breakit.cjs), elevator. Hook: window.__el (S, now, draw).
   The scale reads N = m(g + a) and never below zero (a scale cannot pull you down); the readouts equal the physics of the live
   state (N, N - mg, N/g, apparent weight ratio, mg); a trip that has not been snapped ends at rest exactly on a floor (3.0 m
   apart) and never leaves the shaft; the position is the integral of the velocity and the velocity the integral of the
   acceleration along the whole trip; a snapped car stops at rest at least 1 m above the pit. */
const pre = `const E = window.__el; if (!E) return true;
  const S = E.S, G = 9.81, rd = (t) => t.replace(/\\u2212/g, '-'), dd = {};
  for (const d of document.querySelectorAll('#out > div')) dd[d.querySelector('dt').textContent] = d.querySelector('dd').textContent;
  const num = (k) => parseFloat(rd(dd[k] || 'x'));
  const at = (t) => { const t0 = S.t; S.t = t; const s = E.now(); S.t = t0; return s; };
`;
module.exports = {
  checks: [
    { name: "readouts equal the live state: N = m(g + a) >= 0, N - mg, N/g, ratio, mg", fn: `(() => { ${pre}
      const st = E.now();
      if (![st.y, st.v, st.a].every(isFinite)) return 'state has NaN: ' + JSON.stringify(st);
      if (S.blind) return true;
      if (!(S.m > 0)) return 'mass ' + S.m;
      const N = Math.max(0, S.m * (G + st.a)), t = 0.0051;
      if (Math.abs(num('Height') - st.y) > t || Math.abs(num('Velocity (up +)') - st.v) > t || Math.abs(num('Acceleration (up +)') - st.a) > t) return 'height/velocity/acceleration readouts ' + dd['Height'] + ' ' + dd['Velocity (up +)'] + ' ' + dd['Acceleration (up +)'] + ' vs ' + JSON.stringify(st);
      if (Math.abs(num('Scale: normal force N') - N) > 0.51) return 'N shows ' + dd['Scale: normal force N'] + ', m(g+a) = ' + N;
      if (Math.abs(num('Scale shows N/g') - N / G) > 0.051) return 'N/g shows ' + dd['Scale shows N/g'] + ', ' + N / G;
      if (Math.abs(num('Net force N − mg') - (N - S.m * G)) > 0.51) return 'net force shows ' + dd['Net force N − mg'] + ', ' + (N - S.m * G);
      if (Math.abs(num('Apparent weight / true weight') - N / (S.m * G)) > 0.00051) return 'ratio shows ' + dd['Apparent weight / true weight'] + ', ' + N / (S.m * G);
      if (Math.abs(num('Your weight mg') - S.m * G) > 0.51) return 'mg shows ' + dd['Your weight mg'];
      return true; })()` },
    { name: "a trip ends at rest on a floor, velocity integrates acceleration, never leaves the shaft", fn: `(() => { ${pre}
      if (!S.segs.length || S.snapped) return true;
      const D = S.segs.reduce((q, g) => q + g.dur, 0), e = at(D + 5), FL = 3;
      if (!e.done || Math.abs(e.v) > 1e-9 || Math.abs(e.a) > 1e-9) return 'trip does not end at rest: ' + JSON.stringify(e);
      if (Math.abs(e.y / FL - Math.round(e.y / FL)) > 1e-9 && Math.abs(S.y0 / FL - Math.round(S.y0 / FL)) < 1e-9) return 'trip ends between floors at ' + e.y + ' m';
      if (e.y < -1e-9 || e.y > 30 + 1e-9) return 'trip leaves the shaft: ' + e.y;
      let prev = at(0), amax = 0;
      for (let i = 1; i <= 200; i++) { const s = at(D * i / 200), dt = D / 200;
        if (Math.abs(s.v - prev.v) > Math.max(Math.abs(s.a), Math.abs(prev.a)) * dt * 1.01 + 1e-9) return 'velocity jumped from ' + prev.v + ' to ' + s.v + ' at ' + (D * i / 200);
        if (s.y < -1e-9 || s.y > 30 + 1e-9) return 'car out of the shaft at ' + s.y;
        prev = s; }
      return true; })()` },
    { name: "snapped car: free fall, then stops at rest at least 1 m above the pit", fn: `(() => { ${pre}
      if (!S.snapped) return true;
      const D = S.segs.reduce((q, g) => q + g.dur, 0), e = at(D + 5);
      if (Math.abs(e.v) > 1e-6) return 'snapped car ends with v = ' + e.v;
      if (e.y < 1 - 1e-6) return 'snapped car stops at ' + e.y + ' m, below the 1 m margin';
      if (S.segs[0] && S.segs[0].dur > 1 + 1e-9) return 'free fall lasts ' + S.segs[0].dur;
      return true; })()` },
  ],
  steps: [
    { name: 'Run floor 0 to 10, snap the cable mid trip, then trips from the wreck; instant starts at extreme settings', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), set = (id, v) => { const e = document.getElementById(id); e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); };
      set('sA', 3); set('sV', 6); set('sJ', 0.5);
      const t = document.querySelectorAll('#trips button'); t[t.length - 1].click(); await pause(1500);
      document.getElementById('snap').click(); await pause(2500);
      document.querySelector('#trips button').click(); await pause(500);
      const i = document.getElementById('instant'); i.click(); set('sA', 0.2); set('sM', 5); await pause(300);
      document.querySelector('#trips button').click(); await pause(800); set('sM', 200); set('sA', 3); await pause(500);
      document.getElementById('pause').click(); await pause(200); document.getElementById('pause').click(); await pause(300);
    })()` },
  ],
};
