'use strict';
/* Building a Solar System, chapter 4: the giant impact stage, an N-body run of the Sun, Jupiter, Saturn and the rocky protoplanets.
   The demo plays back runs made with this file (demos/solar-system-formation-data/); it is too slow to run in a browser.

   Units: AU, Julian years; a body's mass is carried as its GM in AU³/yr².
   Integrator: Wisdom–Holman in democratic heliocentric coordinates (Duncan, Levison and Lee 1998, AJ 116, 2067): heliocentric
   positions, barycentric velocities; each step is half a kick from the bodies' pulls on one another, half a drift for the Sun's
   motion, a Kepler orbit round the Sun solved exactly (universal variables), then the same halves again. It is symplectic, so the
   energy error stays bounded over the hundred million years of the run.
   Close encounters: when two bodies would come within ENC mutual Hill radii during a step, or a body is within SUN_NEAR of the Sun,
   that whole step is done instead by a direct integration of every body (Dormand–Prince 5(4), adaptive, tight tolerance), with the
   substeps also kept short enough that a collision is caught at contact. This is the idea of the hybrid integrators (Chambers 1999,
   MNRAS 304, 793), done simply: the step is switched for all bodies, not just the pair.
   Collisions: two bodies that touch merge into one, keeping their mass and momentum (perfect merging, as in Kokubo, Genda and Ida
   2006, ApJ 642, 1131). Real impacts can also hit and run or spray debris (Kokubo and Genda 2010); that is left out. Each impact is
   recorded with its speed, the mutual escape speed and the impact angle (0° head on, 90° grazing).
   A body that comes within the Sun's radius falls into it; one beyond 100 AU on an unbound orbit is ejected. */

const path = require('node:path');
const { core } = require(path.resolve(__dirname, '../../curriculum/validation/demo_source.cjs'));

