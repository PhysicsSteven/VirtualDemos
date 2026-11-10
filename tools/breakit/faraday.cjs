/* Known values for the break-it test (tools/breakit.cjs), faraday. Hook: window.__fd (S, W, circ, CS, SV, hist, running, ...).
   Magnet, generator and rails: the current is EMF/R at every step; Faraday's law in integral form, the EMF summed over a move is
   -N times the change of flux per turn, and Q is that over R; the generator's flux is B A cos(theta) and its EMF is
   N B A w sin(theta); the sliding bar's EMF is -B L v. Two coils: the energy from the source is the heat in both circuits plus
   the change of stored magnetic energy; with the switch closed I2 = EMF2/R2. Self inductance: the flux linkage is L I, the stored
   energy is 1/2 L I^2 and the work the source has done since the move began is the change of that energy. */
const pre = `const F = window.__fd; if (!F || !F.circ || !F.S) return true; const S = F.S, c = F.circ, W = F.W, mode = S.mode;
  const near = (a, b, rel, abs) => Math.abs(a - b) <= rel * Math.max(Math.abs(a), Math.abs(b)) + (abs || 0);
  for (const k of ['phi', 'emf', 'I']) if (!Number.isFinite(c[k])) return 'circ.' + k + ' is ' + c[k];
`;
module.exports = {
  checks: [
    { name: "I = EMF/R at every step (magnet, generator, rails, closed secondary)", fn: `(() => { ${pre}
      if (mode === 'self') return true; if (mode === 'coils') { if (!S.coils.closed) return c.I === 0 ? true : 'open secondary but I2 = ' + c.I; }
      if (!(c.R > 0)) return 'R = ' + c.R;
      return near(c.I, c.emf / c.R, 1e-9, 1e-15) ? true : 'I = ' + c.I + ' but EMF/R = ' + c.emf / c.R; })()` },
    { name: "Faraday's law summed over a move: the EMF integral is -N (flux change), Q = that over R", fn: `(() => { ${pre}
      if (mode !== 'magnet' && mode !== 'gen' && mode !== 'rails') return true;
      let pk = Math.abs(c.phi) + Math.abs(c.phi0); for (const p of F.hist.phi) if (Math.abs(p) > pk) pk = Math.abs(p);
      const want = -c.N * (c.phi - c.phi0), tol = 1e-6 * c.N * pk + 1e-18;
      if (Math.abs(c.intEmf - want) > tol) return 'EMF integral ' + c.intEmf + ', -N dPhi = ' + want;
      if (Math.abs(c.Q - c.intEmf / c.R) > 1e-6 * Math.abs(c.intEmf / c.R) + 1e-15) return 'Q = ' + c.Q + ', integral EMF / R = ' + c.intEmf / c.R;
      if (c.heat < -1e-18) return 'negative heat ' + c.heat;
      return true; })()` },
    { name: "generator: Phi = B A cos(theta); EMF = N B A w sin(theta) (mid step)", fn: `(() => { ${pre}
      if (mode !== 'gen' || !F.running) return true;
      const A = S.gen.A * 1e-4, B = S.gen.B, N = S.gen.N;
      if (!near(c.phi, B * A * Math.cos(W.gth), 1e-9, 1e-15)) return 'flux ' + c.phi + ', B A cos = ' + B * A * Math.cos(W.gth);
      const e = N * B * A * W.gw * Math.sin(W.gMid);
      return near(c.emf, e, 2e-3, 1e-6 * N * B * A * Math.abs(W.gw) + 1e-15) ? true : 'EMF ' + c.emf + ', N B A w sin = ' + e; })()` },
    { name: "rails: flux B L x and EMF = -B L v", fn: `(() => { ${pre}
      if (mode !== 'rails' || !F.running) return true;
      const B = S.rails.B, L = S.rails.L / 100;
      if (!near(c.phi, B * L * W.x, 1e-9, 1e-15)) return 'flux ' + c.phi + ', B L x = ' + B * L * W.x;
      return near(c.emf, -B * L * W.rv, 1e-6, 1e-12) ? true : 'EMF ' + c.emf + ', -B L v = ' + -B * L * W.rv; })()` },
    { name: "two coils: source energy = heat in both circuits + change of stored energy", fn: `(() => { ${pre}
      if (mode !== 'coils' || !F.CS.out) return true;
      const E = F.CS.E, d = F.CS.out.Wm - E.Wm0, bal = E.src - E.q1 - E.q2 - d, sc = Math.abs(E.src) + E.q1 + E.q2 + Math.abs(d);
      if (!(E.q1 >= 0 && E.q2 >= 0)) return 'negative heat';
      if (Math.abs(bal) > 1e-6 * sc + 1e-15) return 'source ' + E.src + ', heat ' + (E.q1 + E.q2) + ', stored change ' + d + ': out of balance by ' + bal;
      if (S.coils.closed && !near(F.CS.out.I2 * F.CS.sys.R2, F.CS.out.emf2, 1e-6, 1e-12)) return 'I2 R2 = ' + F.CS.out.I2 * F.CS.sys.R2 + ', EMF2 = ' + F.CS.out.emf2;
      return true; })()` },
    { name: "self inductance: flux linkage L I, energy 1/2 L I², source work = change of stored energy", fn: `(() => { ${pre}
      if (mode !== 'self' || !F.SV.sys) return true;
      const L = F.SV.sys.L;
      if (!near(c.L, L, 1e-12) || !near(c.link, L * c.I, 1e-9, 1e-18)) return 'L or flux linkage off: ' + c.L + ' vs ' + L + ', ' + c.link + ' vs ' + L * c.I;
      if (!near(c.U, 0.5 * L * c.I * c.I, 1e-9, 1e-18)) return 'U = ' + c.U + ', 1/2 L I² = ' + 0.5 * L * c.I * c.I;
      if (!near(F.SV.sys.N * F.SV.sys.phiA, L, 1e-9)) return 'N phiA = ' + F.SV.sys.N * F.SV.sys.phiA + ', L = ' + L;
      return near(c.Wsrc, c.U - c.U0, 1e-6, 1e-15 + 1e-9 * c.U) ? true : 'source work ' + c.Wsrc + ', change of stored energy ' + (c.U - c.U0); })()` },
  ],
  steps: [
    { name: 'every preset in turn, run, then Reset all style churn: generator at extreme R, then two coils open and closed', fn: `(async () => {
      const F = window.__fd, pause = (ms) => new Promise((r) => setTimeout(r, ms));
      const names = [...document.querySelectorAll('#presets button, .presets button, [data-preset]')].map((b) => b.dataset.p || b.dataset.preset).filter(Boolean);
      for (const n of names.slice(0, 40)) { try { F.applyPreset(n); } catch (e) { throw new Error(n + ': ' + e.message); } await pause(120); }
      F.applyPreset(names[0] || 'push'); await pause(150);
    })()` },
    { name: 'fast clock: go() a long time in each mode, then switch back to the opening preset', fn: `(async () => {
      const F = window.__fd, pause = (ms) => new Promise((r) => setTimeout(r, ms));
      for (const n of ['push', 'through', 'flip', 'gen', 'rails', 'coils', 'self']) { try { F.applyPreset(n); } catch (e) { continue; } F.go(3); await pause(100); }
      F.applyPreset('push'); await pause(200);
    })()` },
  ],
};
