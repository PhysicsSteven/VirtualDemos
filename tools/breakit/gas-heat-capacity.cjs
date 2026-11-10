/* Known values for the break-it test (tools/breakit.cjs), gas-heat-capacity. Hook: window.__gh (S, hs, molEnergy, ...).
   Heat a gas: the readouts equal the physics of the live state (T, V, P, W, dU); P V = n R T; the first law dU = Q - W; locked piston
   means V constant and W = 0, free piston means P = 1 atm and W = nR dT; Q = n C dT with C_V from the shown C_V = x R and C_P = C_V + R;
   gamma = 1 + 1/x. Ruchardt: the predicted period equals 2 pi sqrt(m V / (gamma P A^2)) from the shown values.
   Watch the molecules: the total energy stays fixed between heat additions (elastic collisions), every molecule stays in the box,
   and the two temperatures meet at the shared temperature. */
const pre = `const H = window.__gh; if (!H) return true; const S = H.S, R = 8.31446261815324, P0 = 101325;
  const dd = (a) => { for (const d of document.querySelectorAll('#out > div')) if (d.querySelector('dt').textContent === a) return d.querySelector('dd').textContent.replace(/\\u2212/g, '-'); return null; };
  const num = (a) => { const t = dd(a); return t == null ? NaN : parseFloat(t); };
  const near = (got, want, tol, abs) => Math.abs(got - want) <= tol * Math.abs(want) + (abs || 0);
`;
module.exports = {
  checks: [
    { name: "Heat a gas: readouts equal the state; PV = nRT; first law; locked V const, free P = 1 atm", fn: `(() => { ${pre}
      if (S.view !== 'heat') return true;
      const s = H.hs(), h = S.heat, T = s.T + 273.15, V0 = h.n * R * 293.15 / P0;
      if (!Number.isFinite(s.T) || !Number.isFinite(s.V) || !Number.isFinite(s.P)) return 'non finite state ' + JSON.stringify(s);
      if (!near(s.P * s.V, h.n * R * T, 1e-9)) return 'PV = ' + s.P * s.V + ' but nRT = ' + h.n * R * T;
      if (!near(s.dU + s.W, h.Q, 1e-9, 1e-12)) return 'dU + W = ' + (s.dU + s.W) + ' but Q = ' + h.Q;
      if (h.mode === 'V' && (!near(s.V, V0, 1e-12) || s.W !== 0)) return 'locked piston: V = ' + s.V + ' (V0 ' + V0 + '), W = ' + s.W;
      if (h.mode === 'P' && (s.P !== P0 || !near(s.W, h.n * R * (T - 293.15), 1e-9, 1e-12))) return 'free piston: P = ' + s.P + ', W = ' + s.W;
      if (S.blind) return true;
      if (Math.abs(num('Thermometer') - s.T) > 0.0051) return 'Thermometer shows ' + dd('Thermometer') + ', T = ' + s.T;
      if (Math.abs(num('Heat delivered Q') - h.Q) > 0.051) return 'Q shows ' + dd('Heat delivered Q') + ', Q = ' + h.Q;
      if (Math.abs(num('Volume V') - s.V * 1000) > 0.00051) return 'V shows ' + dd('Volume V') + ', V = ' + s.V * 1000;
      if (Math.abs(num('Pressure P') - s.P / 1000) > 0.00051) return 'P shows ' + dd('Pressure P');
      if (Math.abs(num('Work done on the piston') - s.W) > 0.0051 || Math.abs(num('Rise in internal energy ΔU') - s.dU) > 0.0051) return 'W or dU readout off: ' + dd('Work done on the piston') + ', ' + dd('Rise in internal energy ΔU');
      return true; })()` },
    { name: "Heat a gas: Q = n C dT with C_V = x R from the shown C_V, C_P = C_V + R, gamma = 1 + 1/x; the heater stops at 200 C", fn: `(() => { ${pre}
      if (S.view !== 'heat' || S.blind || S.heat.gas === 'mystery') return true;
      const t = dd('C_V of this gas'), m = t && t.match(/= ([\\d.]+) R/); if (!m) return 'no C_V readout: ' + t;
      const x = +m[1], h = S.heat, s = H.hs(), C = h.n * (x + (h.mode === 'P' ? 1 : 0)) * R;
      if (Math.abs(num('C_V of this gas') - x * R) > 0.0051 + 0.005 * R) return 'C_V shows ' + t;
      if (!near(h.Q, C * (s.T - 20), 2e-3, 0.06 * 0 + 0.06) ) return 'Q = ' + h.Q + ' but n C dT = ' + C * (s.T - 20) + ' (C_V = ' + x + ' R)';
      if (Math.abs(num('γ = C_P/C_V') - (1 + 1 / x)) > 6e-5 + 5e-5) return 'gamma shows ' + dd('γ = C_P/C_V') + ', 1 + 1/x = ' + (1 + 1 / x);
      if (s.T > 200 + 1e-6) return 'heated past the 200 C cut out: T = ' + s.T;
      return true; })()` },
    { name: "Ruchardt: predicted period = 2 pi sqrt(m V / (gamma P A^2)) from the shown values", fn: `(() => { ${pre}
      if (S.view !== 'ru' || S.blind) return true;
      const m = 0.01660, A = Math.PI * 0.016 * 0.016 / 4, V = S.ru.V / 1000, P = P0 + m * 9.81 / A, g = num('γ of this gas');
      if (!Number.isFinite(g)) return 'no gamma readout';
      const T = 2 * Math.PI * Math.sqrt(m * V / (g * P * A * A)), got = num('Predicted period 2π√(mV/γPA²)');
      if (Math.abs(got - T) > 0.00006 + 5e-5 / g * T) return 'predicted period shows ' + got + ' s, from the shown values ' + T;
      if (Math.abs(num('Gas pressure at rest') - P / 1000) > 0.0006) return 'rest pressure shows ' + dd('Gas pressure at rest') + ', ' + P / 1000;
      if (S.ru.gas === 'air' && Math.abs(g - 1015 / 721) > 6e-5) return 'air gamma ' + g;
      return true; })()` },
    { name: "Molecules: total energy fixed between heat additions; molecules inside the box; shared temperature", fn: `(() => { ${pre}
      if (S.view !== 'mol' || !S.mol.G) return true;
      const G = S.mol.G, e = H.molEnergy(G), W = (window.__bkm = window.__bkm || { G: null }), L = 12;
      if (!Number.isFinite(e.U)) return 'energy is ' + e.U;
      for (const m of G.mol) if (![m.x, m.y, m.z, m.vx, m.vy, m.vz, m.wx, m.wy, m.wz].every(Number.isFinite)) return 'a molecule has a non finite state';
      for (const m of G.mol) if (m.x < -0.1 || m.y < -0.1 || m.z < -0.1 || m.x > L + 0.1 || m.y > L + 0.1 || m.z > L + 0.1) return 'a molecule left the box: ' + [m.x, m.y, m.z].map((v) => v.toFixed(2));
      if (W.G !== G || W.Q !== S.mol.Q) { W.G = G; W.Q = S.mol.Q; W.U = e.U; return true; }
      if (Math.abs(e.U - W.U) > 1e-6 * W.U) return 'total energy went from ' + W.U + ' to ' + e.U + ' with no heat added';
      const Teq = (e.kt + e.kr) / ((G.dumb ? 2.5 : 1.5) * G.N);
      if (Math.abs(e.Teq - Teq) > 1e-12) return 'Teq';
      return true; })()` },
  ],
  steps: [
    { name: 'Molecules: heat repeatedly to the 2000 K stop, restart, flip kind and start, bond length extremes, run fast', fn: `(async () => {
      const H = window.__gh, pause = (ms) => new Promise((r) => setTimeout(r, ms)), $ = (id) => document.getElementById(id);
      H.applyPreset('molSpin'); await pause(200);
      if (!H.S.run) $('go').click();
      for (let i = 0; i < 30; i++) { if (!$('molHeatBtn').disabled) $('molHeatBtn').click(); await pause(30); }
      for (const v of ['0.05', '0.36', '0.2']) { $('sBond').value = v; $('sBond').dispatchEvent(new Event('input', { bubbles: true })); await pause(150); }
      document.querySelector('#molKindSeg [data-k=atoms]')?.click(); await pause(150);
      $('restart').click(); await pause(150);
      H.applyPreset('argonV'); await pause(200);
    })()` },
    { name: 'Heat: run to the 200 C cut out in each gas and piston, switch the piston and gas mid run, mystery gas, Ruchardt drop and change V mid swing', fn: `(async () => {
      const H = window.__gh, pause = (ms) => new Promise((r) => setTimeout(r, ms)), $ = (id) => document.getElementById(id);
      H.applyPreset('mystery'); await pause(100); $('sW').value = '10'; $('sW').dispatchEvent(new Event('input', { bubbles: true }));
      $('go').click(); await pause(900); for (const m of ['P', 'V', 'P']) { document.querySelector('#pistonSeg [data-m=' + m + ']').click(); await pause(100); $('go').click(); await pause(300); }
      for (const g of ['He', 'CO2', 'mystery']) { $('selGas').value = g; $('selGas').dispatchEvent(new Event('change', { bubbles: true })); await pause(100); }
      $('newGas').click(); await pause(100);
      H.applyPreset('ruchardt'); await pause(100); $('drop').click(); await pause(800);
      for (const v of ['2', '20', '7']) { $('sV').value = v; $('sV').dispatchEvent(new Event('input', { bubbles: true })); await pause(100); $('drop').click(); await pause(300); }
      H.applyPreset('nitrogen'); await pause(200);
    })()` },
  ],
};