function make(opt) {
  const C = opt.C;   /* constants from the demo's core: GM (Sun, AU³/yr²), M_SUN, M_EARTH, AU */
  const GMS = C.GM, ME = C.GM * C.M_EARTH / C.M_SUN;   /* GM of one Earth mass in AU³/yr² */
  const ENC = opt.enc || 3, SUN_NEAR = 0.15, R_SUN = 6.957e8 / C.AU, EJECT = 100;
  /* ---------- Stumpff functions and the Kepler drift (universal variables) ---------- */
  function stumpff(z, out) {   /* out[0] = c2(z), out[1] = c3(z) */
    if (z > 1e-3) { const s = Math.sqrt(z); out[0] = (1 - Math.cos(s)) / z; out[1] = (s - Math.sin(s)) / (s * z); }
    else if (z < -1e-3) { const s = Math.sqrt(-z); out[0] = (Math.cosh(s) - 1) / -z; out[1] = (Math.sinh(s) - s) / (s * -z); }
    else { out[0] = 1 / 2 - z / 24 + z * z / 720 - z * z * z / 40320; out[1] = 1 / 6 - z / 120 + z * z / 5040 - z * z * z / 362880; }
  }
  const cs = new Float64Array(2);
  /* drift body at offset k of x (positions) and v (velocities) for time dt round mu; returns false if it failed to converge */
  function kepler(x, v, k, mu, dt) {
    const x0 = x[k], y0 = x[k + 1], z0 = x[k + 2], vx = v[k], vy = v[k + 1], vz = v[k + 2];
    const r0 = Math.sqrt(x0 * x0 + y0 * y0 + z0 * z0), v2 = vx * vx + vy * vy + vz * vz, rv = x0 * vx + y0 * vy + z0 * vz;
    const alpha = 2 / r0 - v2 / mu, smu = Math.sqrt(mu), d0 = rv / smu;
    let chi = smu * dt / r0;   /* a good start when dt is short next to the orbit, as here */
    let ok = false;
    for (let it = 0; it < 60; it++) {   /* Laguerre–Conway iteration (n = 5) */
      const c2c3 = stumpff(alpha * chi * chi, cs), c2 = cs[0], c3 = cs[1], chi2 = chi * chi;
      const F = d0 * chi2 * c2 + (1 - alpha * r0) * chi2 * chi * c3 + r0 * chi - smu * dt;
      const Fp = d0 * chi * (1 - alpha * chi2 * c3) + (1 - alpha * r0) * chi2 * c2 + r0;
      const Fpp = d0 * (1 - alpha * chi2 * c2) + (1 - alpha * r0) * chi * (1 - alpha * chi2 * c3);
      const n = 5, disc = Math.abs((n - 1) * (n - 1) * Fp * Fp - n * (n - 1) * F * Fpp);
      const den = Fp + Math.sign(Fp) * Math.sqrt(disc), d = n * F / den;
      chi -= d;
      if (Math.abs(d) < 1e-15 * Math.max(1, Math.abs(chi))) { ok = true; break; }
    }
    if (!ok) return false;
    stumpff(alpha * chi * chi, cs); const c2 = cs[0], c3 = cs[1], chi2 = chi * chi;
    const f = 1 - chi2 / r0 * c2, g = dt - chi2 * chi / smu * c3;
    const nx = f * x0 + g * vx, ny = f * y0 + g * vy, nz = f * z0 + g * vz, r = Math.sqrt(nx * nx + ny * ny + nz * nz);
    const fd = smu / (r * r0) * (alpha * chi2 * chi * c3 - chi), gd = 1 - chi2 / r * c2;
    x[k] = nx; x[k + 1] = ny; x[k + 2] = nz;
    v[k] = fd * x0 + gd * vx; v[k + 1] = fd * y0 + gd * vy; v[k + 2] = fd * z0 + gd * vz;
    return true;
  }
  /* ---------- orbital elements, heliocentric ---------- */
  function elements(x, y, z, vx, vy, vz, mu) {
    const r = Math.hypot(x, y, z), v2 = vx * vx + vy * vy + vz * vz, hx = y * vz - z * vy, hy = z * vx - x * vz, hz = x * vy - y * vx, h = Math.hypot(hx, hy, hz);
    const a = 1 / (2 / r - v2 / mu), rv = x * vx + y * vy + z * vz;
    const ex = (vy * hz - vz * hy) / mu - x / r, ey = (vz * hx - vx * hz) / mu - y / r, ez = (vx * hy - vy * hx) / mu - z / r, e = Math.hypot(ex, ey, ez);
    const inc = Math.acos(Math.max(-1, Math.min(1, hz / h))), node = Math.atan2(hx, -hy);
    const varpi = e > 1e-12 ? Math.atan2(ey, ex) : 0;   /* longitude of perihelion (for small inclinations) */
    let lam = 0;
    if (a > 0 && e < 1) { const cE = (1 - r / a) / e, sE = rv / (e * Math.sqrt(mu * a)), E = Math.atan2(sE, cE), M = E - e * Math.sin(E); lam = M + varpi; }
    return { a, e, inc, node, varpi, lam: ((lam % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI) };
  }
  /* position and velocity from elements (a, e, i, Ω, ω, M), heliocentric */
  function fromElements(a, e, inc, node, peri, M, mu) {
    let E = M; for (let k = 0; k < 50; k++) { const d = (E - e * Math.sin(E) - M) / (1 - e * Math.cos(E)); E -= d; if (Math.abs(d) < 1e-15) break; }
    const cE = Math.cos(E), sE = Math.sin(E), b = a * Math.sqrt(1 - e * e), n = Math.sqrt(mu / (a * a * a)), rr = a * (1 - e * cE);
    const px = a * (cE - e), py = b * sE, pvx = -a * n * sE / (1 - e * cE), pvy = b * n * cE / (1 - e * cE);
    const cO = Math.cos(node), sO = Math.sin(node), cw = Math.cos(peri), sw = Math.sin(peri), ci = Math.cos(inc), si = Math.sin(inc);
    const R = [cO * cw - sO * sw * ci, -cO * sw - sO * cw * ci, sO * cw + cO * sw * ci, -sO * sw + cO * cw * ci, sw * si, cw * si];
    return [R[0] * px + R[1] * py, R[2] * px + R[3] * py, R[4] * px + R[5] * py, R[0] * pvx + R[1] * pvy, R[2] * pvx + R[3] * pvy, R[4] * pvx + R[5] * pvy, rr];
  }

  /* ---------- the system ---------- */
  /* bodies: [{ id, name, m (Earth masses), R (AU), x[3], v[3] heliocentric }]: velocities are turned into barycentric ones */
  function system(bodies, dt) {
    const n = bodies.length, S = { n, t: 0, dt, id: [], name: [], mu: new Float64Array(n), R: new Float64Array(n), q: new Float64Array(3 * n), u: new Float64Array(3 * n), events: [], nWH: 0, nRK: 0, alive: n };
    let px = 0, py = 0, pz = 0, mt = GMS;
    bodies.forEach((b, i) => { S.id.push(b.id); S.name.push(b.name || ''); S.mu[i] = b.m * ME; S.R[i] = b.R; S.q.set(b.x, 3 * i); S.u.set(b.v, 3 * i); px += S.mu[i] * b.v[0]; py += S.mu[i] * b.v[1]; pz += S.mu[i] * b.v[2]; mt += S.mu[i]; });
    /* heliocentric velocity v_i = V_i − V_sun, with V_sun = −Σ μ_i V_i / μ_sun; so V_i = v_i − Σ μ_j v_j / μ_total */
    for (let i = 0; i < n; i++) { S.u[3 * i] -= px / mt; S.u[3 * i + 1] -= py / mt; S.u[3 * i + 2] -= pz / mt; }
    S.mass = Array.from({ length: n }, (_, i) => [S.id[i]]);   /* which starting bodies each one is made of */
    return S;
  }
  function kick(S, h) {
    const { n, mu, q, u } = S;
    for (let i = 0; i < n; i++) { if (!mu[i]) continue; const a = 3 * i;
      for (let j = i + 1; j < n; j++) { if (!mu[j]) continue; const b = 3 * j, dx = q[b] - q[a], dy = q[b + 1] - q[a + 1], dz = q[b + 2] - q[a + 2], r2 = dx * dx + dy * dy + dz * dz, f = h / (r2 * Math.sqrt(r2));
        u[a] += mu[j] * f * dx; u[a + 1] += mu[j] * f * dy; u[a + 2] += mu[j] * f * dz; u[b] -= mu[i] * f * dx; u[b + 1] -= mu[i] * f * dy; u[b + 2] -= mu[i] * f * dz; } }
  }
  function sunDrift(S, h) {
    const { n, mu, q, u } = S; let px = 0, py = 0, pz = 0;
    for (let i = 0; i < n; i++) { px += mu[i] * u[3 * i]; py += mu[i] * u[3 * i + 1]; pz += mu[i] * u[3 * i + 2]; }
    px *= h / GMS; py *= h / GMS; pz *= h / GMS;
    for (let i = 0; i < n; i++) { if (!mu[i]) continue; q[3 * i] += px; q[3 * i + 1] += py; q[3 * i + 2] += pz; }
  }
  /* does any pair come within ENC mutual Hill radii during the next step, or a body near the Sun? (straight line prediction) */
  function needsRK(S) {
    const { n, mu, q, u, dt } = S, ri = S._ri || (S._ri = new Float64Array(n)), hb = S._hb || (S._hb = new Float64Array(n));
    for (let i = 0; i < n; i++) { if (!mu[i]) continue; const a = 3 * i; ri[i] = Math.sqrt(q[a] * q[a] + q[a + 1] * q[a + 1] + q[a + 2] * q[a + 2]); if (ri[i] < SUN_NEAR) return true;
      hb[i] = Math.cbrt(mu[i] / (3 * GMS)); }
    for (let i = 0; i < n; i++) { if (!mu[i]) continue; const a = 3 * i;
      for (let j = i + 1; j < n; j++) { if (!mu[j]) continue; const b = 3 * j;
        const dx = q[b] - q[a], dy = q[b + 1] - q[a + 1], dz = q[b + 2] - q[a + 2], dvx = u[b] - u[a], dvy = u[b + 1] - u[a + 1], dvz = u[b + 2] - u[a + 2];
        /* the mutual Hill radius, rounded up: cbrt(μi + μj) ≤ cbrt μi + cbrt μj */
        const lim = ENC * (hb[i] + hb[j]) * 0.5 * (ri[i] + ri[j]) + S.R[i] + S.R[j], r2 = dx * dx + dy * dy + dz * dz;
        const v2 = dvx * dvx + dvy * dvy + dvz * dvz, far = lim + Math.sqrt(v2) * dt;
        if (r2 > far * far) continue;
        let tc = v2 > 0 ? -(dx * dvx + dy * dvy + dz * dvz) / v2 : 0; tc = Math.max(0, Math.min(dt, tc));
        const ex = dx + dvx * tc, ey = dy + dvy * tc, ez = dz + dvz * tc;
        if (ex * ex + ey * ey + ez * ez < lim * lim) return true; } }
    return false;
  }
  function whStep(S) {
    const h = S.dt; kick(S, h / 2); sunDrift(S, h / 2);
    for (let i = 0; i < S.n; i++) if (S.mu[i] && !kepler(S.q, S.u, 3 * i, GMS, h)) throw Error(`Kepler drift failed for body ${S.id[i]} at t = ${S.t}`);
    sunDrift(S, h / 2); kick(S, h / 2); S.t += h; S.nWH++;
  }
  /* ---------- the direct integration for a step with an encounter ---------- */
  /* state y: barycentric x, v of the Sun (index 0) and the bodies (1..n) */
  function toBary(S) {
    const { n, mu, q, u } = S, y = new Float64Array(6 * (n + 1)); let mt = GMS, sx = 0, sy = 0, sz = 0, px = 0, py = 0, pz = 0;
    for (let i = 0; i < n; i++) { mt += mu[i]; sx += mu[i] * q[3 * i]; sy += mu[i] * q[3 * i + 1]; sz += mu[i] * q[3 * i + 2]; px += mu[i] * u[3 * i]; py += mu[i] * u[3 * i + 1]; pz += mu[i] * u[3 * i + 2]; }
    const X0 = -sx / mt, Y0 = -sy / mt, Z0 = -sz / mt; y[0] = X0; y[1] = Y0; y[2] = Z0; y[3] = -px / GMS; y[4] = -py / GMS; y[5] = -pz / GMS;
    for (let i = 0; i < n; i++) { const k = 6 * (i + 1); y[k] = q[3 * i] + X0; y[k + 1] = q[3 * i + 1] + Y0; y[k + 2] = q[3 * i + 2] + Z0; y[k + 3] = u[3 * i]; y[k + 4] = u[3 * i + 1]; y[k + 5] = u[3 * i + 2]; }
    return y;
  }
  function fromBary(S, y) {
    for (let i = 0; i < S.n; i++) { const k = 6 * (i + 1); S.q[3 * i] = y[k] - y[0]; S.q[3 * i + 1] = y[k + 1] - y[1]; S.q[3 * i + 2] = y[k + 2] - y[2]; S.u[3 * i] = y[k + 3]; S.u[3 * i + 1] = y[k + 4]; S.u[3 * i + 2] = y[k + 5]; }
  }
  function deriv(S, y, dy) {
    const n = S.n + 1, mu = (i) => (i ? S.mu[i - 1] : GMS);
    for (let i = 0; i < n; i++) { const k = 6 * i; dy[k] = y[k + 3]; dy[k + 1] = y[k + 4]; dy[k + 2] = y[k + 5]; dy[k + 3] = 0; dy[k + 4] = 0; dy[k + 5] = 0; }
    for (let i = 0; i < n; i++) { const mi = mu(i); if (!mi) continue; const a = 6 * i;
      for (let j = i + 1; j < n; j++) { const mj = mu(j); if (!mj) continue; const b = 6 * j, dx = y[b] - y[a], dy_ = y[b + 1] - y[a + 1], dz = y[b + 2] - y[a + 2], r2 = dx * dx + dy_ * dy_ + dz * dz, f = 1 / (r2 * Math.sqrt(r2));
        dy[a + 3] += mj * f * dx; dy[a + 4] += mj * f * dy_; dy[a + 5] += mj * f * dz; dy[b + 3] -= mi * f * dx; dy[b + 4] -= mi * f * dy_; dy[b + 5] -= mi * f * dz; } }
  }
  /* Dormand–Prince 5(4) coefficients */
  const A = [[], [1 / 5], [3 / 40, 9 / 40], [44 / 45, -56 / 15, 32 / 9], [19372 / 6561, -25360 / 2187, 64448 / 6561, -212 / 729], [9017 / 3168, -355 / 33, 46732 / 5247, 49 / 176, -5103 / 18656], [35 / 384, 0, 500 / 1113, 125 / 192, -2187 / 6784, 11 / 84]];
  const B5 = [35 / 384, 0, 500 / 1113, 125 / 192, -2187 / 6784, 11 / 84, 0], B4 = [5179 / 57600, 0, 7571 / 16695, 393 / 640, -92097 / 339200, 187 / 2100, 1 / 40];
  const TOL = 1;
  /* the shortest time any pair (or a body and the Sun) needs to close a tenth of its distance: substeps stay below it */
  function hLimit(S, y) {
    let h = Infinity; const n = S.n + 1;
    for (let i = 0; i < n; i++) { if (i && !S.mu[i - 1]) continue; const a = 6 * i;
      for (let j = i + 1; j < n; j++) { if (!S.mu[j - 1]) continue; const b = 6 * j, dx = y[b] - y[a], dy = y[b + 1] - y[a + 1], dz = y[b + 2] - y[a + 2], dvx = y[b + 3] - y[a + 3], dvy = y[b + 4] - y[a + 4], dvz = y[b + 5] - y[a + 5];
        const r = Math.sqrt(dx * dx + dy * dy + dz * dz), v = Math.sqrt(dvx * dvx + dvy * dvy + dvz * dvz) + 1e-30, rr = r - (i ? S.R[i - 1] : R_SUN) - S.R[j - 1];
        h = Math.min(h, 0.1 * Math.max(rr, 0.02 * r) / v); } }
    return h;
  }
  function rkStep(S) {
    let y = toBary(S), t = 0, h = Math.min(S.dt, S.hRK || S.dt);
    const N = y.length, k = Array.from({ length: 7 }, () => new Float64Array(N)), yt = new Float64Array(N), y5 = new Float64Array(N);
    while (t < S.dt) {
      h = Math.min(h, S.dt - t, hLimit(S, y));
      deriv(S, y, k[0]);
      for (let s = 1; s < 7; s++) { for (let m = 0; m < N; m++) { let acc = y[m]; for (let r = 0; r < s; r++) acc += h * A[s][r] * k[r][m]; yt[m] = acc; } deriv(S, yt, k[s]); }
      let err = 0;
      for (let m = 0; m < N; m++) { let s5 = y[m], s4 = y[m]; for (let r = 0; r < 7; r++) { s5 += h * B5[r] * k[r][m]; s4 += h * B4[r] * k[r][m]; } y5[m] = s5;
        const sc = 1e-12 + Math.abs(s5) * 1e-12; err = Math.max(err, Math.abs(s5 - s4) / sc); }   /* about 1e-12 relative, AU and AU/yr */
      if (err <= TOL || h < 1e-12) {
        t += h; y = Float64Array.from(y5); S.nRK++;
        if (collide(S, y, S.t + t)) { /* bodies were merged: the arrays changed, keep going with the merged system */ }
        h *= Math.min(5, 0.9 * Math.pow(TOL / Math.max(err, 1e-300), 0.2));
      } else h *= Math.max(0.1, 0.9 * Math.pow(TOL / err, 0.2));
    }
    S.hRK = h; fromBary(S, y); S.t += S.dt;
  }
  /* merge touching pairs in barycentric state y at time t; record each impact */
  function collide(S, y, t) {
    let any = false; const n = S.n;
    for (let i = 0; i < n; i++) { if (!S.mu[i]) continue; const a = 6 * (i + 1);
      /* into the Sun, or ejected */
      const hx = y[a] - y[0], hy = y[a + 1] - y[1], hz = y[a + 2] - y[2], hr = Math.hypot(hx, hy, hz);
      if (hr < R_SUN + S.R[i]) { S.events.push({ t, kind: 'sun', id: S.id[i], m: S.mu[i] / ME }); absorbSun(S, y, i); any = true; continue; }
      for (let j = i + 1; j < n; j++) { if (!S.mu[j]) continue; const b = 6 * (j + 1);
        const dx = y[b] - y[a], dy = y[b + 1] - y[a + 1], dz = y[b + 2] - y[a + 2], r = Math.hypot(dx, dy, dz), Rs = S.R[i] + S.R[j];
        if (r >= Rs) continue;
        const dvx = y[b + 3] - y[a + 3], dvy = y[b + 4] - y[a + 4], dvz = y[b + 5] - y[a + 5], v = Math.hypot(dvx, dvy, dvz);
        /* back up along the straight line to the moment of contact */
        const rv = dx * dvx + dy * dvy + dz * dvz, disc = rv * rv - v * v * (r * r - Rs * Rs), tb = (rv + Math.sqrt(Math.max(0, disc))) / (v * v);
        const cx = dx - dvx * tb, cy = dy - dvy * tb, cz = dz - dvz * tb, cr = Math.hypot(cx, cy, cz);
        const cosA = Math.abs(cx * dvx + cy * dvy + cz * dvz) / (cr * v), angle = Math.acos(Math.min(1, cosA)) * 180 / Math.PI;
        const vesc = Math.sqrt(2 * (S.mu[i] + S.mu[j]) / Rs);
        const big = S.mu[i] >= S.mu[j] ? i : j, small = big === i ? j : i;
        /* the impact as seen from the bigger body: where the smaller one is (contact), and its velocity, AU and AU/yr */
        const sgn = big === i ? 1 : -1;
        S.events.push({ t, kind: 'merge', target: S.id[big], impactor: S.id[small], mT: S.mu[big] / ME, mI: S.mu[small] / ME, vImp: v, vEsc: vesc, angle,
          rel: { x: [sgn * cx, sgn * cy, sgn * cz], v: [sgn * dvx, sgn * dvy, sgn * dvz] }, a: elementsOf(S, y, big).a });
        merge(S, y, big, small); any = true;
        if (!S.mu[i]) break;
      }
    }
    return any;
  }
  function elementsOf(S, y, i) { const a = 6 * (i + 1); return elements(y[a] - y[0], y[a + 1] - y[1], y[a + 2] - y[2], y[a + 3] - y[3], y[a + 4] - y[4], y[a + 5] - y[5], GMS + S.mu[i]); }
  function merge(S, y, i, j) {
    const a = 6 * (i + 1), b = 6 * (j + 1), mi = S.mu[i], mj = S.mu[j], m = mi + mj;
    for (let c = 0; c < 6; c++) y[a + c] = (mi * y[a + c] + mj * y[b + c]) / m;
    S.mu[i] = m; S.mu[j] = 0; for (let c = 0; c < 6; c++) y[b + c] = 0;
    /* the merged body's radius: the two volumes added (same density) */
    S.R[i] = Math.cbrt(S.R[i] ** 3 + S.R[j] ** 3); S.R[j] = 0;
    S.mass[i] = S.mass[i].concat(S.mass[j]); S.mass[j] = []; S.alive--;
  }
  function absorbSun(S, y, i) {
    const a = 6 * (i + 1), mi = S.mu[i], m = GMS + mi;   /* the Sun keeps its GM (the body's mass is tiny next to it); momentum is kept */
    for (let c = 3; c < 6; c++) y[c] = (GMS * y[c] + mi * y[a + c]) / m;
    S.mu[i] = 0; S.R[i] = 0; S.mass[i] = []; S.alive--; for (let c = 0; c < 6; c++) y[a + c] = 0;
  }
  function ejectCheck(S) {
    for (let i = 0; i < S.n; i++) { if (!S.mu[i]) continue; const k = 3 * i, r = Math.hypot(S.q[k], S.q[k + 1], S.q[k + 2]);
      if (r > EJECT) { const v2 = S.u[k] ** 2 + S.u[k + 1] ** 2 + S.u[k + 2] ** 2; if (v2 / 2 - GMS / r > 0) { S.events.push({ t: S.t, kind: 'ejected', id: S.id[i], m: S.mu[i] / ME }); S.mu[i] = 0; S.R[i] = 0; S.mass[i] = []; S.alive--; } } }
  }
  function step(S) { if (needsRK(S)) rkStep(S); else whStep(S); }
  /* total energy (for checks): kinetic in barycentric velocities plus all pair potentials, Sun included */
  function energy(S) {
    const y = toBary(S), n = S.n + 1, mu = (i) => (i ? S.mu[i - 1] : GMS); let E = 0;
    for (let i = 0; i < n; i++) { const m = mu(i); if (!m) continue; const k = 6 * i; E += 0.5 * m * (y[k + 3] ** 2 + y[k + 4] ** 2 + y[k + 5] ** 2);
      for (let j = i + 1; j < n; j++) { const mj = mu(j); if (!mj) continue; const b = 6 * j; E -= m * mj / Math.hypot(y[b] - y[k], y[b + 1] - y[k + 1], y[b + 2] - y[k + 2]); } }
    return E;
  }
  function snapshot(S) {
    const y = toBary(S), out = [];
    for (let i = 0; i < S.n; i++) { if (!S.mu[i]) continue; const el = elementsOf(S, y, i); out.push({ id: S.id[i], m: S.mu[i] / ME, R: S.R[i], ...el, of: S.mass[i].slice() }); }
    return out;
  }
  return { GMS, ME, R_SUN, kepler, elements, fromElements, system, step, whStep, rkStep, needsRK, energy, snapshot, ejectCheck };
}

const C = core('solar-system-formation', 'GM,M_SUN,M_EARTH,AU,makeGrowth,growTo,frostLine');

/* The start of the giant impact stage: the rocky protoplanets that the demo's growth model (chapter 3, the minimum mass disk,
   gas lasting 3 million years) has made inside the frost line when the gas is gone, with Jupiter and Saturn on today's orbits.
   Each protoplanet gets small random eccentricity and inclination (Rayleigh, rms 0.01 and 0.005 rad as in Kokubo, Genda and Ida
   2006) and random angles. Density 3000 kg/m³ for the radii (the same paper). Jupiter and Saturn: J2000 elements (Standish,
   JPL), masses from their IAU 2015 GM, equatorial radii (NASA fact sheets). Returns heliocentric bodies in AU and AU/yr. */
const T_GAS = 3e6, RHO_EMB = 3000;
const GIANTS = [   /* id, name, a, e, I (°), L, long. perihelion, long. node (°), GM (m³/s²), radius (km) */
  [101, 'Jupiter', 5.20288700, 0.04838624, 1.30439695, 34.39644051, 14.72847983, 100.47390909, 1.2668653e17, 71492],
  [102, 'Saturn', 9.53667594, 0.05386179, 2.48599187, 49.95424423, 92.59887831, 113.66242448, 3.7931188e16, 60268]];
function startBodies(K, seed) {
  const D = C.makeGrowth(1, 1, T_GAS / 1e6, 2203); C.growTo(D, T_GAS);
  const inner = D.B.filter((b) => b.a < C.frostLine(1));
  let s = seed >>> 0 || 1; const R = () => { s = (s * 16807) % 2147483647; return s / 2147483647; };
  const ray = (rms) => rms * Math.sqrt(-Math.log(1 - R()));   /* Rayleigh with mean square rms² */
  const rad = (m) => Math.cbrt(3 * m * C.M_EARTH / (4 * Math.PI * RHO_EMB)) / C.AU;
  const B = inner.map((b, i) => { const p = K.fromElements(b.a, ray(0.01), ray(0.005), 2 * Math.PI * R(), 2 * Math.PI * R(), 2 * Math.PI * R(), K.GMS + b.m * K.ME);
    return { id: i + 1, m: b.m, R: rad(b.m), x: p.slice(0, 3), v: p.slice(3, 6) }; });
  const dg = Math.PI / 180, GMearth = 3.986004e14;
  for (const [id, name, a, e, inc, L, lp, ln, gm, Rkm] of GIANTS) { const m = gm / GMearth, p = K.fromElements(a, e, inc * dg, ln * dg, (lp - ln) * dg, (L - lp) * dg, K.GMS + m * K.ME);
    B.push({ id, name, m, R: Rkm * 1000 / C.AU, x: p.slice(0, 3), v: p.slice(3, 6) }); }
  return B;
}
function startText(K, B, o) {
  const L = [[o.dt, o.t0, o.tEnd, o.every, K.GMS, K.ME, K.R_SUN, o.enc || 3].map((v) => v.toPrecision(17)).join(' ')];
  for (const b of B) L.push([b.id, b.m.toPrecision(17), b.R.toPrecision(17), ...b.x.map((v) => v.toPrecision(17)), ...b.v.map((v) => v.toPrecision(17))].join(' '));
  return L.join('\n') + '\n';
}
module.exports = { make: (o) => make(Object.assign({ C }, o || {})), C, startBodies, startText, T_GAS, RHO_EMB, GIANTS };
